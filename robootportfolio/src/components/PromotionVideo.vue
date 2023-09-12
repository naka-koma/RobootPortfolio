<template>
    <h1>{{ header }}</h1>
    <div class="iframeWrapper">
      <iframe width="1280px" height="720px" src="https://www.youtube.com/embed/SNh966U_HoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
  name: 'PromotionVideos',
  props: {
      header: String
  }
}
</script>

<style scoped>
div.iframeWrapper {
  position: relative;
  padding-bottom: 42.0%;
  height: 0;
  overflow: hidden;
}
 
div.iframeWrapper iframe {
  position: absolute;
  top: 0;
  left: 12.5%;
  width: 75%;
  height: 100%;
}
</style>