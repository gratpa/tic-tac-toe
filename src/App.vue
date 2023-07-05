<template>
  <h1>{{ title }}</h1>
  <Modal />
  <input type="text" ref="name" />
  <div class="app"></div>
</template>

<script lang="ts">
import Modal from "./components/Modal.vue";
export default {
  name: "KandK",
  components: { Modal },
  data() {
    return {
      title: "⭕&❌",
    };
  },
};
</script>

<style></style>
