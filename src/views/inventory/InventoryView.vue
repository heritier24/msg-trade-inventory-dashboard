<template>
    <div>
      <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <form class="forms-sample" @submit.prevent="submitTeams">
            <div class="row">
              <div class="col-md-6">
                <div class="card-body">
                  <h4 class="card-title">Live Stock of MSG LTD</h4>
                </div>
              </div>
              <div class="col-md-6">
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
                  <h2>Stock Product Data LIst</h2>
                  <DataTable 
                  :parameters="parameters"/>
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
import DataTable from "../../components/globalComponents/dataTable.vue"
import TableButtonsInventory from "../../components/globalComponents/buttonsTable/TableButtonsInventory.vue"
export default {
  name: 'my-component',
  components: {
    DataTable
  },
  data () {
    return {
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
          {
            key: "updated_at",
            title: "Date Updated"
          },
          {
            title: "Actions",
            component: TableButtonsInventory
          }
        ],
      },
    }
  },
  methods: {
    async inventory () {
        this.$Progress.start();
      try {
        const response = await axios.get('http://localhost:84/api/inventory')
        this.$Progress.finish();
        this.parameters.data = response.data
      } catch (error) {
        this.$Progress.fail();
        console.log(error);
      }
    },
  },
  mounted () {
    this.inventory();
  }
}
</script>
