(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{346:function(t,a,h){"use strict";h.r(a);var v=h(6),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,h=t._self._c||a;return h("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[h("h2",{attrs:{id:"optimized-c-proven-techniques-for-heightened-performance"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#optimized-c-proven-techniques-for-heightened-performance"}},[t._v("#")]),t._v(" Optimized C++: proven techniques for heightened performance")]),t._v(" "),h("p",[t._v("《C++ 性能优化指南》")]),t._v(" "),h("h2",{attrs:{id:"ch1-基础策略"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#ch1-基础策略"}},[t._v("#")]),t._v(" CH1 基础策略")]),t._v(" "),h("ol",[h("li",[t._v("更好的编译器")]),t._v(" "),h("li",[t._v("更好的算法")]),t._v(" "),h("li",[t._v("更好的库")]),t._v(" "),h("li",[t._v("减少内存分配和赋值")]),t._v(" "),h("li",[t._v("减少计算密集部分")]),t._v(" "),h("li",[t._v("更好的数据结构")]),t._v(" "),h("li",[t._v("并发和并行处理;")]),t._v(" "),h("li",[t._v("优化内存管理(更好的内存管理库)")])]),t._v(" "),h("h2",{attrs:{id:"ch2-影响计算机性能的行为"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#ch2-影响计算机性能的行为"}},[t._v("#")]),t._v(" Ch2 影响计算机性能的行为")]),t._v(" "),h("ol",[h("li",[t._v("内存访问的代价是非常大的")]),t._v(" "),h("li",[t._v("cache miss")]),t._v(" "),h("li",[t._v("pipeline stall导致cycle被浪费")]),t._v(" "),h("li",[t._v("线程切换, 同步的锁的开销,是非常大的;")]),t._v(" "),h("li",[t._v("系统调用是昂贵的")]),t._v(" "),h("li",[t._v("非对其的字节访问, 开销会很大, 会带来page threading 的效果;")]),t._v(" "),h("li",[t._v("计算比分支判断的速度要快;")]),t._v(" "),h("li",[t._v("所有的语句并非都是顺序执行.\\")]),t._v(" "),h("li",[t._v("也不是所有指令的开销都是一样的, 每个指令所需要的cycle数量应该是不同的;")])]),t._v(" "),h("h2",{attrs:{id:"ch3-性能测量"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#ch3-性能测量"}},[t._v("#")]),t._v(" Ch3 性能测量")]),t._v(" "),h("ol",[h("li",[t._v("时间测量(timer)是非常必要的")]),t._v(" "),h("li",[t._v("CPU硬件profile测量也是有必要的")]),t._v(" "),h("li",[t._v("使用profiler工具 找出热点代码")]),t._v(" "),h("li",[t._v("90-10, 80-20方法")]),t._v(" "),h("li",[t._v("性能优化其实是一种实验")]),t._v(" "),h("li",[t._v("算法更优不代表其执行速度就会更快, 因为要考虑到实现时候的效率")]),t._v(" "),h("li",[t._v("要有baseline, 要有实验记录, 要有随手记实验数据的习惯;")]),t._v(" "),h("li",[t._v("测量延时, 测量吞吐, 测量batch")]),t._v(" "),h("li",[t._v("linux上面, 如何进行profile, 原理是什么, 如何进行时间测量, 怎么样测量才会比较精确")]),t._v(" "),h("li",[t._v("设置一些matrices, 根据这些指标来指导性能优化;")]),t._v(" "),h("li",[t._v("profile很重要")])]),t._v(" "),h("h2",{attrs:{id:"ch4-字符串优化"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#ch4-字符串优化"}},[t._v("#")]),t._v(" Ch4 字符串优化")]),t._v(" "),h("h2",{attrs:{id:"ch5-算法优化"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#ch5-算法优化"}},[t._v("#")]),t._v(" Ch5 算法优化")]),t._v(" "),h("h2",{attrs:{id:"ch6-动态分配内存的变量优化"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#ch6-动态分配内存的变量优化"}},[t._v("#")]),t._v(" ch6 动态分配内存的变量优化")]),t._v(" "),h("h2",{attrs:{id:"ch7-热点语句的优化"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#ch7-热点语句的优化"}},[t._v("#")]),t._v(" ch7 热点语句的优化")]),t._v(" "),h("h2",{attrs:{id:"ch8-使用更好的库"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#ch8-使用更好的库"}},[t._v("#")]),t._v(" ch8 使用更好的库")]),t._v(" "),h("h2",{attrs:{id:"ch9-优化查找和排序"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#ch9-优化查找和排序"}},[t._v("#")]),t._v(" ch9 优化查找和排序")]),t._v(" "),h("h2",{attrs:{id:"ch10-优化数据结构"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#ch10-优化数据结构"}},[t._v("#")]),t._v(" ch10 优化数据结构")]),t._v(" "),h("h2",{attrs:{id:"ch11-优化io"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#ch11-优化io"}},[t._v("#")]),t._v(" ch11 优化IO")]),t._v(" "),h("h2",{attrs:{id:"ch12-优化并发"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#ch12-优化并发"}},[t._v("#")]),t._v(" ch12 优化并发")]),t._v(" "),h("h2",{attrs:{id:"ch13-优化内存管理"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#ch13-优化内存管理"}},[t._v("#")]),t._v(" ch13 优化内存管理")])])}),[],!1,null,null,null);a.default=r.exports}}]);