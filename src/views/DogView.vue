<template>
  <div class="row">
    <h2 class="text-center mb-5">Pregled podataka o psu i mjesto gdje se mogu uređivati podatci</h2>
  </div>
  </template>
  
  <script>
  export default {
    name: "DogView",
    components: {
      
    },

    
  };
  let promise = fetch("http://localhost:3000/dog")
  promise.then(response => {
 return response.json()
 })
 .then(data => {
 console.log("Podaci s backenda", data)
 }
  )

  </script>
