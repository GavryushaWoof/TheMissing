<template>
  <div>
    <div>
      <img name='img' class="speaker" :src='src'>
    </div>
    <div id=container>
      <div>
        <p class="name">{{name}}</p>
      </div>
      <div class="contentText">
        <p class="text">{{text}}</p>
      </div>
      <button class="arrow" @click="$emit('nextText')">&#10158;</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "text", "src"]
};
</script>
<style>
.contentText {
  width: calc(100% - 100px);
}
</style>
