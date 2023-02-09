<template>
  <div class="row">
    <div class="row">
      <h2 class="text-center mb-3">Ovdje uredite podatke o psu {{dogs.dogName}}</h2>
    </div>
    <div class="row">
      <center>
        <div class="col-5">
          <form @submit.prevent="updateDog" class="mb-5">
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
              <label for="dogGrandmaMotherField"
                >Ime bake s majčine strane psa:
              </label>
              <input
                v-model="dogGrandmaMother"
                type="name"
                class="form-control"
                id="dogGrandmaMotherField"
                aria-describedby="dogGrandmaMotherHelp"
                placeholder="Unesite ime bake s majčine strane psa"
              />
            </div>
            <div class="form-group">
              <label for="dogGrandpaMotherField"
                >Ime djeda s majčine strane psa:
              </label>
              <input
                v-model="dogGrandpaMother"
                type="name"
                class="form-control"
                id="dogGrandpaMotherField"
                aria-describedby="dogGrandpaMotherHelp"
                placeholder="Unesite ime djeda s majčine strane psa"
              />
            </div>
            <div class="form-group">
              <label for="dogGrandmaFatherField"
                >Ime bake s očeve strane psa:
              </label>
              <input
                v-model="dogGrandmaFather"
                type="name"
                class="form-control"
                id="dogGrandmaFatherField"
                aria-describedby="dogGrandmaFatherHelp"
                placeholder="Unesite ime bake s očeve strane psa"
              />
            </div>
            <div class="form-group">
              <label for="dogGrandpaFatherField"
                >Ime djeda s očeve strane psa:
              </label>
              <input
                v-model="dogGrandpaFather"
                type="name"
                class="form-control"
                id="dogGrandpaFatherField"
                aria-describedby="dogGrandpaFatherHelp"
                placeholder="Unesite ime djeda s očeve strane psa"
              />
            </div>
            <div class="form-group">
              <label for="dogPedNrField">Broj rodovnice: </label>
              <input
                v-model="dogPedNr"
                type="name"
                class="form-control"
                id="dogPedNrField"
                aria-describedby="dogPedNrHelp"
                placeholder="Unesite broj rodovnice"
              />
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Pošalji
            </button>
          </form>
        </div>
      </center>
    </div>
  </div>
</template>
  
  <script>
import { dogUpdate } from "@/services";
export default {
  name: "UpdateDog",
  data() {
    return {
      dogs: [],
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
      dogPedNr: "",
      id: this._id
    };
  },

  created() {
    this.pas_id = localStorage.getItem("dogId");
    console.log("ovo je " + this.pas_id);
  },
  methods: {

    async updateDog() {
      try {
        let updatedog = await dogUpdate.updateDog(
          this.pas_id,
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
          this.dogPedNr
        );
        console.log(updatedog);
        alert(`Podatci o psu imena <${this.dogName}> su upisani!`);
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