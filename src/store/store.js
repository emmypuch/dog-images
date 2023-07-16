import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    // Define your state here
    dogs: [],
    breeds: [],
    loading: false,
  },
  mutations: {
    // Define your mutations here
    GET_ALL_DOGS(state, dogs) {
      state.dogs = dogs;
    },
    GET_LOADING_STATUS(state, loading) {
      state.loading = loading;
    },
    GET_DOG_BREEDS(state, breeds) {
      state.breeds = breeds;
    },
  },
  actions: {
    // Define your actions here
    async fetchDogs({ commit }, breed) {
      const dogsResponse = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images`
      );
      const dogs = dogsResponse.data.message.map((dog) => {
        return {
          breed: dog.split("/")[4],
          url: dog,
        };
      });
      commit("GET_ALL_DOGS", dogs);

      // Extract unique breeds from the dogs list
      const breeds = [...new Set(dogs.map((dog) => dog.breed))];
      commit("GET_DOG_BREEDS", breeds);
    },
    async getDogBreeds({ commit }) {
      const dogBreeds = await axios.get("https://dog.ceo/api/breeds/list/all");

      const breeds = dogBreeds.data.message;
      const breedList = Object.keys(breeds);

      commit("GET_DOG_BREEDS", breedList);
    },
  },
  getters: {
    // Define your getters here
  },
});

export default store;
