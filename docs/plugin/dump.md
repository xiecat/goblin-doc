# 插件记录模块
此模块为dump模块命中匹配规则会把请求头记录下来。
```yaml
  Dump:
  - Request:
      Method:
      - POST
    Response:
      Status: 200
      Header: {}
      Body: ""
    notice: false
```

## Request

匹配请求头匹配的内容

```yaml
  Request:
      Method:
      - GET
      - POST
```

### 

### Method

匹配请求方法

## Response

```
Response:
  Status: 200
  Header: {}
  Body: ""
```

匹配响应的内容。
匹配请求方法
::: warning
无论是Header 匹配还是 body 匹配都是包含关系
:::

### Status
匹配状态码

### Header
匹配响应头
### body
匹配响应体是否包含body里的内容
## notice
钉钉告警模块。设置为 false 不会钉钉告警