!function(e,t){"use strict";function n(e,t,n){this.root=this.currentNode=e,this.nodeType=t,this.filter=n}function r(e,t){for(var n=e.length;n--;)if(!t(e[n]))return!1;return!0}function o(e){return e.nodeType===I&&!!he[e.nodeName]}function i(e){return fe.test(e.nodeName)}function a(e){var t=e.nodeType;return(t===I||t===M)&&!i(e)&&r(e.childNodes,i)}function s(e){var t=e.nodeType;return!(t!==I&&t!==M||i(e)||a(e))}function d(e,t){var r=new n(t,H,a);return r.currentNode=e,r}function l(e,t){return e=d(e,t).previousNode(),e!==t?e:null}function c(e,t){return e=d(e,t).nextNode(),e!==t?e:null}function f(e,t){return!o(e)&&e.nodeType===t.nodeType&&e.nodeName===t.nodeName&&e.className===t.className&&(!e.style&&!t.style||e.style.cssText===t.style.cssText)}function h(e,t,n){if(e.nodeName!==t)return!1;for(var r in n)if(e.getAttribute(r)!==n[r])return!1;return!0}function u(e,t,n,r){for(;e&&e!==t;){if(h(e,n,r))return e;e=e.parentNode}return null}function p(e,t){for(;t;){if(t===e)return!0;t=t.parentNode}return!1}function g(e,t){var n,r,o,i,a="";return e&&e!==t&&(a=g(e.parentNode,t),e.nodeType===I&&(a+=(a?">":"")+e.nodeName,(n=e.id)&&(a+="#"+n),(r=e.className.trim())&&(o=r.split(/\s\s*/),o.sort(),a+=".",a+=o.join(".")),(i=e.dir)&&(a+="[dir="+i+"]"))),a}function m(e){var t=e.nodeType;return t===I?e.childNodes.length:e.length||0}function v(e){var t=e.parentNode;return t&&t.removeChild(e),e}function C(e,t){var n=e.parentNode;n&&n.replaceChild(t,e)}function N(e){for(var t=e.ownerDocument.createDocumentFragment(),n=e.childNodes,r=n?n.length:0;r--;)t.appendChild(e.firstChild);return t}function S(e,n,r,o){var i,a,s,d,l=e.createElement(n);if(r instanceof Array&&(o=r,r=null),r)for(i in r)a=r[i],a!==t&&l.setAttribute(i,r[i]);if(o)for(s=0,d=o.length;d>s;s+=1)l.appendChild(o[s]);return l}function _(e,t){var n,r,a=e.ownerDocument,s=e;if(e===t&&((r=e.firstChild)&&"BR"!==r.nodeName||(n=O(a).createDefaultBlock(),r?e.replaceChild(n,r):e.appendChild(n),e=n,n=null)),e.nodeType===w)return s;if(i(e)){for(r=e.firstChild;ie&&r&&r.nodeType===w&&!r.data;)e.removeChild(r),r=e.firstChild;r||(ie?(n=a.createTextNode(G),O(a)._didAddZWS()):n=a.createTextNode(""))}else if(re)if(oe){if(!e.querySelector("WBR"))for(n=S(a,"WBR");(r=e.lastElementChild)&&!i(r);)e=r}else{for(;e.nodeType!==w&&!o(e);){if(r=e.firstChild,!r){n=a.createTextNode("");break}e=r}e.nodeType===w?/^ +$/.test(e.data)&&(e.data=""):o(e)&&e.parentNode.insertBefore(a.createTextNode(""),e)}else if(!e.querySelector("BR"))for(n=S(a,"BR");(r=e.lastElementChild)&&!i(r);)e=r;if(n)try{e.appendChild(n)}catch(d){O(a).didError({name:"Squire: fixCursor – "+d,message:"Parent: "+e.nodeName+"/"+e.innerHTML+" appendChild: "+n.nodeName})}return s}function y(e,t){var n,r,o,a,d=e.childNodes,l=e.ownerDocument,c=null,f=O(l)._config;for(n=0,r=d.length;r>n;n+=1)o=d[n],a="BR"===o.nodeName,!a&&i(o)?(c||(c=S(l,f.blockTag,f.blockAttributes)),c.appendChild(o),n-=1,r-=1):(a||c)&&(c||(c=S(l,f.blockTag,f.blockAttributes)),_(c,t),a?e.replaceChild(c,o):(e.insertBefore(c,o),n+=1,r+=1),c=null),s(o)&&y(o,t);return c&&e.appendChild(_(c,t)),e}function T(e,t,n,r){var o,i,a,s=e.nodeType;if(s===w&&e!==n)return T(e.parentNode,e.splitText(t),n,r);if(s===I){if("number"==typeof t&&(t=t<e.childNodes.length?e.childNodes[t]:null),e===n)return t;for(o=e.parentNode,i=e.cloneNode(!1);t;)a=t.nextSibling,i.appendChild(t),t=a;return"OL"===e.nodeName&&u(e,r,"BLOCKQUOTE")&&(i.start=(+e.start||1)+e.childNodes.length-1),_(e,r),_(i,r),(a=e.nextSibling)?o.insertBefore(i,a):o.appendChild(i),T(o,i,n,r)}return t}function b(e,t){if(e.nodeType===I)for(var n,r,o,a=e.childNodes,s=a.length,d=[];s--;)if(n=a[s],r=s&&a[s-1],s&&i(n)&&f(n,r)&&!he[n.nodeName])t.startContainer===n&&(t.startContainer=r,t.startOffset+=m(r)),t.endContainer===n&&(t.endContainer=r,t.endOffset+=m(r)),t.startContainer===e&&(t.startOffset>s?t.startOffset-=1:t.startOffset===s&&(t.startContainer=r,t.startOffset=m(r))),t.endContainer===e&&(t.endOffset>s?t.endOffset-=1:t.endOffset===s&&(t.endContainer=r,t.endOffset=m(r))),v(n),n.nodeType===w?r.appendData(n.data):d.push(N(n));else if(n.nodeType===I){for(o=d.length;o--;)n.appendChild(d.pop());b(n,t)}}function E(e,t,n){for(var r,o,i,a=t;1===a.parentNode.childNodes.length;)a=a.parentNode;v(a),o=e.childNodes.length,r=e.lastChild,(r&&"BR"===r.nodeName||"WBR"===r.nodeName)&&(e.removeChild(r),o-=1),i={startContainer:e,startOffset:o,endContainer:e,endOffset:o},e.appendChild(N(t)),b(e,i),n.setStart(i.startContainer,i.startOffset),n.collapse(!0),J&&(r=e.lastChild)&&"BR"===r.nodeName&&e.removeChild(r)}function B(e,t){var n,r,o=e.previousSibling,i=e.firstChild,a=e.ownerDocument,d="LI"===e.nodeName;if(!d||i&&/^[OU]L$/.test(i.nodeName))if(o&&f(o,e)){if(!s(o)){if(!d)return;r=S(a,"DIV"),r.appendChild(N(o)),o.appendChild(r)}v(e),n=!s(e),o.appendChild(N(e)),n&&y(o,t),i&&B(i,t)}else d&&(o=S(a,"DIV"),e.insertBefore(o,i),_(o,t))}function x(e){for(var t=e.lastChild;t;){if(t.nodeType===w)return t;var n=x(t);if(n)return n;t=t.previousSibling}}function O(e){for(var t,n=je.length;n--;)if(t=je[n],t._doc===e)return t;return null}function k(e,t){var n,r;e||(e={});for(n in t)r=t[n],e[n]=r&&r.constructor===Object?k(e[n],r):r;return e}function L(e,t){e.nodeType===F&&(e=e.body);var n,r=e.ownerDocument,o=r.defaultView;this._win=o,this._doc=r,this._root=e,this._events={},this._lastSelection=null,ae&&this.addEventListener("beforedeactivate",this.getSelection),this._hasZWS=!1,this._lastAnchorNode=null,this._lastFocusNode=null,this._path="",this.addEventListener("keyup",this._updatePathOnEvent),this.addEventListener("mouseup",this._updatePathOnEvent),this._undoIndex=-1,this._undoStack=[],this._undoStackLength=0,this._isInUndoState=!1,this._ignoreChange=!1,this._ignoreAllChanges=!1,se?(n=new MutationObserver(this._docWasChanged.bind(this)),n.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0}),this._mutation=n):this.addEventListener("keyup",this._keyUpDetectChange),this._restoreSelection=!1,this.addEventListener("blur",A),this.addEventListener("input",R),this.addEventListener("mousedown",R),this.addEventListener("touchstart",R),this.addEventListener("focus",D),this._awaitingPaste=!1,this.addEventListener(X?"beforecut":"cut",Ge),this.addEventListener("copy",Qe),this.addEventListener(X?"beforepaste":"paste",Ve),this.addEventListener("drop",Xe),this.addEventListener(J?"keypress":"keydown",ke),this._keyHandlers=Object.create(De),this.setConfig(t),X&&(o.Text.prototype.splitText=function(e){var t=this.ownerDocument.createTextNode(this.data.slice(e)),n=this.nextSibling,r=this.parentNode,o=this.length-e;return n?r.insertBefore(t,n):r.appendChild(t),o&&this.deleteData(e,o),t}),e.setAttribute("contenteditable","true");try{r.execCommand("enableObjectResizing",!1,"false"),r.execCommand("enableInlineTableEditing",!1,"false")}catch(i){}je.push(this),this.setHTML("")}function A(){this._restoreSelection=!0}function R(){this._restoreSelection=!1}function D(){this._restoreSelection&&this.setSelection(this._lastSelection)}function U(e,t,n){var r,o;for(r=t.firstChild;r;r=o){if(o=r.nextSibling,i(r)){if(r.nodeType===w||"BR"===r.nodeName||"IMG"===r.nodeName){n.appendChild(r);continue}}else if(a(r)){n.appendChild(e.createDefaultBlock([U(e,r,e._doc.createDocumentFragment())]));continue}U(e,r,n)}return n}var P=2,I=1,w=3,F=9,M=11,H=1,W=4,z=0,q=1,K=2,Z=3,G="​",Q=e.defaultView,V=navigator.userAgent,j=/iP(?:ad|hone|od)/.test(V),$=/Mac OS X/.test(V),Y=/Gecko\//.test(V),X=/Trident\/[456]\./.test(V),J=!!Q.opera,ee=/Edge\//.test(V),te=!ee&&/WebKit\//.test(V),ne=$?"meta-":"ctrl-",re=X||J,oe=X,ie=X||te,ae=X,se="undefined"!=typeof MutationObserver,de=/[^ \t\r\n]/,le=Array.prototype.indexOf;Object.create||(Object.create=function(e){var t=function(){};return t.prototype=e,new t});var ce={1:1,2:2,3:4,8:128,9:256,11:1024};n.prototype.nextNode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,o=this.filter;;){for(e=t.firstChild;!e&&t&&t!==n;)e=t.nextSibling,e||(t=t.parentNode);if(!e)return null;if(ce[e.nodeType]&r&&o(e))return this.currentNode=e,e;t=e}},n.prototype.previousNode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,o=this.filter;;){if(t===n)return null;if(e=t.previousSibling)for(;t=e.lastChild;)e=t;else e=t.parentNode;if(!e)return null;if(ce[e.nodeType]&r&&o(e))return this.currentNode=e,e;t=e}},n.prototype.previousPONode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,o=this.filter;;){for(e=t.lastChild;!e&&t&&t!==n;)e=t.previousSibling,e||(t=t.parentNode);if(!e)return null;if(ce[e.nodeType]&r&&o(e))return this.currentNode=e,e;t=e}};var fe=/^(?:#text|A(?:BBR|CRONYM)?|B(?:R|D[IO])?|C(?:ITE|ODE)|D(?:ATA|EL|FN)|EM|FONT|HR|I(?:MG|NPUT|NS)?|KBD|Q|R(?:P|T|UBY)|S(?:AMP|MALL|PAN|TR(?:IKE|ONG)|U[BP])?|U|VAR|WBR)$/,he={BR:1,HR:1,IMG:1,INPUT:1,WBR:1},ue=function(e,t){for(var n=e.childNodes;t&&e.nodeType===I;)e=n[t-1],n=e.childNodes,t=n.length;return e},pe=function(e,t){if(e.nodeType===I){var n=e.childNodes;if(t<n.length)e=n[t];else{for(;e&&!e.nextSibling;)e=e.parentNode;e&&(e=e.nextSibling)}}return e},ge=function(e,t){var n,r,o,i,a=e.startContainer,s=e.startOffset,d=e.endContainer,l=e.endOffset;a.nodeType===w?(n=a.parentNode,r=n.childNodes,s===a.length?(s=le.call(r,a)+1,e.collapsed&&(d=n,l=s)):(s&&(i=a.splitText(s),d===a?(l-=s,d=i):d===n&&(l+=1),a=i),s=le.call(r,a)),a=n):r=a.childNodes,o=r.length,s===o?a.appendChild(t):a.insertBefore(t,r[s]),a===d&&(l+=r.length-o),e.setStart(a,s),e.setEnd(d,l)},me=function(e,t,n){var r=e.startContainer,o=e.startOffset,i=e.endContainer,a=e.endOffset;t||(t=e.commonAncestorContainer),t.nodeType===w&&(t=t.parentNode);for(var s,d,l,c=T(i,a,t,n),f=T(r,o,t,n),h=t.ownerDocument.createDocumentFragment();f!==c;)s=f.nextSibling,h.appendChild(f),f=s;return r=t,o=c?le.call(t.childNodes,c):t.childNodes.length,l=t.childNodes[o],d=l&&l.previousSibling,d&&d.nodeType===w&&l.nodeType===w&&(r=d,o=d.length,d.appendData(l.data),v(l)),e.setStart(r,o),e.collapse(!0),_(t,n),h},ve=function(e,t){_e(e);var n=e.startContainer,r=e.endContainer,o=(i(n)||a(n))&&(i(r)||a(r)),s=me(e,null,t);Se(e),n=ye(e,t),o&&(r=Te(e,t),n&&r&&n!==r&&E(n,r,e)),n&&_(n,t);var d=t.firstChild;return d&&"BR"!==d.nodeName&&"WBR"!==d.nodeName?e.collapse(!1):(_(t,t),e.selectNodeContents(t.firstChild)),s},Ce=function(e,t,n){for(var r=!0,o=t.childNodes,d=o.length;d--;)if(!i(o[d])){r=!1;break}if(e.collapsed||ve(e,n),Se(e),r)ge(e,t),e.collapse(!1);else{var f=ye(e);et(f),ze(f),_(f);for(var h,p,g,m,v,C=e.startContainer,N=T(C,e.startOffset,u(C.parentNode,n,"BLOCKQUOTE")||n,n),S=N.previousSibling,y=S,b=y.childNodes.length,E=N,x=0,O=N.parentNode;(h=y.lastChild)&&h.nodeType===I;){if("BR"===h.nodeName||"WBR"===h.nodeName){b-=1;break}y=h,b=y.childNodes.length}for(;(h=E.firstChild)&&h.nodeType===I&&"BR"!==h.nodeName&&"WBR"!==h.nodeName;)E=h;for(v=y.childNodes[b]||null;(h=t.firstChild)&&i(h);)y.insertBefore(h,v);for(;(h=t.lastChild)&&i(h);)E.insertBefore(h,E.firstChild),x+=1;for(p=t;p=c(p,n);)_(p,n);if(O.insertBefore(t,N),m=S.nextSibling,p=l(m,n),p&&!/\S/.test(p.textContent))do O=p.parentNode,O.removeChild(p),p=O;while(p&&!p.lastChild&&p!==n);if(S.parentNode||(S=m.previousSibling),y.parentNode||(y=S||m.parentNode,b=S?S.childNodes.length:0),s(m)&&B(m,n),g=N.previousSibling,p=a(N)?N:c(N,n),p&&!/\S/.test(p.textContent))do O=p.parentNode,O.removeChild(p),p=O;while(p&&!p.lastChild&&p!==n);N.parentNode||(N=g.nextSibling),x||(E=g,x=g.childNodes.length),N&&s(N)&&B(N,n),e.setStart(y,b),e.setEnd(E,x),Se(e)}},Ne=function(e,t,n){var r=t.ownerDocument.createRange();if(r.selectNode(t),n){var o=e.compareBoundaryPoints(Z,r)>-1,i=e.compareBoundaryPoints(q,r)<1;return!o&&!i}var a=e.compareBoundaryPoints(z,r)<1,s=e.compareBoundaryPoints(K,r)>-1;return a&&s},Se=function(e){for(var t,n=e.startContainer,r=e.startOffset,i=e.endContainer,a=e.endOffset;n.nodeType!==w&&(t=n.childNodes[r],t&&!o(t));)n=t,r=0;if(a)for(;i.nodeType!==w&&(t=i.childNodes[a-1],t&&!o(t));)i=t,a=m(i);else for(;i.nodeType!==w&&(t=i.firstChild,t&&!o(t));)i=t;e.collapsed?(e.setStart(i,a),e.setEnd(n,r)):(e.setStart(n,r),e.setEnd(i,a))},_e=function(e,t){var n,r=e.startContainer,o=e.startOffset,i=e.endContainer,a=e.endOffset;for(t||(t=e.commonAncestorContainer);r!==t&&!o;)n=r.parentNode,o=le.call(n.childNodes,r),r=n;for(;i!==t&&a===m(i);)n=i.parentNode,a=le.call(n.childNodes,i)+1,i=n;e.setStart(r,o),e.setEnd(i,a)},ye=function(e,t){var n,r=e.startContainer;return i(r)?n=l(r,t):a(r)?n=r:(n=ue(r,e.startOffset),n=c(n,t)),n&&Ne(e,n,!0)?n:null},Te=function(e,t){var n,r,o=e.endContainer;if(i(o))n=l(o,t);else if(a(o))n=o;else{if(n=pe(o,e.endOffset),!n)for(n=t;r=n.lastChild;)n=r;n=l(n,t)}return n&&Ne(e,n,!0)?n:null},be=new n(null,W|H,function(e){return e.nodeType===w?de.test(e.data):"IMG"===e.nodeName}),Ee=function(e,t){var n=e.startContainer,r=e.startOffset;if(be.root=null,n.nodeType===w){if(r)return!1;be.currentNode=n}else be.currentNode=pe(n,r);return be.root=ye(e,t),!be.previousNode()},Be=function(e,t){var n,r=e.endContainer,o=e.endOffset;if(be.root=null,r.nodeType===w){if(n=r.data.length,n&&n>o)return!1;be.currentNode=r}else be.currentNode=ue(r,o);return be.root=Te(e,t),!be.nextNode()},xe=function(e,t){var n,r=ye(e,t),o=Te(e,t);r&&o&&(n=r.parentNode,e.setStart(n,le.call(n.childNodes,r)),n=o.parentNode,e.setEnd(n,le.call(n.childNodes,o)+1))},Oe={8:"backspace",9:"tab",13:"enter",32:"space",33:"pageup",34:"pagedown",37:"left",39:"right",46:"delete",219:"[",221:"]"},ke=function(e){var t=e.keyCode,n=Oe[t],r="",o=this.getSelection();e.defaultPrevented||(n||(n=String.fromCharCode(t).toLowerCase(),/^[A-Za-z0-9]$/.test(n)||(n="")),J&&46===e.which&&(n="."),t>111&&124>t&&(n="f"+(t-111)),"backspace"!==n&&"delete"!==n&&(e.altKey&&(r+="alt-"),e.ctrlKey&&(r+="ctrl-"),e.metaKey&&(r+="meta-")),e.shiftKey&&(r+="shift-"),n=r+n,this._keyHandlers[n]?this._keyHandlers[n](this,e,o):1!==n.length||o.collapsed||(this.saveUndoState(o),ve(o,this._root),this._ensureBottomLine(),this.setSelection(o),this._updatePath(o,!0)))},Le=function(e){return function(t,n){n.preventDefault(),t[e]()}},Ae=function(e,t){return t=t||null,function(n,r){r.preventDefault();var o=n.getSelection();n.hasFormat(e,null,o)?n.changeFormat(null,{tag:e},o):n.changeFormat({tag:e},t,o)}},Re=function(e,t){try{t||(t=e.getSelection());var n,r=t.startContainer;for(r.nodeType===w&&(r=r.parentNode),n=r;i(n)&&(!n.textContent||n.textContent===G);)r=n,n=r.parentNode;r!==n&&(t.setStart(n,le.call(n.childNodes,r)),t.collapse(!0),n.removeChild(r),a(n)||(n=l(n,e._root)),_(n,e._root),Se(t)),r===e._root&&(r=r.firstChild)&&"BR"===r.nodeName&&v(r),e._ensureBottomLine(),e.setSelection(t),e._updatePath(t,!0)}catch(o){e.didError(o)}},De={enter:function(e,t,n){var r,o,i,a=e._root;if(t.preventDefault(),e._recordUndoState(n),gt(n.startContainer),e._removeZWS(),e._getRangeAndRemoveBookmark(n),n.collapsed||ve(n,a),r=ye(n,a),!r||/^T[HD]$/.test(r.nodeName))return ge(n,e.createElement("BR")),n.collapse(!1),e.setSelection(n),void e._updatePath(n,!0);if((o=u(r,a,"LI"))&&(r=o),!r.textContent){if(u(r,a,"UL")||u(r,a,"OL"))return e.modifyBlocks(ut,n);if(u(r,a,"BLOCKQUOTE"))return e.modifyBlocks(st,n)}for(i=ot(e,r,n.startContainer,n.startOffset),et(r),ze(r),_(r,a);i.nodeType===I;){var s,d=i.firstChild;if("A"===i.nodeName&&(!i.textContent||i.textContent===G)){d=e._doc.createTextNode(""),C(i,d),i=d;break}for(;d&&d.nodeType===w&&!d.data&&(s=d.nextSibling,s&&"BR"!==s.nodeName);)v(d),d=s;if(!d||"BR"===d.nodeName||d.nodeType===w&&!J)break;i=d}n=e._createRange(i,0),e.setSelection(n),e._updatePath(n,!0)},backspace:function(e,t,n){var r=e._root;if(e._removeZWS(),e.saveUndoState(n),n.collapsed)if(Ee(n,r)){t.preventDefault();var o,i=ye(n,r);if(!i)return;if(y(i.parentNode,r),o=l(i,r)){if(!o.isContentEditable)return void v(o);for(E(o,i,n),i=o.parentNode;i!==r&&!i.nextSibling;)i=i.parentNode;i!==r&&(i=i.nextSibling)&&B(i,r),e.setSelection(n)}else if(i){if(u(i,r,"UL")||u(i,r,"OL"))return e.modifyBlocks(ut,n);if(u(i,r,"BLOCKQUOTE"))return e.modifyBlocks(at,n);e.setSelection(n),e._updatePath(n,!0)}}else e.setSelection(n),setTimeout(function(){Re(e)},0);else t.preventDefault(),ve(n,r),Re(e,n)},"delete":function(e,t,n){var r,o,i,a,s,d,l=e._root;if(e._removeZWS(),e.saveUndoState(n),n.collapsed)if(Be(n,l)){if(t.preventDefault(),r=ye(n,l),!r)return;if(y(r.parentNode,l),o=c(r,l)){if(!o.isContentEditable)return void v(o);for(E(r,o,n),o=r.parentNode;o!==l&&!o.nextSibling;)o=o.parentNode;o!==l&&(o=o.nextSibling)&&B(o,l),e.setSelection(n),e._updatePath(n,!0)}}else{if(i=n.cloneRange(),_e(n,e._root),a=n.endContainer,s=n.endOffset,a.nodeType===I&&(d=a.childNodes[s],d&&"IMG"===d.nodeName))return t.preventDefault(),v(d),Se(n),void Re(e,n);e.setSelection(i),setTimeout(function(){Re(e)},0)}else t.preventDefault(),ve(n,l),Re(e,n)},tab:function(e,t,n){var r,o,i=e._root;if(e._removeZWS(),n.collapsed&&Ee(n,i))for(r=ye(n,i);o=r.parentNode;){if("UL"===o.nodeName||"OL"===o.nodeName){r.previousSibling&&(t.preventDefault(),e.modifyBlocks(ht,n));break}r=o}},"shift-tab":function(e,t,n){var r,o=e._root;e._removeZWS(),n.collapsed&&Ee(n,o)&&(r=n.startContainer,(u(r,o,"UL")||u(r,o,"OL"))&&(t.preventDefault(),e.modifyBlocks(ut,n)))},space:function(e,t,n){var r,o;e._recordUndoState(n),gt(n.startContainer),e._getRangeAndRemoveBookmark(n),r=n.endContainer,o=r.parentNode,n.collapsed&&"A"===o.nodeName&&!r.nextSibling&&n.endOffset===m(r)&&n.setStartAfter(o),e.setSelection(n)},left:function(e){e._removeZWS()},right:function(e){e._removeZWS()}};$&&Y&&(De["meta-left"]=function(e,t){t.preventDefault();var n=Je(e);n&&n.modify&&n.modify("move","backward","lineboundary")},De["meta-right"]=function(e,t){t.preventDefault();var n=Je(e);n&&n.modify&&n.modify("move","forward","lineboundary")}),$||(De.pageup=function(e){e.moveCursorToStart()},De.pagedown=function(e){e.moveCursorToEnd()}),De[ne+"b"]=Ae("B"),De[ne+"i"]=Ae("I"),De[ne+"u"]=Ae("U"),De[ne+"shift-7"]=Ae("S"),De[ne+"shift-5"]=Ae("SUB",{tag:"SUP"}),De[ne+"shift-6"]=Ae("SUP",{tag:"SUB"}),De[ne+"shift-8"]=Le("makeUnorderedList"),De[ne+"shift-9"]=Le("makeOrderedList"),De[ne+"["]=Le("decreaseQuoteLevel"),De[ne+"]"]=Le("increaseQuoteLevel"),De[ne+"y"]=Le("redo"),De[ne+"z"]=Le("undo"),De[ne+"shift-z"]=Le("redo");var Ue={1:10,2:13,3:16,4:18,5:24,6:32,7:48},Pe={backgroundColor:{regexp:de,replace:function(e,t){return S(e,"SPAN",{"class":"highlight",style:"background-color:"+t})}},color:{regexp:de,replace:function(e,t){return S(e,"SPAN",{"class":"colour",style:"color:"+t})}},fontWeight:{regexp:/^bold/i,replace:function(e){return S(e,"B")}},fontStyle:{regexp:/^italic/i,replace:function(e){return S(e,"I")}},fontFamily:{regexp:de,replace:function(e,t){return S(e,"SPAN",{"class":"font",style:"font-family:"+t})}},fontSize:{regexp:de,replace:function(e,t){return S(e,"SPAN",{"class":"size",style:"font-size:"+t})}}},Ie=function(e){return function(t,n){var r=S(t.ownerDocument,e);return n.replaceChild(r,t),r.appendChild(N(t)),r}},we={SPAN:function(e,t){var n,r,o,i,a,s,d=e.style,l=e.ownerDocument;for(n in Pe)r=Pe[n],o=d[n],o&&r.regexp.test(o)&&(s=r.replace(l,o),i&&i.appendChild(s),i=s,a||(a=s));return a&&(i.appendChild(N(e)),t.replaceChild(a,e)),i||e},STRONG:Ie("B"),EM:Ie("I"),STRIKE:Ie("S"),FONT:function(e,t){var n,r,o,i,a,s=e.face,d=e.size,l=e.color,c=e.ownerDocument;return s&&(n=S(c,"SPAN",{"class":"font",style:"font-family:"+s}),a=n,i=n),d&&(r=S(c,"SPAN",{"class":"size",style:"font-size:"+Ue[d]+"px"}),a||(a=r),i&&i.appendChild(r),i=r),l&&/^#?([\dA-F]{3}){1,2}$/i.test(l)&&("#"!==l.charAt(0)&&(l="#"+l),o=S(c,"SPAN",{"class":"colour",style:"color:"+l}),a||(a=o),i&&i.appendChild(o),i=o),a||(a=i=S(c,"SPAN")),t.replaceChild(a,e),i.appendChild(N(e)),i},TT:function(e,t){var n=S(e.ownerDocument,"SPAN",{"class":"font",style:'font-family:menlo,consolas,"courier new",monospace'});return t.replaceChild(n,e),n.appendChild(N(e)),n}},Fe=/^(?:A(?:DDRESS|RTICLE|SIDE|UDIO)|BLOCKQUOTE|CAPTION|D(?:[DLT]|IV)|F(?:IGURE|IGCAPTION|OOTER)|H[1-6]|HEADER|L(?:ABEL|EGEND|I)|O(?:L|UTPUT)|P(?:RE)?|SECTION|T(?:ABLE|BODY|D|FOOT|H|HEAD|R)|UL)$/,Me=/^(?:HEAD|META|STYLE)/,He=new n(null,W|H,function(){return!0}),We=function vt(e,t){var n,r,o,a,s,d,l,c,f,h,u,p,g=e.childNodes;for(n=e;i(n);)n=n.parentNode;for(He.root=n,r=0,o=g.length;o>r;r+=1)if(a=g[r],s=a.nodeName,d=a.nodeType,l=we[s],d===I){if(c=a.childNodes.length,l)a=l(a,e);else{if(Me.test(s)){e.removeChild(a),r-=1,o-=1;continue}if(!Fe.test(s)&&!i(a)){r-=1,o+=c-1,e.replaceChild(N(a),a);continue}}c&&vt(a,t||"PRE"===s)}else{if(d===w){if(u=a.data,f=!de.test(u.charAt(0)),h=!de.test(u.charAt(u.length-1)),t||!f&&!h)continue;if(f){for(He.currentNode=a;(p=He.previousPONode())&&(s=p.nodeName,!("IMG"===s||"#text"===s&&/\S/.test(p.data)));)if(!i(p)){p=null;break}u=u.replace(/^\s+/g,p?" ":"")}if(h){for(He.currentNode=a;(p=He.nextNode())&&!("IMG"===s||"#text"===s&&/\S/.test(p.data));)if(!i(p)){p=null;break}u=u.replace(/\s+$/g,p?" ":"")}if(u){a.data=u;continue}}e.removeChild(a),r-=1,o-=1}return e},ze=function Ct(e){for(var t,n=e.childNodes,r=n.length;r--;)t=n[r],t.nodeType!==I||o(t)?t.nodeType!==w||t.data||e.removeChild(t):(Ct(t),i(t)&&!t.firstChild&&e.removeChild(t))},qe=function(e){return e.nodeType===I?"BR"===e.nodeName||"WBR"===e.nodeName:de.test(e.data)},Ke=function(e){for(var t,r=e.parentNode;i(r);)r=r.parentNode;return t=new n(r,H|W,qe),t.currentNode=e,!!t.nextNode()},Ze=function(e,t){var n,r,o,a=e.querySelectorAll("BR"),s=[],d=a.length;for(n=0;d>n;n+=1)s[n]=Ke(a[n]);for(;d--;)r=a[d],o=r.parentNode,o&&(s[d]?i(o)||y(o,t):v(r));for(var l,c=t.querySelectorAll("WBR"),f=c.length;f--;)l=c[f],v(l)},Ge=function(e){var t=e.clipboardData,n=this.getSelection(),r=this.createElement("div"),o=this._root,i=this;this.saveUndoState(n),ee||j||!t?setTimeout(function(){try{i._ensureBottomLine()}catch(e){i.didError(e)}},0):(_e(n,o),r.appendChild(ve(n,o)),t.setData("text/html",r.innerHTML),t.setData("text/plain",r.innerText||r.textContent),e.preventDefault()),this.setSelection(n)},Qe=function(e){var t=e.clipboardData,n=this.getSelection(),r=this.createElement("div");ee||j||!t||(r.appendChild(n.cloneContents()),t.setData("text/html",r.innerHTML),t.setData("text/plain",r.innerText||r.textContent),e.preventDefault())},Ve=function(e){var t,n,r,o,i,a=e.clipboardData,s=a&&a.items,d=!1,l=null,c=this;o=a&&a.types;var f=o&&le.call(o,"Files")>=0,h=o&&le.call(o,"text/html")>=0;if(!s||!f&&(ee||h)){if(!s&&!ee&&o&&(le.call(o,"text/html")>-1||!Y&&le.call(o,"text/plain")>-1&&le.call(o,"text/rtf")<0))return e.preventDefault(),void((i=a.getData("text/html"))?this.insertHTML(i,!0):((i=a.getData("text/plain"))||(i=a.getData("text/uri-list")))&&this.insertPlainText(i,!0));this._awaitingPaste=!0;var u=this._doc.body,p=this.getSelection(),g=p.startContainer,m=p.startOffset,C=p.endContainer,N=p.endOffset,S=this.createElement("DIV",{contenteditable:"true",style:"position:fixed; overflow:hidden; top:0; right:100%; width:1px; height:1px;"});u.appendChild(S),p.selectNodeContents(S),this.setSelection(p),setTimeout(function(){try{c._awaitingPaste=!1;for(var e,t,n="",r=S;S=r;)r=S.nextSibling,v(S),e=S.firstChild,e&&e===S.lastChild&&"DIV"===e.nodeName&&(S=e),n+=S.innerHTML;t=c._createRange(g,m,C,N),c.setSelection(t),n&&c.insertHTML(n,!0)}catch(o){c.didError(o)}},0)}else{for(e.preventDefault(),t=s.length;t--;){if(n=s[t],r=n.type,"text/html"===r)return void n.getAsString(function(e){c.insertHTML(e,!0)});"text/plain"===r&&(l=n),/^image\/.*/.test(r)&&(d=!0)}if(d){var _={clipboardData:e.clipboardData,isImage:!0,preventDefault:function(){this.defaultPrevented=!0},defaultPrevented:!1};this.fireEvent("willPaste",_)}else l&&n.getAsString(function(e){c.insertPlainText(e,!0)})}},je=[],$e=L.prototype;$e.setConfig=function(e){return e=k({blockTag:"DIV",blockAttributes:null,tagAttributes:{blockquote:null,ul:null,ol:null,li:null}},e),e.blockTag=e.blockTag.toUpperCase(),this._config=e,this},$e.createElement=function(e,t,n){return S(this._doc,e,t,n)},$e.createDefaultBlock=function(e){var t=this._config;return _(this.createElement(t.blockTag,t.blockAttributes,e),this._root)},$e.didError=function(e){console.log(e)},$e.getDocument=function(){return this._doc},$e.getRoot=function(){return this._root},$e.modifyDocument=function(e){this._ignoreAllChanges=!0,this._mutation&&this._mutation.disconnect(),e(),this._ignoreAllChanges=!1,this._mutation&&this._mutation.observe(this._root,{childList:!0,attributes:!0,characterData:!0,subtree:!0})};var Ye={pathChange:1,select:1,input:1,undoStateChange:1};$e.fireEvent=function(e,t){var n,r,o=this._events[e];if(o)for(t||(t={}),t.type!==e&&(t.type=e),o=o.slice(),n=o.length;n--;){r=o[n];try{r.handleEvent?r.handleEvent(t):r.call(this,t)}catch(i){i.details="Squire: fireEvent error. Event type: "+e,this.didError(i)}}return this},$e.destroy=function(){var e,t=this._root,n=this._events;for(e in n)Ye[e]||t.removeEventListener(e,this,!0);this._mutation&&this._mutation.disconnect();for(var r=je.length;r--;)je[r]===this&&je.splice(r,1)},$e.handleEvent=function(e){this.fireEvent(e.type,e)},$e.addEventListener=function(e,t){var n=this._events[e];return t?(n||(n=this._events[e]=[],Ye[e]||this._root.addEventListener(e,this,!0)),n.push(t),this):(this.didError({name:"Squire: addEventListener with null or undefined fn",message:"Event type: "+e}),this)},$e.removeEventListener=function(e,t){var n,r=this._events[e];if(r){for(n=r.length;n--;)r[n]===t&&r.splice(n,1);r.length||(delete this._events[e],Ye[e]||this._root.removeEventListener(e,this,!0))}return this};var Xe=function(e){var t=e.dataTransfer,n=(t&&t.items,t&&t.types),r=n&&le.call(n,"Files")>=0;r||(this._isInUndoState=!1,this._recordUndoState())};$e._createRange=function(e,t,n,r){if(e instanceof this._win.Range)return e.cloneRange();var o=this._doc.createRange();return o.setStart(e,t),n?o.setEnd(n,r):o.setEnd(e,t),o},$e.getCursorPosition=function(e){if(!e&&!(e=this.getSelection())||!e.getBoundingClientRect)return null;var t,n,r=e.getBoundingClientRect();return r&&!r.top&&(this._ignoreChange=!0,t=this._doc.createElement("SPAN"),t.textContent=G,ge(e,t),r=t.getBoundingClientRect(),n=t.parentNode,n.removeChild(t),b(n,{startContainer:e.startContainer,endContainer:e.endContainer,startOffset:e.startOffset,endOffset:e.endOffset})),r},$e._moveCursorTo=function(e){var t=this._root,n=this._createRange(t,e?0:t.childNodes.length);return Se(n),this.setSelection(n),this},$e.moveCursorToStart=function(){return this._moveCursorTo(!0)},$e.moveCursorToEnd=function(){return this._moveCursorTo(!1)};var Je=function(e){return e._win.getSelection()||null};$e.setSelection=function(e){if(e){this._restoreSelection=!1,this._lastSelection=e,j&&this._win.focus();var t=Je(this);t&&(t.removeAllRanges(),t.addRange(e))}return this},$e.getSelection=function(){var e,t,n,r=Je(this),i=this._root;return r&&r.rangeCount&&(e=r.getRangeAt(0).cloneRange(),t=e.startContainer,n=e.endContainer,t&&o(t)&&e.setStartBefore(t),n&&o(n)&&e.setEndBefore(n)),e&&p(i,e.commonAncestorContainer)?this._lastSelection=e:e=this._lastSelection,e||(e=this._createRange(i.firstChild,0)),e},$e.getSelectedText=function(){var e,t=this.getSelection(),r=new n(t.commonAncestorContainer,W|H,function(e){return Ne(t,e,!0)}),o=t.startContainer,a=t.endContainer,s=r.currentNode=o,d="",l=!1;for(r.filter(s)||(s=r.nextNode());s;)s.nodeType===w?(e=s.data,e&&/\S/.test(e)&&(s===a&&(e=e.slice(0,t.endOffset)),s===o&&(e=e.slice(t.startOffset)),d+=e,l=!0)):("BR"===s.nodeName||l&&!i(s))&&(d+="\n",l=!1),s=r.nextNode();return d},$e.getPath=function(){return this._path};var et=function(e){for(var t,r,o,a=new n(e,W,function(){return!0},!1);r=a.nextNode();)for(;(o=r.data.indexOf(G))>-1;){if(1===r.length){do t=r.parentNode,t.removeChild(r),r=t,a.currentNode=t;while(i(r)&&!m(r));break}r.deleteData(o,1)}};$e._didAddZWS=function(){this._hasZWS=!0},$e._removeZWS=function(){this._hasZWS&&(et(this._root),this._hasZWS=!1)},$e._updatePath=function(e,t){var n,r=e.startContainer,o=e.endContainer;(t||r!==this._lastAnchorNode||o!==this._lastFocusNode)&&(this._lastAnchorNode=r,this._lastFocusNode=o,n=r&&o?r===o?g(o,this._root):"(selection)":"",this._path!==n&&(this._path=n,this.fireEvent("pathChange",{path:n}))),e.collapsed||this.fireEvent("select")},$e._updatePathOnEvent=function(){this._updatePath(this.getSelection())},$e.focus=function(){return this._root.focus(),this},$e.blur=function(){return this._root.blur(),this};var tt="squire-selection-start",nt="squire-selection-end";$e._saveRangeToBookmark=function(e){var t,n=this.createElement("INPUT",{id:tt,type:"hidden"}),r=this.createElement("INPUT",{id:nt,type:"hidden"});ge(e,n),e.collapse(!1),ge(e,r),n.compareDocumentPosition(r)&P&&(n.id=nt,r.id=tt,t=n,n=r,r=t),e.setStartAfter(n),e.setEndBefore(r)},$e._getRangeAndRemoveBookmark=function(e){var t=this._root,n=t.querySelector("#"+tt),r=t.querySelector("#"+nt);if(n&&r){var o,i=n.parentNode,a=r.parentNode,s={startContainer:i,endContainer:a,startOffset:le.call(i.childNodes,n),endOffset:le.call(a.childNodes,r)};i===a&&(s.endOffset-=1),v(n),v(r),b(i,s),i!==a&&b(a,s),e||(e=this._doc.createRange()),e.setStart(s.startContainer,s.startOffset),e.setEnd(s.endContainer,s.endOffset),o=e.collapsed,o&&(i=e.startContainer,i.nodeType===w&&(a=i.childNodes[e.startOffset],a&&a.nodeType===w||(a=i.childNodes[e.startOffset-1]),a&&a.nodeType===w&&(e.setStart(a,0),e.collapse(!0))))}return e||null},$e._keyUpDetectChange=function(e){var t=e.keyCode;e.ctrlKey||e.metaKey||e.altKey||!(16>t||t>20)||!(33>t||t>45)||this._docWasChanged()},$e._docWasChanged=function(){if(!this._ignoreAllChanges){if(se&&this._ignoreChange)return void(this._ignoreChange=!1);this._isInUndoState&&(this._isInUndoState=!1,this.fireEvent("undoStateChange",{canUndo:!0,canRedo:!1})),this.fireEvent("input")}},$e._recordUndoState=function(e){if(!this._isInUndoState){var t=this._undoIndex+=1,n=this._undoStack;t<this._undoStackLength&&(n.length=this._undoStackLength=t),e&&this._saveRangeToBookmark(e),n[t]=this._getHTML(),this._undoStackLength+=1,this._isInUndoState=!0}},$e.saveUndoState=function(e){return e===t&&(e=this.getSelection()),this._isInUndoState||(this._recordUndoState(e),this._getRangeAndRemoveBookmark(e)),this},$e.undo=function(){if(0!==this._undoIndex||!this._isInUndoState){this._recordUndoState(this.getSelection()),this._undoIndex-=1,this._setHTML(this._undoStack[this._undoIndex]);var e=this._getRangeAndRemoveBookmark();e&&this.setSelection(e),this._isInUndoState=!0,this.fireEvent("undoStateChange",{canUndo:0!==this._undoIndex,canRedo:!0}),this.fireEvent("input")}return this},$e.redo=function(){var e=this._undoIndex,t=this._undoStackLength;if(t>e+1&&this._isInUndoState){this._undoIndex+=1,this._setHTML(this._undoStack[this._undoIndex]);var n=this._getRangeAndRemoveBookmark();n&&this.setSelection(n),this.fireEvent("undoStateChange",{canUndo:!0,canRedo:t>e+2}),this.fireEvent("input")}return this},$e.hasFormat=function(e,t,r){if(e=e.toUpperCase(),t||(t={}),!r&&!(r=this.getSelection()))return!1;!r.collapsed&&r.startContainer.nodeType===w&&r.startOffset===r.startContainer.length&&r.startContainer.nextSibling&&r.setStartBefore(r.startContainer.nextSibling),!r.collapsed&&r.endContainer.nodeType===w&&0===r.endOffset&&r.endContainer.previousSibling&&r.setEndAfter(r.endContainer.previousSibling);var o,i,a=this._root,s=r.commonAncestorContainer;if(u(s,a,e,t))return!0;if(s.nodeType===w)return!1;o=new n(s,W,function(e){return Ne(r,e,!0)},!1);for(var d=!1;i=o.nextNode();){if(!u(i,a,e,t))return!1;d=!0}return d},$e.getFontInfo=function(e){var n,r,o,i={color:t,backgroundColor:t,family:t,size:t},a=0;if(!e&&!(e=this.getSelection()))return i;if(n=e.commonAncestorContainer,e.collapsed||n.nodeType===w)for(n.nodeType===w&&(n=n.parentNode);4>a&&n;)(r=n.style)&&(!i.color&&(o=r.color)&&(i.color=o,a+=1),!i.backgroundColor&&(o=r.backgroundColor)&&(i.backgroundColor=o,a+=1),!i.family&&(o=r.fontFamily)&&(i.family=o,a+=1),!i.size&&(o=r.fontSize)&&(i.size=o,a+=1)),n=n.parentNode;return i},$e._addFormat=function(e,t,r){var o,i,a,s,d,l,c,f,h=this._root;if(r.collapsed)o=_(this.createElement(e,t),h),ge(r,o),r.setStart(o.firstChild,o.firstChild.length),r.collapse(!0);else{if(i=new n(r.commonAncestorContainer,W|H,function(e){return(e.nodeType===w||"BR"===e.nodeName||"IMG"===e.nodeName)&&Ne(r,e,!0);