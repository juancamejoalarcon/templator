var oc = Object.defineProperty;
var ic = (n, e, t) => e in n ? oc(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var ft = (n, e, t) => (ic(n, typeof e != "symbol" ? e + "" : e, t), t);
var sc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Li(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Ao() {
}
Object.assign(Ao, {
  default: Ao,
  register: Ao,
  revert: function() {
  },
  __esModule: !0
});
Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(n) {
  const e = (this.document || this.ownerDocument).querySelectorAll(n);
  let t = e.length;
  for (; --t >= 0 && e.item(t) !== this; )
    ;
  return t > -1;
});
Element.prototype.closest || (Element.prototype.closest = function(n) {
  let e = this;
  if (!document.documentElement.contains(e))
    return null;
  do {
    if (e.matches(n))
      return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null);
  return null;
});
Element.prototype.prepend || (Element.prototype.prepend = function(n) {
  const e = document.createDocumentFragment();
  Array.isArray(n) || (n = [n]), n.forEach((t) => {
    const o = t instanceof Node;
    e.appendChild(o ? t : document.createTextNode(t));
  }), this.insertBefore(e, this.firstChild);
});
Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(n) {
  n = arguments.length === 0 ? !0 : !!n;
  const e = this.parentNode, t = window.getComputedStyle(e, null), o = parseInt(t.getPropertyValue("border-top-width")), i = parseInt(t.getPropertyValue("border-left-width")), s = this.offsetTop - e.offsetTop < e.scrollTop, r = this.offsetTop - e.offsetTop + this.clientHeight - o > e.scrollTop + e.clientHeight, a = this.offsetLeft - e.offsetLeft < e.scrollLeft, u = this.offsetLeft - e.offsetLeft + this.clientWidth - i > e.scrollLeft + e.clientWidth, l = s && !r;
  (s || r) && n && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o + this.clientHeight / 2), (a || u) && n && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - i + this.clientWidth / 2), (s || r || a || u) && !n && this.scrollIntoView(l);
});
window.requestIdleCallback = window.requestIdleCallback || function(n) {
  const e = Date.now();
  return setTimeout(function() {
    n({
      didTimeout: !1,
      timeRemaining: function() {
        return Math.max(0, 50 - (Date.now() - e));
      }
    });
  }, 1);
};
window.cancelIdleCallback = window.cancelIdleCallback || function(n) {
  clearTimeout(n);
};
let rc = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var Kr = /* @__PURE__ */ ((n) => (n.VERBOSE = "VERBOSE", n.INFO = "INFO", n.WARN = "WARN", n.ERROR = "ERROR", n))(Kr || {});
const q = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
}, ac = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
function An(n, e, t = "log", o, i = "color: inherit") {
  if (!("console" in window) || !window.console[t])
    return;
  const s = ["info", "log", "warn", "error"].includes(t), r = [];
  switch (An.logLevel) {
    case "ERROR":
      if (t !== "error")
        return;
      break;
    case "WARN":
      if (!["error", "warn"].includes(t))
        return;
      break;
    case "INFO":
      if (!s || n)
        return;
      break;
  }
  o && r.push(o);
  const a = "Editor.js 2.29.0";
  n && (s ? (r.unshift(`line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`, i), e = `%c${a}%c ${e}`) : e = `( ${a} )${e}`);
  try {
    s ? o ? console[t](`${e} %o`, ...r) : console[t](e, ...r) : console[t](e);
  } catch {
  }
}
An.logLevel = "VERBOSE";
function uc(n) {
  An.logLevel = n;
}
const X = An.bind(window, !1), je = An.bind(window, !0);
function Ot(n) {
  return Object.prototype.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function ie(n) {
  return Ot(n) === "function" || Ot(n) === "asyncfunction";
}
function ye(n) {
  return Ot(n) === "object";
}
function wt(n) {
  return Ot(n) === "string";
}
function lc(n) {
  return Ot(n) === "boolean";
}
function Os(n) {
  return Ot(n) === "number";
}
function Ds(n) {
  return Ot(n) === "undefined";
}
function Fe(n) {
  return n ? Object.keys(n).length === 0 && n.constructor === Object : !0;
}
function Zr(n) {
  return n > 47 && n < 58 || // number keys
  n === 32 || n === 13 || // Space bar & return key(s)
  n === 229 || // processing key input for certain languages — Chinese, Japanese, etc.
  n > 64 && n < 91 || // letter keys
  n > 95 && n < 112 || // Numpad keys
  n > 185 && n < 193 || // ;=,-./` (in order)
  n > 218 && n < 223;
}
async function cc(n, e = () => {
}, t = () => {
}) {
  async function o(i, s, r) {
    try {
      await i.function(i.data), await s(Ds(i.data) ? {} : i.data);
    } catch {
      r(Ds(i.data) ? {} : i.data);
    }
  }
  return n.reduce(async (i, s) => (await i, o(s, e, t)), Promise.resolve());
}
function Yr(n) {
  return Array.prototype.slice.call(n);
}
function Jn(n, e) {
  return function() {
    const t = this, o = arguments;
    window.setTimeout(() => n.apply(t, o), e);
  };
}
function dc(n) {
  return n.name.split(".").pop();
}
function hc(n) {
  return /^[-\w]+\/([-+\w]+|\*)$/.test(n);
}
function Ps(n, e, t) {
  let o;
  return (...i) => {
    const s = this, r = () => {
      o = null, t || n.apply(s, i);
    }, a = t && !o;
    window.clearTimeout(o), o = window.setTimeout(r, e), a && n.apply(s, i);
  };
}
function Qo(n, e, t = void 0) {
  let o, i, s, r = null, a = 0;
  t || (t = {});
  const u = function() {
    a = t.leading === !1 ? 0 : Date.now(), r = null, s = n.apply(o, i), r || (o = i = null);
  };
  return function() {
    const l = Date.now();
    !a && t.leading === !1 && (a = l);
    const c = e - (l - a);
    return o = this, i = arguments, c <= 0 || c > e ? (r && (clearTimeout(r), r = null), a = l, s = n.apply(o, i), r || (o = i = null)) : !r && t.trailing !== !1 && (r = setTimeout(u, c)), s;
  };
}
function pc() {
  const n = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, e = Object.keys(n).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
  return e && (n[e] = !0), n;
}
function Qt(n) {
  return n[0].toUpperCase() + n.slice(1);
}
function ei(n, ...e) {
  if (!e.length)
    return n;
  const t = e.shift();
  if (ye(n) && ye(t))
    for (const o in t)
      ye(t[o]) ? (n[o] || Object.assign(n, { [o]: {} }), ei(n[o], t[o])) : Object.assign(n, { [o]: t[o] });
  return ei(n, ...e);
}
function po(n) {
  const e = pc();
  return n = n.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), e.mac ? n = n.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : n = n.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), n;
}
function fc(n) {
  try {
    return new URL(n).href;
  } catch {
  }
  return n.substring(0, 2) === "//" ? window.location.protocol + n : window.location.origin + n;
}
function gc() {
  return rc(10);
}
function bc(n) {
  window.open(n, "_blank");
}
function mc(n = "") {
  return `${n}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function ti(n, e, t) {
  const o = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
  n && je(o, "warn");
}
function on(n, e, t) {
  const o = t.value ? "value" : "get", i = t[o], s = `#${e}Cache`;
  if (t[o] = function(...r) {
    return this[s] === void 0 && (this[s] = i.apply(this, ...r)), this[s];
  }, o === "get" && t.set) {
    const r = t.set;
    t.set = function(a) {
      delete n[s], r.apply(this, a);
    };
  }
  return t;
}
const Xr = 650;
function Mt() {
  return window.matchMedia(`(max-width: ${Xr}px)`).matches;
}
const Hs = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function xc(n, e) {
  const t = Array.isArray(n) || ye(n), o = Array.isArray(e) || ye(e);
  return t || o ? JSON.stringify(n) === JSON.stringify(e) : n === e;
}
let m = class Ee {
  /**
   * Check if passed tag has no closed tag
   *
   * @param {HTMLElement} tag - element to check
   * @returns {boolean}
   */
  static isSingleTag(e) {
    return e.tagName && [
      "AREA",
      "BASE",
      "BR",
      "COL",
      "COMMAND",
      "EMBED",
      "HR",
      "IMG",
      "INPUT",
      "KEYGEN",
      "LINK",
      "META",
      "PARAM",
      "SOURCE",
      "TRACK",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Check if element is BR or WBR
   *
   * @param {HTMLElement} element - element to check
   * @returns {boolean}
   */
  static isLineBreakTag(e) {
    return e && e.tagName && [
      "BR",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Helper for making Elements with class name and attributes
   *
   * @param  {string} tagName - new Element tag name
   * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
   * @param  {object} [attributes] - any attributes
   * @returns {HTMLElement}
   */
  static make(e, t = null, o = {}) {
    const i = document.createElement(e);
    Array.isArray(t) ? i.classList.add(...t) : t && i.classList.add(t);
    for (const s in o)
      Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
    return i;
  }
  /**
   * Creates Text Node with the passed content
   *
   * @param {string} content - text content
   * @returns {Text}
   */
  static text(e) {
    return document.createTextNode(e);
  }
  /**
   * Append one or several elements to the parent
   *
   * @param  {Element|DocumentFragment} parent - where to append
   * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
   */
  static append(e, t) {
    Array.isArray(t) ? t.forEach((o) => e.appendChild(o)) : e.appendChild(t);
  }
  /**
   * Append element or a couple to the beginning of the parent elements
   *
   * @param {Element} parent - where to append
   * @param {Element|Element[]} elements - element or elements list
   */
  static prepend(e, t) {
    Array.isArray(t) ? (t = t.reverse(), t.forEach((o) => e.prepend(o))) : e.prepend(t);
  }
  /**
   * Swap two elements in parent
   *
   * @param {HTMLElement} el1 - from
   * @param {HTMLElement} el2 - to
   * @deprecated
   */
  static swap(e, t) {
    const o = document.createElement("div"), i = e.parentNode;
    i.insertBefore(o, e), i.insertBefore(e, t), i.insertBefore(t, o), i.removeChild(o);
  }
  /**
   * Selector Decorator
   *
   * Returns first match
   *
   * @param {Element} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {Element}
   */
  static find(e = document, t) {
    return e.querySelector(t);
  }
  /**
   * Get Element by Id
   *
   * @param {string} id - id to find
   * @returns {HTMLElement | null}
   */
  static get(e) {
    return document.getElementById(e);
  }
  /**
   * Selector Decorator.
   *
   * Returns all matches
   *
   * @param {Element|Document} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {NodeList}
   */
  static findAll(e = document, t) {
    return e.querySelectorAll(t);
  }
  /**
   * Returns CSS selector for all text inputs
   */
  static get allInputsSelector() {
    return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map((e) => `input[type="${e}"]`).join(", ");
  }
  /**
   * Find all contenteditable, textarea and editable input elements passed holder contains
   *
   * @param holder - element where to find inputs
   */
  static findAllInputs(e) {
    return Yr(e.querySelectorAll(Ee.allInputsSelector)).reduce((t, o) => Ee.isNativeInput(o) || Ee.containsOnlyInlineElements(o) ? [...t, o] : [...t, ...Ee.getDeepestBlockElements(o)], []);
  }
  /**
   * Search for deepest node which is Leaf.
   * Leaf is the vertex that doesn't have any child nodes
   *
   * @description Method recursively goes throw the all Node until it finds the Leaf
   * @param {Node} node - root Node. From this vertex we start Deep-first search
   *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
   * @param {boolean} [atLast] - find last text node
   * @returns {Node} - it can be text Node or Element Node, so that caret will able to work with it
   */
  static getDeepestNode(e, t = !1) {
    const o = t ? "lastChild" : "firstChild", i = t ? "previousSibling" : "nextSibling";
    if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
      let s = e[o];
      if (Ee.isSingleTag(s) && !Ee.isNativeInput(s) && !Ee.isLineBreakTag(s))
        if (s[i])
          s = s[i];
        else if (s.parentNode[i])
          s = s.parentNode[i];
        else
          return s.parentNode;
      return this.getDeepestNode(s, t);
    }
    return e;
  }
  /**
   * Check if object is DOM node
   *
   * @param {*} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isElement(e) {
    return Os(e) ? !1 : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  /**
   * Check if object is DocumentFragment node
   *
   * @param {object} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isFragment(e) {
    return Os(e) ? !1 : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
  }
  /**
   * Check if passed element is contenteditable
   *
   * @param {HTMLElement} element - html element to check
   * @returns {boolean}
   */
  static isContentEditable(e) {
    return e.contentEditable === "true";
  }
  /**
   * Checks target if it is native input
   *
   * @param {*} target - HTML element or string
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isNativeInput(e) {
    const t = [
      "INPUT",
      "TEXTAREA"
    ];
    return e && e.tagName ? t.includes(e.tagName) : !1;
  }
  /**
   * Checks if we can set caret
   *
   * @param {HTMLElement} target - target to check
   * @returns {boolean}
   */
  static canSetCaret(e) {
    let t = !0;
    if (Ee.isNativeInput(e))
      switch (e.type) {
        case "file":
        case "checkbox":
        case "radio":
        case "hidden":
        case "submit":
        case "button":
        case "image":
        case "reset":
          t = !1;
          break;
      }
    else
      t = Ee.isContentEditable(e);
    return t;
  }
  /**
   * Checks node if it is empty
   *
   * @description Method checks simple Node without any childs for emptiness
   * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean} true if it is empty
   */
  static isNodeEmpty(e, t) {
    let o;
    return this.isSingleTag(e) && !this.isLineBreakTag(e) ? !1 : (this.isElement(e) && this.isNativeInput(e) ? o = e.value : o = e.textContent.replace("​", ""), t && (o = o.replace(new RegExp(t, "g"), "")), o.trim().length === 0);
  }
  /**
   * checks node if it is doesn't have any child nodes
   *
   * @param {Node} node - node to check
   * @returns {boolean}
   */
  static isLeaf(e) {
    return e ? e.childNodes.length === 0 : !1;
  }
  /**
   * breadth-first search (BFS)
   * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
   *
   * @description Pushes to stack all DOM leafs and checks for emptiness
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean}
   */
  static isEmpty(e, t) {
    e.normalize();
    const o = [e];
    for (; o.length > 0; )
      if (e = o.shift(), !!e) {
        if (this.isLeaf(e) && !this.isNodeEmpty(e, t))
          return !1;
        e.childNodes && o.push(...Array.from(e.childNodes));
      }
    return !0;
  }
  /**
   * Check if string contains html elements
   *
   * @param {string} str - string to check
   * @returns {boolean}
   */
  static isHTMLString(e) {
    const t = Ee.make("div");
    return t.innerHTML = e, t.childElementCount > 0;
  }
  /**
   * Return length of node`s text content
   *
   * @param {Node} node - node with content
   * @returns {number}
   */
  static getContentLength(e) {
    return Ee.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
  }
  /**
   * Return array of names of block html elements
   *
   * @returns {string[]}
   */
  static get blockElements() {
    return [
      "address",
      "article",
      "aside",
      "blockquote",
      "canvas",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "noscript",
      "ol",
      "output",
      "p",
      "pre",
      "ruby",
      "section",
      "table",
      "tbody",
      "thead",
      "tr",
      "tfoot",
      "ul",
      "video"
    ];
  }
  /**
   * Check if passed content includes only inline elements
   *
   * @param {string|HTMLElement} data - element or html string
   * @returns {boolean}
   */
  static containsOnlyInlineElements(e) {
    let t;
    wt(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    const o = (i) => !Ee.blockElements.includes(i.tagName.toLowerCase()) && Array.from(i.children).every(o);
    return Array.from(t.children).every(o);
  }
  /**
   * Find and return all block elements in the passed parent (including subtree)
   *
   * @param {HTMLElement} parent - root element
   * @returns {HTMLElement[]}
   */
  static getDeepestBlockElements(e) {
    return Ee.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((t, o) => [...t, ...Ee.getDeepestBlockElements(o)], []);
  }
  /**
   * Helper for get holder from {string} or return HTMLElement
   *
   * @param {string | HTMLElement} element - holder's id or holder's HTML Element
   * @returns {HTMLElement}
   */
  static getHolder(e) {
    return wt(e) ? document.getElementById(e) : e;
  }
  /**
   * Returns true if element is anchor (is A tag)
   *
   * @param {Element} element - element to check
   * @returns {boolean}
   */
  static isAnchor(e) {
    return e.tagName.toLowerCase() === "a";
  }
  /**
   * Return element's offset related to the document
   *
   * @todo handle case when editor initialized in scrollable popup
   * @param el - element to compute offset
   */
  static offset(e) {
    const t = e.getBoundingClientRect(), o = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop, s = t.top + i, r = t.left + o;
    return {
      top: s,
      left: r,
      bottom: s + t.height,
      right: r + t.width
    };
  }
};
const vc = {
  blockTunes: {
    toggler: {
      "Click to tune": "",
      "or drag to move": ""
    }
  },
  inlineToolbar: {
    converter: {
      "Convert to": ""
    }
  },
  toolbar: {
    toolbox: {
      Add: ""
    }
  },
  popover: {
    Filter: "",
    "Nothing found": ""
  }
}, yc = {
  Text: "",
  Link: "",
  Bold: "",
  Italic: ""
}, wc = {
  link: {
    "Add a link": ""
  },
  stub: {
    "The block can not be displayed correctly.": ""
  }
}, kc = {
  delete: {
    Delete: "",
    "Click to delete": ""
  },
  moveUp: {
    "Move up": ""
  },
  moveDown: {
    "Move down": ""
  }
}, Jr = {
  ui: vc,
  toolNames: yc,
  tools: wc,
  blockTunes: kc
}, Gt = class {
  /**
   * Type-safe translation for internal UI texts:
   * Perform translation of the string by namespace and a key
   *
   * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
   * @param internalNamespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static ui(n, e) {
    return Gt._t(n, e);
  }
  /**
   * Translate for external strings that is not presented in default dictionary.
   * For example, for user-specified tool names
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static t(n, e) {
    return Gt._t(n, e);
  }
  /**
   * Adjust module for using external dictionary
   *
   * @param dictionary - new messages list to override default
   */
  static setDictionary(n) {
    Gt.currentDictionary = n;
  }
  /**
   * Perform translation both for internal and external namespaces
   * If there is no translation found, returns passed key as a translated message
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static _t(n, e) {
    const t = Gt.getNamespace(n);
    return !t || !t[e] ? e : t[e];
  }
  /**
   * Find messages section by namespace path
   *
   * @param namespace - path to section
   */
  static getNamespace(n) {
    return n.split(".").reduce((e, t) => !e || !Object.keys(e).length ? {} : e[t], Gt.currentDictionary);
  }
};
let Me = Gt;
Me.currentDictionary = Jr;
class Qr extends Error {
}
class fo {
  constructor() {
    this.subscribers = {};
  }
  /**
   * Subscribe any event on callback
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  on(e, t) {
    e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(t);
  }
  /**
   * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  once(e, t) {
    e in this.subscribers || (this.subscribers[e] = []);
    const o = (i) => {
      const s = t(i), r = this.subscribers[e].indexOf(o);
      return r !== -1 && this.subscribers[e].splice(r, 1), s;
    };
    this.subscribers[e].push(o);
  }
  /**
   * Emit callbacks with passed data
   *
   * @param eventName - event name
   * @param data - subscribers get this data when they were fired
   */
  emit(e, t) {
    Fe(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((o, i) => {
      const s = i(o);
      return s !== void 0 ? s : o;
    }, t);
  }
  /**
   * Unsubscribe callback from event
   *
   * @param eventName - event name
   * @param callback - event handler
   */
  off(e, t) {
    if (this.subscribers[e] === void 0) {
      console.warn(`EventDispatcher .off(): there is no subscribers for event "${e.toString()}". Probably, .off() called before .on()`);
      return;
    }
    for (let o = 0; o < this.subscribers[e].length; o++)
      if (this.subscribers[e][o] === t) {
        delete this.subscribers[e][o];
        break;
      }
  }
  /**
   * Destroyer
   * clears subscribers list
   */
  destroy() {
    this.subscribers = {};
  }
}
function At(n) {
  Object.setPrototypeOf(this, {
    /**
     * Block id
     *
     * @returns {string}
     */
    get id() {
      return n.id;
    },
    /**
     * Tool name
     *
     * @returns {string}
     */
    get name() {
      return n.name;
    },
    /**
     * Tool config passed on Editor's initialization
     *
     * @returns {ToolConfig}
     */
    get config() {
      return n.config;
    },
    /**
     * .ce-block element, that wraps plugin contents
     *
     * @returns {HTMLElement}
     */
    get holder() {
      return n.holder;
    },
    /**
     * True if Block content is empty
     *
     * @returns {boolean}
     */
    get isEmpty() {
      return n.isEmpty;
    },
    /**
     * True if Block is selected with Cross-Block selection
     *
     * @returns {boolean}
     */
    get selected() {
      return n.selected;
    },
    /**
     * Set Block's stretch state
     *
     * @param {boolean} state — state to set
     */
    set stretched(e) {
      n.stretched = e;
    },
    /**
     * True if Block is stretched
     *
     * @returns {boolean}
     */
    get stretched() {
      return n.stretched;
    },
    /**
     * True if Block has inputs to be focused
     */
    get focusable() {
      return n.focusable;
    },
    /**
     * Call Tool method with errors handler under-the-hood
     *
     * @param {string} methodName - method to call
     * @param {object} param - object with parameters
     * @returns {unknown}
     */
    call(e, t) {
      return n.call(e, t);
    },
    /**
     * Save Block content
     *
     * @returns {Promise<void|SavedData>}
     */
    save() {
      return n.save();
    },
    /**
     * Validate Block data
     *
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>}
     */
    validate(e) {
      return n.validate(e);
    },
    /**
     * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
     * Can be useful for block changes invisible for editor core.
     */
    dispatchChange() {
      n.dispatchChange();
    }
  });
}
class Ni {
  constructor() {
    this.allListeners = [];
  }
  /**
   * Assigns event listener on element and returns unique identifier
   *
   * @param {EventTarget} element - DOM element that needs to be listened
   * @param {string} eventType - event type
   * @param {Function} handler - method that will be fired on event
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  on(e, t, o, i = !1) {
    const s = mc("l"), r = {
      id: s,
      element: e,
      eventType: t,
      handler: o,
      options: i
    };
    if (!this.findOne(e, t, o))
      return this.allListeners.push(r), e.addEventListener(t, o, i), s;
  }
  /**
   * Removes event listener from element
   *
   * @param {EventTarget} element - DOM element that we removing listener
   * @param {string} eventType - event type
   * @param {Function} handler - remove handler, if element listens several handlers on the same event type
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  off(e, t, o, i) {
    const s = this.findAll(e, t, o);
    s.forEach((r, a) => {
      const u = this.allListeners.indexOf(s[a]);
      u > -1 && (this.allListeners.splice(u, 1), r.element.removeEventListener(r.eventType, r.handler, r.options));
    });
  }
  /**
   * Removes listener by id
   *
   * @param {string} id - listener identifier
   */
  offById(e) {
    const t = this.findById(e);
    t && t.element.removeEventListener(t.eventType, t.handler, t.options);
  }
  /**
   * Finds and returns first listener by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} [eventType] - event type
   * @param {Function} [handler] - event handler
   * @returns {ListenerData|null}
   */
  findOne(e, t, o) {
    const i = this.findAll(e, t, o);
    return i.length > 0 ? i[0] : null;
  }
  /**
   * Return all stored listeners by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} eventType - event type
   * @param {Function} handler - event handler
   * @returns {ListenerData[]}
   */
  findAll(e, t, o) {
    let i;
    const s = e ? this.findByEventTarget(e) : [];
    return e && t && o ? i = s.filter((r) => r.eventType === t && r.handler === o) : e && t ? i = s.filter((r) => r.eventType === t) : i = s, i;
  }
  /**
   * Removes all listeners
   */
  removeAll() {
    this.allListeners.map((e) => {
      e.element.removeEventListener(e.eventType, e.handler, e.options);
    }), this.allListeners = [];
  }
  /**
   * Module cleanup on destruction
   */
  destroy() {
    this.removeAll();
  }
  /**
   * Search method: looks for listener by passed element
   *
   * @param {EventTarget} element - searching element
   * @returns {Array} listeners that found on element
   */
  findByEventTarget(e) {
    return this.allListeners.filter((t) => {
      if (t.element === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed event type
   *
   * @param {string} eventType - event type
   * @returns {ListenerData[]} listeners that found on element
   */
  findByType(e) {
    return this.allListeners.filter((t) => {
      if (t.eventType === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed handler
   *
   * @param {Function} handler - event handler
   * @returns {ListenerData[]} listeners that found on element
   */
  findByHandler(e) {
    return this.allListeners.filter((t) => {
      if (t.handler === e)
        return t;
    });
  }
  /**
   * Returns listener data found by id
   *
   * @param {string} id - listener identifier
   * @returns {ListenerData}
   */
  findById(e) {
    return this.allListeners.find((t) => t.id === e);
  }
}
let K = class ea {
  /**
   * @class
   * @param options - Module options
   * @param options.config - Module config
   * @param options.eventsDispatcher - Common event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    if (this.nodes = {}, this.listeners = new Ni(), this.readOnlyMutableListeners = {
      /**
       * Assigns event listener on DOM element and pushes into special array that might be removed
       *
       * @param {EventTarget} element - DOM Element
       * @param {string} eventType - Event name
       * @param {Function} handler - Event handler
       * @param {boolean|AddEventListenerOptions} options - Listening options
       */
      on: (o, i, s, r = !1) => {
        this.mutableListenerIds.push(
          this.listeners.on(o, i, s, r)
        );
      },
      /**
       * Clears all mutable listeners
       */
      clearAll: () => {
        for (const o of this.mutableListenerIds)
          this.listeners.offById(o);
        this.mutableListenerIds = [];
      }
    }, this.mutableListenerIds = [], new.target === ea)
      throw new TypeError("Constructors for abstract class Module are not allowed.");
    this.config = e, this.eventsDispatcher = t;
  }
  /**
   * Editor modules setter
   *
   * @param {EditorModules} Editor - Editor's Modules
   */
  set state(e) {
    this.Editor = e;
  }
  /**
   * Remove memorized nodes
   */
  removeAllNodes() {
    for (const e in this.nodes) {
      const t = this.nodes[e];
      t instanceof HTMLElement && t.remove();
    }
  }
  /**
   * Returns true if current direction is RTL (Right-To-Left)
   */
  get isRtl() {
    return this.config.i18n.direction === "rtl";
  }
};
class _ {
  constructor() {
    this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
  }
  /**
   * Editor styles
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  static get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorZone: "codex-editor__redactor"
    };
  }
  /**
   * Returns selected anchor
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
   *
   * @returns {Node|null}
   */
  static get anchorNode() {
    const e = window.getSelection();
    return e ? e.anchorNode : null;
  }
  /**
   * Returns selected anchor element
   *
   * @returns {Element|null}
   */
  static get anchorElement() {
    const e = window.getSelection();
    if (!e)
      return null;
    const t = e.anchorNode;
    return t ? m.isElement(t) ? t : t.parentElement : null;
  }
  /**
   * Returns selection offset according to the anchor node
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
   *
   * @returns {number|null}
   */
  static get anchorOffset() {
    const e = window.getSelection();
    return e ? e.anchorOffset : null;
  }
  /**
   * Is current selection range collapsed
   *
   * @returns {boolean|null}
   */
  static get isCollapsed() {
    const e = window.getSelection();
    return e ? e.isCollapsed : null;
  }
  /**
   * Check current selection if it is at Editor's zone
   *
   * @returns {boolean}
   */
  static get isAtEditor() {
    return this.isSelectionAtEditor(_.get());
  }
  /**
   * Check if passed selection is at Editor's zone
   *
   * @param selection - Selection object to check
   */
  static isSelectionAtEditor(e) {
    if (!e)
      return !1;
    let t = e.anchorNode || e.focusNode;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${_.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Check if passed range at Editor zone
   *
   * @param range - range to check
   */
  static isRangeAtEditor(e) {
    if (!e)
      return;
    let t = e.startContainer;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${_.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Methods return boolean that true if selection exists on the page
   */
  static get isSelectionExists() {
    return !!_.get().anchorNode;
  }
  /**
   * Return first range
   *
   * @returns {Range|null}
   */
  static get range() {
    return this.getRangeFromSelection(this.get());
  }
  /**
   * Returns range from passed Selection object
   *
   * @param selection - Selection object to get Range from
   */
  static getRangeFromSelection(e) {
    return e && e.rangeCount ? e.getRangeAt(0) : null;
  }
  /**
   * Calculates position and size of selected text
   *
   * @returns {DOMRect | ClientRect}
   */
  static get rect() {
    let e = document.selection, t, o = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    if (e && e.type !== "Control")
      return e = e, t = e.createRange(), o.x = t.boundingLeft, o.y = t.boundingTop, o.width = t.boundingWidth, o.height = t.boundingHeight, o;
    if (!window.getSelection)
      return X("Method window.getSelection is not supported", "warn"), o;
    if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount))
      return X("Method SelectionUtils.rangeCount is not supported", "warn"), o;
    if (e.rangeCount === 0)
      return o;
    if (t = e.getRangeAt(0).cloneRange(), t.getBoundingClientRect && (o = t.getBoundingClientRect()), o.x === 0 && o.y === 0) {
      const i = document.createElement("span");
      if (i.getBoundingClientRect) {
        i.appendChild(document.createTextNode("​")), t.insertNode(i), o = i.getBoundingClientRect();
        const s = i.parentNode;
        s.removeChild(i), s.normalize();
      }
    }
    return o;
  }
  /**
   * Returns selected text as String
   *
   * @returns {string}
   */
  static get text() {
    return window.getSelection ? window.getSelection().toString() : "";
  }
  /**
   * Returns window SelectionUtils
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
   *
   * @returns {Selection}
   */
  static get() {
    return window.getSelection();
  }
  /**
   * Set focus to contenteditable or native input element
   *
   * @param element - element where to set focus
   * @param offset - offset of cursor
   */
  static setCursor(e, t = 0) {
    const o = document.createRange(), i = window.getSelection();
    return m.isNativeInput(e) ? m.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t, e.getBoundingClientRect()) : void 0 : (o.setStart(e, t), o.setEnd(e, t), i.removeAllRanges(), i.addRange(o), o.getBoundingClientRect());
  }
  /**
   * Check if current range exists and belongs to container
   *
   * @param container - where range should be
   */
  static isRangeInsideContainer(e) {
    const t = _.range;
    return t === null ? !1 : e.contains(t.startContainer);
  }
  /**
   * Adds fake cursor to the current range
   */
  static addFakeCursor() {
    const e = _.range;
    if (e === null)
      return;
    const t = m.make("span", "codex-editor__fake-cursor");
    t.dataset.mutationFree = "true", e.collapse(), e.insertNode(t);
  }
  /**
   * Check if passed element contains a fake cursor
   *
   * @param el - where to check
   */
  static isFakeCursorInsideContainer(e) {
    return m.find(e, ".codex-editor__fake-cursor") !== null;
  }
  /**
   * Removes fake cursor from a container
   *
   * @param container - container to look for
   */
  static removeFakeCursor(e = document.body) {
    const t = m.find(e, ".codex-editor__fake-cursor");
    t && t.remove();
  }
  /**
   * Removes fake background
   */
  removeFakeBackground() {
    this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
  }
  /**
   * Sets fake background
   */
  setFakeBackground() {
    document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
  }
  /**
   * Save SelectionUtils's range
   */
  save() {
    this.savedSelectionRange = _.range;
  }
  /**
   * Restore saved SelectionUtils's range
   */
  restore() {
    if (!this.savedSelectionRange)
      return;
    const e = window.getSelection();
    e.removeAllRanges(), e.addRange(this.savedSelectionRange);
  }
  /**
   * Clears saved selection
   */
  clearSaved() {
    this.savedSelectionRange = null;
  }
  /**
   * Collapse current selection
   */
  collapseToEnd() {
    const e = window.getSelection(), t = document.createRange();
    t.selectNodeContents(e.focusNode), t.collapse(!1), e.removeAllRanges(), e.addRange(t);
  }
  /**
   * Looks ahead to find passed tag from current selection
   *
   * @param  {string} tagName       - tag to found
   * @param  {string} [className]   - tag's class name
   * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t, o = 10) {
    const i = window.getSelection();
    let s = null;
    return !i || !i.anchorNode || !i.focusNode ? null : ([
      /** the Node in which the selection begins */
      i.anchorNode,
      /** the Node in which the selection ends */
      i.focusNode
    ].forEach((r) => {
      let a = o;
      for (; a > 0 && r.parentNode && !(r.tagName === e && (s = r, t && r.classList && !r.classList.contains(t) && (s = null), s)); )
        r = r.parentNode, a--;
    }), s);
  }
  /**
   * Expands selection range to the passed parent node
   *
   * @param {HTMLElement} element - element which contents should be selected
   */
  expandToTag(e) {
    const t = window.getSelection();
    t.removeAllRanges();
    const o = document.createRange();
    o.selectNodeContents(e), t.addRange(o);
  }
}
function Sc(n, e) {
  const { type: t, target: o, addedNodes: i, removedNodes: s } = n;
  if (o === e)
    return !0;
  if (["characterData", "attributes"].includes(t)) {
    const u = o.nodeType === Node.TEXT_NODE ? o.parentNode : o;
    return e.contains(u);
  }
  const r = Array.from(i).some((u) => e.contains(u)), a = Array.from(s).some((u) => e.contains(u));
  return r || a;
}
const ni = "redactor dom changed", ta = "block changed", na = "fake cursor is about to be toggled", oa = "fake cursor have been set";
function Fs(n, e) {
  return n.mergeable && n.name === e.name;
}
function Cc(n, e) {
  const t = e == null ? void 0 : e.export;
  return ie(t) ? t(n) : wt(t) ? n[t] : (t !== void 0 && X("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), "");
}
function Ec(n, e) {
  const t = e == null ? void 0 : e.import;
  return ie(t) ? t(n) : wt(t) ? {
    [t]: n
  } : (t !== void 0 && X("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), {});
}
var ot = /* @__PURE__ */ ((n) => (n.APPEND_CALLBACK = "appendCallback", n.RENDERED = "rendered", n.MOVED = "moved", n.UPDATED = "updated", n.REMOVED = "removed", n.ON_PASTE = "onPaste", n))(ot || {});
class xe extends fo {
  /**
   * @param options - block constructor options
   * @param [options.id] - block's id. Will be generated if omitted.
   * @param options.data - Tool's initial data
   * @param options.tool — block's tool
   * @param options.api - Editor API module for pass it to the Block Tunes
   * @param options.readOnly - Read-Only flag
   * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
   */
  constructor({
    id: e = gc(),
    data: t,
    tool: o,
    api: i,
    readOnly: s,
    tunesData: r
  }, a) {
    super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = () => {
      this.dropInputsCache(), this.updateCurrentInput();
    }, this.didMutated = (u = void 0) => {
      const l = u === void 0, c = u instanceof InputEvent;
      !l && !c && this.detectToolRootChange(u);
      let d;
      l || c ? d = !0 : d = !(u.length > 0 && u.every((h) => {
        const { addedNodes: g, removedNodes: f, target: v } = h;
        return [
          ...Array.from(g),
          ...Array.from(f),
          v
        ].some((p) => (m.isElement(p) || (p = p.parentElement), p && p.closest('[data-mutation-free="true"]') !== null));
      })), d && (this.dropInputsCache(), this.updateCurrentInput(), this.call(
        "updated"
        /* UPDATED */
      ), this.emit("didMutated", this));
    }, this.name = o.name, this.id = e, this.settings = o.settings, this.config = o.settings.config || {}, this.api = i, this.editorEventBus = a || null, this.blockAPI = new At(this), this.tool = o, this.toolInstance = o.create(t, this.blockAPI, s), this.tunes = o.tunes, this.composeTunes(r), this.holder = this.compose(), window.requestIdleCallback(() => {
      this.watchBlockMutations(), this.addInputEvents();
    });
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      wrapper: "ce-block",
      wrapperStretched: "ce-block--stretched",
      content: "ce-block__content",
      selected: "ce-block--selected",
      dropTarget: "ce-block--drop-target"
    };
  }
  /**
   * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
   *
   * @returns {HTMLElement[]}
   */
  get inputs() {
    if (this.cachedInputs.length !== 0)
      return this.cachedInputs;
    const e = m.findAllInputs(this.holder);
    return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
  }
  /**
   * Return current Tool`s input
   *
   * @returns {HTMLElement}
   */
  get currentInput() {
    return this.inputs[this.inputIndex];
  }
  /**
   * Set input index to the passed element
   *
   * @param {HTMLElement | Node} element - HTML Element to set as current input
   */
  set currentInput(e) {
    const t = this.inputs.findIndex((o) => o === e || o.contains(e));
    t !== -1 && (this.inputIndex = t);
  }
  /**
   * Return first Tool`s input
   *
   * @returns {HTMLElement}
   */
  get firstInput() {
    return this.inputs[0];
  }
  /**
   * Return first Tool`s input
   *
   * @returns {HTMLElement}
   */
  get lastInput() {
    const e = this.inputs;
    return e[e.length - 1];
  }
  /**
   * Return next Tool`s input or undefined if it doesn't exist
   *
   * @returns {HTMLElement}
   */
  get nextInput() {
    return this.inputs[this.inputIndex + 1];
  }
  /**
   * Return previous Tool`s input or undefined if it doesn't exist
   *
   * @returns {HTMLElement}
   */
  get previousInput() {
    return this.inputs[this.inputIndex - 1];
  }
  /**
   * Get Block's JSON data
   *
   * @returns {object}
   */
  get data() {
    return this.save().then((e) => e && !Fe(e.data) ? e.data : {});
  }
  /**
   * Returns tool's sanitizer config
   *
   * @returns {object}
   */
  get sanitize() {
    return this.tool.sanitizeConfig;
  }
  /**
   * is block mergeable
   * We plugin have merge function then we call it mergeable
   *
   * @returns {boolean}
   */
  get mergeable() {
    return ie(this.toolInstance.merge);
  }
  /**
   * If Block contains inputs, it is focusable
   */
  get focusable() {
    return this.inputs.length !== 0;
  }
  /**
   * Check block for emptiness
   *
   * @returns {boolean}
   */
  get isEmpty() {
    const e = m.isEmpty(this.pluginsContent, "/"), t = !this.hasMedia;
    return e && t;
  }
  /**
   * Check if block has a media content such as images, iframe and other
   *
   * @returns {boolean}
   */
  get hasMedia() {
    const e = [
      "img",
      "iframe",
      "video",
      "audio",
      "source",
      "input",
      "textarea",
      "twitterwidget"
    ];
    return !!this.holder.querySelector(e.join(","));
  }
  /**
   * Set selected state
   * We don't need to mark Block as Selected when it is empty
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */
  set selected(e) {
    var t, o;
    this.holder.classList.toggle(xe.CSS.selected, e);
    const i = e === !0 && _.isRangeInsideContainer(this.holder), s = e === !1 && _.isFakeCursorInsideContainer(this.holder);
    (i || s) && ((t = this.editorEventBus) == null || t.emit(na, { state: e }), i ? _.addFakeCursor() : _.removeFakeCursor(this.holder), (o = this.editorEventBus) == null || o.emit(oa, { state: e }));
  }
  /**
   * Returns True if it is Selected
   *
   * @returns {boolean}
   */
  get selected() {
    return this.holder.classList.contains(xe.CSS.selected);
  }
  /**
   * Set stretched state
   *
   * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
   */
  set stretched(e) {
    this.holder.classList.toggle(xe.CSS.wrapperStretched, e);
  }
  /**
   * Return Block's stretched state
   *
   * @returns {boolean}
   */
  get stretched() {
    return this.holder.classList.contains(xe.CSS.wrapperStretched);
  }
  /**
   * Toggle drop target state
   *
   * @param {boolean} state - 'true' if block is drop target, false otherwise
   */
  set dropTarget(e) {
    this.holder.classList.toggle(xe.CSS.dropTarget, e);
  }
  /**
   * Returns Plugins content
   *
   * @returns {HTMLElement}
   */
  get pluginsContent() {
    return this.toolRenderedElement;
  }
  /**
   * Calls Tool's method
   *
   * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
   *
   * @param {string} methodName - method to call
   * @param {object} params - method argument
   */
  call(e, t) {
    if (ie(this.toolInstance[e])) {
      e === "appendCallback" && X(
        "`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead",
        "warn"
      );
      try {
        this.toolInstance[e].call(this.toolInstance, t);
      } catch (o) {
        X(`Error during '${e}' call: ${o.message}`, "error");
      }
    }
  }
  /**
   * Call plugins merge method
   *
   * @param {BlockToolData} data - data to merge
   */
  async mergeWith(e) {
    await this.toolInstance.merge(e);
  }
  /**
   * Extracts data from Block
   * Groups Tool's save processing time
   *
   * @returns {object}
   */
  async save() {
    const e = await this.toolInstance.save(this.pluginsContent), t = this.unavailableTunesData;
    [
      ...this.tunesInstances.entries(),
      ...this.defaultTunesInstances.entries()
    ].forEach(([s, r]) => {
      if (ie(r.save))
        try {
          t[s] = r.save();
        } catch (a) {
          X(`Tune ${r.constructor.name} save method throws an Error %o`, "warn", a);
        }
    });
    const o = window.performance.now();
    let i;
    return Promise.resolve(e).then((s) => (i = window.performance.now(), {
      id: this.id,
      tool: this.name,
      data: s,
      tunes: t,
      time: i - o
    })).catch((s) => {
      X(`Saving process for ${this.name} tool failed due to the ${s}`, "log", "red");
    });
  }
  /**
   * Uses Tool's validation method to check the correctness of output data
   * Tool's validation method is optional
   *
   * @description Method returns true|false whether data passed the validation or not
   * @param {BlockToolData} data - data to validate
   * @returns {Promise<boolean>} valid
   */
  async validate(e) {
    let t = !0;
    return this.toolInstance.validate instanceof Function && (t = await this.toolInstance.validate(e)), t;
  }
  /**
   * Returns data to render in tunes menu.
   * Splits block tunes settings into 2 groups: popover items and custom html.
   */
  getTunes() {
    const e = document.createElement("div"), t = [], o = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [], i = [
      ...this.tunesInstances.values(),
      ...this.defaultTunesInstances.values()
    ].map((s) => s.render());
    return [o, i].flat().forEach((s) => {
      m.isElement(s) ? e.appendChild(s) : Array.isArray(s) ? t.push(...s) : t.push(s);
    }), [t, e];
  }
  /**
   * Update current input index with selection anchor node
   */
  updateCurrentInput() {
    this.currentInput = m.isNativeInput(document.activeElement) || !_.anchorNode ? document.activeElement : _.anchorNode;
  }
  /**
   * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
   * Can be useful for block changes invisible for editor core.
   */
  dispatchChange() {
    this.didMutated();
  }
  /**
   * Call Tool instance destroy method
   */
  destroy() {
    this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), ie(this.toolInstance.destroy) && this.toolInstance.destroy();
  }
  /**
   * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
   * This method returns the entry that is related to the Block (depended on the Block data)
   */
  async getActiveToolboxEntry() {
    const e = this.tool.toolbox;
    if (e.length === 1)
      return Promise.resolve(this.tool.toolbox[0]);
    const t = await this.data;
    return e.find((o) => Object.entries(o.data).some(([i, s]) => t[i] && xc(t[i], s)));
  }
  /**
   * Exports Block data as string using conversion config
   */
  async exportDataAsString() {
    const e = await this.data;
    return Cc(e, this.tool.conversionConfig);
  }
  /**
   * Make default Block wrappers and put Tool`s content there
   *
   * @returns {HTMLDivElement}
   */
  compose() {
    const e = m.make("div", xe.CSS.wrapper), t = m.make("div", xe.CSS.content), o = this.toolInstance.render();
    e.dataset.id = this.id, this.toolRenderedElement = o, t.appendChild(this.toolRenderedElement);
    let i = t;
    return [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()].forEach((s) => {
      if (ie(s.wrap))
        try {
          i = s.wrap(i);
        } catch (r) {
          X(`Tune ${s.constructor.name} wrap method throws an Error %o`, "warn", r);
        }
    }), e.appendChild(i), e;
  }
  /**
   * Instantiate Block Tunes
   *
   * @param tunesData - current Block tunes data
   * @private
   */
  composeTunes(e) {
    Array.from(this.tunes.values()).forEach((t) => {
      (t.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(t.name, t.create(e[t.name], this.blockAPI));
    }), Object.entries(e).forEach(([t, o]) => {
      this.tunesInstances.has(t) || (this.unavailableTunesData[t] = o);
    });
  }
  /**
   * Adds focus event listeners to all inputs and contenteditable
   */
  addInputEvents() {
    this.inputs.forEach((e) => {
      e.addEventListener("focus", this.handleFocus), m.isNativeInput(e) && e.addEventListener("input", this.didMutated);
    });
  }
  /**
   * removes focus event listeners from all inputs and contenteditable
   */
  removeInputEvents() {
    this.inputs.forEach((e) => {
      e.removeEventListener("focus", this.handleFocus), m.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
    });
  }
  /**
   * Listen common editor Dom Changed event and detect mutations related to the  Block
   */
  watchBlockMutations() {
    var e;
    this.redactorDomChangedCallback = (t) => {
      const { mutations: o } = t;
      o.some((i) => Sc(i, this.toolRenderedElement)) && this.didMutated(o);
    }, (e = this.editorEventBus) == null || e.on(ni, this.redactorDomChangedCallback);
  }
  /**
   * Remove redactor dom change event listener
   */
  unwatchBlockMutations() {
    var e;
    (e = this.editorEventBus) == null || e.off(ni, this.redactorDomChangedCallback);
  }
  /**
   * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
   * We need to detect such changes and update a link to tools main element with the new one
   *
   * @param mutations - records of block content mutations
   */
  detectToolRootChange(e) {
    e.forEach((t) => {
      if (Array.from(t.removedNodes).includes(this.toolRenderedElement)) {
        const o = t.addedNodes[t.addedNodes.length - 1];
        this.toolRenderedElement = o;
      }
    });
  }
  /**
   * Clears inputs cached value
   */
  dropInputsCache() {
    this.cachedInputs = [];
  }
}
class Tc extends K {
  constructor() {
    super(...arguments), this.insert = (e = this.config.defaultBlock, t = {}, o = {}, i, s, r, a) => {
      const u = this.Editor.BlockManager.insert({
        id: a,
        tool: e,
        data: t,
        index: i,
        needToFocus: s,
        replace: r
      });
      return new At(u);
    }, this.composeBlockData = async (e) => {
      const t = this.Editor.Tools.blockTools.get(e);
      return new xe({
        tool: t,
        api: this.Editor.API,
        readOnly: !0,
        data: {},
        tunesData: {}
      }).data;
    }, this.update = async (e, t) => {
      const { BlockManager: o } = this.Editor, i = o.getBlockById(e);
      if (i === void 0)
        throw new Error(`Block with id "${e}" not found`);
      const s = await o.update(i, t);
      return new At(s);
    }, this.convert = (e, t, o) => {
      var i, s;
      const { BlockManager: r, Tools: a } = this.Editor, u = r.getBlockById(e);
      if (!u)
        throw new Error(`Block with id "${e}" not found`);
      const l = a.blockTools.get(u.name), c = a.blockTools.get(t);
      if (!c)
        throw new Error(`Block Tool with type "${t}" not found`);
      const d = ((i = l == null ? void 0 : l.conversionConfig) == null ? void 0 : i.export) !== void 0, h = ((s = c.conversionConfig) == null ? void 0 : s.import) !== void 0;
      if (d && h)
        r.convert(u, t, o);
      else {
        const g = [
          d ? !1 : Qt(u.name),
          h ? !1 : Qt(t)
        ].filter(Boolean).join(" and ");
        throw new Error(`Conversion from "${u.name}" to "${t}" is not possible. ${g} tool(s) should provide a "conversionConfig"`);
      }
    }, this.insertMany = (e, t = this.Editor.BlockManager.blocks.length - 1) => {
      this.validateIndex(t);
      const o = e.map(({ id: i, type: s, data: r }) => this.Editor.BlockManager.composeBlock({
        id: i,
        tool: s || this.config.defaultBlock,
        data: r
      }));
      return this.Editor.BlockManager.insertMany(o, t), o.map((i) => new At(i));
    };
  }
  /**
   * Available methods
   *
   * @returns {Blocks}
   */
  get methods() {
    return {
      clear: () => this.clear(),
      render: (e) => this.render(e),
      renderFromHTML: (e) => this.renderFromHTML(e),
      delete: (e) => this.delete(e),
      swap: (e, t) => this.swap(e, t),
      move: (e, t) => this.move(e, t),
      getBlockByIndex: (e) => this.getBlockByIndex(e),
      getById: (e) => this.getById(e),
      getCurrentBlockIndex: () => this.getCurrentBlockIndex(),
      getBlockIndex: (e) => this.getBlockIndex(e),
      getBlocksCount: () => this.getBlocksCount(),
      stretchBlock: (e, t = !0) => this.stretchBlock(e, t),
      insertNewBlock: () => this.insertNewBlock(),
      insert: this.insert,
      insertMany: this.insertMany,
      update: this.update,
      composeBlockData: this.composeBlockData,
      convert: this.convert
    };
  }
  /**
   * Returns Blocks count
   *
   * @returns {number}
   */
  getBlocksCount() {
    return this.Editor.BlockManager.blocks.length;
  }
  /**
   * Returns current block index
   *
   * @returns {number}
   */
  getCurrentBlockIndex() {
    return this.Editor.BlockManager.currentBlockIndex;
  }
  /**
   * Returns the index of Block by id;
   *
   * @param id - block id
   */
  getBlockIndex(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    if (!t) {
      je("There is no block with id `" + e + "`", "warn");
      return;
    }
    return this.Editor.BlockManager.getBlockIndex(t);
  }
  /**
   * Returns BlockAPI object by Block index
   *
   * @param {number} index - index to get
   */
  getBlockByIndex(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(e);
    if (t === void 0) {
      je("There is no block at index `" + e + "`", "warn");
      return;
    }
    return new At(t);
  }
  /**
   * Returns BlockAPI object by Block id
   *
   * @param id - id of block to get
   */
  getById(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    return t === void 0 ? (je("There is no block with id `" + e + "`", "warn"), null) : new At(t);
  }
  /**
   * Call Block Manager method that swap Blocks
   *
   * @param {number} fromIndex - position of first Block
   * @param {number} toIndex - position of second Block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    X(
      "`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead",
      "info"
    ), this.Editor.BlockManager.swap(e, t);
  }
  /**
   * Move block from one index to another
   *
   * @param {number} toIndex - index to move to
   * @param {number} fromIndex - index to move from
   */
  move(e, t) {
    this.Editor.BlockManager.move(e, t);
  }
  /**
   * Deletes Block
   *
   * @param {number} blockIndex - index of Block to delete
   */
  delete(e = this.Editor.BlockManager.currentBlockIndex) {
    try {
      const t = this.Editor.BlockManager.getBlockByIndex(e);
      this.Editor.BlockManager.removeBlock(t);
    } catch (t) {
      je(t, "warn");
      return;
    }
    this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
  }
  /**
   * Clear Editor's area
   */
  async clear() {
    await this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
  }
  /**
   * Fills Editor with Blocks data
   *
   * @param {OutputData} data — Saved Editor data
   */
  async render(e) {
    if (e === void 0 || e.blocks === void 0)
      throw new Error("Incorrect data passed to the render() method");
    this.Editor.ModificationsObserver.disable(), await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(e.blocks), this.Editor.ModificationsObserver.enable();
  }
  /**
   * Render passed HTML string
   *
   * @param {string} data - HTML string to render
   * @returns {Promise<void>}
   */
  renderFromHTML(e) {
    return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, !0);
  }
  /**
   * Stretch Block's content
   *
   * @param {number} index - index of Block to stretch
   * @param {boolean} status - true to enable, false to disable
   * @deprecated Use BlockAPI interface to stretch Blocks
   */
  stretchBlock(e, t = !0) {
    ti(
      !0,
      "blocks.stretchBlock()",
      "BlockAPI"
    );
    const o = this.Editor.BlockManager.getBlockByIndex(e);
    o && (o.stretched = t);
  }
  /**
   * Insert new Block
   * After set caret to this Block
   *
   * @todo remove in 3.0.0
   * @deprecated with insert() method
   */
  insertNewBlock() {
    X("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
  }
  /**
   * Validated block index and throws an error if it's invalid
   *
   * @param index - index to validate
   */
  validateIndex(e) {
    if (typeof e != "number")
      throw new Error("Index should be a number");
    if (e < 0)
      throw new Error("Index should be greater than or equal to 0");
    if (e === null)
      throw new Error("Index should be greater than or equal to 0");
  }
}
class Bc extends K {
  constructor() {
    super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, t), !0) : !1, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, t), !0) : !1, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, t), !0) : !1, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, t), !0) : !1, this.setToBlock = (e, t = this.Editor.Caret.positions.DEFAULT, o = 0) => this.Editor.BlockManager.blocks[e] ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.blocks[e], t, o), !0) : !1, this.focus = (e = !1) => e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
  }
  /**
   * Available methods
   *
   * @returns {Caret}
   */
  get methods() {
    return {
      setToFirstBlock: this.setToFirstBlock,
      setToLastBlock: this.setToLastBlock,
      setToPreviousBlock: this.setToPreviousBlock,
      setToNextBlock: this.setToNextBlock,
      setToBlock: this.setToBlock,
      focus: this.focus
    };
  }
}
class Ac extends K {
  /**
   * Available methods
   *
   * @returns {Events}
   */
  get methods() {
    return {
      emit: (e, t) => this.emit(e, t),
      off: (e, t) => this.off(e, t),
      on: (e, t) => this.on(e, t)
    };
  }
  /**
   * Subscribe on Events
   *
   * @param {string} eventName - event name to subscribe
   * @param {Function} callback - event handler
   */
  on(e, t) {
    this.eventsDispatcher.on(e, t);
  }
  /**
   * Emit event with data
   *
   * @param {string} eventName - event to emit
   * @param {object} data - event's data
   */
  emit(e, t) {
    this.eventsDispatcher.emit(e, t);
  }
  /**
   * Unsubscribe from Event
   *
   * @param {string} eventName - event to unsubscribe
   * @param {Function} callback - event handler
   */
  off(e, t) {
    this.eventsDispatcher.off(e, t);
  }
}
class Mi extends K {
  /**
   * Return namespace section for tool or block tune
   *
   * @param tool - tool object
   */
  static getNamespace(e) {
    return e.isTune() ? `blockTunes.${e.name}` : `tools.${e.name}`;
  }
  /**
   * Return I18n API methods with global dictionary access
   */
  get methods() {
    return {
      t: () => {
        je("I18n.t() method can be accessed only from Tools", "warn");
      }
    };
  }
  /**
   * Return I18n API methods with tool namespaced dictionary
   *
   * @param tool - Tool object
   */
  getMethodsForTool(e) {
    return Object.assign(
      this.methods,
      {
        t: (t) => Me.t(Mi.getNamespace(e), t)
      }
    );
  }
}
class Lc extends K {
  /**
   * Editor.js Core API modules
   */
  get methods() {
    return {
      blocks: this.Editor.BlocksAPI.methods,
      caret: this.Editor.CaretAPI.methods,
      events: this.Editor.EventsAPI.methods,
      listeners: this.Editor.ListenersAPI.methods,
      notifier: this.Editor.NotifierAPI.methods,
      sanitizer: this.Editor.SanitizerAPI.methods,
      saver: this.Editor.SaverAPI.methods,
      selection: this.Editor.SelectionAPI.methods,
      styles: this.Editor.StylesAPI.classes,
      toolbar: this.Editor.ToolbarAPI.methods,
      inlineToolbar: this.Editor.InlineToolbarAPI.methods,
      tooltip: this.Editor.TooltipAPI.methods,
      i18n: this.Editor.I18nAPI.methods,
      readOnly: this.Editor.ReadOnlyAPI.methods,
      ui: this.Editor.UiAPI.methods
    };
  }
  /**
   * Returns Editor.js Core API methods for passed tool
   *
   * @param tool - tool object
   */
  getMethodsForTool(e) {
    return Object.assign(
      this.methods,
      {
        i18n: this.Editor.I18nAPI.getMethodsForTool(e)
      }
    );
  }
}
class Nc extends K {
  /**
   * Available methods
   *
   * @returns {InlineToolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open()
    };
  }
  /**
   * Open Inline Toolbar
   */
  open() {
    this.Editor.InlineToolbar.tryToShow();
  }
  /**
   * Close Inline Toolbar
   */
  close() {
    this.Editor.InlineToolbar.close();
  }
}
class Mc extends K {
  /**
   * Available methods
   *
   * @returns {Listeners}
   */
  get methods() {
    return {
      on: (e, t, o, i) => this.on(e, t, o, i),
      off: (e, t, o, i) => this.off(e, t, o, i),
      offById: (e) => this.offById(e)
    };
  }
  /**
   * Ads a DOM event listener. Return it's id.
   *
   * @param {HTMLElement} element - Element to set handler to
   * @param {string} eventType - event type
   * @param {() => void} handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  on(e, t, o, i) {
    return this.listeners.on(e, t, o, i);
  }
  /**
   * Removes DOM listener from element
   *
   * @param {Element} element - Element to remove handler from
   * @param eventType - event type
   * @param handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  off(e, t, o, i) {
    this.listeners.off(e, t, o, i);
  }
  /**
   * Removes DOM listener by the listener id
   *
   * @param id - id of the listener to remove
   */
  offById(e) {
    this.listeners.offById(e);
  }
}
var oi = {}, Ic = {
  get exports() {
    return oi;
  },
  set exports(n) {
    oi = n;
  }
};
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(s) {
        if (o[s])
          return o[s].exports;
        var r = o[s] = { i: s, l: !1, exports: {} };
        return t[s].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
      }
      return i.m = t, i.c = o, i.d = function(s, r, a) {
        i.o(s, r) || Object.defineProperty(s, r, { enumerable: !0, get: a });
      }, i.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, i.t = function(s, r) {
        if (1 & r && (s = i(s)), 8 & r || 4 & r && typeof s == "object" && s && s.__esModule)
          return s;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: s }), 2 & r && typeof s != "string")
          for (var u in s)
            i.d(a, u, (function(l) {
              return s[l];
            }).bind(null, u));
        return a;
      }, i.n = function(s) {
        var r = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return i.d(r, "a", r), r;
      }, i.o = function(s, r) {
        return Object.prototype.hasOwnProperty.call(s, r);
      }, i.p = "/", i(i.s = 0);
    }([function(t, o, i) {
      i(1), /*!
      * Codex JavaScript Notification module
      * https://github.com/codex-team/js-notifier
      */
      t.exports = function() {
        var s = i(6), r = "cdx-notify--bounce-in", a = null;
        return { show: function(u) {
          if (u.message) {
            (function() {
              if (a)
                return !0;
              a = s.getWrapper(), document.body.appendChild(a);
            })();
            var l = null, c = u.time || 8e3;
            switch (u.type) {
              case "confirm":
                l = s.confirm(u);
                break;
              case "prompt":
                l = s.prompt(u);
                break;
              default:
                l = s.alert(u), window.setTimeout(function() {
                  l.remove();
                }, c);
            }
            a.appendChild(l), l.classList.add(r);
          }
        } };
      }();
    }, function(t, o, i) {
      var s = i(2);
      typeof s == "string" && (s = [[t.i, s, ""]]);
      var r = { hmr: !0, transform: void 0, insertInto: void 0 };
      i(4)(s, r), s.locals && (t.exports = s.locals);
    }, function(t, o, i) {
      (t.exports = i(3)(!1)).push([t.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
    }, function(t, o) {
      t.exports = function(i) {
        var s = [];
        return s.toString = function() {
          return this.map(function(r) {
            var a = function(u, l) {
              var c = u[1] || "", d = u[3];
              if (!d)
                return c;
              if (l && typeof btoa == "function") {
                var h = (f = d, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(f)))) + " */"), g = d.sources.map(function(v) {
                  return "/*# sourceURL=" + d.sourceRoot + v + " */";
                });
                return [c].concat(g).concat([h]).join(`
`);
              }
              var f;
              return [c].join(`
`);
            }(r, i);
            return r[2] ? "@media " + r[2] + "{" + a + "}" : a;
          }).join("");
        }, s.i = function(r, a) {
          typeof r == "string" && (r = [[null, r, ""]]);
          for (var u = {}, l = 0; l < this.length; l++) {
            var c = this[l][0];
            typeof c == "number" && (u[c] = !0);
          }
          for (l = 0; l < r.length; l++) {
            var d = r[l];
            typeof d[0] == "number" && u[d[0]] || (a && !d[2] ? d[2] = a : a && (d[2] = "(" + d[2] + ") and (" + a + ")"), s.push(d));
          }
        }, s;
      };
    }, function(t, o, i) {
      var s, r, a = {}, u = (s = function() {
        return window && document && document.all && !window.atob;
      }, function() {
        return r === void 0 && (r = s.apply(this, arguments)), r;
      }), l = /* @__PURE__ */ function(E) {
        var C = {};
        return function(B) {
          if (typeof B == "function")
            return B();
          if (C[B] === void 0) {
            var A = (function(j) {
              return document.querySelector(j);
            }).call(this, B);
            if (window.HTMLIFrameElement && A instanceof window.HTMLIFrameElement)
              try {
                A = A.contentDocument.head;
              } catch {
                A = null;
              }
            C[B] = A;
          }
          return C[B];
        };
      }(), c = null, d = 0, h = [], g = i(5);
      function f(E, C) {
        for (var B = 0; B < E.length; B++) {
          var A = E[B], j = a[A.id];
          if (j) {
            j.refs++;
            for (var U = 0; U < j.parts.length; U++)
              j.parts[U](A.parts[U]);
            for (; U < A.parts.length; U++)
              j.parts.push(z(A.parts[U], C));
          } else {
            var oe = [];
            for (U = 0; U < A.parts.length; U++)
              oe.push(z(A.parts[U], C));
            a[A.id] = { id: A.id, refs: 1, parts: oe };
          }
        }
      }
      function v(E, C) {
        for (var B = [], A = {}, j = 0; j < E.length; j++) {
          var U = E[j], oe = C.base ? U[0] + C.base : U[0], y = { css: U[1], media: U[2], sourceMap: U[3] };
          A[oe] ? A[oe].parts.push(y) : B.push(A[oe] = { id: oe, parts: [y] });
        }
        return B;
      }
      function p(E, C) {
        var B = l(E.insertInto);
        if (!B)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var A = h[h.length - 1];
        if (E.insertAt === "top")
          A ? A.nextSibling ? B.insertBefore(C, A.nextSibling) : B.appendChild(C) : B.insertBefore(C, B.firstChild), h.push(C);
        else if (E.insertAt === "bottom")
          B.appendChild(C);
        else {
          if (typeof E.insertAt != "object" || !E.insertAt.before)
            throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
          var j = l(E.insertInto + " " + E.insertAt.before);
          B.insertBefore(C, j);
        }
      }
      function k(E) {
        if (E.parentNode === null)
          return !1;
        E.parentNode.removeChild(E);
        var C = h.indexOf(E);
        C >= 0 && h.splice(C, 1);
      }
      function x(E) {
        var C = document.createElement("style");
        return E.attrs.type === void 0 && (E.attrs.type = "text/css"), P(C, E.attrs), p(E, C), C;
      }
      function P(E, C) {
        Object.keys(C).forEach(function(B) {
          E.setAttribute(B, C[B]);
        });
      }
      function z(E, C) {
        var B, A, j, U;
        if (C.transform && E.css) {
          if (!(U = C.transform(E.css)))
            return function() {
            };
          E.css = U;
        }
        if (C.singleton) {
          var oe = d++;
          B = c || (c = x(C)), A = D.bind(null, B, oe, !1), j = D.bind(null, B, oe, !0);
        } else
          E.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (B = function(y) {
            var T = document.createElement("link");
            return y.attrs.type === void 0 && (y.attrs.type = "text/css"), y.attrs.rel = "stylesheet", P(T, y.attrs), p(y, T), T;
          }(C), A = (function(y, T, R) {
            var O = R.css, Z = R.sourceMap, G = T.convertToAbsoluteUrls === void 0 && Z;
            (T.convertToAbsoluteUrls || G) && (O = g(O)), Z && (O += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(Z)))) + " */");
            var re = new Blob([O], { type: "text/css" }), te = y.href;
            y.href = URL.createObjectURL(re), te && URL.revokeObjectURL(te);
          }).bind(null, B, C), j = function() {
            k(B), B.href && URL.revokeObjectURL(B.href);
          }) : (B = x(C), A = (function(y, T) {
            var R = T.css, O = T.media;
            if (O && y.setAttribute("media", O), y.styleSheet)
              y.styleSheet.cssText = R;
            else {
              for (; y.firstChild; )
                y.removeChild(y.firstChild);
              y.appendChild(document.createTextNode(R));
            }
          }).bind(null, B), j = function() {
            k(B);
          });
        return A(E), function(y) {
          if (y) {
            if (y.css === E.css && y.media === E.media && y.sourceMap === E.sourceMap)
              return;
            A(E = y);
          } else
            j();
        };
      }
      t.exports = function(E, C) {
        if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
          throw new Error("The style-loader cannot be used in a non-browser environment");
        (C = C || {}).attrs = typeof C.attrs == "object" ? C.attrs : {}, C.singleton || typeof C.singleton == "boolean" || (C.singleton = u()), C.insertInto || (C.insertInto = "head"), C.insertAt || (C.insertAt = "bottom");
        var B = v(E, C);
        return f(B, C), function(A) {
          for (var j = [], U = 0; U < B.length; U++) {
            var oe = B[U];
            (y = a[oe.id]).refs--, j.push(y);
          }
          for (A && f(v(A, C), C), U = 0; U < j.length; U++) {
            var y;
            if ((y = j[U]).refs === 0) {
              for (var T = 0; T < y.parts.length; T++)
                y.parts[T]();
              delete a[y.id];
            }
          }
        };
      };
      var L, I = (L = [], function(E, C) {
        return L[E] = C, L.filter(Boolean).join(`
`);
      });
      function D(E, C, B, A) {
        var j = B ? "" : A.css;
        if (E.styleSheet)
          E.styleSheet.cssText = I(C, j);
        else {
          var U = document.createTextNode(j), oe = E.childNodes;
          oe[C] && E.removeChild(oe[C]), oe.length ? E.insertBefore(U, oe[C]) : E.appendChild(U);
        }
      }
    }, function(t, o) {
      t.exports = function(i) {
        var s = typeof window < "u" && window.location;
        if (!s)
          throw new Error("fixUrls requires window.location");
        if (!i || typeof i != "string")
          return i;
        var r = s.protocol + "//" + s.host, a = r + s.pathname.replace(/\/[^\/]*$/, "/");
        return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(u, l) {
          var c, d = l.trim().replace(/^"(.*)"$/, function(h, g) {
            return g;
          }).replace(/^'(.*)'$/, function(h, g) {
            return g;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(d) ? u : (c = d.indexOf("//") === 0 ? d : d.indexOf("/") === 0 ? r + d : a + d.replace(/^\.\//, ""), "url(" + JSON.stringify(c) + ")");
        });
      };
    }, function(t, o, i) {
      var s, r, a, u, l, c, d, h, g;
      t.exports = (s = "cdx-notifies", r = "cdx-notify", a = "cdx-notify__cross", u = "cdx-notify__button--confirm", l = "cdx-notify__button--cancel", c = "cdx-notify__input", d = "cdx-notify__button", h = "cdx-notify__btns-wrapper", { alert: g = function(f) {
        var v = document.createElement("DIV"), p = document.createElement("DIV"), k = f.message, x = f.style;
        return v.classList.add(r), x && v.classList.add(r + "--" + x), v.innerHTML = k, p.classList.add(a), p.addEventListener("click", v.remove.bind(v)), v.appendChild(p), v;
      }, confirm: function(f) {
        var v = g(f), p = document.createElement("div"), k = document.createElement("button"), x = document.createElement("button"), P = v.querySelector("." + a), z = f.cancelHandler, L = f.okHandler;
        return p.classList.add(h), k.innerHTML = f.okText || "Confirm", x.innerHTML = f.cancelText || "Cancel", k.classList.add(d), x.classList.add(d), k.classList.add(u), x.classList.add(l), z && typeof z == "function" && (x.addEventListener("click", z), P.addEventListener("click", z)), L && typeof L == "function" && k.addEventListener("click", L), k.addEventListener("click", v.remove.bind(v)), x.addEventListener("click", v.remove.bind(v)), p.appendChild(k), p.appendChild(x), v.appendChild(p), v;
      }, prompt: function(f) {
        var v = g(f), p = document.createElement("div"), k = document.createElement("button"), x = document.createElement("input"), P = v.querySelector("." + a), z = f.cancelHandler, L = f.okHandler;
        return p.classList.add(h), k.innerHTML = f.okText || "Ok", k.classList.add(d), k.classList.add(u), x.classList.add(c), f.placeholder && x.setAttribute("placeholder", f.placeholder), f.default && (x.value = f.default), f.inputType && (x.type = f.inputType), z && typeof z == "function" && P.addEventListener("click", z), L && typeof L == "function" && k.addEventListener("click", function() {
          L(x.value);
        }), k.addEventListener("click", v.remove.bind(v)), p.appendChild(x), p.appendChild(k), v.appendChild(p), v;
      }, getWrapper: function() {
        var f = document.createElement("DIV");
        return f.classList.add(s), f;
      } });
    }]);
  });
})(Ic);
const Rc = /* @__PURE__ */ Li(oi);
class _c {
  /**
   * Show web notification
   *
   * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
   */
  show(e) {
    Rc.show(e);
  }
}
class Oc extends K {
  /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.notifier = new _c();
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e) => this.show(e)
    };
  }
  /**
   * Show notification
   *
   * @param {NotifierOptions} options - message option
   */
  show(e) {
    return this.notifier.show(e);
  }
}
class Dc extends K {
  /**
   * Available methods
   */
  get methods() {
    const e = () => this.isEnabled;
    return {
      toggle: (t) => this.toggle(t),
      get isEnabled() {
        return e();
      }
    };
  }
  /**
   * Set or toggle read-only state
   *
   * @param {boolean|undefined} state - set or toggle state
   * @returns {boolean} current value
   */
  toggle(e) {
    return this.Editor.ReadOnly.toggle(e);
  }
  /**
   * Returns current read-only state
   */
  get isEnabled() {
    return this.Editor.ReadOnly.isEnabled;
  }
}
var ii = {}, Pc = {
  get exports() {
    return ii;
  },
  set exports(n) {
    ii = n;
  }
};
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(sc, function() {
    function t(d) {
      var h = d.tags, g = Object.keys(h), f = g.map(function(v) {
        return typeof h[v];
      }).every(function(v) {
        return v === "object" || v === "boolean" || v === "function";
      });
      if (!f)
        throw new Error("The configuration was invalid");
      this.config = d;
    }
    var o = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
    function i(d) {
      return o.indexOf(d.nodeName) !== -1;
    }
    var s = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
    function r(d) {
      return s.indexOf(d.nodeName) !== -1;
    }
    t.prototype.clean = function(d) {
      const h = document.implementation.createHTMLDocument(), g = h.createElement("div");
      return g.innerHTML = d, this._sanitize(h, g), g.innerHTML;
    }, t.prototype._sanitize = function(d, h) {
      var g = a(d, h), f = g.firstChild();
      if (f)
        do {
          if (f.nodeType === Node.TEXT_NODE)
            if (f.data.trim() === "" && (f.previousElementSibling && i(f.previousElementSibling) || f.nextElementSibling && i(f.nextElementSibling))) {
              h.removeChild(f), this._sanitize(d, h);
              break;
            } else
              continue;
          if (f.nodeType === Node.COMMENT_NODE) {
            h.removeChild(f), this._sanitize(d, h);
            break;
          }
          var v = r(f), p;
          v && (p = Array.prototype.some.call(f.childNodes, i));
          var k = !!h.parentNode, x = i(h) && i(f) && k, P = f.nodeName.toLowerCase(), z = u(this.config, P, f), L = v && p;
          if (L || l(f, z) || !this.config.keepNestedBlockElements && x) {
            if (!(f.nodeName === "SCRIPT" || f.nodeName === "STYLE"))
              for (; f.childNodes.length > 0; )
                h.insertBefore(f.childNodes[0], f);
            h.removeChild(f), this._sanitize(d, h);
            break;
          }
          for (var I = 0; I < f.attributes.length; I += 1) {
            var D = f.attributes[I];
            c(D, z, f) && (f.removeAttribute(D.name), I = I - 1);
          }
          this._sanitize(d, f);
        } while (f = g.nextSibling());
    };
    function a(d, h) {
      return d.createTreeWalker(
        h,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
        null,
        !1
      );
    }
    function u(d, h, g) {
      return typeof d.tags[h] == "function" ? d.tags[h](g) : d.tags[h];
    }
    function l(d, h) {
      return typeof h > "u" ? !0 : typeof h == "boolean" ? !h : !1;
    }
    function c(d, h, g) {
      var f = d.name.toLowerCase();
      return h === !0 ? !1 : typeof h[f] == "function" ? !h[f](d.value, g) : typeof h[f] > "u" || h[f] === !1 ? !0 : typeof h[f] == "string" ? h[f] !== d.value : !1;
    }
    return t;
  });
})(Pc);
const Hc = ii;
function ia(n, e) {
  return n.map((t) => {
    const o = ie(e) ? e(t.tool) : e;
    return Fe(o) || (t.data = Ii(t.data, o)), t;
  });
}
function it(n, e = {}) {
  const t = {
    tags: e
  };
  return new Hc(t).clean(n);
}
function Ii(n, e) {
  return Array.isArray(n) ? Fc(n, e) : ye(n) ? qc(n, e) : wt(n) ? $c(n, e) : n;
}
function Fc(n, e) {
  return n.map((t) => Ii(t, e));
}
function qc(n, e) {
  const t = {};
  for (const o in n) {
    if (!Object.prototype.hasOwnProperty.call(n, o))
      continue;
    const i = n[o], s = Uc(e[o]) ? e[o] : e;
    t[o] = Ii(i, s);
  }
  return t;
}
function $c(n, e) {
  return ye(e) ? it(n, e) : e === !1 ? it(n, {}) : n;
}
function Uc(n) {
  return ye(n) || lc(n) || ie(n);
}
class jc extends K {
  /**
   * Available methods
   *
   * @returns {SanitizerConfig}
   */
  get methods() {
    return {
      clean: (e, t) => this.clean(e, t)
    };
  }
  /**
   * Perform sanitizing of a string
   *
   * @param {string} taintString - what to sanitize
   * @param {SanitizerConfig} config - sanitizer config
   * @returns {string}
   */
  clean(e, t) {
    return it(e, t);
  }
}
class Vc extends K {
  /**
   * Available methods
   *
   * @returns {Saver}
   */
  get methods() {
    return {
      save: () => this.save()
    };
  }
  /**
   * Return Editor's data
   *
   * @returns {OutputData}
   */
  save() {
    const e = "Editor's content can not be saved in read-only mode";
    return this.Editor.ReadOnly.isEnabled ? (je(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
  }
}
class zc extends K {
  /**
   * Available methods
   *
   * @returns {SelectionAPIInterface}
   */
  get methods() {
    return {
      findParentTag: (e, t) => this.findParentTag(e, t),
      expandToTag: (e) => this.expandToTag(e)
    };
  }
  /**
   * Looks ahead from selection and find passed tag with class name
   *
   * @param {string} tagName - tag to find
   * @param {string} className - tag's class name
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t) {
    return new _().findParentTag(e, t);
  }
  /**
   * Expand selection to passed tag
   *
   * @param {HTMLElement} node - tag that should contain selection
   */
  expandToTag(e) {
    new _().expandToTag(e);
  }
}
class Gc extends K {
  /**
   * Exported classes
   */
  get classes() {
    return {
      /**
       * Base Block styles
       */
      block: "cdx-block",
      /**
       * Inline Tools styles
       */
      inlineToolButton: "ce-inline-tool",
      inlineToolButtonActive: "ce-inline-tool--active",
      /**
       * UI elements
       */
      input: "cdx-input",
      loader: "cdx-loader",
      button: "cdx-button",
      /**
       * Settings styles
       */
      settingsButton: "cdx-settings-button",
      settingsButtonActive: "cdx-settings-button--active"
    };
  }
}
class Wc extends K {
  /**
   * Available methods
   *
   * @returns {Toolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open(),
      toggleBlockSettings: (e) => this.toggleBlockSettings(e),
      toggleToolbox: (e) => this.toggleToolbox(e)
    };
  }
  /**
   * Open toolbar
   */
  open() {
    this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * Close toolbar and all included elements
   */
  close() {
    this.Editor.Toolbar.close();
  }
  /**
   * Toggles Block Setting of the current block
   *
   * @param {boolean} openingState —  opening state of Block Setting
   */
  toggleBlockSettings(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      je("Could't toggle the Toolbar because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.BlockSettings.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close();
  }
  /**
   * Open toolbox
   *
   * @param {boolean} openingState - Opening state of toolbox
   */
  toggleToolbox(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      je("Could't toggle the Toolbox because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
  }
}
var si = {}, Kc = {
  get exports() {
    return si;
  },
  set exports(n) {
    si = n;
  }
};
/*!
 * CodeX.Tooltips
 * 
 * @version 1.0.5
 * 
 * @licence MIT
 * @author CodeX <https://codex.so>
 * 
 * 
 */
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(s) {
        if (o[s])
          return o[s].exports;
        var r = o[s] = { i: s, l: !1, exports: {} };
        return t[s].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
      }
      return i.m = t, i.c = o, i.d = function(s, r, a) {
        i.o(s, r) || Object.defineProperty(s, r, { enumerable: !0, get: a });
      }, i.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, i.t = function(s, r) {
        if (1 & r && (s = i(s)), 8 & r || 4 & r && typeof s == "object" && s && s.__esModule)
          return s;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: s }), 2 & r && typeof s != "string")
          for (var u in s)
            i.d(a, u, (function(l) {
              return s[l];
            }).bind(null, u));
        return a;
      }, i.n = function(s) {
        var r = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return i.d(r, "a", r), r;
      }, i.o = function(s, r) {
        return Object.prototype.hasOwnProperty.call(s, r);
      }, i.p = "", i(i.s = 0);
    }([function(t, o, i) {
      t.exports = i(1);
    }, function(t, o, i) {
      i.r(o), i.d(o, "default", function() {
        return s;
      });
      class s {
        constructor() {
          this.nodes = { wrapper: null, content: null }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
            this.showed && this.hide(!0);
          }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: !0 });
        }
        get CSS() {
          return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
        }
        show(a, u, l) {
          this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
          const c = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, l);
          if (c.hidingDelay && (this.hidingDelay = c.hidingDelay), this.nodes.content.innerHTML = "", typeof u == "string")
            this.nodes.content.appendChild(document.createTextNode(u));
          else {
            if (!(u instanceof Node))
              throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + typeof u + " given.");
            this.nodes.content.appendChild(u);
          }
          switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), c.placement) {
            case "top":
              this.placeTop(a, c);
              break;
            case "left":
              this.placeLeft(a, c);
              break;
            case "right":
              this.placeRight(a, c);
              break;
            case "bottom":
            default:
              this.placeBottom(a, c);
          }
          c && c.delay ? this.showingTimeout = setTimeout(() => {
            this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
          }, c.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
        }
        hide(a = !1) {
          if (this.hidingDelay && !a)
            return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
              this.hide(!0);
            }, this.hidingDelay));
          this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
        }
        onHover(a, u, l) {
          a.addEventListener("mouseenter", () => {
            this.show(a, u, l);
          }), a.addEventListener("mouseleave", () => {
            this.hide();
          });
        }
        destroy() {
          this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
        }
        prepare() {
          this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
        }
        loadStyles() {
          const a = "codex-tooltips-style";
          if (document.getElementById(a))
            return;
          const u = i(2), l = this.make("style", null, { textContent: u.toString(), id: a });
          this.prepend(document.head, l);
        }
        placeBottom(a, u) {
          const l = a.getBoundingClientRect(), c = l.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, d = l.bottom + window.pageYOffset + this.offsetTop + u.marginTop;
          this.applyPlacement("bottom", c, d);
        }
        placeTop(a, u) {
          const l = a.getBoundingClientRect(), c = l.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, d = l.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
          this.applyPlacement("top", c, d);
        }
        placeLeft(a, u) {
          const l = a.getBoundingClientRect(), c = l.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - u.marginLeft, d = l.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("left", c, d);
        }
        placeRight(a, u) {
          const l = a.getBoundingClientRect(), c = l.right + this.offsetRight + u.marginRight, d = l.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("right", c, d);
        }
        applyPlacement(a, u, l) {
          this.nodes.wrapper.classList.add(this.CSS.placement[a]), this.nodes.wrapper.style.left = u + "px", this.nodes.wrapper.style.top = l + "px";
        }
        make(a, u = null, l = {}) {
          const c = document.createElement(a);
          Array.isArray(u) ? c.classList.add(...u) : u && c.classList.add(u);
          for (const d in l)
            l.hasOwnProperty(d) && (c[d] = l[d]);
          return c;
        }
        append(a, u) {
          Array.isArray(u) ? u.forEach((l) => a.appendChild(l)) : a.appendChild(u);
        }
        prepend(a, u) {
          Array.isArray(u) ? (u = u.reverse()).forEach((l) => a.prepend(l)) : a.prepend(u);
        }
      }
    }, function(t, o) {
      t.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
    }]).default;
  });
})(Kc);
const Zc = /* @__PURE__ */ Li(si);
let ze = null;
function Ri() {
  ze || (ze = new Zc());
}
function Yc(n, e, t) {
  Ri(), ze == null || ze.show(n, e, t);
}
function ri(n = !1) {
  Ri(), ze == null || ze.hide(n);
}
function kn(n, e, t) {
  Ri(), ze == null || ze.onHover(n, e, t);
}
function Xc() {
  ze == null || ze.destroy(), ze = null;
}
class Jc extends K {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    });
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e, t, o) => this.show(e, t, o),
      hide: () => this.hide(),
      onHover: (e, t, o) => this.onHover(e, t, o)
    };
  }
  /**
   * Method show tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  show(e, t, o) {
    Yc(e, t, o);
  }
  /**
   * Method hides tooltip on HTML page
   */
  hide() {
    ri();
  }
  /**
   * Decorator for showing Tooltip by mouseenter/mouseleave
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  onHover(e, t, o) {
    kn(e, t, o);
  }
}
class Qc extends K {
  /**
   * Available methods / getters
   */
  get methods() {
    return {
      nodes: this.editorNodes
      /**
       * There can be added some UI methods, like toggleThinMode() etc
       */
    };
  }
  /**
   * Exported classes
   */
  get editorNodes() {
    return {
      /**
       * Top-level editor instance wrapper
       */
      wrapper: this.Editor.UI.nodes.wrapper,
      /**
       * Element that holds all the Blocks
       */
      redactor: this.Editor.UI.nodes.redactor
    };
  }
}
function sa(n, e) {
  const t = {};
  return Object.entries(n).forEach(([o, i]) => {
    if (ye(i)) {
      const s = e ? `${e}.${o}` : o;
      Object.values(i).every((r) => wt(r)) ? t[o] = s : t[o] = sa(i, s);
      return;
    }
    t[o] = i;
  }), t;
}
const Ve = sa(Jr);
function ed(n, e) {
  const t = {};
  return Object.keys(n).forEach((o) => {
    const i = e[o];
    i !== void 0 ? t[i] = n[o] : t[o] = n[o];
  }), t;
}
const td = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>', ra = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', nd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>', od = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', id = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', sd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>', qs = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', rd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>', ad = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>', ud = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', ld = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', cd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';
class ae {
  /**
   * Constructs popover item instance
   *
   * @param params - popover item construction params
   */
  constructor(e) {
    this.nodes = {
      root: null,
      icon: null
    }, this.confirmationState = null, this.removeSpecialFocusBehavior = () => {
      this.nodes.root.classList.remove(ae.CSS.noFocus);
    }, this.removeSpecialHoverBehavior = () => {
      this.nodes.root.classList.remove(ae.CSS.noHover);
    }, this.onErrorAnimationEnd = () => {
      this.nodes.icon.classList.remove(ae.CSS.wobbleAnimation), this.nodes.icon.removeEventListener("animationend", this.onErrorAnimationEnd);
    }, this.params = e, this.nodes.root = this.make(e);
  }
  /**
   * True if item is disabled and hence not clickable
   */
  get isDisabled() {
    return this.params.isDisabled;
  }
  /**
   * Exposes popover item toggle parameter
   */
  get toggle() {
    return this.params.toggle;
  }
  /**
   * Item title
   */
  get title() {
    return this.params.title;
  }
  /**
   * True if popover should close once item is activated
   */
  get closeOnActivate() {
    return this.params.closeOnActivate;
  }
  /**
   * True if confirmation state is enabled for popover item
   */
  get isConfirmationStateEnabled() {
    return this.confirmationState !== null;
  }
  /**
   * True if item is focused in keyboard navigation process
   */
  get isFocused() {
    return this.nodes.root.classList.contains(ae.CSS.focused);
  }
  /**
   * Popover item CSS classes
   */
  static get CSS() {
    return {
      container: "ce-popover-item",
      title: "ce-popover-item__title",
      secondaryTitle: "ce-popover-item__secondary-title",
      icon: "ce-popover-item__icon",
      active: "ce-popover-item--active",
      disabled: "ce-popover-item--disabled",
      focused: "ce-popover-item--focused",
      hidden: "ce-popover-item--hidden",
      confirmationState: "ce-popover-item--confirmation",
      noHover: "ce-popover-item--no-hover",
      noFocus: "ce-popover-item--no-focus",
      wobbleAnimation: "wobble"
    };
  }
  /**
   * Returns popover item root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Called on popover item click
   */
  handleClick() {
    if (this.isConfirmationStateEnabled) {
      this.activateOrEnableConfirmationMode(this.confirmationState);
      return;
    }
    this.activateOrEnableConfirmationMode(this.params);
  }
  /**
   * Toggles item active state
   *
   * @param isActive - true if item should strictly should become active
   */
  toggleActive(e) {
    this.nodes.root.classList.toggle(ae.CSS.active, e);
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    this.nodes.root.classList.toggle(ae.CSS.hidden, e);
  }
  /**
   * Resets popover item to its original state
   */
  reset() {
    this.isConfirmationStateEnabled && this.disableConfirmationMode();
  }
  /**
   * Method called once item becomes focused during keyboard navigation
   */
  onFocus() {
    this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Constructs HTML element corresponding to popover item params
   *
   * @param params - item construction params
   */
  make(e) {
    const t = m.make("div", ae.CSS.container);
    return e.name && (t.dataset.itemName = e.name), this.nodes.icon = m.make("div", ae.CSS.icon, {
      innerHTML: e.icon || id
    }), t.appendChild(this.nodes.icon), t.appendChild(m.make("div", ae.CSS.title, {
      innerHTML: e.title || ""
    })), e.secondaryLabel && t.appendChild(m.make("div", ae.CSS.secondaryTitle, {
      textContent: e.secondaryLabel
    })), e.isActive && t.classList.add(ae.CSS.active), e.isDisabled && t.classList.add(ae.CSS.disabled), t;
  }
  /**
   * Activates confirmation mode for the item.
   *
   * @param newState - new popover item params that should be applied
   */
  enableConfirmationMode(e) {
    const t = {
      ...this.params,
      ...e,
      confirmation: e.confirmation
    }, o = this.make(t);
    this.nodes.root.innerHTML = o.innerHTML, this.nodes.root.classList.add(ae.CSS.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
  }
  /**
   * Returns item to its original state
   */
  disableConfirmationMode() {
    const e = this.make(this.params);
    this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(ae.CSS.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Enables special focus and hover behavior for item in confirmation state.
   * This is needed to prevent item from being highlighted as hovered/focused just after click.
   */
  enableSpecialHoverAndFocusBehavior() {
    this.nodes.root.classList.add(ae.CSS.noHover), this.nodes.root.classList.add(ae.CSS.noFocus), this.nodes.root.addEventListener("mouseleave", this.removeSpecialHoverBehavior, { once: !0 });
  }
  /**
   * Disables special focus and hover behavior
   */
  disableSpecialHoverAndFocusBehavior() {
    this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), this.nodes.root.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
  }
  /**
   * Executes item's onActivate callback if the item has no confirmation configured
   *
   * @param item - item to activate or bring to confirmation mode
   */
  activateOrEnableConfirmationMode(e) {
    if (e.confirmation === void 0)
      try {
        e.onActivate(e), this.disableConfirmationMode();
      } catch {
        this.animateError();
      }
    else
      this.enableConfirmationMode(e.confirmation);
  }
  /**
   * Animates item which symbolizes that error occured while executing 'onActivate()' callback
   */
  animateError() {
    this.nodes.icon.classList.contains(ae.CSS.wobbleAnimation) || (this.nodes.icon.classList.add(ae.CSS.wobbleAnimation), this.nodes.icon.addEventListener("animationend", this.onErrorAnimationEnd));
  }
}
const bn = class {
  /**
   * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
   * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
   */
  constructor(n, e) {
    this.cursor = -1, this.items = [], this.items = n || [], this.focusedCssClass = e;
  }
  /**
   * Returns Focused button Node
   *
   * @returns {HTMLElement}
   */
  get currentItem() {
    return this.cursor === -1 ? null : this.items[this.cursor];
  }
  /**
   * Sets cursor to specified position
   *
   * @param cursorPosition - new cursor position
   */
  setCursor(n) {
    n < this.items.length && n >= -1 && (this.dropCursor(), this.cursor = n, this.items[this.cursor].classList.add(this.focusedCssClass));
  }
  /**
   * Sets items. Can be used when iterable items changed dynamically
   *
   * @param {HTMLElement[]} nodeList - nodes to iterate
   */
  setItems(n) {
    this.items = n;
  }
  /**
   * Sets cursor next to the current
   */
  next() {
    this.cursor = this.leafNodesAndReturnIndex(bn.directions.RIGHT);
  }
  /**
   * Sets cursor before current
   */
  previous() {
    this.cursor = this.leafNodesAndReturnIndex(bn.directions.LEFT);
  }
  /**
   * Sets cursor to the default position and removes CSS-class from previously focused item
   */
  dropCursor() {
    this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
  }
  /**
   * Leafs nodes inside the target list from active element
   *
   * @param {string} direction - leaf direction. Can be 'left' or 'right'
   * @returns {number} index of focused node
   */
  leafNodesAndReturnIndex(n) {
    if (this.items.length === 0)
      return this.cursor;
    let e = this.cursor;
    return e === -1 ? e = n === bn.directions.RIGHT ? -1 : 0 : this.items[e].classList.remove(this.focusedCssClass), n === bn.directions.RIGHT ? e = (e + 1) % this.items.length : e = (this.items.length + e - 1) % this.items.length, m.canSetCaret(this.items[e]) && Jn(() => _.setCursor(this.items[e]), 50)(), this.items[e].classList.add(this.focusedCssClass), e;
  }
};
let Wt = bn;
Wt.directions = {
  RIGHT: "right",
  LEFT: "left"
};
class rt {
  /**
   * @param {FlipperOptions} options - different constructing settings
   */
  constructor(e) {
    this.iterator = null, this.activated = !1, this.flipCallbacks = [], this.onKeyDown = (t) => {
      if (this.isEventReadyForHandling(t))
        switch (rt.usedKeys.includes(t.keyCode) && t.preventDefault(), t.keyCode) {
          case q.TAB:
            this.handleTabPress(t);
            break;
          case q.LEFT:
          case q.UP:
            this.flipLeft();
            break;
          case q.RIGHT:
          case q.DOWN:
            this.flipRight();
            break;
          case q.ENTER:
            this.handleEnterPress(t);
            break;
        }
    }, this.iterator = new Wt(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || rt.usedKeys;
  }
  /**
   * True if flipper is currently activated
   */
  get isActivated() {
    return this.activated;
  }
  /**
   * Array of keys (codes) that is handled by Flipper
   * Used to:
   *  - preventDefault only for this keys, not all keydowns (@see constructor)
   *  - to skip external behaviours only for these keys, when filler is activated (@see BlockEvents@arrowRightAndDown)
   */
  static get usedKeys() {
    return [
      q.TAB,
      q.LEFT,
      q.RIGHT,
      q.ENTER,
      q.UP,
      q.DOWN
    ];
  }
  /**
   * Active tab/arrows handling by flipper
   *
   * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
   * @param cursorPosition - index of the item that should be focused once flipper is activated
   */
  activate(e, t) {
    this.activated = !0, e && this.iterator.setItems(e), t !== void 0 && this.iterator.setCursor(t), document.addEventListener("keydown", this.onKeyDown, !0);
  }
  /**
   * Disable tab/arrows handling by flipper
   */
  deactivate() {
    this.activated = !1, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
  }
  /**
   * Focus first item
   */
  focusFirst() {
    this.dropCursor(), this.flipRight();
  }
  /**
   * Focuses previous flipper iterator item
   */
  flipLeft() {
    this.iterator.previous(), this.flipCallback();
  }
  /**
   * Focuses next flipper iterator item
   */
  flipRight() {
    this.iterator.next(), this.flipCallback();
  }
  /**
   * Return true if some button is focused
   */
  hasFocus() {
    return !!this.iterator.currentItem;
  }
  /**
   * Registeres function that should be executed on each navigation action
   *
   * @param cb - function to execute
   */
  onFlip(e) {
    this.flipCallbacks.push(e);
  }
  /**
   * Unregisteres function that is executed on each navigation action
   *
   * @param cb - function to stop executing
   */
  removeOnFlip(e) {
    this.flipCallbacks = this.flipCallbacks.filter((t) => t !== e);
  }
  /**
   * Drops flipper's iterator cursor
   *
   * @see DomIterator#dropCursor
   */
  dropCursor() {
    this.iterator.dropCursor();
  }
  /**
   * This function is fired before handling flipper keycodes
   * The result of this function defines if it is need to be handled or not
   *
   * @param {KeyboardEvent} event - keydown keyboard event
   * @returns {boolean}
   */
  isEventReadyForHandling(e) {
    return this.activated && this.allowedKeys.includes(e.keyCode);
  }
  /**
   * When flipper is activated tab press will leaf the items
   *
   * @param {KeyboardEvent} event - tab keydown event
   */
  handleTabPress(e) {
    switch (e.shiftKey ? Wt.directions.LEFT : Wt.directions.RIGHT) {
      case Wt.directions.RIGHT:
        this.flipRight();
        break;
      case Wt.directions.LEFT:
        this.flipLeft();
        break;
    }
  }
  /**
   * Enter press will click current item if flipper is activated
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  handleEnterPress(e) {
    this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), ie(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
  }
  /**
   * Fired after flipping in any direction
   */
  flipCallback() {
    this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e) => e());
  }
}
let dd = class Vn {
  /**
   * Styles
   */
  static get CSS() {
    return {
      wrapper: "cdx-search-field",
      icon: "cdx-search-field__icon",
      input: "cdx-search-field__input"
    };
  }
  /**
   * @param options - available config
   * @param options.items - searchable items list
   * @param options.onSearch - search callback
   * @param options.placeholder - input placeholder
   */
  constructor({ items: e, onSearch: t, placeholder: o }) {
    this.listeners = new Ni(), this.items = e, this.onSearch = t, this.render(o);
  }
  /**
   * Returns search field element
   */
  getElement() {
    return this.wrapper;
  }
  /**
   * Sets focus to the input
   */
  focus() {
    this.input.focus();
  }
  /**
   * Clears search query and results
   */
  clear() {
    this.input.value = "", this.searchQuery = "", this.onSearch("", this.foundItems);
  }
  /**
   * Clears memory
   */
  destroy() {
    this.listeners.removeAll();
  }
  /**
   * Creates the search field
   *
   * @param placeholder - input placeholder
   */
  render(e) {
    this.wrapper = m.make("div", Vn.CSS.wrapper);
    const t = m.make("div", Vn.CSS.icon, {
      innerHTML: ud
    });
    this.input = m.make("input", Vn.CSS.input, {
      placeholder: e,
      /**
       * Used to prevent focusing on the input by Tab key
       * (Popover in the Toolbar lays below the blocks,
       * so Tab in the last block will focus this hidden input if this property is not set)
       */
      tabIndex: -1
    }), this.wrapper.appendChild(t), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", () => {
      this.searchQuery = this.input.value, this.onSearch(this.searchQuery, this.foundItems);
    });
  }
  /**
   * Returns list of found items for the current search query
   */
  get foundItems() {
    return this.items.filter((e) => this.checkItem(e));
  }
  /**
   * Contains logic for checking whether passed item conforms the search query
   *
   * @param item - item to be checked
   */
  checkItem(e) {
    var t;
    const o = ((t = e.title) == null ? void 0 : t.toLowerCase()) || "", i = this.searchQuery.toLowerCase();
    return o.includes(i);
  }
};
const mn = class {
  /**
   * Locks body element scroll
   */
  lock() {
    Hs ? this.lockHard() : document.body.classList.add(mn.CSS.scrollLocked);
  }
  /**
   * Unlocks body element scroll
   */
  unlock() {
    Hs ? this.unlockHard() : document.body.classList.remove(mn.CSS.scrollLocked);
  }
  /**
   * Locks scroll in a hard way (via setting fixed position to body element)
   */
  lockHard() {
    this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty(
      "--window-scroll-offset",
      `${this.scrollPosition}px`
    ), document.body.classList.add(mn.CSS.scrollLockedHard);
  }
  /**
   * Unlocks hard scroll lock
   */
  unlockHard() {
    document.body.classList.remove(mn.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
  }
};
let aa = mn;
aa.CSS = {
  scrollLocked: "ce-scroll-locked",
  scrollLockedHard: "ce-scroll-locked--hard"
};
var hd = Object.defineProperty, pd = Object.getOwnPropertyDescriptor, fd = (n, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? pd(e, t) : e, s = n.length - 1, r; s >= 0; s--)
    (r = n[s]) && (i = (o ? r(e, t, i) : r(i)) || i);
  return o && i && hd(e, t, i), i;
}, Sn = /* @__PURE__ */ ((n) => (n.Close = "close", n))(Sn || {});
const be = class extends fo {
  /**
   * Constructs the instance
   *
   * @param params - popover construction params
   */
  constructor(n) {
    super(), this.scopeElement = document.body, this.listeners = new Ni(), this.scrollLocker = new aa(), this.nodes = {
      wrapper: null,
      popover: null,
      nothingFoundMessage: null,
      customContent: null,
      items: null,
      overlay: null
    }, this.messages = {
      nothingFound: "Nothing found",
      search: "Search"
    }, this.onFlip = () => {
      this.items.find((e) => e.isFocused).onFocus();
    }, this.items = n.items.map((e) => new ae(e)), n.scopeElement !== void 0 && (this.scopeElement = n.scopeElement), n.messages && (this.messages = {
      ...this.messages,
      ...n.messages
    }), n.customContentFlippableItems && (this.customContentFlippableItems = n.customContentFlippableItems), this.make(), n.customContent && this.addCustomContent(n.customContent), n.searchable && this.addSearch(), this.initializeFlipper();
  }
  /**
   * Popover CSS classes
   */
  static get CSS() {
    return {
      popover: "ce-popover",
      popoverOpenTop: "ce-popover--open-top",
      popoverOpened: "ce-popover--opened",
      search: "ce-popover__search",
      nothingFoundMessage: "ce-popover__nothing-found-message",
      nothingFoundMessageDisplayed: "ce-popover__nothing-found-message--displayed",
      customContent: "ce-popover__custom-content",
      customContentHidden: "ce-popover__custom-content--hidden",
      items: "ce-popover__items",
      overlay: "ce-popover__overlay",
      overlayHidden: "ce-popover__overlay--hidden"
    };
  }
  /**
   * Returns HTML element corresponding to the popover
   */
  getElement() {
    return this.nodes.wrapper;
  }
  /**
   * Returns true if some item inside popover is focused
   */
  hasFocus() {
    return this.flipper.hasFocus();
  }
  /**
   * Open popover
   */
  show() {
    this.shouldOpenBottom || (this.nodes.popover.style.setProperty("--popover-height", this.height + "px"), this.nodes.popover.classList.add(be.CSS.popoverOpenTop)), this.nodes.overlay.classList.remove(be.CSS.overlayHidden), this.nodes.popover.classList.add(be.CSS.popoverOpened), this.flipper.activate(this.flippableElements), this.search !== void 0 && requestAnimationFrame(() => {
      var n;
      (n = this.search) == null || n.focus();
    }), Mt() && this.scrollLocker.lock();
  }
  /**
   * Closes popover
   */
  hide() {
    this.nodes.popover.classList.remove(be.CSS.popoverOpened), this.nodes.popover.classList.remove(be.CSS.popoverOpenTop), this.nodes.overlay.classList.add(be.CSS.overlayHidden), this.flipper.deactivate(), this.items.forEach((n) => n.reset()), this.search !== void 0 && this.search.clear(), Mt() && this.scrollLocker.unlock(), this.emit(
      "close"
      /* Close */
    );
  }
  /**
   * Clears memory
   */
  destroy() {
    this.flipper.deactivate(), this.listeners.removeAll(), Mt() && this.scrollLocker.unlock();
  }
  /**
   * Constructs HTML element corresponding to popover
   */
  make() {
    this.nodes.popover = m.make("div", [be.CSS.popover]), this.nodes.nothingFoundMessage = m.make("div", [be.CSS.nothingFoundMessage], {
      textContent: this.messages.nothingFound
    }), this.nodes.popover.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = m.make("div", [be.CSS.items]), this.items.forEach((n) => {
      this.nodes.items.appendChild(n.getElement());
    }), this.nodes.popover.appendChild(this.nodes.items), this.listeners.on(this.nodes.popover, "click", (n) => {
      const e = this.getTargetItem(n);
      e !== void 0 && this.handleItemClick(e);
    }), this.nodes.wrapper = m.make("div"), this.nodes.overlay = m.make("div", [be.CSS.overlay, be.CSS.overlayHidden]), this.listeners.on(this.nodes.overlay, "click", () => {
      this.hide();
    }), this.nodes.wrapper.appendChild(this.nodes.overlay), this.nodes.wrapper.appendChild(this.nodes.popover);
  }
  /**
   * Adds search to the popover
   */
  addSearch() {
    this.search = new dd({
      items: this.items,
      placeholder: this.messages.search,
      onSearch: (e, t) => {
        this.items.forEach((i) => {
          const s = !t.includes(i);
          i.toggleHidden(s);
        }), this.toggleNothingFoundMessage(t.length === 0), this.toggleCustomContent(e !== "");
        const o = e === "" ? this.flippableElements : t.map((i) => i.getElement());
        this.flipper.isActivated && (this.flipper.deactivate(), this.flipper.activate(o));
      }
    });
    const n = this.search.getElement();
    n.classList.add(be.CSS.search), this.nodes.popover.insertBefore(n, this.nodes.popover.firstChild);
  }
  /**
   * Adds custom html content to the popover
   *
   * @param content - html content to append
   */
  addCustomContent(n) {
    this.nodes.customContent = n, this.nodes.customContent.classList.add(be.CSS.customContent), this.nodes.popover.insertBefore(n, this.nodes.popover.firstChild);
  }
  /**
   * Retrieves popover item that is the target of the specified event
   *
   * @param event - event to retrieve popover item from
   */
  getTargetItem(n) {
    return this.items.find((e) => n.composedPath().includes(e.getElement()));
  }
  /**
   * Handles item clicks
   *
   * @param item - item to handle click of
   */
  handleItemClick(n) {
    n.isDisabled || (this.items.filter((e) => e !== n).forEach((e) => e.reset()), n.handleClick(), this.toggleItemActivenessIfNeeded(n), n.closeOnActivate && this.hide());
  }
  /**
   * Creates Flipper instance which allows to navigate between popover items via keyboard
   */
  initializeFlipper() {
    this.flipper = new rt({
      items: this.flippableElements,
      focusedItemClass: ae.CSS.focused,
      allowedKeys: [
        q.TAB,
        q.UP,
        q.DOWN,
        q.ENTER
      ]
    }), this.flipper.onFlip(this.onFlip);
  }
  /**
   * Returns list of elements available for keyboard navigation.
   * Contains both usual popover items elements and custom html content.
   */
  get flippableElements() {
    const n = this.items.map((e) => e.getElement());
    return (this.customContentFlippableItems || []).concat(n);
  }
  get height() {
    let n = 0;
    if (this.nodes.popover === null)
      return n;
    const e = this.nodes.popover.cloneNode(!0);
    return e.style.visibility = "hidden", e.style.position = "absolute", e.style.top = "-1000px", e.classList.add(be.CSS.popoverOpened), document.body.appendChild(e), n = e.offsetHeight, e.remove(), n;
  }
  /**
   * Checks if popover should be opened bottom.
   * It should happen when there is enough space below or not enough space above
   */
  get shouldOpenBottom() {
    const n = this.nodes.popover.getBoundingClientRect(), e = this.scopeElement.getBoundingClientRect(), t = this.height, o = n.top + t, i = n.top - t, s = Math.min(window.innerHeight, e.bottom);
    return i < e.top || o <= s;
  }
  /**
   * Toggles nothing found message visibility
   *
   * @param isDisplayed - true if the message should be displayed
   */
  toggleNothingFoundMessage(n) {
    this.nodes.nothingFoundMessage.classList.toggle(be.CSS.nothingFoundMessageDisplayed, n);
  }
  /**
   * Toggles custom content visibility
   *
   * @param isDisplayed - true if custom content should be displayed
   */
  toggleCustomContent(n) {
    var e;
    (e = this.nodes.customContent) == null || e.classList.toggle(be.CSS.customContentHidden, n);
  }
  /**
   * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
   *
   * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
   * (All the other items with the same key get inactive, and the item gets active)
   *
   * @param clickedItem - popover item that was clicked
   */
  toggleItemActivenessIfNeeded(n) {
    if (n.toggle === !0 && n.toggleActive(), typeof n.toggle == "string") {
      const e = this.items.filter((t) => t.toggle === n.toggle);
      if (e.length === 1) {
        n.toggleActive();
        return;
      }
      e.forEach((t) => {
        t.toggleActive(t === n);
      });
    }
  }
};
let _i = be;
fd([
  on
], _i.prototype, "height", 1);
class gd extends K {
  constructor() {
    super(...arguments), this.opened = !1, this.selection = new _(), this.onPopoverClose = () => {
      this.close();
    };
  }
  /**
   * Module Events
   *
   * @returns {{opened: string, closed: string}}
   */
  get events() {
    return {
      opened: "block-settings-opened",
      closed: "block-settings-closed"
    };
  }
  /**
   * Block Settings CSS
   */
  get CSS() {
    return {
      settings: "ce-settings"
    };
  }
  /**
   * Getter for inner popover's flipper instance
   *
   * @todo remove once BlockSettings becomes standalone non-module class
   */
  get flipper() {
    var e;
    return (e = this.popover) == null ? void 0 : e.flipper;
  }
  /**
   * Panel with block settings with 2 sections:
   *  - Tool's Settings
   *  - Default Settings [Move, Remove, etc]
   */
  make() {
    this.nodes.wrapper = m.make("div", [this.CSS.settings]);
  }
  /**
   * Destroys module
   */
  destroy() {
    this.removeAllNodes();
  }
  /**
   * Open Block Settings pane
   *
   * @param targetBlock - near which Block we should open BlockSettings
   */
  open(e = this.Editor.BlockManager.currentBlock) {
    this.opened = !0, this.selection.save(), this.Editor.BlockSelection.selectBlock(e), this.Editor.BlockSelection.clearCache();
    const [t, o] = e.getTunes();
    this.eventsDispatcher.emit(this.events.opened), this.popover = new _i({
      searchable: !0,
      items: t.map((i) => this.resolveTuneAliases(i)),
      customContent: o,
      customContentFlippableItems: this.getControls(o),
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: Me.ui(Ve.ui.popover, "Nothing found"),
        search: Me.ui(Ve.ui.popover, "Filter")
      }
    }), this.popover.on(Sn.Close, this.onPopoverClose), this.nodes.wrapper.append(this.popover.getElement()), this.popover.show();
  }
  /**
   * Returns root block settings element
   */
  getElement() {
    return this.nodes.wrapper;
  }
  /**
   * Close Block Settings pane
   */
  close() {
    this.opened && (this.opened = !1, _.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && this.Editor.BlockSelection.unselectBlock(this.Editor.BlockManager.currentBlock), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(Sn.Close, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null));
  }
  /**
   * Returns list of buttons and inputs inside specified container
   *
   * @param container - container to query controls inside of
   */
  getControls(e) {
    const { StylesAPI: t } = this.Editor, o = e.querySelectorAll(
      `.${t.classes.settingsButton}, ${m.allInputsSelector}`
    );
    return Array.from(o);
  }
  /**
   * Resolves aliases in tunes menu items
   *
   * @param item - item with resolved aliases
   */
  resolveTuneAliases(e) {
    const t = ed(e, { label: "title" });
    return e.confirmation && (t.confirmation = this.resolveTuneAliases(e.confirmation)), t;
  }
}
let bd = class Pe extends K {
  constructor() {
    super(...arguments), this.opened = !1, this.tools = [], this.flipper = null, this.togglingCallback = null;
  }
  /**
   * CSS getter
   */
  static get CSS() {
    return {
      conversionToolbarWrapper: "ce-conversion-toolbar",
      conversionToolbarShowed: "ce-conversion-toolbar--showed",
      conversionToolbarTools: "ce-conversion-toolbar__tools",
      conversionToolbarLabel: "ce-conversion-toolbar__label",
      conversionTool: "ce-conversion-tool",
      conversionToolHidden: "ce-conversion-tool--hidden",
      conversionToolIcon: "ce-conversion-tool__icon",
      conversionToolSecondaryLabel: "ce-conversion-tool__secondary-label",
      conversionToolFocused: "ce-conversion-tool--focused",
      conversionToolActive: "ce-conversion-tool--active"
    };
  }
  /**
   * Create UI of Conversion Toolbar
   */
  make() {
    this.nodes.wrapper = m.make("div", [
      Pe.CSS.conversionToolbarWrapper,
      ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
    ]), this.nodes.tools = m.make("div", Pe.CSS.conversionToolbarTools);
    const e = m.make("div", Pe.CSS.conversionToolbarLabel, {
      textContent: Me.ui(Ve.ui.inlineToolbar.converter, "Convert to")
    });
    return this.addTools(), this.enableFlipper(), m.append(this.nodes.wrapper, e), m.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper;
  }
  /**
   * Deactivates flipper and removes all nodes
   */
  destroy() {
    this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
  }
  /**
   * Toggle conversion dropdown visibility
   *
   * @param {Function} [togglingCallback] — callback that will accept opening state
   */
  toggle(e) {
    this.opened ? this.close() : this.open(), ie(e) && (this.togglingCallback = e);
  }
  /**
   * Shows Conversion Toolbar
   */
  open() {
    this.filterTools(), this.opened = !0, this.nodes.wrapper.classList.add(Pe.CSS.conversionToolbarShowed), window.requestAnimationFrame(() => {
      this.flipper.activate(this.tools.map((e) => e.button).filter((e) => !e.classList.contains(Pe.CSS.conversionToolHidden))), this.flipper.focusFirst(), ie(this.togglingCallback) && this.togglingCallback(!0);
    });
  }
  /**
   * Closes Conversion Toolbar
   */
  close() {
    this.opened = !1, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(Pe.CSS.conversionToolbarShowed), ie(this.togglingCallback) && this.togglingCallback(!1);
  }
  /**
   * Returns true if it has more than one tool available for convert in
   */
  hasTools() {
    return this.tools.length === 1 ? this.tools[0].name !== this.config.defaultBlock : !0;
  }
  /**
   * Replaces one Block with another
   * For that Tools must provide import/export methods
   *
   * @param {string} replacingToolName - name of Tool which replaces current
   * @param blockDataOverrides - If this conversion fired by the one of multiple Toolbox items, extend converted data with this item's "data" overrides
   */
  async replaceWithBlock(e, t) {
    const { BlockManager: o, BlockSelection: i, InlineToolbar: s, Caret: r } = this.Editor;
    o.convert(this.Editor.BlockManager.currentBlock, e, t), i.clearSelection(), this.close(), s.close(), window.requestAnimationFrame(() => {
      r.setToBlock(this.Editor.BlockManager.currentBlock, r.positions.END);
    });
  }
  /**
   * Iterates existing Tools and inserts to the ConversionToolbar
   * if tools have ability to import
   */
  addTools() {
    const e = this.Editor.Tools.blockTools;
    Array.from(e.entries()).forEach(([t, o]) => {
      var i;
      const s = o.conversionConfig;
      !s || !s.import || (i = o.toolbox) == null || i.forEach(
        (r) => this.addToolIfValid(t, r)
      );
    });
  }
  /**
   * Inserts a tool to the ConversionToolbar if the tool's toolbox config is valid
   *
   * @param name - tool's name
   * @param toolboxSettings - tool's single toolbox setting
   */
  addToolIfValid(e, t) {
    Fe(t) || !t.icon || this.addTool(e, t);
  }
  /**
   * Add tool to the Conversion Toolbar
   *
   * @param toolName - name of Tool to add
   * @param toolboxItem - tool's toolbox item data
   */
  addTool(e, t) {
    var o;
    const i = m.make("div", [Pe.CSS.conversionTool]), s = m.make("div", [Pe.CSS.conversionToolIcon]);
    i.dataset.tool = e, s.innerHTML = t.icon, m.append(i, s), m.append(i, m.text(Me.t(Ve.toolNames, t.title || Qt(e))));
    const r = (o = this.Editor.Tools.blockTools.get(e)) == null ? void 0 : o.shortcut;
    if (r) {
      const a = m.make("span", Pe.CSS.conversionToolSecondaryLabel, {
        innerText: po(r)
      });
      m.append(i, a);
    }
    m.append(this.nodes.tools, i), this.tools.push({
      name: e,
      button: i,
      toolboxItem: t
    }), this.listeners.on(i, "click", async () => {
      await this.replaceWithBlock(e, t.data);
    });
  }
  /**
   * Hide current Tool and show others
   */
  async filterTools() {
    const { currentBlock: e } = this.Editor.BlockManager, t = await e.getActiveToolboxEntry();
    function o(i, s) {
      return i.icon === s.icon && i.title === s.title;
    }
    this.tools.forEach((i) => {
      let s = !1;
      if (t) {
        const r = o(t, i.toolboxItem);
        s = i.button.dataset.tool === e.name && r;
      }
      i.button.hidden = s, i.button.classList.toggle(Pe.CSS.conversionToolHidden, s);
    });
  }
  /**
   * Prepare Flipper to be able to leaf tools by arrows/tab
   */
  enableFlipper() {
    this.flipper = new rt({
      focusedItemClass: Pe.CSS.conversionToolFocused
    });
  }
};
var ai = {}, md = {
  get exports() {
    return ai;
  },
  set exports(n) {
    ai = n;
  }
};
/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(s) {
        if (o[s])
          return o[s].exports;
        var r = o[s] = { i: s, l: !1, exports: {} };
        return t[s].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
      }
      return i.m = t, i.c = o, i.d = function(s, r, a) {
        i.o(s, r) || Object.defineProperty(s, r, { enumerable: !0, get: a });
      }, i.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, i.t = function(s, r) {
        if (1 & r && (s = i(s)), 8 & r || 4 & r && typeof s == "object" && s && s.__esModule)
          return s;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: s }), 2 & r && typeof s != "string")
          for (var u in s)
            i.d(a, u, (function(l) {
              return s[l];
            }).bind(null, u));
        return a;
      }, i.n = function(s) {
        var r = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return i.d(r, "a", r), r;
      }, i.o = function(s, r) {
        return Object.prototype.hasOwnProperty.call(s, r);
      }, i.p = "", i(i.s = 0);
    }([function(t, o, i) {
      function s(u, l) {
        for (var c = 0; c < l.length; c++) {
          var d = l[c];
          d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(u, d.key, d);
        }
      }
      function r(u, l, c) {
        return l && s(u.prototype, l), c && s(u, c), u;
      }
      i.r(o);
      var a = function() {
        function u(l) {
          var c = this;
          (function(d, h) {
            if (!(d instanceof h))
              throw new TypeError("Cannot call a class as a function");
          })(this, u), this.commands = {}, this.keys = {}, this.name = l.name, this.parseShortcutName(l.name), this.element = l.on, this.callback = l.callback, this.executeShortcut = function(d) {
            c.execute(d);
          }, this.element.addEventListener("keydown", this.executeShortcut, !1);
        }
        return r(u, null, [{ key: "supportedCommands", get: function() {
          return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
        } }, { key: "keyCodes", get: function() {
          return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46, ".": 190 };
        } }]), r(u, [{ key: "parseShortcutName", value: function(l) {
          l = l.split("+");
          for (var c = 0; c < l.length; c++) {
            l[c] = l[c].toUpperCase();
            var d = !1;
            for (var h in u.supportedCommands)
              if (u.supportedCommands[h].includes(l[c])) {
                d = this.commands[h] = !0;
                break;
              }
            d || (this.keys[l[c]] = !0);
          }
          for (var g in u.supportedCommands)
            this.commands[g] || (this.commands[g] = !1);
        } }, { key: "execute", value: function(l) {
          var c, d = { CMD: l.ctrlKey || l.metaKey, SHIFT: l.shiftKey, ALT: l.altKey }, h = !0;
          for (c in this.commands)
            this.commands[c] !== d[c] && (h = !1);
          var g, f = !0;
          for (g in this.keys)
            f = f && l.keyCode === u.keyCodes[g];
          h && f && this.callback(l);
        } }, { key: "remove", value: function() {
          this.element.removeEventListener("keydown", this.executeShortcut);
        } }]), u;
      }();
      o.default = a;
    }]).default;
  });
})(md);
const xd = /* @__PURE__ */ Li(ai);
class vd {
  constructor() {
    this.registeredShortcuts = /* @__PURE__ */ new Map();
  }
  /**
   * Register shortcut
   *
   * @param shortcut - shortcut options
   */
  add(e) {
    if (this.findShortcut(e.on, e.name))
      throw Error(
        `Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`
      );
    const t = new xd({
      name: e.name,
      on: e.on,
      callback: e.handler
    }), o = this.registeredShortcuts.get(e.on) || [];
    this.registeredShortcuts.set(e.on, [...o, t]);
  }
  /**
   * Remove shortcut
   *
   * @param element - Element shortcut is set for
   * @param name - shortcut name
   */
  remove(e, t) {
    const o = this.findShortcut(e, t);
    if (!o)
      return;
    o.remove();
    const i = this.registeredShortcuts.get(e);
    this.registeredShortcuts.set(e, i.filter((s) => s !== o));
  }
  /**
   * Get Shortcut instance if exist
   *
   * @param element - Element shorcut is set for
   * @param shortcut - shortcut name
   * @returns {number} index - shortcut index if exist
   */
  findShortcut(e, t) {
    return (this.registeredShortcuts.get(e) || []).find(({ name: o }) => o === t);
  }
}
const en = new vd();
var yd = Object.defineProperty, wd = Object.getOwnPropertyDescriptor, ua = (n, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? wd(e, t) : e, s = n.length - 1, r; s >= 0; s--)
    (r = n[s]) && (i = (o ? r(e, t, i) : r(i)) || i);
  return o && i && yd(e, t, i), i;
}, zn = /* @__PURE__ */ ((n) => (n.Opened = "toolbox-opened", n.Closed = "toolbox-closed", n.BlockAdded = "toolbox-block-added", n))(zn || {});
const la = class extends fo {
  /**
   * Toolbox constructor
   *
   * @param options - available parameters
   * @param options.api - Editor API methods
   * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
   */
  constructor({ api: n, tools: e, i18nLabels: t }) {
    super(), this.opened = !1, this.nodes = {
      toolbox: null
    }, this.onPopoverClose = () => {
      this.opened = !1, this.emit(
        "toolbox-closed"
        /* Closed */
      );
    }, this.api = n, this.tools = e, this.i18nLabels = t;
  }
  /**
   * Returns True if Toolbox is Empty and nothing to show
   *
   * @returns {boolean}
   */
  get isEmpty() {
    return this.toolsToBeDisplayed.length === 0;
  }
  /**
   * CSS styles
   *
   * @returns {Object<string, string>}
   */
  static get CSS() {
    return {
      toolbox: "ce-toolbox"
    };
  }
  /**
   * Makes the Toolbox
   */
  make() {
    return this.popover = new _i({
      scopeElement: this.api.ui.nodes.redactor,
      searchable: !0,
      messages: {
        nothingFound: this.i18nLabels.nothingFound,
        search: this.i18nLabels.filter
      },
      items: this.toolboxItemsToBeDisplayed
    }), this.popover.on(Sn.Close, this.onPopoverClose), this.enableShortcuts(), this.nodes.toolbox = this.popover.getElement(), this.nodes.toolbox.classList.add(la.CSS.toolbox), this.nodes.toolbox;
  }
  /**
   * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
   */
  hasFocus() {
    var n;
    return (n = this.popover) == null ? void 0 : n.hasFocus();
  }
  /**
   * Destroy Module
   */
  destroy() {
    var n;
    super.destroy(), this.nodes && this.nodes.toolbox && (this.nodes.toolbox.remove(), this.nodes.toolbox = null), this.removeAllShortcuts(), (n = this.popover) == null || n.off(Sn.Close, this.onPopoverClose);
  }
  /**
   * Toolbox Tool's button click handler
   *
   * @param toolName - tool type to be activated
   * @param blockDataOverrides - Block data predefined by the activated Toolbox item
   */
  toolButtonActivated(n, e) {
    this.insertNewBlock(n, e);
  }
  /**
   * Open Toolbox with Tools
   */
  open() {
    var n;
    this.isEmpty || ((n = this.popover) == null || n.show(), this.opened = !0, this.emit(
      "toolbox-opened"
      /* Opened */
    ));
  }
  /**
   * Close Toolbox
   */
  close() {
    var n;
    (n = this.popover) == null || n.hide(), this.opened = !1, this.emit(
      "toolbox-closed"
      /* Closed */
    );
  }
  /**
   * Close Toolbox
   */
  toggle() {
    this.opened ? this.close() : this.open();
  }
  get toolsToBeDisplayed() {
    const n = [];
    return this.tools.forEach((e) => {
      e.toolbox && n.push(e);
    }), n;
  }
  get toolboxItemsToBeDisplayed() {
    const n = (e, t) => ({
      icon: e.icon,
      title: Me.t(Ve.toolNames, e.title || Qt(t.name)),
      name: t.name,
      onActivate: () => {
        this.toolButtonActivated(t.name, e.data);
      },
      secondaryLabel: t.shortcut ? po(t.shortcut) : ""
    });
    return this.toolsToBeDisplayed.reduce((e, t) => (Array.isArray(t.toolbox) ? t.toolbox.forEach((o) => {
      e.push(n(o, t));
    }) : t.toolbox !== void 0 && e.push(n(t.toolbox, t)), e), []);
  }
  /**
   * Iterate all tools and enable theirs shortcuts if specified
   */
  enableShortcuts() {
    this.toolsToBeDisplayed.forEach((n) => {
      const e = n.shortcut;
      e && this.enableShortcutForTool(n.name, e);
    });
  }
  /**
   * Enable shortcut Block Tool implemented shortcut
   *
   * @param {string} toolName - Tool name
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcutForTool(n, e) {
    en.add({
      name: e,
      on: this.api.ui.nodes.redactor,
      handler: (t) => {
        t.preventDefault();
        const o = this.api.blocks.getCurrentBlockIndex(), i = this.api.blocks.getBlockByIndex(o);
        if (i)
          try {
            this.api.blocks.convert(i.id, n), window.requestAnimationFrame(() => {
              this.api.caret.setToBlock(o, "end");
            });
            return;
          } catch {
          }
        this.insertNewBlock(n);
      }
    });
  }
  /**
   * Removes all added shortcuts
   * Fired when the Read-Only mode is activated
   */
  removeAllShortcuts() {
    this.toolsToBeDisplayed.forEach((n) => {
      const e = n.shortcut;
      e && en.remove(this.api.ui.nodes.redactor, e);
    });
  }
  /**
   * Inserts new block
   * Can be called when button clicked on Toolbox or by ShortcutData
   *
   * @param {string} toolName - Tool name
   * @param blockDataOverrides - predefined Block data
   */
  async insertNewBlock(n, e) {
    const t = this.api.blocks.getCurrentBlockIndex(), o = this.api.blocks.getBlockByIndex(t);
    if (!o)
      return;
    const i = o.isEmpty ? t : t + 1;
    let s;
    if (e) {
      const a = await this.api.blocks.composeBlockData(n);
      s = Object.assign(a, e);
    }
    const r = this.api.blocks.insert(
      n,
      s,
      void 0,
      i,
      void 0,
      o.isEmpty
    );
    r.call(ot.APPEND_CALLBACK), this.api.caret.setToBlock(i), this.emit("toolbox-block-added", {
      block: r
    }), this.api.toolbar.close();
  }
};
let Oi = la;
ua([
  on
], Oi.prototype, "toolsToBeDisplayed", 1);
ua([
  on
], Oi.prototype, "toolboxItemsToBeDisplayed", 1);
const ca = "block hovered";
class kd extends K {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.toolboxInstance = null;
  }
  /**
   * CSS styles
   *
   * @returns {object}
   */
  get CSS() {
    return {
      toolbar: "ce-toolbar",
      content: "ce-toolbar__content",
      actions: "ce-toolbar__actions",
      actionsOpened: "ce-toolbar__actions--opened",
      toolbarOpened: "ce-toolbar--opened",
      openedToolboxHolderModifier: "codex-editor--toolbox-opened",
      plusButton: "ce-toolbar__plus",
      plusButtonShortcut: "ce-toolbar__plus-shortcut",
      settingsToggler: "ce-toolbar__settings-btn",
      settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
    };
  }
  /**
   * Returns the Toolbar opening state
   *
   * @returns {boolean}
   */
  get opened() {
    return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
  }
  /**
   * Public interface for accessing the Toolbox
   */
  get toolbox() {
    var e;
    return {
      opened: (e = this.toolboxInstance) == null ? void 0 : e.opened,
      close: () => {
        var t;
        (t = this.toolboxInstance) == null || t.close();
      },
      open: () => {
        if (this.toolboxInstance === null) {
          X("toolbox.open() called before initialization is finished", "warn");
          return;
        }
        this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
      },
      toggle: () => {
        if (this.toolboxInstance === null) {
          X("toolbox.toggle() called before initialization is finished", "warn");
          return;
        }
        this.toolboxInstance.toggle();
      },
      hasFocus: () => {
        var t;
        return (t = this.toolboxInstance) == null ? void 0 : t.hasFocus();
      }
    };
  }
  /**
   * Block actions appearance manipulations
   */
  get blockActions() {
    return {
      hide: () => {
        this.nodes.actions.classList.remove(this.CSS.actionsOpened);
      },
      show: () => {
        this.nodes.actions.classList.add(this.CSS.actionsOpened);
      }
    };
  }
  /**
   * Methods for working with Block Tunes toggler
   */
  get blockTunesToggler() {
    return {
      hide: () => this.nodes.settingsToggler.classList.add(this.CSS.settingsTogglerHidden),
      show: () => this.nodes.settingsToggler.classList.remove(this.CSS.settingsTogglerHidden)
    };
  }
  /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */
  toggleReadOnly(e) {
    e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : window.requestIdleCallback(() => {
      this.drawUI(), this.enableModuleBindings();
    }, { timeout: 2e3 });
  }
  /**
   * Move Toolbar to the passed (or current) Block
   *
   * @param block - block to move Toolbar near it
   */
  moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
    if (this.toolboxInstance === null) {
      X("Can't open Toolbar since Editor initialization is not finished yet", "warn");
      return;
    }
    if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e)
      return;
    this.hoveredBlock = e;
    const t = e.holder, { isMobile: o } = this.Editor.UI, i = e.pluginsContent, s = window.getComputedStyle(i), r = parseInt(s.paddingTop, 10), a = t.offsetHeight;
    let u;
    o ? u = t.offsetTop + a : u = t.offsetTop + r, this.nodes.wrapper.style.top = `${Math.floor(u)}px`, this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
  }
  /**
   * Close the Toolbar
   */
  close() {
    var e, t;
    this.Editor.ReadOnly.isEnabled || ((e = this.nodes.wrapper) == null || e.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), (t = this.toolboxInstance) == null || t.close(), this.Editor.BlockSettings.close(), this.reset());
  }
  /**
   * Reset the Toolbar position to prevent DOM height growth, for example after blocks deletion
   */
  reset() {
    this.nodes.wrapper.style.top = "unset";
  }
  /**
   * Open Toolbar with Plus Button and Actions
   *
   * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
   *                                     This flag allows to open Toolbar without Actions.
   */
  open(e = !0) {
    this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
  }
  /**
   * Draws Toolbar elements
   */
  make() {
    this.nodes.wrapper = m.make("div", this.CSS.toolbar), ["content", "actions"].forEach((i) => {
      this.nodes[i] = m.make("div", this.CSS[i]);
    }), m.append(this.nodes.wrapper, this.nodes.content), m.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = m.make("div", this.CSS.plusButton, {
      innerHTML: ad
    }), m.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", () => {
      ri(!0), this.plusButtonClicked();
    }, !1);
    const e = m.make("div");
    e.appendChild(document.createTextNode(Me.ui(Ve.ui.toolbar.toolbox, "Add"))), e.appendChild(m.make("div", this.CSS.plusButtonShortcut, {
      textContent: "/"
    })), kn(this.nodes.plusButton, e, {
      hidingDelay: 400
    }), this.nodes.settingsToggler = m.make("span", this.CSS.settingsToggler, {
      innerHTML: rd
    }), m.append(this.nodes.actions, this.nodes.settingsToggler);
    const t = m.make("div"), o = m.text(Me.ui(Ve.ui.blockTunes.toggler, "Click to tune"));
    t.appendChild(o), t.appendChild(m.make("div", this.CSS.plusButtonShortcut, {
      textContent: po("CMD + /")
    })), kn(this.nodes.settingsToggler, t, {
      hidingDelay: 400
    }), m.append(this.nodes.actions, this.makeToolbox()), m.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), m.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  /**
   * Creates the Toolbox instance and return it's rendered element
   */
  makeToolbox() {
    return this.toolboxInstance = new Oi({
      api: this.Editor.API.methods,
      tools: this.Editor.Tools.blockTools,
      i18nLabels: {
        filter: Me.ui(Ve.ui.popover, "Filter"),
        nothingFound: Me.ui(Ve.ui.popover, "Nothing found")
      }
    }), this.toolboxInstance.on(zn.Opened, () => {
      this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(zn.Closed, () => {
      this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(zn.BlockAdded, ({ block: e }) => {
      const { BlockManager: t, Caret: o } = this.Editor, i = t.getBlockById(e.id);
      i.inputs.length === 0 && (i === t.lastBlock ? (t.insertAtEnd(), o.setToBlock(t.lastBlock)) : o.setToBlock(t.nextBlock));
    }), this.toolboxInstance.make();
  }
  /**
   * Handler for Plus Button
   */
  plusButtonClicked() {
    var e;
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, (e = this.toolboxInstance) == null || e.toggle();
  }
  /**
   * Enable bindings
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", (e) => {
      var t;
      e.stopPropagation(), this.settingsTogglerClicked(), (t = this.toolboxInstance) != null && t.opened && this.toolboxInstance.close(), ri(!0);
    }, !0), Mt() || this.eventsDispatcher.on(ca, (e) => {
      var t;
      this.Editor.BlockSettings.opened || (t = this.toolboxInstance) != null && t.opened || this.moveAndOpen(e.block);
    });
  }
  /**
   * Disable bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Clicks on the Block Settings toggler
   */
  settingsTogglerClicked() {
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
  }
  /**
   * Draws Toolbar UI
   *
   * Toolbar contains BlockSettings and Toolbox.
   * That's why at first we draw its components and then Toolbar itself
   *
   * Steps:
   *  - Make Toolbar dependent components like BlockSettings, Toolbox and so on
   *  - Make itself and append dependent nodes to itself
   *
   */
  drawUI() {
    this.Editor.BlockSettings.make(), this.make();
  }
  /**
   * Removes all created and saved HTMLElements
   * It is used in Read-Only mode
   */
  destroy() {
    this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy();
  }
}
var go = /* @__PURE__ */ ((n) => (n[n.Block = 0] = "Block", n[n.Inline = 1] = "Inline", n[n.Tune = 2] = "Tune", n))(go || {}), Gn = /* @__PURE__ */ ((n) => (n.Shortcut = "shortcut", n.Toolbox = "toolbox", n.EnabledInlineTools = "inlineToolbar", n.EnabledBlockTunes = "tunes", n.Config = "config", n))(Gn || {}), da = /* @__PURE__ */ ((n) => (n.Shortcut = "shortcut", n.SanitizeConfig = "sanitize", n))(da || {}), Kt = /* @__PURE__ */ ((n) => (n.IsEnabledLineBreaks = "enableLineBreaks", n.Toolbox = "toolbox", n.ConversionConfig = "conversionConfig", n.IsReadOnlySupported = "isReadOnlySupported", n.PasteConfig = "pasteConfig", n))(Kt || {}), Di = /* @__PURE__ */ ((n) => (n.IsInline = "isInline", n.Title = "title", n))(Di || {}), ha = /* @__PURE__ */ ((n) => (n.IsTune = "isTune", n))(ha || {});
class Pi {
  /**
   * @class
   * @param {ConstructorOptions} options - Constructor options
   */
  constructor({
    name: e,
    constructable: t,
    config: o,
    api: i,
    isDefault: s,
    isInternal: r = !1,
    defaultPlaceholder: a
  }) {
    this.api = i, this.name = e, this.constructable = t, this.config = o, this.isDefault = s, this.isInternal = r, this.defaultPlaceholder = a;
  }
  /**
   * Returns Tool user configuration
   */
  get settings() {
    const e = this.config.config || {};
    return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), e;
  }
  /**
   * Calls Tool's reset method
   */
  reset() {
    if (ie(this.constructable.reset))
      return this.constructable.reset();
  }
  /**
   * Calls Tool's prepare method
   */
  prepare() {
    if (ie(this.constructable.prepare))
      return this.constructable.prepare({
        toolName: this.name,
        config: this.settings
      });
  }
  /**
   * Returns shortcut for Tool (internal or specified by user)
   */
  get shortcut() {
    const e = this.constructable.shortcut;
    return this.config.shortcut || e;
  }
  /**
   * Returns Tool's sanitizer configuration
   */
  get sanitizeConfig() {
    return this.constructable.sanitize || {};
  }
  /**
   * Returns true if Tools is inline
   */
  isInline() {
    return this.type === 1;
  }
  /**
   * Returns true if Tools is block
   */
  isBlock() {
    return this.type === 0;
  }
  /**
   * Returns true if Tools is tune
   */
  isTune() {
    return this.type === 2;
  }
}
class Sd extends K {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.CSS = {
      inlineToolbar: "ce-inline-toolbar",
      inlineToolbarShowed: "ce-inline-toolbar--showed",
      inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented",
      inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented",
      inlineToolbarShortcut: "ce-inline-toolbar__shortcut",
      buttonsWrapper: "ce-inline-toolbar__buttons",
      actionsWrapper: "ce-inline-toolbar__actions",
      inlineToolButton: "ce-inline-tool",
      inputField: "cdx-input",
      focusedButton: "ce-inline-tool--focused",
      conversionToggler: "ce-inline-toolbar__dropdown",
      conversionTogglerArrow: "ce-inline-toolbar__dropdown-arrow",
      conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden",
      conversionTogglerContent: "ce-inline-toolbar__dropdown-content",
      togglerAndButtonsWrapper: "ce-inline-toolbar__toggler-and-button-wrapper"
    }, this.opened = !1, this.toolbarVerticalMargin = Mt() ? 20 : 6, this.buttonsList = null, this.width = 0, this.flipper = null;
  }
  /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */
  toggleReadOnly(e) {
    e ? (this.destroy(), this.Editor.ConversionToolbar.destroy()) : window.requestIdleCallback(() => {
      this.make();
    }, { timeout: 2e3 });
  }
  /**
   *  Moving / appearance
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Shows Inline Toolbar if something is selected
   *
   * @param [needToClose] - pass true to close toolbar if it is not allowed.
   *                                  Avoid to use it just for closing IT, better call .close() clearly.
   * @param [needToShowConversionToolbar] - pass false to not to show Conversion Toolbar
   */
  async tryToShow(e = !1, t = !0) {
    e && this.close(), this.allowedToShow() && (await this.addToolsFiltered(t), this.move(), this.open(t), this.Editor.Toolbar.close());
  }
  /**
   * Hides Inline Toolbar
   */
  close() {
    this.opened && (this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), Array.from(this.toolsInstances.entries()).forEach(([e, t]) => {
      const o = this.getToolShortcut(e);
      o && en.remove(this.Editor.UI.nodes.redactor, o), ie(t.clear) && t.clear();
    }), this.reset(), this.opened = !1, this.flipper.deactivate(), this.Editor.ConversionToolbar.close()));
  }
  /**
   * Check if node is contained by Inline Toolbar
   *
   * @param {Node} node — node to check
   */
  containsNode(e) {
    return this.nodes.wrapper === void 0 ? !1 : this.nodes.wrapper.contains(e);
  }
  /**
   * Removes UI and its components
   */
  destroy() {
    this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
  }
  /**
   * Making DOM
   */
  make() {
    this.nodes.wrapper = m.make("div", [
      this.CSS.inlineToolbar,
      ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
    ]), this.nodes.togglerAndButtonsWrapper = m.make("div", this.CSS.togglerAndButtonsWrapper), this.nodes.buttons = m.make("div", this.CSS.buttonsWrapper), this.nodes.actions = m.make("div", this.CSS.actionsWrapper), this.listeners.on(this.nodes.wrapper, "mousedown", (e) => {
      e.target.closest(`.${this.CSS.actionsWrapper}`) || e.preventDefault();
    }), m.append(this.nodes.wrapper, [this.nodes.togglerAndButtonsWrapper, this.nodes.actions]), m.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), m.append(this.nodes.togglerAndButtonsWrapper, this.nodes.buttons), this.prepareConversionToolbar(), window.requestAnimationFrame(() => {
      this.recalculateWidth();
    }), this.enableFlipper();
  }
  /**
   * Shows Inline Toolbar
   */
  open() {
    if (this.opened)
      return;
    this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.buttonsList = this.nodes.buttons.querySelectorAll(`.${this.CSS.inlineToolButton}`), this.opened = !0;
    let e = Array.from(this.buttonsList);
    e.unshift(this.nodes.conversionToggler), e = e.filter((t) => !t.hidden), this.flipper.activate(e);
  }
  /**
   * Move Toolbar to the selected text
   */
  move() {
    const e = _.rect, t = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), o = {
      x: e.x - t.x,
      y: e.y + e.height - // + window.scrollY
      t.top + this.toolbarVerticalMargin
    };
    o.x + this.width + t.x > this.Editor.UI.contentRect.right && (o.x = this.Editor.UI.contentRect.right - this.width - t.x), this.nodes.wrapper.style.left = Math.floor(o.x) + "px", this.nodes.wrapper.style.top = Math.floor(o.y) + "px";
  }
  /**
   * Clear orientation classes and reset position
   */
  reset() {
    this.nodes.wrapper.classList.remove(
      this.CSS.inlineToolbarLeftOriented,
      this.CSS.inlineToolbarRightOriented
    ), this.nodes.wrapper.style.left = "0", this.nodes.wrapper.style.top = "0";
  }
  /**
   * Need to show Inline Toolbar or not
   */
  allowedToShow() {
    const e = ["IMG", "INPUT"], t = _.get(), o = _.text;
    if (!t || !t.anchorNode || t.isCollapsed || o.length < 1)
      return !1;
    const i = m.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
    if (t && e.includes(i.tagName) || i.closest('[contenteditable="true"]') === null)
      return !1;
    const s = this.Editor.BlockManager.getBlock(t.anchorNode);
    return s ? s.tool.inlineTools.size !== 0 : !1;
  }
  /**
   * Recalculate inline toolbar width
   */
  recalculateWidth() {
    this.width = this.nodes.wrapper.offsetWidth;
  }
  /**
   * Create a toggler for Conversion Dropdown
   * and prepend it to the buttons list
   */
  addConversionToggler() {
    this.nodes.conversionToggler = m.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = m.make("div", this.CSS.conversionTogglerContent);
    const e = m.make("div", this.CSS.conversionTogglerArrow, {
      innerHTML: ra
    });
    this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(e), this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler), this.listeners.on(this.nodes.conversionToggler, "click", () => {
      this.Editor.ConversionToolbar.toggle((t) => {
        !t && this.opened ? this.flipper.activate() : this.opened && this.flipper.deactivate();
      });
    }), Mt() === !1 && kn(this.nodes.conversionToggler, Me.ui(Ve.ui.inlineToolbar.converter, "Convert to"), {
      placement: "top",
      hidingDelay: 100
    });
  }
  /**
   * Changes Conversion Dropdown content for current block's Tool
   */
  async setConversionTogglerContent() {
    const { BlockManager: e } = this.Editor, { currentBlock: t } = e, o = t.name, i = t.tool.conversionConfig, s = i && i.export;
    this.nodes.conversionToggler.hidden = !s, this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden, !s);
    const r = await t.getActiveToolboxEntry() || {};
    this.nodes.conversionTogglerContent.innerHTML = r.icon || r.title || Qt(o);
  }
  /**
   * Makes the Conversion Dropdown
   */
  prepareConversionToolbar() {
    const e = this.Editor.ConversionToolbar.make();
    m.append(this.nodes.wrapper, e);
  }
  /**
   *  Working with Tools
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Append only allowed Tools
   *
   * @param {boolean} needToShowConversionToolbar - pass false to not to show Conversion Toolbar (e.g. for Footnotes-like tools)
   */
  async addToolsFiltered(e = !0) {
    const t = _.get(), o = this.Editor.BlockManager.getBlock(t.anchorNode);
    this.nodes.buttons.innerHTML = "", this.nodes.actions.innerHTML = "", this.toolsInstances = /* @__PURE__ */ new Map(), Array.from(o.tool.inlineTools.values()).forEach((i) => {
      this.addTool(i);
    }), e && this.Editor.ConversionToolbar.hasTools() ? await this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = !0, this.recalculateWidth();
  }
  /**
   * Add tool button and activate clicks
   *
   * @param {InlineTool} tool - InlineTool object
   */
  addTool(e) {
    const t = e.create(), o = t.render();
    if (!o) {
      X("Render method must return an instance of Node", "warn", e.name);
      return;
    }
    if (o.dataset.tool = e.name, this.nodes.buttons.appendChild(o), this.toolsInstances.set(e.name, t), ie(t.renderActions)) {
      const a = t.renderActions();
      this.nodes.actions.appendChild(a);
    }
    this.listeners.on(o, "click", (a) => {
      this.toolClicked(t), a.preventDefault();
    });
    const i = this.getToolShortcut(e.name);
    if (i)
      try {
        this.enableShortcuts(t, i);
      } catch {
      }
    const s = m.make("div"), r = Me.t(
      Ve.toolNames,
      e.title || Qt(e.name)
    );
    s.appendChild(m.text(r)), i && s.appendChild(m.make("div", this.CSS.inlineToolbarShortcut, {
      textContent: po(i)
    })), Mt() === !1 && kn(o, s, {
      placement: "top",
      hidingDelay: 100
    }), t.checkState(_.get());
  }
  /**
   * Get shortcut name for tool
   *
   * @param toolName — Tool name
   */
  getToolShortcut(e) {
    const { Tools: t } = this.Editor, o = t.inlineTools.get(e), i = t.internal.inlineTools;
    return Array.from(i.keys()).includes(e) ? this.inlineTools[e][da.Shortcut] : o.shortcut;
  }
  /**
   * Enable Tool shortcut with Editor Shortcuts Module
   *
   * @param {InlineTool} tool - Tool instance
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcuts(e, t) {
    en.add({
      name: t,
      handler: (o) => {
        const { currentBlock: i } = this.Editor.BlockManager;
        i && i.tool.enabledInlineTools && (o.preventDefault(), this.toolClicked(e));
      },
      on: this.Editor.UI.nodes.redactor
    });
  }
  /**
   * Inline Tool button clicks
   *
   * @param {InlineTool} tool - Tool's instance
   */
  toolClicked(e) {
    const t = _.range;
    e.surround(t), this.checkToolsState(), e.renderActions !== void 0 && this.flipper.deactivate();
  }
  /**
   * Check Tools` state by selection
   */
  checkToolsState() {
    this.toolsInstances.forEach((e) => {
      e.checkState(_.get());
    });
  }
  /**
   * Get inline tools tools
   * Tools that has isInline is true
   */
  get inlineTools() {
    const e = {};
    return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(([t, o]) => {
      e[t] = o.create();
    }), e;
  }
  /**
   * Allow to leaf buttons by arrows / tab
   * Buttons will be filled on opening
   */
  enableFlipper() {
    this.flipper = new rt({
      focusedItemClass: this.CSS.focusedButton,
      allowedKeys: [
        q.ENTER,
        q.TAB
      ]
    });
  }
}
class Cd extends K {
  /**
   * All keydowns on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  keydown(e) {
    switch (this.beforeKeydownProcessing(e), e.keyCode) {
      case q.BACKSPACE:
        this.backspace(e);
        break;
      case q.DELETE:
        this.delete(e);
        break;
      case q.ENTER:
        this.enter(e);
        break;
      case q.DOWN:
      case q.RIGHT:
        this.arrowRightAndDown(e);
        break;
      case q.UP:
      case q.LEFT:
        this.arrowLeftAndUp(e);
        break;
      case q.TAB:
        this.tabPressed(e);
        break;
      case q.SLASH:
        e.ctrlKey || e.metaKey ? this.commandSlashPressed() : this.slashPressed();
        break;
    }
  }
  /**
   * Fires on keydown before event processing
   *
   * @param {KeyboardEvent} event - keydown
   */
  beforeKeydownProcessing(e) {
    this.needToolbarClosing(e) && Zr(e.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || this.Editor.BlockSelection.clearSelection(e));
  }
  /**
   * Key up on Block:
   * - shows Inline Toolbar if something selected
   * - shows conversion toolbar with 85% of block selection
   *
   * @param {KeyboardEvent} event - keyup event
   */
  keyup(e) {
    e.shiftKey || this.Editor.UI.checkEmptiness();
  }
  /**
   * Add drop target styles
   *
   * @param {DragEvent} event - drag over event
   */
  dragOver(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = !0;
  }
  /**
   * Remove drop target style
   *
   * @param {DragEvent} event - drag leave event
   */
  dragLeave(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = !1;
  }
  /**
   * Copying selected blocks
   * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandC(e) {
    const { BlockSelection: t } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e);
  }
  /**
   * Copy and Delete selected Blocks
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandX(e) {
    const { BlockSelection: t, BlockManager: o, Caret: i } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e).then(() => {
      const s = o.removeSelectedBlocks(), r = o.insertDefaultBlockAtIndex(s, !0);
      i.setToBlock(r, i.positions.START), t.clearSelection(e);
    });
  }
  /**
   * Tab pressed inside a Block.
   *
   * @param {KeyboardEvent} event - keydown
   */
  tabPressed(e) {
    const { InlineToolbar: t, ConversionToolbar: o, Caret: i } = this.Editor;
    o.opened || t.opened || (e.shiftKey ? i.navigatePrevious(!0) : i.navigateNext(!0)) && e.preventDefault();
  }
  /**
   * '/' + 'command' keydown inside a Block
   */
  commandSlashPressed() {
    this.Editor.BlockSelection.selectedBlocks.length > 1 || this.activateBlockSettings();
  }
  /**
   * '/' keydown inside a Block
   */
  slashPressed() {
    this.Editor.BlockManager.currentBlock.isEmpty && this.activateToolbox();
  }
  /**
   * ENTER pressed on block
   *
   * @param {KeyboardEvent} event - keydown
   */
  enter(e) {
    const { BlockManager: t, UI: o } = this.Editor;
    if (t.currentBlock.tool.isLineBreaksEnabled || o.someToolbarOpened && o.someFlipperButtonFocused || e.shiftKey)
      return;
    let i = this.Editor.BlockManager.currentBlock;
    this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : this.Editor.Caret.isAtEnd ? i = this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex + 1) : i = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(i), this.Editor.Toolbar.moveAndOpen(i), e.preventDefault();
  }
  /**
   * Handle backspace keydown on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  backspace(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: i, previousBlock: s } = t;
    if (!(!_.isCollapsed || !o.isAtStart)) {
      if (e.preventDefault(), this.Editor.Toolbar.close(), i.currentInput !== i.firstInput) {
        o.navigatePrevious();
        return;
      }
      if (s !== null) {
        if (s.isEmpty) {
          t.removeBlock(s);
          return;
        }
        if (i.isEmpty) {
          t.removeBlock(i);
          const r = t.currentBlock;
          o.setToBlock(r, o.positions.END);
          return;
        }
        Fs(i, s) ? this.mergeBlocks(s, i) : o.setToBlock(s, o.positions.END);
      }
    }
  }
  /**
   * Handles delete keydown on Block
   * Removes char after the caret.
   * If caret is at the end of the block, merge next block with current
   *
   * @param {KeyboardEvent} event - keydown
   */
  delete(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: i, nextBlock: s } = t;
    if (!(!_.isCollapsed || !o.isAtEnd)) {
      if (e.preventDefault(), this.Editor.Toolbar.close(), i.currentInput !== i.lastInput) {
        o.navigateNext();
        return;
      }
      if (s !== null) {
        if (s.isEmpty) {
          t.removeBlock(s);
          return;
        }
        if (i.isEmpty) {
          t.removeBlock(i), o.setToBlock(s, o.positions.START);
          return;
        }
        Fs(i, s) ? this.mergeBlocks(i, s) : o.setToBlock(s, o.positions.START);
      }
    }
  }
  /**
   * Merge passed Blocks
   *
   * @param targetBlock - to which Block we want to merge
   * @param blockToMerge - what Block we want to merge
   */
  mergeBlocks(e, t) {
    const { BlockManager: o, Caret: i, Toolbar: s } = this.Editor;
    i.createShadow(e.pluginsContent), o.mergeBlocks(e, t).then(() => {
      window.requestAnimationFrame(() => {
        i.restoreCaret(e.pluginsContent), e.pluginsContent.normalize(), s.close();
      });
    });
  }
  /**
   * Handle right and down keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowRightAndDown(e) {
    const t = rt.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === q.TAB);
    if (this.Editor.UI.someToolbarOpened && t)
      return;
    this.Editor.Toolbar.close();
    const o = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === q.DOWN && o) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState();
      return;
    }
    if (e.keyCode === q.DOWN || e.keyCode === q.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) {
      e.preventDefault();
      return;
    }
    Jn(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Handle left and up keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowLeftAndUp(e) {
    if (this.Editor.UI.someToolbarOpened) {
      if (rt.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === q.TAB))
        return;
      this.Editor.UI.closeAllToolbars();
    }
    this.Editor.Toolbar.close();
    const t = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === q.UP && t) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1);
      return;
    }
    if (e.keyCode === q.UP || e.keyCode === q.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) {
      e.preventDefault();
      return;
    }
    Jn(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Cases when we need to close Toolbar
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  needToolbarClosing(e) {
    const t = e.keyCode === q.ENTER && this.Editor.Toolbar.toolbox.opened, o = e.keyCode === q.ENTER && this.Editor.BlockSettings.opened, i = e.keyCode === q.ENTER && this.Editor.InlineToolbar.opened, s = e.keyCode === q.ENTER && this.Editor.ConversionToolbar.opened, r = e.keyCode === q.TAB;
    return !(e.shiftKey || r || t || o || i || s);
  }
  /**
   * If Toolbox is not open, then just open it and show plus button
   */
  activateToolbox() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
  }
  /**
   * Open Toolbar and show BlockSettings before flipping Tools
   */
  activateBlockSettings() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
  }
}
class Lo {
  /**
   * @class
   * @param {HTMLElement} workingArea — editor`s working node
   */
  constructor(e) {
    this.blocks = [], this.workingArea = e;
  }
  /**
   * Get length of Block instances array
   *
   * @returns {number}
   */
  get length() {
    return this.blocks.length;
  }
  /**
   * Get Block instances array
   *
   * @returns {Block[]}
   */
  get array() {
    return this.blocks;
  }
  /**
   * Get blocks html elements array
   *
   * @returns {HTMLElement[]}
   */
  get nodes() {
    return Yr(this.workingArea.children);
  }
  /**
   * Proxy trap to implement array-like setter
   *
   * @example
   * blocks[0] = new Block(...)
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — block index or any Blocks class property key to set
   * @param {Block} value — value to set
   * @returns {boolean}
   */
  static set(e, t, o) {
    return isNaN(Number(t)) ? (Reflect.set(e, t, o), !0) : (e.insert(+t, o), !0);
  }
  /**
   * Proxy trap to implement array-like getter
   *
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — Blocks class property key
   * @returns {Block|*}
   */
  static get(e, t) {
    return isNaN(Number(t)) ? Reflect.get(e, t) : e.get(+t);
  }
  /**
   * Push new Block to the blocks array and append it to working area
   *
   * @param {Block} block - Block to add
   */
  push(e) {
    this.blocks.push(e), this.insertToDOM(e);
  }
  /**
   * Swaps blocks with indexes first and second
   *
   * @param {number} first - first block index
   * @param {number} second - second block index
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    const o = this.blocks[t];
    m.swap(this.blocks[e].holder, o.holder), this.blocks[t] = this.blocks[e], this.blocks[e] = o;
  }
  /**
   * Move a block from one to another index
   *
   * @param {number} toIndex - new index of the block
   * @param {number} fromIndex - block to move
   */
  move(e, t) {
    const o = this.blocks.splice(t, 1)[0], i = e - 1, s = Math.max(0, i), r = this.blocks[s];
    e > 0 ? this.insertToDOM(o, "afterend", r) : this.insertToDOM(o, "beforebegin", r), this.blocks.splice(e, 0, o);
    const a = this.composeBlockEvent("move", {
      fromIndex: t,
      toIndex: e
    });
    o.call(ot.MOVED, a);
  }
  /**
   * Insert new Block at passed index
   *
   * @param {number} index — index to insert Block
   * @param {Block} block — Block to insert
   * @param {boolean} replace — it true, replace block on given index
   */
  insert(e, t, o = !1) {
    if (!this.length) {
      this.push(t);
      return;
    }
    e > this.length && (e = this.length), o && (this.blocks[e].holder.remove(), this.blocks[e].call(ot.REMOVED));
    const i = o ? 1 : 0;
    if (this.blocks.splice(e, i, t), e > 0) {
      const s = this.blocks[e - 1];
      this.insertToDOM(t, "afterend", s);
    } else {
      const s = this.blocks[e + 1];
      s ? this.insertToDOM(t, "beforebegin", s) : this.insertToDOM(t);
    }
  }
  /**
   * Replaces block under passed index with passed block
   *
   * @param index - index of existed block
   * @param block - new block
   */
  replace(e, t) {
    if (this.blocks[e] === void 0)
      throw Error("Incorrect index");
    this.blocks[e].holder.replaceWith(t.holder), this.blocks[e] = t;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index to insert blocks at
   */
  insertMany(e, t) {
    const o = new DocumentFragment();
    for (const i of e)
      o.appendChild(i.holder);
    if (this.length > 0) {
      if (t > 0) {
        const i = Math.min(t - 1, this.length - 1);
        this.blocks[i].holder.after(o);
      } else
        t === 0 && this.workingArea.prepend(o);
      this.blocks.splice(t, 0, ...e);
    } else
      this.blocks.push(...e), this.workingArea.appendChild(o);
    e.forEach((i) => i.call(ot.RENDERED));
  }
  /**
   * Remove block
   *
   * @param {number} index - index of Block to remove
   */
  remove(e) {
    isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(ot.REMOVED), this.blocks.splice(e, 1);
  }
  /**
   * Remove all blocks
   */
  removeAll() {
    this.workingArea.innerHTML = "", this.blocks.forEach((e) => e.call(ot.REMOVED)), this.blocks.length = 0;
  }
  /**
   * Insert Block after passed target
   *
   * @todo decide if this method is necessary
   * @param {Block} targetBlock — target after which Block should be inserted
   * @param {Block} newBlock — Block to insert
   */
  insertAfter(e, t) {
    const o = this.blocks.indexOf(e);
    this.insert(o + 1, t);
  }
  /**
   * Get Block by index
   *
   * @param {number} index — Block index
   * @returns {Block}
   */
  get(e) {
    return this.blocks[e];
  }
  /**
   * Return index of passed Block
   *
   * @param {Block} block - Block to find
   * @returns {number}
   */
  indexOf(e) {
    return this.blocks.indexOf(e);
  }
  /**
   * Insert new Block into DOM
   *
   * @param {Block} block - Block to insert
   * @param {InsertPosition} position — insert position (if set, will use insertAdjacentElement)
   * @param {Block} target — Block related to position
   */
  insertToDOM(e, t, o) {
    t ? o.holder.insertAdjacentElement(t, e.holder) : this.workingArea.appendChild(e.holder), e.call(ot.RENDERED);
  }
  /**
   * Composes Block event with passed type and details
   *
   * @param {string} type - event type
   * @param {object} detail - event detail
   */
  composeBlockEvent(e, t) {
    return new CustomEvent(e, {
      detail: t
    });
  }
}
const $s = "block-removed", Us = "block-added", Ed = "block-moved", js = "block-changed";
class Td {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   *
   * @param operation - promise should be added to queue
   */
  add(e) {
    return new Promise((t, o) => {
      this.completed = this.completed.then(e).then(t).catch(o);
    });
  }
}
class Bd extends K {
  constructor() {
    super(...arguments), this._currentBlockIndex = -1, this._blocks = null;
  }
  /**
   * Returns current Block index
   *
   * @returns {number}
   */
  get currentBlockIndex() {
    return this._currentBlockIndex;
  }
  /**
   * Set current Block index and fire Block lifecycle callbacks
   *
   * @param {number} newIndex - index of Block to set as current
   */
  set currentBlockIndex(e) {
    this._currentBlockIndex = e;
  }
  /**
   * returns first Block
   *
   * @returns {Block}
   */
  get firstBlock() {
    return this._blocks[0];
  }
  /**
   * returns last Block
   *
   * @returns {Block}
   */
  get lastBlock() {
    return this._blocks[this._blocks.length - 1];
  }
  /**
   * Get current Block instance
   *
   * @returns {Block}
   */
  get currentBlock() {
    return this._blocks[this.currentBlockIndex];
  }
  /**
   * Set passed Block as a current
   *
   * @param block - block to set as a current
   */
  set currentBlock(e) {
    this.currentBlockIndex = this.getBlockIndex(e);
  }
  /**
   * Returns next Block instance
   *
   * @returns {Block|null}
   */
  get nextBlock() {
    return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
  }
  /**
   * Return first Block with inputs after current Block
   *
   * @returns {Block | undefined}
   */
  get nextContentfulBlock() {
    return this.blocks.slice(this.currentBlockIndex + 1).find((e) => !!e.inputs.length);
  }
  /**
   * Return first Block with inputs before current Block
   *
   * @returns {Block | undefined}
   */
  get previousContentfulBlock() {
    return this.blocks.slice(0, this.currentBlockIndex).reverse().find((e) => !!e.inputs.length);
  }
  /**
   * Returns previous Block instance
   *
   * @returns {Block|null}
   */
  get previousBlock() {
    return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
  }
  /**
   * Get array of Block instances
   *
   * @returns {Block[]} {@link Blocks#array}
   */
  get blocks() {
    return this._blocks.array;
  }
  /**
   * Check if each Block is empty
   *
   * @returns {boolean}
   */
  get isEditorEmpty() {
    return this.blocks.every((e) => e.isEmpty);
  }
  /**
   * Should be called after Editor.UI preparation
   * Define this._blocks property
   */
  prepare() {
    const e = new Lo(this.Editor.UI.nodes.redactor);
    this._blocks = new Proxy(e, {
      set: Lo.set,
      get: Lo.get
    }), this.listeners.on(
      document,
      "copy",
      (t) => this.Editor.BlockEvents.handleCommandC(t)
    );
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - Unbind event handlers from created Blocks
   *
   * if readOnly is false:
   *  - Bind event handlers to all existing Blocks
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Creates Block instance by tool name
   *
   * @param {object} options - block creation options
   * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
   * @param {string} [options.id] - unique id for this block
   * @param {BlockToolData} [options.data] - constructor params
   * @returns {Block}
   */
  composeBlock({
    tool: e,
    data: t = {},
    id: o = void 0,
    tunes: i = {}
  }) {
    const s = this.Editor.ReadOnly.isEnabled, r = this.Editor.Tools.blockTools.get(e), a = new xe({
      id: o,
      data: t,
      tool: r,
      api: this.Editor.API,
      readOnly: s,
      tunesData: i
    }, this.eventsDispatcher);
    return s || window.requestIdleCallback(() => {
      this.bindBlockEvents(a);
    }, { timeout: 2e3 }), a;
  }
  /**
   * Insert new block into _blocks
   *
   * @param {object} options - insert options
   * @param {string} [options.id] - block's unique id
   * @param {string} [options.tool] - plugin name, by default method inserts the default block type
   * @param {object} [options.data] - plugin data
   * @param {number} [options.index] - index where to insert new Block
   * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
   * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
   * @returns {Block}
   */
  insert({
    id: e = void 0,
    tool: t = this.config.defaultBlock,
    data: o = {},
    index: i,
    needToFocus: s = !0,
    replace: r = !1,
    tunes: a = {}
  } = {}) {
    let u = i;
    u === void 0 && (u = this.currentBlockIndex + (r ? 0 : 1));
    const l = this.composeBlock({
      id: e,
      tool: t,
      data: o,
      tunes: a
    });
    return r && this.blockDidMutated($s, this.getBlockByIndex(u), {
      index: u
    }), this._blocks.insert(u, l, r), this.blockDidMutated(Us, l, {
      index: u
    }), s ? this.currentBlockIndex = u : u <= this.currentBlockIndex && this.currentBlockIndex++, l;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index where to insert
   */
  insertMany(e, t = 0) {
    this._blocks.insertMany(e, t);
  }
  /**
   * Update Block data.
   *
   * Currently we don't have an 'update' method in the Tools API, so we just create a new block with the same id and type
   * Should not trigger 'block-removed' or 'block-added' events
   *
   * @param block - block to update
   * @param data - new data
   */
  async update(e, t) {
    const o = await e.data, i = this.composeBlock({
      id: e.id,
      tool: e.name,
      data: Object.assign({}, o, t),
      tunes: e.tunes
    }), s = this.getBlockIndex(e);
    return this._blocks.replace(s, i), this.blockDidMutated(js, i, {
      index: s
    }), i;
  }
  /**
   * Replace passed Block with the new one with specified Tool and data
   *
   * @param block - block to replace
   * @param newTool - new Tool name
   * @param data - new Tool data
   */
  replace(e, t, o) {
    const i = this.getBlockIndex(e);
    this.insert({
      tool: t,
      data: o,
      index: i,
      replace: !0
    });
  }
  /**
   * Insert pasted content. Call onPaste callback after insert.
   *
   * @param {string} toolName - name of Tool to insert
   * @param {PasteEvent} pasteEvent - pasted data
   * @param {boolean} replace - should replace current block
   */
  paste(e, t, o = !1) {
    const i = this.insert({
      tool: e,
      replace: o
    });
    try {
      window.requestIdleCallback(() => {
        i.call(ot.ON_PASTE, t);
      });
    } catch (s) {
      X(`${e}: onPaste callback call is failed`, "error", s);
    }
    return i;
  }
  /**
   * Insert new default block at passed index
   *
   * @param {number} index - index where Block should be inserted
   * @param {boolean} needToFocus - if true, updates current Block index
   *
   * TODO: Remove method and use insert() with index instead (?)
   * @returns {Block} inserted Block
   */
  insertDefaultBlockAtIndex(e, t = !1) {
    const o = this.composeBlock({ tool: this.config.defaultBlock });
    return this._blocks[e] = o, this.blockDidMutated(Us, o, {
      index: e
    }), t ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, o;
  }
  /**
   * Always inserts at the end
   *
   * @returns {Block}
   */
  insertAtEnd() {
    return this.currentBlockIndex = this.blocks.length - 1, this.insert();
  }
  /**
   * Merge two blocks
   *
   * @param {Block} targetBlock - previous block will be append to this block
   * @param {Block} blockToMerge - block that will be merged with target block
   * @returns {Promise} - the sequence that can be continued
   */
  async mergeBlocks(e, t) {
    const o = await t.data;
    Fe(o) || await e.mergeWith(o), this.removeBlock(t), this.currentBlockIndex = this._blocks.indexOf(e);
  }
  /**
   * Remove passed Block
   *
   * @param block - Block to remove
   * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
   */
  removeBlock(e, t = !0) {
    return new Promise((o) => {
      const i = this._blocks.indexOf(e);
      if (!this.validateIndex(i))
        throw new Error("Can't find a Block to remove");
      e.destroy(), this._blocks.remove(i), this.blockDidMutated($s, e, {
        index: i
      }), this.currentBlockIndex >= i && this.currentBlockIndex--, this.blocks.length ? i === 0 && (this.currentBlockIndex = 0) : (this.currentBlockIndex = -1, t && this.insert()), o();
    });
  }
  /**
   * Remove only selected Blocks
   * and returns first Block index where started removing...
   *
   * @returns {number|undefined}
   */
  removeSelectedBlocks() {
    let e;
    for (let t = this.blocks.length - 1; t >= 0; t--)
      this.blocks[t].selected && (this.removeBlock(this.blocks[t]), e = t);
    return e;
  }
  /**
   * Attention!
   * After removing insert the new default typed Block and focus on it
   * Removes all blocks
   */
  removeAllBlocks() {
    for (let e = this.blocks.length - 1; e >= 0; e--)
      this._blocks.remove(e);
    this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
  }
  /**
   * Split current Block
   * 1. Extract content from Caret position to the Block`s end
   * 2. Insert a new Block below current one with extracted content
   *
   * @returns {Block}
   */
  split() {
    const e = this.Editor.Caret.extractFragmentFromCaretPosition(), t = m.make("div");
    t.appendChild(e);
    const o = {
      text: m.isEmpty(t) ? "" : t.innerHTML
    };
    return this.insert({ data: o });
  }
  /**
   * Returns Block by passed index
   *
   * @param {number} index - index to get. -1 to get last
   * @returns {Block}
   */
  getBlockByIndex(e) {
    return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
  }
  /**
   * Returns an index for passed Block
   *
   * @param block - block to find index
   */
  getBlockIndex(e) {
    return this._blocks.indexOf(e);
  }
  /**
   * Returns the Block by passed id
   *
   * @param id - id of block to get
   * @returns {Block}
   */
  getBlockById(e) {
    return this._blocks.array.find((t) => t.id === e);
  }
  /**
   * Get Block instance by html element
   *
   * @param {Node} element - html element to get Block by
   */
  getBlock(e) {
    m.isElement(e) || (e = e.parentNode);
    const t = this._blocks.nodes, o = e.closest(`.${xe.CSS.wrapper}`), i = t.indexOf(o);
    if (i >= 0)
      return this._blocks[i];
  }
  /**
   * 1) Find first-level Block from passed child Node
   * 2) Mark it as current
   *
   * @param {Node} childNode - look ahead from this node.
   * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
   */
  setCurrentBlockByChildNode(e) {
    m.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${xe.CSS.wrapper}`);
    if (!t)
      return;
    const o = t.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
    if (o != null && o.isEqualNode(this.Editor.UI.nodes.wrapper))
      return this.currentBlockIndex = this._blocks.nodes.indexOf(t), this.currentBlock.updateCurrentInput(), this.currentBlock;
  }
  /**
   * Return block which contents passed node
   *
   * @param {Node} childNode - node to get Block by
   * @returns {Block}
   */
  getBlockByChildNode(e) {
    if (!e || !(e instanceof Node))
      return;
    m.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${xe.CSS.wrapper}`);
    return this.blocks.find((o) => o.holder === t);
  }
  /**
   * Swap Blocks Position
   *
   * @param {number} fromIndex - index of first block
   * @param {number} toIndex - index of second block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    this._blocks.swap(e, t), this.currentBlockIndex = t;
  }
  /**
   * Move a block to a new index
   *
   * @param {number} toIndex - index where to move Block
   * @param {number} fromIndex - index of Block to move
   */
  move(e, t = this.currentBlockIndex) {
    if (isNaN(e) || isNaN(t)) {
      X("Warning during 'move' call: incorrect indices provided.", "warn");
      return;
    }
    if (!this.validateIndex(e) || !this.validateIndex(t)) {
      X("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
      return;
    }
    this._blocks.move(e, t), this.currentBlockIndex = e, this.blockDidMutated(Ed, this.currentBlock, {
      fromIndex: t,
      toIndex: e
    });
  }
  /**
   * Converts passed Block to the new Tool
   * Uses Conversion Config
   *
   * @param blockToConvert - Block that should be converted
   * @param targetToolName - name of the Tool to convert to
   * @param blockDataOverrides - optional new Block data overrides
   */
  async convert(e, t, o) {
    if (!await e.save())
      throw new Error("Could not convert Block. Failed to extract original Block data.");
    const i = this.Editor.Tools.blockTools.get(t);
    if (!i)
      throw new Error(`Could not convert Block. Tool «${t}» not found.`);
    const s = await e.exportDataAsString(), r = it(
      s,
      i.sanitizeConfig
    );
    let a = Ec(r, i.conversionConfig);
    o && (a = Object.assign(a, o)), this.replace(e, i.name, a);
  }
  /**
   * Sets current Block Index -1 which means unknown
   * and clear highlights
   */
  dropPointer() {
    this.currentBlockIndex = -1;
  }
  /**
   * Clears Editor
   *
   * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
   *                                             we don't need to add an empty default block
   *                                        2) in api.blocks.clear we should add empty block
   */
  async clear(e = !1) {
    const t = new Td();
    this.blocks.forEach((o) => {
      t.add(async () => {
        await this.removeBlock(o, !1);
      });
    }), await t.completed, this.dropPointer(), e && this.insert(), this.Editor.UI.checkEmptiness();
  }
  /**
   * Cleans up all the block tools' resources
   * This is called when editor is destroyed
   */
  async destroy() {
    await Promise.all(this.blocks.map((e) => e.destroy()));
  }
  /**
   * Bind Block events
   *
   * @param {Block} block - Block to which event should be bound
   */
  bindBlockEvents(e) {
    const { BlockEvents: t } = this.Editor;
    this.readOnlyMutableListeners.on(e.holder, "keydown", (o) => {
      t.keydown(o);
    }), this.readOnlyMutableListeners.on(e.holder, "keyup", (o) => {
      t.keyup(o);
    }), this.readOnlyMutableListeners.on(e.holder, "dragover", (o) => {
      t.dragOver(o);
    }), this.readOnlyMutableListeners.on(e.holder, "dragleave", (o) => {
      t.dragLeave(o);
    }), e.on("didMutated", (o) => this.blockDidMutated(js, o, {
      index: this.getBlockIndex(o)
    }));
  }
  /**
   * Disable mutable handlers and bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Enables all module handlers and bindings for all Blocks
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(
      document,
      "cut",
      (e) => this.Editor.BlockEvents.handleCommandX(e)
    ), this.blocks.forEach((e) => {
      this.bindBlockEvents(e);
    });
  }
  /**
   * Validates that the given index is not lower than 0 or higher than the amount of blocks
   *
   * @param {number} index - index of blocks array to validate
   * @returns {boolean}
   */
  validateIndex(e) {
    return !(e < 0 || e >= this._blocks.length);
  }
  /**
   * Block mutation callback
   *
   * @param mutationType - what happened with block
   * @param block - mutated block
   * @param detailData - additional data to pass with change event
   */
  blockDidMutated(e, t, o) {
    const i = new CustomEvent(e, {
      detail: {
        target: new At(t),
        ...o
      }
    });
    return this.eventsDispatcher.emit(ta, {
      event: i
    }), t;
  }
}
class Ad extends K {
  constructor() {
    super(...arguments), this.anyBlockSelectedCache = null, this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
  }
  /**
   * Sanitizer Config
   *
   * @returns {SanitizerConfig}
   */
  get sanitizerConfig() {
    return {
      p: {},
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      ol: {},
      ul: {},
      li: {},
      br: !0,
      img: {
        src: !0,
        width: !0,
        height: !0
      },
      a: {
        href: !0
      },
      b: {},
      i: {},
      u: {}
    };
  }
  /**
   * Flag that identifies all Blocks selection
   *
   * @returns {boolean}
   */
  get allBlocksSelected() {
    const { BlockManager: e } = this.Editor;
    return e.blocks.every((t) => t.selected === !0);
  }
  /**
   * Set selected all blocks
   *
   * @param {boolean} state - state to set
   */
  set allBlocksSelected(e) {
    const { BlockManager: t } = this.Editor;
    t.blocks.forEach((o) => {
      o.selected = e;
    }), this.clearCache();
  }
  /**
   * Flag that identifies any Block selection
   *
   * @returns {boolean}
   */
  get anyBlockSelected() {
    const { BlockManager: e } = this.Editor;
    return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = e.blocks.some((t) => t.selected === !0)), this.anyBlockSelectedCache;
  }
  /**
   * Return selected Blocks array
   *
   * @returns {Block[]}
   */
  get selectedBlocks() {
    return this.Editor.BlockManager.blocks.filter((e) => e.selected);
  }
  /**
   * Module Preparation
   * Registers Shortcuts CMD+A and CMD+C
   * to select all and copy them
   */
  prepare() {
    this.selection = new _(), en.add({
      name: "CMD+A",
      handler: (e) => {
        const { BlockManager: t, ReadOnly: o } = this.Editor;
        if (o.isEnabled) {
          e.preventDefault(), this.selectAllBlocks();
          return;
        }
        t.currentBlock && this.handleCommandA(e);
      },
      on: this.Editor.UI.nodes.redactor
    });
  }
  /**
   * Toggle read-only state
   *
   *  - Remove all ranges
   *  - Unselect all Blocks
   */
  toggleReadOnly() {
    _.get().removeAllRanges(), this.allBlocksSelected = !1;
  }
  /**
   * Remove selection of Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  unSelectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor;
    let o;
    isNaN(e) ? o = t.currentBlock : o = t.getBlockByIndex(e), o.selected = !1, this.clearCache();
  }
  /**
   * Clear selection from Blocks
   *
   * @param {Event} reason - event caused clear of selection
   * @param {boolean} restoreSelection - if true, restore saved selection
   */
  clearSelection(e, t = !1) {
    const { BlockManager: o, Caret: i, RectangleSelection: s } = this.Editor;
    this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
    const r = e && e instanceof KeyboardEvent, a = r && Zr(e.keyCode);
    if (this.anyBlockSelected && r && a && !_.isSelectionExists) {
      const u = o.removeSelectedBlocks();
      o.insertDefaultBlockAtIndex(u, !0), i.setToBlock(o.currentBlock), Jn(() => {
        const l = e.key;
        i.insertContentAtCaretPosition(l.length > 1 ? "" : l);
      }, 20)();
    }
    if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || s.isRectActivated()) {
      this.Editor.RectangleSelection.clearSelection();
      return;
    }
    t && this.selection.restore(), this.allBlocksSelected = !1;
  }
  /**
   * Reduce each Block and copy its content
   *
   * @param {ClipboardEvent} e - copy/cut event
   * @returns {Promise<void>}
   */
  copySelectedBlocks(e) {
    e.preventDefault();
    const t = m.make("div");
    this.selectedBlocks.forEach((s) => {
      const r = it(s.holder.innerHTML, this.sanitizerConfig), a = m.make("p");
      a.innerHTML = r, t.appendChild(a);
    });
    const o = Array.from(t.childNodes).map((s) => s.textContent).join(`

`), i = t.innerHTML;
    return e.clipboardData.setData("text/plain", o), e.clipboardData.setData("text/html", i), Promise.all(this.selectedBlocks.map((s) => s.save())).then((s) => {
      try {
        e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(s));
      } catch {
      }
    });
  }
  /**
   * Select Block by its index
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  selectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor, o = t.getBlockByIndex(e);
    o !== void 0 && this.selectBlock(o);
  }
  /**
   * Select passed Block
   *
   * @param {Block} block - Block to select
   */
  selectBlock(e) {
    this.selection.save(), _.get().removeAllRanges(), e.selected = !0, this.clearCache(), this.Editor.InlineToolbar.close();
  }
  /**
   * Remove selection from passed Block
   *
   * @param {Block} block - Block to unselect
   */
  unselectBlock(e) {
    e.selected = !1, this.clearCache();
  }
  /**
   * Clear anyBlockSelected cache
   */
  clearCache() {
    this.anyBlockSelectedCache = null;
  }
  /**
   * Module destruction
   * De-registers Shortcut CMD+A
   */
  destroy() {
    en.remove(this.Editor.UI.nodes.redactor, "CMD+A");
  }
  /**
   * First CMD+A selects all input content by native behaviour,
   * next CMD+A keypress selects all blocks
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  handleCommandA(e) {
    if (this.Editor.RectangleSelection.clearSelection(), m.isNativeInput(e.target) && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    const t = this.Editor.BlockManager.getBlock(e.target), o = t.inputs;
    if (o.length > 1 && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    if (o.length === 1 && !this.needToSelectAll) {
      this.needToSelectAll = !0;
      return;
    }
    this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlock(t), this.needToSelectAll = !0);
  }
  /**
   * Select All Blocks
   * Each Block has selected setter that makes Block copyable
   */
  selectAllBlocks() {
    this.selection.save(), _.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
  }
}
class Qn extends K {
  /**
   * Allowed caret positions in input
   *
   * @static
   * @returns {{START: string, END: string, DEFAULT: string}}
   */
  get positions() {
    return {
      START: "start",
      END: "end",
      DEFAULT: "default"
    };
  }
  /**
   * Elements styles that can be useful for Caret Module
   */
  static get CSS() {
    return {
      shadowCaret: "cdx-shadow-caret"
    };
  }
  /**
   * Get's deepest first node and checks if offset is zero
   *
   * @returns {boolean}
   */
  get isAtStart() {
    const { currentBlock: e } = this.Editor.BlockManager;
    if (!e.focusable)
      return !0;
    const t = _.get(), o = m.getDeepestNode(e.currentInput);
    let i = t.focusNode;
    if (m.isNativeInput(o))
      return o.selectionEnd === 0;
    if (!t.anchorNode)
      return !1;
    let s = i.textContent.search(/\S/);
    s === -1 && (s = 0);
    let r = t.focusOffset;
    return i.nodeType !== Node.TEXT_NODE && i.childNodes.length && (i.childNodes[r] ? (i = i.childNodes[r], r = 0) : (i = i.childNodes[r - 1], r = i.textContent.length)), (m.isLineBreakTag(o) || m.isEmpty(o)) && this.getHigherLevelSiblings(i, "left").every((a) => {
      const u = m.isLineBreakTag(a), l = a.children.length === 1 && m.isLineBreakTag(a.children[0]), c = u || l;
      return m.isEmpty(a) && !c;
    }) && r === s ? !0 : o === null || i === o && r <= s;
  }
  /**
   * Get's deepest last node and checks if offset is last node text length
   *
   * @returns {boolean}
   */
  get isAtEnd() {
    const { currentBlock: e } = this.Editor.BlockManager;
    if (!e.focusable)
      return !0;
    const t = _.get();
    let o = t.focusNode;
    const i = m.getDeepestNode(e.currentInput, !0);
    if (m.isNativeInput(i))
      return i.selectionEnd === i.value.length;
    if (!t.focusNode)
      return !1;
    let s = t.focusOffset;
    if (o.nodeType !== Node.TEXT_NODE && o.childNodes.length && (o.childNodes[s - 1] ? (o = o.childNodes[s - 1], s = o.textContent.length) : (o = o.childNodes[0], s = 0)), m.isLineBreakTag(i) || m.isEmpty(i)) {
      const a = this.getHigherLevelSiblings(o, "right");
      if (a.every((u, l) => l === a.length - 1 && m.isLineBreakTag(u) || m.isEmpty(u) && !m.isLineBreakTag(u)) && s === o.textContent.length)
        return !0;
    }
    const r = i.textContent.replace(/\s+$/, "");
    return o === i && s >= r.length;
  }
  /**
   * Method gets Block instance and puts caret to the text node with offset
   * There two ways that method applies caret position:
   *   - first found text node: sets at the beginning, but you can pass an offset
   *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
   *
   * @param {Block} block - Block class
   * @param {string} position - position where to set caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */
  setToBlock(e, t = this.positions.DEFAULT, o = 0) {
    var i;
    const { BlockManager: s, BlockSelection: r } = this.Editor;
    if (r.clearSelection(), !e.focusable) {
      (i = window.getSelection()) == null || i.removeAllRanges(), r.selectBlock(e), s.currentBlock = e;
      return;
    }
    let a;
    switch (t) {
      case this.positions.START:
        a = e.firstInput;
        break;
      case this.positions.END:
        a = e.lastInput;
        break;
      default:
        a = e.currentInput;
    }
    if (!a)
      return;
    const u = m.getDeepestNode(a, t === this.positions.END), l = m.getContentLength(u);
    switch (!0) {
      case t === this.positions.START:
        o = 0;
        break;
      case t === this.positions.END:
      case o > l:
        o = l;
        break;
    }
    this.set(u, o), s.setCurrentBlockByChildNode(e.holder), s.currentBlock.currentInput = a;
  }
  /**
   * Set caret to the current input of current Block.
   *
   * @param {HTMLElement} input - input where caret should be set
   * @param {string} position - position of the caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */
  setToInput(e, t = this.positions.DEFAULT, o = 0) {
    const { currentBlock: i } = this.Editor.BlockManager, s = m.getDeepestNode(e);
    switch (t) {
      case this.positions.START:
        this.set(s, 0);
        break;
      case this.positions.END:
        this.set(s, m.getContentLength(s));
        break;
      default:
        o && this.set(s, o);
    }
    i.currentInput = e;
  }
  /**
   * Creates Document Range and sets caret to the element with offset
   *
   * @param {HTMLElement} element - target node.
   * @param {number} offset - offset
   */
  set(e, t = 0) {
    const { top: o, bottom: i } = _.setCursor(e, t), { innerHeight: s } = window;
    o < 0 ? window.scrollBy(0, o - 30) : i > s && window.scrollBy(0, i - s + 30);
  }
  /**
   * Set Caret to the last Block
   * If last block is not empty, append another empty block
   */
  setToTheLastBlock() {
    const e = this.Editor.BlockManager.lastBlock;
    if (e)
      if (e.tool.isDefault && e.isEmpty)
        this.setToBlock(e);
      else {
        const t = this.Editor.BlockManager.insertAtEnd();
        this.setToBlock(t);
      }
  }
  /**
   * Extract content fragment of current Block from Caret position to the end of the Block
   */
  extractFragmentFromCaretPosition() {
    const e = _.get();
    if (e.rangeCount) {
      const t = e.getRangeAt(0), o = this.Editor.BlockManager.currentBlock.currentInput;
      if (t.deleteContents(), o)
        if (m.isNativeInput(o)) {
          const i = o, s = document.createDocumentFragment(), r = i.value.substring(0, i.selectionStart), a = i.value.substring(i.selectionStart);
          return s.textContent = a, i.value = r, s;
        } else {
          const i = t.cloneRange();
          return i.selectNodeContents(o), i.setStart(t.endContainer, t.endOffset), i.extractContents();
        }
    }
  }
  /**
   * Set's caret to the next Block or Tool`s input
   * Before moving caret, we should check if caret position is at the end of Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */
  navigateNext(e = !1) {
    const { BlockManager: t } = this.Editor, { currentBlock: o, nextBlock: i } = t, { nextInput: s } = o, r = this.isAtEnd;
    let a = i;
    const u = e || r;
    if (s && u)
      return this.setToInput(s, this.positions.START), !0;
    if (a === null) {
      if (o.tool.isDefault || !u)
        return !1;
      a = t.insertAtEnd();
    }
    return u ? (this.setToBlock(a, this.positions.START), !0) : !1;
  }
  /**
   * Set's caret to the previous Tool`s input or Block
   * Before moving caret, we should check if caret position is start of the Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */
  navigatePrevious(e = !1) {
    const { currentBlock: t, previousBlock: o } = this.Editor.BlockManager;
    if (!t)
      return !1;
    const { previousInput: i } = t, s = e || this.isAtStart;
    return i && s ? (this.setToInput(i, this.positions.END), !0) : o !== null && s ? (this.setToBlock(o, this.positions.END), !0) : !1;
  }
  /**
   * Inserts shadow element after passed element where caret can be placed
   *
   * @param {Element} element - element after which shadow caret should be inserted
   */
  createShadow(e) {
    const t = document.createElement("span");
    t.classList.add(Qn.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t);
  }
  /**
   * Restores caret position
   *
   * @param {HTMLElement} element - element where caret should be restored
   */
  restoreCaret(e) {
    const t = e.querySelector(`.${Qn.CSS.shadowCaret}`);
    if (!t)
      return;
    new _().expandToTag(t);
    const o = document.createRange();
    o.selectNode(t), o.extractContents();
  }
  /**
   * Inserts passed content at caret position
   *
   * @param {string} content - content to insert
   */
  insertContentAtCaretPosition(e) {
    const t = document.createDocumentFragment(), o = document.createElement("div"), i = _.get(), s = _.range;
    o.innerHTML = e, Array.from(o.childNodes).forEach((l) => t.appendChild(l)), t.childNodes.length === 0 && t.appendChild(new Text());
    const r = t.lastChild;
    s.deleteContents(), s.insertNode(t);
    const a = document.createRange(), u = r.nodeType === Node.TEXT_NODE ? r : r.firstChild;
    u !== null && u.textContent !== null && a.setStart(u, u.textContent.length), i.removeAllRanges(), i.addRange(a);
  }
  /**
   * Get all first-level (first child of [contenteditable]) siblings from passed node
   * Then you can check it for emptiness
   *
   * @example
   * <div contenteditable>
   * <p></p>                            |
   * <p></p>                            | left first-level siblings
   * <p></p>                            |
   * <blockquote><a><b>adaddad</b><a><blockquote>       <-- passed node for example <b>
   * <p></p>                            |
   * <p></p>                            | right first-level siblings
   * <p></p>                            |
   * </div>
   * @param {HTMLElement} from - element from which siblings should be searched
   * @param {'left' | 'right'} direction - direction of search
   * @returns {HTMLElement[]}
   */
  getHigherLevelSiblings(e, t) {
    let o = e;
    const i = [];
    for (; o.parentNode && o.parentNode.contentEditable !== "true"; )
      o = o.parentNode;
    const s = t === "left" ? "previousSibling" : "nextSibling";
    for (; o[s]; )
      o = o[s], i.push(o);
    return i;
  }
}
class Ld extends K {
  constructor() {
    super(...arguments), this.onMouseUp = () => {
      this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
    }, this.onMouseOver = (e) => {
      const { BlockManager: t, BlockSelection: o } = this.Editor;
      if (e.relatedTarget === null && e.target === null)
        return;
      const i = t.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, s = t.getBlockByChildNode(e.target);
      if (!(!i || !s) && s !== i) {
        if (i === this.firstSelectedBlock) {
          _.get().removeAllRanges(), i.selected = !0, s.selected = !0, o.clearCache();
          return;
        }
        if (s === this.firstSelectedBlock) {
          i.selected = !1, s.selected = !1, o.clearCache();
          return;
        }
        this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(i, s), this.lastSelectedBlock = s;
      }
    };
  }
  /**
   * Module preparation
   *
   * @returns {Promise}
   */
  async prepare() {
    this.listeners.on(document, "mousedown", (e) => {
      this.enableCrossBlockSelection(e);
    });
  }
  /**
   * Sets up listeners
   *
   * @param {MouseEvent} event - mouse down event
   */
  watchSelection(e) {
    if (e.button !== ac.LEFT)
      return;
    const { BlockManager: t } = this.Editor;
    this.firstSelectedBlock = t.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
  }
  /**
   * return boolean is cross block selection started
   */
  get isCrossBlockSelectionStarted() {
    return !!this.firstSelectedBlock && !!this.lastSelectedBlock;
  }
  /**
   * Change selection state of the next Block
   * Used for CBS via Shift + arrow keys
   *
   * @param {boolean} next - if true, toggle next block. Previous otherwise
   */
  toggleBlockSelectedState(e = !0) {
    const { BlockManager: t, BlockSelection: o } = this.Editor;
    this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, o.clearCache(), _.get().removeAllRanges());
    const i = t.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), s = t.blocks[i];
    s && (this.lastSelectedBlock.selected !== s.selected ? (s.selected = !0, o.clearCache()) : (this.lastSelectedBlock.selected = !1, o.clearCache()), this.lastSelectedBlock = s, this.Editor.InlineToolbar.close(), s.holder.scrollIntoView({
      block: "nearest"
    }));
  }
  /**
   * Clear saved state
   *
   * @param {Event} reason - event caused clear of selection
   */
  clear(e) {
    const { BlockManager: t, BlockSelection: o, Caret: i } = this.Editor, s = t.blocks.indexOf(this.firstSelectedBlock), r = t.blocks.indexOf(this.lastSelectedBlock);
    if (o.anyBlockSelected && s > -1 && r > -1 && e && e instanceof KeyboardEvent)
      switch (e.keyCode) {
        case q.DOWN:
        case q.RIGHT:
          i.setToBlock(t.blocks[Math.max(s, r)], i.positions.END);
          break;
        case q.UP:
        case q.LEFT:
          i.setToBlock(t.blocks[Math.min(s, r)], i.positions.START);
          break;
        default:
          i.setToBlock(t.blocks[Math.max(s, r)], i.positions.END);
      }
    this.firstSelectedBlock = this.lastSelectedBlock = null;
  }
  /**
   * Enables Cross Block Selection
   *
   * @param {MouseEvent} event - mouse down event
   */
  enableCrossBlockSelection(e) {
    const { UI: t } = this.Editor;
    _.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Change blocks selection state between passed two blocks.
   *
   * @param {Block} firstBlock - first block in range
   * @param {Block} lastBlock - last block in range
   */
  toggleBlocksSelectedState(e, t) {
    const { BlockManager: o, BlockSelection: i } = this.Editor, s = o.blocks.indexOf(e), r = o.blocks.indexOf(t), a = e.selected !== t.selected;
    for (let u = Math.min(s, r); u <= Math.max(s, r); u++) {
      const l = o.blocks[u];
      l !== this.firstSelectedBlock && l !== (a ? e : t) && (o.blocks[u].selected = !o.blocks[u].selected, i.clearCache());
    }
  }
}
class Nd extends K {
  constructor() {
    super(...arguments), this.isStartedAtEditor = !1;
  }
  /**
   * Toggle read-only state
   *
   * if state is true:
   *  - disable all drag-n-drop event handlers
   *
   * if state is false:
   *  - restore drag-n-drop event handlers
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Add drag events listeners to editor zone
   */
  enableModuleBindings() {
    const { UI: e } = this.Editor;
    this.readOnlyMutableListeners.on(e.nodes.holder, "drop", async (t) => {
      await this.processDrop(t);
    }, !0), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", () => {
      this.processDragStart();
    }), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", (t) => {
      this.processDragOver(t);
    }, !0);
  }
  /**
   * Unbind drag-n-drop event handlers
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Handle drop event
   *
   * @param {DragEvent} dropEvent - drop event
   */
  async processDrop(e) {
    const {
      BlockManager: t,
      Caret: o,
      Paste: i
    } = this.Editor;
    e.preventDefault(), t.blocks.forEach((r) => {
      r.dropTarget = !1;
    }), _.isAtEditor && !_.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = !1;
    const s = t.setCurrentBlockByChildNode(e.target);
    if (s)
      this.Editor.Caret.setToBlock(s, o.positions.END);
    else {
      const r = t.setCurrentBlockByChildNode(t.lastBlock.holder);
      this.Editor.Caret.setToBlock(r, o.positions.END);
    }
    await i.processDataTransfer(e.dataTransfer, !0);
  }
  /**
   * Handle drag start event
   */
  processDragStart() {
    _.isAtEditor && !_.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close();
  }
  /**
   * @param {DragEvent} dragEvent - drag event
   */
  processDragOver(e) {
    e.preventDefault();
  }
}
class Md extends K {
  /**
   * Prepare the module
   *
   * @param options - options used by the modification observer module
   * @param options.config - Editor configuration object
   * @param options.eventsDispatcher - common Editor event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.disabled = !1, this.batchingTimeout = null, this.batchingOnChangeQueue = /* @__PURE__ */ new Map(), this.batchTime = 400, this.mutationObserver = new MutationObserver((o) => {
      this.redactorChanged(o);
    }), this.eventsDispatcher.on(ta, (o) => {
      this.particularBlockChanged(o.event);
    }), this.eventsDispatcher.on(na, () => {
      this.disable();
    }), this.eventsDispatcher.on(oa, () => {
      this.enable();
    });
  }
  /**
   * Enables onChange event
   */
  enable() {
    this.mutationObserver.observe(
      this.Editor.UI.nodes.redactor,
      {
        childList: !0,
        subtree: !0,
        characterData: !0,
        attributes: !0
      }
    ), this.disabled = !1;
  }
  /**
   * Disables onChange event
   */
  disable() {
    this.mutationObserver.disconnect(), this.disabled = !0;
  }
  /**
   * Call onChange event passed to Editor.js configuration
   *
   * @param event - some of our custom change events
   */
  particularBlockChanged(e) {
    this.disabled || !ie(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(() => {
      let t;
      this.batchingOnChangeQueue.size === 1 ? t = this.batchingOnChangeQueue.values().next().value : t = Array.from(this.batchingOnChangeQueue.values()), this.config.onChange && this.config.onChange(this.Editor.API.methods, t), this.batchingOnChangeQueue.clear();
    }, this.batchTime));
  }
  /**
   * Fired on every blocks wrapper dom change
   *
   * @param mutations - mutations happened
   */
  redactorChanged(e) {
    this.eventsDispatcher.emit(ni, {
      mutations: e
    });
  }
}
const pa = class extends K {
  constructor() {
    super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (n) => {
      try {
        const e = n.create({}, {}, !1);
        if (n.pasteConfig === !1) {
          this.exceptionList.push(n.name);
          return;
        }
        if (!ie(e.onPaste))
          return;
        this.getTagsConfig(n), this.getFilesConfig(n), this.getPatternsConfig(n);
      } catch (e) {
        X(
          `Paste handling for «${n.name}» Tool hasn't been set up because of the error`,
          "warn",
          e
        );
      }
    }, this.handlePasteEvent = async (n) => {
      const { BlockManager: e, Toolbar: t } = this.Editor, o = e.setCurrentBlockByChildNode(n.target);
      !o || this.isNativeBehaviour(n.target) && !n.clipboardData.types.includes("Files") || o && this.exceptionList.includes(o.name) || (n.preventDefault(), this.processDataTransfer(n.clipboardData), t.close());
    };
  }
  /**
   * Set onPaste callback and collect tools` paste configurations
   */
  async prepare() {
    this.processTools();
  }
  /**
   * Set read-only state
   *
   * @param {boolean} readOnlyEnabled - read only flag value
   */
  toggleReadOnly(n) {
    n ? this.unsetCallback() : this.setCallback();
  }
  /**
   * Handle pasted or dropped data transfer object
   *
   * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
   * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
   */
  async processDataTransfer(n, e = !1) {
    const { Tools: t } = this.Editor, o = n.types;
    if ((o.includes ? o.includes("Files") : o.contains("Files")) && !Fe(this.toolsFiles)) {
      await this.processFiles(n.files);
      return;
    }
    const i = n.getData(this.MIME_TYPE), s = n.getData("text/plain");
    let r = n.getData("text/html");
    if (i)
      try {
        this.insertEditorJSData(JSON.parse(i));
        return;
      } catch {
      }
    e && s.trim() && r.trim() && (r = "<p>" + (r.trim() ? r : s) + "</p>");
    const a = Object.keys(this.toolsTags).reduce((c, d) => (c[d.toLowerCase()] = this.toolsTags[d].sanitizationConfig ?? {}, c), {}), u = Object.assign({}, a, t.getAllInlineToolsSanitizeConfig(), { br: {} }), l = it(r, u);
    !l.trim() || l.trim() === s || !m.isHTMLString(l) ? await this.processText(s) : await this.processText(l, !0);
  }
  /**
   * Process pasted text and divide them into Blocks
   *
   * @param {string} data - text to process. Can be HTML or plain.
   * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
   */
  async processText(n, e = !1) {
    const { Caret: t, BlockManager: o } = this.Editor, i = e ? this.processHTML(n) : this.processPlain(n);
    if (!i.length)
      return;
    if (i.length === 1) {
      i[0].isBlock ? this.processSingleBlock(i.pop()) : this.processInlinePaste(i.pop());
      return;
    }
    const s = o.currentBlock && o.currentBlock.tool.isDefault && o.currentBlock.isEmpty;
    i.map(
      async (r, a) => this.insertBlock(r, a === 0 && s)
    ), o.currentBlock && t.setToBlock(o.currentBlock, t.positions.END);
  }
  /**
   * Set onPaste callback handler
   */
  setCallback() {
    this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Unset onPaste callback handler
   */
  unsetCallback() {
    this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Get and process tool`s paste configs
   */
  processTools() {
    const n = this.Editor.Tools.blockTools;
    Array.from(n.values()).forEach(this.processTool);
  }
  /**
   * Get tags name list from either tag name or sanitization config.
   *
   * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
   * @returns {string[]} array of tags.
   */
  collectTagNames(n) {
    return wt(n) ? [n] : ye(n) ? Object.keys(n) : [];
  }
  /**
   * Get tags to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getTagsConfig(n) {
    if (n.pasteConfig === !1)
      return;
    const e = n.pasteConfig.tags || [], t = [];
    e.forEach((o) => {
      const i = this.collectTagNames(o);
      t.push(...i), i.forEach((s) => {
        if (Object.prototype.hasOwnProperty.call(this.toolsTags, s)) {
          X(
            `Paste handler for «${n.name}» Tool on «${s}» tag is skipped because it is already used by «${this.toolsTags[s].tool.name}» Tool.`,
            "warn"
          );
          return;
        }
        const r = ye(o) ? o[s] : null;
        this.toolsTags[s.toUpperCase()] = {
          tool: n,
          sanitizationConfig: r
        };
      });
    }), this.tagsByTool[n.name] = t.map((o) => o.toUpperCase());
  }
  /**
   * Get files` types and extensions to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getFilesConfig(n) {
    if (n.pasteConfig === !1)
      return;
    const { files: e = {} } = n.pasteConfig;
    let { extensions: t, mimeTypes: o } = e;
    !t && !o || (t && !Array.isArray(t) && (X(`«extensions» property of the onDrop config for «${n.name}» Tool should be an array`), t = []), o && !Array.isArray(o) && (X(`«mimeTypes» property of the onDrop config for «${n.name}» Tool should be an array`), o = []), o && (o = o.filter((i) => hc(i) ? !0 : (X(`MIME type value «${i}» for the «${n.name}» Tool is not a valid MIME type`, "warn"), !1))), this.toolsFiles[n.name] = {
      extensions: t || [],
      mimeTypes: o || []
    });
  }
  /**
   * Get RegExp patterns to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getPatternsConfig(n) {
    n.pasteConfig === !1 || !n.pasteConfig.patterns || Fe(n.pasteConfig.patterns) || Object.entries(n.pasteConfig.patterns).forEach(([e, t]) => {
      t instanceof RegExp || X(
        `Pattern ${t} for «${n.name}» Tool is skipped because it should be a Regexp instance.`,
        "warn"
      ), this.toolsPatterns.push({
        key: e,
        pattern: t,
        tool: n
      });
    });
  }
  /**
   * Check if browser behavior suits better
   *
   * @param {EventTarget} element - element where content has been pasted
   * @returns {boolean}
   */
  isNativeBehaviour(n) {
    return m.isNativeInput(n);
  }
  /**
   * Get files from data transfer object and insert related Tools
   *
   * @param {FileList} items - pasted or dropped items
   */
  async processFiles(n) {
    const { BlockManager: e } = this.Editor;
    let t;
    t = await Promise.all(
      Array.from(n).map((i) => this.processFile(i))
    ), t = t.filter((i) => !!i);
    const o = e.currentBlock.tool.isDefault && e.currentBlock.isEmpty;
    t.forEach(
      (i, s) => {
        e.paste(i.type, i.event, s === 0 && o);
      }
    );
  }
  /**
   * Get information about file and find Tool to handle it
   *
   * @param {File} file - file to process
   */
  async processFile(n) {
    const e = dc(n), t = Object.entries(this.toolsFiles).find(([i, { mimeTypes: s, extensions: r }]) => {
      const [a, u] = n.type.split("/"), l = r.find((d) => d.toLowerCase() === e.toLowerCase()), c = s.find((d) => {
        const [h, g] = d.split("/");
        return h === a && (g === u || g === "*");
      });
      return !!l || !!c;
    });
    if (!t)
      return;
    const [o] = t;
    return {
      event: this.composePasteEvent("file", {
        file: n
      }),
      type: o
    };
  }
  /**
   * Split HTML string to blocks and return it as array of Block data
   *
   * @param {string} innerHTML - html string to process
   * @returns {PasteData[]}
   */
  processHTML(n) {
    const { Tools: e } = this.Editor, t = m.make("DIV");
    return t.innerHTML = n, this.getNodes(t).map((o) => {
      let i, s = e.defaultTool, r = !1;
      switch (o.nodeType) {
        case Node.DOCUMENT_FRAGMENT_NODE:
          i = m.make("div"), i.appendChild(o);
          break;
        case Node.ELEMENT_NODE:
          i = o, r = !0, this.toolsTags[i.tagName] && (s = this.toolsTags[i.tagName].tool);
          break;
      }
      const { tags: a } = s.pasteConfig || { tags: [] }, u = a.reduce((d, h) => (this.collectTagNames(h).forEach((g) => {
        const f = ye(h) ? h[g] : null;
        d[g.toLowerCase()] = f || {};
      }), d), {}), l = Object.assign({}, u, s.baseSanitizeConfig);
      if (i.tagName.toLowerCase() === "table") {
        const d = it(i.outerHTML, l);
        i = m.make("div", void 0, {
          innerHTML: d
        }).firstChild;
      } else
        i.innerHTML = it(i.innerHTML, l);
      const c = this.composePasteEvent("tag", {
        data: i
      });
      return {
        content: i,
        isBlock: r,
        tool: s.name,
        event: c
      };
    }).filter((o) => {
      const i = m.isEmpty(o.content), s = m.isSingleTag(o.content);
      return !i || s;
    });
  }
  /**
   * Split plain text by new line symbols and return it as array of Block data
   *
   * @param {string} plain - string to process
   * @returns {PasteData[]}
   */
  processPlain(n) {
    const { defaultBlock: e } = this.config;
    if (!n)
      return [];
    const t = e;
    return n.split(/\r?\n/).filter((o) => o.trim()).map((o) => {
      const i = m.make("div");
      i.textContent = o;
      const s = this.composePasteEvent("tag", {
        data: i
      });
      return {
        content: i,
        tool: t,
        isBlock: !1,
        event: s
      };
    });
  }
  /**
   * Process paste of single Block tool content
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processSingleBlock(n) {
    const { Caret: e, BlockManager: t } = this.Editor, { currentBlock: o } = t;
    if (!o || n.tool !== o.name || !m.containsOnlyInlineElements(n.content.innerHTML)) {
      this.insertBlock(n, (o == null ? void 0 : o.tool.isDefault) && o.isEmpty);
      return;
    }
    e.insertContentAtCaretPosition(n.content.innerHTML);
  }
  /**
   * Process paste to single Block:
   * 1. Find patterns` matches
   * 2. Insert new block if it is not the same type as current one
   * 3. Just insert text if there is no substitutions
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processInlinePaste(n) {
    const { BlockManager: e, Caret: t } = this.Editor, { content: o } = n;
    if (e.currentBlock && e.currentBlock.tool.isDefault && o.textContent.length < pa.PATTERN_PROCESSING_MAX_LENGTH) {
      const i = await this.processPattern(o.textContent);
      if (i) {
        const s = e.currentBlock && e.currentBlock.tool.isDefault && e.currentBlock.isEmpty, r = e.paste(i.tool, i.event, s);
        t.setToBlock(r, t.positions.END);
        return;
      }
    }
    if (e.currentBlock && e.currentBlock.currentInput) {
      const i = e.currentBlock.tool.baseSanitizeConfig;
      document.execCommand(
        "insertHTML",
        !1,
        it(o.innerHTML, i)
      );
    } else
      this.insertBlock(n);
  }
  /**
   * Get patterns` matches
   *
   * @param {string} text - text to process
   * @returns {Promise<{event: PasteEvent, tool: string}>}
   */
  async processPattern(n) {
    const e = this.toolsPatterns.find((t) => {
      const o = t.pattern.exec(n);
      return o ? n === o.shift() : !1;
    });
    return e ? {
      event: this.composePasteEvent("pattern", {
        key: e.key,
        data: n
      }),
      tool: e.tool.name
    } : void 0;
  }
  /**
   * Insert pasted Block content to Editor
   *
   * @param {PasteData} data - data to insert
   * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
   * @returns {void}
   */
  insertBlock(n, e = !1) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: i } = t;
    let s;
    if (e && i && i.isEmpty) {
      s = t.paste(n.tool, n.event, !0), o.setToBlock(s, o.positions.END);
      return;
    }
    s = t.paste(n.tool, n.event), o.setToBlock(s, o.positions.END);
  }
  /**
   * Insert data passed as application/x-editor-js JSON
   *
   * @param {Array} blocks — Blocks' data to insert
   * @returns {void}
   */
  insertEditorJSData(n) {
    const { BlockManager: e, Caret: t, Tools: o } = this.Editor;
    ia(
      n,
      (i) => o.blockTools.get(i).sanitizeConfig
    ).forEach(({ tool: i, data: s }, r) => {
      let a = !1;
      r === 0 && (a = e.currentBlock && e.currentBlock.tool.isDefault && e.currentBlock.isEmpty);
      const u = e.insert({
        tool: i,
        data: s,
        replace: a
      });
      t.setToBlock(u, t.positions.END);
    });
  }
  /**
   * Fetch nodes from Element node
   *
   * @param {Node} node - current node
   * @param {Node[]} nodes - processed nodes
   * @param {Node} destNode - destination node
   */
  processElementNode(n, e, t) {
    const o = Object.keys(this.toolsTags), i = n, { tool: s } = this.toolsTags[i.tagName] || {}, r = this.tagsByTool[s == null ? void 0 : s.name] || [], a = o.includes(i.tagName), u = m.blockElements.includes(i.tagName.toLowerCase()), l = Array.from(i.children).some(
      ({ tagName: d }) => o.includes(d) && !r.includes(d)
    ), c = Array.from(i.children).some(
      ({ tagName: d }) => m.blockElements.includes(d.toLowerCase())
    );
    if (!u && !a && !l)
      return t.appendChild(i), [...e, t];
    if (a && !l || u && !c && !l)
      return [...e, t, i];
  }
  /**
   * Recursively divide HTML string to two types of nodes:
   * 1. Block element
   * 2. Document Fragments contained text and markup tags like a, b, i etc.
   *
   * @param {Node} wrapper - wrapper of paster HTML content
   * @returns {Node[]}
   */
  getNodes(n) {
    const e = Array.from(n.childNodes);
    let t;
    const o = (i, s) => {
      if (m.isEmpty(s) && !m.isSingleTag(s))
        return i;
      const r = i[i.length - 1];
      let a = new DocumentFragment();
      switch (r && m.isFragment(r) && (a = i.pop()), s.nodeType) {
        case Node.ELEMENT_NODE:
          if (t = this.processElementNode(s, i, a), t)
            return t;
          break;
        case Node.TEXT_NODE:
          return a.appendChild(s), [...i, a];
        default:
          return [...i, a];
      }
      return [...i, ...Array.from(s.childNodes).reduce(o, [])];
    };
    return e.reduce(o, []);
  }
  /**
   * Compose paste event with passed type and detail
   *
   * @param {string} type - event type
   * @param {PasteEventDetail} detail - event detail
   */
  composePasteEvent(n, e) {
    return new CustomEvent(n, {
      detail: e
    });
  }
};
let fa = pa;
fa.PATTERN_PROCESSING_MAX_LENGTH = 450;
class Id extends K {
  constructor() {
    super(...arguments), this.toolsDontSupportReadOnly = [], this.readOnlyEnabled = !1;
  }
  /**
   * Returns state of read only mode
   */
  get isEnabled() {
    return this.readOnlyEnabled;
  }
  /**
   * Set initial state
   */
  async prepare() {
    const { Tools: e } = this.Editor, { blockTools: t } = e, o = [];
    Array.from(t.entries()).forEach(([i, s]) => {
      s.isReadOnlySupported || o.push(i);
    }), this.toolsDontSupportReadOnly = o, this.config.readOnly && o.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly);
  }
  /**
   * Set read-only mode or toggle current state
   * Call all Modules `toggleReadOnly` method and re-render Editor
   *
   * @param {boolean} state - (optional) read-only state or toggle
   */
  async toggle(e = !this.readOnlyEnabled) {
    e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
    const t = this.readOnlyEnabled;
    this.readOnlyEnabled = e;
    for (const i in this.Editor)
      this.Editor[i].toggleReadOnly && this.Editor[i].toggleReadOnly(e);
    if (t === e)
      return this.readOnlyEnabled;
    const o = await this.Editor.Saver.save();
    return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(o.blocks), this.readOnlyEnabled;
  }
  /**
   * Throws an error about tools which don't support read-only mode
   */
  throwCriticalError() {
    throw new Qr(
      `To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`
    );
  }
}
class xn extends K {
  constructor() {
    super(...arguments), this.isRectSelectionActivated = !1, this.SCROLL_SPEED = 3, this.HEIGHT_OF_SCROLL_ZONE = 40, this.BOTTOM_SCROLL_ZONE = 1, this.TOP_SCROLL_ZONE = 2, this.MAIN_MOUSE_BUTTON = 0, this.mousedown = !1, this.isScrolling = !1, this.inScrollZone = null, this.startX = 0, this.startY = 0, this.mouseX = 0, this.mouseY = 0, this.stackOfSelected = [], this.listenerIds = [];
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      overlay: "codex-editor-overlay",
      overlayContainer: "codex-editor-overlay__container",
      rect: "codex-editor-overlay__rectangle",
      topScrollZone: "codex-editor-overlay__scroll-zone--top",
      bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
    };
  }
  /**
   * Module Preparation
   * Creating rect and hang handlers
   */
  prepare() {
    this.enableModuleBindings();
  }
  /**
   * Init rect params
   *
   * @param {number} pageX - X coord of mouse
   * @param {number} pageY - Y coord of mouse
   */
  startSelection(e, t) {
    const o = document.elementFromPoint(e - window.pageXOffset, t - window.pageYOffset);
    o.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) || (this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = []);
    const i = [
      `.${xe.CSS.content}`,
      `.${this.Editor.Toolbar.CSS.toolbar}`,
      `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`
    ], s = o.closest("." + this.Editor.UI.CSS.editorWrapper), r = i.some((a) => !!o.closest(a));
    !s || r || (this.mousedown = !0, this.startX = e, this.startY = t);
  }
  /**
   * Clear all params to end selection
   */
  endSelection() {
    this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
  }
  /**
   * is RectSelection Activated
   */
  isRectActivated() {
    return this.isRectSelectionActivated;
  }
  /**
   * Mark that selection is end
   */
  clearSelection() {
    this.isRectSelectionActivated = !1;
  }
  /**
   * Sets Module necessary event handlers
   */
  enableModuleBindings() {
    const { container: e } = this.genHTML();
    this.listeners.on(e, "mousedown", (t) => {
      this.processMouseDown(t);
    }, !1), this.listeners.on(document.body, "mousemove", Qo((t) => {
      this.processMouseMove(t);
    }, 10), {
      passive: !0
    }), this.listeners.on(document.body, "mouseleave", () => {
      this.processMouseLeave();
    }), this.listeners.on(window, "scroll", Qo((t) => {
      this.processScroll(t);
    }, 10), {
      passive: !0
    }), this.listeners.on(document.body, "mouseup", () => {
      this.processMouseUp();
    }, !1);
  }
  /**
   * Handle mouse down events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseDown(e) {
    e.button === this.MAIN_MOUSE_BUTTON && (e.target.closest(m.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY));
  }
  /**
   * Handle mouse move events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseMove(e) {
    this.changingRectangle(e), this.scrollByZones(e.clientY);
  }
  /**
   * Handle mouse leave
   */
  processMouseLeave() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processScroll(e) {
    this.changingRectangle(e);
  }
  /**
   * Handle mouse up
   */
  processMouseUp() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * Scroll If mouse in scroll zone
   *
   * @param {number} clientY - Y coord of mouse
   */
  scrollByZones(e) {
    if (this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), !this.inScrollZone) {
      this.isScrolling = !1;
      return;
    }
    this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0);
  }
  /**
   * Generates required HTML elements
   *
   * @returns {Object<string, Element>}
   */
  genHTML() {
    const { UI: e } = this.Editor, t = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o = m.make("div", xn.CSS.overlay, {}), i = m.make("div", xn.CSS.overlayContainer, {}), s = m.make("div", xn.CSS.rect, {});
    return i.appendChild(s), o.appendChild(i), t.appendChild(o), this.overlayRectangle = s, {
      container: t,
      overlay: o
    };
  }
  /**
   * Activates scrolling if blockSelection is active and mouse is in scroll zone
   *
   * @param {number} speed - speed of scrolling
   */
  scrollVertical(e) {
    if (!(this.inScrollZone && this.mousedown))
      return;
    const t = window.pageYOffset;
    window.scrollBy(0, e), this.mouseY += window.pageYOffset - t, setTimeout(() => {
      this.scrollVertical(e);
    }, 0);
  }
  /**
   * Handles the change in the rectangle and its effect
   *
   * @param {MouseEvent} event - mouse event
   */
  changingRectangle(e) {
    if (!this.mousedown)
      return;
    e.pageY !== void 0 && (this.mouseX = e.pageX, this.mouseY = e.pageY);
    const { rightPos: t, leftPos: o, index: i } = this.genInfoForMouseSelection(), s = this.startX > t && this.mouseX > t, r = this.startX < o && this.mouseX < o;
    this.rectCrossesBlocks = !(s || r), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), i !== void 0 && (this.trySelectNextBlock(i), this.inverseSelection(), _.get().removeAllRanges());
  }
  /**
   * Shrink rect to singular point
   */
  shrinkRectangleToPoint() {
    this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`;
  }
  /**
   * Select or unselect all of blocks in array if rect is out or in selectable area
   */
  inverseSelection() {
    const e = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
    if (this.rectCrossesBlocks && !e)
      for (const t of this.stackOfSelected)
        this.Editor.BlockSelection.selectBlockByIndex(t);
    if (!this.rectCrossesBlocks && e)
      for (const t of this.stackOfSelected)
        this.Editor.BlockSelection.unSelectBlockByIndex(t);
  }
  /**
   * Updates size of rectangle
   */
  updateRectangleSize() {
    this.mouseY >= this.startY ? (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`) : (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`) : (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`);
  }
  /**
   * Collects information needed to determine the behavior of the rectangle
   *
   * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
   */
  genInfoForMouseSelection() {
    const e = document.body.offsetWidth / 2, t = this.mouseY - window.pageYOffset, o = document.elementFromPoint(e, t), i = this.Editor.BlockManager.getBlockByChildNode(o);
    let s;
    i !== void 0 && (s = this.Editor.BlockManager.blocks.findIndex((c) => c.holder === i.holder));
    const r = this.Editor.BlockManager.lastBlock.holder.querySelector("." + xe.CSS.content), a = Number.parseInt(window.getComputedStyle(r).width, 10) / 2, u = e - a, l = e + a;
    return {
      index: s,
      leftPos: u,
      rightPos: l
    };
  }
  /**
   * Select block with index index
   *
   * @param index - index of block in redactor
   */
  addBlockInSelection(e) {
    this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
  }
  /**
   * Adds a block to the selection and determines which blocks should be selected
   *
   * @param {object} index - index of new block in the reactor
   */
  trySelectNextBlock(e) {
    const t = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o = this.stackOfSelected.length, i = 1, s = -1, r = 0;
    if (t)
      return;
    const a = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0;
    let u = r;
    o > 1 && (u = a ? i : s);
    const l = e > this.stackOfSelected[o - 1] && u === i, c = e < this.stackOfSelected[o - 1] && u === s, d = !(l || c || u === r);
    if (!d && (e > this.stackOfSelected[o - 1] || this.stackOfSelected[o - 1] === void 0)) {
      let f = this.stackOfSelected[o - 1] + 1 || e;
      for (f; f <= e; f++)
        this.addBlockInSelection(f);
      return;
    }
    if (!d && e < this.stackOfSelected[o - 1]) {
      for (let f = this.stackOfSelected[o - 1] - 1; f >= e; f--)
        this.addBlockInSelection(f);
      return;
    }
    if (!d)
      return;
    let h = o - 1, g;
    for (e > this.stackOfSelected[o - 1] ? g = () => e > this.stackOfSelected[h] : g = () => e < this.stackOfSelected[h]; g(); )
      this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[h]), this.stackOfSelected.pop(), h--;
  }
}
class Rd extends K {
  /**
   * Renders passed blocks as one batch
   *
   * @param blocksData - blocks to render
   */
  async render(e) {
    return new Promise((t) => {
      const { Tools: o, BlockManager: i } = this.Editor;
      if (e.length === 0)
        i.insert();
      else {
        const s = e.map(({ type: r, data: a, tunes: u, id: l }) => {
          o.available.has(r) === !1 && (je(`Tool «${r}» is not found. Check 'tools' property at the Editor.js config.`, "warn"), a = this.composeStubDataForTool(r, a, l), r = o.stubTool);
          let c;
          try {
            c = i.composeBlock({
              id: l,
              tool: r,
              data: a,
              tunes: u
            });
          } catch (d) {
            X(`Block «${r}» skipped because of plugins error`, "error", {
              data: a,
              error: d
            }), a = this.composeStubDataForTool(r, a, l), r = o.stubTool, c = i.composeBlock({
              id: l,
              tool: r,
              data: a,
              tunes: u
            });
          }
          return c;
        });
        i.insertMany(s);
      }
      window.requestIdleCallback(() => {
        t();
      }, { timeout: 2e3 });
    });
  }
  /**
   * Create data for the Stub Tool that will be used instead of unavailable tool
   *
   * @param tool - unavailable tool name to stub
   * @param data - data of unavailable block
   * @param [id] - id of unavailable block
   */
  composeStubDataForTool(e, t, o) {
    const { Tools: i } = this.Editor;
    let s = e;
    if (i.unavailable.has(e)) {
      const r = i.unavailable.get(e).toolbox;
      r !== void 0 && r[0].title !== void 0 && (s = r[0].title);
    }
    return {
      savedData: {
        id: o,
        type: e,
        data: t
      },
      title: s
    };
  }
}
class _d extends K {
  /**
   * Composes new chain of Promises to fire them alternatelly
   *
   * @returns {OutputData}
   */
  async save() {
    const { BlockManager: e, Tools: t } = this.Editor, o = e.blocks, i = [];
    try {
      o.forEach((a) => {
        i.push(this.getSavedData(a));
      });
      const s = await Promise.all(i), r = await ia(s, (a) => t.blockTools.get(a).sanitizeConfig);
      return this.makeOutput(r);
    } catch (s) {
      je("Saving failed due to the Error %o", "error", s);
    }
  }
  /**
   * Saves and validates
   *
   * @param {Block} block - Editor's Tool
   * @returns {ValidatedData} - Tool's validated data
   */
  async getSavedData(e) {
    const t = await e.save(), o = t && await e.validate(t.data);
    return {
      ...t,
      isValid: o
    };
  }
  /**
   * Creates output object with saved data, time and version of editor
   *
   * @param {ValidatedData} allExtractedData - data extracted from Blocks
   * @returns {OutputData}
   */
  makeOutput(e) {
    const t = [];
    return e.forEach(({ id: o, tool: i, data: s, tunes: r, isValid: a }) => {
      if (!a) {
        X(`Block «${i}» skipped because saved data is invalid`);
        return;
      }
      if (i === this.Editor.Tools.stubTool) {
        t.push(s);
        return;
      }
      const u = {
        id: o,
        type: i,
        data: s,
        ...!Fe(r) && {
          tunes: r
        }
      };
      t.push(u);
    }), {
      time: +/* @__PURE__ */ new Date(),
      blocks: t,
      version: "2.29.0"
    };
  }
}
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-paragraph[data-placeholder]:empty:before{content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:before{opacity:1}.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty:before,.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus:before{opacity:0}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const Od = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */
class Hi {
  /**
   * Default placeholder for Paragraph Tool
   *
   * @returns {string}
   * @class
   */
  static get DEFAULT_PLACEHOLDER() {
    return "";
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {ParagraphData} params.data - previously saved data
   * @param {ParagraphConfig} params.config - user config for Tool
   * @param {object} params.api - editor.js api
   * @param {boolean} readOnly - read only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    this.api = o, this.readOnly = i, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-paragraph"
    }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = t.placeholder ? t.placeholder : Hi.DEFAULT_PLACEHOLDER, this._data = {}, this._element = null, this._preserveBlank = t.preserveBlank !== void 0 ? t.preserveBlank : !1, this.data = e;
  }
  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */
  onKeyUp(e) {
    if (e.code !== "Backspace" && e.code !== "Delete")
      return;
    const { textContent: t } = this._element;
    t === "" && (this._element.innerHTML = "");
  }
  /**
   * Create Tool's view
   *
   * @returns {HTMLElement}
   * @private
   */
  drawView() {
    const e = document.createElement("DIV");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = !1, e.dataset.placeholder = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), this.readOnly || (e.contentEditable = !0, e.addEventListener("keyup", this.onKeyUp)), e;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this._element = this.drawView(), this._element;
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {ParagraphData} data
   * @public
   */
  merge(e) {
    const t = {
      text: this.data.text + e.text
    };
    this.data = t;
  }
  /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return !(e.text.trim() === "" && !this._preserveBlank);
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML
    };
  }
  /**
   * On paste callback fired from Editor.
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const t = {
      text: e.detail.data.innerHTML
    };
    this.data = t;
  }
  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   */
  static get conversionConfig() {
    return {
      export: "text",
      // to convert Paragraph to other block, use 'text' property of saved data
      import: "text"
      // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }
  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      text: {
        br: !0
      }
    };
  }
  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get current Tools`s data
   *
   * @returns {ParagraphData} Current data
   * @private
   */
  get data() {
    if (this._element !== null) {
      const e = this._element.innerHTML;
      this._data.text = e;
    }
    return this._data;
  }
  /**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {ParagraphData} data — data to set
   * @private
   */
  set data(e) {
    this._data = e || {}, this._element !== null && this.hydrate();
  }
  /**
   * Fill tool's view with data
   */
  hydrate() {
    window.requestAnimationFrame(() => {
      this._element.innerHTML = this._data.text || "";
    });
  }
  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {{tags: string[]}}
   */
  static get pasteConfig() {
    return {
      tags: ["P"]
    };
  }
  /**
   * Icon and title for displaying at the Toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: Od,
      title: "Text"
    };
  }
}
class Fi {
  constructor() {
    this.commandName = "bold", this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--bold"
    }, this.nodes = {
      button: void 0
    };
  }
  /**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      b: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = td, this.nodes.button;
  }
  /**
   * Wrap range with <b> tag
   */
  surround() {
    document.execCommand(this.commandName);
  }
  /**
   * Check selection and set activated state to button if there are <b> tag
   *
   * @returns {boolean}
   */
  checkState() {
    const e = document.queryCommandState(this.commandName);
    return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
  }
  /**
   * Set a shortcut
   *
   * @returns {boolean}
   */
  get shortcut() {
    return "CMD+B";
  }
}
Fi.isInline = !0;
Fi.title = "Bold";
class qi {
  constructor() {
    this.commandName = "italic", this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--italic"
    }, this.nodes = {
      button: null
    };
  }
  /**
   * Sanitizer Rule
   * Leave <i> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      i: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = sd, this.nodes.button;
  }
  /**
   * Wrap range with <i> tag
   */
  surround() {
    document.execCommand(this.commandName);
  }
  /**
   * Check selection and set activated state to button if there are <i> tag
   */
  checkState() {
    const e = document.queryCommandState(this.commandName);
    return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+I";
  }
}
qi.isInline = !0;
qi.title = "Italic";
class $i {
  /**
   * @param api - Editor.js API
   */
  constructor({ api: e }) {
    this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--link",
      buttonUnlink: "ce-inline-tool--unlink",
      input: "ce-inline-tool-input",
      inputShowed: "ce-inline-tool-input--showed"
    }, this.nodes = {
      button: null,
      input: null
    }, this.inputOpened = !1, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new _();
  }
  /**
   * Sanitizer Rule
   * Leave <a> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      a: {
        href: !0,
        target: "_blank",
        rel: "nofollow"
      }
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = qs, this.nodes.button;
  }
  /**
   * Input for the link
   */
  renderActions() {
    return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e) => {
      e.keyCode === this.ENTER_KEY && this.enterPressed(e);
    }), this.nodes.input;
  }
  /**
   * Handle clicks on the Inline Toolbar icon
   *
   * @param {Range} range - range to wrap with link
   */
  surround(e) {
    if (e) {
      this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
      const t = this.selection.findParentTag("A");
      if (t) {
        this.selection.expandToTag(t), this.unlink(), this.closeActions(), this.checkState(), this.toolbar.close();
        return;
      }
    }
    this.toggleActions();
  }
  /**
   * Check selection and set activated state to button if there are <a> tag
   */
  checkState() {
    const e = this.selection.findParentTag("A");
    if (e) {
      this.nodes.button.innerHTML = ld, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
      const t = e.getAttribute("href");
      this.nodes.input.value = t !== "null" ? t : "", this.selection.save();
    } else
      this.nodes.button.innerHTML = qs, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
    return !!e;
  }
  /**
   * Function called with Inline Toolbar closing
   */
  clear() {
    this.closeActions();
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+K";
  }
  /**
   * Show/close link input
   */
  toggleActions() {
    this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
  }
  /**
   * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
   */
  openActions(e = !1) {
    this.nodes.input.classList.add(this.CSS.inputShowed), e && this.nodes.input.focus(), this.inputOpened = !0;
  }
  /**
   * Close input
   *
   * @param {boolean} clearSavedSelection — we don't need to clear saved selection
   *                                        on toggle-clicks on the icon of opened Toolbar
   */
  closeActions(e = !0) {
    if (this.selection.isFakeBackgroundEnabled) {
      const t = new _();
      t.save(), this.selection.restore(), this.selection.removeFakeBackground(), t.restore();
    }
    this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e && this.selection.clearSaved(), this.inputOpened = !1;
  }
  /**
   * Enter pressed on input
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  enterPressed(e) {
    let t = this.nodes.input.value || "";
    if (!t.trim()) {
      this.selection.restore(), this.unlink(), e.preventDefault(), this.closeActions();
      return;
    }
    if (!this.validateURL(t)) {
      this.notifier.show({
        message: "Pasted link is not valid.",
        style: "error"
      }), X("Incorrect Link pasted", "warn", t);
      return;
    }
    t = this.prepareLink(t), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
  }
  /**
   * Detects if passed string is URL
   *
   * @param {string} str - string to validate
   * @returns {boolean}
   */
  validateURL(e) {
    return !/\s/.test(e);
  }
  /**
   * Process link before injection
   * - sanitize
   * - add protocol for links like 'google.com'
   *
   * @param {string} link - raw user input
   */
  prepareLink(e) {
    return e = e.trim(), e = this.addProtocol(e), e;
  }
  /**
   * Add 'http' protocol to the links like 'vc.ru', 'google.com'
   *
   * @param {string} link - string to process
   */
  addProtocol(e) {
    if (/^(\w+):(\/\/)?/.test(e))
      return e;
    const t = /^\/[^/\s]/.test(e), o = e.substring(0, 1) === "#", i = /^\/\/[^/\s]/.test(e);
    return !t && !o && !i && (e = "http://" + e), e;
  }
  /**
   * Inserts <a> tag with "href"
   *
   * @param {string} link - "href" value
   */
  insertLink(e) {
    const t = this.selection.findParentTag("A");
    t && this.selection.expandToTag(t), document.execCommand(this.commandLink, !1, e);
  }
  /**
   * Removes <a> tag
   */
  unlink() {
    document.execCommand(this.commandUnlink);
  }
}
$i.isInline = !0;
$i.title = "Link";
class ga {
  /**
   * @param options - constructor options
   * @param options.data - stub tool data
   * @param options.api - Editor.js API
   */
  constructor({ data: e, api: t }) {
    this.CSS = {
      wrapper: "ce-stub",
      info: "ce-stub__info",
      title: "ce-stub__title",
      subtitle: "ce-stub__subtitle"
    }, this.api = t, this.title = e.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = e.savedData, this.wrapper = this.make();
  }
  /**
   * Returns stub holder
   *
   * @returns {HTMLElement}
   */
  render() {
    return this.wrapper;
  }
  /**
   * Return original Tool data
   *
   * @returns {BlockToolData}
   */
  save() {
    return this.savedData;
  }
  /**
   * Create Tool html markup
   *
   * @returns {HTMLElement}
   */
  make() {
    const e = m.make("div", this.CSS.wrapper), t = cd, o = m.make("div", this.CSS.info), i = m.make("div", this.CSS.title, {
      textContent: this.title
    }), s = m.make("div", this.CSS.subtitle, {
      textContent: this.subtitle
    });
    return e.innerHTML = t, o.appendChild(i), o.appendChild(s), e.appendChild(o), e;
  }
}
ga.isReadOnlySupported = !0;
class Dd extends Pi {
  constructor() {
    super(...arguments), this.type = go.Inline;
  }
  /**
   * Returns title for Inline Tool if specified by user
   */
  get title() {
    return this.constructable[Di.Title];
  }
  /**
   * Constructs new InlineTool instance from constructable
   */
  create() {
    return new this.constructable({
      api: this.api.getMethodsForTool(this),
      config: this.settings
    });
  }
}
class Pd extends Pi {
  constructor() {
    super(...arguments), this.type = go.Tune;
  }
  /**
   * Constructs new BlockTune instance from constructable
   *
   * @param data - Tune data
   * @param block - Block API object
   */
  create(e, t) {
    return new this.constructable({
      api: this.api.getMethodsForTool(this),
      config: this.settings,
      block: t,
      data: e
    });
  }
}
class we extends Map {
  /**
   * Returns Block Tools collection
   */
  get blockTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isBlock());
    return new we(e);
  }
  /**
   * Returns Inline Tools collection
   */
  get inlineTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInline());
    return new we(e);
  }
  /**
   * Returns Block Tunes collection
   */
  get blockTunes() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isTune());
    return new we(e);
  }
  /**
   * Returns internal Tools collection
   */
  get internalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInternal);
    return new we(e);
  }
  /**
   * Returns Tools collection provided by user
   */
  get externalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => !t.isInternal);
    return new we(e);
  }
}
var Hd = Object.defineProperty, Fd = Object.getOwnPropertyDescriptor, ba = (n, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? Fd(e, t) : e, s = n.length - 1, r; s >= 0; s--)
    (r = n[s]) && (i = (o ? r(e, t, i) : r(i)) || i);
  return o && i && Hd(e, t, i), i;
};
class Ui extends Pi {
  constructor() {
    super(...arguments), this.type = go.Block, this.inlineTools = new we(), this.tunes = new we();
  }
  /**
   * Creates new Tool instance
   *
   * @param data - Tool data
   * @param block - BlockAPI for current Block
   * @param readOnly - True if Editor is in read-only mode
   */
  create(e, t, o) {
    return new this.constructable({
      data: e,
      block: t,
      readOnly: o,
      api: this.api.getMethodsForTool(this),
      config: this.settings
    });
  }
  /**
   * Returns true if read-only mode is supported by Tool
   */
  get isReadOnlySupported() {
    return this.constructable[Kt.IsReadOnlySupported] === !0;
  }
  /**
   * Returns true if Tool supports linebreaks
   */
  get isLineBreaksEnabled() {
    return this.constructable[Kt.IsEnabledLineBreaks];
  }
  /**
   * Returns Tool toolbox configuration (internal or user-specified).
   *
   * Merges internal and user-defined toolbox configs based on the following rules:
   *
   * - If both internal and user-defined toolbox configs are arrays their items are merged.
   * Length of the second one is kept.
   *
   * - If both are objects their properties are merged.
   *
   * - If one is an object and another is an array than internal config is replaced with user-defined
   * config. This is made to allow user to override default tool's toolbox representation (single/multiple entries)
   */
  get toolbox() {
    const e = this.constructable[Kt.Toolbox], t = this.config[Gn.Toolbox];
    if (!Fe(e) && t !== !1)
      return t ? Array.isArray(e) ? Array.isArray(t) ? t.map((o, i) => {
        const s = e[i];
        return s ? {
          ...s,
          ...o
        } : o;
      }) : [t] : Array.isArray(t) ? t : [
        {
          ...e,
          ...t
        }
      ] : Array.isArray(e) ? e : [e];
  }
  /**
   * Returns Tool conversion configuration
   */
  get conversionConfig() {
    return this.constructable[Kt.ConversionConfig];
  }
  /**
   * Returns enabled inline tools for Tool
   */
  get enabledInlineTools() {
    return this.config[Gn.EnabledInlineTools] || !1;
  }
  /**
   * Returns enabled tunes for Tool
   */
  get enabledBlockTunes() {
    return this.config[Gn.EnabledBlockTunes];
  }
  /**
   * Returns Tool paste configuration
   */
  get pasteConfig() {
    return this.constructable[Kt.PasteConfig] ?? {};
  }
  get sanitizeConfig() {
    const e = super.sanitizeConfig, t = this.baseSanitizeConfig;
    if (Fe(e))
      return t;
    const o = {};
    for (const i in e)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        const s = e[i];
        ye(s) ? o[i] = Object.assign({}, t, s) : o[i] = s;
      }
    return o;
  }
  get baseSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), Array.from(this.tunes.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), e;
  }
}
ba([
  on
], Ui.prototype, "sanitizeConfig", 1);
ba([
  on
], Ui.prototype, "baseSanitizeConfig", 1);
class qd {
  /**
   * @class
   * @param config - tools config
   * @param editorConfig - EditorJS config
   * @param api - EditorJS API module
   */
  constructor(e, t, o) {
    this.api = o, this.config = e, this.editorConfig = t;
  }
  /**
   * Returns Tool object based on it's type
   *
   * @param name - tool name
   */
  get(e) {
    const { class: t, isInternal: o = !1, ...i } = this.config[e], s = this.getConstructor(t);
    return new s({
      name: e,
      constructable: t,
      config: i,
      api: this.api,
      isDefault: e === this.editorConfig.defaultBlock,
      defaultPlaceholder: this.editorConfig.placeholder,
      isInternal: o
    });
  }
  /**
   * Find appropriate Tool object constructor for Tool constructable
   *
   * @param constructable - Tools constructable
   */
  getConstructor(e) {
    switch (!0) {
      case e[Di.IsInline]:
        return Dd;
      case e[ha.IsTune]:
        return Pd;
      default:
        return Ui;
    }
  }
}
class ma {
  /**
   * MoveDownTune constructor
   *
   * @param {API} api — Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: ra,
      title: this.api.i18n.t("Move down"),
      onActivate: () => this.handleClick(),
      name: "move-down"
    };
  }
  /**
   * Handle clicks on 'move down' button
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e + 1);
    if (!t)
      throw new Error("Unable to move Block down since it is already the last");
    const o = t.holder, i = o.getBoundingClientRect();
    let s = Math.abs(window.innerHeight - o.offsetHeight);
    i.top < window.innerHeight && (s = window.scrollY + o.offsetHeight), window.scrollTo(0, s), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
ma.isTune = !0;
class xa {
  /**
   * DeleteTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: od,
      title: this.api.i18n.t("Delete"),
      name: "delete",
      confirmation: {
        title: this.api.i18n.t("Click to delete"),
        onActivate: () => this.handleClick()
      }
    };
  }
  /**
   * Delete block conditions passed
   */
  handleClick() {
    this.api.blocks.delete();
  }
}
xa.isTune = !0;
class va {
  /**
   * MoveUpTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: nd,
      title: this.api.i18n.t("Move up"),
      onActivate: () => this.handleClick(),
      name: "move-up"
    };
  }
  /**
   * Move current block up
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e), o = this.api.blocks.getBlockByIndex(e - 1);
    if (e === 0 || !t || !o)
      throw new Error("Unable to move Block up since it is already the first");
    const i = t.holder, s = o.holder, r = i.getBoundingClientRect(), a = s.getBoundingClientRect();
    let u;
    a.top > 0 ? u = Math.abs(r.top) - Math.abs(a.top) : u = Math.abs(r.top) + a.height, window.scrollBy(0, -1 * u), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
va.isTune = !0;
var $d = Object.defineProperty, Ud = Object.getOwnPropertyDescriptor, jd = (n, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? Ud(e, t) : e, s = n.length - 1, r; s >= 0; s--)
    (r = n[s]) && (i = (o ? r(e, t, i) : r(i)) || i);
  return o && i && $d(e, t, i), i;
};
class ya extends K {
  constructor() {
    super(...arguments), this.stubTool = "stub", this.toolsAvailable = new we(), this.toolsUnavailable = new we();
  }
  /**
   * Returns available Tools
   */
  get available() {
    return this.toolsAvailable;
  }
  /**
   * Returns unavailable Tools
   */
  get unavailable() {
    return this.toolsUnavailable;
  }
  /**
   * Return Tools for the Inline Toolbar
   */
  get inlineTools() {
    return this.available.inlineTools;
  }
  /**
   * Return editor block tools
   */
  get blockTools() {
    return this.available.blockTools;
  }
  /**
   * Return available Block Tunes
   *
   * @returns {object} - object of Inline Tool's classes
   */
  get blockTunes() {
    return this.available.blockTunes;
  }
  /**
   * Returns default Tool object
   */
  get defaultTool() {
    return this.blockTools.get(this.config.defaultBlock);
  }
  /**
   * Returns internal tools
   */
  get internal() {
    return this.available.internalTools;
  }
  /**
   * Creates instances via passed or default configuration
   *
   * @returns {Promise<void>}
   */
  async prepare() {
    if (this.validateTools(), this.config.tools = ei({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0)
      throw Error("Can't start without tools");
    const e = this.prepareConfig();
    this.factory = new qd(e, this.config, this.Editor.API);
    const t = this.getListOfPrepareFunctions(e);
    if (t.length === 0)
      return Promise.resolve();
    await cc(t, (o) => {
      this.toolPrepareMethodSuccess(o);
    }, (o) => {
      this.toolPrepareMethodFallback(o);
    }), this.prepareBlockTools();
  }
  getAllInlineToolsSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => {
      Object.assign(e, t.sanitizeConfig);
    }), e;
  }
  /**
   * Calls each Tool reset method to clean up anything set by Tool
   */
  destroy() {
    Object.values(this.available).forEach(async (e) => {
      ie(e.reset) && await e.reset();
    });
  }
  /**
   * Returns internal tools
   * Includes Bold, Italic, Link and Paragraph
   */
  get internalTools() {
    return {
      bold: {
        class: Fi,
        isInternal: !0
      },
      italic: {
        class: qi,
        isInternal: !0
      },
      link: {
        class: $i,
        isInternal: !0
      },
      paragraph: {
        class: Hi,
        inlineToolbar: !0,
        isInternal: !0
      },
      stub: {
        class: ga,
        isInternal: !0
      },
      moveUp: {
        class: va,
        isInternal: !0
      },
      delete: {
        class: xa,
        isInternal: !0
      },
      moveDown: {
        class: ma,
        isInternal: !0
      }
    };
  }
  /**
   * Tool prepare method success callback
   *
   * @param {object} data - append tool to available list
   */
  toolPrepareMethodSuccess(e) {
    const t = this.factory.get(e.toolName);
    if (t.isInline()) {
      const o = ["render", "surround", "checkState"].filter((i) => !t.create()[i]);
      if (o.length) {
        X(
          `Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`,
          "warn",
          o
        ), this.toolsUnavailable.set(t.name, t);
        return;
      }
    }
    this.toolsAvailable.set(t.name, t);
  }
  /**
   * Tool prepare method fail callback
   *
   * @param {object} data - append tool to unavailable list
   */
  toolPrepareMethodFallback(e) {
    this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
  }
  /**
   * Binds prepare function of plugins with user or default config
   *
   * @returns {Array} list of functions that needs to be fired sequentially
   * @param config - tools config
   */
  getListOfPrepareFunctions(e) {
    const t = [];
    return Object.entries(e).forEach(([o, i]) => {
      t.push({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        function: ie(i.class.prepare) ? i.class.prepare : () => {
        },
        data: {
          toolName: o,
          config: i.config
        }
      });
    }), t;
  }
  /**
   * Assign enabled Inline Tools and Block Tunes for Block Tool
   */
  prepareBlockTools() {
    Array.from(this.blockTools.values()).forEach((e) => {
      this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
    });
  }
  /**
   * Assign enabled Inline Tools for Block Tool
   *
   * @param tool - Block Tool
   */
  assignInlineToolsToBlockTool(e) {
    if (this.config.inlineToolbar !== !1) {
      if (e.enabledInlineTools === !0) {
        e.inlineTools = new we(
          Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((t) => [t, this.inlineTools.get(t)]) : Array.from(this.inlineTools.entries())
        );
        return;
      }
      Array.isArray(e.enabledInlineTools) && (e.inlineTools = new we(
        e.enabledInlineTools.map((t) => [t, this.inlineTools.get(t)])
      ));
    }
  }
  /**
   * Assign enabled Block Tunes for Block Tool
   *
   * @param tool — Block Tool
   */
  assignBlockTunesToBlockTool(e) {
    if (e.enabledBlockTunes !== !1) {
      if (Array.isArray(e.enabledBlockTunes)) {
        const t = new we(
          e.enabledBlockTunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new we([...t, ...this.blockTunes.internalTools]);
        return;
      }
      if (Array.isArray(this.config.tunes)) {
        const t = new we(
          this.config.tunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new we([...t, ...this.blockTunes.internalTools]);
        return;
      }
      e.tunes = this.blockTunes.internalTools;
    }
  }
  /**
   * Validate Tools configuration objects and throw Error for user if it is invalid
   */
  validateTools() {
    for (const e in this.config.tools)
      if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
        if (e in this.internalTools)
          return;
        const t = this.config.tools[e];
        if (!ie(t) && !ie(t.class))
          throw Error(
            `Tool «${e}» must be a constructor function or an object with function in the «class» property`
          );
      }
  }
  /**
   * Unify tools config
   */
  prepareConfig() {
    const e = {};
    for (const t in this.config.tools)
      ye(this.config.tools[t]) ? e[t] = this.config.tools[t] : e[t] = { class: this.config.tools[t] };
    return e;
  }
}
jd([
  on
], ya.prototype, "getAllInlineToolsSanitizeConfig", 1);
const Vd = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;will-change:opacity,left,top;top:0;left:0;z-index:3}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;border-radius:0;line-height:normal}.ce-inline-tool svg{width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#eff2f5}}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48);-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:190px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px rgba(201,201,204,.48);box-shadow:0 0 0 1px #c9c9cc7a;border-radius:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}.ce-conversion-tool__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-conversion-tool__icon{width:36px;height:36px;border-radius:8px}.ce-conversion-tool__icon svg{width:28px;height:28px}}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important}.ce-conversion-tool--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-conversion-tool__secondary-label{color:#707684;font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width: 650px){.ce-conversion-tool__secondary-label{display:none}}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;line-height:32px}.ce-settings__button svg{width:20px;height:20px}@media (max-width: 650px){.ce-settings__button svg{width:28px;height:28px}}@media (hover: hover){.ce-settings__button:hover{background-color:#eff2f5}}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{background:rgba(34,186,255,.08)!important}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button--disabled{cursor:not-allowed!important}.ce-settings__button--disabled{opacity:.3}.ce-settings__button--selected{color:#388ae5}@media (min-width: 651px){.codex-editor--narrow .ce-settings .ce-popover{right:0;left:auto;left:initial}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button svg{width:20px;height:20px}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0px;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:rgba(232,232,235,.49);border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #e8e8eb;--color-shadow: rgba(13,20,33,.13);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #eff2f5;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:0;top:calc(100% + var(--offset-from-target));background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}.ce-popover--open-top{top:calc(-1 * (var(--offset-from-target) + var(--popover-height)))}@media (max-width: 650px){.ce-popover{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}.ce-popover .ce-popover__search{display:none}}.ce-popover__search,.ce-popover__custom-content:not(:empty){margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover__custom-content:not(:empty){padding:4px}@media (min-width: 651px){.ce-popover__custom-content:not(:empty){padding:0}}.ce-popover__custom-content--hidden{display:none}.ce-popover-item{--border-radius: 6px;--icon-size: 20px;--icon-size-mobile: 28px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:3px;color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{border-radius:5px;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px var(--color-border-icon);box-shadow:0 0 0 1px var(--color-border-icon);background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:var(--icon-size-mobile);height:var(--icon-size-mobile)}}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--active .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--disabled .ce-popover-item__icon{-webkit-box-shadow:0 0 0 1px var(--color-border-icon-disabled);box-shadow:0 0 0 1px var(--color-border-icon-disabled)}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--focused:not(.ce-popover-item--no-focus){-webkit-box-shadow:inset 0 0 0px 1px var(--color-shadow-item-focus);box-shadow:inset 0 0 0 1px var(--color-shadow-item-focus)}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}.ce-popover-item:hover .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__icon{color:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}.ce-popover-item--confirmation .ce-popover-item__icon,.ce-popover-item--active .ce-popover-item__icon,.ce-popover-item--focused .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}
`;
class zd extends K {
  constructor() {
    super(...arguments), this.isMobile = !1, this.contentRectCache = void 0, this.resizeDebouncer = Ps(() => {
      this.windowResize();
    }, 200);
  }
  /**
   * Editor.js UI CSS class names
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorWrapperNarrow: "codex-editor--narrow",
      editorZone: "codex-editor__redactor",
      editorZoneHidden: "codex-editor__redactor--hidden",
      editorEmpty: "codex-editor--empty",
      editorRtlFix: "codex-editor--rtl"
    };
  }
  /**
   * Return Width of center column of Editor
   *
   * @returns {DOMRect}
   */
  get contentRect() {
    if (this.contentRectCache)
      return this.contentRectCache;
    const e = this.nodes.wrapper.querySelector(`.${xe.CSS.content}`);
    return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
      width: 650,
      left: 0,
      right: 0
    };
  }
  /**
   * Making main interface
   */
  async prepare() {
    this.checkIsMobile(), this.make(), this.loadStyles();
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - removes all listeners from main UI module elements
   *
   * if readOnly is false:
   *  - enables all listeners to UI module elements
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : window.requestIdleCallback(() => {
      this.enableModuleBindings();
    }, {
      timeout: 2e3
    });
  }
  /**
   * Check if Editor is empty and set CSS class to wrapper
   */
  checkEmptiness() {
    const { BlockManager: e } = this.Editor;
    this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e.isEditorEmpty);
  }
  /**
   * Check if one of Toolbar is opened
   * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
   *
   * @returns {boolean}
   */
  get someToolbarOpened() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o, ConversionToolbar: i } = this.Editor;
    return t.opened || o.opened || i.opened || e.toolbox.opened;
  }
  /**
   * Check for some Flipper-buttons is under focus
   */
  get someFlipperButtonFocused() {
    return this.Editor.Toolbar.toolbox.hasFocus() ? !0 : Object.entries(this.Editor).filter(([e, t]) => t.flipper instanceof rt).some(([e, t]) => t.flipper.hasFocus());
  }
  /**
   * Clean editor`s UI
   */
  destroy() {
    this.nodes.holder.innerHTML = "";
  }
  /**
   * Close all Editor's toolbars
   */
  closeAllToolbars() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o, ConversionToolbar: i } = this.Editor;
    t.close(), o.close(), i.close(), e.toolbox.close();
  }
  /**
   * Check for mobile mode and cache a result
   */
  checkIsMobile() {
    this.isMobile = window.innerWidth < Xr;
  }
  /**
   * Makes Editor.js interface
   */
  make() {
    this.nodes.holder = m.getHolder(this.config.holder), this.nodes.wrapper = m.make("div", [
      this.CSS.editorWrapper,
      ...this.isRtl ? [this.CSS.editorRtlFix] : []
    ]), this.nodes.redactor = m.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
  }
  /**
   * Appends CSS
   */
  loadStyles() {
    const e = "editor-js-styles";
    if (m.get(e))
      return;
    const t = m.make("style", null, {
      id: e,
      textContent: Vd.toString()
    });
    this.config.style && !Fe(this.config.style) && this.config.style.nonce && t.setAttribute("nonce", this.config.style.nonce), m.prepend(document.head, t);
  }
  /**
   * Bind events on the Editor.js interface
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(this.nodes.redactor, "click", (t) => {
      this.redactorClicked(t);
    }, !1), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", (t) => {
      this.documentTouched(t);
    }, {
      capture: !0,
      passive: !0
    }), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", (t) => {
      this.documentTouched(t);
    }, {
      capture: !0,
      passive: !0
    }), this.readOnlyMutableListeners.on(document, "keydown", (t) => {
      this.documentKeydown(t);
    }, !0), this.readOnlyMutableListeners.on(document, "mousedown", (t) => {
      this.documentClicked(t);
    }, !0);
    const e = Ps(() => {
      this.selectionChanged();
    }, 180);
    this.readOnlyMutableListeners.on(document, "selectionchange", e, !0), this.readOnlyMutableListeners.on(window, "resize", () => {
      this.resizeDebouncer();
    }, {
      passive: !0
    }), this.watchBlockHoveredEvents();
  }
  /**
   * Listen redactor mousemove to emit 'block-hovered' event
   */
  watchBlockHoveredEvents() {
    let e;
    this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", Qo((t) => {
      const o = t.target.closest(".ce-block");
      this.Editor.BlockSelection.anyBlockSelected || o && e !== o && (e = o, this.eventsDispatcher.emit(ca, {
        block: this.Editor.BlockManager.getBlockByChildNode(o)
      }));
    }, 20), {
      passive: !0
    });
  }
  /**
   * Unbind events on the Editor.js interface
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Resize window handler
   */
  windowResize() {
    this.contentRectCache = null, this.checkIsMobile();
  }
  /**
   * All keydowns on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  documentKeydown(e) {
    switch (e.keyCode) {
      case q.ENTER:
        this.enterPressed(e);
        break;
      case q.BACKSPACE:
      case q.DELETE:
        this.backspacePressed(e);
        break;
      case q.ESC:
        this.escapePressed(e);
        break;
      default:
        this.defaultBehaviour(e);
        break;
    }
  }
  /**
   * Ignore all other document's keydown events
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  defaultBehaviour(e) {
    const { currentBlock: t } = this.Editor.BlockManager, o = e.target.closest(`.${this.CSS.editorWrapper}`), i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    if (t !== void 0 && o === null) {
      this.Editor.BlockEvents.keydown(e);
      return;
    }
    o || t && i || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
  }
  /**
   * @param {KeyboardEvent} event - keyboard event
   */
  backspacePressed(e) {
    const { BlockManager: t, BlockSelection: o, Caret: i } = this.Editor;
    if (o.anyBlockSelected && !_.isSelectionExists) {
      const s = t.removeSelectedBlocks(), r = t.insertDefaultBlockAtIndex(s, !0);
      i.setToBlock(r, i.positions.START), o.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
    }
  }
  /**
   * Escape pressed
   * If some of Toolbar components are opened, then close it otherwise close Toolbar
   *
   * @param {Event} event - escape keydown event
   */
  escapePressed(e) {
    this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
  }
  /**
   * Enter pressed on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  enterPressed(e) {
    const { BlockManager: t, BlockSelection: o } = this.Editor, i = t.currentBlockIndex >= 0;
    if (o.anyBlockSelected && !_.isSelectionExists) {
      o.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
      return;
    }
    if (!this.someToolbarOpened && i && e.target.tagName === "BODY") {
      const s = this.Editor.BlockManager.insert();
      this.Editor.Caret.setToBlock(s), this.Editor.Toolbar.moveAndOpen(s);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * All clicks on document
   *
   * @param {MouseEvent} event - Click event
   */
  documentClicked(e) {
    var t, o;
    if (!e.isTrusted)
      return;
    const i = e.target;
    this.nodes.holder.contains(i) || _.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
    const s = (t = this.Editor.BlockSettings.nodes.wrapper) == null ? void 0 : t.contains(i), r = (o = this.Editor.Toolbar.nodes.settingsToggler) == null ? void 0 : o.contains(i), a = s || r;
    if (this.Editor.BlockSettings.opened && !a) {
      this.Editor.BlockSettings.close();
      const u = this.Editor.BlockManager.getBlockByChildNode(i);
      this.Editor.Toolbar.moveAndOpen(u);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * First touch on editor
   * Fired before click
   *
   * Used to change current block — we need to do it before 'selectionChange' event.
   * Also:
   * - Move and show the Toolbar
   * - Set a Caret
   *
   * @param {MouseEvent | TouchEvent} event - touch or mouse event
   */
  documentTouched(e) {
    let t = e.target;
    if (t === this.nodes.redactor) {
      const o = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, i = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      t = document.elementFromPoint(o, i);
    }
    try {
      this.Editor.BlockManager.setCurrentBlockByChildNode(t);
    } catch {
      this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
    }
    this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * All clicks on the redactor zone
   *
   * @param {MouseEvent} event - click event
   * @description
   * - By clicks on the Editor's bottom zone:
   *      - if last Block is empty, set a Caret to this
   *      - otherwise, add a new empty Block and set a Caret to that
   */
  redactorClicked(e) {
    if (!_.isCollapsed)
      return;
    const t = e.target, o = e.metaKey || e.ctrlKey;
    if (m.isAnchor(t) && o) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const i = t.getAttribute("href"), s = fc(i);
      bc(s);
      return;
    }
    this.processBottomZoneClick(e);
  }
  /**
   * Check if user clicks on the Editor's bottom zone:
   *  - set caret to the last block
   *  - or add new empty block
   *
   * @param event - click event
   */
  processBottomZoneClick(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(-1), o = m.offset(t.holder).bottom, i = e.pageY, { BlockSelection: s } = this.Editor;
    if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && /**
    * If there is cross block selection started, target will be equal to redactor so we need additional check
    */
    !s.anyBlockSelected && /**
    * Prevent caret jumping (to last block) when clicking between blocks
    */
    o < i) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const { BlockManager: r, Caret: a, Toolbar: u } = this.Editor;
      (!r.lastBlock.tool.isDefault || !r.lastBlock.isEmpty) && r.insertAtEnd(), a.setToTheLastBlock(), u.moveAndOpen(r.lastBlock);
    }
  }
  /**
   * Handle selection changes on mobile devices
   * Uses for showing the Inline Toolbar
   */
  selectionChanged() {
    const { CrossBlockSelection: e, BlockSelection: t } = this.Editor, o = _.anchorElement;
    if (e.isCrossBlockSelectionStarted && t.anyBlockSelected && _.get().removeAllRanges(), !o) {
      _.range || this.Editor.InlineToolbar.close();
      return;
    }
    const i = o.closest(`.${xe.CSS.content}`) === null;
    if (i && (this.Editor.InlineToolbar.containsNode(o) || this.Editor.InlineToolbar.close(), o.dataset.inlineToolbar !== "true"))
      return;
    this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o);
    const s = i !== !0;
    this.Editor.InlineToolbar.tryToShow(!0, s);
  }
}
const Gd = {
  // API Modules
  BlocksAPI: Tc,
  CaretAPI: Bc,
  EventsAPI: Ac,
  I18nAPI: Mi,
  API: Lc,
  InlineToolbarAPI: Nc,
  ListenersAPI: Mc,
  NotifierAPI: Oc,
  ReadOnlyAPI: Dc,
  SanitizerAPI: jc,
  SaverAPI: Vc,
  SelectionAPI: zc,
  StylesAPI: Gc,
  ToolbarAPI: Wc,
  TooltipAPI: Jc,
  UiAPI: Qc,
  // Toolbar Modules
  BlockSettings: gd,
  ConversionToolbar: bd,
  Toolbar: kd,
  InlineToolbar: Sd,
  // Modules
  BlockEvents: Cd,
  BlockManager: Bd,
  BlockSelection: Ad,
  Caret: Qn,
  CrossBlockSelection: Ld,
  DragNDrop: Nd,
  ModificationsObserver: Md,
  Paste: fa,
  ReadOnly: Id,
  RectangleSelection: xn,
  Renderer: Rd,
  Saver: _d,
  Tools: ya,
  UI: zd
};
class Wd {
  /**
   * @param {EditorConfig} config - user configuration
   */
  constructor(e) {
    this.moduleInstances = {}, this.eventsDispatcher = new fo();
    let t, o;
    this.isReady = new Promise((i, s) => {
      t = i, o = s;
    }), Promise.resolve().then(async () => {
      this.configuration = e, this.validate(), this.init(), await this.start(), await this.render();
      const { BlockManager: i, Caret: s, UI: r, ModificationsObserver: a } = this.moduleInstances;
      r.checkEmptiness(), a.enable(), this.configuration.autofocus && s.setToBlock(i.blocks[0], s.positions.START), t();
    }).catch((i) => {
      X(`Editor.js is not ready because of ${i}`, "error"), o(i);
    });
  }
  /**
   * Setting for configuration
   *
   * @param {EditorConfig|string} config - Editor's config to set
   */
  set configuration(e) {
    var t, o;
    ye(e) ? this.config = {
      ...e
    } : this.config = {
      holder: e
    }, ti(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = Kr.VERBOSE), uc(this.config.logLevel), ti(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
    const i = {
      type: this.config.defaultBlock,
      data: {}
    };
    this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
      p: !0,
      b: !0,
      a: !0
    }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : !1, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || (() => {
    }), this.config.onChange = this.config.onChange || (() => {
    }), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : !0, (Fe(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = { blocks: [i] }), this.config.readOnly = this.config.readOnly || !1, (t = this.config.i18n) != null && t.messages && Me.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((o = this.config.i18n) == null ? void 0 : o.direction) || "ltr";
  }
  /**
   * Returns private property
   *
   * @returns {EditorConfig}
   */
  get configuration() {
    return this.config;
  }
  /**
   * Checks for required fields in Editor's config
   */
  validate() {
    const { holderId: e, holder: t } = this.config;
    if (e && t)
      throw Error("«holderId» and «holder» param can't assign at the same time.");
    if (wt(t) && !m.get(t))
      throw Error(`element with ID «${t}» is missing. Pass correct holder's ID.`);
    if (t && ye(t) && !m.isElement(t))
      throw Error("«holder» value must be an Element node");
  }
  /**
   * Initializes modules:
   *  - make and save instances
   *  - configure
   */
  init() {
    this.constructModules(), this.configureModules();
  }
  /**
   * Start Editor!
   *
   * Get list of modules that needs to be prepared and return a sequence (Promise)
   *
   * @returns {Promise<void>}
   */
  async start() {
    await [
      "Tools",
      "UI",
      "BlockManager",
      "Paste",
      "BlockSelection",
      "RectangleSelection",
      "CrossBlockSelection",
      "ReadOnly"
    ].reduce(
      (e, t) => e.then(async () => {
        try {
          await this.moduleInstances[t].prepare();
        } catch (o) {
          if (o instanceof Qr)
            throw new Error(o.message);
          X(`Module ${t} was skipped because of %o`, "warn", o);
        }
      }),
      Promise.resolve()
    );
  }
  /**
   * Render initial data
   */
  render() {
    return this.moduleInstances.Renderer.render(this.config.data.blocks);
  }
  /**
   * Make modules instances and save it to the @property this.moduleInstances
   */
  constructModules() {
    Object.entries(Gd).forEach(([e, t]) => {
      try {
        this.moduleInstances[e] = new t({
          config: this.configuration,
          eventsDispatcher: this.eventsDispatcher
        });
      } catch (o) {
        X("[constructModules]", `Module ${e} skipped because`, "error", o);
      }
    });
  }
  /**
   * Modules instances configuration:
   *  - pass other modules to the 'state' property
   *  - ...
   */
  configureModules() {
    for (const e in this.moduleInstances)
      Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
  }
  /**
   * Return modules without passed name
   *
   * @param {string} name - module for witch modules difference should be calculated
   */
  getModulesDiff(e) {
    const t = {};
    for (const o in this.moduleInstances)
      o !== e && (t[o] = this.moduleInstances[o]);
    return t;
  }
}
/**
 * Editor.js
 *
 * @license Apache-2.0
 * @see Editor.js <https://editorjs.io>
 * @author CodeX Team <https://codex.so>
 */
class Kd {
  /** Editor version */
  static get version() {
    return "2.29.0";
  }
  /**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   */
  constructor(e) {
    let t = () => {
    };
    ye(e) && ie(e.onReady) && (t = e.onReady);
    const o = new Wd(e);
    this.isReady = o.isReady.then(() => {
      this.exportAPI(o), t();
    });
  }
  /**
   * Export external API methods
   *
   * @param {Core} editor — Editor's instance
   */
  exportAPI(e) {
    const t = ["configuration"], o = () => {
      Object.values(e.moduleInstances).forEach((i) => {
        ie(i.destroy) && i.destroy(), i.listeners.removeAll();
      }), Xc(), e = null;
      for (const i in this)
        Object.prototype.hasOwnProperty.call(this, i) && delete this[i];
      Object.setPrototypeOf(this, null);
    };
    t.forEach((i) => {
      this[i] = e[i];
    }), this.destroy = o, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
      blocks: {
        clear: "clear",
        render: "render"
      },
      caret: {
        focus: "focus"
      },
      events: {
        on: "on",
        off: "off",
        emit: "emit"
      },
      saver: {
        save: "save"
      }
    }).forEach(([i, s]) => {
      Object.entries(s).forEach(([r, a]) => {
        this[a] = e.moduleInstances.API.methods[i][r];
      });
    });
  }
}
function Ln(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Zd(n) {
  if (n.__esModule)
    return n;
  var e = n.default;
  if (typeof e == "function") {
    var t = function o() {
      return this instanceof o ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(o) {
    var i = Object.getOwnPropertyDescriptor(n, o);
    Object.defineProperty(t, o, i.get ? i : {
      enumerable: !0,
      get: function() {
        return n[o];
      }
    });
  }), t;
}
var wa = { exports: {} };
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(self, function() {
    return (() => {
      var t = { 424: (r, a, u) => {
        u.r(a), u.d(a, { default: () => g });
        var l = u(81), c = u.n(l), d = u(645), h = u.n(d)()(c());
        h.push([r.id, `.ce-block--drop-target .ce-block__content:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -20px;
  margin-top: -1px;
  height: 8px;
  width: 8px;
  border: solid #a0a0a0;
  border-width: 1px 1px 0 0;
  -webkit-transform-origin: right;
  transform-origin: right;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.ce-block--drop-target .ce-block__content:after {
  background: none;
}`, ""]);
        const g = h;
      }, 645: (r) => {
        r.exports = function(a) {
          var u = [];
          return u.toString = function() {
            return this.map(function(l) {
              var c = "", d = l[5] !== void 0;
              return l[4] && (c += "@supports (".concat(l[4], ") {")), l[2] && (c += "@media ".concat(l[2], " {")), d && (c += "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")), c += a(l), d && (c += "}"), l[2] && (c += "}"), l[4] && (c += "}"), c;
            }).join("");
          }, u.i = function(l, c, d, h, g) {
            typeof l == "string" && (l = [[null, l, void 0]]);
            var f = {};
            if (d)
              for (var v = 0; v < this.length; v++) {
                var p = this[v][0];
                p != null && (f[p] = !0);
              }
            for (var k = 0; k < l.length; k++) {
              var x = [].concat(l[k]);
              d && f[x[0]] || (g !== void 0 && (x[5] === void 0 || (x[1] = "@layer".concat(x[5].length > 0 ? " ".concat(x[5]) : "", " {").concat(x[1], "}")), x[5] = g), c && (x[2] && (x[1] = "@media ".concat(x[2], " {").concat(x[1], "}")), x[2] = c), h && (x[4] ? (x[1] = "@supports (".concat(x[4], ") {").concat(x[1], "}"), x[4] = h) : x[4] = "".concat(h)), u.push(x));
            }
          }, u;
        };
      }, 81: (r) => {
        r.exports = function(a) {
          return a[1];
        };
      }, 406: (r, a, u) => {
        var l = u(424);
        typeof l == "string" && (l = [[r.id, l, ""]]), u(723)(l, { hmr: !0, transform: void 0, insertInto: void 0 }), l.locals && (r.exports = l.locals);
      }, 723: (r, a, u) => {
        var l, c, d = {}, h = (l = function() {
          return window && document && document.all && !window.atob;
        }, function() {
          return c === void 0 && (c = l.apply(this, arguments)), c;
        }), g = function(y) {
          return document.querySelector(y);
        }, f = /* @__PURE__ */ function(y) {
          var T = {};
          return function(R) {
            if (typeof R == "function")
              return R();
            if (T[R] === void 0) {
              var O = g.call(this, R);
              if (window.HTMLIFrameElement && O instanceof window.HTMLIFrameElement)
                try {
                  O = O.contentDocument.head;
                } catch {
                  O = null;
                }
              T[R] = O;
            }
            return T[R];
          };
        }(), v = null, p = 0, k = [], x = u(947);
        function P(y, T) {
          for (var R = 0; R < y.length; R++) {
            var O = y[R], Z = d[O.id];
            if (Z) {
              Z.refs++;
              for (var G = 0; G < Z.parts.length; G++)
                Z.parts[G](O.parts[G]);
              for (; G < O.parts.length; G++)
                Z.parts.push(C(O.parts[G], T));
            } else {
              var re = [];
              for (G = 0; G < O.parts.length; G++)
                re.push(C(O.parts[G], T));
              d[O.id] = { id: O.id, refs: 1, parts: re };
            }
          }
        }
        function z(y, T) {
          for (var R = [], O = {}, Z = 0; Z < y.length; Z++) {
            var G = y[Z], re = T.base ? G[0] + T.base : G[0], te = { css: G[1], media: G[2], sourceMap: G[3] };
            O[re] ? O[re].parts.push(te) : R.push(O[re] = { id: re, parts: [te] });
          }
          return R;
        }
        function L(y, T) {
          var R = f(y.insertInto);
          if (!R)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
          var O = k[k.length - 1];
          if (y.insertAt === "top")
            O ? O.nextSibling ? R.insertBefore(T, O.nextSibling) : R.appendChild(T) : R.insertBefore(T, R.firstChild), k.push(T);
          else if (y.insertAt === "bottom")
            R.appendChild(T);
          else {
            if (typeof y.insertAt != "object" || !y.insertAt.before)
              throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
            var Z = f(y.insertInto + " " + y.insertAt.before);
            R.insertBefore(T, Z);
          }
        }
        function I(y) {
          if (y.parentNode === null)
            return !1;
          y.parentNode.removeChild(y);
          var T = k.indexOf(y);
          T >= 0 && k.splice(T, 1);
        }
        function D(y) {
          var T = document.createElement("style");
          return y.attrs.type === void 0 && (y.attrs.type = "text/css"), E(T, y.attrs), L(y, T), T;
        }
        function E(y, T) {
          Object.keys(T).forEach(function(R) {
            y.setAttribute(R, T[R]);
          });
        }
        function C(y, T) {
          var R, O, Z, G;
          if (T.transform && y.css) {
            if (!(G = T.transform(y.css)))
              return function() {
              };
            y.css = G;
          }
          if (T.singleton) {
            var re = p++;
            R = v || (v = D(T)), O = j.bind(null, R, re, !1), Z = j.bind(null, R, re, !0);
          } else
            y.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (R = function(te) {
              var Ct = document.createElement("link");
              return te.attrs.type === void 0 && (te.attrs.type = "text/css"), te.attrs.rel = "stylesheet", E(Ct, te.attrs), L(te, Ct), Ct;
            }(T), O = oe.bind(null, R, T), Z = function() {
              I(R), R.href && URL.revokeObjectURL(R.href);
            }) : (R = D(T), O = U.bind(null, R), Z = function() {
              I(R);
            });
          return O(y), function(te) {
            if (te) {
              if (te.css === y.css && te.media === y.media && te.sourceMap === y.sourceMap)
                return;
              O(y = te);
            } else
              Z();
          };
        }
        r.exports = function(y, T) {
          if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
            throw new Error("The style-loader cannot be used in a non-browser environment");
          (T = T || {}).attrs = typeof T.attrs == "object" ? T.attrs : {}, T.singleton || typeof T.singleton == "boolean" || (T.singleton = h()), T.insertInto || (T.insertInto = "head"), T.insertAt || (T.insertAt = "bottom");
          var R = z(y, T);
          return P(R, T), function(O) {
            for (var Z = [], G = 0; G < R.length; G++) {
              var re = R[G];
              (te = d[re.id]).refs--, Z.push(te);
            }
            for (O && P(z(O, T), T), G = 0; G < Z.length; G++) {
              var te;
              if ((te = Z[G]).refs === 0) {
                for (var Ct = 0; Ct < te.parts.length; Ct++)
                  te.parts[Ct]();
                delete d[te.id];
              }
            }
          };
        };
        var B, A = (B = [], function(y, T) {
          return B[y] = T, B.filter(Boolean).join(`
`);
        });
        function j(y, T, R, O) {
          var Z = R ? "" : O.css;
          if (y.styleSheet)
            y.styleSheet.cssText = A(T, Z);
          else {
            var G = document.createTextNode(Z), re = y.childNodes;
            re[T] && y.removeChild(re[T]), re.length ? y.insertBefore(G, re[T]) : y.appendChild(G);
          }
        }
        function U(y, T) {
          var R = T.css, O = T.media;
          if (O && y.setAttribute("media", O), y.styleSheet)
            y.styleSheet.cssText = R;
          else {
            for (; y.firstChild; )
              y.removeChild(y.firstChild);
            y.appendChild(document.createTextNode(R));
          }
        }
        function oe(y, T, R) {
          var O = R.css, Z = R.sourceMap, G = T.convertToAbsoluteUrls === void 0 && Z;
          (T.convertToAbsoluteUrls || G) && (O = x(O)), Z && (O += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(Z)))) + " */");
          var re = new Blob([O], { type: "text/css" }), te = y.href;
          y.href = URL.createObjectURL(re), te && URL.revokeObjectURL(te);
        }
      }, 947: (r) => {
        r.exports = function(a) {
          var u = typeof window < "u" && window.location;
          if (!u)
            throw new Error("fixUrls requires window.location");
          if (!a || typeof a != "string")
            return a;
          var l = u.protocol + "//" + u.host, c = l + u.pathname.replace(/\/[^\/]*$/, "/");
          return a.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(d, h) {
            var g, f = h.trim().replace(/^"(.*)"$/, function(v, p) {
              return p;
            }).replace(/^'(.*)'$/, function(v, p) {
              return p;
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(f) ? d : (g = f.indexOf("//") === 0 ? f : f.indexOf("/") === 0 ? l + f : c + f.replace(/^\.\//, ""), "url(" + JSON.stringify(g) + ")");
          });
        };
      } }, o = {};
      function i(r) {
        var a = o[r];
        if (a !== void 0)
          return a.exports;
        var u = o[r] = { id: r, exports: {} };
        return t[r](u, u.exports, i), u.exports;
      }
      i.n = (r) => {
        var a = r && r.__esModule ? () => r.default : () => r;
        return i.d(a, { a }), a;
      }, i.d = (r, a) => {
        for (var u in a)
          i.o(a, u) && !i.o(r, u) && Object.defineProperty(r, u, { enumerable: !0, get: a[u] });
      }, i.o = (r, a) => Object.prototype.hasOwnProperty.call(r, a), i.r = (r) => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
      };
      var s = {};
      return (() => {
        function r(u, l) {
          for (var c = 0; c < l.length; c++) {
            var d = l[c];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(u, d.key, d);
          }
        }
        i.d(s, { default: () => a }), i(406);
        var a = function() {
          function u(h, g) {
            var f = h.configuration, v = h.blocks, p = h.toolbar, k = h.save;
            (function(x, P) {
              if (!(x instanceof P))
                throw new TypeError("Cannot call a class as a function");
            })(this, u), this.toolbar = p, this.borderStyle = g || "1px dashed #aaa", this.api = v, this.holder = typeof f.holder == "string" ? document.getElementById(f.holder) : f.holder, this.readOnly = f.readOnly, this.startBlock = null, this.endBlock = null, this.save = k, this.setDragListener(), this.setDropListener();
          }
          var l, c, d;
          return l = u, d = [{ key: "isReadOnlySupported", get: function() {
            return !0;
          } }], (c = [{ key: "setElementCursor", value: function(h) {
            if (h) {
              var g = document.createRange(), f = window.getSelection();
              g.setStart(h.childNodes[0], 0), g.collapse(!0), f.removeAllRanges(), f.addRange(g), h.focus();
            }
          } }, { key: "setDragListener", value: function() {
            var h = this;
            if (!this.readOnly) {
              var g = this.holder.querySelector(".ce-toolbar__settings-btn");
              g.setAttribute("draggable", "true"), g.addEventListener("dragstart", function() {
                h.startBlock = h.api.getCurrentBlockIndex();
              }), g.addEventListener("drag", function() {
                if (h.toolbar.close(), !h.isTheOnlyBlock()) {
                  var f = h.holder.querySelectorAll(".ce-block"), v = h.holder.querySelector(".ce-block--drop-target");
                  h.setElementCursor(v), h.setBorderBlocks(f, v);
                }
              });
            }
          } }, { key: "setBorderBlocks", value: function(h, g) {
            var f = this;
            Object.values(h).forEach(function(v) {
              var p = v.querySelector(".ce-block__content");
              v !== g ? (p.style.removeProperty("border-top"), p.style.removeProperty("border-bottom")) : Object.keys(h).find(function(k) {
                return h[k] === g;
              }) > f.startBlock ? p.style.borderBottom = f.borderStyle || borderStyle : p.style.borderTop = f.borderStyle;
            });
          } }, { key: "setDropListener", value: function() {
            var h = this;
            document.addEventListener("drop", function(g) {
              var f = g.target;
              if (h.holder.contains(f) && h.startBlock !== null) {
                var v = h.getDropTarget(f);
                if (v) {
                  var p = v.querySelector(".ce-block__content");
                  p.style.removeProperty("border-top"), p.style.removeProperty("border-bottom"), h.endBlock = h.getTargetPosition(v), h.moveBlocks();
                }
              }
              h.startBlock = null;
            });
          } }, { key: "getDropTarget", value: function(h) {
            return h.classList.contains("ce-block") ? h : h.closest(".ce-block");
          } }, { key: "getTargetPosition", value: function(h) {
            return Array.from(h.parentNode.children).indexOf(h);
          } }, { key: "isTheOnlyBlock", value: function() {
            return this.api.getBlocksCount() === 1;
          } }, { key: "moveBlocks", value: function() {
            this.isTheOnlyBlock() || this.api.move(this.endBlock, this.startBlock);
          } }]) && r(l.prototype, c), d && r(l, d), Object.defineProperty(l, "prototype", { writable: !1 }), u;
        }();
      })(), s.default;
    })();
  });
})(wa);
var Yd = wa.exports;
const Xd = /* @__PURE__ */ Ln(Yd);
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}.ce-header[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;display:none;cursor:text}.ce-header[contentEditable=true][data-placeholder]:empty:before{display:block}.ce-header[contentEditable=true][data-placeholder]:empty:focus:before{display:none}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const Jd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>', Qd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>', eh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>', th = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>', nh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>', oh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>', ih = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>';
/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */
class sh {
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: HeaderData, config: HeaderConfig, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   *   readOnly - read only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    this.api = o, this.readOnly = i, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-header"
    }, this._settings = t, this._data = this.normalizeData(e), this._element = this.getTag();
  }
  /**
   * Normalize input data
   *
   * @param {HeaderData} data - saved data to process
   *
   * @returns {HeaderData}
   * @private
   */
  normalizeData(e) {
    const t = {};
    return typeof e != "object" && (e = {}), t.text = e.text || "", t.level = parseInt(e.level) || this.defaultLevel.number, t;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLHeadingElement}
   * @public
   */
  render() {
    return this._element;
  }
  /**
   * Returns header block tunes config
   *
   * @returns {Array}
   */
  renderSettings() {
    return this.levels.map((e) => ({
      icon: e.svg,
      label: this.api.i18n.t(`Heading ${e.number}`),
      onActivate: () => this.setLevel(e.number),
      closeOnActivate: !0,
      isActive: this.currentLevel.number === e.number
    }));
  }
  /**
   * Callback for Block's settings buttons
   *
   * @param {number} level - level to set
   */
  setLevel(e) {
    this.data = {
      level: e,
      text: this.data.text
    };
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {HeaderData} data - saved data to merger with current block
   * @public
   */
  merge(e) {
    const t = {
      text: this.data.text + e.text,
      level: this.data.level
    };
    this.data = t;
  }
  /**
   * Validate Text block data:
   * - check for emptiness
   *
   * @param {HeaderData} blockData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return e.text.trim() !== "";
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLHeadingElement} toolsContent - Text tools rendered view
   * @returns {HeaderData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML,
      level: this.currentLevel.number
    };
  }
  /**
   * Allow Header to be converted to/from other blocks
   */
  static get conversionConfig() {
    return {
      export: "text",
      // use 'text' property for other blocks
      import: "text"
      // fill 'text' property from other block's export string
    };
  }
  /**
   * Sanitizer Rules
   */
  static get sanitize() {
    return {
      level: !1,
      text: {}
    };
  }
  /**
   * Returns true to notify core that read-only is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get current Tools`s data
   *
   * @returns {HeaderData} Current data
   * @private
   */
  get data() {
    return this._data.text = this._element.innerHTML, this._data.level = this.currentLevel.number, this._data;
  }
  /**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {HeaderData} data — data to set
   * @private
   */
  set data(e) {
    if (this._data = this.normalizeData(e), e.level !== void 0 && this._element.parentNode) {
      const t = this.getTag();
      t.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(t, this._element), this._element = t;
    }
    e.text !== void 0 && (this._element.innerHTML = this._data.text || "");
  }
  /**
   * Get tag for target level
   * By default returns second-leveled header
   *
   * @returns {HTMLElement}
   */
  getTag() {
    const e = document.createElement(this.currentLevel.tag);
    return e.innerHTML = this._data.text || "", e.classList.add(this._CSS.wrapper), e.contentEditable = this.readOnly ? "false" : "true", e.dataset.placeholder = this.api.i18n.t(this._settings.placeholder || ""), e;
  }
  /**
   * Get current level
   *
   * @returns {level}
   */
  get currentLevel() {
    let e = this.levels.find((t) => t.number === this._data.level);
    return e || (e = this.defaultLevel), e;
  }
  /**
   * Return default level
   *
   * @returns {level}
   */
  get defaultLevel() {
    if (this._settings.defaultLevel) {
      const e = this.levels.find((t) => t.number === this._settings.defaultLevel);
      if (e)
        return e;
      console.warn("(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels");
    }
    return this.levels[1];
  }
  /**
   * @typedef {object} level
   * @property {number} number - level number
   * @property {string} tag - tag corresponds with level number
   * @property {string} svg - icon
   */
  /**
   * Available header levels
   *
   * @returns {level[]}
   */
  get levels() {
    const e = [
      {
        number: 1,
        tag: "H1",
        svg: Jd
      },
      {
        number: 2,
        tag: "H2",
        svg: Qd
      },
      {
        number: 3,
        tag: "H3",
        svg: eh
      },
      {
        number: 4,
        tag: "H4",
        svg: th
      },
      {
        number: 5,
        tag: "H5",
        svg: nh
      },
      {
        number: 6,
        tag: "H6",
        svg: oh
      }
    ];
    return this._settings.levels ? e.filter(
      (t) => this._settings.levels.includes(t.number)
    ) : e;
  }
  /**
   * Handle H1-H6 tags on paste to substitute it with header Tool
   *
   * @param {PasteEvent} event - event with pasted content
   */
  onPaste(e) {
    const t = e.detail.data;
    let o = this.defaultLevel.number;
    switch (t.tagName) {
      case "H1":
        o = 1;
        break;
      case "H2":
        o = 2;
        break;
      case "H3":
        o = 3;
        break;
      case "H4":
        o = 4;
        break;
      case "H5":
        o = 5;
        break;
      case "H6":
        o = 6;
        break;
    }
    this._settings.levels && (o = this._settings.levels.reduce((i, s) => Math.abs(s - o) < Math.abs(i - o) ? s : i)), this.data = {
      level: o,
      text: t.innerHTML
    };
  }
  /**
   * Used by Editor.js paste handling API.
   * Provides configuration to handle H1-H6 tags.
   *
   * @returns {{handler: (function(HTMLElement): {text: string}), tags: string[]}}
   */
  static get pasteConfig() {
    return {
      tags: ["H1", "H2", "H3", "H4", "H5", "H6"]
    };
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: ih,
      title: "Heading"
    };
  }
}
var ka = { exports: {} };
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(self, () => (() => {
    var t = { 424: (s, r, a) => {
      (r = a(645)(!1)).push([s.id, `.picker_wrapper.popup {
  z-index: 99;
  width: 170px;
  margin: 0;
  box-shadow: 0 0 10px 1px #eaeaea;
  background: #ffffff;
}

.picker_arrow {
  display: none;
}

.layout_default .picker_slider, .layout_default .picker_selector {
  padding: 5px;
}

.colorPlugin.ce-inline-tool {
  width: 32px;
  border-radius: 3px;
}

.colorPlugin.ce-inline-tool--active svg {
  fill: #3c99ff;
}

#color-left-btn {
  height: 35px;
  width: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
}

#color-left-btn:hover {
  border-radius: 5px 0 0 5px;
  background: rgba(203, 203, 203, 0.49);
}

#color-text {
  padding: 0 4px;
}

#color-btn-text {
  height: 15px;
}

`, ""]), s.exports = r;
    }, 645: (s) => {
      s.exports = function(r) {
        var a = [];
        return a.toString = function() {
          return this.map(function(u) {
            var l = function(c, d) {
              var h, g, f, v = c[1] || "", p = c[3];
              if (!p)
                return v;
              if (d && typeof btoa == "function") {
                var k = (h = p, g = btoa(unescape(encodeURIComponent(JSON.stringify(h)))), f = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(g), "/*# ".concat(f, " */")), x = p.sources.map(function(P) {
                  return "/*# sourceURL=".concat(p.sourceRoot || "").concat(P, " */");
                });
                return [v].concat(x).concat([k]).join(`
`);
              }
              return [v].join(`
`);
            }(u, r);
            return u[2] ? "@media ".concat(u[2], " {").concat(l, "}") : l;
          }).join("");
        }, a.i = function(u, l, c) {
          typeof u == "string" && (u = [[null, u, ""]]);
          var d = {};
          if (c)
            for (var h = 0; h < this.length; h++) {
              var g = this[h][0];
              g != null && (d[g] = !0);
            }
          for (var f = 0; f < u.length; f++) {
            var v = [].concat(u[f]);
            c && d[v[0]] || (l && (v[2] ? v[2] = "".concat(l, " and ").concat(v[2]) : v[2] = l), a.push(v));
          }
        }, a;
      };
    }, 548: (s, r, a) => {
      var u = a(379), l = a(424);
      typeof (l = l.__esModule ? l.default : l) == "string" && (l = [[s.id, l, ""]]), u(l, { insert: "head", singleton: !1 }), s.exports = l.locals || {};
    }, 379: (s, r, a) => {
      var u, l = /* @__PURE__ */ function() {
        var L = {};
        return function(I) {
          if (L[I] === void 0) {
            var D = document.querySelector(I);
            if (window.HTMLIFrameElement && D instanceof window.HTMLIFrameElement)
              try {
                D = D.contentDocument.head;
              } catch {
                D = null;
              }
            L[I] = D;
          }
          return L[I];
        };
      }(), c = [];
      function d(L) {
        for (var I = -1, D = 0; D < c.length; D++)
          if (c[D].identifier === L) {
            I = D;
            break;
          }
        return I;
      }
      function h(L, I) {
        for (var D = {}, E = [], C = 0; C < L.length; C++) {
          var B = L[C], A = I.base ? B[0] + I.base : B[0], j = D[A] || 0, U = "".concat(A, " ").concat(j);
          D[A] = j + 1;
          var oe = d(U), y = { css: B[1], media: B[2], sourceMap: B[3] };
          oe !== -1 ? (c[oe].references++, c[oe].updater(y)) : c.push({ identifier: U, updater: z(y, I), references: 1 }), E.push(U);
        }
        return E;
      }
      function g(L) {
        var I = document.createElement("style"), D = L.attributes || {};
        if (D.nonce === void 0) {
          var E = a.nc;
          E && (D.nonce = E);
        }
        if (Object.keys(D).forEach(function(B) {
          I.setAttribute(B, D[B]);
        }), typeof L.insert == "function")
          L.insert(I);
        else {
          var C = l(L.insert || "head");
          if (!C)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          C.appendChild(I);
        }
        return I;
      }
      var f, v = (f = [], function(L, I) {
        return f[L] = I, f.filter(Boolean).join(`
`);
      });
      function p(L, I, D, E) {
        var C = D ? "" : E.media ? "@media ".concat(E.media, " {").concat(E.css, "}") : E.css;
        if (L.styleSheet)
          L.styleSheet.cssText = v(I, C);
        else {
          var B = document.createTextNode(C), A = L.childNodes;
          A[I] && L.removeChild(A[I]), A.length ? L.insertBefore(B, A[I]) : L.appendChild(B);
        }
      }
      function k(L, I, D) {
        var E = D.css, C = D.media, B = D.sourceMap;
        if (C ? L.setAttribute("media", C) : L.removeAttribute("media"), B && typeof btoa < "u" && (E += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(B)))), " */")), L.styleSheet)
          L.styleSheet.cssText = E;
        else {
          for (; L.firstChild; )
            L.removeChild(L.firstChild);
          L.appendChild(document.createTextNode(E));
        }
      }
      var x = null, P = 0;
      function z(L, I) {
        var D, E, C;
        if (I.singleton) {
          var B = P++;
          D = x || (x = g(I)), E = p.bind(null, D, B, !1), C = p.bind(null, D, B, !0);
        } else
          D = g(I), E = k.bind(null, D, I), C = function() {
            (function(A) {
              if (A.parentNode === null)
                return !1;
              A.parentNode.removeChild(A);
            })(D);
          };
        return E(L), function(A) {
          if (A) {
            if (A.css === L.css && A.media === L.media && A.sourceMap === L.sourceMap)
              return;
            E(L = A);
          } else
            C();
        };
      }
      s.exports = function(L, I) {
        (I = I || {}).singleton || typeof I.singleton == "boolean" || (I.singleton = (u === void 0 && (u = !!(window && document && document.all && !window.atob)), u));
        var D = h(L = L || [], I);
        return function(E) {
          if (E = E || [], Object.prototype.toString.call(E) === "[object Array]") {
            for (var C = 0; C < D.length; C++) {
              var B = d(D[C]);
              c[B].references--;
            }
            for (var A = h(E, I), j = 0; j < D.length; j++) {
              var U = d(D[j]);
              c[U].references === 0 && (c[U].updater(), c.splice(U, 1));
            }
            D = A;
          }
        };
      };
    }, 452: (s) => {
      s.exports = { markerIcon: `<svg fill="#000000" height="34px" width="34px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 491.644 491.644" xml:space="preserve">
<g>
	<path d="M456.623,2.282c-42.758-20.283-141.107,96.84-223.473,264.224c-2.35,4.776-2.686,10.294-0.936,15.32
		c1.75,5.026,5.442,9.145,10.251,11.426L366.758,352.2c4.809,2.281,10.332,2.538,15.333,0.714c5.001-1.825,9.059-5.579,11.272-10.42
		C470.883,172.829,499.385,22.562,456.623,2.282z"/>
	<path d="M34.71,461.799l-17.257,16.708c-2.225,2.17-2.934,5.475-1.773,8.363c1.179,2.886,3.985,4.773,7.099,4.773h160.887
		c-1.364-5.043-0.921-10.445,1.391-15.306l7.919-16.692H40.036C38.036,459.646,36.129,460.419,34.71,461.799z"/>
	<path d="M264.766,448.864l-32.615-15.458c-1.046-0.502-2.161-0.744-3.257-0.744c-2.87,0-5.611,1.614-6.901,4.372l-22.001,46.384
		c-0.871,1.789-0.723,3.895,0.341,5.564c1.046,1.661,2.888,2.661,4.855,2.661h0.046l44.275-0.378
		c2.206-0.016,4.206-1.299,5.159-3.292l13.724-28.925c0.856-1.838,0.967-3.936,0.29-5.846
		C268.004,451.292,266.585,449.728,264.766,448.864z"/>
	<path d="M348.445,366.038l-112.572-51.392c-8.909-4.067-19.434-0.227-23.63,8.622c-2.551,5.378-3.58,11.353-2.975,17.275
		l5.2,50.909c0.703,6.882,4.983,12.884,11.261,15.792l60.031,27.797c6.688,3.097,14.548,2.179,20.343-2.375l45.983-36.137
		c4.931-3.875,7.487-10.041,6.743-16.269C358.086,374.032,354.151,368.642,348.445,366.038z"/>
</g>
</svg>`, textIcon: '<svg fill="#000000" viewBox="-6 0 512 512" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><title>text</title><path d="M365 432L328 352 172 352 135 432 64 432 227 80 272 80 436 432 365 432ZM201 288L299 288 250 183 201 288Z"></path></g></svg>' };
    }, 138: (s, r, a) => {
      const u = a(442), { markerIcon: l, textIcon: c } = a(452), { getDefaultColorCache: d, handleCSSVariables: h } = a(697);
      a(548).toString(), s.exports = class {
        constructor({ config: g, api: f }) {
          this.api = f, this.config = g, this.clickedOnLeft = !1, this.pluginType = this.config.type || "text", this.parentTag = this.pluginType === "marker" ? "MARK" : "FONT", this.hasCustomPicker = this.config.customPicker || !1, this.color = h(d(this.config.defaultColor, this.pluginType)), this.picker = null, this.icon = null, this.button = null, this.iconClasses = { base: this.api.styles.inlineToolButton, active: this.api.styles.inlineToolButtonActive };
        }
        static get isInline() {
          return !0;
        }
        render() {
          return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add("colorPlugin"), this.button.classList.add(this.iconClasses.base), this.button.appendChild(this.createLeftButton()), this.button.appendChild(this.createRightButton(this)), this.button;
        }
        createLeftButton() {
          return this.icon || (this.icon = document.createElement("div"), this.icon.id = "color-left-btn", this.icon.appendChild(this.createButtonIcon()), this.icon.addEventListener("click", () => this.clickedOnLeft = !0)), this.icon;
        }
        createButtonIcon() {
          const g = document.createElement("div");
          g.id = "color-btn-text";
          const f = this.pluginType === "marker" ? l : c;
          return g.innerHTML = this.config.icon || f, g;
        }
        createRightButton(g) {
          return this.picker || (this.picker = new u.ColorPlugin({ onColorPicked: function(f) {
            g.color = f;
          }, hasCustomPicker: this.hasCustomPicker, defaultColor: this.config.defaultColor, colorCollections: this.config.colorCollections, type: this.pluginType })), this.picker;
        }
        surround(g) {
          if (!g)
            return;
          const f = this.api.selection.findParentTag("SPAN");
          f && this.unwrap(f);
          const v = this.api.selection.findParentTag(this.parentTag);
          v ? this.unwrap(v) : this.wrap(g), this.clickedOnLeft = !1;
        }
        wrap(g) {
          const f = g.extractContents(), v = document.createElement(this.parentTag);
          v.appendChild(f), g.insertNode(v), this.pluginType === "marker" ? this.wrapMarker(v) : this.wrapTextColor(v), this.api.selection.expandToTag(v);
        }
        wrapMarker(g) {
          g.style.backgroundColor = this.color;
          const f = this.api.selection.findParentTag("FONT");
          f && (g.style.color = f.style.color);
        }
        wrapTextColor(g) {
          g.style.color = this.color;
        }
        unwrap(g) {
          this.api.selection.expandToTag(g);
          const f = window.getSelection(), v = f.getRangeAt(0), p = v.extractContents();
          this.clickedOnLeft ? this.removeWrapper(g) : this.updateWrapper(g), v.insertNode(p), f.removeAllRanges(), f.addRange(v);
        }
        updateWrapper(g) {
          this.pluginType === "marker" ? g.style.backgroundColor = this.color : g.style.color = this.color;
        }
        removeWrapper(g) {
          g.parentNode.removeChild(g);
        }
        checkState() {
          const g = this.api.selection.findParentTag("SPAN"), f = this.api.selection.findParentTag(this.parentTag);
          let v = g ? this.handleLegacyWrapper(g, f) : f;
          return this.button.classList.toggle(this.iconClasses.active, !!v), !!v;
        }
        handleLegacyWrapper(g, f) {
          return this.pluginType === "marker" ? g : f & g;
        }
        static get sanitize() {
          return { font: !0, span: !0, mark: !0 };
        }
        clear() {
          this.picker = null, this.icon = null;
        }
      };
    }, 442: (s, r, a) => {
      a.r(r), a.d(r, { ColorPlugin: () => f });
      class u extends HTMLElement {
        static get observedAttributes() {
          return ["disabled", "icon", "loading", "href", "htmltype"];
        }
        constructor() {
          super(), this.attachShadow({ mode: "open" }).innerHTML = `
        <style>
        :host{ 
            position:relative; 
            display:inline-flex; 
            padding: .25em .625em;
            box-sizing:border-box; 
            vertical-align: middle;
            line-height: 1.8;
            width: 5px;
            overflow:hidden; 
            align-items:center;
            justify-content: center;
            font-size: 14px; 
            color: var(--fontColor,#333);  
            border-radius: var(--borderRadius,.25em);
            background: var(--fontColor,#333); 
            transition:background .3s,box-shadow .3s,border-color .3s,color .3s;
        }
        :host([shape="circle"]){ 
            border-radius:50%; 
        }
        /*
        :host(:not([disabled]):active){
            z-index:1;
            transform:translateY(.1em);
        }
        */
        :host([disabled]),:host([loading]){
            pointer-events: none; 
            opacity:.6; 
        }
        :host([block]){ 
            display:flex; 
        }
        :host([disabled]:not([type])){ 
            background:rgba(0,0,0,.1); 
        }
        :host([disabled]) .btn,:host([loading]) .btn{ 
            cursor: not-allowed; 
            pointer-events: all; 
        }
        :host(:not([type="primary"]):not([type="danger"]):not([disabled]):hover),
        :host(:not([type="primary"]):not([type="danger"]):focus-within),
        :host([type="flat"][focus]){ 
            color:var(--themeColor,#42b983); 
            border-color: var(--themeColor,#42b983); 
        }
        :host(:not([type="primary"]):not([type="danger"])) .btn::after{ 
            background-image: radial-gradient(circle, var(--themeColor,#42b983) 10%, transparent 10.01%); 
        }
        :host([type="primary"]){ 
            color: #fff; 
            background:var(--themeBackground,var(--themeColor,#42b983));
        }
        :host([type="danger"]){ 
            color: #fff; 
            background:var(--themeBackground,var(--dangerColor,#ff7875));
        }
        :host([type="dashed"]){ 
            border-style:dashed 
        }
        :host([type="flat"]),:host([type="primary"]),:host([type="danger"]){ 
            border:0;
            padding: calc( .25em + 1px ) calc( .625em + 1px );
        }
        :host([type="flat"]) .btn::before{ 
            content:''; 
            position:absolute; 
            background:var(--themeColor,#42b983);
            pointer-events:none; 
            left:0; 
            right:0; 
            top:0; 
            bottom:0; 
            opacity:0; 
            transition:.3s;
        }
        :host([type="flat"]:not([disabled]):hover) .btn::before{ 
            opacity:.1 
        }
        :host(:not([disabled]):hover){ 
            z-index:1 
        }
        :host([type="flat"]:focus-within) .btn:before,
        :host([type="flat"][focus]) .btn:before{ 
            opacity:.2; 
        }
        :host(:focus-within){ 
            /*box-shadow: 0 0 10px rgba(0,0,0,0.1);*/ 
        }
        .btn{ 
            background:none; 
            outline:0; 
            border:0; 
            position: 
            absolute; 
            left:0; 
            top:0;
            width:100%;
            height:100%;
            padding:0;
            user-select: none;
            cursor: unset;
        }
        xy-loading{ 
            margin-right: 0.35em;  
        }
        ::-moz-focus-inner{
            border:0;
        }
        .btn::before{
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            left:0;
            top:0;
            transition:.2s;
            background:#fff;
            opacity:0;
        }
        :host(:not([disabled]):active) .btn::before{ 
            opacity:.2;
        }
        .btn::after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            left: var(--x,0); 
            top: var(--y,0);
            pointer-events: none;
            background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
            background-repeat: no-repeat;
            background-position: 50%;
            transform: translate(-50%,-50%) scale(10);
            opacity: 0;
            transition: transform .3s, opacity .8s;
        }
        .btn:not([disabled]):active::after {
            transform: translate(-50%,-50%) scale(0);
            opacity: .3;
            transition: 0s;
        }
        xy-icon{
            margin-right: 0.35em;
            transition: none;
        }
        :host(:empty) xy-icon{
            margin: auto;
        }
        :host(:empty){
            padding: .65em;
        }
        :host([type="flat"]:empty),:host([type="primary"]:empty){ 
            padding: calc( .65em + 1px );
        }
        ::slotted(xy-icon){
            transition: none;
        }
        :host([href]){
            cursor:pointer;
        }
        </style>
        <${this.href ? "a" : "button"} ${this.htmltype ? 'type="' + this.htmltype + '"' : ""} ${this.download && this.href ? 'download="' + this.download + '"' : ""} ${this.href ? 'href="' + this.href + '" target="' + this.target + '" rel="' + this.rel + '"' : ""} class="btn" id="btn"></${this.href ? "a" : "button"}>${!this.loading && this.icon && this.icon != "null" ? '<xy-icon id="icon" name=' + this.icon + "></xy-icon>" : ""}<slot></slot>
        `;
        }
        focus() {
          this.btn.focus();
        }
        get disabled() {
          return this.getAttribute("disabled") !== null;
        }
        get toggle() {
          return this.getAttribute("toggle") !== null;
        }
        get htmltype() {
          return this.getAttribute("htmltype");
        }
        get name() {
          return this.getAttribute("name");
        }
        get checked() {
          return this.getAttribute("checked") !== null;
        }
        get href() {
          return this.getAttribute("href");
        }
        get target() {
          return this.getAttribute("target") || "_blank";
        }
        get rel() {
          return this.getAttribute("rel");
        }
        get download() {
          return this.getAttribute("download");
        }
        get icon() {
          return this.getAttribute("icon");
        }
        get loading() {
          return this.getAttribute("loading") !== null;
        }
        set icon(p) {
          this.setAttribute("icon", p);
        }
        set htmltype(p) {
          this.setAttribute("htmltype", p);
        }
        set href(p) {
          this.setAttribute("href", p);
        }
        set disabled(p) {
          p === null || p === !1 ? this.removeAttribute("disabled") : this.setAttribute("disabled", "");
        }
        set checked(p) {
          p === null || p === !1 ? this.removeAttribute("checked") : this.setAttribute("checked", "");
        }
        set loading(p) {
          p === null || p === !1 ? this.removeAttribute("loading") : this.setAttribute("loading", "");
        }
        connectedCallback() {
          this.btn = this.shadowRoot.getElementById("btn"), this.ico = this.shadowRoot.getElementById("icon"), this.load = document.createElement("xy-loading"), this.load.style.color = "inherit", this.btn.addEventListener("mousedown", function(p) {
            if (!this.disabled) {
              const { left: k, top: x } = this.getBoundingClientRect();
              this.style.setProperty("--x", p.clientX - k + "px"), this.style.setProperty("--y", p.clientY - x + "px");
            }
          }), this.addEventListener("click", function(p) {
            this.toggle && (this.checked = !this.checked);
          }), this.btn.addEventListener("keydown", (p) => {
            p.keyCode === 13 && p.stopPropagation();
          }), this.disabled = this.disabled, this.loading = this.loading;
        }
        attributeChangedCallback(p, k, x) {
          p == "disabled" && this.btn && (x !== null ? (this.btn.setAttribute("disabled", "disabled"), this.href && this.btn.removeAttribute("href")) : (this.btn.removeAttribute("disabled"), this.href && (this.btn.href = this.href))), p == "loading" && this.btn && (x !== null ? (this.shadowRoot.prepend(this.load), this.btn.setAttribute("disabled", "disabled")) : (this.shadowRoot.removeChild(this.load), this.btn.removeAttribute("disabled"))), p == "icon" && this.ico && (this.ico.name = x), p == "href" && this.btn && (this.disabled || (this.btn.href = x)), p == "htmltype" && this.btn && (this.btn.type = x);
        }
      }
      customElements.get("xy-button") || customElements.define("xy-button", u);
      class l extends HTMLElement {
        static get observedAttributes() {
          return ["disabled"];
        }
        constructor() {
          super(), this.attachShadow({ mode: "open" }).innerHTML = `
        <style>
        :host {
            display:inline-flex;
        }
        ::slotted(xy-button:not(:first-of-type):not(:last-of-type)){
            border-radius:0;
        }
        ::slotted(xy-button){
            margin:0!important;
        }
        ::slotted(xy-button:not(:first-of-type)){
            margin-left:-1px!important;
        }
        ::slotted(xy-button[type]:not([type="dashed"]):not(:first-of-type)){
            margin-left:1px!important;
        }
        ::slotted(xy-button:first-of-type){
            border-top-right-radius: 0;
            border-bottom-right-radius: 0px;
        }
        ::slotted(xy-button:last-of-type){
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
        </style>
        <slot></slot>
        `;
        }
        get disabled() {
          return this.getAttribute("disabled") !== null;
        }
        set disabled(p) {
          p === null || p === !1 ? this.removeAttribute("disabled") : this.setAttribute("disabled", "");
        }
        connectedCallback() {
        }
        attributeChangedCallback(p, k, x) {
        }
      }
      customElements.get("xy-button-group") || customElements.define("xy-button-group", l);
      class c extends HTMLElement {
        static get observedAttributes() {
          return ["open", "title", "oktext", "canceltext", "loading", "type"];
        }
        constructor(p) {
          super(), this.attachShadow({ mode: "open" }).innerHTML = `
        <style>
        :host{
            position:absolute;
            display:flex;
            box-shadow: 2px 2px 15px rgba(0,0,0,0.15);
            box-sizing: border-box;
            transform:scale(0);
            opacity:0.5;
            border-radius: 3px;
            z-index:10;
            transition:.3s cubic-bezier(.645, .045, .355, 1);
            transform-origin:inherit;
            background:#fff;
            visibility:hidden;
        }
        .popcon-content{
            box-sizing: border-box;
            display:flex;
            width: max-content;
            padding: 0 15px;
            flex:1;
            flex-direction:column;
        }
        .popcon-title {
            line-height: 30px;
            padding: 15px 30px 0 0;
            font-weight: 700;
            font-size: 14px;
            color: #4c5161;
            user-select: none;
            cursor: default;
        }
        .popcon-body {
            flex: 1;
            padding: 5px 0 15px 0;
        }
        .popcon-footer {
            padding: 3px 0 15px 0;
            margin-top: -3px;
            text-align: right;
            white-space: nowrap;
        }
        .btn-close{
            position:absolute;
            right:10px;
            top:10px;
            border:0;
        }
        .popcon-footer xy-button {
            font-size: .8em;
            margin-left: .8em;
        }
        .popcon-type{
            display:flex;
            width:30px;
            height:30px;
            font-size:22px;
            margin: 15px -10px 0 15px;
        }
        /*
        :host(:not([type="confirm"])) .popcon-type,
        :host(:not([type="confirm"])) .popcon-footer,
        :host(:not([type])) .popcon-title,
        :host(:not([type])) .btn-close{
            display:none;
        }
        */
        :host([type="confirm"]){
            min-width:250px;
        }
        :host([type="confirm"]) .popcon-body{
            font-size:14px;
        }
        :host(:not([type])) .popcon-content,:host(:not([type])) .popcon-body{
            padding: 0;
        }
        </style>
            ${(p || this.type) === "confirm" ? '<xy-icon id="popcon-type" class="popcon-type" name="question-circle" color="var(--waringColor,#faad14)"></xy-icon>' : ""}
            <div class="popcon-content">
                ${(p || this.type) !== null ? '<div class="popcon-title" id="title">' + this.title + '</div><xy-button class="btn-close" id="btn-close" icon="close"></xy-button>' : ""}
                <div class="popcon-body">
                    <slot></slot>
                </div>
                ${(p || this.type) === "confirm" ? '<div class="popcon-footer"><xy-button id="btn-cancel">' + this.canceltext + '</xy-button><xy-button id="btn-submit" type="primary">' + this.oktext + "</xy-button></div>" : ""}
            </div>
        `;
        }
        get open() {
          return this.getAttribute("open") !== null;
        }
        get stopfocus() {
          return this.getAttribute("stopfocus") !== null;
        }
        get title() {
          return this.getAttribute("title") || "popcon";
        }
        get type() {
          return this.getAttribute("type");
        }
        get oktext() {
          return this.getAttribute("oktext") || "confirm";
        }
        get canceltext() {
          return this.getAttribute("canceltext") || "cancel";
        }
        get loading() {
          return this.getAttribute("loading") !== null;
        }
        set title(p) {
          this.setAttribute("title", p);
        }
        set type(p) {
          p === null || p === !1 ? this.removeAttribute("type") : this.setAttribute("type", p);
        }
        set oktext(p) {
          this.setAttribute("oktext", p);
        }
        set canceltext(p) {
          this.setAttribute("canceltext", p);
        }
        set open(p) {
          p === null || p === !1 ? (this.removeAttribute("open"), this.parentNode.removeAttribute("open")) : (this.setAttribute("open", ""), this.parentNode.setAttribute("open", ""), this.loading && (this.loading = !1));
        }
        set loading(p) {
          p === null || p === !1 ? this.removeAttribute("loading") : this.setAttribute("loading", "");
        }
        connectedCallback() {
          this.remove = !1, this.type && (this.titles = this.shadowRoot.getElementById("title"), this.btnClose = this.shadowRoot.getElementById("btn-close")), this.type == "confirm" && (this.btnCancel = this.shadowRoot.getElementById("btn-cancel"), this.btnSubmit = this.shadowRoot.getElementById("btn-submit")), this.addEventListener("transitionend", (p) => {
            p.propertyName === "transform" && this.open && (this.type == "confirm" && this.btnSubmit.focus(), this.type == "pane" && this.btnClose.focus(), this.dispatchEvent(new CustomEvent("open")));
          }), this.addEventListener("transitionend", (p) => {
            p.propertyName !== "transform" || this.open || (this.remove && this.parentNode.removeChild(this), this.dispatchEvent(new CustomEvent("close")));
          }), this.addEventListener("click", (p) => {
            p.target.closest("[autoclose]") && (this.open = !1, window.xyActiveElement.focus());
          }), this.type && this.btnClose.addEventListener("click", () => {
            this.open = !1, window.xyActiveElement.focus();
          }), this.type == "confirm" && (this.btnCancel.addEventListener("click", async () => {
            this.dispatchEvent(new CustomEvent("cancel")), this.open = !1, window.xyActiveElement.focus();
          }), this.btnSubmit.addEventListener("click", () => {
            this.dispatchEvent(new CustomEvent("submit")), this.loading || (this.open = !1, window.xyActiveElement.focus());
          }));
        }
        attributeChangedCallback(p, k, x) {
          p == "open" && this.shadowRoot && x == null && this.stopfocus, p == "loading" && this.shadowRoot && (this.btnSubmit.loading = x !== null), p == "title" && this.titles && x !== null && (this.titles.innerHTML = x), p == "oktext" && this.btnSubmit && x !== null && (this.btnSubmit.innerHTML = x), p == "canceltext" && this.btnCancel && x !== null && (this.btnCancel.innerHTML = x);
        }
      }
      customElements.get("xy-popcon") || customElements.define("xy-popcon", c);
      class d extends HTMLElement {
        static get observedAttributes() {
          return ["title", "oktext", "canceltext", "loading", "type"];
        }
        constructor() {
          super(), this.attachShadow({ mode: "open" }).innerHTML = `
        <style>
        :host {
            display:inline-block;
            position:relative;
            overflow:visible;
        }
        :host([dir="top"]) ::slotted(xy-popcon){
            bottom:100%;
            left:50%;
            transform:translate(-50%,-10px) scale(0);
            transform-origin: center bottom;
        }
        :host([dir="top"]) ::slotted(xy-popcon[open]),
        :host([dir="top"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="top"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(-50%,-10px) scale(1);
        }
        :host([dir="right"]) ::slotted(xy-popcon){
            left:100%;
            top:50%;
            transform:translate(10px,-50%) scale(0);
            transform-origin: left;
        }
        :host([dir="right"]) ::slotted(xy-popcon[open]),
        :host([dir="right"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="right"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(10px,-50%) scale(1);
        }
        :host([dir="bottom"]) ::slotted(xy-popcon){
            top:100%;
            left:50%;
            transform:translate(-50%,10px) scale(0);
            transform-origin: center top;
        }
        :host([dir="bottom"]) ::slotted(xy-popcon[open]),
        :host([dir="bottom"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="bottom"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(-50%,10px) scale(1);
        }
        :host([dir="left"]) ::slotted(xy-popcon){
            right:100%;
            top:50%;
            transform:translate(-10px,-50%) scale(0);
            transform-origin: right;
        }
        :host([dir="left"]) ::slotted(xy-popcon[open]),
        :host([dir="left"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="left"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(-10px,-50%) scale(1);
        }
        :host([dir="lefttop"]) ::slotted(xy-popcon){
            right:100%;
            top:0;
            transform:translate(-10px) scale(0);
            transform-origin: right top;
        }
        :host([dir="lefttop"]) ::slotted(xy-popcon[open]),
        :host([dir="lefttop"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="lefttop"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(-10px) scale(1);
        }
        :host([dir="leftbottom"]) ::slotted(xy-popcon){
            right:100%;
            bottom:0;
            transform:translate(-10px) scale(0);
            transform-origin: right bottom;
        }
        :host([dir="leftbottom"]) ::slotted(xy-popcon[open]),
        :host([dir="leftbottom"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="leftbottom"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(-10px) scale(1);
        }
        :host([dir="topleft"]) ::slotted(xy-popcon){
            bottom:100%;
            left:0;
            transform:translate(0,-10px) scale(0);
            transform-origin: left bottom;
        }
        :host([dir="topleft"]) ::slotted(xy-popcon[open]),
        :host([dir="topleft"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="topleft"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(0,-10px) scale(1);
        }
        :host([dir="topright"]) ::slotted(xy-popcon){
            bottom:100%;
            right:0;
            transform:translate(0,-10px) scale(0);
            transform-origin: right bottom;
        }
        :host([dir="topright"]) ::slotted(xy-popcon[open]),
        :host([dir="topright"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="topright"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(0,-10px) scale(1);
        }
        :host([dir="righttop"]) ::slotted(xy-popcon){
            left:100%;
            top:0;
            transform:translate(10px) scale(0);
            transform-origin: left top;
        }
        :host([dir="righttop"]) ::slotted(xy-popcon[open]),
        :host([dir="righttop"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="righttop"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(10px) scale(1);
        }
        :host([dir="rightbottom"]) ::slotted(xy-popcon){
            left:100%;
            bottom:0;
            transform:translate(10px) scale(0);
            transform-origin: left bottom;
        }
        :host([dir="rightbottom"]) ::slotted(xy-popcon[open]),
        :host([dir="rightbottom"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="rightbottom"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(10px) scale(1);
        }
        :host([dir="bottomleft"]) ::slotted(xy-popcon),
        :host(:not([dir])) ::slotted(xy-popcon){
            left:0;
            top:100%;
            transform:translate(0,10px) scale(0);
            transform-origin: left top;
        }
        :host(:not([dir])) ::slotted(xy-popcon[open]),
        :host(:not([dir])[trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host(:not([dir])[trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon),
        :host([dir="bottomleft"]) ::slotted(xy-popcon[open]),
        :host([dir="bottomleft"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="bottomleft"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(0,10px) scale(1);
        }
        :host([dir="bottomright"]) ::slotted(xy-popcon){
            right:0;
            top:100%;
            transform:translate(0,10px) scale(0);
            transform-origin: right top;
        }
        :host([dir="bottomright"]) ::slotted(xy-popcon[open]),
        :host([dir="bottomright"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="bottomright"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(0,10px) scale(1);
        }
        :host([trigger="contextmenu"]) ::slotted(xy-popcon){
            right:auto;
            bottom:auto;
            left:var(--x,0);
            top:var(--y,100%);
            transform-origin: left top;
            transform:translate(5px,5px) scale(0);
            transition: .15s;
        }
        :host([trigger="contextmenu"]) ::slotted(xy-popcon[open]){
            transform:translate(5px,5px) scale(1);
        }
        :host ::slotted(xy-popcon[open]),
        :host([trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            opacity:1;
            visibility:visible;
        }
        slot{
            border-radius: inherit;
        }
        </style>
        <slot></slot>
        `;
        }
        get title() {
          return this.getAttribute("title") || "popcon";
        }
        get trigger() {
          return this.getAttribute("trigger");
        }
        get disabled() {
          return this.getAttribute("disabled") !== null;
        }
        get type() {
          return this.getAttribute("type");
        }
        get accomplish() {
          return this.getAttribute("accomplish") !== null;
        }
        get content() {
          return this.getAttribute("content");
        }
        get oktext() {
          return this.getAttribute("oktext");
        }
        get canceltext() {
          return this.getAttribute("canceltext");
        }
        get dir() {
          return this.getAttribute("dir");
        }
        get loading() {
          return this.getAttribute("loading") !== null;
        }
        set dir(p) {
          this.setAttribute("dir", p);
        }
        set title(p) {
          this.setAttribute("title", p);
        }
        set type(p) {
          this.setAttribute("type", p);
        }
        set oktext(p) {
          this.setAttribute("oktext", p);
        }
        set canceltext(p) {
          this.setAttribute("canceltext", p);
        }
        set loading(p) {
          p === null || p === !1 ? this.removeAttribute("loading") : this.setAttribute("loading", "");
        }
        set disabled(p) {
          p === null || p === !1 ? this.removeAttribute("disabled") : this.setAttribute("disabled", "");
        }
        show(p) {
          if (this.popcon = this.querySelector("xy-popcon"), this.disabled)
            (this.popcon || this).dispatchEvent(new CustomEvent("submit"));
          else if (this.popcon || (this.popcon = new c(this.type), this.popcon.type = this.type, this.appendChild(this.popcon), this.popcon.title = this.title || "popover", this.popcon.innerHTML = this.content || "", this.type == "confirm" && (this.popcon.oktext = this.oktext || "confirm", this.popcon.canceltext = this.canceltext || "cancel", this.popcon.onsubmit = () => this.dispatchEvent(new CustomEvent("submit")), this.popcon.oncancel = () => this.dispatchEvent(new CustomEvent("cancel")))), this.trigger === "contextmenu") {
            const { x: k, y: x } = this.getBoundingClientRect();
            this.popcon.style.setProperty("--x", p.clientX - k + "px"), this.popcon.style.setProperty("--y", p.clientY - x + "px"), this.popcon.open = !0;
          } else
            (p.path || p.composedPath && p.composedPath()).includes(this.popcon) || (window.xyActiveElement = document.activeElement, this.accomplish ? this.popcon.open = !0 : this.popcon.open = !this.popcon.open);
          return this.popcon;
        }
        connectedCallback() {
          this.popcon = this.querySelector("xy-popcon"), this.trigger && this.trigger !== "click" || this.addEventListener("click", this.show), this.trigger === "contextmenu" && this.addEventListener("contextmenu", (p) => {
            p.preventDefault(), (p.path || p.composedPath && p.composedPath()).includes(this.popcon) || this.show(p);
          }), document.addEventListener("mousedown", (p) => {
            const k = p.path || p.composedPath && p.composedPath();
            (this.popcon && !k.includes(this.popcon) && !this.popcon.loading && !k.includes(this.children[0]) || this.trigger === "contextmenu" && !k.includes(this.popcon) && p.which == "1") && (this.popcon.open = !1);
          });
        }
        attributeChangedCallback(p, k, x) {
          p == "loading" && this.popcon && (this.popcon.loading = x !== null), p == "title" && this.popcon && x !== null && (this.popcon.title = x), p == "oktext" && this.popcon && x !== null && (this.popcon.oktext = x), p == "canceltext" && this.popcon && x !== null && (this.popcon.canceltext = x);
        }
      }
      customElements.get("xy-popover") || customElements.define("xy-popover", d);
      var h = a(697);
      const g = ["#ff1300", "#EC7878", "#9C27B0", "#673AB7", "#3F51B5", "#0070FF", "#03A9F4", "#00BCD4", "#4CAF50", "#8BC34A", "#CDDC39", "#FFE500", "#FFBF00", "#FF9800", "#795548", "#9E9E9E", "#5A5A5A", "#FFF"];
      class f extends HTMLElement {
        static get observedAttributes() {
          return ["disabled", "dir"];
        }
        constructor(p) {
          super();
          const k = this.attachShadow({ mode: "open" });
          this.colorCollections = p.colorCollections || g, this.onColorPicked = p.onColorPicked, this.defaulColor = (0, h.handleCSSVariables)(p.defaultColor || this.colorCollections[0]), this.pluginType = p.type, this.hasCustomPicker = p.hasCustomPicker, this.customColor = (0, h.getCustomColorCache)(this.pluginType), k.innerHTML = `
        <style>
        :host{
            display:inline-block;
            width:15px;
            font-size:14px;
            border: none;
        }
        :host([block]){
            display:block;
        }
        :host([disabled]){
            pointer-events:none;
        }
        
        :host(:focus-within) xy-popover,:host(:hover) xy-popover{ 
            z-index: 2;
        }
        input[type="color"]{
            -webkit-appearance: none;
            outline: none;
            border: none;
        }
        xy-popover{
            width: 12px;
            height:35px;
            padding-right: 1px;
        }
        xy-popover:hover {
            border-radius: 0 5px 5px 0;
            background: rgba(203, 203, 203, 0.49);
        }
        .color-btn {
            border: 1px solid #cab9b9;
            margin: 18px 3px 2px 3px;
            width: 7px;
            height: 7px;
            opacity: 0.9;
            padding: 1px 0 1px 0;
            color: var(--themeColor, #42b983);
            background: var(--themeColor, #42b983);
            font-weight: bolder;
            border-radius: 2px;
        }
        .color-btn:hover {
            opacity: 1;
            z-index: auto;
        }
        xy-popover{
            display:block;
        }
        xy-popcon{
            position: fixed;
            min-width:100%;
        }
        #custom-picker {
            position: relative;
            top: -1px;
            background-color: rgb(250, 250, 250);
            border-color: rgb(255 118 21) rgb(245 80 80 / 74%) #89c1c9 #95d5b6;
            border-width: 3px;
            border-radius: 8px;
            height: 18px;
        }
        .pop-footer{
            display:flex;
            justify-content:flex-end;
            padding:0 .8em .8em;
        }
        .pop-footer xy-button{
            font-size: .8em;
            margin-left: .8em;
        }
        .color-btn::before{
            content:'';
            position:absolute;
            left:5px;
            top:5px;
            right:5px;
            bottom:5px;
            z-index:-1;
            background: linear-gradient(45deg, #ddd 25%,transparent 0,transparent 75%,#ddd 0 ), linear-gradient(45deg, #ddd 25%, transparent 0, transparent 75%, #ddd 0);
            background-position: 0 0,5px 5px;
            background-size: 10px 10px;
        }
        .color-sign {
           max-width: 220px;
           padding: 10px;
           display:grid;
           cursor: default;
           grid-template-columns: repeat(auto-fit, minmax(15px, 1fr));
           grid-gap: 10px;     
        }
        .color-sign>button {
            position: relative;
            width: 16px;
            height: 16px;
            border-radius: 6px;
            border: 1px solid #b8b9b49e;
            outline: 0;
            opacity: 0.9;
        }
        .color-sign>button:hover {
            cursor: pointer;
            opacity: 1;
        }
        .color-section {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .color-fire-btn {
            font-size: 17px;
            font-weight: bold;
            height: 28px;
            padding-top: 8px;
            padding-right: 1px;
            margin-left: 3px;
            padding-left: 3px;
            border-radius: 5px 0 0 5px;
        }
        .color-fire-btn:hover {
            font-size: 17px;
            font-weight: bold;
            background: rgba(203, 203, 203, 0.49);
            border-radius: 5px 0 0 5px;
        }
        </style>
        <section class="color-section">
            <xy-popover id="popover" ${this.dir ? "dir='" + this.dir + "'" : ""}>
                <xy-button class="color-btn" id="color-btn" ${this.disabled ? "disabled" : ""}>_</xy-button>
                <xy-popcon id="popcon">
                    <div class="color-sign" id="colors">
                        ${this.hasCustomPicker ? '<button id="custom-picker" class="rainbow-mask"/>' : ""}
                        ${this.colorCollections.map((x) => '<button class="color-cube" style="background-color:' + x + '" data-color=' + x + "></button>").join("")}
                    </div>
                </xy-popcon>
            </xy-popover>
        </section>`;
        }
        focus() {
          this.colorBtn.focus();
        }
        connectedCallback() {
          this.popoverEle = this.shadowRoot.getElementById("popover"), this.popcon = this.shadowRoot.getElementById("popcon"), this.colorBtn = this.shadowRoot.getElementById("color-btn"), this.colors = this.shadowRoot.getElementById("colors"), this.colors.addEventListener("click", (p) => {
            const k = p.target.closest("button");
            k && k.id !== "custom-picker" && (this.nativeclick = !0, this.value = (0, h.handleCSSVariables)(k.dataset.color), this.onColorPicked(this.value));
          }), this.popoverEle.addEventListener("click", () => this.closeConverter()), this.hasCustomPicker && this.setupCustomPicker(), this.value = this.defaultvalue;
        }
        closeConverter() {
          if (document.getElementsByClassName(h.CONVERTER_PANEL)[0]) {
            const p = document.getElementsByClassName(h.CONVERTER_BTN)[0];
            p == null || p.click();
          }
        }
        disconnectedCallback() {
          this.pickerInput && document.body.removeChild(this.pickerInput);
        }
        setupCustomPicker() {
          let p = !1;
          this.customPicker = this.shadowRoot.getElementById("custom-picker");
          const k = this.customPicker;
          k.style.backgroundColor = this.customColor, this.customPicker.addEventListener("click", (x) => {
            if (p)
              return void (p = !1);
            this.pickerInput && document.body.removeChild(this.pickerInput), this.pickerInput = document.createElement("input");
            const P = this.pickerInput, z = this.popcon.getBoundingClientRect();
            P.setAttribute("type", "color"), P.value = this.customColor, P.style.position = "fixed", P.style.left = `${z.x + 3}px`, P.style.top = `${z.y + 10}px`, P.style.pointerEvents = "none", P.style.zIndex = "999", P.style.opacity = "0", P.addEventListener("input", (0, h.throttle)((L) => {
              this.nativeclick = !0, this.value = (0, h.handleCSSVariables)(L.target.value), this.onColorPicked(this.value), (0, h.setCustomColorCache)(this.value, this.pluginType), k.style.backgroundColor = this.value, p = !0, k.click();
            }, 30)), document.body.appendChild(P), setTimeout(() => {
              P.focus(), P.click();
            }, 0);
          });
        }
        get defaultvalue() {
          return this.defaulColor;
        }
        get value() {
          return this.$value;
        }
        get type() {
          return this.getAttribute("type");
        }
        get disabled() {
          return this.getAttribute("disabled") !== null;
        }
        get dir() {
          return this.getAttribute("dir");
        }
        set dir(p) {
          this.setAttribute("dir", p);
        }
        set disabled(p) {
          p === null || p === !1 ? this.removeAttribute("disabled") : this.setAttribute("disabled", "");
        }
        set defaultvalue(p) {
          this.setAttribute("defaultvalue", p);
        }
        set value(p) {
          p && (this.$value = p, this.colorBtn.style.setProperty("--themeColor", this.nativeclick ? (0, h.setDefaultColorCache)(p, this.pluginType) : (0, h.getDefaultColorCache)(p, this.pluginType)), this.nativeclick ? (this.nativeclick = !1, this.dispatchEvent(new CustomEvent("change", { detail: { value: this.value } }))) : this.colorPane ? this.colorPane.value = this.value : this.defaultvalue = this.value);
        }
        attributeChangedCallback(p, k, x) {
          p == "disabled" && this.colorBtn && (x != null ? this.colorBtn.setAttribute("disabled", "disabled") : this.colorBtn.removeAttribute("disabled")), p == "dir" && this.popoverEle && x != null && (this.popoverEle.dir = x);
        }
      }
      customElements.get("xy-color-picker") || customElements.define("xy-color-picker", f);
    }, 697: (s, r, a) => {
      a.r(r), a.d(r, { CONVERTER_BTN: () => v, CONVERTER_PANEL: () => p, getCustomColorCache: () => f, getDefaultColorCache: () => h, handleCSSVariables: () => l, setCustomColorCache: () => g, setDefaultColorCache: () => d, throttle: () => c });
      const u = "editor-js-text-color-cache";
      function l(k) {
        if (function(x) {
          return (typeof (P = x) == "string" || P instanceof String) && x.includes("--");
          var P;
        }(k)) {
          const x = function(P) {
            const z = /\((.*?)\)/.exec(P);
            if (z)
              return z[1];
          }(k);
          return function(P) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(P);
          }(x);
        }
        return k;
      }
      function c(k, x) {
        let P;
        return (...z) => {
          P || (P = setTimeout(() => {
            k(...z), P = null;
          }, x));
        };
      }
      function d(k, x) {
        return sessionStorage.setItem(`${u}-${x}`, JSON.stringify(k)), k;
      }
      function h(k, x) {
        const P = sessionStorage.getItem(`${u}-${x}`);
        return P ? JSON.parse(P) : k;
      }
      function g(k, x) {
        sessionStorage.setItem(`${u}-${x}-custom`, JSON.stringify(k));
      }
      function f(k) {
        const x = sessionStorage.getItem(`${u}-${k}-custom`);
        return x ? JSON.parse(x) : null;
      }
      const v = "ce-inline-toolbar__dropdown", p = "ce-conversion-toolbar--showed";
    } }, o = {};
    function i(s) {
      var r = o[s];
      if (r !== void 0)
        return r.exports;
      var a = o[s] = { id: s, exports: {} };
      return t[s](a, a.exports, i), a.exports;
    }
    return i.d = (s, r) => {
      for (var a in r)
        i.o(r, a) && !i.o(s, a) && Object.defineProperty(s, a, { enumerable: !0, get: r[a] });
    }, i.o = (s, r) => Object.prototype.hasOwnProperty.call(s, r), i.r = (s) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
    }, i.nc = void 0, i(138);
  })());
})(ka);
var rh = ka.exports;
const Vs = /* @__PURE__ */ Ln(rh);
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".cdx-list{margin:0;padding-left:40px;outline:none}.cdx-list__item{padding:5.5px 0 5.5px 3px;line-height:1.6em}.cdx-list--unordered{list-style:disc}.cdx-list--ordered{list-style:decimal}.cdx-list-settings{display:flex}.cdx-list-settings .cdx-settings-button{width:50%}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const zs = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>', ah = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>';
class uh {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allow to use native Enter behaviour
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: zs,
      title: "List"
    };
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - tool constructor options
   * @param {ListData} params.data - previously saved data
   * @param {object} params.config - user config for Tool
   * @param {object} params.api - Editor.js API
   * @param {boolean} params.readOnly - read-only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    this._elements = {
      wrapper: null
    }, this.api = o, this.readOnly = i, this.settings = [
      {
        name: "unordered",
        label: this.api.i18n.t("Unordered"),
        icon: zs,
        default: t.defaultStyle === "unordered" || !1
      },
      {
        name: "ordered",
        label: this.api.i18n.t("Ordered"),
        icon: ah,
        default: t.defaultStyle === "ordered" || !0
      }
    ], this._data = {
      style: this.settings.find((s) => s.default === !0).name,
      items: []
    }, this.data = e;
  }
  /**
   * Returns list tag with items
   *
   * @returns {Element}
   * @public
   */
  render() {
    return this._elements.wrapper = this.makeMainTag(this._data.style), this._data.items.length ? this._data.items.forEach((e) => {
      this._elements.wrapper.appendChild(this._make("li", this.CSS.item, {
        innerHTML: e
      }));
    }) : this._elements.wrapper.appendChild(this._make("li", this.CSS.item)), this.readOnly || this._elements.wrapper.addEventListener("keydown", (e) => {
      const [t, o] = [13, 8];
      switch (e.keyCode) {
        case t:
          this.getOutofList(e);
          break;
        case o:
          this.backspace(e);
          break;
      }
    }, !1), this._elements.wrapper;
  }
  /**
   * @returns {ListData}
   * @public
   */
  save() {
    return this.data;
  }
  /**
   * Allow List Tool to be converted to/from other block
   *
   * @returns {{export: Function, import: Function}}
   */
  static get conversionConfig() {
    return {
      /**
       * To create exported string from list, concatenate items by dot-symbol.
       *
       * @param {ListData} data - list data to create a string from thats
       * @returns {string}
       */
      export: (e) => e.items.join(". "),
      /**
       * To create a list from other block's string, just put it at the first item
       *
       * @param {string} string - string to create list tool data from that
       * @returns {ListData}
       */
      import: (e) => ({
        items: [e],
        style: "unordered"
      })
    };
  }
  /**
   * Sanitizer rules
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      style: {},
      items: {
        br: !0
      }
    };
  }
  /**
   * Settings
   *
   * @public
   * @returns {Array}
   */
  renderSettings() {
    return this.settings.map((e) => ({
      ...e,
      isActive: this._data.style === e.name,
      closeOnActivate: !0,
      onActivate: () => this.toggleTune(e.name)
    }));
  }
  /**
   * On paste callback that is fired from Editor
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const t = e.detail.data;
    this.data = this.pasteHandler(t);
  }
  /**
   * List Tool on paste configuration
   *
   * @public
   */
  static get pasteConfig() {
    return {
      tags: ["OL", "UL", "LI"]
    };
  }
  /**
   * Creates main <ul> or <ol> tag depended on style
   *
   * @param {string} style - 'ordered' or 'unordered'
   * @returns {HTMLOListElement|HTMLUListElement}
   */
  makeMainTag(e) {
    const t = e === "ordered" ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered, o = e === "ordered" ? "ol" : "ul";
    return this._make(o, [this.CSS.baseBlock, this.CSS.wrapper, t], {
      contentEditable: !this.readOnly
    });
  }
  /**
   * Toggles List style
   *
   * @param {string} style - 'ordered'|'unordered'
   */
  toggleTune(e) {
    const t = this.makeMainTag(e);
    for (; this._elements.wrapper.hasChildNodes(); )
      t.appendChild(this._elements.wrapper.firstChild);
    this._elements.wrapper.replaceWith(t), this._elements.wrapper = t, this._data.style = e;
  }
  /**
   * Styles
   *
   * @private
   */
  get CSS() {
    return {
      baseBlock: this.api.styles.block,
      wrapper: "cdx-list",
      wrapperOrdered: "cdx-list--ordered",
      wrapperUnordered: "cdx-list--unordered",
      item: "cdx-list__item"
    };
  }
  /**
   * List data setter
   *
   * @param {ListData} listData
   */
  set data(e) {
    e || (e = {}), this._data.style = e.style || this.settings.find((o) => o.default === !0).name, this._data.items = e.items || [];
    const t = this._elements.wrapper;
    t && t.parentNode.replaceChild(this.render(), t);
  }
  /**
   * Return List data
   *
   * @returns {ListData}
   */
  get data() {
    this._data.items = [];
    const e = this._elements.wrapper.querySelectorAll(`.${this.CSS.item}`);
    for (let t = 0; t < e.length; t++)
      e[t].innerHTML.replace("<br>", " ").trim() && this._data.items.push(e[t].innerHTML);
    return this._data;
  }
  /**
   * Helper for making Elements with attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {Array|string} classNames  - list or name of CSS classname(s)
   * @param  {object} attributes        - any attributes
   * @returns {Element}
   */
  _make(e, t = null, o = {}) {
    const i = document.createElement(e);
    Array.isArray(t) ? i.classList.add(...t) : t && i.classList.add(t);
    for (const s in o)
      i[s] = o[s];
    return i;
  }
  /**
   * Returns current List item by the caret position
   *
   * @returns {Element}
   */
  get currentItem() {
    let e = window.getSelection().anchorNode;
    return e.nodeType !== Node.ELEMENT_NODE && (e = e.parentNode), e.closest(`.${this.CSS.item}`);
  }
  /**
   * Get out from List Tool
   * by Enter on the empty last item
   *
   * @param {KeyboardEvent} event
   */
  getOutofList(e) {
    const t = this._elements.wrapper.querySelectorAll("." + this.CSS.item);
    if (t.length < 2)
      return;
    const o = t[t.length - 1], i = this.currentItem;
    i === o && !o.textContent.trim().length && (i.parentElement.removeChild(i), this.api.blocks.insert(), this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex()), e.preventDefault(), e.stopPropagation());
  }
  /**
   * Handle backspace
   *
   * @param {KeyboardEvent} event
   */
  backspace(e) {
    const t = this._elements.wrapper.querySelectorAll("." + this.CSS.item), o = t[0];
    o && t.length < 2 && !o.innerHTML.replace("<br>", " ").trim() && e.preventDefault();
  }
  /**
   * Select LI content by CMD+A
   *
   * @param {KeyboardEvent} event
   */
  selectItem(e) {
    e.preventDefault();
    const t = window.getSelection(), o = t.anchorNode.parentNode, i = o.closest("." + this.CSS.item), s = new Range();
    s.selectNodeContents(i), t.removeAllRanges(), t.addRange(s);
  }
  /**
   * Handle UL, OL and LI tags paste and returns List data
   *
   * @param {HTMLUListElement|HTMLOListElement|HTMLLIElement} element
   * @returns {ListData}
   */
  pasteHandler(e) {
    const { tagName: t } = e;
    let o;
    switch (t) {
      case "OL":
        o = "ordered";
        break;
      case "UL":
      case "LI":
        o = "unordered";
    }
    const i = {
      style: o,
      items: []
    };
    if (t === "LI")
      i.items = [e.innerHTML];
    else {
      const s = Array.from(e.querySelectorAll("LI"));
      i.items = s.map((r) => r.innerHTML).filter((r) => !!r.trim());
    }
    return i;
  }
}
function Te(n, e, t = {}) {
  const o = document.createElement(n);
  Array.isArray(e) ? o.classList.add(...e) : e && o.classList.add(e);
  for (const i in t)
    Object.prototype.hasOwnProperty.call(t, i) && (o[i] = t[i]);
  return o;
}
function Gs(n) {
  const e = n.getBoundingClientRect();
  return {
    y1: Math.floor(e.top + window.pageYOffset),
    x1: Math.floor(e.left + window.pageXOffset),
    x2: Math.floor(e.right + window.pageXOffset),
    y2: Math.floor(e.bottom + window.pageYOffset)
  };
}
function Ws(n, e) {
  const t = Gs(n), o = Gs(e);
  return {
    fromTopBorder: o.y1 - t.y1,
    fromLeftBorder: o.x1 - t.x1,
    fromRightBorder: t.x2 - o.x2,
    fromBottomBorder: t.y2 - o.y2
  };
}
function lh(n, e) {
  const t = n.getBoundingClientRect(), { width: o, height: i, x: s, y: r } = t, { clientX: a, clientY: u } = e;
  return {
    width: o,
    height: i,
    x: a - s,
    y: u - r
  };
}
function Dn(n, e) {
  return e.parentNode.insertBefore(n, e);
}
function No(n, e = !0) {
  const t = document.createRange(), o = window.getSelection();
  t.selectNodeContents(n), t.collapse(e), o.removeAllRanges(), o.addRange(t);
}
class Ae {
  /**
   * @param {object} options - constructor options
   * @param {PopoverItem[]} options.items - constructor options
   */
  constructor({ items: e }) {
    this.items = e, this.wrapper = void 0, this.itemEls = [];
  }
  /**
   * Set of CSS classnames used in popover
   *
   * @returns {object}
   */
  static get CSS() {
    return {
      popover: "tc-popover",
      popoverOpened: "tc-popover--opened",
      item: "tc-popover__item",
      itemHidden: "tc-popover__item--hidden",
      itemConfirmState: "tc-popover__item--confirm",
      itemIcon: "tc-popover__item-icon",
      itemLabel: "tc-popover__item-label"
    };
  }
  /**
   * Returns the popover element
   *
   * @returns {Element}
   */
  render() {
    return this.wrapper = Te("div", Ae.CSS.popover), this.items.forEach((e, t) => {
      const o = Te("div", Ae.CSS.item), i = Te("div", Ae.CSS.itemIcon, {
        innerHTML: e.icon
      }), s = Te("div", Ae.CSS.itemLabel, {
        textContent: e.label
      });
      o.dataset.index = t, o.appendChild(i), o.appendChild(s), this.wrapper.appendChild(o), this.itemEls.push(o);
    }), this.wrapper.addEventListener("click", (e) => {
      this.popoverClicked(e);
    }), this.wrapper;
  }
  /**
   * Popover wrapper click listener
   * Used to delegate clicks in items
   *
   * @returns {void}
   */
  popoverClicked(e) {
    const t = e.target.closest(`.${Ae.CSS.item}`);
    if (!t)
      return;
    const o = t.dataset.index, i = this.items[o];
    if (i.confirmationRequired && !this.hasConfirmationState(t)) {
      this.setConfirmationState(t);
      return;
    }
    i.onClick();
  }
  /**
   * Enable the confirmation state on passed item
   *
   * @returns {void}
   */
  setConfirmationState(e) {
    e.classList.add(Ae.CSS.itemConfirmState);
  }
  /**
   * Disable the confirmation state on passed item
   *
   * @returns {void}
   */
  clearConfirmationState(e) {
    e.classList.remove(Ae.CSS.itemConfirmState);
  }
  /**
   * Check if passed item has the confirmation state
   *
   * @returns {boolean}
   */
  hasConfirmationState(e) {
    return e.classList.contains(Ae.CSS.itemConfirmState);
  }
  /**
   * Return an opening state
   *
   * @returns {boolean}
   */
  get opened() {
    return this.wrapper.classList.contains(Ae.CSS.popoverOpened);
  }
  /**
   * Opens the popover
   *
   * @returns {void}
   */
  open() {
    this.items.forEach((e, t) => {
      typeof e.hideIf == "function" && this.itemEls[t].classList.toggle(Ae.CSS.itemHidden, e.hideIf());
    }), this.wrapper.classList.add(Ae.CSS.popoverOpened);
  }
  /**
   * Closes the popover
   *
   * @returns {void}
   */
  close() {
    this.wrapper.classList.remove(Ae.CSS.popoverOpened), this.itemEls.forEach((e) => {
      this.clearConfirmationState(e);
    });
  }
}
const Ks = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', ch = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 9.16666L18.2167 12.5M18.2167 12.5L14.8833 15.8333M18.2167 12.5H10.05C9.16594 12.5 8.31809 12.1488 7.69297 11.5237C7.06785 10.8986 6.71666 10.0507 6.71666 9.16666"/></svg>', dh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.9167 14.9167L11.5833 18.25M11.5833 18.25L8.25 14.9167M11.5833 18.25L11.5833 10.0833C11.5833 9.19928 11.9345 8.35143 12.5596 7.72631C13.1848 7.10119 14.0326 6.75 14.9167 6.75"/></svg>', hh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.13333 14.9167L12.4667 18.25M12.4667 18.25L15.8 14.9167M12.4667 18.25L12.4667 10.0833C12.4667 9.19928 12.1155 8.35143 11.4904 7.72631C10.8652 7.10119 10.0174 6.75 9.13333 6.75"/></svg>', ph = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 15.8333L18.2167 12.5M18.2167 12.5L14.8833 9.16667M18.2167 12.5L10.05 12.5C9.16595 12.5 8.31811 12.8512 7.69299 13.4763C7.06787 14.1014 6.71667 14.9493 6.71667 15.8333"/></svg>', fh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.41 9.66H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 9.66H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.31 14.36H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 14.36H14.59"/></svg>', Zs = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>', gh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', bh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M14 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><path stroke="currentColor" stroke-width="2" d="M5 14H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', mh = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
class gt {
  /**
   * Creates toolbox buttons and toolbox menus
   *
   * @param {object} api - Editor.js api
   * @param {PopoverItem[]} items - Editor.js api
   * @param {function} onOpen - callback fired when the Popover is opening
   * @param {function} onClose - callback fired when the Popover is closing
   * @param {string} [cssModifier] - the modifier for the Toolbox. Allows to add some specific styles.
   */
  constructor({ api: e, items: t, onOpen: o, onClose: i, cssModifier: s = "" }) {
    this.api = e, this.items = t, this.onOpen = o, this.onClose = i, this.cssModifier = s, this.popover = null, this.wrapper = this.createToolbox();
  }
  /**
   * Style classes
   */
  static get CSS() {
    return {
      toolbox: "tc-toolbox",
      toolboxShowed: "tc-toolbox--showed",
      toggler: "tc-toolbox__toggler"
    };
  }
  /**
   * Returns rendered Toolbox element
   */
  get element() {
    return this.wrapper;
  }
  /**
   * Creating a toolbox to open menu for a manipulating columns
   *
   * @returns {Element}
   */
  createToolbox() {
    const e = Te("div", [
      gt.CSS.toolbox,
      this.cssModifier ? `${gt.CSS.toolbox}--${this.cssModifier}` : ""
    ]);
    e.dataset.mutationFree = "true";
    const t = this.createPopover(), o = this.createToggler();
    return e.appendChild(o), e.appendChild(t), e;
  }
  /**
   * Creates the Toggler
   *
   * @returns {Element}
   */
  createToggler() {
    const e = Te("div", gt.CSS.toggler, {
      innerHTML: fh
    });
    return e.addEventListener("click", () => {
      this.togglerClicked();
    }), e;
  }
  /**
   * Creates the Popover instance and render it
   *
   * @returns {Element}
   */
  createPopover() {
    return this.popover = new Ae({
      items: this.items
    }), this.popover.render();
  }
  /**
   * Toggler click handler. Opens/Closes the popover
   *
   * @returns {void}
   */
  togglerClicked() {
    this.popover.opened ? (this.popover.close(), this.onClose()) : (this.popover.open(), this.onOpen());
  }
  /**
   * Shows the Toolbox
   *
   * @param {function} computePositionMethod - method that returns the position coordinate
   * @returns {void}
   */
  show(e) {
    const t = e();
    Object.entries(t).forEach(([o, i]) => {
      this.wrapper.style[o] = i;
    }), this.wrapper.classList.add(gt.CSS.toolboxShowed);
  }
  /**
   * Hides the Toolbox
   *
   * @returns {void}
   */
  hide() {
    this.popover.close(), this.wrapper.classList.remove(gt.CSS.toolboxShowed);
  }
}
function xh(n, e) {
  let t = 0;
  return function(...o) {
    const i = (/* @__PURE__ */ new Date()).getTime();
    if (!(i - t < n))
      return t = i, e(...o);
  };
}
function at() {
}
function Sa(n) {
  return n();
}
function Ys() {
  return /* @__PURE__ */ Object.create(null);
}
function sn(n) {
  n.forEach(Sa);
}
function Dt(n) {
  return typeof n == "function";
}
function ji(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function vh(n) {
  return Object.keys(n).length === 0;
}
function de(n, e) {
  n.appendChild(e);
}
function tt(n, e, t) {
  n.insertBefore(e, t || null);
}
function Ke(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Ie(n) {
  return document.createElement(n);
}
function yh(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function Lt(n) {
  return document.createTextNode(n);
}
function It() {
  return Lt(" ");
}
function Ca() {
  return Lt("");
}
function tn(n, e, t, o) {
  return n.addEventListener(e, t, o), () => n.removeEventListener(e, t, o);
}
function ve(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function wh(n) {
  return Array.from(n.childNodes);
}
function Ea(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function kh(n, e) {
  e = "" + e, n.wholeText !== e && (n.data = /** @type {string} */
  e);
}
function Ze(n, e, t, o) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, o ? "important" : "");
}
function Xs(n, e, t) {
  n.classList.toggle(e, !!t);
}
class Ta {
  constructor(e = !1) {
    /**
     * @private
     * @default false
     */
    ft(this, "is_svg", !1);
    /** parent for creating node */
    ft(this, "e");
    /** html tag nodes */
    ft(this, "n");
    /** target */
    ft(this, "t");
    /** anchor */
    ft(this, "a");
    this.is_svg = e, this.e = this.n = null;
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  c(e) {
    this.h(e);
  }
  /**
   * @param {string} html
   * @param {HTMLElement | SVGElement} target
   * @param {HTMLElement | SVGElement} anchor
   * @returns {void}
   */
  m(e, t, o = null) {
    this.e || (this.is_svg ? this.e = yh(
      /** @type {keyof SVGElementTagNameMap} */
      t.nodeName
    ) : this.e = Ie(
      /** @type {keyof HTMLElementTagNameMap} */
      t.nodeType === 11 ? "TEMPLATE" : t.nodeName
    ), this.t = t.tagName !== "TEMPLATE" ? t : (
      /** @type {HTMLTemplateElement} */
      t.content
    ), this.c(e)), this.i(o);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(
      this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes
    );
  }
  /**
   * @returns {void} */
  i(e) {
    for (let t = 0; t < this.n.length; t += 1)
      tt(this.t, this.n[t], e);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  /**
   * @returns {void} */
  d() {
    this.n.forEach(Ke);
  }
}
let Cn;
function vn(n) {
  Cn = n;
}
function Sh() {
  if (!Cn)
    throw new Error("Function called outside component initialization");
  return Cn;
}
function Ch(n) {
  Sh().$$.on_mount.push(n);
}
const Zt = [], ui = [];
let Jt = [];
const Js = [], Eh = /* @__PURE__ */ Promise.resolve();
let li = !1;
function Th() {
  li || (li = !0, Eh.then(Ba));
}
function ci(n) {
  Jt.push(n);
}
const Mo = /* @__PURE__ */ new Set();
let jt = 0;
function Ba() {
  if (jt !== 0)
    return;
  const n = Cn;
  do {
    try {
      for (; jt < Zt.length; ) {
        const e = Zt[jt];
        jt++, vn(e), Bh(e.$$);
      }
    } catch (e) {
      throw Zt.length = 0, jt = 0, e;
    }
    for (vn(null), Zt.length = 0, jt = 0; ui.length; )
      ui.pop()();
    for (let e = 0; e < Jt.length; e += 1) {
      const t = Jt[e];
      Mo.has(t) || (Mo.add(t), t());
    }
    Jt.length = 0;
  } while (Zt.length);
  for (; Js.length; )
    Js.pop()();
  li = !1, Mo.clear(), vn(n);
}
function Bh(n) {
  if (n.fragment !== null) {
    n.update(), sn(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(ci);
  }
}
function Ah(n) {
  const e = [], t = [];
  Jt.forEach((o) => n.indexOf(o) === -1 ? e.push(o) : t.push(o)), t.forEach((o) => o()), Jt = e;
}
const Lh = /* @__PURE__ */ new Set();
function Nh(n, e) {
  n && n.i && (Lh.delete(n), n.i(e));
}
function Mh(n, e, t) {
  const { fragment: o, after_update: i } = n.$$;
  o && o.m(e, t), ci(() => {
    const s = n.$$.on_mount.map(Sa).filter(Dt);
    n.$$.on_destroy ? n.$$.on_destroy.push(...s) : sn(s), n.$$.on_mount = [];
  }), i.forEach(ci);
}
function Ih(n, e) {
  const t = n.$$;
  t.fragment !== null && (Ah(t.after_update), sn(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Rh(n, e) {
  n.$$.dirty[0] === -1 && (Zt.push(n), Th(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Vi(n, e, t, o, i, s, r = null, a = [-1]) {
  const u = Cn;
  vn(n);
  const l = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: at,
    not_equal: i,
    bound: Ys(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Ys(),
    dirty: a,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  r && r(l.root);
  let c = !1;
  if (l.ctx = t ? t(n, e.props || {}, (d, h, ...g) => {
    const f = g.length ? g[0] : h;
    return l.ctx && i(l.ctx[d], l.ctx[d] = f) && (!l.skip_bound && l.bound[d] && l.bound[d](f), c && Rh(n, d)), h;
  }) : [], l.update(), c = !0, sn(l.before_update), l.fragment = o ? o(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = wh(e.target);
      l.fragment && l.fragment.l(d), d.forEach(Ke);
    } else
      l.fragment && l.fragment.c();
    e.intro && Nh(n.$$.fragment), Mh(n, e.target, e.anchor), Ba();
  }
  vn(u);
}
class zi {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ft(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ft(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Ih(this, 1), this.$destroy = at;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Dt(t))
      return at;
    const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return o.push(t), () => {
      const i = o.indexOf(t);
      i !== -1 && o.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !vh(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const _h = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(_h);
const Aa = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
let Oh = class {
  constructor() {
    this.preventDestroyFunctToFireFlag = !1, this.classNameOfEditorJs = "codex-editor";
  }
  setApi(e) {
    this.api = e;
  }
  setPreventDestroyFunctToFire(e) {
    this.preventDestroyFunctToFireFlag = e;
  }
  /**
   * Returns the element that contains the editor
   * @returns {HTMLElement}
   */
  getEditorRoot() {
    return document.querySelector("." + this.classNameOfEditorJs);
  }
};
const se = new Oh();
function Qs(n) {
  let e, t, o;
  return {
    c() {
      e = Ie("span"), ve(e, "class", "close-icon svelte-klmnv4"), ve(e, "role", "button"), ve(e, "tabindex", "0");
    },
    m(i, s) {
      tt(i, e, s), e.innerHTML = Aa, t || (o = [
        tn(e, "click", function() {
          Dt(
            /*onRemove*/
            n[0]
          ) && n[0].apply(this, arguments);
        }),
        tn(e, "keydown", function() {
          Dt(
            /*onRemove*/
            n[0]
          ) && n[0].apply(this, arguments);
        })
      ], t = !0);
    },
    p(i, s) {
      n = i;
    },
    d(i) {
      i && Ke(e), t = !1, sn(o);
    }
  };
}
function Dh(n) {
  let e, t, o, i, s, r, a, u = (
    /*onRemove*/
    n[0] && Qs(n)
  );
  return {
    c() {
      e = Ie("span"), t = Ie("span"), t.textContent = `${Ph}`, o = It(), i = Ie("span"), s = It(), u && u.c(), r = It(), a = Ie("span"), a.textContent = `${Hh}`, ve(i, "contenteditable", "true"), ve(i, "class", "variable-edit-container svelte-klmnv4"), ve(e, "contenteditable", "false"), ve(e, "class", "variable-container svelte-klmnv4");
    },
    m(l, c) {
      tt(l, e, c), de(e, t), de(e, o), de(e, i), n[3](i), de(e, s), u && u.m(e, null), de(e, r), de(e, a);
    },
    p(l, [c]) {
      /*onRemove*/
      l[0] ? u ? u.p(l, c) : (u = Qs(l), u.c(), u.m(e, r)) : u && (u.d(1), u = null);
    },
    i: at,
    o: at,
    d(l) {
      l && Ke(e), n[3](null), u && u.d();
    }
  };
}
const Ph = "{{", Hh = "}}";
function Fh(n, e, t) {
  let { text: o = "" } = e, { onRemove: i = null } = e, s;
  Ch(() => {
    s.appendChild(o);
  });
  function r(a) {
    ui[a ? "unshift" : "push"](() => {
      s = a, t(1, s);
    });
  }
  return n.$$set = (a) => {
    "text" in a && t(2, o = a.text), "onRemove" in a && t(0, i = a.onRemove);
  }, [i, s, o, r];
}
class qh extends zi {
  constructor(e) {
    super(), Vi(this, e, Fh, Dh, ji, { text: 2, onRemove: 0 });
  }
}
const Gi = "templator-variable", La = "variable-edit-container", Na = (n) => {
  const e = document.createElement("span");
  return e.classList.add(Gi), new qh({
    target: e,
    props: {
      text: n,
      onRemove: () => {
        e.remove();
      }
    }
  }), e;
}, bo = (n) => ({
  if: 'variable == "result"',
  else: 'variable == "result"',
  "else if": 'variable == "result"',
  for: "item in items"
})[n], di = (n) => ({
  if: "endif",
  for: "endfor"
})[n], ke = (n) => ({
  if: "IfCondition",
  elseif: "IfElseCondition",
  else: "ElseCondition",
  endif: "IfEndCondition",
  for: "ForCondition",
  endfor: "ForEndCondition"
})[n], Ma = "condition-id-", $h = () => Ma + (Math.random() + 1).toString(36).substring(7), Wi = "condition-start", Ki = "condition-end", Zi = "condition-input-edit", Ia = (n, e, t = "if") => {
  const o = e || bo(t), i = (a) => {
    const u = document.createElement("span");
    return u.classList.add(a, n), u.setAttribute("contenteditable", "false"), u;
  }, s = i(Wi);
  new Pt({
    target: s,
    props: {
      statement: t.toUpperCase(),
      inline: !0,
      condition: o,
      onRemove: () => {
        s.parentElement.querySelectorAll(`.${n}`).forEach((u) => {
          u.remove();
        });
      }
    }
  });
  const r = i(Ki);
  return new Pt({
    target: r,
    props: {
      statement: ("end" + t).toUpperCase(),
      inline: !0,
      isEndBlock: !0
    }
  }), {
    startConditionContainer: s,
    endConditionContainer: r
  };
}, Uh = () => {
  const n = se.api, e = n.blocks.getBlocksCount(), t = (i) => i.name === "header" || i.name === "paragraph", o = (i) => i.name === "header" || i.name === "paragraph" || i.name === "table";
  for (let i = 0; i < e; i++) {
    const s = n.blocks.getBlockByIndex(i);
    t(s) && s.holder.querySelectorAll("." + Wi).forEach((r) => {
      const a = r.firstElementChild.getAttribute("data-statement"), u = r.querySelector("." + Zi).textContent, l = Array.from(r.classList).find((g) => g.includes(Ma)), { startConditionContainer: c, endConditionContainer: d } = Ia(l, u, a.toLowerCase()), h = s.holder.querySelector(`.${Ki}.${l}`);
      r.replaceWith(c), h.replaceWith(d), Ra(c, l);
    }), o(s) && s.holder.querySelectorAll("." + Gi).forEach((r) => {
      const a = r.querySelector("." + La).firstChild, u = Na(a);
      r.replaceWith(u);
    });
  }
}, Ra = (n, e) => {
  const t = new MutationObserver((o) => {
    o.forEach((i) => {
      i.removedNodes.forEach((s) => {
        var r;
        if (s.classList.contains(e)) {
          const a = (r = n.parentElement) == null ? void 0 : r.querySelectorAll(`.${e}`);
          a == null || a.forEach((u) => u.remove()), t.disconnect();
        }
      });
    });
  });
  t.observe(n.parentElement, { subtree: !1, childList: !0 });
}, Yi = {
  margin: "5px 0px"
};
function jh(n) {
  let e, t;
  return {
    c() {
      e = Ie("span"), t = Lt(
        /*statement*/
        n[3]
      ), ve(e, "class", "condition-input svelte-1jefebm");
    },
    m(o, i) {
      tt(o, e, i), de(e, t);
    },
    p(o, i) {
      i & /*statement*/
      8 && Ea(
        t,
        /*statement*/
        o[3]
      );
    },
    d(o) {
      o && Ke(e);
    }
  };
}
function Vh(n) {
  let e, t, o, i, s, r, a, u, l;
  return {
    c() {
      e = Ie("span"), t = Lt(
        /*statement*/
        n[3]
      ), o = It(), i = Lt(Kh), s = Ie("span"), r = Lt(
        /*condition*/
        n[0]
      ), a = Lt(Zh), ve(s, "class", "condition-input-edit svelte-1jefebm"), ve(s, "contenteditable", "true"), ve(e, "class", "condition-input svelte-1jefebm");
    },
    m(c, d) {
      tt(c, e, d), de(e, t), de(e, o), de(e, i), de(e, s), de(s, r), de(e, a), u || (l = tn(
        s,
        "input",
        /*onConditionChange*/
        n[5]
      ), u = !0);
    },
    p(c, d) {
      d & /*statement*/
      8 && Ea(
        t,
        /*statement*/
        c[3]
      ), d & /*condition*/
      1 && kh(
        r,
        /*condition*/
        c[0]
      );
    },
    d(c) {
      c && Ke(e), u = !1, l();
    }
  };
}
function er(n) {
  let e, t, o;
  return {
    c() {
      e = Ie("span"), ve(e, "class", "close-icon svelte-1jefebm"), ve(e, "role", "button"), ve(e, "tabindex", "0");
    },
    m(i, s) {
      tt(i, e, s), e.innerHTML = Aa, t || (o = [
        tn(e, "click", function() {
          Dt(
            /*onRemove*/
            n[2]
          ) && n[2].apply(this, arguments);
        }),
        tn(e, "keydown", function() {
          Dt(
            /*onRemove*/
            n[2]
          ) && n[2].apply(this, arguments);
        })
      ], t = !0);
    },
    p(i, s) {
      n = i;
    },
    d(i) {
      i && Ke(e), t = !1, sn(o);
    }
  };
}
function zh(n) {
  let e, t, o, i, s, r;
  function a(d, h) {
    return !/*isEndBlock*/
    d[4] && /*statement*/
    d[3] !== "ELSE" ? Vh : jh;
  }
  let u = a(n), l = u(n), c = (
    /*onRemove*/
    n[2] && er(n)
  );
  return {
    c() {
      e = Ie("span"), t = Ie("span"), t.textContent = `${Gh}`, o = It(), l.c(), i = It(), s = Ie("span"), s.textContent = `${Wh}`, r = It(), c && c.c(), ve(e, "class", "condition-container svelte-1jefebm"), ve(
        e,
        "data-statement",
        /*statement*/
        n[3]
      ), Xs(
        e,
        "inline",
        /*inline*/
        n[1]
      );
    },
    m(d, h) {
      tt(d, e, h), de(e, t), de(e, o), l.m(e, null), de(e, i), de(e, s), de(e, r), c && c.m(e, null);
    },
    p(d, [h]) {
      u === (u = a(d)) && l ? l.p(d, h) : (l.d(1), l = u(d), l && (l.c(), l.m(e, i))), /*onRemove*/
      d[2] ? c ? c.p(d, h) : (c = er(d), c.c(), c.m(e, null)) : c && (c.d(1), c = null), h & /*statement*/
      8 && ve(
        e,
        "data-statement",
        /*statement*/
        d[3]
      ), h & /*inline*/
      2 && Xs(
        e,
        "inline",
        /*inline*/
        d[1]
      );
    },
    i: at,
    o: at,
    d(d) {
      d && Ke(e), l.d(), c && c.d();
    }
  };
}
const Gh = "", Wh = "", Kh = "(", Zh = ")";
function Yh(n, e, t) {
  let { inline: o = !1 } = e, { conditionChanged: i = (c) => {
  } } = e, { onRemove: s = null } = e, { statement: r = "IF" } = e, { condition: a = bo(r.toLowerCase()) } = e, { isEndBlock: u = !1 } = e;
  const l = (c) => {
    t(0, a = c.target.textContent), i(a);
  };
  return n.$$set = (c) => {
    "inline" in c && t(1, o = c.inline), "conditionChanged" in c && t(6, i = c.conditionChanged), "onRemove" in c && t(2, s = c.onRemove), "statement" in c && t(3, r = c.statement), "condition" in c && t(0, a = c.condition), "isEndBlock" in c && t(4, u = c.isEndBlock);
  }, [
    a,
    o,
    s,
    r,
    u,
    l,
    i
  ];
}
class Pt extends zi {
  constructor(e) {
    super(), Vi(this, e, Yh, zh, ji, {
      inline: 1,
      conditionChanged: 6,
      onRemove: 2,
      statement: 3,
      condition: 0,
      isEndBlock: 4
    });
  }
}
const mo = '<?xml version="1.0" encoding="utf-8"?><svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><path d="M 177.425 161.982 C 187.727 161.982 194.166 150.829 189.015 141.907 C 186.625 137.766 182.205 135.215 177.425 135.215 C 167.122 135.215 160.682 146.368 165.834 155.29 C 168.225 159.432 172.643 161.982 177.425 161.982 Z M 222.036 148.599 C 222.036 166.89 211.05 182.615 195.268 189.473 L 195.268 238.435 C 205.753 232.357 217.965 228.899 230.957 228.899 L 284.491 228.899 C 304.177 228.899 320.18 212.895 320.18 193.21 L 320.18 189.473 C 304.399 182.615 293.414 166.89 293.414 148.599 C 293.414 123.951 313.378 103.987 338.025 103.987 C 362.673 103.987 382.637 123.951 382.637 148.599 C 382.637 166.89 371.652 182.615 355.87 189.473 L 355.87 193.21 C 355.87 232.636 323.917 264.588 284.491 264.588 L 230.957 264.588 C 211.273 264.588 195.268 280.593 195.268 300.278 L 195.268 304.013 C 211.05 310.872 222.036 326.598 222.036 344.889 C 222.036 369.537 202.072 389.501 177.425 389.501 C 152.776 389.501 132.813 369.537 132.813 344.889 C 132.813 326.598 143.798 310.872 159.58 304.013 L 159.58 300.278 L 159.58 189.473 C 143.798 182.615 132.813 166.89 132.813 148.599 C 132.813 123.951 152.776 103.987 177.425 103.987 C 202.072 103.987 222.036 123.951 222.036 148.599 Z M 351.409 148.599 C 351.409 138.296 340.255 131.857 331.334 137.008 C 327.194 139.399 324.642 143.818 324.642 148.599 C 324.642 158.901 335.795 165.34 344.717 160.189 C 348.858 157.799 351.409 153.379 351.409 148.599 Z M 177.425 358.272 C 187.727 358.272 194.166 347.12 189.015 338.197 C 186.625 334.056 182.205 331.506 177.425 331.506 C 167.122 331.506 160.682 342.658 165.834 351.581 C 168.225 355.721 172.643 358.272 177.425 358.272 Z" style="" transform="matrix(1, 0, 0, 1, 5.684341886080802e-14, 5.684341886080802e-14)"/></svg>', W = {
  wrapper: "tc-wrap",
  wrapperReadOnly: "tc-wrap--readonly",
  table: "tc-table",
  row: "tc-row",
  withHeadings: "tc-table--heading",
  rowSelected: "tc-row--selected",
  cell: "tc-cell",
  cellSelected: "tc-cell--selected",
  addRow: "tc-add-row",
  addColumn: "tc-add-column",
  ifCondition: "tc-if-condition",
  deleteCellButton: "tc-delete-cell-button",
  cellContent: "cell-content"
};
class Xh {
  /**
   * Creates
   *
   * @constructor
   * @param {boolean} readOnly - read-only mode flag
   * @param {object} api - Editor.js API
   * @param {TableData} data - Editor.js API
   * @param {TableConfig} config - Editor.js API
   */
  constructor(e, t, o, i) {
    this.readOnly = e, this.api = t, this.data = o, this.config = i, this.wrapper = null, this.table = null, this.toolboxColumn = this.createColumnToolbox(), this.toolboxRow = this.createRowToolbox(), this.createTableWrapper(), this.hoveredRow = 0, this.hoveredColumn = 0, this.selectedRow = 0, this.selectedColumn = 0, this.tunes = {
      withHeadings: !1
    }, this.resize(), this.fill(), this.focusedCell = {
      row: 0,
      column: 0
    }, this.documentClicked = (s) => {
      const r = s.target.closest(`.${W.table}`) !== null, a = s.target.closest(`.${W.wrapper}`) === null;
      (r || a) && this.hideToolboxes();
      const l = s.target.closest(`.${W.addRow}`), c = s.target.closest(`.${W.addColumn}`);
      l && l.parentNode === this.wrapper ? (this.addRow(void 0, !0), this.hideToolboxes()) : c && c.parentNode === this.wrapper && (this.addColumn(void 0, !0), this.hideToolboxes());
    }, this.readOnly || this.bindEvents();
  }
  /**
   * Returns the rendered table wrapper
   *
   * @returns {Element}
   */
  getWrapper() {
    return this.wrapper;
  }
  /**
   * Hangs the necessary handlers to events
   */
  bindEvents() {
    document.addEventListener("click", this.documentClicked), this.table.addEventListener("mousemove", xh(150, (e) => this.onMouseMoveInTable(e)), { passive: !0 }), this.table.onkeypress = (e) => this.onKeyPressListener(e), this.table.addEventListener("keydown", (e) => this.onKeyDownListener(e)), this.table.addEventListener("focusin", (e) => this.focusInTableListener(e));
  }
  /**
   * Configures and creates the toolbox for manipulating with columns
   *
   * @returns {Toolbox}
   */
  createColumnToolbox() {
    return new gt({
      api: this.api,
      cssModifier: "column",
      items: [
        {
          label: this.api.i18n.t("Add column to left"),
          icon: dh,
          onClick: () => {
            this.addColumn(this.selectedColumn, !0), this.hideToolboxes();
          }
        },
        {
          label: this.api.i18n.t("Add column to right"),
          icon: hh,
          onClick: () => {
            this.addColumn(this.selectedColumn + 1, !0), this.hideToolboxes();
          }
        },
        {
          label: this.api.i18n.t("Delete column"),
          icon: Ks,
          hideIf: () => this.numberOfColumns === 1,
          confirmationRequired: !0,
          onClick: () => {
            this.deleteColumn(this.selectedColumn), this.hideToolboxes();
          }
        }
      ],
      onOpen: () => {
        this.selectColumn(this.hoveredColumn), this.hideRowToolbox();
      },
      onClose: () => {
        this.unselectColumn();
      }
    });
  }
  /**
   * Configures and creates the toolbox for manipulating with rows
   *
   * @returns {Toolbox}
   */
  createRowToolbox() {
    return new gt({
      api: this.api,
      cssModifier: "row",
      items: [
        {
          label: this.api.i18n.t("Add row above"),
          icon: ph,
          onClick: () => {
            this.addRow(this.selectedRow, !0), this.hideToolboxes();
          }
        },
        {
          label: this.api.i18n.t("Add row below"),
          icon: ch,
          onClick: () => {
            this.addRow(this.selectedRow + 1, !0), this.hideToolboxes();
          }
        },
        {
          label: this.api.i18n.t("IF"),
          icon: mo,
          onClick: () => {
            this.addConditionToRow(this.selectedRow);
          }
        },
        {
          label: this.api.i18n.t("Delete row"),
          icon: Ks,
          hideIf: () => this.numberOfRows === 1,
          confirmationRequired: !0,
          onClick: () => {
            this.deleteRow(this.selectedRow), this.hideToolboxes();
          }
        }
      ],
      onOpen: () => {
        this.selectRow(this.hoveredRow), this.hideColumnToolbox();
      },
      onClose: () => {
        this.unselectRow();
      }
    });
  }
  /**
   * When you press enter it moves the cursor down to the next row
   * or creates it if the click occurred on the last one
   */
  moveCursorToNextRow() {
    this.focusedCell.row !== this.numberOfRows ? (this.focusedCell.row += 1, this.focusCell(this.focusedCell)) : (this.addRow(), this.focusedCell.row += 1, this.focusCell(this.focusedCell), this.updateToolboxesPosition(0, 0));
  }
  /**
   * Get table cell by row and col index
   *
   * @param {number} row - cell row coordinate
   * @param {number} column - cell column coordinate
   * @returns {HTMLElement}
   */
  getCell(e, t) {
    return this.table.querySelectorAll(`.${W.row}:nth-child(${e}) .${W.cell}`)[t - 1];
  }
  /**
   * Get table row by index
   *
   * @param {number} row - row coordinate
   * @returns {HTMLElement}
   */
  getRow(e) {
    return this.table.querySelector(`.${W.row}:nth-child(${e})`);
  }
  /**
   * The parent of the cell which is the row
   *
   * @param {HTMLElement} cell - cell element
   * @returns {HTMLElement}
   */
  getRowByCell(e) {
    return e.parentElement;
  }
  /**
   * Ger row's first cell
   *
   * @param {Element} row - row to find its first cell
   * @returns {Element}
   */
  getRowFirstCell(e) {
    return e.querySelector(`.${W.cell}:first-child`);
  }
  /**
   * Set the sell's content by row and column numbers
   *
   * @param {number} row - cell row coordinate
   * @param {number} column - cell column coordinate
   * @param {string} content - cell HTML content
   */
  setCellContent(e, t, o) {
    const i = this.getCell(e, t);
    i ? i.querySelector(".cell-content").innerHTML = o : console.log("CELL NOT FOUND");
  }
  /**
   * Add column in table on index place
   * Add cells in each row
   *
   * @param {number} columnIndex - number in the array of columns, where new column to insert, -1 if insert at the end
   * @param {boolean} [setFocus] - pass true to focus the first cell
   */
  addColumn(e = -1, t = !1) {
    let o = this.numberOfColumns;
    for (let i = 1; i <= this.numberOfRows; i++) {
      let s;
      const r = this.createCell();
      if (e > 0 && e <= o ? (s = this.getCell(i, e), Dn(r, s)) : s = this.getRow(i).appendChild(r), i === 1) {
        const a = this.getCell(i, e > 0 ? e : o + 1);
        a && t && No(a);
      }
    }
    this.addHeadingAttrToFirstRow();
  }
  /**
  * Add column in table row
  *
  * @param {number} rowIndex
  * @param {boolean} [setFocus] - pass true to focus the cell
  */
  addColumnToRow(e, t = !1) {
    const o = this.createCell();
    this.getRow(e + 1).appendChild(o), this.addHeadingAttrToFirstRow();
  }
  /**
   * Add row in table on index place
   *
   * @param {number} index - number in the array of rows, where new column to insert, -1 if insert at the end
   * @param {boolean} [setFocus] - pass true to focus the inserted row
   * @returns {HTMLElement} row
   */
  addRow(e = -1, t = !1, o = !0) {
    let i, s = Te("div", W.row);
    this.tunes.withHeadings && this.removeHeadingAttrFromFirstRow();
    let r = this.numberOfColumns;
    if (e > 0 && e <= this.numberOfRows) {
      let a = this.getRow(e);
      i = Dn(s, a);
    } else
      i = this.table.appendChild(s);
    if (o && this.fillRow(i, r), this.tunes.withHeadings && this.addHeadingAttrToFirstRow(), o) {
      const a = this.getRowFirstCell(i);
      a && t && No(a);
    }
    return i;
  }
  addConditionToRow(e, t = null) {
    let o = this.getRow(e);
    const i = document.createElement("span"), s = document.createElement("span");
    new Pt({
      target: i,
      props: {
        statement: "IF",
        condition: t || "condicion == resultado",
        inline: !1,
        onRemove: () => {
          i.remove(), s.remove(), o.classList.remove("tc-if-condition");
        },
        conditionChanged: (r) => {
          i.setAttribute("condition", r);
        }
      }
    }), i.classList.add("if"), i.setAttribute("contenteditable", "false"), Dn(i, o.firstElementChild), o.classList.add("tc-if-condition"), s.classList.add("endif"), new Pt({
      target: s,
      props: {
        inline: !0,
        statement: "ENDIF",
        isEndBlock: !0
      }
    }), s.setAttribute("contenteditable", "false"), Dn(s, o.lastElementChild), No(o);
  }
  /**
   * Delete a column by index
   *
   * @param {number} index
   */
  deleteColumn(e) {
    for (let t = 1; t <= this.numberOfRows; t++) {
      const o = this.getCell(t, e);
      if (!o)
        return;
      o.remove();
    }
  }
  /**
   * Delete a row by index
   *
   * @param {number} index
   */
  deleteRow(e) {
    this.getRow(e).remove(), this.addHeadingAttrToFirstRow();
  }
  /**
   * Create a wrapper containing a table, toolboxes
   * and buttons for adding rows and columns
   *
   * @returns {HTMLElement} wrapper - where all buttons for a table and the table itself will be
   */
  createTableWrapper() {
    if (this.wrapper = Te("div", W.wrapper), this.table = Te("div", W.table), this.readOnly && this.wrapper.classList.add(W.wrapperReadOnly), this.wrapper.appendChild(this.toolboxRow.element), this.wrapper.appendChild(this.toolboxColumn.element), this.wrapper.appendChild(this.table), !this.readOnly) {
      const e = Te("div", W.addColumn, {
        innerHTML: Zs
      }), t = Te("div", W.addRow, {
        innerHTML: Zs
      });
      this.wrapper.appendChild(e), this.wrapper.appendChild(t);
    }
  }
  /**
   * Returns the size of the table based on initial data or config "size" property
   *
   * @return {{rows: number, cols: number}} - number of cols and rows
   */
  computeInitialSize() {
    const e = this.data && this.data.content, t = Array.isArray(e), o = t ? e.length : !1, i = t ? e.length : void 0, s = o ? e[0].length : void 0, r = Number.parseInt(this.config && this.config.rows), a = Number.parseInt(this.config && this.config.cols), u = !isNaN(r) && r > 0 ? r : void 0, l = !isNaN(a) && a > 0 ? a : void 0;
    return {
      rows: i || u || 2,
      cols: s || l || 2
    };
  }
  /**
  * Get number of columns of a row based on initial data
  *
  * @param {number} rowIndex - row to get columns
  */
  computeInitialSizeOfRow(e) {
    const t = this.data && this.data.content, s = (Array.isArray(t) ? t.length : !1) ? t[e].length : void 0, r = Number.parseInt(this.config && this.config.cols), a = !isNaN(r) && r > 0 ? r : void 0;
    return s || a || 2;
  }
  /**
   * Resize table to match config size or transmitted data size
   *
   * @return {{rows: number, cols: number}} - number of cols and rows
   */
  resize() {
    const { rows: e, cols: t } = this.computeInitialSize();
    let o = 0;
    for (let i = 0; i < e; i++) {
      if (this.isConditionRow(i)) {
        o += 1;
        continue;
      }
      this.addRow(-1, !1, !1);
      const s = this.computeInitialSizeOfRow(i);
      for (let r = 0; r < s; r++)
        this.addColumnToRow(i - o);
    }
    this.findAndApplyConditionsToTable();
  }
  /**
   * Detect if its condition row in data
   *
   * @param {number} rowIndex
   * @return {boolean}
   */
  isConditionRow(e) {
    const t = this.data && this.data.content;
    return !!["if", "endif"].find((i) => t[e] && t[e][0] === i);
  }
  /**
  * @return {void}
  */
  findAndApplyConditionsToTable() {
    const e = this.data && this.data.content;
    let t = 0;
    e.forEach((o, i) => {
      this.isConditionRow(i) || (t += 1), o[0] === "if" && this.addConditionToRow(t + 1, o[1]);
    });
  }
  /**
   * Fills the table with data passed to the constructor
   *
   * @returns {void}
   */
  fill() {
    const e = this.data;
    let t = 0;
    if (e && e.content)
      for (let o = 0; o < e.content.length; o++)
        if (this.isConditionRow(o))
          t += 1;
        else {
          const i = o - t;
          for (let s = 0; s < e.content[o].length; s++)
            this.setCellContent(i + 1, s + 1, this.cleanHTML(e.content[o][s]));
        }
  }
  /**
   * Filter html
   * @param {string} html
   * @returns {string}
   */
  cleanHTML(e) {
    return e.replaceAll(`
`, "<br>");
  }
  /**
   * Fills a row with cells
   *
   * @param {HTMLElement} row - row to fill
   * @param {number} numberOfColumns - how many cells should be in a row
   */
  fillRow(e, t) {
    for (let o = 1; o <= t; o++) {
      const i = this.createCell();
      e.appendChild(i);
    }
  }
  /**
   * Creating a cell element
   *
   * @return {Element}
   */
  createCell() {
    const e = Te("div", W.cell, {
      contentEditable: !this.readOnly
    });
    return this.addCellContent(e), this.addDeleteCellButton(e), e;
  }
  /**
   * Add cell content area
   *
   * @param {Element} cell - cell to add the delete button
  */
  addCellContent(e) {
    const t = Te("div", W.cellContent, {
      contentEditable: !this.readOnly
    });
    e.appendChild(t);
  }
  /**
   * Adds button to delete cell
   *
   * @param {Element} cell - cell to add the delete button
  */
  addDeleteCellButton(e) {
    const t = Te("div", W.deleteCellButton, {
      contentEditable: this.readOnly
    });
    e.prepend(t), t.addEventListener("click", () => {
      e.style.display = "none";
    });
  }
  /**
   * Get number of rows in the table
   */
  get numberOfRows() {
    return this.table.childElementCount;
  }
  /**
   * Get number of columns in the table
   */
  get numberOfColumns() {
    return this.numberOfRows ? this.table.querySelectorAll(`.${W.row}:first-child .${W.cell}`).length : 0;
  }
  /**
   * Is the column toolbox menu displayed or not
   *
   * @returns {boolean}
   */
  get isColumnMenuShowing() {
    return this.selectedColumn !== 0;
  }
  /**
   * Is the row toolbox menu displayed or not
   *
   * @returns {boolean}
   */
  get isRowMenuShowing() {
    return this.selectedRow !== 0;
  }
  /**
   * Recalculate position of toolbox icons
   *
   * @param {Event} event - mouse move event
   */
  onMouseMoveInTable(e) {
    const { row: t, column: o } = this.getHoveredCell(e);
    this.hoveredColumn = o, this.hoveredRow = t, this.updateToolboxesPosition();
  }
  /**
   * Prevents default Enter behaviors
   * Adds Shift+Enter processing
   *
   * @param {KeyboardEvent} event - keypress event
   */
  onKeyPressListener(e) {
    if (e.key === "Enter") {
      if (e.shiftKey)
        return !0;
      const t = this.focusedCellElem;
      for (let o = 0; o < 2; o++) {
        const i = document.createElement("br");
        t.querySelector(`.${W.cellContent}`).appendChild(i);
      }
      document.execCommand("selectAll", !1, null), document.getSelection().collapseToEnd();
    }
    return e.key !== "Enter";
  }
  /**
   * Prevents tab keydown event from bubbling
   * so that it only works inside the table
   *
   * @param {KeyboardEvent} event - keydown event
   */
  onKeyDownListener(e) {
    e.key === "Tab" && e.stopPropagation();
  }
  /**
   * Set the coordinates of the cell that the focus has moved to
   *
   * @param {FocusEvent} event - focusin event
   */
  focusInTableListener(e) {
    const t = e.target, o = this.getRowByCell(t);
    this.focusedCell = {
      row: Array.from(this.table.querySelectorAll(`.${W.row}`)).indexOf(o) + 1,
      column: Array.from(o.querySelectorAll(`.${W.cell}`)).indexOf(t) + 1
    };
  }
  /**
   * Unselect row/column
   * Close toolbox menu
   * Hide toolboxes
   *
   * @returns {void}
   */
  hideToolboxes() {
    this.hideRowToolbox(), this.hideColumnToolbox(), this.updateToolboxesPosition();
  }
  /**
   * Unselect row, close toolbox
   *
   * @returns {void}
   */
  hideRowToolbox() {
    this.unselectRow(), this.toolboxRow.hide();
  }
  /**
   * Unselect column, close toolbox
   *
   * @returns {void}
   */
  hideColumnToolbox() {
    this.unselectColumn(), this.toolboxColumn.hide();
  }
  /**
   * Set the cursor focus to the focused cell
   *
   * @returns {void}
   */
  focusCell() {
    this.focusedCellElem.focus();
  }
  /**
   * Get current focused element
   *
   * @returns {HTMLElement} - focused cell
   */
  get focusedCellElem() {
    const { row: e, column: t } = this.focusedCell;
    return this.getCell(e, t);
  }
  /**
   * Update toolboxes position
   *
   * @param {number} row - hovered row
   * @param {number} column - hovered column
   */
  updateToolboxesPosition(e = this.hoveredRow, t = this.hoveredColumn) {
    this.isColumnMenuShowing || t > 0 && t <= this.numberOfColumns && this.toolboxColumn.show(() => ({
      left: `calc((100% - var(--cell-size)) / (${this.numberOfColumns} * 2) * (1 + (${t} - 1) * 2))`
    })), this.isRowMenuShowing || e > 0 && e <= this.numberOfRows && this.toolboxRow.show(() => {
      const o = this.getRow(e), { fromTopBorder: i } = Ws(this.table, o), { height: s } = o.getBoundingClientRect();
      return {
        top: `${Math.ceil(i + s / 2)}px`
      };
    });
  }
  /**
   * Makes the first row headings
   *
   * @param {boolean} withHeadings - use headings row or not
   */
  setHeadingsSetting(e) {
    this.tunes.withHeadings = e, e ? (this.table.classList.add(W.withHeadings), this.addHeadingAttrToFirstRow()) : (this.table.classList.remove(W.withHeadings), this.removeHeadingAttrFromFirstRow());
  }
  /**
   * Adds an attribute for displaying the placeholder in the cell
   */
  addHeadingAttrToFirstRow() {
    for (let e = 1; e <= this.numberOfColumns; e++) {
      let t = this.getCell(1, e);
      t && t.setAttribute("heading", this.api.i18n.t("Heading"));
    }
  }
  /**
   * Removes an attribute for displaying the placeholder in the cell
   */
  removeHeadingAttrFromFirstRow() {
    for (let e = 1; e <= this.numberOfColumns; e++) {
      let t = this.getCell(1, e);
      t && t.removeAttribute("heading");
    }
  }
  /**
   * Add effect of a selected row
   *
   * @param {number} index
   */
  selectRow(e) {
    const t = this.getRow(e);
    t && (this.selectedRow = e, t.classList.add(W.rowSelected));
  }
  /**
   * Remove effect of a selected row
   */
  unselectRow() {
    if (this.selectedRow <= 0)
      return;
    const e = this.table.querySelector(`.${W.rowSelected}`);
    e && e.classList.remove(W.rowSelected), this.selectedRow = 0;
  }
  /**
   * Add effect of a selected column
   *
   * @param {number} index
   */
  selectColumn(e) {
    for (let t = 1; t <= this.numberOfRows; t++) {
      const o = this.getCell(t, e);
      o && o.classList.add(W.cellSelected);
    }
    this.selectedColumn = e;
  }
  /**
   * Remove effect of a selected column
   */
  unselectColumn() {
    if (this.selectedColumn <= 0)
      return;
    let e = this.table.querySelectorAll(`.${W.cellSelected}`);
    Array.from(e).forEach((t) => {
      t.classList.remove(W.cellSelected);
    }), this.selectedColumn = 0;
  }
  /**
   * Calculates the row and column that the cursor is currently hovering over
   * The search was optimized from O(n) to O (log n) via bin search to reduce the number of calculations
   *
   * @param {Event} event - mousemove event
   * @returns hovered cell coordinates as an integer row and column
   */
  getHoveredCell(e) {
    let t = this.hoveredRow, o = this.hoveredColumn;
    const { width: i, height: s, x: r, y: a } = lh(this.table, e);
    return r >= 0 && (o = this.binSearch(
      this.numberOfColumns,
      (u) => this.getCell(1, u),
      ({ fromLeftBorder: u }) => r < u,
      ({ fromRightBorder: u }) => r > i - u
    )), a >= 0 && (t = this.binSearch(
      this.numberOfRows,
      (u) => this.getCell(u, 1),
      ({ fromTopBorder: u }) => a < u,
      ({ fromBottomBorder: u }) => a > s - u
    )), {
      row: t || this.hoveredRow,
      column: o || this.hoveredColumn
    };
  }
  /**
   * Looks for the index of the cell the mouse is hovering over.
   * Cells can be represented as ordered intervals with left and
   * right (upper and lower for rows) borders inside the table, if the mouse enters it, then this is our index
   *
   * @param {number} numberOfCells - upper bound of binary search
   * @param {function} getCell - function to take the currently viewed cell
   * @param {function} beforeTheLeftBorder - determines the cursor position, to the left of the cell or not
   * @param {function} afterTheRightBorder - determines the cursor position, to the right of the cell or not
   * @returns {number}
   */
  binSearch(e, t, o, i) {
    let s = 0, r = e + 1, a = 0, u;
    for (; s < r - 1 && a < 10; ) {
      u = Math.ceil((s + r) / 2);
      const l = t(u), c = Ws(this.table, l);
      if (o(c))
        r = u;
      else if (i(c))
        s = u;
      else
        break;
      a++;
    }
    return u;
  }
  /**
   * Collects data from cells into a two-dimensional array
   *
   * @returns {string[][]}
   */
  getData() {
    const e = [];
    for (let t = 1; t <= this.numberOfRows; t++) {
      const o = this.table.querySelector(`.${W.row}:nth-child(${t})`), i = Array.from(o.querySelectorAll(`.${W.cell}`));
      if (i.every((l) => !l.querySelector(`.${W.cellContent}`).textContent.trim()))
        continue;
      const r = o.querySelector(".if");
      r && e.push(["if", r.querySelector("." + Zi).textContent]);
      const a = (l) => l.style.display === "none", u = (l) => l.replaceAll("<br>", `
`);
      e.push(i.filter((l) => !a(l)).map((l) => u(l.querySelector(`.${W.cellContent}`).innerHTML))), r && e.push(["endif", ""]);
    }
    return e;
  }
  /**
   * Remove listeners on the document
   */
  destroy() {
    document.removeEventListener("click", this.documentClicked);
  }
}
class Jh {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allow to press Enter inside the CodeTool textarea
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {TableData} data — previously saved data
   * @param {TableConfig} config - user config for Tool
   * @param {object} api - Editor.js API
   * @param {boolean} readOnly - read-only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    this.api = o, this.readOnly = i, this.config = t, this.data = {
      withHeadings: this.getConfig("withHeadings", !1, e),
      content: e && e.content ? e.content : []
    }, this.table = null;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: mh,
      title: "Table"
    };
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.table = new Xh(this.readOnly, this.api, this.data, this.config), this.container = Te("div", this.api.styles.block), this.container.appendChild(this.table.getWrapper()), this.table.setHeadingsSetting(this.data.withHeadings), this.container;
  }
  /**
   * Returns plugin settings
   *
   * @returns {Array}
   */
  renderSettings() {
    return [
      {
        label: this.api.i18n.t("With headings"),
        icon: gh,
        isActive: this.data.withHeadings,
        closeOnActivate: !0,
        toggle: !0,
        onActivate: () => {
          this.data.withHeadings = !0, this.table.setHeadingsSetting(this.data.withHeadings);
        }
      },
      {
        label: this.api.i18n.t("Without headings"),
        icon: bh,
        isActive: !this.data.withHeadings,
        closeOnActivate: !0,
        toggle: !0,
        onActivate: () => {
          this.data.withHeadings = !1, this.table.setHeadingsSetting(this.data.withHeadings);
        }
      }
    ];
  }
  /**
   * Extract table data from the view
   *
   * @returns {TableData} - saved data
   */
  save() {
    const e = this.table.getData();
    return {
      withHeadings: this.data.withHeadings,
      content: e
    };
  }
  /**
   * Plugin destroyer
   *
   * @returns {void}
   */
  destroy() {
    this.table.destroy();
  }
  /**
   * A helper to get config value.
   * 
   * @param {string} configName - the key to get from the config. 
   * @param {any} defaultValue - default value if config doesn't have passed key
   * @param {object} savedData - previously saved data. If passed, the key will be got from there, otherwise from the config
   * @returns {any} - config value.
   */
  getConfig(e, t = void 0, o = void 0) {
    const i = this.data || o;
    return i ? i[e] ? i[e] : t : this.config && this.config[e] ? this.config[e] : t;
  }
  /**  
   * Table onPaste configuration
   *
   * @public
   */
  static get pasteConfig() {
    return { tags: ["TABLE", "TR", "TH", "TD"] };
  }
  /**
   * On paste callback that is fired from Editor
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const t = e.detail.data, o = t.querySelector(":scope > thead, tr:first-of-type th"), s = Array.from(t.querySelectorAll("tr")).map((r) => Array.from(r.querySelectorAll("th, td")).map((u) => u.innerHTML));
    this.data = {
      withHeadings: o !== null,
      content: s
    }, this.table.wrapper && this.table.wrapper.replaceWith(this.render());
  }
}
const Qh = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path d="M 382.342 140.187 C 388.132 140.187 392.871 144.925 392.871 150.716 L 392.871 361.153 L 389.58 356.876 L 300.087 241.063 C 297.126 237.181 292.455 234.942 287.586 234.942 C 282.716 234.942 278.108 237.181 275.084 241.063 L 220.466 311.735 L 200.396 283.637 C 197.436 279.491 192.698 277.058 187.566 277.058 C 182.432 277.058 177.696 279.491 174.734 283.703 L 122.093 357.401 L 119.129 361.482 L 119.129 361.284 L 119.129 150.716 C 119.129 144.925 123.868 140.187 129.658 140.187 L 382.342 140.187 Z M 129.658 108.601 C 106.431 108.601 87.543 127.487 87.543 150.716 L 87.543 361.284 C 87.543 384.513 106.431 403.399 129.658 403.399 L 382.342 403.399 C 405.569 403.399 424.457 384.513 424.457 361.284 L 424.457 150.716 C 424.457 127.487 405.569 108.601 382.342 108.601 L 129.658 108.601 Z M 182.301 234.942 C 206.615 234.942 221.813 208.622 209.654 187.566 C 204.014 177.791 193.585 171.774 182.301 171.774 C 157.988 171.774 142.789 198.095 154.947 219.151 C 160.59 228.924 171.018 234.942 182.301 234.942 Z" style="" transform="matrix(1, 0, 0, 1, 7.105427357601002e-15, 0)"/>
</svg>`, e0 = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
  <path d="M 115.79 160.328 C 115.79 139.22 132.951 122.059 154.059 122.059 L 421.941 122.059 C 443.049 122.059 460.21 139.22 460.21 160.328 L 460.21 351.672 C 460.21 372.78 443.049 389.941 421.941 389.941 L 154.059 389.941 C 132.951 389.941 115.79 372.78 115.79 351.672 L 115.79 160.328 Z M 235.38 227.298 C 243.871 227.298 251.525 230.946 256.787 236.866 C 262.049 242.785 271.138 243.264 277.057 238.002 C 282.977 232.74 283.456 223.651 278.194 217.731 C 267.729 206.011 252.422 198.597 235.44 198.597 C 203.748 198.597 178.037 224.309 178.037 256 C 178.037 287.692 203.748 313.403 235.44 313.403 C 252.422 313.403 267.729 305.989 278.194 294.269 C 283.456 288.349 282.977 279.32 277.057 273.998 C 271.138 268.677 262.109 269.215 256.787 275.134 C 251.525 281.054 243.871 284.702 235.38 284.702 C 219.534 284.702 206.678 271.846 206.678 256 C 206.678 240.154 219.534 227.298 235.38 227.298 Z M 321.485 256 C 321.485 240.154 334.341 227.298 350.187 227.298 C 358.678 227.298 366.332 230.946 371.594 236.866 C 376.856 242.785 385.945 243.264 391.864 238.002 C 397.784 232.74 398.262 223.651 393 217.731 C 382.536 206.011 367.229 198.597 350.247 198.597 C 318.555 198.597 292.843 224.309 292.843 256 C 292.843 287.692 318.555 313.403 350.247 313.403 C 367.229 313.403 382.536 305.989 393 294.269 C 398.262 288.349 397.784 279.32 391.864 273.998 C 385.945 268.677 376.916 269.215 371.594 275.134 C 366.332 281.054 358.678 284.702 350.187 284.702 C 334.341 284.702 321.485 271.846 321.485 256 Z" style="" transform="matrix(1, 0, 0, 1, 7.105427357601002e-15, 0)"/>
</svg>`, t0 = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path d="M 350.169 330.174 L 410.209 270.134 C 418.026 262.317 418.026 249.621 410.209 241.803 L 350.169 181.763 C 342.351 173.945 329.655 173.945 321.838 181.763 C 314.02 189.581 314.02 202.277 321.838 210.095 L 347.73 235.987 L 164.17 235.987 L 190.062 210.095 C 197.88 202.277 197.88 189.581 190.062 181.763 C 182.245 173.945 169.549 173.945 161.731 181.763 L 101.691 241.803 C 93.874 249.621 93.874 262.317 101.691 270.134 L 161.731 330.174 C 169.549 337.992 182.245 337.992 190.062 330.174 C 197.88 322.357 197.88 309.661 190.062 301.843 L 164.233 276.013 L 347.792 276.013 L 321.9 301.905 C 314.082 309.723 314.082 322.419 321.9 330.237 C 329.718 338.054 342.414 338.054 350.231 330.237 L 350.169 330.174 Z" style="" transform="matrix(1, 0, 0, 1, 7.105427357601002e-15, 0)"/>
</svg>`, n0 = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
  <path d="M 117.862 403.316 C 104.244 403.316 95.733 388.574 102.542 376.781 C 105.702 371.308 111.542 367.936 117.862 367.936 C 131.479 367.936 139.99 382.678 133.182 394.471 C 130.022 399.944 124.182 403.316 117.862 403.316 Z M 170.931 367.936 C 184.548 367.936 193.059 382.678 186.251 394.471 C 183.091 399.944 177.251 403.316 170.931 403.316 C 157.313 403.316 148.802 388.574 155.611 376.781 C 158.771 371.308 164.611 367.936 170.931 367.936 Z M 170.931 155.66 C 184.548 155.66 193.059 170.402 186.251 182.195 C 183.091 187.668 177.251 191.04 170.931 191.04 C 157.313 191.04 148.802 176.298 155.611 164.505 C 158.771 159.032 164.611 155.66 170.931 155.66 Z M 170.931 297.178 C 157.313 297.178 148.802 282.436 155.611 270.643 C 158.771 265.17 164.611 261.798 170.931 261.798 C 184.548 261.798 193.059 276.54 186.251 288.333 C 183.091 293.806 177.251 297.178 170.931 297.178 Z M 277.069 367.936 C 290.687 367.936 299.198 382.678 292.389 394.471 C 289.229 399.944 283.389 403.316 277.069 403.316 C 263.452 403.316 254.941 388.574 261.749 376.781 C 264.909 371.308 270.749 367.936 277.069 367.936 Z M 277.069 191.04 C 263.452 191.04 254.941 176.298 261.749 164.505 C 264.909 159.032 270.749 155.66 277.069 155.66 C 290.687 155.66 299.198 170.402 292.389 182.195 C 289.229 187.668 283.389 191.04 277.069 191.04 Z M 277.069 261.798 C 290.687 261.798 299.198 276.54 292.389 288.333 C 289.229 293.806 283.389 297.178 277.069 297.178 C 263.452 297.178 254.941 282.436 261.749 270.643 C 264.909 265.17 270.749 261.798 277.069 261.798 Z M 224 403.316 C 210.382 403.316 201.872 388.574 208.68 376.781 C 211.84 371.308 217.68 367.936 224 367.936 C 237.618 367.936 246.128 382.678 239.32 394.471 C 236.16 399.944 230.32 403.316 224 403.316 Z M 224 155.66 C 237.618 155.66 246.128 170.402 239.32 182.195 C 236.16 187.668 230.32 191.04 224 191.04 C 210.382 191.04 201.872 176.298 208.68 164.505 C 211.84 159.032 217.68 155.66 224 155.66 Z M 224 297.178 C 210.382 297.178 201.872 282.436 208.68 270.643 C 211.84 265.17 217.68 261.798 224 261.798 C 237.618 261.798 246.128 276.54 239.32 288.333 C 236.16 293.806 230.32 297.178 224 297.178 Z M 330.138 367.936 C 343.756 367.936 352.267 382.678 345.458 394.471 C 342.298 399.944 336.458 403.316 330.138 403.316 C 316.521 403.316 308.01 388.574 314.818 376.781 C 317.978 371.308 323.818 367.936 330.138 367.936 Z M 330.138 155.66 C 343.756 155.66 352.267 170.402 345.458 182.195 C 342.298 187.668 336.458 191.04 330.138 191.04 C 316.521 191.04 308.01 176.298 314.818 164.505 C 317.978 159.032 323.818 155.66 330.138 155.66 Z M 117.862 191.04 C 104.244 191.04 95.733 176.298 102.542 164.505 C 105.702 159.032 111.542 155.66 117.862 155.66 C 131.479 155.66 139.99 170.402 133.182 182.195 C 130.022 187.668 124.182 191.04 117.862 191.04 Z M 330.138 261.798 C 343.756 261.798 352.267 276.54 345.458 288.333 C 342.298 293.806 336.458 297.178 330.138 297.178 C 316.521 297.178 308.01 282.436 314.818 270.643 C 317.978 265.17 323.818 261.798 330.138 261.798 Z M 117.862 297.178 C 104.244 297.178 95.733 282.436 102.542 270.643 C 105.702 265.17 111.542 261.798 117.862 261.798 C 131.479 261.798 139.99 276.54 133.182 288.333 C 130.022 293.806 124.182 297.178 117.862 297.178 Z M 224 314.867 C 237.618 314.867 246.128 329.609 239.32 341.402 C 236.16 346.875 230.32 350.247 224 350.247 C 210.382 350.247 201.872 335.505 208.68 323.712 C 211.84 318.239 217.68 314.867 224 314.867 Z M 330.138 350.247 C 316.521 350.247 308.01 335.505 314.818 323.712 C 317.978 318.239 323.818 314.867 330.138 314.867 C 343.756 314.867 352.267 329.609 345.458 341.402 C 342.298 346.875 336.458 350.247 330.138 350.247 Z M 117.862 314.867 C 131.479 314.867 139.99 329.609 133.182 341.402 C 130.022 346.875 124.182 350.247 117.862 350.247 C 104.244 350.247 95.733 335.505 102.542 323.712 C 105.702 318.239 111.542 314.867 117.862 314.867 Z M 330.138 244.109 C 316.521 244.109 308.01 229.367 314.818 217.574 C 317.978 212.101 323.818 208.729 330.138 208.729 C 343.756 208.729 352.267 223.471 345.458 235.264 C 342.298 240.737 336.458 244.109 330.138 244.109 Z M 117.862 208.729 C 131.479 208.729 139.99 223.471 133.182 235.264 C 130.022 240.737 124.182 244.109 117.862 244.109 C 104.244 244.109 95.733 229.367 102.542 217.574 C 105.702 212.101 111.542 208.729 117.862 208.729 Z M 224 244.109 C 210.382 244.109 201.872 229.367 208.68 217.574 C 211.84 212.101 217.68 208.729 224 208.729 C 237.618 208.729 246.128 223.471 239.32 235.264 C 236.16 240.737 230.32 244.109 224 244.109 Z" style=""/>
</svg>`, o0 = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>';
class i0 {
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: SimpleImageData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */
  constructor({ data: e, config: t, api: o }) {
    this.api = o, this.blockIndex = this.api.blocks.getCurrentBlockIndex() + 1, this.CSS = {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive,
      /**
       * Tool's classes
       */
      wrapper: "cdx-simple-image",
      imageHolder: "cdx-simple-image__picture",
      caption: "cdx-simple-image__caption"
    }, this.nodes = {
      wrapper: null,
      imageHolder: null,
      image: null,
      caption: null
    }, this.data = {
      url: e.url || "",
      caption: e.caption || "",
      hiddenCaption: e.withBorder !== void 0 ? e.hiddenCaption : !1,
      withBorder: e.withBorder !== void 0 ? e.withBorder : !1,
      withBackground: e.withBackground !== void 0 ? e.withBackground : !1,
      stretched: e.stretched !== void 0 ? e.stretched : !1
    }, this.settings = [
      {
        name: "withBorder",
        icon: n0
      },
      {
        name: "stretched",
        icon: t0
      },
      {
        name: "withBackground",
        icon: o0
      },
      {
        name: "hiddenCaption",
        icon: e0
      }
    ];
  }
  static get toolbox() {
    return {
      title: "Image",
      icon: Qh
    };
  }
  /**
   * Creates a Block:
   *  0) Show a button if there is no image
   *  1) Show preloader
   *  2) Start to load an image
   *  3) After loading, append image and caption input
   * @public
   */
  render() {
    let e = this._make("div", [this.CSS.baseClass, this.CSS.wrapper]), t = this._make("input", [], {
      type: "file"
    }), o = this._make("div", this.CSS.loading), i = this._make("div", this.CSS.imageHolder), s = this._make("img"), r = this._make("div", [this.CSS.input, this.CSS.caption], {
      contentEditable: "true",
      innerHTML: this.data.caption || ""
    });
    return this.nodes.imageHolder = i, this.nodes.wrapper = e, this.nodes.image = s, this.nodes.caption = r, this.nodes.loader = o, this.nodes.loadButton = t, r.dataset.placeholder = "Enter a caption", s.onload = () => {
      e.classList.remove(this.CSS.loading), i.appendChild(s), e.appendChild(i), e.appendChild(r), o.remove(), t !== null && (t.remove(), t = null), this.nodes.loader = null, this._acceptTuneView();
    }, s.onerror = (a) => {
      console.log("Failed to load an image", a);
    }, this.data.url ? (e.appendChild(o), s.src = this.data.url) : (e.appendChild(t), t.onchange = (a) => {
      const u = a.target.files[0], l = URL.createObjectURL(u);
      this.data = {
        url: l,
        caption: u.name
      }, t.remove(), t = null;
    }), e;
  }
  /**
   * @public
   * Saving method
   * @param {Element} blockContent - Tool's wrapper
   * @return {SimpleImageData}
   */
  save(e) {
    let t = e.querySelector("img"), o = e.querySelector("." + this.CSS.input);
    return t ? Object.assign(this.data, {
      url: t.src,
      caption: o.innerHTML
    }) : this.data;
  }
  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      url: {},
      withBorder: {},
      withBackground: {},
      stretched: {},
      caption: {
        br: !0
      }
    };
  }
  /**
   * On paste callback that is fired from Editor.
   *
   * @param {PasteEvent} event - event with pasted config
   */
  onPaste(e) {
    switch (e.type) {
      case "tag":
        const t = e.detail.data;
        this.data = {
          url: t.src
        };
        break;
      case "pattern":
        const { data: o } = e.detail;
        this.data = {
          url: o
        };
        break;
      case "file":
        const { file: i } = e.detail;
        this.data = {
          url: URL.createObjectURL(i),
          caption: i.name
        };
        break;
    }
    this.nodes.loadButton.remove(), this.nodes.loadButton = null;
  }
  /**
   * Returns image data
   * @return {SimpleImageData}
   */
  get data() {
    return this._data;
  }
  /**
   * Set image data and update the view
   *
   * @param {SimpleImageData} data
   */
  set data(e) {
    this._data = Object.assign({}, this.data, e), this.nodes.image && (this.nodes.image.src = this.data.url), this.nodes.caption && (this.nodes.caption.innerHTML = this.data.caption);
  }
  /**
   * Specify paste substitutes
   * @see {@link ../../../docs/tools.md#paste-handling}
   * @public
   */
  static get pasteConfig() {
    return {
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i
      },
      tags: ["img"],
      files: {
        mimeTypes: ["image/*"]
      }
    };
  }
  /**
   * Makes buttons with tunes: add background, add border, stretch image
   * @return {HTMLDivElement}
   */
  renderSettings() {
    let e = document.createElement("div");
    return this.settings.forEach((t) => {
      let o = document.createElement("div");
      o.classList.add(this.CSS.settingsButton), o.innerHTML = t.icon, o.addEventListener("click", () => {
        this._toggleTune(t.name), o.classList.toggle(this.CSS.settingsButtonActive);
      }), o.classList.toggle(this.CSS.settingsButtonActive, this.data[t.name]), e.appendChild(o);
    }), e;
  }
  removed() {
    this.data.url && this.data.url.startsWith("blob:") && URL.revokeObjectURL(this.data.url);
  }
  /**
   * Helper for making Elements with attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {array|string} classNames  - list or name of CSS classname(s)
   * @param  {Object} attributes        - any attributes
   * @return {Element}
   */
  _make(e, t = null, o = {}) {
    let i = document.createElement(e);
    Array.isArray(t) ? i.classList.add(...t) : t && i.classList.add(t);
    for (let s in o)
      i[s] = o[s];
    return i;
  }
  /**
   * Click on the Settings Button
   * @private
   */
  _toggleTune(e) {
    this.data[e] = !this.data[e], this._acceptTuneView();
  }
  /**
   * Add specified class corresponds with activated tunes
   * @private
   */
  _acceptTuneView() {
    this.settings.forEach((e) => {
      this.nodes.imageHolder.classList.toggle(this.CSS.imageHolder + "--" + e.name.replace(/([A-Z])/g, (t) => `-${t[0].toLowerCase()}`), !!this.data[e.name]), e.name === "stretched" && this.api.blocks.stretchBlock(this.blockIndex, !!this.data.stretched);
    });
  }
}
class tr {
  /**
   * @returns {object} api - Editor.js API
  */
  get api() {
    return se.api;
  }
  constructor({ api: e, config: t }) {
    se.setApi(e), this.type = t.type;
  }
  static get isTune() {
    return !0;
  }
  render() {
    let e = document.createElement("div");
    const t = this.getAddConditionButton();
    return e.appendChild(t), e;
  }
  getAddConditionButton() {
    const e = document.createElement("div");
    return e.classList.add("ce-popover-item"), e.innerHTML = `
            <div class="ce-popover-item__icon">${mo}</div>
            <div class="ce-popover-item__title">${this.type.toUpperCase()}</div>
            `, e.addEventListener("click", this.onAddConditionButtonClicked.bind(this)), e;
  }
  onAddConditionButtonClicked() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = ke(this.type);
    this.api.blocks.insert(t, { skipEndBlock: !0 }, {}, e, !0);
    const o = ke("end" + this.type);
    this.api.blocks.insert(o, {}, {}, e + 2, !0);
  }
}
const nr = (n, e) => {
  e.parentNode.insertBefore(n, e.nextSibling);
}, s0 = (n) => {
  var e = n.getBoundingClientRect(), t = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(e.bottom < 0 || e.top - t >= 0);
}, Xi = (n, e) => (Object.entries(e).forEach(([t, o]) => {
  n.style[t] = o;
}), n);
class or {
  static get toolbox() {
    return {
      icon: mo
    };
  }
  /**
   * @returns {object} api - Editor.js API
  */
  get api() {
    return se.api;
  }
  /**
   * @returns {string}
  */
  get endConditionBlockName() {
    return ke("end" + this.type);
  }
  constructor({ api: e, data: t = { skipEndBlock: !1, condition: "" }, config: o = { type: "if" } }) {
    se.setApi(e), this.type = o.type, this.skipEndBlock = t.skipEndBlock !== void 0 ? t.skipEndBlock : !this.dataObjectIsEmpty(t), this.condition = t.condition || bo(this.type);
  }
  dataObjectIsEmpty(e) {
    for (const t in e)
      if (Object.hasOwn(e, t))
        return !1;
    return !0;
  }
  render() {
    const e = document.createElement("div");
    return Xi(e, Yi), new Pt({
      target: e,
      props: {
        statement: this.type.toUpperCase(),
        condition: this.condition,
        conditionChanged: (t) => {
          this.condition = t;
        },
        onRemove: () => {
          const t = this.api.blocks.getCurrentBlockIndex();
          this.api.blocks.delete(t);
        }
      }
    }), this.skipEndBlock || this.addEndBlock(), e;
  }
  /**
   * A condition must have a closure, this function adds
   * the end of the condition ('endif', 'endfor')
   * @returns {void}
  */
  addEndBlock() {
    const e = this.api.blocks.getCurrentBlockIndex() + 1;
    this.api.blocks.insert(this.endConditionBlockName, { type: this.type }, {}, e, !0);
  }
  destroy() {
    se.preventDestroyFunctToFireFlag || setTimeout(() => this.deleteNextEndBlock(), 0);
  }
  deleteNextEndBlock() {
    se.setPreventDestroyFunctToFire(!0);
    const e = this.getNextEndBlockIndex();
    Number.isInteger(e) && this.api.blocks.delete(e), se.setPreventDestroyFunctToFire(!1);
  }
  getNextEndBlockIndex() {
    const e = this.api.blocks.getBlocksCount();
    for (let t = 0; t < e; t++) {
      const o = this.api.blocks.getBlockByIndex(t);
      if ((o == null ? void 0 : o.name) === this.endConditionBlockName)
        return t;
      this.shouldDeleteBlockOnDestroy(o) && this.api.blocks.delete(t);
    }
  }
  shouldDeleteBlockOnDestroy(e) {
    return this.type === "if" && ((e == null ? void 0 : e.name) === ke("else") || (e == null ? void 0 : e.name) === ke("elseif"));
  }
  save() {
    return {
      type: this.type,
      condition: this.condition
    };
  }
}
class ir {
  static get toolbox() {
    return {
      icon: mo
    };
  }
  /**
   * @returns {object} api - Editor.js API
  **/
  get api() {
    return se.api;
  }
  constructor({ api: e, data: t = { condition: "" }, config: o = { type: "else" } }) {
    se.setApi(e), this.type = o.type, this.condition = t.condition || bo(this.type);
  }
  render() {
    const e = document.createElement("div");
    return Xi(e, Yi), new Pt({
      target: e,
      props: {
        statement: this.type.toUpperCase(),
        condition: this.condition,
        conditionChanged: (t) => {
          this.condition = t;
        },
        onRemove: () => {
          const t = this.api.blocks.getCurrentBlockIndex();
          this.api.blocks.delete(t);
        }
      }
    }), e;
  }
  /**
   * It fires every time this block changes positions
   * @returns {void}
  **/
  moved(e) {
    const { fromIndex: t, toIndex: o } = e.detail;
    this.preventElseConditionToMoveOutOfClosure(t, o);
  }
  preventElseConditionToMoveOutOfClosure(e, t) {
    const o = this.api.blocks.getBlocksCount();
    let i = null;
    for (let r = 0; r < o; r++) {
      const a = this.api.blocks.getBlockByIndex(r);
      if ((a == null ? void 0 : a.name) === ke("if")) {
        i = r;
        break;
      }
    }
    if (i && i > t) {
      setTimeout(() => this.api.blocks.move(e, t), 10);
      return;
    }
    let s = null;
    for (let r = o - 1; r >= 0; r--) {
      const a = this.api.blocks.getBlockByIndex(r);
      if ((a == null ? void 0 : a.name) === ke("endif")) {
        s = r;
        break;
      }
    }
    if (s && s < t) {
      setTimeout(() => this.api.blocks.move(e, t), 10);
      return;
    }
  }
  save() {
    return {
      type: this.type,
      condition: this.condition
    };
  }
}
class sr {
  /**
   * @returns {object} api - Editor.js API
  */
  get api() {
    return se.api;
  }
  get nameOfStatement() {
    return di(this.type);
  }
  constructor({ data: e, api: t, config: o }) {
    se.setApi(t), this.type = e.type || o.type, this.type = this.type.replace("end", "").replace("END", "").toLowerCase();
  }
  render() {
    const e = document.createElement("div");
    return Xi(e, Yi), new Pt({
      target: e,
      props: {
        statement: this.nameOfStatement.toUpperCase(),
        isEndBlock: !0
      }
    }), e;
  }
  destroy() {
    se.preventDestroyFunctToFireFlag || setTimeout(() => this.deletePreviousStartBlock(), 0);
  }
  deletePreviousStartBlock() {
    se.setPreventDestroyFunctToFire(!0);
    const e = this.getPreviousStartBlockIndex();
    Number.isInteger(e) && this.api.blocks.delete(e), se.setPreventDestroyFunctToFire(!1);
  }
  getPreviousStartBlockIndex() {
    const e = this.api.blocks.getBlocksCount();
    for (let t = 0; t < e; t++) {
      const o = this.api.blocks.getBlockByIndex(t), i = ke(this.type);
      if ((o == null ? void 0 : o.name) === i)
        return t;
    }
  }
  save() {
    return {
      type: this.nameOfStatement
    };
  }
}
class rr {
  static get isInline() {
    return !0;
  }
  constructor({ config: e }) {
    this.button = null, this.state = !1, this.type = e.type;
  }
  render() {
    return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add("ce-inline-tool", "add-condition-button", "add-condition-button-" + this.type), this.button;
  }
  surround(e) {
    const t = $h(), o = e.extractContents(), { startConditionContainer: i, endConditionContainer: s } = Ia(t, null, this.type);
    e.insertNode(i), nr(s, i), nr(o, i), Ra(i, t);
  }
  checkState() {
  }
}
class r0 {
  static get isInline() {
    return !0;
  }
  constructor() {
    this.button = null, this.state = !1;
  }
  render() {
    return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add("ce-inline-tool"), this.button.classList.add("add-variable-button"), this.button;
  }
  surround(e) {
    const t = e.extractContents(), o = Na(t);
    e.insertNode(o);
  }
  checkState(e) {
  }
}
const a0 = {
  header: {
    class: sh,
    inlineToolbar: !0,
    config: {
      placeholder: "Enter a header",
      levels: [2, 3, 4],
      defaultLevel: 3
    }
  },
  table: {
    class: Jh,
    inlineToolbar: !0,
    config: {
      rows: 2,
      cols: 3
    }
  },
  Color: {
    class: Vs,
    config: {
      colorCollections: ["#000000", "#EC7878", "#9C27B0", "#673AB7", "#3F51B5", "#0070FF", "#03A9F4", "#00BCD4", "#4CAF50", "#8BC34A", "#CDDC39", "#FFF"],
      defaultColor: "#000000",
      type: "text",
      customPicker: !0
      // add a button to allow selecting any colour  
    }
  },
  Marker: {
    class: Vs,
    config: {
      defaultColor: "#FFBF00",
      type: "marker",
      icon: '<svg fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6 c0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z"></path> <path d="M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z"></path> </g> <g> <path d="M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z"></path> </g> </g></svg>'
    }
  },
  list: {
    class: uh,
    inlineToolbar: !0,
    config: {
      defaultStyle: "unordered"
    }
  },
  image: i0,
  If: {
    class: rr,
    config: {
      type: "if"
    }
  },
  For: {
    class: rr,
    config: {
      type: "for"
    }
  },
  IfConditionTune: {
    class: tr,
    config: {
      type: "if"
    }
  },
  ForConditionTune: {
    class: tr,
    config: {
      type: "for"
    }
  },
  IfCondition: {
    class: or,
    config: {
      type: "if"
    },
    toolbox: {
      title: "IF"
    }
  },
  IfElseCondition: {
    class: ir,
    config: {
      type: "else if"
    },
    toolbox: {
      title: "ELSE IF"
    }
  },
  ElseCondition: {
    class: ir,
    config: {
      type: "else"
    },
    toolbox: {
      title: "ELSE"
    }
  },
  ForCondition: {
    class: or,
    config: {
      type: "for"
    },
    toolbox: {
      title: "FOR"
    }
  },
  IfEndCondition: {
    class: sr,
    config: {
      type: "ENDIF"
    }
  },
  ForEndCondition: {
    class: sr,
    config: {
      type: "ENDFOR"
    }
  },
  // Columns,
  Variable: {
    class: r0
  }
}, ar = (n) => {
  const e = n.blocks.getBlocksCount();
  let t = 0;
  for (let o = 0; o < e; o++) {
    const i = n.blocks.getBlockByIndex(o);
    i.holder.classList.forEach((s) => {
      s.includes("indent") && i.holder.classList.remove(s);
    }), i.name === "IfCondition" && (t += 1), i.name === "ForCondition" && (t += 1), t && i.holder && i.name !== "IfEndCondition" && i.name !== "ForEndCondition" && i.name !== "IfCondition" && i.name !== "ForCondition" && i.name !== "ElseCondition" && i.name !== "IfElseCondition" && t && i.holder.classList.add(`indent-${t}`), (i.name === "IfEndCondition" || i.name === "IfCondition" || i.name === "ElseCondition" || i.name === "IfElseCondition") && t > 1 && i.holder.classList.add(`indent-${t - 1}`), (i.name === "ForEndCondition" || i.name === "ForCondition") && t > 1 && i.holder.classList.add(`indent-${t - 1}`), (i.name === "IfEndCondition" || i.name === "ForEndCondition") && (t -= 1);
  }
}, u0 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path d="M65.294 197.708v41.354h56.111v114.59H65.294v41.172h160.681v-41.172h-53.378V197.708Zm52.467-50.464q0 5.83 2.095 10.84t5.921 8.471q3.826 3.644 9.2 5.648 5.374 2.004 11.933 2.004 13.481 0 21.406-7.561 7.924-7.56 7.924-19.402 0-11.841-7.924-19.401-7.925-7.561-21.406-7.561-6.559 0-11.933 2.004t-9.2 5.465q-3.826 3.644-5.921 8.654t-2.095 10.839Zm206.949 247.58h50.827v-159.77h71.049v-37.346h-71.049v-10.749q0-8.744 2.277-15.667 2.278-6.923 7.014-11.659 5.283-5.648 14.21-8.563 8.927-2.915 21.679-2.915 11.842 0 20.586 1.093 8.745 1.093 15.668 2.551l3.279-39.715q-6.194-1.093-11.933-2.004-5.738-.911-11.386-1.639-5.648-.729-11.568-1.185-5.921-.455-12.297-.455-20.222 0-36.618 5.192t-27.873 15.394q-11.477 10.202-17.671 25.141-6.194 14.938-6.194 34.431v10.749h-51.739v37.346h51.739Z"/></svg>', l0 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path d="M74.804 347.222h34.098V240.038h47.665v-25.055h-47.665v-7.21q0-5.867 1.528-10.511 1.528-4.644 4.705-7.822 3.545-3.789 9.533-5.744 5.989-1.956 14.544-1.956 7.944 0 13.811.734 5.866.733 10.51 1.711l2.2-26.643q-4.155-.734-8.005-1.345-3.85-.611-7.639-1.1-3.788-.489-7.76-.794-3.972-.306-8.25-.306-13.566 0-24.566 3.483-10.999 3.484-18.699 10.328-7.699 6.844-11.855 16.866-4.155 10.021-4.155 23.099v7.21h-34.71v25.055h34.71Zm112.682-67.341v2.566q0 14.544 4.156 26.827 4.155 12.282 12.222 21.327 7.944 9.044 19.615 14.116 11.672 5.072 26.582 5.072 14.789 0 26.399-5.072 11.611-5.072 19.555-14.116 7.944-9.045 12.099-21.327 4.156-12.283 4.156-26.827v-2.566q0-14.422-4.156-26.705-4.155-12.283-12.099-21.327-8.066-9.044-19.677-14.177-11.611-5.133-26.521-5.133t-26.46 5.133q-11.549 5.133-19.493 14.177-8.067 9.044-12.222 21.327-4.156 12.283-4.156 26.705Zm33.977 2.566v-2.566q0-8.067 1.589-15.278 1.588-7.21 5.01-12.71 3.423-5.5 8.8-8.678 5.378-3.177 12.955-3.177 7.7 0 13.077 3.177 5.378 3.178 8.8 8.678 3.3 5.5 4.889 12.71 1.588 7.211 1.588 15.278v2.566q0 8.311-1.588 15.583-1.589 7.272-4.889 12.649-3.422 5.5-8.8 8.678-5.377 3.177-12.833 3.177-7.699 0-13.138-3.177-5.438-3.178-8.861-8.678-3.422-5.377-5.01-12.649-1.589-7.272-1.589-15.583Zm215.833-69.908q-13.321 0-24.565 6.416-11.244 6.417-19.311 17.661l-.244-2.933-1.344-18.7h-31.655v132.239h33.977v-79.441q2.322-5.622 5.866-9.777 3.544-4.156 8.555-6.844 4.156-2.323 9.472-3.484 5.317-1.161 11.916-1.161 6.356 0 13.383.795 7.027.794 13.749 2.383l5.011-33.854q-4.033-1.222-10.571-2.261-6.539-1.039-14.239-1.039Z"/></svg>';
function c0(n) {
  let e, t;
  return {
    c() {
      e = new Ta(!1), t = Ca(), e.a = t;
    },
    m(o, i) {
      e.m(l0, o, i), tt(o, t, i);
    },
    d(o) {
      o && (Ke(t), e.d());
    }
  };
}
function d0(n) {
  let e, t;
  return {
    c() {
      e = new Ta(!1), t = Ca(), e.a = t;
    },
    m(o, i) {
      e.m(u0, o, i), tt(o, t, i);
    },
    d(o) {
      o && (Ke(t), e.d());
    }
  };
}
function h0(n) {
  let e, t, o;
  function i(a, u) {
    return (
      /*type*/
      a[1] === "if" ? d0 : c0
    );
  }
  let s = i(n), r = s(n);
  return {
    c() {
      e = Ie("button"), r.c(), Ze(e, "position", "absolute"), Ze(e, "z-index", "99"), Ze(e, "width", "40px"), Ze(e, "height", "40px"), Ze(e, "background-color", "#fff"), Ze(e, "border", "1px solid #E8E8EB"), Ze(e, "box-shadow", "0 3px 15px -3px #0d142121"), Ze(e, "border-radius", "6px"), Ze(e, "cursor", "pointer"), Ze(
        e,
        "margin-top",
        /*marginTop*/
        n[2]
      );
    },
    m(a, u) {
      tt(a, e, u), r.m(e, null), t || (o = tn(e, "click", function() {
        Dt(
          /*onButtonClicked*/
          n[0]
        ) && n[0].apply(this, arguments);
      }), t = !0);
    },
    p(a, [u]) {
      n = a, s !== (s = i(n)) && (r.d(1), r = s(n), r && (r.c(), r.m(e, null)));
    },
    i: at,
    o: at,
    d(a) {
      a && Ke(e), r.d(), t = !1, o();
    }
  };
}
function p0(n, e, t) {
  let { onButtonClicked: o = () => {
  } } = e, { type: i = "if" } = e;
  const s = i === "if" ? "0px" : "50px";
  return n.$$set = (r) => {
    "onButtonClicked" in r && t(0, o = r.onButtonClicked), "type" in r && t(1, i = r.type);
  }, [o, i, s];
}
class f0 extends zi {
  constructor(e) {
    super(), Vi(this, e, p0, h0, ji, { onButtonClicked: 0, type: 1 });
  }
}
const g0 = () => {
  const {
    indexOfFirstBlockSelected: n,
    indexOfLastBlockSelected: e,
    blocksCount: t,
    numberOfBlocksSelected: o
  } = b0();
  if (o > 1) {
    let s = m0(n);
    const r = x0(), { top: a, left: u } = s.getBoundingClientRect();
    r.style.top = s.offsetTop + "px", r.style.left = u + "px", se.getEditorRoot().appendChild(r), ["if", "for"].forEach((c) => {
      new f0({
        target: r.contentDocument.body,
        props: {
          type: c,
          onButtonClicked: () => {
            v0(n - 1, e + 1, c), r.remove();
          }
        }
      });
    });
    const l = () => {
      r.remove(), document.removeEventListener("selectionchange", l);
    };
    document.addEventListener("selectionchange", l);
  }
}, b0 = () => {
  const n = se.api;
  let e = 0, t = 0;
  const o = n.blocks.getBlocksCount();
  let i = 0;
  for (let s = 0; s < o; s++) {
    const r = n.blocks.getBlockByIndex(s);
    if (r.selected && (i += 1), i > 1 && e === 0 && (e = s), i > 1 && !r.selected) {
      t = s;
      break;
    }
    r.selected && s + 1 === o && (t = s + 1);
  }
  return {
    indexOfFirstBlockSelected: e,
    indexOfLastBlockSelected: t,
    blocksCount: o,
    numberOfBlocksSelected: i
  };
}, m0 = (n) => {
  let e = null;
  const t = se.api.blocks.getBlocksCount();
  for (let o = n - 1; o < t; o++) {
    const i = se.api.blocks.getBlockByIndex(o);
    if (!e && s0(i.holder)) {
      e = i.holder;
      break;
    }
  }
  return e;
}, x0 = () => {
  const n = document.createElement("iframe"), e = {
    position: "absolute",
    top: "0",
    width: "60px",
    height: "120px",
    right: "0",
    border: "none",
    zIndex: "99"
  };
  for (const [t, o] of Object.entries(e))
    n.style[t] = o;
  return n;
}, v0 = (n, e, t) => {
  const o = se.api;
  o.blocks.insert(ke(t), { skipEndBlock: !0 }, {}, n, !0), o.blocks.insert(ke("end" + t), {}, {}, e, !0);
}, y0 = () => {
  document.addEventListener("mouseup", () => g0(), !1);
}, w0 = (n, e = {}) => {
  n.on("block changed", ({ event: t }) => {
    const { type: o } = t;
    (o === "block-moved" || o === "block-removed" || o === "block-added") && se.api && e.indent && ar(se.api);
  }), y0(), setTimeout(() => {
    e.indent && ar(se.api), Uh();
  }, 50);
};
var k0 = ["left", "right", "center", "justify"], S0 = { delimiter: function() {
  return "<br/>";
}, header: function(n) {
  var e = n.data;
  return "<h" + e.level + ">" + e.text + "</h" + e.level + ">";
}, paragraph: function(n) {
  var e = n.data, t = e.alignment || e.align;
  return t !== void 0 && k0.includes(t) ? '<p style="text-align:' + t + ';">' + e.text + "</p>" : "<p>" + e.text + "</p>";
}, list: function(n) {
  var e = n.data, t = e.style === "unordered" ? "ul" : "ol", o = function(i, s) {
    var r = i.map(function(a) {
      if (!a.content && !a.items)
        return "<li>" + a + "</li>";
      var u = "";
      return a.items && (u = o(a.items, s)), a.content ? "<li> " + a.content + " </li>" + u : void 0;
    });
    return "<" + s + ">" + r.join("") + "</" + s + ">";
  };
  return o(e.items, t);
}, image: function(n) {
  var e = n.data, t = e.caption ? e.caption : "Image";
  return '<img src="' + (e.file && e.file.url ? e.file.url : e.url) + '" alt="' + t + '" />';
}, quote: function(n) {
  var e = n.data;
  return "<blockquote>" + e.text + "</blockquote> - " + e.caption;
}, code: function(n) {
  return "<pre><code>" + n.data.code + "</code></pre>";
}, embed: function(n) {
  var e = n.data;
  switch (e.service) {
    case "vimeo":
      return '<iframe src="' + e.embed + '" height="' + e.height + '" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
    case "youtube":
      return '<iframe width="' + e.width + '" height="' + e.height + '" src="' + e.embed + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    default:
      throw new Error("Only Youtube and Vime Embeds are supported right now.");
  }
} };
function Io(n) {
  return new Error('\x1B[31m The Parser function of type "' + n + `" is not defined. 

  Define your custom parser functions as: \x1B[34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks \x1B[0m`);
}
var _a = function(n) {
  n === void 0 && (n = {});
  var e = Object.assign({}, S0, n);
  return { parse: function(t) {
    return t.blocks.map(function(o) {
      return e[o.type] ? e[o.type](o) : Io(o.type);
    });
  }, parseBlock: function(t) {
    return e[t.type] ? e[t.type](t) : Io(t.type);
  }, parseStrict: function(t) {
    var o = t.blocks, i = _a(e).validate({ blocks: o });
    if (i.length)
      throw new Error("Parser Functions missing for blocks: " + i.toString());
    for (var s = [], r = 0; r < o.length; r++) {
      if (!e[o[r].type])
        throw Io(o[r].type);
      s.push(e[o[r].type](o[r]));
    }
    return s;
  }, validate: function(t) {
    var o = t.blocks.map(function(s) {
      return s.type;
    }).filter(function(s, r, a) {
      return a.indexOf(s) === r;
    }), i = Object.keys(e);
    return o.filter(function(s) {
      return !i.includes(s);
    });
  } };
}, C0 = _a;
const E0 = /* @__PURE__ */ Ln(C0), eo = Symbol("changed"), Yt = Symbol("classList"), qe = Symbol("CustomElements"), Pn = Symbol("content"), Ro = Symbol("dataset"), Et = Symbol("doctype"), hi = Symbol("DOMParser"), F = Symbol("end"), hn = Symbol("EventTarget"), Wn = Symbol("globals"), $e = Symbol("image"), rn = Symbol("mime"), bt = Symbol("MutationObserver"), N = Symbol("next"), Oa = Symbol("ownerElement"), he = Symbol("prev"), Se = Symbol("private"), Vt = Symbol("sheet"), Le = Symbol("start"), _o = Symbol("style"), yn = Symbol("upgrade"), ne = Symbol("value"), Da = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((n) => n.charCodeAt(0))
), Pa = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((n) => n.charCodeAt(0))
);
var Oo;
const T0 = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), pi = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (Oo = String.fromCodePoint) !== null && Oo !== void 0 ? Oo : function(n) {
    let e = "";
    return n > 65535 && (n -= 65536, e += String.fromCharCode(n >>> 10 & 1023 | 55296), n = 56320 | n & 1023), e += String.fromCharCode(n), e;
  }
);
function B0(n) {
  var e;
  return n >= 55296 && n <= 57343 || n > 1114111 ? 65533 : (e = T0.get(n)) !== null && e !== void 0 ? e : n;
}
var pe;
(function(n) {
  n[n.NUM = 35] = "NUM", n[n.SEMI = 59] = "SEMI", n[n.EQUALS = 61] = "EQUALS", n[n.ZERO = 48] = "ZERO", n[n.NINE = 57] = "NINE", n[n.LOWER_A = 97] = "LOWER_A", n[n.LOWER_F = 102] = "LOWER_F", n[n.LOWER_X = 120] = "LOWER_X", n[n.LOWER_Z = 122] = "LOWER_Z", n[n.UPPER_A = 65] = "UPPER_A", n[n.UPPER_F = 70] = "UPPER_F", n[n.UPPER_Z = 90] = "UPPER_Z";
})(pe || (pe = {}));
const A0 = 32;
var mt;
(function(n) {
  n[n.VALUE_LENGTH = 49152] = "VALUE_LENGTH", n[n.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", n[n.JUMP_TABLE = 127] = "JUMP_TABLE";
})(mt || (mt = {}));
function fi(n) {
  return n >= pe.ZERO && n <= pe.NINE;
}
function L0(n) {
  return n >= pe.UPPER_A && n <= pe.UPPER_F || n >= pe.LOWER_A && n <= pe.LOWER_F;
}
function N0(n) {
  return n >= pe.UPPER_A && n <= pe.UPPER_Z || n >= pe.LOWER_A && n <= pe.LOWER_Z || fi(n);
}
function M0(n) {
  return n === pe.EQUALS || N0(n);
}
var ce;
(function(n) {
  n[n.EntityStart = 0] = "EntityStart", n[n.NumericStart = 1] = "NumericStart", n[n.NumericDecimal = 2] = "NumericDecimal", n[n.NumericHex = 3] = "NumericHex", n[n.NamedEntity = 4] = "NamedEntity";
})(ce || (ce = {}));
var Ye;
(function(n) {
  n[n.Legacy = 0] = "Legacy", n[n.Strict = 1] = "Strict", n[n.Attribute = 2] = "Attribute";
})(Ye || (Ye = {}));
class Ha {
  constructor(e, t, o) {
    this.decodeTree = e, this.emitCodePoint = t, this.errors = o, this.state = ce.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Ye.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(e) {
    this.decodeMode = e, this.state = ce.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(e, t) {
    switch (this.state) {
      case ce.EntityStart:
        return e.charCodeAt(t) === pe.NUM ? (this.state = ce.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = ce.NamedEntity, this.stateNamedEntity(e, t));
      case ce.NumericStart:
        return this.stateNumericStart(e, t);
      case ce.NumericDecimal:
        return this.stateNumericDecimal(e, t);
      case ce.NumericHex:
        return this.stateNumericHex(e, t);
      case ce.NamedEntity:
        return this.stateNamedEntity(e, t);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(e, t) {
    return t >= e.length ? -1 : (e.charCodeAt(t) | A0) === pe.LOWER_X ? (this.state = ce.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = ce.NumericDecimal, this.stateNumericDecimal(e, t));
  }
  addToNumericResult(e, t, o, i) {
    if (t !== o) {
      const s = o - t;
      this.result = this.result * Math.pow(i, s) + parseInt(e.substr(t, s), i), this.consumed += s;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(e, t) {
    const o = t;
    for (; t < e.length; ) {
      const i = e.charCodeAt(t);
      if (fi(i) || L0(i))
        t += 1;
      else
        return this.addToNumericResult(e, o, t, 16), this.emitNumericEntity(i, 3);
    }
    return this.addToNumericResult(e, o, t, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(e, t) {
    const o = t;
    for (; t < e.length; ) {
      const i = e.charCodeAt(t);
      if (fi(i))
        t += 1;
      else
        return this.addToNumericResult(e, o, t, 10), this.emitNumericEntity(i, 2);
    }
    return this.addToNumericResult(e, o, t, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(e, t) {
    var o;
    if (this.consumed <= t)
      return (o = this.errors) === null || o === void 0 || o.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (e === pe.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === Ye.Strict)
      return 0;
    return this.emitCodePoint(B0(this.result), this.consumed), this.errors && (e !== pe.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(e, t) {
    const { decodeTree: o } = this;
    let i = o[this.treeIndex], s = (i & mt.VALUE_LENGTH) >> 14;
    for (; t < e.length; t++, this.excess++) {
      const r = e.charCodeAt(t);
      if (this.treeIndex = I0(o, i, this.treeIndex + Math.max(1, s), r), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === Ye.Attribute && // We shouldn't have consumed any characters after the entity,
        (s === 0 || // And there should be no invalid characters.
        M0(r)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (i = o[this.treeIndex], s = (i & mt.VALUE_LENGTH) >> 14, s !== 0) {
        if (r === pe.SEMI)
          return this.emitNamedEntityData(this.treeIndex, s, this.consumed + this.excess);
        this.decodeMode !== Ye.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var e;
    const { result: t, decodeTree: o } = this, i = (o[t] & mt.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(t, i, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(e, t, o) {
    const { decodeTree: i } = this;
    return this.emitCodePoint(t === 1 ? i[e] & ~mt.VALUE_LENGTH : i[e + 1], o), t === 3 && this.emitCodePoint(i[e + 2], o), o;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var e;
    switch (this.state) {
      case ce.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== Ye.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case ce.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case ce.NumericHex:
        return this.emitNumericEntity(0, 3);
      case ce.NumericStart:
        return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case ce.EntityStart:
        return 0;
    }
  }
}
function Fa(n) {
  let e = "";
  const t = new Ha(n, (o) => e += pi(o));
  return function(i, s) {
    let r = 0, a = 0;
    for (; (a = i.indexOf("&", a)) >= 0; ) {
      e += i.slice(r, a), t.startEntity(s);
      const l = t.write(
        i,
        // Skip the "&"
        a + 1
      );
      if (l < 0) {
        r = a + t.end();
        break;
      }
      r = a + l, a = l === 0 ? r + 1 : r;
    }
    const u = e + i.slice(r);
    return e = "", u;
  };
}
function I0(n, e, t, o) {
  const i = (e & mt.BRANCH_LENGTH) >> 7, s = e & mt.JUMP_TABLE;
  if (i === 0)
    return s !== 0 && o === s ? t : -1;
  if (s) {
    const u = o - s;
    return u < 0 || u >= i ? -1 : n[t + u] - 1;
  }
  let r = t, a = r + i - 1;
  for (; r <= a; ) {
    const u = r + a >>> 1, l = n[u];
    if (l < o)
      r = u + 1;
    else if (l > o)
      a = u - 1;
    else
      return n[u + i];
  }
  return -1;
}
Fa(Da);
Fa(Pa);
var H;
(function(n) {
  n[n.Tab = 9] = "Tab", n[n.NewLine = 10] = "NewLine", n[n.FormFeed = 12] = "FormFeed", n[n.CarriageReturn = 13] = "CarriageReturn", n[n.Space = 32] = "Space", n[n.ExclamationMark = 33] = "ExclamationMark", n[n.Number = 35] = "Number", n[n.Amp = 38] = "Amp", n[n.SingleQuote = 39] = "SingleQuote", n[n.DoubleQuote = 34] = "DoubleQuote", n[n.Dash = 45] = "Dash", n[n.Slash = 47] = "Slash", n[n.Zero = 48] = "Zero", n[n.Nine = 57] = "Nine", n[n.Semi = 59] = "Semi", n[n.Lt = 60] = "Lt", n[n.Eq = 61] = "Eq", n[n.Gt = 62] = "Gt", n[n.Questionmark = 63] = "Questionmark", n[n.UpperA = 65] = "UpperA", n[n.LowerA = 97] = "LowerA", n[n.UpperF = 70] = "UpperF", n[n.LowerF = 102] = "LowerF", n[n.UpperZ = 90] = "UpperZ", n[n.LowerZ = 122] = "LowerZ", n[n.LowerX = 120] = "LowerX", n[n.OpeningSquareBracket = 91] = "OpeningSquareBracket";
})(H || (H = {}));
var w;
(function(n) {
  n[n.Text = 1] = "Text", n[n.BeforeTagName = 2] = "BeforeTagName", n[n.InTagName = 3] = "InTagName", n[n.InSelfClosingTag = 4] = "InSelfClosingTag", n[n.BeforeClosingTagName = 5] = "BeforeClosingTagName", n[n.InClosingTagName = 6] = "InClosingTagName", n[n.AfterClosingTagName = 7] = "AfterClosingTagName", n[n.BeforeAttributeName = 8] = "BeforeAttributeName", n[n.InAttributeName = 9] = "InAttributeName", n[n.AfterAttributeName = 10] = "AfterAttributeName", n[n.BeforeAttributeValue = 11] = "BeforeAttributeValue", n[n.InAttributeValueDq = 12] = "InAttributeValueDq", n[n.InAttributeValueSq = 13] = "InAttributeValueSq", n[n.InAttributeValueNq = 14] = "InAttributeValueNq", n[n.BeforeDeclaration = 15] = "BeforeDeclaration", n[n.InDeclaration = 16] = "InDeclaration", n[n.InProcessingInstruction = 17] = "InProcessingInstruction", n[n.BeforeComment = 18] = "BeforeComment", n[n.CDATASequence = 19] = "CDATASequence", n[n.InSpecialComment = 20] = "InSpecialComment", n[n.InCommentLike = 21] = "InCommentLike", n[n.BeforeSpecialS = 22] = "BeforeSpecialS", n[n.BeforeSpecialT = 23] = "BeforeSpecialT", n[n.SpecialStartSequence = 24] = "SpecialStartSequence", n[n.InSpecialTag = 25] = "InSpecialTag", n[n.InEntity = 26] = "InEntity";
})(w || (w = {}));
function nt(n) {
  return n === H.Space || n === H.NewLine || n === H.Tab || n === H.FormFeed || n === H.CarriageReturn;
}
function Hn(n) {
  return n === H.Slash || n === H.Gt || nt(n);
}
function R0(n) {
  return n >= H.LowerA && n <= H.LowerZ || n >= H.UpperA && n <= H.UpperZ;
}
var Ue;
(function(n) {
  n[n.NoValue = 0] = "NoValue", n[n.Unquoted = 1] = "Unquoted", n[n.Single = 2] = "Single", n[n.Double = 3] = "Double";
})(Ue || (Ue = {}));
const ge = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea`
};
class qa {
  constructor({ xmlMode: e = !1, decodeEntities: t = !0 }, o) {
    this.cbs = o, this.state = w.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = w.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = e, this.decodeEntities = t, this.entityDecoder = new Ha(e ? Pa : Da, (i, s) => this.emitCodePoint(i, s));
  }
  reset() {
    this.state = w.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = w.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0;
  }
  write(e) {
    this.offset += this.buffer.length, this.buffer = e, this.parse();
  }
  end() {
    this.running && this.finish();
  }
  pause() {
    this.running = !1;
  }
  resume() {
    this.running = !0, this.index < this.buffer.length + this.offset && this.parse();
  }
  stateText(e) {
    e === H.Lt || !this.decodeEntities && this.fastForwardTo(H.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = w.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && e === H.Amp && this.startEntity();
  }
  stateSpecialStartSequence(e) {
    const t = this.sequenceIndex === this.currentSequence.length;
    if (!(t ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      Hn(e)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (e | 32) === this.currentSequence[this.sequenceIndex]
    )))
      this.isSpecial = !1;
    else if (!t) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0, this.state = w.InTagName, this.stateInTagName(e);
  }
  /** Look for an end tag. For <title> tags, also decode entities. */
  stateInSpecialTag(e) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (e === H.Gt || nt(e)) {
        const t = this.index - this.currentSequence.length;
        if (this.sectionStart < t) {
          const o = this.index;
          this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = o;
        }
        this.isSpecial = !1, this.sectionStart = t + 2, this.stateInClosingTagName(e);
        return;
      }
      this.sequenceIndex = 0;
    }
    (e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === ge.TitleEnd ? this.decodeEntities && e === H.Amp && this.startEntity() : this.fastForwardTo(H.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === H.Lt);
  }
  stateCDATASequence(e) {
    e === ge.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === ge.Cdata.length && (this.state = w.InCommentLike, this.currentSequence = ge.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = w.InDeclaration, this.stateInDeclaration(e));
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(e) {
    for (; ++this.index < this.buffer.length + this.offset; )
      if (this.buffer.charCodeAt(this.index - this.offset) === e)
        return !0;
    return this.index = this.buffer.length + this.offset - 1, !1;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(e) {
    e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === ge.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = w.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  /**
   * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
   *
   * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
   * We allow anything that wouldn't end the tag.
   */
  isTagStartChar(e) {
    return this.xmlMode ? !Hn(e) : R0(e);
  }
  startSpecial(e, t) {
    this.isSpecial = !0, this.currentSequence = e, this.sequenceIndex = t, this.state = w.SpecialStartSequence;
  }
  stateBeforeTagName(e) {
    if (e === H.ExclamationMark)
      this.state = w.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (e === H.Questionmark)
      this.state = w.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(e)) {
      const t = e | 32;
      this.sectionStart = this.index, this.xmlMode ? this.state = w.InTagName : t === ge.ScriptEnd[2] ? this.state = w.BeforeSpecialS : t === ge.TitleEnd[2] ? this.state = w.BeforeSpecialT : this.state = w.InTagName;
    } else
      e === H.Slash ? this.state = w.BeforeClosingTagName : (this.state = w.Text, this.stateText(e));
  }
  stateInTagName(e) {
    Hn(e) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = w.BeforeAttributeName, this.stateBeforeAttributeName(e));
  }
  stateBeforeClosingTagName(e) {
    nt(e) || (e === H.Gt ? this.state = w.Text : (this.state = this.isTagStartChar(e) ? w.InClosingTagName : w.InSpecialComment, this.sectionStart = this.index));
  }
  stateInClosingTagName(e) {
    (e === H.Gt || nt(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = w.AfterClosingTagName, this.stateAfterClosingTagName(e));
  }
  stateAfterClosingTagName(e) {
    (e === H.Gt || this.fastForwardTo(H.Gt)) && (this.state = w.Text, this.sectionStart = this.index + 1);
  }
  stateBeforeAttributeName(e) {
    e === H.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = w.InSpecialTag, this.sequenceIndex = 0) : this.state = w.Text, this.sectionStart = this.index + 1) : e === H.Slash ? this.state = w.InSelfClosingTag : nt(e) || (this.state = w.InAttributeName, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(e) {
    e === H.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = w.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : nt(e) || (this.state = w.BeforeAttributeName, this.stateBeforeAttributeName(e));
  }
  stateInAttributeName(e) {
    (e === H.Eq || Hn(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = w.AfterAttributeName, this.stateAfterAttributeName(e));
  }
  stateAfterAttributeName(e) {
    e === H.Eq ? this.state = w.BeforeAttributeValue : e === H.Slash || e === H.Gt ? (this.cbs.onattribend(Ue.NoValue, this.sectionStart), this.sectionStart = -1, this.state = w.BeforeAttributeName, this.stateBeforeAttributeName(e)) : nt(e) || (this.cbs.onattribend(Ue.NoValue, this.sectionStart), this.state = w.InAttributeName, this.sectionStart = this.index);
  }
  stateBeforeAttributeValue(e) {
    e === H.DoubleQuote ? (this.state = w.InAttributeValueDq, this.sectionStart = this.index + 1) : e === H.SingleQuote ? (this.state = w.InAttributeValueSq, this.sectionStart = this.index + 1) : nt(e) || (this.sectionStart = this.index, this.state = w.InAttributeValueNq, this.stateInAttributeValueNoQuotes(e));
  }
  handleInAttributeValue(e, t) {
    e === t || !this.decodeEntities && this.fastForwardTo(t) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === H.DoubleQuote ? Ue.Double : Ue.Single, this.index + 1), this.state = w.BeforeAttributeName) : this.decodeEntities && e === H.Amp && this.startEntity();
  }
  stateInAttributeValueDoubleQuotes(e) {
    this.handleInAttributeValue(e, H.DoubleQuote);
  }
  stateInAttributeValueSingleQuotes(e) {
    this.handleInAttributeValue(e, H.SingleQuote);
  }
  stateInAttributeValueNoQuotes(e) {
    nt(e) || e === H.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(Ue.Unquoted, this.index), this.state = w.BeforeAttributeName, this.stateBeforeAttributeName(e)) : this.decodeEntities && e === H.Amp && this.startEntity();
  }
  stateBeforeDeclaration(e) {
    e === H.OpeningSquareBracket ? (this.state = w.CDATASequence, this.sequenceIndex = 0) : this.state = e === H.Dash ? w.BeforeComment : w.InDeclaration;
  }
  stateInDeclaration(e) {
    (e === H.Gt || this.fastForwardTo(H.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = w.Text, this.sectionStart = this.index + 1);
  }
  stateInProcessingInstruction(e) {
    (e === H.Gt || this.fastForwardTo(H.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = w.Text, this.sectionStart = this.index + 1);
  }
  stateBeforeComment(e) {
    e === H.Dash ? (this.state = w.InCommentLike, this.currentSequence = ge.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = w.InDeclaration;
  }
  stateInSpecialComment(e) {
    (e === H.Gt || this.fastForwardTo(H.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = w.Text, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(e) {
    const t = e | 32;
    t === ge.ScriptEnd[3] ? this.startSpecial(ge.ScriptEnd, 4) : t === ge.StyleEnd[3] ? this.startSpecial(ge.StyleEnd, 4) : (this.state = w.InTagName, this.stateInTagName(e));
  }
  stateBeforeSpecialT(e) {
    const t = e | 32;
    t === ge.TitleEnd[3] ? this.startSpecial(ge.TitleEnd, 4) : t === ge.TextareaEnd[3] ? this.startSpecial(ge.TextareaEnd, 4) : (this.state = w.InTagName, this.stateInTagName(e));
  }
  startEntity() {
    this.baseState = this.state, this.state = w.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? Ye.Strict : this.baseState === w.Text || this.baseState === w.InSpecialTag ? Ye.Legacy : Ye.Attribute);
  }
  stateInEntity() {
    const e = this.entityDecoder.write(this.buffer, this.index - this.offset);
    e >= 0 ? (this.state = this.baseState, e === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1;
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    this.running && this.sectionStart !== this.index && (this.state === w.Text || this.state === w.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === w.InAttributeValueDq || this.state === w.InAttributeValueSq || this.state === w.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
  }
  shouldContinue() {
    return this.index < this.buffer.length + this.offset && this.running;
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse() {
    for (; this.shouldContinue(); ) {
      const e = this.buffer.charCodeAt(this.index - this.offset);
      switch (this.state) {
        case w.Text: {
          this.stateText(e);
          break;
        }
        case w.SpecialStartSequence: {
          this.stateSpecialStartSequence(e);
          break;
        }
        case w.InSpecialTag: {
          this.stateInSpecialTag(e);
          break;
        }
        case w.CDATASequence: {
          this.stateCDATASequence(e);
          break;
        }
        case w.InAttributeValueDq: {
          this.stateInAttributeValueDoubleQuotes(e);
          break;
        }
        case w.InAttributeName: {
          this.stateInAttributeName(e);
          break;
        }
        case w.InCommentLike: {
          this.stateInCommentLike(e);
          break;
        }
        case w.InSpecialComment: {
          this.stateInSpecialComment(e);
          break;
        }
        case w.BeforeAttributeName: {
          this.stateBeforeAttributeName(e);
          break;
        }
        case w.InTagName: {
          this.stateInTagName(e);
          break;
        }
        case w.InClosingTagName: {
          this.stateInClosingTagName(e);
          break;
        }
        case w.BeforeTagName: {
          this.stateBeforeTagName(e);
          break;
        }
        case w.AfterAttributeName: {
          this.stateAfterAttributeName(e);
          break;
        }
        case w.InAttributeValueSq: {
          this.stateInAttributeValueSingleQuotes(e);
          break;
        }
        case w.BeforeAttributeValue: {
          this.stateBeforeAttributeValue(e);
          break;
        }
        case w.BeforeClosingTagName: {
          this.stateBeforeClosingTagName(e);
          break;
        }
        case w.AfterClosingTagName: {
          this.stateAfterClosingTagName(e);
          break;
        }
        case w.BeforeSpecialS: {
          this.stateBeforeSpecialS(e);
          break;
        }
        case w.BeforeSpecialT: {
          this.stateBeforeSpecialT(e);
          break;
        }
        case w.InAttributeValueNq: {
          this.stateInAttributeValueNoQuotes(e);
          break;
        }
        case w.InSelfClosingTag: {
          this.stateInSelfClosingTag(e);
          break;
        }
        case w.InDeclaration: {
          this.stateInDeclaration(e);
          break;
        }
        case w.BeforeDeclaration: {
          this.stateBeforeDeclaration(e);
          break;
        }
        case w.BeforeComment: {
          this.stateBeforeComment(e);
          break;
        }
        case w.InProcessingInstruction: {
          this.stateInProcessingInstruction(e);
          break;
        }
        case w.InEntity: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup();
  }
  finish() {
    this.state === w.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const e = this.buffer.length + this.offset;
    this.sectionStart >= e || (this.state === w.InCommentLike ? this.currentSequence === ge.CdataEnd ? this.cbs.oncdata(this.sectionStart, e, 0) : this.cbs.oncomment(this.sectionStart, e, 0) : this.state === w.InTagName || this.state === w.BeforeAttributeName || this.state === w.BeforeAttributeValue || this.state === w.AfterAttributeName || this.state === w.InAttributeName || this.state === w.InAttributeValueSq || this.state === w.InAttributeValueDq || this.state === w.InAttributeValueNq || this.state === w.InClosingTagName || this.cbs.ontext(this.sectionStart, e));
  }
  emitCodePoint(e, t) {
    this.baseState !== w.Text && this.baseState !== w.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.onattribentity(e)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.ontextentity(e, this.sectionStart));
  }
}
const zt = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]), ee = /* @__PURE__ */ new Set(["p"]), ur = /* @__PURE__ */ new Set(["thead", "tbody"]), lr = /* @__PURE__ */ new Set(["dd", "dt"]), cr = /* @__PURE__ */ new Set(["rt", "rp"]), _0 = /* @__PURE__ */ new Map([
  ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
  ["th", /* @__PURE__ */ new Set(["th"])],
  ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
  ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
  ["li", /* @__PURE__ */ new Set(["li"])],
  ["p", ee],
  ["h1", ee],
  ["h2", ee],
  ["h3", ee],
  ["h4", ee],
  ["h5", ee],
  ["h6", ee],
  ["select", zt],
  ["input", zt],
  ["output", zt],
  ["button", zt],
  ["datalist", zt],
  ["textarea", zt],
  ["option", /* @__PURE__ */ new Set(["option"])],
  ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
  ["dd", lr],
  ["dt", lr],
  ["address", ee],
  ["article", ee],
  ["aside", ee],
  ["blockquote", ee],
  ["details", ee],
  ["div", ee],
  ["dl", ee],
  ["fieldset", ee],
  ["figcaption", ee],
  ["figure", ee],
  ["footer", ee],
  ["form", ee],
  ["header", ee],
  ["hr", ee],
  ["main", ee],
  ["nav", ee],
  ["ol", ee],
  ["pre", ee],
  ["section", ee],
  ["table", ee],
  ["ul", ee],
  ["rt", cr],
  ["rp", cr],
  ["tbody", ur],
  ["tfoot", ur]
]), O0 = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]), dr = /* @__PURE__ */ new Set(["math", "svg"]), hr = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignobject",
  "desc",
  "title"
]), D0 = /\s|\//;
let xo = class {
  constructor(e, t = {}) {
    var o, i, s, r, a, u;
    this.options = t, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e ?? {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (o = t.lowerCaseTags) !== null && o !== void 0 ? o : this.htmlMode, this.lowerCaseAttributeNames = (i = t.lowerCaseAttributeNames) !== null && i !== void 0 ? i : this.htmlMode, this.recognizeSelfClosing = (s = t.recognizeSelfClosing) !== null && s !== void 0 ? s : !this.htmlMode, this.tokenizer = new ((r = t.Tokenizer) !== null && r !== void 0 ? r : qa)(this.options, this), this.foreignContext = [!this.htmlMode], (u = (a = this.cbs).onparserinit) === null || u === void 0 || u.call(a, this);
  }
  // Tokenizer event handlers
  /** @internal */
  ontext(e, t) {
    var o, i;
    const s = this.getSlice(e, t);
    this.endIndex = t - 1, (i = (o = this.cbs).ontext) === null || i === void 0 || i.call(o, s), this.startIndex = t;
  }
  /** @internal */
  ontextentity(e, t) {
    var o, i;
    this.endIndex = t - 1, (i = (o = this.cbs).ontext) === null || i === void 0 || i.call(o, pi(e)), this.startIndex = t;
  }
  /**
   * Checks if the current tag is a void element. Override this if you want
   * to specify your own additional void elements.
   */
  isVoidElement(e) {
    return this.htmlMode && O0.has(e);
  }
  /** @internal */
  onopentagname(e, t) {
    this.endIndex = t;
    let o = this.getSlice(e, t);
    this.lowerCaseTagNames && (o = o.toLowerCase()), this.emitOpenTag(o);
  }
  emitOpenTag(e) {
    var t, o, i, s;
    this.openTagStart = this.startIndex, this.tagname = e;
    const r = this.htmlMode && _0.get(e);
    if (r)
      for (; this.stack.length > 0 && r.has(this.stack[0]); ) {
        const a = this.stack.shift();
        (o = (t = this.cbs).onclosetag) === null || o === void 0 || o.call(t, a, !0);
      }
    this.isVoidElement(e) || (this.stack.unshift(e), this.htmlMode && (dr.has(e) ? this.foreignContext.unshift(!0) : hr.has(e) && this.foreignContext.unshift(!1))), (s = (i = this.cbs).onopentagname) === null || s === void 0 || s.call(i, e), this.cbs.onopentag && (this.attribs = {});
  }
  endOpenTag(e) {
    var t, o;
    this.startIndex = this.openTagStart, this.attribs && ((o = (t = this.cbs).onopentag) === null || o === void 0 || o.call(t, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = "";
  }
  /** @internal */
  onopentagend(e) {
    this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1;
  }
  /** @internal */
  onclosetag(e, t) {
    var o, i, s, r, a, u, l, c;
    this.endIndex = t;
    let d = this.getSlice(e, t);
    if (this.lowerCaseTagNames && (d = d.toLowerCase()), this.htmlMode && (dr.has(d) || hr.has(d)) && this.foreignContext.shift(), this.isVoidElement(d))
      this.htmlMode && d === "br" && ((r = (s = this.cbs).onopentagname) === null || r === void 0 || r.call(s, "br"), (u = (a = this.cbs).onopentag) === null || u === void 0 || u.call(a, "br", {}, !0), (c = (l = this.cbs).onclosetag) === null || c === void 0 || c.call(l, "br", !1));
    else {
      const h = this.stack.indexOf(d);
      if (h !== -1)
        for (let g = 0; g <= h; g++) {
          const f = this.stack.shift();
          (i = (o = this.cbs).onclosetag) === null || i === void 0 || i.call(o, f, g !== h);
        }
      else
        this.htmlMode && d === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    }
    this.startIndex = t + 1;
  }
  /** @internal */
  onselfclosingtag(e) {
    this.endIndex = e, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e);
  }
  closeCurrentTag(e) {
    var t, o;
    const i = this.tagname;
    this.endOpenTag(e), this.stack[0] === i && ((o = (t = this.cbs).onclosetag) === null || o === void 0 || o.call(t, i, !e), this.stack.shift());
  }
  /** @internal */
  onattribname(e, t) {
    this.startIndex = e;
    const o = this.getSlice(e, t);
    this.attribname = this.lowerCaseAttributeNames ? o.toLowerCase() : o;
  }
  /** @internal */
  onattribdata(e, t) {
    this.attribvalue += this.getSlice(e, t);
  }
  /** @internal */
  onattribentity(e) {
    this.attribvalue += pi(e);
  }
  /** @internal */
  onattribend(e, t) {
    var o, i;
    this.endIndex = t, (i = (o = this.cbs).onattribute) === null || i === void 0 || i.call(o, this.attribname, this.attribvalue, e === Ue.Double ? '"' : e === Ue.Single ? "'" : e === Ue.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = "";
  }
  getInstructionName(e) {
    const t = e.search(D0);
    let o = t < 0 ? e : e.substr(0, t);
    return this.lowerCaseTagNames && (o = o.toLowerCase()), o;
  }
  /** @internal */
  ondeclaration(e, t) {
    this.endIndex = t;
    const o = this.getSlice(e, t);
    if (this.cbs.onprocessinginstruction) {
      const i = this.getInstructionName(o);
      this.cbs.onprocessinginstruction(`!${i}`, `!${o}`);
    }
    this.startIndex = t + 1;
  }
  /** @internal */
  onprocessinginstruction(e, t) {
    this.endIndex = t;
    const o = this.getSlice(e, t);
    if (this.cbs.onprocessinginstruction) {
      const i = this.getInstructionName(o);
      this.cbs.onprocessinginstruction(`?${i}`, `?${o}`);
    }
    this.startIndex = t + 1;
  }
  /** @internal */
  oncomment(e, t, o) {
    var i, s, r, a;
    this.endIndex = t, (s = (i = this.cbs).oncomment) === null || s === void 0 || s.call(i, this.getSlice(e, t - o)), (a = (r = this.cbs).oncommentend) === null || a === void 0 || a.call(r), this.startIndex = t + 1;
  }
  /** @internal */
  oncdata(e, t, o) {
    var i, s, r, a, u, l, c, d, h, g;
    this.endIndex = t;
    const f = this.getSlice(e, t - o);
    !this.htmlMode || this.options.recognizeCDATA ? ((s = (i = this.cbs).oncdatastart) === null || s === void 0 || s.call(i), (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, f), (l = (u = this.cbs).oncdataend) === null || l === void 0 || l.call(u)) : ((d = (c = this.cbs).oncomment) === null || d === void 0 || d.call(c, `[CDATA[${f}]]`), (g = (h = this.cbs).oncommentend) === null || g === void 0 || g.call(h)), this.startIndex = t + 1;
  }
  /** @internal */
  onend() {
    var e, t;
    if (this.cbs.onclosetag) {
      this.endIndex = this.startIndex;
      for (let o = 0; o < this.stack.length; o++)
        this.cbs.onclosetag(this.stack[o], !0);
    }
    (t = (e = this.cbs).onend) === null || t === void 0 || t.call(e);
  }
  /**
   * Resets the parser to a blank state, ready to parse a new HTML document
   */
  reset() {
    var e, t, o, i;
    (t = (e = this.cbs).onreset) === null || t === void 0 || t.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (i = (o = this.cbs).onparserinit) === null || i === void 0 || i.call(o, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
  }
  /**
   * Resets the parser, then parses a complete document and
   * pushes it to the handler.
   *
   * @param data Document to parse.
   */
  parseComplete(e) {
    this.reset(), this.end(e);
  }
  getSlice(e, t) {
    for (; e - this.bufferOffset >= this.buffers[0].length; )
      this.shiftBuffer();
    let o = this.buffers[0].slice(e - this.bufferOffset, t - this.bufferOffset);
    for (; t - this.bufferOffset > this.buffers[0].length; )
      this.shiftBuffer(), o += this.buffers[0].slice(0, t - this.bufferOffset);
    return o;
  }
  shiftBuffer() {
    this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
  }
  /**
   * Parses a chunk of data and calls the corresponding callbacks.
   *
   * @param chunk Chunk to parse.
   */
  write(e) {
    var t, o;
    if (this.ended) {
      (o = (t = this.cbs).onerror) === null || o === void 0 || o.call(t, new Error(".write() after done!"));
      return;
    }
    this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++);
  }
  /**
   * Parses the end of the buffer and clears the stack, calls onend.
   *
   * @param chunk Optional final chunk to parse.
   */
  end(e) {
    var t, o;
    if (this.ended) {
      (o = (t = this.cbs).onerror) === null || o === void 0 || o.call(t, new Error(".end() after done!"));
      return;
    }
    e && this.write(e), this.ended = !0, this.tokenizer.end();
  }
  /**
   * Pauses parsing. The parser won't emit events until `resume` is called.
   */
  pause() {
    this.tokenizer.pause();
  }
  /**
   * Resumes parsing after `pause` was called.
   */
  resume() {
    for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; )
      this.tokenizer.write(this.buffers[this.writeIndex++]);
    this.ended && this.tokenizer.end();
  }
  /**
   * Alias of `write`, for backwards compatibility.
   *
   * @param chunk Chunk to parse.
   * @deprecated
   */
  parseChunk(e) {
    this.write(e);
  }
  /**
   * Alias of `end`, for backwards compatibility.
   *
   * @param chunk Optional final chunk to parse.
   * @deprecated
   */
  done(e) {
    this.end(e);
  }
};
var Y;
(function(n) {
  n.Root = "root", n.Text = "text", n.Directive = "directive", n.Comment = "comment", n.Script = "script", n.Style = "style", n.Tag = "tag", n.CDATA = "cdata", n.Doctype = "doctype";
})(Y || (Y = {}));
function $a(n) {
  return n.type === Y.Tag || n.type === Y.Script || n.type === Y.Style;
}
const Ua = Y.Root, ja = Y.Text, Va = Y.Directive, za = Y.Comment, Ga = Y.Script, Wa = Y.Style, Ka = Y.Tag, Za = Y.CDATA, Ya = Y.Doctype, P0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CDATA: Za,
  Comment: za,
  Directive: Va,
  Doctype: Ya,
  get ElementType() {
    return Y;
  },
  Root: Ua,
  Script: Ga,
  Style: Wa,
  Tag: Ka,
  Text: ja,
  isTag: $a
}, Symbol.toStringTag, { value: "Module" }));
let Xa = class {
  constructor() {
    this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
  }
  // Read-write aliases for properties
  /**
   * Same as {@link parent}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get parentNode() {
    return this.parent;
  }
  set parentNode(e) {
    this.parent = e;
  }
  /**
   * Same as {@link prev}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get previousSibling() {
    return this.prev;
  }
  set previousSibling(e) {
    this.prev = e;
  }
  /**
   * Same as {@link next}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get nextSibling() {
    return this.next;
  }
  set nextSibling(e) {
    this.next = e;
  }
  /**
   * Clone this node, and optionally its children.
   *
   * @param recursive Clone child nodes as well.
   * @returns A clone of the node.
   */
  cloneNode(e = !1) {
    return ou(this, e);
  }
};
class Ji extends Xa {
  /**
   * @param data The content of the data node
   */
  constructor(e) {
    super(), this.data = e;
  }
  /**
   * Same as {@link data}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get nodeValue() {
    return this.data;
  }
  set nodeValue(e) {
    this.data = e;
  }
}
let gi = class extends Ji {
  constructor() {
    super(...arguments), this.type = Y.Text;
  }
  get nodeType() {
    return 3;
  }
}, Ja = class extends Ji {
  constructor() {
    super(...arguments), this.type = Y.Comment;
  }
  get nodeType() {
    return 8;
  }
};
class Qa extends Ji {
  constructor(e, t) {
    super(t), this.name = e, this.type = Y.Directive;
  }
  get nodeType() {
    return 1;
  }
}
class Qi extends Xa {
  /**
   * @param children Children of the node. Only certain node types can have children.
   */
  constructor(e) {
    super(), this.children = e;
  }
  // Aliases
  /** First child of the node. */
  get firstChild() {
    var e;
    return (e = this.children[0]) !== null && e !== void 0 ? e : null;
  }
  /** Last child of the node. */
  get lastChild() {
    return this.children.length > 0 ? this.children[this.children.length - 1] : null;
  }
  /**
   * Same as {@link children}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get childNodes() {
    return this.children;
  }
  set childNodes(e) {
    this.children = e;
  }
}
class eu extends Qi {
  constructor() {
    super(...arguments), this.type = Y.CDATA;
  }
  get nodeType() {
    return 4;
  }
}
let bi = class extends Qi {
  constructor() {
    super(...arguments), this.type = Y.Root;
  }
  get nodeType() {
    return 9;
  }
}, tu = class extends Qi {
  /**
   * @param name Name of the tag, eg. `div`, `span`.
   * @param attribs Object mapping attribute names to attribute values.
   * @param children Children of the node.
   */
  constructor(e, t, o = [], i = e === "script" ? Y.Script : e === "style" ? Y.Style : Y.Tag) {
    super(o), this.name = e, this.attribs = t, this.type = i;
  }
  get nodeType() {
    return 1;
  }
  // DOM Level 1 aliases
  /**
   * Same as {@link name}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get tagName() {
    return this.name;
  }
  set tagName(e) {
    this.name = e;
  }
  get attributes() {
    return Object.keys(this.attribs).map((e) => {
      var t, o;
      return {
        name: e,
        value: this.attribs[e],
        namespace: (t = this["x-attribsNamespace"]) === null || t === void 0 ? void 0 : t[e],
        prefix: (o = this["x-attribsPrefix"]) === null || o === void 0 ? void 0 : o[e]
      };
    });
  }
};
function _e(n) {
  return $a(n);
}
function vo(n) {
  return n.type === Y.CDATA;
}
function Ht(n) {
  return n.type === Y.Text;
}
function es(n) {
  return n.type === Y.Comment;
}
function H0(n) {
  return n.type === Y.Directive;
}
function nu(n) {
  return n.type === Y.Root;
}
function kt(n) {
  return Object.prototype.hasOwnProperty.call(n, "children");
}
function ou(n, e = !1) {
  let t;
  if (Ht(n))
    t = new gi(n.data);
  else if (es(n))
    t = new Ja(n.data);
  else if (_e(n)) {
    const o = e ? Do(n.children) : [], i = new tu(n.name, { ...n.attribs }, o);
    o.forEach((s) => s.parent = i), n.namespace != null && (i.namespace = n.namespace), n["x-attribsNamespace"] && (i["x-attribsNamespace"] = { ...n["x-attribsNamespace"] }), n["x-attribsPrefix"] && (i["x-attribsPrefix"] = { ...n["x-attribsPrefix"] }), t = i;
  } else if (vo(n)) {
    const o = e ? Do(n.children) : [], i = new eu(o);
    o.forEach((s) => s.parent = i), t = i;
  } else if (nu(n)) {
    const o = e ? Do(n.children) : [], i = new bi(o);
    o.forEach((s) => s.parent = i), n["x-mode"] && (i["x-mode"] = n["x-mode"]), t = i;
  } else if (H0(n)) {
    const o = new Qa(n.name, n.data);
    n["x-name"] != null && (o["x-name"] = n["x-name"], o["x-publicId"] = n["x-publicId"], o["x-systemId"] = n["x-systemId"]), t = o;
  } else
    throw new Error(`Not implemented yet: ${n.type}`);
  return t.startIndex = n.startIndex, t.endIndex = n.endIndex, n.sourceCodeLocation != null && (t.sourceCodeLocation = n.sourceCodeLocation), t;
}
function Do(n) {
  const e = n.map((t) => ou(t, !0));
  for (let t = 1; t < e.length; t++)
    e[t].prev = e[t - 1], e[t - 1].next = e[t];
  return e;
}
const pr = {
  withStartIndices: !1,
  withEndIndices: !1,
  xmlMode: !1
};
class En {
  /**
   * @param callback Called once parsing has completed.
   * @param options Settings for the handler.
   * @param elementCB Callback whenever a tag is closed.
   */
  constructor(e, t, o) {
    this.dom = [], this.root = new bi(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof t == "function" && (o = t, t = pr), typeof e == "object" && (t = e, e = void 0), this.callback = e ?? null, this.options = t ?? pr, this.elementCB = o ?? null;
  }
  onparserinit(e) {
    this.parser = e;
  }
  // Resets the handler back to starting state
  onreset() {
    this.dom = [], this.root = new bi(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
  }
  // Signals the handler that parsing is done
  onend() {
    this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
  }
  onerror(e) {
    this.handleCallback(e);
  }
  onclosetag() {
    this.lastNode = null;
    const e = this.tagStack.pop();
    this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e);
  }
  onopentag(e, t) {
    const o = this.options.xmlMode ? Y.Tag : void 0, i = new tu(e, t, void 0, o);
    this.addNode(i), this.tagStack.push(i);
  }
  ontext(e) {
    const { lastNode: t } = this;
    if (t && t.type === Y.Text)
      t.data += e, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
    else {
      const o = new gi(e);
      this.addNode(o), this.lastNode = o;
    }
  }
  oncomment(e) {
    if (this.lastNode && this.lastNode.type === Y.Comment) {
      this.lastNode.data += e;
      return;
    }
    const t = new Ja(e);
    this.addNode(t), this.lastNode = t;
  }
  oncommentend() {
    this.lastNode = null;
  }
  oncdatastart() {
    const e = new gi(""), t = new eu([e]);
    this.addNode(t), e.parent = t, this.lastNode = e;
  }
  oncdataend() {
    this.lastNode = null;
  }
  onprocessinginstruction(e, t) {
    const o = new Qa(e, t);
    this.addNode(o);
  }
  handleCallback(e) {
    if (typeof this.callback == "function")
      this.callback(e, this.dom);
    else if (e)
      throw e;
  }
  addNode(e) {
    const t = this.tagStack[this.tagStack.length - 1], o = t.children[t.children.length - 1];
    this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), t.children.push(e), o && (e.prev = o, o.next = e), e.parent = t, this.lastNode = null;
  }
}
const fr = /["&'<>$\x80-\uFFFF]/g, F0 = /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [39, "&apos;"],
  [60, "&lt;"],
  [62, "&gt;"]
]), q0 = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? (n, e) => n.codePointAt(e) : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    (n, e) => (n.charCodeAt(e) & 64512) === 55296 ? (n.charCodeAt(e) - 55296) * 1024 + n.charCodeAt(e + 1) - 56320 + 65536 : n.charCodeAt(e)
  )
);
function iu(n) {
  let e = "", t = 0, o;
  for (; (o = fr.exec(n)) !== null; ) {
    const i = o.index, s = n.charCodeAt(i), r = F0.get(s);
    r !== void 0 ? (e += n.substring(t, i) + r, t = i + 1) : (e += `${n.substring(t, i)}&#x${q0(n, i).toString(16)};`, t = fr.lastIndex += +((s & 64512) === 55296));
  }
  return e + n.substr(t);
}
function su(n, e) {
  return function(o) {
    let i, s = 0, r = "";
    for (; i = n.exec(o); )
      s !== i.index && (r += o.substring(s, i.index)), r += e.get(i[0].charCodeAt(0)), s = i.index + 1;
    return r + o.substring(s);
  };
}
const $0 = su(/["&\u00A0]/g, /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [160, "&nbsp;"]
])), U0 = su(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
  [38, "&amp;"],
  [60, "&lt;"],
  [62, "&gt;"],
  [160, "&nbsp;"]
])), j0 = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map((n) => [n.toLowerCase(), n])), V0 = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map((n) => [n.toLowerCase(), n])), z0 = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function G0(n) {
  return n.replace(/"/g, "&quot;");
}
function W0(n, e) {
  var t;
  if (!n)
    return;
  const o = ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) === !1 ? G0 : e.xmlMode || e.encodeEntities !== "utf8" ? iu : $0;
  return Object.keys(n).map((i) => {
    var s, r;
    const a = (s = n[i]) !== null && s !== void 0 ? s : "";
    return e.xmlMode === "foreign" && (i = (r = V0.get(i)) !== null && r !== void 0 ? r : i), !e.emptyAttrs && !e.xmlMode && a === "" ? i : `${i}="${o(a)}"`;
  }).join(" ");
}
const gr = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function ts(n, e = {}) {
  const t = "length" in n ? n : [n];
  let o = "";
  for (let i = 0; i < t.length; i++)
    o += K0(t[i], e);
  return o;
}
function K0(n, e) {
  switch (n.type) {
    case Ua:
      return ts(n.children, e);
    case Ya:
    case Va:
      return J0(n);
    case za:
      return tp(n);
    case Za:
      return ep(n);
    case Ga:
    case Wa:
    case Ka:
      return X0(n, e);
    case ja:
      return Q0(n, e);
  }
}
const Z0 = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), Y0 = /* @__PURE__ */ new Set(["svg", "math"]);
function X0(n, e) {
  var t;
  e.xmlMode === "foreign" && (n.name = (t = j0.get(n.name)) !== null && t !== void 0 ? t : n.name, n.parent && Z0.has(n.parent.name) && (e = { ...e, xmlMode: !1 })), !e.xmlMode && Y0.has(n.name) && (e = { ...e, xmlMode: "foreign" });
  let o = `<${n.name}`;
  const i = W0(n.attribs, e);
  return i && (o += ` ${i}`), n.children.length === 0 && (e.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    e.selfClosingTags !== !1
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    e.selfClosingTags && gr.has(n.name)
  )) ? (e.xmlMode || (o += " "), o += "/>") : (o += ">", n.children.length > 0 && (o += ts(n.children, e)), (e.xmlMode || !gr.has(n.name)) && (o += `</${n.name}>`)), o;
}
function J0(n) {
  return `<${n.data}>`;
}
function Q0(n, e) {
  var t;
  let o = n.data || "";
  return ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) !== !1 && !(!e.xmlMode && n.parent && z0.has(n.parent.name)) && (o = e.xmlMode || e.encodeEntities !== "utf8" ? iu(o) : U0(o)), o;
}
function ep(n) {
  return `<![CDATA[${n.children[0].data}]]>`;
}
function tp(n) {
  return `<!--${n.data}-->`;
}
function ru(n, e) {
  return ts(n, e);
}
function np(n, e) {
  return kt(n) ? n.children.map((t) => ru(t, e)).join("") : "";
}
function Kn(n) {
  return Array.isArray(n) ? n.map(Kn).join("") : _e(n) ? n.name === "br" ? `
` : Kn(n.children) : vo(n) ? Kn(n.children) : Ht(n) ? n.data : "";
}
function to(n) {
  return Array.isArray(n) ? n.map(to).join("") : kt(n) && !es(n) ? to(n.children) : Ht(n) ? n.data : "";
}
function mi(n) {
  return Array.isArray(n) ? n.map(mi).join("") : kt(n) && (n.type === Y.Tag || vo(n)) ? mi(n.children) : Ht(n) ? n.data : "";
}
function au(n) {
  return kt(n) ? n.children : [];
}
function uu(n) {
  return n.parent || null;
}
function op(n) {
  const e = uu(n);
  if (e != null)
    return au(e);
  const t = [n];
  let { prev: o, next: i } = n;
  for (; o != null; )
    t.unshift(o), { prev: o } = o;
  for (; i != null; )
    t.push(i), { next: i } = i;
  return t;
}
function ip(n, e) {
  var t;
  return (t = n.attribs) === null || t === void 0 ? void 0 : t[e];
}
function sp(n, e) {
  return n.attribs != null && Object.prototype.hasOwnProperty.call(n.attribs, e) && n.attribs[e] != null;
}
function rp(n) {
  return n.name;
}
function ap(n) {
  let { next: e } = n;
  for (; e !== null && !_e(e); )
    ({ next: e } = e);
  return e;
}
function up(n) {
  let { prev: e } = n;
  for (; e !== null && !_e(e); )
    ({ prev: e } = e);
  return e;
}
function Nn(n) {
  if (n.prev && (n.prev.next = n.next), n.next && (n.next.prev = n.prev), n.parent) {
    const e = n.parent.children, t = e.lastIndexOf(n);
    t >= 0 && e.splice(t, 1);
  }
  n.next = null, n.prev = null, n.parent = null;
}
function lp(n, e) {
  const t = e.prev = n.prev;
  t && (t.next = e);
  const o = e.next = n.next;
  o && (o.prev = e);
  const i = e.parent = n.parent;
  if (i) {
    const s = i.children;
    s[s.lastIndexOf(n)] = e, n.parent = null;
  }
}
function cp(n, e) {
  if (Nn(e), e.next = null, e.parent = n, n.children.push(e) > 1) {
    const t = n.children[n.children.length - 2];
    t.next = e, e.prev = t;
  } else
    e.prev = null;
}
function dp(n, e) {
  Nn(e);
  const { parent: t } = n, o = n.next;
  if (e.next = o, e.prev = n, n.next = e, e.parent = t, o) {
    if (o.prev = e, t) {
      const i = t.children;
      i.splice(i.lastIndexOf(o), 0, e);
    }
  } else
    t && t.children.push(e);
}
function hp(n, e) {
  if (Nn(e), e.parent = n, e.prev = null, n.children.unshift(e) !== 1) {
    const t = n.children[1];
    t.prev = e, e.next = t;
  } else
    e.next = null;
}
function pp(n, e) {
  Nn(e);
  const { parent: t } = n;
  if (t) {
    const o = t.children;
    o.splice(o.indexOf(n), 0, e);
  }
  n.prev && (n.prev.next = e), e.parent = t, e.prev = n.prev, e.next = n, n.prev = e;
}
function yo(n, e, t = !0, o = 1 / 0) {
  return lu(n, Array.isArray(e) ? e : [e], t, o);
}
function lu(n, e, t, o) {
  const i = [], s = [e], r = [0];
  for (; ; ) {
    if (r[0] >= s[0].length) {
      if (r.length === 1)
        return i;
      s.shift(), r.shift();
      continue;
    }
    const a = s[0][r[0]++];
    if (n(a) && (i.push(a), --o <= 0))
      return i;
    t && kt(a) && a.children.length > 0 && (r.unshift(0), s.unshift(a.children));
  }
}
function fp(n, e) {
  return e.find(n);
}
function ns(n, e, t = !0) {
  let o = null;
  for (let i = 0; i < e.length && !o; i++) {
    const s = e[i];
    if (_e(s))
      n(s) ? o = s : t && s.children.length > 0 && (o = ns(n, s.children, !0));
    else
      continue;
  }
  return o;
}
function cu(n, e) {
  return e.some((t) => _e(t) && (n(t) || cu(n, t.children)));
}
function gp(n, e) {
  const t = [], o = [e], i = [0];
  for (; ; ) {
    if (i[0] >= o[0].length) {
      if (o.length === 1)
        return t;
      o.shift(), i.shift();
      continue;
    }
    const s = o[0][i[0]++];
    _e(s) && (n(s) && t.push(s), s.children.length > 0 && (i.unshift(0), o.unshift(s.children)));
  }
}
const no = {
  tag_name(n) {
    return typeof n == "function" ? (e) => _e(e) && n(e.name) : n === "*" ? _e : (e) => _e(e) && e.name === n;
  },
  tag_type(n) {
    return typeof n == "function" ? (e) => n(e.type) : (e) => e.type === n;
  },
  tag_contains(n) {
    return typeof n == "function" ? (e) => Ht(e) && n(e.data) : (e) => Ht(e) && e.data === n;
  }
};
function du(n, e) {
  return typeof e == "function" ? (t) => _e(t) && e(t.attribs[n]) : (t) => _e(t) && t.attribs[n] === e;
}
function bp(n, e) {
  return (t) => n(t) || e(t);
}
function hu(n) {
  const e = Object.keys(n).map((t) => {
    const o = n[t];
    return Object.prototype.hasOwnProperty.call(no, t) ? no[t](o) : du(t, o);
  });
  return e.length === 0 ? null : e.reduce(bp);
}
function mp(n, e) {
  const t = hu(n);
  return t ? t(e) : !0;
}
function xp(n, e, t, o = 1 / 0) {
  const i = hu(n);
  return i ? yo(i, e, t, o) : [];
}
function vp(n, e, t = !0) {
  return Array.isArray(e) || (e = [e]), ns(du("id", n), e, t);
}
function an(n, e, t = !0, o = 1 / 0) {
  return yo(no.tag_name(n), e, t, o);
}
function yp(n, e, t = !0, o = 1 / 0) {
  return yo(no.tag_type(n), e, t, o);
}
function wp(n) {
  let e = n.length;
  for (; --e >= 0; ) {
    const t = n[e];
    if (e > 0 && n.lastIndexOf(t, e - 1) >= 0) {
      n.splice(e, 1);
      continue;
    }
    for (let o = t.parent; o; o = o.parent)
      if (n.includes(o)) {
        n.splice(e, 1);
        break;
      }
  }
  return n;
}
var He;
(function(n) {
  n[n.DISCONNECTED = 1] = "DISCONNECTED", n[n.PRECEDING = 2] = "PRECEDING", n[n.FOLLOWING = 4] = "FOLLOWING", n[n.CONTAINS = 8] = "CONTAINS", n[n.CONTAINED_BY = 16] = "CONTAINED_BY";
})(He || (He = {}));
function pu(n, e) {
  const t = [], o = [];
  if (n === e)
    return 0;
  let i = kt(n) ? n : n.parent;
  for (; i; )
    t.unshift(i), i = i.parent;
  for (i = kt(e) ? e : e.parent; i; )
    o.unshift(i), i = i.parent;
  const s = Math.min(t.length, o.length);
  let r = 0;
  for (; r < s && t[r] === o[r]; )
    r++;
  if (r === 0)
    return He.DISCONNECTED;
  const a = t[r - 1], u = a.children, l = t[r], c = o[r];
  return u.indexOf(l) > u.indexOf(c) ? a === e ? He.FOLLOWING | He.CONTAINED_BY : He.FOLLOWING : a === n ? He.PRECEDING | He.CONTAINS : He.PRECEDING;
}
function kp(n) {
  return n = n.filter((e, t, o) => !o.includes(e, t + 1)), n.sort((e, t) => {
    const o = pu(e, t);
    return o & He.PRECEDING ? -1 : o & He.FOLLOWING ? 1 : 0;
  }), n;
}
function os(n) {
  const e = oo(Bp, n);
  return e ? e.name === "feed" ? Sp(e) : Cp(e) : null;
}
function Sp(n) {
  var e;
  const t = n.children, o = {
    type: "atom",
    items: an("entry", t).map((r) => {
      var a;
      const { children: u } = r, l = { media: fu(u) };
      Ne(l, "id", "id", u), Ne(l, "title", "title", u);
      const c = (a = oo("link", u)) === null || a === void 0 ? void 0 : a.attribs.href;
      c && (l.link = c);
      const d = xt("summary", u) || xt("content", u);
      d && (l.description = d);
      const h = xt("updated", u);
      return h && (l.pubDate = new Date(h)), l;
    })
  };
  Ne(o, "id", "id", t), Ne(o, "title", "title", t);
  const i = (e = oo("link", t)) === null || e === void 0 ? void 0 : e.attribs.href;
  i && (o.link = i), Ne(o, "description", "subtitle", t);
  const s = xt("updated", t);
  return s && (o.updated = new Date(s)), Ne(o, "author", "email", t, !0), o;
}
function Cp(n) {
  var e, t;
  const o = (t = (e = oo("channel", n.children)) === null || e === void 0 ? void 0 : e.children) !== null && t !== void 0 ? t : [], i = {
    type: n.name.substr(0, 3),
    id: "",
    items: an("item", n.children).map((r) => {
      const { children: a } = r, u = { media: fu(a) };
      Ne(u, "id", "guid", a), Ne(u, "title", "title", a), Ne(u, "link", "link", a), Ne(u, "description", "description", a);
      const l = xt("pubDate", a) || xt("dc:date", a);
      return l && (u.pubDate = new Date(l)), u;
    })
  };
  Ne(i, "title", "title", o), Ne(i, "link", "link", o), Ne(i, "description", "description", o);
  const s = xt("lastBuildDate", o);
  return s && (i.updated = new Date(s)), Ne(i, "author", "managingEditor", o, !0), i;
}
const Ep = ["url", "type", "lang"], Tp = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function fu(n) {
  return an("media:content", n).map((e) => {
    const { attribs: t } = e, o = {
      medium: t.medium,
      isDefault: !!t.isDefault
    };
    for (const i of Ep)
      t[i] && (o[i] = t[i]);
    for (const i of Tp)
      t[i] && (o[i] = parseInt(t[i], 10));
    return t.expression && (o.expression = t.expression), o;
  });
}
function oo(n, e) {
  return an(n, e, !0, 1)[0];
}
function xt(n, e, t = !1) {
  return to(an(n, e, t, 1)).trim();
}
function Ne(n, e, t, o, i = !1) {
  const s = xt(t, o, i);
  s && (n[e] = s);
}
function Bp(n) {
  return n === "rss" || n === "feed" || n === "rdf:RDF";
}
const is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get DocumentPosition() {
    return He;
  },
  append: dp,
  appendChild: cp,
  compareDocumentPosition: pu,
  existsOne: cu,
  filter: yo,
  find: lu,
  findAll: gp,
  findOne: ns,
  findOneChild: fp,
  getAttributeValue: ip,
  getChildren: au,
  getElementById: vp,
  getElements: xp,
  getElementsByTagName: an,
  getElementsByTagType: yp,
  getFeed: os,
  getInnerHTML: np,
  getName: rp,
  getOuterHTML: ru,
  getParent: uu,
  getSiblings: op,
  getText: Kn,
  hasAttrib: sp,
  hasChildren: kt,
  innerText: mi,
  isCDATA: vo,
  isComment: es,
  isDocument: nu,
  isTag: _e,
  isText: Ht,
  nextElementSibling: ap,
  prepend: pp,
  prependChild: hp,
  prevElementSibling: up,
  removeElement: Nn,
  removeSubsets: wp,
  replaceElement: lp,
  testElement: mp,
  textContent: to,
  uniqueSort: kp
}, Symbol.toStringTag, { value: "Module" }));
function gu(n, e) {
  const t = new En(void 0, e);
  return new xo(t, e).end(n), t.root;
}
function bu(n, e) {
  return gu(n, e).children;
}
function Ap(n, e, t) {
  const o = new En((i) => n(i, o.root), e, t);
  return new xo(o, e);
}
function Lp(n, e, t) {
  const o = new En(n, e, t);
  return new xo(o, e);
}
const Np = { xmlMode: !0 };
function Mp(n, e = Np) {
  return os(bu(n, e));
}
const Ip = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DefaultHandler: En,
  DomHandler: En,
  DomUtils: is,
  ElementType: P0,
  Parser: xo,
  get QuoteType() {
    return Ue;
  },
  Tokenizer: qa,
  createDocumentStream: Ap,
  createDomStream: Lp,
  getFeed: os,
  parseDOM: bu,
  parseDocument: gu,
  parseFeed: Mp
}, Symbol.toStringTag, { value: "Module" })), St = -1, J = 1, me = 2, Ce = 3, ut = 4, lt = 8, Nt = 9, nn = 10, st = 11, Rp = /* @__PURE__ */ new Set(["ARTICLE", "ASIDE", "BLOCKQUOTE", "BODY", "BR", "BUTTON", "CANVAS", "CAPTION", "COL", "COLGROUP", "DD", "DIV", "DL", "DT", "EMBED", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "UL", "OL", "P"]), _p = -1, Op = 1, Dp = 4, Pp = 8, Hp = 128, Fp = 1, br = 2, mr = 4, qp = 8, $p = 16, Up = 32, io = "http://www.w3.org/2000/svg", {
  assign: jp,
  create: Vp,
  defineProperties: zp,
  entries: Gp,
  getOwnPropertyDescriptors: jg,
  keys: Wp,
  setPrototypeOf: Be
} = Object, Rt = String, Re = (n) => n.nodeType === J ? n[F] : n, un = ({ ownerDocument: n }) => n[rn].ignoreCase, Ge = (n, e) => {
  n[N] = e, e[he] = n;
}, mu = (n, e, t) => {
  Ge(n, e), Ge(Re(e), t);
}, Kp = (n, e, t, o) => {
  Ge(n, e), Ge(Re(t), o);
}, wo = (n, e, t) => {
  Ge(n, e), Ge(e, t);
}, xi = ({ localName: n, ownerDocument: e }) => e[rn].ignoreCase ? n.toUpperCase() : n, xu = (n, e) => {
  n && (n[N] = e), e && (e[he] = n);
}, vt = /* @__PURE__ */ new WeakMap();
let ko = !1;
const Xt = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), So = (n, e, t, o) => {
  ko && Ft.has(n) && n.attributeChangedCallback && n.constructor.observedAttributes.includes(e) && n.attributeChangedCallback(e, t, o);
}, vu = (n, e) => (t) => {
  if (Ft.has(t)) {
    const o = Ft.get(t);
    o.connected !== e && t.isConnected === e && (o.connected = e, n in t && t[n]());
  }
}, xr = vu("connectedCallback", !0), vi = (n) => {
  if (ko) {
    xr(n), vt.has(n) && (n = vt.get(n).shadowRoot);
    let { [N]: e, [F]: t } = n;
    for (; e !== t; )
      e.nodeType === J && xr(e), e = e[N];
  }
}, vr = vu("disconnectedCallback", !1), Zp = (n) => {
  if (ko) {
    vr(n), vt.has(n) && (n = vt.get(n).shadowRoot);
    let { [N]: e, [F]: t } = n;
    for (; e !== t; )
      e.nodeType === J && vr(e), e = e[N];
  }
};
class Yp {
  /**
   * @param {Document} ownerDocument
   */
  constructor(e) {
    this.ownerDocument = e, this.registry = /* @__PURE__ */ new Map(), this.waiting = /* @__PURE__ */ new Map(), this.active = !1;
  }
  /**
   * @param {string} localName the custom element definition name
   * @param {Function} Class the custom element **Class** definition
   * @param {object?} options the optional object with an `extends` property
   */
  define(e, t, o = {}) {
    const { ownerDocument: i, registry: s, waiting: r } = this;
    if (s.has(e))
      throw new Error("unable to redefine " + e);
    if (Xt.has(t))
      throw new Error("unable to redefine the same class: " + t);
    this.active = ko = !0;
    const { extends: a } = o;
    Xt.set(t, {
      ownerDocument: i,
      options: { is: a ? e : "" },
      localName: a || e
    });
    const u = a ? (l) => l.localName === a && l.getAttribute("is") === e : (l) => l.localName === e;
    if (s.set(e, { Class: t, check: u }), r.has(e)) {
      for (const l of r.get(e))
        l(t);
      r.delete(e);
    }
    i.querySelectorAll(
      a ? `${a}[is="${e}"]` : e
    ).forEach(this.upgrade, this);
  }
  /**
   * @param {Element} element
   */
  upgrade(e) {
    if (Ft.has(e))
      return;
    const { ownerDocument: t, registry: o } = this, i = e.getAttribute("is") || e.localName;
    if (o.has(i)) {
      const { Class: s, check: r } = o.get(i);
      if (r(e)) {
        const { attributes: a, isConnected: u } = e;
        for (const c of a)
          e.removeAttributeNode(c);
        const l = Gp(e);
        for (const [c] of l)
          delete e[c];
        Be(e, s.prototype), t[yn] = { element: e, values: l }, new s(t, i), Ft.set(e, { connected: u });
        for (const c of a)
          e.setAttributeNode(c);
        u && e.connectedCallback && e.connectedCallback();
      }
    }
  }
  /**
   * @param {string} localName the custom element definition name
   */
  whenDefined(e) {
    const { registry: t, waiting: o } = this;
    return new Promise((i) => {
      t.has(e) ? i(t.get(e).Class) : (o.has(e) || o.set(e, []), o.get(e).push(i));
    });
  }
  /**
   * @param {string} localName the custom element definition name
   * @returns {Function?} the custom element **Class**, if any
   */
  get(e) {
    const t = this.registry.get(e);
    return t && t.Class;
  }
  /**
   * @param {Function} Class **Class** of custom element
   * @returns {string?} found tag name or null
   */
  getName(e) {
    if (Xt.has(e)) {
      const { localName: t } = Xt.get(e);
      return t;
    }
    return null;
  }
}
const { Parser: Xp } = Ip, Tt = (n, e, t) => {
  const o = n[F];
  return e.parentNode = n, mu(o[he], e, o), t && e.nodeType === J && vi(e), e;
}, Jp = (n, e, t, o, i) => {
  t[ne] = o, t.ownerElement = n, wo(e[he], t, e), t.name === "class" && (n.className = o), i && So(n, t.name, null, o);
}, yu = (n, e, t) => {
  const { active: o, registry: i } = n[qe];
  let s = n, r = null, a = !1;
  const u = new Xp({
    // <!DOCTYPE ...>
    onprocessinginstruction(l, c) {
      l.toLowerCase() === "!doctype" && (n.doctype = c.slice(l.length).trim());
    },
    // <tagName>
    onopentag(l, c) {
      let d = !0;
      if (e) {
        if (r)
          s = Tt(s, n.createElementNS(io, l), o), s.ownerSVGElement = r, d = !1;
        else if (l === "svg" || l === "SVG")
          r = n.createElementNS(io, l), s = Tt(s, r, o), d = !1;
        else if (o) {
          const g = l.includes("-") ? l : c.is || "";
          if (g && i.has(g)) {
            const { Class: f } = i.get(g);
            s = Tt(s, new f(), o), delete c.is, d = !1;
          }
        }
      }
      d && (s = Tt(s, n.createElement(l), !1));
      let h = s[F];
      for (const g of Wp(c))
        Jp(s, h, n.createAttribute(g), c[g], o);
    },
    // #text, #comment
    oncomment(l) {
      Tt(s, n.createComment(l), o);
    },
    ontext(l) {
      a ? Tt(s, n.createCDATASection(l), o) : Tt(s, n.createTextNode(l), o);
    },
    // #cdata
    oncdatastart() {
      a = !0;
    },
    oncdataend() {
      a = !1;
    },
    // </tagName>
    onclosetag() {
      e && s === r && (r = null), s = s.parentNode;
    }
  }, {
    lowerCaseAttributeNames: !1,
    decodeEntities: !0,
    xmlMode: !e
  });
  return u.write(t), u.end(), n;
}, so = /* @__PURE__ */ new Map(), fe = (n, e) => {
  for (const t of [].concat(n))
    so.set(t, e), so.set(t.toUpperCase(), e);
};
var yr = {};
const Qp = {}, ef = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qp
}, Symbol.toStringTag, { value: "Module" })), tf = /* @__PURE__ */ Zd(ef);
var yi;
try {
  const { performance: n } = tf;
  yi = yr.performance = n;
} catch {
  yi = yr.performance = { now() {
    return +/* @__PURE__ */ new Date();
  } };
}
const wu = ({ [N]: n, [F]: e }, t) => {
  for (; n !== e; ) {
    switch (n.nodeType) {
      case me:
        ku(n, t);
        break;
      case Ce:
      case lt:
      case ut:
        Su(n, t);
        break;
      case J:
        Eu(n, t), n = Re(n);
        break;
      case nn:
        Cu(n, t);
        break;
    }
    n = n[N];
  }
  const o = t.length - 1, i = t[o];
  typeof i == "number" && i < 0 ? t[o] += St : t.push(St);
}, ku = (n, e) => {
  e.push(me, n.name);
  const t = n[ne].trim();
  t && e.push(t);
}, Su = (n, e) => {
  const t = n[ne];
  t.trim() && e.push(n.nodeType, t);
}, nf = (n, e) => {
  e.push(n.nodeType), wu(n, e);
}, Cu = ({ name: n, publicId: e, systemId: t }, o) => {
  o.push(nn, n), e && o.push(e), t && o.push(t);
}, Eu = (n, e) => {
  e.push(J, n.localName), wu(n, e);
}, Tu = (n, e, t, o, i, s) => ({ type: n, target: e, addedNodes: t, removedNodes: o, attributeName: i, oldValue: s }), wr = (n, e, t, o, i, s) => {
  if (!o || o.includes(t)) {
    const { callback: r, records: a, scheduled: u } = n;
    a.push(Tu(
      "attributes",
      e,
      [],
      [],
      t,
      i ? s : void 0
    )), u || (n.scheduled = !0, Promise.resolve().then(() => {
      n.scheduled = !1, r(a.splice(0), n);
    }));
  }
}, ss = (n, e, t) => {
  const { ownerDocument: o } = n, { active: i, observers: s } = o[bt];
  if (i) {
    for (const r of s)
      for (const [
        a,
        {
          childList: u,
          subtree: l,
          attributes: c,
          attributeFilter: d,
          attributeOldValue: h
        }
      ] of r.nodes)
        if (u) {
          if (l && (a === o || a.contains(n)) || !l && a.children.includes(n)) {
            wr(
              r,
              n,
              e,
              d,
              h,
              t
            );
            break;
          }
        } else if (c && a === n) {
          wr(
            r,
            n,
            e,
            d,
            h,
            t
          );
          break;
        }
  }
}, wn = (n, e) => {
  const { ownerDocument: t } = n, { active: o, observers: i } = t[bt];
  if (o) {
    for (const s of i)
      for (const [r, { subtree: a, childList: u, characterData: l }] of s.nodes)
        if (u && (e && (r === e || /* c8 ignore next */
        a && r.contains(e)) || !e && (a && (r === t || /* c8 ignore next */
        r.contains(n)) || !a && r[l ? "childNodes" : "children"].includes(n)))) {
          const { callback: c, records: d, scheduled: h } = s;
          d.push(Tu(
            "childList",
            r,
            e ? [] : [n],
            e ? [n] : []
          )), h || (s.scheduled = !0, Promise.resolve().then(() => {
            s.scheduled = !1, c(d.splice(0), s);
          }));
          break;
        }
  }
};
class of {
  constructor(e) {
    const t = /* @__PURE__ */ new Set();
    this.observers = t, this.active = !1, this.class = class {
      constructor(i) {
        this.callback = i, this.nodes = /* @__PURE__ */ new Map(), this.records = [], this.scheduled = !1;
      }
      disconnect() {
        this.records.splice(0), this.nodes.clear(), t.delete(this), e[bt].active = !!t.size;
      }
      /**
       * @param {Element} target
       * @param {MutationObserverInit} options
       */
      observe(i, s = {
        subtree: !1,
        childList: !1,
        attributes: !1,
        attributeFilter: null,
        attributeOldValue: !1,
        characterData: !1
        // TODO: not implemented yet
        // characterDataOldValue: false
      }) {
        ("attributeOldValue" in s || "attributeFilter" in s) && (s.attributes = !0), s.childList = !!s.childList, s.subtree = !!s.subtree, this.nodes.set(i, s), t.add(this), e[bt].active = !0;
      }
      /**
       * @returns {MutationRecord[]}
       */
      takeRecords() {
        return this.records.splice(0);
      }
    };
  }
}
const sf = /* @__PURE__ */ new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "class",
  "contenteditable",
  "controls",
  "default",
  "defer",
  "disabled",
  "draggable",
  "formnovalidate",
  "hidden",
  "id",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected",
  "style",
  "truespeed"
]), wi = (n, e) => {
  const { [ne]: t, name: o } = e;
  e.ownerElement = n, wo(n, e, n[N]), o === "class" && (n.className = t), ss(n, o, null), So(n, o, null, t);
}, kr = (n, e) => {
  const { [ne]: t, name: o } = e;
  Ge(e[he], e[N]), e.ownerElement = e[he] = e[N] = null, o === "class" && (n[Yt] = null), ss(n, o, t), So(n, o, t, null);
}, Q = {
  get(n, e) {
    return n.hasAttribute(e);
  },
  set(n, e, t) {
    t ? n.setAttribute(e, "") : n.removeAttribute(e);
  }
}, yt = {
  get(n, e) {
    return parseFloat(n.getAttribute(e) || 0);
  },
  set(n, e, t) {
    n.setAttribute(e, t);
  }
}, S = {
  get(n, e) {
    return n.getAttribute(e) || "";
  },
  set(n, e, t) {
    n.setAttribute(e, t);
  }
}, Zn = /* @__PURE__ */ new WeakMap();
function rf(n, e) {
  return typeof e == "function" ? e.call(n.target, n) : e.handleEvent(n), n._stopImmediatePropagationFlag;
}
function af({ currentTarget: n, target: e }) {
  const t = Zn.get(n);
  if (t && t.has(this.type)) {
    const o = t.get(this.type);
    n === e ? this.eventPhase = this.AT_TARGET : this.eventPhase = this.BUBBLING_PHASE, this.currentTarget = n, this.target = e;
    for (const [i, s] of o)
      if (s && s.once && o.delete(i), rf(this, i))
        break;
    return delete this.currentTarget, delete this.target, this.cancelBubble;
  }
}
class rs {
  constructor() {
    Zn.set(this, /* @__PURE__ */ new Map());
  }
  /**
   * @protected
   */
  _getParent() {
    return null;
  }
  addEventListener(e, t, o) {
    const i = Zn.get(this);
    i.has(e) || i.set(e, /* @__PURE__ */ new Map()), i.get(e).set(t, o);
  }
  removeEventListener(e, t) {
    const o = Zn.get(this);
    if (o.has(e)) {
      const i = o.get(e);
      i.delete(t) && !i.size && o.delete(e);
    }
  }
  dispatchEvent(e) {
    let t = this;
    for (e.eventPhase = e.CAPTURING_PHASE; t; )
      t.dispatchEvent && e._path.push({ currentTarget: t, target: this }), t = e.bubbles && t._getParent && t._getParent();
    return e._path.some(af, e), e._path = [], e.eventPhase = e.NONE, !e.defaultPrevented;
  }
}
class Xe extends Array {
  item(e) {
    return e < this.length ? this[e] : null;
  }
}
const Sr = ({ parentNode: n }) => {
  let e = 0;
  for (; n; )
    e++, n = n.parentNode;
  return e;
};
let Ut = class extends rs {
  static get ELEMENT_NODE() {
    return J;
  }
  static get ATTRIBUTE_NODE() {
    return me;
  }
  static get TEXT_NODE() {
    return Ce;
  }
  static get CDATA_SECTION_NODE() {
    return ut;
  }
  static get COMMENT_NODE() {
    return lt;
  }
  static get DOCUMENT_NODE() {
    return Nt;
  }
  static get DOCUMENT_FRAGMENT_NODE() {
    return st;
  }
  static get DOCUMENT_TYPE_NODE() {
    return nn;
  }
  constructor(e, t, o) {
    super(), this.ownerDocument = e, this.localName = t, this.nodeType = o, this.parentNode = null, this[N] = null, this[he] = null;
  }
  get ELEMENT_NODE() {
    return J;
  }
  get ATTRIBUTE_NODE() {
    return me;
  }
  get TEXT_NODE() {
    return Ce;
  }
  get CDATA_SECTION_NODE() {
    return ut;
  }
  get COMMENT_NODE() {
    return lt;
  }
  get DOCUMENT_NODE() {
    return Nt;
  }
  get DOCUMENT_FRAGMENT_NODE() {
    return st;
  }
  get DOCUMENT_TYPE_NODE() {
    return nn;
  }
  get baseURI() {
    const e = this.nodeType === Nt ? this : this.ownerDocument;
    if (e) {
      const t = e.querySelector("base");
      if (t)
        return t.getAttribute("href");
      const { location: o } = e.defaultView;
      if (o)
        return o.href;
    }
    return null;
  }
  /* c8 ignore start */
  // mixin: node
  get isConnected() {
    return !1;
  }
  get nodeName() {
    return this.localName;
  }
  get parentElement() {
    return null;
  }
  get previousSibling() {
    return null;
  }
  get previousElementSibling() {
    return null;
  }
  get nextSibling() {
    return null;
  }
  get nextElementSibling() {
    return null;
  }
  get childNodes() {
    return new Xe();
  }
  get firstChild() {
    return null;
  }
  get lastChild() {
    return null;
  }
  // default values
  get nodeValue() {
    return null;
  }
  set nodeValue(e) {
  }
  get textContent() {
    return null;
  }
  set textContent(e) {
  }
  normalize() {
  }
  cloneNode() {
    return null;
  }
  contains() {
    return !1;
  }
  /**
   * Inserts a node before a reference node as a child of this parent node.
   * @param {Node} newNode The node to be inserted.
   * @param {Node} referenceNode The node before which newNode is inserted. If this is null, then newNode is inserted at the end of node's child nodes.
   * @returns The added child
   */
  // eslint-disable-next-line no-unused-vars
  insertBefore(e, t) {
    return e;
  }
  /**
   * Adds a node to the end of the list of children of this node.
   * @param {Node} child The node to append to the given parent node.
   * @returns The appended child.
   */
  appendChild(e) {
    return e;
  }
  /**
   * Replaces a child node within this node
   * @param {Node} newChild The new node to replace oldChild.
   * @param {Node} oldChild The child to be replaced.
   * @returns The replaced Node. This is the same node as oldChild.
   */
  replaceChild(e, t) {
    return t;
  }
  /**
   * Removes a child node from the DOM.
   * @param {Node} child A Node that is the child node to be removed from the DOM.
   * @returns The removed node.
   */
  removeChild(e) {
    return e;
  }
  toString() {
    return "";
  }
  /* c8 ignore stop */
  hasChildNodes() {
    return !!this.lastChild;
  }
  isSameNode(e) {
    return this === e;
  }
  // TODO: attributes?
  compareDocumentPosition(e) {
    let t = 0;
    if (this !== e) {
      let o = Sr(this), i = Sr(e);
      if (o < i)
        t += mr, this.contains(e) && (t += $p);
      else if (i < o)
        t += br, e.contains(this) && (t += qp);
      else if (o && i) {
        const { childNodes: s } = this.parentNode;
        s.indexOf(this) < s.indexOf(e) ? t += mr : t += br;
      }
      (!o || !i) && (t += Up, t += Fp);
    }
    return t;
  }
  isEqualNode(e) {
    if (this === e)
      return !0;
    if (this.nodeType === e.nodeType) {
      switch (this.nodeType) {
        case Nt:
        case st: {
          const t = this.childNodes, o = e.childNodes;
          return t.length === o.length && t.every((i, s) => i.isEqualNode(o[s]));
        }
      }
      return this.toString() === e.toString();
    }
    return !1;
  }
  /**
   * @protected
   */
  _getParent() {
    return this.parentNode;
  }
  /**
   * Calling it on an element inside a standard web page will return an HTMLDocument object representing the entire page (or <iframe>).
   * Calling it on an element inside a shadow DOM will return the associated ShadowRoot.
   * @return {ShadowRoot | HTMLDocument}
   */
  getRootNode() {
    let e = this;
    for (; e.parentNode; )
      e = e.parentNode;
    return e;
  }
};
const uf = /"/g;
let Mn = class Bu extends Ut {
  constructor(e, t, o = "") {
    super(e, t, me), this.ownerElement = null, this.name = Rt(t), this[ne] = Rt(o), this[eo] = !1;
  }
  get value() {
    return this[ne];
  }
  set value(e) {
    const { [ne]: t, name: o, ownerElement: i } = this;
    this[ne] = Rt(e), this[eo] = !0, i && (ss(i, o, t), So(i, o, t, this[ne]));
  }
  cloneNode() {
    const { ownerDocument: e, name: t, [ne]: o } = this;
    return new Bu(e, t, o);
  }
  toString() {
    const { name: e, [ne]: t } = this;
    return sf.has(e) && !t && un(this) ? e : `${e}="${t.replace(uf, "&quot;")}"`;
  }
  toJSON() {
    const e = [];
    return ku(this, e), e;
  }
};
const Au = ({ ownerDocument: n, parentNode: e }) => {
  for (; e; ) {
    if (e === n)
      return !0;
    e = e.parentNode || e.host;
  }
  return !1;
}, Lu = ({ parentNode: n }) => {
  if (n)
    switch (n.nodeType) {
      case Nt:
      case st:
        return null;
    }
  return n;
}, Tn = ({ [he]: n }) => {
  switch (n ? n.nodeType : 0) {
    case St:
      return n[Le];
    case Ce:
    case lt:
    case ut:
      return n;
  }
  return null;
}, _t = (n) => {
  const e = Re(n)[N];
  return e && (e.nodeType === St ? null : e);
}, as = (n) => {
  let e = _t(n);
  for (; e && e.nodeType !== J; )
    e = _t(e);
  return e;
}, Nu = (n) => {
  let e = Tn(n);
  for (; e && e.nodeType !== J; )
    e = Tn(e);
  return e;
}, us = (n, e) => {
  const t = n.createDocumentFragment();
  return t.append(...e), t;
}, Mu = (n, e) => {
  const { ownerDocument: t, parentNode: o } = n;
  o && o.insertBefore(
    us(t, e),
    n
  );
}, Iu = (n, e) => {
  const { ownerDocument: t, parentNode: o } = n;
  o && o.insertBefore(
    us(t, e),
    Re(n)[N]
  );
}, ls = (n, e) => {
  const { ownerDocument: t, parentNode: o } = n;
  o && (e.includes(n) && ls(n, [n = n.cloneNode()]), o.insertBefore(
    us(t, e),
    n
  ), n.remove());
}, Ru = (n, e, t) => {
  const { parentNode: o, nodeType: i } = e;
  (n || t) && (xu(n, t), e[he] = null, Re(e)[N] = null), o && (e.parentNode = null, wn(e, o), i === J && Zp(e));
};
let In = class extends Ut {
  constructor(e, t, o, i) {
    super(e, t, o), this[ne] = Rt(i);
  }
  // <Mixins>
  get isConnected() {
    return Au(this);
  }
  get parentElement() {
    return Lu(this);
  }
  get previousSibling() {
    return Tn(this);
  }
  get nextSibling() {
    return _t(this);
  }
  get previousElementSibling() {
    return Nu(this);
  }
  get nextElementSibling() {
    return as(this);
  }
  before(...e) {
    Mu(this, e);
  }
  after(...e) {
    Iu(this, e);
  }
  replaceWith(...e) {
    ls(this, e);
  }
  remove() {
    Ru(this[he], this, this[N]);
  }
  // </Mixins>
  // CharacterData only
  /* c8 ignore start */
  get data() {
    return this[ne];
  }
  set data(e) {
    this[ne] = Rt(e), wn(this, this.parentNode);
  }
  get nodeValue() {
    return this.data;
  }
  set nodeValue(e) {
    this.data = e;
  }
  get textContent() {
    return this.data;
  }
  set textContent(e) {
    this.data = e;
  }
  get length() {
    return this.data.length;
  }
  substringData(e, t) {
    return this.data.substr(e, t);
  }
  appendData(e) {
    this.data += e;
  }
  insertData(e, t) {
    const { data: o } = this;
    this.data = o.slice(0, e) + t + o.slice(e);
  }
  deleteData(e, t) {
    const { data: o } = this;
    this.data = o.slice(0, e) + o.slice(e + t);
  }
  replaceData(e, t, o) {
    const { data: i } = this;
    this.data = i.slice(0, e) + o + i.slice(e + t);
  }
  /* c8 ignore stop */
  toJSON() {
    const e = [];
    return Su(this, e), e;
  }
}, cs = class _u extends In {
  constructor(e, t = "") {
    super(e, "#cdatasection", ut, t);
  }
  cloneNode() {
    const { ownerDocument: e, [ne]: t } = this;
    return new _u(e, t);
  }
  toString() {
    return `<![CDATA[${this[ne]}]]>`;
  }
}, ds = class Ou extends In {
  constructor(e, t = "") {
    super(e, "#comment", lt, t);
  }
  cloneNode() {
    const { ownerDocument: e, [ne]: t } = this;
    return new Ou(e, t);
  }
  toString() {
    return `<!--${this[ne]}-->`;
  }
};
var lf = {
  trueFunc: function() {
    return !0;
  },
  falseFunc: function() {
    return !1;
  }
};
const V = /* @__PURE__ */ Ln(lf);
var $;
(function(n) {
  n.Attribute = "attribute", n.Pseudo = "pseudo", n.PseudoElement = "pseudo-element", n.Tag = "tag", n.Universal = "universal", n.Adjacent = "adjacent", n.Child = "child", n.Descendant = "descendant", n.Parent = "parent", n.Sibling = "sibling", n.ColumnCombinator = "column-combinator";
})($ || ($ = {}));
var le;
(function(n) {
  n.Any = "any", n.Element = "element", n.End = "end", n.Equals = "equals", n.Exists = "exists", n.Hyphen = "hyphen", n.Not = "not", n.Start = "start";
})(le || (le = {}));
const Cr = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, cf = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, df = /* @__PURE__ */ new Map([
  [126, le.Element],
  [94, le.Start],
  [36, le.End],
  [42, le.Any],
  [33, le.Not],
  [124, le.Hyphen]
]), hf = /* @__PURE__ */ new Set([
  "has",
  "not",
  "matches",
  "is",
  "where",
  "host",
  "host-context"
]);
function pf(n) {
  switch (n.type) {
    case $.Adjacent:
    case $.Child:
    case $.Descendant:
    case $.Parent:
    case $.Sibling:
    case $.ColumnCombinator:
      return !0;
    default:
      return !1;
  }
}
const ff = /* @__PURE__ */ new Set(["contains", "icontains"]);
function gf(n, e, t) {
  const o = parseInt(e, 16) - 65536;
  return o !== o || t ? e : o < 0 ? (
    // BMP codepoint
    String.fromCharCode(o + 65536)
  ) : (
    // Supplemental Plane codepoint (surrogate pair)
    String.fromCharCode(o >> 10 | 55296, o & 1023 | 56320)
  );
}
function pn(n) {
  return n.replace(cf, gf);
}
function Po(n) {
  return n === 39 || n === 34;
}
function Er(n) {
  return n === 32 || n === 9 || n === 10 || n === 12 || n === 13;
}
function Du(n) {
  const e = [], t = Pu(e, `${n}`, 0);
  if (t < n.length)
    throw new Error(`Unmatched selector: ${n.slice(t)}`);
  return e;
}
function Pu(n, e, t) {
  let o = [];
  function i(h) {
    const g = e.slice(t + h).match(Cr);
    if (!g)
      throw new Error(`Expected name, found ${e.slice(t)}`);
    const [f] = g;
    return t += h + f.length, pn(f);
  }
  function s(h) {
    for (t += h; t < e.length && Er(e.charCodeAt(t)); )
      t++;
  }
  function r() {
    t += 1;
    const h = t;
    let g = 1;
    for (; g > 0 && t < e.length; t++)
      e.charCodeAt(t) === 40 && !a(t) ? g++ : e.charCodeAt(t) === 41 && !a(t) && g--;
    if (g)
      throw new Error("Parenthesis not matched");
    return pn(e.slice(h, t - 1));
  }
  function a(h) {
    let g = 0;
    for (; e.charCodeAt(--h) === 92; )
      g++;
    return (g & 1) === 1;
  }
  function u() {
    if (o.length > 0 && pf(o[o.length - 1]))
      throw new Error("Did not expect successive traversals.");
  }
  function l(h) {
    if (o.length > 0 && o[o.length - 1].type === $.Descendant) {
      o[o.length - 1].type = h;
      return;
    }
    u(), o.push({ type: h });
  }
  function c(h, g) {
    o.push({
      type: $.Attribute,
      name: h,
      action: g,
      value: i(1),
      namespace: null,
      ignoreCase: "quirks"
    });
  }
  function d() {
    if (o.length && o[o.length - 1].type === $.Descendant && o.pop(), o.length === 0)
      throw new Error("Empty sub-selector");
    n.push(o);
  }
  if (s(0), e.length === t)
    return t;
  e:
    for (; t < e.length; ) {
      const h = e.charCodeAt(t);
      switch (h) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
          (o.length === 0 || o[0].type !== $.Descendant) && (u(), o.push({ type: $.Descendant })), s(1);
          break;
        }
        case 62: {
          l($.Child), s(1);
          break;
        }
        case 60: {
          l($.Parent), s(1);
          break;
        }
        case 126: {
          l($.Sibling), s(1);
          break;
        }
        case 43: {
          l($.Adjacent), s(1);
          break;
        }
        case 46: {
          c("class", le.Element);
          break;
        }
        case 35: {
          c("id", le.Equals);
          break;
        }
        case 91: {
          s(1);
          let g, f = null;
          e.charCodeAt(t) === 124 ? g = i(1) : e.startsWith("*|", t) ? (f = "*", g = i(2)) : (g = i(0), e.charCodeAt(t) === 124 && e.charCodeAt(t + 1) !== 61 && (f = g, g = i(1))), s(0);
          let v = le.Exists;
          const p = df.get(e.charCodeAt(t));
          if (p) {
            if (v = p, e.charCodeAt(t + 1) !== 61)
              throw new Error("Expected `=`");
            s(2);
          } else
            e.charCodeAt(t) === 61 && (v = le.Equals, s(1));
          let k = "", x = null;
          if (v !== "exists") {
            if (Po(e.charCodeAt(t))) {
              const L = e.charCodeAt(t);
              let I = t + 1;
              for (; I < e.length && (e.charCodeAt(I) !== L || a(I)); )
                I += 1;
              if (e.charCodeAt(I) !== L)
                throw new Error("Attribute value didn't end");
              k = pn(e.slice(t + 1, I)), t = I + 1;
            } else {
              const L = t;
              for (; t < e.length && (!Er(e.charCodeAt(t)) && e.charCodeAt(t) !== 93 || a(t)); )
                t += 1;
              k = pn(e.slice(L, t));
            }
            s(0);
            const z = e.charCodeAt(t) | 32;
            z === 115 ? (x = !1, s(1)) : z === 105 && (x = !0, s(1));
          }
          if (e.charCodeAt(t) !== 93)
            throw new Error("Attribute selector didn't terminate");
          t += 1;
          const P = {
            type: $.Attribute,
            name: g,
            action: v,
            value: k,
            namespace: f,
            ignoreCase: x
          };
          o.push(P);
          break;
        }
        case 58: {
          if (e.charCodeAt(t + 1) === 58) {
            o.push({
              type: $.PseudoElement,
              name: i(2).toLowerCase(),
              data: e.charCodeAt(t) === 40 ? r() : null
            });
            continue;
          }
          const g = i(1).toLowerCase();
          let f = null;
          if (e.charCodeAt(t) === 40)
            if (hf.has(g)) {
              if (Po(e.charCodeAt(t + 1)))
                throw new Error(`Pseudo-selector ${g} cannot be quoted`);
              if (f = [], t = Pu(f, e, t + 1), e.charCodeAt(t) !== 41)
                throw new Error(`Missing closing parenthesis in :${g} (${e})`);
              t += 1;
            } else {
              if (f = r(), ff.has(g)) {
                const v = f.charCodeAt(0);
                v === f.charCodeAt(f.length - 1) && Po(v) && (f = f.slice(1, -1));
              }
              f = pn(f);
            }
          o.push({ type: $.Pseudo, name: g, data: f });
          break;
        }
        case 44: {
          d(), o = [], s(1);
          break;
        }
        default: {
          if (e.startsWith("/*", t)) {
            const v = e.indexOf("*/", t + 2);
            if (v < 0)
              throw new Error("Comment was not terminated");
            t = v + 2, o.length === 0 && s(0);
            break;
          }
          let g = null, f;
          if (h === 42)
            t += 1, f = "*";
          else if (h === 124) {
            if (f = "", e.charCodeAt(t + 1) === 124) {
              l($.ColumnCombinator), s(2);
              break;
            }
          } else if (Cr.test(e.slice(t)))
            f = i(0);
          else
            break e;
          e.charCodeAt(t) === 124 && e.charCodeAt(t + 1) !== 124 && (g = f, e.charCodeAt(t + 1) === 42 ? (f = "*", t += 2) : f = i(1)), o.push(f === "*" ? { type: $.Universal, namespace: g } : { type: $.Tag, name: f, namespace: g });
        }
      }
    }
  return d(), t;
}
const Hu = /* @__PURE__ */ new Map([
  [$.Universal, 50],
  [$.Tag, 30],
  [$.Attribute, 1],
  [$.Pseudo, 0]
]);
function hs(n) {
  return !Hu.has(n.type);
}
const bf = /* @__PURE__ */ new Map([
  [le.Exists, 10],
  [le.Equals, 8],
  [le.Not, 7],
  [le.Start, 6],
  [le.End, 6],
  [le.Any, 5]
]);
function mf(n) {
  const e = n.map(Fu);
  for (let t = 1; t < n.length; t++) {
    const o = e[t];
    if (!(o < 0))
      for (let i = t - 1; i >= 0 && o < e[i]; i--) {
        const s = n[i + 1];
        n[i + 1] = n[i], n[i] = s, e[i + 1] = e[i], e[i] = o;
      }
  }
}
function Fu(n) {
  var e, t;
  let o = (e = Hu.get(n.type)) !== null && e !== void 0 ? e : -1;
  return n.type === $.Attribute ? (o = (t = bf.get(n.action)) !== null && t !== void 0 ? t : 4, n.action === le.Equals && n.name === "id" && (o = 9), n.ignoreCase && (o >>= 1)) : n.type === $.Pseudo && (n.data ? n.name === "has" || n.name === "contains" ? o = 0 : Array.isArray(n.data) ? (o = Math.min(...n.data.map((i) => Math.min(...i.map(Fu)))), o < 0 && (o = 0)) : o = 2 : o = 3), o;
}
const xf = /[-[\]{}()*+?.,\\^$|#\s]/g;
function Tr(n) {
  return n.replace(xf, "\\$&");
}
const vf = /* @__PURE__ */ new Set([
  "accept",
  "accept-charset",
  "align",
  "alink",
  "axis",
  "bgcolor",
  "charset",
  "checked",
  "clear",
  "codetype",
  "color",
  "compact",
  "declare",
  "defer",
  "dir",
  "direction",
  "disabled",
  "enctype",
  "face",
  "frame",
  "hreflang",
  "http-equiv",
  "lang",
  "language",
  "link",
  "media",
  "method",
  "multiple",
  "nohref",
  "noresize",
  "noshade",
  "nowrap",
  "readonly",
  "rel",
  "rev",
  "rules",
  "scope",
  "scrolling",
  "selected",
  "shape",
  "target",
  "text",
  "type",
  "valign",
  "valuetype",
  "vlink"
]);
function Bt(n, e) {
  return typeof n.ignoreCase == "boolean" ? n.ignoreCase : n.ignoreCase === "quirks" ? !!e.quirksMode : !e.xmlMode && vf.has(n.name);
}
const yf = {
  equals(n, e, t) {
    const { adapter: o } = t, { name: i } = e;
    let { value: s } = e;
    return Bt(e, t) ? (s = s.toLowerCase(), (r) => {
      const a = o.getAttributeValue(r, i);
      return a != null && a.length === s.length && a.toLowerCase() === s && n(r);
    }) : (r) => o.getAttributeValue(r, i) === s && n(r);
  },
  hyphen(n, e, t) {
    const { adapter: o } = t, { name: i } = e;
    let { value: s } = e;
    const r = s.length;
    return Bt(e, t) ? (s = s.toLowerCase(), function(u) {
      const l = o.getAttributeValue(u, i);
      return l != null && (l.length === r || l.charAt(r) === "-") && l.substr(0, r).toLowerCase() === s && n(u);
    }) : function(u) {
      const l = o.getAttributeValue(u, i);
      return l != null && (l.length === r || l.charAt(r) === "-") && l.substr(0, r) === s && n(u);
    };
  },
  element(n, e, t) {
    const { adapter: o } = t, { name: i, value: s } = e;
    if (/\s/.test(s))
      return V.falseFunc;
    const r = new RegExp(`(?:^|\\s)${Tr(s)}(?:$|\\s)`, Bt(e, t) ? "i" : "");
    return function(u) {
      const l = o.getAttributeValue(u, i);
      return l != null && l.length >= s.length && r.test(l) && n(u);
    };
  },
  exists(n, { name: e }, { adapter: t }) {
    return (o) => t.hasAttrib(o, e) && n(o);
  },
  start(n, e, t) {
    const { adapter: o } = t, { name: i } = e;
    let { value: s } = e;
    const r = s.length;
    return r === 0 ? V.falseFunc : Bt(e, t) ? (s = s.toLowerCase(), (a) => {
      const u = o.getAttributeValue(a, i);
      return u != null && u.length >= r && u.substr(0, r).toLowerCase() === s && n(a);
    }) : (a) => {
      var u;
      return !!(!((u = o.getAttributeValue(a, i)) === null || u === void 0) && u.startsWith(s)) && n(a);
    };
  },
  end(n, e, t) {
    const { adapter: o } = t, { name: i } = e;
    let { value: s } = e;
    const r = -s.length;
    return r === 0 ? V.falseFunc : Bt(e, t) ? (s = s.toLowerCase(), (a) => {
      var u;
      return ((u = o.getAttributeValue(a, i)) === null || u === void 0 ? void 0 : u.substr(r).toLowerCase()) === s && n(a);
    }) : (a) => {
      var u;
      return !!(!((u = o.getAttributeValue(a, i)) === null || u === void 0) && u.endsWith(s)) && n(a);
    };
  },
  any(n, e, t) {
    const { adapter: o } = t, { name: i, value: s } = e;
    if (s === "")
      return V.falseFunc;
    if (Bt(e, t)) {
      const r = new RegExp(Tr(s), "i");
      return function(u) {
        const l = o.getAttributeValue(u, i);
        return l != null && l.length >= s.length && r.test(l) && n(u);
      };
    }
    return (r) => {
      var a;
      return !!(!((a = o.getAttributeValue(r, i)) === null || a === void 0) && a.includes(s)) && n(r);
    };
  },
  not(n, e, t) {
    const { adapter: o } = t, { name: i } = e;
    let { value: s } = e;
    return s === "" ? (r) => !!o.getAttributeValue(r, i) && n(r) : Bt(e, t) ? (s = s.toLowerCase(), (r) => {
      const a = o.getAttributeValue(r, i);
      return (a == null || a.length !== s.length || a.toLowerCase() !== s) && n(r);
    }) : (r) => o.getAttributeValue(r, i) !== s && n(r);
  }
}, wf = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]), Br = 48, kf = 57;
function Sf(n) {
  if (n = n.trim().toLowerCase(), n === "even")
    return [2, 0];
  if (n === "odd")
    return [2, 1];
  let e = 0, t = 0, o = s(), i = r();
  if (e < n.length && n.charAt(e) === "n" && (e++, t = o * (i ?? 1), a(), e < n.length ? (o = s(), a(), i = r()) : o = i = 0), i === null || e < n.length)
    throw new Error(`n-th rule couldn't be parsed ('${n}')`);
  return [t, o * i];
  function s() {
    return n.charAt(e) === "-" ? (e++, -1) : (n.charAt(e) === "+" && e++, 1);
  }
  function r() {
    const u = e;
    let l = 0;
    for (; e < n.length && n.charCodeAt(e) >= Br && n.charCodeAt(e) <= kf; )
      l = l * 10 + (n.charCodeAt(e) - Br), e++;
    return e === u ? null : l;
  }
  function a() {
    for (; e < n.length && wf.has(n.charCodeAt(e)); )
      e++;
  }
}
function Cf(n) {
  const e = n[0], t = n[1] - 1;
  if (t < 0 && e <= 0)
    return V.falseFunc;
  if (e === -1)
    return (s) => s <= t;
  if (e === 0)
    return (s) => s === t;
  if (e === 1)
    return t < 0 ? V.trueFunc : (s) => s >= t;
  const o = Math.abs(e), i = (t % o + o) % o;
  return e > 1 ? (s) => s >= t && s % o === i : (s) => s <= t && s % o === i;
}
function Fn(n) {
  return Cf(Sf(n));
}
function qn(n, e) {
  return (t) => {
    const o = e.getParent(t);
    return o != null && e.isTag(o) && n(t);
  };
}
const ki = {
  contains(n, e, { adapter: t }) {
    return function(i) {
      return n(i) && t.getText(i).includes(e);
    };
  },
  icontains(n, e, { adapter: t }) {
    const o = e.toLowerCase();
    return function(s) {
      return n(s) && t.getText(s).toLowerCase().includes(o);
    };
  },
  // Location specific methods
  "nth-child"(n, e, { adapter: t, equals: o }) {
    const i = Fn(e);
    return i === V.falseFunc ? V.falseFunc : i === V.trueFunc ? qn(n, t) : function(r) {
      const a = t.getSiblings(r);
      let u = 0;
      for (let l = 0; l < a.length && !o(r, a[l]); l++)
        t.isTag(a[l]) && u++;
      return i(u) && n(r);
    };
  },
  "nth-last-child"(n, e, { adapter: t, equals: o }) {
    const i = Fn(e);
    return i === V.falseFunc ? V.falseFunc : i === V.trueFunc ? qn(n, t) : function(r) {
      const a = t.getSiblings(r);
      let u = 0;
      for (let l = a.length - 1; l >= 0 && !o(r, a[l]); l--)
        t.isTag(a[l]) && u++;
      return i(u) && n(r);
    };
  },
  "nth-of-type"(n, e, { adapter: t, equals: o }) {
    const i = Fn(e);
    return i === V.falseFunc ? V.falseFunc : i === V.trueFunc ? qn(n, t) : function(r) {
      const a = t.getSiblings(r);
      let u = 0;
      for (let l = 0; l < a.length; l++) {
        const c = a[l];
        if (o(r, c))
          break;
        t.isTag(c) && t.getName(c) === t.getName(r) && u++;
      }
      return i(u) && n(r);
    };
  },
  "nth-last-of-type"(n, e, { adapter: t, equals: o }) {
    const i = Fn(e);
    return i === V.falseFunc ? V.falseFunc : i === V.trueFunc ? qn(n, t) : function(r) {
      const a = t.getSiblings(r);
      let u = 0;
      for (let l = a.length - 1; l >= 0; l--) {
        const c = a[l];
        if (o(r, c))
          break;
        t.isTag(c) && t.getName(c) === t.getName(r) && u++;
      }
      return i(u) && n(r);
    };
  },
  // TODO determine the actual root element
  root(n, e, { adapter: t }) {
    return (o) => {
      const i = t.getParent(o);
      return (i == null || !t.isTag(i)) && n(o);
    };
  },
  scope(n, e, t, o) {
    const { equals: i } = t;
    return !o || o.length === 0 ? ki.root(n, e, t) : o.length === 1 ? (s) => i(o[0], s) && n(s) : (s) => o.includes(s) && n(s);
  },
  hover: Ho("isHovered"),
  visited: Ho("isVisited"),
  active: Ho("isActive")
};
function Ho(n) {
  return function(t, o, { adapter: i }) {
    const s = i[n];
    return typeof s != "function" ? V.falseFunc : function(a) {
      return s(a) && t(a);
    };
  };
}
const Ar = {
  empty(n, { adapter: e }) {
    return !e.getChildren(n).some((t) => (
      // FIXME: `getText` call is potentially expensive.
      e.isTag(t) || e.getText(t) !== ""
    ));
  },
  "first-child"(n, { adapter: e, equals: t }) {
    if (e.prevElementSibling)
      return e.prevElementSibling(n) == null;
    const o = e.getSiblings(n).find((i) => e.isTag(i));
    return o != null && t(n, o);
  },
  "last-child"(n, { adapter: e, equals: t }) {
    const o = e.getSiblings(n);
    for (let i = o.length - 1; i >= 0; i--) {
      if (t(n, o[i]))
        return !0;
      if (e.isTag(o[i]))
        break;
    }
    return !1;
  },
  "first-of-type"(n, { adapter: e, equals: t }) {
    const o = e.getSiblings(n), i = e.getName(n);
    for (let s = 0; s < o.length; s++) {
      const r = o[s];
      if (t(n, r))
        return !0;
      if (e.isTag(r) && e.getName(r) === i)
        break;
    }
    return !1;
  },
  "last-of-type"(n, { adapter: e, equals: t }) {
    const o = e.getSiblings(n), i = e.getName(n);
    for (let s = o.length - 1; s >= 0; s--) {
      const r = o[s];
      if (t(n, r))
        return !0;
      if (e.isTag(r) && e.getName(r) === i)
        break;
    }
    return !1;
  },
  "only-of-type"(n, { adapter: e, equals: t }) {
    const o = e.getName(n);
    return e.getSiblings(n).every((i) => t(n, i) || !e.isTag(i) || e.getName(i) !== o);
  },
  "only-child"(n, { adapter: e, equals: t }) {
    return e.getSiblings(n).every((o) => t(n, o) || !e.isTag(o));
  }
};
function Lr(n, e, t, o) {
  if (t === null) {
    if (n.length > o)
      throw new Error(`Pseudo-class :${e} requires an argument`);
  } else if (n.length === o)
    throw new Error(`Pseudo-class :${e} doesn't have any arguments`);
}
const Ef = {
  // Links
  "any-link": ":is(a, area, link)[href]",
  link: ":any-link:not(:visited)",
  // Forms
  // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
  disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
  enabled: ":not(:disabled)",
  checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
  required: ":is(input, select, textarea)[required]",
  optional: ":is(input, select, textarea):not([required])",
  // JQuery extensions
  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
  selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
  checkbox: "[type=checkbox]",
  file: "[type=file]",
  password: "[type=password]",
  radio: "[type=radio]",
  reset: "[type=reset]",
  image: "[type=image]",
  submit: "[type=submit]",
  parent: ":not(:empty)",
  header: ":is(h1, h2, h3, h4, h5, h6)",
  button: ":is(button, input[type=button])",
  input: ":is(input, textarea, select, button)",
  text: "input:is(:not([type!='']), [type=text])"
}, qu = {};
function $u(n, e) {
  return n === V.falseFunc ? V.falseFunc : (t) => e.isTag(t) && n(t);
}
function Tf(n, e) {
  const t = e.getSiblings(n);
  if (t.length <= 1)
    return [];
  const o = t.indexOf(n);
  return o < 0 || o === t.length - 1 ? [] : t.slice(o + 1).filter(e.isTag);
}
function Si(n) {
  return {
    xmlMode: !!n.xmlMode,
    lowerCaseAttributeNames: !!n.lowerCaseAttributeNames,
    lowerCaseTags: !!n.lowerCaseTags,
    quirksMode: !!n.quirksMode,
    cacheResults: !!n.cacheResults,
    pseudos: n.pseudos,
    adapter: n.adapter,
    equals: n.equals
  };
}
const Fo = (n, e, t, o, i) => {
  const s = i(e, Si(t), o);
  return s === V.trueFunc ? n : s === V.falseFunc ? V.falseFunc : (r) => s(r) && n(r);
}, qo = {
  is: Fo,
  /**
   * `:matches` and `:where` are aliases for `:is`.
   */
  matches: Fo,
  where: Fo,
  not(n, e, t, o, i) {
    const s = i(e, Si(t), o);
    return s === V.falseFunc ? n : s === V.trueFunc ? V.falseFunc : (r) => !s(r) && n(r);
  },
  has(n, e, t, o, i) {
    const { adapter: s } = t, r = Si(t);
    r.relativeSelector = !0;
    const a = e.some((c) => c.some(hs)) ? (
      // Used as a placeholder. Will be replaced with the actual element.
      [qu]
    ) : void 0, u = i(e, r, a);
    if (u === V.falseFunc)
      return V.falseFunc;
    const l = $u(u, s);
    if (a && u !== V.trueFunc) {
      const { shouldTestNextSiblings: c = !1 } = u;
      return (d) => {
        if (!n(d))
          return !1;
        a[0] = d;
        const h = s.getChildren(d), g = c ? [...h, ...Tf(d, s)] : h;
        return s.existsOne(l, g);
      };
    }
    return (c) => n(c) && s.existsOne(l, s.getChildren(c));
  }
};
function Bf(n, e, t, o, i) {
  var s;
  const { name: r, data: a } = e;
  if (Array.isArray(a)) {
    if (!(r in qo))
      throw new Error(`Unknown pseudo-class :${r}(${a})`);
    return qo[r](n, a, t, o, i);
  }
  const u = (s = t.pseudos) === null || s === void 0 ? void 0 : s[r], l = typeof u == "string" ? u : Ef[r];
  if (typeof l == "string") {
    if (a != null)
      throw new Error(`Pseudo ${r} doesn't have any arguments`);
    const c = Du(l);
    return qo.is(n, c, t, o, i);
  }
  if (typeof u == "function")
    return Lr(u, r, a, 1), (c) => u(c, a) && n(c);
  if (r in ki)
    return ki[r](n, a, t, o);
  if (r in Ar) {
    const c = Ar[r];
    return Lr(c, r, a, 2), (d) => c(d, t, a) && n(d);
  }
  throw new Error(`Unknown pseudo-class :${r}`);
}
function $o(n, e) {
  const t = e.getParent(n);
  return t && e.isTag(t) ? t : null;
}
function Af(n, e, t, o, i) {
  const { adapter: s, equals: r } = t;
  switch (e.type) {
    case $.PseudoElement:
      throw new Error("Pseudo-elements are not supported by css-select");
    case $.ColumnCombinator:
      throw new Error("Column combinators are not yet supported by css-select");
    case $.Attribute: {
      if (e.namespace != null)
        throw new Error("Namespaced attributes are not yet supported by css-select");
      return (!t.xmlMode || t.lowerCaseAttributeNames) && (e.name = e.name.toLowerCase()), yf[e.action](n, e, t);
    }
    case $.Pseudo:
      return Bf(n, e, t, o, i);
    case $.Tag: {
      if (e.namespace != null)
        throw new Error("Namespaced tag names are not yet supported by css-select");
      let { name: a } = e;
      return (!t.xmlMode || t.lowerCaseTags) && (a = a.toLowerCase()), function(l) {
        return s.getName(l) === a && n(l);
      };
    }
    case $.Descendant: {
      if (t.cacheResults === !1 || typeof WeakSet > "u")
        return function(l) {
          let c = l;
          for (; c = $o(c, s); )
            if (n(c))
              return !0;
          return !1;
        };
      const a = /* @__PURE__ */ new WeakSet();
      return function(l) {
        let c = l;
        for (; c = $o(c, s); )
          if (!a.has(c)) {
            if (s.isTag(c) && n(c))
              return !0;
            a.add(c);
          }
        return !1;
      };
    }
    case "_flexibleDescendant":
      return function(u) {
        let l = u;
        do
          if (n(l))
            return !0;
        while (l = $o(l, s));
        return !1;
      };
    case $.Parent:
      return function(u) {
        return s.getChildren(u).some((l) => s.isTag(l) && n(l));
      };
    case $.Child:
      return function(u) {
        const l = s.getParent(u);
        return l != null && s.isTag(l) && n(l);
      };
    case $.Sibling:
      return function(u) {
        const l = s.getSiblings(u);
        for (let c = 0; c < l.length; c++) {
          const d = l[c];
          if (r(u, d))
            break;
          if (s.isTag(d) && n(d))
            return !0;
        }
        return !1;
      };
    case $.Adjacent:
      return s.prevElementSibling ? function(u) {
        const l = s.prevElementSibling(u);
        return l != null && n(l);
      } : function(u) {
        const l = s.getSiblings(u);
        let c;
        for (let d = 0; d < l.length; d++) {
          const h = l[d];
          if (r(u, h))
            break;
          s.isTag(h) && (c = h);
        }
        return !!c && n(c);
      };
    case $.Universal: {
      if (e.namespace != null && e.namespace !== "*")
        throw new Error("Namespaced universal selectors are not yet supported by css-select");
      return n;
    }
  }
}
function Uu(n, e, t) {
  const o = Lf(n, e, t);
  return $u(o, e.adapter);
}
function Lf(n, e, t) {
  const o = typeof n == "string" ? Du(n) : n;
  return Vu(o, e, t);
}
function ju(n) {
  return n.type === $.Pseudo && (n.name === "scope" || Array.isArray(n.data) && n.data.some((e) => e.some(ju)));
}
const Nf = { type: $.Descendant }, Mf = {
  type: "_flexibleDescendant"
}, If = {
  type: $.Pseudo,
  name: "scope",
  data: null
};
function Rf(n, { adapter: e }, t) {
  const o = !!(t != null && t.every((i) => {
    const s = e.isTag(i) && e.getParent(i);
    return i === qu || s && e.isTag(s);
  }));
  for (const i of n) {
    if (!(i.length > 0 && hs(i[0]) && i[0].type !== $.Descendant))
      if (o && !i.some(ju))
        i.unshift(Nf);
      else
        continue;
    i.unshift(If);
  }
}
function Vu(n, e, t) {
  var o;
  n.forEach(mf), t = (o = e.context) !== null && o !== void 0 ? o : t;
  const i = Array.isArray(t), s = t && (Array.isArray(t) ? t : [t]);
  if (e.relativeSelector !== !1)
    Rf(n, e, s);
  else if (n.some((u) => u.length > 0 && hs(u[0])))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
  let r = !1;
  const a = n.map((u) => {
    if (u.length >= 2) {
      const [l, c] = u;
      l.type !== $.Pseudo || l.name !== "scope" || (i && c.type === $.Descendant ? u[1] = Mf : (c.type === $.Adjacent || c.type === $.Sibling) && (r = !0));
    }
    return _f(u, e, s);
  }).reduce(Of, V.falseFunc);
  return a.shouldTestNextSiblings = r, a;
}
function _f(n, e, t) {
  var o;
  return n.reduce((i, s) => i === V.falseFunc ? V.falseFunc : Af(i, s, e, t, Vu), (o = e.rootFunc) !== null && o !== void 0 ? o : V.trueFunc);
}
function Of(n, e) {
  return e === V.falseFunc || n === V.trueFunc ? n : n === V.falseFunc || e === V.trueFunc ? e : function(o) {
    return n(o) || e(o);
  };
}
const zu = (n, e) => n === e, Df = {
  adapter: is,
  equals: zu
};
function Gu(n) {
  var e, t, o, i;
  const s = n ?? Df;
  return (e = s.adapter) !== null && e !== void 0 || (s.adapter = is), (t = s.equals) !== null && t !== void 0 || (s.equals = (i = (o = s.adapter) === null || o === void 0 ? void 0 : o.equals) !== null && i !== void 0 ? i : zu), s;
}
function Pf(n) {
  return function(t, o, i) {
    const s = Gu(o);
    return n(t, s, i);
  };
}
const Hf = Pf(Uu);
function Ff(n, e, t) {
  const o = Gu(t);
  return (typeof e == "function" ? e : Uu(e, o))(n);
}
const { isArray: qf } = Array, Co = ({ nodeType: n }) => n === J, Wu = (n, e) => e.some(
  (t) => Co(t) && (n(t) || Wu(n, ln(t)))
), $f = (n, e) => e === "class" ? n.classList.value : n.getAttribute(e), ln = ({ childNodes: n }) => n, Uf = (n) => {
  const { localName: e } = n;
  return un(n) ? e.toLowerCase() : e;
}, jf = ({ parentNode: n }) => n, Vf = (n) => {
  const { parentNode: e } = n;
  return e ? ln(e) : n;
}, Ci = (n) => qf(n) ? n.map(Ci).join("") : Co(n) ? Ci(ln(n)) : n.nodeType === Ce ? n.data : "", zf = (n, e) => n.hasAttribute(e), Gf = (n) => {
  let { length: e } = n;
  for (; e--; ) {
    const t = n[e];
    if (e && -1 < n.lastIndexOf(t, e - 1)) {
      n.splice(e, 1);
      continue;
    }
    for (let { parentNode: o } = t; o; o = o.parentNode)
      if (n.includes(o)) {
        n.splice(e, 1);
        break;
      }
  }
  return n;
}, Ku = (n, e) => {
  const t = [];
  for (const o of e)
    Co(o) && (n(o) && t.push(o), t.push(...Ku(n, ln(o))));
  return t;
}, Zu = (n, e) => {
  for (let t of e)
    if (n(t) || (t = Zu(n, ln(t))))
      return t;
  return null;
}, Yu = {
  isTag: Co,
  existsOne: Wu,
  getAttributeValue: $f,
  getChildren: ln,
  getName: Uf,
  getParent: jf,
  getSiblings: Vf,
  getText: Ci,
  hasAttrib: zf,
  removeSubsets: Gf,
  findAll: Ku,
  findOne: Zu
}, Ei = (n, e) => Hf(
  e,
  {
    context: e.includes(":scope") ? n : void 0,
    xmlMode: !un(n),
    adapter: Yu
  }
), Wf = (n, e) => Ff(
  n,
  e,
  {
    strict: !0,
    context: e.includes(":scope") ? n : void 0,
    xmlMode: !un(n),
    adapter: Yu
  }
), { replace: Kf } = "", Zf = /[<>&\xA0]/g, Yf = {
  " ": "&#160;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
}, Xf = (n) => Yf[n], Jf = (n) => Kf.call(n, Zf, Xf);
let Rn = class Xu extends In {
  constructor(e, t = "") {
    super(e, "#text", Ce, t);
  }
  get wholeText() {
    const e = [];
    let { previousSibling: t, nextSibling: o } = this;
    for (; t && t.nodeType === Ce; ) {
      e.unshift(t[ne]);
      t = t.previousSibling;
    }
    for (e.push(this[ne]); o && o.nodeType === Ce; ) {
      e.push(o[ne]);
      o = o.nextSibling;
    }
    return e.join("");
  }
  cloneNode() {
    const { ownerDocument: e, [ne]: t } = this;
    return new Xu(e, t);
  }
  toString() {
    return Jf(this[ne]);
  }
};
const Qf = (n) => n instanceof Ut, Uo = (n, e, t) => {
  const { ownerDocument: o } = n;
  for (const i of t)
    n.insertBefore(
      Qf(i) ? i : new Rn(o, i),
      e
    );
};
class Ju extends Ut {
  constructor(e, t, o) {
    super(e, t, o), this[Se] = null, this[N] = this[F] = {
      [N]: null,
      [he]: this,
      [Le]: this,
      nodeType: St,
      ownerDocument: this.ownerDocument,
      parentNode: null
    };
  }
  get childNodes() {
    const e = new Xe();
    let { firstChild: t } = this;
    for (; t; )
      e.push(t), t = _t(t);
    return e;
  }
  get children() {
    const e = new Xe();
    let { firstElementChild: t } = this;
    for (; t; )
      e.push(t), t = as(t);
    return e;
  }
  /**
   * @returns {NodeStruct | null}
   */
  get firstChild() {
    let { [N]: e, [F]: t } = this;
    for (; e.nodeType === me; )
      e = e[N];
    return e === t ? null : e;
  }
  /**
   * @returns {NodeStruct | null}
   */
  get firstElementChild() {
    let { firstChild: e } = this;
    for (; e; ) {
      if (e.nodeType === J)
        return e;
      e = _t(e);
    }
    return null;
  }
  get lastChild() {
    const e = this[F][he];
    switch (e.nodeType) {
      case St:
        return e[Le];
      case me:
        return null;
    }
    return e === this ? null : e;
  }
  get lastElementChild() {
    let { lastChild: e } = this;
    for (; e; ) {
      if (e.nodeType === J)
        return e;
      e = Tn(e);
    }
    return null;
  }
  get childElementCount() {
    return this.children.length;
  }
  prepend(...e) {
    Uo(this, this.firstChild, e);
  }
  append(...e) {
    Uo(this, this[F], e);
  }
  replaceChildren(...e) {
    let { [N]: t, [F]: o } = this;
    for (; t !== o && t.nodeType === me; )
      t = t[N];
    for (; t !== o; ) {
      const i = Re(t)[N];
      t.remove(), t = i;
    }
    e.length && Uo(this, o, e);
  }
  getElementsByClassName(e) {
    const t = new Xe();
    let { [N]: o, [F]: i } = this;
    for (; o !== i; )
      o.nodeType === J && o.hasAttribute("class") && o.classList.has(e) && t.push(o), o = o[N];
    return t;
  }
  getElementsByTagName(e) {
    const t = new Xe();
    let { [N]: o, [F]: i } = this;
    for (; o !== i; )
      o.nodeType === J && (o.localName === e || xi(o) === e) && t.push(o), o = o[N];
    return t;
  }
  querySelector(e) {
    const t = Ei(this, e);
    let { [N]: o, [F]: i } = this;
    for (; o !== i; ) {
      if (o.nodeType === J && t(o))
        return o;
      o = o.localName === "template" ? o[F] : o[N];
    }
    return null;
  }
  querySelectorAll(e) {
    const t = Ei(this, e), o = new Xe();
    let { [N]: i, [F]: s } = this;
    for (; i !== s; )
      i.nodeType === J && t(i) && o.push(i), i = i.localName === "template" ? i[F] : i[N];
    return o;
  }
  appendChild(e) {
    return this.insertBefore(e, this[F]);
  }
  contains(e) {
    let t = e;
    for (; t && t !== this; )
      t = t.parentNode;
    return t === this;
  }
  insertBefore(e, t = null) {
    if (e === t)
      return e;
    if (e === this)
      throw new Error("unable to append a node to itself");
    const o = t || this[F];
    switch (e.nodeType) {
      case J:
        e.remove(), e.parentNode = this, mu(o[he], e, o), wn(e, null), vi(e);
        break;
      case st: {
        let { [Se]: i, firstChild: s, lastChild: r } = e;
        if (s) {
          Kp(o[he], s, r, o), Ge(e, e[F]), i && i.replaceChildren();
          do
            s.parentNode = this, wn(s, null), s.nodeType === J && vi(s);
          while (s !== r && (s = _t(s)));
        }
        break;
      }
      case Ce:
      case lt:
      case ut:
        e.remove();
      default:
        e.parentNode = this, wo(o[he], e, o), wn(e, null);
        break;
    }
    return e;
  }
  normalize() {
    let { [N]: e, [F]: t } = this;
    for (; e !== t; ) {
      const { [N]: o, [he]: i, nodeType: s } = e;
      s === Ce && (e[ne] ? i && i.nodeType === Ce && (i.textContent += e.textContent, e.remove()) : e.remove()), e = o;
    }
  }
  removeChild(e) {
    if (e.parentNode !== this)
      throw new Error("node is not a child");
    return e.remove(), e;
  }
  replaceChild(e, t) {
    const o = Re(t)[N];
    return t.remove(), this.insertBefore(e, o), t;
  }
}
class ps extends Ju {
  getElementById(e) {
    let { [N]: t, [F]: o } = this;
    for (; t !== o; ) {
      if (t.nodeType === J && t.id === e)
        return t;
      t = t[N];
    }
    return null;
  }
  cloneNode(e) {
    const { ownerDocument: t, constructor: o } = this, i = new o(t);
    if (e) {
      const { [F]: s } = i;
      for (const r of this.childNodes)
        i.insertBefore(r.cloneNode(e), s);
    }
    return i;
  }
  toString() {
    const { childNodes: e, localName: t } = this;
    return `<${t}>${e.join("")}</${t}>`;
  }
  toJSON() {
    const e = [];
    return nf(this, e), e;
  }
}
let fs = class extends ps {
  constructor(e) {
    super(e, "#document-fragment", st);
  }
}, ro = class Qu extends Ut {
  constructor(e, t, o = "", i = "") {
    super(e, "#document-type", nn), this.name = t, this.publicId = o, this.systemId = i;
  }
  cloneNode() {
    const { ownerDocument: e, name: t, publicId: o, systemId: i } = this;
    return new Qu(e, t, o, i);
  }
  toString() {
    const { name: e, publicId: t, systemId: o } = this, i = 0 < t.length, s = [e];
    return i && s.push("PUBLIC", `"${t}"`), o.length && (i || s.push("SYSTEM"), s.push(`"${o}"`)), `<!DOCTYPE ${s.join(" ")}>`;
  }
  toJSON() {
    const e = [];
    return Cu(this, e), e;
  }
};
const el = (n) => n.childNodes.join(""), tl = (n, e) => {
  const { ownerDocument: t } = n, { constructor: o } = t, i = new o();
  i[qe] = t[qe];
  const { childNodes: s } = yu(i, un(n), e);
  n.replaceChildren(...s.map(nl, t));
};
function nl(n) {
  switch (n.ownerDocument = this, n.nodeType) {
    case J:
    case st:
      n.childNodes.forEach(nl, this);
      break;
  }
  return n;
}
const Yn = (n) => n.replace(/(([A-Z0-9])([A-Z0-9][a-z]))|(([a-z0-9]+)([A-Z]))/g, "$2$5-$3$6").toLowerCase(), Xn = /* @__PURE__ */ new WeakMap(), jo = (n) => `data-${Yn(n)}`, e1 = (n) => n.slice(5).replace(/-([a-z])/g, (e, t) => t.toUpperCase()), t1 = {
  get(n, e) {
    if (e in n)
      return Xn.get(n).getAttribute(jo(e));
  },
  set(n, e, t) {
    return n[e] = t, Xn.get(n).setAttribute(jo(e), t), !0;
  },
  deleteProperty(n, e) {
    return e in n && Xn.get(n).removeAttribute(jo(e)), delete n[e];
  }
};
class ol {
  /**
   * @param {Element} ref
   */
  constructor(e) {
    for (const { name: t, value: o } of e.attributes)
      /^data-/.test(t) && (this[e1(t)] = o);
    return Xn.set(this, e), new Proxy(this, t1);
  }
}
Be(ol.prototype, null);
const { add: n1 } = Set.prototype, Nr = (n, e) => {
  for (const t of e)
    t && n1.call(n, t);
}, fn = ({ [Oa]: n, value: e }) => {
  const t = n.getAttributeNode("class");
  t ? t.value = e : wi(
    n,
    new Mn(n.ownerDocument, "class", e)
  );
};
class o1 extends Set {
  constructor(e) {
    super(), this[Oa] = e;
    const t = e.getAttributeNode("class");
    t && Nr(this, t.value.split(/\s+/));
  }
  get length() {
    return this.size;
  }
  get value() {
    return [...this].join(" ");
  }
  /**
   * @param  {...string} tokens
   */
  add(...e) {
    Nr(this, e), fn(this);
  }
  /**
   * @param {string} token
   */
  contains(e) {
    return this.has(e);
  }
  /**
   * @param  {...string} tokens
   */
  remove(...e) {
    for (const t of e)
      this.delete(t);
    fn(this);
  }
  /**
   * @param {string} token
   * @param {boolean?} force
   */
  toggle(e, t) {
    if (this.has(e)) {
      if (t)
        return !0;
      this.delete(e), fn(this);
    } else if (t || arguments.length === 1)
      return super.add(e), fn(this), !0;
    return !1;
  }
  /**
   * @param {string} token
   * @param {string} newToken
   */
  replace(e, t) {
    return this.has(e) ? (this.delete(e), super.add(t), fn(this), !0) : !1;
  }
  /**
   * @param {string} token
   */
  supports() {
    return !0;
  }
}
const ao = /* @__PURE__ */ new WeakMap(), Ti = (n) => [...n.keys()].filter((e) => e !== Se), uo = (n) => {
  const e = ao.get(n).getAttributeNode("style");
  if ((!e || e[eo] || n.get(Se) !== e) && (n.clear(), e)) {
    n.set(Se, e);
    for (const t of e[ne].split(/\s*;\s*/)) {
      let [o, ...i] = t.split(":");
      if (i.length > 0) {
        o = o.trim();
        const s = i.join(":").trim();
        o && s && n.set(o, s);
      }
    }
  }
  return e;
}, $n = {
  get(n, e) {
    return e in i1 ? n[e] : (uo(n), e === "length" ? Ti(n).length : /^\d+$/.test(e) ? Ti(n)[e] : n.get(Yn(e)));
  },
  set(n, e, t) {
    if (e === "cssText")
      n[e] = t;
    else {
      let o = uo(n);
      if (t == null ? n.delete(Yn(e)) : n.set(Yn(e), t), !o) {
        const i = ao.get(n);
        o = i.ownerDocument.createAttribute("style"), i.setAttributeNode(o), n.set(Se, o);
      }
      o[eo] = !1, o[ne] = n.toString();
    }
    return !0;
  }
};
let il = class extends Map {
  constructor(e) {
    return super(), ao.set(this, e), new Proxy(this, $n);
  }
  get cssText() {
    return this.toString();
  }
  set cssText(e) {
    ao.get(this).setAttribute("style", e);
  }
  getPropertyValue(e) {
    const t = this[Se];
    return $n.get(t, e);
  }
  setProperty(e, t) {
    const o = this[Se];
    $n.set(o, e, t);
  }
  removeProperty(e) {
    const t = this[Se];
    $n.set(t, e, null);
  }
  [Symbol.iterator]() {
    const e = this[Se];
    uo(e);
    const t = Ti(e), { length: o } = t;
    let i = 0;
    return {
      next() {
        const s = i === o;
        return { done: s, value: s ? null : t[i++] };
      }
    };
  }
  get [Se]() {
    return this;
  }
  toString() {
    const e = this[Se];
    uo(e);
    const t = [];
    return e.forEach(s1, t), t.join(";");
  }
};
const { prototype: i1 } = il;
function s1(n, e) {
  e !== Se && this.push(`${e}:${n}`);
}
const Mr = 3, Ir = 2, Rr = 1, _r = 0;
function r1(n) {
  return n.currentTarget;
}
class qt {
  static get BUBBLING_PHASE() {
    return Mr;
  }
  static get AT_TARGET() {
    return Ir;
  }
  static get CAPTURING_PHASE() {
    return Rr;
  }
  static get NONE() {
    return _r;
  }
  constructor(e, t = {}) {
    this.type = e, this.bubbles = !!t.bubbles, this.cancelBubble = !1, this._stopImmediatePropagationFlag = !1, this.cancelable = !!t.cancelable, this.eventPhase = this.NONE, this.timeStamp = Date.now(), this.defaultPrevented = !1, this.originalTarget = null, this.returnValue = null, this.srcElement = null, this.target = null, this._path = [];
  }
  get BUBBLING_PHASE() {
    return Mr;
  }
  get AT_TARGET() {
    return Ir;
  }
  get CAPTURING_PHASE() {
    return Rr;
  }
  get NONE() {
    return _r;
  }
  preventDefault() {
    this.defaultPrevented = !0;
  }
  // simplified implementation, should be https://dom.spec.whatwg.org/#dom-event-composedpath
  composedPath() {
    return this._path.map(r1);
  }
  stopPropagation() {
    this.cancelBubble = !0;
  }
  stopImmediatePropagation() {
    this.stopPropagation(), this._stopImmediatePropagationFlag = !0;
  }
}
class sl extends Array {
  constructor(e) {
    super(), this.ownerElement = e;
  }
  getNamedItem(e) {
    return this.ownerElement.getAttributeNode(e);
  }
  setNamedItem(e) {
    this.ownerElement.setAttributeNode(e), this.unshift(e);
  }
  removeNamedItem(e) {
    const t = this.getNamedItem(e);
    this.ownerElement.removeAttribute(e), this.splice(this.indexOf(t), 1);
  }
  item(e) {
    return e < this.length ? this[e] : null;
  }
  /* c8 ignore start */
  getNamedItemNS(e, t) {
    return this.getNamedItem(t);
  }
  setNamedItemNS(e, t) {
    return this.setNamedItem(t);
  }
  removeNamedItemNS(e, t) {
    return this.removeNamedItem(t);
  }
  /* c8 ignore stop */
}
let gs = class extends ps {
  constructor(e) {
    super(e.ownerDocument, "#shadow-root", st), this.host = e;
  }
  get innerHTML() {
    return el(this);
  }
  set innerHTML(e) {
    tl(this, e);
  }
};
const a1 = {
  get(n, e) {
    return e in n ? n[e] : n.find(({ name: t }) => t === e);
  }
}, Or = (n, e, t) => {
  if ("ownerSVGElement" in e) {
    const o = n.createElementNS(io, t);
    return o.ownerSVGElement = e.ownerSVGElement, o;
  }
  return n.createElement(t);
}, u1 = ({ localName: n, ownerDocument: e }) => e[rn].voidElements.test(n);
let _n = class extends Ju {
  constructor(e, t) {
    super(e, t, J), this[Yt] = null, this[Ro] = null, this[_o] = null;
  }
  // <Mixins>
  get isConnected() {
    return Au(this);
  }
  get parentElement() {
    return Lu(this);
  }
  get previousSibling() {
    return Tn(this);
  }
  get nextSibling() {
    return _t(this);
  }
  get namespaceURI() {
    return "http://www.w3.org/1999/xhtml";
  }
  get previousElementSibling() {
    return Nu(this);
  }
  get nextElementSibling() {
    return as(this);
  }
  before(...e) {
    Mu(this, e);
  }
  after(...e) {
    Iu(this, e);
  }
  replaceWith(...e) {
    ls(this, e);
  }
  remove() {
    Ru(this[he], this, this[F][N]);
  }
  // </Mixins>
  // <specialGetters>
  get id() {
    return S.get(this, "id");
  }
  set id(e) {
    S.set(this, "id", e);
  }
  get className() {
    return this.classList.value;
  }
  set className(e) {
    const { classList: t } = this;
    t.clear(), t.add(...Rt(e).split(/\s+/));
  }
  get nodeName() {
    return xi(this);
  }
  get tagName() {
    return xi(this);
  }
  get classList() {
    return this[Yt] || (this[Yt] = new o1(this));
  }
  get dataset() {
    return this[Ro] || (this[Ro] = new ol(this));
  }
  getBoundingClientRect() {
    return {
      x: 0,
      y: 0,
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0
    };
  }
  get nonce() {
    return S.get(this, "nonce");
  }
  set nonce(e) {
    S.set(this, "nonce", e);
  }
  get style() {
    return this[_o] || (this[_o] = new il(this));
  }
  get tabIndex() {
    return yt.get(this, "tabindex") || -1;
  }
  set tabIndex(e) {
    yt.set(this, "tabindex", e);
  }
  get slot() {
    return S.get(this, "slot");
  }
  set slot(e) {
    S.set(this, "slot", e);
  }
  // </specialGetters>
  // <contentRelated>
  get innerText() {
    const e = [];
    let { [N]: t, [F]: o } = this;
    for (; t !== o; )
      t.nodeType === Ce ? e.push(t.textContent.replace(/\s+/g, " ")) : e.length && t[N] != o && Rp.has(t.tagName) && e.push(`
`), t = t[N];
    return e.join("");
  }
  /**
   * @returns {String}
   */
  get textContent() {
    const e = [];
    let { [N]: t, [F]: o } = this;
    for (; t !== o; )
      t.nodeType === Ce && e.push(t.textContent), t = t[N];
    return e.join("");
  }
  set textContent(e) {
    this.replaceChildren(), e != null && e !== "" && this.appendChild(new Rn(this.ownerDocument, e));
  }
  get innerHTML() {
    return el(this);
  }
  set innerHTML(e) {
    tl(this, e);
  }
  get outerHTML() {
    return this.toString();
  }
  set outerHTML(e) {
    const t = this.ownerDocument.createElement("");
    t.innerHTML = e, this.replaceWith(...t.childNodes);
  }
  // </contentRelated>
  // <attributes>
  get attributes() {
    const e = new sl(this);
    let t = this[N];
    for (; t.nodeType === me; )
      e.push(t), t = t[N];
    return new Proxy(e, a1);
  }
  focus() {
    this.dispatchEvent(new qt("focus"));
  }
  getAttribute(e) {
    if (e === "class")
      return this.className;
    const t = this.getAttributeNode(e);
    return t && t.value;
  }
  getAttributeNode(e) {
    let t = this[N];
    for (; t.nodeType === me; ) {
      if (t.name === e)
        return t;
      t = t[N];
    }
    return null;
  }
  getAttributeNames() {
    const e = new Xe();
    let t = this[N];
    for (; t.nodeType === me; )
      e.push(t.name), t = t[N];
    return e;
  }
  hasAttribute(e) {
    return !!this.getAttributeNode(e);
  }
  hasAttributes() {
    return this[N].nodeType === me;
  }
  removeAttribute(e) {
    e === "class" && this[Yt] && this[Yt].clear();
    let t = this[N];
    for (; t.nodeType === me; ) {
      if (t.name === e) {
        kr(this, t);
        return;
      }
      t = t[N];
    }
  }
  removeAttributeNode(e) {
    let t = this[N];
    for (; t.nodeType === me; ) {
      if (t === e) {
        kr(this, t);
        return;
      }
      t = t[N];
    }
  }
  setAttribute(e, t) {
    if (e === "class")
      this.className = t;
    else {
      const o = this.getAttributeNode(e);
      o ? o.value = t : wi(this, new Mn(this.ownerDocument, e, t));
    }
  }
  setAttributeNode(e) {
    const { name: t } = e, o = this.getAttributeNode(t);
    if (o !== e) {
      o && this.removeAttributeNode(o);
      const { ownerElement: i } = e;
      i && i.removeAttributeNode(e), wi(this, e);
    }
    return o;
  }
  toggleAttribute(e, t) {
    return this.hasAttribute(e) ? t ? !0 : (this.removeAttribute(e), !1) : t || arguments.length === 1 ? (this.setAttribute(e, ""), !0) : !1;
  }
  // </attributes>
  // <ShadowDOM>
  get shadowRoot() {
    if (vt.has(this)) {
      const { mode: e, shadowRoot: t } = vt.get(this);
      if (e === "open")
        return t;
    }
    return null;
  }
  attachShadow(e) {
    if (vt.has(this))
      throw new Error("operation not supported");
    const t = new gs(this);
    return vt.set(this, {
      mode: e.mode,
      shadowRoot: t
    }), t;
  }
  // </ShadowDOM>
  // <selectors>
  matches(e) {
    return Wf(this, e);
  }
  closest(e) {
    let t = this;
    const o = Ei(t, e);
    for (; t && !o(t); )
      t = t.parentElement;
    return t;
  }
  // </selectors>
  // <insertAdjacent>
  insertAdjacentElement(e, t) {
    const { parentElement: o } = this;
    switch (e) {
      case "beforebegin":
        if (o) {
          o.insertBefore(t, this);
          break;
        }
        return null;
      case "afterbegin":
        this.insertBefore(t, this.firstChild);
        break;
      case "beforeend":
        this.insertBefore(t, null);
        break;
      case "afterend":
        if (o) {
          o.insertBefore(t, this.nextSibling);
          break;
        }
        return null;
    }
    return t;
  }
  insertAdjacentHTML(e, t) {
    const o = this.ownerDocument.createElement("template");
    o.innerHTML = t, this.insertAdjacentElement(e, o.content);
  }
  insertAdjacentText(e, t) {
    const o = this.ownerDocument.createTextNode(t);
    this.insertAdjacentElement(e, o);
  }
  // </insertAdjacent>
  cloneNode(e = !1) {
    const { ownerDocument: t, localName: o } = this, i = (c) => {
      c.parentNode = r, Ge(a, c), a = c;
    }, s = Or(t, this, o);
    let r = s, a = s, { [N]: u, [F]: l } = this;
    for (; u !== l && (e || u.nodeType === me); ) {
      switch (u.nodeType) {
        case St:
          Ge(a, r[F]), a = r[F], r = r.parentNode;
          break;
        case J: {
          const c = Or(t, u, u.localName);
          i(c), r = c;
          break;
        }
        case me: {
          const c = u.cloneNode(e);
          c.ownerElement = r, i(c);
          break;
        }
        case Ce:
        case lt:
        case ut:
          i(u.cloneNode(e));
          break;
      }
      u = u[N];
    }
    return Ge(a, s[F]), s;
  }
  // <custom>
  toString() {
    const e = [], { [F]: t } = this;
    let o = { [N]: this }, i = !1;
    do
      switch (o = o[N], o.nodeType) {
        case me: {
          const s = " " + o;
          switch (s) {
            case " id":
            case " class":
            case " style":
              break;
            default:
              e.push(s);
          }
          break;
        }
        case St: {
          const s = o[Le];
          i ? ("ownerSVGElement" in s ? e.push(" />") : u1(s) ? e.push(un(s) ? ">" : " />") : e.push(`></${s.localName}>`), i = !1) : e.push(`</${s.localName}>`);
          break;
        }
        case J:
          i && e.push(">"), o.toString !== this.toString ? (e.push(o.toString()), o = o[F], i = !1) : (e.push(`<${o.localName}`), i = !0);
          break;
        case Ce:
        case lt:
        case ut:
          e.push((i ? ">" : "") + o), i = !1;
          break;
      }
    while (o !== t);
    return e.join("");
  }
  toJSON() {
    const e = [];
    return Eu(this, e), e;
  }
  // </custom>
  /* c8 ignore start */
  getAttributeNS(e, t) {
    return this.getAttribute(t);
  }
  getElementsByTagNameNS(e, t) {
    return this.getElementsByTagName(t);
  }
  hasAttributeNS(e, t) {
    return this.hasAttribute(t);
  }
  removeAttributeNS(e, t) {
    this.removeAttribute(t);
  }
  setAttributeNS(e, t, o) {
    this.setAttribute(t, o);
  }
  setAttributeNodeNS(e) {
    return this.setAttributeNode(e);
  }
  /* c8 ignore stop */
};
const Vo = /* @__PURE__ */ new WeakMap(), l1 = {
  get(n, e) {
    return n[e];
  },
  set(n, e, t) {
    return n[e] = t, !0;
  }
};
let Bn = class extends _n {
  constructor(e, t, o = null) {
    super(e, t), this.ownerSVGElement = o;
  }
  get className() {
    return Vo.has(this) || Vo.set(this, new Proxy({ baseVal: "", animVal: "" }, l1)), Vo.get(this);
  }
  /* c8 ignore start */
  set className(e) {
    const { classList: t } = this;
    t.clear(), t.add(...Rt(e).split(/\s+/));
  }
  /* c8 ignore stop */
  get namespaceURI() {
    return "http://www.w3.org/2000/svg";
  }
  getAttribute(e) {
    return e === "class" ? [...this.classList].join(" ") : super.getAttribute(e);
  }
  setAttribute(e, t) {
    if (e === "class")
      this.className = t;
    else if (e === "style") {
      const { className: o } = this;
      o.baseVal = o.animVal = t;
    }
    super.setAttribute(e, t);
  }
};
const Oe = () => {
  throw new TypeError("Illegal constructor");
};
function bs() {
  Oe();
}
Be(bs, Mn);
bs.prototype = Mn.prototype;
function ms() {
  Oe();
}
Be(ms, cs);
ms.prototype = cs.prototype;
function xs() {
  Oe();
}
Be(xs, In);
xs.prototype = In.prototype;
function vs() {
  Oe();
}
Be(vs, ds);
vs.prototype = ds.prototype;
function ys() {
  Oe();
}
Be(ys, fs);
ys.prototype = fs.prototype;
function ws() {
  Oe();
}
Be(ws, ro);
ws.prototype = ro.prototype;
function ks() {
  Oe();
}
Be(ks, _n);
ks.prototype = _n.prototype;
function Ss() {
  Oe();
}
Be(Ss, Ut);
Ss.prototype = Ut.prototype;
function Cs() {
  Oe();
}
Be(Cs, gs);
Cs.prototype = gs.prototype;
function Es() {
  Oe();
}
Be(Es, Rn);
Es.prototype = Rn.prototype;
function Ts() {
  Oe();
}
Be(Ts, Bn);
Ts.prototype = Bn.prototype;
const c1 = {
  Attr: bs,
  CDATASection: ms,
  CharacterData: xs,
  Comment: vs,
  DocumentFragment: ys,
  DocumentType: ws,
  Element: ks,
  Node: Ss,
  ShadowRoot: Cs,
  Text: Es,
  SVGElement: Ts
}, gn = /* @__PURE__ */ new WeakMap(), b = {
  get(n, e) {
    return gn.has(n) && gn.get(n)[e] || null;
  },
  set(n, e, t) {
    gn.has(n) || gn.set(n, {});
    const o = gn.get(n), i = e.slice(2);
    o[e] && n.removeEventListener(i, o[e], !1), (o[e] = t) && n.addEventListener(i, t, !1);
  }
};
let M = class extends _n {
  static get observedAttributes() {
    return [];
  }
  constructor(e = null, t = "") {
    super(e, t);
    const o = !e;
    let i;
    if (o) {
      const { constructor: s } = this;
      if (!Xt.has(s))
        throw new Error("unable to initialize this Custom Element");
      ({ ownerDocument: e, localName: t, options: i } = Xt.get(s));
    }
    if (e[yn]) {
      const { element: s, values: r } = e[yn];
      e[yn] = null;
      for (const [a, u] of r)
        s[a] = u;
      return s;
    }
    o && (this.ownerDocument = this[F].ownerDocument = e, this.localName = t, Ft.set(this, { connected: !1 }), i.is && this.setAttribute("is", i.is));
  }
  /* c8 ignore start */
  /* TODO: what about these?
  offsetHeight
  offsetLeft
  offsetParent
  offsetTop
  offsetWidth
  */
  blur() {
    this.dispatchEvent(new qt("blur"));
  }
  click() {
    const e = new qt("click", { bubbles: !0, cancelable: !0 });
    e.button = 0, this.dispatchEvent(e);
  }
  // Boolean getters
  get accessKeyLabel() {
    const { accessKey: e } = this;
    return e && `Alt+Shift+${e}`;
  }
  get isContentEditable() {
    return this.hasAttribute("contenteditable");
  }
  // Boolean Accessors
  get contentEditable() {
    return Q.get(this, "contenteditable");
  }
  set contentEditable(e) {
    Q.set(this, "contenteditable", e);
  }
  get draggable() {
    return Q.get(this, "draggable");
  }
  set draggable(e) {
    Q.set(this, "draggable", e);
  }
  get hidden() {
    return Q.get(this, "hidden");
  }
  set hidden(e) {
    Q.set(this, "hidden", e);
  }
  get spellcheck() {
    return Q.get(this, "spellcheck");
  }
  set spellcheck(e) {
    Q.set(this, "spellcheck", e);
  }
  // String Accessors
  get accessKey() {
    return S.get(this, "accesskey");
  }
  set accessKey(e) {
    S.set(this, "accesskey", e);
  }
  get dir() {
    return S.get(this, "dir");
  }
  set dir(e) {
    S.set(this, "dir", e);
  }
  get lang() {
    return S.get(this, "lang");
  }
  set lang(e) {
    S.set(this, "lang", e);
  }
  get title() {
    return S.get(this, "title");
  }
  set title(e) {
    S.set(this, "title", e);
  }
  // DOM Level 0
  get onabort() {
    return b.get(this, "onabort");
  }
  set onabort(e) {
    b.set(this, "onabort", e);
  }
  get onblur() {
    return b.get(this, "onblur");
  }
  set onblur(e) {
    b.set(this, "onblur", e);
  }
  get oncancel() {
    return b.get(this, "oncancel");
  }
  set oncancel(e) {
    b.set(this, "oncancel", e);
  }
  get oncanplay() {
    return b.get(this, "oncanplay");
  }
  set oncanplay(e) {
    b.set(this, "oncanplay", e);
  }
  get oncanplaythrough() {
    return b.get(this, "oncanplaythrough");
  }
  set oncanplaythrough(e) {
    b.set(this, "oncanplaythrough", e);
  }
  get onchange() {
    return b.get(this, "onchange");
  }
  set onchange(e) {
    b.set(this, "onchange", e);
  }
  get onclick() {
    return b.get(this, "onclick");
  }
  set onclick(e) {
    b.set(this, "onclick", e);
  }
  get onclose() {
    return b.get(this, "onclose");
  }
  set onclose(e) {
    b.set(this, "onclose", e);
  }
  get oncontextmenu() {
    return b.get(this, "oncontextmenu");
  }
  set oncontextmenu(e) {
    b.set(this, "oncontextmenu", e);
  }
  get oncuechange() {
    return b.get(this, "oncuechange");
  }
  set oncuechange(e) {
    b.set(this, "oncuechange", e);
  }
  get ondblclick() {
    return b.get(this, "ondblclick");
  }
  set ondblclick(e) {
    b.set(this, "ondblclick", e);
  }
  get ondrag() {
    return b.get(this, "ondrag");
  }
  set ondrag(e) {
    b.set(this, "ondrag", e);
  }
  get ondragend() {
    return b.get(this, "ondragend");
  }
  set ondragend(e) {
    b.set(this, "ondragend", e);
  }
  get ondragenter() {
    return b.get(this, "ondragenter");
  }
  set ondragenter(e) {
    b.set(this, "ondragenter", e);
  }
  get ondragleave() {
    return b.get(this, "ondragleave");
  }
  set ondragleave(e) {
    b.set(this, "ondragleave", e);
  }
  get ondragover() {
    return b.get(this, "ondragover");
  }
  set ondragover(e) {
    b.set(this, "ondragover", e);
  }
  get ondragstart() {
    return b.get(this, "ondragstart");
  }
  set ondragstart(e) {
    b.set(this, "ondragstart", e);
  }
  get ondrop() {
    return b.get(this, "ondrop");
  }
  set ondrop(e) {
    b.set(this, "ondrop", e);
  }
  get ondurationchange() {
    return b.get(this, "ondurationchange");
  }
  set ondurationchange(e) {
    b.set(this, "ondurationchange", e);
  }
  get onemptied() {
    return b.get(this, "onemptied");
  }
  set onemptied(e) {
    b.set(this, "onemptied", e);
  }
  get onended() {
    return b.get(this, "onended");
  }
  set onended(e) {
    b.set(this, "onended", e);
  }
  get onerror() {
    return b.get(this, "onerror");
  }
  set onerror(e) {
    b.set(this, "onerror", e);
  }
  get onfocus() {
    return b.get(this, "onfocus");
  }
  set onfocus(e) {
    b.set(this, "onfocus", e);
  }
  get oninput() {
    return b.get(this, "oninput");
  }
  set oninput(e) {
    b.set(this, "oninput", e);
  }
  get oninvalid() {
    return b.get(this, "oninvalid");
  }
  set oninvalid(e) {
    b.set(this, "oninvalid", e);
  }
  get onkeydown() {
    return b.get(this, "onkeydown");
  }
  set onkeydown(e) {
    b.set(this, "onkeydown", e);
  }
  get onkeypress() {
    return b.get(this, "onkeypress");
  }
  set onkeypress(e) {
    b.set(this, "onkeypress", e);
  }
  get onkeyup() {
    return b.get(this, "onkeyup");
  }
  set onkeyup(e) {
    b.set(this, "onkeyup", e);
  }
  get onload() {
    return b.get(this, "onload");
  }
  set onload(e) {
    b.set(this, "onload", e);
  }
  get onloadeddata() {
    return b.get(this, "onloadeddata");
  }
  set onloadeddata(e) {
    b.set(this, "onloadeddata", e);
  }
  get onloadedmetadata() {
    return b.get(this, "onloadedmetadata");
  }
  set onloadedmetadata(e) {
    b.set(this, "onloadedmetadata", e);
  }
  get onloadstart() {
    return b.get(this, "onloadstart");
  }
  set onloadstart(e) {
    b.set(this, "onloadstart", e);
  }
  get onmousedown() {
    return b.get(this, "onmousedown");
  }
  set onmousedown(e) {
    b.set(this, "onmousedown", e);
  }
  get onmouseenter() {
    return b.get(this, "onmouseenter");
  }
  set onmouseenter(e) {
    b.set(this, "onmouseenter", e);
  }
  get onmouseleave() {
    return b.get(this, "onmouseleave");
  }
  set onmouseleave(e) {
    b.set(this, "onmouseleave", e);
  }
  get onmousemove() {
    return b.get(this, "onmousemove");
  }
  set onmousemove(e) {
    b.set(this, "onmousemove", e);
  }
  get onmouseout() {
    return b.get(this, "onmouseout");
  }
  set onmouseout(e) {
    b.set(this, "onmouseout", e);
  }
  get onmouseover() {
    return b.get(this, "onmouseover");
  }
  set onmouseover(e) {
    b.set(this, "onmouseover", e);
  }
  get onmouseup() {
    return b.get(this, "onmouseup");
  }
  set onmouseup(e) {
    b.set(this, "onmouseup", e);
  }
  get onmousewheel() {
    return b.get(this, "onmousewheel");
  }
  set onmousewheel(e) {
    b.set(this, "onmousewheel", e);
  }
  get onpause() {
    return b.get(this, "onpause");
  }
  set onpause(e) {
    b.set(this, "onpause", e);
  }
  get onplay() {
    return b.get(this, "onplay");
  }
  set onplay(e) {
    b.set(this, "onplay", e);
  }
  get onplaying() {
    return b.get(this, "onplaying");
  }
  set onplaying(e) {
    b.set(this, "onplaying", e);
  }
  get onprogress() {
    return b.get(this, "onprogress");
  }
  set onprogress(e) {
    b.set(this, "onprogress", e);
  }
  get onratechange() {
    return b.get(this, "onratechange");
  }
  set onratechange(e) {
    b.set(this, "onratechange", e);
  }
  get onreset() {
    return b.get(this, "onreset");
  }
  set onreset(e) {
    b.set(this, "onreset", e);
  }
  get onresize() {
    return b.get(this, "onresize");
  }
  set onresize(e) {
    b.set(this, "onresize", e);
  }
  get onscroll() {
    return b.get(this, "onscroll");
  }
  set onscroll(e) {
    b.set(this, "onscroll", e);
  }
  get onseeked() {
    return b.get(this, "onseeked");
  }
  set onseeked(e) {
    b.set(this, "onseeked", e);
  }
  get onseeking() {
    return b.get(this, "onseeking");
  }
  set onseeking(e) {
    b.set(this, "onseeking", e);
  }
  get onselect() {
    return b.get(this, "onselect");
  }
  set onselect(e) {
    b.set(this, "onselect", e);
  }
  get onshow() {
    return b.get(this, "onshow");
  }
  set onshow(e) {
    b.set(this, "onshow", e);
  }
  get onstalled() {
    return b.get(this, "onstalled");
  }
  set onstalled(e) {
    b.set(this, "onstalled", e);
  }
  get onsubmit() {
    return b.get(this, "onsubmit");
  }
  set onsubmit(e) {
    b.set(this, "onsubmit", e);
  }
  get onsuspend() {
    return b.get(this, "onsuspend");
  }
  set onsuspend(e) {
    b.set(this, "onsuspend", e);
  }
  get ontimeupdate() {
    return b.get(this, "ontimeupdate");
  }
  set ontimeupdate(e) {
    b.set(this, "ontimeupdate", e);
  }
  get ontoggle() {
    return b.get(this, "ontoggle");
  }
  set ontoggle(e) {
    b.set(this, "ontoggle", e);
  }
  get onvolumechange() {
    return b.get(this, "onvolumechange");
  }
  set onvolumechange(e) {
    b.set(this, "onvolumechange", e);
  }
  get onwaiting() {
    return b.get(this, "onwaiting");
  }
  set onwaiting(e) {
    b.set(this, "onwaiting", e);
  }
  get onauxclick() {
    return b.get(this, "onauxclick");
  }
  set onauxclick(e) {
    b.set(this, "onauxclick", e);
  }
  get ongotpointercapture() {
    return b.get(this, "ongotpointercapture");
  }
  set ongotpointercapture(e) {
    b.set(this, "ongotpointercapture", e);
  }
  get onlostpointercapture() {
    return b.get(this, "onlostpointercapture");
  }
  set onlostpointercapture(e) {
    b.set(this, "onlostpointercapture", e);
  }
  get onpointercancel() {
    return b.get(this, "onpointercancel");
  }
  set onpointercancel(e) {
    b.set(this, "onpointercancel", e);
  }
  get onpointerdown() {
    return b.get(this, "onpointerdown");
  }
  set onpointerdown(e) {
    b.set(this, "onpointerdown", e);
  }
  get onpointerenter() {
    return b.get(this, "onpointerenter");
  }
  set onpointerenter(e) {
    b.set(this, "onpointerenter", e);
  }
  get onpointerleave() {
    return b.get(this, "onpointerleave");
  }
  set onpointerleave(e) {
    b.set(this, "onpointerleave", e);
  }
  get onpointermove() {
    return b.get(this, "onpointermove");
  }
  set onpointermove(e) {
    b.set(this, "onpointermove", e);
  }
  get onpointerout() {
    return b.get(this, "onpointerout");
  }
  set onpointerout(e) {
    b.set(this, "onpointerout", e);
  }
  get onpointerover() {
    return b.get(this, "onpointerover");
  }
  set onpointerover(e) {
    b.set(this, "onpointerover", e);
  }
  get onpointerup() {
    return b.get(this, "onpointerup");
  }
  set onpointerup(e) {
    b.set(this, "onpointerup", e);
  }
  /* c8 ignore stop */
};
const rl = "template";
class al extends M {
  constructor(e) {
    super(e, rl);
    const t = this.ownerDocument.createDocumentFragment();
    (this[Pn] = t)[Se] = this;
  }
  get content() {
    if (this.hasChildNodes() && !this[Pn].hasChildNodes())
      for (const e of this.childNodes)
        this[Pn].appendChild(e.cloneNode(!0));
    return this[Pn];
  }
}
fe(rl, al);
class d1 extends M {
  constructor(e, t = "html") {
    super(e, t);
  }
}
const { toString: h1 } = M.prototype;
class Eo extends M {
  get innerHTML() {
    return this.textContent;
  }
  set innerHTML(e) {
    this.textContent = e;
  }
  toString() {
    return h1.call(this.cloneNode()).replace(/></, `>${this.textContent}<`);
  }
}
const ul = "script";
class ll extends Eo {
  constructor(e, t = ul) {
    super(e, t);
  }
  get type() {
    return S.get(this, "type");
  }
  set type(e) {
    S.set(this, "type", e);
  }
  get src() {
    return S.get(this, "src");
  }
  set src(e) {
    S.set(this, "src", e);
  }
  get defer() {
    return Q.get(this, "defer");
  }
  set defer(e) {
    Q.set(this, "defer", e);
  }
  get crossOrigin() {
    return S.get(this, "crossorigin");
  }
  set crossOrigin(e) {
    S.set(this, "crossorigin", e);
  }
  get nomodule() {
    return Q.get(this, "nomodule");
  }
  set nomodule(e) {
    Q.set(this, "nomodule", e);
  }
  get referrerPolicy() {
    return S.get(this, "referrerpolicy");
  }
  set referrerPolicy(e) {
    S.set(this, "referrerpolicy", e);
  }
  get nonce() {
    return S.get(this, "nonce");
  }
  set nonce(e) {
    S.set(this, "nonce", e);
  }
  get async() {
    return Q.get(this, "async");
  }
  set async(e) {
    Q.set(this, "async", e);
  }
  get text() {
    return this.textContent;
  }
  set text(e) {
    this.textContent = e;
  }
}
fe(ul, ll);
class p1 extends M {
  constructor(e, t = "frame") {
    super(e, t);
  }
}
const cl = "iframe";
class dl extends M {
  constructor(e, t = cl) {
    super(e, t);
  }
  /* c8 ignore start */
  get src() {
    return S.get(this, "src");
  }
  set src(e) {
    S.set(this, "src", e);
  }
  get srcdoc() {
    return S.get(this, "srcdoc");
  }
  set srcdoc(e) {
    S.set(this, "srcdoc", e);
  }
  get name() {
    return S.get(this, "name");
  }
  set name(e) {
    S.set(this, "name", e);
  }
  get allow() {
    return S.get(this, "allow");
  }
  set allow(e) {
    S.set(this, "allow", e);
  }
  get allowFullscreen() {
    return Q.get(this, "allowfullscreen");
  }
  set allowFullscreen(e) {
    Q.set(this, "allowfullscreen", e);
  }
  get referrerPolicy() {
    return S.get(this, "referrerpolicy");
  }
  set referrerPolicy(e) {
    S.set(this, "referrerpolicy", e);
  }
  get loading() {
    return S.get(this, "loading");
  }
  set loading(e) {
    S.set(this, "loading", e);
  }
  /* c8 ignore stop */
}
fe(cl, dl);
class f1 extends M {
  constructor(e, t = "object") {
    super(e, t);
  }
}
class g1 extends M {
  constructor(e, t = "head") {
    super(e, t);
  }
}
class b1 extends M {
  constructor(e, t = "body") {
    super(e, t);
  }
}
var zo = {}, Go = {}, Wo = {}, hl = {}, pl = {};
pl.StyleSheet = function() {
  this.parentStyleSheet = null;
};
hl.StyleSheet = pl.StyleSheet;
var Ko = {}, De = {}, ue = {};
ue.CSSRule = function() {
  this.parentRule = null, this.parentStyleSheet = null;
};
ue.CSSRule.UNKNOWN_RULE = 0;
ue.CSSRule.STYLE_RULE = 1;
ue.CSSRule.CHARSET_RULE = 2;
ue.CSSRule.IMPORT_RULE = 3;
ue.CSSRule.MEDIA_RULE = 4;
ue.CSSRule.FONT_FACE_RULE = 5;
ue.CSSRule.PAGE_RULE = 6;
ue.CSSRule.KEYFRAMES_RULE = 7;
ue.CSSRule.KEYFRAME_RULE = 8;
ue.CSSRule.MARGIN_RULE = 9;
ue.CSSRule.NAMESPACE_RULE = 10;
ue.CSSRule.COUNTER_STYLE_RULE = 11;
ue.CSSRule.SUPPORTS_RULE = 12;
ue.CSSRule.DOCUMENT_RULE = 13;
ue.CSSRule.FONT_FEATURE_VALUES_RULE = 14;
ue.CSSRule.VIEWPORT_RULE = 15;
ue.CSSRule.REGION_STYLE_RULE = 16;
ue.CSSRule.prototype = {
  constructor: ue.CSSRule
  //FIXME
};
De.CSSRule = ue.CSSRule;
var Dr;
function To() {
  if (Dr)
    return Ko;
  Dr = 1;
  var n = {
    CSSStyleDeclaration: dn().CSSStyleDeclaration,
    CSSRule: De.CSSRule
  };
  return n.CSSStyleRule = function() {
    n.CSSRule.call(this), this.selectorText = "", this.style = new n.CSSStyleDeclaration(), this.style.parentRule = this;
  }, n.CSSStyleRule.prototype = new n.CSSRule(), n.CSSStyleRule.prototype.constructor = n.CSSStyleRule, n.CSSStyleRule.prototype.type = 1, Object.defineProperty(n.CSSStyleRule.prototype, "cssText", {
    get: function() {
      var e;
      return this.selectorText ? e = this.selectorText + " {" + this.style.cssText + "}" : e = "", e;
    },
    set: function(e) {
      var t = n.CSSStyleRule.parse(e);
      this.style = t.style, this.selectorText = t.selectorText;
    }
  }), n.CSSStyleRule.parse = function(e) {
    for (var t = 0, o = "selector", i, s = t, r = "", a = {
      selector: !0,
      value: !0
    }, u = new n.CSSStyleRule(), l, c = "", d; d = e.charAt(t); t++)
      switch (d) {
        case " ":
        case "	":
        case "\r":
        case `
`:
        case "\f":
          if (a[o])
            switch (e.charAt(t - 1)) {
              case " ":
              case "	":
              case "\r":
              case `
`:
              case "\f":
                break;
              default:
                r += " ";
                break;
            }
          break;
        case '"':
          if (s = t + 1, i = e.indexOf('"', s) + 1, !i)
            throw '" is missing';
          r += e.slice(t, i), t = i - 1;
          break;
        case "'":
          if (s = t + 1, i = e.indexOf("'", s) + 1, !i)
            throw "' is missing";
          r += e.slice(t, i), t = i - 1;
          break;
        case "/":
          if (e.charAt(t + 1) === "*") {
            if (t += 2, i = e.indexOf("*/", t), i === -1)
              throw new SyntaxError("Missing */");
            t = i + 1;
          } else
            r += d;
          break;
        case "{":
          o === "selector" && (u.selectorText = r.trim(), r = "", o = "name");
          break;
        case ":":
          o === "name" ? (l = r.trim(), r = "", o = "value") : r += d;
          break;
        case "!":
          o === "value" && e.indexOf("!important", t) === t ? (c = "important", t += 9) : r += d;
          break;
        case ";":
          o === "value" ? (u.style.setProperty(l, r.trim(), c), c = "", r = "", o = "name") : r += d;
          break;
        case "}":
          if (o === "value")
            u.style.setProperty(l, r.trim(), c), c = "", r = "";
          else {
            if (o === "name")
              break;
            r += d;
          }
          o = "selector";
          break;
        default:
          r += d;
          break;
      }
    return u;
  }, Ko.CSSStyleRule = n.CSSStyleRule, Ko;
}
var Pr;
function Bo() {
  if (Pr)
    return Wo;
  Pr = 1;
  var n = {
    StyleSheet: hl.StyleSheet,
    CSSStyleRule: To().CSSStyleRule
  };
  return n.CSSStyleSheet = function() {
    n.StyleSheet.call(this), this.cssRules = [];
  }, n.CSSStyleSheet.prototype = new n.StyleSheet(), n.CSSStyleSheet.prototype.constructor = n.CSSStyleSheet, n.CSSStyleSheet.prototype.insertRule = function(e, t) {
    if (t < 0 || t > this.cssRules.length)
      throw new RangeError("INDEX_SIZE_ERR");
    var o = n.parse(e).cssRules[0];
    return o.parentStyleSheet = this, this.cssRules.splice(t, 0, o), t;
  }, n.CSSStyleSheet.prototype.deleteRule = function(e) {
    if (e < 0 || e >= this.cssRules.length)
      throw new RangeError("INDEX_SIZE_ERR");
    this.cssRules.splice(e, 1);
  }, n.CSSStyleSheet.prototype.toString = function() {
    for (var e = "", t = this.cssRules, o = 0; o < t.length; o++)
      e += t[o].cssText + `
`;
    return e;
  }, Wo.CSSStyleSheet = n.CSSStyleSheet, n.parse = Is().parse, Wo;
}
var Zo = {}, Bs = {}, lo = {};
lo.MediaList = function() {
  this.length = 0;
};
lo.MediaList.prototype = {
  constructor: lo.MediaList,
  /**
   * @return {string}
   */
  get mediaText() {
    return Array.prototype.join.call(this, ", ");
  },
  /**
   * @param {string} value
   */
  set mediaText(n) {
    for (var e = n.split(","), t = this.length = e.length, o = 0; o < t; o++)
      this[o] = e[o].trim();
  },
  /**
   * @param {string} medium
   */
  appendMedium: function(n) {
    Array.prototype.indexOf.call(this, n) === -1 && (this[this.length] = n, this.length++);
  },
  /**
   * @param {string} medium
   */
  deleteMedium: function(n) {
    var e = Array.prototype.indexOf.call(this, n);
    e !== -1 && Array.prototype.splice.call(this, e, 1);
  }
};
Bs.MediaList = lo.MediaList;
var Hr;
function fl() {
  if (Hr)
    return Zo;
  Hr = 1;
  var n = {
    CSSRule: De.CSSRule,
    CSSStyleSheet: Bo().CSSStyleSheet,
    MediaList: Bs.MediaList
  };
  return n.CSSImportRule = function() {
    n.CSSRule.call(this), this.href = "", this.media = new n.MediaList(), this.styleSheet = new n.CSSStyleSheet();
  }, n.CSSImportRule.prototype = new n.CSSRule(), n.CSSImportRule.prototype.constructor = n.CSSImportRule, n.CSSImportRule.prototype.type = 3, Object.defineProperty(n.CSSImportRule.prototype, "cssText", {
    get: function() {
      var e = this.media.mediaText;
      return "@import url(" + this.href + ")" + (e ? " " + e : "") + ";";
    },
    set: function(e) {
      for (var t = 0, o = "", i = "", s, r; r = e.charAt(t); t++)
        switch (r) {
          case " ":
          case "	":
          case "\r":
          case `
`:
          case "\f":
            o === "after-import" ? o = "url" : i += r;
            break;
          case "@":
            !o && e.indexOf("@import", t) === t && (o = "after-import", t += 6, i = "");
            break;
          case "u":
            if (o === "url" && e.indexOf("url(", t) === t) {
              if (s = e.indexOf(")", t + 1), s === -1)
                throw t + ': ")" not found';
              t += 4;
              var a = e.slice(t, s);
              a[0] === a[a.length - 1] && (a[0] === '"' || a[0] === "'") && (a = a.slice(1, -1)), this.href = a, t = s, o = "media";
            }
            break;
          case '"':
            if (o === "url") {
              if (s = e.indexOf('"', t + 1), !s)
                throw t + `: '"' not found`;
              this.href = e.slice(t + 1, s), t = s, o = "media";
            }
            break;
          case "'":
            if (o === "url") {
              if (s = e.indexOf("'", t + 1), !s)
                throw t + `: "'" not found`;
              this.href = e.slice(t + 1, s), t = s, o = "media";
            }
            break;
          case ";":
            o === "media" && i && (this.media.mediaText = i.trim());
            break;
          default:
            o === "media" && (i += r);
            break;
        }
    }
  }), Zo.CSSImportRule = n.CSSImportRule, Zo;
}
var cn = {}, et = {
  CSSRule: De.CSSRule
};
et.CSSGroupingRule = function() {
  et.CSSRule.call(this), this.cssRules = [];
};
et.CSSGroupingRule.prototype = new et.CSSRule();
et.CSSGroupingRule.prototype.constructor = et.CSSGroupingRule;
et.CSSGroupingRule.prototype.insertRule = function(e, t) {
  if (t < 0 || t > this.cssRules.length)
    throw new RangeError("INDEX_SIZE_ERR");
  var o = et.parse(e).cssRules[0];
  return o.parentRule = this, this.cssRules.splice(t, 0, o), t;
};
et.CSSGroupingRule.prototype.deleteRule = function(e) {
  if (e < 0 || e >= this.cssRules.length)
    throw new RangeError("INDEX_SIZE_ERR");
  this.cssRules.splice(e, 1)[0].parentRule = null;
};
cn.CSSGroupingRule = et.CSSGroupingRule;
var As = {}, On = {}, ct = {
  CSSRule: De.CSSRule,
  CSSGroupingRule: cn.CSSGroupingRule
};
ct.CSSConditionRule = function() {
  ct.CSSGroupingRule.call(this), this.cssRules = [];
};
ct.CSSConditionRule.prototype = new ct.CSSGroupingRule();
ct.CSSConditionRule.prototype.constructor = ct.CSSConditionRule;
ct.CSSConditionRule.prototype.conditionText = "";
ct.CSSConditionRule.prototype.cssText = "";
On.CSSConditionRule = ct.CSSConditionRule;
var Je = {
  CSSRule: De.CSSRule,
  CSSGroupingRule: cn.CSSGroupingRule,
  CSSConditionRule: On.CSSConditionRule,
  MediaList: Bs.MediaList
};
Je.CSSMediaRule = function() {
  Je.CSSConditionRule.call(this), this.media = new Je.MediaList();
};
Je.CSSMediaRule.prototype = new Je.CSSConditionRule();
Je.CSSMediaRule.prototype.constructor = Je.CSSMediaRule;
Je.CSSMediaRule.prototype.type = 4;
Object.defineProperties(Je.CSSMediaRule.prototype, {
  conditionText: {
    get: function() {
      return this.media.mediaText;
    },
    set: function(n) {
      this.media.mediaText = n;
    },
    configurable: !0,
    enumerable: !0
  },
  cssText: {
    get: function() {
      for (var n = [], e = 0, t = this.cssRules.length; e < t; e++)
        n.push(this.cssRules[e].cssText);
      return "@media " + this.media.mediaText + " {" + n.join("") + "}";
    },
    configurable: !0,
    enumerable: !0
  }
});
As.CSSMediaRule = Je.CSSMediaRule;
var Ls = {}, dt = {
  CSSRule: De.CSSRule,
  CSSGroupingRule: cn.CSSGroupingRule,
  CSSConditionRule: On.CSSConditionRule
};
dt.CSSSupportsRule = function() {
  dt.CSSConditionRule.call(this);
};
dt.CSSSupportsRule.prototype = new dt.CSSConditionRule();
dt.CSSSupportsRule.prototype.constructor = dt.CSSSupportsRule;
dt.CSSSupportsRule.prototype.type = 12;
Object.defineProperty(dt.CSSSupportsRule.prototype, "cssText", {
  get: function() {
    for (var n = [], e = 0, t = this.cssRules.length; e < t; e++)
      n.push(this.cssRules[e].cssText);
    return "@supports " + this.conditionText + " {" + n.join("") + "}";
  }
});
Ls.CSSSupportsRule = dt.CSSSupportsRule;
var Yo = {}, Fr;
function gl() {
  if (Fr)
    return Yo;
  Fr = 1;
  var n = {
    CSSStyleDeclaration: dn().CSSStyleDeclaration,
    CSSRule: De.CSSRule
  };
  return n.CSSFontFaceRule = function() {
    n.CSSRule.call(this), this.style = new n.CSSStyleDeclaration(), this.style.parentRule = this;
  }, n.CSSFontFaceRule.prototype = new n.CSSRule(), n.CSSFontFaceRule.prototype.constructor = n.CSSFontFaceRule, n.CSSFontFaceRule.prototype.type = 5, Object.defineProperty(n.CSSFontFaceRule.prototype, "cssText", {
    get: function() {
      return "@font-face {" + this.style.cssText + "}";
    }
  }), Yo.CSSFontFaceRule = n.CSSFontFaceRule, Yo;
}
var bl = {}, ht = {
  CSSRule: De.CSSRule
};
ht.CSSHostRule = function() {
  ht.CSSRule.call(this), this.cssRules = [];
};
ht.CSSHostRule.prototype = new ht.CSSRule();
ht.CSSHostRule.prototype.constructor = ht.CSSHostRule;
ht.CSSHostRule.prototype.type = 1001;
Object.defineProperty(ht.CSSHostRule.prototype, "cssText", {
  get: function() {
    for (var n = [], e = 0, t = this.cssRules.length; e < t; e++)
      n.push(this.cssRules[e].cssText);
    return "@host {" + n.join("") + "}";
  }
});
bl.CSSHostRule = ht.CSSHostRule;
var Xo = {}, qr;
function Ns() {
  if (qr)
    return Xo;
  qr = 1;
  var n = {
    CSSRule: De.CSSRule,
    CSSStyleDeclaration: dn().CSSStyleDeclaration
  };
  return n.CSSKeyframeRule = function() {
    n.CSSRule.call(this), this.keyText = "", this.style = new n.CSSStyleDeclaration(), this.style.parentRule = this;
  }, n.CSSKeyframeRule.prototype = new n.CSSRule(), n.CSSKeyframeRule.prototype.constructor = n.CSSKeyframeRule, n.CSSKeyframeRule.prototype.type = 8, Object.defineProperty(n.CSSKeyframeRule.prototype, "cssText", {
    get: function() {
      return this.keyText + " {" + this.style.cssText + "} ";
    }
  }), Xo.CSSKeyframeRule = n.CSSKeyframeRule, Xo;
}
var Ms = {}, pt = {
  CSSRule: De.CSSRule
};
pt.CSSKeyframesRule = function() {
  pt.CSSRule.call(this), this.name = "", this.cssRules = [];
};
pt.CSSKeyframesRule.prototype = new pt.CSSRule();
pt.CSSKeyframesRule.prototype.constructor = pt.CSSKeyframesRule;
pt.CSSKeyframesRule.prototype.type = 7;
Object.defineProperty(pt.CSSKeyframesRule.prototype, "cssText", {
  get: function() {
    for (var n = [], e = 0, t = this.cssRules.length; e < t; e++)
      n.push("  " + this.cssRules[e].cssText);
    return "@" + (this._vendorPrefix || "") + "keyframes " + this.name + ` { 
` + n.join(`
`) + `
}`;
  }
});
Ms.CSSKeyframesRule = pt.CSSKeyframesRule;
var ml = {}, xl = {}, co = {};
co.CSSValue = function() {
};
co.CSSValue.prototype = {
  constructor: co.CSSValue,
  // @see: http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue
  set cssText(n) {
    var e = this._getConstructorName();
    throw new Error('DOMException: property "cssText" of "' + e + '" is readonly and can not be replaced with "' + n + '"!');
  },
  get cssText() {
    var n = this._getConstructorName();
    throw new Error('getter "cssText" of "' + n + '" is not implemented!');
  },
  _getConstructorName: function() {
    var n = this.constructor.toString(), e = n.match(/function\s([^\(]+)/), t = e[1];
    return t;
  }
};
xl.CSSValue = co.CSSValue;
var We = {
  CSSValue: xl.CSSValue
};
We.CSSValueExpression = function(e, t) {
  this._token = e, this._idx = t;
};
We.CSSValueExpression.prototype = new We.CSSValue();
We.CSSValueExpression.prototype.constructor = We.CSSValueExpression;
We.CSSValueExpression.prototype.parse = function() {
  for (var n = this._token, e = this._idx, t = "", o = "", i = "", s, r = []; ; ++e) {
    if (t = n.charAt(e), t === "") {
      i = "css expression error: unfinished expression!";
      break;
    }
    switch (t) {
      case "(":
        r.push(t), o += t;
        break;
      case ")":
        r.pop(t), o += t;
        break;
      case "/":
        (s = this._parseJSComment(n, e)) ? s.error ? i = "css expression error: unfinished comment in expression!" : e = s.idx : (s = this._parseJSRexExp(n, e)) ? (e = s.idx, o += s.text) : o += t;
        break;
      case "'":
      case '"':
        s = this._parseJSString(n, e, t), s ? (e = s.idx, o += s.text) : o += t;
        break;
      default:
        o += t;
        break;
    }
    if (i || r.length === 0)
      break;
  }
  var a;
  return i ? a = {
    error: i
  } : a = {
    idx: e,
    expression: o
  }, a;
};
We.CSSValueExpression.prototype._parseJSComment = function(n, e) {
  var t = n.charAt(e + 1), o;
  if (t === "/" || t === "*") {
    var i = e, s, r;
    if (t === "/" ? r = `
` : t === "*" && (r = "*/"), s = n.indexOf(r, i + 1 + 1), s !== -1)
      return s = s + r.length - 1, o = n.substring(e, s + 1), {
        idx: s,
        text: o
      };
    var a = "css expression error: unfinished comment in expression!";
    return {
      error: a
    };
  } else
    return !1;
};
We.CSSValueExpression.prototype._parseJSString = function(n, e, t) {
  var o = this._findMatchedIdx(n, e, t), i;
  return o === -1 ? !1 : (i = n.substring(e, o + t.length), {
    idx: o,
    text: i
  });
};
We.CSSValueExpression.prototype._parseJSRexExp = function(n, e) {
  var t = n.substring(0, e).replace(/\s+$/, ""), o = [
    /^$/,
    /\($/,
    /\[$/,
    /\!$/,
    /\+$/,
    /\-$/,
    /\*$/,
    /\/\s+/,
    /\%$/,
    /\=$/,
    /\>$/,
    /<$/,
    /\&$/,
    /\|$/,
    /\^$/,
    /\~$/,
    /\?$/,
    /\,$/,
    /delete$/,
    /in$/,
    /instanceof$/,
    /new$/,
    /typeof$/,
    /void$/
  ], i = o.some(function(r) {
    return r.test(t);
  });
  if (i) {
    var s = "/";
    return this._parseJSString(n, e, s);
  } else
    return !1;
};
We.CSSValueExpression.prototype._findMatchedIdx = function(n, e, t) {
  for (var o = e, i, s = -1; ; )
    if (i = n.indexOf(t, o + 1), i === -1) {
      i = s;
      break;
    } else {
      var r = n.substring(e + 1, i), a = r.match(/\\+$/);
      if (!a || a[0] % 2 === 0)
        break;
      o = i;
    }
  var u = n.indexOf(`
`, e + 1);
  return u < i && (i = s), i;
};
ml.CSSValueExpression = We.CSSValueExpression;
var vl = {}, yl = {}, ho = {};
ho.MatcherList = function() {
  this.length = 0;
};
ho.MatcherList.prototype = {
  constructor: ho.MatcherList,
  /**
   * @return {string}
   */
  get matcherText() {
    return Array.prototype.join.call(this, ", ");
  },
  /**
   * @param {string} value
   */
  set matcherText(n) {
    for (var e = n.split(","), t = this.length = e.length, o = 0; o < t; o++)
      this[o] = e[o].trim();
  },
  /**
   * @param {string} matcher
   */
  appendMatcher: function(n) {
    Array.prototype.indexOf.call(this, n) === -1 && (this[this.length] = n, this.length++);
  },
  /**
   * @param {string} matcher
   */
  deleteMatcher: function(n) {
    var e = Array.prototype.indexOf.call(this, n);
    e !== -1 && Array.prototype.splice.call(this, e, 1);
  }
};
yl.MatcherList = ho.MatcherList;
var Qe = {
  CSSRule: De.CSSRule,
  MatcherList: yl.MatcherList
};
Qe.CSSDocumentRule = function() {
  Qe.CSSRule.call(this), this.matcher = new Qe.MatcherList(), this.cssRules = [];
};
Qe.CSSDocumentRule.prototype = new Qe.CSSRule();
Qe.CSSDocumentRule.prototype.constructor = Qe.CSSDocumentRule;
Qe.CSSDocumentRule.prototype.type = 10;
Object.defineProperty(Qe.CSSDocumentRule.prototype, "cssText", {
  get: function() {
    for (var n = [], e = 0, t = this.cssRules.length; e < t; e++)
      n.push(this.cssRules[e].cssText);
    return "@-moz-document " + this.matcher.matcherText + " {" + n.join("") + "}";
  }
});
vl.CSSDocumentRule = Qe.CSSDocumentRule;
var $r;
function Is() {
  if ($r)
    return Go;
  $r = 1;
  var n = {};
  return n.parse = function(t) {
    for (var o = 0, i = "before-selector", s, r = "", a = 0, u = {
      selector: !0,
      value: !0,
      "value-parenthesis": !0,
      atRule: !0,
      "importRule-begin": !0,
      importRule: !0,
      atBlock: !0,
      conditionBlock: !0,
      "documentRule-begin": !0
    }, l = new n.CSSStyleSheet(), c = l, d, h = [], g = !1, f, v, p = "", k, x, P, z, L, I, D, E, C = /@(-(?:\w+-)+)?keyframes/g, B = function(oe) {
      var y = t.substring(0, o).split(`
`), T = y.length, R = y.pop().length + 1, O = new Error(oe + " (line " + T + ", char " + R + ")");
      throw O.line = T, O.char = R, O.styleSheet = l, O;
    }, A; A = t.charAt(o); o++)
      switch (A) {
        case " ":
        case "	":
        case "\r":
        case `
`:
        case "\f":
          u[i] && (r += A);
          break;
        case '"':
          s = o + 1;
          do
            s = t.indexOf('"', s) + 1, s || B('Unmatched "');
          while (t[s - 2] === "\\");
          switch (r += t.slice(o, s), o = s - 1, i) {
            case "before-value":
              i = "value";
              break;
            case "importRule-begin":
              i = "importRule";
              break;
          }
          break;
        case "'":
          s = o + 1;
          do
            s = t.indexOf("'", s) + 1, s || B("Unmatched '");
          while (t[s - 2] === "\\");
          switch (r += t.slice(o, s), o = s - 1, i) {
            case "before-value":
              i = "value";
              break;
            case "importRule-begin":
              i = "importRule";
              break;
          }
          break;
        case "/":
          t.charAt(o + 1) === "*" ? (o += 2, s = t.indexOf("*/", o), s === -1 ? B("Missing */") : o = s + 1) : r += A, i === "importRule-begin" && (r += " ", i = "importRule");
          break;
        case "@":
          if (t.indexOf("@-moz-document", o) === o) {
            i = "documentRule-begin", D = new n.CSSDocumentRule(), D.__starts = o, o += 13, r = "";
            break;
          } else if (t.indexOf("@media", o) === o) {
            i = "atBlock", x = new n.CSSMediaRule(), x.__starts = o, o += 5, r = "";
            break;
          } else if (t.indexOf("@supports", o) === o) {
            i = "conditionBlock", P = new n.CSSSupportsRule(), P.__starts = o, o += 8, r = "";
            break;
          } else if (t.indexOf("@host", o) === o) {
            i = "hostRule-begin", o += 4, E = new n.CSSHostRule(), E.__starts = o, r = "";
            break;
          } else if (t.indexOf("@import", o) === o) {
            i = "importRule-begin", o += 6, r += "@import";
            break;
          } else if (t.indexOf("@font-face", o) === o) {
            i = "fontFaceRule-begin", o += 9, L = new n.CSSFontFaceRule(), L.__starts = o, r = "";
            break;
          } else {
            C.lastIndex = o;
            var j = C.exec(t);
            if (j && j.index === o) {
              i = "keyframesRule-begin", I = new n.CSSKeyframesRule(), I.__starts = o, I._vendorPrefix = j[1], o += j[0].length - 1, r = "";
              break;
            } else
              i === "selector" && (i = "atRule");
          }
          r += A;
          break;
        case "{":
          i === "selector" || i === "atRule" ? (k.selectorText = r.trim(), k.style.__starts = o, r = "", i = "before-name") : i === "atBlock" ? (x.media.mediaText = r.trim(), d && h.push(d), c = d = x, x.parentStyleSheet = l, r = "", i = "before-selector") : i === "conditionBlock" ? (P.conditionText = r.trim(), d && h.push(d), c = d = P, P.parentStyleSheet = l, r = "", i = "before-selector") : i === "hostRule-begin" ? (d && h.push(d), c = d = E, E.parentStyleSheet = l, r = "", i = "before-selector") : i === "fontFaceRule-begin" ? (d && (L.parentRule = d), L.parentStyleSheet = l, k = L, r = "", i = "before-name") : i === "keyframesRule-begin" ? (I.name = r.trim(), d && (h.push(d), I.parentRule = d), I.parentStyleSheet = l, c = d = I, r = "", i = "keyframeRule-begin") : i === "keyframeRule-begin" ? (k = new n.CSSKeyframeRule(), k.keyText = r.trim(), k.__starts = o, r = "", i = "before-name") : i === "documentRule-begin" && (D.matcher.matcherText = r.trim(), d && (h.push(d), D.parentRule = d), c = d = D, D.parentStyleSheet = l, r = "", i = "before-selector");
          break;
        case ":":
          i === "name" ? (v = r.trim(), r = "", i = "before-value") : r += A;
          break;
        case "(":
          if (i === "value")
            if (r.trim() === "expression") {
              var U = new n.CSSValueExpression(t, o).parse();
              U.error ? B(U.error) : (r += U.expression, o = U.idx);
            } else
              i = "value-parenthesis", a = 1, r += A;
          else
            i === "value-parenthesis" && a++, r += A;
          break;
        case ")":
          i === "value-parenthesis" && (a--, a === 0 && (i = "value")), r += A;
          break;
        case "!":
          i === "value" && t.indexOf("!important", o) === o ? (p = "important", o += 9) : r += A;
          break;
        case ";":
          switch (i) {
            case "value":
              k.style.setProperty(v, r.trim(), p), p = "", r = "", i = "before-name";
              break;
            case "atRule":
              r = "", i = "before-selector";
              break;
            case "importRule":
              z = new n.CSSImportRule(), z.parentStyleSheet = z.styleSheet.parentStyleSheet = l, z.cssText = r + A, l.cssRules.push(z), r = "", i = "before-selector";
              break;
            default:
              r += A;
              break;
          }
          break;
        case "}":
          switch (i) {
            case "value":
              k.style.setProperty(v, r.trim(), p), p = "";
            case "before-name":
            case "name":
              k.__ends = o + 1, d && (k.parentRule = d), k.parentStyleSheet = l, c.cssRules.push(k), r = "", c.constructor === n.CSSKeyframesRule ? i = "keyframeRule-begin" : i = "before-selector";
              break;
            case "keyframeRule-begin":
            case "before-selector":
            case "selector":
              for (d || B("Unexpected }"), g = h.length > 0; h.length > 0; ) {
                if (d = h.pop(), d.constructor.name === "CSSMediaRule" || d.constructor.name === "CSSSupportsRule") {
                  f = c, c = d, c.cssRules.push(f);
                  break;
                }
                h.length === 0 && (g = !1);
              }
              g || (c.__ends = o + 1, l.cssRules.push(c), c = l, d = null), r = "", i = "before-selector";
              break;
          }
          break;
        default:
          switch (i) {
            case "before-selector":
              i = "selector", k = new n.CSSStyleRule(), k.__starts = o;
              break;
            case "before-name":
              i = "name";
              break;
            case "before-value":
              i = "value";
              break;
            case "importRule-begin":
              i = "importRule";
              break;
          }
          r += A;
          break;
      }
    return l;
  }, Go.parse = n.parse, n.CSSStyleSheet = Bo().CSSStyleSheet, n.CSSStyleRule = To().CSSStyleRule, n.CSSImportRule = fl().CSSImportRule, n.CSSGroupingRule = cn.CSSGroupingRule, n.CSSMediaRule = As.CSSMediaRule, n.CSSConditionRule = On.CSSConditionRule, n.CSSSupportsRule = Ls.CSSSupportsRule, n.CSSFontFaceRule = gl().CSSFontFaceRule, n.CSSHostRule = bl.CSSHostRule, n.CSSStyleDeclaration = dn().CSSStyleDeclaration, n.CSSKeyframeRule = Ns().CSSKeyframeRule, n.CSSKeyframesRule = Ms.CSSKeyframesRule, n.CSSValueExpression = ml.CSSValueExpression, n.CSSDocumentRule = vl.CSSDocumentRule, Go;
}
var Ur;
function dn() {
  if (Ur)
    return zo;
  Ur = 1;
  var n = {};
  return n.CSSStyleDeclaration = function() {
    this.length = 0, this.parentRule = null, this._importants = {};
  }, n.CSSStyleDeclaration.prototype = {
    constructor: n.CSSStyleDeclaration,
    /**
     *
     * @param {string} name
     * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-getPropertyValue
     * @return {string} the value of the property if it has been explicitly set for this declaration block.
     * Returns the empty string if the property has not been set.
     */
    getPropertyValue: function(e) {
      return this[e] || "";
    },
    /**
     *
     * @param {string} name
     * @param {string} value
     * @param {string} [priority=null] "important" or null
     * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-setProperty
     */
    setProperty: function(e, t, o) {
      if (this[e]) {
        var i = Array.prototype.indexOf.call(this, e);
        i < 0 && (this[this.length] = e, this.length++);
      } else
        this[this.length] = e, this.length++;
      this[e] = t + "", this._importants[e] = o;
    },
    /**
     *
     * @param {string} name
     * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-removeProperty
     * @return {string} the value of the property if it has been explicitly set for this declaration block.
     * Returns the empty string if the property has not been set or the property name does not correspond to a known CSS property.
     */
    removeProperty: function(e) {
      if (!(e in this))
        return "";
      var t = Array.prototype.indexOf.call(this, e);
      if (t < 0)
        return "";
      var o = this[e];
      return this[e] = "", Array.prototype.splice.call(this, t, 1), o;
    },
    getPropertyCSSValue: function() {
    },
    /**
     *
     * @param {String} name
     */
    getPropertyPriority: function(e) {
      return this._importants[e] || "";
    },
    /**
     *   element.style.overflow = "auto"
     *   element.style.getPropertyShorthand("overflow-x")
     *   -> "overflow"
     */
    getPropertyShorthand: function() {
    },
    isPropertyImplicit: function() {
    },
    // Doesn't work in IE < 9
    get cssText() {
      for (var e = [], t = 0, o = this.length; t < o; ++t) {
        var i = this[t], s = this.getPropertyValue(i), r = this.getPropertyPriority(i);
        r && (r = " !" + r), e[t] = i + ": " + s + r + ";";
      }
      return e.join(" ");
    },
    set cssText(e) {
      var t, o;
      for (t = this.length; t--; )
        o = this[t], this[o] = "";
      Array.prototype.splice.call(this, 0, this.length), this._importants = {};
      var i = n.parse("#bogus{" + e + "}").cssRules[0].style, s = i.length;
      for (t = 0; t < s; ++t)
        o = i[t], this.setProperty(i[t], i.getPropertyValue(o), i.getPropertyPriority(o));
    }
  }, zo.CSSStyleDeclaration = n.CSSStyleDeclaration, n.parse = Is().parse, zo;
}
Bo().CSSStyleSheet, De.CSSRule, To().CSSStyleRule, cn.CSSGroupingRule, On.CSSConditionRule, As.CSSMediaRule, Ls.CSSSupportsRule, dn().CSSStyleDeclaration, Ns().CSSKeyframeRule, Ms.CSSKeyframesRule;
dn().CSSStyleDeclaration;
To().CSSStyleRule;
fl().CSSImportRule;
gl().CSSFontFaceRule;
Bo().CSSStyleSheet;
Ns().CSSKeyframeRule;
var m1 = Is().parse;
const wl = "style";
class kl extends Eo {
  constructor(e, t = wl) {
    super(e, t), this[Vt] = null;
  }
  get sheet() {
    const e = this[Vt];
    return e !== null ? e : this[Vt] = m1(this.textContent);
  }
  get innerHTML() {
    return super.innerHTML || "";
  }
  set innerHTML(e) {
    super.textContent = e, this[Vt] = null;
  }
  get innerText() {
    return super.innerText || "";
  }
  set innerText(e) {
    super.textContent = e, this[Vt] = null;
  }
  get textContent() {
    return super.textContent || "";
  }
  set textContent(e) {
    super.textContent = e, this[Vt] = null;
  }
}
fe(wl, kl);
class x1 extends M {
  constructor(e, t = "time") {
    super(e, t);
  }
}
class v1 extends M {
  constructor(e, t = "fieldset") {
    super(e, t);
  }
}
class y1 extends M {
  constructor(e, t = "embed") {
    super(e, t);
  }
}
class w1 extends M {
  constructor(e, t = "hr") {
    super(e, t);
  }
}
class k1 extends M {
  constructor(e, t = "progress") {
    super(e, t);
  }
}
class S1 extends M {
  constructor(e, t = "p") {
    super(e, t);
  }
}
class C1 extends M {
  constructor(e, t = "table") {
    super(e, t);
  }
}
class E1 extends M {
  constructor(e, t = "frameset") {
    super(e, t);
  }
}
class T1 extends M {
  constructor(e, t = "li") {
    super(e, t);
  }
}
class B1 extends M {
  constructor(e, t = "base") {
    super(e, t);
  }
}
class A1 extends M {
  constructor(e, t = "datalist") {
    super(e, t);
  }
}
const Sl = "input";
class Cl extends M {
  constructor(e, t = Sl) {
    super(e, t);
  }
  /* c8 ignore start */
  get autofocus() {
    return Q.get(this, "autofocus") || -1;
  }
  set autofocus(e) {
    Q.set(this, "autofocus", e);
  }
  get disabled() {
    return Q.get(this, "disabled");
  }
  set disabled(e) {
    Q.set(this, "disabled", e);
  }
  get name() {
    return this.getAttribute("name");
  }
  set name(e) {
    this.setAttribute("name", e);
  }
  get placeholder() {
    return this.getAttribute("placeholder");
  }
  set placeholder(e) {
    this.setAttribute("placeholder", e);
  }
  get type() {
    return this.getAttribute("type");
  }
  set type(e) {
    this.setAttribute("type", e);
  }
  get value() {
    return S.get(this, "value");
  }
  set value(e) {
    S.set(this, "value", e);
  }
  /* c8 ignore stop */
}
fe(Sl, Cl);
class L1 extends M {
  constructor(e, t = "param") {
    super(e, t);
  }
}
class N1 extends M {
  constructor(e, t = "media") {
    super(e, t);
  }
}
class M1 extends M {
  constructor(e, t = "audio") {
    super(e, t);
  }
}
const El = "h1";
class Tl extends M {
  constructor(e, t = El) {
    super(e, t);
  }
}
fe([El, "h2", "h3", "h4", "h5", "h6"], Tl);
class I1 extends M {
  constructor(e, t = "dir") {
    super(e, t);
  }
}
class R1 extends M {
  constructor(e, t = "quote") {
    super(e, t);
  }
}
var Bi = { exports: {} }, Jo, jr;
function _1() {
  if (jr)
    return Jo;
  jr = 1;
  class n {
    constructor(t, o) {
      this.width = t, this.height = o;
    }
    getContext() {
      return null;
    }
    toDataURL() {
      return "";
    }
  }
  return Jo = {
    createCanvas: (e, t) => new n(e, t)
  }, Jo;
}
try {
  Bi.exports = require("canvas");
} catch {
  Bi.exports = _1();
}
var O1 = Bi.exports;
const D1 = /* @__PURE__ */ Ln(O1), { createCanvas: P1 } = D1, Bl = "canvas";
class Al extends M {
  constructor(e, t = Bl) {
    super(e, t), this[$e] = P1(300, 150);
  }
  get width() {
    return this[$e].width;
  }
  set width(e) {
    yt.set(this, "width", e), this[$e].width = e;
  }
  get height() {
    return this[$e].height;
  }
  set height(e) {
    yt.set(this, "height", e), this[$e].height = e;
  }
  getContext(e) {
    return this[$e].getContext(e);
  }
  toDataURL(...e) {
    return this[$e].toDataURL(...e);
  }
}
fe(Bl, Al);
class H1 extends M {
  constructor(e, t = "legend") {
    super(e, t);
  }
}
const Ll = "option";
class Nl extends M {
  constructor(e, t = Ll) {
    super(e, t);
  }
  /* c8 ignore start */
  get value() {
    return S.get(this, "value");
  }
  set value(e) {
    S.set(this, "value", e);
  }
  /* c8 ignore stop */
  get selected() {
    return Q.get(this, "selected");
  }
  set selected(e) {
    var o;
    const t = (o = this.parentElement) == null ? void 0 : o.querySelector("option[selected]");
    t && t !== this && (t.selected = !1), Q.set(this, "selected", e);
  }
}
fe(Ll, Nl);
class F1 extends M {
  constructor(e, t = "span") {
    super(e, t);
  }
}
class q1 extends M {
  constructor(e, t = "meter") {
    super(e, t);
  }
}
class $1 extends M {
  constructor(e, t = "video") {
    super(e, t);
  }
}
class U1 extends M {
  constructor(e, t = "td") {
    super(e, t);
  }
}
const Ml = "title";
class Il extends Eo {
  constructor(e, t = Ml) {
    super(e, t);
  }
}
fe(Ml, Il);
class j1 extends M {
  constructor(e, t = "output") {
    super(e, t);
  }
}
class V1 extends M {
  constructor(e, t = "tr") {
    super(e, t);
  }
}
class z1 extends M {
  constructor(e, t = "data") {
    super(e, t);
  }
}
class G1 extends M {
  constructor(e, t = "menu") {
    super(e, t);
  }
}
const Rl = "select";
class _l extends M {
  constructor(e, t = Rl) {
    super(e, t);
  }
  get options() {
    let e = new Xe(), { firstElementChild: t } = this;
    for (; t; )
      t.tagName === "OPTGROUP" ? e.push(...t.children) : e.push(t), t = t.nextElementSibling;
    return e;
  }
  /* c8 ignore start */
  get disabled() {
    return Q.get(this, "disabled");
  }
  set disabled(e) {
    Q.set(this, "disabled", e);
  }
  get name() {
    return this.getAttribute("name");
  }
  set name(e) {
    this.setAttribute("name", e);
  }
  /* c8 ignore stop */
  get value() {
    var e;
    return (e = this.querySelector("option[selected]")) == null ? void 0 : e.value;
  }
}
fe(Rl, _l);
class W1 extends M {
  constructor(e, t = "br") {
    super(e, t);
  }
}
const Ol = "button";
class Dl extends M {
  constructor(e, t = Ol) {
    super(e, t);
  }
  /* c8 ignore start */
  get disabled() {
    return Q.get(this, "disabled");
  }
  set disabled(e) {
    Q.set(this, "disabled", e);
  }
  get name() {
    return this.getAttribute("name");
  }
  set name(e) {
    this.setAttribute("name", e);
  }
  get type() {
    return this.getAttribute("type");
  }
  set type(e) {
    this.setAttribute("type", e);
  }
  /* c8 ignore stop */
}
fe(Ol, Dl);
class K1 extends M {
  constructor(e, t = "map") {
    super(e, t);
  }
}
class Z1 extends M {
  constructor(e, t = "optgroup") {
    super(e, t);
  }
}
class Y1 extends M {
  constructor(e, t = "dl") {
    super(e, t);
  }
}
const Pl = "textarea";
class Hl extends Eo {
  constructor(e, t = Pl) {
    super(e, t);
  }
  /* c8 ignore start */
  get disabled() {
    return Q.get(this, "disabled");
  }
  set disabled(e) {
    Q.set(this, "disabled", e);
  }
  get name() {
    return this.getAttribute("name");
  }
  set name(e) {
    this.setAttribute("name", e);
  }
  get placeholder() {
    return this.getAttribute("placeholder");
  }
  set placeholder(e) {
    this.setAttribute("placeholder", e);
  }
  get type() {
    return this.getAttribute("type");
  }
  set type(e) {
    this.setAttribute("type", e);
  }
  get value() {
    return this.textContent;
  }
  set value(e) {
    this.textContent = e;
  }
  /* c8 ignore stop */
}
fe(Pl, Hl);
class X1 extends M {
  constructor(e, t = "font") {
    super(e, t);
  }
}
class J1 extends M {
  constructor(e, t = "div") {
    super(e, t);
  }
}
const Fl = "link";
class ql extends M {
  constructor(e, t = Fl) {
    super(e, t);
  }
  /* c8 ignore start */
  // copy paste from img.src, already covered
  get disabled() {
    return Q.get(this, "disabled");
  }
  set disabled(e) {
    Q.set(this, "disabled", e);
  }
  get href() {
    return S.get(this, "href");
  }
  set href(e) {
    S.set(this, "href", e);
  }
  get hreflang() {
    return S.get(this, "hreflang");
  }
  set hreflang(e) {
    S.set(this, "hreflang", e);
  }
  get media() {
    return S.get(this, "media");
  }
  set media(e) {
    S.set(this, "media", e);
  }
  get rel() {
    return S.get(this, "rel");
  }
  set rel(e) {
    S.set(this, "rel", e);
  }
  get type() {
    return S.get(this, "type");
  }
  set type(e) {
    S.set(this, "type", e);
  }
  /* c8 ignore stop */
}
fe(Fl, ql);
const $l = "slot";
class Ul extends M {
  constructor(e, t = $l) {
    super(e, t);
  }
  /* c8 ignore start */
  get name() {
    return this.getAttribute("name");
  }
  set name(e) {
    this.setAttribute("name", e);
  }
  assign() {
  }
  assignedNodes(e) {
    var s;
    const t = !!this.name, o = ((s = this.getRootNode().host) == null ? void 0 : s.childNodes) ?? [];
    let i;
    if (t ? i = [...o].filter((r) => r.slot === this.name) : i = [...o].filter((r) => !r.slot), e != null && e.flatten) {
      const r = [];
      for (let a of i)
        a.localName === "slot" ? r.push(...a.assignedNodes({ flatten: !0 })) : r.push(a);
      i = r;
    }
    return i.length ? i : [...this.childNodes];
  }
  assignedElements(e) {
    const t = this.assignedNodes(e).filter((o) => o.nodeType === 1);
    return t.length ? t : [...this.children];
  }
  /* c8 ignore stop */
}
fe($l, Ul);
class Q1 extends M {
  constructor(e, t = "form") {
    super(e, t);
  }
}
const jl = "img";
class Rs extends M {
  constructor(e, t = jl) {
    super(e, t);
  }
  /* c8 ignore start */
  get alt() {
    return S.get(this, "alt");
  }
  set alt(e) {
    S.set(this, "alt", e);
  }
  get sizes() {
    return S.get(this, "sizes");
  }
  set sizes(e) {
    S.set(this, "sizes", e);
  }
  get src() {
    return S.get(this, "src");
  }
  set src(e) {
    S.set(this, "src", e);
  }
  get srcset() {
    return S.get(this, "srcset");
  }
  set srcset(e) {
    S.set(this, "srcset", e);
  }
  get title() {
    return S.get(this, "title");
  }
  set title(e) {
    S.set(this, "title", e);
  }
  get width() {
    return yt.get(this, "width");
  }
  set width(e) {
    yt.set(this, "width", e);
  }
  get height() {
    return yt.get(this, "height");
  }
  set height(e) {
    yt.set(this, "height", e);
  }
  /* c8 ignore stop */
}
fe(jl, Rs);
class eg extends M {
  constructor(e, t = "pre") {
    super(e, t);
  }
}
class tg extends M {
  constructor(e, t = "ul") {
    super(e, t);
  }
}
const Vl = "meta";
class zl extends M {
  constructor(e, t = Vl) {
    super(e, t);
  }
  /* c8 ignore start */
  get name() {
    return S.get(this, "name");
  }
  set name(e) {
    S.set(this, "name", e);
  }
  get httpEquiv() {
    return S.get(this, "http-equiv");
  }
  set httpEquiv(e) {
    S.set(this, "http-equiv", e);
  }
  get content() {
    return S.get(this, "content");
  }
  set content(e) {
    S.set(this, "content", e);
  }
  get charset() {
    return S.get(this, "charset");
  }
  set charset(e) {
    S.set(this, "charset", e);
  }
  get media() {
    return S.get(this, "media");
  }
  set media(e) {
    S.set(this, "media", e);
  }
  /* c8 ignore stop */
}
fe(Vl, zl);
class ng extends M {
  constructor(e, t = "picture") {
    super(e, t);
  }
}
class og extends M {
  constructor(e, t = "area") {
    super(e, t);
  }
}
class ig extends M {
  constructor(e, t = "ol") {
    super(e, t);
  }
}
class sg extends M {
  constructor(e, t = "caption") {
    super(e, t);
  }
}
const Gl = "a";
class Wl extends M {
  constructor(e, t = Gl) {
    super(e, t);
  }
  /* c8 ignore start */
  // copy paste from img.src, already covered
  get href() {
    return encodeURI(decodeURI(S.get(this, "href")));
  }
  set href(e) {
    S.set(this, "href", decodeURI(e));
  }
  get download() {
    return encodeURI(decodeURI(S.get(this, "download")));
  }
  set download(e) {
    S.set(this, "download", decodeURI(e));
  }
  get target() {
    return S.get(this, "target");
  }
  set target(e) {
    S.set(this, "target", e);
  }
  get type() {
    return S.get(this, "type");
  }
  set type(e) {
    S.set(this, "type", e);
  }
  /* c8 ignore stop */
}
fe(Gl, Wl);
class rg extends M {
  constructor(e, t = "label") {
    super(e, t);
  }
}
class ag extends M {
  constructor(e, t = "unknown") {
    super(e, t);
  }
}
class ug extends M {
  constructor(e, t = "mod") {
    super(e, t);
  }
}
class lg extends M {
  constructor(e, t = "details") {
    super(e, t);
  }
}
const Kl = "source";
class Zl extends M {
  constructor(e, t = Kl) {
    super(e, t);
  }
  /* c8 ignore start */
  get src() {
    return S.get(this, "src");
  }
  set src(e) {
    S.set(this, "src", e);
  }
  get srcset() {
    return S.get(this, "srcset");
  }
  set srcset(e) {
    S.set(this, "srcset", e);
  }
  get sizes() {
    return S.get(this, "sizes");
  }
  set sizes(e) {
    S.set(this, "sizes", e);
  }
  get type() {
    return S.get(this, "type");
  }
  set type(e) {
    S.set(this, "type", e);
  }
  /* c8 ignore stop */
}
fe(Kl, Zl);
class cg extends M {
  constructor(e, t = "track") {
    super(e, t);
  }
}
class dg extends M {
  constructor(e, t = "marquee") {
    super(e, t);
  }
}
const hg = {
  HTMLElement: M,
  HTMLTemplateElement: al,
  HTMLHtmlElement: d1,
  HTMLScriptElement: ll,
  HTMLFrameElement: p1,
  HTMLIFrameElement: dl,
  HTMLObjectElement: f1,
  HTMLHeadElement: g1,
  HTMLBodyElement: b1,
  HTMLStyleElement: kl,
  HTMLTimeElement: x1,
  HTMLFieldSetElement: v1,
  HTMLEmbedElement: y1,
  HTMLHRElement: w1,
  HTMLProgressElement: k1,
  HTMLParagraphElement: S1,
  HTMLTableElement: C1,
  HTMLFrameSetElement: E1,
  HTMLLIElement: T1,
  HTMLBaseElement: B1,
  HTMLDataListElement: A1,
  HTMLInputElement: Cl,
  HTMLParamElement: L1,
  HTMLMediaElement: N1,
  HTMLAudioElement: M1,
  HTMLHeadingElement: Tl,
  HTMLDirectoryElement: I1,
  HTMLQuoteElement: R1,
  HTMLCanvasElement: Al,
  HTMLLegendElement: H1,
  HTMLOptionElement: Nl,
  HTMLSpanElement: F1,
  HTMLMeterElement: q1,
  HTMLVideoElement: $1,
  HTMLTableCellElement: U1,
  HTMLTitleElement: Il,
  HTMLOutputElement: j1,
  HTMLTableRowElement: V1,
  HTMLDataElement: z1,
  HTMLMenuElement: G1,
  HTMLSelectElement: _l,
  HTMLBRElement: W1,
  HTMLButtonElement: Dl,
  HTMLMapElement: K1,
  HTMLOptGroupElement: Z1,
  HTMLDListElement: Y1,
  HTMLTextAreaElement: Hl,
  HTMLFontElement: X1,
  HTMLDivElement: J1,
  HTMLLinkElement: ql,
  HTMLSlotElement: Ul,
  HTMLFormElement: Q1,
  HTMLImageElement: Rs,
  HTMLPreElement: eg,
  HTMLUListElement: tg,
  HTMLMetaElement: zl,
  HTMLPictureElement: ng,
  HTMLAreaElement: og,
  HTMLOListElement: ig,
  HTMLTableCaptionElement: sg,
  HTMLAnchorElement: Wl,
  HTMLLabelElement: rg,
  HTMLUnknownElement: ag,
  HTMLModElement: ug,
  HTMLDetailsElement: lg,
  HTMLSourceElement: Zl,
  HTMLTrackElement: cg,
  HTMLMarqueeElement: dg
}, Un = { test: () => !0 }, pg = {
  "text/html": {
    docType: "<!DOCTYPE html>",
    ignoreCase: !0,
    voidElements: /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i
  },
  "image/svg+xml": {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: !1,
    voidElements: Un
  },
  "text/xml": {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: !1,
    voidElements: Un
  },
  "application/xml": {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: !1,
    voidElements: Un
  },
  "application/xhtml+xml": {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: !1,
    voidElements: Un
  }
};
let Yl = class extends qt {
  constructor(e, t = {}) {
    super(e, t), this.detail = t.detail;
  }
}, fg = class extends qt {
  constructor(e, t = {}) {
    super(e, t), this.inputType = t.inputType, this.data = t.data, this.dataTransfer = t.dataTransfer, this.isComposing = t.isComposing || !1, this.ranges = t.ranges;
  }
};
const gg = (n) => (
  /**
   * @implements globalThis.Image
   */
  class extends Rs {
    constructor(t, o) {
      switch (super(n), arguments.length) {
        case 1:
          this.height = t, this.width = t;
          break;
        case 2:
          this.height = o, this.width = t;
          break;
      }
    }
  }
), Vr = ({ [Le]: n, [F]: e }, t = null) => {
  xu(n[he], e[N]);
  do {
    const o = Re(n), i = o === e ? o : o[N];
    t ? t.insertBefore(n, t[F]) : n.remove(), n = i;
  } while (n !== e);
};
let bg = class Xl {
  constructor() {
    this[Le] = null, this[F] = null, this.commonAncestorContainer = null;
  }
  /* TODO: this is more complicated than it looks
    setStart(node, offset) {
      this[START] = node.childNodes[offset];
    }
  
    setEnd(node, offset) {
      this[END] = getEnd(node.childNodes[offset]);
    }
    //*/
  insertNode(e) {
    this[F].parentNode.insertBefore(e, this[Le]);
  }
  selectNode(e) {
    this[Le] = e, this[F] = Re(e);
  }
  // TODO: SVG elements should then create contextual fragments
  //       that return SVG nodes
  selectNodeContents(e) {
    this.selectNode(e), this.commonAncestorContainer = e;
  }
  surroundContents(e) {
    e.replaceChildren(this.extractContents());
  }
  setStartBefore(e) {
    this[Le] = e;
  }
  setStartAfter(e) {
    this[Le] = e.nextSibling;
  }
  setEndBefore(e) {
    this[F] = Re(e.previousSibling);
  }
  setEndAfter(e) {
    this[F] = Re(e);
  }
  cloneContents() {
    let { [Le]: e, [F]: t } = this;
    const o = e.ownerDocument.createDocumentFragment();
    for (; e !== t; )
      o.insertBefore(e.cloneNode(!0), o[F]), e = Re(e), e !== t && (e = e[N]);
    return o;
  }
  deleteContents() {
    Vr(this);
  }
  extractContents() {
    const e = this[Le].ownerDocument.createDocumentFragment();
    return Vr(this, e), e;
  }
  createContextualFragment(e) {
    const { commonAncestorContainer: t } = this, o = "ownerSVGElement" in t, i = o ? t.ownerDocument : t, s = i.createElement("template");
    s.innerHTML = e;
    let { content: r } = s;
    if (o) {
      const a = [...r.childNodes];
      r = i.createDocumentFragment(), Object.setPrototypeOf(r, Bn.prototype), r.ownerSVGElement = i;
      for (const u of a)
        Object.setPrototypeOf(u, Bn.prototype), u.ownerSVGElement = i, r.appendChild(u);
    } else
      this.selectNode(r);
    return r;
  }
  cloneRange() {
    const e = new Xl();
    return e[Le] = this[Le], e[F] = this[F], e;
  }
};
const mg = ({ nodeType: n }, e) => {
  switch (n) {
    case J:
      return e & Op;
    case Ce:
      return e & Dp;
    case lt:
      return e & Hp;
    case ut:
      return e & Pp;
  }
  return 0;
};
class xg {
  constructor(e, t = _p) {
    this.root = e, this.currentNode = e, this.whatToShow = t;
    let { [N]: o, [F]: i } = e;
    if (e.nodeType === Nt) {
      const { documentElement: r } = e;
      o = r, i = r[F];
    }
    const s = [];
    for (; o !== i; )
      mg(o, t) && s.push(o), o = o[N];
    this[Se] = { i: 0, nodes: s };
  }
  nextNode() {
    const e = this[Se];
    return this.currentNode = e.i < e.nodes.length ? e.nodes[e.i++] : null, this.currentNode;
  }
}
const zr = (n, e, t) => {
  let { [N]: o, [F]: i } = e;
  return n.call({ ownerDocument: e, [N]: o, [F]: i }, t);
}, Jl = jp(
  {},
  c1,
  hg,
  {
    CustomEvent: Yl,
    Event: qt,
    EventTarget: rs,
    InputEvent: fg,
    NamedNodeMap: sl,
    NodeList: Xe
  }
), jn = /* @__PURE__ */ new WeakMap();
let $t = class extends ps {
  constructor(e) {
    super(null, "#document", Nt), this[qe] = { active: !1, registry: null }, this[bt] = { active: !1, class: null }, this[rn] = pg[e], this[Et] = null, this[hi] = null, this[Wn] = null, this[$e] = null, this[yn] = null;
  }
  /**
   * @type {globalThis.Document['defaultView']}
   */
  get defaultView() {
    return jn.has(this) || jn.set(this, new Proxy(globalThis, {
      set: (e, t, o) => {
        switch (t) {
          case "addEventListener":
          case "removeEventListener":
          case "dispatchEvent":
            this[hn][t] = o;
            break;
          default:
            e[t] = o;
            break;
        }
        return !0;
      },
      get: (e, t) => {
        switch (t) {
          case "addEventListener":
          case "removeEventListener":
          case "dispatchEvent":
            if (!this[hn]) {
              const o = this[hn] = new rs();
              o.dispatchEvent = o.dispatchEvent.bind(o), o.addEventListener = o.addEventListener.bind(o), o.removeEventListener = o.removeEventListener.bind(o);
            }
            return this[hn][t];
          case "document":
            return this;
          case "navigator":
            return {
              userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
            };
          case "window":
            return jn.get(this);
          case "customElements":
            return this[qe].registry || (this[qe] = new Yp(this)), this[qe];
          case "performance":
            return yi;
          case "DOMParser":
            return this[hi];
          case "Image":
            return this[$e] || (this[$e] = gg(this)), this[$e];
          case "MutationObserver":
            return this[bt].class || (this[bt] = new of(this)), this[bt].class;
        }
        return this[Wn] && this[Wn][t] || Jl[t] || e[t];
      }
    })), jn.get(this);
  }
  get doctype() {
    const e = this[Et];
    if (e)
      return e;
    const { firstChild: t } = this;
    return t && t.nodeType === nn ? this[Et] = t : null;
  }
  set doctype(e) {
    if (/^([a-z:]+)(\s+system|\s+public(\s+"([^"]+)")?)?(\s+"([^"]+)")?/i.test(e)) {
      const { $1: t, $4: o, $6: i } = RegExp;
      this[Et] = new ro(this, t, o, i), wo(this, this[Et], this[N]);
    }
  }
  get documentElement() {
    return this.firstElementChild;
  }
  get isConnected() {
    return !0;
  }
  /**
   * @protected
   */
  _getParent() {
    return this[hn];
  }
  createAttribute(e) {
    return new Mn(this, e);
  }
  createCDATASection(e) {
    return new cs(this, e);
  }
  createComment(e) {
    return new ds(this, e);
  }
  createDocumentFragment() {
    return new fs(this);
  }
  createDocumentType(e, t, o) {
    return new ro(this, e, t, o);
  }
  createElement(e) {
    return new _n(this, e);
  }
  createRange() {
    const e = new bg();
    return e.commonAncestorContainer = this, e;
  }
  createTextNode(e) {
    return new Rn(this, e);
  }
  createTreeWalker(e, t = -1) {
    return new xg(e, t);
  }
  createNodeIterator(e, t = -1) {
    return this.createTreeWalker(e, t);
  }
  createEvent(e) {
    const t = Vp(e === "Event" ? new qt("") : new Yl(""));
    return t.initEvent = t.initCustomEvent = (o, i = !1, s = !1, r) => {
      t.bubbles = !!i, zp(t, {
        type: { value: o },
        canBubble: { value: i },
        cancelable: { value: s },
        detail: { value: r }
      });
    }, t;
  }
  cloneNode(e = !1) {
    const {
      constructor: t,
      [qe]: o,
      [Et]: i
    } = this, s = new t();
    if (s[qe] = o, e) {
      const r = s[F], { childNodes: a } = this;
      for (let { length: u } = a, l = 0; l < u; l++)
        s.insertBefore(a[l].cloneNode(!0), r);
      i && (s[Et] = a[0]);
    }
    return s;
  }
  importNode(e) {
    const t = 1 < arguments.length && !!arguments[1], o = e.cloneNode(t), { [qe]: i } = this, { active: s } = i, r = (a) => {
      const { ownerDocument: u, nodeType: l } = a;
      a.ownerDocument = this, s && u !== this && l === J && i.upgrade(a);
    };
    if (r(o), t)
      switch (o.nodeType) {
        case J:
        case st: {
          let { [N]: a, [F]: u } = o;
          for (; a !== u; )
            a.nodeType === J && r(a), a = a[N];
          break;
        }
      }
    return o;
  }
  toString() {
    return this.childNodes.join("");
  }
  querySelector(e) {
    return zr(super.querySelector, this, e);
  }
  querySelectorAll(e) {
    return zr(super.querySelectorAll, this, e);
  }
  /* c8 ignore start */
  getElementsByTagNameNS(e, t) {
    return this.getElementsByTagName(t);
  }
  createAttributeNS(e, t) {
    return this.createAttribute(t);
  }
  createElementNS(e, t, o) {
    return e === io ? new Bn(this, t, null) : this.createElement(t, o);
  }
  /* c8 ignore stop */
};
Be(
  Jl.Document = function() {
    Oe();
  },
  $t
).prototype = $t.prototype;
const vg = (n, e, t, o) => {
  if (!e && so.has(t)) {
    const r = so.get(t);
    return new r(n, t);
  }
  const { [qe]: { active: i, registry: s } } = n;
  if (i) {
    const r = e ? o.is : t;
    if (s.has(r)) {
      const { Class: a } = s.get(r), u = new a(n, t);
      return Ft.set(u, { connected: !1 }), u;
    }
  }
  return new M(n, t);
};
class yg extends $t {
  constructor() {
    super("text/html");
  }
  get all() {
    const e = new Xe();
    let { [N]: t, [F]: o } = this;
    for (; t !== o; ) {
      switch (t.nodeType) {
        case J:
          e.push(t);
          break;
      }
      t = t[N];
    }
    return e;
  }
  /**
   * @type HTMLHeadElement
   */
  get head() {
    const { documentElement: e } = this;
    let { firstElementChild: t } = e;
    return (!t || t.tagName !== "HEAD") && (t = this.createElement("head"), e.prepend(t)), t;
  }
  /**
   * @type HTMLBodyElement
   */
  get body() {
    const { head: e } = this;
    let { nextElementSibling: t } = e;
    return (!t || t.tagName !== "BODY") && (t = this.createElement("body"), e.after(t)), t;
  }
  /**
   * @type HTMLTitleElement
   */
  get title() {
    const { head: e } = this;
    let t = e.getElementsByTagName("title").shift();
    return t ? t.textContent : "";
  }
  set title(e) {
    const { head: t } = this;
    let o = t.getElementsByTagName("title").shift();
    o ? o.textContent = e : t.insertBefore(
      this.createElement("title"),
      t.firstChild
    ).textContent = e;
  }
  createElement(e, t) {
    const o = !!(t && t.is), i = vg(this, o, e, t);
    return o && i.setAttribute("is", t.is), i;
  }
}
class wg extends $t {
  constructor() {
    super("image/svg+xml");
  }
  toString() {
    return this[rn].docType + super.toString();
  }
}
class kg extends $t {
  constructor() {
    super("text/xml");
  }
  toString() {
    return this[rn].docType + super.toString();
  }
}
class _s {
  /** @typedef {{ "text/html": HTMLDocument, "image/svg+xml": SVGDocument, "text/xml": XMLDocument }} MimeToDoc */
  /**
   * @template {keyof MimeToDoc} MIME
   * @param {string} markupLanguage
   * @param {MIME} mimeType
   * @returns {MimeToDoc[MIME]}
   */
  parseFromString(e, t, o = null) {
    let i = !1, s;
    return t === "text/html" ? (i = !0, s = new yg()) : t === "image/svg+xml" ? s = new wg() : s = new kg(), s[hi] = _s, o && (s[Wn] = o), i && e === "..." && (e = "<!doctype html><html><head></head><body></body></html>"), e ? yu(s, i, e) : s;
  }
}
const Ql = (n, e = null) => new _s().parseFromString(
  n,
  "text/html",
  e
).defaultView;
function Sg() {
  Oe();
}
Be(Sg, $t).prototype = $t.prototype;
const Ai = (n, e, t) => {
  n.querySelectorAll("." + Gi).forEach((o) => {
    const i = o.querySelector("." + La).textContent;
    let s = e.createTextNode(Cg(i, t));
    o.replaceWith(s);
  });
}, Cg = (n, e) => ({
  ejs: `<%= ${n} %>`,
  jinja: `{{ ${n} }}`
})[e], ec = (n, e, t) => ({
  ejs: () => {
    const i = n === "FOR" ? "(const " : "(";
    return `<% ${n.toLowerCase()} ${i}${e}) { %>`;
  },
  jinja: () => `{% ${n.toLowerCase()} ${e} %}`
})[t](), tc = (n, e) => ({
  ejs: () => "<% } %>",
  jinja: () => `{% ${n.toLowerCase() === "FOR" ? "endfor" : "endif"} %}`
})[e](), nc = (n) => (n = n.replaceAll("&lt;", "<"), n = n.replaceAll("&gt;", ">"), n), Eg = (n, e, t) => {
  n.querySelectorAll("." + Wi).forEach((o) => {
    const i = o.firstElementChild.getAttribute("data-statement"), s = o.querySelector("." + Zi).textContent;
    let r = e.createTextNode(ec(i, s, t));
    o.replaceWith(r);
  });
}, Tg = (n, e, t) => {
  n.querySelectorAll("." + Ki).forEach((o) => {
    const i = o.firstElementChild.getAttribute("data-statement");
    let s = e.createTextNode(tc(i, t));
    o.replaceWith(s);
  });
}, Gr = (n, e) => {
  const t = Ql(""), { withHeadings: o, content: i } = n;
  let s = "";
  if (o) {
    const l = i[0];
    let c = "";
    l.forEach((d) => {
      const h = t.document.createElement("th");
      h.innerHTML = Wr(d), Ai(h, t.document, e), c += h.outerHTML;
    }), s = Ng(c);
  }
  let r = "";
  i.forEach((l, c) => {
    if (c === 0 && o)
      return;
    if (Bg(l)) {
      r += Ag(l, e);
      return;
    }
    let d = "";
    l.forEach((h) => {
      const g = document.createElement("td");
      g.innerHTML = Wr(h), Ai(g, t.document, e), d += g.outerHTML;
    }), r += Ig(d);
  });
  const a = s + Mg(r), u = Lg(a);
  return nc(u);
}, Bg = (n) => {
  const e = n[0];
  return e ? !![
    "if",
    "for",
    di("if"),
    di("for")
  ].find((o) => e === o) : !1;
}, Ag = (n, e) => {
  const t = n[0], o = n[1];
  return t.includes("end") ? t.includes("end") ? tc(t, e) : "" : ec(t, o, e);
}, Lg = (n) => `<table>${n}</table>`, Ng = (n) => `<thead>${n}</thead>`, Mg = (n) => `<tbody>${n}</tbody>`, Ig = (n) => `<tr>${n}</tr>`, Wr = (n) => n.replaceAll(`
`, "<br>"), Rg = (n) => {
  const e = {
    [ke("if")]: {
      ejs: ({ data: o }) => `<% if (${o.condition}) { %>`,
      jinja: ({ data: o }) => `{% if ${o.condition} %}`
    },
    [ke("elseif")]: {
      ejs: ({ data: o }) => `<% } else if (${o.condition}) { %>`,
      jinja: ({ data: o }) => `{% elif ${o.condition} %}`
    },
    [ke("else")]: {
      ejs: ({ data: o }) => "<% } else { %>",
      jinja: ({ data: o }) => "{% else %}"
    },
    [ke("endif")]: {
      ejs: ({ data: o }) => "<% } %>",
      jinja: ({ data: o }) => "{% endif %}"
    },
    [ke("for")]: {
      ejs: ({ data: o }) => `<% for (const ${o.condition}) { %>`,
      jinja: ({ data: o }) => `{% for ${o.condition}) %}`
    },
    [ke("endfor")]: {
      ejs: ({ data: o }) => "<% } %>",
      jinja: () => "{% endfor %}"
    },
    table: {
      ejs: ({ data: o }) => Gr(o, n),
      jinja: ({ data: o }) => Gr(o, n)
    }
  }, t = {};
  return Object.entries(e).forEach(([o, i]) => {
    t[o] = i[n];
  }), t;
}, _g = async (n, e) => {
  if (e !== "ejs" && e !== "jinja")
    throw new Error(`Type ${e} is not supported`);
  const t = Ql("");
  try {
    const o = JSON.parse(JSON.stringify(n));
    o.blocks.forEach((a) => {
      if (a.type === "header" || a.type === "paragraph") {
        const u = t.document.createElement("div");
        u.innerHTML = a.data.text, Eg(u, t.document, e), Tg(u, t.document, e), Ai(u, t.document, e);
        let l = nc(u.innerHTML);
        a.data.text = l;
      }
    });
    const i = Rg(e);
    return E0(i).parse(o).join("");
  } catch (o) {
    console.log("Saving failed: ", o);
  }
};
class ob {
  /**
   * @typedef {Object} Config
   * @property {boolean} [indent] - enable indentation
   * @typedef {Object} TemplatorParams
   * @property {string} holder
   * @property {string} [placeholder]
   * @property {() => void} [onReady]
   * @property {() => void} [onChange]
   * @property {Object} [tools]
   * @property {Object} [data]
   * @property {Config} [config]
   * @param {TemplatorParams} params
   */
  constructor(e = { holder: "" }) {
    const {
      holder: t,
      placeholder: o,
      onReady: i = () => {
      },
      onChange: s = () => {
      },
      tools: r = {},
      data: a = {},
      config: u = {}
    } = e;
    if (!t)
      throw new Error("Missing holder container");
    return this.init({ holder: t, placeholder: o, onReady: i, onChange: s, tools: r, data: a, config: u }), this.editor;
  }
  init({ holder: e, placeholder: t, onReady: o = () => {
  }, onChange: i = () => {
  }, tools: s = {}, data: r, config: a = {} }) {
    this.editor = new Kd({
      holder: e,
      placeholder: t,
      data: r,
      onReady: () => {
        new Xd(this.editor), w0(this.editor, a), o();
      },
      onChange: (u) => {
        se.setApi(u), i();
      },
      tunes: ["IfConditionTune", "ForConditionTune"],
      tools: {
        ...a0,
        ...s
      }
    });
  }
}
const ib = _g;
export {
  ob as Templator,
  ib as transform
};
