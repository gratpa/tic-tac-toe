<template>
  <button class="reset">{{ resetText }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  data() {
    return {
      resetText: "⭕RESET❌",
    };
  },
  methods: {},
});
</script>

<style>
div.reset {
  padding-left: 200px;
  padding-right: 200px;
  z-index: 2;
}
.reset {
  font-family: "Audiowide", sans-serif;
  background-color: #87cefac6;
  font-size: 35px;
  width: min-content;
  opacity: 0.8;
  border-radius: 50px;
  color: rgba(253, 45, 243);
  padding: 10px;
  text-align: center;
  transition: all 0.75s;
  transform: translate(10%, 2%);
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1.75rem 3.5rem rgba(0, 0, 0, 0.3);
  text-shadow: 2px 2px 2px rgb(255, 206, 253);
}
.reset:active {
  transform: translate(0%, 2%);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
}
.reset:hover {
  background-color: #18a5fdc6;
}
</style>
