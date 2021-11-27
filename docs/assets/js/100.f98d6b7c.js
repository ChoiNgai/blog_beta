(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{493:function(s,t,a){"use strict";a.r(t);var e=a(30),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"explain-慢sql分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explain-慢sql分析"}},[s._v("#")]),s._v(" explain + 慢SQL分析")]),s._v(" "),a("blockquote",[a("p",[s._v("通过explain查看SQL中的执行计划")])]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#HiveSQL"}},[s._v("HiveSQL")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#MySQL"}},[s._v("MySQL")])])]),s._v(" "),a("h2",{attrs:{id:"hivesql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hivesql"}},[s._v("#")]),s._v(" HiveSQL")]),s._v(" "),a("p",[s._v("用explain打开的执行计划包含以下几个部分：")]),s._v(" "),a("ul",[a("li",[s._v("作业的依赖关系图，即STAG DEPENDENCIES")]),s._v(" "),a("li",[s._v("每个作业的详细信息，即STAG PLAINS")])]),s._v(" "),a("p",[s._v("eg: 查看简单SQL的执行计划")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 默认使用的Spark计算引擎")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPLAIN")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" game_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dim_app_game_dict "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" app_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" app_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%同城%"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" game_code\n")])])]),a("p",[s._v("Hue的截图如下：\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/20211126232440.png",alt:"explain"}})]),s._v(" "),a("p",[s._v("全部内部如下:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Explain")]),s._v("\nSTAGE DEPENDENCIES:\n  Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" a root stage\n  Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" depends "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" stages: Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\nSTAGE PLANS:\n  Stage: Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    Spark\n      Edges:\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"        Reducer 2 <- Map 1 (GROUP, 4)"')]),s._v("\n      DagName: hive_20200906160000_e0f156d8"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("f53a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("dde"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("ef6"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("910947")]),s._v("b0db41:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("638")]),s._v("\n      Vertices:\n        Map "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \n            Map Operator Tree:\n                TableScan\n                  alias: dim_app_game_dict\n                  filterExpr: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%同城%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Statistics")]),s._v(": Num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("450")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Data")]),s._v(" size: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("91869")]),s._v(" Basic stats: COMPLETE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Column")]),s._v(" stats: NONE\n                  Filter Operator\n                    predicate: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%同城%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Statistics")]),s._v(": Num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("75")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Data")]),s._v(" size: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15311")]),s._v(" Basic stats: COMPLETE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Column")]),s._v(" stats: NONE\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" Operator\n                      expressions: game_code "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(": string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                      outputColumnNames: game_code\n                      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Statistics")]),s._v(": Num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("75")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Data")]),s._v(" size: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15311")]),s._v(" Basic stats: COMPLETE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Column")]),s._v(" stats: NONE\n                      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("By")]),s._v(" Operator\n                        aggregations: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("keys")]),s._v(": game_code "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(": string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mode")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("hash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"                        outputColumnNames: _col0, _col1"')]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Statistics")]),s._v(": Num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("75")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Data")]),s._v(" size: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15311")]),s._v(" Basic stats: COMPLETE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Column")]),s._v(" stats: NONE\n                        Reduce Output Operator\n                          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" expressions: _col0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(": string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                          sort "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                          Map"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("reduce "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("partition")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("columns")]),s._v(": _col0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(": string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Statistics")]),s._v(": Num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("75")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Data")]),s._v(" size: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15311")]),s._v(" Basic stats: COMPLETE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Column")]),s._v(" stats: NONE\n                          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),s._v(" expressions: _col1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            Execution "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mode")]),s._v(": vectorized\n        Reducer "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" \n            Reduce Operator Tree:\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("By")]),s._v(" Operator\n                aggregations: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_col0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("keys")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_col0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(": string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mode")]),s._v(": mergepartial\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"                outputColumnNames: _col0, _col1"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Statistics")]),s._v(": Num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Data")]),s._v(" size: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7553")]),s._v(" Basic stats: COMPLETE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Column")]),s._v(" stats: NONE\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("File")]),s._v(" Output Operator\n                  compressed: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n                  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Statistics")]),s._v(": Num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Data")]),s._v(" size: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7553")]),s._v(" Basic stats: COMPLETE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Column")]),s._v(" stats: NONE\n                  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(":\n                      input format: org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hadoop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mapred"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TextInputFormat\n                      output format: org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hadoop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HiveIgnoreKeyTextOutputFormat\n                      serde: org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hadoop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("serde2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lazy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("LazySimpleSerDe\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n  Stage: Stage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Fetch")]),s._v(" Operator\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n      Processor Tree:\n        ListSink\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n")])])]),a("p",[s._v("可以看出stage dependecies 描绘了作业之间的依赖关系，即stag0依赖stage-1的执行结果。stage-0表示客户端读取stage-1的执行结果，stage-1表示整个sql的执行过程。\nSpark把所有任务组织成DAG(有向无环图)，所有的任务以顶点表示，任务之间的关系以边表示。Map1顶点和Reducer2顶点分别表示Map任务和Reduce任务。")]),s._v(" "),a("blockquote",[a("p",[s._v("引擎切换成MapReduce描述信息也是大同小异。 set hive.execution.engine=mr")])]),s._v(" "),a("p",[s._v("对应的执行计划关键词解读如下：")]),s._v(" "),a("ul",[a("li",[s._v("Spark：表示当前任务执行所用的计算引擎是MapReduce")]),s._v(" "),a("li",[s._v("Map Operator Tree：表示当前Map阶段的操作信息。")]),s._v(" "),a("li",[s._v("Reduce Operator Tree: 表示当前Reduce阶段的操作信息。")]),s._v(" "),a("li",[s._v("TableScan：表示对关键字alias声明的结果集，这里指代dim_app_game_dict，进行表扫描操作。")]),s._v(" "),a("li",[s._v("filterExpr：过滤表达式。")]),s._v(" "),a("li",[s._v("Statistics：表示对当前阶段的统计信息。例如，当前处理的数据行和数据量，这两个都是预估值。")]),s._v(" "),a("li",[s._v("Filter Operator：表示在之前操作(TableScan)的结果集上进行数据的过滤。")]),s._v(" "),a("li",[s._v("predicate：表示filter operator进行过滤时，所用的谓词，即 "),a("code",[s._v("(app_id > 10000) and (app_name like '%同城%')")])]),s._v(" "),a("li",[s._v("Select Operator：表示在之前的结果集上对列进行投影，即筛选列。")]),s._v(" "),a("li",[s._v("expressions：表示需要投影的列，即筛选的列。")]),s._v(" "),a("li",[s._v("outputColNames:表示输出的列。")]),s._v(" "),a("li",[s._v("Group By Operator：表示在之前的结果集上分组聚合。")]),s._v(" "),a("li",[s._v("aggregations：表示分组聚合使用的算法，这里是count(1)。")]),s._v(" "),a("li",[s._v("keys:表示分组的列，在该例子表示的是"),a("code",[s._v("game_code")]),s._v("。")]),s._v(" "),a("li",[s._v("Reduce Output Operator：表示当前描述的是对之前结果聚合后的输出信息，这里表示Map端聚合后的输出信息。")]),s._v(" "),a("li",[s._v("key expressions/value expressions：分别描述的是Map阶段输出的键(key)和值(value)所用的数据列。这里的例子key expressions 指代就是 "),a("code",[s._v("game_code")]),s._v("列，value expressions指代的是"),a("code",[s._v("count(1)")]),s._v("列。")]),s._v(" "),a("li",[s._v("sort order：表示输出的是否进行排序， "),a("code",[s._v("+")]),s._v("表示正排, "),a("code",[s._v("-")]),s._v("表示倒序。")]),s._v(" "),a("li",[s._v("Map-reduce partition columns: 表示Map阶段输出到Reduce阶段的分区列，在Hive SQl中可以用distribute by指代分区的列。")]),s._v(" "),a("li",[s._v("compressed：表示文件输出的结果是否要文件压缩。")]),s._v(" "),a("li",[s._v("table：描述当前操作表的信息。")]),s._v(" "),a("li",[s._v("input format/output format:分别表示文件输入和输出的文件类型。")]),s._v(" "),a("li",[s._v("serde：表示当前读取表数据的序列化和反序列化的方式。")])]),s._v(" "),a("p",[a("strong",[s._v("理解了执行计划，才可以写出合适的sql，进而去调优。对于调优，其实是一个综合的概念，不仅仅是sql层面，还要从需求和架构(代码、模块、系统)两大方面入手。从经验来看，60%的需求是可以简化的，30%的SQL是可以优化达到目的的，剩下的10%就是难点了吧")])]),s._v(" "),a("h2",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" MySQL")]),s._v(" "),a("p",[s._v("使用EXPLAIN关键字可以模拟优化器执行SQL查询语句，从而知道SQL语句在MySQl中是如何被处理的。可以分析查询语句的性能瓶颈。")]),s._v(" "),a("p",[s._v("执行计划包含的信息：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#id"}},[s._v("id")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#select_type"}},[s._v("select_type")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#table"}},[s._v("table")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#type"}},[s._v("type")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#possible_keys"}},[s._v("possible_keys")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#key"}},[s._v("key")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#key_len"}},[s._v("key_len")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#ref"}},[s._v("ref")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#rows"}},[s._v("rows")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#Extra"}},[s._v("Extra")])])]),s._v(" "),a("h3",{attrs:{id:"id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[s._v("#")]),s._v(" id")]),s._v(" "),a("p",[s._v("SELECT查询的序列号，包含一组数字，表示查询中执行SELECT语句或操作表的顺序。")]),s._v(" "),a("p",[s._v("包含三种情况：")]),s._v(" "),a("ul",[a("li",[s._v("id相同，执行顺序由上至下。")]),s._v(" "),a("li",[s._v("id不同，如果是子查询，id序号会递增，id值越大优先级越高，越先被执行。")]),s._v(" "),a("li",[s._v("id既有相同的，又有不同的。id如果相同认为是一组，执行顺序由上至下；在所有组中，id值越大优先级越高，越先执    行。")])]),s._v(" "),a("h3",{attrs:{id:"select-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-type"}},[s._v("#")]),s._v(" select_type")]),s._v(" "),a("ul",[a("li",[s._v("SIMPLE: 简单SELECT查询，查询中不包含子查询或者UNION")]),s._v(" "),a("li",[s._v("PRIMARY: 查询中包含任何复杂的子部分，最外层的查询")]),s._v(" "),a("li",[s._v("SUBQUERY： SELECT或WHERE中包含的子查询部分")]),s._v(" "),a("li",[s._v("DERIVED： 在FROM中包含的子查询被标记为DERIVER(衍生)， MySQL会递归执行这些子查询，把结果放到临时表中")]),s._v(" "),a("li",[s._v("UNION： 若第二个SELECT出现UNION，则被标记为UNION，若UNION包含在FROM子句的子查询中，外层子查询将被标记为DERIVED")]),s._v(" "),a("li",[a("code",[s._v("UNION RESULT")]),s._v("： 从UNION表获取结果的SELECT")])]),s._v(" "),a("h3",{attrs:{id:"table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[s._v("#")]),s._v(" table")]),s._v(" "),a("p",[s._v("显示这一行数据是关于哪张表的")]),s._v(" "),a("h3",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[s._v("#")]),s._v(" type")]),s._v(" "),a("p",[s._v("type显示的是访问类型，是较为重要的一个指标，结果值从最好到最坏依次是：")]),s._v(" "),a("p",[a("code",[s._v("system")]),s._v(" > "),a("code",[s._v("const")]),s._v(" > "),a("code",[s._v("eq_ref")]),s._v(" > "),a("code",[s._v("ref")]),s._v(" > "),a("code",[s._v("fulltext")]),s._v(" > "),a("code",[s._v("ref_or_null")]),s._v(" > "),a("code",[s._v("index_merge")]),s._v(" > "),a("code",[s._v("unique_subquery")]),s._v(" > "),a("code",[s._v("index_subquery")]),s._v(" > "),a("code",[s._v("range")]),s._v(" > "),a("code",[s._v("index")]),s._v(" > "),a("code",[s._v("all")])]),s._v(" "),a("ul",[a("li",[s._v("system：表只有一行记录（等于系统表），这是const类型的特例，平时不会出现。")]),s._v(" "),a("li",[s._v("const：如果通过索引依次就找到了，const用于比较主键索引或者unique索引。因为只能匹配一行数据，所以很快。如果将主键置于where列表中，MySQL就能将该查询转换为一个常量。")]),s._v(" "),a("li",[s._v("eq_ref：唯一性索引扫描，对于每个索引键，表中只有一条记录与之匹配。常见于主键或唯一索引扫描。")]),s._v(" "),a("li",[s._v("ref：非唯一性索引扫描，返回匹配某个单独值的所有行。本质上也是一种索引访问，它返回所有匹配某个单独值的行，然而它可能会找到多个符合条件的行，所以它应该属于查找和扫描的混合体。")]),s._v(" "),a("li",[s._v("range：只检索给定范围的行，使用一个索引来选择行。key列显示使用了哪个索引，一般就是在你的where语句中出现between、<、>、in等的查询，这种范围扫描索引比全表扫描要好，因为只需要开始于缩印的某一点，而结束于另一点，不用扫描全部索引。")]),s._v(" "),a("li",[s._v("index：Full Index Scan ，index与ALL的区别为index类型只遍历索引树，这通常比ALL快，因为索引文件通常比数据文件小。（也就是说虽然ALL和index都是读全表， 但index是从索引中读取的，而ALL是从硬盘读取的）。")]),s._v(" "),a("li",[s._v("all：Full Table Scan，遍历全表获得匹配的行。")])]),s._v(" "),a("p",[s._v("一般来说，得保证查询至少达到range级别，最好能达到ref。")]),s._v(" "),a("h3",{attrs:{id:"possible-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#possible-keys"}},[s._v("#")]),s._v(" possible_keys")]),s._v(" "),a("p",[s._v("显示可能应用在这张表中的索引，一个或多个。 查询涉及到的字段上若存在索引，则该索引将被列出，但不一定被查询实际使用。")]),s._v(" "),a("h3",{attrs:{id:"key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[s._v("#")]),s._v(" key")]),s._v(" "),a("p",[s._v("实际使用的索引。如果为NULL，则没有使用索引。")]),s._v(" "),a("p",[s._v("查询中若出现了覆盖索引，则该索引仅出现在key列表中。")]),s._v(" "),a("h3",{attrs:{id:"key-len"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-len"}},[s._v("#")]),s._v(" key_len")]),s._v(" "),a("p",[s._v("表示索引中使用的字节数，可通过该列计算查询中使用的索引的长度。在不损失精度的情况下，长度越短越好。")]),s._v(" "),a("p",[s._v("key_len显示的值为索引字段的最大可能长度，并非实际使用长度，即key_len是根据表定义计算而得，不是通过表内检索出的。")]),s._v(" "),a("h3",{attrs:{id:"ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[s._v("#")]),s._v(" ref")]),s._v(" "),a("p",[s._v("显示索引的哪一列被使用了，哪些列或常量被用于查找索引列上的值。")]),s._v(" "),a("h3",{attrs:{id:"rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rows"}},[s._v("#")]),s._v(" rows")]),s._v(" "),a("p",[s._v("根据表统计信息及索引选用情况，大致估算出找到所需记录多需要读取的行数。")]),s._v(" "),a("h3",{attrs:{id:"extra"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extra"}},[s._v("#")]),s._v(" Extra")]),s._v(" "),a("p",[s._v("包含不适合在其他列中显示但十分重要的额外信息：")]),s._v(" "),a("ul",[a("li",[s._v("Using filesort： 说明MySQL会对数据使用一个外部的索引排序，而不是按照表内的索引顺序进行读取。MySQL中无法利用索引完成的排序操作称为“文件排序”")]),s._v(" "),a("li",[s._v("Using temporary：  使用了临时表保存中间结果，MySQL在对查询结果排序时使用临时表。常见于排序order by和分组查询group by")]),s._v(" "),a("li",[s._v("Using index： 表示相应的SELECT操作中使用了覆盖索引，避免访问了表的数据行，效率不错。如果同时出现using where，表明索引被用来执行索引键值的查找； 如果没有同时出现using where，表明索引用来读取数据而非执行查找动作覆盖索引。")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("理解方式1：SELECT的数据列只需要从索引中就能读取到，不需要读取数据行，MySQL可以利用索引返回SELECT列表中的字段，而不必根据索引再次读取数据文件，换句话说查询列要被所建的索引覆盖 。\n\n理解方式2：索引是高效找到行的一个方法，但是一般数据库也能使用索引找到一个列的数据，因此他不必读取整个行。毕竟索引叶子节点存储了他们索引的数据；当能通过读取索引就可以得到想要的数据，那就不需要读取行了，一个索引包含了（覆盖）满足查询结果的数据就叫做覆盖索引 \n")])])]),a("blockquote",[a("p",[s._v("注意： 如果要使用覆盖索引，一定要注意SELECT列表中只取出需要的列，不可"),a("code",[s._v("SELECT *")]),s._v("，因为如果所有字段一起做索引会导致索引文件过大查询性能下降")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("impossible where： WHERE子句的值总是false，不能用来获取任何元组。")])]),s._v(" "),a("li",[a("p",[s._v("select tables optimized away： 在没有GROUP BY子句的情况下基于索引优化"),a("code",[s._v("MIN/MAX")]),s._v("操作或者对于MyISAM存储引擎优化"),a("code",[s._v("COUNT(*)")]),s._v("操作， 不必等到执行阶段再进行计算，查询执行计划生成的阶段即完成优化。")])]),s._v(" "),a("li",[a("p",[s._v("distinct： 优化distinct操作，在找到第一匹配的元祖后即停止找同样值的操作。")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);