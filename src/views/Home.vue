<template>
  <div>
    <div class="grid">
      <DateSelection />

      <!-- <router-link :to="{ name: 'visualizer', params: { count: weeksCount } }">Visualize</router-link> -->
      <StoicVisualizer />
    </div>
  </div>
</template>

<script>
import birthDatepicker from "vue-birth-datepicker/src/birth-datepicker";
import DateSelection from "../components/DateSelection.vue";
import IntroSection from "../components/IntroSection.vue";
import StoicVisualizer from "../components/StoicVisualizer.vue";
export default {
  components: {
    birthDatepicker,
    IntroSection,
    DateSelection,
    StoicVisualizer,
  },
};
</script>
