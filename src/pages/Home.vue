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

<style>
h2,
div.search-bar {
  display: flex;
  justify-content: center;
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
</style>
