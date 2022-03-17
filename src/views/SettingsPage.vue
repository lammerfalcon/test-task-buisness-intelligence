<template>
  <form action="">
    <input v-model="this.card.title" type="text" />
    <input v-model="this.card.body" type="text" />
    <input v-model="this.card.draggable" type="checkbox" />
    <input
      v-model="this.$store.state.card.totalNumber"
      type="number"
      max="20"
    />
  </form>
  <button @click.prevent="export2txt()">Export data</button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SettingsPage",
  computed: {
    ...mapGetters(["card", "totalNumber", "totalCards"]),
  },
  methods: {
    export2txt() {
      const originalData = JSON.parse(localStorage.getItem("card"));

      const a = document.createElement("a");
      a.href = URL.createObjectURL(
        new Blob([JSON.stringify(originalData, null, 2)], {
          type: "text/plain",
        })
      );
      a.setAttribute("download", "data.json");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
  },
};
</script>

<style scoped>
form {
  gap: 10px;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  width: 50%;
}
</style>
