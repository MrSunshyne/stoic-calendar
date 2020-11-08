<template>
  <div class="container mx-auto">
    {{ this.age}}
    <input type="date" placeholder="Enter your age" class="border text-2xl p-1 text-center my-10" v-model="age"> 
    <div>Weeks lived : {{ weeksToPaint }} | {{ weeksCount }} </div>
    <div>Days lived : {{ daysLived }}</div>
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
      age: new Date('12/03/1989')
    }
  },
  computed: {
    dob() {
      return new Date(this.age)
    },
    today() {
      return new Date();
    },
    weeksCount() {
      return this.weeksBetween(this.dob, this.today)
    },
    weeksToPaint() {
      return parseFloat(this.age) * parseFloat (this.weeks)
    },
    daysLived() {
      return this.weeksToPaint * 7;
    }
  },
  methods: {    
    weeksBetween(d1, d2) {
      return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
    },
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
