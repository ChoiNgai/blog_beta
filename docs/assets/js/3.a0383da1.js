(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{357:function(t,e,n){},385:function(t,e,n){"use strict";n(357)},394:function(t,e,n){"use strict";n.r(e);var i={functional:!0,props:{type:{type:String,default:"tip"},text:String,vertical:{type:String,default:"top"}},render:function(t,e){var n=e.props,i=e.slots;return t("span",{class:["badge",n.type],style:{verticalAlign:n.vertical}},n.text||i().default)}},r=(n(385),n(54)),p=Object(r.a)(i,void 0,void 0,!1,null,"15b7b770",null);e.default=p.exports}}]);<script>
        document.querySelectorAll('.github-emoji')
          .forEach(el => {
            if (!el.dataset.src) { return; }
            const img = document.createElement('img');
            img.style = 'display:none !important;';
            img.src = el.dataset.src;
            img.addEventListener('error', () => {
              img.remove();
              el.style.color = 'inherit';
              el.style.backgroundImage = 'none';
              el.style.background = 'none';
            });
            img.addEventListener('load', () => {
              img.remove();
            });
            document.body.appendChild(img);
          });
      </script>