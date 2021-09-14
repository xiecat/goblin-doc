# 向导
## 快速使用

这里提供了两个 demo 可以供大家体验使用

### flash demo

```shell
docker run -it --rm         \
-p 8083:8083 -p 8084:8084   \
-p 8085:8085 -p 8086:8086   \
becivells/goblin-demo-flash
```

<img :src="$withBase('/demo.gif')" alt="foo">    

本机访问:  [http://127.0.0.1:8083](http://127.0.0.1:8083/) 示例仓库为: [goblin-flash-demo](https://github.com/xiecat/goblin-demo/tree/master/goblin-demo-flash)

### 默认代理百度的 demo

```shell
docker run -it --rm -v $(pwd):/goblin/ -p 8084:8084 becivells/goblin
```

本机访问 [http://127.0.0.1:8084](http://127.0.0.1:8084/)

::: warning
由于Goblin 默认是绑定 host 的。这两个示例都需要在 docker 宿主机里访问，并且端口不可改变。否则会出现 403 错误
:::

## 下载使用

### 从 github 中下载

[![Latest release](https://img.shields.io/github/v/release/xiecat/goblin)](https://github.com/xiecat/goblin/releases/latest)![GitHub All Releases](https://img.shields.io/github/downloads/xiecat/goblin/total)

访问 [https://github.com/xiecat/goblin/releases](https://github.com/xiecat/goblin/releases) 从中选择适合自己操作系统的二进制文件

### 从 docker 中下载

[![Docker Pulls](https://img.shields.io/docker/pulls/becivells/goblin)](https://hub.docker.com/r/becivells/goblin)![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/becivells/goblin)   

```
docker pull becivells/goblin
```

Dockerfile 如下：

```
FROM scratch
COPY goblin /usr/bin/goblin
ENTRYPOINT ["/usr/bin/goblin"]
WORKDIR /goblin
```

工作目录在 `goblin` ，首先创建`goblin`目录，切换到目录下，执行

```shell
docker run -it --rm -v $(pwd):/goblin/ -p 8084:8084 becivells/goblin
```
::: warning
`$(pwd)` 是路径代表当前路径(`goblin`)
也可以使用    
docker run -it --rm -v goblin:/goblin/ -p 8084:8084 becivells/goblin
:::


即可自动生成配置文件、插件目录、静态文件目录并且下载地理位置数据库


