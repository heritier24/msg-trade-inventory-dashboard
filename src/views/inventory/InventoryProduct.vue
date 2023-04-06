<template>
  <div>
    <div>
      <div class="row">
        <div class="col-12 grid-margin stretch-card">
          <div class="card">
            <div class="row">
              <div class="col-md-6">
                <div class="card-body">
                  <h4 class="card-title">
                    Single Details of Products called: {{ productName }}
                  </h4>
                  <div class="">
                    <div
                      class="d-flex justify-content-between align-items-center mb-2 mb-sm-0"
                    >
                      <div>
                        <h4 class="text-md mb-2">
                          Total Quantity In Live Stock
                        </h4>
                        <h4 class="mb-0 fw-bold">
                          {{ quantity_stock }} Pieces
                        </h4>
                      </div>
                      <div>
                        <p class="text-small mb-2"></p>
                        <h4 class="mb-0 fw-bold"></h4>
                      </div>
                      <div>
                        <h4 class="text-md mb-2">Total Quantity in Teams</h4>
                        <h4 class="mb-0 fw-bold">{{ quantity_stock_team }}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h4 class="card-title">
                    Select Product Category To View Details Information
                  </h4>
                  <div class="row">
                    <div class="col-sm-6"></div>
                    <div class="col-sm-6">
                      <v-select
                        :options="products"
                        :v-model="product_id"
                        :reduce="(product_name) => product_name.id"
                        label="product_name"
                        @input="getProductId"
                      ></v-select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 grid-margin stretch-card">
          <div class="card">
            <div class="row" style="height: 200px; margin-top: 20px">
              <!-- <div class="col-md-1"></div> -->
              <div class="col-md-11" style="margin-left: 25px">
                <div
                  class="d-flex justify-content-between align-items-center mb-2 mb-sm-0"
                >
                  <InventoryTeamProductItem
                    v-for="(team, key) in teams"
                    :key="key"
                    :classPieces="team.classPieces"
                    :classTeaam="team.classTeam"
                    :pieces="team.pieces"
                    :teamName="team.team_name"
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
import { errorHandlingMixins } from "../../mixins/errorHandlingMixins.js";
import InventoryTeamProductItem from "../../components/globalComponents/InventoryTeamProductItem.vue";
export default {
  mixins: [errorHandlingMixins],
  components: {
    InventoryTeamProductItem,
  },
  data() {
    return {
      products: [],
      product_id: "",
      productName: "",
      quantity_stock: "",
      quantity_stock_team: "0",
      teams: [],
    };
  },
  methods: {
    async getProductId(value) {
      this.product_id = value;
      try {
        const response = await axios.get(
          "http://localhost:84/api/product-type/" + this.product_id
        );
        this.productName = response.data.product_name;
        this.quantity_stock = response.data.total_quantity;
        this.quantity_stock_team = response.data.quantity_stock_team;
        this.teams = response.data.inventoryteams;
      } catch (error) {
        this.displayUnauthorized(error);
      }
    },
    async listProducts() {
      try {
        const response = await axios.get(
          "http://localhost:84/api/product-type"
        );
        this.products = response.data;
      } catch (error) {
        this.displayUnauthorized(error);
      }
    },
    // get product type name from product id selected from params.route.id
    async getProductNameTextbyProductIdRoute() {
      const productId = this.$route.params.id;
      try {
        const response = await axios.get(
          "http://localhost:84/api/product-type/" + productId
        );
        this.productName = response.data.product_name;
        this.quantity_stock = response.data.total_quantity;
        this.quantity_stock_team = response.data.quantity_stock_team;
         this.teams = response.data.inventoryteams;
      } catch (error) {
        this.displayUnauthorized(error);
      }
    },
  },
  mounted() {
    this.listProducts();
    this.getProductNameTextbyProductIdRoute();
  },
};
</script>
