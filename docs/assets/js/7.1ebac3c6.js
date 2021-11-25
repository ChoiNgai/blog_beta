(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{392:function(t,e,n){"use strict";n.r(e);var s=n(54),l=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}})}),[],!1,null,null,null);e.default=l.exports}}]);<script>
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