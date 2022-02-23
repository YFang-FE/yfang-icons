# yfang-icons

## yfang-icons 是什么?

**yfang-icons** 是圆方前端组为了统一不同项目的图标而成立的图标库。涵盖基础图标，特殊图标等多种形式，利用 iconfont 的 unicode / classname / symbol 形式实现显示效果

## Unicode 引用

Unicode 是字体在网页端最原始的应用方式，特点是：

- 支持按字体的方式去动态调整图标大小，颜色等等。
- 默认情况下不支持多色，直接添加多色图标会自动去色。

Unicode 使用步骤如下：

第一步：在 HTML 页面为字体增加 preload，提升字体加载速度：

```html
<link
  rel="preload"
  href="//at.alicdn.com/t/font_3181443_0qy5ybeydn8.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous"
/>
```

第二步：拷贝项目下面生成的 @font-face

```css
@font-face {
  font-family: 'yf-icons';
  src: url('//at.alicdn.com/t/font_3181443_0qy5ybeydn8.woff2?t=1645584797698')
      format('woff2'), url('//at.alicdn.com/t/font_3181443_0qy5ybeydn8.woff?t=1645584797698')
      format('woff'),
    url('//at.alicdn.com/t/font_3181443_0qy5ybeydn8.ttf?t=1645584797698') format('truetype'),
    url('//at.alicdn.com/t/font_3181443_0qy5ybeydn8.svg?t=1645584797698#yf-icons')
      format('svg');
}
```

第三步：定义使用 iconfont 的样式

```css
.yf-icons {
  font-family: 'yf-icons' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

第四步：挑选相应图标并获取字体编码，应用于页面

```html
<span class="yf-icons">&#x33;</span>
```

## Font class 引用

font-class 是 Unicode 使用方式的一种变种，主要是解决 Unicode 书写不直观，语意不明确的问题。

与 Unicode 使用方式相比，具有如下特点：

- 比于 Unicode 语意明确，书写更直观。可以很容易分辨这个 icon 是什么。
- 因为使用 class 来定义图标，所以当要替换图标时，只需要修改 class 里面的 Unicode 引用。

使用步骤如下：

第一步：在 HTML 页面为字体增加 preload，提升字体加载速度：

```html
<link
  rel="preload"
  href="//at.alicdn.com/t/font_3181443_0qy5ybeydn8.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous"
/>
```

第二步：引入项目下面生成的 fontclass 代码：

```html
<link rel="stylesheet" href="//at.alicdn.com/t/font_3181443_0qy5ybeydn8.css" />
```

第三步：挑选相应图标并获取类名，应用于页面：

```html
<span class="yf-icons yf-icons-xxx"></span>
```

## Symbol 引用

这是一种全新的使用方式，应该说这才是未来的主流，也是平台目前推荐的用法。相关介绍可以参考这篇文章 这种用法其实是做了一个 SVG 的集合，与另外两种相比具有如下特点：

- 支持多色图标了，不再受单色限制。
- 通过一些技巧，支持像字体那样，通过 font-size, color 来调整样式。
- 兼容性较差，支持 IE9+，及现代浏览器。
- 浏览器渲染 SVG 的性能一般，还不如 png。
使用步骤如下：

第一步：引入项目下面生成的 symbol 代码：

```html
<script src="//at.alicdn.com/t/font_3181443_0qy5ybeydn8.js"></script>
```
第二步：加入通用 CSS 代码（引入一次就行）：

```html
<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

</style>
```
第三步：挑选相应图标并获取类名，应用于页面：

```html
<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-xxx"></use>
</svg>
```