(this["webpackJsonpts-todo-list-practice"]=this["webpackJsonpts-todo-list-practice"]||[]).push([[0],{13:function(t,n,e){"use strict";var o,c=e(5),r=e(7),u=e(2),i=e(3),a=Object(u.createReducer)([],(o={},Object(c.a)(o,i.a,(function(t,n){return t.concat(Object(r.a)(Object(r.a)({},n.payload),{},{done:!1}))})),Object(c.a)(o,i.c,(function(t,n){var e=n.payload;return t.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{done:!t.done}):t}))})),Object(c.a)(o,i.b,(function(t,n){var e=n.payload;return t.filter((function(t){return t.id!==e}))})),o));n.a=a},14:function(t,n){},20:function(t,n,e){},26:function(t,n,e){"use strict";e.r(n);var o=e(0),c=e(8),r=e.n(c),u=(e(20),e(6)),i=e(4),a=e(15),d=e(1);var j=function(t){var n=t.onInsert,e=Object(o.useState)(""),c=Object(a.a)(e,2),r=c[0],u=c[1];return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n(r),u("")},children:[Object(d.jsx)("input",{placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud558\uc138\uc694.",value:r,onChange:function(t){u(t.target.value)}}),Object(d.jsx)("button",{type:"submit",children:"\ub4f1\ub85d"})]})};var s=function(t){var n=t.todo,e=t.onToggle,o=t.onRemove,c={textDecoration:n.done?"line-through":"none"};return Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{onClick:function(){e(n.id)},style:c,children:n.text}),Object(d.jsx)("span",{onClick:function(){o(n.id)},style:{marginLeft:8,color:"red"},children:"(X)"})]})};var f=function(t){var n=t.todos,e=t.onToggle,o=t.onRemove;return 0===n.length?Object(d.jsx)("p",{children:"\ub4f1\ub85d\ub41c \ud56d\ubaa9\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."}):Object(d.jsx)("ul",{children:n.map((function(t){return Object(d.jsx)(s,{todo:t,onToggle:e,onRemove:o},t.id)}))})};var b=function(){var t=Object(u.c)((function(t){return t.todos})),n=Object(u.b)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{onInsert:function(t){n(Object(i.addTodo)(t))}}),Object(d.jsx)(f,{todos:t,onToggle:function(t){n(Object(i.toggleTodo)(t))},onRemove:function(t){n(Object(i.removeTodo)(t))}})]})},O=function(){return Object(d.jsx)(b,{})},l=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,27)).then((function(n){var e=n.getCLS,o=n.getFID,c=n.getFCP,r=n.getLCP,u=n.getTTFB;e(t),o(t),c(t),r(t),u(t)}))},v=e(9),g=e(2),h=Object(g.createAction)("counter/INCREASE")(),p=Object(g.createAction)("counter/DECREASE")(),x=Object(g.createAction)("counter/INCREASE_BY")(),T=Object(g.createReducer)({count:0}).handleAction(h,(function(t){return{count:t.count+1}})).handleAction(p,(function(t){return{count:t.count-1}})).handleAction(x,(function(t,n){return{count:t.count+n.payload}})),m=Object(v.a)({counter:T,todos:i.default}),A=Object(v.b)(m);r.a.render(Object(d.jsx)(u.a,{store:A,children:Object(d.jsx)(O,{})}),document.getElementById("root")),l()},3:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"c",(function(){return r})),e.d(n,"b",(function(){return u})),e.d(n,"d",(function(){return a})),e.d(n,"f",(function(){return d})),e.d(n,"e",(function(){return j}));var o=e(2),c="todos/ADD_TODO",r="todos/TOGGLE_TODO",u="todos/REMOVE_TODO",i=1,a=function(t){return{type:c,payload:{id:i++,text:t}}},d=Object(o.createAction)(r)(),j=Object(o.createAction)(u)()},4:function(t,n,e){"use strict";var o=e(13);e.d(n,"default",(function(){return o.a}));var c=e(3);e.d(n,"addTodo",(function(){return c.d})),e.d(n,"removeTodo",(function(){return c.e})),e.d(n,"toggleTodo",(function(){return c.f}));e(14)}},[[26,1,2]]]);
//# sourceMappingURL=main.c13f41bd.chunk.js.map