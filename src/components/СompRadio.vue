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
        <label v-for="(pokemon, index) in pokemons" :key="index">
          <input type="radio" name="whoIsPokemon" :value="index" @change="onRadio">
          <img class="gif" :src="pokemon.gif">
          <span>{{pokemon.name}}</span>
        </label>
      </div>
      <button class="arrow" @click="$emit('nextText')" :disabled='disabledButton'>&#10158;</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      disabledButton: true
    };
  },
  props: ["name", "src", "pokemons"],
  methods: {
    onRadio(i) {
      this.$emit("change", this.$props.pokemons[i.target.value]);
      this.disabledButton = false;
    }
  }
};
</script>

<style lang='css' scoped>
.conteinerRadio {
  display: flex;
  justify-content: center;
}
.gif {
  height: 60px;
}
label {
  margin: 0 20px 0;
}
</style>
