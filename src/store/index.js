import { createStore } from "vuex";

export default createStore({
  state: {
    card: JSON.parse(localStorage.getItem("card")) || {
      title: "Заголовок карточки",
      body: "Тело карточки",
      draggable: true,
      totalNumber: 5,
    },
    totalCards: [],
  },
  getters: {
    card(state) {
      localStorage.setItem("card", JSON.stringify(state.card));
      return state.card;
    },
    totalCards(state) {
      localStorage.setItem("card", JSON.stringify(state.card));
      state.totalCards.length = 0;
      for (let i = 0; i < state.card.totalNumber; i++) {
        if (state.totalCards.length < 16) {
          state.totalCards.push(state.card);
        }
      }
      return state.totalCards;
    },
    totalNumber: (state) => state.totalNumber,
  },
  mutations: {
    SET_CARD: (state, payload) => {
      state.card = payload;
    },
    SET_TOTAL: (state, payload) => {
      state.totalCards = payload;
    },
  },
  actions: {
    setCard({ commit }) {
      commit("SET_CARD");
    },
  },
  modules: {},
});
