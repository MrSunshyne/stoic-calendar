<template>
  <div class="container mx-auto pt-10">
    <div class="years" v-if="isEnabled">
      <div class="weeks leading-none" v-for="(year, yearIndex) in years" :key="yearIndex">
        <div v-for="(week, weekIndex) in weeks" class="week relative " :key="yearId(yearIndex, weekIndex)">
          <div class="singleWeek text-xs text-center border border-black" :class="{ isActive: isActive(yearId(yearIndex, weekIndex)) }">
            <!-- {{ yearId(yearIndex, weekIndex) }} -->
          </div>
        </div>
        <!-- Show Age -->
        <div class="text-gray-400 border-b text-center text-sm">{{ yearIndex + 1 }}</div>
      </div>
    </div>
    <div v-else>
      pick date pls
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
    isEnabled: {
      get() {
        return this.$store.getters.isEnabled;
      },
      set(value) {
        this.$store.commit("TOGGLE_ENABLED", value);
      },
    },
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
};
</script>

<style lang="postcss">
.birthday-picker td a.bdp-active,
.birthday-picker td:hover a.bdp-active {
  background: theme(colors.gray.500);
}
</style>

<style scoped lang="css">
.weeks {
  --size: 16px;
  display: grid;
  /* gap: 10px; */
  /* grid-template-columns: repeat(53, calc(var(--size) + 20px)); */
  grid-template-columns: repeat(53, 1fr);
  align-items: center;
}

.years {
  display: grid;
  /* gap: 10px; */
}

.week {
  display: grid;
  place-items: center;
  cursor: pointer;
  content: "&nbsp;";
  background: transparent;
  border-radius: 100%;
}

.week:hover {
  background: theme(colors.gray.200);
}

.week:hover > .singleWeek {
  display: grid;
}

.singleWeek {
  display: block;
  width: calc(var(--size) / 2);
  height: calc(var(--size) / 2);
  margin: calc(var(--size) / 2) 0;
  transition: background 0.5s ease-in-out;
}

.isActive {
  /* border-width: 4px;
   */
  background: black;
  transition: background 0.8s linear;
  /* animation: paint 2s linear alternate forwards; */
}
</style>
