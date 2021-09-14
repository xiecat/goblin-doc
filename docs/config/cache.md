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
