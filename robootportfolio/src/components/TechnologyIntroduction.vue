<template>
    <h1>{{ header }}</h1>
    <p>本ゲームでは以下の技術を利用しています。</p>
    <h2>Unity</h2>
      <img alt="Unity" src="../assets/Unity.png">
    <h2>OpenXR(XR Intraction Toolkit)</h2>
      <p>Unity社製のOpenXR PluginとXRインタラクションのためのツールキットです。</p>
      <img alt="OpenXR" src="../assets/OpenXR.png">
    <h2>C#</h2>
      <img alt="CSharp" src="../assets/CSharp.png">
</template>

<script>
export default {
  name: 'TechnologyIntroductions',
  props: {
      header: String
  }
}
</script>

<style scoped>

.inline-image {
    display: flex;
    align-items: center;
    justify-content: center;
}

h2 {
  position: relative;
  padding: 1rem .5rem;
}

h2:after {
  position: absolute;
  bottom: 0;
  left: 12.5%;
  width: 75%;
  height: 5px;
  content: '';
  background-image: -webkit-gradient(linear, left top, right top, from(#2af598), to(#009efd));
  background-image: -webkit-linear-gradient(left, #2af598 0%, #009efd 100%);
  background-image: linear-gradient(to right, #2af598 0%, #009efd 100%);
}

img {
    width: 75%; /*画像サイズ指定*/
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
}

</style>