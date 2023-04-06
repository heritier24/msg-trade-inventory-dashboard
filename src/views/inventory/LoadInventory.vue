<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div>
            <div class="row">
              <div class="col-md-6">
                <div class="card-body">
                  <h4 class="card-title">Record To New Stock</h4>
                  <div class="form-group">
                    <label for="exampleInputUsername1"
                      >Select Received Stock Name:</label
                    >
                    <button
                      class="btn btn-success active float-right"
                      style="margin-left: 415px"
                      @click="newBulk()"
                    >
                      New Stock Name
                    </button>
                    <v-select
                      :options="bulks"
                      :v-model="bulkname"
                      :reduce="(bulks_name) => bulks_name.id"
                      label="bulks_name"
                      @input="getBulkid"
                    ></v-select>
                  </div>
                  <div class="form-group">
                    <button
                      class="btn btn-success active float-right"
                      style="margin-left: 505px"
                      @click="newProduct()"
                    >
                      New Product
                    </button>
                    <label for="exampleInputEmail1"
                      >Select Product To Load</label
                    >
                    <v-select
                      :options="products"
                      :v-model="productname"
                      :reduce="(product_name) => product_name.id"
                      label="product_name"
                      @input="getProductId"
                    ></v-select>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputUsername1">Quantity</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="quantity"
                      placeholder="Quantity "
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Price:</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Price"
                      v-model="price"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Description:</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Description"
                      v-model="description"
                    />
                  </div>
                  <button
                    type="button"
                    class="btn btn-success active float-right"
                    @click="submitLoadInventory()"
                  >
                    Create
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
          <div class="row" v-if="loading">
            <div class="col-lg-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h3>Stock of {{ loadName }}</h3>
                  <DataTable :parameters="parameters" />
                </div>
              </div>
            </div>
            <!-- <div class="col-lg-6 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h3>Live Stock</h3>
                  <DataTable :parameters="parametersInventory" />
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
import DataTable from "../../components/DataTable.vue";
import TableButtonsInventoryLoad from "../../components/globalComponents/buttonsTable/TableButtonsInventoryLoad.vue";
import { errorHandlingMixins } from "../../mixins/errorHandlingMixins.js";
import NewBulk from "../../components/NewBulk.vue";
import NewProduct from "../../components/NewProduct.vue";
export default {
  mixins: [errorHandlingMixins],
  components: {
    DataTable,
  },
  data() {
    return {
      loading: false,
      loadName: "",
      bulkname: "",
      productname: "",
      price: "",
      quantity: "",
      description: "",
      bulks: [],
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
            key: "product_name",
            title: "Product Type",
          },
          {
            key: "quantity",
            title: "Quantity",
          },
          {
            key: "dateLoaded",
            title: "Date Loaded",
          },
          {
            title: "Actions",
            component: TableButtonsInventoryLoad,
          },
        ],
      },
      parametersInventory: {
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
            key: "product_name",
            title: "Product Type",
          },
          {
            key: "total_quantity",
            title: "Quantity",
          },
          {
            key: "price",
            title: "Product Price",
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(["getReloadInventory"]),
    ...mapGetters(["getReloadProduct"])
  },
  watch: {
    getReloadInventory: function() {
      this.listBulks();
    },
    getReloadProduct: function() {
      this.listProducts();
    }
  },
  methods: {
    newBulk() {
      this.$modal.show(
        NewBulk,
        { width: 500 },
        { shiftX: 1, shiftY: 0, width: 500, height: 400 }
      );
    },
    newProduct() {
      this.$modal.show(
        NewProduct,
        { width: 500 },
        { shiftX: 1, shiftY: 0, width: 500, height: 400 }
      );
    },
    async getBulkid(value) {
      this.bulkname = value;
      this.loading = true;
      this.inventory();
      this.loadInventoryByBulks();
    },
    getProductId(value) {
      this.productname = value;
    },
    async submitLoadInventory() {
      const data = {
        bulk_id: this.bulkname,
        product_id: this.productname,
        price: this.price,
        quantity: this.quantity,
        description: this.description,
      };
      try {
        const response = await axios.post(
          "http://localhost:84/api/load-inventory",
          data
        );
        this.loadInventoryByBulks();
        this.inventory();
        this.$noty.success(response.data);
        (this.price = ""),
          (this.quantity = ""),
          (this.description = ""),
          (this.productname = "");
      } catch (error) {
        this.displayUnauthorized(error);
        console.log(error);
      }
      // Load inventory load List after submitting Load Inventory
      try {
        const response = await axios.get(
          "http://localhost:84/api/load-inventory/" + this.bulkname
        );
        this.$Progress.finish();
        this.parameters.data = response.data.bulks;
        this.loadName = response.data.bulkName;
      } catch (error) {
        this.$Progress.fail();
        console.log(error);
      }
    },
    async loadInventoryByBulks() {
      try {
        const response = await axios.get(
          "http://localhost:84/api/load-inventory/" + this.bulkname
        );
        this.$Progress.finish();
        this.parameters.data = response.data.bulks;
        this.loadName = response.data.bulkName;
      } catch (error) {
        this.$Progress.fail();
        console.log(error);
      }
    },
    async inventory() {
      this.$Progress.start();
      try {
        const response = await axios.get("http://localhost:84/api/inventory");
        this.$Progress.finish();
        this.parametersInventory.data = response.data;
      } catch (error) {
        this.$Progress.fail();
        console.log(error);
      }
    },
    async listBulks() {
      this.$Progress.start();
      try {
        const response = await axios.get("http://localhost:84/api/bulks");
        this.$Progress.finish();
        this.bulks = response.data;
        let reload = "";
        this.$store.commit("setReloadInventory", reload);
      } catch (error) {
        this.$Progress.fail();
        console.log(error);
      }
    },
    async listProducts() {
      this.$Progress.start();
      try {
        const response = await axios.get(
          "http://localhost:84/api/product-type"
        );
        this.$Progress.finish();
        this.products = response.data;
      } catch (error) {
        this.$Progress.fail();
        console.log(error);
      }
    },
  },
  mounted() {
    this.listBulks();
    this.listProducts();
  },
};
</script>
