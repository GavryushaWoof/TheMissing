<template>
  <section class="container">
    <audio ref="audio" src="http://localhost:8000/dist/song/song.mp3" loop />
    <button class="control" @click="onClick()">
      <font-awesome-icon v-if="isPlaying" class="icon" icon="volume-up" />
      <font-awesome-icon v-else class="icon" icon="volume-mute" />
    </button>
  </section>
</template>

<script>
import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faVolumeUp, faVolumeMute);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

export default {
  data: () => ({
    isPlaying: false
  }),
  methods: {
    onClick() {
      if (this.isPlaying) {
        this.$refs.audio.pause();
      } else {
        this.$refs.audio.play();
      }
      this.isPlaying = !this.isPlaying;
    }
  }
};
</script>

<style lang="css" scoped>
.container {
  position: absolute;
  right: 0;
  top: 0;
  margin: 20px;
}
.control {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 25px;
  height: 25px;
}
.icon {
  width: 100%;
  height: 100%;
  color: white;
}
</style>
