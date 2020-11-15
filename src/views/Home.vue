<template>
  <div>
    <div class="grid">
      <DateSelection />

      <a class="go-to-viz text-center grid place-items-center relative" href="#viz">
        <svg class="w-12 h-12" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </a>
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
