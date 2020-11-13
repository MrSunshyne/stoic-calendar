<template>
  <div class="container mx-auto">
    <div class="grid grid-flow-col items-center gap-4">
      <span>Weeks lived : {{ weeksCount }} </span>
      <birth-datepicker v-model="getAge" />
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
    ...mapGetters(["weeksCount"]),
  },
};
</script>
