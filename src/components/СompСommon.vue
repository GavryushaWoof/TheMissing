<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
</script>

<style lang='css'>
.speaker {
  height: 95vh;
  position: fixed;
  bottom: 0px;
  right: 20%;
}
.text {
  margin: 5px 30px 0px;
}
.name {
  font-size: 1.6em;
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 15px;
}

#container {
  font-size: 1.5em;
  height: 30vh;
  padding: 5px;
  background: #c4e6f3e6;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.arrow {
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
