<template>
  <el-dialog
    :title="$t('translate.关于')"
    class="about__dialog"
    :visible="visible"
    @close="$emit('close')"
    width="30%"
    center
  >
    <div style="text-align: center">
      <h3>Markdown editor</h3>
      <p>Pefect Day</p>
      <img
        src="https://cdn.qrcode-ai.com/qrcode/cb2ed0306a7b4e392969f9390110de55-1720584412193.png"
        style="width: 40%"
        alt="QR code"
      />
    </div>
    <template slot="footer">
      <el-button
        type="primary"
        @click="onRedirect('https://github.com/diepdo1810')"
        plain
      >
        GitHub
      </el-button>
      <el-button
        type="primary"
        @click="onRedirect('https://chiaser.vercel.app/')"
        plain
      >
        Blog
      </el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onRedirect(url) {
      window.open(url)
    },
  },
}
</script>

<style lang="less" scoped>
/deep/ .el-dialog {
  min-width: 420px;
}
</style>
