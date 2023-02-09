<template>
  <div>
    <div>
      <h2 class="text-center mb-5">Usporedba svih pasa</h2>
    </div>
    Odabir oca:
    <select v-model="sortby" class="text-right m-1">
      <option
        value="dogName"
        v-for="dog in dogs"
        :key="JSON.stringify(dog)"
      >
        {{ dog.dogName }} {{ dog.dogKennel }}
      </option></select
    >Odabir majke:
    <select v-model="sortby" class="text-right m-1">
      <option
        value="dogName"
        v-for="dog in dogs"
        :key="JSON.stringify(dog)"
      >
        {{ dog.dogName }} {{ dog.dogKennel }}
      </option>
    </select>
  </div>
</template>

<script>
import { dogsAll } from "@/services";

export default {
  name: "CompareView",
  data() {
    return {
      dogs: [],
      sortby: "Odaberite",
      sex_m: "M",
      sex_f: "F",
    };
  },

  created() {
    this.allDogs();
  },
  methods: {
    async allDogs() {
      try {
        let response = await dogsAll.allDogs();
        this.dogs = response.data;

        console.log(this.dogs);
      } catch (error) {
        console.log(error);
      }
    },

    filteredDogsM() {
      if (!this.selectedSex) return this.dogs;
      return this.dogs.filter((dog) => dog.sex === this.selectedSex);
    },
    setDogId(_id) {
      localStorage.setItem("dogId", _id);

      this.$router.push({ name: "dog", params: { _id } });
    },
  },
};
</script>

<style lang="scss">
div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 5px;
}
select {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding: 3px;
}
</style>