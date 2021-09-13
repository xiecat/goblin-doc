# 插件参数介绍

```yaml
Name: static
Version: 0.0.1
Description: this is a description
WriteDate: "2021-09-12"
Author: goblin
Rule:
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
- url: /dump
  Match: word
  Dump:
  - Request:
      Method:
      - POST
    Response:
      Status: 200
      Header: {}
      Body: ""
    notice: false
  InjectJs: null
- url: /test.js
  Match: word
  InjectJs:
    File: aaa.js

```



## name

插件名称

## Version

插件版本

## Description

插件描述

## WriteDate

编写日期

## Author

插件作者
