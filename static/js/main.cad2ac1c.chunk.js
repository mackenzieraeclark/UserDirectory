(this.webpackJsonpuserdirectory=this.webpackJsonpuserdirectory||[]).push([[0],{17:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),s=a(12),u=a(13),i=a(16),o=a(15);a(22);var m=function(){return r.a.createElement("header",null,r.a.createElement("h1",{className:"header1"},"User Directory"),r.a.createElement("h3",{className:"header2"},"Manage your user's information with the directory application. You can search for a user by name:"))};a(23);var d=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",placeholder:"Search by User Name...",id:"search"})))};a(24);var h=function(e){return r.a.createElement("div",{className:"container",id:"userTable"},r.a.createElement("table",null,r.a.createElement("tbody",null,e.tableInputs.map((function(e){return r.a.createElement("tr",{className:"table",key:e.login.uuid},r.a.createElement("td",null,r.a.createElement("img",{className:"",src:e.picture.large,alt:""})),r.a.createElement("td",{class:"align-middle"},"".concat(e.name.first," ").concat(e.name.last)," "),r.a.createElement("td",{class:"align-middle"},e.cell),r.a.createElement("td",{class:"align-middle"},r.a.createElement("a",{href:e.email},e.email)))})))))},f=a(14),p=a.n(f),E=function(){return p.a.get("https://randomuser.me/api/?results=50&nat=us")},g=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={search:"",users:[],filteredUsers:[]},e.handleInputChange=function(t){var a=e.state.users,n=t.target.value,r=a.filter((function(e){return e.name.first.toLowerCase().indexOf(n.toLowerCase())>-1}));e.setState({filteredUsers:r})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;E().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container mx-auto"},r.a.createElement(m,null),r.a.createElement(d,{user:this.state.users,handleInputChange:this.handleInputChange,handleSearch:this.handleSearch}),r.a.createElement(h,{tableInputs:this.state.filteredUsers}))}}]),a}(n.Component);var v=function(){return r.a.createElement(g,null)};a(42);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cad2ac1c.chunk.js.map