<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div>
            <div class="row">
              <div class="col-md-3">
                <div class="card-body">
                  <h4 class="card-title">Record Incoming Stock To Team</h4>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Employee Name</label>
                    <v-select
                      :options="employees"
                      :v-model="employeename"
                      :reduce="(names) => names.id"
                      label="names"
                      @input="getEmployeeName"
                    ></v-select>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputUsername1"> Team Name:</label>

                    <input
                      type="text"
                      class="form-control"
                      placeholder="team name"
                      v-model="teamname"
                      readonly
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <h4 class="card-title"></h4>
                <div class="form-group">
                  <label for="exampleInputUsername1">Date Loaded</label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="date_loaded"
                    placeholder="Date Loaded"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputUsername1">Product Type:</label>
                  <v-select
                    :options="products"
                    :v-model="productname"
                    :reduce="(product_name) => product_name.id"
                    label="product_name"
                    @input="getProductName"
                  ></v-select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Quantity:</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="quantity"
                      v-model="quantity"
                      @input="onQuantity"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Price:</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Price"
                      v-model="price"
                      @input="onPrice"
                      readonly
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="form-group">
                  <label for="exampleInputEmail1">Total Price:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Total Price"
                    v-model="total_amount"
                    readonly
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-success active float-right"
                  @click="submitInventoryLoadTeam()"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
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
                  <h3>Incoming Stock of Team {{ loadName }}</h3>
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
import DataTable from "../../components/DataTable.vue";
import TableButtonsTeamDetails from "../../components/globalComponents/buttonsTable/TableButtonsTeamDetails.vue";
import { errorHandlingMixins } from "../../mixins/errorHandlingMixins.js";
export default {
  mixins: [errorHandlingMixins],
  components: {
    DataTable,
  },
  data() {
    return {
      teamname: "",
      teamid: "",
      employeename: "",
      productname: "",
      date_loaded: "",
      price: "0",
      quantity: "0",
      total_amount: "0",
      teamNames: [],
      employees: [],
      products: [],
      parameters: {
        data: [],
        lang: "en",
        actionMode: "single",
        showDownloadButton: false,
        columns: [
          {
            key: "id",
            title: "#",
          },
          {
            key: "date_loaded",
            title: "Date Loaded",
          },
          {
            key: "team_name",
            title: "Team Name",
          },
          {
            key: "names",
            title: "Employee Names",
          },
          {
            key: "product_name",
            title: "Product Category",
          },
          {
            key: "quantity",
            title: "Quantity",
          },
          {
            key: "price",
            title: "Product Price",
          },
          {
            key: "total_amount",
            title: "Total Amount",
          },
          {
            title: "Actions",
            component: TableButtonsTeamDetails,
          },
        ],
      },
    };
  },
  methods: {
    onQuantity(event) {
      let totalQuantity = event.target.value;
      let price = this.price;
      this.total_amount = totalQuantity * price;
    },
    onPrice(event) {
      let price = event.target.value;
      this.total_amount = this.quantity * price;
    },
    // here you select employee name the retreive team name and team id of employee selected
    async getEmployeeName(value) {
      this.employeename = value;
      try {
        const response = await axios.get(
          "http://localhost:84/api/employees/" + this.employeename
        );
        this.teamname = response.data[0].team_name;
        this.teamid = response.data[0].id;
      } catch (error) {
        this.displayUnauthorized(error);
      }
    },
    // get the product id and product price from product name selected
    async getProductName(value) {
      this.productname = value;
      try {
        const response = await axios.get(
          "http://localhost:84/api/product-type/" + this.productname
        );
        this.price = response.data.price;
      } catch (error) {
        this.displayUnauthorized(error);
      }
    },
    async loadingDataOptions() {
      // load teams
      try {
        const response = await axios.get("http://localhost:84/api/teams");
        this.teamNames = response.data;
      } catch (error) {
        this.displayUnauthorized(error);
      }
      // load employees
      try {
        const response = await axios.get("http://localhost:84/api/employees");
        this.employees = response.data;
      } catch (error) {
        this.displayUnauthorized(error);
      }
      // load products
      try {
        const response = await axios.get(
          "http://localhost:84/api/product-type"
        );
        this.products = response.data;
      } catch (error) {
        this.displayUnauthorized(error);
      }
    },
    async submitInventoryLoadTeam() {
      const data = {
        date_loaded: this.date_loaded,
        team_id: this.teamid,
        employee_id: this.employeename,
        product_id: this.productname,
        price: this.price,
        quantity: this.quantity,
        total_amount: this.total_amount,
      };
      try {
        const response = await axios.post(
          "http://localhost:84/api/load-inventory-team",
          data
        );
        this.inventoryLoadTeam();
        this.$noty.success(response.data);
      } catch (error) {
        this.displayUnauthorized(error);
        console.log(error);
      }
    },
    async inventoryLoadTeam() {
      this.$Progress.start();
      try {
        const response = await axios.get(
          "http://localhost:84/api/load-inventory-team"
        );
        this.$Progress.finish();
        this.parameters.data = response.data;
      } catch (error) {
        this.$Progress.fail();
        console.log(error);
      }
    },
  },
  mounted() {
    this.loadingDataOptions();
    this.inventoryLoadTeam();
  },
};
</script>
