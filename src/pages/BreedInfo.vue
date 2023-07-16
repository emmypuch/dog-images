<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="image-container">
        <img
          :src="decodeURIComponent(dogUrl)"
          alt="dog breed picture"
          :style="imageStyle"
          ref="dogImage"
        />
      </div>

      <div class="breed-information">
        <h6>Adoption Guide</h6>
        <p>
          Our dogs have undergone rigorous obedience training, and we have
          specifically trained some to be service dogs as well as security dogs.
          To adopt this dog, shoot us an email with a picture of the dog and let
          us get started with the adoption process. You are going to love having
          this dog in your life. Thank you, and speak soon 🙂
        </p>
      </div>
    </div>
    <div id="overlay">
      <button @click="applyFilter('sepia')">Apply Sepia</button>
      <button @click="applyFilter('grayscale')">Apply Grayscale</button>
      <button @click="applyFilter('remove')">Remove Filter</button>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
    // eslint-disable-next-line vue/no-unused-components
  },
  props: ["dogUrl"],
  data() {
    return {
      imageStyle: {},
    };
  },

  methods: {
    applyFilter(filter) {
      if (filter === "sepia") {
        this.imageStyle = {
          filter: "sepia(100%)",
        };
      } else if (filter === "grayscale") {
        this.imageStyle = {
          filter: "grayscale(100%)",
        };
      } else if (filter === "remove") {
        this.imageStyle = {
          filter: "url(#remove)",
        };
      }
    },
  },
};
</script>

<style scoped>
#overlay {
  display: flex;
  margin-left: 10rem;
  margin-top: 10px;
}

#overlay button {
  margin: 5px;
  padding: 8px 16px;
  background-color: #0a3934;
  color: #d2e4e3;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

#overlay button:hover {
  background-color: #13504a;
}
div.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  padding: 2rem;
  margin-top: 3rem;
}

div.breed-information {
  padding: 2rem;
}

div.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

div.image-container img {
  width: 450px;
  height: 400px;
  border-radius: 50px;
}

h6 {
  font-size: 2.5rem;
  color: #3f7270;
}

div.breed-information p {
  font-size: 1.2rem;
  margin-top: 15px;
  color: #7f9a96;
  line-height: 2.5;
  text-align: justify;
}

@media screen and (max-width: 768px) {
  div.wrapper {
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
  }

  div.image-container img {
    width: 300px;
    height: 300px;
  }

  h6 {
    font-size: 2rem;
  }

  div.breed-information p {
    font-size: 1.2rem;
    padding-bottom: 0.5em;
  }

  #overlay {
    display: flex;
    justify-content: center;
    margin-left: 0rem;
    margin-top: 5px;
  }
  #overlay {
    padding-bottom: 7px;
  }
}
</style>
