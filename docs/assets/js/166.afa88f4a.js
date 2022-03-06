(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{534:function(e,t,v){"use strict";v.r(t);var r=v(30),_=Object(r.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),v("p",[e._v("        之前听 CSDN 头牌博主 @沉默王二 说过一句话，我觉得十分在理："),v("font",{attrs:{color:"MediumSlateBlue"}},[v("strong",[e._v("处在互联网时代，是一种幸福，因为各式各样的信息非常容易触达，如果掌握了信息筛选的能力，就真的是“运筹帷幄之中，决胜千里之外”")])]),e._v("。就像现在各行业都内卷不断，我们要从中破圈，只有想办法提升自己的竞争力！例如备战面试，广泛无脑地刷题只会消耗完你最后一丝精力，而多刷别人总结复盘记录下来的面经，有利于我们为下一次的“跨越”做好准备！")],1),e._v(" "),v("p",[v("font",{attrs:{color:"RoyalBlue"}},[v("strong",[e._v("笔者是一名专注研究大数据基础，架构和原型实现的“终身学者”")])]),e._v("，最近在看了108份面经之后，想对大数据面试中高频的知识考点做一个汇总，巩固自己记忆的同时，也希望能给带给读者一些正确复习方向。本期内容我们介绍的是【Hive】篇 ！\n"),v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210405125535513.png?,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDMxODgzMA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})],1),e._v(" "),v("h2",{attrs:{id:"_1、-使用过-hive-吗-介绍一下什么是-hive"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、-使用过-hive-吗-介绍一下什么是-hive"}},[e._v("#")]),e._v(" 1、 使用过 Hive 吗？介绍一下什么是 Hive ？")]),e._v(" "),v("p",[e._v("        Hive 是基于 Hadoop的一个数据仓库工具，可以将结构化的数据文件映射为一张数据库表，并提供类SQL查询功能（HQL），提供快速开发的能力。Hive本质是将SQL转换为 MapReduce的任务进行运算，减少开发人员的学习成本，功能扩展很方便。")]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("拓展")]),e._v("：\n1、hive存的是和hdfs的映射关系，hive是逻辑上的数据仓库，实际操作的都是hdfs上的文件，HQL就是用sql语法来写的mr程序\n2、数据仓库是大多数企业“试水”大数据的首选切入点 ，因为数据仓库主要编程语言还是 SQL，而在大数据平台上，不论是 Hive 还是 SparkSQL，都是通过高度标准化的 SQL 来进行开发，这对于很多从传统数据仓库向大数据转型的开发人员和团队来说，是一种较为平滑的过渡。")])]),e._v(" "),v("h2",{attrs:{id:"_2、介绍一下hive的架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、介绍一下hive的架构"}},[e._v("#")]),e._v(" 2、介绍一下Hive的架构")]),e._v(" "),v("p",[e._v("        需要对 Hive 的架构有个大致的印象：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201015143304239.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDMxODgzMA==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),e._v(" "),v("ul",[v("li",[e._v("Hive可以通过CLI，JDBC和 ODBC 等客户端进行访问。除此之外，Hive还支持 WUI 访问")]),e._v(" "),v("li",[e._v("Hive内部执行流程：解析器（解析SQL语句）、编译器（把SQL语句编译成MapReduce程序）、优化器（优化MapReduce程序）、执行器（将MapReduce程序运行的结果提交到HDFS）")]),e._v(" "),v("li",[e._v("Hive的"),v("strong",[e._v("元数据")]),e._v("保存在数据库中，如保存在MySQL，SQLServer，PostgreSQL，Oracle及Derby等数据库中。Hive中的元数据信息包含表名，列名，分区及其属性，表的属性（包括是否为外部表），表数据所在目录等。")]),e._v(" "),v("li",[v("font",{attrs:{color:"BlueViolet"}},[e._v("Hive将大部分 HiveSQL语句转化为MapReduce作业提交到Hadoop上执行")]),e._v("；"),v("font",{attrs:{color:"red"}},[e._v("少数HiveSQL语句不会转化为MapReduce作业，直接从DataNode上获取数据后按照顺序输出")]),e._v("。")],1)]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("拓展：")]),e._v("\n这里有有个易混淆点，Hive 元数据默认存储在 derby 数据库，不支持多客户端访问，所以将元数据存储在 MySQL 等数据库，支持多客户端访问。")])]),e._v(" "),v("h2",{attrs:{id:"_3、使用过哪些-hive-函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、使用过哪些-hive-函数"}},[e._v("#")]),e._v(" 3、使用过哪些 Hive 函数")]),e._v(" "),v("p",[e._v("        Hive的函数种类众多，如果一定要分类的话\n"),v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210413121733541.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDMxODgzMA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),e._v("\n        这些还都是最简单的，想提高自己实力，可以私聊我获取收藏的一本Hive函数大全，从最简单的"),v("strong",[e._v("关系运算")]),e._v("，到各种"),v("strong",[e._v("数值计算的函数")]),e._v("，"),v("strong",[e._v("日期函数")]),e._v("，"),v("strong",[e._v("条件函数")]),e._v("，"),v("strong",[e._v("字符串函数")]),e._v("，甚至是"),v("strong",[e._v("混合函数")]),e._v("，"),v("strong",[e._v("汇总函数")]),e._v("等等，都有详细的解释说明 ...")]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("拓展：")]),e._v("\n面试一般喜欢通过笔试题或者真实场景题，来让你给出SQL思路或者现场手写，所以了解常用的 Hive函数非常重要，这直接就反映了自己的基本功。")])]),e._v(" "),v("h2",{attrs:{id:"_4、hive内部表、外部表、分区表、分桶表的区别-以及各自的使用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、hive内部表、外部表、分区表、分桶表的区别-以及各自的使用场景"}},[e._v("#")]),e._v(" 4、Hive内部表、外部表、分区表、分桶表的区别，以及各自的使用场景")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("内部表")])])]),e._v(" "),v("p",[e._v("        如果Hive中没有特别指定，则默认创建的表都是"),v("strong",[e._v("管理表")]),e._v("，也称"),v("strong",[e._v("内部表")]),e._v("。由Hive负责管理表中的数据，管理表不共享数据。删除管理表时，会删除管理表中的数据和元数据信息。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("外部表")])])]),e._v(" "),v("p",[e._v("        当一份数据需要被共享时，可以创建一个外部表指向这份数据。")]),e._v(" "),v("p",[e._v("        删除该表并不会删除掉原始数据，删除的是表的元数据。当表结构或者分区数发生变化时，需要进行一步修复的操作。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("分区表")])])]),e._v(" "),v("p",[e._v("        分区表使用的是表外字段，需要指定字段类型，并通过关键字partitioned by(partition_name string)声明，但是分区划分粒度较粗 。")]),e._v(" "),v("p",[e._v("        优势也很明显，就是将数据按区域划分开，查询时不用扫描无关的数据，加快查询速度 。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("分桶表")])])]),e._v(" "),v("p",[e._v("        分桶使用的是表内字段，已经知道字段类型，不需要再指定。通过关键字 "),v("code",[e._v("clustered by(column_name) into … buckets")]),e._v("声明。"),v("strong",[e._v("分桶是更细粒度的划分、管理数据，可以对表进行先分区再分桶的划分策略")])]),e._v(" "),v("p",[e._v("        分桶最大的优势就是：用于数据取样，可以起到优化加速的作用。")]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("拓展：")]),e._v("\n关于"),v("strong",[e._v("内部表")]),e._v("，"),v("strong",[e._v("外部表")]),e._v("，"),v("strong",[e._v("分区表")]),e._v("，"),v("strong",[e._v("分桶表")]),e._v(" 知识的考察是面试的"),v("strong",[e._v("重点")]),e._v("，需要留意。其中"),v("strong",[e._v("分桶逻辑")]),e._v("为：对分桶字段求哈希值，用哈希值与分桶的数量取余，余几，这个数据就放在那个桶内。")])]),e._v(" "),v("h2",{attrs:{id:"_5、介绍一下-order-by-sort-by-distrbute-by-cluster-by的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5、介绍一下-order-by-sort-by-distrbute-by-cluster-by的区别"}},[e._v("#")]),e._v(" 5、介绍一下 Order By，Sort By，Distrbute By，Cluster By的区别")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Order By(全局排序)")])])]),e._v(" "),v("p",[e._v("        order by 会对输入做全局排序，因此只有一个reduce（多个reducer无法保证全局有序），也正因为只有一个 reducer，所以当输入的数据规模较大时，会导致计算的时间较长。")]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("注意：")]),e._v("\nOrder by 和 数据库中的 Order by 功能一致，按照某一个或者字段排序输出。与数据库中 order by的区别在于在 hive 的严格模式下("),v("font",{attrs:{color:"\tTomato"}},[v("strong",[e._v("hive.mapred.mode = strict")])]),e._v(")下，必须指定 limit ，否则执行会报错！")],1)]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Sort By(每个MapReduce排序)")])])]),e._v(" "),v("p",[e._v("        sort by并不是全局排序，其在数据进入reducer前完成排序。因此，如果用sort by进行排序，并且设置 mapred.reduce.tasks>1， 则sort by只保证每个reducer的输出有序，不保证全局有序。")]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("拓展：")]),e._v("\n①sort by 不受 hive.mapred.mode 是否为strict ,nostrict 的影响\n②sort by 的数据只能保证在同一reduce中的数据可以按指定字段排序\n③使用sort by 你可以指定执行的reduce 个数 （set mapred.reduce.tasks=）,对输出的数据再执行归并排序，即可以得到全部结果\n"),v("strong",[e._v("注意：")]),e._v("\n可以用 limit 子句大大减少数据量。使用 limit n 后，传输到 reduce 端（单机）的数据记录数就减少到 n* （map个数）。否则由于数据过大可能出不了结果。")])]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Distrbute By(每个分区排序)")])])]),e._v(" "),v("p",[e._v("        在有些情况下，我们需要控制某个特定行应该到哪个 reducer ，通常是为了进行后续的聚集操作。distribute by 子句可以做这件事。distribute by类似 MR 中 partition（自定义分区），进行分区，结合 sort by 使用。distribute by 和 sort by 的常见使用场景有：")]),e._v(" "),v("ol",[v("li",[e._v("Map输出的文件大小不均")]),e._v(" "),v("li",[e._v("Reduce输出文件不均")]),e._v(" "),v("li",[e._v("小文件过多")]),e._v(" "),v("li",[e._v("文件超大")])]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Cluster By")])])]),e._v(" "),v("p",[e._v("        当 distribute by 和 sorts by字段相同时，可以使用 cluster by 方式代替。cluster by除了具有 distribute by 的功能外还兼具 sort by 的功能。但是排序只能是"),v("font",{attrs:{color:"blue"}},[v("strong",[e._v("升序")])]),e._v("排序，不能像distribute by 一样去指定排序的规则为 "),v("strong",[e._v("ASC")]),e._v(" 或者 "),v("strong",[e._v("DESC")]),e._v(" 。")],1),e._v(" "),v("h2",{attrs:{id:"_6、动态分区和静态分区的区别-使用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6、动态分区和静态分区的区别-使用场景"}},[e._v("#")]),e._v(" 6、动态分区和静态分区的区别 + 使用场景")]),e._v(" "),v("p",[e._v("        关于动态分区在实际生产环境中的使用也是比较的多，所以这道题出现的频率也很高，但是不难。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("静态分区：")])])]),e._v(" "),v("p",[e._v("        定义：对于静态分区，从字面就可以理解：表的分区数量和分区值是固定的。静态分区需要手动指定，列是在编译时期通过用户传递来决定的。")]),e._v(" "),v("p",[e._v("        应用场景：需要提前知道所有分区。适用于分区定义得早且数量少的用例，不适用于生产。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("动态分区：")])])]),e._v(" "),v("p",[e._v("        定义：是基于查询参数的位置去推断分区的名称，只有在 SQL 执行时才能确定，会根据数据自动的创建新的分区。")]),e._v(" "),v("p",[e._v("        应用场景：有很多分区，无法提前预估新分区，动态分区是合适的，一般用于生产环境。")]),e._v(" "),v("h2",{attrs:{id:"_7、hivesql-语句中-select-from-where-group-by-having-order-by-的执行顺序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7、hivesql-语句中-select-from-where-group-by-having-order-by-的执行顺序"}},[e._v("#")]),e._v(" 7、HiveSQL 语句中 select from where group by having order by 的执行顺序")]),e._v(" "),v("p",[e._v("        平时没有仔细研究过，这题还真不好猜。")]),e._v(" "),v("p",[e._v("        实际上，在 hive 和 mysql 中都可以通过 "),v("code",[e._v("explain+sql")]),e._v(" 语句，来查看"),v("strong",[e._v("执行顺序")]),e._v("。对于一条标准 sql 语句，它的书写顺序是这样的：")]),e._v(" "),v("p",[v("code",[e._v("select … from … where … group by … having … order by … limit …")])]),e._v(" "),v("p",[e._v("（1）mysql 语句执行顺序：")]),e._v(" "),v("p",[v("code",[e._v("from... where...group by... having.... select ... order by... limit …")])]),e._v(" "),v("p",[e._v("（2）hive 语句执行顺序：")]),e._v(" "),v("p",[v("code",[e._v("from … where … select … group by … having … order by … limit …")])]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("拓展：")]),e._v("\n要搞清楚面试官问执行顺序背后的原因是什么，不是单纯的看你有没有背过这道题，而是看你是否能够根据执行顺序，写出不被人喷的 SQL\n"),v("br"),e._v(" "),v("strong",[e._v("根据执行顺序，我们平时编写时需要记住以下几点：")])]),e._v(" "),v("ul",[v("li",[e._v("使用分区剪裁、列剪裁，分区一定要加")]),e._v(" "),v("li",[e._v("少用 COUNT DISTINCT，group by 代替 distinct")]),e._v(" "),v("li",[e._v("是否存在多对多的关联")]),e._v(" "),v("li",[e._v("连接表时使用相同的关键词，这样只会产生一个 job")]),e._v(" "),v("li",[e._v("减少每个阶段的数据量，只选出需要的，在 join 表前就进行过滤")]),e._v(" "),v("li",[e._v("大表放后面")]),e._v(" "),v("li",[e._v("谓词下推：where 谓词逻辑都尽可能提前执行，减少下游处理的数据量")]),e._v(" "),v("li",[e._v("sort by 代替 order by")])])]),e._v(" "),v("h2",{attrs:{id:"_8、如何做-hive优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8、如何做-hive优化"}},[e._v("#")]),e._v(" 8、如何做 Hive优化")]),e._v(" "),v("p",[e._v("        只要你是老司机，多面试几趟，你就会发现常用的组件，中大型公司面试基本都会问到你如何对其调优。这个我正好之前总结过，大家可以看下：")]),e._v(" "),v("ul",[v("li",[v("font",{attrs:{color:"MediumVioletRed"}},[e._v("MapJoin")])],1)]),e._v(" "),v("p",[e._v("        如果不指定MapJoin或者不符合MapJoin的条件，那么Hive解析器会将Join操作转换成Common Join，即：在Reduce阶段完成join。容易发生数据倾斜。可以用MapJoin把小表全部加载到内存在map端进行join，避免reducer处理。")]),e._v(" "),v("ul",[v("li",[v("font",{attrs:{color:"MediumVioletRed"}},[e._v("行列过滤")])],1)]),e._v(" "),v("p",[e._v("        列处理：在SELECT中，只拿需要的列，如果有，尽量使用分区过滤，少用SELECT *。")]),e._v(" "),v("p",[e._v("        行处理：在分区剪裁中，当使用外关联时，如果将副表的过滤条件写在Where后面，那么就会先全表关联，之后再过滤。")]),e._v(" "),v("ul",[v("li",[v("font",{attrs:{color:"MediumVioletRed"}},[e._v("合理设置Map数")])],1)]),e._v(" "),v("p",[e._v("        是不是map数越多越好?")]),e._v(" "),v("p",[e._v("        答案是否定的。如果一个任务有很多小文件（远远小于块大小128m），则每个小文件也会被当做一个块，用一个map任务来完成，而"),v("font",{attrs:{color:"red"}},[e._v("一个map任务启动和初始化的时间远远大于逻辑处理的时间，就会造成很大的资源浪费")]),e._v(" 。而且，同时可执行的map数是"),v("strong",[e._v("受限")]),e._v("的。此时我们就应该减少map数量。")],1),e._v(" "),v("ul",[v("li",[v("font",{attrs:{color:"MediumVioletRed"}},[e._v("合理设置Reduce数")])],1)]),e._v(" "),v("p",[e._v("        Reduce个数并不是越多越好")]),e._v(" "),v("p",[e._v("        （1）过多的启动和初始化Reduce也会消耗时间和资源；\n        （2）另外，有多少个Reduce，就会有多少个输出文件，如果生成了很多个小文件，那么如果这些小文件作为下一个任务的输入，则也会出现小文件过多的问题；")]),e._v(" "),v("p",[e._v("        在设置Reduce个数的时候也需要考虑这两个"),v("strong",[e._v("原则")]),e._v("："),v("font",{attrs:{color:"red"}},[e._v("处理大数据量利用合适的Reduce数；使单个Reduce任务处理数据量大小要合适")]),e._v("；")],1),e._v(" "),v("ul",[v("li",[v("font",{attrs:{color:"MediumVioletRed"}},[e._v("严格模式")])],1)]),e._v(" "),v("p",[e._v("        严格模式下，会有以下特点：")]),e._v(" "),v("p",[e._v("        ①对于分区表，用户不允许扫描所有分区")]),e._v(" "),v("p",[e._v("        ②使用了order by语句的查询，要求必须使用limit语句")]),e._v(" "),v("p",[e._v("        ③限制笛卡尔积的查询")]),e._v(" "),v("ul",[v("li",[v("font",{attrs:{color:"MediumVioletRed"}},[e._v("开启map端combiner（不影响最终业务逻辑）")])],1)]),e._v(" "),v("p",[e._v("        这个就属于配置层面上的优化了，需要我们手动开启 "),v("code",[e._v("set hive.map.aggr=true；")])]),e._v(" "),v("ul",[v("li",[v("font",{attrs:{color:"MediumVioletRed"}},[e._v("压缩（选择快的）")])],1)]),e._v(" "),v("p",[e._v("        设置map端输出中间结、果压缩。（不完全是解决数据倾斜的问题，但是减少了IO读写和网络传输，能提高很多效率）")]),e._v(" "),v("ul",[v("li",[v("font",{attrs:{color:"MediumVioletRed"}},[e._v("小文件进行合并")])],1)]),e._v(" "),v("p",[e._v("        在Map执行前合并小文件，减少Map数：CombineHiveInputFormat具有对小文件进行合并的功能（系统默认的格式）。HiveInputFormat没有对小文件合并功能。")]),e._v(" "),v("ul",[v("li",[v("font",{attrs:{color:"MediumVioletRed"}},[e._v("其他")])],1)]),e._v(" "),v("p",[v("font",{attrs:{color:"RoyalBlue"}},[e._v("列式存储，采用分区技术，开启JVM重用")]),e._v("...类似的技术非常多，大家选择一些方便记忆的就足以在面试时回答这道题。")],1),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("拓展：")]),e._v("\n想了解更多关于Hive/HiveSQL常用优化方法可以参考"),v("strong",[e._v("苹果大数据布道师")]),e._v("王知无前辈的这篇文章："),v("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1453464",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cloud.tencent.com/developer/article/1453464"),v("OutboundLink")],1)])]),e._v(" "),v("h2",{attrs:{id:"_9、hive数据倾斜如何定位-怎么解决"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9、hive数据倾斜如何定位-怎么解决"}},[e._v("#")]),e._v(" 9、Hive数据倾斜如何定位 + 怎么解决？")]),e._v(" "),v("p",[e._v("        倾斜问题非常经典，一般的面试官都会问你如何解决数据倾斜，细致一点的就会问你如何定位数据倾斜以及怎么解决，这里我们也简单地说一下：")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Hive 中数据倾斜的基本表现：")])])]),e._v(" "),v("p",[e._v("        ① 一般都发生在 Sql 中 group by 和 join on 上，而且和数据逻辑绑定比较深。\n        ②  任务进度长时间维持在99%（或100%），查看任务监控页面，发现只有少量（1个或几个）reduce子任务未完成。因为其处理的数据量和其他reduce差异过大")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("如何产生")])])]),e._v(" "),v("p",[e._v("        ①  key的分布不均匀或者说某些key太集中\n        ② 业务数据自身的特性，例如不同数据类型关联产生数据倾斜\n        ③ SQL语句导致的数据倾斜")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("如何解决")])])]),e._v(" "),v("p",[e._v("        ① 开启map端combiner（不影响最终业务逻辑）\n        ② 开启数据倾斜时负载均衡\n        ③ 控制空值分布")]),e._v(" "),v("blockquote",[v("p",[v("font",{attrs:{color:"black"}},[e._v("将为空的key转变为字符串加随机数或纯随机数，将因空值而造成倾斜的数据分配到多个Reducer")])],1)]),e._v(" "),v("p",[e._v("        ④ SQL语句调整")]),e._v(" "),v("blockquote",[v("p",[v("font",{attrs:{color:"black"}},[e._v("a ) 选用join key 分布最均匀的表作为驱动表。做好列裁剪和filter操作，以达到两表join的时候，数据量相对变小的效果。\n        \nb ) 大小表Join：使用map join让小的维度表（1000条以下的记录条数）先进内存。在Map端完成Reduce。\n        \nc ) 大表Join大表：把空值的Key变成一个字符串加上一个随机数，把倾斜的数据分到不同的reduce上，由于null值关联不上，处理后并不影响最终的结果。\n        \nd ) count distinct大量相同特殊值：count distinct 时，将值为空的情况单独处理，如果是计算count distinct，可以不用处理，直接过滤，在最后结果中加1。如果还有其他计算，需要进行group by，可以先将值为空的记录单独处理，再和其他计算结果进行union。")])],1)]),e._v(" "),v("h2",{attrs:{id:"_10、hive如何避免小文件的产生-你会如何处理大量小文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10、hive如何避免小文件的产生-你会如何处理大量小文件"}},[e._v("#")]),e._v(" 10、Hive如何避免小文件的产生,你会如何处理大量小文件？")]),e._v(" "),v("p",[e._v("        关于小文件如何处理，也已经是老生常谈的问题。")]),e._v(" "),v("p",[e._v("        小文件产生的原因有很多，例如：读取数据源时的大量小文件,使用动态分区插入数据时产生，Reduce/Task数量较多。")]),e._v(" "),v("p",[e._v("        我们都知道，HDFS文件元数据存储在 NameNode 的内存中，在 内存空间有限的情况下，小文件过多会影响NameNode 的寿命，同时影响计算引擎的任务数量，比如每个小的文件都会生成一个Map任务。")]),e._v(" "),v("p",[e._v("        那到底该如何解决小文件过多的问题呢？")]),e._v(" "),v("p",[v("strong",[e._v("解决的方法有：")])]),e._v(" "),v("p",[e._v("        （1）合并小文件：对小文件进行归档（Har）、自定义Inputformat将小文件存储成SequenceFile文件。")]),e._v(" "),v("p",[e._v("        （2）采用ConbinFileInputFormat来作为输入，解决输入端大量小文件场景。")]),e._v(" "),v("p",[e._v("        （3）对于大量小文件Job，可以开启JVM重用。")]),e._v(" "),v("p",[e._v("        （4）当然，也可以直接设置相关的参数")]),e._v(" "),v("p",[e._v("        设置map输入的小文件合并：")]),e._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" mapped. max "),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("split")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("size")]),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("256000000")]),e._v("\n//一个节点上 split的至少的大小〔这个值决定了多个 DataNode上的文件是否需要合并\n"),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" mapred. "),v("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" split. size per.node"),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("100000000")]),e._v("\n//一个交换机下 split的至少的大小〔这个值决定了多个交换机上的文件是否需要合并\n/执行Map前进行小文件合井\n"),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" hive. input "),v("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("format")]),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("org. apache hadoop. hive. ql.io.CombineHiveInputFormat:\n")])])]),v("p",[e._v("        设置 map 输出 和 reduce 输出 进行合并的相关参数")]),e._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[e._v("//设置map端输出进行合并,默认为true\n"),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" hive. merge mapfiles "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n//设置 reduce端输出进行合并,默认为 "),v("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" hive. merge. "),v("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("mapredfiles")]),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n//设置合并文件的大小\n"),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" hive. merge.size.per.task "),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("256")]),e._v("*1000*1000\n//当输出文件的平均大小小于该值时,启动一个独立的 MapReduce任务进行文件 merge\n"),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" hive.merge.smallfiles.avgsize"),v("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("16000000")]),e._v("\n")])])]),v("h2",{attrs:{id:"小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),v("p",[e._v("        本篇文章虽然就只写了10个Hive 的考点，但是也花了我不少的精力去整理这些内容。相信大家在看完之后，多少会有点意犹未尽的感觉。如果哪里解释的不到位，也欢迎在评论区或者后台私信我留言讨论 ~ 同时也欢迎大家点个关注，后续其他高频的面试题我也都会整理出来，敬请期待！")]),e._v(" "),v("p",[e._v("        最后再叨叨几句，"),v("strong",[v("font",{attrs:{color:"\tRoyalBlue"}},[e._v("面试永远是最快查缺补漏的方法，但如果不作任何准备就前去当炮灰，这毫无意义")])],1),e._v(" 。")]),e._v(" "),v("h2",{attrs:{id:"彩蛋"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#彩蛋"}},[e._v("#")]),e._v(" 彩蛋")]),e._v(" "),v("p",[e._v("        听说你在找我标题中所提到的“"),v("strong",[e._v("108份面经")]),e._v("”，这当然不是标题党，需要的话请联系我，毕竟"),v("strong",[e._v("独乐乐不如众乐乐")]),e._v("~")]),e._v(" "),v("p",[e._v("![在这里插入图片描述](https://img-blog.csdnimg.cn/20210413220444880.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDMxODgzMA==,size_16,color_FFFFFF,t_70#pic_center =500x500)")])])}),[],!1,null,null,null);t.default=_.exports}}]);