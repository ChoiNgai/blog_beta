(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{507:function(e,a,i){"use strict";i.r(a);var l=i(30),p=Object(l.a)({},(function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h2",{attrs:{id:"抖音数仓面经"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#抖音数仓面经"}},[e._v("#")]),e._v(" 抖音数仓面经")]),e._v(" "),i("p",[e._v("自我介绍")]),e._v(" "),i("p",[e._v("爱奇艺的组是做什么的")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("优化问题：为什么50m左右你不用map join？")]),e._v(" "),i("p",[e._v("map join也试过但是还是很慢，stage卡在0%，default 的map.smallfile.size=25m,所以没有改(这个答案他并不满意)")])]),e._v(" "),i("li",[i("p",[e._v("你是通过什么判断哪个stage有数据倾斜？hive和spark web UI 哪些metrics？\n看task的duration，gc time，还有综合的25%，50%，75%，max处理的数据量，shuffle write/read的数据量\nhive看日志，看explain的执行计划")])]),e._v(" "),i("li",[i("p",[e._v("讲一下shuffle read和write分别是在做什么？\n对应的是map reduce里的 map端spill到local disk和reduce端拉取partition里的结果\n从shuffle是什么，然后shuffle的过程，包括read和write的parition数量的关系几个方面来回答")])]),e._v(" "),i("li",[i("p",[e._v("你刚刚提到了map端会排序，为什么要排序？为什么就给reduce端减压了？")])]),e._v(" "),i("li",[i("p",[e._v("map端输出的文件组织形式是什么样的？key-value pair")])]),e._v(" "),i("li",[i("p",[e._v("map端排序有没有利用到索引，他是怎么工作的，为什么要索引？\n往mysql里的index的方向去思考。所有的索引原理和目的都是类似的。利于reducer更快的寻址")])]),e._v(" "),i("li",[i("p",[e._v("Map端排序对索引的构建有什么好处？这里还需要去看")])]),e._v(" "),i("li",[i("p",[e._v("环形缓冲区有没有了解过，它溢写到disk会导致什么结果？磁盘i/o开销大")])]),e._v(" "),i("li",[i("p",[e._v("为什么要给环形缓冲区设置一个threshold？这个比例会有什么影响？\n比例调高容易oom， 从yarn分配资源的角度来说，node manager会一直监控资源的使用情况，超过这个比例就会kill掉或者aboritng job，还要再去具体看看，面试官说我能说出来得益于实践，这里可以延伸问yarn的工作方式\n比例太低，就会产生太多小文件，在parition中多个小的spill file需要合并成大文件\n但其实这个答案虽然面试官满意但是其实不太对。我说的是shuffle过程中reduce 端的memory，这个只和map端有关，应该是防止堵塞要等到后台线程写磁盘结束")])]),e._v(" "),i("li",[i("p",[e._v("有哪些操作会引起shuffle？\ngroup by，join，order by，count distinct\nbyKey的操作,join的操作")])]),e._v(" "),i("li",[i("p",[e._v("你觉得spark中 reduce by key 和group by key有什么区别？\n一个返回一个值，一个返回一个列表")])]),e._v(" "),i("li",[i("p",[e._v("哪个性能更好？")]),e._v(" "),i("p",[e._v("reduce by key更好因为值返回一个值，而返回一个列表的话会占空间 shuffle write的数据量会变大")])]),e._v(" "),i("li",[i("p",[e._v("heap这个数据结构是怎么样的，heap的插入是怎么样的？")])]),e._v(" "),i("li",[i("p",[e._v("为什么用数组来implement heap？")])]),e._v(" "),i("li",[i("p",[e._v("heapify的时间复杂度？")]),e._v(" "),i("p",[e._v("是o(n)我说对了，但是最好能吧两种构建方法的区别说出来 因为的确也存在nlogn的方法\n最大堆最小堆的插入时间复杂度？logn")])]),e._v(" "),i("li",[i("p",[e._v("讲一下LRU是什么？")])]),e._v(" "),i("li",[i("p",[e._v("为什么会发生page replacement？")])]),e._v(" "),i("li",[i("p",[e._v("为什么要有page？")]),e._v(" "),i("p",[e._v("我从cpu<-memory<-disk获取数据的角度来说的 主要是寻址和io开销大，Paging is used for faster access to data")])]),e._v(" "),i("li",[i("p",[e._v("为什么要有vm？")]),e._v(" "),i("p",[e._v("The main advantage of virtual memory is that an OS can load programs larger than its physical memory.\n我回答的是提供给程序和用户可见的更多的资源，也是一层与底层physical memory的隔离")])]),e._v(" "),i("li",[i("p",[e._v("最后leetcode一道（LRU）")])])])])}),[],!1,null,null,null);a.default=p.exports}}]);