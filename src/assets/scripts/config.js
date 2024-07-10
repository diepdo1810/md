export default {
  builtinFonts: [
    {
      label: `Sans-serif`,
      value: `-apple-system-font,BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB , Microsoft YaHei UI , Microsoft YaHei ,Arial,sans-serif`,
      desc: `Font 123Abc`,
    },
    {
      label: `Serif`,
      value: `Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif`,
      desc: `Font 123Abc`,
    },
    {
      label: `Mono`,
      value: `Menlo, Monaco, 'Courier New', monospace`,
      desc: `Font 123Abc`,
    },
  ],
  sizeOption: [
    {
      label: `12px`,
      value: `12px`,
      desc: `smaller`,
    },
    {
      label: `13px`,
      value: `13px`,
      desc: `slightly smaller`,
    },
    {
      label: `14px`,
      value: `14px`,
      desc: `recommend`,
    },
    {
      label: `15px`,
      value: `15px`,
      desc: `slightly larger`,
    },
    {
      label: `16px`,
      value: `16px`,
      desc: `bigger`,
    },
  ],
  colorOption: [
    {
      label: `Classic blue`,
      value: `rgba(15, 76, 129, 1)`,
      desc: `latest trend`,
    },
    {
      label: `Elegant green`,
      value: `rgba(0, 152, 116, 1)`,
      desc: `Fresh`,
    },
    {
      label: `Passionate red`,
      value: `rgba(250, 81, 81, 1)`,
      desc: `Lively`,
    },
    // { label: `微信绿`, value: `rgb(26, 173, 25,1)`, desc: `经典微信绿` },
  ],
  codeThemeOption: [
    {
      label: `github`,
      value: `https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/npm/highlight.js@11.5.1/styles/github.min.css`,
      desc: `light`,
    },
    {
      label: `solarized-light`,
      value: `https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/npm/highlight.js@11.5.1/styles/solarized-light.min.css`,
      desc: `light`,
    },
    {
      label: `atom-one-dark`,
      value: `https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/npm/highlight.js@11.5.1/styles/atom-one-dark.min.css`,
      desc: `dark`,
    },
    {
      label: `obsidian`,
      value: `https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/npm/highlight.js@11.5.1/styles/obsidian.min.css`,
      desc: `dark`,
    },
    {
      label: `vs2015`,
      value: `https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/npm/highlight.js@11.5.1/styles/vs2015.min.css`,
      desc: `dark`,
    },
  ],
  legendOption: [
    {
      label: `title priority`,
      value: `title-alt`,
      desc: ``,
    },
    {
      label: `alt priority`,
      value: `alt-title`,
      desc: ``,
    },
    {
      label: `Show only title`,
      value: `title`,
      desc: ``,
    },
    {
      label: `Show only alt`,
      value: `alt`,
      desc: ``,
    },
    {
      label: `Do not show`,
      value: `none`,
      desc: ``,
    },
  ],
  form: {
    rows: 1,
    cols: 1,
  },
}