<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <div class="">
          <div class="row">
            <div class="row">
              <div class="col-sm-12">
                <div
                  class="statistics-details d-flex align-items-center justify-content-between"
                >
                  <div>
                    <p class="statistics-title">EMPLOYEE NAME</p>
                    <h3 class="rate-percentage">Ganza Tamba Heritier</h3>
                    <p class="text-danger d-flex">
                    </p>
                  </div>
                  <div>
                    <p class="statistics-title">TEAM NAME</p>
                    <h3 class="rate-percentage">Q</h3>
                    <p class="text-success d-flex">
                    </p>
                  </div>
                  <div>
                    <p class="statistics-title">TARGET</p>
                    <h6 class="rate-percentage">80 Pieces</h6>
                    <p class="text-danger d-flex">
                    </p>
                  </div>
                  <div class="d-none d-md-block">
                    <p class="statistics-title">ACHIEVED</p>
                    <h6 class="rate-percentage">60 Pieces</h6>
                    <p class="text-success d-flex">
                    </p>
                  </div>
                  <div class="d-none d-md-block">
                    <p class="statistics-title">REMAINING</p>
                    <p class="rate-percentage">20 Pieces</p>
                    <p class="text-danger d-flex">
                    </p>
                  </div>
                  <div class="d-none d-md-block">
                    <p class="statistics-title">PERFORMANCE</p>
                    <p class="rate-percentage">20 %</p>
                    <p class="text-success d-flex">
                    </p>
                  </div>
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
                  <h4>Transactions From Clients of  Ganza Tamba Heritier</h4>
                  <!-- <button type="button" class="btn btn-success active float-right" style="margin-left: 1200px;">Set Target</button> -->
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
import "vuejs-noty/dist/vuejs-noty.css";
import DataTable from "../../components/globalComponents/dataTable.vue";
export default {
  components: {
    DataTable
  },
  data() {
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
            key: "names",
            title: "Client Names",
          },
          {
            key: "phonenumber",
            title: "Product Names",
          },
          {
            key: "category",
            title: "Amount tobe Paid",
          },
          {
            key: "nationalid",
            title: "Amount Paid",
          },
          {
            key: "nationalid",
            title: "Amount Remaining",
          },
          {
            title: "Action",
            // component: TableButtons,
          },
        ],
      },
    };
  },
};
</script>
