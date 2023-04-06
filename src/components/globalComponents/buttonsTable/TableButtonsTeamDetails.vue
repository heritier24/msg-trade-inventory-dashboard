<template>
  <div>
    <button class="btn btn-success active" @click="viewTeamDetails()" title="view team details">
      Team Details
    </button>
  </div>
</template>
<script>
export default {
  name: "ButtonDelete",
  methods: {
    async viewTeamDetails() {
      this.$Progress.start();
      this.$router.push(`/teams/${this.data.id}`);
    },
  },
  props: {
    // prop below is REQUIRED:
    data: {
      type: Object,
    },
  },
};
</script>