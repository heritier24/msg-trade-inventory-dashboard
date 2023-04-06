<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <form class="forms-sample" @submit.prevent="submitTeams">
            <div class="row">
              <div class="col-md-6">
                <div class="card-body">
                  <h4 class="card-title">Adding Employees to Teams</h4>
                  <div class="form-group">
                    <label for="exampleInputUsername1"
                      >Select Employee Name</label
                    >
                    <v-select
                      :options="employees"
                      :v-model="employeeid"
                      :reduce="(names) => names.id"
                      label="names"
                      @input="getEmployeeid"
                    ></v-select>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Team Letter</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="for example (Q, T, X, Y, Z) "
                      v-model="teamname"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputUsername1">Plate Number</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="platenumber"
                      placeholder="Enterirng CAR Plate Number "
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Status:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Team Status"
                      v-model="status"
                      readonly
                    />
                  </div>
                  <button
                    type="button"
                    class="btn btn-success active float-right"
                    @click="submitTeams()"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="">
        <div class="">
          <div class="row">
            <div class="col-lg-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h2>Teams of Employees</h2>
                  <DataTable :parameters="parameters" />
                </div>
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
import "vuejs-noty/dist/vuejs-noty.css";
import DataTable from "../../components/globalComponents/dataTable.vue";
import TableButtonsTeam from "../../components/globalComponents/buttonsTable/TableButtonsTeam.vue";
import { errorHandlingMixins } from "../../mixins/errorHandlingMixins.js";
export default {
  mixins: [errorHandlingMixins],
  name: "my-component",
  components: {
    DataTable,
  },
  data() {
    return {
      employeeid: "",
      teamname: "",
      platenumber: "",
      status: "active",
      employees: [],
      parameters: {
        data: [],
        lang: "en",
        actionMode: "single",
        columns: [
          {
            key: "id",
            title: "#",
          },
          {
            key: "names",
            title: "Employee Names",
          },
          {
            key: "teamName",
            title: "Team Name",
          },
          {
            key: "category",
            title: "Category",
          },
          {
            key: "plate_number",
            title: "Car Plate Number",
          },
          {
            key: "status",
            title: "Status (active, inactive)",
          },
          {
            title: "Action",
            component: TableButtonsTeam,
          },
        ],
      },
    };
  },
  methods: {
    getEmployeeid(value) {
      this.employeeid = value;
    },
    async submitTeams() {
      this.$Progress.start();
      const data = {
        team_name: this.teamname,
        employee_id: this.employeeid,
        plate_number: this.platenumber,
      };
      try {
        const response = await axios.post(
          "http://localhost:84/api/teams",
          data
        );
        this.$Progress.finish();
        console.log(response);
        (this.teamname = ""), (this.employeeid = ""), (this.platenumber = "");
        this.$noty.success(response.data);
        this.listTeams();
      } catch (error) {
        this.displayUnauthorized(error);
        this.$Progress.fail();
        console.log(error);
      }
    },
    async listEmployees() {
      this.$Progress.start();
      try {
        const response = await axios.get("http://localhost:84/api/employees");
        this.$Progress.finish();
        this.employees = response.data;
      } catch (error) {
        this.$Progress.fail();
        console.log(error);
      }
    },
    async listTeams() {
      this.$Progress.start();
      try {
        const response = await axios.get("http://localhost:84/api/teams");
        this.$Progress.finish();
        this.parameters.data = response.data;
        this.employees = response.data;
      } catch (error) {
        this.$Progress.fail();
        console.log(error);
      }
    },
  },
  mounted() {
    this.listTeams(), this.listEmployees();
  },
};
</script>
