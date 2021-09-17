# Proxy 相关参数介绍

```yaml
Proxy:
  MaxIdleConns: 512 # 代理一些配置默认即可
  MaxIdleConnsPerHost: 20
  MaxConnsPerHost: 20
  IdleConnTimeout: 2m0s
  TLSHandshakeTimeout: 1m0s
  ExpectContinueTimeout: 1s
  maxcontentlength: 20971520 # 处理响应数据最大值默认 20M，超过这个值，插件中需要读取 body 的操作会被取消
  ProxyServerAddr: ""   # 设置代理，设置后通过代理进行网页请求
  ProxyCheckURL: https://myip.ipip.net/ # 访问此地址检查代理设置是否正确
  PluginDir: plugins
  CertDir: cert
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

所有host的连接池最大连接数量

## MaxIdleConnsPerHost

控制单个Host的连接池大小

## MaxConnsPerHost 

控制单个Host的最大连接总数

## IdleConnTimeout



## TLSHandshakeTimeout



## ExpectContinueTimeout



## maxcontentlength

默认值是 `-1` 此参数对应插件能处理的最大响应体大小。比如设置 `20971520` (20971520/1024/1024=20M) 那么 

`Content-Length` 的值大于`maxcontentlength` 插件中的 Replace 模块中关于 body 的处理的部分会被忽略 

::: warning
会忽略的部分 
```yaml
- url: /login.php
  Match: word
  Replace:
  - Request:
      Method:
      - GET
      - POST
      Header:
        X-Forwarded-For: 127.0.0.1
        X-Real-IP: 127.0.0.1
    Response:
      Body:
        ReplaceStr: # 会被忽略
        - Old: Hello World
          New: Hello goblin
          Count: -1
        Append: ""  # 会被忽略
```
File: ""  作为整个响应体替换不处理此内容因此不会被忽略

```
- url: /login.php
  Match: word
  Replace:
  - Request:
      Method:
      - GET
    Response:
      Body:
        File: ""  # 不会被忽略
```



:::

## ProxyServerAddr、ProxyCheckURL

`ProxyServerAddr` ：代理服务器地址可以使用，`http`，`https`，`socks5` 例如`socks5://127.0.0.1:1080`

`ProxyCheckURL`：验证代理服务器是否有效时访问的 URL

## PluginDir

存放插件的目录
::: warning
插件只有放到插件目录，并且配置文件中指定此插件才会生效
:::

## CertDir
存放证书的目录
::: warning
证书文件只有放到证书目录，并且指定此证书，开启 SSL 才会生效
:::
## 参考链接

[实验说明 Golang HTTP 连接池参数](https://xujiahua.github.io/posts/20200723-golang-http-reuse/)