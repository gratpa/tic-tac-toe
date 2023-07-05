<!-- eslint-disable prettier/prettier -->
<template>
  <div class="backdrop">
    <div class="modal">
      <p>modal content</p>
    </div>
  </div>
</template>
<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px;
  background: rgb(222, 255, 60);
}
.backdrop {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
}
</style>
