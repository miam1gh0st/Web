<template>
  <header id="page_header">
    <h1>About Me</h1>
    <nav>
      <ul>
        <RouterLink to="/MainPage" class="top">HomePage</RouterLink>
        <RouterLink to="/AboutMe" class="top">About me</RouterLink>
        <RouterLink to="/TechSupport" class="top">TechSupport</RouterLink>
      </ul>
    </nav>
  </header>
  <div>
    <iframe src="../click/click.html" />
  </div>
</template>
 
 

<script>
export default {
  name: "AboutMe"
}

</script>
  
  
  
  
<style scoped>
#page_header>nav>ul,
#page_footer>nav>ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.top {
  margin: 10px;
}

#page_header>nav>ul>li,
#page_footer>nav>ul>li {
  margin: 0 20px 0 0;
  padding: 0;
  display: inline;
}

#btn {
  margin-left: 850px;
  margin-top: 300px;
}

* {
  box-sizing: border-box;
}

body {
  background-color: #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  overflow: hidden;
}

button {
  background-color: rebeccapurple;
  border-radius: 5px;
  box-shadow: 4px 4px 5px rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  cursor: pointer;
  padding: 1rem 2rem;
  position: relative;
  transition: transform 0.1s linear, box-shadow 0.1s linear;
  z-index: 10;
}

button:active {
  transform: translate(4px, 4px);
  box-shadow: 0 0 0 rebeccapurple;
}

button:focus {
  outline: none;
}

.particle {
  --x: 0;
  --y: 0;
  background-color: rebeccapurple;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 5px;
  width: 5px;
  z-index: -1;
}

.particle.move {
  animation: move 1000ms linear forwards;
}

@keyframes move {
  to {
    transform: translate(var(--x), var(--y));
  }

  95% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>