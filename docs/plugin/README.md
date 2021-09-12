

# 插件系统

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

## 规则

规则中可以使用的变量

| FakeBaseURL |      | 运行前 | [http://www.ba1du.com](http://www.ba1du.com/) |
| ----------- | ---- | ------ | --------------------------------------------- |
| FakeDomain  |      | 运行前 | [www.ba1du.com](http://www.ba1du.com/)        |
| FakePORT    |      | 运行前 | 80                                            |
| Static      |      | 运行前 | /xxxdfasfewfs/                                |
| FakeHost    |      | 运行前 | [www.ba1du.com](http://www.ba1du.com/) :443   |
| RealPORT    |      | 运行前 | 80                                            |
| RealDomain  |      | 运行前 | [www.baidu.com](http://www.baidu.com/)        |
| RealHost    |      | 运行前 | [www.ba1du.com:80](http://www.ba1du.com/)     |

::: warning
目前仅有 Replace 的 Replace.Response.Location、Replace.Response.Header.Location、 InjectJs、Replace.Response.Body.Append、Replace.Response.Body.ReplaceStr.New 可以使用。如果你有其他需求可以提 issus
:::



```yaml
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
```



### URL

需要匹配的 `RequestURI`

如对于请求

```
GET /download/product/sslvpn/pkg/mac_767/EasyConnect_7_6_7_4.dmg HTTP/1.1
Host: vpn.xxxxx.com
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2
Cookie: language=zh_CN; TWFID=7c0a08ff5295831d
Referer: http://127.0.0.1:8085/portal/
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:91.0) Gecko/20100101 Firefox/91.0
X-Forwarded-For: 127.0.0.1
```

那么匹配的 URL 就是

```
/download/product/sslvpn/pkg/mac_767/EasyConnect_7_6_7_4.dmg
```

### Match

匹配类型总共有三个 `word`、`prefix`、`Suffix` 不区分大消息

#### word

这个是相等的意思就是要匹配的链接必须要 `URL` 中的字符串完全一致才可以

比如 url 是 `/css/jquery.js` 那么能匹配的就是 ` /css/jquery.js` 而`/css/jquery.js?id=123`是无法匹配

#### prefix

前缀匹配，这里最常使用的场景是一个是所有链接都要匹配那么

```
- url: /
  Match: prefix
```

另外一个是对于参数可变的链接例如``/css/jquery.js?id=123``

```
- url: /css/jquery.js
  Match: prefix
```

#### Suffix

后缀匹配所用不多

### Replace

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



#### Request

```yaml
  Request:
      Method:
      - GET
      - POST
      Header:
        X-Forwarded-For: 127.0.0.1
        X-Real-IP: 127.0.0.1
```



##### Method



##### Header



### Response

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



#### Status



#### Header



#### Cookie

```
      Cookie:
        domain: ""
        secure: false
        httponly: false
        samesite: 4
```



##### domain

##### secure

##### httponly

##### samesite



#### Body

```
      Body:
        File: ""
        ReplaceStr:
        - Old: Hello World
          New: Hello goblin
          Count: -1
```



##### File

##### ReplaceStr



#### Location