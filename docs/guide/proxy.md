# 代理配置

## 前置配置
前面可以使用 cf 做 cdn 访问者溯源困难

## 后置配置
配置文件中 [proxyserveraddr](http://localhost:8080/goblin-doc/config/proxy.html#proxyserveraddr%E3%80%81proxycheckurl) 配置即可
```yaml
Proxy:
  MaxIdleConns: 512 # 代理一些配置默认即可
  IdleConnTimeout: 2m0s
  TLSHandshakeTimeout: 1m0s
  ExpectContinueTimeout: 1s
  maxcontentlength: 20971520 # 处理响应数据最大值默认 20M，超过这个值，插件中需要读取 body 的操作会被取消
  ProxyServerAddr: "socks5://127.0.0.1:1080"   # 设置代理，设置后通过代理进行网页请求
  ProxyCheckURL: https://myip.ipip.net/ # 访问此地址检查代理设置是否正确
  PluginDir: plugins
```

