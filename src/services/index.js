import axios from "axios";

let service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
});

let dogAdd = {
  async addDog(
    dogName,
    dogSex,
    dogBirth,
    dogKennel,
    dogCacib,
    dogCac,
    dogMother,
    dogFather,
    dogGrandmaMother,
    dogGrandpaMother,
    dogGrandmaFather,
    dogGrandpaFather,
    dogPedNr
  ) {
    let dog = {
      dogName,
      dogSex,
      dogBirth,
      dogKennel,
      dogCacib,
      dogCac,
      dogMother,
      dogFather,
      dogGrandmaMother,
      dogGrandpaMother,
      dogGrandmaFather,
      dogGrandpaFather,
      dogPedNr,
    };
    await service.post("/api/postDog", dog).then((response) => {
      console.log(response);
    });

    return true;
  },
};

let dogUpdate = {
  async updateDog(
    _id,
    dogName,
    dogSex,
    dogBirth,
    dogKennel,
    dogCacib,
    dogCac,
    dogMother,
    dogFather,
    dogGrandmaMother,
    dogGrandpaMother,
    dogGrandmaFather,
    dogGrandpaFather,
    dogPedNr
  ) {
    let dog = {
      dogName,
      dogSex,
      dogBirth,
      dogKennel,
      dogCacib,
      dogCac,
      dogMother,
      dogFather,
      dogGrandmaMother,
      dogGrandpaMother,
      dogGrandmaFather,
      dogGrandpaFather,
      dogPedNr,
    };
    await service.patch("/api/update/" + _id, dog).then((response) => {
      console.log(response);
    });

    return true;
  },
};

/*async updateDog(pas_id) {
    try {let dog = {
    dogName: this.dogName,
    dogSex: this.dogSex,
    dogBirth: this.dogBirth,
    dogKennel: this.dogKennel,
    dogCacib: this.dogCacib,
    dogCac: this.dogCac,
    dogMother: this.dogMother,
    dogFather: this.dogFather,
    dogGrandmaMother: this.dogGrandmaMother,
    dogGrandpaMother: this.dogGrandpaMother,
    dogGrandmaFather: this.dogGrandmaFather,
    dogGrandpaFather: this.dogGrandpaFather,
    dogPedNr: this.dogPedNr,
  };
  console.log(pas_id);
  await service.patch("/api/update/"+ pas_id, {dog: this.dog});

  alert(`Podatci o psu imena -${this.dogName}- su uređeni!`);
      this.$router.push({ name: "home" });
} catch (error) {
  console.log(error);
  };*/
let dogsAll = {
  async allDogs() {
    let response = await service.get("/api/getAll");
    /* //delete dogs.dogName;
  delete dogs.dogSex;
  delete dogs.dogBirth;
  //delete dogs.dogKennel;
  delete dogs.dogCacib;
  delete dogs.dogCac;
  delete dogs.dogMother;
  delete dogs.dogFather;
  delete dogs.dogGrandmaMother;
  delete dogs.dogGrandpaMother;
  delete dogs.dogGrandmaFather;
  delete dogs.dogGrandpaFather;
  //delete dogs.dogPedNr;*/

    return response;
  },
};

let dogFetch = {
  async fetchDog(_id) {
    let response = await service.get("/api/getOne/" + _id);
    return response;
  },
};

let dogDelete = {
  async deleteDog(_id) {
    let response = await service.delete("/api/delete/" + _id);
    return response;
  },
};
export { service, dogAdd, dogsAll, dogFetch, dogUpdate, dogDelete };
