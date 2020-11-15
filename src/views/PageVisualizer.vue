<template>
  <div>
    <div class="container mx-auto">
      <!-- <router-link :to="{ name: 'visualizer', params: { count: weeksCount } }">Visualize</router-link> -->
      <StoicVisualizer />
    </div>
  </div>
</template>

<script>
import StoicVisualizer from "../components/StoicVisualizer.vue";
export default {
  components: {
    StoicVisualizer,
  },
};
</script>
