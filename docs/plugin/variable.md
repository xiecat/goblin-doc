# 插件变量介绍

插件中可以使用的变量

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
