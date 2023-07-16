import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    dogs: [],
    breeds: [],
    loading: false,
    doesNotExist: null,
  },

  mutations: {
    GET_ALL_DOGS(state, dogs) {
      state.dogs = dogs;
    },
    GET_LOADING_STATUS(state, loading) {
      state.loading = loading;
    },
    GET_DOG_BREEDS(state, breeds) {
      state.breeds = breeds;
    },
    GET_DOES_NOT_EXIST(state, doesNotExist) {
      state.doesNotExist = doesNotExist;
    },
  },

  actions: {
    // Define your actions here
    async fetchDogs({ commit, state }, breed) {
      try {
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
        commit("GET_DOES_NOT_EXIST", null);

        if (!state.breeds.length) {
          const breeds = [...new Set(dogs.map((dog) => dog.breed))];
          commit("GET_DOG_BREEDS", breeds);
        }
      } catch (error) {
        if (error.response.data.code) {
          commit("GET_DOES_NOT_EXIST", "Does not exist");
        }
      }
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
