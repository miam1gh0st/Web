<template>
    <div class="card" >
      {{ cardData }}
    </div>
  </template>
  
  <script>
  export default {
    props: ['cardData'],
  };
  </script>
  
  <style>
  .card {
    width: 200px;
    height: 200px;
    background-color: #ddd;
    text-align: center;
    padding: 50px;
  }
  </style>
  