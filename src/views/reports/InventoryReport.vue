<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div>
            <div class="row">
              <div class="col-md-2">
                <div class="card-body">
                  <h4 class="card-title">Inventory Report</h4>
                </div>
              </div>
              <div class="col-md-2">
                <h4 class="card-title"></h4>
                <div class="form-group">
                  <label for="exampleInputUsername1"
                    >Select Inventory Report Type:</label
                  >
                  <v-select
                    :options="reports"
                    :v-model="report_type"
                    :reduce="(types) => types.name"
                    label="types"
                    @input="reportType"
                  ></v-select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card-body">
                  <div class="form-group" v-if="dateFrominput">
                    <label for="exampleInputEmail1">Date From:</label>
                    <input
                      type="date"
                      class="form-control"
                      placeholder="quantity"
                      v-model="date_from"
                    />
                  </div>
                  <div class="form-group" v-if="bulksInput">
                    <label>Select Bulks Name </label>
                    <v-select
                      :options="bulks"
                      :v-model="bulk_id"
                      :reduce="(bulks_name) => bulks_name.id"
                      label="bulks_name"
                      @input="selectBulk"
                    ></v-select>
                  </div>
                </div>
              </div>
              <div class="col-sm-3" v-if="dateToinput">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Date To:</label>
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Total Price"
                      v-model="date_to"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-2">
                <div class="card-body">
                  <label for=""></label><br />
                  <button
                    v-if="btnreportin"
                    type="button"
                    class="btn btn-success active float-right"
                    @click="requestReportIn()"
                  >
                    View Report
                  </button>
                  <button
                    v-if="btnreportout"
                    type="button"
                    class="btn btn-success active float-right"
                    @click="requestReportOut()"
                  >
                    View Report
                  </button>
                </div>
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
                  <h3>Report of {{ reportTypeName }} {{ bulksNametitle }}</h3>
                  <DataTable
                    v-if="dataTableReportin"
                    :parameters="parameters"
                  />
                  <DataTable
                    v-if="dataTableReportout"
                    :parameters="parametersReportout"
                  />
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
import { errorHandlingMixins } from "../../mixins/errorHandlingMixins.js";
export default {
  mixins: [errorHandlingMixins],
  components: {
    DataTable,
  },
  data() {
    return {
      reportTypeName: "",
      dateFrominput: false,
      bulksInput: false,
      dateToinput: false,
      btnreportin: false,
      btnreportout: false,
      dataTableReportin: false,
      dataTableReportout: false,
      bulksNametitle: "",
      bulk_id: "",
      type_name: "",
      bulks: [],
      date_from: "",
      date_to: "",
      reports: [
        {
          name: "Inventory In",
          types: "Inventory In",
        },
        {
          name: "Inventory Out",
          types: "Inventory Out",
        },
      ],
      report_type: "",
      parameters: {
        data: [],
        lang: "en",
        actionMode: "single",
        showDownloadButton: true,
        columns: [
          {
            key: "id",
            title: "#",
          },
          {
            key: "product_name",
            title: "Product Type",
          },
          {
            key: "quantity",
            title: "Product Quantity",
          },
          {
            key: "price",
            title: "Product Price",
          },
          {
            key: "bulks_name",
            title: "Bulks Name",
          },
          {
            key: "dateLoaded",
            title: "Date Loaded",
          },
          {
            key: "description",
            title: "Description",
          },
        ],
      },
      parametersReportout: {
        data: [],
        lang: "en",
        actionMode: "single",
        showDownloadButton: true,
        columns: [
          {
            key: "id",
            title: "#",
          },
          {
            key: "product_name",
            title: "Product Type",
          },
          {
            key: "quantity",
            title: "Product Quantity",
          },
          {
            key: "price",
            title: "Product Price",
          },
          {
            key: "bulks_name",
            title: "Bulks Name",
          },
          {
            key: "dateLoaded",
            title: "Date Loaded",
          },
          {
            key: "description",
            title: "Description",
          },
        ],
      },
    };
  },
  methods: {
    reportType(value) {
      if (value == "Inventory In") {
        this.bulksInput = true;
        this.dateFrominput = false;
        this.dateToinput = false;
        this.btnreportin = true;
        this.btnreportout = false;
      } else {
        this.dateFrominput = true;
        this.dateToinput = true;
        this.bulksInput = false;
        this.btnreportout = true;
        this.btnreportin = false;
      }
    },
    selectBulk(value) {
      this.bulk_id = value;
    },
    async loadingDataOptions() {
      // load teams
      try {
        const response = await axios.get("http://localhost:84/api/bulks");
        this.bulks = response.data;
      } catch (error) {
        this.displayUnauthorized(error);
      }
    },
    async requestReportIn() {
      this.reportTypeName = this.reports[0].name;
      this.dataTableReportin = true;
      this.dataTableReportout = false;
      let bulkID = this.bulk_id;
      if (bulkID == "") {
        this.$noty.error("Please Select Bulk name to view inventor report in");
      } else {
        try {
          const response = await axios.get(
            "http://localhost:84/api/load-inventory/" + bulkID
          );
          this.parameters.data = response.data.bulks;
          this.bulksNametitle = response.data.bulkName;
        } catch (error) {
          this.displayUnauthorized(error);
        }
      }
    },
    async requestReportOut() {
      this.dataTableReportout = true;
      this.dataTableReportin = false;
      this.reportTypeName = this.reports[1].name;
      let dateFrom = this.date_from;
      let dateTo = this.date_to;
      try {
          const response = await axios.get(
            "http://localhost:84/api/load-inventory/" + dateFrom + "/" + dateTo
          );
          this.parameters.data = response.data.bulks;
          this.bulksNametitle = response.data.bulkName;
        } catch (error) {
          this.displayUnauthorized(error);
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
