"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2548],{80821:function(k,D,t){t.d(D,{Z:function(){return d}});var C=t(5574),s=t.n(C),S=t(24963),l=t(86738),r=t(14726),y=t(83062),v=t(67294),P=t(85893);function d(i){var b=(0,v.useState)(!1),m=s()(b,2),O=m[0],x=m[1],e=(0,v.useContext)(S.Z),U=e.lang,W=e.notice,$=e.message,Z=function(){x(!0),i.action().then(function(f){if(x(!1),typeof i.onSuccess=="function"&&i.onSuccess(f),i.messageSuccess){var A="";typeof i.messageSuccess=="function"?A=i.messageSuccess(f):A=i.messageSuccess,A.indexOf(".")>-1&&(A=U(A)),i.asynced?$.info(A):$.success(A)}}).catch(function(f){x(!1),typeof i.onError=="function"&&i.onError(f)})};return i.confirm?(0,P.jsx)(l.Z,{style:{width:500},title:U("notification.title.tip"),description:i.confirm,onConfirm:Z,okText:"Yes",cancelText:"No",children:(0,P.jsx)(r.ZP,{disabled:i.disabled,icon:i.icon,loading:O,danger:i.danger,type:i.type,children:i.children})}):(0,P.jsx)(y.Z,{title:i.tips,children:(0,P.jsx)(r.ZP,{disabled:i.disabled,icon:i.icon,loading:O,onClick:Z,danger:i.danger,type:i.type,children:i.children})})}},27619:function(k,D,t){t.d(D,{Z:function(){return P}});var C=t(97857),s=t.n(C),S=t(19632),l=t.n(S),r=t(64183),y=t(67294),v=t(85893);function P(d){var i,b=Math.max.apply(Math,l()(d.data.map(function(O){var x;return(x=O[d.yField])!==null&&x!==void 0?x:0}))),m={theme:"academy",xField:d.xField,yField:d.yField,height:200,axis:{y:{line:!0},x:{line:!0,grid:{visable:!0},labelAutoRotate:!0}},style:{opacity:.4},tooltip:{channel:"y",valueFormatter:d.yLabelFormatter},scale:{y:{domainMin:(i=d.yDomainMin)!==null&&i!==void 0?i:0,domainMax:d.yDomainMax?d.yDomainMax:d.yDomainMaxCallback?d.yDomainMaxCallback(b):b}},data:d.data};return d.yLabelFormatter&&(m.axis.y.labelFormatter=d.yLabelFormatter),d.colorField&&(m.colorField=d.colorField),(0,v.jsx)(r.Z,s()({},m))}},71890:function(k,D,t){var C=t(15009),s=t.n(C),S=t(99289),l=t.n(S),r=t(67294);function y(v){var P=v.reqFunction,d=v.interval,i=v.maxPolling,b=v.pollingStatus,m=v.inPath,O=(0,r.useRef)(null),x=0,e=function W(){O.current=window.setTimeout(l()(s()().mark(function $(){var Z;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(!(x++>=i)){f.next=3;break}return U(),f.abrupt("return");case 3:if(f.prev=3,!(m&&window.location.href.indexOf(m)==-1)){f.next=7;break}return U(),f.abrupt("return");case 7:return f.next=9,P();case 9:Z=f.sent,W(),f.next=17;break;case 13:f.prev=13,f.t0=f.catch(3),U(),console.error("\u8F6E\u8BE2\u53D1\u751F\u9519\u8BEF\uFF1A",f.t0);case 17:case"end":return f.stop()}},$,null,[[3,13]])})),d)},U=function(){console.log("end polling"),O.current&&window.clearTimeout(O.current)};return(0,r.useEffect)(function(){return console.log((b?"start":"waiting")+" polling, max "+i),b&&e(),function(){U()}},[d,i,b]),{endPolling:U}}D.Z=y},24963:function(k,D,t){var C=t(67294),s=(0,C.createContext)({});D.Z=s},76214:function(k,D,t){t.r(D),t.d(D,{default:function(){return Oe}});var C=t(15009),s=t.n(C),S=t(99289),l=t.n(S),r=t(5574),y=t.n(r),v=t(19632),P=t.n(v),d=t(80821),i=t(27619),b=t(97857),m=t.n(b),O=t(28413),x=t(67294),e=t(85893);function U(R){var w=(0,x.useState)(),z=y()(w,2),G=z[0],X=z[1],Q={colorField:"value",valueField:"value",scale:{color:{range:["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]}},legend:!1};return R.data?(0,e.jsx)(O.Z,m()(m()({},Q),{},{height:500,data:{name:"root",children:R.data}})):(0,e.jsx)(e.Fragment,{})}var W=t(55241),$=t(71230),Z=t(15746),V=t(38703),f=(0,x.forwardRef)(function(R,w){return(0,x.useImperativeHandle)(w,function(){return{}}),(0,e.jsxs)(W.Z,{placement:"left",children:[(0,e.jsx)($.Z,{justify:"center",children:(0,e.jsx)(Z.Z,{children:(0,e.jsx)(V.Z,{percent:R.showPercent,type:"dashboard",format:function(G,X){return"".concat(G,"%")},size:150,status:R.showPercent>=100?"exception":"normal"})})}),(0,e.jsx)($.Z,{justify:"center",children:(0,e.jsxs)(Z.Z,{style:{marginTop:"10px"},children:[R.showLabel,": ",R.showUse," / ",R.showTotal]})})]})}),A=f,H=t(71890),ee=t(87662),Y=t(2831),c=t(18148),o=t(5251),p=t(45605),a=t(1210),De=t(38123),J=t(12122),T=t(38345),Te=t(184),F=t(74273),K=t(54006),B=t(26412),q=t(42075),Fe=t(83062),Ie=t(60922),Me=t(63490),Ce=t(86250);function Oe(){var R,w,z,G,X,Q,ne,te,ae,re,ie,se,ue,le,oe,de,ce,me,_e,ve,fe,he,ge,Ze=function(j,u){switch(u.type){case"update":var h=new Date().toLocaleTimeString(),_=0,E=0,L=0,pe=0,je=0,ye=0;u.payload.map(function(N){_+=N.cpu,E+=N.memory.in,L+=N.networkIO.in,pe+=N.networkIO.out,je+=N.blockIO.in,ye+=N.blockIO.out});var $e={list:u.payload,cpu:_,memory:E,network:[].concat(P()(j.network),[{date:h,usage:pe,type:"\u4E0A\u884C",source:{usage:pe}},{date:h,type:"\u4E0B\u884C",usage:L,source:{usage:L}}]),io:[].concat(P()(j.io),[{date:h,usage:ye,type:"\u8BFB\u53D6",source:{usage:ye}},{date:h,type:"\u5199\u5165",usage:je,source:{usage:je}}])};return $e}},Se=(0,x.useState)(),Ee=y()(Se,2),n=Ee[0],Be=Ee[1],Ue=(0,x.useState)(),xe=y()(Ue,2),g=xe[0],Ae=xe[1],Re=(0,x.useReducer)(Ze,{cpu:0,memory:0,network:[],io:[],list:[]}),Pe=y()(Re,2),I=Pe[0],Le=Pe[1],We=(0,H.Z)({reqFunction:function(){var M=l()(s()().mark(function u(){var h;return s()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,(0,ee.Cz)();case 2:h=E.sent,Le({type:"update",payload:h.data.list});case 4:case"end":return E.stop()}},u)}));function j(){return M.apply(this,arguments)}return j}(),interval:1e3,maxPolling:999,pollingStatus:!!n,inPath:"/home"}),be=function(){(0,Y.a)().then(function(j){Be(j.data);var u={total:0,container:0,volume:0,image:0,cache:0,item:[],updatedAt:""},h=j.data.diskUsage;h.usage.Containers&&h.usage.Containers.map(function(_){var E,L;u.container+=_.SizeRootFs+((E=_.SizeRw)!==null&&E!==void 0?E:0),u.item.push({name:_.Names[0],value:parseFloat(((_.SizeRootFs+((L=_.SizeRw)!==null&&L!==void 0?L:0))/1024/1024).toFixed(2))})}),h.usage.Volumes&&h.usage.Volumes.map(function(_){u.volume+=_.UsageData.Size,u.item.push({name:_.Name,value:parseFloat((_.UsageData.Size/1024/1024).toFixed(2))})}),h.usage.Images&&h.usage.Images.map(function(_){var E,L;u.image+=_.Size-((E=_.Sharedsize)!==null&&E!==void 0?E:0),u.item.push({name:_.RepoTags&&_.RepoTags.length>0?_.RepoTags[0]:_.Id,value:parseFloat(((_.Size-((L=_.Sharedsize)!==null&&L!==void 0?L:0))/1024/1024).toFixed(2))})}),h.usage.BuildCache&&h.usage.BuildCache.map(function(_){u.cache+=_.Size}),!h.usage.Containers&&!h.usage.Images&&!h.usage.Volumes?u.item.push({name:"\u6B63\u5728\u83B7\u53D6\u8BA1\u7B97,\u4E2A\u522B\u7CFB\u7EDF\u4F1A\u6BD4\u8F83\u8017\u65F6.",value:100}):u.updatedAt=new Date(h.updatedAt).toLocaleString(),u.total=h.usage.LayersSize,Ae(u)})};return(0,x.useEffect)(function(){be()},[]),(0,e.jsxs)(T.Z,{direction:"column",gutter:[0,10],ghost:!0,children:[(0,e.jsxs)(T.Z,{bordered:!0,split:"vertical",children:[(0,e.jsx)(T.Z,{colSpan:"40%",headerBordered:!0,title:(0,e.jsx)(p.Z,{}),subTitle:"\u57FA\u7840\u4FE1\u606F",children:(0,e.jsxs)(B.Z,{column:1,labelStyle:{width:100,justifyContent:"flex-end"},children:[(0,e.jsx)(B.Z.Item,{label:"\u9762\u677F\u4FE1\u606F",children:(0,e.jsxs)(q.Z,{direction:"horizontal",children:[(0,e.jsxs)("span",{children:["DPanel - ",n==null?void 0:n.dpanel.version," - ",n==null?void 0:n.dpanel.family]}),(0,e.jsx)("a",{target:"_blank",href:"https://github.com/donknap/dpanel",children:(0,e.jsx)(a.Z,{})}),(0,e.jsx)(Fe.Z,{title:"\u5B98\u65B9\u4EA4\u6D41\u7FA4\uFF1A837583876",children:(0,e.jsx)("a",{target:"_blank",href:"https://qm.qq.com/q/NC0z7keAiy",children:(0,e.jsx)(De.Z,{})})})]})}),(0,e.jsx)(B.Z.Item,{label:"Docker Host",children:n==null?void 0:n.info.Name}),(0,e.jsx)(B.Z.Item,{label:"Docker \u7248\u672C",children:"".concat(n==null?void 0:n.info.OperatingSystem," - ").concat(n==null?void 0:n.info.ServerVersion," - ").concat(n==null?void 0:n.sdkVersion)}),(0,e.jsx)(B.Z.Item,{label:"\u6587\u4EF6\u5B58\u50A8\u9A71\u52A8",children:"".concat(n==null?void 0:n.info.Driver)}),(0,e.jsx)(B.Z.Item,{label:"\u65E5\u5FD7\u9A71\u52A8",children:"".concat(n==null?void 0:n.info.LoggingDriver)}),(0,e.jsx)(B.Z.Item,{label:"\u7CFB\u7EDF\u67B6\u6784",children:"".concat(n==null?void 0:n.info.KernelVersion," - ").concat(n==null?void 0:n.info.Architecture)}),(0,e.jsxs)(B.Z.Item,{label:"Cpu",children:[n==null?void 0:n.info.NCPU," \u6838"]}),(0,e.jsx)(B.Z.Item,{label:"Memory",children:(0,o.FI)((R=n==null?void 0:n.info.MemTotal)!==null&&R!==void 0?R:0)}),(0,e.jsx)(B.Z.Item,{label:"\u6839\u76EE\u5F55",children:n==null?void 0:n.info.DockerRootDir}),(0,e.jsx)(B.Z.Item,{label:"\u5B58\u50A8\u5377\u63D2\u4EF6",children:(0,e.jsx)(q.Z,{children:n==null?void 0:n.info.Plugins.Volume})}),(0,e.jsx)(B.Z.Item,{label:"\u7F51\u7EDC\u63D2\u4EF6",children:(0,e.jsx)(q.Z,{children:n==null?void 0:n.info.Plugins.Network})}),(0,e.jsx)(B.Z.Item,{label:"\u7CFB\u7EDF\u65F6\u95F4",children:new Date((w=n==null?void 0:n.info.SystemTime)!==null&&w!==void 0?w:"").toLocaleString()})]})}),(0,e.jsxs)(T.Z,{headerBordered:!0,title:(0,e.jsx)(J.Z,{}),subTitle:"\u5BB9\u5668\u8FD0\u884C\u7EDF\u8BA1",split:"horizontal",extra:(0,e.jsx)(Te.a,{title:"\u5BB9\u5668\u72B6\u6001\u6570\u636E",submitter:!1,trigger:(0,e.jsx)(Ie.Z.Link,{children:"\u8BE6\u60C5\u6570\u636E"}),children:(0,e.jsx)(Me.Z,{pagination:!1,dataSource:I.list,rowKey:"name",columns:[{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"name"},{title:"Cpu",dataIndex:"cpu",sorter:function(j,u){return j.cpu-u.cpu},render:function(j,u,h){return"".concat(u.cpu.toFixed(2),"%")}},{title:"\u5185\u5B58",dataIndex:"memory",sorter:function(j,u){return j.memory.in-u.memory.in},render:function(j,u,h){var _,E;return"".concat((0,o.FI)((_=u==null?void 0:u.memory.in)!==null&&_!==void 0?_:0)," / ").concat((0,o.FI)((E=u==null?void 0:u.memory.out)!==null&&E!==void 0?E:0))}},{title:"\u7F51\u7EDC I/O",dataIndex:"networkIO",render:function(j,u,h){return"".concat((0,o.FI)(u.networkIO.in)," / ").concat((0,o.FI)(u.networkIO.out))}},{title:"\u78C1\u76D8 I/O",dataIndex:"blockIO",render:function(j,u,h){return"".concat((0,o.FI)(u.blockIO.in)," / ").concat((0,o.FI)(u.blockIO.out))}}]})}),children:[(0,e.jsx)(T.Z,{children:(0,e.jsxs)(Ce.Z,{gap:200,align:"center",justify:"center",children:[(0,e.jsx)(A,{showPercent:parseFloat(((z=I==null?void 0:I.cpu)!==null&&z!==void 0?z:0).toFixed(2)),showLabel:"Cpu",showUse:"".concat((((G=I==null?void 0:I.cpu)!==null&&G!==void 0?G:0)/100*((X=n==null?void 0:n.info.NCPU)!==null&&X!==void 0?X:0)).toFixed(2)),showTotal:"".concat((Q=n==null?void 0:n.info.NCPU)!==null&&Q!==void 0?Q:0," \u6838")}),(0,e.jsx)(A,{showPercent:parseFloat((((ne=I==null?void 0:I.memory)!==null&&ne!==void 0?ne:0)/((te=n==null?void 0:n.info.MemTotal)!==null&&te!==void 0?te:0)*100).toFixed(2)),showLabel:"\u5185\u5B58",showUse:(0,o.FI)((ae=I==null?void 0:I.memory)!==null&&ae!==void 0?ae:0),showTotal:"".concat((0,o.FI)((re=n==null?void 0:n.info.MemTotal)!==null&&re!==void 0?re:0))})]})}),(0,e.jsxs)(T.Z,{split:"vertical",wrap:!0,children:[(0,e.jsx)(T.Z,{colSpan:12,title:(0,e.jsx)(J.Z,{}),subTitle:"\u7F51\u7EDC",headerBordered:!0,children:(0,e.jsx)(i.Z,{yField:"usage",xField:"date",colorField:"type",data:I.network,yLabelFormatter:function(j){return(0,o.FI)(parseFloat(j))},yDomainMaxCallback:function(j){return j*1.5}})}),(0,e.jsx)(T.Z,{colSpan:12,title:(0,e.jsx)(J.Z,{}),subTitle:"\u78C1\u76D8",headerBordered:!0,children:(0,e.jsx)(i.Z,{yField:"usage",xField:"date",colorField:"type",data:I.io,yLabelFormatter:function(j){return(0,o.FI)(parseFloat(j))},yDomainMaxCallback:function(j){return j*1.5}})})]})]})]}),(0,e.jsx)(T.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(J.Z,{}),subTitle:"\u7528\u91CF\u7EDF\u8BA1",extra:"".concat(g&&g.updatedAt?"\u6570\u636E\u91CF\u540E\u66F4\u65B0: ".concat(g.updatedAt):""),children:(0,e.jsxs)($.Z,{children:[(0,e.jsx)(Z.Z,{span:"11",children:(g==null?void 0:g.item)&&(g==null?void 0:g.item.length)>0&&(0,e.jsx)(U,{data:(ie=g==null?void 0:g.item)!==null&&ie!==void 0?ie:[]})}),(0,e.jsx)(Z.Z,{span:"5",children:(0,e.jsxs)(T.Z,{split:"horizontal",children:[(0,e.jsx)(F.Z,{statistic:{title:"\u5BB9\u5668",value:(0,o.FI)((se=g==null?void 0:g.container)!==null&&se!==void 0?se:0),description:"\u5305\u542B\u7CFB\u7EDF\u5360\u7528\u53CA\u5BB9\u5668\u8FD0\u884C\u5199\u5165\u6570\u636E"}}),(0,e.jsx)(F.Z,{statistic:{title:"\u955C\u50CF",value:(0,o.FI)((ue=g==null?void 0:g.image)!==null&&ue!==void 0?ue:0),description:"\u5305\u542B\u4E2D\u95F4\u955C\u50CF"}}),(0,e.jsx)(F.Z,{statistic:{title:"\u5B58\u50A8",value:(0,o.FI)((le=g==null?void 0:g.volume)!==null&&le!==void 0?le:0),description:"\u53EA\u5305\u542B\u5B58\u50A8\u5377,\u4E0D\u5305\u542B\u6302\u8F7D\u76EE\u5F55"}}),(0,e.jsx)(F.Z,{statistic:{title:(0,e.jsxs)(q.Z,{children:[(0,e.jsx)("span",{children:"\u6784\u5EFA\u7F13\u5B58"}),(0,e.jsx)(d.Z,{action:function(){return(0,c.c5)()},type:"link",messageSuccess:"\u6E05\u9664\u6210\u529F",onSuccess:function(){be()},children:"\u6E05\u9664"})]}),value:(0,o.FI)((oe=g==null?void 0:g.cache)!==null&&oe!==void 0?oe:0)}})]})}),(0,e.jsx)(Z.Z,{span:"8",children:(0,e.jsxs)(T.Z,{split:"horizontal",children:[(0,e.jsx)(T.Z,{ghost:!0,children:(0,e.jsxs)(F.Z.Group,{children:[(0,e.jsx)(F.Z,{statistic:{title:"\u5BB9\u5668",value:(de=n==null?void 0:n.info.Containers)!==null&&de!==void 0?de:0,description:(0,e.jsx)(K.Link,{to:"/app/list",children:"\u67E5\u770B"})}}),(0,e.jsx)(F.Z.Divider,{}),(0,e.jsx)(F.Z,{statistic:{title:"\u8FD0\u884C\u4E2D",value:(ce=n==null?void 0:n.info.ContainersRunning)!==null&&ce!==void 0?ce:0,status:"success"}}),(0,e.jsx)(F.Z,{statistic:{title:"\u505C\u6B62",value:((me=n==null?void 0:n.info.ContainersPaused)!==null&&me!==void 0?me:0)+((_e=n==null?void 0:n.info.ContainersStopped)!==null&&_e!==void 0?_e:0),status:"error"}}),(0,e.jsx)(F.Z,{statistic:{title:"\u56DE\u6536\u7AD9",value:(ve=n==null?void 0:n.total.containerTask)!==null&&ve!==void 0?ve:0,status:"default",description:(0,e.jsx)(K.Link,{to:"/app/list/recycle",children:"\u67E5\u770B"})}})]})}),(0,e.jsxs)(T.Z,{ghost:!0,children:[(0,e.jsx)(F.Z,{statistic:{title:"\u955C\u50CF",value:"".concat((fe=(n==null?void 0:n.diskUsage.usage.Images)&&(n==null?void 0:n.diskUsage.usage.Images.length))!==null&&fe!==void 0?fe:0),status:"default",description:(0,e.jsx)(K.Link,{to:"/image/list",children:"\u67E5\u770B"})},chartPlacement:"left"}),(0,e.jsx)(F.Z,{statistic:{title:"\u4EFB\u52A1",value:(he=n==null?void 0:n.total.imageTask)!==null&&he!==void 0?he:0,status:"default",description:(0,e.jsx)(K.Link,{to:"/image/list/build",children:"\u67E5\u770B"})},chartPlacement:"left"})]}),(0,e.jsx)(T.Z,{ghost:!0,children:(0,e.jsx)(F.Z,{statistic:{title:"\u7F51\u7EDC",value:n==null?void 0:n.total.network,status:"default",description:(0,e.jsx)(K.Link,{to:"/docker/network",children:"\u67E5\u770B"})},chartPlacement:"left"})}),(0,e.jsxs)(T.Z,{ghost:!0,children:[(0,e.jsx)(F.Z,{statistic:{title:"\u5B58\u50A8\u5377",value:(ge=(n==null?void 0:n.diskUsage.usage.Volumes)&&(n==null?void 0:n.diskUsage.usage.Volumes.length))!==null&&ge!==void 0?ge:0,status:"default",description:(0,e.jsx)(K.Link,{to:"/docker/volume",children:"\u67E5\u770B"})},chartPlacement:"left"}),(0,e.jsx)(F.Z,{statistic:{title:"\u5907\u4EFD",value:n==null?void 0:n.total.backup,status:"default",description:(0,e.jsx)(K.Link,{to:"/app/backup",children:"\u67E5\u770B"})},chartPlacement:"left"})]})]})})]})})]})}},2831:function(k,D,t){t.d(D,{a:function(){return y},d:function(){return P}});var C=t(15009),s=t.n(C),S=t(99289),l=t.n(S),r=t(54006);function y(){return v.apply(this,arguments)}function v(){return v=l()(s()().mark(function i(){return s()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,r.request)("/api/common/home/info",{method:"POST"});case 2:return m.abrupt("return",m.sent);case 3:case"end":return m.stop()}},i)})),v.apply(this,arguments)}function P(){return d.apply(this,arguments)}function d(){return d=l()(s()().mark(function i(){return s()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,r.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return m.abrupt("return",m.sent);case 3:case"end":return m.stop()}},i)})),d.apply(this,arguments)}},18148:function(k,D,t){t.d(D,{$q:function(){return x},Fj:function(){return A},KG:function(){return y},KX:function(){return ee},T8:function(){return m},Xn:function(){return i},ao:function(){return U},c5:function(){return V},c7:function(){return $}});var C=t(15009),s=t.n(C),S=t(99289),l=t.n(S),r=t(54006);function y(c){return v.apply(this,arguments)}function v(){return v=l()(s()().mark(function c(o){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,r.request)("/api/app/image/get-list",{method:"POST",data:o}));case 1:case"end":return a.stop()}},c)})),v.apply(this,arguments)}function P(c){return d.apply(this,arguments)}function d(){return d=_asyncToGenerator(_regeneratorRuntime().mark(function c(o){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,request("/api/app/log/image-build",{method:"POST",data:o});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},c)})),d.apply(this,arguments)}function i(c){return b.apply(this,arguments)}function b(){return b=l()(s()().mark(function c(o){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,r.request)("/api/app/image/get-list-build",{method:"POST",data:o}));case 1:case"end":return a.stop()}},c)})),b.apply(this,arguments)}function m(c){return O.apply(this,arguments)}function O(){return O=l()(s()().mark(function c(o){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,r.request)("/api/app/image/get-build-task",{method:"POST",data:o});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},c)})),O.apply(this,arguments)}function x(c){return e.apply(this,arguments)}function e(){return e=l()(s()().mark(function c(o){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,r.request)("/api/app/image/delete-build-task",{method:"POST",data:o});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},c)})),e.apply(this,arguments)}function U(c){return W.apply(this,arguments)}function W(){return W=l()(s()().mark(function c(o){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,r.request)("/api/app/image/image-delete",{method:"POST",data:o});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},c)})),W.apply(this,arguments)}function $(){return Z.apply(this,arguments)}function Z(){return Z=l()(s()().mark(function c(){return s()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,r.request)("/api/app/image/image-prune",{method:"POST"});case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},c)})),Z.apply(this,arguments)}function V(){return f.apply(this,arguments)}function f(){return f=l()(s()().mark(function c(){return s()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,r.request)("/api/app/image/build-prune",{method:"POST"});case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},c)})),f.apply(this,arguments)}function A(c){return H.apply(this,arguments)}function H(){return H=l()(s()().mark(function c(o){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,r.request)("/api/app/image/update-title",{method:"POST",data:o});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},c)})),H.apply(this,arguments)}function ee(c){return Y.apply(this,arguments)}function Y(){return Y=l()(s()().mark(function c(o){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,r.request)("/api/app/image/tag-sync",{method:"POST",data:o}));case 1:case"end":return a.stop()}},c)})),Y.apply(this,arguments)}},5251:function(k,D,t){t.d(D,{FI:function(){return s},ZM:function(){return S}});function C(l){return l.trim()}function s(l){var r="";l<.1*1024?r=l.toFixed(2)+"B":l<.1*1024*1024?r=(l/1024).toFixed(2)+"KB":l<1*1024*1024*1024?r=(l/(1024*1024)).toFixed(2)+"MB":r=(l/(1024*1024*1024)).toFixed(2)+"GB";var y=r+"",v=y.indexOf("."),P=y.substring(v+1,v+3);return P=="00"?y.substring(0,v)+y.substr(v+3,2):r}function S(l){if(l){var r=new Date(l),y=r.getFullYear()+"-",v=(r.getMonth()+1<10?"0"+(r.getMonth()+1):r.getMonth()+1)+"-",P=(r.getDate()<10?"0"+r.getDate():r.getDate())+" ",d=(r.getHours()<10?"0"+r.getHours():r.getHours())+":",i=(r.getMinutes()<10?"0"+r.getMinutes():r.getMinutes())+":",b=r.getSeconds()<10?"0"+r.getSeconds():r.getSeconds();return y+v+P+d+i+b}}}}]);