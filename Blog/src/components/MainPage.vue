import React, { useState } from 'react';
import Calendar from 'react-calendar';

<template>
  
  <header id="page_header">
    <img src="..\assets\Kirby.png">
    <h1>m1ng's blog :D</h1>
    <nav>
      <ul>
        <RouterLink to="/MainPage" class="top">HomePage</RouterLink>
        <RouterLink to="/AboutMe" class="top">About me</RouterLink>
        <RouterLink to="/TechSupport" class="top">TechSupport</RouterLink>
        
      </ul>
    </nav>
  </header>
  <section id="sider">
    <a href="https://github.com/nbtca">NBTCA</a>
  <button @click="count++">{{ count }}</button>
  <RouterLink to="/LoginSheet" class="top">Login</RouterLink>
  </section>
  
  

  <section id="posts">
    <article class="post">
      <header>
        <br>
        <h2>*********************************************************************************<br>
            💻读书笔记</h2>
        <p>m1ng post in
          <time datetime="2023-06-12T10:20">June 20th, 2023 at 10:21AM</time>
        </p>
      </header>
      
      <h3>
        天将降大任于是人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为。<br>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;————《孟子·告子下》
      </h3>
      <footer>
        <p><a herf="comments"><i>14 comments<RouterLink to="./postpage/FirstPage" class="top">详情</RouterLink></i></a></p>
  
      </footer>
<br>
<br>
<br>

      <header>
        <h2>*********************************************************************************<br>
            🌏技术经验</h2>
        <p>m1ng post in
          <time datetime="2023-06-12T10:20">June 20th, 2023 at 10:21AM</time>
        </p>
      </header>
      
      <h3>
        Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态。 <br>
        如果您熟悉 Composition API，您可能会认为您已经可以通过一个简单的 export const state = reactive({}). <br>
        这对于单页应用程序来说是正确的，但如果它是服务器端呈现的，会使您的应用程序暴露于安全漏洞。 <br>
        但即使在小型单页应用程序中，您也可以从使用 Pinia 中获得很多好处<br>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;———— Pinia 中文文档
      </h3>
      <footer>
        <p><a herf="comments"><i>33 comments<RouterLink to="./postpage/SecondPage" class="top">详情</RouterLink></i></a></p>
      </footer>

<br>
<br>

      <header>
        <h2>*********************************************************************************<br>
          致我的朋友们</h2>
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
        <RouterLink to="/RadioPage" class="top">Radio</RouterLink>
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
  MyApp() {
    const [value, setValue] = useState(new Date());

    function onChange(nextValue) {
      setValue(nextValue);
    }

    return (
      <Calendar
        onChange={onChange}
        value={value}
      />
    );
    },
  data() {
    return {
      count: 0,
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
#sider{
  margin-left: 1250px;
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
  width: 64%;
  margin-left: 50px;
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
