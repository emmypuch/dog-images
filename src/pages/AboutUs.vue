<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="image-container">
        <img :src="Image" alt="dog image" />
      </div>

      <div class="breed-information">
        <h4>About Us</h4>
        <p>
          Our brand started as a small family business in 2021. Since then we've
          grown a lot and now know for sure what you and your pup need. So both
          of you can enjoy exploring the world together.
        </p>
        <p>
          Our brand started as a small family business in 2021. Since then we've
          grown a lot and now know for sure what you and your pup need. So both
          of you can enjoy exploring the world together.
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

<style scoped>
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
  width: 550px;
  height: 500px;
}

h4 {
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
    display: flex;
    flex-direction: column;
    padding: 0.8rem;
  }

  div.breed-information {
    padding: 0.8rem;
  }

  div.image-container {
    margin-top: 0px;
  }

  div.image-container img {
    width: 350px;
    height: 300px;
  }

  h4 {
    font-size: 2rem;
  }

  div.breed-information p {
    font-size: 1.2rem;
  }
}
</style>
