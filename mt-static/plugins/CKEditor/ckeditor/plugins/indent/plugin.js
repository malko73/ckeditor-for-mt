﻿(function(){var a={ol:1,ul:1},b=CKEDITOR.dom.walker.whitespaces(true),c=CKEDITOR.dom.walker.bookmark(false,true);function d(h){var p=this;if(h.editor.readOnly)return null;var i=h.editor,j=h.data.path,k=j&&j.contains(a),l=j.block||j.blockLimit;if(k)return p.setState(CKEDITOR.TRISTATE_OFF);if(!p.useIndentClasses&&p.name=='indent')return p.setState(CKEDITOR.TRISTATE_OFF);if(!l)return p.setState(CKEDITOR.TRISTATE_DISABLED);if(p.useIndentClasses){var m=l.$.className.match(p.classNameRegex),n=0;if(m){m=m[1];n=p.indentClassMap[m];}if(p.name=='outdent'&&!n||p.name=='indent'&&n==i.config.indentClasses.length)return p.setState(CKEDITOR.TRISTATE_DISABLED);return p.setState(CKEDITOR.TRISTATE_OFF);}else{var o=parseInt(l.getStyle(f(l)),10);if(isNaN(o))o=0;if(o<=0)return p.setState(CKEDITOR.TRISTATE_DISABLED);return p.setState(CKEDITOR.TRISTATE_OFF);}};function e(h,i){var k=this;k.name=i;k.useIndentClasses=h.config.indentClasses&&h.config.indentClasses.length>0;if(k.useIndentClasses){k.classNameRegex=new RegExp('(?:^|\\s+)('+h.config.indentClasses.join('|')+')(?=$|\\s)');k.indentClassMap={};for(var j=0;j<h.config.indentClasses.length;j++)k.indentClassMap[h.config.indentClasses[j]]=j+1;}k.startDisabled=i=='outdent';};function f(h,i){return(i||h.getComputedStyle('direction'))=='ltr'?'margin-left':'margin-right';};function g(h){return h.type==CKEDITOR.NODE_ELEMENT&&h.is('li');};e.prototype={exec:function(h){var i=this,j={};function k(A){var B=q.startContainer,C=q.endContainer;while(B&&!B.getParent().equals(A))B=B.getParent();while(C&&!C.getParent().equals(A))C=C.getParent();if(!B||!C)return;var D=B,E=[],F=false;while(!F){if(D.equals(C))F=true;E.push(D);D=D.getNext();}if(E.length<1)return;var G=A.getParents(true);for(var H=0;H<G.length;H++){if(G[H].getName&&a[G[H].getName()]){A=G[H];break;}}var I=i.name=='indent'?1:-1,J=E[0],K=E[E.length-1],L=CKEDITOR.plugins.list.listToArray(A,j),M=L[K.getCustomData('listarray_index')].indent;for(H=J.getCustomData('listarray_index');H<=K.getCustomData('listarray_index');H++){L[H].indent+=I;if(I>0){var N=L[H].parent;L[H].parent=new CKEDITOR.dom.element(N.getName(),N.getDocument());}}for(H=K.getCustomData('listarray_index')+1;H<L.length&&L[H].indent>M;H++)L[H].indent+=I;var O=CKEDITOR.plugins.list.arrayToList(L,j,null,h.config.enterMode,A.getDirection());if(i.name=='outdent'){var P;if((P=A.getParent())&&P.is('li')){var Q=O.listNode.getChildren(),R=[],S=Q.count(),T;for(H=S-1;H>=0;H--){if((T=Q.getItem(H))&&T.is&&T.is('li'))R.push(T);}}}if(O)O.listNode.replace(A);
if(R&&R.length)for(H=0;H<R.length;H++){var U=R[H],V=U;while((V=V.getNext())&&V.is&&V.getName() in a){if(CKEDITOR.env.ie&&!U.getFirst(function(W){return b(W)&&c(W);}))U.append(q.document.createText('\xa0'));U.append(V);}U.insertAfter(P);}};function l(){var A=q.createIterator(),B=h.config.enterMode;A.enforceRealBlocks=true;A.enlargeBr=B!=CKEDITOR.ENTER_BR;var C;while(C=A.getNextParagraph(B==CKEDITOR.ENTER_P?'p':'div'))m(C);};function m(A,B){if(A.getCustomData('indent_processed'))return false;if(i.useIndentClasses){var C=A.$.className.match(i.classNameRegex),D=0;if(C){C=C[1];D=i.indentClassMap[C];}if(i.name=='outdent')D--;else D++;if(D<0)return false;D=Math.min(D,h.config.indentClasses.length);D=Math.max(D,0);A.$.className=CKEDITOR.tools.ltrim(A.$.className.replace(i.classNameRegex,''));if(D>0)A.addClass(h.config.indentClasses[D-1]);}else{var E=f(A,B),F=parseInt(A.getStyle(E),10);if(isNaN(F))F=0;var G=h.config.indentOffset||40;F+=(i.name=='indent'?1:-1)*G;if(F<0)return false;F=Math.max(F,0);F=Math.ceil(F/G)*G;A.setStyle(E,F?F+(h.config.indentUnit||'px'):'');if(A.getAttribute('style')==='')A.removeAttribute('style');}CKEDITOR.dom.element.setMarker(j,A,'indent_processed',1);return true;};var n=h.getSelection(),o=n.createBookmarks(1),p=n&&n.getRanges(1),q,r=p.createIterator();while(q=r.getNextRange()){var s=q.getCommonAncestor(),t=s;while(t&&!(t.type==CKEDITOR.NODE_ELEMENT&&a[t.getName()]))t=t.getParent();if(!t){var u=q.getEnclosedNode();if(u&&u.type==CKEDITOR.NODE_ELEMENT&&u.getName() in a){q.setStartAt(u,CKEDITOR.POSITION_AFTER_START);q.setEndAt(u,CKEDITOR.POSITION_BEFORE_END);t=u;}}if(t&&q.startContainer.type==CKEDITOR.NODE_ELEMENT&&q.startContainer.getName() in a){var v=new CKEDITOR.dom.walker(q);v.evaluator=g;q.startContainer=v.next();}if(t&&q.endContainer.type==CKEDITOR.NODE_ELEMENT&&q.endContainer.getName() in a){v=new CKEDITOR.dom.walker(q);v.evaluator=g;q.endContainer=v.previous();}if(t){var w=t.getFirst(g),x=!!w.getNext(g),y=q.startContainer,z=w.equals(y)||w.contains(y);if(!(z&&(i.name=='indent'||i.useIndentClasses||parseInt(t.getStyle(f(t)),10))&&m(t,!x&&w.getDirection())))k(t);}else l();}CKEDITOR.dom.element.clearAllMarkers(j);h.forceNextSelectionCheck();n.selectBookmarks(o);}};CKEDITOR.plugins.add('indent',{init:function(h){var i=h.addCommand('indent',new e(h,'indent')),j=h.addCommand('outdent',new e(h,'outdent'));h.ui.addButton('Indent',{label:h.lang.indent,command:'indent'});h.ui.addButton('Outdent',{label:h.lang.outdent,command:'outdent'});h.on('selectionChange',CKEDITOR.tools.bind(d,i));
h.on('selectionChange',CKEDITOR.tools.bind(d,j));if(CKEDITOR.env.ie6Compat||CKEDITOR.env.ie7Compat)h.addCss('ul,ol{\tmargin-left: 0px;\tpadding-left: 40px;}');h.on('dirChanged',function(k){var l=new CKEDITOR.dom.range(h.document);l.setStartBefore(k.data.node);l.setEndAfter(k.data.node);var m=new CKEDITOR.dom.walker(l),n;while(n=m.next()){if(n.type==CKEDITOR.NODE_ELEMENT){if(!n.equals(k.data.node)&&n.getDirection()){l.setStartAfter(n);m=new CKEDITOR.dom.walker(l);continue;}var o=h.config.indentClasses;if(o){var p=k.data.dir=='ltr'?['_rtl','']:['','_rtl'];for(var q=0;q<o.length;q++){if(n.hasClass(o[q]+p[0])){n.removeClass(o[q]+p[0]);n.addClass(o[q]+p[1]);}}}var r=n.getStyle('margin-right'),s=n.getStyle('margin-left');r?n.setStyle('margin-left',r):n.removeStyle('margin-left');s?n.setStyle('margin-right',s):n.removeStyle('margin-right');}}});},requires:['domiterator','list']});})();
