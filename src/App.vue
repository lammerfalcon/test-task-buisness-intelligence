<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "App",
  components: { Navbar },
};
</script>

<style scoped></style>
