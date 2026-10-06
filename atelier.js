/* KAES demo boutique. All checkout activity is local and simulated.
 * No network requests, payment SDKs, cookies, account or personal-data collection.
 */
(()=>{
'use strict';
const D=window.KAES_I18N,P=window.KAES_PRODUCTS,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
if(!D||!P)return;
const supported=['en','sv','ar'],sizes=[30,50,100],methods=['Klarna','Swish','Mastercard','Visa','PayPal'];
const read=(k,f)=>{try{return sessionStorage.getItem(k)||f}catch(_){return f}},write=(k,v)=>{try{sessionStorage.setItem(k,v)}catch(_){}};
let lang=supported.includes(document.documentElement.lang)?document.documentElement.lang:'en';
let cart=[],discount=read('kaes-discount','')==='KAES10',shipping='standard',method='Klarna',step=0,activeProduct=null,selectedSize=50,activeInfo=null,processing=false,toastTimer;
let lastReference=read('kaes-last-demo','');if(!/^DEMO-KAES-[A-Z0-9]+$/.test(lastReference))lastReference='';
const byId=id=>P.find(p=>p.id===id),t=k=>D[lang][k]||D.en[k]||k;
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon=id=>`<svg aria-hidden="true"><use href="#i-${id}"/></svg>`;
const photo=id=>{const n=P.findIndex(p=>p.id===id),x=(n%3)*200,y=520+Math.floor(n/3)*165;return `<svg class="photo-crop" viewBox="${x} ${y} 200 165" preserveAspectRatio="xMidYMid slice" role="img" aria-label="KAES ${esc(byId(id).name)}"><image href="${window.KAES_PHOTO_URI}" width="600" height="1190"/></svg>`};
const money=c=>new Intl.NumberFormat({en:'en-SE',sv:'sv-SE',ar:'ar-SE'}[lang],{style:'currency',currency:'SEK',minimumFractionDigits:0,maximumFractionDigits:2}).format(c/100);
const price=(p,s)=>p.price+(s===30?-25000:s===100?40000:0);
try{const raw=JSON.parse(read('kaes-demo-cart','[]'));if(Array.isArray(raw)){const m=new Map();raw.slice(0,100).forEach(i=>{if(i&&byId(i.id)&&sizes.includes(i.size)&&Number.isInteger(i.qty)&&i.qty>0){const key=i.id+':'+i.size;const old=m.get(key);m.set(key,{id:i.id,size:i.size,qty:Math.min(10,(old?.qty||0)+i.qty)})}});cart=[...m.values()]}}catch(_){cart=[]}
const save=()=>{write('kaes-demo-cart',JSON.stringify(cart));write('kaes-discount',discount?'KAES10':'');$('#bag-count').textContent=cart.reduce((s,i)=>s+i.qty,0)};
const totals=()=>{const sub=cart.reduce((s,i)=>s+price(byId(i.id),i.size)*i.qty,0);const off=discount?Math.round(sub*.1):0;const delivery=shipping==='express'?4900:0;return{sub,off,delivery,total:sub-off+delivery}};
const badge=m=>m==='Mastercard'?'<span class="payment-badge mastercard" role="img" aria-label="Mastercard"><span class="mc-circles" aria-hidden="true"></span></span>':m==='Swish'?'<span class="payment-badge swish"><span class="swish-mark" aria-hidden="true"></span>Swish</span>':m==='PayPal'?'<span class="payment-badge paypal">Pay<b>Pal</b></span>':`<span class="payment-badge ${m.toLowerCase()}">${m}</span>`;
const badges=()=>['Klarna','Swish','Visa','Mastercard','PayPal'].map(badge).join('');
const button=(text,attrs='',className='button-dark')=>`<button type="button" class="button ${className}" ${attrs}>${esc(t(text))}</button>`;
const notify=k=>{clearTimeout(toastTimer);const el=$('#toast');el.textContent=t(k);el.classList.add('show');toastTimer=setTimeout(()=>el.classList.remove('show'),3500)};
function modal(id){$$('dialog[open]').forEach(d=>d.close());const el=$(id);el.showModal();document.body.classList.add('modal-open');return el}
function translate(){
 clearTimeout(toastTimer);$('#toast').classList.remove('show');if($('#newsletter-feedback').textContent)$('#newsletter-feedback').textContent=t('newsletterSuccess');
 document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
 $$('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));$$('[data-label]').forEach(e=>e.setAttribute('aria-label',t(e.dataset.label)));$$('[data-alt]').forEach(e=>e.setAttribute(e.tagName.toLowerCase()==='svg'?'aria-label':'alt',t(e.dataset.alt)));$$('[data-placeholder]').forEach(e=>e.placeholder=t(e.dataset.placeholder));
 $$('[data-lang]').forEach(e=>e.setAttribute('aria-pressed',String(e.dataset.lang===lang)));
 $('#theme-toggle').setAttribute('aria-label',t(document.documentElement.dataset.theme==='dark'?'light':'dark'));
 $$('[data-payments]').forEach(e=>e.innerHTML=badges());
 document.title='KAES PARFUMS | '+t('heroLine');
}
function renderGrid(){
 $('#product-grid').innerHTML=P.map(p=>`<article class="product-card"><div class="product-visual"><button class="product-image-button" data-product="${p.id}" aria-label="${esc(t('discover')+' '+p.name)}">${photo(p.id)}</button><button class="quick-add" data-add="${p.id}" aria-label="${esc(t('quickAdd')+' '+p.name)}">+</button></div><div class="product-copy"><h3>${esc(p.name)}</h3><p class="product-family">${esc(t(p.family))}</p><p class="product-notes">${esc(p.notes[lang].join('\n'))}</p><button class="discover-button" data-product="${p.id}">${esc(t('discover'))} <span aria-hidden="true">&#8599;</span></button></div></article>`).join('');
}
function openProduct(id){const p=byId(id);if(!p)return;activeProduct=p;selectedSize=50;renderProduct();modal('#product-dialog')}
function renderProduct(){
 const p=activeProduct;if(!p)return;
 $('#product-content').innerHTML=`<div class="product-layout"><div class="product-detail-photo">${photo(p.id)}</div><div class="product-details"><p class="eyebrow">${esc(t('productDemo'))}</p><h2 id="product-title">${esc(p.name)}</h2><p class="edp">${esc(t('edp'))}</p><p class="description">${esc(p.description[lang])}</p><span class="size-label" id="size-label">${esc(t('size'))}</span><div class="size-options" role="group" aria-labelledby="size-label">${sizes.map(s=>`<button data-size="${s}" aria-pressed="${s===selectedSize}">${s} ml</button>`).join('')}</div><div class="product-price"><strong id="product-price">${money(price(p,selectedSize))}</strong><span>${esc(t('demoPrice'))}</span></div>${button('addBag',`data-add="${p.id}" data-detail="true"`,'button-dark button-wide')}<div class="payment-badges">${badges()}</div><p class="micro payment-micro">${esc(t('paymentNote'))}</p><dl class="note-pyramid">${['topNotes','heartNotes','baseNotes'].map((k,i)=>`<div><dt>${esc(t(k))}</dt><dd>${esc(p.pyramid[lang][i])}</dd></div>`).join('')}</dl><p class="micro">${esc(t('productDisclaimer'))}</p></div></div>`;
}
function add(id,size=50){if(!byId(id)||!sizes.includes(size))return;const item=cart.find(i=>i.id===id&&i.size===size);if(item&&item.qty>=10){notify('maxQty');return}if(item)item.qty++;else cart.push({id,size,qty:1});save();notify('added');if($('#bag-dialog').open)renderBag()}
function openBag(){renderBag();modal('#bag-dialog')}
function renderBag(){
 const el=$('#bag-content');if(!cart.length){el.innerHTML=`<div class="bag-empty">${icon('bag')}<h3>${esc(t('emptyBag'))}</h3><p>${esc(t('emptyText'))}</p>${button('continueShopping','data-shop')}<p class="micro payment-micro">${esc(t('bagNote'))}</p></div><div class="payment-badges">${badges()}</div><p class="micro payment-micro">${esc(t('paymentNote'))}</p>`;return}
 const a=totals();
 el.innerHTML=cart.map((i,n)=>{const p=byId(i.id);return`<article class="bag-row">${photo(p.id)}<div><div class="bag-row-top"><h3>${esc(p.name)}</h3><span class="price">${money(price(p,i.size)*i.qty)}</span></div><p class="size">${i.size} ml &middot; ${esc(t('productDemo'))}</p><div class="bag-controls"><div class="quantity-control"><button data-qty="${n}" data-delta="-1" aria-label="${esc(t('decrease')+' '+p.name)}">&minus;</button><span aria-label="${esc(t('qty'))}">${i.qty}</span><button data-qty="${n}" data-delta="1" ${i.qty>=10?'disabled':''} aria-label="${esc(t('increase')+' '+p.name)}">+</button></div><button class="remove-button" data-remove="${n}" aria-label="${esc(t('remove')+' '+p.name)}">${esc(t('remove'))}</button></div></div></article>`}).join('')+`<div class="bag-bottom"><p class="micro">${esc(t('bagNote'))}</p><form class="coupon-form" id="coupon-form"><input id="coupon-input" aria-label="${esc(t('coupon'))}" placeholder="${esc(t('coupon'))}" maxlength="12" autocomplete="off" value="${discount?'KAES10':''}"><button type="submit">${esc(t('apply'))}</button></form><p class="micro" id="coupon-message" role="status">${esc(t(discount?'couponOk':'couponHint'))}</p><div class="money-row"><span>${esc(t('subtotal'))}</span><span>${money(a.sub)}</span></div>${a.off?`<div class="money-row"><span>${esc(t('discount'))}</span><span>&minus;${money(a.off)}</span></div>`:''}<div class="money-row total"><span>${esc(t('total'))}</span><strong>${money(a.sub-a.off)}</strong></div>${button('checkout','data-checkout','button-dark button-wide')}<button class="clear-bag" data-clear>${esc(t('clearBag'))}</button><div class="payment-badges">${badges()}</div><p class="micro payment-micro">${esc(t('paymentNote'))}</p></div>`;
}
function changeQty(n,d){if(!Number.isInteger(n)||!cart[n]||![-1,1].includes(d))return;cart[n].qty=Math.min(10,cart[n].qty+d);if(cart[n].qty<1)cart.splice(n,1);save();renderBag()}
function summary(){const a=totals();return`<aside class="checkout-summary"><h3>${esc(t('summary'))}</h3>${cart.map(i=>{const p=byId(i.id);return`<div class="summary-item">${photo(p.id)}<div><h4>${esc(p.name)}</h4><small>${i.size} ml &times; ${i.qty}</small></div><span>${money(price(p,i.size)*i.qty)}</span></div>`}).join('')}<div class="money-row"><span>${esc(t('subtotal'))}</span><span>${money(a.sub)}</span></div>${a.off?`<div class="money-row"><span>${esc(t('discount'))}</span><span>&minus;${money(a.off)}</span></div>`:''}<div class="money-row"><span>${esc(t('shippingCost'))}</span><span>${a.delivery?money(a.delivery):esc(t('free'))}</span></div><div class="money-row total"><span>${esc(t('total'))}</span><strong>${money(a.total)}</strong></div><p class="micro">${esc(t('demoPrice'))} &middot; ${esc(t('footerLegal'))}</p><div class="payment-badges">${badges()}</div><p class="micro payment-micro">${esc(t('paymentNote'))}</p></aside>`}
const address=()=>`<address class="sample-address"><span>${esc(t('guestName'))}</span><span dir="ltr">guest@example.test</span><span>${esc(t('guestAddress'))}</span><span>${esc(t('guestCity'))}</span></address>`;
function openCheckout(){if(!cart.length){notify('orderEmpty');return}step=0;shipping='standard';method='Klarna';processing=false;renderCheckout();modal('#checkout-dialog')}
function renderCheckout(){
 const el=$('#checkout-content');if(step===3){el.innerHTML=`<div class="complete-view"><div class="success-mark">${icon('check')}</div><h3>${esc(t('completeTitle'))}</h3><p>${esc(t('completeText'))}</p><div class="reference-box"><small>${esc(t('demoReference'))}</small><strong>${esc(lastReference)}</strong></div>${button('backHome','data-shop')}</div>`;return}
 let content='';
 if(step===0)content=`<h3>${esc(t('sampleDetails'))}</h3>${address()}<p class="micro">${esc(t('sampleNote'))}</p><h3>${esc(t('deliveryMethod'))}</h3>${['standard','express'].map(s=>`<label class="selection-option"><input type="radio" name="delivery" value="${s}" ${shipping===s?'checked':''}><span>${esc(t(s))}<small>${esc(t(s+'Time'))}</small></span><b>${s==='express'?money(4900):esc(t('free'))}</b></label>`).join('')}<div class="checkout-actions">${button('nextPayment','data-next')}</div>`;
 if(step===1)content=`<h3>${esc(t('choosePayment'))}</h3><p class="demo-note">${esc(t('providerNotice'))}</p>${methods.map(m=>`<label class="selection-option"><input type="radio" name="payment" value="${m}" ${method===m?'checked':''}><span>${m}<small>DEMO</small></span>${badge(m)}</label>`).join('')}${['Visa','Mastercard'].includes(method)?`<div class="test-card"><small>${esc(t('testCard'))}</small><strong>&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 4242</strong><p>DEMO GUEST &middot; 12/30</p></div>`:''}<div class="checkout-actions"><button class="back-button" data-back>${esc(t('back'))}</button>${button('nextReview','data-next')}</div>`;
 if(step===2)content=`<div class="review-details"><h3>${esc(t('sampleDetails'))}</h3>${address()}<h3>${esc(t('deliveryStep'))}</h3><p>${esc(t(shipping))}</p><h3>${esc(t('paymentStep'))}</h3><div class="payment-badges">${badge(method)}<span class="micro">DEMO</span></div><p class="demo-note">${esc(t('providerNotice'))}</p></div><div class="checkout-actions"><button class="back-button" data-back ${processing?'disabled':''}>${esc(t('back'))}</button>${button(processing?'processing':'confirmDemo',`data-confirm ${processing?'disabled':''}`)}</div>`;
 el.innerHTML=`<p class="demo-note">${esc(t('checkoutNotice'))}</p><div class="checkout-steps" aria-label="${esc(t('checkout'))}">${['deliveryStep','paymentStep','reviewStep'].map((k,n)=>`<span class="${n===step?'current':''}" ${n===step?'aria-current="step"':''}><b>${n+1}</b>${esc(t(k))}</span>`).join('')}</div><div class="checkout-layout"><div class="checkout-main">${content}</div>${summary()}</div>`;
}
function complete(){if(processing||step!==2||!cart.length)return;processing=true;renderCheckout();setTimeout(()=>{lastReference='DEMO-KAES-'+Date.now().toString(36).toUpperCase();write('kaes-last-demo',lastReference);cart=[];discount=false;save();processing=false;step=3;renderCheckout();$('#checkout-dialog').scrollTop=0},650)}
function openSearch(){const input=$('#search-input');input.value='';renderSearch('');modal('#search-dialog');input.focus()}
function renderSearch(q){const query=q.trim().toLocaleLowerCase();const matches=P.filter(p=>[p.name,t(p.family),...p.notes[lang],...p.notes.en].join(' ').toLocaleLowerCase().includes(query));$('#search-results').innerHTML=matches.length?`<div class="search-list">${matches.map(p=>`<button class="search-result" data-product="${p.id}">${photo(p.id)}<span><strong>${esc(p.name)}</strong><small>${esc(t(p.family))}</small></span></button>`).join('')}</div>`:`<p class="no-results">${esc(t('noResults'))}</p>`}
function openInfo(kind){
 const map={story:['storyModalTitle','storyModalText'],journal:['journalTitle','journalText'],privacy:['privacyTitle','privacyText'],shipping:['shipping','shippingText'],returns:['returns','returnsText'],faq:['faq','faqText'],contact:['contact','contactText'],account:['accountTitle','accountText']};
 if(!map[kind])return;activeInfo=kind;const [title,text]=map[kind];$('#info-title').textContent=t(title);$('#info-content').innerHTML=`<p class="info-text">${esc(t(text))}</p>${kind==='account'?`<p class="demo-note">${lastReference?esc(t('lastDemo'))+': '+esc(lastReference):esc(t('noLastDemo'))}</p>${button('viewBag','data-bag')}`:''}`;modal('#info-dialog');
}
function shop(){ $$('dialog[open]').forEach(d=>d.close());$('#collection').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}
// Event delegation keeps the interactive views in sync after every render.
document.addEventListener('click',e=>{
 const b=e.target.closest('button,[data-shop]');if(!b)return;
 if(b.hasAttribute('data-close')){b.closest('dialog')?.close();return}
 if(b.dataset.lang){if(!supported.includes(b.dataset.lang))return;lang=b.dataset.lang;write('kaes-lang',lang);translate();renderGrid();if($('#bag-dialog').open)renderBag();return}
 if(b.dataset.product){openProduct(b.dataset.product);return}
 if(b.dataset.add){add(b.dataset.add,b.dataset.detail?selectedSize:50);if(b.dataset.detail)openBag();return}
 if(b.dataset.size){selectedSize=Number(b.dataset.size);if(!sizes.includes(selectedSize))selectedSize=50;renderProduct();return}
 if(b.hasAttribute('data-qty')){changeQty(Number(b.dataset.qty),Number(b.dataset.delta));return}
 if(b.hasAttribute('data-remove')){const n=Number(b.dataset.remove);if(Number.isInteger(n)&&cart[n]){cart.splice(n,1);save();renderBag()}return}
 if(b.hasAttribute('data-clear')){cart=[];discount=false;save();renderBag();return}
 if(b.dataset.info){openInfo(b.dataset.info);return}
 if(b.hasAttribute('data-bag')){openBag();return}
 if(b.hasAttribute('data-shop')){shop();return}
 if(b.hasAttribute('data-checkout')){openCheckout();return}
 if(b.hasAttribute('data-next')&&!processing&&step<2){step++;renderCheckout();$('#checkout-dialog').scrollTop=0;return}
 if(b.hasAttribute('data-back')&&!processing&&step>0){step--;renderCheckout();$('#checkout-dialog').scrollTop=0;return}
 if(b.hasAttribute('data-confirm'))complete();
});
document.addEventListener('change',e=>{if(e.target.name==='delivery'&&['standard','express'].includes(e.target.value)){shipping=e.target.value;renderCheckout()}if(e.target.name==='payment'&&methods.includes(e.target.value)){method=e.target.value;renderCheckout()}});
document.addEventListener('submit',e=>{e.preventDefault();if(e.target.id!=='coupon-form')return;const code=$('#coupon-input').value.trim().toUpperCase();if(code==='KAES10'){discount=true;save();renderBag()}else{discount=false;save();renderBag();$('#coupon-message').textContent=t('couponBad')}});
$('#search-input').addEventListener('input',e=>renderSearch(e.target.value));$('#search-toggle').addEventListener('click',openSearch);$('#cart-toggle').addEventListener('click',openBag);
$('#theme-toggle').addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;write('kaes-theme',theme);$('#theme-toggle').setAttribute('aria-label',t(theme==='dark'?'light':'dark'))});
$('#menu-toggle').addEventListener('click',()=>{const nav=$('#mobile-nav');nav.hidden=!nav.hidden;$('#menu-toggle').setAttribute('aria-expanded',String(!nav.hidden))});
$('#mobile-nav').addEventListener('click',e=>{if(e.target.closest('a,button')){$('#mobile-nav').hidden=true;$('#menu-toggle').setAttribute('aria-expanded','false')}});
$('#newsletter-button').addEventListener('click',()=>{$('#newsletter-feedback').textContent=t('newsletterSuccess')});
$$('dialog').forEach(d=>{d.addEventListener('close',()=>{setTimeout(()=>document.body.classList.toggle('modal-open',!!$('dialog[open]')),0)});d.addEventListener('click',e=>{if(e.target!==d)return;const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()})});
translate();renderGrid();save();
})();
