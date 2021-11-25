(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{389:function(t,e,s){"use strict";s.r(e);var n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],o={methods:{getMsg:function(){return n[Math.floor(Math.random()*n.length)]}}},i=s(54),h=Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"theme-container"},[e("div",{staticClass:"theme-default-content"},[e("h1",[this._v("404")]),this._v(" "),e("blockquote",[this._v(this._s(this.getMsg()))]),this._v(" "),e("RouterLink",{attrs:{to:"/"}},[this._v("\n      Take me home.\n    ")])],1)])}),[],!1,null,null,null);e.default=h.exports}}]);<script>
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