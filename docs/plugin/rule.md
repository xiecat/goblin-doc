# 插件匹配规则

## 规则


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

匹配类型总共有三个 `word`、`prefix`、`Suffix` 不区分大小写

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
