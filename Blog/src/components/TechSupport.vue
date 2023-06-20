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

  <div>
    <Card
      v-for="(card, index) in cards"
      :key="index"
      :cardData="card"
      
    />
  </div>


</template>

<script>

import Card from './LittleCard.vue';

    export default{
        name:"TechSupport",
        components: {Card,
        },
        data() {
          return {
            cards: 
            [
              'card 1',
              'card 2',
              'card 3',
            ],
          };
        },
    }
    
</script>

<style scoped>

.card {
  margin-left:450px;
  margin-top:100px;
  width: 200px;
  height: 200px;
  background-color: #ddd;
  text-align: center;
  padding: 50px;
  position: absolute;
  animation: slideUpDown 0.3s ease-in-out alternate;
}

@keyframes slideUpDown {
  from {
    transform: translateY(-100px);
  }
  to{
    transform: translateY(0);
  }
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

</style>