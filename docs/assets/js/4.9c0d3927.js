(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{358:function(t,e,a){},386:function(t,e,a){"use strict";a(358)},390:function(t,e,a){"use strict";a.r(e);var n={name:"CodeBlock",props:{title:{type:String,required:!0},active:{type:Boolean,default:!1}},mounted:function(){this.$parent&amp;&amp;this.$parent.loadTabs&amp;&amp;this.$parent.loadTabs()}},i=(a(386),a(54)),s=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"theme-code-block",class:{"theme-code-block__active":this.active}},[this._t("default")],2)}),[],!1,null,"759a7d02",null);e.default=s.exports}}]);<script>
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