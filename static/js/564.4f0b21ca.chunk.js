"use strict";(self.webpackChunkphonebook_app=self.webpackChunkphonebook_app||[]).push([[564],{4564:function(n,e,t){t.r(e),t.d(e,{default:function(){return fn}});var r,a,o,i,s,d,c,p,l,u,x,f,m,h,b,g,Z,j,v,w,y=t(2791),C=t(8174),k=(t(5462),t(9434)),P=t(5036),z={getContacts:function(n){return n.contacts.items},getIsLoading:function(n){return n.contacts.loading}},A=t(6895),S=t(885),L=t(4373),F=t(9126),q=t(168),N=t(6444),E=N.ZP.form(r||(r=(0,q.Z)(["\n  width: 350px;\n  height: 280px;\n  margin-top: 50px;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n"]))),I=N.ZP.label(a||(a=(0,q.Z)(["\n  display: block;\n  margin-bottom: 15px;\n  font-size: 24px;\n"]))),D=N.ZP.input(o||(o=(0,q.Z)(["\n  display: block;\n  width: 100%;\n  margin-top: 10px;\n  padding: 10px;\n  border: none;\n  border-radius: 10px;\n  font-size: 18px;\n  transition: all 300ms linear;\n\n  :focus {\n    outline: 1px solid #92a9ca;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  }\n"]))),M=N.ZP.button(i||(i=(0,q.Z)(["\n  width: 100%;\n  margin-top: 10px;\n  padding: 10px;\n  color: #ffffff;\n  font-size: 18px;\n  border: none;\n  background-color: #2e2e2e;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 300ms linear;\n\n  &:hover {\n    color: #92a9ca;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  }\n"]))),T=t(3329),B=function(n){var e=n.onSubmit,t=(0,y.useState)(""),r=(0,S.Z)(t,2),a=r[0],o=r[1],i=(0,y.useState)(""),s=(0,S.Z)(i,2),d=s[0],c=s[1];return(0,T.jsxs)(E,{onSubmit:function(n){n.preventDefault(),e({name:a,number:d}),o(""),c("")},children:[(0,T.jsxs)(I,{children:[(0,T.jsx)(L.KQH,{size:20})," Name",(0,T.jsx)(D,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:a,onChange:function(n){var e=n.target.value;o(e)}})]}),(0,T.jsxs)(I,{children:[(0,T.jsx)(F.XXc,{size:18})," Number",(0,T.jsx)(D,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:function(n){var e=n.target.value;c(e)}})]}),(0,T.jsx)(M,{type:"submit",children:"Add contact"})]})},J=t(6053),K=t(7692),U=t(8820),X=t(4164),$=N.ZP.div(s||(s=(0,q.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),_=N.ZP.div(d||(d=(0,q.Z)(["\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 600px;\n  width: 100%;\n  padding: 25px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n"]))),H=document.querySelector("#modal-root"),Q=function(n){var e=n.children,t=n.onClose;(0,y.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}),[]);var r=function(n){"Escape"===n.code&&t()};return(0,X.createPortal)((0,T.jsx)($,{onClick:function(n){n.currentTarget===n.target&&t()},children:(0,T.jsx)(_,{children:e})}),H)},V=t(6856),G=N.ZP.p(c||(c=(0,q.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #92a9ca;\n\n  span {\n    font-size: 24px;\n    font-weight: 700;\n  }\n"]))),O=N.ZP.button(p||(p=(0,q.Z)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  padding: 6px;\n  border-radius: 50%;\n  transition: all 300ms linear;\n\n  &:hover,\n  :focus {\n    background-color: #ea3d3d;\n    color: #ffffff;\n  }\n"]))),R=N.ZP.label(l||(l=(0,q.Z)(["\n  display: block;\n  margin-bottom: 15px;\n  font-size: 18px;\n"]))),W=N.ZP.input(u||(u=(0,q.Z)(["\n  display: block;\n  width: 100%;\n  margin-top: 10px;\n  padding: 10px;\n  border: 1px solid #92a9ca;\n  border-radius: 10px;\n  font-size: 18px;\n  transition: all 300ms linear;\n\n  :focus {\n    outline: 1px solid #92a9ca;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  }\n"]))),Y=N.ZP.button(x||(x=(0,q.Z)(["\n  width: 100%;\n  margin-top: 10px;\n  padding: 10px;\n  color: #ffffff;\n  font-size: 18px;\n  border: none;\n  background-color: #2e2e2e;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 300ms linear;\n\n  &:hover {\n    color: #92a9ca;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  }\n"]))),nn=function(n){var e=n.id,t=n.name,r=n.number,a=n.onClose,o=(0,k.I0)();return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(G,{children:[(0,T.jsx)("span",{children:"Update contact"}),(0,T.jsx)(O,{type:"button",onClick:function(){return a()},children:(0,T.jsx)(V.FU5,{size:30})})]}),(0,T.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=new FormData(n.currentTarget),r={id:e,name:t.get("name"),number:t.get("number")};o(P.Z.updateContact(r)),a()},children:[(0,T.jsxs)(R,{children:["Name",(0,T.jsx)(W,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:t})]}),(0,T.jsxs)(R,{children:["Nubmer",(0,T.jsx)(W,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:r})]}),(0,T.jsx)(Y,{type:"submit",children:"Save changes"})]})]})},en=N.ZP.div(f||(f=(0,q.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),tn=N.ZP.a(m||(m=(0,q.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 10px;\n  color: inherit;\n  background-color: #fff;\n  border-radius: 10px;\n  cursor: pointer;\n  transform: scale(1);\n  transition: transform 300ms linear;\n\n  &:hover {\n    transform: scale(1.02);\n  }\n\n  span {\n    display: flex;\n    align-items: center;\n\n    svg {\n      margin-right: 10px;\n    }\n  }\n"]))),rn=N.ZP.button(h||(h=(0,q.Z)(["\n  border-radius: 10px;\n  border: none;\n  background-color: #e55d5d;\n  cursor: pointer;\n  transition: all 250ms linear;\n\n  :hover,\n  :focus {\n    background-color: #a33c2a;\n    color: #ffffff;\n  }\n"]))),an=function(n){var e=n.id,t=n.name,r=n.number,a=(0,y.useState)(!1),o=(0,S.Z)(a,2),i=o[0],s=o[1],d=(0,k.I0)(),c=(0,k.v9)(z.getIsLoading),p=function(){return s(!1)};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(en,{children:[(0,T.jsxs)(tn,{onClick:function(n){n.preventDefault(),s(!0)},children:[(0,T.jsxs)("span",{children:[(0,T.jsx)(J.w1K,{}),t]}),(0,T.jsxs)("span",{children:[(0,T.jsx)(K.kq7,{}),r]})]}),(0,T.jsx)(rn,{type:"button",disabled:c,onClick:function(){return function(n){try{d(P.Z.deleteContact(n)),C.Am.info("Contact ".concat(t," deleted!"))}catch(e){C.Am.error("Something went wrong :(")}}(e)},children:(0,T.jsx)(U.VPh,{size:20})})]}),i&&(0,T.jsx)(Q,{onClose:p,children:(0,T.jsx)(nn,{id:e,name:t,number:r,onClose:p})})]})},on=N.ZP.ul(b||(b=(0,q.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n"]))),sn=N.ZP.li(g||(g=(0,q.Z)(["\n  :not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),dn=function(n){var e=n.contacts;return(0,T.jsx)(on,{children:e.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,T.jsx)(sn,{children:(0,T.jsx)(an,{id:e,name:t,number:r})},e)}))})},cn=N.ZP.input(Z||(Z=(0,q.Z)(["\n  display: block;\n  width: 320px;\n  height: 30px;\n  margin: 40px auto 20px;\n  padding: 10px;\n  border: none;\n  border-radius: 10px;\n  font-size: 18px;\n  transition: all 300ms linear;\n\n  :focus {\n    outline: 1px solid #92a9ca;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  }\n"]))),pn=function(n){var e=n.value,t=n.onChange;return(0,T.jsx)(cn,{type:"text",name:"filter",placeholder:"Search...",value:e,onChange:t})},ln=N.ZP.div(j||(j=(0,q.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),un=N.ZP.h2(v||(v=(0,q.Z)(["\n  margin-top: 30px;\n  text-align: center;\n  font-size: 35px;\n"]))),xn=N.ZP.div(w||(w=(0,q.Z)(["\n  width: 700px;\n"]))),fn=function(){var n=(0,k.I0)(),e=(0,k.v9)(z.getContacts),t=(0,k.v9)((function(n){return n.filter}));(0,y.useEffect)((function(){n(P.Z.getContacts())}),[n]);var r=function(){var n=t.toLowerCase().trim();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},a=0!==r().length;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(un,{children:"My Contacts"}),(0,T.jsxs)(ln,{children:[(0,T.jsx)(B,{onSubmit:function(t){var r=t.name.toLowerCase();if(e.find((function(n){return n.name.toLowerCase()===r})))return C.Am.warn("".concat(t.name," is already in contacts"));try{n(P.Z.addContact(t)),C.Am.success("".concat(t.name," successfully added :)"))}catch(a){C.Am.error("Something went wrong :(")}}}),(0,T.jsxs)(xn,{children:[(0,T.jsx)(pn,{value:t,onChange:function(e){var t=e.target.value;n((0,A.M)(t))}}),(0,T.jsx)(dn,{contacts:r()}),!a&&(0,T.jsx)("b",{children:"There are no contacts..."})]})]})]})}}}]);
//# sourceMappingURL=564.4f0b21ca.chunk.js.map