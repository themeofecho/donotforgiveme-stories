# donotforgiveme · 互动故事合集（极简版）

打开首页就直接展示全部模拟器，点击任一作品卡片即可开始游玩。移动端优先，纯静态 HTML/CSS/JS，无需安装依赖。

## 页面组成

- 首页直接展示作品卡片：FIVE SECRETS、OFF THE RECORD、《当你靠近》。卡片**整个区域都可以点击**。
- 下方提供 Threads、小红书入口。
- 赞赏区默认展开，微信和支付宝二维码直接可见；读者也可以点击标题收起，二维码可点开大图。
- 新作品添加后自动显示，无需改首页布局。

## 新增作品

打开 `works.js`，复制现有对象到 `window.STORY_WORKS` 数组内，修改：

```js
{
  title: '你的新游戏名称',
  english: '英文名（可选）',
  audience: '游戏类型、角色等一行简述',
  url: 'https://your-game.pages.dev/',
  theme: 'new'
},
```

封面主题可选 `secrets`（深紫）、`record`（粉）、`closer`（绿）或 `new`（灰）。如需为新作自定义封面颜色，可改 `styles.css` 的相应样式。

## 本地预览

双击 `index.html` 即可打开。也可在文件夹运行 `python3 -m http.server 8000`，然后在浏览器打开 `http://localhost:8000`。

## 正式部署：GitHub Pages

- 仓库：https://github.com/themeofecho/donotforgiveme-stories
- 网站：https://themeofecho.github.io/donotforgiveme-stories/
- 发布来源：Settings → Pages → Deploy from a branch → `main` → `/ (root)`。
- 纯静态网站，无需安装依赖或运行构建命令。
- 提交到 `main` 后，GitHub Pages 自动构建并更新网站；可在仓库 Actions 查看发布状态。
- 新增作品只需编辑 `works.js` 中的 `window.STORY_WORKS` 数组，复制一项并填写 `title`、`audience`、`url`、`theme`，保存提交即可。标题和数量会自动更新。
- `description`、`label`、`status` 为保留的配置字段，当前卡片不显示；`english` 仅在未填写 `audience` 时作为副标题。
- `index.html` 中的无 JavaScript 备用作品链接可以同步补充新作品。
- `assets/wechat-reward.jpg` 与 `assets/alipay.jpg` 为原始赞赏二维码，请保留原图。
- 本项目仅为作品集入口，不会修改或重新部署三个已有模拟器网站。

**隐私提醒：** 支持区的微信、支付宝收款图片会作为公开网页资源访问，请确保愿意公开照片中显示的昵称或头像等信息。
