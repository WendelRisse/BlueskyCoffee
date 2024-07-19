<template>
  <img src="../assets/Citarum.jpg" alt="motel" class="imagemgrande" width="800" height="400">

  <div class="row">
    <img src="../assets/rioamarelo.jpg" alt="motel2" width="400" height="400">

    <img src="../assets/rioganges.jpg" alt="motel3" width="400" height="400">
  </div>
</template>

<script>
export default {
  name: 'ImagensDiversas'
}
</script>

<style>
h1 {
  text-align: center;
  font-size: 40px;
  font-family: Arial, sans-serif;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  border-bottom: 5px solid #ddd;
}

h2 {
  font-size: 24px;
  color: #666;
  margin-bottom: 1%;
  text-align: center;
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .imagemgrande {
    width: 100%;
  }

  .imagempequena {
    width: 100%;
  }
}

img {
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

img:hover {
  transform: rotate(2deg);
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.imagemgrande {
  margin: auto;
  display: block;
  max-width: 100%;
  height: auto;
  padding: 1%;
}

.imagempequena {
  flex: 100%;
  padding: 5%;
}
</style>