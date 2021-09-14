# proxy 相关参数介绍

```yaml
Proxy:
  MaxIdleConns: 512 # 代理一些配置默认即可
  IdleConnTimeout: 2m0s
  TLSHandshakeTimeout: 1m0s
  ExpectContinueTimeout: 1s
  maxcontentlength: 20971520 # 处理响应数据最大值默认 20M，超过这个值，插件中需要读取 body 的操作会被取消
  ProxyServerAddr: ""   # 设置代理，设置后通过代理进行网页请求
  ProxyCheckURL: https://myip.ipip.net/ # 访问此地址检查代理设置是否正确
  PluginDir: plugins
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

## MaxIdleConns



## IdleConnTimeout



## TLSHandshakeTimeout



## ExpectContinueTimeout



## maxcontentlength



## ProxyServerAddr、ProxyCheckURL

`ProxyServerAddr` ：代理服务器地址可以使用 `socks5://127.0.0.1`

`ProxyCheckURL`：验证代理服务器是否有效时访问的 URL

## PluginDir

存放插件的目录