<template>
  <div class="cards-section">
    <ul class="cards-list">
      <li
        :draggable="this.$store.state.card.draggable"
        class="cards-list__item"
        v-for="(card, id) in this.totalCards"
        :key="id"
        :style="{ backgroundColor: randomColor(id) }"
      >
        <h3>{{ card.title }}</h3>
        <p>{{ card.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CardsPage",
  data() {
    return {
      colorCache: {},
    };
  },
  methods: {
    randomColor(id) {
      const r = () => Math.floor(256 * Math.random());
      return (
        this.colorCache[id] ||
        (this.colorCache[id] = `rgba(${r()}, ${r()}, ${r()}, 0.3)`)
      );
    },
  },
  computed: {
    ...mapGetters(["totalCards"]),
  },
};
</script>

<style scoped lang="scss">
.cards-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  &__item {
    border-radius: 5px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    width: 40%;
    padding: 1rem 5rem;
    & h3 {
      font-size: 2rem;
    }
  }
}
</style>
