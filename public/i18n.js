// ============================================================
//  Presentation page i18n — EN (original) · 中文 · हिन्दी · Latina
//  Client-side toggle, zero external calls. EN restores the
//  original innerHTML cached on load; zh/hi/la from the map below.
// ============================================================
(function () {
  var T = {
    "#s0 .eyebrow": {
      zh: "NINJATECH · 我们的信念 · 北极星",
      hi: "NINJATECH · हमारा विश्वास · ध्रुव तारा",
      la: "NINJATECH · FIDES NOSTRA · STELLA SEPTENTRIONALIS",
    },
    "#s0 h1.belief": {
      zh: 'AI 劳动力是企业软件的<span class="accent">下一个十亿席位</span>。',
      hi: 'AI वर्कफ़ोर्स एंटरप्राइज़ सॉफ़्टवेयर की <span class="accent">अगली एक अरब सीटें</span> है।',
      la: 'Operae AI sunt <span class="accent">proxima miliarda sedium</span> programmatum negotii.',
    },
    "#s0 .building": {
      zh: '<span class="accent">全天候</span> 长时运行 · 自我进化 · 协作型 <strong>AI 劳动力</strong>',
      hi: '<span class="accent">24/7</span> लंबे समय तक चलने वाली · स्व-विकसित · सहयोगी <strong>AI वर्कफ़ोर्स</strong>',
      la: '<span class="accent">24/7</span> diuturna · se evolvens · cooperativa <strong>operae AI</strong>',
    },
    "#s0 .lede": {
      zh: "<strong>携手同行，让它成真。</strong>",
      hi: "<strong>मिलकर, हम इसे साकार कर रहे हैं।</strong>",
      la: "<strong>Una, id efficimus.</strong>",
    },
    "#s0 .satya": {
      zh: '“你可以外包一项任务，甚至一份工作——但你永远无法外包你的学习过程。”<cite>萨提亚·纳德拉 · <em>《没有生态系统的前沿并不稳定》</em></cite>',
      hi: '“आप कोई कार्य या नौकरी भी आउटसोर्स कर सकते हैं — लेकिन आप अपनी सीखने की प्रक्रिया कभी आउटसोर्स नहीं कर सकते।”<cite>सत्या नडेला · <em>“पारिस्थितिकी के बिना सीमा स्थिर नहीं होती”</em></cite>',
      la: '“Munus aut etiam officium delegare potes — sed processum discendi tuum numquam delegare potes.”<cite>Satya Nadella · <em>“Frons sine oecosystemate non est stabilis”</em></cite>',
    },
    "#countlabel": {
      zh: "距离现场演示", hi: "लाइव डेमो तक", la: "usque ad demonstrationem vivam",
    },
    "#s0 .scrollcue": {
      zh: "向下滚动 / ↓ 查看 5 项能力",
      hi: "5 क्षमताओं के लिए नीचे स्क्रॉल करें / ↓",
      la: "deorsum volve / ↓ ad 5 facultates",
    },
    "#s0 .qrlabel b": {
      zh: "📲 扫码 → AI 员工", hi: "📲 स्कैन करें → AI कर्मचारी", la: "📲 Scande → AI Operarii",
    },
    "#hint": {
      zh: "▶ 点击<b>发送</b>（或回车），看 AI 员工实时交付。",
      hi: "▶ <b>भेजें</b> (या Enter) पर क्लिक करें और देखें AI कर्मचारी इसे लाइव शिप करता है।",
      la: "▶ Preme <b>Mitte</b> (vel Enter) ut AI operarium id vivum perficere videas.",
    },
    "#send": {
      zh: "发送给&nbsp;@Ninja&nbsp;🥷", hi: "@Ninja&nbsp;को भेजें&nbsp;🥷", la: "Mitte ad&nbsp;@Ninja&nbsp;🥷",
    },

    // 01 · 24/7
    "#s1 .kicker": { zh: "始终在线", hi: "हमेशा चालू", la: "SEMPER ACTIVA" },
    "#s1 h2": {
      zh: '长时运行。<span class="accent">全天候。</span>',
      hi: 'लंबे समय तक चलने वाली। <span class="accent">24/7।</span>',
      la: 'Diuturna. <span class="accent">24/7.</span>',
    },
    "#s1 .big": {
      zh: "周五下达目标，周一回来即见成果。你的 AI 员工可连续运行<strong>数月</strong>，而非几分钟——它们从不睡觉、从不休息、也从不偏离主线。",
      hi: "शुक्रवार को लक्ष्य दें, सोमवार को पूरा काम पाएँ। आपके AI कर्मचारी मिनटों नहीं, <strong>महीनों</strong> तक चलते हैं — वे कभी नहीं सोते, कभी विराम नहीं लेते, और कभी राह नहीं भूलते।",
      la: "Die Veneris propositum da, die Lunae opus perfectum inveni. Operarii AI tui per <strong>menses</strong>, non minuta, currunt — numquam dormiunt, numquam quiescunt, numquam filum amittunt.",
    },
    "#s1 .stats .stat:nth-of-type(1) span": { zh: "运行时长 — 不计量", hi: "रनटाइम — असीमित", la: "tempus currens — sine modo" },
    "#s1 .stats .stat:nth-of-type(2) span": { zh: "无休息，不误期", hi: "कोई विराम नहीं, कोई समयसीमा नहीं चूकती", la: "nullae pausae, nullae metae omissae" },
    "#s1 .stats .stat:nth-of-type(3) span": { zh: "单一目标，持续推进", hi: "एकल लक्ष्य, निरंतर", la: "unum propositum, sustentatum" },

    // 02 · self-evolving
    "#s2 .kicker": { zh: "持续累积", hi: "यह संचित होता है", la: "ACCUMULAT" },
    "#s2 h2": {
      zh: '自我<span class="accent">进化。</span>',
      hi: 'स्व-<span class="accent">विकसित।</span>',
      la: 'Se <span class="accent">evolvens.</span>',
    },
    "#s2 .big": {
      zh: "每一项完成的任务、每一次自我纠错，都让下一次运行更出色。你的劳动力<strong>越用越强</strong>——是不断累积的机构记忆，而非会遗忘的模型。",
      hi: "हर पूरा किया गया कार्य और हर स्व-सुधारी गई गलती अगली बार को बेहतर बनाती है। आपकी वर्कफ़ोर्स <strong>उपयोग के साथ बेहतर होती है</strong> — संस्थागत स्मृति जो संचित होती है, न कि भूलने वाला मॉडल।",
      la: "Omne munus perfectum et omnis error correctus cursum proximum acuit. Operae tuae <strong>usu meliores fiunt</strong> — memoria instituti quae accumulat, non exemplar quod obliviscitur.",
    },
    "#s2 .stats .stat:nth-of-type(1) span": { zh: "持续学习基准（通过 PEEK）", hi: "कंटिन्युअल लर्निंग बेंच (PEEK के ज़रिए)", la: "Continual Learning Bench (per PEEK)" },
    "#s2 .stats .stat:nth-of-type(2) span": { zh: "每次运行提取成败规则", hi: "हर रन से जीत/हार के नियम निकालता है", la: "regulas victoriae/cladis quoque cursu extrahit" },
    "#s2 .stats .stat:nth-of-type(3) span": { zh: "由你拥有的学习闭环", hi: "सीखने का लूप जो आपका है", la: "ansa discendi quam possides" },

    // 03 · collaborative
    "#s3 .kicker": { zh: "是团队，不是机器人", hi: "एक टीम, बॉट नहीं", la: "GREX, NON AUTOMATON" },
    "#s3 h2": {
      zh: '实时<span class="accent">协作。</span>',
      hi: 'सहयोगी, <span class="accent">वास्तविक समय में।</span>',
      la: 'Cooperativa, <span class="accent">in tempore reali.</span>',
    },
    "#s3 .big": {
      zh: "智能体作为一个团队，并与你的同事一起——实时协作，就在你日常工作的地方。多任务并行，互不阻塞。",
      hi: "एजेंट एक टीम के रूप में और आपके लोगों के साथ काम करते हैं — लाइव, जहाँ आप पहले से काम करते हैं। कई काम समानांतर में, कोई भी आपको नहीं रोकता।",
      la: "Procuratores ut grex et cum hominibus tuis laborant — vive, ubi iam laboras. Multa munera simul, nullum te impediens.",
    },
    "#s3 .chip.soon": { zh: "WhatsApp · 即将推出", hi: "WhatsApp · जल्द आ रहा है", la: "WhatsApp · mox venturum" },
    "#s3 .sub": {
      zh: "智能体之间的交接 + 多人协作，就在频道里——无需学习新应用。",
      hi: "एजेंट-से-एजेंट हैंड-ऑफ़ + बहु-मानव सहयोग, सीधे चैनल में — कोई नया ऐप सीखने की ज़रूरत नहीं।",
      la: "Traditiones inter procuratores + cooperatio multorum hominum, in ipso canali — nulla nova applicatio discenda.",
    },

    // 04 · integrations
    "#s4 .kicker": { zh: "开箱即连", hi: "बॉक्स से ही जुड़ा हुआ", la: "STATIM CONEXA" },
    "#s4 h2": {
      zh: '<span class="accent">3,000+</span> 应用集成。',
      hi: '<span class="accent">3,000+</span> ऐप इंटीग्रेशन।',
      la: '<span class="accent">3,000+</span> applicationum coniunctiones.',
    },
    "#s4 .big": {
      zh: "一键 OAuth 连接 <strong>3,000+ 应用</strong>——外加真正的云端浏览器应对其它一切。<strong>只要有登录和界面，你的劳动力就能使用它。</strong>",
      hi: "<strong>3,000+ ऐप्स</strong> से वन-क्लिक OAuth — साथ ही बाक़ी सब के लिए एक असली क्लाउड ब्राउज़र। <strong>अगर उसमें लॉगिन और स्क्रीन है, तो आपकी वर्कफ़ोर्स उसे चला सकती है।</strong>",
      la: "OAuth uno ictu ad <strong>3,000+ applicationes</strong> — et navigatrum nubis verum ad cetera omnia. <strong>Si ingressum et screen habet, operae tuae eo uti possunt.</strong>",
    },
    "#iconnote": {
      zh: "3,000+ 中的前 50 个——实时来自我们的集成面板。",
      hi: "<b>3,000+</b> में से शीर्ष 50 — हमारे इंटीग्रेशन डैशबोर्ड से लाइव।",
      la: "Summi 50 ex <b>3,000+</b> — vive ex tabula coniunctionum nostra.",
    },

    // 05 · YC-Bench
    "#s5 .kicker": { zh: "已证明，而非空谈 · 基准 1/2", hi: "सिद्ध, दावा नहीं · बेंचमार्क 1/2", la: "PROBATUM, NON ADSERTUM · NORMA 1/2" },
    "#s5 h2": {
      zh: '<span class="accent">YC-Bench</span> — 长程执行',
      hi: '<span class="accent">YC-Bench</span> — दीर्घ-क्षितिज निष्पादन',
      la: '<span class="accent">YC-Bench</span> — executio longi spatii',
    },
    "#s5 .bsub": {
      zh: "<b>它是什么：</b>智能体运营一家模拟初创公司<b>整整一年</b>——发薪、对抗性客户、数百个决策。指标 = 3 个随机种子后的<b>净资产</b>。在我们的内部运行中，<b>前三名全是 Ninja。</b>",
      hi: "<b>यह क्या है:</b> एक एजेंट एक नकली स्टार्टअप को <b>पूरे एक साल</b> चलाता है — पेरोल, विरोधी ग्राहक, सैकड़ों निर्णय। मापदंड = 3 सीड के बाद <b>नेट वर्थ</b>। हमारे आंतरिक रन में, <b>टॉप-3 सभी Ninja हैं।</b>",
      la: "<b>Quid sit:</b> procurator inceptum simulatum per <b>annum integrum</b> regit — stipendia, clientes adversarios, centena consilia. Mensura = <b>patrimonium</b> post 3 semina. In cursibus nostris internis, <b>tres summi omnes Ninja sunt.</b>",
    },
    "#s5 .srclink": {
      zh: '查看基准 → <em>Collinear AI · arXiv 2604.01212</em>',
      hi: 'बेंचमार्क देखें → <em>Collinear AI · arXiv 2604.01212</em>',
      la: 'Vide normam → <em>Collinear AI · arXiv 2604.01212</em>',
    },
    "#s5 .bnote": {
      zh: "独立第三方榜单 · Ninja 行 = 我们的<b>内部运行</b>（公开榜首：Fable 5 $1.98M）。",
      hi: "स्वतंत्र तृतीय-पक्ष बोर्ड · Ninja पंक्तियाँ = हमारे <b>आंतरिक रन</b> (सार्वजनिक शीर्ष: Fable 5 $1.98M)।",
      la: "Tabula tertiae partis independens · ordines Ninja = <b>cursus interni</b> nostri (summus publicus: Fable 5 $1.98M).",
    },

    // 06 · Continual Learning
    "#s6 .kicker": { zh: "已证明，而非空谈 · 基准 2/2", hi: "सिद्ध, दावा नहीं · बेंचमार्क 2/2", la: "PROBATUM, NON ADSERTUM · NORMA 2/2" },
    "#s6 h2": {
      zh: '<span class="accent">持续学习</span> — 复利式成长',
      hi: '<span class="accent">कंटिन्युअल लर्निंग</span> — सीख जो संचित होती है',
      la: '<span class="accent">Continual Learning</span> — discere quod accumulat',
    },
    "#s6 .bsub": {
      zh: "<b>它是什么：</b>衡量智能体在一连串任务中相对其自身无记忆基线的<b>提升幅度</b>。指标 = <b>累计回报</b>。同一模型，<b>加上 PEEK 后从第 7 跃升至第 1 和第 2。</b>",
      hi: "<b>यह क्या है:</b> एक एजेंट कार्यों की एक शृंखला में अपनी बिना-स्मृति बेसलाइन की तुलना में <b>कितना सुधरता है</b>। मापदंड = <b>कुल इनाम</b>। वही मॉडल, <b>+PEEK से #7 → #1 और #2।</b>",
      la: "<b>Quid sit:</b> quantum procurator <b>per seriem</b> munerum prae sua basi sine memoria <b>proficiat</b>. Mensura = <b>praemium aggregatum</b>. Idem exemplar, <b>+PEEK a #7 ad #1 et #2 salit.</b>",
    },
    "#s6 .srclink": {
      zh: '查看基准 → <em>UC Berkeley · Snorkel · arXiv 2606.05661</em>',
      hi: 'बेंचमार्क देखें → <em>UC Berkeley · Snorkel · arXiv 2606.05661</em>',
      la: 'Vide normam → <em>UC Berkeley · Snorkel · arXiv 2606.05661</em>',
    },
    "#s6 .bnote": {
      zh: "独立第三方榜单 · Ninja 行 = 我们的<b>内部运行</b>（公开榜首：ICL·Sonnet 4.6 +0.223）。",
      hi: "स्वतंत्र तृतीय-पक्ष बोर्ड · Ninja पंक्तियाँ = हमारे <b>आंतरिक रन</b> (सार्वजनिक शीर्ष: ICL·Sonnet 4.6 +0.223)।",
      la: "Tabula tertiae partis independens · ordines Ninja = <b>cursus interni</b> nostri (summus publicus: ICL·Sonnet 4.6 +0.223).",
    },
  };

  var orig = {};
  function q(sel) { try { return document.querySelector(sel); } catch (e) { return null; } }

  function cacheEN() {
    for (var sel in T) { var e = q(sel); if (e) orig[sel] = e.innerHTML; }
  }
  function apply(lang) {
    for (var sel in T) {
      var e = q(sel); if (!e) continue;
      if (lang === "en") { if (sel in orig) e.innerHTML = orig[sel]; }
      else if (T[sel][lang]) e.innerHTML = T[sel][lang];
    }
    try { document.documentElement.lang = lang; } catch (e) {}
    var btns = document.querySelectorAll("#langtoggle button");
    for (var i = 0; i < btns.length; i++) btns[i].classList.toggle("on", btns[i].getAttribute("data-lang") === lang);
  }

  function init() {
    cacheEN();
    var tg = document.getElementById("langtoggle");
    if (tg) tg.addEventListener("click", function (ev) {
      var b = ev.target.closest ? ev.target.closest("button") : null;
      if (b && b.getAttribute("data-lang")) apply(b.getAttribute("data-lang"));
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  window.__applyLang = apply; // for QA
})();
