# site 相关参数介绍

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



## Listen

## StaticPrefix



## SSL 、CAKey、CACert



## ProxyPass



## Plugin
