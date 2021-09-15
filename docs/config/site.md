# Site 相关参数介绍

   作为 Proxy 部分的一块单独拉出来讲，确实很有必要。因为这种写法( server:port 然后指定 Listen 地址)看起来不如 nginx 先 Listen:port 再写 server 方便。但是钓鱼是针对站点的。所以从这个角度来说第一种写法会更好

```yaml
  Site:
    127.0.0.1:8083: # 请求头的 host 类似于 nginx server_name 如果不匹配 访问不了
      Listen: 0.0.0.0  # 侦听端口。为 127.0.0.1 那么只能本机访问
      StaticPrefix: 8jaojfbykixr # 这个是 InjectJs 模块使用。用于访问注入的 js
      SSL: false  # https
      CAKey: ""
      CACert: ""
      ProxyPass: https://www.douban.com/  # 要代理的地址
      Plugin: "" # 需要使用的插件，目前只能为一个
```

## 127.0.0.1:8083

假冒站点的 `IP+Port` 或者域名+端口

我们在访问进入之时我们会检查host 判断host是否在 site 列表里面，检查的格式和`127.0.0.1:8083` 相同

## Listen

设置侦听地址 如果为 0.0.0.0 意味请求可以从所有的接口访问

## StaticPrefix

这个是一个遗留的设计，目的是为 `InjectJS` 模块提供一个供访问本地 js 的 URL



## SSL 、CAKey、CACert

SSL 配置开启前检查证书目录

## ProxyPass

需要仿冒的真实地址

## Plugin

需要使用的插件。目前为一个站点.一个插件