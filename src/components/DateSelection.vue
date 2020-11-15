<template>
  <div id="start" class="date-selection grid place-items-center container mx-auto">
    <div>
      &nbsp;
    </div>
    <div class="flex flex-col justify-center">
      <div class="flex flex-col gap-3 justify-center text-center ">
        <div class="text-center uppercase text-sm text-gray-400 flex items-center justify-center gap-2">
          <div>
            Type in your date of birth?
          </div>
          <button class="cursor-pointer hover:text-black" @click="hideDatepicker = !hideDatepicker">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="text-5xl font-serif">
          <!-- {{ getDob }} -->
          <input v-if="hideDatepicker" type="text" v-model="temporaryAge" placeholder="3 Dec 1989" class="w-full date-text text-center border-b" />
          <div class="" v-else>
            <birth-datepicker class="w-full" v-model="getAge" :inline="true" />
          </div>
          <router-link :to="{ name: 'about' }" class="text-lg py-4 text-black  hover:text-gray-500 tracking-wider">What is a stoic calendar?</router-link>
        </div>
      </div>
    </div>
    <a @click="applyAge()" class="go-to-viz text-center grid place-items-center relative" href="#viz">
      <svg class="w-12 h-12" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </a>
  </div>
</template>

<script>
import birthDatepicker from "vue-birth-datepicker/src/birth-datepicker";
import { mapGetters } from "vuex";
export default {
  components: {
    birthDatepicker,
  },
  data() {
    return {
      hideDatepicker: true,
      temporaryAge: null,
    };
  },
  computed: {
    getAge: {
      get() {
        return this.$store.getters.getAge;
      },
      set(value) {
        this.$store.commit("SET_AGE", value);
      },
    },
    ...mapGetters(["weeksCount", "getDob"]),
  },
  methods: {
    applyAge: function() {
      this.$store.commit("SET_AGE", this.temporaryAge);
    },
  },
};
</script>

<style>
.birthday-picker_dropdown-header {
  background: black;
}

.go-to-viz {
  height: 20vh;
}
.date-selection {
  height: 100vh;
}

.date-text {
  font-size: 36px; /* Some tweener fallback that doesn't look awful */
  font-size: 5.4vw;
}
</style>
