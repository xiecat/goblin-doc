## 插件运行原理和运行时机

![plugin run](/plugin-run.jpg)

一个完整的请求会由 client 到 goblin , goblin 到真实站点。而插件正是穿插在这些过程中。

## Replace

首先介绍 Replace 模块。 Replace 模块中 Request 会在请求之前进行修改。修改后发送到真实站点。Response 是在 goblin 请求真实站点以后才会进行替换的,但是 [Location](/plugin/replace.html#location) 是个例外此参数会在 客户端发起请求以后。goblin未发送请求到真实站点直接返回。

## Dump 、InjectJs

Dump 模块和 InjectJs 是在 goblin 收到真实站响应数据以后进行匹配获取的



