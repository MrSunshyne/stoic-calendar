<template>
  <div class="container mx-auto py-10">
    <IntroSection />
    <DateSelection />

    <!-- <router-link :to="{ name: 'visualizer', params: { count: weeksCount } }">Visualize</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
import birthDatepicker from "vue-birth-datepicker/src/birth-datepicker";
import DateSelection from "../components/DateSelection.vue";
import IntroSection from "../components/IntroSection.vue";
export default {
  components: {
    birthDatepicker,
    IntroSection,
    DateSelection,
  },
};
</script>
