<template>
  <div>
    <div>
      <img name='img' class="speaker" :src='src'>
    </div>
    <div id=container>
      <div>
        <p class="name">{{name}}</p>
      </div>
      <div class="conteinerRadio">
        <label v-for="(place, index) in places" :key="index">
          <input type="radio" name="whatKindOfPlace" :value="index" @change="onRadio">
          <span>{{place.name}}</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "src", "places"],
  methods: {
    onRadio(i) {
      const place = this.$props.places[i.target.value];
      const pokemon = JSON.parse(sessionStorage.getItem("pokemon"));
      if (place.type === pokemon.type) {
        this.$router.push({ path: `/selectedRoom` });
      } else {
        this.$router.push({ path: `/wrongRoom` });
      }
    }
  }
};
</script>

<style lang='css' scoped>
.conteinerRadio {
  display: flex;
  justify-content: center;
}
label {
  margin: 0 20px 0;
}
</style>
