﻿(function(){var a=CKEDITOR.htmlParser.cssStyle,b=CKEDITOR.tools.cssLength,c=/^((?:\d*(?:\.\d+))|(?:\d+))(.*)?$/i;function d(f,g){var h=c.exec(f),i=c.exec(g);if(h){if(!h[2]&&i[2]=='px')return i[1];if(h[2]=='px'&&!i[2])return i[1]+'px';}return g;};var e={elements:{$:function(f){var g=f.attributes,h=g&&g['data-cke-realelement'],i=h&&new CKEDITOR.htmlParser.fragment.fromHtml(decodeURIComponent(h)),j=i&&i.children[0];if(j&&f.attributes['data-cke-resizable']){var k=new a(f).rules,l=j.attributes,m=k.width,n=k.height;m&&(l.width=d(l.width,m));n&&(l.height=d(l.height,n));}return j;}}};CKEDITOR.plugins.add('fakeobjects',{requires:['htmlwriter'],afterInit:function(f){var g=f.dataProcessor,h=g&&g.htmlFilter;if(h)h.addRules(e);}});CKEDITOR.editor.prototype.createFakeElement=function(f,g,h,i){var j=this.lang.fakeobjects,k=j[h]||j.unknown,l={'class':g,'data-cke-realelement':encodeURIComponent(f.getOuterHtml()),'data-cke-real-node-type':f.type,alt:k,title:k,align:f.getAttribute('align')||''};if(!CKEDITOR.env.hc)l.src=CKEDITOR.getUrl('images/spacer.gif');if(h)l['data-cke-real-element-type']=h;if(i){l['data-cke-resizable']=i;var m=new a(),n=f.getAttribute('width'),o=f.getAttribute('height');n&&(m.rules.width=b(n));o&&(m.rules.height=b(o));m.populate(l);}return this.document.createElement('img',{attributes:l});};CKEDITOR.editor.prototype.createFakeParserElement=function(f,g,h,i){var j=this.lang.fakeobjects,k=j[h]||j.unknown,l,m=new CKEDITOR.htmlParser.basicWriter();f.writeHtml(m);l=m.getHtml();var n={'class':g,'data-cke-realelement':encodeURIComponent(l),'data-cke-real-node-type':f.type,alt:k,title:k,align:f.attributes.align||''};if(!CKEDITOR.env.hc)n.src=CKEDITOR.getUrl('images/spacer.gif');if(h)n['data-cke-real-element-type']=h;if(i){n['data-cke-resizable']=i;var o=f.attributes,p=new a(),q=o.width,r=o.height;q!=undefined&&(p.rules.width=b(q));r!=undefined&&(p.rules.height=b(r));p.populate(n);}return new CKEDITOR.htmlParser.element('img',n);};CKEDITOR.editor.prototype.restoreRealElement=function(f){if(f.data('cke-real-node-type')!=CKEDITOR.NODE_ELEMENT)return null;var g=CKEDITOR.dom.element.createFromHtml(decodeURIComponent(f.data('cke-realelement')),this.document);if(f.data('cke-resizable')){var h=f.getStyle('width'),i=f.getStyle('height');h&&g.setAttribute('width',d(g.getAttribute('width'),h));i&&g.setAttribute('height',d(g.getAttribute('height'),i));}return g;};})();
