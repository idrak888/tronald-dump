(window.webpackJsonp=window.webpackJsonp||[]).push([["8b21"],{Pkxi:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){var e=a("Xdqi");return{page:e.default||e}}])},Xdqi:function(e,t,a){"use strict";a.r(t);var r=a("9Jkg"),l=a.n(r),n=a("0iUn"),c=a("sLSF"),s=a("MI3g"),u=a("a7VT"),o=a("AT/M"),i=a("Tit0"),m=a("vYYK"),d=a("q1tI"),h=a.n(d),p=function(e){return h.a.createElement("div",{className:"Search"},h.a.createElement("h3",null,"Search results for ",e.searchKey,":"),e.results.map(function(e,t){return h.a.createElement("p",{key:t},h.a.createElement("strong",null,t,"."),e.value)}))},y=a("m/Pd"),f=a.n(y),b=a("vDqi"),E=a.n(b),g=function(e){function t(){var e,a;Object(n.default)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return a=Object(s.default)(this,(e=Object(u.default)(t)).call.apply(e,[this].concat(c))),Object(m.a)(Object(o.default)(a),"state",{searchKey:"",searchResults:["Qoute1","qoute2","qoute3"]}),Object(m.a)(Object(o.default)(a),"search",function(e){e.preventDefault();var t=document.querySelector("input");E.a.get("https://api.tronalddump.io/search/quote?query="+t.value,{params:{query:t.value,page:1,size:10},headers:{Accept:"application/hal+json"}}).then(function(e){localStorage.setItem("searchKey",t.value),localStorage.setItem("results",l()(e.data)),window.location="/search"})}),a}return Object(i.default)(t,e),Object(c.default)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("searchKey"),t=JSON.parse(localStorage.getItem("results"));(t=t._embedded.quotes)?(document.querySelector(".Search").style.display="block",document.querySelector(".err").style.display="none",this.setState({searchKey:e,searchResults:t})):(document.querySelector(".Search").style.display="none",document.querySelector(".err").style.display="block")}},{key:"render",value:function(){return h.a.createElement("div",{className:"SearchResults"},h.a.createElement(f.a,null,h.a.createElement("title",null,"Tronald Dump"),h.a.createElement("link",{href:"/static/style.css",rel:"stylesheet"}),h.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"})),h.a.createElement("img",{src:"https://docs.tronalddump.io/images/logo.png"}),h.a.createElement("h1",null,"Tronald Dump"),h.a.createElement("strong",null,"Dumb things said my Donald Trump"),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("form",{onSubmit:this.search},h.a.createElement("input",{type:"text",placeholder:"Search the dump"})),h.a.createElement("br",null),h.a.createElement("span",{className:"err"},"No results found :("),h.a.createElement(p,{results:this.state.searchResults,searchKey:this.state.searchKey}))}}]),t}(d.Component);t.default=g}},[["Pkxi","5d41","9da1"]]]);