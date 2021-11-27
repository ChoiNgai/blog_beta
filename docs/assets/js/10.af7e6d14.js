(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{405:function(t,i,e){"use strict";e.r(i);var a=e(30),v=Object(a.a)({},(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"flink1-10和hive集成一些需要注意的点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flink1-10和hive集成一些需要注意的点"}},[t._v("#")]),t._v(" Flink1.10和Hive集成一些需要注意的点")]),t._v(" "),e("p",[t._v("前几天，Flink官方release了Flink1.10版本，这个版本有很多改动。比如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Flink 1.10 同时还标志着对 Blink的整合宣告完成，随着对 Hive 的生产级别集成及对 TPC-DS 的全面覆盖，Flink 在增强流式 SQL 处理能力的同时也具备了成熟的批处理能力。本篇博客将对此次版本升级中的主要新特性及优化、值得注意的重要变化以及使用新版本的预期效果逐一进行介绍。\n")])])]),e("p",[t._v("其中最重要的一个特性之一是：推出了生产可用的 Hive 集成。")]),t._v(" "),e("p",[t._v("Flink 1.9推出了预览版的 Hive 集成。该版本允许用户使用 SQL DDL 将 Flink 特有的元数据持久化到 Hive Metastore、调用 Hive 中定义的 UDF 以及读、写 Hive 中的表。Flink 1.10 进一步开发和完善了这一特性，带来了全面兼容 Hive 主要版本的生产可用的 Hive 集成。")]),t._v(" "),e("p",[t._v("笔者就遇到的几个问题，归类总结如下。如果你在生产环境遇到各种奇奇怪怪得问题，可能带来一些启示：")]),t._v(" "),e("h6",{attrs:{id:"架构设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#架构设计"}},[t._v("#")]),t._v(" 架构设计")]),t._v(" "),e("p",[t._v("Flink在创建运行环境时会同时创建一个CatalogManager，这个CatalogManager就是用来管理不同的Catalog实例，我们的Flink运行环境就是通过这个访问Hive：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/UdK9ByfMT2M3GZKRDt34G3dib8xKq1Scy9veNlr3rqSjHazib6MMl1m1uDZiaoxHTq5QCO3Yub4nicDaqnWcQU8UFA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),e("p",[t._v("官网给出的例子如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/UdK9ByfMT2M3GZKRDt34G3dib8xKq1ScyYX4geB3T9kDLVLjnUmQ6QgDYM0XATu49bsxawIYk3mbzUat7uYKjjQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),e("h6",{attrs:{id:"hive-catalog-hive-需要一个配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hive-catalog-hive-需要一个配置文件"}},[t._v("#")]),t._v(" Hive Catalog + Hive 需要一个配置文件")]),t._v(" "),e("p",[t._v("Hadoop和Spark链接Hive时都会有一个hive-site.xml的配置文件，同样Flink在和Hive集成时也需要一个配置文件：sql-client-hive.yaml 这个配置文件中包含了：hive配置文件的路径，执行引擎等。官网给出的配置案例：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/UdK9ByfMT2M3GZKRDt34G3dib8xKq1ScywBVDAK1Piaicl1tcRbJxficHh5u9m6X1F1jgcs34ia2zMCndf2WIRgj2dg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),e("p",[t._v("官网同样给出了警示⚠️信息如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/UdK9ByfMT2M3GZKRDt34G3dib8xKq1ScyQv4SB4ia0Mdbckiar35PtshNO8HYA86D7GhFWl0KXhT34mRekH7Rnn3w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),e("p",[t._v("意思是说，本地需要一个hive-site.xml，另外sql-client-hive.yaml 中的planner配置必须为"),e("code",[t._v("blink")]),t._v(" 。")]),t._v(" "),e("h6",{attrs:{id:"sql-cli工具支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql-cli工具支持"}},[t._v("#")]),t._v(" SQL CLI工具支持")]),t._v(" "),e("p",[t._v("这个玩具类似一个对话窗口，可以通过脚本"),e("code",[t._v("sql-client.sh")]),t._v(" 脚本启动，运行方法如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/UdK9ByfMT2M3GZKRDt34G3dib8xKq1ScyX9qP7iaIvNnpictj45k2RDxmFibyPSPyqfgOnIDjmBWIJfxjXLxwKr7dg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/UdK9ByfMT2M3GZKRDt34G3dib8xKq1Scyuf84ngTAM5o8BeficeYicHDCILFGMhLedyMofxY7DPloq0slia5KN2UtQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),e("p",[t._v("需要注意的是，运行脚本的当前机器必须有必须的环境变量，例如：HADOOP_CONF_DIR、HIVE_HOME、HADOOP_CLASSPATH等，把Hadoop集群搭建的时候指定的一些环境变量拿过来即可。")]),t._v(" "),e("h6",{attrs:{id:"必要依赖和版本区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#必要依赖和版本区别"}},[t._v("#")]),t._v(" 必要依赖和版本区别")]),t._v(" "),e("p",[t._v("Flink 1.10 对Hive集成支持了很多版本，对于不同的Hive版本需要不同的Jar包支持，具体可以参考： https://ci.apache.org/projects/flink/flink-docs-release-1.10/dev/table/hive/#connecting-to-hive")]),t._v(" "),e("p",[t._v("另外，官网还给出了目前对Hive支持的一些注意点⚠️：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/UdK9ByfMT2M3GZKRDt34G3dib8xKq1ScyCnUewdygI3XbZNVlzCT7WxYPTfmdGXr2BQqyhnEs3vlIAdBFWDbwSQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),e("p",[t._v("很简单的英文，不再翻译了。")]),t._v(" "),e("h6",{attrs:{id:"优点和不足"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优点和不足"}},[t._v("#")]),t._v(" 优点和不足")]),t._v(" "),e("p",[t._v("本次更新issue里提到了目前主要做的一些优化，包括：Projection Pushdown(只读取必要的列)，Limit Pushdown(sql能limit的就limit，减少数据量)，分区裁剪(只读必须分区)等等。总体来说目前都是sql优化的一些常用手段。")]),t._v(" "),e("p",[t._v("目前的不足之处主要包含：")]),t._v(" "),e("p",[t._v("存储格式目前还没有完全支持，"),e("code",[t._v("We have tested on the following of table storage formats: text, csv, SequenceFile, ORC, and Parquet.")]),t._v(" ，相信很快就会再次release。")]),t._v(" "),e("p",[t._v("另外ACID、Bucket表暂时还不支持。")]),t._v(" "),e("p",[t._v("Hive作为数据仓库系统的绝对核心，承担着绝大多数的离线数据ETL计算和数据管理，期待Flink未来的完美支持。")])])}),[],!1,null,null,null);i.default=v.exports}}]);