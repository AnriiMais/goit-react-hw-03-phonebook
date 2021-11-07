(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},13:function(t,e,n){t.exports={searchInputWrap:"Filter_searchInputWrap__2mIlh",filterLabel:"Filter_filterLabel__21Q0Z"}},2:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__9wMB8",contactInput:"ContactForm_contactInput__1Zvr_",addContactBtn:"ContactForm_addContactBtn__CdqB9",contactLabel:"ContactForm_contactLabel__1Vr2Y"}},20:function(t,e,n){},21:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(14),r=n.n(o),s=(n(20),n(15)),i=n(6),u=n(7),l=n(8),m=n(10),b=n(9),d=(n(21),n(12)),p=n(3),h=n.n(p),j=n(2),f=n.n(j),C=n(0),O=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onSubmitContactForm=function(e){e.preventDefault(),t.props.onSubmitForm(t.makeContact()),t.setState({name:"",number:""})},t.onFormInputChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.makeContact=function(){return{id:h.a.generate(),name:t.state.name,number:t.state.number}},t}return Object(l.a)(n,[{key:"render",value:function(){var t=h.a.generate(),e=h.a.generate(),n=this.state,a=n.name,c=n.number;return Object(C.jsxs)("form",{className:f.a.contactForm,onSubmit:this.onSubmitContactForm,children:[Object(C.jsx)("label",{className:f.a.contactLabel,htmlFor:e,children:"Name"}),Object(C.jsx)("input",{id:e,type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.  \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:f.a.contactInput,onChange:this.onFormInputChange}),Object(C.jsx)("label",{className:f.a.contactLabel,htmlFor:t,children:"Number"}),Object(C.jsx)("input",{id:t,type:"tel",name:"number",value:c,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:f.a.contactInput,onChange:this.onFormInputChange}),Object(C.jsx)("button",{className:f.a.addContactBtn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),_=O,v=n(13),x=n.n(v),g=function(t){var e=t.value,n=t.filterQuery,a=h.a.generate();return Object(C.jsxs)("span",{className:x.a.searchInputWrap,children:[Object(C.jsx)("label",{className:x.a.filterLabel,htmlFor:a,children:"Find contacts by name"}),Object(C.jsx)("input",{type:"text",name:"filter",value:e,id:a,onChange:n})]})},N=n(4),y=n.n(N),F=function(t){var e=t.queryList,n=t.onDeleteContact;return Object(C.jsx)("ul",{className:y.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(C.jsxs)("div",{className:y.a.contactWrap,children:[Object(C.jsxs)("li",{className:y.a.contact,children:[a,":",Object(C.jsx)("span",{className:y.a.contactNumber,children:c})]}),Object(C.jsx)("button",{className:y.a.btnDelete,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},L=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:d,filter:""},t.componentDidMount=function(){var e=JSON.parse(localStorage.getItem("contacts"));t.setState({contacts:e||d})},t.componentDidUpdate=function(e,n){n.contacts!==t.state.contacts&&localStorage.setItem("contacts",JSON.stringify(t.state.contacts))},t.onInputChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.addContacts=function(e){var n=e.name;t.setState((function(t){if(t.contacts.every((function(t){return t.name!==n})))return{contacts:[e].concat(Object(s.a)(t.contacts))};alert("".concat(n," is already in contacts!!!"))}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=n,c=e.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(C.jsxs)("section",{className:"App",children:[Object(C.jsx)("h1",{children:"Phonebook"}),Object(C.jsx)(_,{onSubmitForm:this.addContacts}),Object(C.jsx)("h2",{className:"contacts",children:"Contacts"}),Object(C.jsx)(g,{value:n,filterQuery:this.onInputChange}),Object(C.jsx)(F,{queryList:c,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),S=L;r.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(S,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={contactList:"ContactList_contactList__1sFn-",contactWrap:"ContactList_contactWrap__pMY00",contact:"ContactList_contact__2sy_Y",contactNumber:"ContactList_contactNumber__1LTcY",btnDelete:"ContactList_btnDelete__mgz79"}}},[[31,1,2]]]);
//# sourceMappingURL=main.12155704.chunk.js.map