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


::: warning
append 和 [inject模块](/plugin/injectjs.html) 区别是 inject 直接注入到 js 里面。并且不会追加任何标签。append 是追加到 web 页面上需要标签闭合使用
:::
