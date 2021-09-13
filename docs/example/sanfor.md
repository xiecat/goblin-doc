# 深信服 VPN 案例

## 深信服 vpn 客户端替换

这里以深信服下载文件为例写一个插件

访问得知深信服 vpn 的 windows 客户端可以直接下载。mac 客户端需要从官方链接下载

## 访问主页时会跳转到正确网址登录入口`/portal/#!/login`，这里直接修改

```yaml
Rule:
- url: /  ## 访问
  Match: word # 一定要使用全匹配
  Replace:
  - Request:
      Method:
      - GET
    Response:
      Status: 302
      Header:
        Location: /portal/#!/login
```

## exe 程序替换

```yaml
- url: /com/EasyConnectInstaller.exe
  Match: word
  Replace:
    - Request:
        Method:
          - GET
      Response:
        Status: 302
        Header:
          Location: "{{ .Static }}/EasyConnectInstaller.exe" # cgmeuovumtpp 为静态文件目录
```

## Mac 程序替换

mac 下载地址是在 js 里面这里可以直接替换，也可以通过跳转替换

修改路径跳转到 goblin 地址

```yaml
- url: /portal/jssdk/api/common.js
  Match: prefix # 带有参数使用前缀匹配
  Replace:
    - Request:
        Method:
          - GET
      Response:
        Body:
          ReplaceStr:
            - Old: http://download.sangfor.com.cn/download/product/sslvpn/pkg/
              New: /download/product/sslvpn/pkg/
              Count: -1
```

下载地址替换为修改的地址

```
- url: /download/product/sslvpn/pkg/
  Match: prefix
  Replace:
    - Request:
        Method:
          - GET
      Response:
        Status: 302
        Header:
          Location: "{{ .Static }}/EasyConnect.dmg"
```

## 钉钉提醒

Exe

```
  - url: /com/EasyConnectInstaller.exe
    Match: word
    Dump:
      - Request:
          Method:
            - GET
        notice: true
```

dmg

```yaml
  - url: /portal/jssdk/api/common.js
    Match: prefix
    Replace:
      - Request:
          Method:
            - GET
        Response:
          Body:
            ReplaceStr:
              - Old: http://download.sangfor.com.cn/download/product/sslvpn/pkg/
                New: /download/product/sslvpn/pkg/
                Count: -1
  - url: /download/product/sslvpn/pkg/
    Match: prefix
    Replace:
      - Request:
          Method:
            - GET
        Response:
          Status: 302
          Header:
            Location: "{{ .Static }}/EasyConnect.dmg" //
    Dump:
      - Request:
          Method:
            - GET
        notice: true
```



## 完整的插件如下

```yaml
Name: sanfor vpn
Version: 1.0.0
Description: this is a description
WriteDate: "2021-02-11"
Author: goblin
Rule:
  - url: /  ## 访问
    Match: word
    Replace:
      - Request:
          Method:
            - GET
        Response:
          Status: 302
          Header:
            goblinServer: 0.0.1
            Location: /portal/#!/login
  - url: /com/EasyConnectInstaller.exe
    Match: word
    Replace:
      - Request:
          Method:
            - GET
        Response:
          Status: 302
          Header:
            Location: "{{ .Static }}EasyConnectInstaller.exe"
  - url: /portal/jssdk/api/common.js
    Match: prefix
    Replace:
      - Request:
          Method:
            - GET
        Response:
          Body:
            ReplaceStr:
              - Old: http://download.sangfor.com.cn/download/product/sslvpn/pkg/
                New: /download/product/sslvpn/pkg/
                Count: -1
  - url: /download/product/sslvpn/pkg/
    Match: prefix
    Replace:
      - Request:
          Method:
            - GET
        Response:
          Status: 302
          Header:
            Location: "{{ .Static }}EasyConnect.dmg"
    Dump:
      - Request:
          Method:
            - GET
        notice: true

  - url: /com/EasyConnectInstaller.exe
    Match: word
    Dump:
      - Request:
          Method:
            - GET
        notice: true
```



访问后收到钉钉告警同时 dump 如下请求内容

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