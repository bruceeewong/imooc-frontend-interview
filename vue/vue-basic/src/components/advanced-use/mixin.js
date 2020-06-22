export default {
  data() {
    return {
      city: "深圳",
    };
  },
  mounted() {
    console.log("mixin mounted", this.name);
  },
  methods: {
    showName() {
      console.log(this.name);
    },
  },
};
