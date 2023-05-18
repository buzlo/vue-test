<template>
  <v-select v-model="picked" :items="items" :label="label" clearable></v-select
></template>

<script>
export default {
  props: ["value", "items", "label"],
  computed: {
    picked: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value)
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
