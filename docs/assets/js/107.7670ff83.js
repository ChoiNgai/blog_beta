(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{500:function(v,_,t){"use strict";t.r(_);var a=t(30),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"数据仓库定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据仓库定义"}},[v._v("#")]),v._v(" 数据仓库定义")]),v._v(" "),t("p",[v._v("数据仓库，按照传统的定义，数据仓库是一个面向主题的、集成的、持久的（非易失的）、反映历史变化（随时间变化），用来支持管理人员决策的数据集合。")]),v._v(" "),t("p",[v._v("通俗讲，企业希望能够更快得处理比较多的数据，数据仓库由此诞生。 就像是企业的财务系统。各个部门（面向主题）的财务账单定期（随时间变化）向上汇报，由财务负责人员（你）整理后（集成的）纳入档案（持久的）。不同的是数据仓库里存的是实实在在的数据，数据量大得多也复杂得多。")]),v._v(" "),t("h3",{attrs:{id:"面向主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面向主题"}},[v._v("#")]),v._v(" 面向主题")]),v._v(" "),t("p",[v._v("操作型数据库的数据组织面向事务处理任务，各个业务系统之间各自分离，而数据仓库中的数据是按照一定的主题域进行组织。")]),v._v(" "),t("p",[v._v("主题是一个抽象的概念，是数据归类的标准，是指用户使用数据仓库进行决策时所关心的重点方面，一个主题通常与多个操作型信息系统相关。每一个主题基本对应一个宏观的分析领域。")]),v._v(" "),t("p",[v._v("例如，我们公司数据仓库的主题："),t("strong",[v._v("用户")])]),v._v(" "),t("blockquote",[t("p",[v._v("用户数据来源：从pc端登录、移动端登录、微信小程序端登录等几个不同端的业务系统数据库中抽取的数据整理而成。这些用户信息有可能是一致的，也可能是不一致的，这些信息需要统一整合才能完整体现用户。")])]),v._v(" "),t("h3",{attrs:{id:"集成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集成"}},[v._v("#")]),v._v(" 集成")]),v._v(" "),t("p",[v._v("面向事务处理的操作型数据库通常与某些特定的应用相关，数据库之间相互独立，并且往往是异构的。而数据仓库中的数据是在对原有分散的数据库数据抽取、清理的基础上经过系统加工、汇总和整理得到的，必须消除源数据中的不一致性，以保证数据仓库内的信息是关于整个企业的一致的全局信息。")]),v._v(" "),t("p",[v._v("具体如下：")]),v._v(" "),t("ol",[t("li",[v._v("数据进入数据仓库后、使用之前，必须经过加工与集成。")]),v._v(" "),t("li",[v._v("对不同的数据源进行统一数据结构和编码。统一原始数据中的不一致之处，如字段的同名异义，异名同义，单位不统一，字长不一致等。")]),v._v(" "),t("li",[v._v("将原始数据结构做一个从面向应用到面向主题的大转变。")])]),v._v(" "),t("h3",{attrs:{id:"持久的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持久的"}},[v._v("#")]),v._v(" 持久的")]),v._v(" "),t("p",[v._v("操作型数据库中的数据通常实时更新，数据根据需要及时发生变化。数据仓库的数据主要供企业决策分析之用，所涉及的数据操作主要是数据查询，一旦某个数据进入数据仓库以后，一般情况下将被长期保留，也就是数据仓库中一般有大量的查询操作，但修改和删除操作很少，通常只需要定期的加载、刷新。")]),v._v(" "),t("p",[v._v("数据仓库中包括了大量的历史数据。")]),v._v(" "),t("p",[v._v("数据经集成进入数据仓库后是极少或根本不更新的。Hadoop的hdfs设计理念也是如此，不建议手动删改，完美契合。")]),v._v(" "),t("h3",{attrs:{id:"反映历史变化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反映历史变化"}},[v._v("#")]),v._v(" 反映历史变化")]),v._v(" "),t("p",[v._v("操作型数据库主要关心当前某一个时间段内的数据，而数据仓库中的数据通常包含历史信息，系统记录了企业从过去某一时点（如开始应用数据仓库的时点）到目前的各个阶段的信息，通过这些信息，可以对企业的发展历程和未来趋势做出定量分析和预测。")]),v._v(" "),t("p",[v._v("企业数据仓库的建设，是以现有企业业务系统和大量业务数据的积累为基础。数据仓库不是静态的概念，只有把信息及时交给需要这些信息的使用者，供他们做出改善其业务经营的决策，信息才能发挥作用，信息才有意义。而把信息加以整理归纳和重组，并及时提供给相应的管理决策人员，是数据仓库的根本任务。因此，从产业界的角度看，数据仓库建设是一个工程，是一个过程。")]),v._v(" "),t("p",[v._v("数据仓库内的数据时限一般在5-10年以上，甚至永不删除，这些数据的键码都包含时间项，标明数据的历史时期，方便做时间趋势分析，或者溯源。")]),v._v(" "),t("p",[v._v("当下在我们公司，充值订单类数据是永久保存的，登录数据保存五年，埋点数据一年左右，因为过了时效性也就没有可分析价值了。")]),v._v(" "),t("p",[t("strong",[v._v("总结讲，数据仓库，即为企业数据的模型沉淀，为了能更快的发展大数据应用，提供可靠的模型来快速迭代。")])])])}),[],!1,null,null,null);_.default=s.exports}}]);