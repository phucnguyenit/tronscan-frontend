webpackJsonp([34],{2547:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(0),p=n(d),c=a(1),s=n(c),u={className:s.default.string,onloadCallbackName:s.default.string,elementID:s.default.string,onloadCallback:s.default.func,verifyCallback:s.default.func,expiredCallback:s.default.func,render:s.default.oneOf(["onload","explicit"]),sitekey:s.default.string,theme:s.default.oneOf(["light","dark"]),type:s.default.string,verifyCallbackName:s.default.string,expiredCallbackName:s.default.string,size:s.default.oneOf(["invisible","compact","normal"]),tabindex:s.default.string,hl:s.default.string,badge:s.default.oneOf(["bottomright","bottomleft","inline"])},f={elementID:"g-recaptcha",onloadCallback:void 0,onloadCallbackName:"onloadCallback",verifyCallback:void 0,verifyCallbackName:"verifyCallback",expiredCallback:void 0,expiredCallbackName:"expiredCallback",render:"onload",theme:"light",type:"image",size:"normal",tabindex:"0",hl:"en",badge:"bottomright"},b=function(){return"undefined"!==typeof window&&"undefined"!==typeof window.grecaptcha&&"function"===typeof window.grecaptcha.render},y=void 0,h=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.updateReadyState=function(){b()&&(a.setState({ready:!0}),clearInterval(y))},a.renderGrecaptcha=function(){a.setState({widget:grecaptcha.render(a.props.elementID,{sitekey:a.props.sitekey,callback:a.props.verifyCallback||void 0,theme:a.props.theme,type:a.props.type,size:a.props.size,tabindex:a.props.tabindex,hl:a.props.hl,badge:a.props.badge,"expired-callback":a.props.expiredCallback||void 0})}),a.props.onloadCallback&&a.props.onloadCallback()},a.reset=a.reset.bind(a),a.state={ready:b(),widget:null},a.state.ready||(y=setInterval(a.updateReadyState,1e3)),a}return o(t,e),i(t,[{key:"componentDidMount",value:function(){this.state.ready&&this.renderGrecaptcha()}},{key:"componentDidUpdate",value:function(e,t){var a=this.props,n=a.render,r=a.onloadCallback;"explicit"===n&&r&&this.state.ready&&!t.ready&&this.renderGrecaptcha()}},{key:"componentWillUnmount",value:function(){clearInterval(y)}},{key:"reset",value:function(){var e=this.state,t=e.ready,a=e.widget;t&&null!==a&&grecaptcha.reset(a)}},{key:"execute",value:function(){var e=this.state,t=e.ready,a=e.widget;t&&null!==a&&grecaptcha.execute(a)}},{key:"render",value:function(){return"explicit"===this.props.render&&this.props.onloadCallback?p.default.createElement("div",{id:this.props.elementID,"data-onloadcallbackname":this.props.onloadCallbackName,"data-verifycallbackname":this.props.verifyCallbackName}):p.default.createElement("div",{id:this.props.elementID,"data-sitekey":this.props.sitekey,"data-theme":this.props.theme,"data-type":this.props.type,"data-size":this.props.size,"data-badge":this.props.badge,"data-tabindex":this.props.tabindex})}}]),t}(d.Component);t.default=h,h.propTypes=u,h.defaultProps=f}});