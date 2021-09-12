module.exports = {
    title: 'goblin',
    description: 'goblin 是一款适用于红蓝对抗中的蜜罐和钓鱼系统',
    base:"/goblin-doc/",
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
            { text: '向导', link: '/guide/' },
            { text: '配置', link: '/config/' },
            { text: '插件', link: '/plugin/' },
            { text: '案例', link: '/example/' },
            { text: 'FAQ', link: '/faq/' },
        ],
        lastUpdated: 'Last Updated', //
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 4, // 侧边栏显示2级
    }
}