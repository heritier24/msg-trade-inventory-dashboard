<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <br />
        <div class="card">
          <div class="card-header">
            <h5>Update Team Details Info</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <!-- <div class="col-sm-1"></div> -->
              <div class="col-sm-10">
                <form @submit.prevent="updateTeams">
                  <div class="row">
                    <div class="col-sm-4">
                      <label for="">Employee Name:</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="employeeName"
                        placeholder="Employee Name"
                        readonly
                      />
                    </div>
                    <div class="col-sm-3">
                      <label for="">Plate Number:</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="plateNumber"
                        placeholder="Plate Number"
                      />
                    </div>
                    <div class="col-sm-3">
                      <label for="">Status:</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Status"
                        v-model="status"
                      />
                    </div>
                    <div class="col-sm-2">
                      <br />
                      <button class="btn btn-success active">Update</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { errorHandlingMixins } from "../mixins/errorHandlingMixins.js";
export default {
  mixins: [errorHandlingMixins],
  data() {
    return {
      teamId: "",
      employeeName: "",
      plateNumber: "",
      status: "",
    };
  },
  methods: {
    getTeamsData() {
      this.teamId = this.$store.state.teamId;
      this.employeeName = this.$store.state.employeeName;
      this.plateNumber = this.$store.state.plateNumber;
      this.status = this.$store.state.status;
    },
    async updateTeams() {
      this.$Progress.start();
      let id = this.teamId;
      const data = {
        plate_number: this.plateNumber,
        status: this.status,
      };
      try {
        const response = await axios.put(
          `http://localhost:84/api/teams/${id}`,
          data
        );
        this.$Progress.finish();
        this.$noty.success(response.data);
      } catch (error) {
        this.displayUnauthorized();
        this.$Progress.fail();
        console.log(error);
      }
    },
  },
  mounted() {
    this.getTeamsData();
  },
};
</script>