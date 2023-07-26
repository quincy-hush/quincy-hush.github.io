(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{329:function(s,a,t){"use strict";t.r(a);var e=t(6),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("在class template/function template 的声明中， 既可以使用class也可以使用typename来对类型T进行表示， 所以他们有什么区别呢？")]),s._v(" "),t("h2",{attrs:{id:"_1-共同点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-共同点"}},[s._v("#")]),s._v(" 1.  共同点")]),s._v(" "),t("p",[s._v("在定义类模板或者函数模板时，typename 和 class 关键字都可以用于指定模板参数中的类型。也就是说，以下两种用法是完全等价的。这在大多数文章中都有提到。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typename")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* class or function declaration */")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* class or function declaration */")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("Stan Lippman曾在其博客中表示，最早 Stroustrup 使用 class 来声明模板参数列表中的类型是为了避免增加不必要的关键字；后来标准委员会认为这样混用可能造成概念上的混淆才加上了 typename 关键字。")]),s._v(" "),t("h2",{attrs:{id:"_2-typename-独有的功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-typename-独有的功能"}},[s._v("#")]),s._v(" 2.   typename 独有的功能")]),s._v(" "),t("p",[s._v("由于 C++ 允许在类内定义类型别名，且其使用方法与通过类型名访问类成员的方法相同。故而，在类定义不可知的时候，编译器无法知晓类似 Type::foo 的写法具体指的是一个类型还是类内成员。这种情况下变量的类型发生了嵌套依赖类型(nested depended name)")]),s._v(" "),t("p",[s._v("在下面的两段代码中，类模板 Bar 的原意是使用类 Foo 实例化，而后引用其中的 bar_type 定义名为 bar 的类内成员。然而，就 T::bar_type 而言，编译器在编译期无法确定它究竟是不是一个类型。此时就需要 typename 关键字来辅助编译器的判断。typename 的作用就是告诉 c++ 编译器，typename 后面的字符串为一个类型名称，而不是成员函数或者成员变量，这个时候如果前面没有 typename，编译器没有任何办法知道 T::LengthType 是一个类型还是一个成员名称(静态数据成员或者静态函数)，所以编译不能够通过。")]),s._v(" "),t("p",[s._v("EXP 1:")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Foo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" bar_type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typename")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Bar")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n T"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("bar_type bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Wrong !")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typename")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("bar_type bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Right !")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("EXP 2：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyArray")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v("：\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" LengthType"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MyMethod")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" T myarr "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typename")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("LengthType LengthType"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    LengthType length "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" myarr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("GetLength"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("这是常规的情形， "),t("code",[s._v("<u>")]),t("strong",[s._v("要注意的是，对于在编译期能够判断类型的场景，例如在上面例子中直接使用 Foo::bar_type 时，使用冗余的 typename 却会报错。")]),t("code",[s._v("</u>")])]),s._v(" "),t("h2",{attrs:{id:"_3-class-独有的功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-class-独有的功能"}},[s._v("#")]),s._v(" "),t("em",[s._v("3. class 独有的功能")])]),s._v(" "),t("p",[s._v("class 关键字最众所周知的功能是声明或定义一个类。这当然是其相对 typename 的一个独有功能。为了完整性，这里也列出。除此之外，在模板的使用中，class 关键字也有其特有的功能。而这是绝大多数文章不会提及的。")]),s._v(" "),t("p",[s._v("C++ 的标准模板库中有名为 std::stack 的容器适配器，它能适配许多容器作为底层，实现栈的功能。其声明为")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typename")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typename")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Containter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("deque"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("T"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("stack")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("因此，在使用中，我们可以使用 std::stack"),t("code",[s._v("<int>")]),s._v(" 来声明一个以 std::deque"),t("code",[s._v("<int>")]),s._v(" 保存整型变量的栈；也可以使用 std::stack<int, std::vector"),t("code",[s._v("<int>")]),s._v(" > 来声明一个以 std::vector"),t("code",[s._v("<int>")]),s._v(" 保存整型变量的栈。")]),s._v(" "),t("p",[t("strong",[s._v("是否有可能以类似 Stack<int, std::vector> 的形式，来达到同样的目的？")])]),s._v(" "),t("p",[s._v("所以我们需要有类似这样的声明：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typename")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typename")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typename")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("allocater"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("E"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Container")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("deque"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Stack")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("由于 Container 必须是一个"),t("strong",[s._v("容器类模板")]),s._v("，所以，如果不适用具体的模板参数实例化，就必须将其声明为一个类模板。故此，Container 之前需要保留标准库中容器类模板的模板参数。注意此处使用了标准库提供的内存分配器。")]),s._v(" "),t("p",[s._v("此处 class 特有的功能，体现在 class Container 之处。"),t("strong",[s._v("此处虽然是在声明 Stack 这个类模板，但是这里的 class 不能替换为 typename")]),s._v("；否则编译器会报错。")]),s._v(" "),t("p",[s._v("不过，在 C++17标准中，这样的情况也允许使用 typename 了。参见"),t("a",{attrs:{href:"http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2014/n4051.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("此处"),t("OutboundLink")],1),s._v("。")])])}),[],!1,null,null,null);a.default=n.exports}}]);