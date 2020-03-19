(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{269:function(s,t,a){"use strict";a.r(t);var e=a(9),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"jupyter-notebook配置julia环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jupyter-notebook配置julia环境"}},[s._v("#")]),s._v(" Jupyter Notebook配置Julia环境")]),s._v(" "),a("p",[a("strong",[s._v("请根据笔记的写作日期，选择性阅读。")])]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("作者：")]),s._v(" "),a("RouterLink",{attrs:{to:"/about/"}},[s._v(s._s(s.$themeConfig.self.name))]),a("br"),s._v(" "),a("strong",[s._v("Home：")]),s._v(" "),a("RouterLink",{attrs:{to:"/"}},[s._v(s._s(s.$themeConfig.self.site))]),a("br"),s._v(" "),a("strong",[s._v("写作日期：")]),s._v(" 2019-01-30"),a("br"),s._v(" "),a("strong",[s._v("系统：")]),s._v(" Mac@10.14.2"),a("br"),s._v(" "),a("strong",[s._v("软件版本：")]),a("br"),s._v("\njupyter@1.0.0"),a("br"),s._v("\nJulia@1.1.0"),a("br"),s._v("\nIJulia@1.16.0"),a("br"),s._v(" "),a("strong",[s._v("参考：")]),a("br"),s._v(" "),a("a",{attrs:{href:"https://github.com/JuliaLang/IJulia.jl",target:"_blank",rel:"noopener noreferrer"}},[s._v("IJulia"),a("OutboundLink")],1)],1)]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("说明一下，为什么要在 jupyter 中搭建 Julia？")]),s._v(" "),a("ul",[a("li",[s._v("主要用于数据处理和分析，使用 jupyter 方便")]),s._v(" "),a("li",[s._v("使用 Juno 和 JuliaPro 搭建过程麻烦，而且在其中均未能成功绘制出图形在 plot 面板中显示。（要么绘制出错，要么好像是成功绘制了，但是不能停住该画面，一闪而过）")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"方法一：新安装jupyter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一：新安装jupyter"}},[s._v("#")]),s._v(" 方法一：新安装jupyter")]),s._v(" "),a("p",[s._v("在新安装 jupyter notebook 下安装 IJulia。")]),s._v(" "),a("blockquote",[a("p",[s._v("注：以下操作在  julia repl 下进行。")])]),s._v(" "),a("p",[s._v("进入 julia repl：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("using Pkg\nPkg.add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IJulia"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("此时已安装完成 IJulia，但未安装 jupyter notebook，因此需要手动安装。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("using IJulia\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这一步会安装 jupyter notebook")]),s._v("\nnotebook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("安装完成后，就可以启动 jupyter 了")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("jupyter notebook\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("通过 "),a("code",[s._v("dir")]),s._v(" 参数可以设置 jupyter 的工作起始目录。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("notebook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Users/nice/code/jybook"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"方法二：指定jupyter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二：指定jupyter"}},[s._v("#")]),s._v(" 方法二：指定jupyter")]),s._v(" "),a("p",[s._v("指定 jupyter notebook 下安装 IJulia。")]),s._v(" "),a("blockquote",[a("p",[s._v("注：以下操作在 julia repl 下进行。")])]),s._v(" "),a("p",[s._v("进入 julia repl：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("using Pkg\nENV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"JUPYTER"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Users/nice/anaconda3/bin/jupyter"')]),s._v("\nPkg.add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IJulia"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("code",[s._v('ENV["JUPYTER"]')]),s._v(" 设置为 jupyter 的路径。")]),s._v(" "),a("blockquote",[a("p",[s._v("注：以下操作在 Terminal 下进行。")])]),s._v(" "),a("p",[s._v("至此安装完成，启动你的 jupyter 新建文件时就可以看到新添加的内核了，另外也可以查看使用以下命令查看 jupyter 内核。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("jupyter kernelspec list\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);