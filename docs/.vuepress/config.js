module.exports = {
    title: 'Goblin',
    description: 'Goblin 是一款适用于红蓝对抗中的钓鱼演练系统',
    base:"/",
    themeConfig: {
        repo: 'xiecat/goblin',
        repoLabel: 'GitHub',
        docsRepo: 'xiecat/goblin-doc',
        docsDir: 'docs',
        docsBranch: 'dev',
        // 默认为 false，设置为 true 来启用
        editLinks: true,
        // 自定义编辑链接的文本。默认是 "Edit this page"
        editLinkText: '帮助改进页面内容!',
        nav:[ // 导航栏配置
            { text: '主页', link: '/' },
            { text: '开始', link: '/guide/' },
            { text: '设计', link: '/design/' },
            { text: '配置', link: '/config/' },
            { text: '插件', link: '/plugin/' },
            { text: '案例', link: '/example/' },
            { text: 'FAQ', link: '/faq/' },
        ],
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        // nextLinks: false,
        // // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        // prevLinks: false,
        lastUpdated: 'Last Updated', //
        // sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 4, // 侧边栏显示4级
        sidebar:{
            '/example/': [
                '',
                'flash'
            ],
            '/guide/': [
                '',
                'cmd',
                'proxy',
                'secret'
            ],
            '/config/': [
                '',
                'log',
                'server',
                'proxy',
                'site',
                'notice',
                'iplocation',
                'cache',
                'supportmime',
                'outlog',
            ],
            '/plugin/': [
                'run',  /* /foo/one.html */
                'plugin',     /* /foo/ */
                'variable',
                'rule',
                'replace',
                'injectjs',
                'dump',
            ],

        }
    }
}
