(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{470:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"环境部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境部署"}},[t._v("#")]),t._v(" 环境部署")]),t._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("JDK >= 1.8 (推荐1.8版本)\nMysql >= 5.7.0 (推荐5.7版本)\nMaven >= 3.0\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"运行系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行系统"}},[t._v("#")]),t._v(" 运行系统")]),t._v(" "),a("p",[t._v("1、前往"),a("code",[t._v("Gitee")]),t._v("下载页面("),a("a",{attrs:{href:"https://gitee.com/y_project/RuoYi",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/y_project/RuoYi"),a("OutboundLink")],1),t._v(")下载解压到工作目录"),a("br"),t._v("\n2、导入到"),a("code",[t._v("Eclipse")]),t._v("，菜单 "),a("code",[t._v("File")]),t._v(" -> "),a("code",[t._v("Import")]),t._v("，然后选择 "),a("code",[t._v("Maven")]),t._v(" -> "),a("code",[t._v("Existing Maven Projects")]),t._v("，点击 "),a("code",[t._v("Next")]),t._v("> 按钮，选择工作目录，然后点击 "),a("code",[t._v("Finish")]),t._v(" 按钮，即可成功导入。"),a("br"),t._v(" "),a("code",[t._v("Eclipse")]),t._v("会自动加载"),a("code",[t._v("Maven")]),t._v("依赖包，初次加载会比较慢（根据自身网络情况而定）"),a("br"),t._v("\n3、创建数据库"),a("code",[t._v("ry")]),t._v("并导入数据脚本"),a("code",[t._v("ry_2021xxxx.sql")]),t._v("，"),a("code",[t._v("quartz.sql")]),a("br"),t._v("\n4、打开项目运行"),a("code",[t._v("com.ruoyi.RuoYiApplication.java")]),t._v("，出现如下图表示启动成功。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(♥◠‿◠)ﾉﾞ  若依启动成功   ლ(´ڡ`ლ)ﾞ  \n .-------.       ____     __        \n |  _ _   \\      \\   \\   /  /    \n | ( ' )  |       \\  _. /  '       \n |(_ o _) /        _( )_ .'         \n | (_,_).' __  ___(_ o _)'          \n |  |\\ \\  |  ||   |(_,_)'         \n |  | \\ `'   /|   `-'  /           \n |  |  \\    /  \\      /           \n ''-'   `'-'    `-..-'    \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("5、打开浏览器，输入：("),a("a",{attrs:{href:"http://localhost:80",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:80"),a("OutboundLink")],1),t._v(") （默认账户/密码 "),a("code",[t._v("admin/admin123")]),t._v("）"),a("br"),t._v("\n若能正确展示登录页面，并能成功登录，菜单及页面展示正常，则表明环境搭建成功")]),t._v(" "),a("p",[t._v("建议使用"),a("code",[t._v("Git")]),t._v("克隆，因为克隆的方式可以和"),a("code",[t._v("RuoYi")]),t._v("随时保持更新同步。使用"),a("code",[t._v("Git")]),t._v("命令克隆")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone https://gitee.com/y_project/RuoYi.git\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"必要配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#必要配置"}},[t._v("#")]),t._v(" 必要配置")]),t._v(" "),a("ul",[a("li",[t._v("修改数据库连接，编辑"),a("code",[t._v("resources")]),t._v("目录下的"),a("code",[t._v("application-druid.yml")])])]),t._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据源配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.alibaba.druid.pool.DruidDataSource\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driverClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mysql.cj.jdbc.Driver\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("druid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主库数据源")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("master")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 数据库地址\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 数据库账号\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 数据库密码\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("ul",[a("li",[t._v("修改服务器配置，"),a("code",[t._v("编辑resources目录下的application.yml")])])]),t._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开发环境配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务器的HTTP端口，默认为80")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 端口\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servlet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 应用的访问路径")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("context-path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /应用路径\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"部署系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署系统"}},[t._v("#")]),t._v(" 部署系统")]),t._v(" "),a("ul",[a("li",[t._v("打包工程文件")])]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("ruoyi")]),t._v("项目的"),a("code",[t._v("bin")]),t._v("目录下执行"),a("code",[t._v("package.bat")]),t._v("打包Web工程，生成war/jar包文件。"),a("br"),t._v("\n然后会在项目下生成"),a("code",[t._v("target")]),t._v("文件夹包含"),a("code",[t._v("war")]),t._v("或"),a("code",[t._v("jar")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("多模块版本会生成在"),a("code",[t._v("ruoyi/ruoyi-admin")]),t._v("模块下"),a("code",[t._v("target")]),t._v("文件夹")])]),t._v(" "),a("ul",[a("li",[t._v("部署工程文件")])]),t._v(" "),a("p",[t._v("1、jar部署方式"),a("br"),t._v("\n使用命令行执行："),a("code",[t._v("java –jar ruoyi.jar")]),t._v(" 或者执行脚本："),a("code",[t._v("ruoyi/bin/run.bat")])]),t._v(" "),a("p",[t._v("2、war部署方式"),a("br"),t._v(" "),a("code",[t._v("ruoyi/pom.xml")]),t._v("中的"),a("code",[t._v("packaging")]),t._v("修改为"),a("code",[t._v("war")]),t._v("，放入"),a("code",[t._v("tomcat")]),t._v("服务器"),a("code",[t._v("webapps")])]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("packaging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("war"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("packaging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("多模块版本在"),a("code",[t._v("ruoyi/ruoyi-admin")]),t._v("模块下修改"),a("code",[t._v("pom.xml")])])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("SpringBoot")]),t._v("去除内嵌"),a("code",[t._v("Tomcat")]),t._v("（PS：此步骤不重要，因为不排除也能在容器中部署"),a("code",[t._v("war")]),t._v("）")])]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 多模块排除内置tomcat --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-web"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("exclusions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("exclusion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-tomcat"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("exclusion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("exclusions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 单应用排除内置tomcat --\x3e")]),t._v("\t\t\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("exclusions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("exclusion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-tomcat"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("exclusion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("exclusions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("ol",[a("li",[t._v("如果使用"),a("code",[t._v("Mac")]),t._v("需要修改"),a("code",[t._v("application.yml")]),t._v("文件路径"),a("code",[t._v("profile")])]),t._v(" "),a("li",[t._v("如果使用"),a("code",[t._v("Linux")]),t._v(" 提示表不存在，设置大小写敏感配置在"),a("code",[t._v("/etc/my.cnf")]),t._v("添加"),a("code",[t._v("lower_case_table_names=1")]),t._v("，重启MYSQL服务")]),t._v(" "),a("li",[t._v("如果提示当前权限不足，无法写入文件请检查"),a("code",[t._v("application.yml")]),t._v("中的"),a("code",[t._v("profile")]),t._v("路径或"),a("code",[t._v("logback.xml")]),t._v("中的"),a("code",[t._v("log.path")]),t._v("路径是否有可读可写操作权限")])]),t._v(" "),a("p",[t._v("如遇到无法解决的问题请到"),a("a",{attrs:{href:"https://gitee.com/y_project/RuoYi/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("Issues"),a("OutboundLink")],1),t._v("反馈，会不定时进行解答。")])])}),[],!1,null,null,null);s.default=e.exports}}]);