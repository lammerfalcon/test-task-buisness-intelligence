<template>
  <form>
    <label>Title</label>
    <input v-model="this.card.title" type="text" />
    <label>Body</label>
    <input v-model="this.card.body" type="text" />
    <div class="input-item">
      <label>Allow drag and drop</label>
      <input v-model="this.card.draggable" type="checkbox" />
    </div>
    <label>Cards to show(99 limit)</label>
    <input
      :value="this.$store.state.card.totalNumber"
      @input="updateValue"
      type="number"
    />
    <button class="btn" @click.prevent="exportJson()">Download Settings</button>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SettingsPage",
  computed: {
    ...mapGetters(["card", "totalNumber", "totalCards"]),
  },
  methods: {
    updateValue(event) {
      const value = event.target.value;
      console.log(value, this.$store.state.card.totalNumber);
      if (String(value).length <= 2) {
        this.$store.state.card.totalNumber = value;
      }
      this.$forceUpdate();
    },
    exportJson() {
      const originalData = JSON.parse(localStorage.getItem("card"));
      const a = document.createElement("a");
      a.href = URL.createObjectURL(
        new Blob([JSON.stringify(originalData, null, 2)], {
          type: "text/plain",
        })
      );
      a.setAttribute("download", "settings.json");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
  },
};
</script>

<style scoped lang="scss">
form {
  gap: 10px;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 600px;
}
.form-item {
  display: flex;
  flex-direction: column;
  position: relative;
}
input {
  border: 1px solid #cccccc;
  border-radius: 3px;
  background: #ffffff;
  outline: none;
  height: 42px;
  color: #000;
  font-size: 14px;
  padding-left: 20px;
}
.input-item {
  display: flex;
  align-items: center;
  gap: 20px;
}
button {
  border: 1px solid #cccccc;
  border-radius: 3px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 5px 10px 30px 1px rgb(0 0 0 / 5%);
  &:hover {
    background-color: #e9f4f6;
    transition: 150ms all ease-in-out;
  }
}
</style>
