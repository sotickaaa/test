(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-login"],{"20fc":function(e,t,n){"use strict";n.r(t);var i=n("4e1c"),o=n("49b8");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("bf11");var a,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"7c3dbaea",null,!1,i["a"],a);t["default"]=c.exports},"49b8":function(e,t,n){"use strict";n.r(t);var i=n("8e3e"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},"4e1c":function(e,t,n){"use strict";var i,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"login"},[n("v-uni-view",{staticClass:"login-content"},[n("v-uni-image",{staticClass:"logo",attrs:{src:"/static/logo.png"}}),n("v-uni-text",{staticClass:"s-white",staticStyle:{color:"#ccc"}},[e._v("APP:"+e._s(e.version))]),n("v-uni-view",{staticClass:"login-form"},[n("v-uni-view",{staticClass:"login-form-item"},[n("v-uni-view",{staticClass:"login-icons s-flex-center"}),n("v-uni-input",{staticClass:"login-input",attrs:{type:"digit",placeholder:e.i18n.k_qing_shu_ru_shou_ji_hao},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),n("v-uni-view",{staticClass:"login-form-item"},[n("v-uni-view",{staticClass:"login-icons s-flex-center"}),n("v-uni-input",{staticClass:"login-input-password",attrs:{type:"password",placeholder:e.i18n.k_qing_shu_ru_deng_lu_mi_ma},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("v-uni-text",{staticClass:"login-item-button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toLogin()}}},[e._v(e._s(e.i18n.k_deng_lu))]),n("v-uni-text",{staticClass:"s-text s-center register",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toRegisert()}}},[e._v(e._s(e.i18n.k_li_ji_zhu_ce))]),n("br"),n("v-uni-text",{staticClass:"s-text s-center register",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toForget()}}},[e._v("quên mật khẩu?")])],1)],1)],1)},r=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}))},"8e3e":function(e,t,n){"use strict";var i=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var o=i(n("c964")),r=i(n("595c")),a={data:function(){return{version:"",baseColor:"",phone:"",password:""}},onLoad:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.baseColor=e.$store.state.baseColor,t.next=4,getApp().checkVersion();case 4:e.version=t.sent;case 5:case"end":return t.stop()}}),t)})))()},computed:{i18n:function(){return this.$t("index")}},methods:{toRegisert:function(){uni.navigateTo({url:"./register"})},toForget:function(){uni.navigateTo({url:"./forget"})},toLogin:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=e.phone){t.next=3;break}return uni.showToast({title:i18n.k_qing_shu_ru_shou_ji_hao_ma,icon:"none"}),t.abrupt("return",!1);case 3:if(""!=e.password){t.next=6;break}return uni.showToast({title:i18n.k_qing_shu_ru_deng_lu_mi_ma,icon:"none"}),t.abrupt("return",!1);case 6:return"84"!=e.phone.substr(0,2)&&e.phone.length<11&&(e.phone="84"+1*e.phone),t.next=9,getApp().post("user/login",{account:e.phone,password:(0,r.default)(e.password)},!0);case 9:n=t.sent,200==n.code?(getApp().login(n.data.userinfo),uni.showToast({title:i18n.k_deng_lu_cheng_gong,icon:"success"}),setTimeout((function(e){uni.reLaunch({url:"/pages/index/home"})}),1500)):uni.showToast({title:n.msg||i18n.k_deng_lu_shi_bai,icon:"none"});case 11:case"end":return t.stop()}}),t)})))()}}};t.default=a},bf11:function(e,t,n){"use strict";var i=n("c3b5"),o=n.n(i);o.a},c3b5:function(e,t,n){var i=n("ea35");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("18f2d7a9",i,!0,{sourceMap:!1,shadowMode:!1})},ea35:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.login[data-v-7c3dbaea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;background-color:#fff;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.login-content[data-v-7c3dbaea]{margin-top:%?150?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%}.logo[data-v-7c3dbaea]{width:%?280?%;height:%?280?%}.login-form[data-v-7c3dbaea]{width:100%;margin:%?40?% 0}.login-form-item[data-v-7c3dbaea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;border-bottom:1px solid #eee;margin-bottom:%?30?%;padding:%?8?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.login-icons[data-v-7c3dbaea]{width:%?60?%}.login-input[data-v-7c3dbaea]{width:%?600?%;font-size:%?30?%;height:%?80?%;line-height:%?80?%}.login-input-password[data-v-7c3dbaea]{width:%?480?%;font-size:%?30?%;height:%?80?%;line-height:%?80?%}.login-item-button[data-v-7c3dbaea]{width:%?670?%;text-align:center;background-color:#7eb5fa;border-radius:%?80?%;height:%?80?%;line-height:%?80?%;color:#fff;font-size:%?32?%;margin:%?30?% auto}.register[data-v-7c3dbaea]{font-weight:700;font-size:20px;color:#a7a7a7;font-family:serif;margin-top:10px}',""]),e.exports=t}}]);