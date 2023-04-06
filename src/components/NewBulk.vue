<template>
  <div>
    <div class="card">
      <div>
        <div class="row">
          <div class="col-md-12">
            <div class="card-body">
              <h4 class="card-title">Record New Received Big Stock Name:</h4>
              <div class="form-group"></div>
              <div class="form-group">
              </div>
              <div class="form-group">
                <label for="exampleInputUsername1">Entering Received Stock Name:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="bulks_name"
                  placeholder="Entering received stock name"
                />
              </div>
              <button
                class="btn btn-success active pull-left"
                style="margin-left: 315px"
                @click="newBulk()"
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
      bulks_name: "",
    };
  },
  methods: {
    async newBulk() {
      const data = {
        bulks_name: this.bulks_name,
      };
      try {
        const response = await axios.post(
          "http://localhost:84/api/bulks",
          data
        );
        this.$noty.success(response.data);
        let reload = "inventory";
        this.$store.commit("setReloadInventory", reload);
      } catch (error) {
        this.displayUnauthorized(error);
        console.log(error);
      }
    },
  },
};
</script>