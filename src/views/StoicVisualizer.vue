<template>
  <div class="container mx-auto">
    <div class="years py-10">
      <div class="weeks" v-for="(year, yearIndex) in years" :key="yearIndex">
        <div
          v-for="(week, weekIndex) in weeks"
          class="week  relative "
          :class="{ 'bg-black hover:bg-red-500': isActive(yearId(yearIndex, weekIndex)) }"
          :key="yearId(yearIndex, weekIndex)"
        >
          <div class="singleWeek  z-10 hidden  absolute top-0 left-0 w-20 text-xs h-10 px-2 bg-gray-500 rounded grid place-items-center">
            Week {{ yearId(yearIndex, weekIndex) }}
          </div>
        </div>
        <!-- Show Age -->
        <div class="text-gray-400 border-b text-center text-sm">{{ yearIndex + 1 }}</div>
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
  grid-template-columns: repeat(53, minmax(var(--size), 1fr));
  align-items: center;
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
  cursor: pointer;
  content: "&nbsp;";
}

.week:hover > .singleWeek {
  display: grid;
}

.singleWeek {
}
</style>
