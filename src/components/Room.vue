<template>
  <div>
    <compCommon>
      <compInput v-if="text==='' && player===false" :name='speaker' :src='src' @input="userName($event.target.value)" @nextText="nextText" />
      <compRadio v-else-if="text==='' && player===true" :name='speaker' :src='src' :pokemons='arrPokemons' @change="choosePokemon" @nextText="nextText" />
      <compText v-else :name='speaker' :text='text' :src='src' @nextText="nextText" />
    </compCommon>
  </div>
</template>
<script>
import { addContent, pokemons } from "./../content.js";
import compCommon from "./СompСommon.vue";
import compInput from "./СompInput.vue";
import compRadio from "./СompRadio.vue";
import compText from "./СompText.vue";
export default {
  components: {
    compCommon,
    compText,
    compInput,
    compRadio
  },
  data() {
    return {
      speaker: "",
      text: "",
      src: "",
      root: "room",
      player: "",
      i: 0,
      arrPokemons: pokemons
    };
  },
  methods: {
    nextText() {
      return (this.i += 1);
    },
    createdContent() {
      let content = addContent(this.root, this.i, this.src);
      if (content !== null) {
        this.speaker = content.name;
        this.text = content.text;
        this.src = content.src;
        this.player = content.player;
      } else {
        this.nextRoot();
      }
    },
    choosePokemon(value) {
      sessionStorage.setItem("pokemon", JSON.stringify(value));
    },
    nextRoot() {
      this.$router.push({ path: "/choiceRoom" });
    },
    userName(value) {
      sessionStorage.setItem("name", value);
    }
  },

  watch: {
    i: "createdContent"
  },
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].style.backgroundImage =
      'url("http://localhost:8000/dist/background/room.jpg")';
  },
  created: function() {
    this.createdContent();
  }
};
</script>