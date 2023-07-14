<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Header />
    <h2>Welcome boss,</h2>
    <div class="search-bar">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search for breed..."
      />
    </div>
    <!-- <div class="select-breeds">
      <select name="" id="custom-select" v-model="selectedBreed">
        <option value="">All</option>
        <option v-for="breed in getBreeds" :key="breed" :value="breed">
          {{ breed }}
        </option>
      </select>
    </div> -->
    <div class="dog-images_container">
      <div class="dog-images">
        <div v-for="dog in paginatedDogs" :key="dog.url">
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
import VLazyImage from "v-lazy-image";
import Header from "../components/Header.vue";
import Pagination from "../components/Paginator.vue";

export default {
  components: { Pagination, Header, "v-lazy-image": VLazyImage },
  mounted() {
    this.$store.dispatch("fetchDogs");
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
  },
};
</script>

<style scoped>
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
  min-width: 60ch;
  max-width: 50ch;
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

div.select-breeds select {
  outline: none;
  color: #0a3934;
  width: 100%;
  min-width: 11ch;
  max-width: 20ch;
  margin-left: 10px;
  border: 1px solid #0a3934;
  border-radius: 0.25em;
  padding: 10px 25px;
  font-size: 0.9rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
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

@media screen and (max-width: 768px) {
  h2,
  div.search-bar {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-left: 1.5rem;
  }

  div.search-bar {
    margin-top: 10px;
  }

  div.search-bar input {
    width: 100%;
    min-width: 30ch;
    max-width: 25ch;
  }

  div.dog-images_container .dog-images {
    padding: 0rem;
  }
}
</style>
