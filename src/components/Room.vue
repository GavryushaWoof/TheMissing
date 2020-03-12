<template>
  <div>
    <comp :name='speaker' :text='text' :src='src' @nextText="nextText" />

  </div>
</template>
<script>
import { addContent } from "./../content.js";
import comp from "./comp.vue";
export default {
  components: {
    comp
  },
  data() {
    return {
      speaker: "",
      text: "",
      src: "",
      root: "room",
      i: 0
    };
  },
  methods: {
    nextText() {
      return (this.i += 1);
    },
    createdContent() {
      let content = addContent(
        this.root,
        this.speaker,
        this.i,
        this.text,
        this.src
      );
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
<style lang='css' scoped>
</style>