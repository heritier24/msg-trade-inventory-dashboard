<template>
  <div>
    <div
      class="d-sm-flex align-items-center justify-content-between border-bottom"
    >
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active ps-0"
            id="home-tab"
            data-bs-toggle="tab"
            href="#overview"
            role="tab"
            aria-controls="overview"
            aria-selected="true"
            >Overview</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            href="#audiences"
            role="tab"
            aria-selected="false"
            >Audiences</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            href="#demographics"
            role="tab"
            aria-selected="false"
            >Demographics</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link border-0"
            id="more-tab"
            data-bs-toggle="tab"
            href="#more"
            role="tab"
            aria-selected="false"
            >More</a
          >
        </li>
      </ul>
      <div>
        <div class="btn-wrapper">
          <a href="#" class="btn btn-otline-dark align-items-center"
            ><i class="icon-share"></i> Share</a
          >
          <a href="#" class="btn btn-otline-dark"
            ><i class="icon-printer"></i> Print</a
          >
          <a href="#" class="btn btn-primary text-white me-0"
            ><i class="icon-download"></i> Export</a
          >
        </div>
      </div>
    </div>
    <div class="tab-content tab-content-basic">
      <div
        class="tab-pane fade show active"
        id="overview"
        role="tabpanel"
        aria-labelledby="overview"
      >
        <div class="row">
          <div class="col-sm-12">
            <div
              class="statistics-details d-flex align-items-center justify-content-between"
            >
              <div>
                <p class="statistics-title">TEAM A</p>
                <h3 class="rate-percentage">32.53%</h3>
                <p class="text-danger d-flex">
                  <i class="mdi mdi-menu-down"></i><span>-0.5%</span>
                </p>
              </div>
              <div>
                <p class="statistics-title">TEAM X</p>
                <h3 class="rate-percentage">7,682</h3>
                <p class="text-success d-flex">
                  <i class="mdi mdi-menu-up"></i><span>+0.1%</span>
                </p>
              </div>
              <div>
                <p class="statistics-title">TEAM Q</p>
                <h3 class="rate-percentage">68.8</h3>
                <p class="text-danger d-flex">
                  <i class="mdi mdi-menu-down"></i><span>68.8</span>
                </p>
              </div>
              <div class="d-none d-md-block">
                <p class="statistics-title">TEAM P</p>
                <h3 class="rate-percentage">2m:35s</h3>
                <p class="text-success d-flex">
                  <i class="mdi mdi-menu-down"></i><span>+0.8%</span>
                </p>
              </div>
              <div class="d-none d-md-block">
                <p class="statistics-title">TEAM B</p>
                <h3 class="rate-percentage">68.8</h3>
                <p class="text-danger d-flex">
                  <i class="mdi mdi-menu-down"></i><span>68.8</span>
                </p>
              </div>
              <div class="d-none d-md-block">
                <p class="statistics-title">TEAM Z</p>
                <h3 class="rate-percentage">2m:35s</h3>
                <p class="text-success d-flex">
                  <i class="mdi mdi-menu-down"></i><span>+0.8%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 d-flex flex-column">
            <div class="row flex-grow">
              <div class="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                <div class="card card-rounded">
                  <div class="card-body">
                    <DataTable
                    :parameters="parameters"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 d-flex flex-column">
            <div class="row flex-grow">
              <div class="col-md-6 col-lg-12 grid-margin stretch-card">
                <div class="card bg-primary card-rounded">
                  <div class="card-body pb-0">
                    <h4 class="card-title card-title-dash text-white mb-4">
                      Status Summary
                    </h4>
                    <div class="row">
                      <div class="col-sm-4">
                        <p class="status-summary-ight-white mb-1">
                          Closed Value
                        </p>
                        <h2 class="text-info">357</h2>
                      </div>
                      <div class="col-sm-8">
                        <div class="status-summary-chart-wrapper pb-4">
                          <canvas id="status-summary"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-12 grid-margin stretch-card">
                <div class="card card-rounded">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-6">
                        <div
                          class="d-flex justify-content-between align-items-center mb-2 mb-sm-0"
                        >
                          <div class="circle-progress-width">
                            <div
                              id="totalVisitors"
                              class="progressbar-js-circle pr-2"
                            ></div>
                          </div>
                          <div>
                            <p class="text-small mb-2">Total Visitors</p>
                            <h4 class="mb-0 fw-bold">26.80%</h4>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <div class="circle-progress-width">
                            <div
                              id="visitperday"
                              class="progressbar-js-circle pr-2"
                            ></div>
                          </div>
                          <div>
                            <p class="text-small mb-2">Visits per day</p>
                            <h4 class="mb-0 fw-bold">9065</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
import DataTable from "../components/DataTable.vue"
import TableButtons from "../components/TableButtons.vue"
import { errorHandlingMixins  } from "../mixins/errorHandlingMixins.js"
export default {
   mixins: [errorHandlingMixins],
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
            title: "ID",
          },
          {
            key: "name",
            title: "Name",
          },
          {
            key: "industryName",
            title: "Industry",
          },
          {
            key: "statusByAdmin",
            title: "Status By Admin",
          },
          {
            key: "statusByKudiBooks",
            title: "Status By Kudibooks",
          },
          {
            key: "user_count",
            title: "User Count",
          },
          {
            key: "since",
            title: "Since",
          },
          {
            key: "creatorEmail",
            title: "Email",
          },
          {
            key: "creatorPhone",
            title: "Phone Number",
          },
          {
            key: "balance",
            title: "Balance",
          },
          {
            key: "price",
            title: "Price",
          },
          {
            key: "Type",
            title: "Type",
          },
          {
            key: "smsSenderName",
            title: "SMS SenderName",
          },

          {
            title: "Action",
            component: TableButtons,
          },
        ],
      },
    }
  }
}
</script>
