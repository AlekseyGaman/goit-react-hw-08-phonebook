"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[289],{4289:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,o,i=t(2791),a=t(9434),s=t(3634),c=t(168),d=t(7691),p=d.ZP.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 30px;\n"]))),u=d.ZP.li(o||(o=(0,c.Z)(["\n  display: flex;\n  width: 380px;\n  gap: 20px;\n\n  & p {\n    font-size: 20px;\n    display: list-item;\n    width: 150px;\n  }\n  & span {\n    font-size: 20px;\n    width: 110px;\n  }\n  & button {\n    padding: 7px;\n    width: 66px;\n    max-height: 30px;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    border-radius: 10px;\n    margin-left: auto;\n    transition: 0.5s;\n    &:hover,\n    :focus {\n      background-color: #2f5870;\n      color: #ffffff;\n    }\n  }\n"]))),l=t(184);function f(){var n=(0,a.I0)(),e=(0,a.v9)((function(n){return n.contacts.items})),t=(0,a.v9)((function(n){return n.filter})),r=e.filter((function(n){return n.name.toLowerCase().includes(t)}));return(0,l.jsx)(p,{children:r.map((function(e){var t=e.id,r=e.name,o=e.number;return(0,l.jsxs)(u,{children:[(0,l.jsxs)("p",{children:[r," :"]}),(0,l.jsx)("span",{children:o}),(0,l.jsx)("button",{type:"button",onClick:function(){return n((0,s.GK)(t))},children:"Remove"})]},t)}))})}var x,m,h,b,g,v,Z,j,y=t(9439),w=t(6382),k=d.ZP.form(x||(x=(0,c.Z)(["\n  display: flex;\n  margin-top: 30px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  padding: 10px;\n  width: 500px;\n  height: 250px;\n  background-color: #fcfcfc;\n  border-radius: 15px;\n  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.61);\n"]))),z=d.ZP.div(m||(m=(0,c.Z)(["\n  position: relative;\n"]))),P=d.ZP.input(h||(h=(0,c.Z)(["\n  width: 250px;\n  padding: 10px;\n  border: 1px solid #b3bec8;\n  border-radius: 5px;\n  background: transparent;\n  outline: none;\n  color: #003161;\n  font-size: 1em;\n\n  &:valid,\n  :focus,\n  :hover {\n    border: 1px solid #003161;\n  }\n\n  &:valid ~ span,\n  :focus ~ span {\n    color: #003161;\n    transform: translateX(10px) translateY(-7px);\n    font-size: 0.75em;\n    padding: 0 10px;\n    background-color: #fcfcfc;\n    border-left: 1px solid #003161;\n    border-right: 1px solid #003161;\n    letter-spacing: 0.1em;\n  }\n"]))),C=d.ZP.span(b||(b=(0,c.Z)(["\n  position: absolute;\n  left: 0;\n  padding: 10px;\n  pointer-events: none;\n  font-size: 1em;\n  color: #003161;\n  text-transform: uppercase;\n  transition: 0.5s;\n"]))),A=d.ZP.button(g||(g=(0,c.Z)(["\n  width: 150px;\n  padding: 7px;\n  font-size: 20px;\n  color: #003161;\n  cursor: pointer;\n  background-color: transparent;\n  border: 1px solid #003161;\n  border-radius: 5px;\n\n  &:hover,\n  &:focus {\n    color: #ffffff;\n    border: 1px solid #2f5870;\n    border-radius: 5px;\n    background-color: #2f5870;\n  }\n"]))),F=function(){var n=(0,i.useState)(""),e=(0,y.Z)(n,2),t=e[0],r=e[1],o=(0,i.useState)(""),c=(0,y.Z)(o,2),d=c[0],p=c[1],u=(0,a.I0)(),f=(0,a.v9)((function(n){return n.contacts.items})),x=function(){r(""),p("")};return(0,l.jsxs)(k,{className:"form",onSubmit:function(n){n.preventDefault();var e={id:(0,w.x0)(),name:t,number:d};f.find((function(n){return n.name===e.name}))?alert("".concat(t," is already in the contacts")):u((0,s.uK)(e)),x()},children:[(0,l.jsxs)(z,{children:[(0,l.jsx)(P,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:function(n){r(n.currentTarget.value)}}),(0,l.jsx)(C,{children:"Name"})]}),(0,l.jsxs)(z,{children:[(0,l.jsx)(P,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:function(n){p(n.currentTarget.value)}}),(0,l.jsx)(C,{children:"Number"})]}),(0,l.jsx)(A,{type:"submit",children:"Add contact"})]})},I=d.ZP.div(v||(v=(0,c.Z)(["\n  margin-top: 30px;\n"]))),N=d.ZP.label(Z||(Z=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n"]))),_=d.ZP.input(j||(j=(0,c.Z)(["\n  margin-top: 10px;\n  width: 250px;\n  padding: 10px;\n  border: 1px solid #b3bec8;\n  border-radius: 5px;\n  background: transparent;\n  /* outline: 1px solid #2f5870; */\n  font-size: 1em;\n\n  &:hover,\n  &:focus {\n    outline: 1px solid #2f5870;\n  }\n"]))),S=t(4808),T=function(){var n=(0,a.I0)(),e=(0,a.v9)((function(n){return n.filter}));return(0,l.jsx)(I,{children:(0,l.jsxs)(N,{children:["Find contacts by name",(0,l.jsx)(_,{type:"search",value:e,onChange:function(e){return n((0,S.Q)(e.currentTarget.value))}})]})})},q=function(){var n=(0,a.I0)(),e=(0,a.v9)((function(n){return n.contacts})).items;return(0,i.useEffect)((function(){n((0,s.yF)())}),[n]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(F,{}),(0,l.jsx)(T,{}),e.length>0?(0,l.jsx)(f,{}):(0,l.jsx)("p",{children:"Contact list is empty."})]})}}}]);
//# sourceMappingURL=289.bd87f90c.chunk.js.map