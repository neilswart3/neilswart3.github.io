(this.webpackJsonpneilswart3=this.webpackJsonpneilswart3||[]).push([[0],{194:function(e,n,t){"use strict";t.r(n);var i,r,a,o,c,s,l,d,u,j,h=t(0),b=t.n(h),f=t(64),v=t.n(f),g=t(11),O=t(9),m=t(10),w={Footer:m.a.div(i||(i=Object(O.a)(["\n  padding: 1rem 0;\n"])))},p=t(1),x=function(){return Object(p.jsx)(w.Footer,{children:"\xa0"})},y=t(65),k=t(3),T={NavItem:m.a.div(r||(r=Object(O.a)(["\n  margin: 0;\n"]))),NavButton:Object(m.a)(g.Button)(a||(a=Object(O.a)(["\n  margin: 0;\n"])))},F=function(e){var n=e.delay,t=e.children;return Object(p.jsx)(k.AnimatorGeneralProvider,{animator:{duration:{enter:200,delay:n}},children:Object(p.jsx)(T.NavButton,{children:Object(p.jsx)(g.Text,{children:t})})})},L={Header:m.a.div(o||(o=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n"]))),Title:m.a.div(c||(c=Object(O.a)(["\n  display: block;\n"]))),Text:Object(m.a)(g.Text)(s||(s=Object(O.a)(["\n  margin: 0;\n"]))),NavItems:m.a.div(l||(l=Object(O.a)(["\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  align-items: center;\n"])))},W={about:{title:"About"},skills:{title:"Skills"},projects:{title:"Projects"},contact:{title:"Contact"}},S=function(){return Object(p.jsxs)(L.Header,{children:[Object(p.jsx)(L.Title,{children:Object(p.jsx)(g.FrameLines,{children:Object(p.jsx)(L.Text,{as:"h2",children:"neilswart3"})})}),Object(p.jsx)(L.NavItems,{children:Object.entries(W).map((function(e,n){var t=Object(y.a)(e,2),i=t[0],r=t[1].title;return Object(p.jsx)(F,{href:"/".concat(i),delay:200*(n+1),children:r})}))})]})},B={GeneralLayout:m.a.div(d||(d=Object(O.a)(["\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  width: 96%;\n  margin: 0 auto;\n"]))),Main:m.a.main(u||(u=Object(O.a)(["\n  width: 100%;\n"]))),LayoutContent:Object(m.a)(g.FrameHexagon)(j||(j=Object(O.a)(["\n  height: 100%;\n"])))},C=function(e){var n=e.children;return Object(p.jsxs)(B.GeneralLayout,{children:[Object(p.jsx)(S,{}),Object(p.jsx)(B.LayoutContent,{children:Object(p.jsx)(B.Main,{children:n})}),Object(p.jsx)(x,{})]})};var N=function(){return Object(p.jsx)(C,{children:"test"})},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,195)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),i(e),r(e),a(e),o(e)}))};v.a.render(Object(p.jsx)(b.a.StrictMode,{children:Object(p.jsxs)(g.ArwesThemeProvider,{children:[Object(p.jsx)(g.StylesBaseline,{styles:{body:{fontFamily:'"Titillium Web", sans-serif',height:"100vh"},button:{margin:"0 20px 20px 0"}}}),Object(p.jsx)(N,{})]})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");P?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):A(n,e)}))}}(),I()}},[[194,1,2]]]);
//# sourceMappingURL=main.a42d3ca0.chunk.js.map