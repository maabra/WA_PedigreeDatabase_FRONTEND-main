<template>
  <div>
    <div>
      <h2 class="text-center mb-5">Lista svih pasa</h2>
    </div>
    Sortiranje:
    <select v-model="sortby" class="text-right m-1">
      <option value="dogName">Ime</option>
      <option value="dogCacib">CACIB</option>
      <option value="dogCac">CAC</option></select
    ><select v-model="sort" class="text-right m-1">
      <option value="asc">Uzlazno</option>
      <option value="dec">Silazno</option>
    </select>
    <div
      class="text-center mb-2"
      v-for="dog in sortedDogs"
      :key="JSON.stringify(dog)"
    >
      <a class="btn btn-primary" @click="setDogId(dog._id)"
        >{{ dog.dogName }} {{ dog.dogKennel }}</a
      >
        CAC: {{ dog.dogCac }} CACIB: {{ dog.dogCacib }} ({{
          dog.dogPedNr
        }})
      </div>
  </div>
</template>

/* testno
<div v-if="dogs">
  {{ dogs }}Moze se vidjeti
</div>
*/

<script>
import { dogsAll } from "@/services";

export default {
  name: "ListView",
  data() {
    return {
      sortby: "dogName",
      sort: "asc",
      dogs: [],
      /*testlist: [
        { id: 1, name: "Test1" },
        { id: 2, name: "Test2" },
        { id: 3, name: "Test3" }
      ],*/
    };
  },

  created() {
    this.allDogs();
    //this.fetchDogs();
  },
  methods: {
    
    async allDogs() {
      try {
        let response = await dogsAll.allDogs(
        );   
        this.dogs = response.data;
        
console.log(this.dogs);
      } catch (error) {
        console.log(error);
      }   },
    /*async fetchDogs() {
      const response = await service.get("/api/getAll");
      this.dogs = response.data;

      console.log(this.dogs);
    },*/

    setDogId(_id) {
      localStorage.setItem("dogId", _id);

      this.$router.push({ name: "dog", params: { _id } });
    },
  },

  computed: {
    sortedDogs() {
      return this.dogs
        .slice(0)
        .sort((a, b) =>
          this.sort == "asc"
            ? a[this.sortby].localeCompare(b[this.sortby])
            : b[this.sortby].localeCompare(a[this.sortby])
        );
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