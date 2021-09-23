# 配置文件

## 配置文件如下

```yaml
Loglevel: 2    # 日志输出
Server:        # 服务器一些超时设置默认值即可
  IdleTimeout: 3m0s
  ReadTimeout: 5m0s
  WriteTimeout: 5m0s
  ReadHeaderTimeout: 30s
  ProxyHeader: RemoteAddr # 获取真实 IP 默认是访问 IP
  StaticDir: static       # 本地静态文件目录可以放一些工具，方便使用 
  StaticURI: /tkxfjiftee/ # 静态文件服务器的访问目录
Proxy:
  MaxIdleConns: 512       # 代理一些配置默认即可
  IdleConnTimeout: 2m0s
  TLSHandshakeTimeout: 1m0s
  ExpectContinueTimeout: 1s
  maxcontentlength: -1 # 处理响应数据最大值默认 20M，超过这个值，插件中需要读取 body 的操作会被取消
  ProxyServerAddr: "" # 设置代理，设置后通过代理进行网页请求
  ProxyCheckURL: https://myip.ipip.net/ # 访问此地址检查代理设置是否正确
  PluginDir: plugins
  CertDir: cert
  Site:
    127.0.0.1:8083:  # 请求头的 host 类似于 nginx server_name 如果不匹配 访问不了
      Listen: 0.0.0.0  # 侦听端口。为 127.0.0.1 那么只能本机访问
      StaticPrefix: inn3o3pefl # 这个是 InjectJs 模块使用。用于访问注入的 js
      SSL: false  # https
      CAKey: ""
      CACert: ""
      ProxyPass: https://www.douban.com/   # 要代理的地址
      Plugin: ""   # 需要使用的插件，目前只能为一个
    127.0.0.1:8084:
      Listen: 0.0.0.0
      StaticPrefix: 72x0alzmle
      SSL: false
      CAKey: ""
      CACert: ""
      ProxyPass: https://www.baidu.com
      Plugin: demo
Notice:
  dingtalk:
    DingTalk: ""  # 钉钉提醒地址
iplocation:
  type: qqwry
  geo_license_key: ""
log_file: goblin.log
cache:
  type: self  # 可使用的缓存类型 [redis,none,self] self 缓存到本地，redis 缓存到 redis 。none 不使用缓存
  expire_time: 10m0s # 缓存失效时间
  redis:
    host: 127.0.0.1
    port: 6379
    password: tryG3IhrSQ
    db: 0
CacheType: # 可缓存的路径后缀。目前带有参数的静态文件不做缓存
- png
- jpg
- js
- jpeg
- css
- otf
- ttf
CacheSize: 12582912  # 最大缓存大小
SupportMIME:
  Enable: false
  List:
    - text
    - application/json
    - application/javascript
    - application/x-javascript
    - message
    - application/hta
    - application/rtf
    - application/ecmascript
    - image/svg+xml
    - application/xhtml
    - application/xml
OutLog: ## 访问日志输出
  type: es7 # es7,es6,syslog,file  注意 windows 不支持 syslog
  loglevel: info
  eslog:
    loglevel: info
    dsn: http://127.0.0.1:9200
    index: goblin
    host: localhost
  filelog:
    mode: text ## json 或者 text
    dsn: access.log
  syslog:
    mode: text
    dsn: 127.0.0.1:514
```
接下来会详细介绍

