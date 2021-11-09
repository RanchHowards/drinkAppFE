(this["webpackJsonpdrink-app"]=this["webpackJsonpdrink-app"]||[]).push([[0],{81:function(e,t,n){},83:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t),n.d(t,"typeDefs",(function(){return Te}));var c,a,r,i,s,l,o,j,d,u,b,v,O,h,x,m,p=n(8),f=n(16),g=n(3),y=n(65),k=n.n(y),N=(n(81),n(38)),D=n.n(N),E=n(45),C=n(22),S=n(5),w=n(13),I=(n(83),n(102)),$=n(104),B=n(101),T=(Object(B.a)(c||(c=Object(f.a)(["\n  fragment UserFields on User {\n    username\n    pic\n    id\n  }\n"]))),Object(B.a)(a||(a=Object(f.a)(["\n  fragment EventFields on Event {\n    title\n    eventType\n    eventPic\n    location\n    description\n    max\n    maxGuests\n    eventDate\n    createdAt\n    id\n  }\n"])))),A=Object(B.a)(r||(r=Object(f.a)(["\n  fragment NestedEventFields on Event {\n    title\n    eventType\n    eventPic\n    location\n    attendees {\n      username\n      pic\n      id\n      drink\n    }\n    host {\n      username\n      pic\n      id\n      drink\n    }\n    comments {\n      comment\n      author {\n        username\n        id\n        pic\n      }\n      id\n    }\n    description\n    max\n    maxGuests\n    eventDate\n    createdAt\n    id\n  }\n"]))),L=Object(B.a)(i||(i=Object(f.a)(["\n  query {\n    allEvents {\n      ...NestedEventFields\n    }\n  }\n  ","\n"])),A),P=(Object(B.a)(s||(s=Object(f.a)(["\n  query {\n    allUsers {\n      username\n    }\n  }\n"]))),Object(B.a)(l||(l=Object(f.a)(["\n  mutation addEvent(\n    $title: String!\n    $eventType: String\n    $eventPic: String\n    $location: String\n    $eventDate: Date\n    $description: String\n    $max: Boolean\n    $maxGuests: Int\n  ) {\n    addEvent(\n      title: $title\n      eventType: $eventType\n      eventPic: $eventPic\n      location: $location\n      eventDate: $eventDate\n      description: $description\n      max: $max\n      maxGuests: $maxGuests\n    ) {\n      ...EventFields\n    }\n  }\n  ","\n"])),T)),R=Object(B.a)(o||(o=Object(f.a)(["\n  mutation editEvent(\n    $title: String!\n    $eventType: String\n    $eventPic: String\n    $location: String\n    $eventDate: Date\n    $description: String\n    $max: Boolean\n    $maxGuests: Int\n    $eventId: ID!\n  ) {\n    editEvent(\n      title: $title\n      eventType: $eventType\n      eventPic: $eventPic\n      location: $location\n      eventDate: $eventDate\n      description: $description\n      max: $max\n      maxGuests: $maxGuests\n      eventId: $eventId\n    ) {\n      ...EventFields\n      id\n    }\n  }\n  ","\n"])),T),F=Object(B.a)(j||(j=Object(f.a)(["\n  mutation joinEvent($userId: ID!, $eventId: ID!) {\n    joinEvent(userId: $userId, eventId: $eventId) {\n      title\n      attendees {\n        username\n        id\n      }\n      id\n    }\n  }\n"]))),q=Object(B.a)(d||(d=Object(f.a)(["\n  mutation leaveEvent($userId: ID!, $eventId: ID!) {\n    leaveEvent(userId: $userId, eventId: $eventId) {\n      title\n      attendees {\n        username\n        id\n      }\n      id\n    }\n  }\n"]))),G=Object(B.a)(u||(u=Object(f.a)(["\n  query findEvent($eventId: ID!) {\n    findEvent(eventId: $eventId) {\n      ...NestedEventFields\n    }\n  }\n  ","\n"])),A),Q=Object(B.a)(b||(b=Object(f.a)(["\n  mutation deleteEvent($eventId: ID!) {\n    deleteEvent(eventId: $eventId) {\n      id\n    }\n  }\n"]))),U=Object(B.a)(v||(v=Object(f.a)(["\n  mutation createUser(\n    $username: String!\n    $password: String!\n    $drink: String\n    $pic: String\n  ) {\n    createUser(\n      username: $username\n      password: $password\n      drink: $drink\n      pic: $pic\n    ) {\n      value\n      user {\n        username\n        pic\n        drink\n        id\n        myEvents {\n          ...EventFields\n        }\n      }\n    }\n  }\n  ","\n"])),T),Y=Object(B.a)(O||(O=Object(f.a)(["\n  mutation login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      value\n      user {\n        username\n        id\n        drink\n        pic\n        myEvents {\n          ...EventFields\n          id\n        }\n      }\n    }\n  }\n  ","\n"])),T),M=Object(B.a)(h||(h=Object(f.a)(["\n  query {\n    me {\n      username\n      id\n      drink\n      pic\n      myEvents {\n        ...EventFields\n        id\n      }\n    }\n  }\n  ","\n"])),T),z=Object(B.a)(x||(x=Object(f.a)(["\n  query IsUserLoggedIn {\n    isLoggedIn @client\n  }\n"]))),W=Object(B.a)(m||(m=Object(f.a)(["\n  mutation createComment($eventId: ID!, $comment: String!, $inResponseTo: ID) {\n    createComment(\n      eventId: $eventId\n      comment: $comment\n      inResponseTo: $inResponseTo\n    ) {\n      comment\n      id\n      author {\n        username\n        id\n        pic\n      }\n    }\n  }\n"]))),H=n(10),J=n(0),K=function(e){var t=e.event,n=e.setNotify,c=Object(I.a)(z).data,a=Object(I.a)(M),r=Object($.a)(F,{update:function(e,t){try{var n=t.data.joinEvent,c=e.readQuery({query:L});e.writeQuery({query:L,data:Object(p.a)(Object(p.a)({},c),{},{allEvents:c.allEvents.filter((function(e){return e.id!==n.id?e:n}))})})}catch(a){throw new Error(a.message)}}}),i=Object(S.a)(r,1)[0],s=Object($.a)(q,{update:function(e,t){try{var n=t.data.leaveEvent,c=e.readQuery({query:L});e.writeQuery({query:L,data:Object(p.a)(Object(p.a)({},c),{},{allEvents:c.allEvents.filter((function(e){return e.id!==n.id?e:n}))})})}catch(a){throw new Error(a.message)}}}),l=Object(S.a)(s,1)[0];if(a.loading)return Object(J.jsx)("div",{children:"LOADING"});if(a.error)return Object(J.jsx)("div",{children:a.error.message});var o=a.data.me,j=!t.attendees.every((function(e){return(null===e||void 0===e?void 0:e.id)!==(null===o||void 0===o?void 0:o.id)}));return c.isLoggedIn?(null===o||void 0===o?void 0:o.id)===t.host.id?Object(J.jsx)(H.b,{to:"/editevent/".concat(t.id),children:Object(J.jsx)("button",{className:"button edit-button",children:"Edit"})}):!t.max||t.attendees.length<parseInt(t.maxGuests)?j?Object(J.jsx)("button",{onClick:function(){l({variables:{userId:o.id,eventId:t.id}}),n("you're NO LONGER going to ".concat(t.title),"navbar-error")},className:"button leave-button",children:"LEAVE"}):Object(J.jsx)("button",{onClick:function(){i({variables:{userId:o.id,eventId:t.id}}),n("you're going to ".concat(t.title),"navbar-success")},className:"button join-button",children:"JOIN"}):Object(J.jsx)("button",{disabled:!0,className:"button full-button",children:"FULL"}):null},V=function(e){var t=e.event,n=e.setNotify,c=new Date(t.eventDate);return Object(J.jsxs)("div",{children:[Object(J.jsxs)("div",{className:"event-info-top",children:[Object(J.jsx)(H.b,{to:"/events/".concat(t.id),children:Object(J.jsx)("p",{style:{fontSize:"60px"},children:t.title})}),Object(J.jsx)("img",{src:t.host.pic,alt:"host",className:"event-host-pic"})]}),Object(J.jsx)("img",{src:t.eventPic,alt:"event",className:"event-pic"}),Object(J.jsxs)("div",{className:"event-info-bottom",children:[Object(J.jsx)("div",{children:t.eventType}),Object(J.jsx)("div",{children:t.location}),Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{children:c.toLocaleDateString()}),Object(J.jsx)("div",{style:{textAlign:"center"},children:c.toLocaleTimeString().slice(0,5)})]})]}),Object(J.jsx)(K,{event:t,setNotify:n})]})},X=function(e){var t=e.events,n=e.token,c=e.setNotify;return Object(J.jsx)("div",{children:Object(J.jsx)("ul",{className:"events-container",children:null===t||void 0===t?void 0:t.map((function(e){return Object(J.jsx)("li",{className:"event",children:Object(J.jsx)(V,{event:e,token:n,setNotify:c})},e.id)}))})})},Z=function(e){var t=e.notification;return Object(J.jsx)("div",{className:"navbar",children:Object(J.jsx)("div",{className:t.type,children:t.message})})},_=function(e){var t=e.type,n=e.setType,c=(e.period,e.setPeriod),a=e.drinksArr,r=e.drinks,i=e.setDrinks,s=e.buttonClass,l=e.dateClass,o=e.drinksClass,j=e.checkBoxClass,d=new Date,u=new Date(d.getFullYear(),d.getMonth(),d.getDate()+1),b=Object(g.useState)("all"),v=Object(S.a)(b,2),O=v[0],h=v[1],x=function(e){t.includes(e)?n(t.filter((function(t){return t!==e}))):n(t.concat(e))},m={backgroundColor:"black",color:"whitesmoke"};return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("div",{className:l,children:[Object(J.jsx)("button",{style:"all"===O?m:null,className:"filter-button "+s,value:null,onClick:function(e){var t=e.target;h("all"),c(t.value)},children:"ALL"}),Object(J.jsx)("button",{style:"today"===O?m:null,className:"filter-button "+s,onClick:function(){return h("today"),void c(u)},children:"Today"}),Object(J.jsx)("button",{className:"filter-button "+s,style:"week"===O?m:null,onClick:function(){!function(){var e=new Date(d.getFullYear(),d.getMonth(),d.getDate()+7);h("week"),c(e)}()},children:"This Week"})]}),Object(J.jsxs)("div",{className:j,children:[Object(J.jsxs)("label",{children:[Object(J.jsx)("input",{type:"checkbox",value:"Bar",checked:t.includes("Bar"),onChange:function(){return x("Bar")}}),"Bar"]}),Object(J.jsxs)("label",{children:[Object(J.jsx)("input",{type:"checkbox",value:"BYOB",checked:t.includes("BYOB"),onChange:function(){return x("BYOB")}}),"BYOB"]}),Object(J.jsxs)("label",{children:[Object(J.jsx)("input",{type:"checkbox",checked:t.includes("Club"),value:"Club",onChange:function(){return x("Club")}}),"Club"]})]}),Object(J.jsx)("div",{className:o,children:a.map((function(e){return Object(J.jsxs)("label",{children:[Object(J.jsx)("input",{type:"checkbox",value:e,checked:r.includes(e),onChange:function(e){var t,n=e.target;return t=n.value,void(r.includes(t)?i(r.filter((function(e){return e!==t}))):i(r.concat(t)))}}),e]},e)}))}),Object(J.jsx)("button",{className:"filter-button "+s,onClick:function(){return h("all"),c(null),n([]),void i([])},children:"Reset"})]})},ee=function(e){var t=e.login,n=e.signOut,c=e.token,a=e.notification,r=e.sortName,i=e.setSortName,s=e.type,l=e.setType,o=e.period,j=e.setPeriod,d=e.drinksArr,u=e.drinks,b=e.setDrinks,v=e.showForm,O=e.setShowForm,h=Object(g.useState)(!1),x=Object(S.a)(h,2),m=x[0],p=x[1],f=Object(g.useState)(!1),y=Object(S.a)(f,2),k=y[0],N=y[1],D=Object(g.useState)(""),E=Object(S.a)(D,2),C=E[0],w=E[1],I=Object(g.useState)(""),$=Object(S.a)(I,2),B=$[0],T=$[1],A=function(e){e.stopPropagation(),v?C&&B?(t({variables:{username:C,password:B}}),O(!1),w(""),T("")):O(!1):O(!0)},L=function(){var e=r.concat();e.push(e.shift()),i(e)};return a?Object(J.jsx)(Z,{notification:a}):Object(J.jsxs)("nav",{className:"navbar",children:[Object(J.jsxs)("div",{className:"navbar-container",children:[Object(J.jsx)("div",{onClick:function(){return O(!1)},children:Object(J.jsx)(H.b,{to:"/events",children:Object(J.jsx)("strong",{children:"DrANK"})})}),!c&&Object(J.jsx)("nav",{children:Object(J.jsxs)("ul",{children:[Object(J.jsx)("li",{onClick:A,children:"Sign In"}),Object(J.jsx)(H.b,{to:"/register",children:Object(J.jsx)("li",{onClick:function(){return O(!1)},children:" Sign Up"})})]})}),c&&Object(J.jsx)("nav",{children:Object(J.jsxs)("ul",{className:"nav-events-wrapper",children:[Object(J.jsx)(H.b,{to:"/events",children:Object(J.jsx)("li",{children:"Events"})}),Object(J.jsx)(H.b,{to:"/myevents",children:Object(J.jsx)("li",{children:"My Events"})}),Object(J.jsx)(H.b,{to:"/createevent",children:Object(J.jsx)("li",{children:"Create Event"})}),Object(J.jsx)("li",{onClick:function(){return L()},children:r[0]})]})}),c&&Object(J.jsx)("nav",{children:Object(J.jsx)("ul",{children:Object(J.jsx)("li",{onClick:n,children:"Sign Out"})})})]}),v&&Object(J.jsxs)("form",{className:v?"login-form":null,children:[Object(J.jsx)("div",{children:Object(J.jsx)("input",{value:C,placeholder:"username",onChange:function(e){var t=e.target;return w(t.value)}})}),Object(J.jsx)("div",{children:Object(J.jsx)("input",{value:B,placeholder:"password",onChange:function(e){var t=e.target;return T(t.value)},type:"password"})})]}),Object(J.jsxs)("div",{className:"navbar-collapsed navbar-collapsed-main",children:[Object(J.jsx)("div",{onClick:function(){return O(!1)},children:Object(J.jsx)(H.b,{to:"/events",children:Object(J.jsx)("strong",{children:"DrANK"})})}),!c&&Object(J.jsx)("nav",{children:Object(J.jsxs)("ul",{children:[Object(J.jsx)("li",{onClick:A,children:"Sign In"}),Object(J.jsx)(H.b,{to:"/register",children:Object(J.jsx)("li",{onClick:function(){return O(!1)},children:" Sign Up"})})]})}),c&&Object(J.jsx)("nav",{onClick:function(){N(!1),p(!m)},children:"EXPAND"})]}),m&&Object(J.jsxs)("ul",{className:m?"navbar-collapsed nav-collapsed-wrapper":null,children:[Object(J.jsx)(H.b,{to:"/events",children:Object(J.jsx)("li",{children:"Events"})}),Object(J.jsx)(H.b,{to:"/myevents",children:Object(J.jsx)("li",{children:"My Events"})}),Object(J.jsx)(H.b,{to:"/createevent",children:Object(J.jsx)("li",{children:"Create Event"})}),Object(J.jsx)("li",{onClick:function(){return L()},children:r[0]}),Object(J.jsx)(H.b,{to:"/profile",children:Object(J.jsx)("li",{children:"Profile"})}),Object(J.jsx)("li",{onClick:function(){return N(!k)},children:"Filter"}),Object(J.jsx)("li",{onClick:n,children:"Sign Out"})]}),k&&Object(J.jsxs)("div",{className:k?"navbar-collapsed nav-collapsed-filter":null,children:[Object(J.jsx)(_,{type:s,setType:l,period:o,setPeriod:j,drinksArr:d,drinks:u,setDrinks:b,buttonClass:"collapsed-filter-button",dateClass:"collapsed-filter-dates",checkBoxClass:"collapsed-filter-checkboxes",drinksClass:"collapsed-filter-drinks"}),Object(J.jsx)("button",{className:"collapsed-filter-button",onClick:function(){return N(!1)},children:"Done"})]})]})},te=n(100),ne=n(39),ce=new te.a({typePolicies:{Event:{fields:{attendees:{merge:!1}}},Query:{fields:{isLoggedIn:{read:function(){return ae()}},eventsArr:{read:function(){return re()}},eventsArrFilter:{read:function(){return ie()}},userData:{read:function(){return se()}},type:{read:function(){return le()}}}}}}),ae=Object(ne.c)(!!localStorage.getItem("user-token")),re=Object(ne.c)([]),ie=Object(ne.c)([]),se=Object(ne.c)({}),le=Object(ne.c)([]),oe=function(e){var t=e.addEvent,n=e.history,c=Object(g.useState)(""),a=Object(S.a)(c,2),r=a[0],i=a[1],s=Object(g.useState)("BYOB"),l=Object(S.a)(s,2),o=l[0],j=l[1],d=Object(g.useState)(void 0),u=Object(S.a)(d,2),b=u[0],v=u[1],O=Object(g.useState)(""),h=Object(S.a)(O,2),x=h[0],m=h[1],f=Object(g.useState)(""),y=Object(S.a)(f,2),k=y[0],N=y[1],D=Object(g.useState)(""),E=Object(S.a)(D,2),w=E[0],I=E[1],$=Object(g.useState)(!1),B=Object(S.a)($,2),T=B[0],A=B[1],L=Object(g.useState)(0),P=Object(S.a)(L,2),R=P[0],F=P[1];return Object(J.jsx)("div",{className:"create-event-container",children:Object(J.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=""===w?new Date:w,a={title:r,eventType:o,eventPic:b,location:x,description:k,eventDate:c,max:T,maxGuests:R};t({variables:a}),re([].concat(Object(C.a)(re()),[Object(p.a)(Object(p.a)({},a),{},{host:se(),attendees:[],id:Math.random(),eventPic:a.eventPic?a.eventPic:"https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"})])),i(""),j(""),v(""),m(""),N(""),I(""),F(0),n.push("/events")},className:"event-form",children:[Object(J.jsxs)("div",{className:"radio-buttons",children:[Object(J.jsxs)("label",{children:["BYOB",Object(J.jsx)("input",{value:"BYOB",type:"radio",name:"event type",onChange:function(e){var t=e.target;return j(t.value)}})]}),Object(J.jsxs)("label",{children:["Bar",Object(J.jsx)("input",{value:"Bar",type:"radio",name:"event type",onChange:function(e){var t=e.target;return j(t.value)}})]}),Object(J.jsxs)("label",{children:["Club",Object(J.jsx)("input",{value:"Club",type:"radio",name:"event type",onChange:function(e){var t=e.target;return j(t.value)}})]})]}),Object(J.jsx)("input",{value:r,placeholder:"Title",onChange:function(e){var t=e.target;return i(t.value)}}),Object(J.jsx)("input",{value:b,placeholder:"Pic",onChange:function(e){var t=e.target;return v(t.value)}}),Object(J.jsx)("input",{value:x,placeholder:"Location",onChange:function(e){var t=e.target;return m(t.value)}}),Object(J.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(J.jsxs)("label",{children:["Max?",Object(J.jsx)("input",{type:"checkbox",checked:T,onChange:function(e){var t=e.target;return A(t.checked)}})]}),Object(J.jsx)("input",{style:T?{display:!0}:{display:"none"},value:R,type:"number",min:"0",onChange:function(e){var t=e.target;return F(parseInt(t.value))}})]}),Object(J.jsx)("input",{value:w,type:"datetime-local",onChange:function(e){var t=e.target;return I(t.value)}}),Object(J.jsx)("textarea",{value:k,placeholder:"How's it going to be?",onChange:function(e){var t=e.target;return N(t.value)}}),Object(J.jsx)("button",{className:"button",style:{alignSelf:"center"},type:"submit",children:"add Event"})]})})},je=function(e){var t=e.setShowForm,n=e.showForm;return Object(J.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(J.jsxs)("h1",{children:["\ud83e\udd42 Welcome to ",Object(J.jsx)("strong",{children:"DrANK"})," \ud83c\udf7a"]}),Object(J.jsx)(H.b,{to:"register",children:Object(J.jsx)("button",{className:"button filter-button",children:" Sign Up "})}),Object(J.jsx)("br",{}),Object(J.jsx)("p",{id:"already-drank",onClick:function(){return t(!n)},children:"already dRank?"})]})},de=function(){var e=Object(I.a)(M,{update:function(e,t){try{var n=e.readQuery({query:M});e.writeQuery({query:M,data:Object(p.a)(Object(p.a)({},n),{},{me:[].concat(Object(C.a)(n),[t.data.me])})})}catch(c){throw new Error("trouble in Profile component w/ User Data query")}}}),t=e.loading,n=e.error,c=e.data;return t?Object(J.jsx)("div",{children:"LOADING"}):n?Object(J.jsxs)("div",{children:["ERROR: ",n.message]}):c.me?Object(J.jsxs)("div",{className:"profile",children:[Object(J.jsx)("h3",{children:c.me.username}),Object(J.jsx)("img",{src:c.me.pic,alt:"profile pic",className:"profile-pic"}),Object(J.jsx)("div",{children:c.me.drink})]}):Object(J.jsx)("div",{children:"NO DATA"})},ue=function(e){var t=e.createUser,n=(e.history,e.createResult,Object(g.useState)("")),c=Object(S.a)(n,2),a=c[0],r=c[1],i=Object(g.useState)(""),s=Object(S.a)(i,2),l=s[0],o=s[1],j=Object(g.useState)(""),d=Object(S.a)(j,2),u=d[0],b=d[1],v=Object(g.useState)(""),O=Object(S.a)(v,2),h=O[0],x=O[1];Object(g.useEffect)((function(){r(""),o(""),o(""),o("")}),[]);var m=function(){var e=Object(E.a)(D.a.mark((function e(n){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t({variables:{username:a,password:l,pic:u,drink:h}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(J.jsx)("div",{className:"create-event-container",children:Object(J.jsxs)("form",{className:"registration-form",onSubmit:m,children:[Object(J.jsx)("input",{value:a,placeholder:"username",required:!0,onChange:function(e){var t=e.target;return r(t.value)}}),Object(J.jsx)("input",{value:l,placeholder:"password",onChange:function(e){var t=e.target;return o(t.value)},required:!0,type:"password"}),Object(J.jsx)("input",{value:u,placeholder:"profile pic",onChange:function(e){var t=e.target;return b(t.value)}}),Object(J.jsx)("input",{value:h,placeholder:"drink of choice",required:!0,onChange:function(e){var t=e.target;return x(t.value)}}),Object(J.jsx)("button",{className:"button register-button",type:"submit",children:"Register"})]})})},be=function(e){var t=e.event,n=(e.token,e.userInfo,new Date(t.eventDate)),c=new Date,a=n>=new Date(c.getFullYear(),c.getMonth(),c.getDate());return Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{className:"event-info-top",children:Object(J.jsx)(H.b,{to:"/events/".concat(t.id),children:Object(J.jsx)("p",{style:{fontSize:"100px"},children:t.title})})}),Object(J.jsx)("img",{src:t.eventPic,alt:"event",className:"event-pic"}),Object(J.jsxs)("div",{className:"event-info-bottom",children:[Object(J.jsx)("div",{children:t.eventType}),Object(J.jsx)("div",{children:t.location}),Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{children:n.toLocaleDateString()}),Object(J.jsx)("div",{style:{textAlign:"center"},children:n.toLocaleTimeString().slice(0,5)})]})]}),a&&Object(J.jsx)(H.b,{to:"/editevent/".concat(t.id),children:Object(J.jsx)("button",{className:"edit-button button",children:"EDIT"})})]})},ve=function(e){var t,n=e.token,c=Object(I.a)(M),a=c.data,r=c.loading,i=c.error;if(r)return Object(J.jsx)("div",{children:"LOADING"});if(i)return Object(J.jsxs)("div",{children:["ERROR: ",i]});var s=a.me;return Object(J.jsx)("div",{children:Object(J.jsx)("ul",{className:"events-container",children:null===(t=s.myEvents)||void 0===t?void 0:t.map((function(e){return Object(J.jsx)("li",{className:"event",children:Object(J.jsx)(be,{event:e,token:n,userInfo:s})},"myevent ".concat(e.id))}))})})},Oe=function(e){e.token;var t=e.setNotify,n=Object(w.g)(),c=Object(w.h)().id,a=Object(I.a)(G,{variables:{eventId:c},fetchPolicy:"network-only",onCompleted:function(){O(s.findEvent.title),N(s.findEvent.eventPic),T(s.findEvent.location),p(s.findEvent.eventType),q(s.findEvent.description),V(s.findEvent.max);var e=s.findEvent.eventDate;z("".concat(e.slice(0,4),"-").concat(e.slice(5,7),"-").concat(e.slice(8,10),"T").concat(new Date(e).toLocaleTimeString().slice(0,5))),ee(s.findEvent.maxGuests)}}),r=a.loading,i=a.error,s=a.data,l=Object($.a)(R,{onError:function(e){t(e.message)},refetchQueries:[{query:L}]}),o=Object(S.a)(l,1)[0],j=Object($.a)(Q),d=Object(S.a)(j,1)[0],u=Object(g.useState)(""),b=Object(S.a)(u,2),v=b[0],O=b[1],h=Object(g.useState)(""),x=Object(S.a)(h,2),m=x[0],p=x[1],f=Object(g.useState)(""),y=Object(S.a)(f,2),k=y[0],N=y[1],D=Object(g.useState)(""),E=Object(S.a)(D,2),B=E[0],T=E[1],A=Object(g.useState)(""),P=Object(S.a)(A,2),F=P[0],q=P[1],U=Object(g.useState)(""),Y=Object(S.a)(U,2),M=Y[0],z=Y[1],W=Object(g.useState)(""),H=Object(S.a)(W,2),K=H[0],V=H[1],X=Object(g.useState)(0),Z=Object(S.a)(X,2),_=Z[0],ee=Z[1];if(r)return Object(J.jsx)("div",{children:"LOADING"});if(i)return Object(J.jsx)("div",{children:i});var te=s.findEvent;return Object(J.jsxs)("div",{className:"edit-event-container",children:[Object(J.jsxs)("div",{children:[Object(J.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o({variables:{title:v,eventType:m,eventPic:k,location:B,description:F,eventDate:M,max:K,maxGuests:_,eventId:c}}),O(""),p(""),N(""),T(""),q(""),z(""),V(""),ee(0),n.push("/events")},className:"event-form",children:[Object(J.jsxs)("div",{className:"radio-buttons",children:[Object(J.jsxs)("label",{children:["BYOB",Object(J.jsx)("input",{value:"BYOB",type:"radio",name:"event type",checked:"BYOB"===m,onChange:function(e){var t=e.target;return p(t.value)}})]}),Object(J.jsxs)("label",{children:["Bar",Object(J.jsx)("input",{value:"Bar",type:"radio",name:"event type",checked:"Bar"===m,onChange:function(e){var t=e.target;return p(t.value)}})]}),Object(J.jsxs)("label",{children:["Club",Object(J.jsx)("input",{value:"Club",type:"radio",name:"event type",checked:"Club"===m,onChange:function(e){var t=e.target;return p(t.value)}})]})]}),Object(J.jsx)("input",{value:v,placeholder:"Title",onChange:function(e){var t=e.target;return O(t.value)}}),Object(J.jsx)("input",{value:k,placeholder:"Pic",onChange:function(e){var t=e.target;return N(t.value)}}),Object(J.jsx)("input",{value:B,placeholder:"Location",onChange:function(e){var t=e.target;return T(t.value)}}),Object(J.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(J.jsxs)("label",{children:["Max?",Object(J.jsx)("input",{type:"checkbox",checked:K,onChange:function(e){var t=e.target;return V(t.checked)}})]}),Object(J.jsx)("input",{style:K?{display:"inline-block"}:{display:"none"},value:_,type:"number",min:"0",placeholder:"no limit",onChange:function(e){var t=e.target;ee(parseInt(t.value))}})]}),Object(J.jsx)("input",{value:M,type:"datetime-local",onChange:function(e){var t=e.target;return z(t.value)}}),Object(J.jsx)("textarea",{value:F,placeholder:"How's it going to be?",onChange:function(e){var t=e.target;return q(t.value)}}),Object(J.jsx)("button",{type:"submit",className:"button",style:{alignSelf:"center"},children:"Edit Event"})]}),Object(J.jsx)("button",{className:"button leave-button",style:{alignSelf:"center"},onClick:function(){return function(e){d({variables:{eventId:e}}),ce.evict({id:"Event:".concat(e)}),ce.gc(),re(Object(C.a)(re()).filter((function(t){return t.id!==e}))),n.push("/events")}(c)},children:"DELETE"})]}),Object(J.jsx)("img",{src:te.eventPic,className:"event-pic",alt:"event"})]})},he=function(e){e.setNotify;var t=e.event,n=e.going,c=Object(g.useState)(""),a=Object(S.a)(c,2),r=a[0],i=a[1],s=Object($.a)(W,{update:function(e,n){var c=e.readQuery({query:G,variables:{eventId:t.id}});e.writeQuery({query:G,variables:{eventId:t.id},data:Object(p.a)(Object(p.a)({},c),{},{findEvent:Object(p.a)(Object(p.a)({},c.findEvent),{},{comments:[].concat(Object(C.a)(c.findEvent.comments),[n.data.createComment])})})})}}),l=Object(S.a)(s,1)[0],o=t.comments;return Object(J.jsxs)("div",{children:[n&&Object(J.jsxs)("div",{className:"comment-form",children:[Object(J.jsx)("input",{value:r,placeholder:"comments",onChange:function(e){var t=e.target;return i(t.value)}}),Object(J.jsx)("button",{onClick:function(){r.length>0&&(l({variables:{comment:r,eventId:t.id}}),i(""))},children:"+"})]}),o.length>0&&Object(J.jsx)("ul",{children:o.map((function(e){return Object(J.jsxs)("li",{className:"comment",id:e.id,children:[Object(J.jsx)("img",{className:"comment-pic",alt:"comment-pic",src:e.author.pic}),Object(J.jsx)("p",{children:e.comment})]},e.id)}))})]})},xe=function(e){e.token;var t=e.setNotify,n=Object(w.h)().id,c=Object(I.a)(G,{variables:{eventId:n}}),a=Object(I.a)(M);if(c.loading||a.loading)return Object(J.jsx)("div",{children:"LOADING"});if(c.error||a.error)return Object(J.jsxs)("div",{children:["ERROR"," ",c.error?c.error.message:a.error.message]});var r=c.data.findEvent,i=a.data.me;console.log(new Date(r.eventDate));var s=!r.attendees.every((function(e){return(null===e||void 0===e?void 0:e.id)!==(null===i||void 0===i?void 0:i.id)})),l=new Date(r.eventDate);return Object(J.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(J.jsxs)("div",{className:"event",children:[Object(J.jsx)("div",{className:"event-info-top",children:Object(J.jsx)("p",{style:{fontSize:"100px"},children:r.title})}),Object(J.jsx)("img",{src:r.eventPic,alt:"event",className:"event-pic"}),Object(J.jsxs)("div",{className:"event-info-bottom",children:[Object(J.jsx)("div",{children:r.eventType}),Object(J.jsx)("div",{children:r.location}),Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{children:l.toLocaleDateString()}),Object(J.jsx)("div",{style:{textAlign:"center"},children:l.toLocaleTimeString().slice(0,5)})]})]}),Object(J.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(J.jsx)("div",{className:"event-description",children:r.description})}),Object(J.jsx)(K,{event:r,user:i,setNotify:t,going:s}),Object(J.jsx)(he,{going:s,event:r})]})})},me=function(){var e=Object(w.h)().id,t=Object(g.useState)(null),n=Object(S.a)(t,2),c=n[0],a=n[1],r=Object(I.a)(G,{variables:{eventId:e}});if(r.loading)return Object(J.jsx)("div",{children:"LOADING"});if(r.error)return Object(J.jsx)("div",{children:"ERROR"});var i=r.data.findEvent;return c?Object(J.jsxs)("div",{className:"profile",children:[Object(J.jsx)("h3",{children:c.username}),Object(J.jsx)("img",{src:c.pic,alt:"profile pic",className:"profile-pic"}),Object(J.jsx)("div",{children:c.drink}),Object(J.jsx)("button",{className:"button filter-button",onClick:function(){return a(null)},children:"back"})]}):Object(J.jsx)("div",{children:Object(J.jsxs)("div",{className:"attendees-container",children:["People Going ",i.max&&Object(J.jsxs)("div",{children:["(max ",i.maxGuests,")"]}),Object(J.jsx)("ul",{children:i.attendees.map((function(e){return Object(J.jsx)("li",{children:Object(J.jsx)("img",{onClick:function(){return a(e)},src:e.pic,alt:e.username,className:"attendee-pic"})},e.id)}))})]})})},pe=function(){var e=Object(w.h)().id,t=Object(I.a)(G,{variables:{eventId:e}}),n=Object(I.a)(M);if(t.loading||n.loading)return Object(J.jsx)("div",{children:"LOADING"});if(t.loading||n.loading)return Object(J.jsx)("div",{children:"ERROR"});var c=t.data.findEvent.host;return Object(J.jsxs)("div",{className:"profile",children:[Object(J.jsx)("div",{children:c.id===n.data.me.id?"You're hosting!":"hosted by:"}),Object(J.jsx)("h3",{children:c.username}),Object(J.jsx)("img",{src:c.pic,alt:"profile pic",className:"profile-pic"}),Object(J.jsx)("div",{children:c.drink})]})},fe=function(){return Object(J.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(J.jsx)("h3",{children:"Not sure what you're looking for..."}),Object(J.jsx)("h4",{children:"but it ain't here"}),Object(J.jsx)(H.b,{to:"/events",children:Object(J.jsx)("button",{className:"button filter-button",children:"EXIT"})})]})},ge=n(72),ye=["children","token"],ke=function(e){var t=e.children,n=e.token,c=Object(ge.a)(e,ye);return Object(J.jsx)(w.b,Object(p.a)(Object(p.a)({},c),{},{render:function(){return n?t:Object(J.jsx)(w.a,{to:"/register"})}}))},Ne=n(97),De=function(e,t){switch(t){case"Later":e.sort((function(e,t){return new Date(t.eventDate)-new Date(e.eventDate)}));break;case"Sooner":e.sort((function(e,t){return new Date(e.eventDate)-new Date(t.eventDate)}));break;case"Old":e.sort((function(e,t){return new Date(e.createdAt)-new Date(t.createdAt)}));break;case"New":e.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)}));break;default:e.sort((function(e,t){return new Date(t.eventDate)-new Date(e.eventDate)}))}return e};var Ee,Ce=function(){var e=Object(I.a)(L,{onCompleted:function(e){e.allEvents}}),t=Object(I.a)(M,{onCompleted:function(e){var t=e.me;se(t)}}),n=Object(Ne.a)(),c=Object(w.g)(),a=Object(g.useState)(null),r=Object(S.a)(a,2),i=r[0],s=r[1],l=Object(g.useState)(!1),o=Object(S.a)(l,2),j=o[0],d=o[1],u=Object(g.useState)(null),b=Object(S.a)(u,2),v=b[0],O=b[1],h=Object(g.useState)([]),x=Object(S.a)(h,2),m=x[0],f=x[1],y=Object(g.useState)(null),k=Object(S.a)(y,2),N=k[0],B=k[1],T=Object(g.useState)(null),A=Object(S.a)(T,2),R=A[0],F=A[1],q=Object(g.useState)([]),G=Object(S.a)(q,2),Q=G[0],z=G[1],W=Object(g.useState)(["Sort","New","Old","Sooner","Later"]),H=Object(S.a)(W,2),K=H[0],V=H[1],Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"navbar-error";clearTimeout(R),O({message:e,type:t});var n=setTimeout((function(){return O(null)}),2500);F(n)},te=Object($.a)(U,{onCompleted:function(e){var n=e.createUser;localStorage.setItem("user-token",n.value),s(n.value),ae(!0),c.push("/events"),Z("Welcome to dRank!","navbar-success"),t.refetch(),se(n.user)},update:function(e,t){try{var n=e.readQuery({query:M});e.writeQuery({query:M,data:Object(p.a)(Object(p.a)({},n),{},{me:t.data.createUser.user})})}catch(c){throw new Error("error from App.js trying to write to Cache from createUser",c.message)}},onError:function(e){Z(e.message),console.log("error from createUser mutation in App.js",e)}}),ne=Object(S.a)(te,2),ce=ne[0],re=ne[1],ie=Object($.a)(Y,{onCompleted:function(e){var t=e.login;t&&(localStorage.setItem("user-token",t.value),s(t.value),ae(!0),c.push("/events"),Z("Welcome ".concat(t.user.username,"!"),"navbar-success"),console.log(t.user),se(t.user))},onError:function(e){Z(e.message),console.log("error from LOGIN mutation in App.js",e)},update:function(e,t){try{var n=e.readQuery({query:M});e.writeQuery({query:M,data:Object(p.a)(Object(p.a)({},n),{},{me:t.data.login.user})})}catch(c){throw new Error("error from App.js trying to write to Cache from createUser",c.message)}}}),le=Object(S.a)(ie,2),be=le[0],he=le[1],ge=Object($.a)(P,{refetchQueries:[{query:L}],onError:function(e){Z(e.message),setTimeout((function(){return O(null)}),2e3),console.log(e)},onCompleted:function(e){var t=e.addEvent;Z("".concat(t.title," is happening!"),"navbar-success")},update:function(e,t){var n=e.readQuery({query:M});e.writeQuery({query:M,data:Object(p.a)(Object(p.a)({},n),{},{me:Object(p.a)(Object(p.a)({},n.me),{},{myEvents:[].concat(Object(C.a)(n.me.myEvents),[t.data.addEvent])})})})}}),ye=Object(S.a)(ge,1)[0];Object(g.useEffect)((function(){var e=localStorage.getItem("user-token");e&&s(e)}),[]),Object(g.useEffect)((function(){he.data&&(localStorage.setItem("user-token",he.data.login.value),s(he.data.login.value))}),[he.data]);var Ee=function(){var e=Object(E.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.clear(),s(null),c.push("/"),e.next=5,n.resetStore();case 5:return e.abrupt("return",ae(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(e.error)return Object(J.jsx)("div",{children:"ERROR "});if(e.loading||he.loading)return Object(J.jsx)("div",{children:"LOADING "});var Ce=e.data.allEvents.reduce((function(e,t){return e.includes(t.host.drink)?e:e.concat(t.host.drink)}),[]),Se=function(e,t,n,c,a){var r=t.length?e.filter((function(e){return t.includes(e.eventType)})):e,i=new Date,s=new Date(i.getFullYear(),i.getMonth(),i.getDate()),l=n?r.filter((function(e){return new Date(e.eventDate)>=s})).filter((function(e){return new Date(n)-new Date(e.eventDate)>=0})):r,o=c.length?l.filter((function(e){return c.includes(e.host.drink)})):l,j=Object(C.a)(o);return De(j,a)}(e.data.allEvents,m,N,Q,K[0]);return Object(J.jsxs)("div",{children:[Object(J.jsx)(ee,{login:be,token:i,signOut:Ee,notification:v,sortName:K,setSortName:V,type:m,setType:f,period:N,setPeriod:B,drinksArr:Ce,drinks:Q,setDrinks:z,setShowForm:d,showForm:j}),Object(J.jsxs)("div",{className:"main-container",children:[Object(J.jsx)("div",{className:"main",children:Object(J.jsxs)(w.d,{children:[Object(J.jsx)(ke,{path:"/createevent",token:i,children:Object(J.jsx)(oe,{addEvent:ye,history:c,setNotify:Z})}),Object(J.jsx)(ke,{path:"/editevent/:id",token:i,children:Object(J.jsx)(Oe,{history:c,setNotify:Z})}),Object(J.jsx)(ke,{path:"/myevents",token:i,children:Object(J.jsx)(ve,{})}),Object(J.jsx)(ke,{path:"/events/:id",token:i,children:Object(J.jsx)(xe,{setNotify:Z})}),Object(J.jsx)(w.b,{path:"/register",children:Object(J.jsx)(ue,{createUser:ce,createResult:re,history:c})}),Object(J.jsx)(w.b,{path:"/events",children:Object(J.jsx)(X,{events:Se,setNotify:Z})}),Object(J.jsx)(w.b,{path:"/index",children:Object(J.jsx)(je,{setShowForm:d,showForm:j})}),Object(J.jsx)(w.b,{path:"/drinkAppFE",exact:!0,children:Object(J.jsx)(w.a,{to:"/index"})}),Object(J.jsx)(w.b,{path:"/",exact:!0,children:Object(J.jsx)(w.a,{to:"/index"})}),Object(J.jsx)(w.b,{path:"*",children:Object(J.jsx)(fe,{})})]})}),Object(J.jsx)("aside",{className:"aside aside-1",children:i&&Object(J.jsxs)(w.d,{children:[Object(J.jsx)(w.b,{path:"/events/:id",children:Object(J.jsx)(me,{})}),Object(J.jsx)(w.b,{path:"/events",children:Object(J.jsx)(_,{type:m,setType:f,period:N,setPeriod:B,drinksArr:Ce,drinks:Q,setDrinks:z,buttonClass:"button",dateClass:"filter-dates",checkBoxClass:"filter-checkboxes",drinksClass:"filter-drinks"})})]})}),Object(J.jsx)("aside",{className:"aside aside-2",children:i&&Object(J.jsxs)(w.d,{children:[Object(J.jsx)(w.b,{path:"/events/:id",children:Object(J.jsx)(pe,{})}),Object(J.jsx)(w.b,{path:"/",children:Object(J.jsx)(de,{})})]})})]}),Object(J.jsx)("footer",{className:"footer"})]})},Se=n(71),we=n(99),Ie=n(98),$e=n(70),Be=Object(Se.a)({uri:"https://enigmatic-chamber-69253.herokuapp.com/"}),Te=Object(B.a)(Ee||(Ee=Object(f.a)(["\n  extend type Query {\n    isLoggedIn: Boolean!\n  }\n"]))),Ae=Object($e.a)((function(e,t){var n=t.headers,c=localStorage.getItem("user-token");return{headers:Object(p.a)(Object(p.a)({},n),{},{authorization:c?"bearer ".concat(c):null})}})),Le=new we.a({link:Ae.concat(Be),cache:ce,typeDefs:Te});k.a.render(Object(J.jsx)(Ie.a,{client:Le,children:Object(J.jsx)(H.a,{children:Object(J.jsx)(Ce,{})})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.e7ebe025.chunk.js.map