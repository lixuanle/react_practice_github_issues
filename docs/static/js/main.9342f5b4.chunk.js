(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),i=(a(15),a(1)),l=a(2),c=a(4),u=a(3),p=a(5),m=(a(16),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loader"})}}]),t}(r.a.Component)),h=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=r.a.createElement("i",{className:"fas fa-exclamation-circle issue-logo-green"}),t=r.a.createElement("i",{className:"fas fa-exclamation-circle issue-logo-red"}),a=this.props.labels.map(function(e){var t="#"+e.color;return r.a.createElement("span",{key:e.id,style:{color:"white",backgroundColor:t,fontWeight:"bold",fontSize:11,padding:2,marginRight:2}},e.name.toLowerCase())});return r.a.createElement("div",{className:"issue-container"},"open"===this.props.flag?e:t,r.a.createElement("div",{className:"title-container issue-text"},r.a.createElement("a",{href:this.props.url,target:"_blank",className:"title",rel:"noopener noreferrer"},this.props.title),a),r.a.createElement("p",{className:"issue-text issues-snippet"},this.props.snippet),r.a.createElement("p",{className:"issue-text"},"#",this.props.number," opened on ",this.props.date," by ",r.a.createElement("a",{href:this.props.author.html_url,className:"author-link",target:"_blank",rel:"noopener noreferrer"},this.props.author.login)," ",r.a.createElement("img",{src:this.props.author.avatar_url,className:"avatar-pic",alt:"avatar-pic"})," ",r.a.createElement("a",{className:"comments-link",href:this.props.cUrl,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"far fa-comments"})," ",this.props.comments," comments")))}}]),t}(r.a.Component);a(17).config({path:".env"});var d=a(20),g=Object({NODE_ENV:"production",PUBLIC_URL:""}).CLIENT_ID,f=Object({NODE_ENV:"production",PUBLIC_URL:""}).CLIENT_SECRET,v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getIssues=function(){var e=a.state.inputV,t=a.state.language,n=a.state.page;console.log(n),d("https://api.github.com/search/issues?q=".concat(e,"+state:open").concat(t,"client_id=").concat(g,"&client_secret=").concat(f,"&page=").concat(n,"&per_page=30")).then(function(e){return e.json()}).then(function(e){return a.setState({total:e.total_count,searches:e.items,loading:0,total_pages:Math.floor(e.total_count/30)})})},a.handleChange=function(e){a.setState({inputV:e.target.value})},a.handleSubmit=function(e){a.setState({loading:1,page:1},function(){return a.getIssues()}),e.preventDefault()},a.handleDrop=function(e){a.setState({language:"+language:"+e.target.value+"&",loading:1},function(){return a.getIssues()})},a.fixDate=function(e){return e.slice(0,10)},a.state={inputV:"",total:0,searches:[{}],language:"&",loading:0,total_pages:0,page:1},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.getIssues()}},{key:"render",value:function(){var e=this,t=this.state.searches.map(function(t){if(t.title){var a=e.fixDate(t.created_at);return r.a.createElement(h,{key:t.node_id,number:t.number,comments:t.comments,cUrl:t.comments_url,title:t.title,snippet:t.body,date:a,author:t.user,url:t.html_url,flag:t.state,labels:t.labels})}});return r.a.createElement("div",null,r.a.createElement("h1",{id:"issues-header"},"GitHub Issues"),r.a.createElement("div",{id:"issues-page"},r.a.createElement("h2",{id:"issues-caption"},"Look up over millions of issues and pull requests across GitHub"),r.a.createElement("form",{id:"search-bar",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"Search for issues across millions of repos.."})),r.a.createElement("div",{id:"issues-top"},r.a.createElement("p",null,this.state.total," Issues"),r.a.createElement("select",{name:"language",id:"language-dropdown",onChange:this.handleDrop},r.a.createElement("option",{value:"default",default:!0,hidden:!0},"Language"),r.a.createElement("option",{value:"javascript"},"Javascript"),r.a.createElement("option",{value:"python"},"Python"),r.a.createElement("option",{value:"java"},"Java"),r.a.createElement("option",{value:"html"},"HTML"),r.a.createElement("option",{value:"css"},"CSS"),r.a.createElement("option",{value:"ruby"},"Ruby"),r.a.createElement("option",{value:"csharp"},"C#"),r.a.createElement("option",{value:"php"},"PHP"),r.a.createElement("option",{value:"cpp"},"C++"))),1===this.state.loading?r.a.createElement(m,null):t))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(21)}},[[9,1,2]]]);
//# sourceMappingURL=main.9342f5b4.chunk.js.map