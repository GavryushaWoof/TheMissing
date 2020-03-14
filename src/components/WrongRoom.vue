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
    document.getElementsByTagName("body")[0].style.backgroundImage =
      'url("http://localhost:8000/dist/background/room.jpg")';
  },
  created: function() {
    this.createdContent();
  }
};
</script>