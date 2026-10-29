/**
 * EFA Spor Aletleri — Standalone Website Script
 * İletişim ve WhatsApp numaranızı aşağıdaki ayarlardan kolayca değiştirebilirsiniz.
 */

const CONFIG = {
  // WhatsApp numaranızı ülke koduyla (başında + olmadan) buraya yazabilirsiniz:
  whatsappNumber: "905550000000",
  // Varsayılan WhatsApp mesajı:
  defaultMessage: "Merhaba EFA Spor Aletleri, ürünleriniz ve profesyonel üretim çözümleriniz hakkında detaylı bilgi ve teklif almak istiyorum.",
  // E-posta ve telefon:
  phone: "+90 (555) 000 00 00",
  email: "info@efaspor.com",
  address: "Sanayi Bölgesi, Metal & İmalat Sanayi Sitesi, No: 42, Türkiye"
};

// Ürün ve Kategori Detay Veritabanı
const PRODUCT_DATA = {
  "cok-fonksiyonlu-sistem": {
    title: "Çok Fonksiyonlu Sistemler",
    category: "İstasyon & Makara Grubu",
    image: "images/cok-fonksiyonlu-sistem.jpeg",
    description: "Profesyonel fitness ve antrenman salonları için geliştirilmiş, tek bir gövdede onlarca farklı egzersize olanak tanıyan ağır hizmet tipi güç istasyonu.",
    specs: {
      "Profil Kalınlığı": "80x80x3 mm Çelik Kutu Profil",
      "Boya": "Çizilmeye Dayanıklı Elektrostatik Toz Fırın Boya",
      "Halat & Makara": "Havacılık Standartlarında Çelik Özlü Halat, Rulmanlı Sessiz Makaralar",
      "Taşıma Kapasitesi": "450+ kg",
      "Garanti": "Gövde ve Kaynak Aksamında 5 Yıl Üretici Garantisi"
    }
  },
  "rack-egimli-bench": {
    title: "Rack & Bench Sistemleri",
    category: "Serbest Ağırlık Sistemleri",
    image: "images/rack-egimli-bench.jpeg",
    description: "Yoğun güç antrenmanlarına ve yüksek ağırlıklara dayanacak şekilde hesaplanmış lazer kesim delikli kule ve ayarlanabilir ergonomik sehpa sistemi.",
    specs: {
      "Profil Kalınlığı": "70x70x3 mm ve 80x80 mm Takviyeli Şasi",
      "Döşeme": "Yüksek Yoğunluklu (HD) Terletmez Antibakteriyel Vinil Deri",
      "Açı Ayarı": "0° Düz, 30°, 45°, 60°, 75°, 85° Pozitif Açı Kademe Ayarı",
      "Güvenlik": "Lazer Numaralandırılmış J-Cup ve Emniyet Kolları",
      "Garanti": "5 Yıl Mekanik Garanti"
    }
  },
  "plaka-stanti-salon": {
    title: "Ekipman Stantları & Depolama",
    category: "Depolama Çözümleri",
    image: "images/plaka-stanti-salon.jpeg",
    description: "Antrenman alanında düzeni, iş güvenliğini ve ekipman ömrünü koruyan kompakt metal plaka ve aksesuar taşıyıcı üniteleri.",
    specs: {
      "Kapasite": "Olimpik (50 mm) ve Standart Plaka Uyumlu 6+ Ayrı Pim",
      "Taban": "Zemini Çizmeyen Ağır Kauçuk Takoz Tabanlıklar",
      "Boya": "Mat Siyah / Ter ve Sürtünmeye Dirençli Endüstriyel Boya",
      "Ağırlık": "38 kg Boş Ağırlık / Sarsılmaz Rijit Şasi",
      "Garanti": "Ömür Boyu Kaynak Garantisi"
    }
  },
  "agirlik-plakasi-stanti": {
    title: "Ağırlık Plakası Stantı",
    category: "Öne Çıkan Ürünler",
    image: "images/agirlik-plakasi-stanti.jpeg",
    description: "Olimpik barlar ve tampon plakalar için ergonomik yerleşim sunan, devrilmez üçgen ağırlık dağılımlı atölye üretimi dikey stant.",
    specs: {
      "Profil": "60x60x2.5 mm Mukavemetli Profil",
      "Taşıma": "Maksimum 600 kg Plaka Yükü",
      "Pimler": "Krom Kaplama Çizilmeyen Plaka Boynuzları",
      "Üretim": "EFA Yerli İmalat"
    }
  },
  "ayarli-bench": {
    title: "Ayarlanabilir Profesyonel Bench",
    category: "Öne Çıkan Ürünler",
    image: "images/ayarli-bench.jpeg",
    description: "Düz, eğimli ve dik açılı göğüs/omuz presleri için hızlı kilit mekanizmalı, arkasında tekerlek ve tutamak bulunan taşınabilir bench.",
    specs: {
      "Ayarlar": "7 Kademe Sırt Açısı, 3 Kademe Oturak Açısı",
      "Mekanizma": "Tek Elle Hızlı Ayarlanabilir Emniyet Pimi",
      "Taşıma": "Poliüretan Sessiz Arka Tekerlekler ve Ön Taşıma Kolu",
      "Kapasite": "400 kg Statik ve Dinamik Test Edilmiş Yük"
    }
  },
  "dambil-stanti": {
    title: "İki Katlı Dambıl Stantı",
    category: "Öne Çıkan Ürünler",
    image: "images/dambil-stanti.jpeg",
    description: "2.5 kg'dan 50 kg'a kadar dambıl takımlarını güvenle sıralayan, açılı metal raflı ve el sıkışmasını önleyen koruyucu bariyerli raf ünitesi.",
    specs: {
      "Uzunluk": "200 cm (Standart 10 Çift Dambıl Kapasiteli)",
      "Raf Yapısı": "Açılı Yönlendirilmiş 4 mm Sac Büküm Tabla",
      "Güvenlik": "Dambıl Yuvarlanmasını Önleyen Arka ve Ön Destekler",
      "Kaplama": "Aşınmaz Endüstriyel Toz Boya"
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initModals();
  initForms();
  initProductDetails();
  initWhatsAppLinks();
});

// ==========================================
// 1. Navbar & ScrollSpy
// ==========================================
function initNavbar() {
  const navShell = document.querySelector(".nav-shell");
  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-links");
  const navAnchors = document.querySelectorAll(".nav-links a");

  // Scroll efekti
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navShell?.classList.add("scrolled");
    } else {
      navShell?.classList.remove("scrolled");
    }
    highlightActiveNavLink();
  }, { passive: true });

  // Mobil Menü
  menuButton?.addEventListener("click", () => {
    const isOpen = navLinks?.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    const menuIcon = menuButton.querySelector(".icon-menu");
    const closeIcon = menuButton.querySelector(".icon-close");
    if (menuIcon && closeIcon) {
      menuIcon.style.display = isOpen ? "none" : "block";
      closeIcon.style.display = isOpen ? "block" : "none";
    }
  });

  // Linke tıklayınca mobil menüyü kapat
  navAnchors.forEach(link => {
    link.addEventListener("click", () => {
      navLinks?.classList.remove("open");
      const menuIcon = menuButton?.querySelector(".icon-menu");
      const closeIcon = menuButton?.querySelector(".icon-close");
      if (menuIcon && closeIcon) {
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
      }
    });
  });

  // Aktif bölümü navbar'da vurgula (ScrollSpy)
  const sections = document.querySelectorAll("section[id], header[id]");
  function highlightActiveNavLink() {
    const scrollPos = window.scrollY + 150;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      if (scrollPos >= top && scrollPos < top + height) {
        navAnchors.forEach(a => {
          if (a.getAttribute("href") === `#${id}`) {
            a.classList.add("active");
          } else {
            a.classList.remove("active");
          }
        });
      }
    });
  }
}

// ==========================================
// 2. Modals (Teklif Al & Ürün Detayı)
// ==========================================
function initModals() {
  const quoteModal = document.getElementById("quoteModal");
  const productModal = document.getElementById("productModal");
  const closeButtons = document.querySelectorAll(".modal-close-btn");
  const overlays = document.querySelectorAll(".modal-overlay");

  // Kapatma butonları
  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      closeAllModals();
    });
  });

  // Dışarı tıklayınca kapatma
  overlays.forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // ESC tuşuyla kapatma
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });

  // Teklif Al butonları
  const quoteTriggers = document.querySelectorAll("[data-open-quote]");
  quoteTriggers.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const productPrefill = btn.getAttribute("data-product-name");
      openQuoteModal(productPrefill);
    });
  });
}

function openQuoteModal(productName = "") {
  closeAllModals();
  const quoteModal = document.getElementById("quoteModal");
  const selectElem = document.getElementById("quoteProductSelect");
  if (selectElem && productName) {
    let found = false;
    for (let opt of selectElem.options) {
      if (opt.value.toLowerCase().includes(productName.toLowerCase()) || productName.toLowerCase().includes(opt.value.toLowerCase())) {
        opt.selected = true;
        found = true;
        break;
      }
    }
    if (!found && productName) {
      const newOpt = new Option(productName, productName, true, true);
      selectElem.add(newOpt);
    }
  }
  quoteModal?.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeAllModals() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
  document.body.style.overflow = "";
}

// ==========================================
// 3. Ürün Detay Modalı
// ==========================================
function initProductDetails() {
  const productCards = document.querySelectorAll("[data-product-key]");
  const productModal = document.getElementById("productModal");

  productCards.forEach(card => {
    card.addEventListener("click", () => {
      const key = card.getAttribute("data-product-key");
      const data = PRODUCT_DATA[key];
      if (!data) return;

      document.getElementById("modalProdTitle").textContent = data.title;
      document.getElementById("modalProdCat").textContent = data.category;
      document.getElementById("modalProdDesc").textContent = data.description;
      
      const imgElem = document.getElementById("modalProdImg");
      if (imgElem) {
        imgElem.src = data.image;
        imgElem.alt = data.title;
      }

      // Özellikler Tablosu
      const specsTable = document.getElementById("modalProdSpecs");
      if (specsTable) {
        specsTable.innerHTML = "";
        for (const [key, val] of Object.entries(data.specs)) {
          const row = document.createElement("tr");
          row.innerHTML = `<td>${key}</td><td>${val}</td>`;
          specsTable.appendChild(row);
        }
      }

      // "Bu Ürün İçin Teklif Al" butonu
      const quoteBtn = document.getElementById("modalQuoteBtn");
      if (quoteBtn) {
        quoteBtn.onclick = () => {
          openQuoteModal(data.title);
        };
      }

      // "WhatsApp'tan Sor" butonu
      const waBtn = document.getElementById("modalWaBtn");
      if (waBtn) {
        waBtn.onclick = () => {
          const msg = encodeURIComponent(`Merhaba EFA Spor Aletleri, "${data.title}" modeli hakkında teknik detay, üretim süresi ve fiyat teklifi almak istiyorum.`);
          window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`, "_blank");
        };
      }

      productModal?.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });
}

// ==========================================
// 4. Form İşlemleri (Teklif & İletişim)
// ==========================================
function initForms() {
  // Modal Teklif Formu
  const modalForm = document.getElementById("quoteModalForm");
  modalForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("quoteName")?.value || "";
    const phone = document.getElementById("quotePhone")?.value || "";
    const product = document.getElementById("quoteProductSelect")?.value || "Belirtilmedi";
    const note = document.getElementById("quoteNote")?.value || "";

    closeAllModals();
    showToast(`Teşekkürler ${name}! Teklif talebiniz alındı, en kısa sürede dönüş yapacağız.`);
    modalForm.reset();
  });

  // Modal'dan WhatsApp ile Gönder Butonu
  const modalWaSubmit = document.getElementById("quoteModalWaBtn");
  modalWaSubmit?.addEventListener("click", () => {
    const name = document.getElementById("quoteName")?.value || "Müşteri";
    const phone = document.getElementById("quotePhone")?.value || "";
    const product = document.getElementById("quoteProductSelect")?.value || "Genel Teklif";
    const note = document.getElementById("quoteNote")?.value || "";

    const text = `*EFA SPOR ALETLERİ - HIZLI TEKLİF TALEBİ*\n\n*İsim:* ${name}\n*Telefon:* ${phone}\n*İlgilenilen Ürün/Grup:* ${product}\n*Proje Notu:* ${note || "Belirtilmedi"}`;
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    closeAllModals();
  });

  // Sayfa İçi İletişim Formu
  const contactForm = document.getElementById("contactForm");
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cName")?.value || "Değerli Müşterimiz";
    showToast(`Sayın ${name}, mesajınız başarıyla iletildi!`);
    contactForm.reset();
  });

  // Sayfa İçi WhatsApp İle İlet Butonu
  const contactWaBtn = document.getElementById("contactWaSubmitBtn");
  contactWaBtn?.addEventListener("click", () => {
    const name = document.getElementById("cName")?.value || "";
    const phone = document.getElementById("cPhone")?.value || "";
    const subject = document.getElementById("cSubject")?.value || "Genel Soru";
    const message = document.getElementById("cMessage")?.value || "";

    const text = `*EFA SPOR ALETLERİ - İLETİŞİM FORMU*\n\n*İsim:* ${name || "Müşteri"}\n*Telefon:* ${phone || "Belirtilmedi"}\n*Konu:* ${subject}\n*Mesaj:* ${message || "Merhaba, bilgi almak istiyorum."}`;
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
  });
}

// ==========================================
// 5. WhatsApp Bağlantıları
// ==========================================
function initWhatsAppLinks() {
  const waButtons = document.querySelectorAll("[data-wa-direct]");
  waButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const customMsg = btn.getAttribute("data-wa-msg") || CONFIG.defaultMessage;
      window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(customMsg)}`, "_blank");
    });
  });
}

// ==========================================
// 6. Toast Bildirimi
// ==========================================
function showToast(message) {
  let toast = document.getElementById("toastNotice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="#ef2b22" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4200);
}
