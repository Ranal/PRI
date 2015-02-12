rabbit.util={bind:function(_1,_2){
return function(){
try{
return _1.apply(_2,arguments);
}
catch(e){
console.error(e);
}
};
},xmlEncode:function(_3){
return _3.toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
},xmlDecode:function(_4){
return _4.toString().replace(/&quot;/g,"\"").replace(/&lt;/g,"<").replace(/&amp;/g,"&");
},convertDate:function(_5){
if(_5=="7000000000000"){
return "not yet saved";
}
return Ext.util.Format.date(new Date(parseInt(_5)),"Y-m-d G:i");
},appendVersionQuery:function(_6){
return _6+"?v="+rabbit.parameters.codeVersion;
},cloneObject:function(_7){
return JSON.parse(JSON.stringify(_7));
},Class:function(_8,_9){
if(!_9){
_9=_8;
_8=function(){
};
}
var F=function(c){
if(this.init&&c!==rabbit.util.Class){
this.parent=_8.prototype;
this.init.apply(this,arguments);
}
};
_9.call(F.prototype=new _8(rabbit.util.Class),_8.prototype);
return F;
},absoluteCenter:function(_a){
$(_a).css("left",$(_a).parent().width()/2-$(_a).width()/2);
$(_a).css("top",$(_a).parent().height()/2-$(_a).height()/2);
},getResolvedPromise:function(){
var _b=new jQuery.Deferred();
_b.resolve();
return _b.promise();
},addClass:function(_c,_d){
if(typeof _c==="string"){
_c=document.getElementById(_c);
}
_c.setAttribute("class",_c.getAttribute("class")+" "+_d);
},removeClass:function(_e,_f){
if(typeof _e==="string"){
_e=document.getElementById(_e);
}
_e.setAttribute("class",_e.getAttribute("class").replace(_f,""));
},stopPropagation:function(e){
e.stopPropagation();
},compareStrings:function(s1,s2){
if(s1==null){
s1="";
}
if(s2==null){
return -1;
}
return "".localeCompare.call(s1,s2);
},compareInts:function(i1,i2){
if(isNaN(i1)){
return -1;
}
if(isNaN(i2)){
return 1;
}
if(i1==i2){
return 0;
}
if(i2>i1){
return -1;
}
return 1;
},insertAtIndex:function(_10,key,_11,_12){
var tmp={};
var _13=_.keys(_10);
for(var i=0;i<_13.length;i++){
if(i>=_12){
tmp[_13[i]]=_10[_13[i]];
delete _10[_13[i]];
}
}
_10[key]=_11;
for(var key in tmp){
_10[key]=tmp[key];
}
return _10;
}};
pidoco={console:{log:function(){
},error:function(){
},debug:function(){
},warn:function(){
},info:function(){
}}};
if(typeof console.log.bind!=="undefined"){
pidoco={console:{}};
if(typeof console.log==="function"){
pidoco.console.log=console.log.bind(console);
}
if(typeof console.error==="function"){
pidoco.console.error=console.error.bind(console);
}
if(typeof console.debug==="function"){
pidoco.console.debug=console.debug.bind(console);
}
if(typeof console.warn==="function"){
pidoco.console.warn=console.warn.bind(console);
}
if(typeof console.info==="function"){
pidoco.console.info=console.info.bind(console);
}
}else{
var illegalInvocation=true;
var testConsole=console.log;
try{
testConsole("Test console does not produce any exception.");
illegalInvocation=false;
}
catch(e){
illegalInvocation=true;
}
if(!illegalInvocation){
pidoco={console:{log:console.log,error:console.error,debug:console.debug,warn:console.warn,info:console.info}};
}
}
if((!document.URL.match(/http:\/\/localhost:.*/))&&(!document.URL.match(/http(s)?:\/\/[^\/]*stage\.pidoco\.com.*/))){
console.log=function(){
};
console.error=function(e){
var _14=(e.lineNumber!=null)?e.lineNumber:e.line;
var _15=(e.fileName!=null)?e.fileName:e.sourceURL;
var _16={"message":e.name+": "+e.message,"url":_15,"line":_14,"stack":e.stack};
rabbit.repository.communicationMgr.submitError(_16);
};
console.debug=function(){
};
console.warn=function(){
};
console.info=function(){
};
}else{
console.oldError=console.error;
console.error=function(e){
if(typeof e.stack!=="undefined"){
console.oldError(e.stack);
}else{
console.oldError(null,arguments);
}
};
}
rabbit.result={};
rabbit.ui={};
rabbit.data={};
rabbit.event={};
rabbit.parameters={};
rabbit.interaction={};
rabbit.logLevel="debug";
rabbit.communication={};
rabbit.plugins={};
rabbit.stencils={};
rabbit.util=_.extend(rabbit.util,{formatDate:function(_17){
var _18=((new Date()).getTime()-_17)/1000/60;
var _19=new Date(_17);
if(_18<2){
return t("result.discussion.time-a-minute-ago");
}else{
if(_18<60){
return Math.round(_18)+t("result.discussion.time-minutes-ago");
}else{
if(_18<1440){
return t("result.discussion.time-at")+this.pad(_19.getHours())+":"+this.pad(_19.getMinutes());
}else{
return t("result.discussion.on")+_19.toDateString();
}
}
}
},pad:function(val,len){
val=String(val);
len=len||2;
while(val.length<len){
val="0"+val;
}
return val;
},getMode:function(){
return document.getElementById("mode").firstChild.nodeValue;
},isElementChildOfSelector:function(_1a,_1b){
return $(_1a).parents(_1b).length>0;
},userRole:null});
rabbit.events={buttonClicked:"buttonClicked",buttonMouseOver:"buttonMouseOver",buttonMouseOut:"buttonMouseOut",checkBoxClicked:"checkBoxClicked",click:"click",clickAreaClicked:"clickAreaClicked",clickAreaHovered:"clickAreaHovered",iphoneSwitchClicked:"iphoneSwitchClicked",loadPage:"loadPage",pageLoaded:"pageLoaded",pageReady:"pageReady",layerStoreInserted:"layerStoreInserted",layerLoaded:"layerLoaded",showLayer:"showLayer",hideLayer:"hideLayer",propertyChange:"propertyChange",radioButtonClicked:"radioButtonClicked",svgBlur:"svgBlur",svgFocus:"svgFocus",tabButtonMouseOut:"tabButtonMouseOut",tabButtonMouseOver:"tabButtonMouseOver",showDatepicker:"showDatepicker",hideDatepicker:"hideDatepicker",changeDatepickerPage:"changeDatepickerPage",changeSlider:"changeSlider",subMenuShow:"subMenuShow",subMenuHide:"subMenuHide",sliderChangedEvent:"sliderChangedEvent",treeViewNodeClicked:"treeViewNodeClicked",treeViewScrolled:"treeViewScrolled",ratingResultChangedEvent:"ratingResultChangedEvent",ratingMouseOut:"ratingMouseOut",ratingMouseOver:"ratingMouseOver",toggleToggleSection:"toggleToggleSection",discussionStoreChanged:"discussionStoreChanged",discussionStoreAdded:"discussionStoreAdded",pageStoreLoaded:"pageStoreLoaded",folderStoreLoaded:"folderStoreLoaded",newInteractionRegistered:"newInteractionRegistered",switchOffSwitch:"switchOffSwitch",switchOnSwitch:"switchOnSwitch"};
rabbit.event.manager=function _returnEventDispatcher(){
var _1c={};
var _1d={};
return {registerOnEvent:function registerOnEvent(_1e,_1f,_20,_21){
if(typeof _1e!=="string"||typeof _1f!=="function"||typeof _20!=="object"){
throw "Invalid Arguments for registerOnEvent";
}
if(!_1c.hasOwnProperty(_1e)){
_1c[_1e]=[];
}
var _22={"callback":_1f,"thisArg":_20,"includeEventType":false};
if(_21){
_22.includeEventType=true;
}
_1c[_1e].push(_22);
},registerOnCategoryEvent:function(_23,_24,_25){
if(typeof _23!=="string"||typeof _24!=="function"||typeof _25!=="object"){
throw "Invalid Arguments for registerOnEventForCategory";
}
if(!_1d.hasOwnProperty(_23)){
_1d[_23]=[];
}
var _26={"callback":_24,"thisArg":_25,"includeEventType":true};
_1d[_23].push(_26);
console.log("ok for "+_23);
},raiseEvent:function raiseEvent(_27){
this._raiseCategoryEvent.apply(this,arguments);
this._raiseNormalEvent.apply(this,arguments);
},_raiseCategoryEvent:function raiseEvent(_28){
var _29=_28.replace(/\..*$/,"");
if(_29!=_28){
console.log("Try to raise catergory "+_29);
var _2a=_1d[_29];
if(typeof _2a==="undefined"){
console.warn("No handler category for invoked eventType "+_28+" (category: "+_29+")");
return;
}
for(var i=0;i<_2a.length;i++){
try{
var _2b=Array.prototype.slice.call(arguments);
this._raiseEvent(_2a[i],_2b);
}
catch(e){
console.error(e);
}
}
}
},_raiseNormalEvent:function raiseEvent(_2c){
var _2d=_1c[_2c];
if(typeof _2d==="undefined"){
console.warn("No handler for invoked eventType "+_2c);
return;
}
for(var i=0;i<_2d.length;i++){
try{
var _2e=Array.prototype.slice.call(arguments);
this._raiseEvent(_2d[i],_2e);
}
catch(e){
console.error(e);
}
}
},_raiseEvent:function(_2f,_30){
var _31=_2f.callback;
var _32=_2f.thisArg;
var _33=_2f.includeEventType;
if(typeof _31!=="function"){
return;
}
if(!_33){
_30.shift();
}
_31.apply(_32,_30);
}};
}();
rabbit.communication.manager={urls:{createDiscussion:"__reviewBaseUrl__/__layerId__/create",moveDiscussion:"__reviewBaseUrl__/__layerId__/move",deleteDiscussion:"__reviewBaseUrl__/__layerId__/delete",getDiscussions:"__reviewBaseUrl__/__layerId__/discussions",postEntryDiscussion:"__reviewBaseUrl__/__layerId__/post",setStateDiscussion:"__reviewBaseUrl__/__layerId__/setstate",renameDiscussion:"__reviewBaseUrl__/__layerId__/rename",loadLayerExport:"../resources/layers/__layerId____browser__-__mode__.js",loadLayer:"__baseUrl__editor-jersey/prototypes/__prototypeId__/layers/__layer__",pageLink:"__urlPattern__",rectangleExport:"../resources/overlay-rectangles/__width__-__height__-__mode__.js",rectangle:"__baseUrl__prototype/result/__prototypeId__/rect/__mode__",mp3Export:"../resources/audios/__audioId__.mp3",mp3:"__baseUrl__editor-jersey/prototypes/__prototypeId__/audios/__audioId__.mp3"},buildEditUrl:function(_34){
var _35="/rabbit/edit/"+rabbit.result.manager.currentPrototypeId+"#";
var _36="page/"+rabbit.result.manager.currentPageNr;
var _37="";
var _38=rabbit.data.pageStore.objects[_34];
var _39=rabbit.data.folderStore.objects[_38.data.parentFolder];
while(_39!==undefined){
_37="folder/"+_39.data.id+"/"+_37;
_39=rabbit.data.folderStore.objects[_39.data.parentFolder];
}
return _35+_37+_36;
},getUrl:function(_3a,_3b){
var url=this.urls[_3a];
var _3c=rabbit.result.manager.urlPattern;
url=url.replace("__baseUrl__",rabbit.common.baseUrl);
url=url.replace("__reviewBaseUrl__",rabbit.facade.getBaseUrl());
if(_3a==="loadLayer"){
_3c=rabbit.result.manager.urlPattern.replace("__page__","layer/__page__");
}
url=url.replace("__urlPattern__",_3c);
for(var key in _3b){
url=url.replace("__"+key+"__",_3b[key]);
}
return url;
},get:function(url,_3d,_3e,_3f){
return this.ajax(url,"get",_3d,_3e,_3f);
},post:function(url,_40,_41,_42){
return this.ajax(url,"post",_40,_41,_42);
},ajax:function(url,_43,_44,_45,_46){
if(!url){
throw "URL not provided for ajax";
}
_43=_43||"get";
_44=_44||undefined;
_45=_45||undefined;
_46=_46||{};
var _47=_.defaults({url:url,type:_43,dataType:_44,data:_45},_46);
return $.ajax(_47);
}};
rabbit.result.manager={datePickerClicked:false,customDatepickerObjects:[],init:function(_48,_49,_4a,_4b){
try{
rabbit.common.i18n.init({lang:rabbit.result.lang});
}
catch(e){
console.error("error during i18n init",e);
}
rabbit.prototypeType=_49;
rabbit.browser=_4a;
this.initialPageId=_48;
this.isPushStateAvailable=window.location.protocol!=="file:"&&typeof window.history.replaceState!=="undefined";
this.fromApp=_4b;
try{
this._initPlugins();
rabbit.data.folderStore.init();
rabbit.data.pageStore.init();
rabbit.data.layerStore.init();
rabbit.data.discussionStore.init();
rabbit.ui.manager.init();
if(rabbit.parameters.layerIdToOpen){
rabbit.ui.manager.showLayer($("#repository"),rabbit.parameters.layerIdToOpen);
}
rabbit.event.manager.raiseEvent(rabbit.events.pageReady);
}
catch(e){
console.error(e);
}
rabbit.ui.manager._hackToMakeArrowsWork();
if(this.isPushStateAvailable){
window.onpopstate=function(e){
if(e.state){
if(e.state.fromRefresh){
window.history.back();
}else{
rabbit.facade.loadLayer(e.state.pageId);
this.showPage($("#"+e.state.repositoryId),e.state.pageId);
console.log("new pageid "+this.currentPageNr);
}
}
}.bind(this);
window.history.replaceState({repositoryId:"repository",pageId:rabbit.result.manager.currentPageNr},"",window.location.href);
}
},setNextPageIsARefresh:function(){
window.history.replaceState({repositoryId:"repository",pageId:rabbit.result.manager.currentPageNr,fromRefresh:true},"",window.location.href);
},goBack:function(){
window.history.back();
},_initPlugins:function(){
for(var i=0;i<rabbit.facade._availablePlugins.length;i++){
try{
var _4c=rabbit.facade._availablePlugins[i];
_4c.init.apply(_4c,_4c._initialArguments);
}
catch(e){
console.error(e);
}
}
},goToPage:function(_4d,_4e){
var url;
var _4f=rabbit.data.pageStore.objects[_4d];
var _50=Boolean(_4f);
if(_50){
rabbit.mobile.trigger("pidoco:beforeGoToPage",{height:_4f.data.height,width:_4f.data.width});
url=_4f.getUrl();
}else{
if(!_4d.match(/^[a-zA-Z0-9]*:\/\//)){
url="http://"+_4d;
}else{
url=_4d;
}
}
if(!_50&&rabbit.facade.runningInApp()&&rabbit.facade.isIOS){
window.open(url,"_system");
}else{
if(_4e){
window.open(url);
}else{
location.href=url;
}
}
},showPage:function(_51,_52,_53,_54){
_53=_53||false;
var _55=_51.attr("id");
try{
if(_52===""||_52===this.currentPageNr){
return;
}
var _56=rabbit.data.pageStore.objects[_52];
console.log("show page repository:"+_55+" page:"+_52,_56);
if(_56===undefined){
this.goToPage(_52);
return;
}
rabbit.ui.manager.showPage(_51,_52,_54);
if(_53===true&&this.isPushStateAvailable){
console.log("PUSH STATE",_52);
window.history.pushState({repositoryId:_55,pageId:_52},"",_56.getUrl());
}
this.currentPageNr=_52;
_51.data("page-id",_52);
rabbit.event.manager.raiseEvent(rabbit.events.pageLoaded,_56,_51);
rabbit.mobile.trigger("pidoco:afterShowPage");
}
catch(e){
console.error(e);
}
},menuClick:function(a,b,_57){
rabbit.result.manager.goToPage(_57,false);
}};
rabbit.ui.manager={inTransition:false,init:function(){
rabbit.facade.registerOnEvent(rabbit.events.layerLoaded,this.fillWrappersWithLayer,this);
},createWrappers:function(_58,_59,_5a){
var _5b=$("<div class=\"wrapper wrapper-"+_59+"\" data-layer-id=\""+_59+"\" style=\"display: none\"></div>").appendTo(_58);
var _5c=rabbit.data.pageStore.objects[_59];
if(_5a===true&&_5c){
for(var _5d in _5c.data.layers){
if(_5c.data.layers[_5d]===true||_5c.data.layers[_5d]==="true"){
this.createWrappers(_58,_5d);
}
}
}
return _5b;
},fillWrappersWithLayer:function(_5e){
var _5f=_5e.data.id;
$(".wrapper-"+_5f+"[data-fill-me=\"true\"]:empty").each(function(_60,_61){
this.fillWrapperWithLayer(_61,_5e);
_61.removeAttribute("data-fill-me");
}.bind(this));
},fillWrapperWithLayer:function(_62,_63,_64){
var _65=_63.data.html;
var _66=_62.parentNode.id;
var _67=_63.data.html;
if(_67){
_67=$(_63.data.html.replace(/__containerId__/g,_66));
if(_64){
_67.find("script").remove();
}
$(_62).append(_67);
if(!this.inTransition){
rabbit.facade.raiseEvent(rabbit.events.layerStoreInserted,_62.children[0]);
}
}else{
_62.setAttribute("data-fill-me","true");
}
return _67;
},getLayerWrapper:function(_68,_69){
return _68.find(">.wrapper-"+_69);
},showLayer:function(_6a,_6b){
var _6c=rabbit.data.layerStore.objects[_6b];
if(!_6c){
_6c=rabbit.data.layerStore.loadLayer(_6b);
}
var _6d=this.getLayerWrapper(_6a,_6b);
if(!_6d.length){
_6d=this.createWrappers(_6a,_6b,true);
}
if(_6d[0].children.length===0){
this.fillWrapperWithLayer(_6d[0],_6c);
}
_6d.show();
rabbit.event.manager.raiseEvent(rabbit.events.showLayer,{id:_6a.attr("id")+_6b,layerId:_6b,repositoryId:_6a.attr("id")});
},hideLayer:function(_6e,_6f){
var _70=this.getLayerWrapper(_6e,_6f);
_70.hide();
rabbit.event.manager.raiseEvent(rabbit.events.hideLayer,{id:_6e.attr("id")+_6f,layerId:_6f,repositoryId:_6e.attr("id")});
},toggleLayer:function(_71,_72){
var _73=this.getLayerWrapper(_71,_72);
if(!_73.length||_73.css("display")==="none"){
return this.showLayer(_71,_72);
}else{
return this.hideLayer(_71,_72);
}
},showPage:function(_74,_75,_76){
var _77;
if(_76==="fromRight"||_76==="fromLeft"||_76==="fromTop"||_76==="fromBottom"){
_77=this.showPageWithTranslation(_74,_75,_76);
}else{
if(_76==="opacity"){
_77=this.showPageWithOpacity(_74,_75);
}else{
if(_76==="flip"){
_77=this.showPageWithFlip(_74,_75);
}else{
_77=this.showPageWithoutTransition(_74,_75);
}
}
}
if(_74.attr("id")=="repository"&&_77){
_77.done(function(){
$(_74).attr("data-review-reference-id",_75);
$(_74).attr("data-page-id",_75);
$(".border-wrapper").attr("data-current-page-id",_75);
});
}
},showPageWithoutTransition:function(_78,_79){
var _7a=rabbit.data.pageStore.objects[_79];
var _7b=new $.Deferred();
rabbit.ui.manager.showLayer(_78,_79);
_.each(_7a.data.layers,function(_7c,_7d){
this.showLayer(_78,_7d);
}.bind(this));
_78.find(">.wrapper").each(function(_7e,_7f){
var _80=_7f.getAttribute("data-layer-id");
if((!_7a.data.layers.hasOwnProperty(_80)||_7a.data.layers[_80]!==true)&&_80!=_79){
this.hideLayer(_78,_80);
}
}.bind(this));
_7b.resolve();
return _7b.promise();
},showPageWithFlip:function(_81,_82){
var _83=500;
var _84=new $.Deferred();
var _85=this.createTransitionWrapper(_81,_82);
var _86=_85.leave.find(">div");
var _87=_85.enter.find(">div");
_81.find(">div").hide();
_81.append(_85.leave).append(_85.enter);
_87.hide();
this.startTransition(_81);
_86.transition({perspective:"0px",rotateY:"90deg",duration:_83},function(){
_87.transition({perspective:"0px",rotate3d:"0,1,0,270deg",duration:0},function(){
_87.show();
this.showPageWithoutTransition(_87,_82);
_87.transition({perspective:"0px",rotate3d:"0,1,0,360deg",duration:_83},function(){
_86.transition({perspective:"0px",rotateY:"0deg",duration:0},function(){
this.stopTransition(_81);
this.showPageWithoutTransition(_81,_82);
_85.leave.remove();
_85.enter.remove();
_84.resolve();
}.bind(this));
}.bind(this));
}.bind(this));
}.bind(this));
return _84.promise();
},showPageWithOpacity:function(_88,_89){
var _8a=500;
var _8b=new $.Deferred();
var _8c=this.createTransitionWrapper(_88,_89);
var _8d=_8c.leave.find(">div");
var _8e=_8c.enter.find(">div");
_88.find(">div").hide();
_88.append(_8c.leave).append(_8c.enter);
this.startTransition(_88);
_8e.css({opacity:0});
_8d.transition({opacity:0,duration:_8a},function(){
this.showPageWithoutTransition(_8e,_89);
_8e.transition({opacity:1,duration:_8a},function(){
this.stopTransition(_88);
this.showPageWithoutTransition(_88,_89);
_8c.leave.remove();
_8c.enter.remove();
_8b.resolve();
}.bind(this));
}.bind(this));
return _8b.promise();
},showPageWithTranslation:function(_8f,_90,_91){
var _92=_8f.width();
var _93=_8f.height();
var _94=500;
var _95=new $.Deferred();
var _96=this.createTransitionWrapper(_8f,_90);
var _97=_96.leave.find(">div");
var _98=_96.enter.find(">div");
if(_91==="fromLeft"){
_98.css("left",-1*_92);
}else{
if(_91==="fromTop"){
_98.css("top",-1*_93);
}else{
if(_91==="fromBottom"){
_98.css("top",_93);
}else{
_98.css("left",_92);
}
}
}
_98.find(">div").show();
_8f.find(">div").hide();
_8f.append(_96.leave).append(_96.enter);
this.startTransition(_8f);
var _99=function(){
this.stopTransition(_8f);
this.showPageWithoutTransition(_8f,_90);
_96.leave.remove();
_96.enter.remove();
_95.resolve();
}.bind(this);
if(_91==="fromLeft"){
_97.transition({x:_92+"px",duration:_94});
_98.transition({x:_92+"px",duration:_94},_99);
}else{
if(_91==="fromTop"){
_97.transition({y:_93+"px",duration:_94});
_98.transition({y:_93+"px",duration:_94},_99);
}else{
if(_91==="fromBottom"){
_97.transition({y:"-"+_93+"px",duration:_94});
_98.transition({y:"-"+_93+"px",duration:_94},_99);
}else{
_97.transition({x:"-"+_92+"px",duration:_94});
_98.transition({x:"-"+_92+"px",duration:_94},_99);
}
}
}
return _95.promise();
},createTransitionWrapper:function(_9a,_9b){
var _9c=_9a.data("page-id");
var _9d=rabbit.data.pageStore.objects[_9b];
var _9e=rabbit.data.pageStore.objects[_9c];
var _9f,_a0;
var _a1=$("<div class=\"transition-wrapper transition-enter\" data-page-id=\""+_9b+"\"><div class=\"layer-container\"></div></div>");
var _a2=$("<div class=\"transition-wrapper transition-leave\" data-page-id=\""+_9c+"\"><div class=\"layer-container\"></div></div>");
var _a3=_a2.find(">div");
var _a4=_a1.find(">div");
var _a5=_9a.find(".wrapper-"+_9c).clone().remove("script");
var _a6=_9a.find(".wrapper-"+_9b).clone().remove("script");
for(_9f in _9d.data.layers){
_a0=_9d.data.layers[_9f];
if(_a0===true||_a0==="true"){
this.createWrappers(_a4,_9f,false);
this.showLayer(_a4,_9f);
}
}
for(_9f in _9e.data.layers){
_a0=_9e.data.layers[_9f];
if(_a0===true||_a0==="true"){
this.createWrappers(_a3,_9f,false);
this.showLayer(_a3,_9f);
}
}
_a3.append(_a5);
if(_a6.length===0){
_a6=this.createWrappers(_a4,_9b,true);
}else{
_a4.append(_a6);
}
if(_a6.children().length===0){
this.fillWrapperWithLayer(_a6[0],rabbit.data.layerStore.objects[_9b],true);
}
return {enter:_a1,leave:_a2};
},startTransition:function(_a7){
this.inTransition=true;
$("body").addClass("disable-pointer-events");
console.log(_a7);
$(_a7).addClass("during-transition");
},stopTransition:function(_a8){
this.inTransition=false;
$("body").removeClass("disable-pointer-events");
$(_a8).removeClass("during-transition");
},_forceRedraw:function(){
var _a9=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;
var _aa=navigator.userAgent.toLowerCase().indexOf("safari")>-1;
if(_a9||_aa){
document.body.style.webkitTransform="scale(1)";
}else{
if(window.resizeTo&&window.outerWidth&&window.outerHeight){
window.resizeTo(window.outerWidth+1,window.outerHeight+1);
window.resizeTo(window.outerWidth-1,window.outerHeight-1);
}
}
},_hackToMakeArrowsWork:function(){
window.setTimeout(this._forceRedraw,1000);
}};
rabbit.interaction.manager={tmp:{},actions:{click:{makeableOnDesktop:function(_ab){
return !_ab.numberOfFinger||_ab.numberOfFinger=="1"||_ab.numberOfFinger=="any";
},render:function(_ac){
if(parseInt(_ac.data.action.numberOfFinger,10)>1){
return t("interaction.action.multiFingerClick.userDescription").replace("__element__",rabbit.interaction.manager.getElementTitle(_ac));
}else{
return t("interaction.action.click.userDescription").replace("__element__",rabbit.interaction.manager.getElementTitle(_ac));
}
},defineEvent:function(_ad){
var _ae=document.getElementById(_ad.data.stencilId);
if(_ad.data.action.button=="right"){
$(_ae).on("contextmenu",function(e){
rabbit.interaction.manager.raiseInteraction(_ad,rabbit.interaction.manager.serializeEvent(e));
return false;
});
}else{
if(false){
var _af;
var _b0;
var _b1=200;
var _b2=500;
_ae.addEventListener("touchstart",function(e){
if(!_ad.data.action.numberOfFinger||(_ad.data.action.numberOfFinger&&(_ad.data.action.numberOfFinger==="any"||parseInt(_ad.data.action.numberOfFinger,10)===e.touches.length))){
_af=new Date().getTime();
}
e.preventDefault();
},false);
_ae.addEventListener("touchend",function(e){
if(_af){
var end=new Date().getTime();
if(_b1>(end-_af)){
rabbit.interaction.manager.raiseInteraction(_ad,rabbit.interaction.manager.serializeEvent(e));
_af=null;
}
}
e.preventDefault();
},false);
}else{
if(rabbit.interaction.manager.actions.click.makeableOnDesktop(_ad.data.action)){
_ae.addEventListener("click",function(e){
rabbit.interaction.manager.raiseInteraction(_ad,rabbit.interaction.manager.serializeEvent(e));
});
}
}
}
}},doubleClick:{makeableOnDesktop:true,render:function(_b3){
return t("interaction.action.doubleClick.userDescription").replace("__element__",rabbit.interaction.manager.getElementTitle(_b3));
},defineEvent:function(_b4){
var _b5=document.getElementById(_b4.data.stencilId);
if(_b4.data.action.button=="right"){
$(_b5).on("contextmenu",function(e){
rabbit.interaction.manager.raiseInteraction(_b4,rabbit.interaction.manager.serializeEvent(e));
return false;
});
}else{
if(false){
var _b6;
var _b7;
var _b8=200;
var _b9=500;
_b5.addEventListener("touchstart",function(e){
_b6=new Date().getTime();
if(_b9<(_b6-_b7)){
_b7=null;
}
e.preventDefault();
},false);
_b5.addEventListener("touchend",function(e){
if(_b6){
var end=new Date().getTime();
if(_b8>(end-_b6)){
if(!_b7){
_b7=end;
}else{
if(_b9>(end-_b7)){
rabbit.interaction.manager.raiseInteraction(_b4,rabbit.interaction.manager.serializeEvent(e));
_b6=null;
_b7=null;
}
_b7=null;
}
}
}
e.preventDefault();
},false);
}else{
_b5.addEventListener("dblclick",function(e){
rabbit.interaction.manager.raiseInteraction(_b4,rabbit.interaction.manager.serializeEvent(e));
});
}
}
}},hover:{makeableOnDesktop:true,render:function(_ba){
return t("interaction.action.hover.userDescription").replace("__element__",rabbit.interaction.manager.getElementTitle(_ba));
},defineEvent:function(_bb){
if(!_bb.data.action.trigger){
_bb.data.action.trigger="enter";
}
if(_bb.data.action.trigger=="both"||_bb.data.action.trigger=="enter"){
$("#"+_bb.data.stencilId).on("mouseenter",function(e){
rabbit.interaction.manager.raiseInteraction(_bb,rabbit.interaction.manager.serializeEvent(e));
});
}
if(_bb.data.action.trigger=="both"||_bb.data.action.trigger=="leave"){
$("#"+_bb.data.stencilId).on("mouseleave",function(e){
rabbit.interaction.manager.raiseInteraction(_bb,rabbit.interaction.manager.serializeEvent(e));
});
}
}},swipe:{makeableOnDesktop:false,render:function(_bc){
return t("interaction.action.swipe.userDescription").replace("__element__",rabbit.interaction.manager.getElementTitle(_bc));
},defineEvent:function(_bd){
var _be=Hammer(document.getElementById(_bd.data.stencilId),{swipe_max_touches:5,drag_block_horizontal:true,drag_block_vertical:true,swipe_velocity:0.4});
_be.on("swipe",function(e){
if(_bd.data.action.direction==="any"||e.gesture.direction===_bd.data.action.direction){
rabbit.facade.markHighlightTouchesAsSuccessful();
rabbit.interaction.manager.raiseInteraction(_bd,rabbit.interaction.manager.serializeEvent(e));
}
});
}},pinch:{makeableOnDesktop:false,render:function(_bf){
return t("interaction.action.pinch.userDescription").replace("__element__",rabbit.interaction.manager.getElementTitle(_bf));
},defineEvent:function(_c0){
var _c1=Hammer(document.getElementById(_c0.data.stencilId),{prevent_default:true});
var _c2=null;
var _c3=false;
if(_c0.data.action.direction==="in"){
_c2="pinchin";
}else{
if(_c0.data.action.direction==="out"){
_c2="pinchout";
}else{
_c2="pinch";
}
}
_c1.on("transformstart",function(e){
_c3=false;
});
_c1.on("transformend",function(e){
if(_c3){
rabbit.facade.markHighlightTouchesAsSuccessful();
rabbit.interaction.manager.raiseInteraction(_c0,rabbit.interaction.manager.serializeEvent(e));
}
});
_c1.on(_c2,function(e){
_c3=true;
});
}}},getInterinteractionEventId:function(_c4){
return "interaction."+_c4;
},raiseInteraction:function(_c5,e){
if(this.isInteractionExecutable(_c5)){
rabbit.facade.raiseEvent(_c5.data.uniqueId,e);
return true;
}else{
return false;
}
},isLayerHidden:function(_c6){
return $(_c6).css("display")==="none";
},isInteractionExecutable:function(_c7){
var _c8=$("#"+_c7.data.stencilId);
var _c9=_c8.parents(".layer");
for(var i=0;i<_c9.length;i++){
if(this.isLayerHidden(_c9.get(i))){
return false;
}
}
if(_c8.length===0||_c8.hasClass("layer")&&this.isLayerHidden(_c8)){
return false;
}
return true;
},renderAction:function(_ca){
return rabbit.interaction.manager.actions[_ca.data.action.type].render(_ca);
},getElementTitle:function(_cb){
var _cc=$("#"+_cb.data.stencilId).data("interactive-element-type");
return t("stencils."+_cc+"-palette");
},registerAction:function(_cd,_ce){
if(_.has(rabbit.interaction.manager.actions,_cd)){
throw "Action with name "+_cd+" already exists.";
}else{
rabbit.interaction.manager.actions[_cd]=_ce;
}
},registerReaction:function(_cf,_d0){
if(_.has(rabbit.interaction.manager.reactions,_cf)){
throw "Action with name "+_cf+" already exists.";
}else{
rabbit.interaction.manager.reactions[_cf]=_d0;
}
},reactions:{showPage:{init:function(_d1,_d2){
var _d3=rabbit.interaction.manager.reactions.showPage.getOpeningMethod(_d2);
if(rabbit.data.pageStore.objects[_d2.target]&&(_d3==="withoutReloadOnly"||_d3==="withoutReloadIframe")){
rabbit.facade.loadLayer(_d2.target);
}
},getOpeningMethod:function(_d4){
var _d5=_d4.options;
if(!_d5){
if(_d4.inNewTab==="true"){
_d5="reloadNewTab";
}else{
if(_d4.withoutReload=="true"){
_d5="withoutReloadOnly";
}else{
if(_d4.withoutReload!==undefined){
_d5="reloadOnly";
}
}
}
}
return _d5;
},callback:function(_d6,_d7,_d8){
var _d9=_d8.target;
var _da=rabbit.interaction.manager.reactions.showPage.getOpeningMethod(_d8);
if(_da==="reloadNewTab"){
rabbit.result.manager.goToPage(_d9,true);
}else{
if(_da==="withoutReloadOnly"){
rabbit.facade.showPage($("#repository"),_d9,true,_d8.transition);
}else{
if(_da==="withoutReloadIframe"){
var _db=document.getElementById(_d7.data.stencilId);
var _dc=rabbit.facade.getRepositoryFromStencil(_db);
var _dd=false;
if(_dc.attr("id")==="repository"){
_dd=true;
}
rabbit.facade.showPage(_dc,_d9,_dd,_d8.transition);
}else{
rabbit.result.manager.goToPage(_d9);
}
}
}
}},toggleLayer:{init:function(_de,_df){
rabbit.facade.loadLayer(_df.layer);
},callback:function(_e0,_e1,_e2){
var _e3=document.getElementById(_e1.data.stencilId);
var _e4=rabbit.facade.getRepositoryFromStencil(_e3);
if(_e2.visibility==="toggle"){
rabbit.facade.toggleLayer(_e4,_e2.layer);
}else{
if(_e2.visibility==="show"){
rabbit.facade.showLayer(_e4,_e2.layer);
}else{
if(_e2.visibility==="hide"){
rabbit.facade.hideLayer(_e4,_e2.layer);
}
}
}
}},vibrate:{callback:function(_e5,_e6,_e7){
navigator.vibrate=navigator.vibrate||navigator.mozVibrate||navigator.webkitVibrate||undefined;
if(navigator.vibrate){
navigator.vibrate(_e7.duration);
}else{
if(window.parentBody){
window.parentBody.trigger("pidoco:vibrate",[{duration:_e7.duration}]);
}else{
}
}
}},browserBack:{callback:function(_e8,_e9,_ea){
rabbit.facade.browserBack();
}},browserForward:{callback:function(_eb,_ec,_ed){
rabbit.facade.browserForward();
}},closeBrowserWindow:{callback:function(_ee,_ef,_f0){
rabbit.facade.closeBrowserWindow();
}}},registerInteraction:function(_f1,_f2,_f3,_f4){
if(_f1[0]==="-"){
return;
}
if(!_.isArray(_f4)){
_f4=[_f4];
}
var _f5=new rabbit.data.Interaction(_f1,_f2,_f3,_f4);
_f5.initializeAction();
_f5.initializeReactions();
rabbit.facade.raiseEvent(rabbit.events.newInteractionRegistered,_f5);
},serializeEvent:function(e){
return {};
}};
rabbit.mobile={bind:function(_f6,_f7){
if(rabbit.facade.runningInApp()){
document.addEventListener(_f6,_f7);
}
},unbind:function(_f8,_f9){
if(rabbit.facade.runningInApp()){
document.removeEventListener(_f8,_f9);
}
},trigger:function(_fa,_fb){
if(rabbit.facade.runningInApp()){
window.parentBody.trigger(_fa,_fb);
}
}};
rabbit.facade=function _returnFacade(){
var _fc=rabbit.event.manager;
return {_availablePlugins:[],vml:false,isIOS:navigator.userAgent.match(/iPad|iPhone/),isAndroid:navigator.userAgent.match(/Android/),registerPlugin:function registerPlugin(_fd,_fe){
try{
var _ff=Array.prototype.slice.call(arguments);
_ff.shift();
_fd._initialArguments=_ff;
this._availablePlugins.push(_fd);
}
catch(e){
console.log(e);
}
},registerOnEvent:function registerOnEvent(_100,_101,_102){
try{
if(_.isArray(_100)){
for(var i=0;i<_100.length;i++){
console.debug("Registering a handler for "+_100[i]);
_fc.registerOnEvent(_100[i],_101,_102,true);
}
}else{
if(_.isString(_100)){
console.debug("Registering a handler for "+arguments[0]);
_fc.registerOnEvent(_100,_101,_102,false);
}
}
}
catch(e){
console.error(e);
return undefined;
}
},registerOnCategoryEvent:function(_103,_104,_105){
try{
_fc.registerOnCategoryEvent(_103,_104,_105,true);
}
catch(e){
console.error(e);
return undefined;
}
},raiseEvent:function raiseEvent(_106){
console.debug("Raising a "+arguments[0]+" event");
try{
return _fc.raiseEvent.apply(_fc,arguments);
}
catch(e){
console.error(e);
return undefined;
}
},fireMouseOn:function fireMouseOn(_107){
var _108=document.getElementById(_107);
if(_108===null){
return;
}
console.debug("Forwarding a click event to "+_107);
_108.click();
_108.focus();
},showPage:function(){
return rabbit.result.manager.showPage.apply(rabbit.result.manager,arguments);
},getBaseUrl:function getBaseUrl(){
return rabbit.result.manager.baseUrl;
},getPageUrl:function getPageUrl(){
return this.getBaseUrl()+"/"+rabbit.result.manager.currentPageNr;
},getRole:function getRole(){
return rabbit.result.manager.currentRole;
},getUrlPattern:function(){
return rabbit.result.manager.urlPattern;
},getCurrentPageId:function(){
return rabbit.result.manager.currentPageNr;
},getCurrentPage:function(){
return rabbit.data.pageStore.objects[rabbit.result.manager.currentPageNr];
},loadLayer:function(){
return rabbit.data.layerStore.loadLayer.apply(rabbit.data.layerStore,arguments);
},getLayer:function(){
return rabbit.ui.manager.getLayer.apply(rabbit.ui.manager,arguments);
},showLayer:function(){
return rabbit.ui.manager.showLayer.apply(rabbit.ui.manager,arguments);
},hideLayer:function(){
return rabbit.ui.manager.hideLayer.apply(rabbit.ui.manager,arguments);
},toggleLayer:function(){
return rabbit.ui.manager.toggleLayer.apply(rabbit.ui.manager,arguments);
},getMode:function(){
return document.getElementById("mode").firstChild.nodeValue;
},getInteractionsAvailableForToolbar:function(){
return rabbit.interaction.manager.interactionsAvailableForToolbar;
},raiseInteraction:function(){
return rabbit.interaction.manager.raiseInteraction.apply(rabbit.interaction.manager,arguments);
},renderAction:function(_109){
return rabbit.interaction.manager.renderAction.apply(rabbit.interaction.manager,arguments);
},registerAction:function(){
return rabbit.interaction.manager.registerAction.apply(rabbit.interaction.manager,arguments);
},registerReaction:function(){
return rabbit.interaction.manager.registerReaction.apply(rabbit.interaction.manager,arguments);
},goBack:function(){
return rabbit.result.manager.goBack.apply(rabbit.result.manager,arguments);
},setNextPageIsARefresh:function(){
return rabbit.result.manager.setNextPageIsARefresh.apply(rabbit.result.manager,arguments);
},runningInApp:function(){
return rabbit.result.manager.fromApp;
},browserBack:function(){
history.go(-1);
},browserForward:function(){
history.go(1);
},closeBrowserWindow:function(){
window.close();
},getLayerFromStencil:function(_10a){
return $(_10a).closest(".layer");
},getRepositoryFromStencil:function(_10b){
return $(_10b).closest(".repository");
},isExport:function(){
return rabbit.result.manager.isExport;
},mobile:{bind:function(_10c){
return rabbit.mobile.bind.apply(rabbit.mobile,arguments);
},unbind:function(_10d){
return rabbit.mobile.unbind.apply(rabbit.mobile,arguments);
},trigger:function(_10e){
return rabbit.mobile.trigger.apply(rabbit.mobile,arguments);
}},markHighlightTouchesAsSuccessful:function(){
return rabbit.plugins.gestureHighlight.markHighlightTouchesAsSuccessful.apply(rabbit.plugins.gestureHighlight,arguments);
},"alert":function(_10f,text,_110){
rabbit.plugins.systemAlert.alert(_10f,text,_110);
}};
}();
rabbit.data.Base=rabbit.util.Class(function(){
this.init=function(){
this.data={};
};
this.getData=function(){
return this.data;
};
this.setData=function(data){
this.data=data;
return this;
};
});
rabbit.data.layerStore={objects:{},init:function(){
},loadLayer:function(_111){
if(typeof this.objects[_111]==="undefined"){
var url=null;
if(rabbit.result.manager.isExport){
var _112=(rabbit.browser==="ie")?"-ie":"";
url=rabbit.communication.manager.getUrl("loadLayerExport",{layerId:_111,browser:_112,mode:rabbit.util.getMode()});
}else{
url=rabbit.communication.manager.getUrl("loadLayer",{prototypeId:rabbit.result.manager.currentPrototypeId,layer:_111});
}
var _113=(rabbit.result.manager.isExport)?"jsonp":"html";
var ajax=rabbit.communication.manager.get(url,_113,{containerId:"__containerId__",mode:rabbit.util.getMode()},{crossDomain:rabbit.result.manager.isExport});
if(!rabbit.result.manager.isExport){
ajax.done(this.addLayerFromHtml.bind(this));
}
this.objects[_111]=new rabbit.data.Layer(_111,null,null);
}
return this.objects[_111];
},addLayerFromHtml:function(html){
layerElements=$($.trim(html));
$(layerElements).children().each(function(_114,_115){
_115=$(_115);
var _116=_115.data("layer-id");
var _117=_115.data("layer-type");
var html=$.trim(_115[0].outerHTML);
if(this.objects[_116]){
this.objects[_116].data.id=_116;
this.objects[_116].data.layerType=_117;
this.objects[_116].data.html=html;
}else{
this.objects[_116]=new rabbit.data.Layer(_116,_117,html);
}
rabbit.facade.raiseEvent(rabbit.events.layerLoaded,this.objects[_116]);
}.bind(this));
}};
rabbit.data.Layer=rabbit.util.Class(rabbit.data.Base,function(sup){
this.init=function(id,_118,html){
this.data={id:id,layerType:_118,html:html};
};
});
rabbit.data.pageStore={objects:{},init:function(){
var _119=$("#pageNames").html();
if((_119!==null)&&(_119!=="__pageNames__")){
_119=JSON.parse(_119);
}
var _11a=JSON.parse($("#pageData").html());
for(var id in _11a.pages){
this.objects[id]=new rabbit.data.Page(_.extend(_11a.pages[id],{id:id}));
this.objects[id].data.pageName=_119[id];
}
rabbit.event.manager.raiseEvent(rabbit.events.pageStoreLoaded);
}};
rabbit.data.Page=rabbit.util.Class(rabbit.data.Base,function(sup){
this.init=function(data){
sup.init.apply(this);
this.data=data||{};
};
this.getUrl=function(){
if(rabbit.result.manager.isExport){
return this.data.pageName;
}else{
return rabbit.communication.manager.getUrl("pageLink",{page:this.data.id});
}
};
});
rabbit.data.folderStore={objects:{},init:function(){
var _11b=JSON.parse($("#folderData").html());
for(var id in _11b.folders){
this.objects[id]=new rabbit.data.Folder(_.extend(_11b.folders[id],{id:id}));
}
rabbit.event.manager.raiseEvent(rabbit.events.folderStoreLoaded);
}};
rabbit.data.Folder=rabbit.util.Class(rabbit.data.Base,function(sup){
this.init=function(data){
sup.init.apply(this);
this.data=data||{};
};
});
rabbit.data.Interaction=rabbit.util.Class(rabbit.data.Base,function(sup){
this.init=function(_11c,_11d,_11e,_11f){
this.data={stencilId:_11c,interactionId:_11d,uniqueId:_11c+"-"+_11d,action:_11e,reactions:_11f};
};
this.initializeAction=function(){
if(!_.has(rabbit.interaction.manager.actions,this.data.action.type)){
console.error("Action \""+this.data.action.type+"\" is not supported");
return;
}
var init=rabbit.interaction.manager.actions[this.data.action.type].init;
if(typeof init==="function"){
init(this);
}
rabbit.interaction.manager.actions[this.data.action.type].defineEvent(this);
};
this.initializeReactions=function(){
_.each(this.data.reactions,function(_120){
if(!_.has(rabbit.interaction.manager.reactions,_120.type)){
console.error("Reaction \""+_120.type+"\" is not supported");
return;
}
var init=rabbit.interaction.manager.reactions[_120.type].init;
if(typeof init==="function"){
init(this,_120);
}
}.bind(this));
rabbit.facade.registerOnEvent(this.data.uniqueId,function(e){
_.each(this.data.reactions,function(_121){
var _122=parseInt(_121.delay,10)||0;
setTimeout(function(){
rabbit.interaction.manager.reactions[_121.type].callback(e,this,_121);
}.bind(this),_122);
}.bind(this));
},this,this.data.stencilId);
};
});
rabbit.data.discussionStore={writeAccess:false,name:"discussion",objects:{},init:function(){
},createDiscussion:function(_123,_124,x,y,data){
var url=rabbit.communication.manager.getUrl("createDiscussion",{layerId:_123});
data.title=_124;
data.x=x;
data.y=y;
return rabbit.data.discussionStore.callAjax(url,data);
},deleteDiscussion:function(_125){
delete this.objects[_125.data.id];
var url=rabbit.communication.manager.getUrl("deleteDiscussion",{layerId:_125.data.layerId});
return this.callAjax(url,{discussion:_125.data.id});
},getFromLayer:function(_126){
var url=rabbit.communication.manager.getUrl("getDiscussions",{layerId:_126});
return rabbit.data.discussionStore.callAjax(url);
},callAjax:function(url,data){
var ajax=rabbit.communication.manager.get(url,"json",data);
ajax.done(function(data){
for(var id in data.discussions){
var _127=this.objects[id];
if(_127){
_127.setData(data.discussions[id]);
}else{
_127=new rabbit.data.Discussion();
_127.setData(data.discussions[id]);
this.objects[id]=_127;
}
}
this.writeAccess=data.writeAccess;
if(data.newdiscussion){
rabbit.event.manager.raiseEvent(rabbit.events.discussionStoreAdded,this.objects[data.newdiscussion]);
}
rabbit.event.manager.raiseEvent(rabbit.events.discussionStoreChanged);
}.bind(this));
return ajax;
}};
rabbit.data.Discussion=rabbit.util.Class(rabbit.data.Base,function(sup){
this.init=function(){
sup.init.apply(this);
this.data.title="";
this.data.entries=[];
this.data.status="";
};
this.move=function(x,y,_128,_129,_12a,_12b,_12c,_12d){
this.data.x=x;
this.data.y=y;
this.data.pageX=_128;
this.data.pageY=_129;
this.data.referenceId=_12a;
this.data.pageId=_12b;
this.data.layerId=_12c;
this.data.layerContainerId=_12d;
var url=rabbit.communication.manager.getUrl("moveDiscussion",{layerId:this.data.layerId});
return rabbit.data.discussionStore.callAjax(url,{discussion:this.data.id,x:x,y:y,pageX:_128,pageY:_129,referenceId:_12a,pageId:_12b,layerId:_12c,layerContainerId:_12d});
};
this.rename=function(_12e){
if(this.data.title===_12e){
return;
}
var _12f=this.data.title;
this.data.title=_12e;
var url=rabbit.communication.manager.getUrl("renameDiscussion",{layerId:this.data.layerId});
var ajax=rabbit.data.discussionStore.callAjax(url,{discussion:this.data.id,title:this.data.title});
var _130=t("result.discussion.title-changed").replace("__oldTitle__",_12f).replace("__newTitle__",_12e);
this.addEntry(_130);
return ajax;
};
this.addEntry=function(text){
var url=rabbit.communication.manager.getUrl("postEntryDiscussion",{layerId:this.data.layerId});
return rabbit.data.discussionStore.callAjax(url,{discussion:this.data.id,text:text});
};
this.setState=function(_131){
var url=rabbit.communication.manager.getUrl("setStateDiscussion",{layerId:this.data.layerId});
return rabbit.data.discussionStore.callAjax(url,{discussion:this.data.id,state:_131});
};
});
if(typeof console.debug==="undefined"){
console.warn=console.log;
console.debug=console.log;
}else{
if(rabbit.logLevel==="error"){
console.warn=function(){
};
console.log=function(){
};
console.debug=function(){
};
}else{
if(rabbit.logLevel==="warn"){
console.log=function(){
};
console.debug=function(){
};
}else{
if(rabbit.logLevel==="log"){
console.debug=function(){
};
}
}
}
}
rabbit.plugins.background=function(){
var _132=rabbit.facade;
return {init:function init(){
},adjustBackgroundImage:function adjustBackgroundImage(_133){
var _134=document.getElementById("borderDiv");
_134.style.width=_133.data.width+"px";
_134.style.height=_133.data.height+"px";
var _135=document.getElementById("repositorybackground");
_135.setAttribute("width",_133.data.width);
_135.setAttribute("height",_133.data.height);
_135.setAttribute("style","width:"+_133.data.width+"px;height:"+_133.data.height+"px;");
this._replaceBackgroundImage(_133);
},_replaceBackgroundImage:function _replaceBackgroundImage(_136){
var _137,_138;
if(!_132.vml){
_137=document.getElementById("repositorybackground");
_138=_137.getElementsByTagNameNS("http://www.w3.org/2000/svg","image")[0];
_138.setAttribute("width",_136.data.width);
_138.setAttribute("height",_136.data.height);
if(_136.data.image!==""){
_138.setAttribute("display","inherit");
_138.setAttributeNS("http://www.w3.org/1999/xlink","href",_136.data.image);
}else{
_138.setAttribute("display","none");
_138.removeAttributeNS("http://www.w3.org/1999/xlink","href");
}
}else{
_137=document.getElementById("repositorybackground");
_138=document.createElement("img");
_138.style.width="";
_138.style.height="";
_138.setAttribute("src",_136.data.image.replace(/_(\d)+\Z/,""));
_137.replaceChild(_138,_137.firstChild);
if(_136.data.image===""){
_138.style.display="none";
}else{
_138.style.display="inline";
this._adjustBackgroundImgSize(_136.data.width,_136.data.height);
}
}
},_adjustBackgroundImgSize:function _adjustBackgroundImgSize(_139,_13a){
if(!document.images[0].complete){
window.setTimeout("rabbit.plugins.background._adjustBackgroundImgSize("+_139+", "+_13a+");",100);
return;
}
var _13b=document.images[0].width;
var _13c=document.images[0].height;
if(_13b/_13c>_139/_13a){
document.images[0].width=_139;
document.images[0].height=_13c*_139/_13b;
}else{
document.images[0].width=_13b*_13a/_13c;
document.images[0].height=_13a;
}
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.background);
rabbit.plugins.gps=function(){
var _13d=rabbit.facade;
var _13e={};
var _13f=[];
var _140={nyc:{latitude:40.714353,longitude:-74.005973},paris:{latitude:48.856614,longitude:2.352222},pidoco:{latitude:52.509561,longitude:13.451579},warschauer60:{latitude:52.509754,longitude:13.451715},alexanderplatz:{latitude:52.521832,longitude:13.413168}};
return {trackPositionWithJavaScript:true,trackPosition:false,init:function init(){
this.startTrackPositon();
_13d.registerOnEvent("positionChanged",this.positionChanged,this);
_13d.registerAction("gps",{availableOnDesktop:false,init:function(){
rabbit.plugins.gps.trackPosition=true;
},render:function(_141){
if(_141.trigger==="both"){
return t("interaction.action.gps.userDescription.both");
}else{
if(_141.trigger==="enter"){
return t("interaction.action.gps.userDescription.enter");
}else{
if(_141.trigger==="leave"){
return t("interaction.action.gps.userDescription.leave");
}
}
}
},defineEvent:function(_142){
var area=JSON.parse(_142.data.action.area);
rabbit.plugins.gps.registerMoveInOutZone(area.latitude,area.longitude,area.distance,_142.data.action.trigger,function(e){
rabbit.interaction.manager.raiseInteraction(_142,e);
});
}});
},startTrackPositon:function(){
var _143=null;
var _144=5000;
if(navigator.geolocation){
var _145=function(){
if(rabbit.plugins.gps.trackPosition){
if(rabbit.plugins.gps.trackPositionWithJavaScript){
navigator.geolocation.getCurrentPosition(function(_146){
rabbit.plugins.gps.positionChanged(_146.coords);
_143=setInterval(_145,_144);
},function(){
console.log("ERROR GPS!");
},{maximumAge:_144,enableHighAccuracy:true,timeout:10000});
}
clearInterval(_143);
}
};
_143=setInterval(_145,_144);
}
},moveToDummyPosition:function(name){
if(!_.has(_140,name)){
throw "Dummy position "+name+" not found.";
}
this.positionChanged({latitude:_140[name].latitude,longitude:_140[name].longitude});
},registerMoveInOutZone:function(_147,_148,_149,_14a,_14b){
_13f.push({latitude:_147,longitude:_148,distance:_149,callback:_14b,trigger:_14a,wasInArea:false});
},positionChanged:function(_14c){
for(var i=0;i<_13f.length;i++){
var area=_13f[i];
var _14d=this.isPositionInArea(_14c,area);
if(_14d&&!area.wasInArea&&area.trigger==="enter"||!_14d&&area.wasInArea&&area.trigger==="leave"||_14d!==area.wasInArea&&area.trigger==="both"){
area.callback();
}
area.wasInArea=_14d;
}
},isPositionInArea:function(_14e,area){
return this.calculateDistance(_14e.latitude,_14e.longitude,area.latitude,area.longitude)<area.distance;
},calculateDistance:function(lat1,lon1,lat2,lon2){
var _14f=function(deg){
return deg*(Math.PI/180);
};
var R=6371;
var dLat=_14f(lat2-lat1);
var dLon=_14f(lon2-lon1);
var a=Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(_14f(lat1))*Math.cos(_14f(lat2))*Math.sin(dLon/2)*Math.sin(dLon/2);
var c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
var d=R*c;
return d*1000;
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.gps);
rabbit.plugins.keypress=function(){
var _150=rabbit.facade;
return {init:function(){
_150.registerAction("keypress",{makeableOnDesktop:true,render:function(_151){
return t("interaction.action.keypress.userDescription");
},defineEvent:function(_152){
var _153=_152.data.action.sequence;
if(_153){
Mousetrap.bind(_153,function(){
rabbit.interaction.manager.raiseInteraction(_152,{});
});
}
}});
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.keypress);
rabbit.plugins.sound=function(){
var _154=rabbit.facade;
return {audiofiles:{},audios:{},init:function(){
_154.registerReaction("sound",{init:function(_155,_156){
var id=_156.soundUploader;
if(rabbit.result&&rabbit.result.manager.isExport){
url=rabbit.communication.manager.getUrl("mp3Export",{audioId:id});
}else{
url=rabbit.communication.manager.getUrl("mp3",{prototypeId:rabbit.result.manager.currentPrototypeId,audioId:id});
}
rabbit.plugins.sound.audiofiles[id]=new Audio(url);
},callback:function(_157,_158,_159){
rabbit.plugins.sound.audiofiles[_159.soundUploader].play();
if(_159.duration!==""){
setTimeout(function(){
rabbit.plugins.sound.audiofiles[_159.soundUploader].pause();
rabbit.plugins.sound.audiofiles[_159.soundUploader].currentTime=0;
},_159.duration);
}
}});
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.sound);
rabbit.plugins.systemAlert=function(){
var _15a=rabbit.facade;
return {init:function(){
_15a.registerReaction("systemAlert",{callback:function(_15b,_15c,_15d){
this.alert(_15d.title,_15d.text,_15d.buttonName);
}.bind(this)});
},alert:function(_15e,text,_15f){
if(_15a.runningInApp()){
rabbit.facade.mobile.trigger("pidoco:systemAlert",{title:_15e,text:text,buttonName:_15f});
}else{
alert(text);
}
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.systemAlert);
rabbit.plugins.flip=function(){
var _160=rabbit.facade;
return {init:function(){
_160.registerAction("flip",{makeableOnDesktop:false,render:function(_161){
return t("interaction.action.flip.userDescription");
},defineEvent:function(_162){
new Fliptiltshake("flip",function(){
rabbit.interaction.manager.raiseInteraction(_162,{});
});
Fliptiltshake.start();
}});
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.flip);
rabbit.plugins.tilt=function(){
var _163=rabbit.facade;
return {paused:false,init:function(){
_163.registerAction("tilt",{makeableOnDesktop:false,render:function(_164){
return t("interaction.action.tilt.userDescription");
},defineEvent:function(_165){
new Fliptiltshake("tilt",{rotation:_165.data.action.rotation,direction:(_165.data.action.direction==="both")?null:_165.data.action.direction,angle:_165.data.action.angle,callback:function(){
if(rabbit.plugins.tilt.paused){
return;
}
var _166=rabbit.interaction.manager.raiseInteraction(_165,{});
if(_166){
rabbit.plugins.tilt.paused=true;
setTimeout(function(){
rabbit.plugins.tilt.paused=false;
},500);
}
}});
Fliptiltshake.start();
}});
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.tilt);
rabbit.plugins.shake=function(){
var _167=rabbit.facade;
return {init:function(){
_167.registerAction("shake",{makeableOnDesktop:false,render:function(_168){
return t("interaction.action.shake.userDescription");
},defineEvent:function(_169){
var _16a=(_167.isIOS)?_169.data.action.intensity:_169.data.action.intensity*10;
new Fliptiltshake("shake",{threshold:_16a,durationMin:_169.data.action.duration,callback:function(){
rabbit.interaction.manager.raiseInteraction(_169,{});
}});
Fliptiltshake.start();
}});
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.shake);
rabbit.plugins.orientation=function(){
var _16b=rabbit.facade;
var _16c=null;
return {trackPositionWithJavaScript:true,trackPosition:false,init:function(){
rabbit.facade.mobile.bind("pidoco:orientationchange",function(e){
rabbit.plugins.orientation.orientationChanged(e.data.orientation);
});
window.addEventListener("orientationchange",function(){
rabbit.plugins.orientation.orientationChanged(window.orientation);
});
_16b.registerAction("orientation",{makeableOnDesktop:false,render:function(_16d){
var _16e=_16d.data.action;
if(_16e.direction==="portrait"){
return t("interaction.action.orientation.userDescription.portrait");
}else{
return t("interaction.action.orientation.userDescription.landscape");
}
},defineEvent:function(_16f){
_16b.registerOnEvent("orientationChanged",function(_170){
if(_16f.data.action.direction==_170){
rabbit.interaction.manager.raiseInteraction(_16f,{});
}
},this);
}});
},orientationChanged:function(_171){
var _172=(_171===90||_171===-90)?"landscape":"portrait";
if(_16c!=_172){
_16c=_172;
_16b.raiseEvent("orientationChanged",_172);
}
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.orientation);
rabbit.plugins.mobileInteractionTrigger={groupTopOffset:30,template:"<div class=\"trigger-container\">"+"</div>",interactions:{},triggerGroups:{},init:function(){
if(rabbit.facade.runningInApp()){
return;
}
this.container=$(this.template).appendTo("#borderDiv");
rabbit.facade.registerOnEvent(rabbit.events.newInteractionRegistered,this.newInteractionRegistered,this);
rabbit.facade.registerOnEvent(rabbit.events.showLayer,this.showLayerListener,this);
rabbit.facade.registerOnEvent(rabbit.events.hideLayer,this.hideLayerListener,this);
},newInteractionRegistered:function(_173){
var _174=_173.data.action;
var _175=typeof rabbit.interaction.manager.actions[_174.type].makeableOnDesktop==="function"?rabbit.interaction.manager.actions[_174.type].makeableOnDesktop(_174):rabbit.interaction.manager.actions[_174.type].makeableOnDesktop;
if(_175){
return;
}
if(this.interactions[_173.data.uniqueId]){
return;
}
var _176=_173.data.stencilId;
var _177=document.getElementById(_176);
if($(_177).parents(".transition-wrapper:first").length){
return;
}
var _178=$(_177).closest(".mobile-interaction-potential-trigger");
var _179=_178.attr("id");
var _17a=$(_178).position();
var _17b=true;
if($(_177).hasClass("layer")){
_17b=false;
}
var _17c=this.triggerGroups[_179];
if(!_17c){
_17c=$("<div class=\"mobile-interactions-trigger-group-"+_179+" mobile-interactions-trigger-group\" data-trigger-id=\""+_179+"\"></div>");
this.triggerGroups[_179]=_17c;
$(_178).mouseenter(function(e){
this.displayInteractions(_17c);
return false;
}.bind(this)).mouseleave(function(e){
this.hideAllInteractions();
if(_17b){
var id=$(_177).closest(".repository").attr("id");
this.displayInteractions($(".mobile-interactions-trigger-group-"+id));
}
return false;
}.bind(this));
_17c.css({left:_17a.left,top:_17a.top-this.groupTopOffset});
this.container.append(_17c);
$(_17c).mouseenter(function(e){
this.displayInteractions(_17c);
return false;
}.bind(this)).mouseleave(function(e){
this.hideAllInteractions();
if(_17b){
var id=$(_177).closest(".repository").attr("id");
this.displayInteractions($(".mobile-interactions-trigger-group-"+id));
}
return false;
}.bind(this));
}
var _17d=$("<div class=\"active interaction-trigger interaction-trigger-"+_173.data.uniqueId+" interaction-trigger-"+_174.type+"\" title=\""+t("interaction-trigger-"+_173.data.action.type+"-tooltip")+"\">"+t("trigger-label-"+_174.type)+"</div>");
if(!_17b){
_17d.addClass("interaction-trigger-layer-"+_176.replace("-layer",""));
}
_17d.click(function(){
rabbit.facade.raiseInteraction(_173);
});
_17c.append(_17d);
this.interactions[_173.data.uniqueId]=_173;
},hideAllInteractions:function(){
$(".mobile-interactions-trigger-group").removeClass("visible");
},displayInteractions:function(_17e){
$(".mobile-interactions-trigger-group").removeClass("visible");
this.updateTriggerGroupPosition(_17e);
$(_17e).addClass("visible");
},showLayerListener:function(data){
if(data.repositoryId==="repository"){
$(".interaction-trigger-layer-"+data.repositoryId+data.layerId).addClass("active");
$(".mobile-interactions-trigger-group").each(function(_17f,_180){
this.updateTriggerGroupPosition($(_180));
}.bind(this));
}
},hideLayerListener:function(data){
if(data.repositoryId==="repository"){
$(".interaction-trigger-layer-"+data.repositoryId+data.layerId).removeClass("active");
}
},updateTriggerGroupPosition:function(_181){
var _182=$("#"+_181.data("trigger-id"));
if(_182.length){
var _183=_182.position();
$(_181).css({left:_183.left,top:_183.top-this.groupTopOffset});
}
},updateAllTriggerGroupPosition:function(){
for(var _184 in this.triggerGroups){
this.updateTriggerGroupPosition(this.triggerGroups[_184]);
}
}};
rabbit.facade.registerPlugin(rabbit.plugins.mobileInteractionTrigger);
rabbit.plugins.toolbar={template:"<div class=\"toolbar\">"+"<div class=\"left\">"+"<a class=\"edit-btn btn\" href=\"#\"><span class=\"icon\" /><%= t('toolbar.edit') %></a>"+"<a class=\"sketched-btn btn\" href=\"#\"><%= t('toolbar.sketched') %></a> "+"<a class=\"sketched-arial-btn btn\" href=\"#\"><%= t('toolbar.sketchedArial') %></a> "+"<a class=\"plain-btn btn\" href=\"#\"><%= t('toolbar.plain') %></a>"+"</div>"+"<div class=\"center\">"+"</div>"+"</div>",init:function(){
if(rabbit.facade.runningInApp()){
return;
}
this.toolbar=$($.trim(_.template(this.template)())).appendTo(".toolbar-wrapper>.container");
rabbit.facade.registerOnEvent(rabbit.events.pageStoreLoaded,this.pageStoreLoaded,this);
rabbit.facade.registerOnEvent(rabbit.events.pageLoaded,this.pageLoaded,this);
},pageStoreLoaded:function(){
this.mode=document.getElementById("mode").innerHTML;
this.changeLinks(rabbit.result.manager.currentPageNr);
},pageLoaded:function(page,_185){
this.changeLinks(page.data.id);
},changeLinks:function(_186){
var _187=rabbit.communication.manager.buildEditUrl(rabbit.result.manager.currentPageNr);
var _188=rabbit.facade.getUrlPattern().replace("__page__",_186);
var _189=_188.replace(this.mode,"sketched").replace("?fontFamily=arial","");
var _18a=_188.replace(this.mode,"sketchedArial");
var _18b=_188.replace(this.mode,"plain").replace("?fontFamily=arial","");
this.toolbar.find(".edit-btn").attr("href",_187);
this.toolbar.find(".sketched-btn").attr("href",_189);
this.toolbar.find(".sketched-arial-btn").attr("href",_18a);
this.toolbar.find(".plain-btn").attr("href",_18b);
}};
rabbit.facade.registerPlugin(rabbit.plugins.toolbar);
rabbit.plugins.overlay={shownOverlays:[],rectangles:{},init:function(){
$("#borderDiv").append("<div class=\"overlay-background\"></div>");
rabbit.facade.registerReaction("showOverlay",{init:function(_18c,_18d){
this.prepareOverlay(_18c.data.uniqueId,_18d.target);
}.bind(this),callback:function(_18e,_18f,_190){
this.showOverlay(_18f.data.uniqueId,_190.target);
}.bind(this)});
rabbit.facade.registerReaction("hideOverlay",{callback:function(_191,_192,_193){
this.hideOverlay();
}.bind(this)});
},prepareOverlay:function(_194,_195){
var _196=$("<div></div>");
var id="overlay-"+_194;
var page=rabbit.data.pageStore.objects[_195];
var url,ajax;
if(page){
_196.addClass("overlay").addClass("repository").attr("id",id).attr("data-original-layer-id",_195).attr("data-page-id",_195).appendTo("body").css({width:page.data.width+"px",height:page.data.height+"px"}).data("has-rectangle",false);
this.loadRectangle(page.data.width,page.data.height);
rabbit.ui.manager.createWrappers(id,_195,true);
rabbit.facade.loadLayer(_195);
}
},loadRectangle:function(_197,_198){
if(this.hasRectangle(_197,_198)){
return;
}
if(rabbit.result.manager.isExport){
var _199=(rabbit.browser==="ie")?"-ie":"";
url=rabbit.communication.manager.getUrl("rectangleExport",{height:_198,width:_197,mode:rabbit.util.getMode()});
ajax=rabbit.communication.manager.get(url,"jsonp",{},{crossDomain:rabbit.result.manager.isExport});
}else{
url=rabbit.communication.manager.getUrl("rectangle",{prototypeId:rabbit.result.manager.currentPrototypeId,mode:rabbit.facade.getMode()});
ajax=rabbit.communication.manager.get(url,"html",{height:_198,width:_197});
ajax.success(function(html){
var _19a=$(html).children().first();
this.setRectangle(_197,_198,_19a);
}.bind(this));
}
},setRectangle:function(_19b,_19c,html){
this.rectangles[_19b+"x"+_19c]=html;
},getRectangle:function(_19d,_19e){
return $(this.rectangles[_19d+"x"+_19e]).clone();
},hasRectangle:function(_19f,_1a0){
return typeof this.rectangles[_19f+"x"+_1a0]!=="undefined";
},showOverlayBackground:function(){
$(".overlay-background").show();
},hideOverlayBackground:function(){
$(".overlay-background").hide();
},showOverlay:function(_1a1,_1a2){
var id="overlay-"+_1a1;
var page=rabbit.data.pageStore.objects[_1a2];
var _1a3=rabbit.facade.getCurrentPage();
var _1a4=$("#"+id);
if(page){
var _1a5=page.data.width;
var _1a6=page.data.height;
if(!_1a4.data("has-rectangle")){
_1a4.append(this.getRectangle(_1a5,_1a6));
_1a4.data("has-rectangle",true);
}
var _1a7=$("#repository").offset();
var _1a8=$(document).height()>$(window).height();
var top,left;
if(_1a8){
top=(window.innerHeight-parseInt(_1a6))/2;
left=(rabbit.facade.getMode()==="plain")?(_1a3.data.width-parseInt(_1a5))/2:(window.innerWidth-parseInt(_1a5))/2;
}else{
top=_1a7.top+(_1a3.data.height-parseInt(_1a6))/2;
left=_1a7.left+(_1a3.data.width-parseInt(_1a5))/2;
}
_1a4.show().css({top:top,left:left});
rabbit.ui.manager.showPage($("#"+id),_1a2);
this.showOverlayBackground();
this.shownOverlays.push(_1a4);
}else{
}
},hideOverlay:function(){
var _1a9=this.shownOverlays.pop();
_1a9.hide();
this.hideOverlayBackground();
}};
rabbit.facade.registerPlugin(rabbit.plugins.overlay);
rabbit.plugins.scrollTo=function(){
var _1aa=rabbit.facade;
return {init:function(){
_1aa.registerReaction("scrollTo",{callback:function(_1ab,_1ac,_1ad){
this.scrollTo(_1ad.position,_1ad.duration);
}.bind(this)});
},scrollTo:function(_1ae,_1af){
if(_1ae==="bottom"){
$("html, body").animate({scrollTop:$(document).height()},parseInt(_1af));
}else{
$("html, body").animate({scrollTop:0},parseInt(_1af));
}
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.scrollTo);
rabbit.plugins.startDialer={shownOverlays:[],rectangles:{},init:function(){
rabbit.facade.registerReaction("startDialer",{callback:function(_1b0,_1b1,_1b2){
this.startDialer(_1b2.phoneNumber);
}.bind(this)});
},startDialer:function(_1b3){
window.location.href="tel:"+_1b3;
}};
rabbit.facade.registerPlugin(rabbit.plugins.startDialer);
rabbit.plugins.gestureHighlight=function(){
return {init:function(){
},touchListener:function(e){
this.emptyTouches();
for(var i=0;i<e.targetTouches.length;i++){
var _1b4=e.targetTouches[i];
var _1b5=this.makeCircle(_1b4.pageX-this.offset.left,_1b4.pageY-this.offset.top);
this.touchViewer[0].appendChild(_1b5);
}
e.preventDefault();
},touchEndListener:function(){
setTimeout(function(){
var _1b6=this.touchViewer.find("div");
_1b6.each(function(){
if(!$(this).hasClass("touch-success")){
$(this).addClass("touch-fail");
}
});
setTimeout(function(){
_1b6.fadeOut();
},500);
}.bind(this),300);
},touchSuccess:function(){
var _1b7=this.touchViewer.find("div");
_1b7.each(function(){
$(this).removeClass("touch-fail");
$(this).addClass("touch-success");
});
setTimeout(function(){
_1b7.fadeOut();
},500);
},makeCircle:function(cx,cy){
var el=document.createElement("div");
el.setAttribute("class","touch");
el.style.left=cx+"px";
el.style.top=cy+"px";
return el;
},emptyTouches:function(){
this.touchViewer[0].innerHTML="";
},markHighlightTouchesAsSuccessful:function(){
var _1b8=document.getElementsByClassName("touch");
for(var i=0;i<_1b8.length;i++){
_1b8[i].setAttribute("class",_1b8[i].getAttribute("class")+" touch-success");
}
}};
}();
rabbit.facade.registerPlugin(rabbit.plugins.gestureHighlight);
rabbit.plugins.hold={init:function(){
rabbit.facade.registerAction("hold",{makeableOnDesktop:true,render:function(_1b9){
return t("interaction.action.hold.userDescription");
},defineEvent:function(_1ba){
var _1bb=Hammer(document.getElementById(_1ba.data.stencilId),{hold_timeout:_1ba.data.action.timeout});
_1bb.on("hold",function(e){
rabbit.interaction.manager.raiseInteraction(_1ba,{});
});
}});
}};
rabbit.facade.registerPlugin(rabbit.plugins.hold);
rabbit.plugins.valueChanged={listenedGroups:{},init:function(){
rabbit.facade.registerAction("booleanValueChanged",{makeableOnDesktop:true,render:function(_1bc){
return t("interaction.action.booleanValueChanged.userDescription");
},defineEvent:function(_1bd){
var _1be=_1bd.data.stencilId;
var _1bf=$("#"+_1be);
if(_1bf.hasClass("radiobutton")){
var _1c0=_1bf.find("input:first").attr("name");
if(!_.has(rabbit.plugins.valueChanged.listenedGroups,_1c0)){
rabbit.plugins.valueChanged.listenedGroups[_1c0]=[];
$("input[name=\""+_1c0+"\"]").change(function(e){
var _1c1=$(e.target).val();
var _1c2=$(e.target).data("old-selected-radiobutton-id");
for(var i=0;i<rabbit.plugins.valueChanged.listenedGroups[_1c0].length;i++){
var _1c3=rabbit.plugins.valueChanged.listenedGroups[_1c0][i];
var _1c4=_1c3.data.stencilId;
var _1c5=_1c3.data.action.selected;
if(_1c1===_1c4&&_1c5==="yes"||_1c2===_1c4&&_1c5==="no"||(_1c1===_1c4||_1c2===_1c4)&&_1c5==="toggle"){
rabbit.interaction.manager.raiseInteraction(_1c3,rabbit.interaction.manager.serializeEvent(e));
}
}
$("input[name=\""+_1c0+"\"]").data("old-selected-radiobutton-id",_1c1);
});
}
rabbit.plugins.valueChanged.listenedGroups[_1c0].push(_1bd);
}else{
if(_1bf.hasClass("checkbox")){
$("#"+_1bd.data.stencilId+" input:first").change(function(e){
if($(e.target).is(":checked")===(_1bd.data.action.selected==="yes")||_1bd.data.action.selected==="toggle"){
rabbit.interaction.manager.raiseInteraction(_1bd,rabbit.interaction.manager.serializeEvent(e));
}
});
}else{
if(_1bf.hasClass("iphoneSwitch")){
var _1c6=function(id){
if(_1bd.data.stencilId===id){
rabbit.interaction.manager.raiseInteraction(_1bd);
}
};
if(_1bd.data.action.selected==="yes"||_1bd.data.action.selected==="toggle"){
rabbit.facade.registerOnEvent(rabbit.events.switchOffSwitch,_1c6,this);
}
if(_1bd.data.action.selected==="no"||_1bd.data.action.selected==="toggle"){
rabbit.facade.registerOnEvent(rabbit.events.switchOnSwitch,_1c6,this);
}
}
}
}
}});
rabbit.facade.registerAction("stringValueChanged",{makeableOnDesktop:true,render:function(_1c7){
return t("interaction.action.stringValueChanged.userDescription");
},defineEvent:function(_1c8){
$("#"+_1c8.data.stencilId).change(function(e){
if(e.target.value===_1c8.data.action.value){
rabbit.interaction.manager.raiseInteraction(_1c8,rabbit.interaction.manager.serializeEvent(e));
}
});
}});
}};
rabbit.facade.registerPlugin(rabbit.plugins.valueChanged);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.autocomplete=(function(){
return {init:function init(){
},setupAutocomplete:function setupAutocomplete(id,_1c9){
_1c9=_1c9.split("|c");
var oDS=new YAHOO.util.LocalDataSource(_1c9);
oDS.responseSchema={fields:["state"]};
var oAC=new YAHOO.widget.AutoComplete(id+"-input",id+"-con",oDS);
oAC.prehighlightClassName="yui-ac-prehighlight";
oAC.useShadow=false;
$("#"+id+"-input").click(function(){
rabbit.facade.markHighlightTouchesAsSuccessful();
});
}};
})();
rabbit.facade.registerPlugin(rabbit.stencils.autocomplete);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.textinput=(function(){
return {init:function init(){
rabbit.facade.registerOnEvent(rabbit.events.layerStoreInserted,this.layerStoreInsertedListener,this);
rabbit.facade.registerOnEvent(rabbit.events.pageReady,this.pageReadyListener,this);
},layerStoreInsertedListener:function(_1ca){
$(_1ca).find(".stencil.textinput").click(function(){
rabbit.facade.markHighlightTouchesAsSuccessful();
});
},pageReadyListener:function(){
$(".stencil.textinput").click(function(){
rabbit.facade.markHighlightTouchesAsSuccessful();
});
}};
})();
rabbit.facade.registerPlugin(rabbit.stencils.textinput);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.combobox=(function(){
return {init:function init(){
rabbit.facade.registerOnEvent(rabbit.events.layerStoreInserted,this.layerStoreInsertedListener,this);
rabbit.facade.registerOnEvent(rabbit.events.pageReady,this.pageReadyListener,this);
},layerStoreInsertedListener:function(_1cb){
$(_1cb).find(".stencil.combobox").click(function(){
rabbit.facade.markHighlightTouchesAsSuccessful();
});
},pageReadyListener:function(){
$(".stencil.combobox").click(function(){
rabbit.facade.markHighlightTouchesAsSuccessful();
});
}};
})();
rabbit.facade.registerPlugin(rabbit.stencils.combobox);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.accordion=function(){
var _1cc=600;
var _1cd=".accordion-header";
var _1ce=".accordion-content";
var _1cf="accordion-active";
var _1d0=30;
var _1d1=function(_1d2){
var _1d3=$(_1d2).parents().children(_1cd);
var _1d4=_1d3.index(_1d2);
return _1d4;
};
var _1d5=function(_1d6){
return $(_1d6).parent().parent().parent().attr("id");
};
var _1d7=function(_1d8){
return $("#"+_1d8).find(_1cd).length;
};
var _1d9=function(_1da,_1db,_1dc){
var _1dd=$("#"+_1da+">div>"+_1cd).length;
$("#"+_1da).find(_1ce+">div, "+_1ce+">iframe").css("position","relative").css("left","0px").css("top","0px").css("width",_1db+"px").css("height",(_1dc-_1dd*_1d0-2)+"px");
};
return {_accordions:{},init:function init(){
},setupAccordion:function(id,_1de,_1df,_1e0){
var _1e1=_1d7(id);
if(_1e0<1){
_1e0=1;
}
if(_1e0>_1e1){
_1e0=_1e1;
}
_1e0--;
$("#"+id).find(_1cd).click({"accordionObject":this},this.raiseClickCallback);
_1d9(id,_1de,_1df);
this.showTab(id,_1e0,false);
},showTab:function(id,_1e2,_1e3){
this._accordions[id]=_1e2;
if(_1e3){
$("#"+id).find(_1ce).slideUp(_1cc);
}else{
$("#"+id).find(_1ce).hide();
}
var _1e4=$("#"+id).find(_1cd).removeClass(_1cf)[_1e2];
$(_1e4).addClass(_1cf).next().slideDown(_1cc,function onCompleteCallback(){
if(BrowserDetect.browser=="MSIE"){
$(this).css("width",$(this).css("width"));
}
});
},raiseClickCallback:function(evt){
evt.data.accordionObject.clickCallback(evt.data.accordionObject,this);
},clickCallback:function(that,_1e5){
var _1e6=_1d1(_1e5);
var _1e7=_1d5(_1e5);
if(that._accordions[_1e7]===_1e6){
return;
}
rabbit.facade.markHighlightTouchesAsSuccessful();
that.showTab(_1e7,_1e6,true);
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.accordion);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.button=function(){
var _1e8=rabbit.facade;
return {init:function init(){
_1e8.registerOnEvent(rabbit.events.buttonMouseOver,this.onMouseOver,this);
_1e8.registerOnEvent(rabbit.events.buttonMouseOut,this.onMouseOut,this);
},onMouseOver:function onMouseOver(id){
document.getElementById(id).className="ClickableSketchHover";
},onMouseOut:function onMouseOut(id){
document.getElementById(id).className="ClickableSketch";
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.button);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.checkBox=function(){
var _1e9=rabbit.facade;
return {init:function init(){
rabbit.facade.registerOnEvent(rabbit.events.checkBoxClicked,this.onClick,this);
},onClick:function onClick(_1ea,_1eb){
rabbit.facade.markHighlightTouchesAsSuccessful();
console.log("Click to checkbox "+_1ea);
var _1ec=document.getElementById(_1ea);
if(_1ec==null){
return true;
}
var _1ed=document.getElementById(_1eb);
if(_1ed==null){
return true;
}
if(!_1ec.checked){
_1ed.setAttribute("visibility","hidden");
}else{
_1ed.setAttribute("visibility","inherit");
}
return true;
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.checkBox);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.datepicker=function(){
var _1ee=rabbit.facade;
var _1ef=[];
var _1f0=false;
var _1f1=null;
var _1f2=function(id){
for(var i=0;i<_1ef.length;i++){
var _1f3=_1ef[i];
if(_1f3.calendarId==id){
return _1f3;
}
}
return null;
};
var _1f4=function(id,year,_1f5){
var _1f6=_1f2(id);
_1f6.calendar.setYear(year);
_1f6.calendar.setMonth(_1f5);
_1f6.calendar.render();
};
var _1f7=function _hideCalendar(id,_1f8,_1f9){
if(_1f8){
document.getElementById(id+"_input").value=_1f8;
}
var _1fa=_1f2(id);
_1fa.calendarVisible=false;
var svg=document.getElementById(_1fa.calendarId+"_open_calendar");
if(svg){
svg.style.display="none";
}
_1fa.calendar.hide();
_1fa.overlay.hide();
_1f0=false;
$("html").unbind("click",_1f1);
};
var _1fb=function _showCalendar(id,_1fc){
var _1fd=_1f2(id);
_1fd.calendarVisible=true;
_1fd.calendar.show();
_1fd.overlay.show();
_1f0=true;
var svg=document.getElementById(_1fd.calendarId+"_open_calendar");
if(svg){
svg.style.display="block";
}
_1f1=function(e){
if(!rabbit.util.isElementChildOfSelector(e.target,"#"+id)){
_1f7(id);
}
};
$("html").bind("click",_1f1);
};
var _1fe=function _1fe(_1ff){
for(var i=0;i<_1ff.childNodes.length;i++){
var _200=_1ff.childNodes[i];
if(_200.nodeType!=1){
continue;
}
if(_200.getAttribute("id")==undefined){
_200.setAttribute("id",_1ff.getAttribute("id")+"_"+i);
}
arguments.callee(_200);
}
};
var _201=function _201(evt){
if(!evt){
return;
}
if(!_1ee.vml){
evt.stopPropagation();
}else{
evt.cancelBubble=true;
}
};
return {init:function init(){
_1ee.registerOnEvent(rabbit.events.click,this.hideDatePickerOnClick,this);
rabbit.facade.registerOnEvent(rabbit.events.showDatepicker,_1fb,this);
rabbit.facade.registerOnEvent(rabbit.events.hideDatepicker,_1f7,this);
rabbit.facade.registerOnEvent(rabbit.events.changeDatepickerPage,_1f4,this);
},calendarOpen:function(id){
return _1f0;
}(),setupDatepicker:function setupDatepicker(id){
try{
var _202=new YAHOO.widget.Overlay(id+"_ov",{zIndex:9990,width:"200px",height:"200px",context:[id+"_input","tl","bl"]});
_202.render();
if(rabbit.result.lang=="de"){
var cal=new YAHOO.widget.Calendar(id+"_cal",{START_WEEKDAY:1});
cal.cfg.setProperty("DATE_FIELD_DELIMITER",".");
cal.cfg.setProperty("MDY_DAY_POSITION",1);
cal.cfg.setProperty("MDY_MONTH_POSITION",2);
cal.cfg.setProperty("MDY_YEAR_POSITION",3);
cal.cfg.setProperty("MD_DAY_POSITION",1);
cal.cfg.setProperty("MD_MONTH_POSITION",2);
cal.cfg.setProperty("MONTHS_SHORT",["Jan","Feb","MŠr","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]);
cal.cfg.setProperty("MONTHS_LONG",["Januar","Februar","MŠrz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]);
cal.cfg.setProperty("WEEKDAYS_1CHAR",["S","M","D","M","D","F","S"]);
cal.cfg.setProperty("WEEKDAYS_SHORT",["So","Mo","Di","Mi","Do","Fr","Sa"]);
cal.cfg.setProperty("WEEKDAYS_MEDIUM",["Son","Mon","Die","Mit","Don","Fre","Sam"]);
cal.cfg.setProperty("WEEKDAYS_LONG",["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]);
}else{
var cal=new YAHOO.widget.Calendar(id+"_cal");
}
var _203=new Object();
_203["calendar"]=cal;
_203.overlay=_202;
_203["calendarId"]=id;
_203["calendarVisible"]=false;
_1ef.push(_203);
cal.selectEvent.subscribe(rabbit.util.bind(function(evt,d){
var _204=this.formatIsoDate(d[0][0][0],d[0][0][1],d[0][0][2]);
rabbit.facade.raiseEvent(rabbit.events.hideDatepicker,_203.calendarId,_204,rabbit.util.userRole,"displayMouseClick");
},this),cal,true);
cal.render();
cal.hide();
_202.hide();
var _205=id+"_cal";
_1fe(document.getElementById(id+"_cal"));
cal.changePageEvent.subscribe(rabbit.util.bind(function(evt,d){
var date=cal.cfg.getProperty("pagedate");
var year=date.getUTCFullYear();
var _206=date.getMonth();
rabbit.facade.raiseEvent(rabbit.events.changeDatepickerPage,_203.calendarId,year,_206,rabbit.util.userRole,"displayMouseClick");
_1fe(document.getElementById(_205));
},this),cal,true);
YAHOO.util.Event.addListener(id+"_button","click",rabbit.util.bind(this.toggleCalendarCallback,this),_203);
YAHOO.util.Event.addListener(id+"_input","focus",rabbit.util.bind(this.toggleCalendarCallback,this),_203);
YAHOO.util.Event.addListener(id+"_ov","click",_201);
}
catch(e){
console.error("Error setting up datepicker");
console.error(e);
}
},hideDatePickerOnClick:function hideDatePickerOnClick(e){
rabbit.facade.markHighlightTouchesAsSuccessful();
if(this.calendarOpen){
for(var i=0;i<_1ef.length;i++){
var _207=_1ef[i];
if(_207.calendarVisible){
rabbit.facade.raiseEvent(rabbit.events.hideDatepicker,_207.calendarId,null,rabbit.util.userRole,"displayMouseClick");
}
}
}
},toggleCalendarCallback:function toggleCalendarCallback(evt,_208){
if(!_208.calendarVisible){
rabbit.facade.raiseEvent(rabbit.events.showDatepicker,_208.calendarId,rabbit.util.userRole,"displayMouseClick");
this.calendarOpen=true;
}else{
rabbit.facade.raiseEvent(rabbit.events.hideDatepicker,_208.calendarId,null,rabbit.util.userRole,"displayMouseClick");
this.calendarOpen=false;
}
_201(evt);
},formatIsoDate:function formatIsoDate(y,m,d){
return y.toString()+(m<10?"-0":"-")+m.toString()+(d<10?"-0":"-")+d.toString();
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.datepicker);
rabbit.stencils.menu=function(){
var _209=[];
var _20a=function(_20b){
for(var i=0;i<_209.length;i++){
var menu=_209[i];
if(menu.domId==_20b){
return menu;
}
}
return null;
};
var _20c=function(_20d,_20e){
var menu=_20a(_20d);
if(menu){
for(var i=0;i<_20e.length;i++){
var _20f=menu.getSubmenus();
for(var j=0;j<_20f.length;j++){
if(_20f[j].id==_20e[i]){
menu=_20f[j];
}
}
}
}
return menu;
};
var _210=function(_211,_212,_213){
if(_213!=null&&_213!=rabbit.util.userRole){
var _214=_20c(_211,_212);
if(_214){
_214.show();
}
}
};
var _215=function(_216,_217,_218){
if(_218!=null&&_218!=rabbit.util.userRole){
var _219=_20c(_216,_217);
if(_219){
_219.hide();
}
}
};
var _21a=function(obj){
var menu=obj;
var _21b=[];
while(menu.getRoot()!=menu){
_21b.push(menu.id);
menu=menu.getRoot();
}
var _21c=menu.domId;
var _21d=[];
for(var i=_21b.length-1;i>=0;i--){
_21d.push(_21b[i]);
}
return [_21c,_21d];
};
var _21e=function(){
var _21f=_21a(this);
rabbit.facade.raiseEvent(rabbit.events.subMenuShow,_21f[0],_21f[1],rabbit.util.userRole);
};
var _220=function(){
var _221=_21a(this);
rabbit.facade.raiseEvent(rabbit.events.subMenuHide,_221[0],_221[1],rabbit.util.userRole);
};
return {init:function init(){
rabbit.facade.registerOnEvent(rabbit.events.subMenuShow,_210,this);
rabbit.facade.registerOnEvent(rabbit.events.subMenuHide,_215,this);
},convertMethodIntoFunction:function(_222){
for(var i=0;i<_222.length;i++){
var _223=_222[i].onclick;
if(_223&&_223.fn!=="undefined"){
_223.fn=eval(_223.fn);
}
if(_222[i].submenu){
var _224=_222[i].submenu.itemdata;
this.convertMethodIntoFunction(_224);
}
}
},setupMenu:function setupMenu(id,_225,_226){
try{
_225=_225.replace(/:rabbit.result.manager.menuClick,/g,":\"rabbit.result.manager.menuClick\",");
_225=JSON.parse(_225);
this.convertMethodIntoFunction(_225);
if(_226=="vertical"){
var _227=new YAHOO.widget.Menu(id+"-bar",{itemdata:_225,visible:true,position:"static",hidedelay:750,lazyload:true});
}else{
var _227=new YAHOO.widget.MenuBar(id+"-bar",{lazyload:true,autosubmenudisplay:true,showdelay:10,itemdata:_225});
}
_227.render(id+"-menu-container");
_227.show();
_227.domId=id;
_209.push(_227);
_227.subscribe("show",_21e);
_227.subscribe("hide",_220);
}
catch(e){
console.error(e);
}
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.menu);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.radioButton=function(){
var _228=rabbit.facade;
return {init:function init(){
_228.registerOnEvent(rabbit.events.radioButtonClicked,this.onClick,this);
$(".radiobutton input:checked").each(function(){
var name=$(this).attr("name");
$("input[name=\""+name+"\"]").data("old-selected-radiobutton-id",$(this).attr("value"));
});
},getAllRadioButtons:function getAllRadioButtons(){
var _229=[];
var _22a=document.getElementsByTagName("input");
for(var i=0;i<_22a.length;i++){
if(_22a[i].type==="radio"){
_229.push(_22a[i]);
}
}
return _229;
},onClick:function onClick(_22b,_22c){
rabbit.facade.markHighlightTouchesAsSuccessful();
console.log("Click to radioButton "+_22b);
var _22d=this.getAllRadioButtons();
for(var i=0;i<_22d.length;i++){
var _22e=_22d[i];
var _22f=_22e.getAttribute("id")+"_svgChecked";
var _230=document.getElementById(_22f);
if(_230!=null){
if(!_22e.checked){
if(rabbit.facade.vml){
_230.style.setAttribute("display","none");
}else{
_230.setAttribute("visibility","hidden");
}
}else{
if(rabbit.facade.vml){
_230.style.removeAttribute("display");
}else{
_230.setAttribute("visibility","inherit");
}
}
}
}
return true;
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.radioButton);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.slider=function(){
var _231={};
var _232=function(_233,_234,_235){
var _236=_231[_233];
if(!_236){
return;
}
if(_235!=null&&_235!=rabbit.util.userRole){
console.log("_sliderChangedCallback "+_234);
_236.setValue(_234);
}
};
return {init:function init(){
rabbit.facade.registerOnEvent(rabbit.events.sliderChangedEvent,_232,this);
},setupSlider:function(id,_237,_238,_239,_23a){
try{
_237=parseInt(_237);
_239=parseInt(_239);
if(_23a){
_23a=parseInt(_23a)*2;
}else{
_23a=0;
}
var _23b=(_239-(_239)/21)/10;
var _23c=_23b*_237;
var _23d=_239-_23c;
var _23e=null;
if(_238=="vertical"){
_23e=YAHOO.widget.Slider.getVertSlider(id,id+"_thumb_vert",_23d,_23c,_23b);
}else{
_23e=YAHOO.widget.Slider.getHorizSlider(id,id+"_thumb_horiz",_23d,_23c,_23b);
}
_231[id]=_23e;
_23e.animate=false;
_23e.subscribe("change",function(){
var _23f=Math.round(this.getValue()+_23a);
rabbit.facade.raiseEvent(rabbit.events.sliderChangedEvent,id,_23f,rabbit.util.userRole);
});
}
catch(e){
console.error(e);
}
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.slider);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.stencil=function(){
var _240=rabbit.facade;
var _241=function _241(_242,_243){
var node=document.getElementById(_242);
if(node){
node.style.setProperty("fill",_243,"");
}
};
var _244=function _244(_245,_246){
var _247,node=document.getElementById(_245);
if(node){
if(_246=="url(#sketchedHover)"){
_247=node.ownerDocument.createElement("v:fill");
_247.setAttribute("src",rabbit.common.baseUrl+"result/icons/sketchedFilledButton.png");
_247.setAttribute("type","tile");
_247.setAttribute("origin","0.1,0.1");
_247.setAttribute("size","175pt,75pt");
_247.setAttribute("on","true");
node.getElementsByTagName("fill")[0].parentNode.replaceChild(_247,node.getElementsByTagName("fill")[0]);
}else{
_247=node.ownerDocument.createElement("v:fill");
_247.setAttribute("color",_246);
_247.setAttribute("on"," true");
node.getElementsByTagName("fill")[0].parentNode.replaceChild(_247,node.getElementsByTagName("fill")[0]);
}
}
};
return {init:function init(){
_240.registerOnEvent(rabbit.events.svgFocus,this.onSvgFocus,this);
_240.registerOnEvent(rabbit.events.svgBlur,this.onSvgBlur,this);
_240.registerOnEvent(rabbit.events.propertyChange,this.onPropertyChanged,this);
},setFill:function setFill(id,_248){
if(rabbit.facade.vml){
_244(id,_248);
}else{
_241(id,_248);
}
},onSvgFocus:function onSvgFocus(_249){
var _24a;
if(_249 instanceof Array){
for(var key in _249){
_24a=document.getElementById(_249[key]);
if(_24a!=null){
_24a.setAttribute("class","svg_selected_element");
}
}
}else{
_24a=document.getElementById(_249);
if(_24a!=null){
_24a.setAttribute("class","svg_selected_element");
}
}
},onSvgBlur:function onSvgBlur(_24b){
var _24c;
if(_24b instanceof Array){
for(var key in _24b){
_24c=document.getElementById(_24b[key]);
if(_24c!=null){
_24c.setAttribute("class","svg_unselected_element");
}
}
}else{
_24c=document.getElementById(_24b);
if(_24c!=null){
_24c.setAttribute("class","svg_unselected_element");
}
}
},onPropertyChanged:function onPropertyChanged(_24d,_24e){
var _24f=document.getElementById(_24e);
if(_24f==null){
return true;
}
console.debug("Property changed on "+_24d);
if(event.srcElement[event.propertyName]==false){
_24f.style.setAttribute("display","none");
}else{
_24f.style.removeAttribute("display");
}
return true;
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.stencil);
rabbit.stencils.tabButton=function(){
var _250=rabbit.facade;
var _251=function _251(_252,_253){
var node=document.getElementById(_252);
if(node){
node.style.setProperty("fill",_253,"");
}
};
var _254=function _254(_255,_256){
var _257,node=document.getElementById(_255);
if(node){
if(_256=="url(#sketchedHover)"){
_257=node.ownerDocument.createElement("v:fill");
_257.setAttribute("src",rabbit.common.baseUrl+"result/icons/sketchedFilledButton.png");
_257.setAttribute("type","tile");
_257.setAttribute("origin","0.1,0.1");
_257.setAttribute("size","175pt,75pt");
_257.setAttribute("on","true");
node.getElementsByTagName("fill")[0].parentNode.replaceChild(_257,node.getElementsByTagName("fill")[0]);
}else{
_257=node.ownerDocument.createElement("v:fill");
_257.setAttribute("color",_256);
_257.setAttribute("on"," true");
node.getElementsByTagName("fill")[0].parentNode.replaceChild(_257,node.getElementsByTagName("fill")[0]);
}
}
};
return {init:function init(){
_250.registerOnEvent(rabbit.events.tabButtonMouseOver,this.handleMouseOver,this);
_250.registerOnEvent(rabbit.events.tabButtonMouseOut,this.handleMouseOut,this);
_250.registerOnEvent(rabbit.events.pageLoaded,this.changeTab,this);
_250.registerOnEvent(rabbit.events.pageReady,this.changeTab,this);
this.oldPageId=null;
},changeTab:function(page,_258){
var _259="";
if(page){
_259=page.data.id;
}
if(this.oldPageId===null){
_259=_250.getCurrentPageId();
}
var _25a=selectorUtil.getElementsByName("target"+this.oldPageId);
for(var i=0;i<_25a.length;i++){
rabbit.util.removeClass(_25a[i],"selected");
}
var _25a=selectorUtil.getElementsByName("target"+_259);
for(var i=0;i<_25a.length;i++){
rabbit.util.addClass(_25a[i],"selected");
}
this.oldPageId=_250.getCurrentPageId();
},handleMouseOver:function handleMouseOut(id,mode){
if(rabbit.prototypeType=="IOS"&&(rabbit.browser=="mobile"||rabbit.browser=="iphone")){
return;
}
if(typeof id!=="string"||(mode!=="result"&&mode!=="sketched")){
console.error("Updating tabButton "+id+" failed.");
return;
}
try{
if(mode==="sketched"){
rabbit.util.addClass(id+"_div_small","ClickableSketchHover");
rabbit.util.addClass(id+"_div_big","ClickableSketchHover");
}else{
if(rabbit.vml){
_254(id+"_big_path","#EEEEEE");
_254(id+"_small_path","#EEEEEE");
}else{
_251(id+"_big_path","#EEEEEE");
_251(id+"_small_path","#EEEEEE");
}
}
}
catch(e){
console.error("Updating tabButton "+id+" failed.");
console.error(e);
}
},handleMouseOut:function handleMouseOut(id,mode){
if(rabbit.prototypeType=="IOS"&&(rabbit.browser=="mobile"||rabbit.browser=="iphone")){
return;
}
if(typeof id!=="string"||(mode!=="result"&&mode!=="sketched")){
console.error("Updating tabButton "+id+" failed.");
return;
}
try{
if(mode==="sketched"){
_setClass(id+"_div_small","ClickableSketch");
_setClass(id+"_div_big","ClickableSketch");
}else{
if(rabbit.vml){
_254(id+"_big_path","white");
_254(id+"_small_path","white");
}else{
_251(id+"_big_path","white");
_251(id+"_small_path","white");
}
}
}
catch(e){
console.error("Updating tabButton "+id+" failed.");
console.error(e);
}
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.tabButton);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.togglesection=function(){
var _25b=0;
var _25c=".togglesection-header";
var _25d=".togglesection-content";
var _25e="content";
var _25f="#borderDiv";
var _260="open";
var _261=rabbit.facade;
var _262=function(_263,_264){
$("#"+_263+_25e).find(".iframe").css("width",_264+"px");
};
return {togglers:{},init:function init(){
rabbit.facade.registerOnEvent(rabbit.events.pageLoaded,this.pageLoaded,this);
rabbit.facade.registerOnEvent(rabbit.events.toggleToggleSection,this.toggle,this);
},setupToggler:function(id,_265,_266){
this.togglers[id]={id:id,page:_265};
$("#"+id).find(_25c).click(function(){
rabbit.facade.markHighlightTouchesAsSuccessful();
rabbit.facade.raiseEvent(rabbit.events.toggleToggleSection,id);
});
$(_25f).append($("#"+id).find(_25d));
},pageLoaded:function(_267){
for(var _268 in this.togglers){
$("#"+this.togglers[_268].id+_25e).hide();
}
},toggle:function(_269){
var _26a=$("#"+_269+">div").data("iframe-url");
var page=rabbit.data.pageStore.objects[_26a];
$("#"+_269+_25e).slideToggle(_25b,function(){
$("#"+_269).toggleClass(_260);
});
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.togglesection);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.iphoneSwitch=function(){
var _26b=rabbit.facade;
return {init:function init(){
_26b.registerOnEvent(rabbit.events.iphoneSwitchClicked,this.onClick,this);
},onClick:function onClick(id){
rabbit.facade.markHighlightTouchesAsSuccessful();
var _26c=$("#"+id);
var _26d=rabbit.events.switchOffSwitch;
_26c.toggleClass("switch-selected");
if(_26c.hasClass("switch-selected")){
_26d=rabbit.events.switchOnSwitch;
}
_26b.raiseEvent(_26d,id);
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.iphoneSwitch);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.rating=function(){
var _26e="rating_white.png";
var _26f="rating_black.png";
var _270=rabbit.facade;
var _271=new Array();
var _272=function(id){
if(_271[id]){
return parseInt(_271[id]);
}
return 0;
};
var _273=function(id,_274){
_271[id]=_274;
};
var _275=function(id,_276){
var i=1;
_276=parseInt(_276);
while(true){
var _277=document.getElementById(id+"-"+i);
if(_277==null){
break;
}
var _278=_277.getAttribute("src");
_278=_278.substring(0,_278.lastIndexOf("/")+1);
if(i>=_276+1){
_278+=_26e;
}else{
_278+=_26f;
}
_277.setAttribute("src",_278);
i++;
}
};
return {init:function init(){
_270.registerOnEvent(rabbit.events.ratingResultChangedEvent,this.onClick,this);
_270.registerOnEvent(rabbit.events.ratingMouseOut,this.onMouseOut,this);
_270.registerOnEvent(rabbit.events.ratingMouseOver,this.onMouseOver,this);
},onLoad:function onLoad(id,_279){
_273(id,_279);
},onClick:function onClick(id,_27a){
rabbit.facade.markHighlightTouchesAsSuccessful();
_273(id,_27a);
_275(id,_27a);
},onMouseOut:function onMouseOut(id){
_275(id,_272(id));
},onMouseOver:function onMouseOver(id,_27b){
_275(id,parseInt(_27b));
},checkMouseOutDiv:function(id,_27c){
if(_27c.relatedTarget){
return _27c.relatedTarget.id.indexOf(id)==-1;
}else{
return _27c.toElement.id.indexOf(id)==-1;
}
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.rating);
if(!rabbit.stencils){
rabbit.stencils={};
}
rabbit.stencils.tree=function(){
var _27d=20;
return {_trees:{},init:function init(){
rabbit.facade.registerOnEvent(rabbit.events.treeViewNodeClicked,this.clickCallback,this);
rabbit.facade.registerOnEvent(rabbit.events.treeViewScrolled,this.scrollCallback,this);
},setupTree:function setupMenu(id,_27e){
try{
_27e=_27e.replace(/&quot;/g,"\"");
_27e=JSON.parse(_27e);
this._trees[id]=_27e;
}
catch(e){
console.error(e);
}
},clickCallback:function(_27f,sth){
var _280=document.getElementById(_27f+"-buttonvline");
var _281="open";
if(_280){
if(_280.style.display=="none"){
_281="closed";
}
if(_281=="closed"){
_280.style.display="";
}else{
_280.style.display="none";
}
var elem=document.getElementById(_27f+"-treeviewnodeid");
if(elem&&elem.nextSibling){
if(_281=="closed"){
elem.nextSibling.style.display="none";
}else{
elem.nextSibling.style.display="";
}
this.update(_27f,_281);
}
}
},scrollCallback:function(id,_282,_283){
var _284=document.getElementById(id);
_284.scrollTop=_282;
_284.scrollLeft=_283;
},update:function(_285,_286){
this.setStatus(_285,_286);
this.recalculateLineLengths(_285);
},setStatus:function(_287,_288){
var tree=this.getTree(_287);
if(tree){
this.setStatusOnSubtree(this.getTreeName(_287),tree,_287,_288);
}
},setStatusOnSubtree:function(_289,tree,_28a,_28b){
if(tree){
for(var i=0;i<tree.length;i++){
var node=tree[i];
var _28c=_289+"-"+i;
if(_28c==_28a){
node.treeItemType=(_28b=="closed"?"-":"+");
return true;
}
if(node.subtree){
if(this.setStatusOnSubtree(_28c,node.subtree,_28a,_28b)){
return true;
}
}
}
}
},recalculateLineLengths:function(_28d){
var tree=this.getTree(_28d);
if(tree){
var _28e=this.getTreeName(_28d);
var _28f=document.getElementById(_28e+"-openingvline");
this.traverseTree(_28e,_28f,tree,null);
}
},traverseTree:function(_290,node,_291,_292){
var _293=false;
if(_292===null){
_292={0:0,1:0};
_293=true;
}
var rows=0;
var _294=0;
var _295=0;
var _296=0;
_292[0]=0;
_292[1]=0;
if(!_293){
rows++;
}
if(_291){
for(var i=0;i<_291.length;i++){
var _297=_291[i];
var _298=null;
if(_297.subtree){
_298=_297.subtree;
}
this.traverseTree(_290+"-"+i,_297,_298,_292);
_295=_294+1;
_294=_294+_292[0];
_296=_296+_292[1];
}
}
var _299=null;
if(_293){
_299=node;
}else{
_299=document.getElementById(_290+"-openingvline");
}
if(_299){
var _29a=_299.parentNode;
_29a.style.height=""+(_27d*_294)+"px";
var _29b=(_295-_296)*_27d;
_299.style.top=""+_29b+"px";
}else{
}
if(_293||"+"==node.treeItemType){
_292[0]=rows+_294;
}else{
_292[0]=rows;
}
_292[1]=rows+_296;
},getTree:function(_29c){
if(_29c){
var _29d=this.getTreeName(_29c);
if(this._trees[_29d]){
return this._trees[_29d];
}else{
return null;
}
}
},getTreeName:function(_29e){
return _29e.substring(0,_29e.indexOf("-"));
}};
}();
rabbit.facade.registerPlugin(rabbit.stencils.tree);
rabbit.common={baseUrl:"/rabbit/"};
if(rabbit.common==undefined){
rabbit.common={};
}
rabbit.common.i18n={translation:{},init:function(_29f){
this.lang=_29f.lang;
if((!this.lang)||(!this.translation[this.lang])){
this.lang="en";
}
},t:function(key,_2a0){
if(_2a0){
var _2a1=key.toLowerCase();
_2a1=_2a1.replace(/ /g,"-");
_2a1=_2a0+"."+_2a1;
}else{
var _2a1=key;
}
var lang=rabbit.common.i18n.lang;
if(!rabbit.common.i18n.translation[lang]){
console.log("no lang found for",key);
lang="en";
}
if(!rabbit.common.i18n.translation[lang]){
console.log("no lang found for",key);
return key;
}
if(rabbit.common.i18n.translation[lang][_2a1]){
return rabbit.common.i18n.translation[lang][_2a1];
}
return key;
},tr:function(key,_2a2){
var _2a3=this.t(key);
for(var k in _2a2){
_2a3=_2a3.replace(k,_2a2[k]);
}
return _2a3;
},translation:{}};
var t=rabbit.common.i18n.t;
var tr=rabbit.common.i18n.tr;

