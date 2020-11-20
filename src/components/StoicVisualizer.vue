<template>
  <div id="viz" class="container mx-auto">
    <div class="years pt-10" v-if="isEnabled">
      <!-- <a class="go-to-viz text-center grid place-items-center relative" href="#viz">
        <svg class="w-12 h-12" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </a> -->
      <div class="weeks leading-none" v-for="(year, yearIndex) in years" :key="yearIndex">
        <div v-for="(week, weekIndex) in weeks" class="week relative " :key="yearId(yearIndex, weekIndex)">
          <div
            class="singleWeek text-xs text-center border border-black"
            :class="{ 'isActive print:border-1': isActive(yearId(yearIndex, weekIndex)) }"
            :style="`--animation-order: ${yearId(yearIndex, weekIndex)};`"
          >
            <!-- {{ yearId(yearIndex, weekIndex) }} -->
          </div>
        </div>
        <!-- Show Age -->
        <div class="text-gray-400 border-b text-center text-sm"> {{ setYear(yearIndex) }} </div>
      </div>
      <a class="text-center grid place-items-center h-20" href="#start">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </a>
      <div class="text-center py-10 print:hidden">
        <p>
          Get a printed version by clicking <a class="cursor-pointer" onClick="window.print()"><strong>here</strong></a>
        </p>
      </div>
    </div>
    <!-- <div v-else>
      pick date pls
    </div> -->
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
    setYear(yearIndex) {
      let year = yearIndex + 1 ;
      return (year > 9) ? year : '0' + year;
    }
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
  --delay-multiplier: 1ms;
  display: grid;
  /* gap: 10px; */
  /* grid-template-columns: repeat(53, calc(var(--size) + 20px)); */
  grid-template-columns: repeat(53, 1fr);
  align-items: center;
}

@media screen and (min-width: 1600px) {
  .weeks {
    --size: 32px;
  }
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
  margin: calc(var(--size) / 10) 0;
  /* transition-property: all;
  transition-duration: 0.8s;
  transition-delay: calc(var(--animation-order) * var(--delay-multiplier));
  transition-timing-function: linear; */
  /* animation-name: unpaint;
  animation-duration: 0.8s;
  animation-delay: calc(calc(var(--animation-order) * var(--delay-multiplier)));
  animation-timing-function: linear;
  animation-fill-mode: forwards; */
}

@media screen and (max-width: 600px) {
  .singleWeek {
     width: calc(var(--size) / 4);
  }
}
.isActive {
  /* border-width: 4px;
   */
  /* background: black; */
  /* transition-property: all; */
  animation-name: paint;
  animation-duration: 0.8s;
  animation-delay: calc(calc(var(--animation-order) * var(--delay-multiplier)));
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  /* animation: paint 2s linear alternate forwards; */
}

@keyframes paint {
  0% {
    background: transparent;
  }
  100% {
    background: black;
  }
}
</style>
