(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"4VFr":function(t,e,i){"use strict";i.r(e);var a=i("L2JU");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={data:function(){return{status:"",activeField:""}},computed:r({},Object(a.c)("ChaptersSingle",["entry","loading"])),beforeDestroy:function(){this.resetState()},watch:{"$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchEditData(this.$route.params.id)}}},methods:r(r({},Object(a.b)("ChaptersSingle",["fetchEditData","updateData","resetState","setTitle"])),{},{updateTitle:function(t){this.setTitle(t.target.value)},submitForm:function(){var t=this;this.updateData().then((function(){t.$router.push({name:"chapters.index"}),t.$eventHub.$emit("update-success")})).catch((function(e){t.status="failed",_.delay((function(){t.status=""}),3e3)}))},focusField:function(t){this.activeField=t},clearFocus:function(){this.activeField=""}})},o=i("KHd+"),l=Object(o.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid"},[i("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"card"},[t._m(0),t._v(" "),i("div",{staticClass:"card-body"},[i("back-button")],1),t._v(" "),i("div",{staticClass:"card-body"},[i("bootstrap-alert"),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.title,"is-focused":"title"==t.activeField}},[i("label",{staticClass:"bmd-label-floating required"},[t._v("သဒ္ဒါကဏ္ဍ")]),t._v(" "),i("input",{staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.entry.title},on:{input:t.updateTitle,focus:function(e){return t.focusField("title")},blur:t.clearFocus}})])])])],1),t._v(" "),i("div",{staticClass:"card-footer"},[i("vue-button-spinner",{staticClass:"btn-primary",attrs:{status:t.status,isLoading:t.loading,disabled:t.loading}},[t._v("\n              Save\n            ")])],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header card-header-primary card-header-icon"},[e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("edit")])]),this._v(" "),e("h4",{staticClass:"card-title"},[this._v("Edit သဒ္ဒါကဏ္ဍ")])])}],!1,null,null,null);e.default=l.exports}}]);