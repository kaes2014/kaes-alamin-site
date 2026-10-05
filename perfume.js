'use strict';
(() => {
  const copy = {
    en: {
      skip:'Skip to content',announcement:'A NEW WORLD OF SCENT. THIS IS JUST THE BEGINNING.',navigation:'Main navigation',footerNavigation:'Footer navigation',openMenu:'Open menu',closeMenu:'Close menu',navWorld:'Our world',navStory:'The story',navBeginning:'A new chapter',chooseLanguage:'Choose language',darkMode:'Switch to dark mode',lightMode:'Switch to light mode',close:'Close',
      heroEyebrow:'THE INVISIBLE. THE UNFORGETTABLE.',heroLine1:'A scent.',heroLine2:'A feeling.',heroLine3:'A memory.',heroDescription:'Some things are felt, not seen. Step into a world where fragrance becomes a part of your story.',heroCta:'Discover our world',heroFootnote:'A first look at MAISON KAES. Not an online shop.',heroCaption:'STILL LIFE, SOFT LIGHT',heroCaptionRight:'AN EXPLORATION OF SCENT',interlude1:'A MOMENT',interlude2:'AN IMPRESSION',interlude3:'SOMETHING THAT STAYS',
      worldEyebrow:'01 / THE MOODBOARD',worldTitle:'Follow the feeling.',worldIntro:"Light, texture, a passing moment. A visual glimpse into the world we're imagining.",lightTitle:'Soft light',lightNotes:'WHITE BLOOMS · LINEN · SUNSHINE',woodsTitle:'Golden stillness',woodsNotes:'AMBER GLASS · WOOD · WARMTH',softTitle:'A quiet impression',softNotes:'PETALS · STONE · SOFT SHADOWS',lightAlt:'An amber perfume bottle with a wooden cap, white flowers and sunlit stone.',woodsAlt:'Two amber perfume bottles with driftwood, dried flowers and ivory linen.',softAlt:'A round perfume bottle beside white orchids, vanilla pods and sculptural stone.',lightZoom:'Enlarge Soft light image',woodsZoom:'Enlarge Golden stillness image',softZoom:'Enlarge A quiet impression image',galleryNote:'A visual moodboard, not a product collection. Imagery is for inspiration only.',
      storyCaption:'THE BEAUTY IS IN THE FEELING.',storyEyebrow:'02 / THE MAISON',storyTitle1:'More than a scent.',storyTitle2:'A little of you.',storyText1:'A quiet morning. Sunlight on skin. A place you wish you could return to. We believe the beauty of fragrance is in what it brings back.',storyText2:'MAISON KAES begins with that feeling. A space to explore the connection between scent, individuality and the moments that make us.',storyCta:'The next chapter',beginningEyebrow:'03 / ONLY THE BEGINNING',beginningTitle1:'Something beautiful',beginningTitle2:'is taking shape.',beginningText:'For now, simply wander through our world. No perfumes are available to purchase, and no orders are being taken.',previewLabel:'BRAND PREVIEW · NOT YET FOR SALE',footerTagline:'Scent is personal. So is our world.',backTop:'Back to the top',footerNote:'A WORLD OF SCENT, IN THE MAKING.',aboutPreview:'About this preview',previewInfo1:'This website introduces a perfume-brand concept. The images were created with AI for this visual moodboard; they are not a catalogue of products available to buy.',previewInfo2:'There is no shop, account registration, advertising or analytics. Your language and appearance choices are saved only for this browser tab. The hosting provider may keep standard server access logs.',pageTitle:'MAISON KAES — A scent. A feeling. A memory.'
    },
    sv: {
      skip:'Hoppa till innehållet',announcement:'EN NY VÄRLD AV DOFT. DET HÄR ÄR BARA BÖRJAN.',navigation:'Huvudmeny',footerNavigation:'Sidfotsmeny',openMenu:'Öppna menyn',closeMenu:'Stäng menyn',navWorld:'Vår värld',navStory:'Berättelsen',navBeginning:'Ett nytt kapitel',chooseLanguage:'Välj språk',darkMode:'Byt till mörkt läge',lightMode:'Byt till ljust läge',close:'Stäng',
      heroEyebrow:'DET OSYNLIGA. DET OFÖRGLÖMLIGA.',heroLine1:'En doft.',heroLine2:'En känsla.',heroLine3:'Ett minne.',heroDescription:'Vissa saker känns, snarare än syns. Kliv in i en värld där doft blir en del av din berättelse.',heroCta:'Upptäck vår värld',heroFootnote:'En första inblick i MAISON KAES. Ingen webbutik.',heroCaption:'STILLEBEN I MJUKT LJUS',heroCaptionRight:'EN UTFORSKNING AV DOFT',interlude1:'ETT ÖGONBLICK',interlude2:'ETT INTRYCK',interlude3:'NÅGOT SOM STANNAR KVAR',
      worldEyebrow:'01 / INSPIRATION',worldTitle:'Följ känslan.',worldIntro:'Ljus, textur och flyktiga ögonblick. En visuell glimt av världen vi föreställer oss.',lightTitle:'Mjukt ljus',lightNotes:'VITA BLOMMOR · LINNE · SOLSKEN',woodsTitle:'Gyllene stillhet',woodsNotes:'BÄRNSTENSFÄRGAT GLAS · TRÄ · VÄRME',softTitle:'Ett stilla intryck',softNotes:'KRONBLAD · STEN · MJUKA SKUGGOR',lightAlt:'En bärnstensfärgad parfymflaska med träkork, vita blommor och solbelyst sten.',woodsAlt:'Två bärnstensfärgade parfymflaskor med drivved, torkade blommor och ljust linne.',softAlt:'En rund parfymflaska bredvid vita orkidéer, vaniljstänger och skulptural sten.',lightZoom:'Förstora bilden Mjukt ljus',woodsZoom:'Förstora bilden Gyllene stillhet',softZoom:'Förstora bilden Ett stilla intryck',galleryNote:'Visuell inspiration, inte en produktkollektion. Bilderna visas endast som inspiration.',
      storyCaption:'SKÖNHETEN FINNS I KÄNSLAN.',storyEyebrow:'02 / HUSET',storyTitle1:'Mer än en doft.',storyTitle2:'En del av dig.',storyText1:'En stilla morgon. Solsken mot huden. En plats du längtar tillbaka till. För oss ligger doftens skönhet i de minnen den väcker.',storyText2:'MAISON KAES börjar med den känslan. En plats för att utforska sambandet mellan doft, personlighet och ögonblicken som formar oss.',storyCta:'Nästa kapitel',beginningEyebrow:'03 / BARA BÖRJAN',beginningTitle1:'Något vackert',beginningTitle2:'börjar ta form.',beginningText:'För tillfället kan du bara utforska vår värld. Inga parfymer finns till försäljning, och vi tar inte emot beställningar.',previewLabel:'FÖRHANDSVISNING · INTE TILL FÖRSÄLJNING',footerTagline:'Doft är personligt. Det är vår värld också.',backTop:'Till toppen',footerNote:'EN VÄRLD AV DOFT TAR FORM.',aboutPreview:'Om förhandsvisningen',previewInfo1:'Webbplatsen presenterar ett koncept för ett parfymvarumärke. Bilderna är AI-skapade för denna inspirationssida och är inte en katalog över produkter som går att köpa.',previewInfo2:'Det finns ingen butik, kontoregistrering, reklam eller analysverktyg. Dina val av språk och utseende sparas endast för den här webbläsarfliken. Webbhotellet kan spara vanliga serverloggar.',pageTitle:'MAISON KAES — En doft. En känsla. Ett minne.'
    },
    ar: {
      skip:'انتقل إلى المحتوى',announcement:'عالم جديد من العطر. وهذه ليست سوى البداية.',navigation:'القائمة الرئيسية',footerNavigation:'روابط أسفل الصفحة',openMenu:'فتح القائمة',closeMenu:'إغلاق القائمة',navWorld:'عالمنا',navStory:'الحكاية',navBeginning:'فصل جديد',chooseLanguage:'اختر اللغة',darkMode:'التبديل إلى الوضع المظلم',lightMode:'التبديل إلى الوضع الفاتح',close:'إغلاق',
      heroEyebrow:'لا تراه. ولا تنساه.',heroLine1:'عطر.',heroLine2:'إحساس.',heroLine3:'ذكرى.',heroDescription:'بعض الأشياء نشعر بها ولا نراها. ادخل عالماً يصبح فيه العطر جزءاً من حكايتك.',heroCta:'اكتشف عالمنا',heroFootnote:'نظرة أولى على MAISON KAES. ليس متجراً إلكترونياً.',heroCaption:'لحظة ساكنة، وضوء ناعم',heroCaptionRight:'رحلة في عالم العطر',interlude1:'لحظة',interlude2:'انطباع',interlude3:'شيء يبقى',
      worldEyebrow:'01 / لوحة الإلهام',worldTitle:'اتبع إحساسك.',worldIntro:'ضوء وملمس ولحظة عابرة. لمحة بصرية عن العالم الذي نتخيله.',lightTitle:'ضوء ناعم',lightNotes:'زهور بيضاء · كتان · شمس',woodsTitle:'سكون ذهبي',woodsNotes:'زجاج كهرماني · خشب · دفء',softTitle:'أثر هادئ',softNotes:'بتلات · حجر · ظلال ناعمة',lightAlt:'زجاجة عطر كهرمانية بغطاء خشبي إلى جانب زهور بيضاء وحجر مضاء بالشمس.',woodsAlt:'زجاجتا عطر كهرمانيتان مع خشب وزهور مجففة وكتان فاتح.',softAlt:'زجاجة عطر مستديرة إلى جانب أزهار أوركيد بيضاء وقرون فانيليا وحجر منحوت.',lightZoom:'تكبير صورة ضوء ناعم',woodsZoom:'تكبير صورة سكون ذهبي',softZoom:'تكبير صورة أثر هادئ',galleryNote:'لوحة إلهام بصرية وليست مجموعة منتجات. الصور للإلهام فقط.',
      storyCaption:'الجمال في الإحساس.',storyEyebrow:'02 / الدار',storyTitle1:'أكثر من عطر.',storyTitle2:'شيء يشبهك.',storyText1:'صباح هادئ. شمس تلامس بشرتك. مكان تتمنى العودة إليه. نؤمن أن جمال العطر يكمن في الذكريات التي يعيدها إلينا.',storyText2:'تبدأ حكاية MAISON KAES بهذا الإحساس. مساحة لاستكشاف العلاقة بين العطر والشخصية واللحظات التي تصنعنا.',storyCta:'الفصل القادم',beginningEyebrow:'03 / هذه هي البداية',beginningTitle1:'شيء جميل',beginningTitle2:'يبدأ بالتشكّل.',beginningText:'اكتشف عالمنا في الوقت الحالي. لا توجد عطور متاحة للشراء، ولا نستقبل أي طلبات.',previewLabel:'معاينة للعلامة · غير متاح للبيع حالياً',footerTagline:'العطر شخصي. وعالمنا كذلك.',backTop:'العودة إلى الأعلى',footerNote:'عالم من العطر يتشكّل.',aboutPreview:'عن هذه المعاينة',previewInfo1:'يقدم هذا الموقع تصوراً لعلامة عطور. صُنعت الصور بالذكاء الاصطناعي لهذه اللوحة البصرية، وليست كتالوجاً لمنتجات متاحة للشراء.',previewInfo2:'لا يوجد متجر أو تسجيل حساب أو إعلانات أو أدوات تحليل. تُحفظ اختيارات اللغة والمظهر لهذا التبويب من المتصفح فقط. قد يحتفظ مزود الاستضافة بسجلات وصول الخادم المعتادة.',pageTitle:'MAISON KAES — عطر. إحساس. ذكرى.'
    }
  };
  const root = document.documentElement;
  const languageSelect = document.querySelector('#language');
  const themeButton = document.querySelector('#theme-toggle');
  const menuButton = document.querySelector('#menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');
  const lightbox = document.querySelector('#lightbox');
  const previewDialog = document.querySelector('#preview-dialog');
  const lightboxImage = document.querySelector('#lightbox-image');
  let language = 'en';
  let activeImage = null;
  function save(key, value) { try { sessionStorage.setItem(key, value); } catch (_) {} }
  function t(key) { return copy[language][key] || copy.en[key] || ''; }
  function updateThemeLabel() {
    const label = t(root.dataset.theme === 'dark' ? 'lightMode' : 'darkMode');
    themeButton.setAttribute('aria-label', label);
    themeButton.title = label;
  }
  function updateMenuLabel() { menuButton.setAttribute('aria-label', t(mobileNav.hidden ? 'openMenu' : 'closeMenu')); }
  function closeMenu() { mobileNav.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); updateMenuLabel(); }
  function applyLanguage(value) {
    language = Object.hasOwn(copy, value) ? value : 'en';
    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
    languageSelect.value = language;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-label]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.label)); });
    document.querySelectorAll('[data-alt]').forEach(el => { el.alt = t(el.dataset.alt); });
    document.title = t('pageTitle');
    languageSelect.setAttribute('aria-label', t('chooseLanguage'));
    updateThemeLabel(); updateMenuLabel();
    if (activeImage) { document.querySelector('#lightbox-title').textContent = t(activeImage + 'Title'); lightboxImage.alt = t(activeImage + 'Alt'); }
  }
  try { language = sessionStorage.getItem('maison-kaes-language') || 'en'; } catch (_) {}
  applyLanguage(language);
  languageSelect.addEventListener('change', () => { applyLanguage(languageSelect.value); save('maison-kaes-language', language); });
  themeButton.addEventListener('click', () => { root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark'; save('maison-kaes-theme', root.dataset.theme); updateThemeLabel(); });
  menuButton.addEventListener('click', () => { mobileNav.hidden = !mobileNav.hidden; menuButton.setAttribute('aria-expanded', String(!mobileNav.hidden)); updateMenuLabel(); });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); } });
  window.matchMedia('(min-width: 601px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
  function showDialog(dialog) { dialog.showModal(); document.body.classList.add('modal-open'); }
  [lightbox, previewDialog].forEach(dialog => {
    dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => { if (!lightbox.open && !previewDialog.open) document.body.classList.remove('modal-open'); });
    dialog.addEventListener('click', event => { if (event.target !== dialog) return; const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); });
  });
  document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
    activeImage = button.dataset.image;
    lightboxImage.src = button.querySelector('img').getAttribute('src');
    lightboxImage.alt = t(activeImage + 'Alt');
    document.querySelector('#lightbox-title').textContent = t(activeImage + 'Title');
    showDialog(lightbox);
  }));
  document.querySelector('#about-preview').addEventListener('click', () => showDialog(previewDialog));
  document.querySelector('#year').textContent = String(new Date().getFullYear());
})();
