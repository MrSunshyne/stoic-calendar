<template>
  <div class="container mx-auto">
    <DateSelection />

    <!-- <router-link :to="{ name: 'visualizer', params: { count: weeksCount } }">Visualize</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
import birthDatepicker from "vue-birth-datepicker/src/birth-datepicker";
import DateSelection from "../components/DateSelection.vue";
export default {
  components: {
    birthDatepicker,
    DateSelection,
  },
};
</script>
