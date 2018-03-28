

# 简单的vuex使用方法



# 引入mint-ui

实例之后，引入mint-ui，
mint-ui官网：https://mint-ui.github.io/docs/


因为mint-ui支持按需加载，虽然组减少，但我相信它会越做越好

# 按需引入弹窗控件，



不过如果是全局引用的话  需要更改设置 在最初使用vue.use() 然后$toast就能使用了


#  将弹窗与vuex进行配合

当子组件成功更改vuex store下books的时候，成功回调弹窗


这里需要适当修改一下vuex store中的设置，增加回调这一部分；



#推荐使用chome的一个扩展程序：查看性能

对性能进行了截图

推荐大家也用这个工具来进行调优

在static下面
![图片链接](https://github.com/yestodorrow/vuex/blob/master/static/time.png)

> 

#检测用户平台
    虽然自带的useragent appversion能查看客户端，正巧想起来以前用过的detect.js,是否能用在vue中呢

    我在app加载时打印出客户端信息，发现chrome  windows 是否是手机 等信息很全，然后查看了opera、firefox浏览器也都ok,
    
    拿出我的se连接一下，效果如下：

    ![图片链接](https://github.com/yestodorrow/vuex/blob/master/static/detect.jpg)

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
