(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{459:function(t,a,s){"use strict";s.r(a);var n=s(30),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"spark运行过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spark运行过程"}},[t._v("#")]),t._v(" Spark运行过程")]),t._v(" "),s("h2",{attrs:{id:"sqlcontext的运行过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sqlcontext的运行过程"}},[t._v("#")]),t._v(" SqlContext的运行过程")]),t._v(" "),s("p",[t._v("SparkSQL有两个分支SqlContext和Hivecontext，SqlContext现在只支持sql语法解析器（SQL-92语法），而HiveContext现在既支持sql语法解析器又支持hivesql语法解析器，默认为hivesql语法解析器，用户可以通过配置切换成sql语法解析器，来运行hiveql不支持的语法。")]),t._v(" "),s("p",[t._v("SqlContext使用sqlContext.sql(sqlText)来提交用户sql语句，SqlContext首先会调用parserSql对sqlText进行语法分析，然后返回给用户SchemaRDD。SchemaRDD继承自SchemaRDDLike。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Executes a SQL query using Spark, returning the result as a SchemaRDD.  The dialect that is\n   * used for SQL parsing can be configured with 'spark.sql.dialect'.\n   *\n   * @group userf\n   */")]),t._v("\n  def "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sqlText"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SchemaRDD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dialect "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sql"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SchemaRDD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseSql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sqlText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unsupported SQL dialect: $dialect"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" val sqlParser "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    val fallback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("catalyst"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("SqlParser")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("catalyst"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("SparkSQLParser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SchemaRDD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@transient")]),t._v(" val sqlContext"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SQLContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@transient")]),t._v(" val baseLogicalPlan"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogicalPlan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" RDD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Row")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sqlContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sparkContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SchemaRDDLike")]),t._v("\n")])])]),s("p",[t._v("parseSql首先会尝试dll语法解析，如果失败则进行sql语法解析。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" def "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseSql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogicalPlan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ddlParser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOrElse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sqlParser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("然后调用SchemaRDDLike中的sqlContext.executePlan(baseLogicalPlan)来执行catalyst.SqlParser解析后生成的Unresolved LogicalPlan。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" trait "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SchemaRDDLike")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@transient")]),t._v(" def sqlContext"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SQLContext")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@transient")]),t._v(" val baseLogicalPlan"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogicalPlan")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" def baseSchemaRDD"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SchemaRDD")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  lazy val queryExecution "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sqlContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("executePlan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("baseLogicalPlan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("接着executePlan会调用QueryExecution")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" def "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("executePlan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plan"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogicalPlan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("this"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("QueryExecution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("this"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("QueryExecution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" val logical "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" plan "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("先看看QueryExecution的代码")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * :: DeveloperApi ::\n   * The primary workflow for executing relational queries using Spark.  Designed to allow easy\n   * access to the intermediate phases of query execution for developers.\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@DeveloperApi")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QueryExecution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    def logical"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogicalPlan")]),t._v("\n\n    lazy val analyzed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExtractPythonUdfs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("analyzer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logical"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    lazy val withCachedData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useCachedData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("analyzed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    lazy val optimizedPlan "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("optimizer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("withCachedData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO: Don't just pick the first one...")]),t._v("\n    lazy val sparkPlan "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SparkPlan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("planner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("optimizedPlan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// executedPlan should not be used to initialize any SparkPlan. It should be")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// only used for execution.")]),t._v("\n    lazy val executedPlan"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SparkPlan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepareForExecution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sparkPlan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Internal version of the RDD. Avoids copies and has no schema */")]),t._v("\n    lazy val toRdd"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RDD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Row")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" executedPlan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("QueryExecution的执行如下")]),t._v(" "),s("ol",[s("li",[t._v("使用analyzer结合数据数据字典（catalog）进行绑定，生成resolved LogicalPlan")]),t._v(" "),s("li",[t._v("处理UDF")]),t._v(" "),s("li",[t._v("处理Cache")]),t._v(" "),s("li",[t._v("使用optimizer对resolved LogicalPlan进行优化，生成optimized LogicalPlan")]),t._v(" "),s("li",[t._v("使用SparkPlan将LogicalPlan转换成PhysicalPlan")]),t._v(" "),s("li",[t._v("使用prepareForExecution()将PhysicalPlan转换成可执行物理计划")]),t._v(" "),s("li",[t._v("使用execute()执行可执行物理计划")]),t._v(" "),s("li",[t._v("生成SchemaRDD")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://marsishandsome.github.io/SparkSQL-Internal/images/SqlContext-Execution.png",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"hivecontext的运行过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hivecontext的运行过程"}},[t._v("#")]),t._v(" HiveContext的运行过程")]),t._v(" "),s("p",[t._v("由于历史原因，实际应用中很多数据已经定义了hive meta data，使用SparkSQL的HiveContext可以无缝访问这些数据。使用HiveContext前只需要把hive-site.xml复制到spark/conf/中。")]),t._v(" "),s("p",[t._v("HiveContext继承自SQLContext，在hiveContext的的运行过程中除了override的函数和变量，可以使用和sqlContext一样的函数和变量。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * An instance of the Spark SQL execution engine that integrates with data stored in Hive.\n * Configuration for Hive is read from hive-site.xml on the classpath.\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HiveContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SparkContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SQLContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\noverride def "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sqlText"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SchemaRDD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO: Create a framework for registering parsers instead of just hardcoding if statements.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dialect "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sql"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sqlText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dialect "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hiveql"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SchemaRDD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ddlParser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sqlText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOrElse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HiveQl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseSql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sqlText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Unsupported SQL dialect: $dialect.  Try 'sql' or 'hiveql'\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v('HiveContext使用HiveContext.sql(sqlText)来提交用户查询。hiveContext.sql首先根据用户的语法设置（spark.sql.dialect）决定具体的执行过程，如果dialect == "sql"则采用sqlContext的sql语法执行过程；如果是dialect == "hiveql"，则采用hiveql语法执行过程。在这里我们主要看看hiveql语法执行过程。')]),t._v(" "),s("p",[t._v("首先会尝试利用DDLParser进行ddl语法解析，如果失败的话，则进行HiveQl进行sql语法解析，并返回SchemaRDD。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Returns a LogicalPlan for a given HiveQL string. */")]),t._v("\n  def "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseSql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogicalPlan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hqlParser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" val hqlParser "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    val fallback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExtendedHiveQlParser")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SparkSQLParser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SparkSQLParser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fallback"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogicalPlan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractSparkSQLParser")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" lazy val others"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogicalPlan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    wholeInput "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" input "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("因为sparkSQL所支持的hiveql除了兼容hive语句外，还兼容一些sparkSQL本身的语句，所以在hiveql语句语法解析的时候：")]),t._v(" "),s("ol",[s("li",[t._v("首先调用专门解析SparkSQL语法的解析器SparkSQLParser")]),t._v(" "),s("li",[t._v("当SparksQLParser无法解析的时候，会调用ExtendedHiveQlParser进行解析")])]),t._v(" "),s("p",[t._v("hiveContext的运行过程基本和sqlContext一致，除了override的catalog、functionRegistry、analyzer、planner、optimizedPlan、toRdd。 hiveContext的catalog，是指向 Hive Metastore。hiveContext的analyzer，使用了新的catalog和functionRegistry。hiveContext的planner，使用新定义的hivePlanner。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* A catalyst metadata catalog that points to the Hive Metastore. */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@transient")]),t._v("\n  override "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" lazy val catalog "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HiveMetastoreCatalog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OverrideCatalog")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Note that HiveUDFs will be overridden by functions registered in this context.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@transient")]),t._v("\n  override "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" lazy val functionRegistry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HiveFunctionRegistry")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OverrideFunctionRegistry")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* An analyzer that uses the Hive metastore. */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@transient")]),t._v("\n  override "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" lazy val analyzer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Analyzer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("catalog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" functionRegistry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" caseSensitive "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      override val extendedRules "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("catalog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("CreateTables")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("catalog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("PreInsertionCasts")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExtractPythonUdfs")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nil")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@transient")]),t._v("\n  override "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" val planner "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hivePlanner\n")])])]),s("p",[t._v("Spark1.2.0中HiveContext的执行基本上和SqlContext保持了统一。")])])}),[],!1,null,null,null);a.default=e.exports}}]);