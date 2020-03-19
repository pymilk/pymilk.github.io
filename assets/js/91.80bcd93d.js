(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{313:function(s,t,a){"use strict";a.r(t);var n=a(9),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"pulp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pulp"}},[s._v("#")]),s._v(" pulp")]),s._v(" "),a("p",[a("strong",[s._v("请根据笔记的写作日期，选择性阅读。")])]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("作者：")]),s._v(" "),a("RouterLink",{attrs:{to:"/about/"}},[s._v(s._s(s.$themeConfig.self.name))]),a("br"),s._v(" "),a("strong",[s._v("Home：")]),s._v(" "),a("RouterLink",{attrs:{to:"/"}},[s._v(s._s(s.$themeConfig.self.site))]),a("br"),s._v(" "),a("strong",[s._v("写作日期：")]),s._v(" 2018-10-11"),a("br"),s._v(" "),a("strong",[s._v("系统：")]),s._v(" Mac"),a("br"),s._v(" "),a("strong",[s._v("软件版本：")]),a("br"),s._v("\npython@3.6.6"),a("br"),s._v("\nPuLP@0.6.0"),a("br"),s._v(" "),a("strong",[s._v("参考：")]),a("br"),s._v(" "),a("a",{attrs:{href:"https://pythonhosted.org/PuLP/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PuLP"),a("OutboundLink")],1)],1)]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("PuLP is an LP modeler written in python. PuLP can generate MPS or LP files and call GLPK, COIN CLP/CBC, CPLEX, and GUROBI to solve linear problems.")]),s._v(" "),a("p",[s._v("PuLP是一个用python编写的LP建模器。 PuLP可以生成MPS或LP文件并调用GLPK，COIN CLP / CBC，CPLEX和GUROBI来解决线性问题。")]),s._v(" "),a("h2",{attrs:{id:"一、求解步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、求解步骤"}},[s._v("#")]),s._v(" 一、求解步骤")]),s._v(" "),a("ol",[a("li",[s._v("导入库函数")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pulp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("定义线性规划问题")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("PB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LpProblem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("problem_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sense"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("构造函数，用来构造一个 LP 问题实例")]),s._v(" "),a("ul",[a("li",[s._v("name：指定问题名（输出信息用）")]),s._v(" "),a("li",[s._v("sense 值是 或 LpMaximize 或 LpMinimize 中的一个，用来指定目标函数求最大值还是最小值。")])]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("定义决策变量")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("DV "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LpVariable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("decision_variable_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" lowbound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" upbound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" category"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("decision_variable_name：指定变量名")]),s._v(" "),a("li",[s._v("lowbound：下界，默认为负无穷大")]),s._v(" "),a("li",[s._v("upbound：上界，默认为正无穷大")]),s._v(" "),a("li",[s._v("category：指定变量是离散（LpInteger，LpBinary）还是连续（LpContinuous）")])]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("添加目标函数")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("PB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" expression\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("添加约束条件")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("PB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" expression\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("写入 LP 文件")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("prob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("writeLP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[s._v("模型求解")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("PB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("solve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"8"}},[a("li",[s._v("结果显示")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("求解结果：\nvalue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("prob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objective"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n满足条件的变量取值：\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" prob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("variables"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("varValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"二、示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、示例"}},[s._v("#")]),s._v(" 二、示例")]),s._v(" "),a("p",[s._v("比如说求解下面式子的最大值：")]),s._v(" "),a("p",[s._v("$$ z = 50x+80y $$")]),s._v(" "),a("p",[s._v("约束条件为：")]),s._v(" "),a("p",[s._v("$$\\begin{cases}\n2x+4y \\le 20 \\newline\n1.5x+2y \\le 12\n\\end{cases}$$")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pulp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n\nprob "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LpProblem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"求解收益最大值"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" LpMaximize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LpVariable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" LpContinuous"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ny "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LpVariable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"y"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" LpContinuous"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\nprob "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("y\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\nprob "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\nprob "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# prob.writeLP("求解收益最大值.lp")')]),s._v("\nprob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("solve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"最大收益为："')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("prob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objective"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" prob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("variables"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("varValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("最大收益为： 440.0\nx = 4.0\ny = 3.0\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);