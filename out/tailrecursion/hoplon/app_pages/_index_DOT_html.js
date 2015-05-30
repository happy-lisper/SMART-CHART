// Compiled by ClojureScript 0.0-2814 {}
goog.provide('tailrecursion.hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
tailrecursion.hoplon.app_pages._index_DOT_html.amcharts_chart = (function amcharts_chart(title,x_category,y_categories,values){
return cljs.core.clj__GT_js.call(null,cljs.core.PersistentHashMap.fromArrays(["valueAxes","sequencedAnimation","categoryAxis","graphs","dataProvider","categoryField","titles","legend","type"],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, ["stackType","regular","axisAlpha",0.3,"gridAlpha",(0),"dashLength",(15)], null)], null),false,new cljs.core.PersistentArrayMap(null, 2, ["gridPosition","start","labelRotation",(15)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4520__auto__ = (function iter__12254(s__12255){
return (new cljs.core.LazySeq(null,(function (){
var s__12255__$1 = s__12255;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12255__$1);
if(temp__4126__auto__){
var s__12255__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12255__$2)){
var c__4518__auto__ = cljs.core.chunk_first.call(null,s__12255__$2);
var size__4519__auto__ = cljs.core.count.call(null,c__4518__auto__);
var b__12257 = cljs.core.chunk_buffer.call(null,size__4519__auto__);
if((function (){var i__12256 = (0);
while(true){
if((i__12256 < size__4519__auto__)){
var c = cljs.core._nth.call(null,c__4518__auto__,i__12256);
cljs.core.chunk_append.call(null,b__12257,new cljs.core.PersistentArrayMap(null, 5, ["fillAlphas",(1),"title",[cljs.core.str("Category:"),cljs.core.str(c)].join(''),"type","column","valueField",c,"lineThickness",(0)], null));

var G__12258 = (i__12256 + (1));
i__12256 = G__12258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12257),iter__12254.call(null,cljs.core.chunk_rest.call(null,s__12255__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12257),null);
}
} else {
var c = cljs.core.first.call(null,s__12255__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, ["fillAlphas",(1),"title",[cljs.core.str("Category:"),cljs.core.str(c)].join(''),"type","column","valueField",c,"lineThickness",(0)], null),iter__12254.call(null,cljs.core.rest.call(null,s__12255__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4520__auto__.call(null,y_categories);
})()),values,x_category,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["text",title,"size",(15)], null)], null),new cljs.core.PersistentArrayMap(null, 3, ["maxColumns",(1),"position","right","useGraphSettings",true], null),"serial"]));
});
/**
* @param {...*} var_args
*/
tailrecursion.hoplon.app_pages._index_DOT_html.chart = (function() { 
var chart__delegate = function (args__5685__auto__){
var vec__12267 = tailrecursion.hoplon.parse_args.call(null,args__5685__auto__);
var map__12268 = cljs.core.nth.call(null,vec__12267,(0),null);
var map__12268__$1 = ((cljs.core.seq_QMARK_.call(null,map__12268))?cljs.core.apply.call(null,cljs.core.hash_map,map__12268):map__12268);
var attrs = map__12268__$1;
var y_categories = cljs.core.get.call(null,map__12268__$1,new cljs.core.Keyword(null,"y-categories","y-categories",-1405354268));
var x_category = cljs.core.get.call(null,map__12268__$1,new cljs.core.Keyword(null,"x-category","x-category",1120366257));
var value = cljs.core.get.call(null,map__12268__$1,new cljs.core.Keyword(null,"value","value",305978217));
var title = cljs.core.get.call(null,map__12268__$1,new cljs.core.Keyword(null,"title","title",636505583));
var div_id = [cljs.core.str(cljs.core.gensym.call(null))].join('');
var elem_attrs = cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"title","title",636505583));
var elem = tailrecursion.hoplon.div.call(null,cljs.core.assoc.call(null,elem_attrs,new cljs.core.Keyword(null,"id","id",-1388402092),div_id));
tailrecursion.hoplon.add_initfn_BANG_.call(null,((function (elem,div_id,elem_attrs,vec__12267,map__12268,map__12268__$1,attrs,y_categories,x_category,value,title){
return (function (){
var params = (function (){var obj12270 = {"id":div_id};
return obj12270;
})();
var update_graph = ((function (params,elem,div_id,elem_attrs,vec__12267,map__12268,map__12268__$1,attrs,y_categories,x_category,value,title){
return (function (p1__1439_SHARP_,p2__1440_SHARP_,p3__1441_SHARP_){
var AmSerialChart = AmCharts.AmSerialChart;
var chart1 = (new AmSerialChart());
AmCharts.extend(chart1,tailrecursion.hoplon.app_pages._index_DOT_html.amcharts_chart.call(null,title,p1__1439_SHARP_,p2__1440_SHARP_,p3__1441_SHARP_));

return chart1.write(div_id);
});})(params,elem,div_id,elem_attrs,vec__12267,map__12268,map__12268__$1,attrs,y_categories,x_category,value,title))
;
return tailrecursion.javelin.formula.call(null,((function (params,update_graph,elem,div_id,elem_attrs,vec__12267,map__12268,map__12268__$1,attrs,y_categories,x_category,value,title){
return (function (G__12273,G__12271,G__12274,G__12272){
return G__12271.call(null,G__12272,G__12273,G__12274);
});})(params,update_graph,elem,div_id,elem_attrs,vec__12267,map__12268,map__12268__$1,attrs,y_categories,x_category,value,title))
).call(null,y_categories,update_graph,value,x_category);
});})(elem,div_id,elem_attrs,vec__12267,map__12268,map__12268__$1,attrs,y_categories,x_category,value,title))
);

return elem;
};
var chart = function (var_args){
var args__5685__auto__ = null;
if (arguments.length > 0) {
var G__12275__i = 0, G__12275__a = new Array(arguments.length -  0);
while (G__12275__i < G__12275__a.length) {G__12275__a[G__12275__i] = arguments[G__12275__i + 0]; ++G__12275__i;}
  args__5685__auto__ = new cljs.core.IndexedSeq(G__12275__a,0);
} 
return chart__delegate.call(this,args__5685__auto__);};
chart.cljs$lang$maxFixedArity = 0;
chart.cljs$lang$applyTo = (function (arglist__12276){
var args__5685__auto__ = cljs.core.seq(arglist__12276);
return chart__delegate(args__5685__auto__);
});
chart.cljs$core$IFn$_invoke$arity$variadic = chart__delegate;
return chart;
})()
;
tailrecursion.hoplon.app_pages._index_DOT_html.months = cljs.core.range.call(null,(1),(13));
tailrecursion.hoplon.app_pages._index_DOT_html.years = cljs.core.range.call(null,(2010),(2015));
tailrecursion.hoplon.app_pages._index_DOT_html.dates = cljs.core.vec.call(null,cljs.core.flatten.call(null,(function (){var iter__4520__auto__ = (function iter__12277(s__12278){
return (new cljs.core.LazySeq(null,(function (){
var s__12278__$1 = s__12278;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12278__$1);
if(temp__4126__auto__){
var s__12278__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12278__$2)){
var c__4518__auto__ = cljs.core.chunk_first.call(null,s__12278__$2);
var size__4519__auto__ = cljs.core.count.call(null,c__4518__auto__);
var b__12280 = cljs.core.chunk_buffer.call(null,size__4519__auto__);
if((function (){var i__12279 = (0);
while(true){
if((i__12279 < size__4519__auto__)){
var y = cljs.core._nth.call(null,c__4518__auto__,i__12279);
cljs.core.chunk_append.call(null,b__12280,(function (){var iter__4520__auto__ = ((function (i__12279,y,c__4518__auto__,size__4519__auto__,b__12280,s__12278__$2,temp__4126__auto__){
return (function iter__12289(s__12290){
return (new cljs.core.LazySeq(null,((function (i__12279,y,c__4518__auto__,size__4519__auto__,b__12280,s__12278__$2,temp__4126__auto__){
return (function (){
var s__12290__$1 = s__12290;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__12290__$1);
if(temp__4126__auto____$1){
var s__12290__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12290__$2)){
var c__4518__auto____$1 = cljs.core.chunk_first.call(null,s__12290__$2);
var size__4519__auto____$1 = cljs.core.count.call(null,c__4518__auto____$1);
var b__12292 = cljs.core.chunk_buffer.call(null,size__4519__auto____$1);
if((function (){var i__12291 = (0);
while(true){
if((i__12291 < size__4519__auto____$1)){
var m = cljs.core._nth.call(null,c__4518__auto____$1,i__12291);
cljs.core.chunk_append.call(null,b__12292,[cljs.core.str(y),cljs.core.str("/"),cljs.core.str((((m > (9)))?"":"0")),cljs.core.str(m)].join(''));

var G__12297 = (i__12291 + (1));
i__12291 = G__12297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12292),iter__12289.call(null,cljs.core.chunk_rest.call(null,s__12290__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12292),null);
}
} else {
var m = cljs.core.first.call(null,s__12290__$2);
return cljs.core.cons.call(null,[cljs.core.str(y),cljs.core.str("/"),cljs.core.str((((m > (9)))?"":"0")),cljs.core.str(m)].join(''),iter__12289.call(null,cljs.core.rest.call(null,s__12290__$2)));
}
} else {
return null;
}
break;
}
});})(i__12279,y,c__4518__auto__,size__4519__auto__,b__12280,s__12278__$2,temp__4126__auto__))
,null,null));
});})(i__12279,y,c__4518__auto__,size__4519__auto__,b__12280,s__12278__$2,temp__4126__auto__))
;
return iter__4520__auto__.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.months);
})());

var G__12298 = (i__12279 + (1));
i__12279 = G__12298;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12280),iter__12277.call(null,cljs.core.chunk_rest.call(null,s__12278__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12280),null);
}
} else {
var y = cljs.core.first.call(null,s__12278__$2);
return cljs.core.cons.call(null,(function (){var iter__4520__auto__ = ((function (y,s__12278__$2,temp__4126__auto__){
return (function iter__12293(s__12294){
return (new cljs.core.LazySeq(null,((function (y,s__12278__$2,temp__4126__auto__){
return (function (){
var s__12294__$1 = s__12294;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__12294__$1);
if(temp__4126__auto____$1){
var s__12294__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12294__$2)){
var c__4518__auto__ = cljs.core.chunk_first.call(null,s__12294__$2);
var size__4519__auto__ = cljs.core.count.call(null,c__4518__auto__);
var b__12296 = cljs.core.chunk_buffer.call(null,size__4519__auto__);
if((function (){var i__12295 = (0);
while(true){
if((i__12295 < size__4519__auto__)){
var m = cljs.core._nth.call(null,c__4518__auto__,i__12295);
cljs.core.chunk_append.call(null,b__12296,[cljs.core.str(y),cljs.core.str("/"),cljs.core.str((((m > (9)))?"":"0")),cljs.core.str(m)].join(''));

var G__12299 = (i__12295 + (1));
i__12295 = G__12299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12296),iter__12293.call(null,cljs.core.chunk_rest.call(null,s__12294__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12296),null);
}
} else {
var m = cljs.core.first.call(null,s__12294__$2);
return cljs.core.cons.call(null,[cljs.core.str(y),cljs.core.str("/"),cljs.core.str((((m > (9)))?"":"0")),cljs.core.str(m)].join(''),iter__12293.call(null,cljs.core.rest.call(null,s__12294__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__12278__$2,temp__4126__auto__))
,null,null));
});})(y,s__12278__$2,temp__4126__auto__))
;
return iter__4520__auto__.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.months);
})(),iter__12277.call(null,cljs.core.rest.call(null,s__12278__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4520__auto__.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.years);
})()));
/**
* true if seq contains elm
*/
tailrecursion.hoplon.app_pages._index_DOT_html.in_QMARK_ = (function in_QMARK_(seq,elm){
return cljs.core.some.call(null,(function (p1__1442_SHARP_){
return cljs.core._EQ_.call(null,elm,p1__1442_SHARP_);
}),seq);
});
tailrecursion.hoplon.app_pages._index_DOT_html.salespersons = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Raising Star","Good","Sloppy","Average"], null);
tailrecursion.hoplon.app_pages._index_DOT_html.regions = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["South West","West","North West","South East","Middle West","North East"], null);
tailrecursion.hoplon.app_pages._index_DOT_html.items = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Paper","Pen, Pencils and Markers","Folders and Binders","Tape and Glue","Labels","Stickers","Shipping and Mailing","Planners","Notebooks and Notepads","Filling and Organizing"], null);
tailrecursion.hoplon.app_pages._index_DOT_html.customers = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Consumers","Businesses","Other","Personal","Online"], null);
tailrecursion.hoplon.app_pages._index_DOT_html.trend = (function trend(num,idx,sap,reg,ite,cus){
if(cljs.core._EQ_.call(null,"Raising Star",sap)){
return (((idx / num) * (100)) | (0));
} else {
if(cljs.core._EQ_.call(null,"Sloppy",sap)){
return ((((num - idx) / num) * (100)) | (0));
} else {
if(cljs.core.truth_(tailrecursion.hoplon.app_pages._index_DOT_html.in_QMARK_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Shipping and Mailing","Paper","Tape and Glue"], null),ite))){
return (((idx / num) * (200)) | (0));
} else {
if(cljs.core.truth_(tailrecursion.hoplon.app_pages._index_DOT_html.in_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Notebooks and Notepads","Filling and Organizing"], null),ite))){
return ((((num - idx) / num) * (100)) | (0));
} else {
return ((10) + cljs.core.rand_int.call(null,(5)));

}
}
}
}
});
tailrecursion.hoplon.app_pages._index_DOT_html.sales = cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__4520__auto__ = (function iter__12300(s__12301){
return (new cljs.core.LazySeq(null,(function (){
var s__12301__$1 = s__12301;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12301__$1);
if(temp__4126__auto__){
var s__12301__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12301__$2)){
var c__4518__auto__ = cljs.core.chunk_first.call(null,s__12301__$2);
var size__4519__auto__ = cljs.core.count.call(null,c__4518__auto__);
var b__12303 = cljs.core.chunk_buffer.call(null,size__4519__auto__);
if((function (){var i__12302 = (0);
while(true){
if((i__12302 < size__4519__auto__)){
var d = cljs.core._nth.call(null,c__4518__auto__,i__12302);
cljs.core.chunk_append.call(null,b__12303,(function (){var iter__4520__auto__ = ((function (i__12302,d,c__4518__auto__,size__4519__auto__,b__12303,s__12301__$2,temp__4126__auto__){
return (function iter__12312(s__12313){
return (new cljs.core.LazySeq(null,((function (i__12302,d,c__4518__auto__,size__4519__auto__,b__12303,s__12301__$2,temp__4126__auto__){
return (function (){
var s__12313__$1 = s__12313;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__12313__$1);
if(temp__4126__auto____$1){
var s__12313__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12313__$2)){
var c__4518__auto____$1 = cljs.core.chunk_first.call(null,s__12313__$2);
var size__4519__auto____$1 = cljs.core.count.call(null,c__4518__auto____$1);
var b__12315 = cljs.core.chunk_buffer.call(null,size__4519__auto____$1);
if((function (){var i__12314 = (0);
while(true){
if((i__12314 < size__4519__auto____$1)){
var sp = cljs.core._nth.call(null,c__4518__auto____$1,i__12314);
cljs.core.chunk_append.call(null,b__12315,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,sp,cljs.core.rand_nth.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.items),cljs.core.rand_nth.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.regions),cljs.core.rand_nth.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.customers)], null));

var G__12320 = (i__12314 + (1));
i__12314 = G__12320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12315),iter__12312.call(null,cljs.core.chunk_rest.call(null,s__12313__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12315),null);
}
} else {
var sp = cljs.core.first.call(null,s__12313__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,sp,cljs.core.rand_nth.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.items),cljs.core.rand_nth.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.regions),cljs.core.rand_nth.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.customers)], null),iter__12312.call(null,cljs.core.rest.call(null,s__12313__$2)));
}
} else {
return null;
}
break;
}
});})(i__12302,d,c__4518__auto__,size__4519__auto__,b__12303,s__12301__$2,temp__4126__auto__))
,null,null));
});})(i__12302,d,c__4518__auto__,size__4519__auto__,b__12303,s__12301__$2,temp__4126__auto__))
;
return iter__4520__auto__.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.salespersons);
})());

var G__12321 = (i__12302 + (1));
i__12302 = G__12321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12303),iter__12300.call(null,cljs.core.chunk_rest.call(null,s__12301__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12303),null);
}
} else {
var d = cljs.core.first.call(null,s__12301__$2);
return cljs.core.cons.call(null,(function (){var iter__4520__auto__ = ((function (d,s__12301__$2,temp__4126__auto__){
return (function iter__12316(s__12317){
return (new cljs.core.LazySeq(null,((function (d,s__12301__$2,temp__4126__auto__){
return (function (){
var s__12317__$1 = s__12317;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__12317__$1);
if(temp__4126__auto____$1){
var s__12317__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12317__$2)){
var c__4518__auto__ = cljs.core.chunk_first.call(null,s__12317__$2);
var size__4519__auto__ = cljs.core.count.call(null,c__4518__auto__);
var b__12319 = cljs.core.chunk_buffer.call(null,size__4519__auto__);
if((function (){var i__12318 = (0);
while(true){
if((i__12318 < size__4519__auto__)){
var sp = cljs.core._nth.call(null,c__4518__auto__,i__12318);
cljs.core.chunk_append.call(null,b__12319,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,sp,cljs.core.rand_nth.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.items),cljs.core.rand_nth.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.regions),cljs.core.rand_nth.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.customers)], null));

var G__12322 = (i__12318 + (1));
i__12318 = G__12322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12319),iter__12316.call(null,cljs.core.chunk_rest.call(null,s__12317__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12319),null);
}
} else {
var sp = cljs.core.first.call(null,s__12317__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,sp,cljs.core.rand_nth.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.items),cljs.core.rand_nth.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.regions),cljs.core.rand_nth.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.customers)], null),iter__12316.call(null,cljs.core.rest.call(null,s__12317__$2)));
}
} else {
return null;
}
break;
}
});})(d,s__12301__$2,temp__4126__auto__))
,null,null));
});})(d,s__12301__$2,temp__4126__auto__))
;
return iter__4520__auto__.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.salespersons);
})(),iter__12300.call(null,cljs.core.rest.call(null,s__12301__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4520__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.dates)));
})());
tailrecursion.hoplon.app_pages._index_DOT_html.labels = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Month","Sales Person","Item","Region","Customer","Quantity"], null);
tailrecursion.hoplon.app_pages._index_DOT_html.rows = cljs.core.map.call(null,(function (p1__1444_SHARP_){
return cljs.core.assoc.call(null,p1__1444_SHARP_,(0),tailrecursion.hoplon.app_pages._index_DOT_html.dates.call(null,cljs.core.first.call(null,p1__1444_SHARP_)));
}),cljs.core.map.call(null,(function (p1__1443_SHARP_){
return cljs.core.conj.call(null,p1__1443_SHARP_,cljs.core.apply.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.trend,cljs.core.count.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.dates),p1__1443_SHARP_));
}),tailrecursion.hoplon.app_pages._index_DOT_html.sales));
tailrecursion.hoplon.app_pages._index_DOT_html.labels_and_rows = cljs.core.cons.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.labels,tailrecursion.hoplon.app_pages._index_DOT_html.rows);
tailrecursion.hoplon.app_pages._index_DOT_html.categories = cljs.core.first.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.labels_and_rows);
tailrecursion.hoplon.app_pages._index_DOT_html.ent = (function ent(categories,data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vector,categories,cljs.core.butlast.call(null,data))),cljs.core.last.call(null,data)], null);
});
tailrecursion.hoplon.app_pages._index_DOT_html.all_data = cljs.core.map.call(null,cljs.core.partial.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.ent,tailrecursion.hoplon.app_pages._index_DOT_html.categories),cljs.core.rest.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.labels_and_rows));
tailrecursion.hoplon.app_pages._index_DOT_html.last_cat = "Last";
tailrecursion.hoplon.app_pages._index_DOT_html.all_input_stack = tailrecursion.javelin.cell.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,tailrecursion.hoplon.app_pages._index_DOT_html.all_data));
tailrecursion.hoplon.app_pages._index_DOT_html.all_pop_stack = tailrecursion.javelin.cell.call(null,cljs.core.List.EMPTY);
tailrecursion.hoplon.app_pages._index_DOT_html.all_input = tailrecursion.javelin.formula.call(null,(function (G__12323,G__12324){
return G__12323.call(null,G__12324);
})).call(null,cljs.core.first,tailrecursion.hoplon.app_pages._index_DOT_html.all_input_stack);
tailrecursion.hoplon.app_pages._index_DOT_html.count_key = (function count_key(all,k){
return cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,(function (p1__1445_SHARP_){
return p1__1445_SHARP_.call(null,k);
}),cljs.core.map.call(null,cljs.core.first,all))));
});
tailrecursion.hoplon.app_pages._index_DOT_html.all_keys = tailrecursion.javelin.formula.call(null,(function (G__12328,G__12326,G__12329,G__12325,G__12327){
return G__12325.call(null,G__12326.call(null,(function (p1__1446_SHARP_){
return G__12327.call(null,G__12328.call(null,p1__1446_SHARP_));
}),G__12329));
})).call(null,cljs.core.first,cljs.core.mapcat,tailrecursion.hoplon.app_pages._index_DOT_html.all_input,cljs.core.distinct,cljs.core.keys);
tailrecursion.hoplon.app_pages._index_DOT_html.all_keys_map = tailrecursion.javelin.formula.call(null,(function (G__12337,G__12335,G__12334,G__12336){
return G__12334.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4520__auto__ = (function iter__12330(s__12331){
return (new cljs.core.LazySeq(null,(function (){
var s__12331__$1 = s__12331;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12331__$1);
if(temp__4126__auto__){
var s__12331__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12331__$2)){
var c__4518__auto__ = cljs.core.chunk_first.call(null,s__12331__$2);
var size__4519__auto__ = cljs.core.count.call(null,c__4518__auto__);
var b__12333 = cljs.core.chunk_buffer.call(null,size__4519__auto__);
if(cljs.core.truth_((function (){var i__12332 = (0);
while(true){
if(cljs.core.truth_((i__12332 < size__4519__auto__))){
var k = cljs.core._nth.call(null,c__4518__auto__,i__12332);
cljs.core.chunk_append.call(null,b__12333,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,G__12335.call(null,G__12336,k)], null));

var G__12338 = (i__12332 + (1));
i__12332 = G__12338;
continue;
} else {
return true;
}
break;
}
})())){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12333),iter__12330.call(null,cljs.core.chunk_rest.call(null,s__12331__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12333),null);
}
} else {
var k = cljs.core.first.call(null,s__12331__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,G__12335.call(null,G__12336,k)], null),iter__12330.call(null,cljs.core.rest.call(null,s__12331__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4520__auto__.call(null,G__12337);
})());
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.all_keys,tailrecursion.hoplon.app_pages._index_DOT_html.count_key,cljs.core.into,tailrecursion.hoplon.app_pages._index_DOT_html.all_input);
tailrecursion.hoplon.app_pages._index_DOT_html.min_val_def = tailrecursion.javelin.formula.call(null,(function (G__12342,G__12341,G__12340,G__12339){
return G__12339.call(null,G__12340,G__12341,G__12342);
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.all_keys,tailrecursion.hoplon.app_pages._index_DOT_html.all_keys_map,cljs.core.min_key,cljs.core.apply);
tailrecursion.hoplon.app_pages._index_DOT_html.max_val_def = tailrecursion.javelin.formula.call(null,(function (G__12346,G__12345,G__12344,G__12343){
return G__12343.call(null,G__12344,G__12345,G__12346);
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.all_keys,tailrecursion.hoplon.app_pages._index_DOT_html.all_keys_map,cljs.core.max_key,cljs.core.apply);
tailrecursion.hoplon.app_pages._index_DOT_html.max_val = tailrecursion.javelin.cell.call(null,cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.max_val_def));
tailrecursion.hoplon.app_pages._index_DOT_html.min_val = tailrecursion.javelin.cell.call(null,cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.min_val_def));
tailrecursion.hoplon.app_pages._index_DOT_html.min_val_use_auto = tailrecursion.javelin.cell.call(null,true);
tailrecursion.hoplon.app_pages._index_DOT_html.all_keys_map_less_max = tailrecursion.javelin.formula.call(null,(function (G__12347,G__12348,G__12349){
return G__12347.call(null,G__12348,G__12349);
})).call(null,cljs.core.dissoc,tailrecursion.hoplon.app_pages._index_DOT_html.all_keys_map,tailrecursion.hoplon.app_pages._index_DOT_html.max_val);
tailrecursion.hoplon.app_pages._index_DOT_html.all_keys_less_max = tailrecursion.javelin.formula.call(null,(function (G__12351,G__12350){
return G__12350.call(null,G__12351);
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.all_keys_map_less_max,cljs.core.keys);
tailrecursion.hoplon.app_pages._index_DOT_html.min_val_auto = tailrecursion.javelin.formula.call(null,(function (G__12357,G__12356,G__12355,G__12354,G__12353,G__12352){
if(cljs.core.truth_(G__12352)){
return G__12353.call(null,G__12354,G__12355,G__12356);
} else {
return G__12357;
}
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.min_val,tailrecursion.hoplon.app_pages._index_DOT_html.all_keys_less_max,tailrecursion.hoplon.app_pages._index_DOT_html.all_keys_map_less_max,cljs.core.min_key,cljs.core.apply,tailrecursion.hoplon.app_pages._index_DOT_html.min_val_use_auto);
tailrecursion.hoplon.app_pages._index_DOT_html.all_keys_map_less_max_less_min = tailrecursion.javelin.formula.call(null,(function (G__12358,G__12359,G__12360){
return G__12358.call(null,G__12359,G__12360);
})).call(null,cljs.core.dissoc,tailrecursion.hoplon.app_pages._index_DOT_html.all_keys_map_less_max,tailrecursion.hoplon.app_pages._index_DOT_html.min_val_auto);
tailrecursion.hoplon.app_pages._index_DOT_html.do_aggregate_values = (function do_aggregate_values(rows,min_val,max_val){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.merge_with,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.hash_map),(function (){var iter__4520__auto__ = (function iter__12369(s__12370){
return (new cljs.core.LazySeq(null,(function (){
var s__12370__$1 = s__12370;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12370__$1);
if(temp__4126__auto__){
var s__12370__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12370__$2)){
var c__4518__auto__ = cljs.core.chunk_first.call(null,s__12370__$2);
var size__4519__auto__ = cljs.core.count.call(null,c__4518__auto__);
var b__12372 = cljs.core.chunk_buffer.call(null,size__4519__auto__);
if((function (){var i__12371 = (0);
while(true){
if((i__12371 < size__4519__auto__)){
var vec__12375 = cljs.core._nth.call(null,c__4518__auto__,i__12371);
var k = cljs.core.nth.call(null,vec__12375,(0),null);
var v = cljs.core.nth.call(null,vec__12375,(1),null);
cljs.core.chunk_append.call(null,b__12372,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.select_keys.call(null,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [min_val,max_val], null)),v], null));

var G__12377 = (i__12371 + (1));
i__12371 = G__12377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12372),iter__12369.call(null,cljs.core.chunk_rest.call(null,s__12370__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12372),null);
}
} else {
var vec__12376 = cljs.core.first.call(null,s__12370__$2);
var k = cljs.core.nth.call(null,vec__12376,(0),null);
var v = cljs.core.nth.call(null,vec__12376,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.select_keys.call(null,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [min_val,max_val], null)),v], null),iter__12369.call(null,cljs.core.rest.call(null,s__12370__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4520__auto__.call(null,rows);
})())));
});
tailrecursion.hoplon.app_pages._index_DOT_html.aggregated_values = tailrecursion.javelin.formula.call(null,(function (G__12380,G__12378,G__12379,G__12381){
return G__12378.call(null,G__12379,G__12380,G__12381);
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.min_val,tailrecursion.hoplon.app_pages._index_DOT_html.do_aggregate_values,tailrecursion.hoplon.app_pages._index_DOT_html.all_input,tailrecursion.hoplon.app_pages._index_DOT_html.max_val);
tailrecursion.hoplon.app_pages._index_DOT_html.y_categories = tailrecursion.javelin.formula.call(null,(function (G__12387,G__12384,G__12385,G__12382,G__12388,G__12383,G__12386){
return G__12382.call(null,G__12383.call(null,G__12384.call(null,(function (p1__1447_SHARP_){
return p1__1447_SHARP_.call(null,G__12385,G__12386);
}),G__12384.call(null,G__12387,G__12388))));
})).call(null,cljs.core.first,cljs.core.map,tailrecursion.hoplon.app_pages._index_DOT_html.min_val,cljs.core.sort,tailrecursion.hoplon.app_pages._index_DOT_html.aggregated_values,cljs.core.distinct,tailrecursion.hoplon.app_pages._index_DOT_html.last_cat);
tailrecursion.hoplon.app_pages._index_DOT_html.make_chart_data = (function make_chart_data(rows,min_val,max_val){
var tmp1 = cljs.core.group_by.call(null,(function (p1__1448_SHARP_){
return cljs.core.first.call(null,p1__1448_SHARP_).call(null,max_val);
}),rows);
var tmp2 = (function (){var iter__4520__auto__ = ((function (tmp1){
return (function iter__12397(s__12398){
return (new cljs.core.LazySeq(null,((function (tmp1){
return (function (){
var s__12398__$1 = s__12398;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12398__$1);
if(temp__4126__auto__){
var s__12398__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12398__$2)){
var c__4518__auto__ = cljs.core.chunk_first.call(null,s__12398__$2);
var size__4519__auto__ = cljs.core.count.call(null,c__4518__auto__);
var b__12400 = cljs.core.chunk_buffer.call(null,size__4519__auto__);
if((function (){var i__12399 = (0);
while(true){
if((i__12399 < size__4519__auto__)){
var vec__12403 = cljs.core._nth.call(null,c__4518__auto__,i__12399);
var k = cljs.core.nth.call(null,vec__12403,(0),null);
var v = cljs.core.nth.call(null,vec__12403,(1),null);
cljs.core.chunk_append.call(null,b__12400,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_val,k], null),cljs.core.map.call(null,((function (i__12399,vec__12403,k,v,c__4518__auto__,size__4519__auto__,b__12400,s__12398__$2,temp__4126__auto__,tmp1){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,x).call(null,min_val,tailrecursion.hoplon.app_pages._index_DOT_html.last_cat),cljs.core.second.call(null,x)], null);
});})(i__12399,vec__12403,k,v,c__4518__auto__,size__4519__auto__,b__12400,s__12398__$2,temp__4126__auto__,tmp1))
,v))));

var G__12405 = (i__12399 + (1));
i__12399 = G__12405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12400),iter__12397.call(null,cljs.core.chunk_rest.call(null,s__12398__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12400),null);
}
} else {
var vec__12404 = cljs.core.first.call(null,s__12398__$2);
var k = cljs.core.nth.call(null,vec__12404,(0),null);
var v = cljs.core.nth.call(null,vec__12404,(1),null);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_val,k], null),cljs.core.map.call(null,((function (vec__12404,k,v,s__12398__$2,temp__4126__auto__,tmp1){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,x).call(null,min_val,tailrecursion.hoplon.app_pages._index_DOT_html.last_cat),cljs.core.second.call(null,x)], null);
});})(vec__12404,k,v,s__12398__$2,temp__4126__auto__,tmp1))
,v))),iter__12397.call(null,cljs.core.rest.call(null,s__12398__$2)));
}
} else {
return null;
}
break;
}
});})(tmp1))
,null,null));
});})(tmp1))
;
return iter__4520__auto__.call(null,tmp1);
})();
return cljs.core.sort_by.call(null,((function (tmp1,tmp2){
return (function (p1__1449_SHARP_){
return p1__1449_SHARP_.call(null,max_val);
});})(tmp1,tmp2))
,tmp2);
});
tailrecursion.hoplon.app_pages._index_DOT_html.chart_data = tailrecursion.javelin.formula.call(null,(function (G__12408,G__12407,G__12406,G__12409){
return G__12406.call(null,G__12407,G__12408,G__12409);
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.min_val,tailrecursion.hoplon.app_pages._index_DOT_html.aggregated_values,tailrecursion.hoplon.app_pages._index_DOT_html.make_chart_data,tailrecursion.hoplon.app_pages._index_DOT_html.max_val);
tailrecursion.hoplon.app_pages._index_DOT_html.axis_x_options = (function axis_x_options(x){
cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.max_val,x);

cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.min_val_use_auto,true);

return cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.min_val,cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.min_val_auto));
});
tailrecursion.hoplon.app_pages._index_DOT_html.axis_y_options = (function axis_y_options(x){
cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.min_val,x);

return cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.min_val_use_auto,false);
});
tailrecursion.hoplon.app_pages._index_DOT_html.drill_in = (function drill_in(x){
var filtered = cljs.core.filter.call(null,(function (p1__1450_SHARP_){
return cljs.core._EQ_.call(null,x,cljs.core.first.call(null,p1__1450_SHARP_).call(null,cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.min_val)));
}),cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.all_input));
var new_input = (function (){var iter__4520__auto__ = ((function (filtered){
return (function iter__12418(s__12419){
return (new cljs.core.LazySeq(null,((function (filtered){
return (function (){
var s__12419__$1 = s__12419;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12419__$1);
if(temp__4126__auto__){
var s__12419__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12419__$2)){
var c__4518__auto__ = cljs.core.chunk_first.call(null,s__12419__$2);
var size__4519__auto__ = cljs.core.count.call(null,c__4518__auto__);
var b__12421 = cljs.core.chunk_buffer.call(null,size__4519__auto__);
if((function (){var i__12420 = (0);
while(true){
if((i__12420 < size__4519__auto__)){
var vec__12424 = cljs.core._nth.call(null,c__4518__auto__,i__12420);
var k = cljs.core.nth.call(null,vec__12424,(0),null);
var v = cljs.core.nth.call(null,vec__12424,(1),null);
cljs.core.chunk_append.call(null,b__12421,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,k,cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.min_val)),v], null));

var G__12426 = (i__12420 + (1));
i__12420 = G__12426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12421),iter__12418.call(null,cljs.core.chunk_rest.call(null,s__12419__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12421),null);
}
} else {
var vec__12425 = cljs.core.first.call(null,s__12419__$2);
var k = cljs.core.nth.call(null,vec__12425,(0),null);
var v = cljs.core.nth.call(null,vec__12425,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,k,cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.min_val)),v], null),iter__12418.call(null,cljs.core.rest.call(null,s__12419__$2)));
}
} else {
return null;
}
break;
}
});})(filtered))
,null,null));
});})(filtered))
;
return iter__4520__auto__.call(null,filtered);
})();
cljs.core.swap_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.all_input_stack,cljs.core.conj,new_input);

return cljs.core.swap_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.all_pop_stack,cljs.core.conj,x);
});
tailrecursion.hoplon.app_pages._index_DOT_html.drill_pop = (function drill_pop(){
if(cljs.core.next.call(null,cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.all_input_stack))){
cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.min_val_use_auto,false);

cljs.core.swap_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.all_input_stack,cljs.core.rest);

return cljs.core.swap_BANG_.call(null,tailrecursion.hoplon.app_pages._index_DOT_html.all_pop_stack,cljs.core.rest);
} else {
return null;
}
});
tailrecursion.hoplon.html.call(null,tailrecursion.hoplon.head.call(null,tailrecursion.hoplon.title.call(null,"SMART-CHART"),tailrecursion.hoplon.script.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),"js/amcharts.inc.js"),tailrecursion.hoplon.script.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),"js/serial.inc.js")),tailrecursion.hoplon.body.call(null,tailrecursion.hoplon.h2.call(null,"Smart Chart:"),tailrecursion.hoplon.p.call(null,"X-axis: ",(function (){var t__5710__auto__ = document.createTextNode("");
tailrecursion.javelin.formula.call(null,((function (t__5710__auto__){
return (function (G__12428,G__12427){
return G__12427.nodeValue = G__12428;
});})(t__5710__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.max_val,t__5710__auto__);

return t__5710__auto__;
})()," <- ",tailrecursion.hoplon.span.call(null,tailrecursion.javelin.formula.call(null,(function (G__12432,G__12429,G__12434,G__12430,G__12431,G__12433){
return G__12429.call(null,(function (x){
return G__12430.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543),G__12431.call(null,G__12432,x),x);
}),G__12433.call(null,G__12434));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.axis_x_options,cljs.core.map,tailrecursion.hoplon.app_pages._index_DOT_html.all_keys_map_less_max,tailrecursion.hoplon.button,cljs.core.partial,cljs.core.keys))),tailrecursion.hoplon.p.call(null,"Y-axis: ",(function (){var t__5710__auto__ = document.createTextNode("");
tailrecursion.javelin.formula.call(null,((function (t__5710__auto__){
return (function (G__12436,G__12435){
return G__12435.nodeValue = G__12436;
});})(t__5710__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.min_val,t__5710__auto__);

return t__5710__auto__;
})()," <- ",tailrecursion.hoplon.span.call(null,tailrecursion.javelin.formula.call(null,(function (G__12440,G__12437,G__12442,G__12438,G__12439,G__12441){
return G__12437.call(null,(function (x){
return G__12438.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543),G__12439.call(null,G__12440,x),x);
}),G__12441.call(null,G__12442));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.axis_y_options,cljs.core.map,tailrecursion.hoplon.app_pages._index_DOT_html.all_keys_map_less_max_less_min,tailrecursion.hoplon.button,cljs.core.partial,cljs.core.keys))),tailrecursion.hoplon.p.call(null,"Drill-into : ",tailrecursion.hoplon.span.call(null,tailrecursion.javelin.formula.call(null,(function (G__12448,G__12443,G__12447,G__12450,G__12444,G__12446,G__12445,G__12449){
return G__12443.call(null,(function (x){
return G__12444.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543),G__12445.call(null,G__12446,x),x);
}),G__12447.call(null,G__12445.call(null,G__12448,G__12449),G__12450));
})).call(null,cljs.core._EQ_,cljs.core.map,cljs.core.remove,tailrecursion.hoplon.app_pages._index_DOT_html.y_categories,tailrecursion.hoplon.button,tailrecursion.hoplon.app_pages._index_DOT_html.drill_in,cljs.core.partial,tailrecursion.hoplon.app_pages._index_DOT_html.last_cat))),tailrecursion.hoplon.p.call(null,"Pop : ",tailrecursion.hoplon.button.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543),tailrecursion.hoplon.app_pages._index_DOT_html.drill_pop,tailrecursion.javelin.formula.call(null,(function (G__12451,G__12452){
return G__12451.call(null,", ",G__12452);
})).call(null,clojure.string.join,tailrecursion.hoplon.app_pages._index_DOT_html.all_pop_stack))),tailrecursion.hoplon.app_pages._index_DOT_html.chart.call(null,new cljs.core.Keyword(null,"title","title",636505583),"Orders",new cljs.core.Keyword(null,"x-category","x-category",1120366257),tailrecursion.hoplon.app_pages._index_DOT_html.max_val,new cljs.core.Keyword(null,"y-categories","y-categories",-1405354268),tailrecursion.hoplon.app_pages._index_DOT_html.y_categories,new cljs.core.Keyword(null,"value","value",305978217),tailrecursion.hoplon.app_pages._index_DOT_html.chart_data,new cljs.core.Keyword(null,"style","style",-496642736),"height:300px"),tailrecursion.hoplon.h2.call(null,"Input data:"),tailrecursion.hoplon.table.call(null,new cljs.core.Keyword(null,"border","border",1444987323),"1px",new cljs.core.Keyword(null,"style","style",-496642736),"border:none;border-collapse:collapse;",cljs.core.map.call(null,(function (x){
return tailrecursion.hoplon.tr.call(null,cljs.core.map.call(null,(function (p1__1451_SHARP_){
return tailrecursion.hoplon.td.call(null,(function (){var t__5710__auto__ = document.createTextNode("");
tailrecursion.javelin.formula.call(null,((function (t__5710__auto__){
return (function (G__12454,G__12453){
return G__12453.nodeValue = G__12454;
});})(t__5710__auto__))
).call(null,p1__1451_SHARP_,t__5710__auto__);

return t__5710__auto__;
})());
}),x));
}),tailrecursion.hoplon.app_pages._index_DOT_html.labels_and_rows))));
