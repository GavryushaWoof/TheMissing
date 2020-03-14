<template>
  <div>
    <compCommon>
      <compText :name='speaker' :text='text' :src='src' @nextText="nextText" />
    </compCommon>
  </div>
</template>
<script>
import { addContent } from "./../content.js";
import compCommon from "./СompСommon.vue";
import compText from "./СompText.vue";
export default {
  components: {
    compCommon,
    compText
  },
  data() {
    return {
      speaker: "",
      text: "",
      src: "",
      root: "selectedRoom",
      i: 0
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
      } else {
        this.nextRoot();
      }
    },
    nextRoot() {
      this.$router.push({ path: "/" });
    }
  },

  watch: {
    i: "createdContent"
  },
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].style.backgroundImage = `url(${
      JSON.parse(sessionStorage.getItem("pokemon")).background
    })`;
  },
  created: function() {
    this.createdContent();
  }
};
</script>
<style>
.selectedRoom {
  font-family: cursive;
  background-repeat: repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: 100% 100%;
  user-select: none;
}
</style>