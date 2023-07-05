<template>
  <div class="winner">{{ winnerText }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  data() {
    return {
      winnerText: "WINNER! 🥇",
    };
  },
});
</script>

<style>
div.winner {
  padding-left: 200px;
  padding-right: 200px;
  z-index: 2;
  transform: translate(-7%, -150%);
}
.winner {
  font-family: "Audiowide", sans-serif;
  background-color: #87cefac6;
  font-size: 60px;
  opacity: 0.8;
  border-radius: 9px;
  color: rgba(253, 45, 243);
  width: 50%;
  padding: 60px;
  text-align: center;
  transition: all 0.75s;
}
</style>
