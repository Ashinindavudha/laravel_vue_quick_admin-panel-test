<template>
  <div>
    <div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Start Bootstrap </div>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light">Dashboard</a>
        <router-link :to="{ name: 'sandichapter' }" class="list-group-item list-group-item-action bg-light">Shortcuts</router-link>
        <a href="#" class="list-group-item list-group-item-action bg-light">Overview</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Events</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Profile</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Status</a>
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <div class="container-fluid">
          <div class="row justify-content-center">
             <div class="col-md-12">
        <div class="card mx-4">
            <div class="card-body p-4">
                <router-view></router-view>
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

export default {
  
};
</script>