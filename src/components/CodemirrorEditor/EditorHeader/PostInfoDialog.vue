<script>
export default {
  name: `PostInfoDialog`,
  props: {
    form: {
      type: Object,
    },
  },
  emits: [`close`, `post`],
}
</script>

<template>
  <el-dialog :title="$t('translate.发布')" :model-value="form.dialogVisible">
    <el-alert
      style="margin-bottom: 1em"
      :title="$t('customize.alert')"
      type="info"
      show-icon
    />
    <el-form
      class="postInfo"
      label-position="right"
      label-width="50px"
      :model="form"
    >
      <el-form-item :label="$t('translate.封面')">
        <el-input
          :model-value="form.thumb"
          :placeholder="$t('translate.自动提取第一张图')"
        />
      </el-form-item>
      <el-form-item :label="$t('translate.标题')">
        <el-input
          :model-value="form.title"
          :placeholder="$t('translate.自动提取第一个标题')"
        />
      </el-form-item>
      <el-form-item :label="$t('translate.描述')">
        <el-input
          type="textarea"
          :rows="4"
          :model-value="form.desc"
          :placeholder="$t('translate.自动提取第一个段落')"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button @click="$emit('close')">
        {{ $t('translate.取消') }}
      </el-button>
      <el-button type="primary" @click="$emit('post')">
        {{ $t('translate.确定') }}
      </el-button>
    </template>
  </el-dialog>
</template>
