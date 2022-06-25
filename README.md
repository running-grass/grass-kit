# Grass UI
一个基于`tailwindcss`的全框架UI库

## 愿景
1. 写一套样式和组件逻辑直接供vue，react，preact，原生html使用。
2. 统一一套主题配置可以应用在不同前端框架下
3. 在不同的框架下提供统一或相近的api

## 实现
1. 样式、主题基于tailwind来统一，在业务方使用tailwind.config.js来配置主题，
2. 组件的状态管理和事件系统靠web components来统一
3. vue，react, preact等框架下的库为对lit-element的封装和优化

## 组件

### 按钮

#### 样式变体

- 普通的
- 主要的

### 支持的框架

- [x] web component
- [ ] vue 
- [x] react

### 开关

### 支持的框架

- [x] web component
- [ ] vue 
- [x] react


## 使用方式

### react
#### 首先引入增加包注册表映射，在`package.json`同级的`.npmrc`中增加下行
```dotenv
@grass-ui:registry=https://npm.pkg.github.com
```

#### 引入相关包
```bash
yarn add tailwindcss @grass-ui/tailwind  @grass-ui/web-component @grass-ui/react
```

#### 配置`tailwind.config.js`
```javascript
module.exports = {
  presets: [
    require("@grass-ui/tailwind")  // 增加这一行，引入tailwind的自定义组件
  ],
  content: [
    './src/**/*.{ts,html}',
    './node_modules/@grass-ui/web-component/src/**/*.ts', // 增加这一行，避免自定义组件的样式被删掉
  ],
}
```

#### (使用postcss)配置`postcss.config.js`
```js
module.exports = {
  plugins: {
    tailwindcss: {}, // 增加这一样，应用tailwindcss的编译
  },
}
```


## 注意事项

### 在浏览器插件的content script中使用
由于依赖了customelement的API，所以需要引入两个垫片
```
"node_modules/lit/polyfill-support.js"
"node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"
```