<template>
  <div>Header</div>
</template>

<script>
import store from "../store";
import { useStore } from "vuex";
export default {
  data() {
    return {
      store: useStore(),
      user: store.getters.getCurrentUser,
    };
  },
  watch: {
    user: function () {
      if (!this.user) this.$router.push("/");
    },
  },
  methods: {
  },
};
</script>

<style>
.nav-item {
  text-decoration: none !important;
}
</style>
