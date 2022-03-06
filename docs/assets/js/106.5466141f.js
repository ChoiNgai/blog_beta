(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{524:function(v,_,a){"use strict";a.r(_);var t=a(30),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"广告技术-腾讯广告大数据平台核心架构设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#广告技术-腾讯广告大数据平台核心架构设计"}},[v._v("#")]),v._v(" 广告技术：腾讯广告大数据平台核心架构设计")]),v._v(" "),a("blockquote",[a("p",[v._v("转载自"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/1bVUOnKgpC5mjCvCz4TLdg",target:"_blank",rel:"noopener noreferrer"}},[v._v("广告大数据平台核心架构设计"),a("OutboundLink")],1),v._v("，侵删")]),v._v(" "),a("p",[v._v("本篇文章讲解了腾讯广告大数据的整体架构，讲解了具体细分的模块以及多年的更新迭代，个人觉得对大数据领域的广告业务很有参考价值，故转载。")])]),v._v(" "),a("p",[v._v("腾讯广告平台产品部大数据平台承担着腾讯视频、腾讯新闻客户端、腾讯网、腾讯体育、QQ音乐等腾讯系媒体和部分外部媒体的广告数据的接入、处理和应用。在过去的几年中，伴随着广告业务的快速发展，大数据平台架构也经历了一系列的升级。本文将从广告数据接入、处理、应用三个层面剖析大数据平台的核心架构设计，重点分享百亿级广告日志数据的接入架构设计（云落地系统）、广告数据  session 化实现（ logjoin 系统)、PB 级数据的 OLAP 查询 Lambda 架构设计。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122145919366.png",alt:"图1. 大数据平台整体架构"}})]),v._v(" "),a("h2",{attrs:{id:"_1-数据接入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据接入"}},[v._v("#")]),v._v(" "),a("strong",[v._v("1 数据接入")])]),v._v(" "),a("hr"),v._v(" "),a("p",[v._v("大数据平台接入的数据主要包括3个大类：业务维度数据、媒体流量数据、广告流量数据，如图2所示。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122145950146.png",alt:"图2. 数据接入架构"}})]),v._v(" "),a("h3",{attrs:{id:"_1-1-业务维度数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-业务维度数据"}},[v._v("#")]),v._v(" "),a("strong",[v._v("1.1 业务维度数据")])]),v._v(" "),a("hr"),v._v(" "),a("p",[v._v("业务维度数据主要包括广告客户数据、广告下单数据、广告排期数据、广告位数据，这些数据原生位于广告投放体系中的其他业务系统如CRM系统、Order系统、Planning系统。大数据平台使用3种方式获取这种维度数据：")]),v._v(" "),a("p",[v._v("1）业务提供数据接口，平台主动拉")]),v._v(" "),a("p",[v._v("2）业务提供表schema/IP/端口，平台编写业务逻辑SQL，主动拉取")]),v._v(" "),a("p",[v._v("3）平台提供接口，业务主动调用接口上传")]),v._v(" "),a("h3",{attrs:{id:"_1-2-媒体流量数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-媒体流量数据"}},[v._v("#")]),v._v(" "),a("strong",[v._v("1.2 媒体流量数据")])]),v._v(" "),a("hr"),v._v(" "),a("p",[v._v("媒体流量数据来源于媒体，主要包括腾讯视频播放数据、腾讯新闻浏览数据，这些媒体数据通过腾讯公司级数据仓库TDW出库到大数据平台侧的Hadoop集群。媒体流量数据主要有两大类用途：")]),v._v(" "),a("p",[v._v("1）结合媒体数据分析广告的投放效果和售卖效果")]),v._v(" "),a("p",[v._v("2）ETL清洗后为算法服务提供原始特征数据")]),v._v(" "),a("h3",{attrs:{id:"_1-3-广告流量数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-广告流量数据"}},[v._v("#")]),v._v(" "),a("strong",[v._v("1.3 广告流量数据")])]),v._v(" "),a("hr"),v._v(" "),a("p",[v._v("广告流量数据包括广告的检索、曝光、点击数据，是整个大数据平台自有的核心数据。鉴于腾讯视频、腾讯新闻客户端、腾讯网等媒体的巨大流量（日均百亿级广告PV、峰值QPS40万），如何采集和传输这海量广告日志数据成为大数据平台首先需要面对的挑战，这个挑战主要体现在以下3个方面：")]),v._v(" "),a("p",[v._v("1）数据总量大、峰值压力高")]),v._v(" "),a("p",[v._v("2）数据的可靠性、实时性要求极高")]),v._v(" "),a("p",[v._v("3）业务数据种类繁多且业务变化快")]),v._v(" "),a("p",[v._v("因此，一个良好的数据采集传输系统需要具备下述特性：")]),v._v(" "),a("p",[v._v("1）高可靠性和高可扩展性，完善的容错和负载均衡机制，可水平扩展的处理能力；")]),v._v(" "),a("p",[v._v("2）支持离线分析系统和实时计算系统；")]),v._v(" "),a("p",[v._v("3）能够灵活快速响应业务需求，实现数据字段新增、修改。")]),v._v(" "),a("p",[v._v("大数据平台2016年前的广告流量数据接入架构如图3-1所示。在这套广告流量数据接入架构中，广告流量数据落地功能是和业务server耦合的，共同部署在接入层server上，通过本地的各配置文件生成多个落地器，在单机上实现数据分拣（分拣：不同流量来源的数据落地到不同的目的路径），并按照配置的字段挑选数据。落地数据定时批量从server磁盘上传HDFS集群。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150022801.png",alt:"图3 - 1. 广告流量数据接入架构（就）"}})]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150047975.png",alt:"图3 - 2. 广告流量数据接入架构（新）"}})]),v._v(" "),a("p",[v._v("这个广告流量数据接入架构的主要缺陷在于：")]),v._v(" "),a("p",[v._v("1）通过白名单式的配置挑选落地字段，没有完整请求数据，没有可恢复的数据现场")]),v._v(" "),a("p",[v._v("2）和业务server重度耦合，每条数据都要串行遍历所有落地器处理，性能较差")]),v._v(" "),a("p",[v._v("3）配置修改比较复杂，在业务较多的服务，如点击服务器，修改配置的复杂度不低于修改代码，易出错")]),v._v(" "),a("p",[v._v("4）业务变化涉及众多服务器升级，运维工作量大，一致性难保证。")]),v._v(" "),a("p",[v._v("为了解决这个广告流量数据接入架构存在的上述问题，大数据平台对此架构进行了重构升级，搭建了新一代广告流量数据接入系统——云落地。云落地系统的设计目标是建成广告效果数据总线以实现数据集中接入、秒级实时处理、下游业务各取所需、业务变更不停数据流。")]),v._v(" "),a("p",[v._v("云落地系统主要由Storm、TDBank(腾讯自研的分布式消息队列)、Hadoop等分布式系统组件构建，总体架构采用分层结构，如图4所示。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150113763.png",alt:"图4. 云落地系统架构"}})]),v._v(" "),a("p",[v._v("业务服务器包含云落地系统所对接的各种业务日志服务器。发送Agent包含收集业务日志数据并进行转发的Sender。传输层使用TDBank，接收Agent发送的日志数据。核心分拣层包含2个分拣引擎：实时分拣引擎以及作为容错机制的离线分拣引擎。实时分拣在Storm Topology中实现。离线分拣使用Hadoop MapReduce实现。当实时分拣数据流出现问题时，可用离线分拣进行数据分拣，依然能保证数据完整性。存储层是HDFS分布式文件系统以及TDBank，其中HDFS存储支持下游离线数据应用，TDBank存储支持下游实时计算系统。云落地系统整体数据流如图5所示。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150142550.png",alt:"图5. 云落地系统整体数据流"}})]),v._v(" "),a("p",[v._v("云落地目前接入了腾讯网，腾讯视频，腾讯新闻客户端，微信/手Q新闻插件等业务，已覆盖所有广平数据业务。日均接收原始请求数百亿级，峰值QPS 40W/S。平均处理延迟7.5s。云落地系统将服务和数据解耦，提高了业务响应能力；配置中心化，一个业务，只需要维护一个配置，数据一致性得到保障；Hadoop和Storm结合保证了数据接入和传输的高可靠性和高可扩展性；云落地系统强化数据总线概念，所有的数据都从云分拣“入”，所有的数据需求都从云分拣“出”。")]),v._v(" "),a("h2",{attrs:{id:"_2-数据处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据处理"}},[v._v("#")]),v._v(" "),a("strong",[v._v("2 数据处理")])]),v._v(" "),a("h3",{attrs:{id:"_2-1-业务维度表构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-业务维度表构建"}},[v._v("#")]),v._v(" "),a("strong",[v._v("2.1 业务维度表构建")])]),v._v(" "),a("hr"),v._v(" "),a("p",[v._v("针对上文中提到的业务维度数据，数据处理流程做的主要工作是生成一系列的维度表，这一系列的维度表将被用于数据建模时维度的扩展。例如对于广告下单数据，数据平台会生成以订单号oid为key的维度表，该维度表中还包括如客户ID，广告排期等其他订单号相关的属性。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150204557.png",alt:"图6. 维度表Schema设计"}})]),v._v(" "),a("p",[v._v("一个维度表最终的物理存储形式为HDFS上的一个文件，大数据平台目前维护着数百份维度表，这些维度表的更新周期包括按天、按小时等等。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150226743.png",alt:"图7. 维度表物理存储"}})]),v._v(" "),a("h3",{attrs:{id:"_2-2-媒体流量数据etl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-媒体流量数据etl"}},[v._v("#")]),v._v(" "),a("strong",[v._v("2.2 媒体流量数据ETL")])]),v._v(" "),a("hr"),v._v(" "),a("p",[v._v("媒体流量数据通过TDW由媒体侧出库到大数据平台侧的Hadoop集群，之后数据平台将进行必要的数据清洗和转换以构建数据模型。")]),v._v(" "),a("h3",{attrs:{id:"_2-3-广告流量数据etl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-广告流量数据etl"}},[v._v("#")]),v._v(" "),a("strong",[v._v("2.3 广告流量数据ETL")])]),v._v(" "),a("hr"),v._v(" "),a("p",[v._v("对于通过云落地系统接入的广告流量数据，ETL流程通过清洗、关联和转换以实现数据的一致性、完整性、标准化。数据平台2017年前的ETL流程和业界通用的ETL流程类似，通过离线的Map/Reduce程序对广告日志进行清洗、关联和转换,清洗程序包括小时级的和天级的，清洗程序的调度通过TDW LZ平台实现，如图8所示。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150249741.png",alt:"图8. ETL清洗任务"}})]),v._v(" "),a("p",[v._v("这种离线数据ETL方式主要存在以下问题：")]),v._v(" "),a("p",[v._v("1）数据时效性差:")]),v._v(" "),a("p",[v._v("采用离线清洗,不能给下游实时统计提供实时流量，下游统计分析仅支持到T+1（1表示小时或者天，绝大部分数据为天）")]),v._v(" "),a("p",[v._v("2）离线清洗计算引擎落后:")]),v._v(" "),a("p",[v._v("离线清洗基于Hadoop MapReduce, 一方面计算中间结果需要存放到hdfs中，效率较低，另一方面支持的算子仅有Map和Reduce，表达能力欠缺，需要手工写很多代码，较难维护。")]),v._v(" "),a("p",[v._v("针对以上不足，大数据平台在2017年对数据ETL系统进行了重构升级，升级后的ETL系统架构如图9所示。新的ETL系统由两大部分组成，实时ETL和离线ETL。")]),v._v(" "),a("p",[v._v("1）实时ETL: 基于实时LogJoin(下文会介绍)的输出，构建实时清洗，为下游实时业务提供基础数据。")]),v._v(" "),a("p",[v._v("2）离线ETL: 清洗计算引擎升级为spark，提升处理速度。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150312441.png",alt:"图9. 实时ETL架构图"}})]),v._v(" "),a("p",[v._v("实时ETL分事实数据生成维度数据Join两个主模块。事实数据生成模块主要负责数据过滤，转换，格式化处理，生成事实表模型；维度数据Join模块负责根据不同的实时业务需求，关联不同的维度数据。实时ETL生成的数据将被用于实时查询引擎实时数据的查询以及算法需要的实时特征数据。")]),v._v(" "),a("h3",{attrs:{id:"_2-4-广告数据session化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-广告数据session化"}},[v._v("#")]),v._v(" "),a("strong",[v._v("2.4 广告数据Session化")])]),v._v(" "),a("hr"),v._v(" "),a("p",[v._v("广告数据session化，即构建从用户产生一个广告请求到曝光以及最终产生点击的session级数据模型，实时logjoin就是用来实现广告数据session化的系统。广告检索日志、曝光日志、点击日志三路数据将通过实时logjoin模块进行整合，曝光、点击数据只需携带关键信息，其他信息由检索数据填充。目前广告曝光点击等效果日志关联是离线任务方式执行，延迟至少2个小时，通过实时logjoin可以有效服务算法实时CTR。LogJoin整体架构图如图10所示。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150334025.png",alt:"图10. 实时LogJoin架构"}})]),v._v(" "),a("p",[v._v("LogJoin项目主要意义：")]),v._v(" "),a("p",[v._v("1）提升数据一致性。以发布测数据为准，曝光、点击、动作数据都向发布数据靠，保证数据一条线的一致性；")]),v._v(" "),a("p",[v._v("2）提升数据完整性。减少大字段导致的http截断等用户侧上报场景下的问题；")]),v._v(" "),a("p",[v._v("3）提升数据时效性。基于Storm做流式logjoin，秒级完成数据ETL。可供实时CTR预估，在线学习等，提升广告收益，并为海象等下游业务提速打下基础；")]),v._v(" "),a("p",[v._v("4）精简曝光点击请求上报，节省用户流量；")]),v._v(" "),a("p",[v._v("5）解耦SDK和数据采集，提升新需求的响应速度；")]),v._v(" "),a("p",[v._v("6）基础数据底层schema重构优化，对各种业务不同格式数据建立统一底层数据模型，降低系统复杂度；")]),v._v(" "),a("p",[v._v("7）实时补全日志，纬度信息更加丰富，可支持实时多维分析。")]),v._v(" "),a("h3",{attrs:{id:"核心业务逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心业务逻辑"}},[v._v("#")]),v._v(" "),a("strong",[v._v("核心业务逻辑")])]),v._v(" "),a("p",[v._v("LogJoin的核心业务逻辑是将用户产生的一个广告从请求到曝光以及最终产生点击的完整日志数据Join到一起，LogJoin通过将一个广告的请求、曝光、点击写到Hbase的同一行中的Column Family并通过不同的qualifier来标识请求、曝光、点击来实现Join的功能,如图11所示。LogJoin中数据的实时清洗以及读写HBase的操作都是在JStorm中完成。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150359628.png",alt:"图11. 实时LogJoin业务逻辑"}})]),v._v(" "),a("p",[v._v("在HBase里一次广告检索对应后续的所有曝光和点击日志都保存在同一个RowKey对应的行，三种日志放在不同的列里，如图12所示。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150438918.png",alt:"图12. 实时LogJoin HBase设计"}})]),v._v(" "),a("p",[v._v("HBase设计中包含一个Family，其他数据包括")]),v._v(" "),a("p",[v._v("qualifier[common]  #检索日志中所有订单共享的信息，单列")]),v._v(" "),a("p",[v._v("qualifier[q_soid]   #检索日志中选中订单相关信息，每个soid占1列")]),v._v(" "),a("p",[v._v("qualifier[v_soid]   #曝光日志，每个曝光（soid）单独1列")]),v._v(" "),a("p",[v._v("qualifier[c_soid]   #点击日志，每个点击（soid）单独1列")]),v._v(" "),a("p",[v._v("LogJoin遇到的一个挑战是同一个用户的一次完整的广告session所产生的请求、曝光、点击数据是乱序上报的。对于用户的一次完整广告，理论上是按照先有请求，接着是曝光，最后是点击的顺序上报，但现实环境中，由于请求、曝光、点击日志数据在不同的服务器上产生，每台服务器的负载不同导致数据上报的速度不一致，这就造成LogJoin的JStorm程序会乱序接收到请求、曝光、点击数据，如图13所示。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150506771.png",alt:"图13. 检索曝光点击乱序上报"}})]),v._v(" "),a("p",[v._v("针对这种现象，LogJoin采用HBase行级锁并以CheckAndPut方式写入来保证数据的原子性。")]),v._v(" "),a("h3",{attrs:{id:"logjoin-jstorm核心设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logjoin-jstorm核心设计"}},[v._v("#")]),v._v(" "),a("strong",[v._v("LogJoin JStorm核心设计")])]),v._v(" "),a("p",[v._v("LogJoin的核心处理逻辑在JStorm中实现，核心设计如图14所示，设计要点：")]),v._v(" "),a("p",[v._v("1）流量隔离：按流量分为检索，曝光，点击等Spout，方便task数调整。")]),v._v(" "),a("p",[v._v("2）多线程&批处理：提升并发度，减少网络IO，提升吞吐量batch_num设为50，性能提升5倍。")]),v._v(" "),a("p",[v._v("3）多级重试队列：提升点击join的时效性")]),v._v(" "),a("p",[v._v("4）在线升级：落地字段增减，分拣规则调整等在线升级")]),v._v(" "),a("p",[v._v("5）优雅重启：发送停止消费命令，先停止tube消费，再停止应用。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150532231.png",alt:"图14. LogJoin JStorm核心设计"}})]),v._v(" "),a("h3",{attrs:{id:"logjoin-hbase核心设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logjoin-hbase核心设计"}},[v._v("#")]),v._v(" "),a("strong",[v._v("LogJoin HBase核心设计")])]),v._v(" "),a("p",[v._v("LogJoin中HBase设计要点是保证高吞吐与稳定性。HBase高吞吐与稳定性的保证主要通过RowKey的合理设计来防热点。LogJoin中HBase的RowKey长度设计固定为16字节，包括1字节前缀、2字节时间、13字节request_id，如图15所示：")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150615727.png",alt:"图15. Rowkey设计"}})]),v._v(" "),a("p",[v._v("唯一键为广告投放体系生成的的request_id，request_id的生成规则如下：")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150644744.png",alt:"图16. request_id设计"}})]),v._v(" "),a("p",[v._v("离线数据统计分析发现request_id不够散列，容易造成访问热点，需要增加散列前缀，因此RowKey中增加了1个字节长度的前缀，前缀计算方法为:")]),v._v(" "),a("p",[v._v("(byte)Math.abs(hashCode(request_id)%256)")]),v._v(" "),a("p",[v._v("RowKey中增加2字节的时间是为了实现基于时间局部性的IO优化。分析数据发现98%以上的Join动作可以在1分钟内完成，具有很强的时间相关性，BlockCache读缓存命中率低导致频繁访问HFile，造成IO利用率过高。对此的改进思路是尽可能的把相同时间的记录写到HFile中相邻的数据块(HBlock),从而提升 BlockCache缓存命中率。因此在RowKey中增加了时间信息，两个字节(小时,分钟)。效果是单机IO利用率从50%下降到20%以下。")]),v._v(" "),a("p",[v._v("针对HBase，LogJoin还做了一系列的优化，这些优化包括：预分区，避免region split带来集群访问毛刺;BlockCache优化提升读效率;启用压缩算法:节省存储空间;MajorCompaction优化: 禁用，夜间流量低时，定时手工触发。")]),v._v(" "),a("p",[v._v("截止目前，LogJoin系统运行指标：")]),v._v(" "),a("p",[v._v("1）高吞吐：日均接入60亿检索，16亿曝光，峰值QPS 20w/s")]),v._v(" "),a("p",[v._v("2）低延迟：数据秒级延迟，延迟（处理时间-数据时间）超过30s的比例<0.16%, 超过60s的比例<0.11%")]),v._v(" "),a("p",[v._v("3）Join成功率高：曝光join检索的成功率>99.4%;点击join曝光和检索的成功率>99%")]),v._v(" "),a("p",[v._v("4）业务效果: 实时CTR预估提升2%；点击过滤系统中可以将点击关联到的曝光、检索相关的信息作为过滤依据。")]),v._v(" "),a("h2",{attrs:{id:"_3-数据服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据服务"}},[v._v("#")]),v._v(" "),a("strong",[v._v("3 数据服务")])]),v._v(" "),a("hr"),v._v(" "),a("p",[v._v("数据平台的数据服务可以分成在线数据服务和离线数据服务两大类。在线数据服务包括为实时CTR预估提供数据的LogJoin数据流、实时播控、点击过滤、计费，如图17所示。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150717487.png",alt:"图17. 在线数据服务"}})]),v._v(" "),a("p",[v._v("离线数据服务主要包括广告效果分析平台(Measurement)、广告运营分析平台(灯塔)以及自助查询OLAP系统 (盖亚 & Walrus)、各个业务系统所需的广告执行数据的推送服务(涉及公司20+个部分，100+团队)。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150744034.png",alt:"图18. 离线数据服务"}})]),v._v(" "),a("h3",{attrs:{id:"_3-1-数据建模"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-数据建模"}},[v._v("#")]),v._v(" "),a("strong",[v._v("3.1 数据建模")])]),v._v(" "),a("hr"),v._v(" "),a("p",[v._v("离线数据服务的核心是数据的建模以及基于建模的异构数据的OLAP查询。")]),v._v(" "),a("p",[v._v("数据建模的目标是基于业务视角，将原始的广告日志数据转化成业务所需的数据模型以便于业务侧的高效查询，这个过程中做的主要工作是维度的聚合、指标的计算。数据平台的数据模型包括实时模型和离线模型两个部分。")]),v._v(" "),a("p",[v._v("实时模型通过接入实时ETL的结果数据利用Spark-streaming或Storm进行窗口聚合提供40+维度的广告曝光点击数据的实时查询(数据延迟在分钟级)。")]),v._v(" "),a("p",[v._v("离线模型主要通过Spark或Hadoop任务基于任务DAG生成数据模型，数据平台现有模型21个，每个模型可查询维度40~250个，时间跨度为最近2年。")]),v._v(" "),a("h3",{attrs:{id:"_3-2-数据查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-数据查询"}},[v._v("#")]),v._v(" "),a("strong",[v._v("3.2 数据查询")])]),v._v(" "),a("hr"),v._v(" "),a("p",[v._v("数据平台的数据查询服务主要包括两大类：")]),v._v(" "),a("p",[v._v("1）通用型的多维聚合类查询，如库存计算、频次计算")]),v._v(" "),a("p",[v._v("2）广告明细提取，人群包提取")]),v._v(" "),a("p",[v._v("数据查询的挑战在于：")]),v._v(" "),a("p",[v._v("1）数据量大（PB级别）、纬度多（单表200+纬）")]),v._v(" "),a("p",[v._v("2）查询时间跨度大、聚合纬度多")]),v._v(" "),a("p",[v._v("3）数据准确性高（不允许非精确值）")]),v._v(" "),a("p",[v._v("4）查询性能要求高")]),v._v(" "),a("p",[v._v("随着业务的不停增长，数据平台的查询引擎从也进行了一系列的升级")]),v._v(" "),a("p",[v._v("1）第1代：以开源Infobright为基础的查询引擎")]),v._v(" "),a("p",[v._v("2）第2代：以PIG为主要计算引擎的查询引擎(查询耗时小时级)")]),v._v(" "),a("p",[v._v("3）第3代：Rocket AdHoc查询引擎(查询耗时秒级)")]),v._v(" "),a("p",[v._v("4）第4代：当前的lambda架构查询引擎。")]),v._v(" "),a("h4",{attrs:{id:"第1代查询引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第1代查询引擎"}},[v._v("#")]),v._v(" "),a("strong",[v._v("第1代查询引擎")])]),v._v(" "),a("p",[v._v("Infobright是开源的MySQL数据仓库解决方案，它将列存储、高强度的数据压缩、优化的统计计算引入到了MySQL中，对于处理亿级规模以下的数据具有较好的性能，但无法支持百亿级、千亿级数据的查询。随着业务的发展，数据平台需要查询的数据规模达到了万亿级，Infobright因为其有限的吞吐量已不能满足业务需求。")]),v._v(" "),a("h4",{attrs:{id:"第2代查询引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第2代查询引擎"}},[v._v("#")]),v._v(" "),a("strong",[v._v("第2代查询引擎")])]),v._v(" "),a("p",[v._v("为了处理万亿级规模的数据，Pig被引入到了查询引擎中。Pig本质上是Map Reduce ON HDFS，由Yahoo在2006年开始开发，在2010成为Apache顶级项目。Pig是MapReduce的一个抽象，它提供了一种称为Pig Latin的高级语言来编写数据处理脚本。所有这些脚本都在Pig内部的Pig Engine组件转换为Map和Reduce任务。")]),v._v(" "),a("p",[v._v("Pig提供了丰富的运算符集如join，sort，filer等来操作数据;Pig内部也会对Pig脚本进行优化，开发人员只需要关注语言的语义而不需要过度关注底层Map Reduce实现;Pig提供UDF(用户定义函数)的功能,开发人员可以通过其他编程语言（如Java、Python）创建UDF的功能，并且可以调用或嵌入到Pig脚本中。")]),v._v(" "),a("p",[v._v("和其他基于Map Reduce的批处理工具类似，基于Pig的数据处理也是典型的IO密集型计算，其效率相对低下。对于例行化的批处理任务，Pig由于其支持大吞吐量的特性是一个不错的选择，但对于面向用户的查询引擎，Pig效率的低下(用户查询耗时在小时级)，越来越不能满足业务需求。")]),v._v(" "),a("h4",{attrs:{id:"第3代查询引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第3代查询引擎"}},[v._v("#")]),v._v(" "),a("strong",[v._v("第3代查询引擎")])]),v._v(" "),a("p",[v._v("为了解决基于Pig的查询引擎查询性能低下的缺陷，Rocket查询引擎应运而生，其架构如图19所示。Rocket查询引擎是SparkSQL和Paruqet存储格式的结合。数据平台查询引擎的业务特点是计算多个维度聚合下的指标，计算引擎的查询压力集中在reduce端，极易发生数据倾和大规模shuffle的触发。因此Rocket采用了大宽表结构的数据模型。通过合理的数据预处理和Parquet列式存储的选择，Rocket查询引擎将用户查询的时间开销降低到了秒级。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150805588.png",alt:"图19. Rocket查询引擎架构图"}})]),v._v(" "),a("p",[v._v("Rocket查询引擎的数据预处理包括：")]),v._v(" "),a("p",[v._v("1）大宽表构建：预先join所有常用维度;")]),v._v(" "),a("p",[v._v("2）String转Int：更高的数据压缩比、更好的查询性能；")]),v._v(" "),a("p",[v._v("3）行转列：高效数据压缩。")]),v._v(" "),a("p",[v._v("Rocket查询引擎的数据组织：")]),v._v(" "),a("p",[v._v("1）多分区方式：按全量、年、月分区，各分区独立schema、独立中间表。")]),v._v(" "),a("p",[v._v("2）多版本管理：读写分离")]),v._v(" "),a("p",[v._v("3）视图模型：多模型联合查询")]),v._v(" "),a("p",[v._v("4）广播模型： 小表预先broadcast")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150831504.png",alt:"图20. Rocket查询引擎数据组织方式"}})]),v._v(" "),a("h4",{attrs:{id:"第4代查询引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第4代查询引擎"}},[v._v("#")]),v._v(" "),a("strong",[v._v("第4代查询引擎")])]),v._v(" "),a("p",[v._v("数据平台当前的查询引擎采用了lambda架构的经典设计，相比于之前3代查询引擎只支持离线数据的查询，当前lambda架构引入了实时数据的查询。")]),v._v(" "),a("p",[v._v("Lambda 架构由Storm的作者NathanMarz提出，其设计目的在于提供一个能满足大数据系统关键特性的架构，包括高容错、低延迟、可扩展等。其整合离线计算与实时计算，融合不可变性、读写分离和复杂性隔离等原则，可集成Hadoop, Kafka, Spark，Storm等各类大数据组件。Lambda 架构可分解为三层Layer，即Batch Layer, Real-Time(Speed) Layer和ServingLayer。其中Batch Layer用于离线数据的处理和查询，Speed Layer用于实时数据的处理和查询，Serving Layer用于合并离线数据的查询结果和实时数据的查询结果作为最终的数据结果集。")]),v._v(" "),a("p",[v._v("当前查询引擎lambda架构如图21所示，该设计架构支持万级别数据的查询能力，支持任意纬度的聚合、明细提取，95%的任务查询时间开销在秒级。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ChoiNgai/ImageServer/img/image-20211122150900580.png",alt:"图21. 查询引擎Lambda 架构设计"}})]),v._v(" "),a("p",[v._v("在接口层，当前架构支持两种类型的接口，包括HTTP接口和类SQL查询，{模型名，时间范围，筛选条件，聚合维度，指标} 五元素定义一个查询。在视图层，当前架构屏蔽了底层异构计算引擎；屏蔽模型中实体表与维度表的关联关系，对外以大宽表形式，降低使用门槛。在计算层，当前架构整体构建在spark on yarn之上。")]),v._v(" "),a("p",[v._v("当前查询引擎的运营指标数据：")]),v._v(" "),a("p",[v._v("1)当前对外开放查询数据总量：1.5P")]),v._v(" "),a("p",[v._v("2)当前对方开放查询数据维度：250+")]),v._v(" "),a("p",[v._v("3)日均查询读取数据量：500T")]),v._v(" "),a("p",[v._v("4)近半年数据推送及查询涉及团队：28个部门、112个团队")]),v._v(" "),a("p",[v._v("5)曝光收入类查询中位数耗时15s")]),v._v(" "),a("p",[v._v("本文从数据接入、数据处理、数据应用三个层面剖析了大数据平台的架构设计，鉴于篇幅的限制，本文无法对数据平台中的每一个模块进行细致而全面的介绍，之后我们将通过开辟新的文章的方式对上文中提到的核心系统进行全面的分享。除了上文中提到的应用和服务之外，数据平台还负责着统一缓存服务(提供用户的基础属性等的查询)、TencentAdId服务、Poseidon海量标签检索服务等相对独立的数据服务，后面我们也将对此进行分享。")])])}),[],!1,null,null,null);_.default=e.exports}}]);