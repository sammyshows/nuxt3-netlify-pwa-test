<template>
  <div class="flex flex-col justify-between h-full pt-10 pb-4">
    <h1>Layout</h1>
    <p>Height: {{ height }}</p>
    <div class="h-full overflow-hidden flex flex-col flex-1">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "PageContainer",

  data() {
    return {
      height: 0
    }
  },

  mounted() {
    let viewheight = window.innerHeight;
    let viewwidth = window.innerWidth;
    this.height = viewheight
    let viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", "height=" + viewheight + ", width=" + viewwidth + ", initial-scale=1.0");
  }
}
</script>
