(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{419:function(e,a,t){"use strict";t.r(a);var v=t(30),_=Object(v.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"hive常用参数调优十二式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hive常用参数调优十二式"}},[e._v("#")]),e._v(" Hive常用参数调优十二式")]),e._v(" "),t("h4",{attrs:{id:"_1-limit限制调整"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-limit限制调整"}},[e._v("#")]),e._v(" 1. limit限制调整")]),e._v(" "),t("p",[e._v("一般情况下，Limit语句还是需要执行整个查询语句，然后再返回部分结果。")]),e._v(" "),t("p",[e._v("有一个配置属性可以开启，避免这种情况---对数据源进行抽样。")]),e._v(" "),t("p",[e._v("hive.limit.optimize.enable=true --- 开启对数据源进行采样的功能 hive.limit.row.max.size --- 设置最小的采样容量 hive.limit.optimize.limit.file --- 设置最大的采样样本数")]),e._v(" "),t("p",[e._v("缺点：有可能部分数据永远不会被处理到")]),e._v(" "),t("h4",{attrs:{id:"_2-join优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-join优化"}},[e._v("#")]),e._v(" 2. JOIN优化")]),e._v(" "),t("h5",{attrs:{id:"_1-将大表放后头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-将大表放后头"}},[e._v("#")]),e._v(" 1)将大表放后头")]),e._v(" "),t("p",[e._v("Hive假定查询中最后的一个表是大表。它会将其它表缓存起来，然后扫描最后那个表。因此通常需要将小表放前面，或者标记哪张表是大表：/*streamtable(table_name) */")]),e._v(" "),t("h5",{attrs:{id:"_2-使用相同的连接键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用相同的连接键"}},[e._v("#")]),e._v(" 2). 使用相同的连接键")]),e._v(" "),t("p",[e._v("当对3个或者更多个表进行join连接时，如果每个on子句都使用相同的连接键的话，那么只会产生一个MapReduce job。")]),e._v(" "),t("h5",{attrs:{id:"_3-尽量尽早地过滤数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-尽量尽早地过滤数据"}},[e._v("#")]),e._v(" 3). 尽量尽早地过滤数据")]),e._v(" "),t("p",[e._v("减少每个阶段的数据量,对于分区表要加分区，同时只选择需要使用到的字段。")]),e._v(" "),t("h5",{attrs:{id:"_4-尽量原子化操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-尽量原子化操作"}},[e._v("#")]),e._v(" 4). 尽量原子化操作")]),e._v(" "),t("p",[e._v("尽量避免一个SQL包含复杂逻辑，可以使用中间表来完成复杂的逻辑")]),e._v(" "),t("h4",{attrs:{id:"_3-本地模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-本地模式"}},[e._v("#")]),e._v(" 3. 本地模式")]),e._v(" "),t("p",[e._v("有时hive的输入数据量是非常小的。在这种情况下，为查询出发执行任务的时间消耗可能会比实际job的执行时间要多的多。对于大多数这种情况，hive可以通过本地模式在单台机器上处理所有的任务。对于小数据集，执行时间会明显被缩短")]),e._v(" "),t("blockquote",[t("p",[e._v("set hive.exec.mode.local.auto=true;")])]),e._v(" "),t("p",[e._v("当一个job满足如下条件才能真正使用本地模式：　　- 1.job的输入数据大小必须小于参数：hive.exec.mode.local.auto.inputbytes.max(默认128MB) 　　- 2.job的map数必须小于参数：hive.exec.mode.local.auto.tasks.max(默认4) 　　- 3.job的reduce数必须为0或者1")]),e._v(" "),t("p",[e._v("可用参数hive.mapred.local.mem(默认0)控制child jvm使用的最大内存数。")]),e._v(" "),t("h4",{attrs:{id:"_4-并行执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-并行执行"}},[e._v("#")]),e._v(" 4.并行执行")]),e._v(" "),t("p",[e._v("hive会将一个查询转化为一个或多个阶段，包括：MapReduce阶段、抽样阶段、合并阶段、limit阶段等。默认情况下，一次只执行一个阶段。不过，如果某些阶段不是互相依赖，是可以并行执行的。")]),e._v(" "),t("p",[e._v("set hive.exec.parallel=true,可以开启并发执行。")]),e._v(" "),t("p",[e._v("set hive.exec.parallel.thread.number=16; //同一个sql允许最大并行度，默认为8。")]),e._v(" "),t("p",[e._v("会比较耗系统资源。")]),e._v(" "),t("h4",{attrs:{id:"_5-strict模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-strict模式"}},[e._v("#")]),e._v(" 5.strict模式")]),e._v(" "),t("p",[e._v("对分区表进行查询，在where子句中没有加分区过滤的话，将禁止提交任务(默认：nonstrict)")]),e._v(" "),t("blockquote",[t("p",[e._v("set hive.mapred.mode=strict;")])]),e._v(" "),t("p",[e._v("注：使用严格模式可以禁止3种类型的查询：（1）对于分区表，不加分区字段过滤条件，不能执行 （2）对于order by语句，必须使用limit语句 （3）限制笛卡尔积的查询（join的时候不使用on，而使用where的）")]),e._v(" "),t("h4",{attrs:{id:"_6-调整mapper和reducer个数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-调整mapper和reducer个数"}},[e._v("#")]),e._v(" 6.调整mapper和reducer个数")]),e._v(" "),t("h5",{attrs:{id:"map阶段优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map阶段优化"}},[e._v("#")]),e._v(" Map阶段优化")]),e._v(" "),t("p",[e._v("map执行时间：map任务启动和初始化的时间+逻辑处理的时间。")]),e._v(" "),t("p",[e._v("1.通常情况下，作业会通过input的目录产生一个或者多个map任务。主要的决定因素有：input的文件总个数，input的文件大小，集群设置的文件块大小(目前为128M, 可在hive中通过set dfs.block.size;命令查看到，该参数不能自定义修改)；")]),e._v(" "),t("p",[e._v("2.举例：")]),e._v(" "),t("p",[e._v("a)假设input目录下有1个文件a,大小为780M,那么hadoop会将该文件a分隔成7个块（6个128m的块和1个12m的块），从而产生7个map数 b)假设input目录下有3个文件a,b,c,大小分别为10m，20m，130m，那么hadoop会分隔成4个块（10m,20m,128m,2m）,从而产生4个map数 即，如果文件大于块大小(128m),那么会拆分，如果小于块大小，则把该文件当成一个块。")]),e._v(" "),t("p",[e._v("3.是不是map数越多越好？")]),e._v(" "),t("p",[e._v("答案是否定的。如果一个任务有很多小文件（远远小于块大小128m）,则每个小文件也会被当做一个块，用一个map任务来完成，而一个map任务启动和初始化的时间远远大于逻辑处理的时间，就会造成很大的资源浪费。而且，同时可执行的map数是受限的。")]),e._v(" "),t("p",[e._v("4.是不是保证每个map处理接近128m的文件块，就高枕无忧了？")]),e._v(" "),t("p",[e._v("答案也是不一定。比如有一个127m的文件，正常会用一个map去完成，但这个文件只有一个或者两个小字段，却有几千万的记录，如果map处理的逻辑比较复杂，用一个map任务去做，肯定也比较耗时。")]),e._v(" "),t("p",[e._v("针对上面的问题3和4，我们需要采取两种方式来解决：即减少map数和增加map数；如何合并小文件，减少map数？")]),e._v(" "),t("p",[e._v("假设一个SQL任务：Select count(1) from popt_tbaccountcopy_mes where pt = '2012-07-04' 该任务的inputdir /group/p_sdo_data/p_sdo_data_etl/pt/popt_tbaccountcopy_mes/pt=2012-07-04 共有194个文件，其中很多是远远小于128m的小文件，总大小9G，正常执行会用194个map任务。Map总共消耗的计算资源：SLOTS_MILLIS_MAPS= 623,020 通过以下方法来在map执行前合并小文件，减少map数：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" set mapred.max.split.size=100000000;\n set mapred.min.split.size.per.node=100000000;\n set mapred.min.split.size.per.rack=100000000;\n set hive.input.format=org.apache.hadoop.hive.ql.io.CombineHiveInputFormat;\n")])])]),t("p",[e._v("再执行上面的语句，用了74个map任务，map消耗的计算资源：SLOTS_MILLIS_MAPS=333,500 对于这个简单SQL任务，执行时间上可能差不多，但节省了一半的计算资源。大概解释一下，100000000表示100M")]),e._v(" "),t("blockquote",[t("p",[e._v("set hive.input.format=org.apache.hadoop.hive.ql.io.CombineHiveInputFormat;")])]),e._v(" "),t("p",[e._v("这个参数表示执行前进行小文件合并，前面三个参数确定合并文件块的大小，大于文件块大小128m的，按照128m来分隔，小于128m,大于100m的，按照100m来分隔，把那些小于100m的（包括小文件和分隔大文件剩下的），进行合并,最终生成了74个块。")]),e._v(" "),t("p",[e._v("如何适当的增加map数？当input的文件都很大，任务逻辑复杂，map执行非常慢的时候，可以考虑增加Map数， 来使得每个map处理的数据量减少，从而提高任务的执行效率。假设有这样一个任务：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" Select data_desc,\n  count(1),\n  count(distinct id),\n  sum(case when …),\n  sum(case when ...),\n  sum(…)\nfrom a group by data_desc\n")])])]),t("p",[e._v("如果表a只有一个文件，大小为120M，但包含几千万的记录，如果用1个map去完成这个任务，肯定是比较耗时的，这种情况下，我们要考虑将这一个文件合理的拆分成多个，这样就可以用多个map任务去完成。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("   set mapred.reduce.tasks=10;\n   create table a_1 as \n   select * from a \n   distribute by rand(123);\n")])])]),t("p",[e._v("这样会将a表的记录，随机的分散到包含10个文件的a_1表中，再用a_1代替上面sql中的a表，则会用10个map任务去完成。每个map任务处理大于12M（几百万记录）的数据，效率肯定会好很多。")]),e._v(" "),t("p",[e._v("看上去，貌似这两种有些矛盾，一个是要合并小文件，一个是要把大文件拆成小文件，这点正是重点需要关注的地方，根据实际情况，控制map数量需要遵循两个原则：使大数据量利用合适的map数；使单个map任务处理合适的数据量。")]),e._v(" "),t("p",[e._v("控制hive任务的reduce数：")]),e._v(" "),t("p",[e._v("1.Hive自己如何确定reduce数：")]),e._v(" "),t("p",[e._v("reduce个数的设定极大影响任务执行效率，不指定reduce个数的情况下，Hive会猜测确定一个reduce个数，基于以下两个设定：hive.exec.reducers.bytes.per.reducer（每个reduce任务处理的数据量，默认为1000^3=1G） hive.exec.reducers.max（每个任务最大的reduce数，默认为999）")]),e._v(" "),t("p",[e._v("计算reducer数的公式很简单N=min(参数2，总输入数据量/参数1)")]),e._v(" "),t("p",[e._v("即，如果reduce的输入（map的输出）总大小不超过1G,那么只会有一个reduce任务，如：")]),e._v(" "),t("p",[e._v("select pt,count(1) from popt_tbaccountcopy_mes where pt = '2012-07-04' group by pt;")]),e._v(" "),t("p",[e._v("/group/p_sdo_data/p_sdo_data_etl/pt/popt_tbaccountcopy_mes/pt=2012-07-04 总大小为9G多，")]),e._v(" "),t("p",[e._v("因此这句有10个reduce")]),e._v(" "),t("p",[e._v("2.调整reduce个数方法一：")]),e._v(" "),t("p",[e._v("调整hive.exec.reducers.bytes.per.reducer参数的值；set hive.exec.reducers.bytes.per.reducer=500000000; （500M） select pt,count(1) from popt_tbaccountcopy_mes where pt = '2012-07-04' group by pt; 这次有20个reduce")]),e._v(" "),t("p",[e._v("3.调整reduce个数方法二")]),e._v(" "),t("p",[e._v("set mapred.reduce.tasks = 15; select pt,count(1) from popt_tbaccountcopy_mes where pt = '2012-07-04' group by pt;这次有15个reduce")]),e._v(" "),t("p",[e._v("4.reduce个数并不是越多越好；")]),e._v(" "),t("p",[e._v("同map一样，启动和初始化reduce也会消耗时间和资源；另外，有多少个reduce,就会有多少个输出文件，如果生成了很多个小文件， 那么如果这些小文件作为下一个任务的输入，则也会出现小文件过多的问题；")]),e._v(" "),t("p",[e._v("5.什么情况下只有一个reduce；")]),e._v(" "),t("p",[e._v("很多时候你会发现任务中不管数据量多大，不管你有没有设置调整reduce个数的参数，任务中一直都只有一个reduce任务；其实只有一个reduce任务的情况，除了数据量小于hive.exec.reducers.bytes.per.reducer参数值的情况外，还有以下原因：")]),e._v(" "),t("p",[e._v("a)没有group by的汇总，比如把select pt,count(1) from popt_tbaccountcopy_mes where pt = '2012-07-04' group by pt; 写成 select count(1) from popt_tbaccountcopy_mes where pt = '2012-07-04'; 这点非常常见，希望大家尽量改写。")]),e._v(" "),t("p",[e._v("b)用了Order by")]),e._v(" "),t("p",[e._v("c)有笛卡尔积")]),e._v(" "),t("p",[e._v("通常这些情况下，除了找办法来变通和避免，我们暂时没有什么好的办法，因为这些操作都是全局的，所以hadoop不得不用一个reduce去完成。同样的，在设置reduce个数的时候也需要考虑这两个原则：")]),e._v(" "),t("ul",[t("li",[e._v("使大数据量利用合适的reduce数")]),e._v(" "),t("li",[e._v("使单个reduce任务处理合适的数据量")])]),e._v(" "),t("h5",{attrs:{id:"reduce阶段优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reduce阶段优化"}},[e._v("#")]),e._v(" Reduce阶段优化")]),e._v(" "),t("p",[e._v("调整方式：")]),e._v(" "),t("ul",[t("li",[e._v("set mapred.reduce.tasks=?")]),e._v(" "),t("li",[e._v("set hive.exec.reducers.bytes.per.reducer = ?")])]),e._v(" "),t("p",[e._v("一般根据输入文件的总大小,用它的estimation函数来自动计算reduce的个数：reduce个数 = InputFileSize / bytes per reducer")]),e._v(" "),t("h4",{attrs:{id:"_7-jvm重用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-jvm重用"}},[e._v("#")]),e._v(" 7.JVM重用")]),e._v(" "),t("p",[e._v("用于避免小文件的场景或者task特别多的场景，这类场景大多数执行时间都很短，因为hive调起mapreduce任务，JVM的启动过程会造成很大的开销，尤其是job有成千上万个task任务时，JVM重用可以使得JVM实例在同一个job中重新使用N次")]),e._v(" "),t("blockquote",[t("p",[e._v("set mapred.job.reuse.jvm.num.tasks=10; --10为重用个数")])]),e._v(" "),t("h4",{attrs:{id:"_8-动态分区调整"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-动态分区调整"}},[e._v("#")]),e._v(" 8.动态分区调整")]),e._v(" "),t("p",[e._v("动态分区属性：设置为true表示开启动态分区功能（默认为false）")]),e._v(" "),t("blockquote",[t("p",[e._v("hive.exec.dynamic.partition=true;")])]),e._v(" "),t("p",[e._v("动态分区属性：设置为nonstrict,表示允许所有分区都是动态的（默认为strict） 设置为strict，表示必须保证至少有一个分区是静态的")]),e._v(" "),t("blockquote",[t("p",[e._v("hive.exec.dynamic.partition.mode=strict;")])]),e._v(" "),t("p",[e._v("动态分区属性：每个mapper或reducer可以创建的最大动态分区个数")]),e._v(" "),t("blockquote",[t("p",[e._v("hive.exec.max.dynamic.partitions.pernode=100;")])]),e._v(" "),t("p",[e._v("动态分区属性：一个动态分区创建语句可以创建的最大动态分区个数")]),e._v(" "),t("blockquote",[t("p",[e._v("hive.exec.max.dynamic.partitions=1000;")])]),e._v(" "),t("p",[e._v("动态分区属性：全局可以创建的最大文件个数")]),e._v(" "),t("blockquote",[t("p",[e._v("hive.exec.max.created.files=100000;")])]),e._v(" "),t("p",[e._v("控制DataNode一次可以打开的文件个数 这个参数必须设置在DataNode的$HADOOP_HOME/conf/hdfs-site.xml文件中")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<property>\n    <name>dfs.datanode.max.xcievers</name>\n    <value>8192</value>\n</property>\n")])])]),t("h4",{attrs:{id:"_9-推测执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-推测执行"}},[e._v("#")]),e._v(" 9.推测执行")]),e._v(" "),t("p",[e._v("目的：是通过加快获取单个task的结果以及进行侦测将执行慢的TaskTracker加入到黑名单的方式来提高整体的任务执行效率")]),e._v(" "),t("p",[e._v("（1）修改 $HADOOP_HOME/conf/mapred-site.xml文件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("         <property>\n                   <name>mapred.map.tasks.speculative.execution </name>\n                   <value>true</value>\n         </property>\n         <property>\n                   <name>mapred.reduce.tasks.speculative.execution </name>\n                   <value>true</value>\n         </property>\n")])])]),t("p",[e._v("（2）修改hive配置")]),e._v(" "),t("blockquote",[t("p",[e._v("set hive.mapred.reduce.tasks.speculative.execution=true;")])]),e._v(" "),t("h4",{attrs:{id:"_10-数据倾斜"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-数据倾斜"}},[e._v("#")]),e._v(" 10.数据倾斜")]),e._v(" "),t("p",[e._v("表现：任务进度长时间维持在99%（或100%），查看任务监控页面，发现只有少量（1个或几个）reduce子任务未完成。因为其处理的数据量和其他reduce差异过大。单一reduce的记录数与平均记录数差异过大，通常可能达到3倍甚至更多。最长时长远大于平均时长。")]),e._v(" "),t("p",[e._v("原因")]),e._v(" "),t("p",[e._v("1)、key分布不均匀")]),e._v(" "),t("p",[e._v("2)、业务数据本身的特性")]),e._v(" "),t("p",[e._v("3)、建表时考虑不周")]),e._v(" "),t("p",[e._v("4)、某些SQL语句本身就有数据倾斜")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/UdK9ByfMT2M1bha9Ujb44VbibK2PN4aDfyCwktxlwL3qn4ibQen2v5SsiaWtDicoIkUmIdY4Rnf3y0goVOyf8NyLAg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),t("p",[e._v("解决方案：参数调节")]),e._v(" "),t("blockquote",[t("p",[e._v("hive.map.aggr=true")])]),e._v(" "),t("h4",{attrs:{id:"_11-其他参数调优"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-其他参数调优"}},[e._v("#")]),e._v(" 11. 其他参数调优")]),e._v(" "),t("p",[e._v("开启CLI提示符前打印出当前所在的数据库名")]),e._v(" "),t("blockquote",[t("p",[e._v("set hive.cli.print.current.db=true;")])]),e._v(" "),t("p",[e._v("让CLI打印出字段名称")]),e._v(" "),t("blockquote",[t("p",[e._v("hive.cli.print.header=true;")])]),e._v(" "),t("p",[e._v("设置任务名称，方便查找监控")]),e._v(" "),t("blockquote",[t("p",[e._v("SET mapred.job.name=P_DWA_D_IA_S_USER_PROD;")])]),e._v(" "),t("p",[e._v("决定是否可以在 Map 端进行聚合操作")]),e._v(" "),t("blockquote",[t("p",[e._v("set hive.map.aggr=true;")])]),e._v(" "),t("p",[e._v("有数据倾斜的时候进行负载均衡")]),e._v(" "),t("blockquote",[t("p",[e._v("set hive.groupby.skewindata=true;")])]),e._v(" "),t("p",[e._v("对于简单的不需要聚合的类似SELECT col from table LIMIT n语句，不需要起MapReduce job，直接通过Fetch task获取数据")]),e._v(" "),t("blockquote",[t("p",[e._v("set hive.fetch.task.conversion=more;")])]),e._v(" "),t("h4",{attrs:{id:"_12、小文件问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12、小文件问题"}},[e._v("#")]),e._v(" 12、小文件问题")]),e._v(" "),t("h5",{attrs:{id:"小文件是如何产生的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小文件是如何产生的"}},[e._v("#")]),e._v(" 小文件是如何产生的")]),e._v(" "),t("p",[e._v("1.动态分区插入数据，产生大量的小文件，从而导致map数量剧增。")]),e._v(" "),t("p",[e._v("2.reduce数量越多，小文件也越多(reduce的个数和输出文件是对应的)。")]),e._v(" "),t("p",[e._v("3.数据源本身就包含大量的小文件。")]),e._v(" "),t("h4",{attrs:{id:"小文件问题的影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小文件问题的影响"}},[e._v("#")]),e._v(" 小文件问题的影响")]),e._v(" "),t("p",[e._v("1.从Hive的角度看，小文件会开很多map，一个map开一个JVM去执行，所以这些任务的初始化，启动，执行会浪费大量的资源，严重影响性能。")]),e._v(" "),t("p",[e._v("2.在HDFS中，每个小文件对象约占150byte，如果小文件过多会占用大量内存。这样NameNode内存容量严重制约了集群的扩展。")]),e._v(" "),t("h4",{attrs:{id:"小文件问题的解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小文件问题的解决方案"}},[e._v("#")]),e._v(" 小文件问题的解决方案")]),e._v(" "),t("p",[e._v("从小文件产生的途经就可以从源头上控制小文件数量，方法如下：")]),e._v(" "),t("p",[e._v("1.使用Sequencefile作为表存储格式，不要用textfile，在一定程度上可以减少小文件")]),e._v(" "),t("p",[e._v("2.减少reduce的数量(可以使用参数进行控制)")]),e._v(" "),t("p",[e._v("3.少用动态分区，用时记得按distribute by分区")]),e._v(" "),t("p",[e._v("对于已有的小文件，我们可以通过以下几种方案解决：")]),e._v(" "),t("p",[e._v("1.使用hadoop archive命令把小文件进行归档")]),e._v(" "),t("p",[e._v("2.重建表，建表时减少reduce数量")]),e._v(" "),t("p",[e._v("3.通过参数进行调节，设置map/reduce端的相关参数，如下：")]),e._v(" "),t("p",[e._v("设置map输入合并小文件的相关参数：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//每个Map最大输入大小(这个值决定了合并后文件的数量)  \nset mapred.max.split.size=256000000;    \n//一个节点上split的至少的大小(这个值决定了多个DataNode上的文件是否需要合并)  \nset mapred.min.split.size.per.node=100000000;  \n//一个交换机下split的至少的大小(这个值决定了多个交换机上的文件是否需要合并)    \nset mapred.min.split.size.per.rack=100000000;  \n//执行Map前进行小文件合并  \nset hive.input.format=org.apache.hadoop.hive.ql.io.CombineHiveInputFormat;\n")])])]),t("p",[e._v("设置map输出和reduce输出进行合并的相关参数：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//设置map端输出进行合并，默认为true  \nset hive.merge.mapfiles = true  \n//设置reduce端输出进行合并，默认为false  \nset hive.merge.mapredfiles = true  \n//设置合并文件的大小  \nset hive.merge.size.per.task = 256*1000*1000  \n//当输出文件的平均大小小于该值时，启动一个独立的MapReduce任务进行文件merge。\nset hive.merge.smallfiles.avgsize=16000000\n")])])]),t("p",[e._v("设置如下参数取消一些限制(HIVE 0.7后没有此限制)：")]),e._v(" "),t("p",[e._v("hive.merge.mapfiles=false")]),e._v(" "),t("p",[e._v("默认值：true 描述：是否合并Map的输出文件，也就是把小文件合并成一个map")]),e._v(" "),t("p",[e._v("hive.merge.mapredfiles=false")]),e._v(" "),t("p",[e._v("默认值：false 描述：是否合并Reduce的输出文件，也就是在Map输出阶段做一次reduce操作，再输出.")]),e._v(" "),t("blockquote",[t("p",[e._v("set hive.input.format=org.apache.hadoop.hive.ql.io.CombineHiveInputFormat;")])]),e._v(" "),t("p",[e._v("这个参数表示执行前进行小文件合并，")]),e._v(" "),t("p",[e._v("前面三个参数确定合并文件块的大小，大于文件块大小128m的，按照128m来分隔，小于128m,大于100m的，按照100m来分隔，把那些小于100m的（包括小文件和分隔大文件剩下的），进行合并,最终生成了74个块。")])])}),[],!1,null,null,null);a.default=_.exports}}]);