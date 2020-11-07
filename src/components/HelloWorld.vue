<template>
  <div class="container mx-auto">
    <input type="text" placeholder="Enter your age" class="border text-2xl p-1 text-center my-10" v-model="age"> 
    <div>Weeks lived : {{ weeksToPaint }}</div>
    <div class="years py-10">
      <div class="weeks" v-for="(year, yearIndex) in years">
        <div 
          v-for="(week, weekIndex) in weeks" 
          class="week" 
          :class="{ 'bg-black': isActive(yearId(yearIndex, weekIndex))}"
          :id="yearId(yearIndex, weekIndex)" >
            &nbsp; 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weeks : 52,
      years: 90,
      age: 30
    }
  },
  computed: {
    weeksToPaint() {
      return parseFloat(this.age) * parseFloat (this.weeks)
    }
  },
  methods: {
    yearId(yearIndex, weekIndex) {
      return (yearIndex * this.weeks) + weekIndex + 1
    },
    isActive(yearId) {
      return yearId <= this.weeksToPaint
    }
  }
};
</script>

<style scoped lang="css">
  .weeks {
    --size: 10px;
    display:grid;
    gap : 10px;
    grid-template-columns: repeat(52, minmax(var(--size),1fr));
  }

  .years {
    display:grid;
    gap : 10px;
  }

  .week {
    width: var(--size);
    height: var(--size);
    /* background:black; */
    border: 1px solid black;
  }
</style>
