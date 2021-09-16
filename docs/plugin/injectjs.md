# 插件注入模块

```yaml
- url: /test.js
  Match: word
  InjectJs:                       # 注入 js 模块     
    File: aaa.js
```

## File

需要植入的 js 文件对于此模块只能植入 js 文件中。

植入本地 js

```yaml
- url: /test.js
  Match: word
  InjectJs:                       # 注入 js 模块     
    File: aaa.js
```

植入远程 js

```yaml
- url: /test.js
  Match: word
  InjectJs:                       # 注入 js 模块     
    File: http://xxx.com/eval.js
```



