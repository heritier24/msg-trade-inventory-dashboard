<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <br />
        <div class="card">
          <div class="card-header">
            <h5>Setting Target of The Employee</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <!-- <div class="col-sm-1"></div> -->
              <div class="col-sm-10">
                <form>
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
                      <label for="">Select Monthly:</label>
                      <input
                        type="month"
                        class="form-control"
                        v-model="monthly"
                      />
                    </div>
                    <div class="col-sm-3">
                      <label for="">Target Pieces:</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="target pieces in Qty"
                        v-model="target_pieces"
                      />
                    </div>
                    <div class="col-sm-2">
                      <br />
                      <button
                        type="button"
                        class="btn btn-success active"
                        @click="submitTarget()"
                      >
                        Submit
                      </button>
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
      monthly: "",
      target_pieces: "",
    };
  },
  methods: {
    getTeamsData() {
      this.teamId = this.$store.state.teamId;
      this.employeeName = this.$store.state.employeeName;
    },
    async submitTarget() {
      this.$Progress.start();
      const data = {
        team_id: this.teamId,
        monthly: this.monthly,
        target_pieces: this.target_pieces,
      };
      try {
        const response = await axios.post(
          "http://localhost:84/api/target",
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