<template>
  <div class="app">
    <h1>{{ title }}</h1>
  </div>
  <GameButtons />
</template>

<script lang="ts">
import GameButtons from "./components/GameButtons.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: { GameButtons },
  data() {
    return {
      title: "Tic Tac Toe",
    };
  },
});
</script>

<style>
#app {
  top: 0;
  left: 0;
  background: rgb(247, 255, 136);
  background: linear-gradient(
    0deg,
    rgba(247, 255, 136, 1) 0%,
    rgba(253, 45, 243, 0.7077205882352942) 100%
  );
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>
