(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{293:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1sZFn",dialogsItems:"Dialogs_dialogsItems__1l6QA",active:"Dialogs_active__2wVrz",messages:"Dialogs_messages__2GuPo",message:"Dialogs_message__172Ui"}},298:function(e,a,t){"use strict";t.r(a);var n=t(129),s=t(0),i=t.n(s),l=t(293),m=t.n(l),o=t(12),c=function(e){var a="/dialogs/"+e.id;return i.a.createElement("div",{className:m.a.dialog+" "+m.a.active},i.a.createElement(o.b,{to:a},e.name))},r=function(e){return i.a.createElement("div",{className:m.a.message},e.message)},g=t(64),d=t(84),u=t(87),E=t(130),f=t(65),p=Object(d.a)(10),v=Object(E.a)({form:"dialogAddMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(u.a,{type:"textarea",component:f.a,validate:[d.b,p],placeholder:"messageText",name:"onDiaChange"})),i.a.createElement("div",null,i.a.createElement("button",null,"add Dia")))})),_=function(e){var a=e.dialogPage,t=a.dialogs.map((function(e){return i.a.createElement(c,{name:e.name,key:e.id})})),n=a.messages.map((function(e){return i.a.createElement(r,{message:e.message,key:e.id})}));if(!e.isAuth)return i.a.createElement(g.a,{to:"/login"});return i.a.createElement("div",{className:m.a.dialogs},i.a.createElement("div",{className:m.a.dialogsItems},t),i.a.createElement("div",{className:m.a.messages},n),i.a.createElement("div",null,i.a.createElement("h3",null,"my posts"),i.a.createElement(v,{onSubmit:function(a){e.sendMessages(a.onDiaChange)}})))},b=t(11),h=t(96),D=t(8);a.default=Object(D.d)(Object(b.b)((function(e){return{dialogPage:e.dialogPage}}),(function(e){return{sendMessages:function(a){e(Object(n.a)(a))}}})),h.a)(_)}}]);
//# sourceMappingURL=4.87e1ec81.chunk.js.map