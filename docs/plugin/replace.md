# 插件替换模块
::: warning
除 [Location](/plugin/replace.html#location) 参数外 其余参数均为 goblin 从仿冒站点发往真实站点后响应回来的数据上修改的
:::


```yaml
 Replace:
  - Request:
      Method:
      - GET
      - POST
      Header:
        X-Forwarded-For: 127.0.0.1
        X-Real-IP: 127.0.0.1
    Response:
      Status: 200
      Header:
        GoblinServer: unknown
      Cookie:
        domain: ""
        secure: false
        httponly: false
        samesite: 4
      Body:
        File: ""
        ReplaceStr:
        - Old: Hello World
          New: Hello goblin
          Count: -1
        Append: ""
      Location: ""
```



## Request
内容替换模块请求头匹配的内容
```yaml
  Request:
      Method:
      - GET
      - POST
      Header:
        X-Forwarded-For: 127.0.0.1
        X-Real-IP: 127.0.0.1
```

### Method

匹配请求方法

::: warning
此参数并不是替换的一部分而是匹配的一部分。只有匹配到对应的 URL 和与之相对应的请求方法才会进行下面的操作
:::


### Header
替换或者删除请求头
例如：
```
Header:
  X-Forwarded-For: 127.0.0.1
  X-Real-IP: 127.0.0.1
```
::: warning
当请求头中参数为空时会删除此请求
:::
```yaml
Header:
  X-Forwarded-For: 
  X-Real-IP: 
```
## Response

```yaml
    Response:
      Status: 200
      Header:
        GoblinServer: unknown
      Cookie:
        domain: ""
        secure: false
        httponly: false
        samesite: 4
      Body:
        File: ""
        ReplaceStr:
        - Old: Hello World
          New: Hello goblin
          Count: -1
        Append: ""
      Location: ""
```

### Status
替换状态码
```yaml
    Response:
      Status: 200
```


### Header
替换或者删除响应头
例如：
```
Header:
  Goblinserver: 127.0.0.1
  Server: IIS
```
::: warning
当响应头中参数为空时会删除此请求
:::
```yaml
Header:
  Goblinserver: 
```

### Cookie

```
      Cookie:
        domain: ""
        secure: false
        httponly: false
        samesite: 4
```
此参数为有关 cookie 的参数这是一个统一的设置并不是针对某个 cookie 生效


#### domain
允许哪些域名可以使用

#### secure
是否只允许 https 协议读写cookies
#### httponly
是否开启httponly
#### samesite
csrf 相关的


### Body

```yaml
      Body:
        File: ""
        ReplaceStr:
        - Old: Hello World
          New: Hello goblin
          Count: -1
        Append: ""
```



### File
替换为指定的文件
### ReplaceStr
新旧字符串替换
### Append
在页面内追加内容
### Location 
链接 302 跳转
::: warning
此参数不是响应头中直接设置 302 跳转。而是在 goblin 往真实站点发送请求前进行的跳转
:::