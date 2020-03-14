<template>
  <div>
    <compCommon>
      <compRadioChoose v-if="text===''" :name='speaker' :src='src' :places='places' />
      <compText v-else :name='speaker' :text='text' :src='src' @nextText="nextText" />
    </compCommon>
  </div>
</template>
<script>
import { addContent, places } from "./../content.js";
import compCommon from "./СompСommon.vue";
import compRadioChoose from "./СompRadioChoose.vue";
import compText from "./СompText.vue";
export default {
  components: {
    compCommon,
    compText,
    compRadioChoose
  },
  data() {
    return {
      speaker: "",
      text: "",
      src: "",
      root: "choiceRoom",
      i: 0,
      places: places
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
      }
    }
  },
  watch: {
    i: "createdContent"
  },
  beforeCreate: function() {
    if (!document.body.classList.length > 0) {
      document.body.classList.add("room");
    } else {
      document.body.classList.replace(document.body.classList[0], "room");
    }
  },
  created: function() {
    this.createdContent();
  }
};
</script>
<style>
.room {
  font-family: cursive;
  background-repeat: repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-image: url("http://localhost:8000/dist/background/room.jpg");
  user-select: none;
}
</style>