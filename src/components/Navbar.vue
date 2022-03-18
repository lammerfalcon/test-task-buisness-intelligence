<template>
  <div class="navbar">
    <div
      :class="{ active: this.activeTab === 'Settings' }"
      @click="
        $router.push('/');
        setActiveTab('Settings');
      "
      class="navbar__button"
    >
      Settings
    </div>
    <div
      :class="{ active: this.activeTab === 'Cards' }"
      @click="
        $router.push('cards');
        setActiveTab('Cards');
      "
      class="navbar__button"
    >
      Cards
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  data() {
    return {
      activeTab: "Settings",
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped lang="scss">
.navbar {
  padding-left: 100px;
  background-color: white;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
  &__button {
    padding: 25px;
    display: inline-block;
    cursor: pointer;
  }
}
.active {
  font-weight: bold;
}
</style>
