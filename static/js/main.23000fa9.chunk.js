(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,a){e.exports=a(224)},129:function(e,t,a){},130:function(e,t,a){},132:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);a(124);var n=a(0),l=a.n(n),r=a(33),s=a.n(r),i=(a(129),a(61)),o=a(9),c=a(10),h=a(12),u=a(11),d=a(13),p=a(1),b=(a(130),a(228)),m=a(225),g=a(115),f=a(41),v=a(16),E=(a(131),a(132),function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement(v.c,{to:"/",className:"navbar-brand"},l.a.createElement("i",{className:"fas fa-dice-d20"})," Rolltables"),l.a.createElement("ul",{className:"navbar-nav mr-auto"},this.props.authUser&&l.a.createElement("li",{className:"nav-item"},l.a.createElement(v.c,{to:"/pages",className:"nav-link"},"Your Pages"))),l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},this.props.authUser?l.a.createElement("span",{role:"button",className:"nav-logout nav-link",onClick:this.props.firebase.doSignOut},"Logout"):l.a.createElement(v.c,{to:"/login",className:"nav-link"},"Login"))))}}]),t}(n.Component)),y=a(14),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={pages:null,newPagesRef:null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.firebase.db.ref("pages").orderByChild("creation_date").limitToLast(5);this.setState({newPagesRef:t}),t.on("value",function(t){var a=[];t.forEach(function(e){a.push(Object(y.a)({},e.val(),{id:e.key}))}),a.reverse(),e.setState({pages:a})})}},{key:"componentWillUnmount",value:function(){this.state.newPagesRef&&this.state.newPagesRef.off("value")}},{key:"render",value:function(){return l.a.createElement("div",{className:"center"},l.a.createElement("h1",null,"Welcome!"),this.props.authUser?l.a.createElement("p",null,"Check out the latest pages below or start ",l.a.createElement(v.b,{to:"/pages"},"creating your own!")):l.a.createElement("p",null,"Check out the latest pages below or ",l.a.createElement(v.b,{to:"/login"},"login")," to start creating your own!"),this.state.pages&&l.a.createElement(m.a,{className:"center"},l.a.createElement(g.a,{sm:{span:6,offset:3},md:{span:4,offset:4}},l.a.createElement("h1",null,"Latest Pages"),l.a.createElement("div",{className:"list-group"},this.state.pages.map(function(e){return l.a.createElement(v.b,{key:e.id,to:"/view/"+e.id,className:"list-group-item list-group-item-action"},e.name)})))))}}]),t}(n.Component),j=a(34),C=a(116),k=a(119),T=a(118),P=a(232),S=a(231),w=a(226),N=a(230),I=a(227),D=a(229),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).handleTypeChange=a.handleTypeChange.bind(Object(p.a)(Object(p.a)(a))),a.handleTextChange=a.handleTextChange.bind(Object(p.a)(Object(p.a)(a))),a.handleTargetTableChange=a.handleTargetTableChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(N.a.Group,{controlId:"formGroupType"},l.a.createElement(N.a.Label,null,"Type: "),l.a.createElement(N.a.Control,{as:"select",value:this.props.value.type,onChange:this.handleTypeChange},l.a.createElement("option",{value:"text"},"Text"),l.a.createElement("option",{value:"roll"},"Roll"))),"text"===this.props.value.type&&l.a.createElement(N.a.Group,{controlId:"formGroupText"},l.a.createElement(N.a.Label,null,"Text: "),l.a.createElement(N.a.Control,{as:"textarea",rows:"3",value:this.props.value.text,onChange:this.handleTextChange})),"roll"===this.props.value.type&&l.a.createElement(N.a.Group,{controlId:"formGroupRoll"},l.a.createElement(N.a.Label,null,"Table: "),l.a.createElement(N.a.Control,{as:"select",value:this.props.value.targetTable,onChange:this.handleTargetTableChange},this.props.tables.map(function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)}))))}},{key:"handleTypeChange",value:function(e){this.props.onTypeChange(this.props.value.id,e.target.value)}},{key:"handleTextChange",value:function(e){this.props.onTextChange(this.props.value.id,e.target.value)}},{key:"handleTargetTableChange",value:function(e){this.props.onTargetTableChange(this.props.value.id,e.target.value)}}]),t}(n.Component),R=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(N.a,null,l.a.createElement(N.a.Group,{controlId:"range"},l.a.createElement(N.a.Label,null,"Range"),l.a.createElement(N.a.Control,{type:"text",value:this.props.range,onChange:this.props.onRangeChange})),l.a.createElement(N.a.Group,{controlId:"label"},l.a.createElement(N.a.Label,null,"Label"),l.a.createElement(N.a.Control,{type:"text",value:this.props.label,onChange:this.props.onLabelChange})),l.a.createElement("hr",null),this.props.values&&this.props.values.map(function(t){return l.a.createElement(n.Fragment,{key:t.id},l.a.createElement("fieldset",null,l.a.createElement("legend",{className:"d-flex justify-content-between"},"Value",l.a.createElement(P.a,{className:"delete-value",variant:"danger",onClick:e.props.onDeleteValue.bind(e,t.id),"aria-label":"Delete Value"},"\xd7")),l.a.createElement(x,{value:t,tables:e.props.tables,onTypeChange:e.props.onTypeChange,onTextChange:e.props.onTextChange,onTargetTableChange:e.props.onTargetTableChange})),l.a.createElement("hr",null))}),l.a.createElement(N.a.Group,{controlId:"addEntry"},l.a.createElement(P.a,{onClick:this.props.onAddValue},"Add Value")))}}]),t}(n.Component),M=a(30),L=a.n(M),V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={range:e.range,values:e.values,label:e.label},a.handleRangeChange=a.handleRangeChange.bind(Object(p.a)(Object(p.a)(a))),a.handleLabelChange=a.handleLabelChange.bind(Object(p.a)(Object(p.a)(a))),a.handleAddValue=a.handleAddValue.bind(Object(p.a)(Object(p.a)(a))),a.handleDeleteValue=a.handleDeleteValue.bind(Object(p.a)(Object(p.a)(a))),a.handleSaveEntry=a.handleSaveEntry.bind(Object(p.a)(Object(p.a)(a))),a.handleValueTypeChange=a.handleValueTypeChange.bind(Object(p.a)(Object(p.a)(a))),a.handleValueTextChange=a.handleValueTextChange.bind(Object(p.a)(Object(p.a)(a))),a.handleValueTargetTableChange=a.handleValueTargetTableChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(D.a,{show:this.props.show,onHide:this.props.onEntryModalClose},l.a.createElement(D.a.Header,{closeButton:!0},l.a.createElement(D.a.Title,null,this.props.id?"Edit Entry":"Add Entry")),l.a.createElement(D.a.Body,null,l.a.createElement(R,{range:this.state.range,label:this.state.label,values:this.state.values,tables:this.props.tables,onAddValue:this.handleAddValue,onDeleteValue:this.handleDeleteValue,onRangeChange:this.handleRangeChange,onLabelChange:this.handleLabelChange,onTypeChange:this.handleValueTypeChange,onTextChange:this.handleValueTextChange,onTargetTableChange:this.handleValueTargetTableChange})),l.a.createElement(D.a.Footer,null,l.a.createElement(P.a,{variant:"secondary",onClick:this.props.onEntryModalClose},"Cancel"),l.a.createElement(P.a,{variant:"primary",onClick:this.handleSaveEntry},this.props.id?"Save Entry":"Add Entry")))}},{key:"handleRangeChange",value:function(e){this.setState({range:e.target.value})}},{key:"handleLabelChange",value:function(e){this.setState({label:e.target.value})}},{key:"handleAddValue",value:function(){this.setState({values:[].concat(Object(j.a)(this.state.values),[{id:L.a.v4(),type:"text",text:"",table:""}])})}},{key:"handleDeleteValue",value:function(e){if(window.confirm("Are you sure you want to delete this value?")){var t=this.state.values.filter(function(t){return t.id!==e});this.setState({values:t})}}},{key:"handleSaveEntry",value:function(){var e={id:this.props.id?this.props.id:L.a.v4(),range:this.state.range,label:this.state.label,values:this.state.values};this.props.onSaveEntry(this.props.tableId,e),this.props.onEntryModalClose()}},{key:"handleValueTypeChange",value:function(e,t){var a=this.state.values.map(function(a){return a.id===e?Object(y.a)({},a,{type:t}):a});this.setState({values:a})}},{key:"handleValueTextChange",value:function(e,t){var a=this.state.values.map(function(a){return a.id===e?Object(y.a)({},a,{text:t}):a});this.setState({values:a})}},{key:"handleValueTargetTableChange",value:function(e,t){var a=this.state.values.map(function(a){return a.id===e?Object(y.a)({},a,{targetTable:t}):a});this.setState({values:a})}}]),t}(n.Component),F={id:"",range:[],label:"",values:[]},U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={showEntryModal:!1,editEntryProps:F,open:!1},a.handleToggle=a.handleToggle.bind(Object(p.a)(Object(p.a)(a))),a.handleNameChange=a.handleNameChange.bind(Object(p.a)(Object(p.a)(a))),a.handleHeaderChange=a.handleHeaderChange.bind(Object(p.a)(Object(p.a)(a))),a.handleDiceFormulaChange=a.handleDiceFormulaChange.bind(Object(p.a)(Object(p.a)(a))),a.handleEntryModalShow=a.handleEntryModalShow.bind(Object(p.a)(Object(p.a)(a))),a.handleEntryModalClose=a.handleEntryModalClose.bind(Object(p.a)(Object(p.a)(a))),a.handleEntryClick=a.handleEntryClick.bind(Object(p.a)(Object(p.a)(a))),a.handleDeleteTable=a.handleDeleteTable.bind(Object(p.a)(Object(p.a)(a))),a.handleDeleteEntry=a.handleDeleteEntry.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"getEntryModalProps",value:function(){return{show:this.state.showEntryModal,tables:this.props.tables,tableId:this.props.table.id,onSaveEntry:this.props.onSaveEntry,onEntryModalClose:this.handleEntryModalClose}}},{key:"render",value:function(){var e=this;return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"d-flex"},l.a.createElement("div",{className:"table-title d-flex justify-content-between",onClick:this.handleToggle},l.a.createElement("h5",null,this.props.table.name),l.a.createElement("i",{className:"fas fa-chevron-"+(this.state.open?"up":"down")}))),l.a.createElement(w.a,{in:this.state.open},l.a.createElement("div",{className:"table-container"},l.a.createElement(N.a,null,l.a.createElement(N.a.Group,{controlId:"name"},l.a.createElement(N.a.Label,null,"Table Name"),l.a.createElement(N.a.Control,{type:"text",value:this.props.table.name,onChange:this.handleNameChange})),l.a.createElement(I.a,{responsive:!0,striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement(N.a.Group,{controlId:"diceFormula"},l.a.createElement(N.a.Control,{type:"text",value:this.props.table.diceFormula,onChange:this.handleDiceFormulaChange}))),l.a.createElement("th",null,l.a.createElement(N.a.Group,{controlId:"header"},l.a.createElement(N.a.Control,{type:"text",value:this.props.table.header,onChange:this.handleHeaderChange}))),l.a.createElement("th",null))),l.a.createElement("tbody",null,this.props.table.entries&&this.props.table.entries.map(function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",{className:"td-entry",onClick:e.handleEntryClick.bind(e,t.id)},t.range),l.a.createElement("td",{className:"td-entry",onClick:e.handleEntryClick.bind(e,t.id)},t.label),l.a.createElement("td",{className:"td-fit"},l.a.createElement(P.a,{variant:"danger",onClick:e.handleDeleteEntry.bind(e,t.id),"aria-label":"Delete Entry"},"\xd7")))}))),l.a.createElement("div",{className:"inline-buttons"},l.a.createElement(N.a.Group,{controlId:"addEntry"},l.a.createElement(P.a,{onClick:this.handleEntryModalShow},"Add Entry")),l.a.createElement(N.a.Group,{controlId:"deleteTable"},l.a.createElement(P.a,{variant:"danger",onClick:this.handleDeleteTable},"Delete Table")))))),this.state.showEntryModal&&l.a.createElement(V,Object.assign({},this.getEntryModalProps(),this.state.editEntryProps)))}},{key:"handleToggle",value:function(){this.setState({open:!this.state.open})}},{key:"handleNameChange",value:function(e){this.props.onNameChange(this.props.table.id,e.target.value)}},{key:"handleHeaderChange",value:function(e){this.props.onHeaderChange(this.props.table.id,e.target.value)}},{key:"handleDiceFormulaChange",value:function(e){this.props.onDiceFormulaChange(this.props.table.id,e.target.value)}},{key:"handleEntryModalShow",value:function(){this.setState({showEntryModal:!0})}},{key:"handleEntryModalClose",value:function(){this.setState({showEntryModal:!1,editEntryProps:F})}},{key:"handleEntryClick",value:function(e){var t=this.props.table.entries.find(function(t){return t.id===e});t&&(this.setState({editEntryProps:{id:e,range:t.range,label:t.label,values:t.values}}),this.handleEntryModalShow())}},{key:"handleDeleteEntry",value:function(e){window.confirm("Are you sure you want to delete this entry?")&&this.props.onDeleteEntry(this.props.table.id,e)}},{key:"handleDeleteTable",value:function(){window.confirm("Are you sure you want to delete this table?")&&this.props.onDeleteTable(this.props.table.id)}}]),t}(n.Component),A=(a(162),function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(g.a,null,l.a.createElement("h1",null,"Page not found"))))}),H=a(121),_=a.n(H),G={name:"New Page",tables:[]},B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!0,page:null,saving:!1,pageRef:null},a.handlePageNameChange=a.handlePageNameChange.bind(Object(p.a)(Object(p.a)(a))),a.handleAddTable=a.handleAddTable.bind(Object(p.a)(Object(p.a)(a))),a.handleDeleteTable=a.handleDeleteTable.bind(Object(p.a)(Object(p.a)(a))),a.handleSaveEntry=a.handleSaveEntry.bind(Object(p.a)(Object(p.a)(a))),a.handleDeleteEntry=a.handleDeleteEntry.bind(Object(p.a)(Object(p.a)(a))),a.handleDiceFormulaChange=a.handleDiceFormulaChange.bind(Object(p.a)(Object(p.a)(a))),a.handleTableNameChange=a.handleTableNameChange.bind(Object(p.a)(Object(p.a)(a))),a.handleHeaderChange=a.handleHeaderChange.bind(Object(p.a)(Object(p.a)(a))),a.handlePageNameChange=a.handlePageNameChange.bind(Object(p.a)(Object(p.a)(a))),a.handleExportPage=a.handleExportPage.bind(Object(p.a)(Object(p.a)(a))),a.handleSavePage=a.handleSavePage.bind(Object(p.a)(Object(p.a)(a))),a.handleDeletePage=a.handleDeletePage.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.pageId){var t=this.props.firebase.db.ref("pages").child(this.props.pageId);this.setState({pageRef:t}),t.on("value",function(t){t.exists()&&t.val().author_uid===e.props.authUser.uid?e.setState({isLoading:!1,page:t.val()}):e.setState({isLoading:!1})})}else this.props.importPage?this.setState({isLoading:!1,page:this.props.importPage}):this.setState({isLoading:!1,page:G})}},{key:"componentWillUnmount",value:function(){this.state.pageRef&&this.state.pageRef.off("value")}},{key:"render",value:function(){var e=this;return!this.state.isLoading&&(this.state.page?l.a.createElement(n.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(g.a,{xs:12,sm:6},l.a.createElement(C.a,{controlId:"pageName"},l.a.createElement(k.a,null,"Page Name"),l.a.createElement(T.a,{type:"text",value:this.state.page.name,onChange:this.handlePageNameChange}))),l.a.createElement(g.a,{xs:12,sm:6},l.a.createElement("div",{className:"top-right-button"},l.a.createElement(m.a,null,this.state.page.author_uid&&l.a.createElement(n.Fragment,null,l.a.createElement(g.a,null,l.a.createElement(P.a,{onClick:this.handleExportPage},"Export Page")),l.a.createElement(g.a,null,l.a.createElement(P.a,{variant:"danger",onClick:this.handleDeletePage},"Delete Page"))),l.a.createElement(g.a,null,this.state.saving?l.a.createElement(P.a,{variant:"success"},"Saving..."):l.a.createElement(P.a,{onClick:this.handleSavePage,variant:"success"},"Save Page")))))),l.a.createElement(m.a,{className:"button-row"},l.a.createElement(g.a,null,l.a.createElement(P.a,{onClick:this.handleAddTable},"Add Table"))),l.a.createElement(m.a,null,l.a.createElement(g.a,null,this.state.page.tables&&this.state.page.tables.map(function(t){return l.a.createElement(S.a,{key:t.id},l.a.createElement(S.a.Body,null,l.a.createElement(U,{table:t,tables:e.state.page.tables,onDiceFormulaChange:e.handleDiceFormulaChange,onSaveEntry:e.handleSaveEntry,onDeleteEntry:e.handleDeleteEntry,onNameChange:e.handleTableNameChange,onHeaderChange:e.handleHeaderChange,onDeleteTable:e.handleDeleteTable})))})))):l.a.createElement(A,null))}},{key:"handlePageNameChange",value:function(e){var t=e.target.value;this.setState({page:Object(y.a)({},this.state.page,{name:t})})}},{key:"handleAddTable",value:function(){var e,t={id:L.a.v4(),name:"New Table",diceFormula:"1d20",header:"Treasure",entries:[]};e=this.state.page.tables?[].concat(Object(j.a)(this.state.page.tables),[t]):[t],this.setState({page:Object(y.a)({},this.state.page,{tables:e})})}},{key:"handleDeleteTable",value:function(e){var t=this.state.page.tables.filter(function(t){return t.id!==e});this.setState({page:Object(y.a)({},this.state.page,{tables:t})})}},{key:"handleDiceFormulaChange",value:function(e,t){var a=this.state.page.tables.map(function(a){return a.id===e&&(a.diceFormula=t),a});this.setState({tables:a})}},{key:"handleSaveEntry",value:function(e,t){var a=this.state.page.tables.map(function(a){if(a.id===e)if(a.entries){var n=a.entries.findIndex(function(e){return e.id===t.id});if(-1===n)a.entries=[].concat(Object(j.a)(a.entries),[Object(y.a)({},t)]);else Object(y.a)({},a).entries.splice(n,1,t)}else a.entries=[Object(y.a)({},t)];return a});this.setState({page:Object(y.a)({},this.state.page,{tables:a})})}},{key:"handleDeleteEntry",value:function(e,t){var a=this.state.page.tables.map(function(a){if(a.id===e&&a.entries){var n=a.entries.filter(function(e){return e.id!==t});a.entries=n}return a});this.setState({page:Object(y.a)({},this.state.page,{tables:a})})}},{key:"handleTableNameChange",value:function(e,t){var a=this.state.page.tables.map(function(a){return a.id===e&&(a.name=t),a});this.setState({tables:a})}},{key:"handleHeaderChange",value:function(e,t){var a=this.state.page.tables.map(function(a){return a.id===e&&(a.header=t),a});this.setState({tables:a})}},{key:"handleExportPage",value:function(){var e=this.state.page,t=(e.author_uid,e.created_at,Object(i.a)(e,["author_uid","created_at"])),a=JSON.stringify(t),n=new Blob([a],{type:"text/plain;charset=utf-8"});_.a.saveAs(n,"data.json")}},{key:"handleSavePage",value:function(){var e,t=this,a=this.props.firebase.db.ref("pages");(e=this.props.pageId?a.child(this.props.pageId):a.push()).set(Object(y.a)({},this.state.page,{author_uid:this.props.authUser.uid,created_at:this.props.firebase.serverTimestamp}),function(e){e&&console.log(e)}).then(function(){t.props.history.push("/view/"+e.key)})}},{key:"handleDeletePage",value:function(){var e=this;window.confirm("Do you really want to delete this page?")&&this.props.firebase.db.ref("pages").child(this.props.pageId).remove().then(function(){e.props.history.push("/pages")})}}]),t}(n.Component),J=Object(f.f)(B),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={open:!1},a.onClick=a.onClick.bind(Object(p.a)(Object(p.a)(a))),a.handleToggle=a.handleToggle.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onClick",value:function(){this.props.handleRoll(this.props.table.id)}},{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"d-flex"},l.a.createElement(P.a,{className:"roll-button",onClick:this.onClick},"Roll"),l.a.createElement("div",{className:"table-title d-flex justify-content-between",onClick:this.handleToggle},l.a.createElement("h5",null,this.props.table.name),l.a.createElement("i",{className:"fas fa-chevron-"+(this.state.open?"up":"down")}))),l.a.createElement(w.a,{in:this.state.open},l.a.createElement("div",{className:"table-container"},l.a.createElement(I.a,{responsive:!0,striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("div",{className:"rolltable-dice-header"},l.a.createElement("span",{className:"rolltable-dice-formula"},this.props.table.diceFormula))),l.a.createElement("th",{className:"rolltable-header"},this.props.table.header))),l.a.createElement("tbody",null,this.props.table.entries&&this.props.table.entries.map(function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.range),l.a.createElement("td",null,e.label))}))))))}},{key:"handleToggle",value:function(){this.setState({open:!this.state.open})}}]),t}(n.Component),Y="min",z="max";function Q(e,t){var a=t.tables.filter(function(t){return t.id===e});return 1===a.length?a[0]:0===a.length?(console.log("No matching table found"),null):void console.log("Multiple matching tables found")}function q(e,t){if(!e.entries)return[];var a,n=[],r=e.diceFormula.replace(/\s/g,"").toLowerCase().split("+").map(function(e){var t=e.split("-");return t.map(function(e){var t=e.split("d");if(1===t.length)return parseInt(t[0]);for(var n=parseInt(t[0]),l=parseInt(t[1]),r=0,s=0;s<n;s++){if(a===Y)return 1;if(a===z)return l;r+=Math.floor(Math.random()*l+1)}return r}).reduce(function(e,t){return e-t})}).reduce(function(e,t){return e+t});return n.push(l.a.createElement("div",{key:L.a.v4(),className:"rollText"},"Rolled a ",r," on table ",e.name,".")),e.entries.filter(function(e){return function(e){var t=[];return(e=e.replace(/\s/g,"")).split(",").forEach(function(e){var a=e.split("-");if(1===a.length)t.push(parseInt(a[0]));else for(var n=parseInt(a[0]),l=parseInt(a[1]),r=n;r<=l;r++)t.push(r)}),t}(e.range).includes(r)}).forEach(function(e){n.push(l.a.createElement("div",{key:L.a.v4(),className:"labelText"},e.label)),n.push.apply(n,Object(j.a)(function(e,t){var a=[];return e.values&&e.values.forEach(function(e){if("text"===e.type)a.push(l.a.createElement("div",{key:L.a.v4(),className:"valueText"},e.text));else if("roll"===e.type){var n=Q(e.targetTable,t);n&&a.push.apply(a,Object(j.a)(q(n,t)))}}),a}(e,t)))}),n}a(163);var K=function(e){var t=e.result;if(t)return l.a.createElement("div",{className:"result-text"},t)},Z=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(D.a,{show:this.props.show,onHide:this.props.onHide},l.a.createElement(D.a.Header,{closeButton:!0},l.a.createElement(D.a.Title,null,"Result")),l.a.createElement(D.a.Body,null,l.a.createElement(K,{result:this.props.result})))}}]),t}(n.Component),X=(a(164),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!0,page:null,result:null,pageRef:null,showResultModal:!1},a.handleRoll=a.handleRoll.bind(Object(p.a)(Object(p.a)(a))),a.handleEdit=a.handleEdit.bind(Object(p.a)(Object(p.a)(a))),a.handleHideResultModal=a.handleHideResultModal.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.pageId){var t=this.props.firebase.db.ref("pages").child(this.props.pageId);this.setState({pageRef:t}),t.on("value",function(t){t.exists()?e.setState({isLoading:!1,page:t.val()}):e.setState({isLoading:!1})})}else this.setState({isLoading:!1})}},{key:"componentWillUnmount",value:function(){this.state.pageRef&&this.state.pageRef.off("value")}},{key:"render",value:function(){var e=this;return!this.state.isLoading&&(this.state.page?l.a.createElement(n.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(g.a,{xs:12,sm:6},l.a.createElement("h1",null,this.state.page.name)),this.props.authUser&&this.props.authUser.uid===this.state.page.author_uid&&l.a.createElement(g.a,{xs:12,sm:6},l.a.createElement("div",{className:"top-right-button"},l.a.createElement(P.a,{onClick:this.handleEdit},"Edit Page")))),l.a.createElement(m.a,{className:"view-tables"},l.a.createElement(g.a,null,this.state.page.tables&&this.state.page.tables.map(function(t){return l.a.createElement(S.a,{key:t.id},l.a.createElement(S.a.Body,null,l.a.createElement(W,{handleRoll:e.handleRoll,table:t})))}))),l.a.createElement(Z,{result:this.state.result,show:this.state.showResultModal,onHide:this.handleHideResultModal})):l.a.createElement(A,null))}},{key:"handleRoll",value:function(e){var t=function(e,t){var a=Q(e,t);return a?q(a,t):[]}(e,this.state.page);this.setState({result:t,showResultModal:!0})}},{key:"handleEdit",value:function(){this.props.history.push("/edit/"+this.props.pageId)}},{key:"handleHideResultModal",value:function(){this.setState({showResultModal:!1})}}]),t}(n.Component)),$=Object(f.f)(X),ee=(a(165),function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.firebase.LoginScreen()}}]),t}(n.Component)),te=Object(f.f)(ee),ae=(a(166),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={pages:null,userPagesRef:null},a.handleCreatePage=a.handleCreatePage.bind(Object(p.a)(Object(p.a)(a))),a.handleImportPage=a.handleImportPage.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,this.state.pages&&l.a.createElement(n.Fragment,null,l.a.createElement(m.a,{className:"center"},l.a.createElement(g.a,{sm:{span:6,offset:3},md:{span:4,offset:4}},l.a.createElement("h1",null,"Your Pages"),l.a.createElement("div",{className:"list-group"},this.state.pages.map(function(e){return l.a.createElement(v.b,{key:e.id,to:"/view/"+e.id,className:"list-group-item list-group-item-action"},e.name)})))),l.a.createElement(m.a,{className:"center pages-button-row"},l.a.createElement(g.a,{sm:{span:6,offset:3},md:{span:4,offset:4}},l.a.createElement(P.a,{onClick:this.handleCreatePage},"Create Page"))),l.a.createElement(m.a,{className:"center pages-button-row"},l.a.createElement(g.a,{sm:{span:6,offset:3},md:{span:4,offset:4}},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"customFile"},l.a.createElement("div",{className:"btn btn-primary"},"Import Page")),l.a.createElement("input",{type:"file",accept:"application/json",hidden:!0,id:"customFile",onChange:this.handleImportPage}))))))}},{key:"componentDidMount",value:function(){var e=this;if(this.props.authUser){var t=this.props.firebase.db.ref("pages").orderByChild("author_uid").equalTo(this.props.authUser.uid);this.setState({userPagesRef:t}),t.on("value",function(t){var a=[];t.forEach(function(e){a.push(Object(y.a)({},e.val(),{id:e.key}))}),a.sort(function(e,t){return e.created_at<t.created_at?1:-1}),e.setState({pages:a})})}}},{key:"componentWillUnmount",value:function(){this.state.userPagesRef&&this.state.userPagesRef.off("value")}},{key:"handleCreatePage",value:function(){this.props.history.push("/create")}},{key:"handleImportPage",value:function(e){var t=this,a=e.target.files;if(a.length>0){var n=a[0],l=new FileReader;l.readAsText(n),l.onload=function(e){var a=e.target.result,n=JSON.parse(a);t.props.onImportPage(n),t.props.history.push("/import")}}}}]),t}(n.Component)),ne=Object(f.f)(ae),le=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).PrivateRoute=function(e){var t=e.component,n=Object(i.a)(e,["component"]);return a.state.userSet&&l.a.createElement(f.b,Object.assign({},n,{render:function(e){return a.state.authUser?l.a.createElement(t,e):l.a.createElement(f.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},a.state={userSet:!1,authUser:null,importPage:null},a.Home=a.Home.bind(Object(p.a)(Object(p.a)(a))),a.Login=a.Login.bind(Object(p.a)(Object(p.a)(a))),a.Pages=a.Pages.bind(Object(p.a)(Object(p.a)(a))),a.Create=a.Create.bind(Object(p.a)(Object(p.a)(a))),a.Edit=a.Edit.bind(Object(p.a)(Object(p.a)(a))),a.View=a.View.bind(Object(p.a)(Object(p.a)(a))),a.Import=a.Import.bind(Object(p.a)(Object(p.a)(a))),a.handleImportPage=a.handleImportPage.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.firebase.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t,userSet:!0}):e.setState({authUser:null,userSet:!0})})}},{key:"render",value:function(){return this.state.userSet&&l.a.createElement(v.a,null,l.a.createElement(E,{firebase:this.props.firebase,authUser:this.state.authUser}),l.a.createElement(b.a,{fluid:!0},l.a.createElement(m.a,null,l.a.createElement(g.a,null)),l.a.createElement(m.a,null,l.a.createElement(g.a,null,l.a.createElement(f.d,null,l.a.createElement(f.b,{exact:!0,path:"/",component:this.Home}),l.a.createElement(f.b,{exact:!0,path:"/login",component:this.Login}),l.a.createElement(this.PrivateRoute,{path:"/pages",component:this.Pages}),l.a.createElement(this.PrivateRoute,{path:"/create",component:this.Create}),l.a.createElement(this.PrivateRoute,{path:"/import",component:this.Import}),l.a.createElement(this.PrivateRoute,{path:"/edit/:pageId",component:this.Edit}),l.a.createElement(f.b,{path:"/view/:pageId",component:this.View}),l.a.createElement(f.b,{component:A}))))))}},{key:"Home",value:function(){return l.a.createElement(O,{firebase:this.props.firebase,authUser:this.state.authUser})}},{key:"Login",value:function(){return l.a.createElement(te,{firebase:this.props.firebase})}},{key:"Pages",value:function(){return l.a.createElement(ne,{firebase:this.props.firebase,authUser:this.state.authUser,onImportPage:this.handleImportPage})}},{key:"Create",value:function(){return l.a.createElement(J,{firebase:this.props.firebase,authUser:this.state.authUser})}},{key:"Import",value:function(){return this.state.importPage?l.a.createElement(J,{firebase:this.props.firebase,authUser:this.state.authUser,importPage:this.state.importPage}):l.a.createElement(f.a,{to:"/"})}},{key:"Edit",value:function(e){var t=e.match;return l.a.createElement(J,{firebase:this.props.firebase,authUser:this.state.authUser,pageId:t.params.pageId})}},{key:"View",value:function(e){var t=e.match;return l.a.createElement($,{firebase:this.props.firebase,authUser:this.state.authUser,pageId:t.params.pageId})}},{key:"handleImportPage",value:function(e){this.setState({importPage:e})}}]),t}(n.Component),re=a(31),se=a.n(re),ie=a(122),oe={apiKey:"AIzaSyDm_aiHYiZQc4ypOHIwywQ3J8JFPMRWbrk",authDomain:"rolltable.firebaseapp.com",databaseURL:"https://rolltable.firebaseio.com",projectId:"rolltable",storageBucket:"rolltable.appspot.com",messagingSenderId:"404433756558"},ce={signInSuccessUrl:"/rolltables/#/pages",signInOptions:[se.a.auth.FacebookAuthProvider.PROVIDER_ID,se.a.auth.GoogleAuthProvider.PROVIDER_ID,se.a.auth.TwitterAuthProvider.PROVIDER_ID,se.a.auth.EmailAuthProvider.PROVIDER_ID]},he=l.a.createContext(null),ue=function e(){var t=this;Object(o.a)(this,e),this.doSignOut=function(){return t.auth.signOut()},this.LoginScreen=function(e){return l.a.createElement(ie.StyledFirebaseAuth,{uiConfig:ce,firebaseAuth:t.auth})},se.a.initializeApp(oe),this.auth=se.a.auth(),this.db=se.a.database(),this.serverTimestamp=se.a.database.ServerValue.TIMESTAMP};s.a.render(l.a.createElement(he.Provider,{value:new ue},l.a.createElement(he.Consumer,null,function(e){return l.a.createElement(le,{firebase:e})})),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.23000fa9.chunk.js.map