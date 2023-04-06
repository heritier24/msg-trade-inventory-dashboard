<template>
  <div>
    <div class="card">
      <div>
        <div class="row">
          <div class="col-md-12">
            <div class="card-body">
              <h4 class="card-title">Record New Product</h4>
              <div class="form-group"></div>
              <div class="form-group"></div>
              <div class="form-group">
                <label for="exampleInputUsername1"
                  >Entering Product Name:</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="product_name"
                  placeholder="Entering product name"
                />
              </div>
              <button
                class="btn btn-success active pull-left"
                style="margin-left: 315px"
                @click="newProduct()"
              >
                Create
              </button>
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
      product_name: "",
    };
  },
  methods: {
    async newProduct() {
      const data = {
        product_name: this.product_name,
      };
      try {
        const response = await axios.post(
          "http://localhost:84/api/product-type",
          data
        );
        this.$noty.success(response.data);
        let reload = "product";
        this.$store.commit("setReloadProduct", reload);
      } catch (error) {
        this.displayUnauthorized(error);
        console.log(error);
      }
    },
  },
};
</script>