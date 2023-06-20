<template>
  <header id="page_header">
    <h1>TechSupport</h1>
    <nav>
      <ul>
        <RouterLink to="/" class="top">HomePage</RouterLink>
        <RouterLink to="/AboutMe" class="top">About me</RouterLink>
        <RouterLink to="/TechSupport" class="top">TechSupport</RouterLink>
      </ul>
    </nav>
  </header>
</template>

<script>
    export default{
        name:"TechSupport"
    }
</script>

<style scoped>
#page_header>nav>ul,
#page_footer>nav>ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.top{
  margin: 10px;
}

#page_header>nav>ul>li,
#page_footer>nav>ul>li {
  margin: 0 20px 0 0;
  padding: 0;
  display: inline;
}

</style>