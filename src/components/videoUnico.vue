<template>
  <div class="video">
    <iframe width="800" height="400" src="https://www.youtube.com/embed/nLKv5G1RrZI"
      title="OS 5 RIOS MAIS POLUÍDOS DO MUNDO" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>
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