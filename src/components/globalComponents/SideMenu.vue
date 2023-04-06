<template>
  <div>
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link" href="">
            <i class="mdi mdi-grid-large menu-icon"></i>
            <span class="menu-title">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item nav-category">Company</li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="collapse"
            href="#ui-basic"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <i class="menu-icon mdi mdi-floor-plan"></i>
            <span class="menu-title">STOCK</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="ui-basic">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link to="/load-inventory" class="nav-link"
                  >Stock Load</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/inventory" class="nav-link"
                  >View Stock</router-link
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item nav-category">TEAMS</li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="collapse"
            href="#form-elements"
            aria-expanded="false"
            aria-controls="form-elements"
          >
            <i class="menu-icon mdi mdi-card-text-outline"></i>
            <span class="menu-title">Stock TEAM</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="form-elements">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/inventory-team"
                  >Load Stock Team</router-link
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="collapse"
            href="#charts"
            aria-expanded="false"
            aria-controls="charts"
          >
            <i class="menu-icon mdi mdi-chart-line"></i>
            <span class="menu-title">SALES</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="charts">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <a class="nav-link" href="pages/charts/chartjs.html"
                  >New Sales</a
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="collapse"
            href="#tables"
            aria-expanded="false"
            aria-controls="tables"
          >
            <i class="menu-icon mdi mdi-table"></i>
            <span class="menu-title">EXPENSES</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="tables">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <a class="nav-link" href="pages/tables/basic-table.html"
                  >New Expenses</a
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="collapse"
            href="#icons"
            aria-expanded="false"
            aria-controls="icons"
          >
            <i class="menu-icon mdi mdi-layers-outline"></i>
            <span class="menu-title">REPORTS</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="icons">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/inventory-report"
                  >Inventory Report</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/inventory-report-team"
                  >Inventory Team Report</router-link
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item nav-category">pages</li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="collapse"
            href="#auth"
            aria-expanded="false"
            aria-controls="auth"
          >
            <i class="menu-icon mdi mdi-account-circle-outline"></i>
            <span class="menu-title">Teams</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="auth">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link to="/new-employee" class="nav-link">
                  New Employee
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/new-team" class="nav-link">
                  New Team
                </router-link>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item nav-category">Users</li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="menu-icon mdi mdi-file-document"></i>
            <span class="menu-title">Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
