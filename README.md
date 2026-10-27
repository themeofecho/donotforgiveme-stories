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

## 部署到 GitHub + Cloudflare Pages

1. 新建 GitHub 仓库，上传此目录内全部文件到仓库根目录。
2. Cloudflare 控制台选择 Workers & Pages → 创建 Pages 项目 → 连接 GitHub 仓库。
3. Framework preset 选择 None；Build command 留空；Build output directory 填 `.`（英文句号）；部署。
4. 以后提交仓库的新修改，会由 Cloudflare Pages 自动重新部署。

参考：https://developers.cloudflare.com/pages/get-started/git-integration/

**隐私提醒：** 支持区的微信、支付宝收款图片会作为公开网页资源访问，请确保愿意公开照片中显示的昵称或头像等信息。
