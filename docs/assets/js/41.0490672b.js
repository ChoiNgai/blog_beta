(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{436:function(s,t,a){"use strict";a.r(t);var e=a(30),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一篇文章了解hive调优"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一篇文章了解hive调优"}},[s._v("#")]),s._v(" 一篇文章了解Hive调优")]),s._v(" "),a("p",[s._v("老工在职场多年，从事过海量（PB级）数据的关系型数据库数据处理工作，后由于数据平台升级的要求，将数据迁移到Hadoop集群，做了多年的数据研发和数据产品的研发工作，从业务理解、数据模型构建、数据采集、数据清洗，到数据产品前端/服务端的研发都做过，基本涵盖了数据的生命周期。对于Hive调优，老工自有一番理解。下面将从一个过度优化的案例说起。")]),s._v(" "),a("blockquote",[a("p",[s._v("从一个过度优化案例说起")])]),s._v(" "),a("p",[s._v("某天，老工在对小白的代码进行代码评审，发现了一个去重计数的代码案例，下面具体介绍。")]),s._v(" "),a("p",[s._v("【案例2.10】 去重计数案例。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s_age\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" student_tb_orc\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" s_age\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" b\n")])])]),a("p",[s._v("这是简单统计年龄的枚举值个数，为什么不用distinct？")]),s._v(" "),a("p",[s._v("【案例2.11】 简化的去重计数。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("distinct")]),s._v(" s_age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" student_tb_orc\n")])])]),a("p",[s._v("小白认为：案例2.10的代码在数据量特别大的情况下能够有效避免Reduce端的数据倾斜，案例2.10可能会比案例2.11效率高。")]),s._v(" "),a("p",[s._v("我们先不管数据量特别大这个问题，就当前的业务和环境下，案例2.11一定会比案例2.10的效率高，原因有以下几点：")]),s._v(" "),a("p",[s._v("（1）进行去重的列是s_age列，它的业务含义表示年龄。既然是年龄，说明它的可枚举值非常有限，如果转化成MapReduce来解释的话，在Map阶段，每个Map会对s_age去重。由于s_age枚举值有限，因而每个Map得到的s_age也有限，最终得到reduce的数据量也就是map数量*s_age枚举值的个数。")]),s._v(" "),a("p",[s._v("假如执行案例2.10的代码Map的数量有100个，s_age的最大枚举值有100个，每个Map过滤后的数据都含有s_age的所有枚举值，且s_age是int型占4个字节，那么传输到Reduce的数据量就是10 000条记录，总数据量是40KB，这么小的数据量，不需要避免数据倾斜。")]),s._v(" "),a("p",[s._v("（2）案例2.11中，distinct的命令会在内存中构建一个hashtable，查找去重的时间复杂度是O(1)；案例2.10中，group by在不同版本间变动比较大，有的版本会用构建hashtable的形式去重，有的版本会通过排序的方式，排序最优时间复杂度无法到O(1 )。另外，案例2.10会转化为两个任务，会消耗更多的磁盘网络I/O资源。")]),s._v(" "),a("p",[s._v("（3）最新的Hive 3.0中新增了count（distinct）优化，通过配置hive.optimize.countdistinct，即使真的出现数据倾斜也可以自动优化，自动改变SQL执行的逻辑。")]),s._v(" "),a("p",[s._v("（4）案例2.11比案例2.10代码简洁，表达的意思简单明了，如果没有特殊的问题，代码简洁就是优。")]),s._v(" "),a("p",[s._v("为了佐证这个想法，可以一起执行下这两段代码，比较一下代码的执行结果。老工执行完后，分别贴出了上面的两个案例，即案例2.10和案例2.11的执行结果。")]),s._v(" "),a("p",[s._v("案例2.10的执行结果如下。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("INFO  : Query ID "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hive_20181022145656_9bf4913b"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("006")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4211")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("d73"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("ac6f0161033\nINFO  : Total jobs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nINFO  : Launching Job "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("out")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nINFO  : "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Starting")]),s._v(" task "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":MAPRED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("serial")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mode")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("此处省略非关键的打印信息\nINFO  : MapReduce Total cumulative CPU "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("39")]),s._v(" seconds "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("590")]),s._v(" msec\nINFO  : Ended Job "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" job_1537177728748_3164\nINFO  : Launching Job "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("out")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nINFO  : "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Starting")]),s._v(" task "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":MAPRED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("serial")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mode")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("此处省略非关键的打印信息\nINFO  : MapReduce Total cumulative CPU "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" seconds "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("710")]),s._v(" msec\nINFO  : Ended Job "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" job_1537177728748_3165\nINFO  : MapReduce Jobs Launched:\nINFO  : Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": Map: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  Reduce: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("   Cumulative CPU: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("39.59")]),s._v(" sec   HDFS\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Read")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("55151260")]),s._v(" HDFS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Write")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("464")]),s._v(" SUCCESS\nINFO  : Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": Map: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  Reduce: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   Cumulative CPU: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.71")]),s._v(" sec   HDFS\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Read")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8683")]),s._v(" HDFS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Write")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" SUCCESS\nINFO  : Total MapReduce CPU "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Time")]),s._v(" Spent: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),s._v(" seconds "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(" msec\n")])])]),a("p",[s._v("案例2.11的执行结果如下：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("INFO  : Query ID "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hive_20181022145353_3973c188"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bae1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v("ea"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a82a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("980")]),s._v("a61562e96\nINFO  : Total jobs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nINFO  : Launching Job "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("out")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nINFO  : "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Starting")]),s._v(" task "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":MAPRED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("serial")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mode")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("此处省略非关键的打印信息\nINFO  : MapReduce Total cumulative CPU "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" seconds "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("360")]),s._v(" msec\nINFO  : Ended Job "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" job_1537177728748_3162\nINFO  : MapReduce Jobs Launched:\nINFO  : Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": Map: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  Reduce: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   Cumulative CPU: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28.36")]),s._v(" sec   HDFS\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Read")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("55143184")]),s._v(" HDFS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Write")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" SUCCESS\nINFO  : Total MapReduce CPU "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Time")]),s._v(" Spent: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(" seconds "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("360")]),s._v(" msec\n")])])]),a("p",[s._v("案例2.10和2.11执行结果对比：")]),s._v(" "),a("ul",[a("li",[s._v("案例2.10总共耗时47秒；")]),s._v(" "),a("li",[s._v("案例2.11总共耗时28秒。")])]),s._v(" "),a("p",[s._v("看到案例2.10和案例2.11的执行结果，通过执行计划可以查看两者执行过程中的逻辑差别。")]),s._v(" "),a("p",[s._v("如果读者之前对执行计划不熟悉，也没关系，只要能看懂下面执行计划中的几个关键字，理清SQL的执行逻辑就好。随后老工贴出了两个案例的执行计划，并逐一做了解释。案例2.10的执行计划如下：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("STAGE DEPENDENCIES:\n  Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" a root stage\n  Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" depends "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" stages: Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" depends "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" stages: Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nSTAGE PLANS:\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//第一个Stage")]),s._v("\n  Stage: Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nMap Reduce\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Map的操作")]),s._v("\n      Map Operator Tree:\n          TableScan\n            alias: student_tb_orc\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" Operator\n              expressions: s_age "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n              outputColumnNames: s_age\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("By")]),s._v(" Operator\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("keys")]),s._v(": s_age "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mode")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("hash")]),s._v("\n                outputColumnNames: _col0\n                Reduce Output Operator\n                  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" expressions: _col0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                  sort "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                  Map"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("reduce "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("partition")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("columns")]),s._v(": _col0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Reduce的操作")]),s._v("\n      Reduce Operator Tree:\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("By")]),s._v(" Operator\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("keys")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_col0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mode")]),s._v(": mergepartial\n          outputColumnNames: _col0\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" Operator\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("By")]),s._v(" Operator\n              aggregations: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mode")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("hash")]),s._v("\n              outputColumnNames: _col0\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//第二个Stage")]),s._v("\n  Stage: Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n    Map Reduce\n      Map Operator Tree:\n          TableScan\n            Reduce Output Operator\n              sort "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(":\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),s._v(" expressions: _col0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      Reduce Operator Tree:\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("By")]),s._v(" Operator\n          aggregations: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_col0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mode")]),s._v(": mergepartial\n          outputColumnNames: _col0\n")])])]),a("p",[s._v("注意：原有的执行计划太长，为了突出重点，方便阅读，将执行计划中的部分信息省略了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/THumz4762QALKfg7RE3hh1iaYLtwTficwwtTK8XWwvia99rBdX2nFb7icufuHAAUJiaSCwicqET1dBB6XkEQ1X3Mgujg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),s._v(" "),a("p",[s._v("图2.6 案例2.10执行计划简化图")]),s._v(" "),a("p",[s._v("上面有两个Stage，即Stage-1和Stage-2（Stage-0一般表示计算完后的操作，对程序集群中的运行没有影响），分别表示两个任务，说明这个SQL会转化成两个MapReduce。我们先只关注上面执行结果中的黑体字，整个案例2.10的执行计划结构可以抽象成如图2.6所示的形式。")]),s._v(" "),a("p",[s._v("在Stage-1框中，整个作业又被抽象成Map和Reduce两个操作，分别用S-1 MAP和S-1 REDUCE表示。我们循着S-1 MAP/REDUCE来解读案例2.10的执行计划。")]),s._v(" "),a("p",[s._v("按S-1 Map框的缩进解读案例2.10的执行计划如下：")]),s._v(" "),a("p",[s._v("（1）扫描操作。")]),s._v(" "),a("p",[s._v("（2）在步骤1的基础上执行列筛选（列投影）的操作。")]),s._v(" "),a("p",[s._v("（3）在步骤2的基础上按s_age列分组聚合（group by），最后只输出key值，value的值抛弃，不输出。")]),s._v(" "),a("p",[s._v("按S-1 Reduce框的缩进解读案例2.10的执行计划如下：")]),s._v(" "),a("p",[s._v("（1）按KEY._col0(s_age)聚合。")]),s._v(" "),a("p",[s._v("（2）计算步骤（1）中每个s_age包含的学生个数，即count(1)，最终输出key(s_age),抛弃无用的计算结果，即每个s_age包含的学生个数这个结果抛弃。")]),s._v(" "),a("p",[s._v("注意：这里只是算出每个年龄段的个数，而计算结果是要计算出不同年龄枚举值的个数。")]),s._v(" "),a("p",[s._v("经过上面的分析知道，Stage-1其实表达的就是子查询select s_age from student_tb_orc group by s_age的实际逻辑。输出的结果只是去重后的s_age。")]),s._v(" "),a("p",[s._v("为了计算去重后s_age的个数，Hive启动了第二个MapReduce作业，在执行计划里面用Stage-2表示。Stage-2被抽象成Map和Reduce两个操作。在图2.6中分别用S-2 MAP和S-2 REDUCE框表示，我们循着S-2 MAP/ REDUCE来解读案例2.11的执行计划。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/THumz4762QALKfg7RE3hh1iaYLtwTficwwHibCD5phNHXJCz7VVH1hlFrvPphE40L4z0OCNv0yRpHhP6JvwoFzS6w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),s._v(" "),a("p",[s._v("图2.7 案例2.10的程序流程图")]),s._v(" "),a("p",[s._v("按S-2 Map框的缩进解读案例2.11的执行计划如下：")]),s._v(" "),a("p",[s._v("（1）读取Stage-1输出的结果。")]),s._v(" "),a("p",[s._v("（2）直接输出一列_col0，由于没有指定要去读的列，因而这里只是输出了每个s_age所在文件行的偏移量。")]),s._v(" "),a("p",[s._v("按S-2 Reduce框的缩进解读案例2.11的执行计划计算vlaue._col0（map输出的_col0）的个数，并输出。")]),s._v(" "),a("p",[s._v("整个Stage-2的逻辑就是select count(1) from (…)a这个SQL的逻辑。为了方便理解，可以对照图2.7的程序流程图来理解逻辑。")]),s._v(" "),a("p",[s._v("接着来看案例2.11对应的执行计划：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("explain")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("distinct")]),s._v(" s_age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" student_tb_orc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nSTAGE DEPENDENCIES:\n  Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" a root stage\n  Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" depends "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" stages: Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nSTAGE PLANS:\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//唯一的Stage")]),s._v("\n  Stage: Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    Map Reduce\n      Map Operator Tree:\n          TableScan\n            alias: student_tb_orc\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" Operator\n              expressions: s_age "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n              outputColumnNames: s_age\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("By")]),s._v(" Operator\n                aggregations: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" s_age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("keys")]),s._v(": s_age "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mode")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("hash")]),s._v("\n                outputColumnNames: _col0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" _col1\n                Reduce Output Operator\n                  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" expressions: _col0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                  sort "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n      Reduce Operator Tree:\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("By")]),s._v(" Operator\n          aggregations: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_col0:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),s._v("_col0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mode")]),s._v(": mergepartial\n          outputColumnNames: _col0\n")])])]),a("p",[s._v("案例2.11的执行计划相对于案例2.10来说简单得多。同时，也可以看到只有一个Stage-1，即只有一个MapReduce作业。将上述执行计划抽象成图2.8的结构来进行解读。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/THumz4762QALKfg7RE3hh1iaYLtwTficwwKicOLvXJFByKC9T0ib1GQAOSAROdfaoiaEXHQjyrIQ6Z1YaDT9XaLHNDQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),s._v(" "),a("p",[s._v("图2.8 案例2.11Stage-1的执行计划")]),s._v(" "),a("p",[s._v("按S-1 Map框的缩进解读案例2.11的执行计划如下：")]),s._v(" "),a("p",[s._v("（1）获取表的数据。")]),s._v(" "),a("p",[s._v("（2）列的投影，筛选出s_age列。")]),s._v(" "),a("p",[s._v("（3）以s_age作为分组列，并计算s_age去重后的个数，最终输出的只有s_age列，计算s_age去重后个数的值会被抛弃。")]),s._v(" "),a("p",[s._v("注意：这里计算s_age去重后的个数，仅仅只是操作一个Map内处理的数据，即只是对部分数据去重。一个任务中有多个Map，如果存在相同的值则是没有做去重，要做到全局去重，就只能在Reduce中做。")]),s._v(" "),a("p",[s._v("按S-1 Reduce框的缩进解读案例2.11的执行计划。可以看到，Reduce阶段只是对key._col0(s_age)进行全局去重，并输出该值。为了方便理解，可以对照图2.9来理解。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/THumz4762QALKfg7RE3hh1iaYLtwTficwwibNMoWHholFma6xbibw4IEZu1J9C8MUKkU4qEy4licltYdFrXhf46fGbg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),s._v(" "),a("p",[s._v("图2.9 案例2.11的程序流程图")]),s._v(" "),a("p",[s._v("对比上面两个执行计划的逻辑我们可以知道，案例2.10是将去重（distinct）和计数放到两个MapReduce作业中分别处理；而案例2.11是将去重和计数放到一个MapReduce作业中完成。下面将两个案例流程放在一起对比，如图2.10所示。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/THumz4762QALKfg7RE3hh1iaYLtwTficwwAN8bho7eRfiaSb9VaEe3RlDFVPibSBJjRks0ViaB9WNbwmjySFWRvbudw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),s._v(" "),a("p",[s._v("图2.10 案例2.10和案例2.11的逻辑对比图")]),s._v(" "),a("p",[s._v("从图2.10中可以知道，案例2.10的数据处理逻辑集中在Stage-1-Map、Stage-1-Reduce和Stage-2-Reduce这3个部分；案例2.11的数据处理逻辑集中在Stage-1-Map、Stage-1-Reduce这两个部分。")]),s._v(" "),a("p",[s._v("从实际业务来讲，不同s_age的枚举个数相比于源表student_tb_orc的总数是非常有限的，且两个用到的算法相似，因此在这里可以认为案例2.10整体的数据处理逻辑的总体耗时和案例2.11的数据处理复杂度近似。这一点在YARN的日志中也会看到。这两个案例的时间差主要集中在数据传输和中间任务的创建下，就是图2.10中的虚线框部分，因此通过distinct关键字比子查询的方式效率更高。")]),s._v(" "),a("p",[s._v("采用案例2.10的写法，什么时候会比案例2.11高呢？在有数据倾斜的情况下，案例2.10的方式会比案例2.11更优。什么是数据倾斜？是指当所需处理的数据量级较大时，某个类型的节点所需要处理的数据量级，大于同类型的节点一个数量级（10倍）以上。这里的某个类型的节点可以指代执行Map或者Reduce的节点。")]),s._v(" "),a("p",[s._v("当数据大到一定的量级时，案例2.10有两个作业，可以把处理逻辑分散到两个阶段中，即第一个阶段先处理一部分数据，缩小数据量，第二个阶段在已经缩小的数据集上继续处理。而案例2.11，经过Map阶段处理的数据还非常多时，所有的数据却都需要交给一个Reduce节点去处理，就好比千军万马过独木桥一样，不仅无法利用到分布式集群的优势，还要浪费大量时间在等待，而这个等待的时间远比案例2.10多个MapReduce所延长的流程导致额外花费的时间还多。")]),s._v(" "),a("p",[s._v("如前面所说，在Hive 3.0中即使遇到数据倾斜，案例2.11将hive.optimize.countdistinct设置为true，则整个写法也能达到案例2.10的效果。")]),s._v(" "),a("p",[s._v("调优讲究适时调优，过早进行调优有可能做的是无用功甚至产生负效应，在调优上投入的工作成本和回报不成正比。调优需要遵循一定的原则。")])])}),[],!1,null,null,null);t.default=n.exports}}]);