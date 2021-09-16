#  插件配置文件

```yaml
Name: static                        # 插件名称
Version: 0.0.1                      # 插件版本
Description: this is a description  # 插件描述
WriteDate: "2021-09-16"             # 插件编写日期
Author: goblin                      # 插件作者
Rule:                               # 插件规则
- url: /login.php                   # 匹配的URL
  Match: word                       # 匹配类型
  Replace:                          # 替换模块
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
      Cookie:                     # 设置响应头的 cookies
        domain: ""
        secure: false
        httponly: false
        samesite: 4
      Body:                       # 修改响应体部分
        File: ""
        ReplaceStr:               # 字符串替换部分
        - Old: Hello World
          New: Hello goblin
          Count: -1
        Append: ""                # 字符串追加
      Location: ""                # 302 跳转 goblin 不会向后端发起请求
- url: /dump                      # 
  Match: word
  Dump:                           # dump 模块 dump 请求或者钉钉告警
  - Request:
      Method:
      - POST
    Response:
      Status: 200
      Header: {}
      Body: ""
    notice: false
- url: /test.js
  Match: word
  InjectJs:                       # 注入 js 模块     
    File: aaa.js

```



