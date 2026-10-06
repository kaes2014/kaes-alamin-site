/* Only non-sensitive, per-tab preferences. No network or cookies. */
(()=>{try{const l=sessionStorage.getItem('kaes-lang');const t=sessionStorage.getItem('kaes-theme');if(['en','sv','ar'].includes(l)){document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr'}document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch(_){}})();
