<template>
  <div>
    <center>
      <table border="2" class="m-2" text-align: left>
        <tr>
          <td rowspan="2">
            <p class="m-4"><b>Majka:</b> {{ dogs.dogMother }}</p>
          </td>
          <td>
            <p class="m-1"><b>Majčina majka:</b> {{ dogs.dogGrandmaMother }}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="m-1"><b>Majčin otac: </b>{{ dogs.dogGrandpaMother }}</p>
          </td>
        </tr>
        <tr>
          <td><p class="m-3"></p></td>
        </tr>
        <tr>
          <td rowspan="2">
            <p class="m-4"><b>Otac:</b> {{ dogs.dogFather }}</p>
          </td>
          <td>
            <p class="m-1"><b>Očeva majka:</b> {{ dogs.dogGrandmaFather }}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="m-1"><b>Očev otac:</b> {{ dogs.dogGrandpaFather }}</p>
          </td>
        </tr>
      </table>
    </center>
  </div>
</template>
  
  <script>
export default {
  name: "PedigreeTable",
  props: ["dogs"],

  mounted() {
    console.log(this.dogs);
  },
};
</script>

<style lang="scss">
p {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding-right: 10px;
  padding-left: 10px;
}
</style>