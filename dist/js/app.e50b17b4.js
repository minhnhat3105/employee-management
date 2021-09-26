(function(e){function t(t){for(var o,i,n=t[0],s=t[1],c=t[2],u=0,m=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&m.push(l[i][0]),l[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);p&&p(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],o=!0,n=1;n<a.length;n++){var s=a[n];0!==l[s]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var o={},l={app:0},r=[];function i(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=o,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(a,o,function(t){return e[t]}.bind(null,o));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],s=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var p=s;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"27bf":function(e,t,a){},"3a2c":function(e,t,a){"use strict";a("27bf")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("router-view")],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("div",{staticClass:"nav-wrapper green"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[e._v("Employee Manager")]),a("ul",{staticClass:"right"},[e.isLoggedIn?a("li",[a("span",{staticClass:"email black-test"},[e._v(e._s(e.currentUser))])]):e._e(),e.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/"}},[e._v("Dashboard")])],1):e._e(),e.isLoggedIn?e._e():a("li",[a("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),e.isLoggedIn?e._e():a("li",[a("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1),e.isLoggedIn?a("li",[a("button",{staticClass:"btn black",on:{click:e.logout}},[e._v("Log out")])]):e._e()])],1)])])},n=[],s=a("251e"),c=a.n(s),p={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){c.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=c.a.auth().currentUser.email)},methods:{logout:function(){var e=this;c.a.auth().signOut().then((function(){e.$router.go({path:e.$router.path})}))}}},u=p,m=(a("3a2c"),a("2877")),d=Object(m["a"])(u,i,n,!1,null,"5d173217",null),f=d.exports,v={name:"app",components:{Navbar:f}},y=v,h=Object(m["a"])(y,l,r,!1,null,null,null),g=h.exports,b=a("8c4f"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard container"},[a("ul",{staticClass:"collection with-header"},[e._m(0),e._l(e.employees,(function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v(" "+e._s(t.employeeID)+" : "+e._s(t.employeeName)+" "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employeeID}}}},[a("i",{staticClass:"fa fa-eye"})])],1)}))],2),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"collection-header"},[a("h4",[e._v("Employees")])])}],C=(a("159b"),a("aade"),{apiKey:"AIzaSyDWBNtqXCnG-zL-toKdPZ1AnLZDJVp9lg0",authDomain:"vuefs-project-190b1.firebaseapp.com",projectId:"vuefs-project-190b1",storageBucket:"vuefs-project-190b1.appspot.com",messagingSenderId:"89308807617",appId:"1:89308807617:web:fdffbd5a3ae4636fd32f40",measurementId:"G-SHWLEL3WTC"}),D=c.a.initializeApp(C),I=D.firestore(),x={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;I.collection("employees").orderBy("dept").get().then((function(t){t.forEach((function(t){var a={id:t.id,employeeID:t.data().employeeID,employeeName:t.data().employeeName,dept:t.data().dept,role:t.data().role};e.employees.push(a)}))}))}},N=x,E=Object(m["a"])(N,_,w,!1,null,null,null),P=E.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"new-employee"},[a("h3",[e._v("New Employee")]),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.saveEmployee.apply(null,arguments)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeID,expression:"employeeID"}],attrs:{id:"id",type:"text",required:""},domProps:{value:e.employeeID},on:{input:function(t){t.target.composing||(e.employeeID=t.target.value)}}}),a("label",{attrs:{for:"id"}},[e._v("Employee ID#")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeName,expression:"employeeName"}],attrs:{id:"name",type:"text",required:""},domProps:{value:e.employeeName},on:{input:function(t){t.target.composing||(e.employeeName=t.target.value)}}}),a("label",{attrs:{for:"name"}},[e._v("Employee Name")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{id:"dept",type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),a("label",{attrs:{for:"dept"}},[e._v("Department")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"role"}],attrs:{id:"role",type:"text",required:""},domProps:{value:e.role},on:{input:function(t){t.target.composing||(e.role=t.target.value)}}}),a("label",{attrs:{for:"role"}},[e._v("Role")])])]),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v("  "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},$=[],O={name:"new-employee",data:function(){return{employeeID:null,employeeName:null,dept:null,role:null}},methods:{saveEmployee:function(){I.collection("employees").add({employeeID:this.employeeID,employeeName:this.employeeName,dept:this.dept,role:this.role}).then(this.$router.push("/"))}}},j=O,q=Object(m["a"])(j,k,$,!1,null,null,null),L=q.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"view-employee container"},[a("ul",{staticClass:"collection width-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v(e._s(e.employeeName))])]),a("li",{staticClass:"collection-item"},[e._v(" Employee ID#: "+e._s(e.employeeID)+" ")]),a("li",{staticClass:"collection-item"},[e._v(" Department: "+e._s(e.dept)+" ")]),a("li",{staticClass:"collection-item"},[e._v(" Role: "+e._s(e.role)+" ")])]),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),e._v("  "),a("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete")]),"user"==this.role?a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-employee",params:{employee_id:e.employeeID}}}},[a("i",{staticClass:"fas fa-pencil-alt"})])],1):e._e()],1)},S=[],U={name:"view-employee",data:function(){return{employeeID:null,employeeName:null,dept:null,role:null}},beforeRouteEnter:function(e,t,a){I.collection("employees").where("employeeID","==",e.params.employee_id).get().then((function(e){e.forEach((function(e){a((function(t){t.employeeID=e.data().employeeID,t.employeeName=e.data().employeeName,t.dept=e.data().dept,t.role=e.data().role}))}))}))},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;alert("hello"),I.collection("employees").where("employeeID","==",this.$route.params.employee_id).get().then((function(t){t.forEach((function(t){e.employeeID=t.data().employeeID,e.employeeName=t.data().employeeName,e.dept=t.data().dept,e.role=t.data().role}))}))},deleteEmployee:function(){var e=this;confirm("Are you sure?")&&I.collection("employees").where("employeeID","==",this.$route.params.employee_id).get().then((function(t){t.forEach((function(t){t.ref.delete(),e.$router.push("/")}))}))}}},R=U,T=Object(m["a"])(R,A,S,!1,null,null,null),G=T.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit-employee container"},[a("h3",[e._v("Edit Employee")]),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.updateEmployee.apply(null,arguments)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeID,expression:"employeeID"}],attrs:{disabled:"",id:"id",type:"text",required:""},domProps:{value:e.employeeID},on:{input:function(t){t.target.composing||(e.employeeID=t.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeName,expression:"employeeName"}],attrs:{id:"name",type:"text",required:""},domProps:{value:e.employeeName},on:{input:function(t){t.target.composing||(e.employeeName=t.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{id:"dept",type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"role"}],attrs:{id:"role",type:"text",required:""},domProps:{value:e.role},on:{input:function(t){t.target.composing||(e.role=t.target.value)}}})])]),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v("  "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},W=[],B={name:"edit-employee",data:function(){return{employeeID:null,employeeName:null,dept:null,role:null}},beforeRouteEnter:function(e,t,a){I.collection("employees").where("employeeID","==",e.params.employee_id).get().then((function(e){e.forEach((function(e){a((function(t){t.employeeID=e.data().employeeID,t.employeeName=e.data().employeeName,t.dept=e.data().dept,t.role=e.data().role}))}))}))},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;I.collection("employees").where("employeeID","==",this.$route.params.employeeID).get().then((function(t){t.forearch((function(t){e.employeeID=t.data().employeeID,e.employeeName=t.data().employeeName,e.dept=t.data().dept,e.role=t.data().role}))}))},updateEmployee:function(){var e=this;I.collection("employees").where("employeeID","==",this.$route.params.employee_id).get().then((function(t){t.forEach((function(t){t.ref.update({employeeID:e.employeeID,employeeName:e.employeeName,dept:e.dept,role:e.role}).then((function(){e.$router.push({name:"view-employee",params:{employee_id:e.employeeID}})}))}))}))}}},z=B,J=Object(m["a"])(z,M,W,!1,null,null,null),K=J.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel green white-text center"},[a("h3",[e._v("Login")]),a("form",{attrs:{action:"",method:"POST"}},[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",{staticClass:"white-text",attrs:{for:"email"}},[e._v("Email")])]),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("label",{staticClass:"white-text",attrs:{for:"password"}},[e._v("Password")])]),a("button",{staticClass:"btn btn-large grey lighten-4 black-text",attrs:{type:"submit"},on:{click:e.login}},[e._v(" Login ")])])])])])])},H=[],V={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(e){var t=this;c.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(e){alert("You are logged in as ".concat(e.email)),t.$router.go({path:t.$router.path})}),(function(e){alert(e.message)})),e.preventDefault()}}},X=V,Y=Object(m["a"])(X,Z,H,!1,null,null,null),F=Y.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey lighten-4 black-text center"},[a("h3",[e._v("Register")]),a("form",{attrs:{action:"",method:"POST"}},[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("Email")])]),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("label",{attrs:{for:"password"}},[e._v("Password")])]),a("button",{staticClass:"btn btn-large grey lighten-4 black-text",attrs:{type:"submit"},on:{click:e.register}},[e._v(" Register ")])])])])])])},ee=[],te={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(e){var t=this;c.a.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(e){alert("Account created for ".concat(e.email)),t.$router.go({path:t.$router.path})}),(function(e){alert(e.message)})),e.preventDefault()}}},ae=te,oe=Object(m["a"])(ae,Q,ee,!1,null,null,null),le=oe.exports;o["a"].use(b["a"]);var re=new b["a"]({routes:[{path:"/",name:"dashboard",component:P,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:F,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:le,meta:{requiresGuest:!0}},{path:"/new",name:"new-employee",component:L,meta:{requiresAuth:!0}},{path:"/edit/:employee_id",name:"edit-employee",component:K,meta:{requiresAuth:!0}},{path:"/:employee_id",name:"view-employee",component:G,meta:{requiresAuth:!0}}]});re.beforeEach((function(e,t,a){e.matched.some((function(e){return e.meta.requiresAuth}))?c.a.auth().currentUser?a():a({path:"/login",query:{redirect:e.fullPath}}):e.matched.some((function(e){return e.meta.requiresGuest}))&&c.a.auth().currentUser?a({path:"/",query:{redirect:e.fullPath}}):a()}));var ie,ne=re;o["a"].config.productionTip=!1,c.a.auth().onAuthStateChanged((function(){ie||(ie=new o["a"]({router:ne,render:function(e){return e(g)}}).$mount("#app"))}))}});
//# sourceMappingURL=app.e50b17b4.js.map