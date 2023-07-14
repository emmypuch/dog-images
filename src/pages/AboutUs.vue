<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="image-container">
        <img :src="Image" alt="dog image" />
      </div>

      <div class="breed-information">
        <h6>Adoption Guide</h6>
        <p>
          Our dogs have undergone rigorous obedience training, and we have
          specifically trained some to be service dogs as well as security dogs.
          To adopt this dog, shoot us an email at
          <a href="mailto: adesuyiomowunmi@gmail.com">Adopt Dogs</a> with a
          picture of the dog and let us get started with the adoption process.
          You are going to love having this dog in your life. Thank you, and
          speak soon 🙂
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const Image = require("../assets/images/dog2.png");

import Header from "../components/Header.vue";

export default {
  data() {
    return {
      Image,
    };
  },
  components: {
    Header,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f2e6dc;
  height: 100vh;
}

div.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  padding: 2rem;
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
  width: 400px;
  height: 400px;
  border-radius: 20px;
}

h6 {
  font-size: 1.5rem;
  color: #124a44;
  font-weight: 700;
  text-align: center;
}

div.breed-information p {
  font-size: 1.1rem;
  margin-top: 15px;
  color: #334645;
  line-height: 2.5;
  text-align: justify;
}

a {
  text-decoration: none;
  color: #0f9a96;
}
</style>
