(this.webpackJsonptrains=this.webpackJsonptrains||[]).push([[0],{206:function(e,t,a){},207:function(e,t,a){},214:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},253:function(e,t){},255:function(e,t){},266:function(e,t){},268:function(e,t){},295:function(e,t){},297:function(e,t){},298:function(e,t){},303:function(e,t){},305:function(e,t){},311:function(e,t){},313:function(e,t){},332:function(e,t){},344:function(e,t){},347:function(e,t){},353:function(e,t,a){},354:function(e,t,a){},458:function(e,t,a){"use strict";a.r(t);var n=a(53),c=a.n(n),s=(a(206),a(207),a(23)),r=a(9),i=a(17),l=a(6),o=a(27),j=a.n(o),u=a(26),b=a(44),d=a(16),m=(a(214),a(0)),O=a(78),h=a(1);var x=function(){var e,t=Object(m.useState)([]),a=Object(d.a)(t,2),n=a[0],c=a[1],r=Object(m.useState)([]),o=Object(d.a)(r,2),x=o[0],f=o[1],p=Object(m.useState)(!0),v=Object(d.a)(p,2),N=v[0],g=v[1],S=Object(i.c)((function(e){return e}));Object(m.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,a,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://trains-861bd-default-rtdb.firebaseio.com/trains.json");case 2:return t=e.sent,e.next=5,t.json();case 5:for(c in a=e.sent,n=[],a)n.push(Object(u.a)({trainName:c},a[c]));f(n),g(!1);case 10:case"end":return e.stop()}}),e)})))()}),[]);var y=function(e){var t=Object(l.a)(n);t.includes(e)?t=t.filter((function(t){return t!==e})):t.push(e),c(Object(l.a)(t))};return Object(h.jsx)("div",{className:"makeRegistrationContainer",children:(null===(e=S[0])||void 0===e?void 0:e.train)?Object(h.jsxs)("div",{className:"selectedTrain",children:[Object(h.jsx)("p",{children:"You already chose the train"}),Object(h.jsx)("div",{className:"trainElement",children:Object(h.jsxs)(s.b,{to:"/trains/"+S[0].train,children:[Object(h.jsx)("p",{className:"trainDate",children:S[0].date}),Object(h.jsx)("p",{className:"trainName",children:S[0].train})]})})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"date",children:[Object(h.jsx)("p",{children:"Select a date that suits your need"}),Object(h.jsxs)("ul",{className:"daysList",children:[Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:n.includes("Mon")?"active":"",onClick:y.bind(null,"Mon"),children:"Mon"})}),Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:n.includes("Tue")?"active":"",onClick:y.bind(null,"Tue"),children:"Tue"})}),Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:n.includes("Wed")?"active":"",onClick:y.bind(null,"Wed"),children:"Wed"})}),Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:n.includes("Thu")?"active":"",onClick:y.bind(null,"Thu"),children:"Thu"})}),Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:n.includes("Fri")?"active":"",onClick:y.bind(null,"Fri"),children:"Fri"})}),Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:n.includes("Sat")?"active":"",onClick:y.bind(null,"Sat"),children:"Sat"})}),Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:n.includes("Sun")?"active":"",onClick:y.bind(null,"Sun"),children:"Sun"})})]})]}),Object(h.jsx)(O.PulseLoader,{loading:N,color:"#fff",size:30,css:{display:"block",margin:"auto",width:"fit-content"}}),Object(h.jsx)("ul",{className:"trains",children:0===n.length?Object(h.jsx)(h.Fragment,{children:x.map((function(e){return Object(h.jsx)("li",{className:"trainElement",children:Object(h.jsxs)(s.b,{to:"/trains/"+e.trainName,children:[Object(h.jsx)("p",{className:"trainDate",children:e.date}),Object(h.jsx)("p",{className:"trainName",children:e.trainName})]})},e.trainName)}))}):Object(h.jsx)(h.Fragment,{children:x.map((function(e){return n.includes(e.date)?Object(h.jsx)("li",{className:"trainElement",children:Object(h.jsxs)(s.b,{to:"/trains/"+e.trainName,children:[Object(h.jsx)("p",{className:"trainDate",children:e.date}),Object(h.jsx)("p",{className:"trainName",children:e.trainName})]})},e.trainName):null}))})})]})})},f=(a(245),a(246),a(117)),p=a(79),v=a.n(p),N=Object(f.b)({name:"reservation",initialState:[],reducers:{addRemoveSeat:function(e,t){var a=localStorage.getItem("code");a||(a=v.a.generate(),localStorage.setItem("code",a));for(var n=!0,c=Object(l.a)(e),s=0;s<c.length;s++)if(t.payload.id===c[s].id){n=!1,c.splice(s,1);break}return n&&c.push(t.payload),0===c.length?localStorage.removeItem("seats"):localStorage.setItem("seats",JSON.stringify(Object(l.a)(c))),Object(l.a)(c)},clearStore:function(){return localStorage.removeItem("seats"),[]},populateStore:function(e,t){return Object(l.a)(t.payload)}}}),g=N.actions,S=Object(f.a)({reducer:N.reducer}),y=g;var k=function(e){var t=Object(i.b)(),a=Object(i.c)((function(e){return e})).map((function(e){return e.id}));return e.available?Object(h.jsx)("li",{onClick:function(){var a={id:e.seatID,train:e.trainName,wagonNumber:e.wagonNumber,type:e.type,seatNumber:e.number,date:e.date};t(y.addRemoveSeat(a))},className:"seat".concat(a.includes(e.seatID)?" selected":"").concat(e.circled),children:e.number}):Object(h.jsx)("li",{className:"seat unavailable",children:e.number})};var w=function(e){var t,a=0,n=function(){for(var t=0,n=0,c=0;c<e.seats.length;c++)if(e.seats[c].available){if(++n>t&&(a=c,(t=n)===e.minimumSeats))return t}else n=0;return!1},c=function(){var e=n();return!(!e||!a)&&a-e};return""===e.minimumSeats?t="":n()<e.minimumSeats&&(t="opacityReduced"),Object(h.jsxs)("li",{className:"wagon "+e.type.replace(/ /g,"")+" "+t,children:[Object(h.jsx)("p",{className:"wagonType",children:e.type}),Object(h.jsx)("ul",{className:"wagonSeatsList",children:e.seats.map((function(t,n){return Object(h.jsx)(k,{wagonNumber:e.numberOfWagon,seatID:"".concat(e.trainName).concat(e.numberOfWagon).concat(t.seatNumber),available:t.available,number:t.seatNumber,type:e.type,date:e.date,trainName:e.trainName,circled:""!==e.minimumSeats&&!1!==c()&&n>=c()&&n<=a?" circled":""},"".concat(e.trainName).concat(e.numberOfWagon).concat(t.seatNumber))}))})]})};a(353);var C=function(){var e=Object(m.useState)(!0),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(m.useState)([]),o=Object(d.a)(c,2),u=o[0],x=o[1],f=Object(r.i)(),p=Object(m.useState)("all"),v=Object(d.a)(p,2),N=v[0],g=v[1],S=Object(m.useState)(""),y=Object(d.a)(S,2),k=y[0],C=y[1],I=Object(m.useRef)("day"),T=Object(i.c)((function(e){return e})),W=Object(r.g)();return Object(m.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://trains-861bd-default-rtdb.firebaseio.com/trains/"+f.trainID+".json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,I.current=a.date,x(Object(l.a)(a.wagons)),n(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),W.replace("/");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()}),[W,f.trainID]),Object(h.jsxs)("div",{className:"wagonsWrapper",children:[Object(h.jsxs)("div",{className:"wagonsFilters",children:[Object(h.jsxs)("select",{onChange:function(e){g(e.target.value)},className:"wagonTypeSelector",name:"WagonType",children:[Object(h.jsx)("option",{defaultValue:!0,value:"all",children:"All"}),Object(h.jsx)("option",{value:"first class",children:"First Class"}),Object(h.jsx)("option",{value:"second class",children:"Second Class"}),Object(h.jsx)("option",{value:"sleeping",children:"Sleeping"})]}),Object(h.jsxs)("label",{className:"minimumSeatsWrapper",htmlFor:"minimumSeats",children:["Available consecutive seats:",Object(h.jsx)("input",{value:k,onChange:function(e){var t=parseInt(+e.target.value);t>=2&&t<=6?C(t):""===e.target.value?C(e.target.value):C("")},type:"number",id:"minimumSeats",className:"minimumSeats",min:"2",max:"6"})]})]}),Object(h.jsxs)("div",{className:"legendWrapper",children:[Object(h.jsx)("p",{children:"Seat color legend:"}),Object(h.jsxs)("div",{className:"legend",children:[Object(h.jsxs)("div",{className:"legendItem",children:[Object(h.jsx)("div",{className:"legendColor"}),"- available"]}),Object(h.jsxs)("div",{className:"legendItem",children:[Object(h.jsx)("div",{className:"legendColor unavailable"}),"- unavailable"]}),Object(h.jsxs)("div",{className:"legendItem",children:[Object(h.jsx)("div",{className:"legendColor selected"}),"- selected"]})]})]}),Object(h.jsx)(O.PulseLoader,{loading:a,color:"#fff",size:30,css:{display:"block",margin:"auto",width:"fit-content"}}),Object(h.jsx)("ul",{className:"wagons",children:u.map((function(e,t){return e.type===N||"all"===N?Object(h.jsx)(w,{date:I.current,trainName:f.trainID,numberOfWagon:t+1,availableSeatsNumber:e.availableSeats,seats:e.seats,type:e.type,minimumSeats:k},t):null}))}),0===T.length?Object(h.jsx)("p",{className:"selectSeat",children:"Select a seat in order to reserve it."}):Object(h.jsx)(s.b,{className:"routerLink trainsLink",to:"/checkout",children:"Go to checkout >"})]})},I=(a(354),a(65)),T=a(66),W=a(10),F=["label"];var D=function(e){var t=e.label,a=Object(W.a)(e,F),n=Object(I.c)(a),c=Object(d.a)(n,2),s=c[0],r=c[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("label",{htmlFor:t,children:[t,Object(h.jsx)("input",Object(u.a)(Object(u.a)({id:t},s),a))]}),r.touched&&r.error&&Object(h.jsx)("div",{className:"err",children:r.error})]})},E=a(200),P=a.n(E);var q=function(){var e=Object(i.c)((function(e){return e})),t=Object(i.b)(),a=Object(r.g)(),n=localStorage.getItem("code");n||(n=v.a.generate(),localStorage.setItem("code",n));var c=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(n);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(e){t(y.addRemoveSeat({id:e}))};return 0===e.length&&a.replace("/"),Object(h.jsxs)("div",{className:"checkoutWrapper",children:[Object(h.jsx)(I.b,{initialValues:{cnp:"",name:"",email:""},validationSchema:T.a({cnp:T.b().matches(/^[0-9]+$/,"CNP must be only digits").min(13,"CNP must be exactly 13 characters long").max(13,"CNP must be exactly 13 characters long").required("age is required"),name:T.b().min(5,"Minumum 5 characters").max(20,"Maximum 20 characters").matches(/\s/,"Write down all of your names").required("Name is a required field!"),email:T.b().email("Invalid email!").required("Email is required")}),onSubmit:function(c){Object(b.a)(j.a.mark((function s(){var r,i,l;return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return r={seats:e,details:Object(u.a)({},c)},s.next=3,fetch("https://trains-861bd-default-rtdb.firebaseio.com/trains/"+e[0].train+"/wagons.json");case 3:return i=s.sent,s.next=6,i.json();case 6:return l=s.sent,e.forEach((function(e){l[e.wagonNumber-1].availableSeats--,l[e.wagonNumber-1].seats[e.seatNumber-1].available=!1})),s.next=10,fetch("https://trains-861bd-default-rtdb.firebaseio.com/trains/"+e[0].train+"/wagons.json",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});case 10:return s.next=12,fetch("https://trains-861bd-default-rtdb.firebaseio.com/registrations/"+n+".json",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(u.a)({},r))});case 12:t(y.clearStore()),localStorage.removeItem("code"),a.replace("/");case 15:case"end":return s.stop()}}),s)})))()},children:function(e){return Object(h.jsxs)(I.a,{children:[Object(h.jsx)("h2",{children:"Book train seats"}),Object(h.jsx)(D,{label:"CNP",type:"text",name:"cnp"}),Object(h.jsx)(D,{label:"Name",type:"text",name:"name"}),Object(h.jsx)(D,{label:"E-mail",type:"email",name:"email"}),Object(h.jsxs)("div",{className:"unique",children:[Object(h.jsx)("p",{children:n}),Object(h.jsx)("button",{type:"button",onClick:c,children:"Copy to clipboard"})]}),Object(h.jsx)("button",{type:"submit",children:"Save registration"})]})}}),Object(h.jsx)("ul",{className:"seatsList",children:e.map((function(e){return Object(h.jsxs)("li",{children:[Object(h.jsx)("p",{children:e.train}),Object(h.jsxs)("p",{children:["Wagon number: ",e.wagonNumber]}),Object(h.jsx)("p",{children:e.type}),Object(h.jsxs)("p",{children:["seat nr.: ",e.seatNumber]}),Object(h.jsx)("button",{className:"deleteIcon",onClick:s.bind(null,e.id),children:Object(h.jsx)(P.a,{})})]},e.id)}))})]})};var L=function(){var e=Object(i.c)((function(e){return e})),t=Object(r.h)();return Object(h.jsx)("header",{children:Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:["/"!==t.pathname&&Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/",children:"Back to home"})}),0!==e.length&&"/checkout"!==t.pathname&&Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/checkout",children:"Checkout"})})]})})})};var J=function(){var e=Object(i.b)();return Object(m.useEffect)((function(){if(localStorage.getItem("seats")){var t=JSON.parse(localStorage.getItem("seats"));e(y.populateStore(t))}}),[e]),Object(h.jsxs)(s.a,{children:[Object(h.jsx)(L,{}),Object(h.jsxs)(r.d,{children:[Object(h.jsx)(r.b,{path:"/",exact:!0,children:Object(h.jsx)(x,{})}),Object(h.jsx)(r.b,{path:"/trains/:trainID",exact:!0,children:Object(h.jsx)(C,{})}),Object(h.jsx)(r.b,{path:"/checkout",children:Object(h.jsx)(q,{})}),Object(h.jsx)(r.b,{path:"/trains",exact:!0,children:Object(h.jsx)(r.a,{to:"/"})}),Object(h.jsx)(r.b,{path:"*",children:Object(h.jsx)(r.a,{to:"/"})})]})]})};c.a.render(Object(h.jsx)(i.a,{store:S,children:Object(h.jsx)(J,{})}),document.getElementById("root"))}},[[458,1,2]]]);
//# sourceMappingURL=main.fed41da9.chunk.js.map