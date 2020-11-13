<template>
  <div class="container mx-auto">
    {{ $route.params.count }}
    <div class="years py-10">
      <div class="weeks" v-for="(year, yearIndex) in years" :key="yearIndex">
        <div
          v-for="(week, weekIndex) in weeks"
          class="week overflow-hidden "
          :class="{ 'bg-black': isActive(yearId(yearIndex, weekIndex)) }"
          :key="yearId(yearIndex, weekIndex)"
        >
          .
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      weeks: 52,
      years: 90,
    };
  },
  computed: {
    ...mapGetters(["weeksCount"]),
    // weeksCount() {
    //   return this.$route.params.count;
    // },
    daysLived() {
      return this.weeksCount * 7;
    },
  },
  methods: {
    yearId(yearIndex, weekIndex) {
      return yearIndex * this.weeks + weekIndex + 1;
    },
    isActive(yearId) {
      return yearId <= this.weeksCount;
    },
  },
  watch: {
    weeksCount(week) {
      console.log(week);
    },
  },
};
</script>

<style scoped lang="css">
.weeks {
  --size: 10px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(52, minmax(var(--size), 1fr));
}

.years {
  display: grid;
  gap: 10px;
}

.week {
  width: var(--size);
  height: var(--size);
  /* background:black; */
  border: 1px solid black;
}
</style>
