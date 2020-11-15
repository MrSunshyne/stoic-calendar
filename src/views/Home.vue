<template>
  <div class="home grid place-items-center bg-black ">
    <div class="border-8 bg-white w-full ">
      <div class="grid border-8 border-black w-full bg-white px-10">
        <DateSelection />

        <StoicVisualizer />
      </div>
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

<style lang="css">
.home {
  padding: calc(5vh - 16px) 5vw;
}
</style>
