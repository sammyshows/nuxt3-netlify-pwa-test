<template>
  <h1>Hello.js</h1>
</template>

<script>

export default {
  name: "Index",

  mounted() {
    let viewheight = window.innerHeight;
    let viewwidth = window.innerWidth;
    let viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", "height=" + viewheight + ", width=" + viewwidth + ", initial-scale=1.0");
  }
}
</script>