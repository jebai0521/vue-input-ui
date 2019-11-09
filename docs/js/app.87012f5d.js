(function(e){function a(a){for(var l,u,i=a[0],o=a[1],d=a[2],c=0,f=[];c<i.length;c++)u=i[c],r[u]&&f.push(r[u][0]),r[u]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);s&&s(a);while(f.length)f.shift()();return n.push.apply(n,d||[]),t()}function t(){for(var e,a=0;a<n.length;a++){for(var t=n[a],l=!0,i=1;i<t.length;i++){var o=t[i];0!==r[o]&&(l=!1)}l&&(n.splice(a--,1),e=u(u.s=t[0]))}return e}var l={},r={app:0},n=[];function u(a){if(l[a])return l[a].exports;var t=l[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=l,u.d=function(e,a,t){u.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,a){if(1&a&&(e=u(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var l in e)u.d(t,l,function(a){return e[a]}.bind(null,l));return t},u.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(a,"a",a),a},u.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=a,i=i.slice();for(var d=0;d<i.length;d++)a(i[d]);var s=o;n.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},5591:function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("cadf"),t("551c"),t("097d");var l=t("2b0e"),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"vue-input-ui-demo flex",class:{dark:e.darkMode},attrs:{id:"VueInputUiDemo"}},[t("div",{staticClass:"container"},[t("h1",{staticClass:"mb-2 mt-4"},[e._v("\n      "+e._s(e.value1?e.value1:"-")+"\n    ")]),t("h2",{staticClass:"mb-2"},[e._v("\n      "+e._s(e.value2?e.value2:"-")+"\n    ")]),t("h3",{staticClass:"mb-2"},[e._v("\n      "+e._s(e.value3?e.value3:"-")+"\n    ")]),t("h4",{staticClass:"mb-2"},[e._v("\n      "+e._s(e.value4?e.value4:"-")+"\n    ")]),t("h5",{staticClass:"mb-2"},[e._v("\n      "+e._s(e.value5?e.value5:"-")+"\n    ")]),e._m(0),t("div",{staticClass:"flex justify-content-center pt-3 mb-2"},[t("button",{staticClass:"btn btn-sm",on:{click:function(a){e.darkMode=!e.darkMode}}},[e._v("\n        Toggle Dark Mode\n      ")]),t("button",{staticClass:"btn btn-success ml-2 btn-sm",on:{click:function(a){e.loading=!e.loading}}},[e._v("\n        Toggle loader\n      ")])]),t("br"),t("div",{staticClass:"component-container"},[t("VueInputUi",{attrs:{id:"VueInputUi1",label:"Initial input",color:"purple",size:"sm",dark:e.darkMode,clearable:"",loader:e.loading},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),t("br"),t("VueInputUi",{attrs:{id:"VueInputUi2",label:"Custom border radius",dark:e.darkMode,loader:e.loading,"border-radius":8},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),t("br"),t("VueInputUi",{attrs:{id:"VueInputUi3",dark:!e.darkMode,label:"Custom bg dark color","dark-color":"#21222e",clearable:"","border-radius":8,loader:e.loading},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}}),t("br"),t("VueInputUi",{attrs:{id:"VueInputUi4",dark:!e.darkMode,label:"is dark",color:"purple",clearable:"",loader:e.loading},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}}),t("br"),t("VueInputUi",{attrs:{id:"VueInputUi5",error:!0,label:"Input with error='true' + text hint",hint:"Error text",size:"lg",dark:e.darkMode,loader:e.loading},model:{value:e.value4,callback:function(a){e.value4=a},expression:"value4"}}),t("br"),t("VueInputUi",{attrs:{id:"VueInputUi6",label:"Valid input state",valid:"",dark:e.darkMode,clearable:"",loader:e.loading},model:{value:e.value5,callback:function(a){e.value5=a},expression:"value5"}}),t("br"),t("VueInputUi",{attrs:{id:"VueInputUi7",dark:e.darkMode,loader:e.loading},model:{value:e.value6,callback:function(a){e.value6=a},expression:"value6"}}),t("br"),t("VueInputUi",{attrs:{id:"VueInputUi8",label:"Is disabled",dark:e.darkMode,disabled:"",loader:e.loading},model:{value:e.value7,callback:function(a){e.value7=a},expression:"value7"}}),t("br"),t("VueInputUi",{attrs:{id:"VueInputUi9",label:"Number input",dark:e.darkMode,type:"number",clearable:"",loader:e.loading},model:{value:e.value8,callback:function(a){e.value8=a},expression:"value8"}}),t("br"),t("VueInputUi",{attrs:{id:"VueInputUi10",label:"Required input",hint:"Is required",dark:e.darkMode,required:"",loader:!e.loading,clearable:""},model:{value:e.value9,callback:function(a){e.value9=a},expression:"value9"}}),t("br"),t("VueInputUi",{attrs:{id:"VueInputUi11",label:"Text area",dark:e.darkMode,textarea:"",rows:"4",color:"tomato",loader:!e.loading},model:{value:e.value10,callback:function(a){e.value10=a},expression:"value10"}})],1)])])},n=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"flex justify-content-center pt-3 mb-2"},[t("a",{staticClass:"btn btn-sm btn-dark",attrs:{href:"https://github.com/LouisMazel/vue-input-ui",target:"_blank"}},[e._v("\n        Github\n      ")]),t("a",{staticClass:"btn btn-danger ml-2 btn-sm",attrs:{href:"https://npmjs.com/package/vue-input-ui",target:"_blank"}},[e._v("\n        Npm\n      ")])])}],u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{ref:"parent",staticClass:"vue-input-ui",class:[{"is-focused":e.isFocus,"is-valid":e.valid,"has-value":e.value,"has-error":e.error,"is-disabled":e.disabled,"is-dark":e.dark,"has-hint":e.hint},e.size],style:[e.cssTheme],on:{click:e.focusInput}},["checkbox"!==e.type||e.textarea?"radio"!==e.type||e.textarea?e.textarea?t("textarea",e._b({directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"VueInputUi",staticClass:"vue-input-ui__input textarea",attrs:{id:e.id,placeholder:e.labelValue,type:e.type,required:e.required},domProps:{value:e.inputValue},on:{keydown:e.keyDown,keyup:e.keyUp,focus:e.onFocus,blur:e.onBlur,click:function(a){e.$emit("click")},input:function(a){a.target.composing||(e.inputValue=a.target.value)}}},"textarea",e.$attrs,!1)):t("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"VueInputUi",staticClass:"vue-input-ui__input",attrs:{id:e.id,placeholder:e.labelValue,disabled:e.disabled,required:e.required,type:e.type},domProps:{value:e.inputValue},on:{keydown:e.keyDown,keyup:e.keyUp,focus:e.onFocus,blur:e.onBlur,click:function(a){e.$emit("click")},input:function(a){a.target.composing||(e.inputValue=a.target.value)}}},"input",e.$attrs,!1)):t("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"VueInputUi",staticClass:"vue-input-ui__input",attrs:{id:e.id,placeholder:e.labelValue,disabled:e.disabled,required:e.required,type:"radio"},domProps:{checked:e._q(e.inputValue,null)},on:{keydown:e.keyDown,keyup:e.keyUp,focus:e.onFocus,blur:e.onBlur,click:function(a){e.$emit("click")},change:function(a){e.inputValue=null}}},"input",e.$attrs,!1)):t("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"VueInputUi",staticClass:"vue-input-ui__input",attrs:{id:e.id,placeholder:e.labelValue,disabled:e.disabled,required:e.required,type:"checkbox"},domProps:{checked:Array.isArray(e.inputValue)?e._i(e.inputValue,null)>-1:e.inputValue},on:{keydown:e.keyDown,keyup:e.keyUp,focus:e.onFocus,blur:e.onBlur,click:function(a){e.$emit("click")},change:function(a){var t=e.inputValue,l=a.target,r=!!l.checked;if(Array.isArray(t)){var n=null,u=e._i(t,n);l.checked?u<0&&(e.inputValue=t.concat([n])):u>-1&&(e.inputValue=t.slice(0,u).concat(t.slice(u+1)))}else e.inputValue=r}}},"input",e.$attrs,!1)),t("label",{ref:"label",staticClass:"vue-input-ui__label",class:e.error?"text-danger":null,attrs:{for:e.id},on:{click:e.focusInput}},[e._v("\n    "+e._s(e.hintValue||e.labelValue)+"\n  ")]),e.clearable&&e.inputValue&&!e.textarea?t("button",{staticClass:"vue-input-ui__clear",attrs:{title:"clear",type:"button",tabindex:"-1"},on:{click:e.clear}},[t("span",{staticClass:"vue-input-ui__clear__effect"}),t("span",[e._v("\n      ✕\n    ")])]):e._e(),e.loader?t("div",{staticClass:"vue-input-ui__loader",class:{textarea:e.textarea}},[t("div",{staticClass:"vue-input-ui__loader__progress-bar"})]):e._e()])},i=[],o=(t("c5f6"),t("6762"),t("2fdb"),t("28a5"),t("6b54"),t("e814")),d=t.n(o),s=function(e,a){var t=d()(e.substring(1,3),16),l=d()(e.substring(3,5),16),r=d()(e.substring(5,7),16);t=d()(t*(100+a)/100),l=d()(l*(100+a)/100),r=d()(r*(100+a)/100),t=t<255?t:255,l=l<255?l:255,r=r<255?r:255;var n=1===t.toString(16).length?"0"+t.toString(16):t.toString(16),u=1===l.toString(16).length?"0"+l.toString(16):l.toString(16),i=1===r.toString(16).length?"0"+r.toString(16):r.toString(16);return"#"+n+u+i},c=function(e,a){var t;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return t=e.substring(1).split(""),3===t.length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),t="0x".concat(t.join("")),"rgba(".concat([t>>16&255,t>>8&255,255&t].join(", "),", ").concat(a,")");throw new Error("Bad Hex")},f=function(e){return!e.includes("#")},p=function(e){var a={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};return"undefined"!==typeof a[e.toLowerCase()]&&a[e.toLowerCase()]},b=function(e){var a=e.dark,t=e.color,l=e.lightColor,r=e.darkColor,n=e.validColor,u=e.borderRadius;return{"--input-ui-primary-color":t,"--input-ui-primary-color-transparency":f(t)?c(p(t),.7):c(t,.7),"--input-ui-second-color":a?"rgba(255, 255, 255, 0.7)":"#747474","--input-ui-third-color":a?"rgba(255, 255, 255, 0.7)":"#CCC","--input-ui-bg-color":a?r:l,"--input-ui-hover-color":a?s(r,20):s(l,-8),"--input-ui-valid-color":n,"--input-ui-muted-color":a?"rgba(255, 255, 255, 0.3)":"#747474","--input-ui-border-radius":"".concat(u,"px"),"--input-ui-error-color-transparency":c(p("orangered"),.7),"--input-ui-valid-color-transparency":f(n)?c(p(n),.7):c(n,.7)}},v=t("be30"),m={name:"VueInputUi",props:{value:{type:[String,Number],default:null},label:{type:String,default:"Enter text"},hint:{type:String,default:null},error:{type:Boolean,default:Boolean},color:{type:String,default:"dodgerblue"},disabled:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},darkColor:{type:String,default:"#424242"},id:{type:String,default:"VueInputUi"},size:{type:String,default:null},type:{type:String,default:"text"},readonly:{type:Boolean,default:!1},valid:{type:Boolean,default:!1},validColor:{type:String,default:"yellowgreen"},required:{type:Boolean,default:!1},textarea:{type:Boolean,default:!1},loader:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},borderRadius:{type:Number,default:4}},data:function(){return{isFocus:!1}},computed:{cssTheme:function(){var e=this.dark,a=this.color,t=this.darkColor,l=this.validColor,r=this.borderRadius;return b({dark:e,color:a,darkColor:t,validColor:l,borderRadius:r,lightColor:"#FFFFFF"})},inputValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},labelValue:function(){var e=this.label;return this.required&&e?e+=" *":e},hintValue:function(){var e=this.hint;return this.required&&e?e+=" *":e}},watch:{dark:function(){this.setCssVars()}},mounted:function(){this.setCssVars()},methods:{focusInput:function(){this.$refs.VueInputUi.focus()},onFocus:function(){this.$emit("focus"),this.isFocus=!0},onBlur:function(){this.$emit("blur"),this.isFocus=!1},clear:function(){this.$emit("input",null),this.$emit("clear")},keyUp:function(e){this.$emit("keyup",e)},keyDown:function(e){this.$emit("keydown",e)},setCssVars:function(){Object(v["a"])({variables:this.cssTheme})}}},g=m,k=(t("a40f"),t("2877")),h=Object(k["a"])(g,u,i,!1,null,"3f9ce126",null),y=h.exports,V={name:"App",components:{VueInputUi:y},data:function(){return{value1:"VueInputUI",value2:"A beautiful input made with VueJs",value3:"Customize size & color (dark mode)",value4:"Error management",value5:"Validator state",value6:"Hello world!",value7:null,value8:null,value9:null,value10:null,darkMode:!1,loading:!1}}},_=V,w=(t("5c0b"),Object(k["a"])(_,r,n,!1,null,null,null)),x=w.exports;l["a"].config.productionTip=!1,new l["a"]({render:function(e){return e(x)}}).$mount("#app")},"5c0b":function(e,a,t){"use strict";var l=t("5e27"),r=t.n(l);r.a},"5e27":function(e,a,t){},a40f:function(e,a,t){"use strict";var l=t("5591"),r=t.n(l);r.a}});
//# sourceMappingURL=app.87012f5d.js.map