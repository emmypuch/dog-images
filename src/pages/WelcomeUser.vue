<template>
  <div class="container">
    <div class="container-image">
      <img :src="Image" alt="dog image" />
    </div>
    <div class="container-image_text">
      <h1>Doggie pet store</h1>
      <p>
        Welcome to doggie pet store! We are here to give you the best, trained
        dogs.
      </p>
      <div class="btn">
        <router-link to="/home">
          <button class="custom-button">Get started</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const Image = require("../assets/images/dog.png");

export default {
  data() {
    return {
      Image,
    };
  },
};
</script>

<style>
div.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 2rem;
}

div.container-image img {
  width: 400px;
  max-width: 100%;
}

div.container-image_text h1 {
  color: #3f7270;
  font-size: 4rem;
  text-align: center;
}

div.container-image_text p {
  margin-top: 12px;
  color: #3f7270;
  font-size: 1.2rem;
  text-align: justify;
  line-height: 1.5;
}

div.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.custom-button {
  background-color: #dafd71;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  color: #3f7270;
  outline: none;
  border: 1px solid #3f7270;
  border-radius: 50px;
  font-size: 1.2rem;
  width: 300px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.custom-button:hover {
  background-color: #bcd869;
}

@media screen and (max-width: 768px) {
  div.container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  div.container-image img {
    max-width: 80%;
  }

  div.container-image_text h1 {
    font-size: 2.2rem;
  }

  div.container-image_text p {
    margin-top: 10px;
    font-size: 1.2rem;
  }

  .custom-button {
    font-size: 1.2rem;
  }
}
</style>
