# Cache 相关参数介绍

```yaml
cache:
  type: self  # 可使用的缓存类型 [redis,none,self] self 缓存到本地，redis 缓存到 redis 。none 不使用缓存
  expire_time: 10m0s # 缓存失效时间
  redis:
    host: 127.0.0.1
    port: 6379
    password: hq7TKpR6B11w8
    db: 0
CacheType: # 可缓存的路径后缀。目前带有参数的静态文件不做缓存
- png
- jpg
- js
- jpeg
- css
- otf
- ttf
CacheSize: 12582912 # 最大缓存大小
```



## cache type

Cache type 有三个类型可以使用 `self`、`redis`、`none` 其中使用 `none` 时不缓存任何静态文件, `self` 会使用自身内建的缓存。`redis` 使用redis 作为缓存数据库。

`none` ：不处理任何缓存数据

`self`：内建的缓存。不会序列化请求体响应体的结构

`redis`: 会序列化请求体响应体的结构,读取后再解码出来