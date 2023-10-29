<template>
  <div class="WelcomePage">
    <div class="background-image"></div>
    <div class="button-container">
      <button @click="jump" class="welcome-button">欢迎访问小明的博客:D</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
  methods: {
    jump() {
      this.$router.push({ path: '/MainPage' });
    },
  },
};
</script>

<style>
.WelcomePage {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/WelcomeKirby.jpg');
  background-size: cover;
  z-index: -1;
}

.button-container {
  text-align: center;
  z-index: 0;
}

.welcome-button {
  background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); /* 彩虹渐变背景 */
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: white;
  
}
</style>