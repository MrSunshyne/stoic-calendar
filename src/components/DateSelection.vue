<template>
  <div class="container mx-auto">
    <div class="md:flex justify-center gap-4">
      <div class="">
        <birth-datepicker class="w-full" v-model="getAge" :hideHeader="true" :inline="true" />
      </div>
      <div class="flex flex-col justify-center text-center ">
        <div class="text-center uppercase font-bold text-sm text-gray-400">
          Select your date of birth
        </div>
        <div class="text-3xl font-serif">
          {{ getDob }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import birthDatepicker from "vue-birth-datepicker/src/birth-datepicker";
import { mapGetters } from "vuex";
export default {
  components: {
    birthDatepicker,
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
};
</script>
