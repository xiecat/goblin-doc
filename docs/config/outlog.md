# 访问日志输出

```yaml
OutLog: ## 访问日志输出
  type: es7 # es7,es6,syslog,file  注意 windows 不支持 syslog
  loglevel: info
  eslog:
    loglevel: info
    dsn: http://127.0.0.1:9200
    index: goblin
    host: localhost
  filelog:
    mode: text ## json 或者 text
    dsn: access.log
  syslog:
    mode: text
    dsn: 127.0.0.1:514
```

## type 
type 目前只支持 [ es7、es6、syslog、file ]
::: warning
注意 windows 不支持 syslog
:::
### loglevel 
输出的日志等级 [ "info", "warn", "warning", "error", "fatal" ]
目前只有 `info`、`warn`、`warning` 有效
info 输出所有日志     
`warn`、`warning`  输出 post 日志 
其余不输出日志
## eslog
输出至 es
```
eslog:
    loglevel: info
    dsn: http://127.0.0.1:9200
    index: goblin
    host: localhost
```
### loglevel 
es 输出的日志等级 
### dsn
es 的连接地址
### index 
es 索引名称
### host
输出日志的主机名称

## filelog
输出至 文件
```
  filelog:
    mode: text ## json 或者 text
    dsn: access.log
```
### mode 
输出的日志格式[ text、json ]
默认为 text
### dsn
日志的文件名
## syslog
```
  syslog:
    mode: text
    dsn: 127.0.0.1:514
```
### mode 
输出的日志格式 [ text、json ]
默认为 text
### dsn 
syslog 链接信息
::: warning
注意 windows 不支持 syslog，目前 syslog 只支持 udp 协议
:::
