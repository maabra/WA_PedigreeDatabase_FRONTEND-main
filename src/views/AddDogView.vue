<template>
  <div class="row">
    <div1 class="row">
      <h2 class="text-center mb-5">Podatci o psu</h2>
    </div1>
    <div class="row">
      <div class="col-4"></div>
      <div class="col-5">
          <form @submit.prevent="addDog" class="mb-5">
          <div class="form-group">
            <label for="dogNameField">Ime psa: </label>
            <input
              v-model="dogName"
              type="name"
              class="form-control"
              id="dogNameField"
              aria-describedby="dogNameHelp"
              placeholder="Unesite ime psa"
            />
          </div>
          <div class="form-group">
            <label for="dogSexField">Spol psa: </label>
            <input
              v-model="dogSex"
              type="name"
              class="form-control"
              id="dogSexField"
              aria-describedby="dogSexHelp"
              placeholder="Unesite M ili Ž"
            />
          </div>
          <div class="form-group">
            <label for="dogBirthField">Datum rođenja: </label>
            <input
              v-model="dogBirth"
              type="name"
              class="form-control"
              id="dogBirthField"
              aria-describedby="dogBirthHelp"
              placeholder="Unesite datum rođenja"
            />
          </div>
          <div class="form-group">
            <label for="dogKennelField">Ime uzgajivačnice: </label>
            <input
              v-model="dogKennel"
              type="name"
              class="form-control"
              id="dogKennelField"
              aria-describedby="dogKennelHelp"
              placeholder="Unesite ime uzgajivačnice"
            />
          </div>
          <div class="form-group">
            <label for="dogCacibField">Broj osvojenih CACIB-a: </label>
            <input
              v-model="dogCacib"
              type="name"
              class="form-control"
              id="dogCacibField"
              aria-describedby="dogCacibHelp"
              placeholder="Unesite broj, ukoliko nema, unesite 0"
            />
          </div>
          <div class="form-group">
            <label for="dogCacField">Broj osvojenih CAC-a: </label>
            <input
              v-model="dogCac"
              type="name"
              class="form-control"
              id="dogCacField"
              aria-describedby="dogCacHelp"
              placeholder="Unesite broj, ukoliko nema, unesite 0"
            />
          </div>
          <div class="form-group">
            <label for="dogMotherField">Ime majke psa: </label>
            <input
              v-model="dogMother"
              type="name"
              class="form-control"
              id="dogMotherField"
              aria-describedby="dogMotherHelp"
              placeholder="Unesite ime majke psa"
            />
          </div>
          <div class="form-group">
            <label for="dogFatherField">Ime oca psa: </label>
            <input
              v-model="dogFather"
              type="name"
              class="form-control"
              id="dogFatherField"
              aria-describedby="dogFatherHelp"
              placeholder="Unesite ime oca psa"
            />
          </div>
          <div class="form-group">
            <label for="dogGrandmaMotherField">Ime bake majke psa: </label>
            <input
              v-model="dogGrandmaMother"
              type="name"
              class="form-control"
              id="dogGrandmaMotherField"
              aria-describedby="dogGrandmaMotherHelp"
              placeholder="Unesite ime bake majke psa"
            />
          </div>
          <div class="form-group">
            <label for="dogGrandpaMotherField">Ime djeda majke psa: </label>
            <input
              v-model="dogGrandpaMother"
              type="name"
              class="form-control"
              id="dogGrandpaMotherField"
              aria-describedby="dogGrandpaMotherHelp"
              placeholder="Unesite ime djeda majke psa"
            />
          </div>
          <div class="form-group">
            <label for="dogGrandmaFatherField">Ime bake oca psa: </label>
            <input
              v-model="dogGrandmaFather"
              type="name"
              class="form-control"
              id="dogGrandmaFatherField"
              aria-describedby="dogGrandmaFatherHelp"
              placeholder="Unesite ime bake oca psa"
            />
          </div>
          <div class="form-group">
            <label for="dogGrandpaFatherField">Ime djeda oca psa: </label>
            <input
              v-model="dogGrandpaFather"
              type="name"
              class="form-control"
              id="dogGrandpaFatherField"
              aria-describedby="dogGrandpaFatherHelp"
              placeholder="Unesite ime djeda oca psa"
            />
          </div>

          <button
            type="submit"
            class="btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Pošalji
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {postdog} from "@/services";

export default {
  name: "AddDog",
  data() {
    return {
      dogName: "",
      dogSex: "",
      dogBirth: "",
      dogKennel: "",
      dogCacib: "",
      dogCac: "",
      dogMother: "",
      dogFather: "",
      dogGrandmaMother: "",
      dogGrandpaMother: "",
      dogGrandmaFather: "",
      dogGrandpaFather: "",
    };
  },
  methods: {
    async addDog() {
      try {
        let adddog = await postdog.addDog(
          this.dogName,
          this.dogSex,
          this.dogBirth,
          this.dogKennel,
          this.dogCacib,
          this.dogCac,
          this.dogMother,
          this.dogFather,
          this.dogGrandmaMother,
          this.dogGrandpaMother,
          this.dogGrandmaFather,
          this.dogGrandpaFather,
        );
        console.log(adddog);
        this.$router.push({ name: "home" });
      } catch (error) {
        console.log(error);
      }
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

</style>