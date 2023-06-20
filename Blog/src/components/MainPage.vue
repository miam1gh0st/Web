<template>
  
  <header id="page_header">
    <img src="..\assets\Kirby.png">
    <h1>m1ng's blog :D</h1>
    <nav>
      <ul>
        <RouterLink to="/" class="top">HomePage</RouterLink>
        <RouterLink to="/AboutMe" class="top">About me</RouterLink>
        <RouterLink to="/TechSupport" class="top">TechSupport</RouterLink>
        
      </ul>
    </nav>
  </header>
  <a href="https://github.com/nbtca">NBTCA</a>
  <button @click="count++">{{ count }}</button>
  
  <RouterLink to="/LoginSheet" class="top">Login</RouterLink>
  

  <section id="posts">
    <article class="post">
      <header>
        <br>
        <h2>Viewpost</h2>
        <p>m1ng post in
          <time datetime="2023-06-12T10:20">June 20th, 2023 at 10:21AM</time>
        </p>
      </header>
      
      <h3>
        The most important thing is must be patient.<br>
        Everything you can do just moving on, one day you will arrive.
      </h3>
      <footer>
        <p><a herf="comments"><i>14 comments</i></a></p>
      </footer>
<br>
<br>

      <header>
        <h2>Second Posts</h2>
        <p>m1ng post in
          <time datetime="2023-06-12T10:20">June 20th, 2023 at 10:21AM</time>
        </p>
      </header>
      
      <h3>
        The most important thing is must be patient.<br>
        Everything you can do just moving on, one day you will arrive.
      </h3>
      <footer>
        <p><a herf="comments"><i>14 comments</i></a></p>
      </footer>

<br>
<br>

      <header>
        <h2>To my lil friend</h2>
        <p>m1ng post in
          <time datetime="2023-06-12T10:20">June 20th, 2023 at 10:21AM</time>
        </p>
      </header>
      
      <h3>
        The most important thing is must be patient.<br>
        Everything you can do just moving on, one day you will arrive.
      </h3>
      <footer>
        <p><a herf="comments"><i>14 comments</i></a></p>
      </footer>

<br>
<br>


    </article>
  </section>

  <section id="sidebar">
    <nav>
      <h3>File Collection</h3>
      <ul>
        <li><a herf="2023/06">June 2023</a></li>
        <li><a herf="2023/05">May 2023</a></li>
        <li><a herf="2023/04">April 2023</a></li>
        <li><a herf="2023/03">March 2023</a></li>
        <li><a herf="2023/02">Febrary 2023</a></li>
        <li><a herf="all">more</a></li>
      </ul>
    </nav>
  </section>

  

  <footer id="page_footer">
    <aside>
        <p>&ldquo;Life could be dream~ Life could be dream~&rdquo;</p>
      </aside>
    <nav>
      <ul>
        <RouterLink to="/" class="top">HomePage</RouterLink>
        <RouterLink to="/TeamMember" class="top">Team</RouterLink>
        <RouterLink to="/AboutMe" class="top">Security</RouterLink>
        <RouterLink to="/LifeStyle" class="top">Lifestyle</RouterLink>
      </ul>
    </nav>

    <p><br>Copyright © 2023 m1ng's blog.</p>
  </footer>

</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      count: 0
    }
  },




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin: 0 0 20px 0;
}

p,
li {
  line-height: 20px;
}

#page_header {
  width: 100%;
}

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

#posts {
  float: left;
  width: 74%;
}

#posts aside {
  float: right;
  font-size: 20px;
  line-height: 40px;
  margin-left: 5%;
  width: 35%;
}

#sidebar {
  float: left;
  width: 25%;
}

#page_footer {
  clear: both;
  display: block;
  text-align: center;
  width: 100%;
}
</style>
