import axios from "axios";

let service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
});

let postdog = {
  async addDog(dogName, dogSex, dogBirth, dogKennel,dogCacib,dogCac,dogMother,dogFather,dogGrandmaMother,dogGrandpaMother,dogGrandmaFather,dogGrandpaFather) {
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
    };
    await service.post("/adddog", dog).then((response) => {
      console.log(response);
    });

    return true;
  },

  async getAll(searchTerm) {
    let options = {};

    if (searchTerm) {
      options.params = {
        _any: searchTerm,
      };
    }
},


  async getOne(id) {
    let response = await service.get(`/dog/${id}`);

    let dog = response.data;

    return {
        id: dog._id,
        dogName: dog.dogName,
        dogSex: dog.dogSex,
        dogBirth: dog.dogBirth,
        dogKennel: dog.dogKennel,
        dogCacib: dog.dogCacib,
        dogCac: dog.dogCac,
        dogMother: dog.dogMother,
        dogFather: dog.dogFather,
        dogGrandmaMother: dog.dogGrandmaMother,
        dogGrandpaMother: dog.dogGrandpaMother,
        dogGrandmaFather: dog.dogGrandmaFather,
        dogGrandpaFather: dog.dogGrandpaFather,
    };
  },
};

export { service, postdog };