(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{316:function(s,t,a){"use strict";a.r(t);var n=a(9),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"pyyaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pyyaml"}},[s._v("#")]),s._v(" pyyaml")]),s._v(" "),a("p",[a("strong",[s._v("请根据笔记的写作日期，选择性阅读。")])]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("作者：")]),s._v(" "),a("RouterLink",{attrs:{to:"/about/"}},[s._v(s._s(s.$themeConfig.self.name))]),a("br"),s._v(" "),a("strong",[s._v("Home：")]),s._v(" "),a("RouterLink",{attrs:{to:"/"}},[s._v(s._s(s.$themeConfig.self.site))]),a("br"),s._v(" "),a("strong",[s._v("写作日期：")]),s._v(" 2019-07-09"),a("br"),s._v(" "),a("strong",[s._v("系统：")]),s._v(" Mac@10.14.5"),a("br"),s._v(" "),a("strong",[s._v("软件版本：")]),a("br"),s._v("\npython@3.7.2"),a("br"),s._v("\npyyaml@5.1.1"),a("br"),s._v(" "),a("strong",[s._v("参考：")]),a("br"),s._v(" "),a("a",{attrs:{href:"https://pyyaml.org/wiki/PyYAMLDocumentation",target:"_blank",rel:"noopener noreferrer"}},[s._v("PyYAML"),a("OutboundLink")],1),a("br"),s._v(" "),a("a",{attrs:{href:"https://github.com/yaml/pyyaml/wiki/PyYAML-yaml.load(input)-Deprecation",target:"_blank",rel:"noopener noreferrer"}},[s._v("PyYAML yaml.load(input) Deprecation"),a("OutboundLink")],1)],1)]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"一、保存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、保存"}},[s._v("#")]),s._v(" 一、保存")]),s._v(" "),a("p",[s._v("假设字典 sprites 为需要保存的内容：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("sprites "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"皮卡丘"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"color"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yellow"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"relationship"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"freiends"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xiaozhi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"brother"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" yaml\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sprites.yaml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'w'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dump"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sprites"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内容中包含中文，这样能保证显示时也是中文")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sprites2.yaml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'w'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dump"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("spirits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" allow_unicode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"二、读取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、读取"}},[s._v("#")]),s._v(" 二、读取")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sprites.yaml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    datas "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读取数据：中文")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sprites2.yaml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    sprites "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v('需要注意的是5.1之后的版本已经弃用 load 方法，而改用以下的方法：\nYou may also use one of the shortcut "sugar" methods:')]),s._v(" "),a("ul",[a("li",[a("code",[s._v("yaml.safe_load")])]),s._v(" "),a("li",[a("code",[s._v("yaml.full_load")])]),s._v(" "),a("li",[a("code",[s._v("yaml.unsafe_load")])])]),s._v(" "),a("p",[s._v("所以以上代码的推荐写法是：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sprites.yaml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    datas "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("safe_load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读取数据：中文")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sprites2.yaml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    sprites "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("safe_load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);