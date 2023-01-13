<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img alt="Vue logo" src="../assets/logo.png" width="30" height="24" />
        VUE
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link angular" aria-current="page" href="#/angular">
            <i class="fa-brands fa-angular text-danger mr-2"></i>
            Switch Me To Angular
          </a>
          <a class="nav-link" href="#/react">
            <i class="fa-brands fa-react mr-2 text-blue"></i> Switch me to React
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.text-blue {
  color: #00d8ff;
}
</style>