(this.webpackJsonpfunding=this.webpackJsonpfunding||[]).push([[0],{2635:function(e,t){},2650:function(e,t,n){},2651:function(e,t,n){},2662:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n.n(c),s=n(413),r=n.n(s),i=(n(433),n(1)),o=n(21),j=n(16),l=(n.p,n(434),n(171)),u=n.n(l),d=n(242),b=n.n(d),O=n(8);n(436);var h=n(175),f=n.n(h),m=n(437),x=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t,n){var c,a,s,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/contracts/".concat(t,".json"));case 2:return c=e.sent,e.next=5,c.json();case 5:return a=e.sent,(s=m(a)).setProvider(n),e.next=10,s.deployed();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();n(2663),n.p,n(2650),n(2651);function p(e){var t=e.giveeVotee,n=e.pic,c=e.numm,a=e.Name,s=e.Age,r=e.Quality;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"wrap",children:[Object(O.jsx)("div",{className:"numberr",children:Object(O.jsxs)("h1",{children:["#",c]})}),Object(O.jsxs)("div",{className:"card ",children:[Object(O.jsx)("img",{src:n,alt:"Person",class:"card__image"}),Object(O.jsxs)("p",{class:"card__name",children:["Candidate #",c]}),Object(O.jsxs)("div",{class:"grid-container",children:[Object(O.jsx)("div",{class:"grid-child-posts"}),Object(O.jsx)("div",{class:"grid-child-followers"})]}),Object(O.jsxs)("ul",{class:"social-icons",children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#section0",children:Object(O.jsx)("i",{class:"fa fa-instagram",children:"C1"})})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#section1",children:Object(O.jsx)("i",{class:"fa fa-twitter",children:"C2"})})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#section3",children:Object(O.jsx)("i",{class:"fa fa-linkedin",children:"C3"})})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#section4",children:Object(O.jsx)("i",{class:"fa fa-codepen",children:"C4"})})})]}),Object(O.jsx)("button",{class:"btn draw-border",onClick:t,children:"Vote"})]}),Object(O.jsx)("div",{className:"rainbow1",children:Object(O.jsx)("div",{className:"rightcardchild",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsxs)("h2",{children:["Name - ",a]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("h2",{children:["Age - ",s]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("h2",{children:["Qualities - ",r]})})]})})})]})})}var v=n(62),g=n(123),w=n(421),V=n.n(w),N={visible:{opacity:1,scale:1,transition:{duration:.5}},hidden:{opacity:0,scale:0}},k=function(e){var t=e.accname,n=e.totalVotee,a=e.mostVotee;Object(c.useRef)(null);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"upperparent",children:[Object(O.jsxs)("div",{className:"heading",children:[Object(O.jsx)(f.a,{className:"hour",fontSize:"large"}),Object(O.jsx)("h1",{children:"WELCOME TO THE DECENTRALIZED VOTING APP"}),Object(O.jsxs)("span",{children:[Object(O.jsx)(V.a,{fontSize:"large"}),Object(O.jsxs)("h4",{children:[" ",t]})]})]}),Object(O.jsxs)("div",{className:"middle",children:[Object(O.jsxs)("div",{className:"middle-middle",children:[Object(O.jsxs)("div",{className:"middle-upper",children:[Object(O.jsx)("div",{className:"muu1",children:Object(O.jsxs)("h1",{color:"white",children:["Total Votes recorded Till now - ",n]})}),Object(O.jsx)("div",{className:"muu2",children:Object(O.jsxs)("h1",{children:["Most Voted Candidate -- ","No Votes"===a||"Tie, Wait for More Votes"===a?a:"C#".concat(a)]})})]}),Object(O.jsx)("div",{className:"middle-lower",children:Object(O.jsx)("h1",{})})]}),Object(O.jsxs)("div",{className:"rainbow",children:[Object(O.jsx)("a",{className:"hello",href:"#section0",class:"btn-flip","data-back":"Vote","data-front":"Candidate#01"}),Object(O.jsx)("span",{className:"sppan",children:Object(O.jsx)("h1",{children:"  VS  "})}),Object(O.jsx)("a",{className:"hello",href:"#section1",class:"btn-flip","data-back":"Vote","data-front":"Candidate#02"}),Object(O.jsx)("span",{className:"sppan",children:Object(O.jsx)("h1",{children:"  VS  "})}),Object(O.jsx)("a",{className:"hello",href:"#section3",class:"btn-flip","data-back":"Vote","data-front":"Candidate#03"}),Object(O.jsx)("span",{className:"sppan",children:Object(O.jsx)("h1",{children:"  VS  "})}),Object(O.jsx)("a",{className:"hello",href:"#section4",class:"btn-flip","data-back":"Vote","data-front":"Candidate#04"})]})]})]})})},y=function(e){var t=e.accname,n=e.totalVotee,a=e.mostVotee,s=Object(v.useAnimation)(),r=Object(g.a)(),i=Object(j.a)(r,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){l?s.start("visible"):s.start("hidden")}),[s,l]),Object(O.jsx)(v.motion.div,{className:"box",ref:o,variants:N,initial:"hidden",animate:s,children:Object(O.jsx)(k,{accname:t,totalVotee:n,mostVotee:a})})},C=function(e){var t=e.giveeVote0,n=e.numm,a=Object(v.useAnimation)(),s=Object(g.a)(),r=Object(j.a)(s,2),i=r[0],o=r[1];Object(c.useEffect)((function(){o?a.start("visible"):a.start("hidden")}),[a,o]);return Object(O.jsx)(v.motion.div,{className:"box",ref:i,variants:N,initial:"hidden",animate:a,children:Object(O.jsx)(p,{giveeVotee:t,pic:"https://play-lh.googleusercontent.com/SGvg-hJIrzsUgWr4vYB7HX-1ZXjx6djJLaH1TAFTblmfK9PoG0WU0RNheoRD1RorDRLP",numm:n,Name:"Levi Ackermann",Age:"25",Quality:"Great Leader, Fast Reflex, High IQ"})})},A=function(e){var t=e.giveeVote1,n=e.numm,a=Object(v.useAnimation)(),s=Object(g.a)(),r=Object(j.a)(s,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){o?a.start("visible"):a.start("hidden")}),[a,o]),Object(O.jsx)(v.motion.div,{className:"box",ref:i,variants:N,initial:"hidden",animate:a,children:Object(O.jsx)(p,{giveeVotee:t,pic:"https://www.fortressofsolitude.co.za/wp-content/uploads/2023/01/Who-Is-The-Smartest-Anime-Character-.jpg",numm:n,Name:"L",Age:"21",Quality:"Likes to work alone, Fast Reflex, High IQ"})})},E=function(e){var t=e.giveeVote2,n=e.numm,a=Object(v.useAnimation)(),s=Object(g.a)(),r=Object(j.a)(s,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){o?a.start("visible"):a.start("hidden")}),[a,o]),Object(O.jsx)(v.motion.div,{className:"box",ref:i,variants:N,initial:"hidden",animate:a,children:Object(O.jsx)(p,{giveeVotee:t,pic:"https://whatfanslove.com/wp-content/uploads/2021/11/Light-Yagami-tile.jpg?ezimgfmt=rs:372x224/rscb57/ngcb57/notWebP",numm:n,Name:"Light Yagami/Kira",Age:"20",Quality:"Likes to work alone,High IQ"})})},S=function(e){var t=e.giveeVote3,n=e.numm,a=Object(v.useAnimation)(),s=Object(g.a)(),r=Object(j.a)(s,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){o?a.start("visible"):a.start("hidden")}),[a,o]),Object(O.jsx)(v.motion.div,{className:"box",ref:i,variants:N,initial:"hidden",animate:a,children:Object(O.jsx)(p,{giveeVotee:t,pic:"https://i.quotev.com/rsmushnzaaaa.jpg",numm:n,Name:"Yohan Libert",Age:"25",Quality:"Great Manipulator, High IQ, Darkest Evil "})})};function L(e){var t=e.accname,n=e.giveeVote0,c=e.giveeVote1,a=e.giveeVote2,s=e.giveeVote3,r=e.totalVotee,i=e.mostVotee;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,id:"myVideo",children:[Object(O.jsx)("source",{src:"/Videos/code3.mp4",type:"video/mp4"}),"Your browser does not support HTML5 video."]}),Object(O.jsx)(y,{accname:t,totalVotee:r,mostVotee:i}),Object(O.jsx)("section",{id:"section0",children:Object(O.jsx)(C,{giveeVote0:n,numm:"01"})}),Object(O.jsx)("section",{id:"section1",children:Object(O.jsx)(A,{giveeVote1:c,numm:"02"})}),Object(O.jsx)("section",{id:"section3",children:Object(O.jsx)(E,{giveeVote2:a,numm:"03"})}),Object(O.jsx)("section",{id:"section4",children:Object(O.jsx)(S,{giveeVote3:s,numm:"04"})})]})}var T=function(){var e=Object(c.useState)(2),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(j.a)(s,2),l=(r[0],r[1]),d=Object(c.useState)(null),h=Object(j.a)(d,2),m=h[0],p=h[1],v=Object(c.useState)(null),g=Object(j.a)(v,2),w=g[0],V=g[1],N=Object(c.useState)(null),k=Object(j.a)(N,2),y=k[0],C=k[1],A=Object(c.useState)({provider:null,web3:null,contract:null}),E=Object(j.a)(A,2),S=E[0],T=E[1],F=Object(c.useState)(null),M=Object(j.a)(F,2),P=M[0],I=M[1],Q=Object(c.useState)(!1),H=Object(j.a)(Q,2),R=H[0],W=H[1],z=function(){return W(!R)},D=function(e){e.on("accountsChanged",(function(e){return I(e[0])}))};function Y(){return(Y=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:e.sent&&a(null);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()();case 2:return t=e.sent,e.next=5,x("funders",t);case 5:n=e.sent,t?(D(t),T({web3:new u.a(t),provider:t,contract:n})):console.error("Please install MetaMask!");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.web3.eth.getAccounts();case 2:t=e.sent,I(t[0]),console.log(P);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();S.web3&&e(),P&&G()}),[S.web3,n,P]),Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S.contract,n=S.web3,e.next=3,n.eth.getBalance(t.address);case 3:c=e.sent,l(n.utils.fromWei(c,"ether"));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();S.contract&&e()}),[S.contract]);var G=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S.contract,S.web3,e.next=3,t.alreadyVotedCheck();case 3:n=e.sent,V(n),console.log(w);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S.contract,S.web3,e.next=3,t.giveVote0({from:P});case 3:z();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S.contract,S.web3,e.next=3,t.giveVote1({from:P});case 3:z();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=S.contract,S.web3,e.next=3,n.giveVote3({from:P});case 3:z();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S.contract,S.web3,e.next=3,t.totalVotes();case 3:n=e.sent,C(n.words[0]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();S.contract&&e()}),[S.contract,R]),Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S.contract,S.web3,e.next=3,t.mostVoted();case 3:n=e.sent,console.log(n),5===n.words[0]?p("Tie, Wait for More Votes"):500===n.words[0]?p("No Votes"):p(n.words[0]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();S.contract&&e()}),[S.contract,y]),Object(O.jsx)("div",{className:"App",children:n?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"hell",children:[Object(O.jsx)("div",{className:"heaa",children:Object(O.jsxs)("span",{children:[Object(O.jsx)(f.a,{fontSize:"large"}),Object(O.jsx)("h1",{id:"sp1",children:"Decentralised Voting App"})]})}),Object(O.jsxs)("div",{class:"content",children:[Object(O.jsxs)("button",{class:"metamask-button",onClick:function(){return Y.apply(this,arguments)},children:[Object(O.jsx)("span",{class:"metamask-logo"}),"Connect to MetaMask"]}),Object(O.jsxs)("span",{className:"sp",children:[" ",Object(O.jsx)("h2",{children:"make sure metamask extension is installed in your browser"})]})]})]})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,id:"myVideo",children:[Object(O.jsx)("source",{src:"/Videos/code3.mp4",type:"video/mp4"}),"Your browser does not support HTML5 video."]}),Object(O.jsx)("div",{className:"whole-container",children:Object(O.jsx)("div",{class:"container",children:Object(O.jsx)(L,{accname:P||"not connected",giveeVote0:_,giveeVote1:B,giveeVote2:J,giveeVote3:J,totalVotee:y||"0",mostVotee:m||"Null"})})})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,2676)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(T,{})})),F()},433:function(e,t,n){},434:function(e,t,n){},436:function(e,t,n){},498:function(e,t){},519:function(e,t){},521:function(e,t){},534:function(e,t){},535:function(e,t){},587:function(e,t){},589:function(e,t){},599:function(e,t){},601:function(e,t){},626:function(e,t){},632:function(e,t){},651:function(e,t){},675:function(e,t){},678:function(e,t){},764:function(e,t){},826:function(e,t){}},[[2662,1,2]]]);
//# sourceMappingURL=main.baf6d979.chunk.js.map