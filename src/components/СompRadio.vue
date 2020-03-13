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
      <div v-if="text==='' && player===false">
        <input type="text" @input="$emit('input', $event)" placeholder='Введите имя' value>
      </div>
      <button @click="$emit('nextText')">&#10158;</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "text", "src", "player"]
};
</script>

<style lang='css' scoped>
.text {
  margin: 5px 20px 0px;
}

#container {
  font-size: 1.5em;
  height: 15vw;
  padding: 5px;
  background: #c4e6f3e6;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

button {
  height: 100px;
  width: 100px;
  padding: 0;
  position: fixed;
  bottom: 0;
  right: 0;
  border: none;
  background: none;
  font-size: 3em;
}
</style>
