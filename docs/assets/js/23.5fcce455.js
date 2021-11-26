(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{423:function(t,a,e){"use strict";e.r(a);var r=e(30),_=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"hive全面讲解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hive全面讲解"}},[t._v("#")]),t._v(" Hive全面讲解")]),t._v(" "),e("p",[e("strong",[t._v("1 Hive")])]),t._v(" "),e("p",[t._v("Hive 是 FaceBook 开源的一款基于 Hadoop 数据仓库工具，它可以将结构化的数据文件映射为一张表，并提供类SQL查询功能。")]),t._v(" "),e("blockquote",[e("p",[t._v("The Apache Hive ™ data warehouse software facilitates reading, writing, and managing large datasets residing in distributed storage using SQL 。")])]),t._v(" "),e("h3",{attrs:{id:"_1-1-hive-优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-hive-优缺点"}},[t._v("#")]),t._v(" 1.1 Hive 优缺点")]),t._v(" "),e("h5",{attrs:{id:"_1-1-1-优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-优点"}},[t._v("#")]),t._v(" 1.1.1 优点")]),t._v(" "),e("ol",[e("li",[t._v("操作接口采用类SQL语法，提供快速开发的能力（简单、容易上手）。")]),t._v(" "),e("li",[t._v("避免了去写MapReduce，减少开发人员的学习成本。")]),t._v(" "),e("li",[t._v("Hive的执行延迟比较高，因此Hive常用于数据分析，对实时性要求不高的场合。")]),t._v(" "),e("li",[t._v("Hive优势在于处理大数据，对于处理小数据没有优势，因为Hive的执行延迟比较高。")]),t._v(" "),e("li",[t._v("Hive支持用户自定义函数，用户可以根据自己的需求来实现自己的函数。")])]),t._v(" "),e("h5",{attrs:{id:"_1-1-2-缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-缺点"}},[t._v("#")]),t._v(" 1.1.2 缺点")]),t._v(" "),e("ol",[e("li",[t._v("Hive 的 HQL 表达能力有限，无法表达迭代式算法，不擅长数据挖掘方面。")]),t._v(" "),e("li",[t._v("Hive 的效率比较低，Hive 自动生成的 MapReduce 作业，通常情况下不够智能化。")]),t._v(" "),e("li",[t._v("Hive 查询无法做到跟 MySQL 一样毫秒返回。")])]),t._v(" "),e("h3",{attrs:{id:"_1-2-hive-跟-mysql-比较"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-hive-跟-mysql-比较"}},[t._v("#")]),t._v(" 1.2 Hive 跟 MySQL 比较")]),t._v(" "),e("h5",{attrs:{id:"_1-2-1-对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-对比"}},[t._v("#")]),t._v(" 1.2.1 对比")]),t._v(" "),e("p",[t._v("Hive 采用了类SQL 的查询语言 HQL(Hive Query Language)，因此很容易将 Hive 理解为数据库。其实从结构上来看，Hive 和数据库除了拥有类似的查询语言，再无类似之处。本文将从多个方面来阐述 Hive 和数据库的差异。数据库可以用在 Online 的应用中，但是Hive 是为数据仓库而设计的，清楚这一点，有助于从应用角度理解 Hive 的特性。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("方向")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Hive")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("MySQL")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("应用方向")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("数仓")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Online")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("查询语言")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("HQL")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("SQL")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("数据存储位置")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("HDFS")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("本地文件系统")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("数据更新")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("读多写少，无法修改")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("正常CRUD")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("索引")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无索引，暴力查询")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("各种索引")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("执行")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("底层MapReduce")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("自己执行引擎")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("延迟")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高延迟")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("低延迟")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("可扩展性")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("优秀扩展能力")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("扩展力有限")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("数据量")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("超大规模")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("小规模")])])])]),t._v(" "),e("h3",{attrs:{id:"_1-2-2-hive-不支持那些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-hive-不支持那些"}},[t._v("#")]),t._v(" 1.2.2 Hive 不支持那些")]),t._v(" "),e("ol",[e("li",[t._v("支持等值查询，不支持非等值连接")]),t._v(" "),e("li",[t._v("支持 and 多条件过滤，不支持 or 多条件过滤。")]),t._v(" "),e("li",[t._v("不支持 update 跟 delete。")])]),t._v(" "),e("h3",{attrs:{id:"_1-3-hive-底层"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-hive-底层"}},[t._v("#")]),t._v(" 1.3 Hive 底层")]),t._v(" "),e("p",[t._v("Hive 底层是 MapReduce 计算框架，Hive 只是将通读性强且容易编程的SQL语句通过 Hive 软件转换成MapReduce 程序在集群上执行，Hive 可以看做 MapReduce 客户端。操作的数据还是存储在HDFS上的，而用户定义的表结构等元信息被存储到 MySQL 上了。以前要写八股文 MapReduce 程序，现在只需要HQL查询就可！")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/wJvXicD0z2dUIzkNGFzMg64FLrfTWrHgMAuzhuty98Jl1iaGDM68NrrlgqmAj5W6IicReoD8OEt14GSAaYU0ADEwg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),t._v("Hive整体框架")]),t._v(" "),e("ol",[e("li",[t._v("用户接口 Client")])]),t._v(" "),e("blockquote",[e("p",[t._v("CLI（hive shell）、JDBC/ODBC(java访问hive)、WEBUI（浏览器访问hive）")]),t._v(" "),e("ol",[e("li",[t._v("元数据 Metastore")]),t._v(" "),e("li",[t._v("元数据包括 表名、表所属的数据库（默认是default）、表的拥有者、列/分区字段、表的类型（是否是外部表）、表的数据所在目录等。")]),t._v(" "),e("li",[t._v("默认存储在自带的derby数据库中(单客户连接)，推荐使用MySQL存储Metastore。")]),t._v(" "),e("li",[t._v("Hadoop\n使用HDFS进行存储，使用MapReduce进行计算。")])])]),t._v(" "),e("ol",[e("li",[t._v("驱动器 Driver")])]),t._v(" "),e("blockquote",[e("ol",[e("li",[t._v("解析器 SQL Parser：将SQL字符串转换成"),e("strong",[t._v("抽象语法树")]),t._v("AST，这一步一般都用第三方工具库完成，比如antlr；对AST进行语法分析，比如表是否存在、字段是否存在、SQL语义是否有误。")]),t._v(" "),e("li",[t._v("编译器 Physical Plan：将AST编译生成逻辑执行计划。")]),t._v(" "),e("li",[t._v("优化器 Query Optimizer：对逻辑执行计划进行优化。")]),t._v(" "),e("li",[t._v("执行器 Execution：把逻辑执行计划转换成可以运行的物理计划。对于Hive来说就是MR/Spark。")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/wJvXicD0z2dUIzkNGFzMg64FLrfTWrHgMgq06r2r76sFd4HPqgCPFNXQUicibibjMLibh94Xk8mozMMqRlic5gqPnDbg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),t._v("HQL执行流程")]),t._v(" "),e("p",[t._v("不要把 Hive 想的多么神秘，你可以用简单的load方式将数据加载到创建的表里，也可以直接用hadoop指令将数据放入到指定目录，这两种方式都可以直接让你通过SQL查询到数据。")]),t._v(" "),e("h3",{attrs:{id:"_1-4-hql-底层执行举例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-hql-底层执行举例"}},[t._v("#")]),t._v(" 1.4  HQL 底层执行举例")]),t._v(" "),e("h5",{attrs:{id:"_1-4-1-join"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1-join"}},[t._v("#")]),t._v(" 1.4.1 Join")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/wJvXicD0z2dUIzkNGFzMg64FLrfTWrHgMIiaXqLHNnabYYaXsBcGlZDjGnWYrbJL81NI8QSK48ia8AkBSbZ8NEhKw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),t._v("Join流程")]),t._v(" "),e("h5",{attrs:{id:"_1-4-2-group-by"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-2-group-by"}},[t._v("#")]),t._v(" 1.4.2 group by")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/wJvXicD0z2dUIzkNGFzMg64FLrfTWrHgMNjF1AEjV3QcLWsjAfzWpU9cjQyIOM8cVZL4lEftr4Ggyz9vCic3zhTg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),t._v("group by 流程")]),t._v(" "),e("h5",{attrs:{id:"_1-4-3-distinct"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-3-distinct"}},[t._v("#")]),t._v(" 1.4.3 distinct")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/wJvXicD0z2dUIzkNGFzMg64FLrfTWrHgMZEbMqvODNs1CUb5cr690xFjH4wWA2U9MuzD4OMXElSU1MVyDru5HoQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}}),t._v("distinct 流程")]),t._v(" "),e("h1",{attrs:{id:"_2-开窗函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-开窗函数"}},[t._v("#")]),t._v(" 2 开窗函数")]),t._v(" "),e("p",[t._v("有时想要同时显示聚集前后的数据，这时引入了窗口函数，在SQL处理中，窗口函数都是"),e("code",[t._v("最后一步执行")]),t._v("，而且仅位于 Order by 字句之前。")]),t._v(" "),e("h3",{attrs:{id:"_2-1-数据准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-数据准备"}},[t._v("#")]),t._v(" 2.1  数据准备")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("name,orderdate,cost\njack,2017-01-01,10\ntony,2017-01-02,15\njack,2017-02-03,23\ntony,2017-01-04,29\njack,2017-01-05,46\njack,2017-04-06,42\ntony,2017-01-07,50\njack,2017-01-08,55\nmart,2017-04-08,62\nmart,2017-04-09,68\nneil,2017-05-10,12\nmart,2017-04-11,75\nneil,2017-06-12,80\nmart,2017-04-13,94\n")])])]),e("p",[t._v("建表 导数据")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("create table business(\nname string, \norderdate string,\ncost int\n) ROW FORMAT DELIMITED FIELDS TERMINATED BY ',';\nload data local inpath \"/opt/module/datas/business.txt\" into table business;\n")])])]),e("h3",{attrs:{id:"_2-2-用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-用法"}},[t._v("#")]),t._v(" 2.2 用法")]),t._v(" "),e("p",[t._v("相关函数说明")]),t._v(" "),e("ol",[e("li",[t._v("OVER()：指定分析函数工作的数据窗口大小，这个数据窗口大小可能会随着行的变而变化")]),t._v(" "),e("li",[t._v("CURRENT ROW：当前行")]),t._v(" "),e("li",[t._v("n PRECEDING：往前 n 行数据")]),t._v(" "),e("li",[t._v("n FOLLOWING：往后 n 行数据")]),t._v(" "),e("li",[t._v("UNBOUNDED：起点，UNBOUNDED PRECEDING 表示从前面的起点， UNBOUNDED FOLLOWING 表示到后面的终点")])]),t._v(" "),e("p",[t._v("上面写 over 里面，下面写 over 前面。")]),t._v(" "),e("ol",[e("li",[t._v("LAG(col,n)：往前"),e("code",[t._v("第")]),t._v(" n 行数据")]),t._v(" "),e("li",[t._v("LEAD(col,n)：往后"),e("code",[t._v("第")]),t._v(" n 行数据")]),t._v(" "),e("li",[t._v("NTILE(n)：把有序分区中的行分发到指定数据的组中，各个组有编号，编号从1开始，对于每一行，NTILE 返回此行所属的组的编号。注意：n必须为int类型。")])]),t._v(" "),e("h3",{attrs:{id:"_2-3-开窗函数demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-开窗函数demo"}},[t._v("#")]),t._v(" 2.3 开窗函数demo")]),t._v(" "),e("ol",[e("li",[t._v("查询在2017年4月份购买过的顾客及总人数")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select name,count(*) over() from business where substring(orderdate,1,7) = '2017-04' group by name;\n结果：\nmart    2\njack    2\n")])])]),e("ol",[e("li",[t._v("查询顾客的购买明细及月购买总额")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select name,orderdate,cost,sum(cost) over(partition by month(orderdate)) \nfrom business; \n解释：按照月划分数据  然后统计这个月的cost总和\njack    2017-01-01  10  205\njack    2017-01-08  55  205\ntony    2017-01-07  50  205\njack    2017-01-05  46  205\ntony    2017-01-04  29  205\ntony    2017-01-02  15  205\njack    2017-02-03  23  23\nmart    2017-04-13  94  341\njack    2017-04-06  42  341\nmart    2017-04-11  75  341\nmart    2017-04-09  68  341\nmart    2017-04-08  62  341\nneil    2017-05-10  12  12\nneil    2017-06-12  80  80\n")])])]),e("ol",[e("li",[t._v("查看顾客上次的购买时间")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select name,orderdate,cost, \nlag(orderdate,1,'defaulttime') over(partition by name order by orderdate ) as time1, \nlag(orderdate,2,'defaulttime') over (partition by name order by orderdate) as time2  from business;\n结果 : \n姓名      日期      价格  前一天日期    前两天日期\njack    2017-01-01  10  defaulttime defaulttime\njack    2017-01-05  46  2017-01-01  defaulttime\njack    2017-01-08  55  2017-01-05  2017-01-01\njack    2017-02-03  23  2017-01-08  2017-01-05\njack    2017-04-06  42  2017-02-03  2017-01-08\nmart    2017-04-08  62  defaulttime defaulttime\nmart    2017-04-09  68  2017-04-08  defaulttime\nmart    2017-04-11  75  2017-04-09  2017-04-08\nmart    2017-04-13  94  2017-04-11  2017-04-09\nneil    2017-05-10  12  defaulttime defaulttime\nneil    2017-06-12  80  2017-05-10  defaulttime\ntony    2017-01-02  15  defaulttime defaulttime\ntony    2017-01-04  29  2017-01-02  defaulttime\ntony    2017-01-07  50  2017-01-04  2017-01-02\n")])])]),e("ol",[e("li",[t._v("查询前20%时间的订单信息")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" select * from (\n select name,orderdate,cost, ntile(5) over(order by orderdate) sorted from business ) t where sorted = 1;\n结果 : \njack    2017-01-01  10  1\ntony    2017-01-02  15  1\ntony    2017-01-04  29  1\njack    2017-01-05  46  2\ntony    2017-01-07  50  2\njack    2017-01-08  55  2\njack    2017-02-03  23  3\njack    2017-04-06  42  3\nmart    2017-04-08  62  3\nmart    2017-04-09  68  4\nmart    2017-04-11  75  4\nmart    2017-04-13  94  4\nneil    2017-05-10  12  5\nneil    2017-06-12  80  5\n")])])]),e("p",[e("strong",[t._v("以下实验均关注最后一列")])]),t._v(" "),e("p",[t._v("\\1. 所有行相加")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select name,orderdate,cost,sum(cost) over() as sample1 from business; \n结果 : \nmart    2017-04-13  94  661\nneil    2017-06-12  80  661\nmart    2017-04-11  75  661\nneil    2017-05-10  12  661\nmart    2017-04-09  68  661\n")])])]),e("p",[t._v("\\2. 按name分组，组内数据相加")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select name,orderdate,cost,sum(cost) over(partition by name) as sample2\nfrom business;\n结果 : \njack    2017-01-05  46  176\njack    2017-01-08  55  176\njack    2017-01-01  10  176\njack    2017-04-06  42  176\njack    2017-02-03  23  176\n...\ntony    2017-01-04  29  94\ntony    2017-01-02  15  94\ntony    2017-01-07  50  94\n")])])]),e("p",[t._v("\\3. 按name分组，组内数据累加")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select name,orderdate,cost,\nsum(cost) over(partition by name order by orderdate) as sample3\nfrom business; \n跟下面类似\nselect name,orderdate,cost,\nsum(cost) over(distribute by name sort by orderdate) as sample3 \nfrom business; \njack    2017-01-01  10  10\njack    2017-01-05  46  56\njack    2017-01-08  55  111\njack    2017-02-03  23  134\njack    2017-04-06  42  176\n...\n")])])]),e("p",[t._v("\\4. 和sample3一样,由起点到当前行的聚合")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select name,orderdate,cost,\nsum(cost) over(partition by name order by orderdate rows\nbetween UNBOUNDED PRECEDING and current row ) as sample4 \nfrom business; \n结果 : \njack    2017-01-01  10  10\njack    2017-01-05  46  56\njack    2017-01-08  55  111\njack    2017-02-03  23  134\njack    2017-04-06  42  176\n...\n")])])]),e("p",[t._v("\\5. 当前行和前面一行做聚合")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select name,orderdate,cost,\nsum(cost) over(partition by name order by orderdate rows \nbetween 1 PRECEDING and current row) as sample5 \nfrom business;\n结果 : \njack    2017-01-01  10  10\njack    2017-01-05  46  56 = 46 + 10\njack    2017-01-08  55  101 = 44 + 46\njack    2017-02-03  23  78  = 23 + 55\njack    2017-04-06  42  65  = 42 + 23\n...\ntony    2017-01-02  15  15\ntony    2017-01-04  29  44\ntony    2017-01-07  50  79\n")])])]),e("p",[t._v("\\6. 当前行和前边一行及后面一行")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select name,orderdate,cost,\nsum(cost) over(partition by name order by orderdate rows\nbetween 1 PRECEDING AND 1 FOLLOWING ) as sample6\nfrom business;\n结果 : \njack    2017-01-01  10  56  = 10 + 46\njack    2017-01-05  46  111 = 46 + 10 + 55\njack    2017-01-08  55  124 = 55 + 46 + 23\njack    2017-02-03  23  120 = 23 + 55 + 42\njack    2017-04-06  42  65  = 42 + 23\n...\ntony    2017-01-02  15  44\ntony    2017-01-04  29  94\ntony    2017-01-07  50  79\n")])])]),e("p",[t._v("\\7. 当前行及后面所有行")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select name,orderdate,cost,sum(cost) over(partition by name order by orderdate rows between current row and UNBOUNDED FOLLOWING ) as sample7 from business;\n结果 : \njack    2017-01-01  10  176 = 10 + 46 + 55 + 23 + 42\njack    2017-01-05  46  166 = 46 + 55 + 23 + 42\njack    2017-01-08  55  120 = 55 + 23 + 42\njack    2017-02-03  23  65  =  23 + 42\njack    2017-04-06  42  42  =  42\nmart    2017-04-08  62  299\nmart    2017-04-09  68  237\nmart    2017-04-11  75  169\nmart    2017-04-13  94  94\nneil    2017-05-10  12  92\nneil    2017-06-12  80  80\ntony    2017-01-02  15  94\ntony    2017-01-04  29  79\ntony    2017-01-07  50  50\n")])])]),e("h3",{attrs:{id:"_2-4-rank"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-rank"}},[t._v("#")]),t._v(" 2.4 Rank")]),t._v(" "),e("p",[t._v("函数说明")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("rank()")]),t._v("：排序相同时会重复，总数不会变\n"),e("strong",[t._v("dense_rank()")]),t._v("：排序相同时会重复，总数会减少\n"),e("strong",[t._v("row_number()")]),t._v("：会根据顺序计算")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select name,subject,score,\nrank() over(partition by subject order by score desc) rp,\ndense_rank() over(partition by subject order by score desc) drp,\nrow_number() over(partition by subject order by score desc) rmp\nfrom score;\n结果 : \nname   subject score    rp      drp     rmp\n孙悟空   数学    95      1       1       1\n宋宋    数学    86      2       2       2\n婷婷    数学    85      3       3       3\n大海    数学    56      4       4       4\n宋宋    英语    84      1       1       1\n大海    英语    84      1       1       2\n婷婷    英语    78      3（跳过2）2        3\n孙悟空  英语    68      4       3(总数少)  4\n大海    语文    94      1       1       1\n孙悟空  语文    87      2        2        2\n婷婷    语文    65      3       3       3\n宋宋    语文    64      4       4       4\n")])])]),e("h4",{attrs:{id:"_2-5-行转列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-行转列"}},[t._v("#")]),t._v(" 2.5 行转列")]),t._v(" "),e("ol",[e("li",[t._v("CONCAT(string A, string B)：")])]),t._v(" "),e("blockquote",[e("p",[t._v("返回输入字符串"),e("code",[t._v("连接后")]),t._v("的结果，支持任意个输入字符串;")]),t._v(" "),e("ol",[e("li",[t._v("CONCAT_WS(separator, str1, str2,…)：\n特殊形式的 CONCAT()。第一个参数剩余参数间的分隔符。分隔符可以是与剩余参数一样的字符串。如果分隔符是 NULL，返回值也将为 NULL。")]),t._v(" "),e("li",[t._v("COLLECT_SET(col)：\n只接受基本数据类型，主要作用是将某字段的值进行去重汇总，产生array类型字段。多行汇总成一个array类型。")])])]),t._v(" "),e("h3",{attrs:{id:"_2-6-列转行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-列转行"}},[t._v("#")]),t._v(" 2.6 列转行")]),t._v(" "),e("ol",[e("li",[t._v("EXPLODE(col)：")])]),t._v(" "),e("blockquote",[e("p",[t._v("将hive一列中复杂的array或者map结构拆分成多行。")]),t._v(" "),e("ol",[e("li",[t._v("LATERAL VIEW\n用法：LATERAL VIEW udtf(expression) table Alias AS columnAlias\n解释：用于和split, explode等UDTF一起使用，它能够将一列数据拆成多行数据，在此基础上可以对拆分后的数据进行聚合。")])])]),t._v(" "),e("h1",{attrs:{id:"_3-hive-调优"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-hive-调优"}},[t._v("#")]),t._v(" 3 Hive 调优")]),t._v(" "),e("h3",{attrs:{id:"_3-1-mapjoin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-mapjoin"}},[t._v("#")]),t._v(" 3.1 MapJoin")]),t._v(" "),e("p",[t._v("如果不指定 MapJoin 或者不符合 MapJoin 的条件，那么 Hive 解析器会将 Join 操作转换成 Common Join，也就是在Reduce阶段完成join。容易发生数据倾斜。可以用 MapJoin 把小表全部加载到内存在map 端进行 join，避免 reducer 处理。")]),t._v(" "),e("h3",{attrs:{id:"_3-2-行列过滤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-行列过滤"}},[t._v("#")]),t._v(" 3.2 行列过滤")]),t._v(" "),e("p",[t._v("列处理：在SELECT时只拿需要的列，尽量使用分区过滤，少用SELECT *。\n行处理：在分区剪裁中，当使用外关联时，如果将副表的过滤条件写在 Where后面，那么就会先全表关联，之后再过滤。")]),t._v(" "),e("h3",{attrs:{id:"_3-3-合理设置map数跟reduce数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-合理设置map数跟reduce数"}},[t._v("#")]),t._v(" 3.3 合理设置Map数跟Reduce数")]),t._v(" "),e("h5",{attrs:{id:"_3-3-1-map数不是越多越好"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-map数不是越多越好"}},[t._v("#")]),t._v(" 3.3.1  map数不是越多越好")]),t._v(" "),e("p",[t._v("如果一个任务有很多小文件（远远小于块大小128m），则每个小文件也会被当做一个块，用一个map任务来完成，而一个map任务启动和初始化的时间远远大于逻辑处理的时间，就会造成很大的资源浪费 。而且，同时可执行的map数是受限的。此时我们就应该减少map数量。")]),t._v(" "),e("h5",{attrs:{id:"_3-3-2-reduce数不是越多越好"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-reduce数不是越多越好"}},[t._v("#")]),t._v(" 3.3.2 Reduce数不是越多越好")]),t._v(" "),e("ol",[e("li",[t._v("过多的启动和初始化Reduce也会消耗时间和资源；")]),t._v(" "),e("li",[t._v("有多少个Reduce，就会有多少个输出文件，如果生成了很多个小文件，那么如果这些小文件作为下一个任务的输入，则也会出现小文件过多的问题；")]),t._v(" "),e("li",[t._v("Reduce个数设置考虑这两个原则：处理大数据量利用合适的Reduce数；使单个Reduce任务处理数据量大小要合适；")])]),t._v(" "),e("h3",{attrs:{id:"_3-4-严格模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-严格模式"}},[t._v("#")]),t._v(" 3.4 严格模式")]),t._v(" "),e("p",[t._v("严格模式 strict 下会有以下特点：")]),t._v(" "),e("ol",[e("li",[t._v("对于分区表，用户不允许扫描所有分区。")]),t._v(" "),e("li",[t._v("使用了order by语句的查询，要求必须使用limit语句。")]),t._v(" "),e("li",[t._v("限制笛卡尔积的查询。")])]),t._v(" "),e("h3",{attrs:{id:"_3-5-开启map端combiner"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-开启map端combiner"}},[t._v("#")]),t._v(" 3.5 开启map端combiner")]),t._v(" "),e("p",[t._v("在不影响最终业务逻辑前提下，手动开启 set hive.map.aggr=true；")]),t._v(" "),e("h3",{attrs:{id:"_3-6-压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-压缩"}},[t._v("#")]),t._v(" 3.6 压缩")]),t._v(" "),e("p",[t._v("设置map端输出中间结果压缩，加速网络传输。")]),t._v(" "),e("h3",{attrs:{id:"_3-7-小文件进行合并"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-小文件进行合并"}},[t._v("#")]),t._v(" 3.7 小文件进行合并")]),t._v(" "),e("p",[t._v("在Map执行前合并小文件，减少Map数，"),e("strong",[t._v("CombineHiveInputFormat")]),t._v(" 具有对小文件进行合并的功能（系统默认的格式）。HiveInputFormat没有对小文件合并功能。")]),t._v(" "),e("h3",{attrs:{id:"_3-8-其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-8-其他"}},[t._v("#")]),t._v(" 3.8 其他")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("Fetch抓取")]),t._v("：指的是 Hive中对某些情况的查询可以不必使用MapReduce计算。")]),t._v(" "),e("li",[e("strong",[t._v("本地模式")]),t._v("：Hive可以通过本地模式在单台机器上处理所有的任务。")]),t._v(" "),e("li",[e("strong",[t._v("数据分区")]),t._v("：数据细化存储方便访问。")]),t._v(" "),e("li",[e("strong",[t._v("JVM重用")]),t._v("：JVM实例在同一个job中重新使用N次。")]),t._v(" "),e("li",[e("strong",[t._v("推测执行")]),t._v("：根据一定的法则推测出拖后腿的任务，并为这样的任务启动一个备份任务。")]),t._v(" "),e("li",[e("strong",[t._v("并行执行")]),t._v("：一个Hive查询被分解成多个阶段，阶段之间并非完全互相依赖的。")])]),t._v(" "),e("h1",{attrs:{id:"_4-hive-高频考点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-hive-高频考点"}},[t._v("#")]),t._v(" 4 Hive 高频考点")]),t._v(" "),e("h3",{attrs:{id:"_4-1-数据倾斜"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-数据倾斜"}},[t._v("#")]),t._v(" 4.1 数据倾斜")]),t._v(" "),e("h5",{attrs:{id:"_4-1-1-定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-定义"}},[t._v("#")]),t._v(" 4.1.1 定义")]),t._v(" "),e("p",[t._v("数据分布不平衡，某些地方特别多，某些地方又特别少，导致的在处理数据的时候，有些很快就处理完了，而有些又迟迟未能处理完，导致整体任务最终迟迟无法完成，这种现象就是数据倾斜。")]),t._v(" "),e("h5",{attrs:{id:"_4-1-2-产生"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-产生"}},[t._v("#")]),t._v(" 4.1.2 产生")]),t._v(" "),e("ol",[e("li",[t._v("key的分布不均匀或者说某些key太集中")]),t._v(" "),e("li",[t._v("业务数据自身的特性，例如不同数据类型关联产生数据倾斜")]),t._v(" "),e("li",[t._v("SQL语句导致的数据倾斜")])]),t._v(" "),e("h5",{attrs:{id:"_4-1-3-解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-解决"}},[t._v("#")]),t._v(" 4.1.3 解决")]),t._v(" "),e("ol",[e("li",[t._v("不影响最终业务逻辑前提下开启map端combiner。")]),t._v(" "),e("li",[t._v("开启数据倾斜时负载均衡。")]),t._v(" "),e("li",[t._v("手动抽查做好分区规则。")]),t._v(" "),e("li",[t._v("使用mapjoin，小表进内存 在Map端完成Reduce。")])]),t._v(" "),e("h3",{attrs:{id:"_4-2-分区表和分桶表对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-分区表和分桶表对比"}},[t._v("#")]),t._v(" 4.2 分区表和分桶表对比？")]),t._v(" "),e("h5",{attrs:{id:"_4-2-1-分区表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-分区表"}},[t._v("#")]),t._v(" 4.2.1 分区表")]),t._v(" "),e("ol",[e("li",[t._v("分区使用的是"),e("code",[t._v("表外")]),t._v("字段，需要指定字段类型")]),t._v(" "),e("li",[t._v("分区通过"),e("code",[t._v("关键字")]),t._v(" "),e("strong",[t._v("partitioned")]),t._v(" by(partition_name string)声明")]),t._v(" "),e("li",[t._v("分区划分粒度"),e("code",[t._v("较粗")])]),t._v(" "),e("li",[t._v("将数据按区域划分开，查询时不用扫描无关的数据，加快查询速度")])]),t._v(" "),e("h5",{attrs:{id:"_4-2-2-分桶表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-分桶表"}},[t._v("#")]),t._v(" 4.2.2 分桶表")]),t._v(" "),e("p",[t._v("分桶逻辑：对分桶字段求哈希值，用哈希值与分桶的数量取余决定数据放到哪个桶里。")]),t._v(" "),e("ol",[e("li",[t._v("分桶使用的是"),e("code",[t._v("表内")]),t._v("字段，已经知道字段类型，不需要再指定。")]),t._v(" "),e("li",[t._v("分桶表通过关键字 "),e("strong",[t._v("clustered")]),t._v(" by(column_name) into … buckets声明")]),t._v(" "),e("li",[t._v("分桶是"),e("code",[t._v("更细")]),t._v("粒度的划分、管理数据，可以对表进行先分区再分桶的划分策略")]),t._v(" "),e("li",[t._v("优点在于用于数据取样时候能够起到优化加速的作用")])]),t._v(" "),e("h3",{attrs:{id:"_4-3-动态分区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-动态分区"}},[t._v("#")]),t._v(" 4.3 动态分区")]),t._v(" "),e("ol",[e("li",[t._v("静态分区与动态分区的主要区别在于静态分区是手动指定，而动态分区是通过数据来进行判断。")]),t._v(" "),e("li",[t._v("静态分区的列是在编译时期，通过用户传递来决定的，动态分区只有在 SQL 执行时才能决定。")]),t._v(" "),e("li",[t._v("系统默认开启，非严格模式，动态分区最大值。")])]),t._v(" "),e("h3",{attrs:{id:"_4-4-hive-中视图跟索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-hive-中视图跟索引"}},[t._v("#")]),t._v(" 4.4 Hive 中视图跟索引")]),t._v(" "),e("h5",{attrs:{id:"_4-4-1-视图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-视图"}},[t._v("#")]),t._v(" 4.4.1 视图")]),t._v(" "),e("p",[t._v("视图是一种使用查询语句定义的虚拟表，是数据的一种逻辑结构，创建视图时不会把视图存储到磁盘上，定义视图的查询语句只有在执行视图的语句时才会被执行。视图是只读的，不能向视图中插入或是加载数据")]),t._v(" "),e("h5",{attrs:{id:"_4-4-2-hive索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-2-hive索引"}},[t._v("#")]),t._v(" 4.4.2 Hive索引")]),t._v(" "),e("p",[t._v("Hive支持在表中建立索引。但是索引需要额外的存储空间，因此在创建索引时需要考虑索引的必要性。")]),t._v(" "),e("p",[t._v("Hive不支持直接使用 DROP TABLE 语句删除索引表。如果创建索引的表被删除了，则其对应的索引和索引表也会被删除；如果表的某个分区被删除了，则该分区对应的分区索引也会被删除。")]),t._v(" "),e("h3",{attrs:{id:"_4-5-sort-by、order-by、distrbute-by、cluster-by"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-sort-by、order-by、distrbute-by、cluster-by"}},[t._v("#")]),t._v(" 4.5 Sort By、Order By、Distrbute By、Cluster By")]),t._v(" "),e("ol",[e("li",[t._v("Sort By：分区内有序")]),t._v(" "),e("li",[t._v("Order By：全局排序，只有一个Reducer")]),t._v(" "),e("li",[t._v("Distrbute By：类似MR中Partition，进行分区，结合sort by使用")]),t._v(" "),e("li",[t._v("Cluster By：当Distribute by和Sorts by字段相同时，可以使用Cluster by方式。Cluster by 还兼具 Sort by 的功能，但只能是升序排序。")])]),t._v(" "),e("h3",{attrs:{id:"_4-6-内部表-跟外部表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-内部表-跟外部表"}},[t._v("#")]),t._v(" 4.6  内部表 跟外部表")]),t._v(" "),e("h5",{attrs:{id:"_4-6-1-内部表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-1-内部表"}},[t._v("#")]),t._v(" 4.6.1 内部表")]),t._v(" "),e("p",[t._v("如果Hive中没有特别指定，则默认创建的表都是管理表，也称内部表。由Hive负责管理表中的数据，管理表不共享数据。删除管理表时，会删除管理表中的数据和元数据信息。")]),t._v(" "),e("h5",{attrs:{id:"_4-6-2-外部表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-2-外部表"}},[t._v("#")]),t._v(" 4.6.2 外部表")]),t._v(" "),e("p",[t._v("当一份数据需要被共享时，可以创建一个外部表指向这份数据。删除该表并不会删除掉原始数据，删除的是表的元数据。")]),t._v(" "),e("h3",{attrs:{id:"_4-7-udf-、udaf、udtf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-udf-、udaf、udtf"}},[t._v("#")]),t._v(" 4.7 UDF 、UDAF、UDTF")]),t._v(" "),e("ol",[e("li",[t._v("UDF ：一进一出，类似 upper，trim")]),t._v(" "),e("li",[t._v("UDAF：多进一出，聚集函数，类似 count、max、min。")]),t._v(" "),e("li",[t._v("UDTF：一进多出，如 lateral view explore()")])]),t._v(" "),e("h3",{attrs:{id:"_4-8-hql-如何转变为mapreduce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-hql-如何转变为mapreduce"}},[t._v("#")]),t._v(" 4.8 HQL 如何转变为MapReduce")]),t._v(" "),e("ol",[e("li",[t._v("Antlr定义SQL语法规则，完成SQL词法，语法解析，SQL转化为 抽象语法树 AST Tree。")]),t._v(" "),e("li",[t._v("遍历AST Tree，抽象出查询的基本组成单元QueryBlock。")]),t._v(" "),e("li",[t._v("遍历QueryBlock，翻译为执行操作树OperatorTree。")]),t._v(" "),e("li",[t._v("逻辑层优化OperatorTree变换，合并不必要的ReduceSinkOperator，减少Shuffle数量。")]),t._v(" "),e("li",[t._v("遍历OperatorTree 翻译为MapReduce任务。")]),t._v(" "),e("li",[t._v("物理层优化器进行MapReduce任务变换，生成最终执行计划。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/wJvXicD0z2dUIzkNGFzMg64FLrfTWrHgM9J2iaLic42gnMXicMsTLO6o83icLIhbBn6LNzbA8FIKWicyFm6XFYWibibwGg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})])])}),[],!1,null,null,null);a.default=_.exports}}]);