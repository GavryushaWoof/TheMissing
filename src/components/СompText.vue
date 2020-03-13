<template>
  <div>
    <div>
      <img class="misty" :src='src'>
    </div>
    <div id=container>
      <div>
        <p class="name">{{name}}</p>
      </div>
      <div>
        <p class="text">{{text}}</p>
      </div>
      <button @click="$emit('nextText')">&#10158;</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "text", "src"]
};
</script>
