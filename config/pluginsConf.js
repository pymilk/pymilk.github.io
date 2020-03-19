module.exports = {
    '@vuepress/back-to-top': true,
    '@vuepress/last-updated': true,
    '@vuepress/nprogress': true,
    '@vuepress/pwa': {
        serviceWorker: true,
        popupComponent: 'MySWUpdatePopup',
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新",
        }
    },
    //第三方插件
    'vuepress-plugin-go-top': true,
    "vuepress-plugin-ribbon": true,
    "vuepress-plugin-cursor-effects": true,
    "vuepress-plugin-live2d":
    {
        "modelName": ["z16", "Epsilon2.1", "izumi", "koharu", "shizuku", "miku", "hijiki", "tororo"],
        "mobileShow": false,
    },
    'vuepress-plugin-baidu-autopush': true,
    "vuepress-plugin-one-click-copy": true,
}

