<template>
  <div class="content">
    <div class="text main-text">欢迎使用!请选择你的管理需求</div>
  </div>
</template>
<script>
import router from "@/router/router-static";
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.$storage.get("Token")) {
        this.$http({
          url: `${this.$storage.get("sessionTable")}/session`,
          method: "get",
        }).then(({ data }) => {
          if (data && data.code != 0) {
            router.push({ name: "login" });
          }
        });
      } else {
        router.push({ name: "login" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes siz {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 500px;
  text-align: center;

  background-image: url("./serve.webp");
  background-size: cover;
  background-position: center;
  .main-text {
    font-size: 38px;
    font-weight: bold;
    margin-top: 15%;
  }
  .text {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    letter-spacing: 0.15em;
    animation: siz 3s steps(60) forwards;
  }
}
</style>
