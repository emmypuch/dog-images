<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="breed-information">
        <h3>Enjoy Your Walks Every Day, Rain or Shine 😁</h3>
        <div class="btn">
          <a href="mailto:adesuyiomowunmi@gmail.com">Say Hello 👋</a>
        </div>
      </div>
      <div class="image-container">
        <img :src="Image" alt="dog image" />
      </div>
    </div>
  </div>
</template>

<script>
const Image = require("../assets/images/dog3.png");

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
div.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  margin-top: 4rem;
}

div.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

div.image-container img {
  width: 650px;
}

h3 {
  font-size: 2.5rem;
  color: #3f7270;
  text-align: center;
  margin-top: 4rem;
  margin-left: 3rem;
}

div.breed-information a {
  text-decoration: none;
  border: 1px solid #3f7270;
  padding: 10px 30px;
  border-radius: 100px;
  background-color: transparent;
  font-size: 1.2rem;
  margin-top: 15px;
  color: #7f9a96;
  line-height: 2.5;
  text-align: center;
  width: 200px;
}

@media screen and (max-width: 768px) {
  div.wrapper {
    display: flex;
    flex-direction: column;
  }

  div.image-container {
    margin-top: 30px;
  }

  div.image-container img {
    width: 450px;
  }

  h3 {
    font-size: 1.8rem;
    margin-top: 0rem;
    margin-left: 0rem;
  }
}
</style>
