(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{403:function(t,e,_){"use strict";_.r(e);var a=_(30),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"hive-sql内置函数大全"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hive-sql内置函数大全"}},[t._v("#")]),t._v(" Hive SQL内置函数大全")]),t._v(" "),_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),_("p",[t._v("​      Hive内部提供了很多函数给开发者使用，包括数学函数，集合函数，类型转换函数，日期函数，条件函数，字符函数，聚合函数，表生成函数等等，这些函数都统称为内置函数。"),_("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/2UHIhrbfNBd43fibQ1C6vib2O8M5edBrT0CcZIYLE63XcpQiaqxRN8M2YZler9PVsSIFjs1Lm0T63WDnnGLl6n3JA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),_("h2",{attrs:{id:"hive的内置函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hive的内置函数"}},[t._v("#")]),t._v(" Hive的内置函数")]),t._v(" "),_("h3",{attrs:{id:"一、数学函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、数学函数"}},[t._v("#")]),t._v(" 一、数学函数")]),t._v(" "),_("h4",{attrs:{id:"_1、-取整函数-round"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、-取整函数-round"}},[t._v("#")]),t._v(" 1、 取整函数: round")]),t._v(" "),_("p",[t._v("语法: round(double a)")]),t._v(" "),_("p",[t._v("返回值: BIGINT")]),t._v(" "),_("p",[t._v("说明:返回double类型的整数值部分（遵循四舍五入）")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select round(3.1415926);\n3")])]),t._v(" "),_("h4",{attrs:{id:"_2、指定精度取整函数-round"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、指定精度取整函数-round"}},[t._v("#")]),t._v(" 2、指定精度取整函数: round")]),t._v(" "),_("p",[t._v("语法: round(double a, int d)")]),t._v(" "),_("p",[t._v("返回值: DOUBLE")]),t._v(" "),_("p",[t._v("说明:返回指定精度d的double类型")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select round(3.1415926,4);\n3.1416")])]),t._v(" "),_("h4",{attrs:{id:"_3、向下取整函数-floor"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、向下取整函数-floor"}},[t._v("#")]),t._v(" 3、向下取整函数: floor")]),t._v(" "),_("p",[t._v("语法: floor(double a)")]),t._v(" "),_("p",[t._v("返回值: BIGINT")]),t._v(" "),_("p",[t._v("说明:返回等于或者小于该double变量的最大的整数")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select floor(3.1415926);\n3")])]),t._v(" "),_("h4",{attrs:{id:"_4、向上取整函数-ceil"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、向上取整函数-ceil"}},[t._v("#")]),t._v(" 4、向上取整函数: ceil")]),t._v(" "),_("p",[t._v("语法: ceil(double a)")]),t._v(" "),_("p",[t._v("返回值: BIGINT")]),t._v(" "),_("p",[t._v("说明:返回等于或者大于该double变量的最小的整数")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select ceil(3.1415926) ;\n4")])]),t._v(" "),_("h4",{attrs:{id:"_5、取随机数函数-rand"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5、取随机数函数-rand"}},[t._v("#")]),t._v(" 5、取随机数函数: rand")]),t._v(" "),_("p",[t._v("语法: rand(),rand(int seed)")]),t._v(" "),_("p",[t._v("返回值: double")]),t._v(" "),_("p",[t._v("说明:返回一个0到1范围内的随机数。如果指定种子seed，则会返回固定的随机数")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select rand();0.5577432776034763\nhive> select rand();0.6638336467363424\nhive> select rand(100);0.7220096548596434\nhive> select rand(100);0.7220096548596434")])]),t._v(" "),_("h4",{attrs:{id:"_6、幂运算函数-pow"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6、幂运算函数-pow"}},[t._v("#")]),t._v(" 6、幂运算函数: pow")]),t._v(" "),_("p",[t._v("语法: pow(double a, double p)")]),t._v(" "),_("p",[t._v("返回值: double")]),t._v(" "),_("p",[t._v("说明:返回a的p次幂")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select pow(2,4) ;\n16.0")])]),t._v(" "),_("h4",{attrs:{id:"_7、绝对值函数-abs"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7、绝对值函数-abs"}},[t._v("#")]),t._v(" 7、绝对值函数: abs")]),t._v(" "),_("p",[t._v("语法: abs(double a)  abs(int a)")]),t._v(" "),_("p",[t._v("返回值: double    int")]),t._v(" "),_("p",[t._v("说明:返回数值a的绝对值")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select abs(-3.9);3.9\nhive> select abs(10.9);10.9")])]),t._v(" "),_("h3",{attrs:{id:"二、字符串函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、字符串函数"}},[t._v("#")]),t._v(" 二、字符串函数")]),t._v(" "),_("h4",{attrs:{id:"_1、字符串长度函数-length"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、字符串长度函数-length"}},[t._v("#")]),t._v(" 1、字符串长度函数：length")]),t._v(" "),_("p",[t._v("语法: length(string A)")]),t._v(" "),_("p",[t._v("返回值: int")]),t._v(" "),_("p",[t._v("说明：返回字符串A的长度")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select length('abcedfg'); 7")])]),t._v(" "),_("h4",{attrs:{id:"_2、字符串反转函数-reverse"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、字符串反转函数-reverse"}},[t._v("#")]),t._v(" 2、字符串反转函数：reverse")]),t._v(" "),_("p",[t._v("语法: reverse(string A)")]),t._v(" "),_("p",[t._v("返回值: string")]),t._v(" "),_("p",[t._v("说明：返回字符串A的反转结果")]),t._v(" "),_("p",[_("strong",[t._v("举例")]),t._v("：")]),t._v(" "),_("blockquote",[_("p",[t._v('hive> select reverse("abcedfg");\ngfdecba')])]),t._v(" "),_("h4",{attrs:{id:"_3、字符串连接函数-concat"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、字符串连接函数-concat"}},[t._v("#")]),t._v(" 3、字符串连接函数：concat")]),t._v(" "),_("p",[t._v("语法: concat(string A, string B…)")]),t._v(" "),_("p",[t._v("返回值: string")]),t._v(" "),_("p",[t._v("说明：返回输入字符串连接后的结果，支持任意个输入字符串")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select concat('hello','world');\nhelloworld")])]),t._v(" "),_("h4",{attrs:{id:"_4、字符串连接函数-带分隔符-concat-ws"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、字符串连接函数-带分隔符-concat-ws"}},[t._v("#")]),t._v(" 4、字符串连接函数-带分隔符：concat_ws")]),t._v(" "),_("p",[t._v("语法: concat_ws(string SEP, string A, string B…)")]),t._v(" "),_("p",[t._v("返回值: string")]),t._v(" "),_("p",[t._v("说明：返回输入字符串连接后的结果，SEP表示各个字符串间的分隔符")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select concat_ws(',','abc','def','gh');\nabc,def,gh")])]),t._v(" "),_("h4",{attrs:{id:"_5、字符串截取函数-substr-substring"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5、字符串截取函数-substr-substring"}},[t._v("#")]),t._v(" 5、字符串截取函数：substr,substring")]),t._v(" "),_("p",[t._v("语法: substr(string A, int start),substring(string A, int start)")]),t._v(" "),_("p",[t._v("返回值: string")]),t._v(" "),_("p",[t._v("说明：返回字符串A从start位置到结尾的字符串")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select substr('abcde',3); cde\nhive> select substring('abcde',3); cde\nhive>select substr('abcde',-1); e")])]),t._v(" "),_("h4",{attrs:{id:"_6、字符串截取函数-substr-substring"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6、字符串截取函数-substr-substring"}},[t._v("#")]),t._v(" 6、字符串截取函数：substr,substring")]),t._v(" "),_("p",[t._v("语法: substr(string A, int start, int len),substring(string A, intstart, int len)")]),t._v(" "),_("p",[t._v("返回值: string")]),t._v(" "),_("p",[t._v("说明：返回字符串A从start位置开始，长度为len的字符串")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select substr('abcde',3,2); cd\nhive> select substring('abcde',3,2); cd\nhive>select substring('abcde',-2,2); de")])]),t._v(" "),_("h4",{attrs:{id:"_7、-字符串转大写函数-lower-ucase"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7、-字符串转大写函数-lower-ucase"}},[t._v("#")]),t._v(" 7、 字符串转大写函数：lower,ucase")]),t._v(" "),_("p",[t._v("语法: lower(string A) ucase(string A)")]),t._v(" "),_("p",[t._v("返回值: string")]),t._v(" "),_("p",[t._v("说明：返回字符串A的大写格式")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select lower('abSEd'); ABSED\nhive> select ucase('abSEd'); ABSED")])]),t._v(" "),_("h4",{attrs:{id:"_8、字符串转小写函数-lower-lcase"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8、字符串转小写函数-lower-lcase"}},[t._v("#")]),t._v(" 8、字符串转小写函数：lower,lcase")]),t._v(" "),_("p",[t._v("语法: lower(string A) lcase(string A)")]),t._v(" "),_("p",[t._v("返回值: string")]),t._v(" "),_("p",[t._v("说明：返回字符串A的小写格式")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select lower('abSEd'); absed\nhive> select lcase('abSEd'); absed")])]),t._v(" "),_("h4",{attrs:{id:"_9、去空格函数-trim"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9、去空格函数-trim"}},[t._v("#")]),t._v(" 9、去空格函数：trim")]),t._v(" "),_("p",[t._v("语法: trim(string A)")]),t._v(" "),_("p",[t._v("返回值: string")]),t._v(" "),_("p",[t._v("说明:去除字符串两边的空格")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select trim(' abc ');\nabc")])]),t._v(" "),_("h4",{attrs:{id:"_10、-左边去空格函数-ltrim"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10、-左边去空格函数-ltrim"}},[t._v("#")]),t._v(" 10、 左边去空格函数：ltrim")]),t._v(" "),_("p",[t._v("语法: ltrim(string A)")]),t._v(" "),_("p",[t._v("返回值: string")]),t._v(" "),_("p",[t._v("说明：去除字符串左边的空格")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select ltrim(' abc ');\nabc")])]),t._v(" "),_("h4",{attrs:{id:"_11、右边去空格函数-rtrim"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11、右边去空格函数-rtrim"}},[t._v("#")]),t._v(" 11、右边去空格函数：rtrim")]),t._v(" "),_("p",[t._v("语法: rtrim(string A)")]),t._v(" "),_("p",[t._v("返回值: string")]),t._v(" "),_("p",[t._v("说明：去除字符串右边的空格")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select rtrim(' abc ');\nabc")])]),t._v(" "),_("h4",{attrs:{id:"_12、正则表达式替换函数-regexp-replace"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12、正则表达式替换函数-regexp-replace"}},[t._v("#")]),t._v(" 12、正则表达式替换函数：regexp_replace")]),t._v(" "),_("p",[t._v("语法: regexp_replace(string A, string B, string C)")]),t._v(" "),_("p",[t._v("返回值: string")]),t._v(" "),_("p",[t._v("说明：将字符串A中的符合java正则表达式B的部分替换为C。注意，在有些情况下要使用转义字符,类似oracle中的regexp_replace函数。")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select regexp_replace('foobar', 'oo|ar', '');\nfb")])]),t._v(" "),_("h4",{attrs:{id:"_13、url解析函数-parse-url"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13、url解析函数-parse-url"}},[t._v("#")]),t._v(" 13、URL解析函数：parse_url")]),t._v(" "),_("p",[t._v("语法: parse_url(string urlString, string partToExtract [, stringkeyToExtract])")]),t._v(" "),_("p",[t._v("返回值: string")]),t._v(" "),_("p",[t._v("说明：返回URL中指定的部分。partToExtract的有效值为：HOST, PATH, QUERY, REF, PROTOCOL, AUTHORITY, FILE, and USERINFO.")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v('hive> select parse_url("http://facebook.com/path1/p.php?k1=v1&k2=v2#Ref1", "HOST"); facebook.com\nhive> select parse_url("http://facebook.com/path1/p.php?k1=v1&k2=v2#Ref1", "PATH"); /path1/p.php\nhive> select parse_url("http://facebook.com/path1/p.php?k1=v1&k2=v2#Ref1", "QUERY","k1"); v1')])]),t._v(" "),_("h4",{attrs:{id:"_14、分割字符串函数-split"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_14、分割字符串函数-split"}},[t._v("#")]),t._v(" 14、分割字符串函数: split")]),t._v(" "),_("p",[t._v("语法: split(string str, stringpat)")]),t._v(" "),_("p",[t._v("返回值: array")]),t._v(" "),_("p",[t._v("说明:按照pat字符串分割str，会返回分割后的字符串数组")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v('hive> select split(\'abtcdtef\',\'t\');\n["ab","cd","ef"]')])]),t._v(" "),_("h3",{attrs:{id:"三、日期函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、日期函数"}},[t._v("#")]),t._v(" 三、日期函数")]),t._v(" "),_("h4",{attrs:{id:"_1、获取当前unix时间戳函数-unix-timestamp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、获取当前unix时间戳函数-unix-timestamp"}},[t._v("#")]),t._v(" 1、获取当前UNIX时间戳函数:unix_timestamp")]),t._v(" "),_("p",[t._v("语法: unix_timestamp()")]),t._v(" "),_("p",[t._v("返回值: bigint")]),t._v(" "),_("p",[t._v("说明:获得当前时区的UNIX时间戳")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select unix_timestamp();\n1323309615")])]),t._v(" "),_("h4",{attrs:{id:"_2、unix时间戳转日期函数-from-unixtime"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、unix时间戳转日期函数-from-unixtime"}},[t._v("#")]),t._v(" 2、UNIX时间戳转日期函数:from_unixtime")]),t._v(" "),_("p",[t._v("语法: from_unixtime(bigint unixtime[, string format])")]),t._v(" "),_("p",[t._v("返回值: string")]),t._v(" "),_("p",[t._v("说明:转化UNIX时间戳（从1970-01-01 00:00:00 UTC到指定时间的秒数）到当前时区的时间格式")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive>select from_unixtime(1598079966,'yyyy-MM-dd HH:mm:ss');\n2020-08-22 15:06:06")])]),t._v(" "),_("h4",{attrs:{id:"_3、日期转unix时间戳函数-unix-timestamp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、日期转unix时间戳函数-unix-timestamp"}},[t._v("#")]),t._v(" 3、日期转UNIX时间戳函数:unix_timestamp")]),t._v(" "),_("p",[t._v("语法: unix_timestamp(string date)")]),t._v(" "),_("p",[t._v("返回值: bigint")]),t._v(" "),_("p",[t._v('说明:转换格式为"yyyy-MM-ddHH:mm:ss"的日期到UNIX时间戳。如果转化失败，则返回0。')]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select unix_timestamp('2011-12-07 13:01:03');\n1323234063")])]),t._v(" "),_("h4",{attrs:{id:"_4、指定格式日期转unix时间戳函数-unix-timestamp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、指定格式日期转unix时间戳函数-unix-timestamp"}},[t._v("#")]),t._v(" 4、指定格式日期转UNIX时间戳函数:unix_timestamp")]),t._v(" "),_("p",[t._v("语法: unix_timestamp(string date, string pattern)")]),t._v(" "),_("p",[t._v("返回值: bigint")]),t._v(" "),_("p",[t._v("说明:转换pattern格式的日期到UNIX时间戳。如果转化失败，则返回0。")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select unix_timestamp('20111207 13:01:03','yyyyMMddHH:mm:ss');\n1323234063")])]),t._v(" "),_("h4",{attrs:{id:"_5、日期时间转日期函数-to-date"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5、日期时间转日期函数-to-date"}},[t._v("#")]),t._v(" 5、日期时间转日期函数:to_date")]),t._v(" "),_("p",[t._v("语法: to_date(string timestamp)")]),t._v(" "),_("p",[t._v("返回值: string")]),t._v(" "),_("p",[t._v("说明:返回日期时间字段中的日期部分。")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select to_date('2011-12-08 10:03:01');\n2011-12-08")])]),t._v(" "),_("h4",{attrs:{id:"_6、日期转年函数-year"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6、日期转年函数-year"}},[t._v("#")]),t._v(" 6、日期转年函数: year")]),t._v(" "),_("p",[t._v("语法: year(string date)")]),t._v(" "),_("p",[t._v("返回值: int")]),t._v(" "),_("p",[t._v("说明:返回日期中的年。")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select year('2011-12-08 10:03:01'); 2011\nhive> select year('2012-12-08'); 2012")])]),t._v(" "),_("h4",{attrs:{id:"_7、日期转月函数-month"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7、日期转月函数-month"}},[t._v("#")]),t._v(" 7、日期转月函数: month")]),t._v(" "),_("p",[t._v("语法: month (string date)")]),t._v(" "),_("p",[t._v("返回值: int")]),t._v(" "),_("p",[t._v("说明:返回日期中的月份。")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select month('2011-12-08 10:03:01'); 12\nhive> select month('2011-08-08'); 8")])]),t._v(" "),_("h4",{attrs:{id:"_8、日期转天函数-day"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8、日期转天函数-day"}},[t._v("#")]),t._v(" 8、日期转天函数: day")]),t._v(" "),_("p",[t._v("语法: day (string date)")]),t._v(" "),_("p",[t._v("返回值: int")]),t._v(" "),_("p",[t._v("说明:返回日期中的天。")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select day('2011-12-08 10:03:01'); 8\nhive> select day('2011-12-24'); 24")])]),t._v(" "),_("p",[t._v("同样的，还有 hour,minute,second函数，分别是获取小时，分钟和秒，使用方式和以上类似，这里就不再讲述。")]),t._v(" "),_("h4",{attrs:{id:"_9、日期转周函数-weekofyear"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9、日期转周函数-weekofyear"}},[t._v("#")]),t._v(" 9、日期转周函数:weekofyear")]),t._v(" "),_("p",[t._v("语法: weekofyear (string date)")]),t._v(" "),_("p",[t._v("返回值: int")]),t._v(" "),_("p",[t._v("说明:返回日期在当前的周数。")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select weekofyear('2011-12-08 10:03:01');\n49")])]),t._v(" "),_("h4",{attrs:{id:"_10、日期比较函数-datediff"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10、日期比较函数-datediff"}},[t._v("#")]),t._v(" 10、日期比较函数: datediff")]),t._v(" "),_("p",[t._v("语法: datediff(string enddate, string startdate)")]),t._v(" "),_("p",[t._v("返回值: int")]),t._v(" "),_("p",[t._v("说明:返回结束日期减去开始日期的天数。")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select datediff('2012-12-08','2012-05-09');\n213")])]),t._v(" "),_("h4",{attrs:{id:"_11、日期增加函数-date-add"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11、日期增加函数-date-add"}},[t._v("#")]),t._v(" 11、日期增加函数: date_add")]),t._v(" "),_("p",[t._v("语法: date_add(string startdate, int days)")]),t._v(" "),_("p",[t._v("返回值: string")]),t._v(" "),_("p",[t._v("说明:返回开始日期startdate增加days天后的日期。")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select date_add('2012-12-08',10);\n2012-12-18")])]),t._v(" "),_("h4",{attrs:{id:"_12、日期减少函数-date-sub"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12、日期减少函数-date-sub"}},[t._v("#")]),t._v(" 12、日期减少函数: date_sub")]),t._v(" "),_("p",[t._v("语法: date_sub (string startdate, int days)")]),t._v(" "),_("p",[t._v("返回值: string")]),t._v(" "),_("p",[t._v("说明:返回开始日期startdate减少days天后的日期。")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select date_sub('2012-12-08',10);\n2012-11-28")])]),t._v(" "),_("h4",{attrs:{id:"_13、date-format函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13、date-format函数"}},[t._v("#")]),t._v(" 13、date_format函数")]),t._v(" "),_("p",[t._v("语法: date_format(string startdate, string format)")]),t._v(" "),_("p",[t._v("返回值: string")]),t._v(" "),_("p",[t._v("说明:对日期进行格式化")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive>  select date_format('2019-1-1', 'yyyy-MM-dd');\n2019-01-01")])]),t._v(" "),_("h3",{attrs:{id:"四、条件函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、条件函数"}},[t._v("#")]),t._v(" 四、条件函数")]),t._v(" "),_("h4",{attrs:{id:"_1、if函数-if"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、if函数-if"}},[t._v("#")]),t._v(" 1、if函数: if")]),t._v(" "),_("p",[t._v("语法: if(boolean testCondition, T valueTrue, T valueFalseOrNull)")]),t._v(" "),_("p",[t._v("返回值: T")]),t._v(" "),_("p",[t._v("说明: 当条件testCondition为TRUE时，返回valueTrue；否则返回valueFalseOrNull")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select if(1=2,100,200) ; 200\nhive> select if(1=1,100,200) ; 100")])]),t._v(" "),_("h4",{attrs:{id:"_2、条件判断函数-case"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、条件判断函数-case"}},[t._v("#")]),t._v(" 2、条件判断函数：CASE")]),t._v(" "),_("p",[t._v("语法: CASE a WHEN b THEN c [WHEN d THEN e]* [ELSE f] END")]),t._v(" "),_("p",[t._v("返回值: T")]),t._v(" "),_("p",[t._v("说明：如果a等于b，那么返回c；如果a等于d，那么返回e；否则返回f")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select case 100 when 50 then 'tom' when 100 then 'mary'else 'tim' end ; mary\nhive> select case 200 when 50 then 'tom' when 100 then 'mary'else 'tim' end ; tim")])]),t._v(" "),_("h4",{attrs:{id:"_3、条件判断函数-case"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、条件判断函数-case"}},[t._v("#")]),t._v(" 3、条件判断函数：CASE")]),t._v(" "),_("p",[t._v("语法: CASE WHEN a THEN b [WHEN c THEN d]* [ELSE e] END")]),t._v(" "),_("p",[t._v("返回值: T")]),t._v(" "),_("p",[t._v("说明：如果a为TRUE,则返回b；如果c为TRUE，则返回d；否则返回e")]),t._v(" "),_("p",[_("strong",[t._v("举例：")])]),t._v(" "),_("blockquote",[_("p",[t._v("hive> select case when 1=2 then 'tom' when 2=2 then 'mary' else'tim' end ; mary\nhive> select case when 1=1 then 'tom' when 2=2 then 'mary' else'tim' end ; tom\nselect sid  ,case when sscore>=60 then '及格' when sscore<60 then '不及格' else '其他' end  from score")])]),t._v(" "),_("h3",{attrs:{id:"五、转换函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、转换函数"}},[t._v("#")]),t._v(" 五、转换函数")]),t._v(" "),_("p",[_("strong",[t._v("类似于java中的强转转换函数")])]),t._v(" "),_("p",[t._v("公式：cast(表达式 as 数据类型)")]),t._v(" "),_("p",[t._v('cast函数，可以将"20190607"这样类型的时间数据转化成int类型数据。')]),t._v(" "),_("blockquote",[_("p",[t._v("select cast(12.35 as int);\nselect cast('20190607' as int)\nselect cast('2020-12-05' as date);")])]),t._v(" "),_("h3",{attrs:{id:"六、hive的行转列"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六、hive的行转列"}},[t._v("#")]),t._v(" 六、Hive的行转列")]),t._v(" "),_("h4",{attrs:{id:"_1、介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、介绍"}},[t._v("#")]),t._v(" 1、介绍")]),t._v(" "),_("p",[t._v("1）行转列是指多行数据转换为一个列的字段。")]),t._v(" "),_("p",[t._v("2）Hive行转列用到的函数：")]),t._v(" "),_("p",[t._v("concat(str1,str2,...)  --字段或字符串拼接")]),t._v(" "),_("p",[t._v("concat_ws(sep, str1,str2) --以分隔符拼接每个字符串")]),t._v(" "),_("p",[t._v("collect_set(col) --将某字段的值进行去重汇总，产生array类型字段")]),t._v(" "),_("h4",{attrs:{id:"_2、测试数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、测试数据"}},[t._v("#")]),t._v(" 2、测试数据")]),t._v(" "),_("p",[t._v("字段: deptno  ename")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("20  SMITH   \n\n30 ALLEN   \n\n30 WARD    \n\n20  JONES   \n\n30 MARTIN  \n\n30 BLAKE   \n\n10 CLARK   \n\n20  SCOTT   \n\n10 KING    \n\n30  TURNER  \n\n20  ADAMS   \n\n30  JAMES   \n\n20 FORD    \n\n10  MILLER  \n \n")])])]),_("h4",{attrs:{id:"_3、操作步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、操作步骤"}},[t._v("#")]),t._v(" 3、操作步骤")]),t._v(" "),_("p",[t._v("1）建表")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("create table emp(\n \ndeptno int,\n \nename string\n \n) row format delimited fields terminated by '\\t';\n")])])]),_("p",[t._v("2）插入数据")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('load data local inpath "/export/data/hivedatas/emp.txt" into table emp;\n')])])]),_("p",[t._v("3）转换")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('select deptno,concat_ws("|",collect_set(ename)) as ems from emp group by deptno;\n')])])]),_("p",[t._v("行转列，COLLECT_SET(col)：函数只接受基本数据类型，它的主要作用是将某字段的值进行去重汇总，产生array类型字段。")]),t._v(" "),_("p",[t._v("4）结果查看")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/2UHIhrbfNBd43fibQ1C6vib2O8M5edBrT0pfgAJ30slf5D1FnCwQBoevfQEADuH702A2S2iaJg0c53sjO1u7Ge00A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})])])}),[],!1,null,null,null);e.default=v.exports}}]);