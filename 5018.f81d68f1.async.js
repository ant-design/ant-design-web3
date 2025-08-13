(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[5018],{24654:function(D){"use strict";D.exports=function(p){for(var o=[],r=p.length,u=0;u<r;u++){var d=p.charCodeAt(u);if(d>=55296&&d<=56319&&r>u+1){var h=p.charCodeAt(u+1);h>=56320&&h<=57343&&(d=(d-55296)*1024+h-56320+65536,u+=1)}if(d<128){o.push(d);continue}if(d<2048){o.push(d>>6|192),o.push(d&63|128);continue}if(d<55296||d>=57344&&d<65536){o.push(d>>12|224),o.push(d>>6&63|128),o.push(d&63|128);continue}if(d>=65536&&d<=1114111){o.push(d>>18|240),o.push(d>>12&63|128),o.push(d>>6&63|128),o.push(d&63|128);continue}o.push(239,191,189)}return new Uint8Array(o).buffer}},68119:function(D,f,p){const o=p(84363),r=p(47638),u=p(59141),d=p(68857);function h(g,w,m,b,C){const L=[].slice.call(arguments,1),v=L.length,W=typeof L[v-1]=="function";if(!W&&!o())throw new Error("Callback required as last argument");if(W){if(v<2)throw new Error("Too few arguments provided");v===2?(C=m,m=w,w=b=void 0):v===3&&(w.getContext&&typeof C>"u"?(C=b,b=void 0):(C=b,b=m,m=w,w=void 0))}else{if(v<1)throw new Error("Too few arguments provided");return v===1?(m=w,w=b=void 0):v===2&&!w.getContext&&(b=m,m=w,w=void 0),new Promise(function(j,k){try{const S=r.create(m,b);j(g(S,w,b))}catch(S){k(S)}})}try{const j=r.create(m,b);C(null,g(j,w,b))}catch(j){C(j)}}f.create=r.create,f.toCanvas=h.bind(null,u.render),f.toDataURL=h.bind(null,u.renderToDataURL),f.toString=h.bind(null,function(g,w,m){return d.render(g,m)})},84363:function(D){D.exports=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}},427:function(D,f,p){const o=p(26574).getSymbolSize;f.getRowColCoords=function(u){if(u===1)return[];const d=Math.floor(u/7)+2,h=o(u),g=h===145?26:Math.ceil((h-13)/(2*d-2))*2,w=[h-7];for(let m=1;m<d-1;m++)w[m]=w[m-1]-g;return w.push(6),w.reverse()},f.getPositions=function(u){const d=[],h=f.getRowColCoords(u),g=h.length;for(let w=0;w<g;w++)for(let m=0;m<g;m++)w===0&&m===0||w===0&&m===g-1||w===g-1&&m===0||d.push([h[w],h[m]]);return d}},12215:function(D,f,p){const o=p(45965),r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function u(d){this.mode=o.ALPHANUMERIC,this.data=d}u.getBitsLength=function(h){return 11*Math.floor(h/2)+6*(h%2)},u.prototype.getLength=function(){return this.data.length},u.prototype.getBitsLength=function(){return u.getBitsLength(this.data.length)},u.prototype.write=function(h){let g;for(g=0;g+2<=this.data.length;g+=2){let w=r.indexOf(this.data[g])*45;w+=r.indexOf(this.data[g+1]),h.put(w,11)}this.data.length%2&&h.put(r.indexOf(this.data[g]),6)},D.exports=u},65520:function(D){function f(){this.buffer=[],this.length=0}f.prototype={get:function(p){const o=Math.floor(p/8);return(this.buffer[o]>>>7-p%8&1)===1},put:function(p,o){for(let r=0;r<o;r++)this.putBit((p>>>o-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(p){const o=Math.floor(this.length/8);this.buffer.length<=o&&this.buffer.push(0),p&&(this.buffer[o]|=128>>>this.length%8),this.length++}},D.exports=f},98844:function(D){function f(p){if(!p||p<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=p,this.data=new Uint8Array(p*p),this.reservedBit=new Uint8Array(p*p)}f.prototype.set=function(p,o,r,u){const d=p*this.size+o;this.data[d]=r,u&&(this.reservedBit[d]=!0)},f.prototype.get=function(p,o){return this.data[p*this.size+o]},f.prototype.xor=function(p,o,r){this.data[p*this.size+o]^=r},f.prototype.isReserved=function(p,o){return this.reservedBit[p*this.size+o]},D.exports=f},53145:function(D,f,p){const o=p(24654),r=p(45965);function u(d){this.mode=r.BYTE,typeof d=="string"&&(d=o(d)),this.data=new Uint8Array(d)}u.getBitsLength=function(h){return h*8},u.prototype.getLength=function(){return this.data.length},u.prototype.getBitsLength=function(){return u.getBitsLength(this.data.length)},u.prototype.write=function(d){for(let h=0,g=this.data.length;h<g;h++)d.put(this.data[h],8)},D.exports=u},29944:function(D,f,p){const o=p(10873),r=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],u=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];f.getBlocksCount=function(h,g){switch(g){case o.L:return r[(h-1)*4+0];case o.M:return r[(h-1)*4+1];case o.Q:return r[(h-1)*4+2];case o.H:return r[(h-1)*4+3];default:return}},f.getTotalCodewordsCount=function(h,g){switch(g){case o.L:return u[(h-1)*4+0];case o.M:return u[(h-1)*4+1];case o.Q:return u[(h-1)*4+2];case o.H:return u[(h-1)*4+3];default:return}}},10873:function(D,f){f.L={bit:1},f.M={bit:0},f.Q={bit:3},f.H={bit:2};function p(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return f.L;case"m":case"medium":return f.M;case"q":case"quartile":return f.Q;case"h":case"high":return f.H;default:throw new Error("Unknown EC Level: "+o)}}f.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},f.from=function(r,u){if(f.isValid(r))return r;try{return p(r)}catch{return u}}},70577:function(D,f,p){const o=p(26574).getSymbolSize,r=7;f.getPositions=function(d){const h=o(d);return[[0,0],[h-r,0],[0,h-r]]}},56065:function(D,f,p){const o=p(26574),r=1335,u=21522,d=o.getBCHDigit(r);f.getEncodedBits=function(g,w){const m=g.bit<<3|w;let b=m<<10;for(;o.getBCHDigit(b)-d>=0;)b^=r<<o.getBCHDigit(b)-d;return(m<<10|b)^u}},67670:function(D,f){const p=new Uint8Array(512),o=new Uint8Array(256);(function(){let u=1;for(let d=0;d<255;d++)p[d]=u,o[u]=d,u<<=1,u&256&&(u^=285);for(let d=255;d<512;d++)p[d]=p[d-255]})(),f.log=function(u){if(u<1)throw new Error("log("+u+")");return o[u]},f.exp=function(u){return p[u]},f.mul=function(u,d){return u===0||d===0?0:p[o[u]+o[d]]}},39198:function(D,f,p){const o=p(45965),r=p(26574);function u(d){this.mode=o.KANJI,this.data=d}u.getBitsLength=function(h){return h*13},u.prototype.getLength=function(){return this.data.length},u.prototype.getBitsLength=function(){return u.getBitsLength(this.data.length)},u.prototype.write=function(d){let h;for(h=0;h<this.data.length;h++){let g=r.toSJIS(this.data[h]);if(g>=33088&&g<=40956)g-=33088;else if(g>=57408&&g<=60351)g-=49472;else throw new Error("Invalid SJIS character: "+this.data[h]+`
Make sure your charset is UTF-8`);g=(g>>>8&255)*192+(g&255),d.put(g,13)}},D.exports=u},84662:function(D,f){f.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const p={N1:3,N2:3,N3:40,N4:10};f.isValid=function(u){return u!=null&&u!==""&&!isNaN(u)&&u>=0&&u<=7},f.from=function(u){return f.isValid(u)?parseInt(u,10):void 0},f.getPenaltyN1=function(u){const d=u.size;let h=0,g=0,w=0,m=null,b=null;for(let C=0;C<d;C++){g=w=0,m=b=null;for(let L=0;L<d;L++){let v=u.get(C,L);v===m?g++:(g>=5&&(h+=p.N1+(g-5)),m=v,g=1),v=u.get(L,C),v===b?w++:(w>=5&&(h+=p.N1+(w-5)),b=v,w=1)}g>=5&&(h+=p.N1+(g-5)),w>=5&&(h+=p.N1+(w-5))}return h},f.getPenaltyN2=function(u){const d=u.size;let h=0;for(let g=0;g<d-1;g++)for(let w=0;w<d-1;w++){const m=u.get(g,w)+u.get(g,w+1)+u.get(g+1,w)+u.get(g+1,w+1);(m===4||m===0)&&h++}return h*p.N2},f.getPenaltyN3=function(u){const d=u.size;let h=0,g=0,w=0;for(let m=0;m<d;m++){g=w=0;for(let b=0;b<d;b++)g=g<<1&2047|u.get(m,b),b>=10&&(g===1488||g===93)&&h++,w=w<<1&2047|u.get(b,m),b>=10&&(w===1488||w===93)&&h++}return h*p.N3},f.getPenaltyN4=function(u){let d=0;const h=u.data.length;for(let w=0;w<h;w++)d+=u.data[w];return Math.abs(Math.ceil(d*100/h/5)-10)*p.N4};function o(r,u,d){switch(r){case f.Patterns.PATTERN000:return(u+d)%2===0;case f.Patterns.PATTERN001:return u%2===0;case f.Patterns.PATTERN010:return d%3===0;case f.Patterns.PATTERN011:return(u+d)%3===0;case f.Patterns.PATTERN100:return(Math.floor(u/2)+Math.floor(d/3))%2===0;case f.Patterns.PATTERN101:return u*d%2+u*d%3===0;case f.Patterns.PATTERN110:return(u*d%2+u*d%3)%2===0;case f.Patterns.PATTERN111:return(u*d%3+(u+d)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}f.applyMask=function(u,d){const h=d.size;for(let g=0;g<h;g++)for(let w=0;w<h;w++)d.isReserved(w,g)||d.xor(w,g,o(u,w,g))},f.getBestMask=function(u,d){const h=Object.keys(f.Patterns).length;let g=0,w=1/0;for(let m=0;m<h;m++){d(m),f.applyMask(m,u);const b=f.getPenaltyN1(u)+f.getPenaltyN2(u)+f.getPenaltyN3(u)+f.getPenaltyN4(u);f.applyMask(m,u),b<w&&(w=b,g=m)}return g}},45965:function(D,f,p){const o=p(31499),r=p(12795);f.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},f.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},f.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},f.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},f.MIXED={bit:-1},f.getCharCountIndicator=function(h,g){if(!h.ccBits)throw new Error("Invalid mode: "+h);if(!o.isValid(g))throw new Error("Invalid version: "+g);return g>=1&&g<10?h.ccBits[0]:g<27?h.ccBits[1]:h.ccBits[2]},f.getBestModeForData=function(h){return r.testNumeric(h)?f.NUMERIC:r.testAlphanumeric(h)?f.ALPHANUMERIC:r.testKanji(h)?f.KANJI:f.BYTE},f.toString=function(h){if(h&&h.id)return h.id;throw new Error("Invalid mode")},f.isValid=function(h){return h&&h.bit&&h.ccBits};function u(d){if(typeof d!="string")throw new Error("Param is not a string");switch(d.toLowerCase()){case"numeric":return f.NUMERIC;case"alphanumeric":return f.ALPHANUMERIC;case"kanji":return f.KANJI;case"byte":return f.BYTE;default:throw new Error("Unknown mode: "+d)}}f.from=function(h,g){if(f.isValid(h))return h;try{return u(h)}catch{return g}}},47958:function(D,f,p){const o=p(45965);function r(u){this.mode=o.NUMERIC,this.data=u.toString()}r.getBitsLength=function(d){return 10*Math.floor(d/3)+(d%3?d%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(d){let h,g,w;for(h=0;h+3<=this.data.length;h+=3)g=this.data.substr(h,3),w=parseInt(g,10),d.put(w,10);const m=this.data.length-h;m>0&&(g=this.data.substr(h),w=parseInt(g,10),d.put(w,m*3+1))},D.exports=r},39094:function(D,f,p){const o=p(67670);f.mul=function(u,d){const h=new Uint8Array(u.length+d.length-1);for(let g=0;g<u.length;g++)for(let w=0;w<d.length;w++)h[g+w]^=o.mul(u[g],d[w]);return h},f.mod=function(u,d){let h=new Uint8Array(u);for(;h.length-d.length>=0;){const g=h[0];for(let m=0;m<d.length;m++)h[m]^=o.mul(d[m],g);let w=0;for(;w<h.length&&h[w]===0;)w++;h=h.slice(w)}return h},f.generateECPolynomial=function(u){let d=new Uint8Array([1]);for(let h=0;h<u;h++)d=f.mul(d,new Uint8Array([1,o.exp(h)]));return d}},47638:function(D,f,p){const o=p(26574),r=p(10873),u=p(65520),d=p(98844),h=p(427),g=p(70577),w=p(84662),m=p(29944),b=p(26460),C=p(39941),L=p(56065),v=p(45965),W=p(99660);function j(E,O){const I=E.size,x=g.getPositions(O);for(let _=0;_<x.length;_++){const T=x[_][0],y=x[_][1];for(let $=-1;$<=7;$++)if(!(T+$<=-1||I<=T+$))for(let B=-1;B<=7;B++)y+B<=-1||I<=y+B||($>=0&&$<=6&&(B===0||B===6)||B>=0&&B<=6&&($===0||$===6)||$>=2&&$<=4&&B>=2&&B<=4?E.set(T+$,y+B,!0,!0):E.set(T+$,y+B,!1,!0))}}function k(E){const O=E.size;for(let I=8;I<O-8;I++){const x=I%2===0;E.set(I,6,x,!0),E.set(6,I,x,!0)}}function S(E,O){const I=h.getPositions(O);for(let x=0;x<I.length;x++){const _=I[x][0],T=I[x][1];for(let y=-2;y<=2;y++)for(let $=-2;$<=2;$++)y===-2||y===2||$===-2||$===2||y===0&&$===0?E.set(_+y,T+$,!0,!0):E.set(_+y,T+$,!1,!0)}}function R(E,O){const I=E.size,x=C.getEncodedBits(O);let _,T,y;for(let $=0;$<18;$++)_=Math.floor($/3),T=$%3+I-8-3,y=(x>>$&1)===1,E.set(_,T,y,!0),E.set(T,_,y,!0)}function M(E,O,I){const x=E.size,_=L.getEncodedBits(O,I);let T,y;for(T=0;T<15;T++)y=(_>>T&1)===1,T<6?E.set(T,8,y,!0):T<8?E.set(T+1,8,y,!0):E.set(x-15+T,8,y,!0),T<8?E.set(8,x-T-1,y,!0):T<9?E.set(8,15-T-1+1,y,!0):E.set(8,15-T-1,y,!0);E.set(x-8,8,1,!0)}function P(E,O){const I=E.size;let x=-1,_=I-1,T=7,y=0;for(let $=I-1;$>0;$-=2)for($===6&&$--;;){for(let B=0;B<2;B++)if(!E.isReserved(_,$-B)){let Z=!1;y<O.length&&(Z=(O[y]>>>T&1)===1),E.set(_,$-B,Z),T--,T===-1&&(y++,T=7)}if(_+=x,_<0||I<=_){_-=x,x=-x;break}}}function A(E,O,I){const x=new u;I.forEach(function(B){x.put(B.mode.bit,4),x.put(B.getLength(),v.getCharCountIndicator(B.mode,E)),B.write(x)});const _=o.getSymbolTotalCodewords(E),T=m.getTotalCodewordsCount(E,O),y=(_-T)*8;for(x.getLengthInBits()+4<=y&&x.put(0,4);x.getLengthInBits()%8!==0;)x.putBit(0);const $=(y-x.getLengthInBits())/8;for(let B=0;B<$;B++)x.put(B%2?17:236,8);return V(x,E,O)}function V(E,O,I){const x=o.getSymbolTotalCodewords(O),_=m.getTotalCodewordsCount(O,I),T=x-_,y=m.getBlocksCount(O,I),$=x%y,B=y-$,Z=Math.floor(x/y),K=Math.floor(T/y),St=K+1,Pt=Z-K,jt=new b(Pt);let N=0;const bt=new Array(y),Ct=new Array(y);let Vt=0;const Ft=new Uint8Array(E.buffer);for(let lt=0;lt<y;lt++){const It=lt<B?K:St;bt[lt]=Ft.slice(N,N+It),Ct[lt]=jt.encode(bt[lt]),N+=It,Vt=Math.max(Vt,It)}const xt=new Uint8Array(x);let _t=0,et,it;for(et=0;et<Vt;et++)for(it=0;it<y;it++)et<bt[it].length&&(xt[_t++]=bt[it][et]);for(et=0;et<Pt;et++)for(it=0;it<y;it++)xt[_t++]=Ct[it][et];return xt}function H(E,O,I,x){let _;if(Array.isArray(E))_=W.fromArray(E);else if(typeof E=="string"){let Z=O;if(!Z){const K=W.rawSplit(E);Z=C.getBestVersionForData(K,I)}_=W.fromString(E,Z||40)}else throw new Error("Invalid data");const T=C.getBestVersionForData(_,I);if(!T)throw new Error("The amount of data is too big to be stored in a QR Code");if(!O)O=T;else if(O<T)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+T+`.
`);const y=A(O,I,_),$=o.getSymbolSize(O),B=new d($);return j(B,O),k(B),S(B,O),M(B,I,0),O>=7&&R(B,O),P(B,y),isNaN(x)&&(x=w.getBestMask(B,M.bind(null,B,I))),w.applyMask(x,B),M(B,I,x),{modules:B,version:O,errorCorrectionLevel:I,maskPattern:x,segments:_}}f.create=function(O,I){if(typeof O>"u"||O==="")throw new Error("No input text");let x=r.M,_,T;return typeof I<"u"&&(x=r.from(I.errorCorrectionLevel,r.M),_=C.from(I.version),T=w.from(I.maskPattern),I.toSJISFunc&&o.setToSJISFunction(I.toSJISFunc)),H(O,_,x,T)}},26460:function(D,f,p){const o=p(39094);function r(u){this.genPoly=void 0,this.degree=u,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(d){this.degree=d,this.genPoly=o.generateECPolynomial(this.degree)},r.prototype.encode=function(d){if(!this.genPoly)throw new Error("Encoder not initialized");const h=new Uint8Array(d.length+this.degree);h.set(d);const g=o.mod(h,this.genPoly),w=this.degree-g.length;if(w>0){const m=new Uint8Array(this.degree);return m.set(g,w),m}return g},D.exports=r},12795:function(D,f){const p="[0-9]+",o="[A-Z $%*+\\-./:]+";let r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";r=r.replace(/u/g,"\\u");const u="(?:(?![A-Z0-9 $%*+\\-./:]|"+r+`)(?:.|[\r
]))+`;f.KANJI=new RegExp(r,"g"),f.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),f.BYTE=new RegExp(u,"g"),f.NUMERIC=new RegExp(p,"g"),f.ALPHANUMERIC=new RegExp(o,"g");const d=new RegExp("^"+r+"$"),h=new RegExp("^"+p+"$"),g=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");f.testKanji=function(m){return d.test(m)},f.testNumeric=function(m){return h.test(m)},f.testAlphanumeric=function(m){return g.test(m)}},99660:function(D,f,p){const o=p(45965),r=p(47958),u=p(12215),d=p(53145),h=p(39198),g=p(12795),w=p(26574),m=p(35376);function b(R){return unescape(encodeURIComponent(R)).length}function C(R,M,P){const A=[];let V;for(;(V=R.exec(P))!==null;)A.push({data:V[0],index:V.index,mode:M,length:V[0].length});return A}function L(R){const M=C(g.NUMERIC,o.NUMERIC,R),P=C(g.ALPHANUMERIC,o.ALPHANUMERIC,R);let A,V;return w.isKanjiModeEnabled()?(A=C(g.BYTE,o.BYTE,R),V=C(g.KANJI,o.KANJI,R)):(A=C(g.BYTE_KANJI,o.BYTE,R),V=[]),M.concat(P,A,V).sort(function(E,O){return E.index-O.index}).map(function(E){return{data:E.data,mode:E.mode,length:E.length}})}function v(R,M){switch(M){case o.NUMERIC:return r.getBitsLength(R);case o.ALPHANUMERIC:return u.getBitsLength(R);case o.KANJI:return h.getBitsLength(R);case o.BYTE:return d.getBitsLength(R)}}function W(R){return R.reduce(function(M,P){const A=M.length-1>=0?M[M.length-1]:null;return A&&A.mode===P.mode?(M[M.length-1].data+=P.data,M):(M.push(P),M)},[])}function j(R){const M=[];for(let P=0;P<R.length;P++){const A=R[P];switch(A.mode){case o.NUMERIC:M.push([A,{data:A.data,mode:o.ALPHANUMERIC,length:A.length},{data:A.data,mode:o.BYTE,length:A.length}]);break;case o.ALPHANUMERIC:M.push([A,{data:A.data,mode:o.BYTE,length:A.length}]);break;case o.KANJI:M.push([A,{data:A.data,mode:o.BYTE,length:b(A.data)}]);break;case o.BYTE:M.push([{data:A.data,mode:o.BYTE,length:b(A.data)}])}}return M}function k(R,M){const P={},A={start:{}};let V=["start"];for(let H=0;H<R.length;H++){const E=R[H],O=[];for(let I=0;I<E.length;I++){const x=E[I],_=""+H+I;O.push(_),P[_]={node:x,lastCount:0},A[_]={};for(let T=0;T<V.length;T++){const y=V[T];P[y]&&P[y].node.mode===x.mode?(A[y][_]=v(P[y].lastCount+x.length,x.mode)-v(P[y].lastCount,x.mode),P[y].lastCount+=x.length):(P[y]&&(P[y].lastCount=x.length),A[y][_]=v(x.length,x.mode)+4+o.getCharCountIndicator(x.mode,M))}}V=O}for(let H=0;H<V.length;H++)A[V[H]].end=0;return{map:A,table:P}}function S(R,M){let P;const A=o.getBestModeForData(R);if(P=o.from(M,A),P!==o.BYTE&&P.bit<A.bit)throw new Error('"'+R+'" cannot be encoded with mode '+o.toString(P)+`.
 Suggested mode is: `+o.toString(A));switch(P===o.KANJI&&!w.isKanjiModeEnabled()&&(P=o.BYTE),P){case o.NUMERIC:return new r(R);case o.ALPHANUMERIC:return new u(R);case o.KANJI:return new h(R);case o.BYTE:return new d(R)}}f.fromArray=function(M){return M.reduce(function(P,A){return typeof A=="string"?P.push(S(A,null)):A.data&&P.push(S(A.data,A.mode)),P},[])},f.fromString=function(M,P){const A=L(M,w.isKanjiModeEnabled()),V=j(A),H=k(V,P),E=m.find_path(H.map,"start","end"),O=[];for(let I=1;I<E.length-1;I++)O.push(H.table[E[I]].node);return f.fromArray(W(O))},f.rawSplit=function(M){return f.fromArray(L(M,w.isKanjiModeEnabled()))}},26574:function(D,f){let p;const o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];f.getSymbolSize=function(u){if(!u)throw new Error('"version" cannot be null or undefined');if(u<1||u>40)throw new Error('"version" should be in range from 1 to 40');return u*4+17},f.getSymbolTotalCodewords=function(u){return o[u]},f.getBCHDigit=function(r){let u=0;for(;r!==0;)u++,r>>>=1;return u},f.setToSJISFunction=function(u){if(typeof u!="function")throw new Error('"toSJISFunc" is not a valid function.');p=u},f.isKanjiModeEnabled=function(){return typeof p<"u"},f.toSJIS=function(u){return p(u)}},31499:function(D,f){f.isValid=function(o){return!isNaN(o)&&o>=1&&o<=40}},39941:function(D,f,p){const o=p(26574),r=p(29944),u=p(10873),d=p(45965),h=p(31499),g=7973,w=o.getBCHDigit(g);function m(v,W,j){for(let k=1;k<=40;k++)if(W<=f.getCapacity(k,j,v))return k}function b(v,W){return d.getCharCountIndicator(v,W)+4}function C(v,W){let j=0;return v.forEach(function(k){const S=b(k.mode,W);j+=S+k.getBitsLength()}),j}function L(v,W){for(let j=1;j<=40;j++)if(C(v,j)<=f.getCapacity(j,W,d.MIXED))return j}f.from=function(W,j){return h.isValid(W)?parseInt(W,10):j},f.getCapacity=function(W,j,k){if(!h.isValid(W))throw new Error("Invalid QR Code version");typeof k>"u"&&(k=d.BYTE);const S=o.getSymbolTotalCodewords(W),R=r.getTotalCodewordsCount(W,j),M=(S-R)*8;if(k===d.MIXED)return M;const P=M-b(k,W);switch(k){case d.NUMERIC:return Math.floor(P/10*3);case d.ALPHANUMERIC:return Math.floor(P/11*2);case d.KANJI:return Math.floor(P/13);case d.BYTE:default:return Math.floor(P/8)}},f.getBestVersionForData=function(W,j){let k;const S=u.from(j,u.M);if(Array.isArray(W)){if(W.length>1)return L(W,S);if(W.length===0)return 1;k=W[0]}else k=W;return m(k.mode,k.getLength(),S)},f.getEncodedBits=function(W){if(!h.isValid(W)||W<7)throw new Error("Invalid QR Code version");let j=W<<12;for(;o.getBCHDigit(j)-w>=0;)j^=g<<o.getBCHDigit(j)-w;return W<<12|j}},59141:function(D,f,p){const o=p(2369);function r(d,h,g){d.clearRect(0,0,h.width,h.height),h.style||(h.style={}),h.height=g,h.width=g,h.style.height=g+"px",h.style.width=g+"px"}function u(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}f.render=function(h,g,w){let m=w,b=g;typeof m>"u"&&(!g||!g.getContext)&&(m=g,g=void 0),g||(b=u()),m=o.getOptions(m);const C=o.getImageWidth(h.modules.size,m),L=b.getContext("2d"),v=L.createImageData(C,C);return o.qrToImageData(v.data,h,m),r(L,b,C),L.putImageData(v,0,0),b},f.renderToDataURL=function(h,g,w){let m=w;typeof m>"u"&&(!g||!g.getContext)&&(m=g,g=void 0),m||(m={});const b=f.render(h,g,m),C=m.type||"image/png",L=m.rendererOpts||{};return b.toDataURL(C,L.quality)}},68857:function(D,f,p){const o=p(2369);function r(h,g){const w=h.a/255,m=g+'="'+h.hex+'"';return w<1?m+" "+g+'-opacity="'+w.toFixed(2).slice(1)+'"':m}function u(h,g,w){let m=h+g;return typeof w<"u"&&(m+=" "+w),m}function d(h,g,w){let m="",b=0,C=!1,L=0;for(let v=0;v<h.length;v++){const W=Math.floor(v%g),j=Math.floor(v/g);!W&&!C&&(C=!0),h[v]?(L++,v>0&&W>0&&h[v-1]||(m+=C?u("M",W+w,.5+j+w):u("m",b,0),b=0,C=!1),W+1<g&&h[v+1]||(m+=u("h",L),L=0)):b++}return m}f.render=function(g,w,m){const b=o.getOptions(w),C=g.modules.size,L=g.modules.data,v=C+b.margin*2,W=b.color.light.a?"<path "+r(b.color.light,"fill")+' d="M0 0h'+v+"v"+v+'H0z"/>':"",j="<path "+r(b.color.dark,"stroke")+' d="'+d(L,C,b.margin)+'"/>',k='viewBox="0 0 '+v+" "+v+'"',R='<svg xmlns="http://www.w3.org/2000/svg" '+(b.width?'width="'+b.width+'" height="'+b.width+'" ':"")+k+' shape-rendering="crispEdges">'+W+j+`</svg>
`;return typeof m=="function"&&m(null,R),R}},2369:function(D,f){function p(o){if(typeof o=="number"&&(o=o.toString()),typeof o!="string")throw new Error("Color should be defined as hex string");let r=o.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+o);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(d){return[d,d]}))),r.length===6&&r.push("F","F");const u=parseInt(r.join(""),16);return{r:u>>24&255,g:u>>16&255,b:u>>8&255,a:u&255,hex:"#"+r.slice(0,6).join("")}}f.getOptions=function(r){r||(r={}),r.color||(r.color={});const u=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,d=r.width&&r.width>=21?r.width:void 0,h=r.scale||4;return{width:d,scale:d?4:h,margin:u,color:{dark:p(r.color.dark||"#000000ff"),light:p(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},f.getScale=function(r,u){return u.width&&u.width>=r+u.margin*2?u.width/(r+u.margin*2):u.scale},f.getImageWidth=function(r,u){const d=f.getScale(r,u);return Math.floor((r+u.margin*2)*d)},f.qrToImageData=function(r,u,d){const h=u.modules.size,g=u.modules.data,w=f.getScale(h,d),m=Math.floor((h+d.margin*2)*w),b=d.margin*w,C=[d.color.light,d.color.dark];for(let L=0;L<m;L++)for(let v=0;v<m;v++){let W=(L*m+v)*4,j=d.color.light;if(L>=b&&v>=b&&L<m-b&&v<m-b){const k=Math.floor((L-b)/w),S=Math.floor((v-b)/w);j=C[g[k*h+S]?1:0]}r[W++]=j.r,r[W++]=j.g,r[W++]=j.b,r[W]=j.a}}},45018:function(D,f,p){"use strict";p.r(f),p.d(f,{W3mAllWalletsView:function(){return Qt},W3mConnectingWcBasicView:function(){return de},W3mDownloadsView:function(){return Be}});var o=p(19045),r=p(52510),u=p(88005),d=p(56315),h=p(20575),g=p(11568),w=p(15747),m=p(25250),b=p(24105),C=p(75282),L=p(24682),v=p(26639),W=p(3722),j=p(36106),k=p(58147),S=p(61010),R=p(12826),M=p(95980),P=p(36215),A=(0,o.iv)`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`,V=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let H=class extends o.oi{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),(0,o.dy)`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?(0,o.dy)`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?(0,o.dy)`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:(0,o.dy)`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};H.styles=[S.ZM,S.ET,A],V([(0,r.Cb)()],H.prototype,"size",void 0),V([(0,r.Cb)()],H.prototype,"name",void 0),V([(0,r.Cb)()],H.prototype,"imageSrc",void 0),V([(0,r.Cb)()],H.prototype,"walletIcon",void 0),V([(0,r.Cb)({type:Boolean})],H.prototype,"installed",void 0),V([(0,r.Cb)()],H.prototype,"badgeSize",void 0),H=V([(0,R.M)("wui-wallet-image")],H);var E=(0,o.iv)`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,O=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};const I=4;let x=class extends o.oi{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<I;return(0,o.dy)`${this.walletImages.slice(0,I).map(({src:n,walletName:i})=>(0,o.dy)`
            <wui-wallet-image
              size="inherit"
              imageSrc=${n}
              name=${(0,b.o)(i)}
            ></wui-wallet-image>
          `)}
      ${t?[...Array(I-this.walletImages.length)].map(()=>(0,o.dy)` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};x.styles=[S.ET,E],O([(0,r.Cb)({type:Array})],x.prototype,"walletImages",void 0),x=O([(0,R.M)("wui-all-wallets-image")],x);var _=p(38537),T=(0,o.iv)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`,y=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let $=class extends o.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return(0,o.dy)`
      <button ?disabled=${this.disabled} tabindex=${(0,b.o)(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?(0,o.dy)` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?(0,o.dy)` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?(0,o.dy)`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?(0,o.dy)`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?(0,o.dy)`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?(0,o.dy)`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?(0,o.dy)`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};$.styles=[S.ET,S.ZM,T],y([(0,r.Cb)({type:Array})],$.prototype,"walletImages",void 0),y([(0,r.Cb)()],$.prototype,"imageSrc",void 0),y([(0,r.Cb)()],$.prototype,"name",void 0),y([(0,r.Cb)()],$.prototype,"tagLabel",void 0),y([(0,r.Cb)()],$.prototype,"tagVariant",void 0),y([(0,r.Cb)()],$.prototype,"icon",void 0),y([(0,r.Cb)()],$.prototype,"walletIcon",void 0),y([(0,r.Cb)()],$.prototype,"tabIdx",void 0),y([(0,r.Cb)({type:Boolean})],$.prototype,"installed",void 0),y([(0,r.Cb)({type:Boolean})],$.prototype,"disabled",void 0),y([(0,r.Cb)({type:Boolean})],$.prototype,"showAllWallets",void 0),y([(0,r.Cb)({type:Boolean})],$.prototype,"loading",void 0),y([(0,r.Cb)({type:String})],$.prototype,"loadingSpinnerColor",void 0),$=y([(0,R.M)("wui-list-wallet")],$);var B=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let Z=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=C.ConnectorController.state.connectors,this.count=d.ApiController.state.count,this.filteredCount=d.ApiController.state.filteredWallets.length,this.isFetchingRecommendedWallets=d.ApiController.state.isFetchingRecommendedWallets,this.unsubscribe.push(C.ConnectorController.subscribeKey("connectors",t=>this.connectors=t),d.ApiController.subscribeKey("count",t=>this.count=t),d.ApiController.subscribeKey("filteredWallets",t=>this.filteredCount=t.length),d.ApiController.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(z=>z.id==="walletConnect"),{allWallets:n}=h.OptionsController.state;if(!t||n==="HIDE"||n==="ONLY_MOBILE"&&!u.j.isMobile())return null;const i=d.ApiController.state.featured.length,a=this.count+i,e=a<10?a:Math.floor(a/10)*10,s=this.filteredCount>0?this.filteredCount:e;let c=`${s}`;return this.filteredCount>0?c=`${this.filteredCount}`:s<a&&(c=`${s}+`),(0,o.dy)`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${c}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${(0,b.o)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){L.X.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),v.RouterController.push("AllWallets")}};B([(0,r.Cb)()],Z.prototype,"tabIdx",void 0),B([(0,r.SB)()],Z.prototype,"connectors",void 0),B([(0,r.SB)()],Z.prototype,"count",void 0),B([(0,r.SB)()],Z.prototype,"filteredCount",void 0),B([(0,r.SB)()],Z.prototype,"isFetchingRecommendedWallets",void 0),Z=B([(0,w.Mo)("w3m-all-wallets-widget")],Z);var K=p(84671),St=p(44082),Pt=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let jt=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=C.ConnectorController.state.connectors,this.unsubscribe.push(C.ConnectorController.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(n=>n.type==="ANNOUNCED");return t!=null&&t.length?(0,o.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${t.filter(St.C.showConnector).map(n=>(0,o.dy)`
              <wui-list-wallet
                imageSrc=${(0,b.o)(K.f.getConnectorImage(n))}
                name=${n.name??"Unknown"}
                @click=${()=>this.onConnector(n)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${n.id}`}
                .installed=${!0}
                tabIdx=${(0,b.o)(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){t.id==="walletConnect"?u.j.isMobile()?v.RouterController.push("AllWallets"):v.RouterController.push("ConnectingWalletConnect"):v.RouterController.push("ConnectingExternal",{connector:t})}};Pt([(0,r.Cb)()],jt.prototype,"tabIdx",void 0),Pt([(0,r.SB)()],jt.prototype,"connectors",void 0),jt=Pt([(0,w.Mo)("w3m-connect-announced-widget")],jt);var N=p(9827),bt=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let Ct=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=C.ConnectorController.state.connectors,this.loading=!1,this.unsubscribe.push(C.ConnectorController.subscribeKey("connectors",t=>this.connectors=t)),u.j.isTelegram()&&u.j.isIos()&&(this.loading=!N.ConnectionController.state.wcUri,this.unsubscribe.push(N.ConnectionController.subscribeKey("wcUri",t=>this.loading=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{customWallets:t}=h.OptionsController.state;if(!(t!=null&&t.length))return this.style.cssText="display: none",null;const n=this.filterOutDuplicateWallets(t);return(0,o.dy)`<wui-flex flexDirection="column" gap="xs">
      ${n.map(i=>(0,o.dy)`
          <wui-list-wallet
            imageSrc=${(0,b.o)(K.f.getWalletImage(i))}
            name=${i.name??"Unknown"}
            @click=${()=>this.onConnectWallet(i)}
            data-testid=${`wallet-selector-${i.id}`}
            tabIdx=${(0,b.o)(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(t){const n=g.M.getRecentWallets(),i=this.connectors.map(c=>{var z;return(z=c.info)==null?void 0:z.rdns}).filter(Boolean),a=n.map(c=>c.rdns).filter(Boolean),e=i.concat(a);if(e.includes("io.metamask.mobile")&&u.j.isMobile()){const c=e.indexOf("io.metamask.mobile");e[c]="io.metamask"}return t.filter(c=>!e.includes(String(c==null?void 0:c.rdns)))}onConnectWallet(t){this.loading||v.RouterController.push("ConnectingWalletConnect",{wallet:t})}};bt([(0,r.Cb)()],Ct.prototype,"tabIdx",void 0),bt([(0,r.SB)()],Ct.prototype,"connectors",void 0),bt([(0,r.SB)()],Ct.prototype,"loading",void 0),Ct=bt([(0,w.Mo)("w3m-connect-custom-widget")],Ct);var Vt=p(44003),Ft=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let xt=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=C.ConnectorController.state.connectors,this.unsubscribe.push(C.ConnectorController.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const i=this.connectors.filter(a=>a.type==="EXTERNAL").filter(St.C.showConnector).filter(a=>a.id!==Vt.b.CONNECTOR_ID.COINBASE_SDK);return i!=null&&i.length?(0,o.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${i.map(a=>(0,o.dy)`
            <wui-list-wallet
              imageSrc=${(0,b.o)(K.f.getConnectorImage(a))}
              .installed=${!0}
              name=${a.name??"Unknown"}
              data-testid=${`wallet-selector-external-${a.id}`}
              @click=${()=>this.onConnector(a)}
              tabIdx=${(0,b.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){v.RouterController.push("ConnectingExternal",{connector:t})}};Ft([(0,r.Cb)()],xt.prototype,"tabIdx",void 0),Ft([(0,r.SB)()],xt.prototype,"connectors",void 0),xt=Ft([(0,w.Mo)("w3m-connect-external-widget")],xt);var _t=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let et=class extends o.oi{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?(0,o.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(t=>(0,o.dy)`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${(0,b.o)(K.f.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${(0,b.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){C.ConnectorController.selectWalletConnector(t)}};_t([(0,r.Cb)()],et.prototype,"tabIdx",void 0),_t([(0,r.Cb)()],et.prototype,"wallets",void 0),et=_t([(0,w.Mo)("w3m-connect-featured-widget")],et);var it=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let lt=class extends o.oi{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){const t=this.connectors.filter(St.C.showConnector);return t.length===0?(this.style.cssText="display: none",null):(0,o.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(n=>(0,o.dy)`
            <wui-list-wallet
              imageSrc=${(0,b.o)(K.f.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${n.id}`}
              @click=${()=>this.onConnector(n)}
              tabIdx=${(0,b.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(t){C.ConnectorController.setActiveConnector(t),v.RouterController.push("ConnectingExternal",{connector:t})}};it([(0,r.Cb)()],lt.prototype,"tabIdx",void 0),it([(0,r.Cb)()],lt.prototype,"connectors",void 0),lt=it([(0,w.Mo)("w3m-connect-injected-widget")],lt);var It=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let te=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=C.ConnectorController.state.connectors,this.unsubscribe.push(C.ConnectorController.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(n=>n.type==="MULTI_CHAIN"&&n.name!=="WalletConnect");return t!=null&&t.length?(0,o.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(n=>(0,o.dy)`
            <wui-list-wallet
              imageSrc=${(0,b.o)(K.f.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${n.id}`}
              @click=${()=>this.onConnector(n)}
              tabIdx=${(0,b.o)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){C.ConnectorController.setActiveConnector(t),v.RouterController.push("ConnectingMultiChain")}};It([(0,r.Cb)()],te.prototype,"tabIdx",void 0),It([(0,r.SB)()],te.prototype,"connectors",void 0),te=It([(0,w.Mo)("w3m-connect-multi-chain-widget")],te);var me=p(32033),ee=p(66295),ne=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let Ht=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=C.ConnectorController.state.connectors,this.loading=!1,this.unsubscribe.push(C.ConnectorController.subscribeKey("connectors",t=>this.connectors=t)),u.j.isTelegram()&&u.j.isIos()&&(this.loading=!N.ConnectionController.state.wcUri,this.unsubscribe.push(N.ConnectionController.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const n=g.M.getRecentWallets().filter(i=>!ee.J.isExcluded(i)).filter(i=>!this.hasWalletConnector(i)).filter(i=>this.isWalletCompatibleWithCurrentChain(i));return n.length?(0,o.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${n.map(i=>(0,o.dy)`
            <wui-list-wallet
              imageSrc=${(0,b.o)(K.f.getWalletImage(i))}
              name=${i.name??"Unknown"}
              @click=${()=>this.onConnectWallet(i)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${(0,b.o)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){this.loading||C.ConnectorController.selectWalletConnector(t)}hasWalletConnector(t){return this.connectors.some(n=>n.id===t.id||n.name===t.name)}isWalletCompatibleWithCurrentChain(t){const n=me.R.state.activeChain;return n&&t.chains?t.chains.some(i=>{const a=i.split(":")[0];return n===a}):!0}};ne([(0,r.Cb)()],Ht.prototype,"tabIdx",void 0),ne([(0,r.SB)()],Ht.prototype,"connectors",void 0),ne([(0,r.SB)()],Ht.prototype,"loading",void 0),Ht=ne([(0,w.Mo)("w3m-connect-recent-widget")],Ht);var ie=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let Kt=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,u.j.isTelegram()&&u.j.isIos()&&(this.loading=!N.ConnectionController.state.wcUri,this.unsubscribe.push(N.ConnectionController.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const{connectors:t}=C.ConnectorController.state,{customWallets:n,featuredWalletIds:i}=h.OptionsController.state,a=g.M.getRecentWallets(),e=t.find(J=>J.id==="walletConnect"),c=t.filter(J=>J.type==="INJECTED"||J.type==="ANNOUNCED"||J.type==="MULTI_CHAIN").filter(J=>J.name!=="Browser Wallet");if(!e)return null;if(i||n||!this.wallets.length)return this.style.cssText="display: none",null;const z=c.length+a.length,wt=Math.max(0,2-z),q=ee.J.filterOutDuplicateWallets(this.wallets).slice(0,wt);return q.length?(0,o.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${q.map(J=>(0,o.dy)`
            <wui-list-wallet
              imageSrc=${(0,b.o)(K.f.getWalletImage(J))}
              name=${(J==null?void 0:J.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(J)}
              tabIdx=${(0,b.o)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){if(this.loading)return;const n=C.ConnectorController.getConnector(t.id,t.rdns);n?v.RouterController.push("ConnectingExternal",{connector:n}):v.RouterController.push("ConnectingWalletConnect",{wallet:t})}};ie([(0,r.Cb)()],Kt.prototype,"tabIdx",void 0),ie([(0,r.Cb)()],Kt.prototype,"wallets",void 0),ie([(0,r.SB)()],Kt.prototype,"loading",void 0),Kt=ie([(0,w.Mo)("w3m-connect-recommended-widget")],Kt);var Ae=p(24734),oe=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let Gt=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=C.ConnectorController.state.connectors,this.connectorImages=Ae.W.state.connectorImages,this.unsubscribe.push(C.ConnectorController.subscribeKey("connectors",t=>this.connectors=t),Ae.W.subscribeKey("connectorImages",t=>this.connectorImages=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(u.j.isMobile())return this.style.cssText="display: none",null;const t=this.connectors.find(i=>i.id==="walletConnect");if(!t)return this.style.cssText="display: none",null;const n=t.imageUrl||this.connectorImages[(t==null?void 0:t.imageId)??""];return(0,o.dy)`
      <wui-list-wallet
        imageSrc=${(0,b.o)(n)}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${(0,b.o)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(t){C.ConnectorController.setActiveConnector(t),v.RouterController.push("ConnectingWalletConnect")}};oe([(0,r.Cb)()],Gt.prototype,"tabIdx",void 0),oe([(0,r.SB)()],Gt.prototype,"connectors",void 0),oe([(0,r.SB)()],Gt.prototype,"connectorImages",void 0),Gt=oe([(0,w.Mo)("w3m-connect-walletconnect-widget")],Gt);var Je=(0,o.iv)`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,Yt=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let Wt=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=C.ConnectorController.state.connectors,this.recommended=d.ApiController.state.recommended,this.featured=d.ApiController.state.featured,this.unsubscribe.push(C.ConnectorController.subscribeKey("connectors",t=>this.connectors=t),d.ApiController.subscribeKey("recommended",t=>this.recommended=t),d.ApiController.subscribeKey("featured",t=>this.featured=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return(0,o.dy)`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:t,recent:n,announced:i,injected:a,multiChain:e,recommended:s,featured:c,external:z}=St.C.getConnectorsByType(this.connectors,this.recommended,this.featured);return St.C.getConnectorTypeOrder({custom:t,recent:n,announced:i,injected:a,multiChain:e,recommended:s,featured:c,external:z}).map(q=>{switch(q){case"injected":return(0,o.dy)`
            ${e.length?(0,o.dy)`<w3m-connect-multi-chain-widget
                  tabIdx=${(0,b.o)(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${i.length?(0,o.dy)`<w3m-connect-announced-widget
                  tabIdx=${(0,b.o)(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${a.length?(0,o.dy)`<w3m-connect-injected-widget
                  .connectors=${a}
                  tabIdx=${(0,b.o)(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return(0,o.dy)`<w3m-connect-walletconnect-widget
            tabIdx=${(0,b.o)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return(0,o.dy)`<w3m-connect-recent-widget
            tabIdx=${(0,b.o)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return(0,o.dy)`<w3m-connect-featured-widget
            .wallets=${c}
            tabIdx=${(0,b.o)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return(0,o.dy)`<w3m-connect-custom-widget
            tabIdx=${(0,b.o)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return(0,o.dy)`<w3m-connect-external-widget
            tabIdx=${(0,b.o)(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return(0,o.dy)`<w3m-connect-recommended-widget
            .wallets=${s}
            tabIdx=${(0,b.o)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${q}`),null}})}};Wt.styles=Je,Yt([(0,r.Cb)()],Wt.prototype,"tabIdx",void 0),Yt([(0,r.SB)()],Wt.prototype,"connectors",void 0),Yt([(0,r.SB)()],Wt.prototype,"recommended",void 0),Yt([(0,r.SB)()],Wt.prototype,"featured",void 0),Wt=Yt([(0,w.Mo)("w3m-connector-list")],Wt);var Oe=p(58659),re=p(24064),Xe=(0,o.iv)`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,Rt=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let dt=class extends o.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,n)=>{var a;const i=n===this.activeTab;return(0,o.dy)`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${i}
          data-testid="tab-${(a=t.label)==null?void 0:a.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(t){return t.icon?(0,o.dy)`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,n){const i=this.buttons[this.activeTab],a=this.buttons[t],e=i==null?void 0:i.querySelector("wui-text"),s=a==null?void 0:a.querySelector("wui-text"),c=a==null?void 0:a.getBoundingClientRect(),z=s==null?void 0:s.getBoundingClientRect();i&&e&&!n&&t!==this.activeTab&&(e.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),a&&c&&z&&s&&(t!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(c.width+z.width)+6}px`,a.animate([{width:`${c.width+z.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:n?0:125,delay:n?0:200,fill:"forwards",easing:"ease"}))}};dt.styles=[S.ET,S.ZM,Xe],Rt([(0,r.Cb)({type:Array})],dt.prototype,"tabs",void 0),Rt([(0,r.Cb)()],dt.prototype,"onTabChange",void 0),Rt([(0,r.Cb)({type:Array})],dt.prototype,"buttons",void 0),Rt([(0,r.Cb)({type:Boolean})],dt.prototype,"disabled",void 0),Rt([(0,r.Cb)()],dt.prototype,"localTabWidth",void 0),Rt([(0,r.SB)()],dt.prototype,"activeTab",void 0),Rt([(0,r.SB)()],dt.prototype,"isDense",void 0),dt=Rt([(0,R.M)("wui-tabs")],dt);var ve=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let ae=class extends o.oi{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return(0,o.dy)`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:n})=>n),t}onTabChange(t){var i;const n=this.platformTabs[t];n&&((i=this.onSelectPlatfrom)==null||i.call(this,n))}};ve([(0,r.Cb)({type:Array})],ae.prototype,"platforms",void 0),ve([(0,r.Cb)()],ae.prototype,"onSelectPlatfrom",void 0),ae=ve([(0,w.Mo)("w3m-connecting-header")],ae);var ye=p(67870),Nn=p(34273),Ze=(0,o.iv)`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,ht=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};const Le={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},Qe={lg:"paragraph-600",md:"small-600"},qe={lg:"md",md:"md"};let rt=class extends o.oi{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const t=this.textVariant??Qe[this.size];return(0,o.dy)`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=qe[this.size],n=this.disabled?Le.disabled:Le[this.variant];return(0,o.dy)`<wui-loading-spinner color=${n} size=${t}></wui-loading-spinner>`}return(0,o.dy)``}};rt.styles=[S.ET,S.ZM,Ze],ht([(0,r.Cb)()],rt.prototype,"size",void 0),ht([(0,r.Cb)({type:Boolean})],rt.prototype,"disabled",void 0),ht([(0,r.Cb)({type:Boolean})],rt.prototype,"fullWidth",void 0),ht([(0,r.Cb)({type:Boolean})],rt.prototype,"loading",void 0),ht([(0,r.Cb)()],rt.prototype,"variant",void 0),ht([(0,r.Cb)({type:Boolean})],rt.prototype,"hasIconLeft",void 0),ht([(0,r.Cb)({type:Boolean})],rt.prototype,"hasIconRight",void 0),ht([(0,r.Cb)()],rt.prototype,"borderRadius",void 0),ht([(0,r.Cb)()],rt.prototype,"textVariant",void 0),rt=ht([(0,R.M)("wui-button")],rt);var kn=p(66018),tn=(0,o.iv)`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`,se=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let Mt=class extends o.oi{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return(0,o.dy)`
      <button ?disabled=${this.disabled} tabindex=${(0,b.o)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Mt.styles=[S.ET,S.ZM,tn],se([(0,r.Cb)()],Mt.prototype,"tabIdx",void 0),se([(0,r.Cb)({type:Boolean})],Mt.prototype,"disabled",void 0),se([(0,r.Cb)()],Mt.prototype,"color",void 0),Mt=se([(0,R.M)("wui-link")],Mt);var en=(0,o.iv)`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,Pe=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let le=class extends o.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,i=36-t,a=116+i,e=245+i,s=360+i*1.75;return(0,o.dy)`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${a} ${e}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};le.styles=[S.ET,en],Pe([(0,r.Cb)({type:Number})],le.prototype,"radius",void 0),le=Pe([(0,R.M)("wui-loading-thumbnail")],le);var Un=p(40106),nn=(0,o.iv)`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`,Tt=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let mt=class extends o.oi{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t=this.size==="sm"?"small-600":"paragraph-600";return(0,o.dy)`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?(0,o.dy)`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};mt.styles=[S.ET,S.ZM,nn],Tt([(0,r.Cb)()],mt.prototype,"variant",void 0),Tt([(0,r.Cb)()],mt.prototype,"imageSrc",void 0),Tt([(0,r.Cb)({type:Boolean})],mt.prototype,"disabled",void 0),Tt([(0,r.Cb)()],mt.prototype,"icon",void 0),Tt([(0,r.Cb)()],mt.prototype,"size",void 0),Tt([(0,r.Cb)()],mt.prototype,"text",void 0),mt=Tt([(0,R.M)("wui-chip-button")],mt);var on=(0,o.iv)`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,ce=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let zt=class extends o.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return(0,o.dy)`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};zt.styles=[S.ET,S.ZM,on],ce([(0,r.Cb)({type:Boolean})],zt.prototype,"disabled",void 0),ce([(0,r.Cb)()],zt.prototype,"label",void 0),ce([(0,r.Cb)()],zt.prototype,"buttonLabel",void 0),zt=ce([(0,R.M)("wui-cta-button")],zt);var rn=(0,o.iv)`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,je=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let ue=class extends o.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:n,play_store:i,chrome_store:a,homepage:e}=this.wallet,s=u.j.isMobile(),c=u.j.isIos(),z=u.j.isAndroid(),wt=[n,i,e,a].filter(Boolean).length>1,q=w.Hg.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return wt&&!s?(0,o.dy)`
        <wui-cta-button
          label=${`Don't have ${q}?`}
          buttonLabel="Get"
          @click=${()=>v.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!wt&&e?(0,o.dy)`
        <wui-cta-button
          label=${`Don't have ${q}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&c?(0,o.dy)`
        <wui-cta-button
          label=${`Don't have ${q}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&z?(0,o.dy)`
        <wui-cta-button
          label=${`Don't have ${q}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&u.j.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&u.j.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&u.j.openHref(this.wallet.homepage,"_blank")}};ue.styles=[rn],je([(0,r.Cb)({type:Object})],ue.prototype,"wallet",void 0),ue=je([(0,w.Mo)("w3m-mobile-download-links")],ue);var an=(0,o.iv)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,pt=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};class Q extends o.oi{constructor(){var t,n,i,a,e;super(),this.wallet=(t=v.RouterController.state.data)==null?void 0:t.wallet,this.connector=(n=v.RouterController.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=K.f.getWalletImage(this.wallet)??K.f.getConnectorImage(this.connector),this.name=((i=this.wallet)==null?void 0:i.name)??((a=this.connector)==null?void 0:a.name)??"Wallet",this.isRetrying=!1,this.uri=N.ConnectionController.state.wcUri,this.error=N.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(N.ConnectionController.subscribeKey("wcUri",s=>{var c;this.uri=s,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(c=this.onConnect)==null||c.call(this))}),N.ConnectionController.subscribeKey("wcError",s=>this.error=s)),(u.j.isTelegram()||u.j.isSafari())&&u.j.isIos()&&N.ConnectionController.state.wcUri&&((e=this.onConnect)==null||e.call(this))}firstUpdated(){var t;(t=this.onAutoConnect)==null||t.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),N.ConnectionController.setWcError(!1),clearTimeout(this.timeout)}render(){var i;(i=this.onRender)==null||i.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.error&&(n="Connection declined"),(0,o.dy)`
      <wui-flex
        data-error=${(0,b.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,b.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?(0,o.dy)`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?(0,o.dy)`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var t;if(this.error&&!this.showRetry){this.showRetry=!0;const n=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-button");n==null||n.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var t,n;N.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,(t=this.onRetry)==null||t.call(this)):(n=this.onConnect)==null||n.call(this)}loaderTemplate(){const t=ye.ThemeController.state.themeVariables["--w3m-border-radius-master"],n=t?parseInt(t.replace("px",""),10):4;return(0,o.dy)`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(u.j.copyToClopboard(this.uri),re.SnackController.showSuccess("Link copied"))}catch{re.SnackController.showError("Failed to copy")}}}Q.styles=an,pt([(0,r.SB)()],Q.prototype,"isRetrying",void 0),pt([(0,r.SB)()],Q.prototype,"uri",void 0),pt([(0,r.SB)()],Q.prototype,"error",void 0),pt([(0,r.SB)()],Q.prototype,"ready",void 0),pt([(0,r.SB)()],Q.prototype,"showRetry",void 0),pt([(0,r.SB)()],Q.prototype,"secondaryBtnLabel",void 0),pt([(0,r.SB)()],Q.prototype,"secondaryLabel",void 0),pt([(0,r.SB)()],Q.prototype,"isLoading",void 0),pt([(0,r.Cb)({type:Boolean})],Q.prototype,"isMobile",void 0),pt([(0,r.Cb)()],Q.prototype,"onRetry",void 0);var sn=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let _e=class extends Q{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),L.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var t;try{this.error=!1;const{connectors:n}=C.ConnectorController.state,i=n.find(a=>{var e,s,c;return a.type==="ANNOUNCED"&&((e=a.info)==null?void 0:e.rdns)===((s=this.wallet)==null?void 0:s.rdns)||a.type==="INJECTED"||a.name===((c=this.wallet)==null?void 0:c.name)});if(i)await N.ConnectionController.connectExternal(i,i.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");Oe.I.close(),L.X.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((t=this.wallet)==null?void 0:t.name)||"Unknown"}})}catch(n){L.X.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),this.error=!0}}};_e=sn([(0,w.Mo)("w3m-connecting-wc-browser")],_e);var ln=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let Me=class extends Q{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),L.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:i}=this.wallet,{redirect:a,href:e}=u.j.formatNativeUrl(n,this.uri);N.ConnectionController.setWcLinking({name:i,href:e}),N.ConnectionController.setRecentWallet(this.wallet),u.j.openHref(a,"_blank")}catch{this.error=!0}}};Me=ln([(0,w.Mo)("w3m-connecting-wc-desktop")],Me);var ze=p(78604),Dt=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let Bt=class extends Q{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=h.OptionsController.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{var t;if((t=this.wallet)!=null&&t.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,link_mode:i,name:a}=this.wallet,{redirect:e,redirectUniversalLink:s,href:c}=u.j.formatNativeUrl(n,this.uri,i);this.redirectDeeplink=e,this.redirectUniversalLink=s,this.target=u.j.isIframe()?"_top":"_self",N.ConnectionController.setWcLinking({name:a,href:c}),N.ConnectionController.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?u.j.openHref(this.redirectUniversalLink,this.target):u.j.openHref(this.redirectDeeplink,this.target)}catch(n){L.X.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:n instanceof Error?n.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=ze.bq.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(N.ConnectionController.subscribeKey("wcUri",()=>{this.onHandleURI()})),L.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var t;this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onTryAgain(){var t;N.ConnectionController.setWcError(!1),(t=this.onConnect)==null||t.call(this)}};Dt([(0,r.SB)()],Bt.prototype,"redirectDeeplink",void 0),Dt([(0,r.SB)()],Bt.prototype,"redirectUniversalLink",void 0),Dt([(0,r.SB)()],Bt.prototype,"target",void 0),Dt([(0,r.SB)()],Bt.prototype,"preferUniversalLinks",void 0),Dt([(0,r.SB)()],Bt.prototype,"isLoading",void 0),Bt=Dt([(0,w.Mo)("w3m-connecting-wc-mobile")],Bt);var cn=p(68119);const un=.1,De=2.5,vt=7;function Ce(l,t,n){return l===t?!1:(l-t<0?t-l:l-t)<=n+un}function dn(l,t){const n=Array.prototype.slice.call(cn.create(l,{errorCorrectionLevel:t}).modules.data,0),i=Math.sqrt(n.length);return n.reduce((a,e,s)=>(s%i===0?a.push([e]):a[a.length-1].push(e))&&a,[])}const hn={generate({uri:l,size:t,logoSize:n,dotColor:i="#141414"}){const a="transparent",s=[],c=dn(l,"Q"),z=t/c.length,wt=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];wt.forEach(({x:G,y:U})=>{const X=(c.length-vt)*z*G,F=(c.length-vt)*z*U,tt=.45;for(let Y=0;Y<wt.length;Y+=1){const gt=z*(vt-Y*2);s.push((0,o.YP)`
            <rect
              fill=${Y===2?i:a}
              width=${Y===0?gt-5:gt}
              rx= ${Y===0?(gt-5)*tt:gt*tt}
              ry= ${Y===0?(gt-5)*tt:gt*tt}
              stroke=${i}
              stroke-width=${Y===0?5:0}
              height=${Y===0?gt-5:gt}
              x= ${Y===0?F+z*Y+5/2:F+z*Y}
              y= ${Y===0?X+z*Y+5/2:X+z*Y}
            />
          `)}});const q=Math.floor((n+25)/z),J=c.length/2-q/2,qt=c.length/2+q/2-1,be=[];c.forEach((G,U)=>{G.forEach((X,F)=>{if(c[U][F]&&!(U<vt&&F<vt||U>c.length-(vt+1)&&F<vt||U<vt&&F>c.length-(vt+1))&&!(U>J&&U<qt&&F>J&&F<qt)){const tt=U*z+z/2,Y=F*z+z/2;be.push([tt,Y])}})});const Lt={};return be.forEach(([G,U])=>{var X;Lt[G]?(X=Lt[G])==null||X.push(U):Lt[G]=[U]}),Object.entries(Lt).map(([G,U])=>{const X=U.filter(F=>U.every(tt=>!Ce(F,tt,z)));return[Number(G),X]}).forEach(([G,U])=>{U.forEach(X=>{s.push((0,o.YP)`<circle cx=${G} cy=${X} fill=${i} r=${z/De} />`)})}),Object.entries(Lt).filter(([G,U])=>U.length>1).map(([G,U])=>{const X=U.filter(F=>U.some(tt=>Ce(F,tt,z)));return[Number(G),X]}).map(([G,U])=>{U.sort((F,tt)=>F<tt?-1:1);const X=[];for(const F of U){const tt=X.find(Y=>Y.some(gt=>Ce(F,gt,z)));tt?tt.push(F):X.push([F])}return[G,X.map(F=>[F[0],F[F.length-1]])]}).forEach(([G,U])=>{U.forEach(([X,F])=>{s.push((0,o.YP)`
              <line
                x1=${G}
                x2=${G}
                y1=${X}
                y2=${F}
                stroke=${i}
                stroke-width=${z/(De/2)}
                stroke-linecap="round"
              />
            `)})}),s}};var pn=(0,o.iv)`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,yt=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};const fn="#3396ff";let ct=class extends o.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??fn}
    `,(0,o.dy)`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t=this.theme==="light"?this.size:this.size-32;return(0,o.YP)`
      <svg height=${t} width=${t}>
        ${hn.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?(0,o.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?(0,o.dy)`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:(0,o.dy)`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};ct.styles=[S.ET,pn],yt([(0,r.Cb)()],ct.prototype,"uri",void 0),yt([(0,r.Cb)({type:Number})],ct.prototype,"size",void 0),yt([(0,r.Cb)()],ct.prototype,"theme",void 0),yt([(0,r.Cb)()],ct.prototype,"imageSrc",void 0),yt([(0,r.Cb)()],ct.prototype,"alt",void 0),yt([(0,r.Cb)()],ct.prototype,"color",void 0),yt([(0,r.Cb)({type:Boolean})],ct.prototype,"arenaClear",void 0),yt([(0,r.Cb)({type:Boolean})],ct.prototype,"farcaster",void 0),ct=yt([(0,R.M)("wui-qr-code")],ct);var wn=(0,o.iv)`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,Jt=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let At=class extends o.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,(0,o.dy)`<slot></slot>`}};At.styles=[wn],Jt([(0,r.Cb)()],At.prototype,"width",void 0),Jt([(0,r.Cb)()],At.prototype,"height",void 0),Jt([(0,r.Cb)()],At.prototype,"borderRadius",void 0),Jt([(0,r.Cb)()],At.prototype,"variant",void 0),At=Jt([(0,R.M)("wui-shimmer")],At);const Vn=/[.*+?^${}()|[\]\\]/gu,Fn=/[0-9,.]/u,gn="https://reown.com";var bn=(0,o.iv)`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`,mn=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let xe=class extends o.oi{render(){return(0,o.dy)`
      <a
        data-testid="ux-branding-reown"
        href=${gn}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0","0","l","0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};xe.styles=[S.ET,S.ZM,bn],xe=mn([(0,R.M)("wui-ux-by-reown")],xe);var vn=(0,o.iv)`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`,yn=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let Re=class extends Q{constructor(){var t;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),L.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.unsubscribe)==null||t.forEach(n=>n()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),(0,o.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return N.ConnectionController.setWcLinking(void 0),N.ConnectionController.setRecentWallet(this.wallet),(0,o.dy)` <wui-qr-code
      size=${t}
      theme=${ye.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,b.o)(K.f.getWalletImage(this.wallet))}
      color=${(0,b.o)(ye.ThemeController.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,b.o)(n)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return(0,o.dy)`<wui-link
      .disabled=${t}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Re.styles=vn,Re=yn([(0,w.Mo)("w3m-connecting-wc-qrcode")],Re);var Cn=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let Ne=class extends o.oi{constructor(){var t;if(super(),this.wallet=(t=v.RouterController.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");L.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return(0,o.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,b.o)(K.f.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Ne=Cn([(0,w.Mo)("w3m-connecting-wc-unsupported")],Ne);var ke=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let $e=class extends Q{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=ze.bq.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(N.ConnectionController.subscribeKey("wcUri",()=>{this.updateLoadingState()})),L.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:i}=this.wallet,{redirect:a,href:e}=u.j.formatUniversalUrl(n,this.uri);N.ConnectionController.setWcLinking({name:i,href:e}),N.ConnectionController.setRecentWallet(this.wallet),u.j.openHref(a,"_blank")}catch{this.error=!0}}};ke([(0,r.SB)()],$e.prototype,"isLoading",void 0),$e=ke([(0,w.Mo)("w3m-connecting-wc-web")],$e);var Xt=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let Nt=class extends o.oi{constructor(){var t;super(),this.wallet=(t=v.RouterController.state.data)==null?void 0:t.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!h.OptionsController.state.siwx,this.remoteFeatures=h.OptionsController.state.remoteFeatures,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(h.OptionsController.subscribeKey("remoteFeatures",n=>this.remoteFeatures=n))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return(0,o.dy)`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var t;return(t=this.remoteFeatures)!=null&&t.reownBranding?(0,o.dy)`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(t=!1){if(!(this.platform==="browser"||h.OptionsController.state.manualWCControl&&!t))try{const{wcPairingExpiry:n,status:i}=N.ConnectionController.state;(t||h.OptionsController.state.enableEmbedded||u.j.isPairingExpired(n)||i==="connecting")&&(await N.ConnectionController.connectWalletConnect(),this.isSiwxEnabled||Oe.I.close())}catch(n){L.X.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),N.ConnectionController.setWcError(!0),re.SnackController.showError(n.message??"Connection error"),N.ConnectionController.resetWcConnection(),v.RouterController.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:n,webapp_link:i,injected:a,rdns:e}=this.wallet,s=a==null?void 0:a.map(({injected_id:Lt})=>Lt).filter(Boolean),c=[...e?[e]:s??[]],z=h.OptionsController.state.isUniversalProvider?!1:c.length,wt=t,q=i,J=N.ConnectionController.checkInstalled(c),qt=z&&J,be=n&&!u.j.isMobile();qt&&!me.R.state.noAdapters&&this.platforms.push("browser"),wt&&this.platforms.push(u.j.isMobile()?"mobile":"qrcode"),q&&this.platforms.push("web"),be&&this.platforms.push("desktop"),!qt&&z&&!me.R.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return(0,o.dy)`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return(0,o.dy)`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return(0,o.dy)`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return(0,o.dy)`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return(0,o.dy)`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return(0,o.dy)`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?(0,o.dy)`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var i;const n=(i=this.shadowRoot)==null?void 0:i.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Xt([(0,r.SB)()],Nt.prototype,"platform",void 0),Xt([(0,r.SB)()],Nt.prototype,"platforms",void 0),Xt([(0,r.SB)()],Nt.prototype,"isSiwxEnabled",void 0),Xt([(0,r.SB)()],Nt.prototype,"remoteFeatures",void 0),Nt=Xt([(0,w.Mo)("w3m-connecting-wc-view")],Nt);var Ue=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let de=class extends o.oi{constructor(){super(...arguments),this.isMobile=u.j.isMobile()}render(){if(this.isMobile){const{featured:t,recommended:n}=d.ApiController.state,{customWallets:i}=h.OptionsController.state,a=g.M.getRecentWallets(),e=t.length||n.length||(i==null?void 0:i.length)||a.length;return(0,o.dy)`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${e?(0,o.dy)`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return(0,o.dy)`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};Ue([(0,r.SB)()],de.prototype,"isMobile",void 0),de=Ue([(0,w.Mo)("w3m-connecting-wc-basic-view")],de);var Ve=p(77859),xn=p(69459),Rn=p(13822);const Ee=()=>new $n;class $n{}const Se=new WeakMap,Ie=(0,Rn.XM)(class extends xn.sR{render(l){return Ve.Ld}update(l,[t]){var i;const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=(i=l.options)==null?void 0:i.host,this.rt(this.ct=l.element)),Ve.Ld}rt(l){if(this.isConnected||(l=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=Se.get(t);n===void 0&&(n=new WeakMap,Se.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,l),l!==void 0&&this.G.call(this.ht,l)}else this.G.value=l}get lt(){var l,t;return typeof this.G=="function"?(l=Se.get(this.ht??globalThis))==null?void 0:l.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var En=(0,o.iv)`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`,Fe=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let he=class extends o.oi{constructor(){super(...arguments),this.inputElementRef=Ee(),this.checked=void 0}render(){return(0,o.dy)`
      <label>
        <input
          ${Ie(this.inputElementRef)}
          type="checkbox"
          ?checked=${(0,b.o)(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("switchChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};he.styles=[S.ET,S.ZM,S.Bp,En],Fe([(0,r.Cb)({type:Boolean})],he.prototype,"checked",void 0),he=Fe([(0,R.M)("wui-switch")],he);var Sn=(0,o.iv)`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`,He=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let pe=class extends o.oi{constructor(){super(...arguments),this.checked=void 0}render(){return(0,o.dy)`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${(0,b.o)(this.checked)}></wui-switch>
      </button>
    `}};pe.styles=[S.ET,S.ZM,Sn],He([(0,r.Cb)({type:Boolean})],pe.prototype,"checked",void 0),pe=He([(0,R.M)("wui-certified-switch")],pe);var In=(0,o.iv)`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`,Ke=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let fe=class extends o.oi{constructor(){super(...arguments),this.icon="copy"}render(){return(0,o.dy)`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};fe.styles=[S.ET,S.ZM,In],Ke([(0,r.Cb)()],fe.prototype,"icon",void 0),fe=Ke([(0,R.M)("wui-input-element")],fe);var Wn=p(62847),Tn=(0,o.iv)`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,ft=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let at=class extends o.oi{constructor(){super(...arguments),this.inputElementRef=Ee(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,i={[`wui-size-${this.size}`]:!0,[t]:!!this.inputRightPadding};return(0,o.dy)`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${Ie(this.inputElementRef)}
        class=${(0,Wn.$)(i)}
        type=${this.type}
        enterkeyhint=${(0,b.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${(0,b.o)(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?(0,o.dy)`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};at.styles=[S.ET,S.ZM,Tn],ft([(0,r.Cb)()],at.prototype,"size",void 0),ft([(0,r.Cb)()],at.prototype,"icon",void 0),ft([(0,r.Cb)({type:Boolean})],at.prototype,"disabled",void 0),ft([(0,r.Cb)()],at.prototype,"placeholder",void 0),ft([(0,r.Cb)()],at.prototype,"type",void 0),ft([(0,r.Cb)()],at.prototype,"keyHint",void 0),ft([(0,r.Cb)()],at.prototype,"value",void 0),ft([(0,r.Cb)()],at.prototype,"inputRightPadding",void 0),ft([(0,r.Cb)()],at.prototype,"tabIdx",void 0),at=ft([(0,R.M)("wui-input-text")],at);var Bn=(0,o.iv)`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,An=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let We=class extends o.oi{constructor(){super(...arguments),this.inputComponentRef=Ee()}render(){return(0,o.dy)`
      <wui-input-text
        ${Ie(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,n=t==null?void 0:t.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};We.styles=[S.ET,Bn],We=An([(0,R.M)("wui-search-bar")],We);const On=(0,o.YP)`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var Ln=(0,o.iv)`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`,Ge=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let we=class extends o.oi{constructor(){super(...arguments),this.type="wallet"}render(){return(0,o.dy)`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?(0,o.dy)` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${On}`:(0,o.dy)`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};we.styles=[S.ET,S.ZM,Ln],Ge([(0,r.Cb)()],we.prototype,"type",void 0),we=Ge([(0,R.M)("wui-card-select-loader")],we);var $t=p(52456),Pn=(0,o.iv)`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,st=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let nt=class extends o.oi{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&$t.H.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&$t.H.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&$t.H.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&$t.H.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&$t.H.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&$t.H.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&$t.H.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&$t.H.getSpacingStyles(this.margin,3)};
    `,(0,o.dy)`<slot></slot>`}};nt.styles=[S.ET,Pn],st([(0,r.Cb)()],nt.prototype,"gridTemplateRows",void 0),st([(0,r.Cb)()],nt.prototype,"gridTemplateColumns",void 0),st([(0,r.Cb)()],nt.prototype,"justifyItems",void 0),st([(0,r.Cb)()],nt.prototype,"alignItems",void 0),st([(0,r.Cb)()],nt.prototype,"justifyContent",void 0),st([(0,r.Cb)()],nt.prototype,"alignContent",void 0),st([(0,r.Cb)()],nt.prototype,"columnGap",void 0),st([(0,r.Cb)()],nt.prototype,"rowGap",void 0),st([(0,r.Cb)()],nt.prototype,"gap",void 0),st([(0,r.Cb)()],nt.prototype,"padding",void 0),st([(0,r.Cb)()],nt.prototype,"margin",void 0),nt=st([(0,R.M)("wui-grid")],nt);var jn=(0,o.iv)`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`,Zt=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let Ot=class extends o.oi{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var n,i;const t=((n=this.wallet)==null?void 0:n.badge_type)==="certified";return(0,o.dy)`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${(0,b.o)(t?"certified":void 0)}
            >${(i=this.wallet)==null?void 0:i.name}</wui-text
          >
          ${t?(0,o.dy)`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var t,n;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():(0,o.dy)`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,b.o)(this.imageSrc)}
        name=${(t=this.wallet)==null?void 0:t.name}
        .installed=${(n=this.wallet)==null?void 0:n.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return(0,o.dy)`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=K.f.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await K.f.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Ot.styles=jn,Zt([(0,r.SB)()],Ot.prototype,"visible",void 0),Zt([(0,r.SB)()],Ot.prototype,"imageSrc",void 0),Zt([(0,r.SB)()],Ot.prototype,"imageLoading",void 0),Zt([(0,r.Cb)()],Ot.prototype,"wallet",void 0),Ot=Zt([(0,w.Mo)("w3m-all-wallets-list-item")],Ot);var _n=(0,o.iv)`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,kt=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};const Ye="local-paginator";let Et=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!d.ApiController.state.wallets.length,this.wallets=d.ApiController.state.wallets,this.recommended=d.ApiController.state.recommended,this.featured=d.ApiController.state.featured,this.filteredWallets=d.ApiController.state.filteredWallets,this.unsubscribe.push(d.ApiController.subscribeKey("wallets",t=>this.wallets=t),d.ApiController.subscribeKey("recommended",t=>this.recommended=t),d.ApiController.subscribeKey("featured",t=>this.featured=t),d.ApiController.subscribeKey("filteredWallets",t=>this.filteredWallets=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(n=>n()),(t=this.paginationObserver)==null||t.disconnect()}render(){return(0,o.dy)`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;this.loading=!0;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");t&&(await d.ApiController.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,n){return[...Array(t)].map(()=>(0,o.dy)`
        <wui-card-select-loader type="wallet" id=${(0,b.o)(n)}></wui-card-select-loader>
      `)}walletsTemplate(){var i;const t=((i=this.filteredWallets)==null?void 0:i.length)>0?u.j.uniqueBy([...this.featured,...this.recommended,...this.filteredWallets],"id"):u.j.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return ee.J.markWalletsAsInstalled(t).map(a=>(0,o.dy)`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(a)}
          .wallet=${a}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:n,featured:i,count:a}=d.ApiController.state,e=window.innerWidth<352?3:4,s=t.length+n.length;let z=Math.ceil(s/e)*e-s+e;return z-=t.length?i.length%e:0,a===0&&i.length>0?null:a===0||[...i,...t,...n].length<a?this.shimmerTemplate(z,Ye):null}createPaginationObserver(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${Ye}`);t&&(this.paginationObserver=new IntersectionObserver(([i])=>{if(i!=null&&i.isIntersecting&&!this.loading){const{page:a,count:e,wallets:s}=d.ApiController.state;s.length<e&&d.ApiController.fetchWalletsByPage({page:a+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){C.ConnectorController.selectWalletConnector(t)}};Et.styles=_n,kt([(0,r.SB)()],Et.prototype,"loading",void 0),kt([(0,r.SB)()],Et.prototype,"wallets",void 0),kt([(0,r.SB)()],Et.prototype,"recommended",void 0),kt([(0,r.SB)()],Et.prototype,"featured",void 0),kt([(0,r.SB)()],Et.prototype,"filteredWallets",void 0),Et=kt([(0,w.Mo)("w3m-all-wallets-list")],Et);var Mn=(0,o.iv)`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,ge=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let Ut=class extends o.oi{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?(0,o.dy)`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await d.ApiController.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=d.ApiController.state,n=ee.J.markWalletsAsInstalled(t);return t.length?(0,o.dy)`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${n.map(i=>(0,o.dy)`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(i)}
              .wallet=${i}
              data-testid="wallet-search-item-${i.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:(0,o.dy)`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){C.ConnectorController.selectWalletConnector(t)}};Ut.styles=Mn,ge([(0,r.SB)()],Ut.prototype,"loading",void 0),ge([(0,r.Cb)()],Ut.prototype,"query",void 0),ge([(0,r.Cb)()],Ut.prototype,"badge",void 0),Ut=ge([(0,w.Mo)("w3m-all-wallets-search")],Ut);var Te=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let Qt=class extends o.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=u.j.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return(0,o.dy)`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?(0,o.dy)`<w3m-all-wallets-search
            query=${this.search}
            badge=${(0,b.o)(this.badge)}
          ></w3m-all-wallets-search>`:(0,o.dy)`<w3m-all-wallets-list badge=${(0,b.o)(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",re.SnackController.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return u.j.isMobile()?(0,o.dy)`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){v.RouterController.push("ConnectingWalletConnect")}};Te([(0,r.SB)()],Qt.prototype,"search",void 0),Te([(0,r.SB)()],Qt.prototype,"badge",void 0),Qt=Te([(0,w.Mo)("w3m-all-wallets-view")],Qt);var zn=(0,o.iv)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,ut=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let ot=class extends o.oi{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return(0,o.dy)`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${(0,b.o)(this.iconVariant)}
        tabindex=${(0,b.o)(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return(0,o.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return(0,o.dy)`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",n=this.iconVariant==="square-blue"?"mdl":"md",i=this.iconSize?this.iconSize:n;return(0,o.dy)`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${i}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${n}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?(0,o.dy)`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:(0,o.dy)``}chevronTemplate(){return this.chevron?(0,o.dy)`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};ot.styles=[S.ET,S.ZM,zn],ut([(0,r.Cb)()],ot.prototype,"icon",void 0),ut([(0,r.Cb)()],ot.prototype,"iconSize",void 0),ut([(0,r.Cb)()],ot.prototype,"tabIdx",void 0),ut([(0,r.Cb)()],ot.prototype,"variant",void 0),ut([(0,r.Cb)()],ot.prototype,"iconVariant",void 0),ut([(0,r.Cb)({type:Boolean})],ot.prototype,"disabled",void 0),ut([(0,r.Cb)()],ot.prototype,"imageSrc",void 0),ut([(0,r.Cb)()],ot.prototype,"alt",void 0),ut([(0,r.Cb)({type:Boolean})],ot.prototype,"chevron",void 0),ut([(0,r.Cb)({type:Boolean})],ot.prototype,"loading",void 0),ot=ut([(0,R.M)("wui-list-item")],ot);var Dn=function(l,t,n,i){var a=arguments.length,e=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,t,n,i);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(e=(a<3?s(e):a>3?s(t,n,e):s(t,n))||e);return a>3&&e&&Object.defineProperty(t,n,e),e};let Be=class extends o.oi{constructor(){var t;super(...arguments),this.wallet=(t=v.RouterController.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return(0,o.dy)`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?(0,o.dy)`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?(0,o.dy)`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?(0,o.dy)`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?(0,o.dy)`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&u.j.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&u.j.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&u.j.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&u.j.openHref(this.wallet.homepage,"_blank")}};Be=Dn([(0,w.Mo)("w3m-downloads-view")],Be)}}]);
