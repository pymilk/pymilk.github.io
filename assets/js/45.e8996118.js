(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{268:function(s,t,e){"use strict";e.r(t);var a=e(9),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"jupyter-notebook配置c-环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jupyter-notebook配置c-环境"}},[s._v("#")]),s._v(" Jupyter Notebook配置C++环境")]),s._v(" "),e("p",[e("strong",[s._v("请根据笔记的写作日期，选择性阅读。")])]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("作者：")]),s._v(" "),e("RouterLink",{attrs:{to:"/about/"}},[s._v(s._s(s.$themeConfig.self.name))]),e("br"),s._v(" "),e("strong",[s._v("Home：")]),s._v(" "),e("RouterLink",{attrs:{to:"/"}},[s._v(s._s(s.$themeConfig.self.site))]),e("br"),s._v(" "),e("strong",[s._v("写作日期：")]),s._v(" 2018-11-19"),e("br"),s._v(" "),e("strong",[s._v("系统：")]),s._v(" Mac"),e("br"),s._v(" "),e("strong",[s._v("软件版本：")]),s._v("\nPython@3.7.1"),e("br"),s._v("\nIPython@7.2.0"),e("br"),s._v("\nJupyter Netbook@5.2.4"),e("br"),s._v("\nxeus-cling@0.4.9"),e("br"),s._v(" "),e("strong",[s._v("参考：")]),e("br"),s._v(" "),e("a",{attrs:{href:"https://github.com/jupyter/jupyter/wiki/Jupyter-kernels",target:"_blank",rel:"noopener noreferrer"}},[s._v("Jupyter kernels"),e("OutboundLink")],1),e("br"),s._v(" "),e("a",{attrs:{href:"https://blog.jupyter.org/interactive-workflows-for-c-with-jupyter-fe9b54227d92",target:"_blank",rel:"noopener noreferrer"}},[s._v("Interactive Workflows for C++ with Jupyter"),e("OutboundLink")],1),e("br"),s._v(" "),e("a",{attrs:{href:"https://github.com/QuantStack/xeus-cling",target:"_blank",rel:"noopener noreferrer"}},[s._v("xeus-cling"),e("OutboundLink")],1)],1)]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("Jupyter Netbook 提供了自定义安装内核，支持的内核有ipython、ijulia、igo、xeus-cling等等，更多的内核"),e("a",{attrs:{href:"https://github.com/jupyter/jupyter/wiki/Jupyter-kernels",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击查看 Jupyter kernels"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("p",[s._v("Jupyter Netbook 中配置 C++ 的方法主要有三种：")]),s._v(" "),e("ul",[e("li",[s._v("conda安装（本文讲解）")]),s._v(" "),e("li",[s._v("brew&pip安装")]),s._v(" "),e("li",[s._v("源码编译安装")])]),s._v(" "),e("p",[s._v("其中 conda 安装比较简单，参照官方的安装教程就能安装完成，这里主要说一些注意事项。")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/QuantStack/xeus-cling",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击查看 xeus-cling"),e("OutboundLink")],1)]),s._v(" "),e("hr"),s._v(" "),e("h2",{attrs:{id:"一、安装xeus-cling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、安装xeus-cling"}},[s._v("#")]),s._v(" 一、安装xeus-cling")]),s._v(" "),e("ol",[e("li",[s._v("新创建虚拟环境")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("conda create -n cling\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("注意：这一步格外重要，使用默认的 base(root) 环境会导致出装，因为默认的环境默认安装了许多特定版本的库，可能因为某些库不兼容而导致出错。")])]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("激活虚拟环境")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" activate cling 或 conda activate cling\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("安装xeus-cling")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("conda "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" xeus-cling notebook -c QuantStack -c conda-forge\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这个过程略微偏长，请耐心等待安装完成。")]),s._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[s._v("启动Jupyter Netbook")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("jupyter netbook\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("启动之后，默认使用已安装内核，目前是 C++17。")]),s._v(" "),e("hr"),s._v(" "),e("h2",{attrs:{id:"二、示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、示例"}},[s._v("#")]),s._v(" 二、示例")]),s._v(" "),e("p",[s._v("安装完成，一个 cell 就处在一个 main 函数中，所以不用再写 main 函数。")]),s._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    dosomething\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("以下是简单的示例：")]),s._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("<iostream>")])]),s._v("\nusing namespace std"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\ncout "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, world!"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" endl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("输出结果为：\nHello, world!")]),s._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("<iostream>")])]),s._v("\nusing namespace std"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\ncout "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1980")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" endl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncout "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1980")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" endl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("输出结果为：")]),s._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("495")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("495")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);