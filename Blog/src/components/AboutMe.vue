<template>
  <div>
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

    <main id="main_content">
      <section id="about_section">
        <h2>About Me</h2>
        <p>Welcome to my personal website! I am passionate about technology and enjoy sharing my knowledge with others.</p>
        <p>In my free time, I like to explore the latest advancements in the tech world and experiment with new technologies.</p>
      </section>

      <section id="skills_section">
        <h2>Skills</h2>
        <ul>
          <li>Web Development</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>React.js</li>
          <li>Node.js</li>
        </ul>
      </section>
    </main>

    <footer id="page_footer">
      <nav>
        <ul>
          <RouterLink to="/Contact" class="top">Contact</RouterLink>
          <RouterLink to="/Portfolio" class="top">Portfolio</RouterLink>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      count: 0,
    }
  },
}
</script>

<style>
#page_header {
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 20px;
}

#page_header h1 {
  margin: 0;
}

#page_header nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#page_header nav ul li {
  display: inline-block;
  margin-right: 15px;
}

#main_content {
  padding: 30px;
}

#about_section h2,
#skills_section h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

#skills_section ul {
  margin-left: 20px;
}

#page_footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

#page_footer nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#page_footer nav ul li {
  display: inline-block;
  margin-right: 15px;
}
</style>