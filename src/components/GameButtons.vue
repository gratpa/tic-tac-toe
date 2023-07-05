<template>
  <div class="game">
    <button
      @click="
        changeButton(0);
        checkWinner();
      "
      :class="[theme[0] ? `empty` : `filled`]"
      id="0"
    >
      {{ sign[0] }}
    </button>
    <button
      @click="
        changeButton(1);
        checkWinner();
      "
      :class="[theme[1] ? `empty` : `filled`]"
      id="1"
    >
      {{ sign[1] }}
    </button>
    <button
      @click="
        changeButton(2);
        checkWinner();
      "
      :class="[theme[2] ? `empty` : `filled`]"
      id="2"
    >
      {{ sign[2] }}
    </button>
    <button
      @click="
        changeButton(3);
        checkWinner();
      "
      :class="[theme[3] ? `empty` : `filled`]"
      id="3"
    >
      {{ sign[3] }}
    </button>
    <button
      @click="
        changeButton(4);
        checkWinner();
      "
      :class="[theme[4] ? `empty` : `filled`]"
      id="4"
    >
      {{ sign[4] }}
    </button>
    <button
      @click="
        changeButton(5);
        checkWinner();
      "
      :class="[theme[5] ? `empty` : `filled`]"
      id="5"
    >
      {{ sign[5] }}
    </button>
    <button
      @click="
        changeButton(6);
        checkWinner();
      "
      :class="[theme[6] ? `empty` : `filled`]"
      id="6"
    >
      {{ sign[6] }}
    </button>
    <button
      @click="
        changeButton(7);
        checkWinner();
      "
      :class="[theme[7] ? `empty` : `filled`]"
      id="7"
    >
      {{ sign[7] }}
    </button>
    <button
      @click="
        changeButton(8);
        checkWinner();
      "
      :class="[theme[8] ? `empty` : `filled`]"
      id="8"
    >
      {{ sign[8] }}
    </button>
    <div v-if="showWinner"><WinnerBox /></div>
  </div>
  <ResetButton @click="resetGame()" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WinnerBox from "./WinnerBox.vue";
import ResetButton from "./ResetButton.vue";
export default defineComponent({
  components: { WinnerBox, ResetButton },
  data() {
    return {
      sign: Array(9).fill("") as string[],
      btnArray: [...Array(9).keys()],
      theme: Array(9).fill(true) as boolean[],
      activPlayer: 0,
      showWinner: false,
    };
  },

  methods: {
    resetGame() {
      (this.sign = Array(9).fill("") as string[]),
        (this.btnArray = [...Array(9).keys()]),
        (this.theme = Array(9).fill(true) as boolean[]),
        (this.activPlayer = 0),
        (this.showWinner = false);
    },
    checkWinner() {
      if (
        this.sign[0] === this.sign[1] &&
        this.sign[0] === this.sign[2] &&
        this.sign[0] !== ""
      ) {
        this.showWinner = true;
      } else if (
        this.sign[3] === this.sign[4] &&
        this.sign[3] === this.sign[5] &&
        this.sign[3] !== ""
      ) {
        this.showWinner = true;
      } else if (
        this.sign[6] === this.sign[7] &&
        this.sign[6] === this.sign[8] &&
        this.sign[6] !== ""
      ) {
        this.showWinner = true;
      } else if (
        this.sign[0] === this.sign[3] &&
        this.sign[0] === this.sign[6] &&
        this.sign[0] !== ""
      ) {
        this.showWinner = true;
      } else if (
        this.sign[1] === this.sign[4] &&
        this.sign[1] === this.sign[7] &&
        this.sign[1] !== ""
      ) {
        this.showWinner = true;
      } else if (
        this.sign[2] === this.sign[5] &&
        this.sign[2] === this.sign[8] &&
        this.sign[2] !== ""
      ) {
        this.showWinner = true;
      } else if (
        this.sign[0] === this.sign[4] &&
        this.sign[0] === this.sign[8] &&
        this.sign[0] !== ""
      ) {
        this.showWinner = true;
      } else if (
        this.sign[6] === this.sign[4] &&
        this.sign[6] === this.sign[2] &&
        this.sign[6] !== ""
      ) {
        this.showWinner = true;
      }
    },
    changeButton(n: number) {
      if (
        this.btnArray[n] === n &&
        this.sign[n] === "" &&
        this.activPlayer === 0
      ) {
        this.theme[n] = false;
        this.sign[n] = "O";
        this.activPlayer = 1;
      } else if (
        this.btnArray[n] === n &&
        this.sign[n] === "" &&
        this.activPlayer === 1
      ) {
        this.theme[n] = false;
        this.sign[n] = "X";
        this.activPlayer = 0;
      }
    },
  },
});
</script>

<style>
div.game {
  position: relative;
  width: 600px;
  height: 600px;
  padding-left: 650px;
  padding-right: 650px;
}
button.empty {
  width: 150px;
  height: 150px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  margin: 20px;

  background-color: rgba(251, 251, 151, 0.5);
  backdrop-filter: blur(10px);

  border-radius: 10px;
  box-shadow: 0 1.75rem 3.5rem rgba(0, 0, 0, 0.1);
  display: inline-block;
  position: relative;
}
button.empty:active {
  background-color: rgba(251, 251, 151, 0.5);
  transform: translateY(4px);
}
button.empty:hover {
  background-color: rgba(255, 255, 74, 0.5);
}
button.filled {
  width: 150px;
  height: 150px;
  color: #65bdf3;
  background: none;
  border: none;
  cursor: not-allowed;
  transition: all 0.2s;
  font-family: inherit;
  font-size: 80px;
  margin: 20px;
  display: inline-block;
  position: relative;

  background-color: rgba(182, 0, 134, 0.3);
  backdrop-filter: blur(10px);

  border-radius: 10px;
  box-shadow: 0 1.75rem 3.5rem rgba(0, 0, 0, 0.1);
}
</style>
