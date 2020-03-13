<template>
  <div>
    <div>
      <img class="speaker" :src='src'>
    </div>
    <div id=container>
      <div>
        <p class="name">{{name}}</p>
      </div>
      <div class="conteinerInput">
        <input type="text" @input="onInput" placeholder='Введите имя' value>
      </div>
      <button @click="$emit('nextText')" :disabled='disabledButton'>&#10158;</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      disabledButton: true
    };
  },
  props: ["name", "src"],
  methods: {
    onInput(value) {
      if (value.target.value.length < 2) {
        this.disabledButton = true;
      } else {
        this.$emit("input", value);
        this.disabledButton = false;
      }
    }
  }
};
</script>

<style lang='css'>
.conteinerInput {
  display: flex;
  justify-content: center;
}
input[type="text"] {
  border: 1px solid #cccccc;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -khtml-border-radius: 3px;
  background: #ffffff !important;
  outline: none;
  height: 100px;
  width: 500px;
  text-align: center;
  font-size: 1.5em;
  font-family: cursive;
}
</style>
