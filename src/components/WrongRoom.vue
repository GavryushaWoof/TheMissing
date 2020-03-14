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
      root: "wrongRoom",
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
        this.player = content.player;
      } else {
        this.nextRoot();
      }
    },
    nextRoot() {
      this.$router.push({ path: "/choiceRoom" });
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
  background-size: 100% 100%;
  background-image: url("http://localhost:8000/dist/background/room.jpg");
  user-select: none;
}
</style>