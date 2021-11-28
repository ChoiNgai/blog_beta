(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{440:function(t,s,a){"use strict";a.r(s);var n=a(30),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"hive计算绝对值同环比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hive计算绝对值同环比"}},[t._v("#")]),t._v(" Hive计算绝对值同环比")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/1OYP1AZw0W0wb5YW8VBsDKaPFpDZoPwUS98Y0CRXBD7oVQvq9sTicftzUg5wHmeJuvAVga6CQLzKHmuf71BaPdA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),a("h3",{attrs:{id:"什么是绝对值同比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是绝对值同比"}},[t._v("#")]),t._v(" 什么是绝对值同比")]),t._v(" "),a("p",[t._v("本期数据-同期数据**|同期数据|**\n"),a("strong",[t._v("例：")]),t._v(" 2021年1月1日的gmv -2020年1月1日的gmv/|2020年1月1日的gmv|")]),t._v(" "),a("h3",{attrs:{id:"什么是绝对值环比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是绝对值环比"}},[t._v("#")]),t._v(" 什么是绝对值环比")]),t._v(" "),a("p",[t._v("本期数据-上期数据/"),a("strong",[t._v("|上期数据|")]),t._v(" "),a("strong",[t._v("例：")]),t._v(" 2021年2月2日的gmv -2020年2月1日的gmv/|2020年2月1日的gmv|")]),t._v(" "),a("h3",{attrs:{id:"数据集准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据集准备"}},[t._v("#")]),t._v(" 数据集准备")]),t._v(" "),a("h4",{attrs:{id:"建表语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建表语句"}},[t._v("#")]),t._v(" 建表语句")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" new_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\ndt string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\narea string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nprovince string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nsaleroom "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"数据准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据准备"}},[t._v("#")]),t._v(" 数据准备")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" new_table "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2017-12-01'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sh'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3600000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" new_table "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2017-12-02'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2800000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" new_table "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2017-12-03'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zj'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4500000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" new_table "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2017-12-04'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bj'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3000000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" new_table "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2017-12-05'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tj'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2800000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" new_table "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2018-12-01'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sh'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3000000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" new_table "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2018-12-02'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2000000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" new_table "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2018-12-03'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zj'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2500000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" new_table "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2018-12-04'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bj'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2600000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" new_table "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2018-12-05'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tj'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1500000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"同比计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同比计算"}},[t._v("#")]),t._v(" 同比计算")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" tmp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" \ndt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\narea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nprovince"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nsaleroom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nlag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("saleroom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("over")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("partition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("month")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("day")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("area"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("province "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" dt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("asc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pre_sale\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" new_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" \ndt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("area"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("province"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("saleroom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pre_sale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("saleroom"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pre_sale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("abs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pre_sale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("saleroom"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pre_sale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("abs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pre_sale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\n")])])]),a("h3",{attrs:{id:"环比计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环比计算"}},[t._v("#")]),t._v(" 环比计算")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" tmp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" \ndt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\narea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nprovince"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nsaleroom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nlag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("saleroom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("over")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("partition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("month")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("day")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("area"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("province "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" dt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("asc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pre_sale\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" new_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" \ndt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("area"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("province"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("saleroom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pre_sale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("saleroom"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pre_sale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("abs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pre_sale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("saleroom"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pre_sale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("abs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pre_sale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tmp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);