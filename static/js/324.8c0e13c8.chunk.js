"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[324],{2324:function(n,t,e){e.r(t),e.d(t,{default:function(){return hn}});var r,a,i,o,s,l,c,d,u=e(885),m=e(2791),h=e(168),x=e(5751),f=e(6763),p=f.r.spacing,b=x.ZP.h2(r||(r=(0,h.Z)(["\n  margin-top: 0;\n  margin-bottom: ",";\n  font-size: 1.4em;\n"])),p(4)),g=x.ZP.p(a||(a=(0,h.Z)(["\n  text-align: center;\n"]))),v=e(577),j=e(9983),k=e(3728),Z=e(9663),y=e(3329);function w(n){var t=n.onChangeState,e=(0,m.useState)(""),r=(0,u.Z)(e,2),a=r[0],i=r[1],o=(0,m.useState)(""),s=(0,u.Z)(o,2),l=s[0],c=s[1],d=function(n){var t=n.target,e=t.value;switch(t.name){case"name":i(e);break;case"number":c(e)}};return(0,y.jsxs)(Z.l0,{onSubmit:function(n){n.preventDefault(),"success"===t(a,l)&&(c(""),i(""))},children:[(0,y.jsxs)(Z.__,{htmlFor:"inputName",children:[(0,y.jsx)(k.efA,{}),"Name"]}),(0,y.jsx)(Z.II,{id:"inputName",type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter contact name",required:!0,onChange:d}),(0,y.jsxs)(Z.__,{htmlFor:"inputNumber",children:[(0,y.jsx)(k.Yek,{}),"Number"]}),(0,y.jsx)(Z.II,{id:"inputNumber",type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Enter phone number",required:!0,onChange:d}),(0,y.jsxs)(Z.zx,{type:"submit",disabled:!a||!l,children:["Add contact",(0,y.jsx)(j.Pd.Provider,{value:{size:"1.5em",style:{verticalAlign:"middle",marginLeft:"16px"}},children:(0,y.jsx)(k.wpm,{})})]}),(0,y.jsx)(v.Ix,{})]})}var C,P,Y,F,z,I=f.r.spacing,S=f.r.colors.accentColor,_=f.r.transition,A=_.timing,D=_.timingFunction,E=x.ZP.ul(i||(i=(0,h.Z)(["\n  padding-left: 0;\n  list-style: none;\n"]))),N=x.ZP.li(o||(o=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  &:not(:last-child) {\n    margin-bottom: ",";\n  }\n"])),I(4)),L=x.ZP.span(s||(s=(0,h.Z)(["\n  margin-right: ",";\n  font-size: 0.85em;\n"])),I(3)),M=x.ZP.a(l||(l=(0,h.Z)(["\n  color: inherit;\n  text-decoration: none;\n  font-weight: 700;\n  transition: text-decoration "," ",";\n\n  &:hover,\n  &:focus {\n    color: inherit;\n    outline: 2px solid ",";\n    border-radius: 0.3em;\n    outline-offset: 0.3em;\n  }\n"])),A,D,S),q=x.ZP.ul(c||(c=(0,h.Z)(["\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n"]))),H=x.ZP.li(d||(d=(0,h.Z)(["\n  &:not(:last-child) {\n    margin-right: ",";\n  }\n"])),I(2));function J(n){var t=n.contacts,e=n.filter,r=n.onDelete,a=n.toggleModal,i=t;return e&&(i=t.filter((function(n){return n.name.toLowerCase().includes(e)}))),(0,y.jsx)(E,{children:i.map((function(n){var t=n.id,e=n.name,i=n.number;return(0,y.jsxs)(N,{children:[(0,y.jsxs)(L,{children:[e,":"," ",(0,y.jsx)(M,{href:"tel:+"+parseInt(i.replace(/\D+/g,"")),children:i})]}),(0,y.jsxs)(q,{children:[(0,y.jsx)(H,{children:(0,y.jsx)(Z.zx,{type:"button",onClick:function(){return a(t,e,i)},title:"Edit this contact",children:(0,y.jsx)(j.Pd.Provider,{value:{size:"1.3em",style:{verticalAlign:"middle"}},children:(0,y.jsx)(k.sHo,{})})})}),(0,y.jsx)(H,{children:(0,y.jsx)(Z.zx,{type:"button",onClick:function(){return r(t,e)},title:"Delete this contact",children:(0,y.jsx)(j.Pd.Provider,{value:{size:"1.3em",style:{verticalAlign:"middle"}},children:(0,y.jsx)(k.JLH,{})})})})]})]},t)}))})}var B,G=f.r.colors,K=G.primaryColor,T=G.backgroundColorForm,U=G.accentColor,$=f.r.spacing,O=x.ZP.div(C||(C=(0,h.Z)(["\n  position: relative;\n"]))),Q=x.ZP.div(P||(P=(0,h.Z)(["\n  height: ",";\n"])),$(10)),R=x.ZP.p(Y||(Y=(0,h.Z)(["\n  color: ",";\n  font-size: 1em;\n  text-align: center;\n  margin: 0;\n"])),K),V=x.ZP.div(F||(F=(0,h.Z)(["\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: ",";\n  width: ",";\n  margin: "," 0 0 ",";\n\n  @keyframes bars {\n    0% {\n      height: ",";\n      -webkit-transform: translateY(0px);\n      transform: translateY(0px);\n      -webkit-transform: translateY(0px);\n      transform: translateY(0px);\n      background: ",";\n    }\n    25% {\n      height: ",";\n      -webkit-transform: translateY(15px);\n      transform: translateY(15px);\n      -webkit-transform: translateY(15px);\n      transform: translateY(15px);\n      background: ",";\n    }\n    50% {\n      height: ",";\n      -webkit-transform: translateY(0px);\n      transform: translateY(0px);\n      -webkit-transform: translateY(0px);\n      transform: translateY(0px);\n      background: ",";\n    }\n    100% {\n      height: ",";\n      -webkit-transform: translateY(0px);\n      transform: translateY(0px);\n      -webkit-transform: translateY(0px);\n      transform: translateY(0px);\n      background: ",";\n    }\n  }\n  @-webkit-keyframes bars {\n    0% {\n      height: ",";\n      -webkit-transform: translateY(0px);\n      transform: translateY(0px);\n      background: ",";\n    }\n    25% {\n      height: ",";\n      -webkit-transform: translateY(15px);\n      transform: translateY(15px);\n      background: ",";\n    }\n    50% {\n      height: ",";\n      -webkit-transform: translateY(0px);\n      transform: translateY(0px);\n      background: ",";\n    }\n    100% {\n      height: ",";\n      -webkit-transform: translateY(0px);\n      transform: translateY(0px);\n      background: ",";\n    }\n  }\n"])),$(12),$(12),$(-12),$(-7),$(1.2),T,$(8),U,$(1.2),T,$(1.2),T,$(1.2),T,$(8),U,$(1.2),T,$(1.2),T),W=x.ZP.span(z||(z=(0,h.Z)(["\n  position: absolute;\n  display: block;\n  bottom: ",";\n  width: ",";\n  height: ",";\n  background: ",";\n  -webkit-animation: bars 1.5s infinite ease-in-out;\n  animation: bars 1.5s infinite ease-in-out;\n\n  &:nth-child(2) {\n    left: ",";\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n  }\n\n  &:nth-child(2) {\n    left: ",";\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n  }\n\n  &:nth-child(3) {\n    left: ",";\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n  }\n\n  &:nth-child(4) {\n    left: ",";\n    -webkit-animation-delay: 0.6s;\n    animation-delay: 0.6s;\n  }\n\n  &:nth-child(5) {\n    left: ",";\n    -webkit-animation-delay: 0.8s;\n    animation-delay: 0.8s;\n  }\n"])),$(2.5),$(2.3),$(1.2),T,$(2.75),$(2.75),$(5.5),$(8.25),$(11));function X(){return(0,y.jsxs)(O,{children:[(0,y.jsx)(Q,{children:(0,y.jsxs)(V,{children:[(0,y.jsx)(W,{}),(0,y.jsx)(W,{}),(0,y.jsx)(W,{}),(0,y.jsx)(W,{}),(0,y.jsx)(W,{})]})}),(0,y.jsx)(R,{children:"Loading..."})]})}var nn=x.ZP.div(B||(B=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n"])));function tn(n){var t=n.onFilter,e=n.filter;return(0,y.jsxs)(nn,{children:[(0,y.jsxs)(Z.__,{htmlFor:"inputFilter",children:[(0,y.jsx)(k.tpn,{}),"Find contacts by name"]}),(0,y.jsx)(Z.II,{id:"inputFilter",type:"text",value:e,name:"filter",onChange:function(n){t(n.target.value)}})]})}var en,rn,an=e(2978),on=e(8483),sn=e(8719),ln=e(4380),cn=f.r.colors.overlayColor,dn=x.ZP.div(en||(en=(0,h.Z)(["\n  max-width: calc(100vw - 200px);\n  max-height: calc(100vh - 50px);\n"]))),un=x.ZP.div(rn||(rn=(0,h.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  z-index: 100;\n"])),cn);function mn(n){var t=n.contactEdit,e=n.onSaveEdit,r=(0,m.useState)(t.name),a=(0,u.Z)(r,2),i=a[0],o=a[1],s=(0,m.useState)(t.number),l=(0,u.Z)(s,2),c=l[0],d=l[1],h=function(n){var t=n.target,e=t.name,r=t.value;switch(e){case"name":o(r);break;case"number":d(r)}};return(0,y.jsx)(un,{children:(0,y.jsx)(dn,{children:(0,y.jsxs)(Z.l0,{children:[(0,y.jsx)(Z.II,{type:"text",name:"name",value:i,onChange:h}),(0,y.jsx)(Z.II,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:c,onChange:h}),(0,y.jsx)(Z.zx,{type:"submit",onClick:function(n){n.preventDefault(),e(t.id,i,c)},children:"Save Changes"})]})})})}function hn(){var n=(0,m.useState)("false"),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,m.useState)({}),i=(0,u.Z)(a,2),o=i[0],s=i[1],l=(0,an.I0)(),c=(0,an.v9)((function(n){return n.phonebook}),an.wU),d=c.contacts,h=c.loading,x=c.filter;(0,m.useEffect)((function(){l((0,on.yF)())}),[l]);var f=0!==d.length,p=d.length>=2,v=function(n,t){for(var e=0;e<t.length;e+=1)if(t[e].name===n)return!0;return!1},j=function(n){l((0,ln.Tv)(n))};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(w,{onChangeState:function(n,t){return v(n,d)?((0,sn.Z)(n,"warn"),"not success"):(l((0,on.ky)({name:n,number:t})),(0,sn.Z)(n,"success"),"success")}}),h?(0,y.jsx)(X,{}):(0,y.jsx)(y.Fragment,{children:f?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(b,{children:"Contacts"}),p&&(0,y.jsx)(tn,{onFilter:j,filter:x}),(0,y.jsx)(J,{contacts:d,filter:x,onDelete:function(n,t){l((0,on.GK)(n)),(0,sn.Z)(t,"info"),d.length<=2&&j("")},toggleModal:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;s({id:n,name:t,number:e}),r((function(n){return!n}))}})]}):(0,y.jsx)(g,{children:"You have no saved contacts"})}),!e&&(0,y.jsx)(mn,{contactEdit:o,onSaveEdit:function(n,t,e){l((0,on.mP)({id:n,name:t,number:e})),r((function(n){return!n}))}})]})}},9663:function(n,t,e){e.d(t,{l0:function(){return Z},__:function(){return y},II:function(){return w},zx:function(){return C}});var r,a,i,o,s=e(168),l=e(5751),c=e(6763),d=c.r.colors,u=d.primaryColor,m=d.reverseColor,h=d.backgroundColorForm,x=d.outlineColor,f=d.borderDisabledColor,p=d.backgroundDisabledColor,b=d.disabledColor,g=c.r.transition,v=g.timing,j=g.timingFunction,k=c.r.spacing,Z=l.ZP.form(r||(r=(0,s.Z)(["\n  min-width: 300px;\n  max-width: 500px;\n  margin: 0 auto ",";\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  padding: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  background-color: ","; ;\n"])),k(4),k(4),u,k(2),h),y=l.ZP.label(a||(a=(0,s.Z)(["\n  margin-bottom: ",";\n"])),k(1)),w=l.ZP.input(i||(i=(0,s.Z)(["\n  padding: "," ",";\n  margin-bottom: ",";\n  border: none;\n  border-radius: ",";\n  transition: outline "," ",";\n\n  &[name='number'] {\n    margin-bottom: ",";\n  }\n\n  &:hover,\n  &:focus {\n    outline: 2px solid ",";\n  }\n"])),k(2),k(3),k(4),k(2),v,j,k(8),x),C=l.ZP.button(o||(o=(0,s.Z)(["\n  padding: "," ",";\n  border: none;\n  border-radius: ",";\n  color: inherit;\n  outline: 1px solid ",";\n  transition: color "," ",",\n    background-color "," ",";\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    color: ",";\n    background-color: ",";\n  }\n\n  &:disabled,\n  &[disabled] {\n    cursor: auto;\n    border: 1px solid ",";\n    background-color: ",";\n    color: ",";\n  }\n"])),k(1),k(2),k(2),u,v,j,v,j,m,u,f,p,b)}}]);
//# sourceMappingURL=324.8c0e13c8.chunk.js.map