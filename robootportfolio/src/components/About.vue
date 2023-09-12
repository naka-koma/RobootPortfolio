<template>
    <h1>{{ header }}</h1>
    <p>
    Roboot は ゲームエンジン「Unity」を用いて作成したVRシューティングゲームです。<br>
    好きなロボットアニメから着想を得て、「全天球風コックピット」と「球体型コントローラー」を採用し<br>
    既存のコントローラーによる操作ではなく、よりVRらしいロボット操作を追求したシューティングゲームとなっています。
    </p>
    <h2>全天球風コックピット</h2>    
    <img alt="全天球風コックピット" src="../assets/ingame_cockpit.gif">
    <h2>球体型コントローラーと<br>3Dユーザーインターフェイス</h2>
    <img alt="球体型コントローラーと3D空間上に浮かぶユーザーインターフェイス" src="../assets/ingame_1.png">
</template>

<script>
export default {
  name: 'MyAbout',
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