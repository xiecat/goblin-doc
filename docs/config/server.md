# Server 相关参数介绍

## Goblin 服务器配置

这一节主要介绍 `StaticURI`、和 `StaticDir` 两个参数。其他参数大概提一下

```yaml
Server: # 服务器一些超时设置默认值即可
  IdleTimeout: 3m0s
  ReadTimeout: 5m0s
  WriteTimeout: 5m0s
  ReadHeaderTimeout: 30s
  ProxyHeader: RemoteAddr
  StaticDir: static
  StaticURI: /tkxfjiftee/
```


## IdleTimeout



## ReadTimeout



## WriteTimeout



## ReadHeaderTimeout



## ProxyHeader

使用 cdn 或者 nginx 作为反代时需要修改此参数来获取客户端真实 IP

默认 `RemoteAddr` 也就是访问的真实 IP，

当 `ProxyHeader` 配置为 `x-real-ip`、或者 `x-forwarded-for`则真实 IP 会从设置的请求头中取得

## StaticDir 、StaticURI

这个其实就是一个静态服务器

`StaticDir ` 是存放文件的目录 

`StaticURI` 是链接中的路径。

```yaml
  StaticDir: static
  StaticURI: /tkxfjiftee/
```

代表访问时使用 `http://server:port/tkxfjiftee/` 即可访问到 static 目录下的文件