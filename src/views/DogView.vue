<template>
  <div>
    <div>
      <h2 class="text-center mb-5">
        Pregled podataka o psu i uređivanje istih
      </h2>
      <h3 class="text-center mb-2">Pedigree psa</h3>
      <PedigreeTable :dogs="dogs"> </PedigreeTable>
    </div>

    <div>
      <h3 class="text-center mb-2">Detalji psa</h3>

      <center>
        <table class="m-2" text-align: left>
          <tr>
            <p><b>Ime psa:</b> {{ dogs.dogName }}</p>
          </tr>
          <tr>
            <p><b>Ime uzgajivačnice:</b> {{ dogs.dogKennel }}</p>
          </tr>
          <tr>
            <p><b>Spol:</b> {{ dogs.dogSex }}</p>
          </tr>
          <tr>
            <p><b>Broj rodovnice:</b> {{ dogs.dogPedNr }}</p>
          </tr>
          <tr>
            <p><b>Datum rođenja:</b> {{ dogs.dogBirth }}</p>
          </tr>
          <tr>
            <p><b>Broj osvojenih CACIB-a:</b> {{ dogs.dogCacib }}</p>
          </tr>
          <tr>
            <p><b>Broj osvojenih CAC-a:</b> {{ dogs.dogCac }}</p>
          </tr>
        </table>
      </center>
    </div>

    <a class="btn btn-primary m-1" @click="deleteDog(dogs._id)">Izbriši psa</a>
    <a class="btn btn-primary m-1" @click="updateDog(dogs._id)">Uredi psa</a>
  </div>
</template>
  
  
  <script>
import PedigreeTable from "../components/PedigreeTable.vue";

import { dogFetch, dogDelete } from "@/services";

export default {
  name: "DogView",
  
  components: {
    PedigreeTable,
    
  },
  data() {
    return {
      dogs: [],
    };
    
  },

  created() {
    this._id = localStorage.getItem("dogId");
    console.log("ovo je " + this._id);
    this.dogFetch(this._id);
  },
  methods: {
    /*async fetchDogsAll() {
      const response = await service.get("/api/getAll");
      this.dogs2 = response.data;
      console.log(this.dogs2);*/
    
      async dogFetch(_id) {
      try {
        let response = await dogFetch.fetchDog(_id
        );   
        this.dogs = response.data;
        
console.log(this.dogs);
      } catch (error) {
        console.log(error);
      }   },

async deleteDog(_id) {
  try {
        let response = await dogDelete.deleteDog(_id
        );   
        this.odgovor = response.data
alert(this.odgovor);
      this.$router.push({ name: "home"});
      } catch (error) {
        console.log(error);
      }   },


async updateDog(_id) {
      localStorage.setItem("dogId", _id);

      this.$router.push({ name: "updateDog", params: { _id } });
    },},

    /*async fetchDogs() {
      console.log(this._id);
      let dogs = await service.get("/api/getOne/:id", this._id)
      .then(response => {
        this.dogs = response.data;
        
      console.log(this._id);
      });
        return dogs;
    },*/
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
p {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding: 5px;
}
</style>