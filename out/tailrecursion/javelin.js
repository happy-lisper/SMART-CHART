// Compiled by ClojureScript 0.0-2814 {}
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




tailrecursion.javelin._STAR_tx_STAR_ = null;
tailrecursion.javelin.last_rank = cljs.core.atom.call(null,(0));
/**
* Like tree-seq but traversal is breadth-first instead of depth-first.
*/
tailrecursion.javelin.bf_seq = (function bf_seq(branch_QMARK_,children,root){
var walk = (function walk(queue){
var temp__4126__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4126__auto__)){
var node = temp__4126__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4126__auto__){
return (function (){
return cljs.core.cons.call(null,node,walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
});})(node,temp__4126__auto__))
,null,null));
} else {
return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
tailrecursion.javelin.propagate_STAR_ = (function propagate_STAR_(pri_map){
while(true){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.peek.call(null,pri_map));
if(cljs.core.truth_(temp__4126__auto__)){
var next = temp__4126__auto__;
var popq = cljs.core.pop.call(null,pri_map);
var old = next.prev;
var new$ = (function (){var temp__4124__auto__ = next.thunk;
if(cljs.core.truth_(temp__4124__auto__)){
var f = temp__4124__auto__;
return f.call(null);
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.call(null,new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);
} else {
}

var G__12459 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__){
return (function (p1__12457_SHARP_,p2__12458_SHARP_){
return cljs.core.assoc.call(null,p1__12457_SHARP_,p2__12458_SHARP_,p2__12458_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__))
,popq,next.sinks));
pri_map = G__12459;
continue;
} else {
return null;
}
break;
}
});
tailrecursion.javelin.deref_STAR_ = (function deref_STAR_(x){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
tailrecursion.javelin.next_rank = (function next_rank(){
return cljs.core.swap_BANG_.call(null,tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.cell__GT_pm = (function cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.call(null,c,c.rank);
});
tailrecursion.javelin.add_sync_BANG_ = (function add_sync_BANG_(c){
return cljs.core.swap_BANG_.call(null,tailrecursion.javelin._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
tailrecursion.javelin.safe_nth = (function safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e12461){if((e12461 instanceof Error)){
var _ = e12461;
return null;
} else {
throw e12461;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__12464 = c;
tailrecursion.javelin.add_sync_BANG_.call(null,G__12464);

return G__12464;
} else {
var G__12465 = c;
tailrecursion.javelin.propagate_STAR_.call(null,tailrecursion.javelin.cell__GT_pm.call(null,G__12465));

return G__12465;
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.destroy_cell_BANG_ = (function() { 
var destroy_cell_BANG___delegate = function (this$,p__12466){
var vec__12472 = p__12466;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__12472,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__12473 = cljs.core.seq.call(null,srcs);
var chunk__12474 = null;
var count__12475 = (0);
var i__12476 = (0);
while(true){
if((i__12476 < count__12475)){
var src = cljs.core._nth.call(null,chunk__12474,i__12476);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__12477 = seq__12473;
var G__12478 = chunk__12474;
var G__12479 = count__12475;
var G__12480 = (i__12476 + (1));
seq__12473 = G__12477;
chunk__12474 = G__12478;
count__12475 = G__12479;
i__12476 = G__12480;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12473);
if(temp__4126__auto__){
var seq__12473__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12473__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__12473__$1);
var G__12481 = cljs.core.chunk_rest.call(null,seq__12473__$1);
var G__12482 = c__4551__auto__;
var G__12483 = cljs.core.count.call(null,c__4551__auto__);
var G__12484 = (0);
seq__12473 = G__12481;
chunk__12474 = G__12482;
count__12475 = G__12483;
i__12476 = G__12484;
continue;
} else {
var src = cljs.core.first.call(null,seq__12473__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__12485 = cljs.core.next.call(null,seq__12473__$1);
var G__12486 = null;
var G__12487 = (0);
var G__12488 = (0);
seq__12473 = G__12485;
chunk__12474 = G__12486;
count__12475 = G__12487;
i__12476 = G__12488;
continue;
}
} else {
return null;
}
}
break;
}
};
var destroy_cell_BANG_ = function (this$,var_args){
var p__12466 = null;
if (arguments.length > 1) {
var G__12489__i = 0, G__12489__a = new Array(arguments.length -  1);
while (G__12489__i < G__12489__a.length) {G__12489__a[G__12489__i] = arguments[G__12489__i + 1]; ++G__12489__i;}
  p__12466 = new cljs.core.IndexedSeq(G__12489__a,0);
} 
return destroy_cell_BANG___delegate.call(this,this$,p__12466);};
destroy_cell_BANG_.cljs$lang$maxFixedArity = 1;
destroy_cell_BANG_.cljs$lang$applyTo = (function (arglist__12490){
var this$ = cljs.core.first(arglist__12490);
var p__12466 = cljs.core.rest(arglist__12490);
return destroy_cell_BANG___delegate(this$,p__12466);
});
destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = destroy_cell_BANG___delegate;
return destroy_cell_BANG_;
})()
;
/**
* @param {...*} var_args
*/
tailrecursion.javelin.set_formula_BANG_ = (function() { 
var set_formula_BANG___delegate = function (this$,p__12493){
var vec__12507 = p__12493;
var f = cljs.core.nth.call(null,vec__12507,(0),null);
var sources = cljs.core.nth.call(null,vec__12507,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__12508_12520 = cljs.core.seq.call(null,this$.sources);
var chunk__12509_12521 = null;
var count__12510_12522 = (0);
var i__12511_12523 = (0);
while(true){
if((i__12511_12523 < count__12510_12522)){
var source_12524 = cljs.core._nth.call(null,chunk__12509_12521,i__12511_12523);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_12524))){
source_12524.sinks = cljs.core.conj.call(null,source_12524.sinks,this$);

if((source_12524.rank > this$.rank)){
var seq__12512_12525 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__12508_12520,chunk__12509_12521,count__12510_12522,i__12511_12523,source_12524,vec__12507,f,sources){
return (function (p1__12491_SHARP_){
return p1__12491_SHARP_.sinks;
});})(seq__12508_12520,chunk__12509_12521,count__12510_12522,i__12511_12523,source_12524,vec__12507,f,sources))
,source_12524));
var chunk__12513_12526 = null;
var count__12514_12527 = (0);
var i__12515_12528 = (0);
while(true){
if((i__12515_12528 < count__12514_12527)){
var dep_12529 = cljs.core._nth.call(null,chunk__12513_12526,i__12515_12528);
dep_12529.rank = tailrecursion.javelin.next_rank.call(null);

var G__12530 = seq__12512_12525;
var G__12531 = chunk__12513_12526;
var G__12532 = count__12514_12527;
var G__12533 = (i__12515_12528 + (1));
seq__12512_12525 = G__12530;
chunk__12513_12526 = G__12531;
count__12514_12527 = G__12532;
i__12515_12528 = G__12533;
continue;
} else {
var temp__4126__auto___12534 = cljs.core.seq.call(null,seq__12512_12525);
if(temp__4126__auto___12534){
var seq__12512_12535__$1 = temp__4126__auto___12534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12512_12535__$1)){
var c__4551__auto___12536 = cljs.core.chunk_first.call(null,seq__12512_12535__$1);
var G__12537 = cljs.core.chunk_rest.call(null,seq__12512_12535__$1);
var G__12538 = c__4551__auto___12536;
var G__12539 = cljs.core.count.call(null,c__4551__auto___12536);
var G__12540 = (0);
seq__12512_12525 = G__12537;
chunk__12513_12526 = G__12538;
count__12514_12527 = G__12539;
i__12515_12528 = G__12540;
continue;
} else {
var dep_12541 = cljs.core.first.call(null,seq__12512_12535__$1);
dep_12541.rank = tailrecursion.javelin.next_rank.call(null);

var G__12542 = cljs.core.next.call(null,seq__12512_12535__$1);
var G__12543 = null;
var G__12544 = (0);
var G__12545 = (0);
seq__12512_12525 = G__12542;
chunk__12513_12526 = G__12543;
count__12514_12527 = G__12544;
i__12515_12528 = G__12545;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__12546 = seq__12508_12520;
var G__12547 = chunk__12509_12521;
var G__12548 = count__12510_12522;
var G__12549 = (i__12511_12523 + (1));
seq__12508_12520 = G__12546;
chunk__12509_12521 = G__12547;
count__12510_12522 = G__12548;
i__12511_12523 = G__12549;
continue;
} else {
var temp__4126__auto___12550 = cljs.core.seq.call(null,seq__12508_12520);
if(temp__4126__auto___12550){
var seq__12508_12551__$1 = temp__4126__auto___12550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12508_12551__$1)){
var c__4551__auto___12552 = cljs.core.chunk_first.call(null,seq__12508_12551__$1);
var G__12553 = cljs.core.chunk_rest.call(null,seq__12508_12551__$1);
var G__12554 = c__4551__auto___12552;
var G__12555 = cljs.core.count.call(null,c__4551__auto___12552);
var G__12556 = (0);
seq__12508_12520 = G__12553;
chunk__12509_12521 = G__12554;
count__12510_12522 = G__12555;
i__12511_12523 = G__12556;
continue;
} else {
var source_12557 = cljs.core.first.call(null,seq__12508_12551__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_12557))){
source_12557.sinks = cljs.core.conj.call(null,source_12557.sinks,this$);

if((source_12557.rank > this$.rank)){
var seq__12516_12558 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__12508_12520,chunk__12509_12521,count__12510_12522,i__12511_12523,source_12557,seq__12508_12551__$1,temp__4126__auto___12550,vec__12507,f,sources){
return (function (p1__12491_SHARP_){
return p1__12491_SHARP_.sinks;
});})(seq__12508_12520,chunk__12509_12521,count__12510_12522,i__12511_12523,source_12557,seq__12508_12551__$1,temp__4126__auto___12550,vec__12507,f,sources))
,source_12557));
var chunk__12517_12559 = null;
var count__12518_12560 = (0);
var i__12519_12561 = (0);
while(true){
if((i__12519_12561 < count__12518_12560)){
var dep_12562 = cljs.core._nth.call(null,chunk__12517_12559,i__12519_12561);
dep_12562.rank = tailrecursion.javelin.next_rank.call(null);

var G__12563 = seq__12516_12558;
var G__12564 = chunk__12517_12559;
var G__12565 = count__12518_12560;
var G__12566 = (i__12519_12561 + (1));
seq__12516_12558 = G__12563;
chunk__12517_12559 = G__12564;
count__12518_12560 = G__12565;
i__12519_12561 = G__12566;
continue;
} else {
var temp__4126__auto___12567__$1 = cljs.core.seq.call(null,seq__12516_12558);
if(temp__4126__auto___12567__$1){
var seq__12516_12568__$1 = temp__4126__auto___12567__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12516_12568__$1)){
var c__4551__auto___12569 = cljs.core.chunk_first.call(null,seq__12516_12568__$1);
var G__12570 = cljs.core.chunk_rest.call(null,seq__12516_12568__$1);
var G__12571 = c__4551__auto___12569;
var G__12572 = cljs.core.count.call(null,c__4551__auto___12569);
var G__12573 = (0);
seq__12516_12558 = G__12570;
chunk__12517_12559 = G__12571;
count__12518_12560 = G__12572;
i__12519_12561 = G__12573;
continue;
} else {
var dep_12574 = cljs.core.first.call(null,seq__12516_12568__$1);
dep_12574.rank = tailrecursion.javelin.next_rank.call(null);

var G__12575 = cljs.core.next.call(null,seq__12516_12568__$1);
var G__12576 = null;
var G__12577 = (0);
var G__12578 = (0);
seq__12516_12558 = G__12575;
chunk__12517_12559 = G__12576;
count__12518_12560 = G__12577;
i__12519_12561 = G__12578;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__12579 = cljs.core.next.call(null,seq__12508_12551__$1);
var G__12580 = null;
var G__12581 = (0);
var G__12582 = (0);
seq__12508_12520 = G__12579;
chunk__12509_12521 = G__12580;
count__12510_12522 = G__12581;
i__12511_12523 = G__12582;
continue;
}
} else {
}
}
break;
}

var compute_12583 = ((function (vec__12507,f,sources){
return (function (p1__12492_SHARP_){
return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__12492_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__12492_SHARP_)));
});})(vec__12507,f,sources))
;
this$.thunk = ((function (compute_12583,vec__12507,f,sources){
return (function (){
return this$.state = compute_12583.call(null,this$.sources);
});})(compute_12583,vec__12507,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_.call(null,this$);
};
var set_formula_BANG_ = function (this$,var_args){
var p__12493 = null;
if (arguments.length > 1) {
var G__12584__i = 0, G__12584__a = new Array(arguments.length -  1);
while (G__12584__i < G__12584__a.length) {G__12584__a[G__12584__i] = arguments[G__12584__i + 1]; ++G__12584__i;}
  p__12493 = new cljs.core.IndexedSeq(G__12584__a,0);
} 
return set_formula_BANG___delegate.call(this,this$,p__12493);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__12585){
var this$ = cljs.core.first(arglist__12585);
var p__12493 = cljs.core.rest(arglist__12585);
return set_formula_BANG___delegate(this$,p__12493);
});
set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_formula_BANG___delegate;
return set_formula_BANG_;
})()
;

/**
* @constructor
*/
tailrecursion.javelin.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition1$ = 98306;
this.cljs$lang$protocol_mask$partition0$ = 2147647488;
})
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__12586 = cljs.core.seq.call(null,self__.watches);
var chunk__12587 = null;
var count__12588 = (0);
var i__12589 = (0);
while(true){
if((i__12589 < count__12588)){
var vec__12590 = cljs.core._nth.call(null,chunk__12587,i__12589);
var key = cljs.core.nth.call(null,vec__12590,(0),null);
var f = cljs.core.nth.call(null,vec__12590,(1),null);
f.call(null,key,this$__$1,o,n);

var G__12592 = seq__12586;
var G__12593 = chunk__12587;
var G__12594 = count__12588;
var G__12595 = (i__12589 + (1));
seq__12586 = G__12592;
chunk__12587 = G__12593;
count__12588 = G__12594;
i__12589 = G__12595;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12586);
if(temp__4126__auto__){
var seq__12586__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12586__$1)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,seq__12586__$1);
var G__12596 = cljs.core.chunk_rest.call(null,seq__12586__$1);
var G__12597 = c__4551__auto__;
var G__12598 = cljs.core.count.call(null,c__4551__auto__);
var G__12599 = (0);
seq__12586 = G__12596;
chunk__12587 = G__12597;
count__12588 = G__12598;
i__12589 = G__12599;
continue;
} else {
var vec__12591 = cljs.core.first.call(null,seq__12586__$1);
var key = cljs.core.nth.call(null,vec__12591,(0),null);
var f = cljs.core.nth.call(null,vec__12591,(1),null);
f.call(null,key,this$__$1,o,n);

var G__12600 = cljs.core.next.call(null,seq__12586__$1);
var G__12601 = null;
var G__12602 = (0);
var G__12603 = (0);
seq__12586 = G__12600;
chunk__12587 = G__12601;
count__12588 = G__12602;
i__12589 = G__12603;
continue;
}
} else {
return null;
}
}
break;
}
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(tailrecursion.javelin.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(tailrecursion.javelin.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

tailrecursion.javelin.propagate_BANG_.call(null,this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.call(null,w,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
});

tailrecursion.javelin.Cell.cljs$lang$type = true;

tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";

tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__4351__auto__,writer__4352__auto__,opt__4353__auto__){
return cljs.core._write.call(null,writer__4352__auto__,"tailrecursion.javelin/Cell");
});

tailrecursion.javelin.__GT_Cell = (function __GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new tailrecursion.javelin.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

tailrecursion.javelin.cell_QMARK_ = (function cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),tailrecursion.javelin.Cell)){
return c;
} else {
return null;
}
});
tailrecursion.javelin.formula_QMARK_ = (function formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__3752__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__3752__auto__)){
return c.thunk;
} else {
return and__3752__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.lens_QMARK_ = (function lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__3752__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__3752__auto__)){
return c.update;
} else {
return and__3752__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){
if(cljs.core.truth_((function (){var and__3752__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__3752__auto__)){
return cljs.core.not.call(null,tailrecursion.javelin.formula_QMARK_.call(null,c));
} else {
return and__3752__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.set_cell_BANG_ = (function set_cell_BANG_(c,x){
c.state = x;

return tailrecursion.javelin.set_formula_BANG_.call(null,c);
});
tailrecursion.javelin.formula = (function formula(f){
return (function() { 
var G__12604__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)),f,sources);
};
var G__12604 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__12605__i = 0, G__12605__a = new Array(arguments.length -  0);
while (G__12605__i < G__12605__a.length) {G__12605__a[G__12605__i] = arguments[G__12605__i + 0]; ++G__12605__i;}
  sources = new cljs.core.IndexedSeq(G__12605__a,0);
} 
return G__12604__delegate.call(this,sources);};
G__12604.cljs$lang$maxFixedArity = 0;
G__12604.cljs$lang$applyTo = (function (arglist__12606){
var sources = cljs.core.seq(arglist__12606);
return G__12604__delegate(sources);
});
G__12604.cljs$core$IFn$_invoke$arity$variadic = G__12604__delegate;
return G__12604;
})()
;
});
tailrecursion.javelin.lens = (function lens(c,f){
var c__$1 = tailrecursion.javelin.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
tailrecursion.javelin.cell = (function cell(x){
return tailrecursion.javelin.set_formula_BANG_.call(null,(new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});
tailrecursion.javelin.lift = tailrecursion.javelin.formula;
tailrecursion.javelin.dosync_STAR_ = (function dosync_STAR_(thunk){
var bind = (function (p1__12607_SHARP_){
var _STAR_tx_STAR_12610 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__12607_SHARP_.call(null);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_12610;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_);
var _STAR_tx_STAR_12611 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_.call(null,tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_12611;
}});})(bind))
;
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
return thunk.call(null);
} else {
return bind.call(null,((function (bind,prop){
return (function (){
thunk.call(null);

return prop.call(null);
});})(bind,prop))
);
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)));
var tag_neq = ((function (olds){
return (function (p1__12612_SHARP_,p2__12613_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__12612_SHARP_,p2__12613_SHARP_),p2__12613_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__12615_SHARP_,p2__12614_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__12615_SHARP_,p2__12614_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__12617__delegate = function (rest__12616_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__12616_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__12616_SHARP_);

return news;
};
var G__12617 = function (var_args){
var rest__12616_SHARP_ = null;
if (arguments.length > 0) {
var G__12618__i = 0, G__12618__a = new Array(arguments.length -  0);
while (G__12618__i < G__12618__a.length) {G__12618__a[G__12618__i] = arguments[G__12618__i + 0]; ++G__12618__i;}
  rest__12616_SHARP_ = new cljs.core.IndexedSeq(G__12618__a,0);
} 
return G__12617__delegate.call(this,rest__12616_SHARP_);};
G__12617.cljs$lang$maxFixedArity = 0;
G__12617.cljs$lang$applyTo = (function (arglist__12619){
var rest__12616_SHARP_ = cljs.core.seq(arglist__12619);
return G__12617__delegate(rest__12616_SHARP_);
});
G__12617.cljs$core$IFn$_invoke$arity$variadic = G__12617__delegate;
return G__12617;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,tailrecursion.javelin.formula.call(null,proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;
if (arguments.length > 0) {
var G__12620__i = 0, G__12620__a = new Array(arguments.length -  0);
while (G__12620__i < G__12620__a.length) {G__12620__a[G__12620__i] = arguments[G__12620__i + 0]; ++G__12620__i;}
  cells = new cljs.core.IndexedSeq(G__12620__a,0);
} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12621){
var cells = cljs.core.seq(arglist__12621);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){
var cseq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__12622_SHARP_){
return tailrecursion.javelin.formula.call(null,cljs.core.comp.call(null,f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__12622_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var cur_count = tailrecursion.javelin.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__12623_SHARP_){
return tailrecursion.javelin.formula.call(null,tailrecursion.javelin.safe_nth).call(null,items_seq,p1__12623_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__12628_12632 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__12629_12633 = null;
var count__12630_12634 = (0);
var i__12631_12635 = (0);
while(true){
if((i__12631_12635 < count__12630_12634)){
var i_12636 = cljs.core._nth.call(null,chunk__12629_12633,i__12631_12635);
f__$1.call(null,ith_item__$1.call(null,i_12636));

var G__12637 = seq__12628_12632;
var G__12638 = chunk__12629_12633;
var G__12639 = count__12630_12634;
var G__12640 = (i__12631_12635 + (1));
seq__12628_12632 = G__12637;
chunk__12629_12633 = G__12638;
count__12630_12634 = G__12639;
i__12631_12635 = G__12640;
continue;
} else {
var temp__4126__auto___12641 = cljs.core.seq.call(null,seq__12628_12632);
if(temp__4126__auto___12641){
var seq__12628_12642__$1 = temp__4126__auto___12641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12628_12642__$1)){
var c__4551__auto___12643 = cljs.core.chunk_first.call(null,seq__12628_12642__$1);
var G__12644 = cljs.core.chunk_rest.call(null,seq__12628_12642__$1);
var G__12645 = c__4551__auto___12643;
var G__12646 = cljs.core.count.call(null,c__4551__auto___12643);
var G__12647 = (0);
seq__12628_12632 = G__12644;
chunk__12629_12633 = G__12645;
count__12630_12634 = G__12646;
i__12631_12635 = G__12647;
continue;
} else {
var i_12648 = cljs.core.first.call(null,seq__12628_12642__$1);
f__$1.call(null,ith_item__$1.call(null,i_12648));

var G__12649 = cljs.core.next.call(null,seq__12628_12642__$1);
var G__12650 = null;
var G__12651 = (0);
var G__12652 = (0);
seq__12628_12632 = G__12649;
chunk__12629_12633 = G__12650;
count__12630_12634 = G__12651;
i__12631_12635 = G__12652;
continue;
}
} else {
}
}
break;
}

return reset_pool_size_BANG_.call(null,cur_count__$1);
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.call(null,cljs.core.reset_BANG_,pool_size));
});
