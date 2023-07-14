<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="breed-information">
        <!-- <h4>About Us</h4> -->
        <!-- <p>
          Our brand started as a small family business in 2021. Since then we've
          grown a lot and now know for sure what you and your pup need. So both
          of you can enjoy exploring the world together.
        </p> -->
        <h3>Enjoy Your Walks Every Day, Rain or Shine</h3>
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

/* div.breed-information {
  padding: 2rem;
} */

div.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

div.image-container img {
  width: 600px;
  /* height: 500px; */
}

h3 {
  font-size: 2.5rem;
  color: #3f7270;
  text-align: center;
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
  width: 300px;
}
</style>
