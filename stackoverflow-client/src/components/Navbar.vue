<template>
<nav class="navbar navbar-default" role="navigation">
  <a class="navbar-brand" href="#"><img class="logo" src="http://hammerjs.github.io/assets/img/stackoverflow-icon.svg" alt="logo">
    <p id="brand">stack<b>overflow</b> </p>
  </a>
  <!-- Collect the nav links, forms, and other content for toggling -->
  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul class="nav navbar-nav">
      <li><a href="#">Questions</a></li>
      <li><a href="#">Documentation</a></li>
      <li><a href="#">User</a></li>
    </ul>
    <div class="col-sm-3 col-md-3">
      <form class="navbar-form" role="search">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search" name="q">
          <div class="input-group-btn">
            <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <!-- /.navbar-collapse -->
</nav>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style scoped>
#brand {
  font-size: 35px;
  margin: -23px 0 0 -45%
}

.logo {
  width: 5%;
}
</style>
