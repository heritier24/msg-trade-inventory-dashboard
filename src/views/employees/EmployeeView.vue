<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <form class="forms-sample" @submit.prevent="submitEmployee">
            <div class="row">
              <div class="col-md-6">
                <div class="card-body">
                  <h4 class="card-title">Record New Employee</h4>
                  <div class="form-group">
                    <label for="exampleInputUsername1">Names</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="names"
                      placeholder="full names"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Phone Number</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Record new employee Phone Number "
                      v-model="phonenumber"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputUsername1">Category</label>
                    <select class="form-control" v-model="category">
                      <option>Rwandaise</option>
                      <option>Egyptian</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1"
                      >National Id or Passport Number</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="national id number or passport number"
                      v-model="nationalid"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1"
                      >Address From National id</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="address from national id"
                      v-model="address"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1"
                      >Location</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Location of Employee"
                      v-model="location"
                    />
                  </div>
                  <button
                    type="button"
                    class="btn btn-success active float-right"
                    @click="submitEmployee()"
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
                  <h2>List All Employees of the Company</h2>
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
import TableButtons from "../../components/globalComponents/buttonsTable/TableButtons.vue";
import { errorHandlingMixins } from "../../mixins/errorHandlingMixins.js";
export default {
  mixins: [errorHandlingMixins],
  name: "my-component",
  components: {
    DataTable,
  },
  data() {
    return {
      names: "",
      phonenumber: "",
      category: "",
      nationalid: "",
      address: "",
      location: "",
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
            title: "Names",
          },
          {
            key: "phonenumber",
            title: "Phone Number",
          },
          {
            key: "category",
            title: "Category",
          },
          {
            key: "nationalid",
            title: "Naional Id | Passport Id",
          },
          {
            title: "Action",
            component: TableButtons,
          },
        ],
      },
    };
  },
  methods: {
    async submitEmployee() {
      const data = {
        names: this.names,
        phonenumber: this.phonenumber,
        category: this.category,
        nationalid: this.nationalid,
        address: this.address,
        location: this.location
      };
      try {
        const response = await axios.post(
          "http://localhost:84/api/employees/create",
          data
        );
        this.$noty.success(response.data);
        this.listEmployees();
      } catch (error) {
        this.displayUnauthorized(error);
        console.log(error);
      }
    },
    async listEmployees() {
      try {
        const response = await axios.get("http://localhost:84/api/employees");
        this.parameters.data = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.listEmployees();
  },
};
</script>
