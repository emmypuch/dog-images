<template>
  <div>
    <div class="btn">
      <button @click="prevPage" class="prev-btn">Previous</button>
      <button @click.prevent="nextPage" class="next-btn">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pagination",
  props: ["totalPages", "nextPage", "prevPage"],
};
</script>

<style>
div.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  margin-top: 5px;
}

button.prev-btn {
  background-color: transparent;
  color: #3f7270;
  padding: 10px 30px;
  font-size: 1rem;
  text-align: center;
  outline: none;
  border: 1px solid #3f7270;
  border-radius: 50px;
  cursor: pointer;
}

button.next-btn {
  margin-left: 15px;
  color: #3f7270;
  background-color: transparent;
  padding: 10px 30px;
  font-size: 1rem;
  text-align: center;
  outline: none;
  border: 2px solid #3f7270;
  border-radius: 50px;
  cursor: pointer;
}
</style>
