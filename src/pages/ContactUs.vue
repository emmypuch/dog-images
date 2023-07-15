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
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
h3 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #3f7270;
  margin-top: 8rem;
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
  outline: none;
}

@media screen and (max-width: 768px) {
  div.wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
  }

  h3 {
    font-size: 1.8rem;
    margin-top: 4rem;
    margin-left: 0rem;
    text-align: center;
  }
}
</style>
