(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n,c=s(10),r=s.n(c),a=s(2),o=s(3),i=s(5),l=s(4),u=s(1),d=s.n(u),h=(s(16),s(17),s(6)),j=s.n(h),p=s(7),f=s(9),b=s.n(f),m=function(e){return fetch("".concat("https://mate.academy/students-api/").concat(e)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))},v=(s(19),s(0));!function(e){e.all="all",e.active="active",e.completed="completed"}(n||(n={}));var O,y=function(e){var t=e.renderStatus,s=e.query;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("label",{htmlFor:"searchByTitle",children:["Search by title:",Object(v.jsx)("input",{className:"filter__input",type:"text",value:s,id:"searchByTitle",onChange:function(t){var s=t.target.value;t.preventDefault(),e.searchByTitle(s)}})]}),Object(v.jsxs)("label",{htmlFor:"searchByStatus",children:["Search by status:",Object(v.jsxs)("select",{className:"filter__input",name:"searchByStatus",id:"searchByStatus",value:t,onChange:function(t){t.preventDefault();var s=t.target.value;e.changeShowStatus(s)},children:[Object(v.jsx)("option",{value:"all",children:"All"}),Object(v.jsx)("option",{value:"active",children:"Active"}),Object(v.jsx)("option",{value:"completed",children:"Completed"})]})]})]})},x=function(e){return Object(v.jsx)("button",{className:"button",type:"button",onClick:function(t){t.preventDefault(),function(){for(var t,s=0,n=e.todos,c=n.length-1;c>0;c-=1)t=n[s=Math.floor(Math.random()*(c+1))],n[s]=n[c],n[c]=t;e.setShuffleTodos(n)}()},children:"Randomize"})};s(21);!function(e){e.all="all",e.active="active",e.completed="completed"}(O||(O={}));var _=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={todos:[],query:"",renderStatus:O.all},e.filteredTodos=function(){var t=e.state,s=t.query;return t.todos.filter((function(e){return e.title&&e.title.includes(s)}))},e.searchByTitle=function(t){e.setState({query:t})},e.changeShowStatus=function(t){e.setState({renderStatus:t})},e.showTodosByStatus=function(){switch(e.state.renderStatus){case O.active:return e.filteredTodos().filter((function(e){return!e.completed}));case O.completed:return e.filteredTodos().filter((function(e){return e.completed}));case O.all:default:return e.filteredTodos()}},e.setShuffleTodos=function(t){e.setState({todos:t})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.showTodosByStatus()}},{key:"loadData",value:function(){var e=Object(p.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("todos");case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,s=t.query,n=t.renderStatus,c=t.todos,r=this.props.selectedUserId;return Object(v.jsxs)("div",{className:"TodoList",children:[Object(v.jsx)("h2",{children:"Todos:"}),Object(v.jsxs)("div",{className:"TodoList__controls",children:[Object(v.jsx)(y,{changeShowStatus:this.changeShowStatus,searchByTitle:this.searchByTitle,renderStatus:n,query:s}),Object(v.jsx)(x,{setShuffleTodos:this.setShuffleTodos,todos:c})]}),Object(v.jsx)("div",{className:"TodoList__list-container",children:Object(v.jsx)("ul",{className:"TodoList__list",children:this.showTodosByStatus().map((function(t){return Object(v.jsxs)("li",{className:b()("TodoList__item",{"TodoList__item--unchecked":!t.completed,"TodoList__item--checked":t.completed}),children:[Object(v.jsxs)("label",{children:[Object(v.jsx)("input",{type:"checkbox",checked:t.completed,readOnly:!0}),Object(v.jsx)("p",{children:t.title})]}),Object(v.jsx)("button",{className:b()("TodoList__user-button","button",{"TodoList__user-button--selected":t.userId===r}),type:"button",onClick:function(s){s.preventDefault(),e.props.chooseUser(t.userId)},children:"User #".concat(t.userId)})]},t.id)}))})})]})}}]),s}(d.a.Component),S=s(11),U=(s(22),function(){return Object(v.jsx)("div",{className:"Loader",children:Object(v.jsx)("div",{className:"Loader__content"})})}),T=(s(23),function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={id:0,name:"",email:"",phone:""},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"componentDidUpdate",value:function(e){e.selectedUserId!==this.props.selectedUserId&&this.loadUser()}},{key:"loadUser",value:function(){var e=Object(p.a)(j.a.mark((function e(){var t,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.selectedUserId,this.setState({id:0}),e.next=4,m("users/".concat(t));case 4:s=e.sent,this.setState(Object(S.a)({},s));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,s=t.id,n=t.name,c=t.phone,r=t.email;return 0===s?Object(v.jsx)(U,{}):Object(v.jsxs)("div",{className:"CurrentUser",children:[Object(v.jsx)("h2",{className:"CurrentUser__title",children:Object(v.jsx)("span",{children:"Selected user: ".concat(s)})}),Object(v.jsx)("h3",{className:"CurrentUser__name",children:n}),Object(v.jsx)("p",{className:"CurrentUser__email",children:r}),Object(v.jsx)("p",{className:"CurrentUser__phone",children:c}),Object(v.jsx)("button",{type:"button",className:"button CurrentUser__button",onClick:function(){e.props.chooseUser(0)},children:"Clear"})]})}}]),s}(d.a.Component)),N=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={selectedUserId:0},e.chooseUser=function(t){e.reset(),e.setState({selectedUserId:t})},e.reset=function(){e.setState({selectedUserId:0})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this.state.selectedUserId;return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("div",{className:"App__sidebar",children:Object(v.jsx)(_,{chooseUser:this.chooseUser,selectedUserId:e})}),Object(v.jsx)("div",{className:"App__content",children:Object(v.jsx)("div",{className:"App__content-container",children:e?Object(v.jsx)(T,{selectedUserId:e,chooseUser:this.chooseUser}):"No user selected"})})]})}}]),s}(d.a.Component);r.a.render(Object(v.jsx)(N,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.748cac1b.chunk.js.map