<template>
  <div class="navbar">
    <div @click="$router.push('/')" class="navbar__button">Настройки</div>
    <div @click="$router.push('cards')" class="navbar__button">Карточки</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
};
</script>

<style scoped lang="scss">
.navbar {
  padding-left: 100px;
  &__button {
    padding: 25px;
    display: inline-block;
  }
}
</style>
