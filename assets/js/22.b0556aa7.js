(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{388:function(t,e,s){"use strict";s.r(e);var a=s(45),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"向导"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#向导"}},[t._v("#")]),t._v(" 向导")]),t._v(" "),s("h2",{attrs:{id:"快速使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速使用"}},[t._v("#")]),t._v(" 快速使用")]),t._v(" "),s("p",[t._v("这里提供了两个 Demo 可以供大家体验使用")]),t._v(" "),s("h3",{attrs:{id:"flash-demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flash-demo"}},[t._v("#")]),t._v(" Flash Demo")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker run -it --rm         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8083")]),t._v(":8083 -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8084")]),t._v(":8084   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8085")]),t._v(":8085 -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8086")]),t._v(":8086   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nbecivells/goblin-demo-flash\n")])])]),s("img",{attrs:{src:t.$withBase("/demo.gif"),alt:"foo"}}),t._v(" "),s("p",[t._v("本机访问:  "),s("a",{attrs:{href:"http://127.0.0.1:8083/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:8083"),s("OutboundLink")],1),t._v(" 示例仓库为: "),s("a",{attrs:{href:"https://github.com/xiecat/goblin-demo/tree/master/goblin-demo-flash",target:"_blank",rel:"noopener noreferrer"}},[t._v("goblin-flash-demo"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"默认代理百度的-demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认代理百度的-demo"}},[t._v("#")]),t._v(" 默认代理百度的 Demo")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker run -it --rm -v "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(":/goblin/ -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8084")]),t._v(":8084 becivells/goblin\n")])])]),s("p",[t._v("本机访问 "),s("a",{attrs:{href:"http://127.0.0.1:8084/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:8084"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("由于Goblin 默认是绑定 host 的。这两个示例都需要在 docker 宿主机里访问，并且端口不可改变。否则会出现 403 错误")])]),t._v(" "),s("h2",{attrs:{id:"下载使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载使用"}},[t._v("#")]),t._v(" 下载使用")]),t._v(" "),s("h3",{attrs:{id:"从-github-中下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-github-中下载"}},[t._v("#")]),t._v(" 从 Github 中下载")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/xiecat/goblin/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/github/v/release/xiecat/goblin",alt:"Latest release"}}),s("OutboundLink")],1),s("img",{attrs:{src:"https://img.shields.io/github/downloads/xiecat/goblin/total",alt:"GitHub All Releases"}})]),t._v(" "),s("p",[t._v("访问 "),s("a",{attrs:{href:"https://github.com/xiecat/goblin/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xiecat/goblin/releases"),s("OutboundLink")],1),t._v(" 从中选择适合自己操作系统的二进制文件")]),t._v(" "),s("h3",{attrs:{id:"从-docker-中下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-docker-中下载"}},[t._v("#")]),t._v(" 从 Docker 中下载")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://hub.docker.com/r/becivells/goblin",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/docker/pulls/becivells/goblin",alt:"Docker Pulls"}}),s("OutboundLink")],1),s("img",{attrs:{src:"https://img.shields.io/docker/image-size/becivells/goblin",alt:"Docker Image Size (latest by date)"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("docker pull becivells/goblin\n")])])]),s("p",[t._v("Dockerfile 如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('FROM scratch\nCOPY goblin /usr/bin/goblin\nENTRYPOINT ["/usr/bin/goblin"]\nWORKDIR /goblin\n')])])]),s("p",[t._v("工作目录在 "),s("code",[t._v("goblin")]),t._v(" ，首先创建"),s("code",[t._v("goblin")]),t._v("目录，切换到目录下，执行")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker run -it --rm -v "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(":/goblin/ -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8084")]),t._v(":8084 becivells/goblin\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[s("code",[t._v("$(pwd)")]),t._v(" 是路径代表当前路径("),s("code",[t._v("goblin")]),t._v(")\n也可以使用"),s("br"),t._v("\ndocker run -it --rm -v goblin:/goblin/ -p 8084:8084 becivells/goblin")])]),t._v(" "),s("p",[t._v("即可自动生成配置文件、插件目录、静态文件目录并且下载地理位置数据库")])])}),[],!1,null,null,null);e.default=r.exports}}]);