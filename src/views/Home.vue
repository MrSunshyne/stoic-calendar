<template>
  <div class="container mx-auto">
    <div class="grid grid-flow-col items-center gap-4">
      <span>Weeks lived : {{ weeksCount }} </span>
      <birth-datepicker v-model="age" />
      <span>Days lived : {{ daysLived }}</span>
    </div>

    <router-link :to="{ name: 'visualizer', params: { count: weeksCount } }"
      >Visualize</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
import birthDatepicker from "vue-birth-datepicker/src/birth-datepicker";
export default {
  components: {
    birthDatepicker,
  },
  data() {
    return {
      age: 628646400000,
    };
  },
  computed: {
    dob() {
      return new Date(this.age);
    },
    today() {
      return new Date();
    },
    weeksCount() {
      return this.weeksBetween(this.dob, this.today);
    },
    daysLived() {
      return this.weeksCount * 7;
    },
  },
  methods: {
    weeksBetween(d1, d2) {
      return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
    },
  },
};
</script>
