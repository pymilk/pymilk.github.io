(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{257:function(t,v,_){"use strict";_.r(v);var s=_(9),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"unix命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#unix命令"}},[t._v("#")]),t._v(" Unix命令")]),t._v(" "),_("p",[_("strong",[t._v("请根据笔记的写作日期，选择性阅读。")])]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("作者：")]),t._v(" "),_("RouterLink",{attrs:{to:"/about/"}},[t._v(t._s(t.$themeConfig.self.name))]),_("br"),t._v(" "),_("strong",[t._v("Home：")]),t._v(" "),_("RouterLink",{attrs:{to:"/"}},[t._v(t._s(t.$themeConfig.self.site))]),_("br"),t._v(" "),_("strong",[t._v("写作日期：")]),t._v(" 2018-02-13"),_("br"),t._v(" "),_("strong",[t._v("系统：")]),t._v("  Mac@10.14.3"),_("br"),t._v(" "),_("strong",[t._v("软件版本：")]),_("br"),t._v(" "),_("strong",[t._v("参考：")])],1)]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"_01-环境变量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_01-环境变量"}},[t._v("#")]),t._v(" 01. 环境变量")]),t._v(" "),_("p",[t._v("查看系统的 shell 解析器列表：")]),t._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/shells\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("查看当前使用的 shell 解析器")]),t._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$SHELL")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("zsh 对应的文件 ~/.zshrc")]),t._v(" "),_("p",[t._v("bash 对应的文件 ~/.bash_profile")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("bash 最为常用，所以以下将针对 bash 进行介绍。")])])]),t._v(" "),_("p",[t._v("shell 脚本的组成：")]),t._v(" "),_("ul",[_("li",[t._v("if-else 和 for、while 等 shell 循环指令")]),t._v(" "),_("li",[t._v("grep、awk、cut 等文本处理工具")]),t._v(" "),_("li",[t._v("w、who、free 等二进制可执行程序")])]),t._v(" "),_("p",[t._v("shell 脚本的使用目的：")]),t._v(" "),_("ul",[_("li",[t._v("接受用户或文件传来的指令并在屏幕上显示数据")]),t._v(" "),_("li",[t._v("可自动重复执行相同操作")]),t._v(" "),_("li",[t._v("节约时间")]),t._v(" "),_("li",[t._v("创建自己的 PowerTool 和 Power 实用工具")]),t._v(" "),_("li",[t._v("管理员工作个性化")]),t._v(" "),_("li",[t._v("减少设置服务环境和添加用户等操作中产生的错误")]),t._v(" "),_("li",[t._v("等等")])]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("如需高级编程操作，请使用 gcc 或 Python。")])])]),t._v(" "),_("p",[t._v("bash 脚本关键字：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("!")]),t._v(" "),_("th",[t._v("esac")]),t._v(" "),_("th",[t._v("select")]),t._v(" "),_("th",[t._v("{")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("case")]),t._v(" "),_("td",[t._v("fi")]),t._v(" "),_("td",[t._v("then")]),t._v(" "),_("td",[t._v("}")])]),t._v(" "),_("tr",[_("td",[t._v("do")]),t._v(" "),_("td",[t._v("for")]),t._v(" "),_("td",[t._v("until")]),t._v(" "),_("td",[t._v("[[")])]),t._v(" "),_("tr",[_("td",[t._v("done")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td",[t._v("while")]),t._v(" "),_("td",[t._v("]]")])]),t._v(" "),_("tr",[_("td",[t._v("elif")]),t._v(" "),_("td",[t._v("if")]),t._v(" "),_("td",[t._v("time")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("else")]),t._v(" "),_("td",[t._v("in")]),t._v(" "),_("td"),t._v(" "),_("td")])])]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"_02-基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_02-基础"}},[t._v("#")]),t._v(" 02. 基础")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("意义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("man")]),t._v(" "),_("td",[t._v("手册")])]),t._v(" "),_("tr",[_("td",[t._v("echo")]),t._v(" "),_("td",[t._v("显示变量")])]),t._v(" "),_("tr",[_("td",[t._v(";")]),t._v(" "),_("td",[t._v("按顺序执行命令，无论执行是否失败")])]),t._v(" "),_("tr",[_("td",[t._v("&&")]),t._v(" "),_("td",[t._v("按顺序执行命令，遇到命令失败时终止")])]),t._v(" "),_("tr",[_("td",[t._v("||")]),t._v(" "),_("td",[t._v("按顺序执行命令，遇到命令成功时终止")])]),t._v(" "),_("tr",[_("td",[t._v("!")]),t._v(" "),_("td",[t._v("配合首字母或字符串查询最近执行的命令")])]),t._v(" "),_("tr",[_("td",[t._v("!!")]),t._v(" "),_("td",[t._v("重新执行最后的命令")])]),t._v(" "),_("tr",[_("td",[t._v("!-n")]),t._v(" "),_("td",[t._v("重新执行倒数第 n 条命令，n 为具体数字")])])])]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"_03-目录操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_03-目录操作"}},[t._v("#")]),t._v(" 03. 目录操作")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("意义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("pwd")]),t._v(" "),_("td",[t._v("显示当前工作路径")])]),t._v(" "),_("tr",[_("td",[t._v("ls")]),t._v(" "),_("td",[t._v("显示当前路径下的文件")])]),t._v(" "),_("tr",[_("td",[t._v("less")]),t._v(" "),_("td",[t._v("浏览文本文件")])]),t._v(" "),_("tr",[_("td",[t._v("more")]),t._v(" "),_("td",[t._v("浏览文本文件")])]),t._v(" "),_("tr",[_("td",[t._v("cat")]),t._v(" "),_("td",[t._v("浏览文本文件")])]),t._v(" "),_("tr",[_("td",[t._v("file")]),t._v(" "),_("td",[t._v("显示文件类型")])]),t._v(" "),_("tr",[_("td",[t._v("cp")]),t._v(" "),_("td",[t._v("复制文件")])]),t._v(" "),_("tr",[_("td",[t._v("mv")]),t._v(" "),_("td",[t._v("重命名或移动文件")])]),t._v(" "),_("tr",[_("td",[t._v("rm")]),t._v(" "),_("td",[t._v("删除文件")])]),t._v(" "),_("tr",[_("td",[t._v("mkdir")]),t._v(" "),_("td",[t._v("创建目录")])]),t._v(" "),_("tr",[_("td",[t._v("rmdir")]),t._v(" "),_("td",[t._v("删除空目录")])]),t._v(" "),_("tr",[_("td",[t._v("touch")]),t._v(" "),_("td",[t._v("创建文件")])]),t._v(" "),_("tr",[_("td",[t._v("ln")]),t._v(" "),_("td",[t._v("创建链接")])])])]),t._v(" "),_("ol",[_("li")]),t._v(" "),_("p",[t._v("创建软链接")]),t._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s 源文件 目标文件\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ol",{attrs:{start:"2"}},[_("li")]),t._v(" "),_("p",[t._v("递归删除指定文件")]),t._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v("  "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -name  "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.exe'")]),t._v(" -type  f -print -exec  "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ul",[_("li")]),t._v(" "),_("p",[t._v('"." 表示从当前目录开始递归查找')]),t._v(" "),_("ul",[_("li")]),t._v(" "),_("p",[t._v("“ -name '*.exe' \" 根据名称来查找，要查找所有以.exe结尾的文件夹或者文件")]),t._v(" "),_("ul",[_("li")]),t._v(" "),_("p",[t._v('" -type f " 查找的类型为文件')]),t._v(" "),_("ul",[_("li")]),t._v(" "),_("p",[t._v('"-print" 输出查找的文件目录名')]),t._v(" "),_("ul",[_("li")]),t._v(" "),_("p",[t._v("最主要的是是-exec了，-exec选项后边跟着一个所要执行的命令，表示将find出来的文件或目录执行该命令。")]),t._v(" "),_("blockquote",[_("p",[t._v("exec 选项后面跟随着所要执行的命令或脚本，然后是一对 {}，一个空格和一个 \\，最后是一个分号。")])]),t._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v("  "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -name  "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.ad'")]),t._v(" -type  f -print -exec  "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("hr"),t._v(" "),_("h2",{attrs:{id:"_04-io"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_04-io"}},[t._v("#")]),t._v(" 04. IO")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("意义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v(">")]),t._v(" "),_("td",[t._v("重定向-重写")])]),t._v(" "),_("tr",[_("td",[t._v(">>")]),t._v(" "),_("td",[t._v("重定向-追加")])]),t._v(" "),_("tr",[_("td",[t._v("|")]),t._v(" "),_("td",[t._v("管道，前一个命令的值成为下一个命令的输入")])]),t._v(" "),_("tr",[_("td",[t._v("grep")]),t._v(" "),_("td",[t._v("接受以行为单位的数据搜索并输出符合的结果")])]),t._v(" "),_("tr",[_("td",[t._v("find")]),t._v(" "),_("td",[t._v("查找文件")])])])]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"_05-文件访问权限"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_05-文件访问权限"}},[t._v("#")]),t._v(" 05. 文件访问权限")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("意义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("chmod")]),t._v(" "),_("td",[t._v("修改文件权限，+- rwx")])]),t._v(" "),_("tr",[_("td",[t._v("su")]),t._v(" "),_("td",[t._v("临时转为超级用户/其他用户")])]),t._v(" "),_("tr",[_("td",[t._v("chown")]),t._v(" "),_("td",[t._v("修改文件所有者")])]),t._v(" "),_("tr",[_("td",[t._v("chgrp")]),t._v(" "),_("td",[t._v("修改文件的组所有者")])])])]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("如果出现 root 用户也无法删除的文件。先使用 lsattr 查看文件属性，再使用 chattr 删除文件属性，然后删除文件。")])])]),t._v(" "),_("p",[t._v("文件类型：")]),t._v(" "),_("ul",[_("li",[t._v("d：目录")]),t._v(" "),_("li",[t._v("-：文本文件、shell 脚本文件、可执行文件")]),t._v(" "),_("li",[t._v("c：字符设备")]),t._v(" "),_("li",[t._v("b：块设备")]),t._v(" "),_("li",[t._v("l：符号链接文件")]),t._v(" "),_("li",[t._v("s：socket 文件")])]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"_06-作业控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_06-作业控制"}},[t._v("#")]),t._v(" 06. 作业控制")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("意义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("ps")]),t._v(" "),_("td",[t._v("显示系统进程")])]),t._v(" "),_("tr",[_("td",[t._v("kill")]),t._v(" "),_("td",[t._v("杀死进程")])]),t._v(" "),_("tr",[_("td",[t._v("pkill")]),t._v(" "),_("td",[t._v("杀死一系列相关进程")])]),t._v(" "),_("tr",[_("td",[t._v("jobs")]),t._v(" "),_("td",[t._v("查看当前 shell 自己的进程")])]),t._v(" "),_("tr",[_("td",[t._v("bg")]),t._v(" "),_("td",[t._v("向后台传送进程")])]),t._v(" "),_("tr",[_("td",[t._v("fg")]),t._v(" "),_("td",[t._v("向前台传送进程")])])])]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"_07-解压缩"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_07-解压缩"}},[t._v("#")]),t._v(" 07. 解压缩")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("意义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("tar")]),t._v(" "),_("td",[t._v("解压缩tar")])]),t._v(" "),_("tr",[_("td",[t._v("zip")]),t._v(" "),_("td",[t._v("压缩zip")])]),t._v(" "),_("tr",[_("td",[t._v("unzip")]),t._v(" "),_("td",[t._v("解压zip")])])])]),t._v(" "),_("ol",[_("li")]),t._v(" "),_("p",[t._v(".tar.gz 和 .tgz")]),t._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" zxvf FileName.tar.gz\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 压缩")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" zcvf FileName.tar.gz DirName\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br")])]),_("ol",{attrs:{start:"2"}},[_("li")]),t._v(" "),_("p",[t._v(".zip")]),t._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 压缩：将当前目录下的所有文件和文件夹全部压缩成 myfile.zip 文件, -r 表示递归压缩子目录下所有文件。")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" -r myfile.zip ./*\n\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压： 把 myfile.zip 文件解压到 /home/sunny/")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# \t\t-o: 不提示的情况下覆盖文件")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# \t\t-d: -d /home/sunny 指明将文件解压缩到/home/sunny目录下")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" -o -d /home/sunny myfile.zip\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br")])]),_("hr"),t._v(" "),_("h2",{attrs:{id:"_08-系统维护"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_08-系统维护"}},[t._v("#")]),t._v(" 08. 系统维护")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("意义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("users")]),t._v(" "),_("td",[t._v("显示当前登录的用户，等价于 who -q")])]),t._v(" "),_("tr",[_("td",[t._v("who")]),t._v(" "),_("td",[t._v("显示当前登录的用户目录")])]),t._v(" "),_("tr",[_("td",[t._v("groups")]),t._v(" "),_("td",[t._v("显示当前登录用户所属组信息")])]),t._v(" "),_("tr",[_("td",[t._v("tset")]),t._v(" "),_("td",[t._v("初始化终端设置或显示终端类型")])]),t._v(" "),_("tr",[_("td",[t._v("uname")]),t._v(" "),_("td",[t._v("显示系统内核信息")])]),t._v(" "),_("tr",[_("td",[t._v("lsof")]),t._v(" "),_("td",[t._v("显示已打开的文件")])]),t._v(" "),_("tr",[_("td",[t._v("arch")]),t._v(" "),_("td",[t._v("显示系统架构，等价于 uname -m")])]),t._v(" "),_("tr",[_("td",[t._v("last")]),t._v(" "),_("td",[t._v("显示用户最后登录时间")])]),t._v(" "),_("tr",[_("td",[t._v("strace")]),t._v(" "),_("td",[t._v("追踪命令执行时的系统调用和信号")])]),t._v(" "),_("tr",[_("td",[t._v("ltrace")]),t._v(" "),_("td",[t._v("追踪命令执行时的库调用")])]),t._v(" "),_("tr",[_("td",[t._v("nc")]),t._v(" "),_("td",[t._v("端口扫描")])]),t._v(" "),_("tr",[_("td",[t._v("free")]),t._v(" "),_("td",[t._v("显示内存和缓存用量")])]),t._v(" "),_("tr",[_("td",[t._v("lsdev")]),t._v(" "),_("td",[t._v("显示已安装的设备目录")])]),t._v(" "),_("tr",[_("td",[t._v("du")]),t._v(" "),_("td",[t._v("显示磁盘文件使用情况")])]),t._v(" "),_("tr",[_("td",[t._v("df")]),t._v(" "),_("td",[t._v("显示文件系统分区使用量")])]),t._v(" "),_("tr",[_("td",[t._v("stat")]),t._v(" "),_("td",[t._v("显示文件各种详细信息")])]),t._v(" "),_("tr",[_("td",[t._v("vmstat")]),t._v(" "),_("td",[t._v("显示虚拟内存的统计结果")])]),t._v(" "),_("tr",[_("td",[t._v("netstat")]),t._v(" "),_("td",[t._v("显示当前网络统计和信息")])]),t._v(" "),_("tr",[_("td",[t._v("uptime")]),t._v(" "),_("td",[t._v("显示当前系统运行的时间、系统不终止或重启的情况下继续运行的时间、当前登陆人数、平均负载等。若平均负载大于3，系统性能就会明显下降。")])]),t._v(" "),_("tr",[_("td",[t._v("hostname")]),t._v(" "),_("td",[t._v("显示主机名")])]),t._v(" "),_("tr",[_("td",[t._v("readelf")]),t._v(" "),_("td",[t._v("显示二进制文件信息")])]),t._v(" "),_("tr",[_("td",[t._v("logger")]),t._v(" "),_("td",[t._v("记录系统日日志")])]),t._v(" "),_("tr",[_("td",[t._v("pgrep")]),t._v(" "),_("td",[t._v("检索进程")])]),t._v(" "),_("tr",[_("td",[t._v("top")]),t._v(" "),_("td",[t._v("显示系统整体状况")])]),t._v(" "),_("tr",[_("td",[t._v("nohup")]),t._v(" "),_("td",[t._v("忽略所有 Hanghup 信号")])]),t._v(" "),_("tr",[_("td",[t._v("service")]),t._v(" "),_("td",[t._v("开启和终止系统服务")])]),t._v(" "),_("tr",[_("td",[t._v("ifconfig")]),t._v(" "),_("td",[t._v("显示和调试网络接口环境")])]),t._v(" "),_("tr",[_("td",[t._v("route")]),t._v(" "),_("td",[t._v("显示或修改内核路由信息")])]),t._v(" "),_("tr",[_("td",[t._v("tcpdump")]),t._v(" "),_("td",[t._v("实时显示网络数据包")])]),t._v(" "),_("tr",[_("td",[t._v("mount")]),t._v(" "),_("td",[t._v("挂载文件系统")])]),t._v(" "),_("tr",[_("td",[t._v("umount")]),t._v(" "),_("td",[t._v("卸载文件系统")])]),t._v(" "),_("tr",[_("td",[t._v("env")]),t._v(" "),_("td",[t._v("显示环境变量或在其它系统环境中执行程序")])]),t._v(" "),_("tr",[_("td",[t._v("watch")]),t._v(" "),_("td",[t._v("指定时间内重复执行该命令")])]),t._v(" "),_("tr",[_("td",[t._v("nm")]),t._v(" "),_("td",[t._v("显示已编译而未清除的目标文件的符号目录")])])])]),t._v(" "),_("hr")])}),[],!1,null,null,null);v.default=a.exports}}]);