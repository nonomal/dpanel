"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3985],{99861:function(Le,me,u){var Fe=u(15009),R=u.n(Fe),Ce=u(64599),H=u.n(Ce),je=u(99289),W=u.n(je),ge=u(5574),b=u.n(ge),xe=u(83062),Be=u(14726),v=u(42119),V=u(67294),De=u(92754),Ae=u(3393),Ie=u(184),s=u(38345),ce=u(23430),U=u(85893),q=(0,V.forwardRef)(function(G,Y){(0,V.useImperativeHandle)(Y,function(){return{}});var Ze=(0,V.useState)(0),ee=b()(Ze,2),ve=ee[0],fe=ee[1],ue=(0,V.useRef)();return(0,U.jsxs)(Ie.a,{trigger:(0,U.jsx)(xe.Z,{title:"\u5F53\u90E8\u7F72\u65F6\u65E0\u6CD5\u6B63\u5E38\u62C9\u53D6\u955C\u50CF\u65F6\uFF0C\u53EF\u4EE5\u624B\u52A8\u4F7F\u7528\u9762\u677F\u7684\u4ED3\u5E93\u52A0\u901F\u529F\u80FD\u62C9\u53D6\u6240\u6709\u955C\u50CF",children:(0,U.jsx)(Be.ZP,{icon:(0,U.jsx)(ce.Z,{}),children:G.title?G.title:"\u4E00\u952E\u62C9\u53D6\u955C\u50CF"})}),width:800,submitter:!1,title:"\u4E00\u952E\u62C9\u53D6\u955C\u50CF",onOpenChange:function(){var ie=W()(R()().mark(function z(ye){var oe,ne,J,he,te,se,e;return R()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:if(!ye){j.next=25;break}ne=0,J=H()(G.image),j.prev=3,J.s();case 5:if((he=J.n()).done){j.next=15;break}return se=he.value,fe(ne),(te=ue.current)===null||te===void 0||te.setStart(se),j.next=11,(0,Ae.Gb)({tag:se,type:"pull"});case 11:e=j.sent,ne++;case 13:j.next=5;break;case 15:j.next=20;break;case 17:j.prev=17,j.t0=j.catch(3),J.e(j.t0);case 20:return j.prev=20,J.f(),j.finish(20);case 23:(oe=ue.current)===null||oe===void 0||oe.setFinish(),fe(ne);case 25:case"end":return j.stop()}},z,null,[[3,17,20,23]])}));return function(z){return ie.apply(this,arguments)}}(),children:[(0,U.jsx)(s.Z,{children:(0,U.jsx)(v.Z,{current:ve,items:G.image.map(function(ie,z){return{title:ie,key:z}})})}),(0,U.jsx)(s.Z,{children:(0,U.jsx)(De.Z,{ref:ue})})]})});me.Z=q},73748:function(Le,me,u){u.r(me),u.d(me,{default:function(){return ou}});var Fe=u(15009),R=u.n(Fe),Ce=u(99289),H=u.n(Ce),je=u(5574),W=u.n(je),ge=u(90078),b=u(38345),xe=u(97269),Be=u(2236),v=u(5966),V=u(97462),De=u(64218),Ae=u(92398),Ie=u(40056),s=u(67294),ce=u(35880),U=u(10641),q=u(62370),G=u(85576),Y=u(42075),Ze=u(96074),ee=u(60922),ve=u(83062),fe=u(71230),ue=u(15746),ie=u(14726),z=u(3393),ye=u(18148),oe=u(5251),ne=u(64789),J=u(75162),he=u(28307),te=u(78451),se=u(99861),e=u(85893);function Te(r){var D=(0,s.useState)(!1),g=W()(D,2),A=g[0],l=g[1],f=(0,s.useRef)(),i=(0,s.useContext)(ce.Z),h=i.createFormRef,w=i.volumeListRef,x=i.createEnvRef,E=i.domainRef,F=(0,s.useRef)(),S=function(){var d=H()(R()().mark(function m(a){var C,I,Z,T,o,O,y,re,L,k,X,N;return R()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l(!1),t.next=3,(0,z.YU)({md5:a});case 3:o=t.sent,r.redeploy||(L=(O=h.current)===null||O===void 0?void 0:O.getFieldsValue(),(y=h.current)===null||y===void 0||y.resetFields(),(re=h.current)===null||re===void 0||re.setFieldsValue({siteName:L.siteName,siteTitle:L.siteTitle})),o.data.info.Config.Env&&o.data.info.Config.Env.map(function(n){var P,M=n.split("=");(P=x.current)===null||P===void 0||P.addEnvItem(M[0],M.slice(1).join("="))}),(C=h.current)===null||C===void 0||C.setFieldValue("imageName",a),(I=h.current)===null||I===void 0||I.setFieldValue("workDir",o.data.info.Config.WorkingDir),(Z=E.current)===null||Z===void 0||Z.setExposePort(o.data.info.Config.ExposedPorts),o.data.info.Config.Volumes?(X=[],Object.keys(o.data.info.Config.Volumes).map(function(n,P){X.push(n)}),(k=w.current)===null||k===void 0||k.setDefaultDestPath(X)):(N=w.current)===null||N===void 0||N.setDefaultDestPath([]),(T=h.current)===null||T===void 0||T.setFieldsValue({workDir:{value:"",useDefault:!0,default:o.data.info.Config.WorkingDir},user:{value:"",useDefault:!0,default:o.data.info.Config.User},command:{value:"",useDefault:!0,default:o.data.info.Config.Cmd&&o.data.info.Config.Cmd.join(" ")},entrypoint:{value:"",useDefault:!0,default:o.data.info.Config.Entrypoint&&o.data.info.Config.Entrypoint.join(" ")}});case 11:case"end":return t.stop()}},m)}));return function(a){return d.apply(this,arguments)}}();return(0,s.useEffect)(function(){r.fromImageId&&S(r.fromImageId)},[r.fromImageId]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(G.Z,{open:A,width:1024,title:"\u9009\u62E9\u955C\u50CF",footer:!1,onCancel:function(){return l(!1)},children:(0,e.jsx)(U.Z,{scroll:{x:"max-content"},columns:[{title:"Id",dataIndex:"Id",search:!1,width:200,render:function(m,a,C,I,Z){return(0,e.jsx)(te.Z,{content:a.Id})}},{title:"\u955C\u50CF\u540D\u79F0",dataIndex:"tag",width:200,render:function(m,a,C,I){return(0,e.jsx)(te.Z,{content:a.RepoTags[0]})}},{title:"\u521B\u5EFA\u65E5\u671F",dataIndex:"Created",ellipsis:!0,search:!1,width:"180px",render:function(m,a,C,I){return(0,e.jsx)("div",{children:(0,oe.ZM)(a.Created*1e3)},a.Id)},sorter:function(m,a){return m.Created-a.Created}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:80,render:function(m,a,C,I){return(0,e.jsxs)(Y.Z,{split:(0,e.jsx)(Ze.Z,{type:"vertical"}),children:[(0,e.jsx)(ee.Z.Link,{onClick:H()(R()().mark(function Z(){return R()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",S(a.RepoTags[0]));case 1:case"end":return o.stop()}},Z)})),children:(0,e.jsx)(ve.Z,{title:"\u4F7F\u7528\u955C\u50CF",children:(0,e.jsx)(ne.Z,{})})},"addImage"),(0,e.jsx)(ee.Z.Link,{onClick:H()(R()().mark(function Z(){var T;return R()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:a.RepoTags[0]&&((T=F.current)===null||T===void 0||T.setImageName(a.RepoTags[0]));case 1:case"end":return O.stop()}},Z)})),children:(0,e.jsx)(ve.Z,{title:"\u66F4\u65B0\u955C\u50CF",children:(0,e.jsx)(J.Z,{})})},"updateImage")]})}}],request:function(){var d=H()(R()().mark(function m(a,C,I){var Z,T,o,O,y;return R()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return r.redeploy&&(T=(Z=h.current)===null||Z===void 0?void 0:Z.getFieldValue("imageName"),a.tag=T?T.split(":")[0]:a.tag),L.next=3,(0,ye.KG)({tag:a.tag});case 3:return o=L.sent,O=0,y=[],o.data.list&&(y=o.data.list.flatMap(function(k){return k.RepoTags.map(function(X){return{Key:O++,Id:k.Id,Created:k.Created,RepoTags:[X]}})})),L.abrupt("return",{data:y,success:!0,total:y.length});case 8:case"end":return L.stop()}},m)}));return function(m,a,C){return d.apply(this,arguments)}}(),toolBarRender:function(){return[(0,e.jsx)(he.Z,{onClick:function(){l(!1)},buttonType:"primary",ref:F,onFinish:function(a){S(a)}},"remote")]},formRef:f,rowKey:"Key",pagination:{pageSize:5}})},"imageTableList"),(0,e.jsxs)(fe.Z,{children:[(0,e.jsx)(ue.Z,{span:14,children:(0,e.jsx)(v.Z,{label:"\u955C\u50CF",tooltip:r.redeploy?"\u66F4\u65B0\u5BB9\u5668\u65F6,\u53EA\u53EF\u4EE5\u9009\u62E9\u8BE5\u955C\u50CF\u4E0B\u7684\u4E0D\u540Ctag.\u4E5F\u53EF\u4EE5\u5F3A\u5236\u66F4\u65B0\u5DF2\u90E8\u7F72tag,\u66F4\u6B21\u90E8\u7F72":"\u65B0\u5EFA\u5BB9\u5668\u65F6,\u53EF\u4EE5\u4F7F\u7528\u672C\u5730\u955C\u50CF,\u4E5F\u53EF\u4EE5\u4E0B\u8F7D\u5168\u65B0\u7684\u955C\u50CF\u6216\u662F\u66F4\u65B0\u672C\u5730\u955C\u50CF\u7684tag",name:"imageName",disabled:!0,placeholder:"\u8BF7\u9009\u62E9\u955C\u50CF\uFF0C\u5982\u679C\u662F\u8FDC\u7A0B\u955C\u50CF\u8BF7\u5148\u4E0B\u8F7D",rules:[{required:!0}],required:!0})}),(0,e.jsx)(ue.Z,{children:(0,e.jsx)(q.Z,{label:" ",children:(0,e.jsxs)(Y.Z,{children:[(0,e.jsx)(ie.ZP,{type:"primary",onClick:function(){return l(!0)},children:r.redeploy?"\u66F4\u65B0\u955C\u50CF":"\u9009\u62E9\u955C\u50CF"},"showBtn"),(0,e.jsx)(V.Z,{name:["imageName"],children:function(m){var a=m.imageName;if(r.redeploy)return(0,e.jsx)(se.Z,{image:[a],title:"\u66F4\u65B0\u6216\u662F\u62C9\u53D6\u5F53\u524D\u955C\u50CF"})}})]})})})]})]})}var j=u(60335),ke=u(24969),Q=u(24739),Me=u(63434),Re=u(17186),Ue=u(92067),We=(0,s.forwardRef)(function(r,D){var g=(0,s.useState)(!1),A=W()(g,2),l=A[0],f=A[1],i=(0,s.useRef)(),h=function(E){var F=(0,s.useState)([]),S=W()(F,2),d=S[0],m=S[1];return(0,s.useEffect)(function(){(0,j.jV)({md5:E.name}).then(function(a){var C;return m((C=a.data.info.Config.Env)!==null&&C!==void 0?C:[]),!0})},[]),(0,e.jsxs)(b.Z,{bordered:!0,extra:E.action,style:{marginBottom:10},children:[(0,e.jsx)(b.Z,{title:"\u5173\u8054\u4FE1\u606F",children:(0,e.jsxs)(Q.UW,{children:[(0,e.jsx)(v.Z,{label:"\u5BB9\u5668\u540D\u79F0",name:"name",width:"md",readonly:!0}),(0,e.jsx)(v.Z,{label:"\u8BBF\u95EEHostName",name:"alise",width:"md",tooltip:"\u901A\u8FC7\u914D\u7F6E\u6B64\u540D\u79F0\uFF0C\u5728\u5BB9\u5668\u5185\u90E8\u8FDB\u884C\u8BF7\u6C42\u8BBF\u95EE"}),(0,e.jsx)(Me.Z,{label:"\u5173\u8054\u5B58\u50A8",name:"volume"})]})}),(0,e.jsx)(b.Z,{title:"\u73AF\u5883\u53D8\u91CF",children:(0,e.jsx)(Y.Z,{direction:"vertical",children:d&&d.map(function(a,C){return(0,e.jsx)(ee.Z.Text,{copyable:{icon:(0,e.jsx)(ke.Z,{}),onCopy:function(){var Z=a.split("=");r.onAddEnv(Z[0],Z[1])},tooltips:["add env","success"]},code:!0,ellipsis:{tooltip:a},style:{width:300},children:a},C)})},"linkEnv")})]})},w=function(E){var F,S,d=!1,m=(F=(S=i.current)===null||S===void 0?void 0:S.getList())!==null&&F!==void 0?F:[];if(m.map(function(C){C.name==E.name&&(d=!0)}),!d){var a;(a=i.current)===null||a===void 0||a.add(E)}};return(0,s.useImperativeHandle)(D,function(){return{setDefaultLink:function(E){E&&E.map(function(F){F.name!=""&&w(F)})}}}),(0,e.jsxs)(b.Z,{title:"\u5173\u8054\u5BB9\u5668",headerBordered:!0,children:[(0,e.jsx)(Re.u,{name:"links",actionRef:i,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5173\u8054"},actionGuard:{beforeAddRow:function(E,F){return f(!0),!1}},copyIconProps:!1,min:0,itemRender:function(E,F){return(0,e.jsx)(h,{action:E.action,name:F.record.name})}}),(0,e.jsx)(G.Z,{title:"\u9009\u62E9\u5BB9\u5668",width:1024,footer:!1,open:l,onCancel:function(){return f(!1)},children:(0,e.jsx)(Ue.Z,{onSelect:function(E){w({name:E.Name,alise:E.Config.Hostname,volume:!1}),f(!1)}})})]})}),$e=We,He=u(91058),Ke=u(10523),Ge=u(2831),Ye=u(64317),Ne=u(86125);function ze(r){var D,g=(0,s.useState)(),A=W()(g,2),l=A[0],f=A[1];return(0,s.useEffect)(function(){(0,Ge.aF)().then(function(i){return f(i.data.info)})},[]),(0,e.jsxs)(b.Z,{children:[(0,e.jsx)(v.Z,{label:"\u5171\u4EAB\u5185\u5B58\u5927\u5C0F - /dev/shm",name:"shmsize",initialValue:"64M",tooltip:"0 \u4E3A\u4F7F\u7528\u9ED8\u8BA464M"}),(0,e.jsx)(q.Z,{label:"\u6700\u5927Cpu\u914D\u989D",name:"cpus",tooltip:"0 \u4E3A\u4E0D\u9650\u5236",children:(0,e.jsx)(Ne.Z,{step:.1,max:l==null?void 0:l.NCPU,marks:{0:"0",.5:"0.5\u6838",1:"1\u6838",1.5:"1.5\u6838",2:"2\u6838",4:"4\u6838",6:"6\u6838",8:"8\u6838"}})}),(0,e.jsx)(q.Z,{label:"\u6700\u5927\u5185\u5B58\u914D\u989D",name:"memory",tooltip:"0 \u4E3A\u4E0D\u9650\u5236",children:(0,e.jsx)(Ne.Z,{step:256,max:Math.round(((D=l==null?void 0:l.MemTotal)!==null&&D!==void 0?D:0)/1024/1024),marks:{0:"0",1024:"1G",2048:"2G",3072:"3G",4096:"4G"}})}),(0,e.jsx)(Ye.Z,{label:"\u65E5\u5FD7\u7C7B\u578B",name:["log","driver"],tooltip:"\u9ED8\u8BA4\u4F7F\u7528 json-file \u9A71\u52A8\u7531 docker \u7EDF\u4E00\u7BA1\u7406\u3002\u91C7\u7528 journal \u65F6\u65E5\u5FD7\u5C06\u6765\u5BBF\u4E3B\u673A\u7BA1\u7406",initialValue:"json-file",valueEnum:{"json-file":"json-file",journald:"journal (\u5BBF\u4E3B\u9700\u8981\u5B89\u88C5journal\u670D\u52A1)"}}),(0,e.jsx)(V.Z,{name:["log"],children:function(h){var w=h.log;if(w.driver=="json-file")return(0,e.jsxs)(Q.UW,{children:[(0,e.jsx)(v.Z,{label:"\u65E5\u5FD7\u5207\u5272\u5C3A\u5BF8",name:["log","maxSize"],placeholder:"\u4F8B\u5982\uFF1A10k,5M",tooltip:"\u9ED8\u8BA4 Docker \u5E76\u4E0D\u4F1A\u81EA\u52A8\u5207\u5272\u65E5\u5FD7"}),(0,e.jsx)(v.Z,{tooltip:"\u9ED8\u8BA4 Docker \u5E76\u4E0D\u4F1A\u81EA\u52A8\u6E05\u7406\u65E5\u5FD7\u6587\u4EF6",label:"\u4FDD\u7559\u65E5\u5FD7\u6587\u4EF6\u6570",name:["log","maxFile"],placeholder:"\u4F8B\u5982\uFF1A10"})]})}})]})}function Je(){return(0,e.jsx)(b.Z,{children:(0,e.jsx)(Re.u,{name:"label",label:"\u5BB9\u5668\u6807\u7B7E",creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5BB9\u5668\u6807\u7B7E"},copyIconProps:!1,min:0,children:(0,e.jsxs)(Q.UW,{children:[(0,e.jsx)(v.Z,{width:"md",name:"name",label:"\u540D\u79F0",placeholder:""}),(0,e.jsx)(v.Z,{width:"md",name:"value",label:"\u503C",placeholder:""})]})})})}var Ee=u(52688),Qe=u(44771),Xe=u(86615),su="default",du="user";function _e(r){return(0,e.jsx)(q.Z,{label:r.label,tooltip:r.tooltip,children:(0,e.jsxs)(Y.Z.Compact,{block:!0,children:[(0,e.jsx)(Xe.Z.Group,{radioType:"button",name:[r.name,"useDefault"],options:[{label:"\u4F7F\u7528\u9ED8\u8BA4",value:!0},{label:"\u81EA\u5B9A\u4E49",value:!1}]}),(0,e.jsx)(V.Z,{name:[r.name],children:function(g){return g[r.name]&&g[r.name].useDefault?(0,e.jsx)(v.Z,{name:[r.name,"default"],disabled:!0,placeholder:"\u672A\u8BBE\u7F6E"}):(0,e.jsx)(v.Z,{name:[r.name,"value"]})}})]})})}var pe=_e;function qe(){return(0,e.jsxs)(b.Z,{children:[(0,e.jsx)(Qe.Z,{label:"\u91CD\u542F\u7B56\u7565"}),(0,e.jsxs)(Q.UW,{children:[(0,e.jsx)(Ee.Z,{name:"privileged",label:"\u8D4B\u4E88\u5BB9\u5668Root\u6743\u9650",initialValue:!1}),(0,e.jsx)(Ee.Z,{name:"autoRemove",label:"\u505C\u6B62\u540E\u81EA\u52A8\u5220\u9664",initialValue:!1})]}),(0,e.jsx)(pe,{label:"\u5DE5\u4F5C\u76EE\u5F55",tooltip:"\u9ED8\u8BA4\u4F7F\u7528\u955C\u50CF\u4E2D\u6307\u5B9A\u7684\u5DE5\u4F5C\u76EE\u5F55",name:"workDir"}),(0,e.jsx)(pe,{label:"User",tooltip:"\u5728\u5BB9\u5668\u4E2D\u8FD0\u884C\u547D\u4EE4\u7684\u7528\u6237",name:"user"}),(0,e.jsx)(pe,{label:"Command",tooltip:"\u542F\u52A8\u5BB9\u5668\u65F6\u8FD0\u884C\u7684\u547D\u4EE4\uFF0C\u4EE5\u7A7A\u683C\u5206\u9694",name:"command"}),(0,e.jsx)(pe,{label:"Entrypoint",tooltip:"\u65E0\u6CD5\u8986\u76D6\u955C\u50CF\u4E2D\u5DF2\u7ECF\u6307\u5B9A\u7684 Entrypoint \u547D\u4EE4",name:"entrypoint"})]})}var eu=u(91845),Ve=u(62597),we=u(54006),uu=u(4798),nu=u(82034);function ae(r){return(0,e.jsx)("div",{style:{display:r.show?"block":"none"},children:r.children})}function tu(){var r=(0,s.useRef)(),D=function(l){var f,i,h=!1,w=(f=(i=r.current)===null||i===void 0?void 0:i.getList())!==null&&f!==void 0?f:[];if(w.map(function(E){E.name==l.name&&(h=!0)}),!h){var x;(x=r.current)===null||x===void 0||x.add(l)}},g=function(l){var f,i,h=!1,w=(f=(i=r.current)===null||i===void 0?void 0:i.getList())!==null&&f!==void 0?f:[];w.map(function(x,E){if(x.name==l){var F;(F=r.current)===null||F===void 0||F.remove(E)}})};return(0,e.jsx)(b.Z,{title:"\u5173\u8054\u5BBF\u4E3B\u7F51\u7EDC\u4E3B\u673A",tooltip:"\u5BB9\u5668\u5185\u5982\u679C\u9700\u8981\u8BF7\u6C42\u5BBF\u4E3B\u673A\u6240\u5728\u7684\u7F51\u7EDC\u4E2D\u7684\u4E3B\u673A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6B64\u914D\u7F6E\u5C06Ip\u6CE8\u5165\u5230\u5BB9\u5668\u4E2D",extra:(0,e.jsx)(Y.Z,{children:(0,e.jsx)(Ee.Z,{name:"enableBindHost",fieldProps:{checkedChildren:"\u7ED1\u5B9A\u5BBF\u4E3B\u673AIp",unCheckedChildren:"\u7ED1\u5B9A\u5BBF\u4E3B\u673AIp",onChange:function(l){l?D({name:"host.dpanel.local",value:"host-gateway"}):g("host.dpanel.local")}}})}),children:(0,e.jsx)(Re.u,{name:"extraHosts",creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5BBF\u4E3B\u673A\u7F51\u7EDC\u5173\u8054"},actionRef:r,copyIconProps:!1,min:0,children:(0,e.jsxs)(Q.UW,{children:[(0,e.jsx)(v.Z,{width:"md",name:"name",label:"Hostname",placeholder:""}),(0,e.jsx)(v.Z,{width:"md",name:"value",label:"ip",placeholder:""})]})})})}var au=u(90672),ru=(0,s.forwardRef)(function(r,D){return(0,s.useImperativeHandle)(D,function(){return{}}),(0,e.jsxs)(b.Z,{title:"\u7F51\u7EDC\u914D\u7F6E",children:[(0,e.jsxs)(Q.UW,{children:[(0,e.jsx)(v.Z,{label:"\u914D\u7F6E ipV4 \u5730\u5740",name:["ipV4","address"],width:"md",tooltip:"\u6307\u5B9A\u5BB9\u5668\u7684ipv4\u5730\u5740\uFF0C\u4F8B\u5982 192.168.1.5",placeholder:"192.168.1.5"}),(0,e.jsx)(V.Z,{name:["ipV4"],children:function(A){var l=A.ipV4;return(0,e.jsx)(v.Z,{label:"\u914D\u7F6E ipV4 \u5B50\u7F51",name:["ipV4","subnet"],width:"md",required:l&&l.address,tooltip:"\u6307\u5B9A\u5BB9\u5668\u7684ipv4\u6240\u5728\u7684\u5B50\u7F51\uFF0C\u4F8B\u5982 192.168.1.0/24",placeholder:"192.168.1.0/24",rules:[{required:l&&l.address}]})}}),(0,e.jsx)(v.Z,{label:"\u914D\u7F6E ipV4 \u7F51\u5173",name:["ipV4","gateway"],width:"md",tooltip:"\u6307\u5B9A\u5BB9\u5668\u7684ipv4\u7684\u7F51\u5173\uFF0C\u4F8B\u5982 192.168.1.1",placeholder:"192.168.1.1"}),(0,e.jsx)(Ee.Z,{label:"\u81EA\u5B9A\u4E49ipV6",name:"enableIpV6Address"})]}),(0,e.jsx)(V.Z,{name:["enableIpV6Address"],children:function(A){var l=A.enableIpV6Address;if(l)return(0,e.jsxs)(Q.UW,{children:[(0,e.jsx)(v.Z,{label:"\u914D\u7F6E ipV6 \u5730\u5740",name:["ipV6","address"],width:"md",tooltip:"\u6307\u5B9A\u5BB9\u5668\u7684ipV6\u5730\u5740\uFF0C\u4F8B\u5982 2001:db8::5",placeholder:"2001:db8::5"}),(0,e.jsx)(V.Z,{name:["ipV6"],children:function(i){var h=i.ipV6;return(0,e.jsx)(v.Z,{label:"\u914D\u7F6E ipV6 \u5B50\u7F51",name:["ipV6","subnet"],width:"md",required:h&&h.address,tooltip:"\u6307\u5B9A\u5BB9\u5668\u7684ipv4\u6240\u5728\u7684\u5B50\u7F51\uFF0C\u4F8B\u5982 2001:db8::/48",placeholder:"2001:db8::/48",rules:[{required:h&&h.address}]})}}),(0,e.jsx)(v.Z,{label:"\u914D\u7F6E ipV6 \u7F51\u5173",name:["ipV6","gateway"],width:"md",tooltip:"\u6307\u5B9A\u5BB9\u5668\u7684ipV6\u7684\u7F51\u5173\uFF0C\u4F8B\u5982 2001:db8::1",placeholder:"2001:db8::1"})]})}}),(0,e.jsx)(au.Z,{label:"DNS\u914D\u7F6E",name:"dns",placeholder:"\u8BF7\u6307\u5B9Adns\u5730\u5740\uFF0C\u4F8B\u5982\uFF1A8.8.8.8\uFF0C\u4E00\u884C\u6DFB\u4E00\u6761dns\u5730\u5740"})]})}),lu=ru,iu=u(24963),de="update",Se="copy",Pe="new";function ou(){var r,D,g,A=(0,s.useContext)(iu.Z),l=A.loading,f=(0,s.useContext)(ce.Z),i=f.createFormRef,h=f.volumeListRef,w=f.domainRef,x=f.createEnvRef,E=f.createLinkRef,F=(0,s.useState)(Pe),S=W()(F,2),d=S[0],m=S[1],a=(0,we.useSearchParams)(),C=W()(a,2),I=C[0],Z=C[1],T=(0,we.useNavigate)(),o=(0,s.useState)("basic"),O=W()(o,2),y=O[0],re=O[1],L=parseInt((r=I.get("id"))!==null&&r!==void 0?r:""),k=(D=I.get("containerId"))!==null&&D!==void 0?D:"",X=(g=I.get("imageId"))!==null&&g!==void 0?g:"";return(0,s.useEffect)(function(){if(k||L)l.show(),(0,Ve.iE)({md5:k,id:L}).then(function(){var B=H()(R()().mark(function t(n){var P,M,c,K,$,be,Oe;return R()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:if(c={info:{},layer:[]},I.get("op")==Se?m(Se):m(de),n.data.env.network&&n.data.env.network.map(function(p){return!p.alise&&p.name!="bridge"&&(p.alise=[n.data.siteName+".pod.dpanel.local"]),p}),n.data.env.ports&&n.data.env.ports.map(function(p){return p.host=="0"&&(p.host=""),p}),K=n.data.env.bindIpV6,n.data.containerInfo.Info&&n.data.containerInfo.Info.NetworkSettings.Networks&&Object.keys(n.data.containerInfo.Info.NetworkSettings.Networks).map(function(p){n.data.env.network&&(n.data.env.network=n.data.env.network.map(function(_){return p==_.name&&(_.subnet=n.data.containerInfo.Info.NetworkSettings.Networks[p].IPAddress+"/"+n.data.containerInfo.Info.NetworkSettings.Networks[p].IPPrefixLen),_})),n.data.containerInfo.Info.NetworkSettings.Networks[p].IPv6Gateway!=""&&(K=!0)}),n.data.env.extraHosts&&n.data.env.extraHosts.map(function(p){if(p.value=="host-gateway"){var _;(_=i.current)===null||_===void 0||_.setFieldValue("enableBindHost",!0)}}),$=n.data.env.ports,n.data.env.ports&&($=n.data.env.ports.map(function(p){return p.host=(p.hostIp?p.hostIp+":":"")+p.host,p})),(P=i.current)===null||P===void 0||P.setFieldsValue({imageName:n.data.env.imageName,privileged:n.data.env.privileged,bindIpV6:n.data.env.useHostNetwork?!1:K,useHostNetwork:n.data.env.useHostNetwork,publishAllPorts:n.data.env.useHostNetwork?!1:n.data.env.publishAllPorts,workDir:{value:n.data.env.workDir,useDefault:!n.data.env.workDir,default:c&&c.info.Config&&c.info.Config.WorkingDir},user:{value:n.data.env.user,useDefault:!n.data.env.user,default:c&&c.info.Config&&c.info.Config.User},command:{value:n.data.env.command,useDefault:!n.data.env.command,default:c&&c.info.Config&&c.info.Config.Cmd&&c.info.Config.Cmd.join(" ")},entrypoint:{value:n.data.env.entrypoint,useDefault:!n.data.env.entrypoint,default:c&&c.info.Config&&c.info.Config.Entrypoint&&c.info.Config.Entrypoint.join(" ")},shmsize:(M=n.data.env.shmsize)!==null&&M!==void 0?M:"64M",cpus:n.data.env.cpus,memory:n.data.env.memory,environment:n.data.env.environment,label:n.data.env.label,volumesDefault:n.data.env.volumesDefault,volumes:n.data.env.volumes,ports:$,links:n.data.env.links,network:n.data.env.network,restart:n.data.env.restart,extraHosts:n.data.env.extraHosts,autoRemove:n.data.env.autoRemove,log:n.data.env.log,dns:n.data.env.dns&&n.data.env.dns.join(`
`),ipV4:n.data.env.ipV4,ipV6:n.data.env.ipV6}),I.get("op")==de&&((be=i.current)===null||be===void 0||be.setFieldsValue({siteTitle:n.data.siteTitle,siteName:n.data.siteName})),!n.data.env.imageName){le.next=16;break}return le.next=14,(0,z.YU)({md5:n.data.env.imageName});case 14:Oe=le.sent,c=Oe.data;case 16:case"end":return le.stop()}},t)}));return function(t){return B.apply(this,arguments)}}()).finally(function(){l.destroy()});else{var N;m(Pe),(N=i.current)===null||N===void 0||N.resetFields()}},[I]),(0,e.jsx)(ge._z,{children:(0,e.jsx)(b.Z,{direction:"column",gutter:[0,10],children:(0,e.jsxs)(xe.A,{submitter:{render:function(B,t){return(0,e.jsx)(Be.S,{children:t})}},formRef:i,onFinish:function(){var N=H()(R()().mark(function B(t){var n,P,M,c;return R()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return c={siteTitle:t.siteTitle,siteName:t.siteName,imageName:t.imageName,environment:t.environment,links:t.links,ports:t.ports,volumes:t.volumes,volumesDefault:t.volumesDefault,network:t.network,privileged:(n=t.privileged)!==null&&n!==void 0?n:!1,autoRemove:(P=t.autoRemove)!==null&&P!==void 0?P:!1,restart:t.restart,cpus:t.cpus,memory:t.memory,shmsize:(M=t.shmsize)!==null&&M!==void 0?M:0,workDir:t.workDir&&!t.workDir.useDefault?t.workDir.value:"",user:t.user&&!t.user.useDefault?t.user.value:"",command:t.command&&!t.command.useDefault?t.command.value:"",entrypoint:t.entrypoint&&!t.entrypoint.useDefault?t.entrypoint.value:"",useHostNetwork:t.useHostNetwork,bindIpV6:t.bindIpV6,log:t.log,dns:t.dns&&t.dns!=""?t.dns.split(`
`):[],label:t.label,publishAllPorts:t.publishAllPorts,extraHosts:t.extraHosts,ipV4:t.ipV4,ipV6:t.ipV6},k&&d==de&&(c.containerId=k),console.log(c),$.next=5,(0,Ve.$G)(c);case 5:return T("/app/list"),$.abrupt("return",!0);case 7:case"end":return $.stop()}},B)}));return function(B){return N.apply(this,arguments)}}(),children:[(0,e.jsxs)(b.Z,{title:"\u57FA\u7840\u4FE1\u606F",headerBordered:!0,children:[(0,e.jsx)(v.Z,{name:"siteTitle",label:"\u7AD9\u70B9\u540D\u79F0",required:!0,rules:[{required:!0}],fieldProps:{onChange:function(B){var t="";if(B.target.value&&d!=de){var n,P=(0,eu.N9)(B.target.value.trim(),{toneType:"none",type:"array"});t=P.join(""),(n=i.current)===null||n===void 0||n.setFieldValue("siteName",t)}}},placeholder:"\u8BF7\u8F93\u5165\u7AD9\u70B9\u540D\u79F0"}),(0,e.jsx)(v.Z,{name:"siteName",label:"\u7AD9\u70B9\u6807\u8BC6",tooltip:"\u7AD9\u70B9\u552F\u4E00\u6807\u8BC6\uFF0C\u7528\u4E8E\u6807\u8BC6\u7AD9\u70B9\u548C\u5185\u90E8\u8BBF\u95EE",required:!0,disabled:d==de,rules:[{required:!0}],placeholder:"\u8BF7\u8F93\u5165\u7AD9\u70B9\u540D\u79F0"}),(0,e.jsx)(Te,{redeploy:d!=Pe,fromImageId:X})]}),(0,e.jsx)(De.Z,{offsetTop:50,children:(0,e.jsx)(b.Z,{style:{marginBottom:-20},children:(0,e.jsx)(Ae.Z,{activeKey:y,onChange:function(B){re(B),window.scrollTo(0,450)},items:[{label:"\u57FA\u672C\u914D\u7F6E",key:"basic"},{label:"\u5173\u8054\u914D\u7F6E",key:"link"},{label:"\u5B58\u50A8\u914D\u7F6E",key:"storage"},{label:"\u542F\u52A8\u914D\u7F6E",key:"run-command"},{label:"\u8D44\u6E90\u914D\u7F6E",key:"resource"},{label:"\u5176\u5B83",key:"other"}]})})}),(0,e.jsxs)(ae,{show:y=="basic",children:[(0,e.jsx)(nu.Z,{ref:w,showBindHost:!0,showBindIpV6:!0}),(0,e.jsx)(He.Z,{showAddButton:!0,showImportButton:!0,ref:x}),(0,e.jsx)(V.Z,{name:["siteName","useHostNetwork"],children:function(B){var t=B.siteName,n=B.useHostNetwork;if(!n)return(0,e.jsx)(lu,{})}})]}),(0,e.jsx)(ae,{show:y=="link",children:(0,e.jsx)(V.Z,{name:["siteName","useHostNetwork"],children:function(B){var t=B.siteName,n=B.useHostNetwork;return n?(0,e.jsx)(Ie.Z,{showIcon:!0,description:"\u7ED1\u5B9A\u5230\u5BBF\u4E3B\u673A\u7F51\u7EDC\u65F6\uFF0C\u65E0\u6CD5\u901A\u8FC7 Docker \u5173\u8054\u5176\u5B83\u5BB9\u5668\u3002\u8BF7\u4F7F\u7528\u5BBF\u4E3B\u673A\u5185\u7F51IP\u6216\u662F127.0.0.1\u4E92\u8054\u5BB9\u5668\u66B4\u9732\u7AEF\u53E3\u3002"}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)($e,{onAddEnv:function(M,c){var K;(K=x.current)===null||K===void 0||K.addEnvItem(M,c)},ref:E}),(0,e.jsx)(uu.Z,{siteName:t}),(0,e.jsx)(tu,{})]})}})}),(0,e.jsx)(ae,{show:y=="storage",children:(0,e.jsx)(Ke.Z,{showDefault:!0,ref:h})}),(0,e.jsx)(ae,{show:y=="run-command",children:(0,e.jsx)(qe,{})}),(0,e.jsx)(ae,{show:y=="resource",children:(0,e.jsx)(ze,{})}),(0,e.jsx)(ae,{show:y=="other",children:(0,e.jsx)(Je,{})})]},"form")})})}}}]);
