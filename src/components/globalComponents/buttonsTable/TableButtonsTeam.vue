<template>
  <div>
    <button class="btn btn-success active" @click="viewTeams()">View</button>
    <button class="btn btn-danger active" @click="editTeams()">Edit</button>
    <button class="btn btn-warning active" @click="setTarget()">Set Target</button>
  </div>
</template>
<script>
import axios from "axios";
import UpdateTeams from "../../UpdateTeams.vue";
import SettingTarget from "../../SettingTarget.vue";
export default {
  name: "ButtonDelete",
  methods: {
    viewTeams() {
      // this.$store.commit(actionName, this.data)
      this.$router.push(`/teams/${this.data.id}`);
    },
    editTeams() {
      let id = this.data.id;
      let employeeName = this.data.names;
      let plateNumber = this.data.plate_number;
      let status = this.data.status;
      this.$store.commit("setTeamId", id);
      this.$store.commit("setEmployeeName", employeeName);
      this.$store.commit("setPlateNumber", plateNumber);
      this.$store.commit("setStatus", status);
      this.$modal.show(
        UpdateTeams,
        { width: 500 },
        { shiftX: 0.5, shiftY: 0, width: 1000, height: 400 }
      );
    },
    setTarget() {
      let id = this.data.id;
      let employeeName = this.data.names;
      let plateNumber = this.data.plate_number;
      let status = this.data.status;
      this.$store.commit("setTeamId", id);
      this.$store.commit("setEmployeeName", employeeName);
      this.$store.commit("setPlateNumber", plateNumber);
      this.$store.commit("setStatus", status);
      this.$modal.show(
        SettingTarget,
        { width: 500 },
        { shiftX: 0.5, shiftY: 0, width: 1000, height: 400 }
      );
    },
    async deleteCompany() {
      this.$Progress.start();
      const id = this.$route.params.id;

      try {
        const response = await axios.delete(`/api/data/companies/${id}`);
        this.$Progress.finish();

        this.company = response.data;

        console.log(response.data);
      } catch (error) {
        this.$Progress.fail();
        console.log(error);
      }
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