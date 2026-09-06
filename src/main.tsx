import React from "react";
import ReactDOM from "react-dom/client";
import { ArrowRight, ChevronDown, Factory, Menu, MessageCircle, ShieldCheck, Sparkles, X, Zap } from "lucide-react";
import "./styles.css";

const categories = [
  { no: "01", title: "Çok Fonksiyonlu Sistemler", text: "Profesyonel salonlar için çok yönlü ve güçlü istasyonlar.", image: "/images/cok-fonksiyonlu-sistem.jpeg", alt: "EFA üretimi çok fonksiyonlu kablo ve güç sistemi", position: "center 43%" },
  { no: "02", title: "Rack & Bench Sistemleri", text: "Yoğun antrenmana uygun sağlam taşıyıcı konstrüksiyonlar.", image: "/images/rack-egimli-bench.jpeg", alt: "EFA üretimi rack ve eğimli bench sistemi", position: "center 52%" },
  { no: "03", title: "Ekipman Stantları", text: "Antrenman alanını düzenleyen işlevsel depolama çözümleri.", image: "/images/plaka-stanti-salon.jpeg", alt: "EFA üretimi ağırlık plakası stantı", position: "center 48%" },
];

const products = [
  { title: "Ağırlık Plakası Stantı", image: "/images/agirlik-plakasi-stanti.jpeg", alt: "EFA üretimi metal ağırlık plakası stantı", position: "center 48%" },
  { title: "Ayarlanabilir Bench", image: "/images/ayarli-bench.jpeg", alt: "EFA üretimi ayarlanabilir antrenman bench sehpası", position: "center 55%" },
  { title: "Dambıl Stantı", image: "/images/dambil-stanti.jpeg", alt: "EFA üretimi iki katlı metal dambıl stantı", position: "center 47%" },
];

function App() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#top" onClick={close} aria-label="Efa Spor Aletleri ana sayfa">
          <span className="brand-box">EFA</span>
          <span className="brand-name">SPOR ALETLERİ<small>GÜÇ İÇİN ÜRETİYORUZ</small></span>
        </a>
        <nav className={open ? "nav-links open" : "nav-links"} aria-label="Ana menü">
          <a href="#urunler" onClick={close}>Ürünler</a>
          <a href="#uretim" onClick={close}>Üretim</a>
          <a href="#hakkimizda" onClick={close}>Hakkımızda</a>
          <a href="#iletisim" onClick={close}>İletişim</a>
          <button className="nav-quote" type="button" disabled title="İletişim bilgileri eklendiğinde aktif olacak">Teklif Al <ArrowRight size={16} /></button>
        </nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Menüyü kapat" : "Menüyü aç"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> YERLİ ÜRETİM · GÜÇLÜ MÜHENDİSLİK</p>
          <h1>GÜCÜNÜ<br /><em>BİZ ÜRETİYORUZ.</em></h1>
          <p className="hero-text">Profesyonel spor alanları için sağlam, işlevsel ve performans odaklı ekipmanlar tasarlıyoruz.</p>
          <div className="hero-actions">
            <a className="button primary" href="#urunler">Ürünleri Keşfet <ArrowRight size={18} /></a>
            <button className="button ghost" type="button" disabled>Teklif Al</button>
          </div>
          <p className="demo-note">Tasarım demosu · Nihai ürün bilgileri daha sonra eklenecektir.</p>
        </div>
        <div className="hero-visual">
          <div className="red-orbit" aria-hidden="true" />
          <figure className="hero-photo-frame">
            <img src="/images/cok-fonksiyonlu-sistem.jpeg" alt="EFA üretimi çok fonksiyonlu kablo ve güç sistemi" width="1200" height="1600" fetchPriority="high" />
            <figcaption>Çok fonksiyonlu sistem · Demo ürün grubu</figcaption>
          </figure>
          <div className="hero-badge"><Zap fill="currentColor" size={15} /> PERFORMANS İÇİN TASARLANDI</div>
        </div>
        <a href="#urunler" className="scroll-cue" aria-label="Ürünlere ilerle"><ChevronDown /></a>
      </section>

      <section className="statement" id="hakkimizda">
        <p className="section-kicker">EFA YAKLAŞIMI</p>
        <h2>SADECE EKİPMAN DEĞİL,<br /><span>UZUN ÖMÜRLÜ GÜÇ</span> ÜRETİYORUZ.</h2>
        <div className="value-row">
          <div><Factory /><strong>Yerli Üretim</strong><p>Atölyeden doğrudan, kontrollü üretim yaklaşımı.</p></div>
          <div><ShieldCheck /><strong>Sağlam Konstrüksiyon</strong><p>Yoğun kullanıma odaklanan mekanik tasarım.</p></div>
          <div><Sparkles /><strong>Modern Tasarım</strong><p>İşlev ve estetiği bir araya getiren ürün dili.</p></div>
        </div>
      </section>

      <section className="categories" id="urunler">
        <div className="section-head">
          <div><p className="section-kicker">ÜRÜN GRUPLARI</p><h2>HER ANTRENMANA<br />GÜÇ KATAN ÇÖZÜMLER</h2></div>
          <p>Ürün grupları ve isimleri, Efa Spor Aletleri’nin gerçek ürünleri paylaşıldığında güncellenecektir.</p>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <article className="category-card" key={category.no}>
              <span className="category-no">{category.no}</span>
              <div className="category-image-wrap">
                <img src={category.image} alt={category.alt} width={index === 1 ? 2000 : 1200} height={index === 1 ? 1125 : 1600} loading="lazy" style={{ objectPosition: category.position }} />
              </div>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
              <span className="fake-link">Seriyi İncele <ArrowRight size={17} /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="production" id="uretim">
        <div className="production-visual">
          <img src="/images/sahada-efa.jpeg" alt="EFA üretimi bench sisteminin spor salonundaki kullanımı" width="1200" height="1600" loading="lazy" />
          <div className="field-label"><span>SAHADA EFA</span><small>GERÇEK KULLANIM · GERÇEK PERFORMANS</small></div>
        </div>
        <div className="production-copy">
          <p className="section-kicker">ÜRETİMDEN ANTRENMAN ALANINA</p>
          <h2>SAHADA ÇALIŞAN<br />SAĞLAM VE İŞLEVSEL<br /><span>SİSTEMLER.</span></h2>
          <p>EFA imzalı metal ekipmanlar, gerçek spor alanlarında kullanıma yönelik güçlü konstrüksiyon ve işlevsel tasarım anlayışıyla şekilleniyor.</p>
          <ol>
            <li><span>01</span><div><strong>Tasarım & Planlama</strong><small>İhtiyaca uygun mekanik çözümün oluşturulması</small></div></li>
            <li><span>02</span><div><strong>Üretim & Montaj</strong><small>Atölyede hassas ve kontrollü uygulama</small></div></li>
            <li><span>03</span><div><strong>Kontrol & Teslim</strong><small>Son kontrollerin ardından kullanıma hazırlık</small></div></li>
          </ol>
        </div>
      </section>

      <section className="featured">
        <div className="section-head"><div><p className="section-kicker">ÖNE ÇIKANLAR</p><h2>GÜCÜN YENİ FORMU</h2></div></div>
        <div className="featured-grid">
          {products.map((product, index) => <article key={product.title}><div className="featured-image-wrap"><img src={product.image} alt={product.alt} width={index === 2 ? 1080 : index === 1 ? 920 : 1125} height={index === 2 ? 618 : 1992} loading="lazy" style={{ objectPosition: product.position }} /></div><p>ÜRÜN {String(index + 1).padStart(2, "0")}</p><h3>{product.title}</h3><span>Geçici ürün adı · Detaylar yakında</span></article>)}
        </div>
      </section>

      <section className="cta" id="iletisim">
        <div><p className="section-kicker">PROJENİZİ KONUŞALIM</p><h2>ANTRENMAN ALANINIZ İÇİN<br /><span>DOĞRU GÜCÜ</span> BİRLİKTE ÜRETELİM.</h2></div>
        <div className="cta-actions">
          <button type="button" disabled className="button light">Teklif İste <ArrowRight size={18} /></button>
          <button type="button" disabled className="button whatsapp"><MessageCircle size={18} /> WhatsApp</button>
          <small>İletişim bilgileri sağlandığında aktif olacaktır.</small>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-box">EFA</span><span className="brand-name">SPOR ALETLERİ<small>GÜÇ İÇİN ÜRETİYORUZ</small></span></a>
        <p>Bu sayfa görsel yönü göstermek amacıyla hazırlanmış bir tasarım demosudur.</p>
        <span>© EFA SPOR ALETLERİ</span>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<React.StrictMode><App /></React.StrictMode>);
