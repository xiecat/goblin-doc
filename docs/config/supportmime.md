# SupportMIME 相关参数介绍

```yaml
SupportMIME:
  Enable: false
  List:
  - text
  - application/json
  - application/javascript
  - application/x-javascript
  - message
  - application/hta
  - application/rtf
  - application/ecmascript
  - image/svg+xml
  - application/xhtml
  - application/xml
```



开启后插件系统中 `Replace` 模块对于一些不在列表中的文件会忽略掉。涉及到功能和 [maxcontentlength ](/config/proxy.html#maxcontentlength) 一样