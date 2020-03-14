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
    document.getElementsByTagName("body")[0].style.backgroundImage =
      'url("http://localhost:8000/dist/background/room.jpg")';
    // document.img.classList.replace(document.img.classList[0], "thing");
  },
  created: function() {
    this.createdContent();
  }
};
</script>