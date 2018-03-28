# routes

简单的vuex使用方法

实例之后，引入mint-ui，
mint-ui官网：https://mint-ui.github.io/docs/


因为mint-ui支持按需加载，虽然组减少，但我相信它会越做越好

引入一个弹窗控件，

当子组件成功更改vuex store下books的时候，成功回调弹窗


这里需要适当修改一下vuex store中的设置，增加回调这一部分；

对性能进行了截图

推荐大家也用这个工具来进行调优

在static下面
![图片链接](https://github.com/yestodorrow/vuex/blob/master/static/time.png)

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
