function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
function wrap(wrapper, fn) {
  return (e) => {
    if (typeof fn === "function") {
      fn(e);
    }
    if (!e.cancelBubble) {
      wrapper(e);
    }
  };
}
function listener(vnode, key) {
  return vnode.data.on[key] || vnode.componentOptions && vnode.componentOptions.listeners && vnode.componentOptions.listeners[key];
}
const __vue2_script$1 = {
  functional: true,
  render(h, context) {
    return context.children.filter((vnode) => !!vnode.tag).map((vnode, i) => {
      vnode.data = Object.assign({ staticClass: void 0 }, vnode.data);
      if (!vnode.data.attrs) {
        vnode.data.attrs = {};
      }
      if (!vnode.data.on) {
        vnode.data.on = {};
      }
      vnode.data.on.click = wrap((e) => {
        context.parent.$emit("click-item", e, vnode);
      }, listener(vnode, "click"));
      const active = context.children.indexOf(vnode) === context.children.length - 1;
      const children = vnode.componentOptions ? vnode.componentOptions.children : vnode.children;
      return h("li", {
        class: {
          active,
          "breadcrumb-item": true
        }
      }, [!active ? vnode : children]);
    });
  }
};
let __vue2_render, __vue2_staticRenderFns;
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(__vue2_script$1, __vue2_render, __vue2_staticRenderFns, false, __vue2_injectStyles$1, null, null, null);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
var BreadcrumbItems = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [_c("ol", { staticClass: "breadcrumb" }, [_c("breadcrumb-items", [_vm._t("default")], 2)], 1)]);
};
var staticRenderFns = [];
const __vue2_script = {
  components: {
    BreadcrumbItems
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var Breadcrumb = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { Breadcrumb, BreadcrumbItems };
