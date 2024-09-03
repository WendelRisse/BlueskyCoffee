<template>
  <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/1Uzv_PC-DM0?si=JpFXoboh-pTc1cf6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  nome: 'VideoUnico'
}
</script>
<style>
iframe {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.video {
  padding-top: 1%;
  padding-bottom: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>