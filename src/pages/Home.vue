<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Header />
    <h2>Welcome boss,</h2>

    <div class="search-container">
      <div class="search-bar">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search for breed..."
        />
        <button id="clear" @click="clearSearch">Clear</button>
      </div>

      <div class="select-breeds">
        <select name="" id="custom-select" v-model="selectedBreed">
          <option value="">All</option>
          <option
            v-for="breed in $store.state.breeds"
            :key="breed"
            :value="breed"
          >
            {{ breed }}
          </option>
        </select>
      </div>
    </div>

    <div class="dog-images_container">
      <div class="exist" v-if="paginatedDogs.length === 0 || !paginatedDogs">
        Breed is empty
      </div>

      <div class="dog-images">
        <div
          v-for="dog in paginatedDogs"
          :key="dog.url"
          class="dog-image-container"
        >
          <router-link :to="`/breedinfo/${encodeURIComponent(dog.url)}`">
            <v-lazy-image :src="dog.url" alt="dog breed picture" />
          </router-link>
        </div>
      </div>
    </div>

    <Pagination
      :totalPages="totalPages"
      :currentPage="currentPage"
      :nextPage="nextPage"
      :prevPage="prevPage"
    />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import VLazyImage from "v-lazy-image";
import Pagination from "../components/Paginator.vue";

export default {
  components: { Header, Pagination, "v-lazy-image": VLazyImage },

  mounted() {
    // Retrieve data from local storage on component mount
    const storedData = localStorage.getItem("componentData");
    if (storedData) {
      const data = JSON.parse(storedData);
      this.searchQuery = data.searchQuery;
      this.selectedBreed = data.selectedBreed;
      this.currentPage = data.currentPage;
    }

    this.$store.dispatch("fetchDogs", this.selectedBreed || "hound");
    this.$store.dispatch("getDogBreeds");
  },

  watch: {
    selectedBreed(newBreed) {
      if (newBreed == "") {
        this.$store.dispatch("fetchDogs", "hound");
      } else {
        this.$store.dispatch("fetchDogs", newBreed);
      }
      // Save data to local storage when selectedBreed changes
      this.saveDataToLocalStorage();
    },
    // eslint-disable-next-line no-unused-vars
    searchQuery(newQuery) {
      this.saveDataToLocalStorage();
    },
    // eslint-disable-next-line no-unused-vars
    currentPage(newPage) {
      this.saveDataToLocalStorage();
    },
  },

  computed: {
    getDogs() {
      return this.$store.state.dogs;
    },

    getBreeds() {
      return this.$store.state.breeds;
    },

    paginatedDogs() {
      let filteredDogs = this.getDogs;

      if (this.selectedBreed) {
        filteredDogs = filteredDogs.filter(
          (dog) => dog.breed === this.selectedBreed
        );
      }

      if (this.searchQuery) {
        filteredDogs = filteredDogs.filter((dog) =>
          dog.breed.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
        this.$store.dispatch("fetchDogs", this.searchQuery);
      }

      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return filteredDogs.slice(start, end);
    },

    totalPages() {
      return Array.from(
        { length: Math.ceil(this.getDogs.length / this.itemsPerPage) },
        (_, i) => i + 1
      );
    },
  },

  data() {
    return {
      itemsPerPage: 100,
      currentPage: 1,
      maxPerPage: 3,
      searchQuery: "",
      selectedBreed: "",
      allbreeds: [],
    };
  },

  methods: {
    pageChanged(page) {
      this.currentPage = page;
    },

    nextPage() {
      if (
        this.currentPage == this.totalPages.length ||
        this.paginatedDogs.length < 100
      )
        return;
      this.currentPage += 1;
    },

    prevPage() {
      if (this.currentPage == 1) return;
      this.currentPage -= 1;
    },

    handleBreedSelect() {
      if (!this.selectedBreed) return;
      this.$store.dispatch("fetchDogs", this.selectedBreed);
      this.clearSearch();
      // Save data to local storage
      this.saveDataToLocalStorage();
    },

    clearSearch() {
      this.searchQuery = "";
      this.selectedBreed = "";
      // Save data to local storage
      this.saveDataToLocalStorage();
    },

    // Save data to local storage
    saveDataToLocalStorage() {
      const data = {
        searchQuery: this.searchQuery,
        selectedBreed: this.selectedBreed,
        currentPage: this.currentPage,
      };
      localStorage.setItem("componentData", JSON.stringify(data));
    },
  },
};
</script>

<style scoped>
button#clear {
  background-color: transparent;
  border-radius: 50px;
  padding: 4px;
  outline: none;
  border: 1px solid #3f7270;
  text-align: center;
  font-size: 0.7rem;
  color: #3f7270;
  margin-left: 3px;
  cursor: pointer;
  position: relative;
  right: 40px;
}
/* div.search-container {
  display: flex;
  place-content: center;
  place-items: center;
} */

h2,
div.search-bar {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}

h2 {
  font-size: 2rem;
  color: #3f7270;
}

div.search-bar {
  margin-top: 20px;
}

div.search-bar input {
  padding: 10px 30px;
  border-radius: 50px;
  width: 100%;
  min-width: 55ch;
  max-width: 45ch;
  border: 1px solid #3f7270;
  background: transparent;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #3f7270;
  font-size: 1rem;
  line-height: 1.1;
}

::placeholder {
  color: #3f7270;
  font-size: 1rem;
}

div.select-breeds {
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

div.select-breeds select {
  outline: none;
  color: #3f7270;
  width: 100%;
  min-width: 20ch;
  max-width: 30ch;
  margin-left: 10px;
  border: 1px solid #3f7270;
  border-radius: 50px;
  padding: 7px 10px;
  font-size: 0.9rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: transparent;
}

div.dog-images_container .dog-images {
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin-top: 40px;
  padding: 2rem;
}

img {
  width: 160px;
  height: 150px;
  border-radius: 50px;
}

.v-lazy-image {
  filter: blur(20px);
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}

.exist {
  text-align: center;
  margin-top: 70px;
  font-size: 1.5rem;
  color: rgb(105, 40, 40);
}

@media screen and (max-width: 768px) {
  h2 {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-left: 2rem;
  }

  div.search-bar {
    margin-top: 5px;
    margin-left: 35px;
  }

  div.search-bar input {
    width: 100%;
    min-width: 30ch;
    max-width: 25ch;
  }

  div.select-breeds {
    margin-top: 5px;
  }

  div.dog-images_container .dog-images {
    padding: 0rem;
  }
}

@media screen and (max-width: 320px) {
  img {
    width: 140px;
    height: 140px;
  }
}
</style>
