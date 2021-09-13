# 插件替换模块

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



### Header



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



### Header



### Cookie

```
      Cookie:
        domain: ""
        secure: false
        httponly: false
        samesite: 4
```



#### domain

#### secure

#### httponly

#### samesite



### Body

```
      Body:
        File: ""
        ReplaceStr:
        - Old: Hello World
          New: Hello goblin
          Count: -1
```



### File

### ReplaceStr



### Location
