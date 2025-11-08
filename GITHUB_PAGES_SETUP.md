# GitHub Pages 部署指南

本文档将指导您如何将藏文化学习交流平台部署到GitHub Pages。

## 部署步骤

### 方式一：使用当前分支部署（推荐）

1. **访问GitHub仓库设置**
   - 打开浏览器，访问 https://github.com/confidence-kobe/blog
   - 点击仓库的 "Settings"（设置）标签

2. **配置GitHub Pages**
   - 在左侧菜单中找到 "Pages" 选项
   - 在 "Source" 部分：
     - Branch: 选择 `claude/tibetan-culture-learning-011CUw4Wdz41uTqKAeoEEjq6`
     - Folder: 选择 `/ (root)`
   - 点击 "Save" 保存

3. **等待部署**
   - GitHub会自动开始构建和部署
   - 通常需要1-3分钟
   - 部署完成后会显示访问链接

4. **访问网站**
   - 您的网站将发布在：
     `https://confidence-kobe.github.io/blog/`

### 方式二：创建main分支（标准方式）

如果您想使用标准的部署方式，可以将代码合并到main分支：

1. 在GitHub网页上创建Pull Request
2. 将 `claude/tibetan-culture-learning-011CUw4Wdz41uTqKAeoEEjq6` 分支合并到 `main` 分支
3. 在GitHub Pages设置中选择 `main` 分支

### 方式三：使用GitHub Actions自动部署

已为您准备了GitHub Actions工作流文件，当代码推送时会自动部署。

## 重要文件说明

- `.nojekyll` - 告诉GitHub Pages不使用Jekyll处理，直接部署静态文件
- `index.html` - 网站首页
- `css/`, `js/`, `pages/` - 网站资源文件

## 验证部署

部署成功后，您可以访问以下页面验证：

- 首页: `https://confidence-kobe.github.io/blog/`
- 知识库: `https://confidence-kobe.github.io/blog/pages/knowledge/index.html`
- 学习资源: `https://confidence-kobe.github.io/blog/pages/resources/index.html`
- 交流社区: `https://confidence-kobe.github.io/blog/pages/community/index.html`

## 常见问题

### Q: 页面显示404
A: 请确保在GitHub Pages设置中正确选择了分支和根目录

### Q: 样式/脚本不加载
A: 检查浏览器控制台，可能是路径问题。本项目使用相对路径，应该没有问题

### Q: 如何更新网站
A: 只需推送新的代码到选定的分支，GitHub Pages会自动重新部署

## 自定义域名（可选）

如果您有自己的域名：

1. 在GitHub Pages设置中的 "Custom domain" 输入您的域名
2. 在域名DNS设置中添加CNAME记录指向 `confidence-kobe.github.io`
3. 等待DNS生效（可能需要几小时）

## 需要帮助？

如有问题，请查看GitHub Pages官方文档：
https://docs.github.com/en/pages
