<template>
  <div v-if="this.totalCards.length == 0">Карточек нет</div>
  <div class="cards-section">
    <draggable
      :sort="this.$store.state.card.draggable"
      class="cards-list"
      :list="list"
    >
      <div
        class="cards-list__item"
        :style="{ backgroundColor: randomColor(id) }"
        v-for="(card, id) in this.totalCards"
        :key="card.title"
      >
        <h3>{{ card.title }}</h3>
        <p>{{ card.body }}</p>
      </div>
    </draggable>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { VueDraggableNext } from "vue-draggable-next";
// import Draggable from "vue3-draggable";
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    draggable: VueDraggableNext,
  },
  name: "CardsPage",
  data() {
    return {
      colorCache: [],
    };
  },
  methods: {
    randomColor(id) {
      console.log(id);
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
