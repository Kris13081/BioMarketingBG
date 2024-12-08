import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import ProductSection from "./ProductSection.js";
import logo from "./assets/logo.png";
import animals from "./assets/animals.png";
import protection from "./assets/protection.png";
import lungs from "./assets/lungs.png";
import food from "./assets/food.png";
import mind from "./assets/mind.png";
import doge from "./assets/vetdoge.jpg";
import tic from "./assets/tic.png";
import doge2 from "./assets/doge2.jpeg";

import ocuprotect from './assets/products/OcuProtect.png'
import lysimun from './assets/products/Lysimun.png'
import clerapliq from './assets/products/Clerapliq.png'

import "./App.css";

// Data for the feature cards
const features = [
  {
    img: protection,
    title: "Натурални съставки",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.",
  },
  {
    img: lungs,
    title: "100% възтановяване",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.",
    highlighted: true,
  },
  {
    img: food,
    title: "Натурални съставки",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.",
  },
  {
    img: mind,
    title: "Без травми",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.",
  },
];

// Data for the benefits list
const benefits = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];

const products = [
  {
    id: 1,
    image: ocuprotect,
    name: "OcuProtect 15 ml",
    description: `
<h5>Стерилен очен разтвор за овлажняване на очната повърхност. </h5>
<p>OcuProtect очни капки е разтвор съдържащ натурални биологични съставки, който овлажнява роговицата и образува защитен филм върху повърхността на окото, като по този начин се подобрява клетъчното хранене и се подпомага възстановяването на роговичния епител.</p>
<h5>Състав</h5>
<ul>
  <li>Helix Aspersa екстракт от мускус - 3%</li>
  <li>PEG / PPG Co-Polymer - 1%</li>
  <li>Хиалуронова киселина - 0.1%</li>
  <li>Натриев EDTA - 0.1%</li>
  <li>N-хидроксиметилглицинат - 0,001%</li>
  <li>Стерилен изотоничен разтвор, буфериран до рН 7,2.</li>
</ul>
<h5>Терапевтични показния</h5>
<ul>
  <li>Сух кератоконюнктивит</li>
  <li>Алергични конюнктивити</li>
  <li>При изсъхване на очната повърхност при брахицефалните породи кучета</li>
  <li>При котки предразположени към очни проблеми</li>
  <li>По време на лечение на окото – медицински манипулации; хирургични интервенции</li>
  <li>При неблагоприятни външни условия (полени, вятър, ниска влажност и др.), оказващи директно неблагоприятно влияние върху очната повърхност</li>
</ul>
<h5>OcuProtect:</h5>
<ul>
  <li>Защитава окото от изсъхване</li>
  <li>Незабавно намалява клиничните симптоми свързани със сухотата на окото</li>
  <li>Подпомага клетъчното хранене и възстановяване на епитела</li>
  <li>Намалява зачервяването и възпалението на роговицата и конюнктивата</li>
  <li>Позволява успоредно приложение с друга терапия</li>
  <li>Не сензибилизира роговичният епител</li>
  <li>Прилага се при всички видове животни</li>
</ul>
<h5>Приложение</h5>
<p>Начин на приложение - 2-3 пъти дневно по 1-2 капки във всяко око</p>
`,
    price: 25.99,
  },
  {
    "id": 2,
    "image": lysimun,
    "name": "Lysimun 100 ml",
    "description": `
<h5>Имуностимулатор за котки</h5>
<p>Лизимун е хранителна добавка за котки под формата на капки, прилагащ се с храната или директно в устата. Лизимун засилва имунната система и намалява тежестта на заболяването, както и броя на рецидивите.</p>
<h5>Състав</h5>
<ul>
  <li>L-лизин (монохидрохлорид) 50,000 mg ≈ 50 mg/ml</li>
  <li>Витамин В5 600 mg</li>
  <li>Витамин В6 100 mg</li>
  <li>Витамин В12 100 μg</li>
  <li>Дрожди-фосфо (β) глюкан липозомен комплекс 1,3 / 1,6 ß-глюкани</li>
  <li>лактоферин</li>
</ul>
<h5>Свойства</h5>
<ul>
  <li>Л-лизинът притежава силно противовирусно действие, особено по отношение на херпес вирусите и калицивирусите при котки. Заедно с лактоферин намаляват продължителността на боледуване и последващ рецидив.</li>
  <li>Фосфо (β) глюкан липозомният комплекс (1,3 / 1,6 ß-глюкани) повишава активността на макрофагите и серумният IgA.</li>
  <li>Витамините усилват енергийния метаболизъм и подпомагат за по-бързото възтановяване на организма.</li>
</ul>
<h5>Приложение</h5>
<ul>
  <li>котенца 0.25 мл 1-2 дневно</li>
  <li>котки 1-3 кг 0.5 мл 1-2 дневно</li>
  <li>котки 4-5 кг 1 мл 1-2 дневно</li>
</ul>
`,
    "price": 30.99
}
,
{
  "id": 3,
  "image": clerapliq,
  "name": "Clerapliq",
  "description": `
<h5>КЛЕРАПЛИК® Капки за очи - локален заместител на екстрацелуларния матрикс</h5>
<p>Съставки (мг/мл): RGTA ……… 0,1 мг (Карбоксиметилглюкоза-сулфат-полимери RGTA®) Eксципиенти q.s … 1 мл.</p>
<h5>Свойства</h5>
<p>Карбоксиметилглюкоза-сулфат-полимерите RGTA® са биополимери, много близки до структурните хепаран-сулфати. Хепаран-сулфатите представляват опорната точка в екстрацелуларния матрикс, необходима на физиологичните фактори за тъканното възстановяване и участват в защитата на екстрацелуларния матрикс, необходима за деленето на клетките и възстановяването на роговицата. В роговичните лезии, хепаран-сулфатите биват унищожени от ензимите, свързани с възпалението. RGTA® заменя унищожените хепаран-сулфати, подсигурявайки заздравяването на роговицата. Подобряването на качеството на екстрацелуларния матрикс спомага за намаляването на дискомфорта при животното.</p>
<h5>Видове животни</h5>
<p>КЛЕРАПЛИК® е подходящ за употреба при котки, кучета, спортни и състезателни коне и екзотични животни.</p>
<h5>Инструкции</h5>
<p>За накапване в очите. По 1-2 капки във всяко око на всеки два дни. Ежедневна употреба не се препоръчва. Честотата може да бъде намалена по преценка на вашия ветеринарен лекар. При употреба на други продукти за очи, първо прилагайте КЛЕРАПЛИК® и изчакайте 2-3 минути преди прилагането на следващия продукт. Продължителността на употреба може да варира от една до няколко седмици. Вашият ветеринарен лекар може да приспособи инструкциите за употреба. Следвайте неговите препоръки.</p>
<h5>Начин на съхранение</h5>
<p>Продуктът се съхранява в оригиналната опаковка при температура 4℃ - 25℃. Изхвърлете пипетата след употреба. Разтворът не съдържа консерванти или оцветители.</p>
<h5>Категория</h5>
<p>ВЕТЕРИНАРЕН ХИГИЕНЕН ПРОДУКТ ЗА ОЧИ, ИЗПОЛЗВАН КАТО ЗАМЕСТИТЕЛ НА ЕКСТРАЦЕЛУЛАРНИЯ МАТРИКС.</p>
<h5>Опаковка</h5>
<p>Кутия с 1 саше с 5 стерилни единични дози х 0.33 мл.</p>
`,
  "price": 35.99
},
];

function App() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple submissions during the timeout

    emailjs
      .sendForm("service_y9mhonh", "template_y6kwk2a", form.current, {
        publicKey: "aetNBQgTvUtcgvrCu",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset(); // Clear the form
          setIsSubmitting(true); // Start the timeout
          setTimeout(() => setIsSubmitting(false), 60000); // Reset submission lock after 1 minute
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="container-fluid p-0 overflow-hidden">
      {/* Header section with a background image as a full-width image */}
      <div className="row justify-content-center align-items-center animals-sec border-5 border-bottom border-primary">
        <div className="col-12 p-0 d-flex justify-content-center align-items-center position-relative">
          <img src={animals} alt="Background" className="w-100 img-fluid" />
        </div>
      </div>

      {/* Logo section */}
      <div className="row justify-content-center py-3">
        <div className="col-md-6 text-center">
          <img src={logo} alt="Bio Logo" className="w-50 img-fluid" />
        </div>
      </div>

      {/* Main text */}
      <div className="row">
        <div className="col-12 text-center">
          <h1
            className="display-1 pb-5"
            style={{ fontFamily: "'Lobster', cursive" }}
          >
            Грижим се за тяхното здраве
          </h1>
        </div>
      </div>

      {/* Feature cards section */}
      <div className="row justify-content-center p-5 mx-0">
        {features.map((feature, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
            <div
              className={`card p-3 border rounded ${
                feature.highlighted ? "bg-primary text-white" : "bg-light"
              }`}
            >
              <img
                src={feature.img}
                alt={`${feature.title} Icon`}
                className="card-img-top img-fluid mb-2 mx-auto"
                style={{
                  maxWidth: "92px",
                  maxHeight: "92px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <h5 className="card-title fs-4 fw-bold">{feature.title}</h5>
                <p className="card-text fs-6">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-2 border-bottom border-gray m-3">
        {/* Other sections of the App */}
        <ProductSection products={products} />
        {/* Reviews Section */}
      </div>

      {/* Choose us section */}
      <div className="row p-5 mx-0 mb-5 mt-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={doge}
            alt="Decorative"
            className="img-fluid rounded border border-0"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-4 fw-bold pb-3">Защо да изберете нас?</h1>
          <ul className="list-unstyled">
            {benefits.map((benefit, index) => (
              <li key={index} className="d-flex align-items-center mb-3 fs-6">
                <img src={tic} alt="Check" className="me-2" />
                {benefit}
              </li>
            ))}
          </ul>
          <a href="#" className="btn btn-link fs-6 fw-medium text-primary"></a>
        </div>
      </div>
      <div
        className="container-fluid p-5"
        style={{ backgroundColor: "#E8F0FF" }}
      >
        <div className="row">
          <div className="col-md-6">
            <h1
              style={{
                fontWeight: "700",
                fontSize: "48px",
                lineHeight: "62.4px",
                color: "#2e2e2eff",
              }}
            >
              Какво <span style={{ color: "#007bff" }}>Казват Клиентите</span>{" "}
              За Нас?
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "20.8px",
                color: "#2e2e2eff",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
              viverra amet faucibus.
            </p>
            <div className="d-flex align-items-center m-3">
              {[7, 8, 9].map((id) => (
                <img
                  key={id}
                  src={`https://placeholder.pics/svg?${id}`}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "52px", height: "52px", marginRight: "5px" }}
                />
              ))}
              <span
                style={{
                  fontWeight: "600",
                  marginLeft: "10px",
                  fontSize: "16px",
                  color: "#2e2e2eff",
                }}
              >
                100+ Reviews
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={{ borderRadius: "10px" }}>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="https://dashboard.codeparrot.ai/api/assets/Z0zDg3FEV176CUiG"
                    alt="avatar"
                    className="rounded-circle"
                    style={{
                      width: "52px",
                      height: "52px",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <h5
                      className="mb-0"
                      style={{
                        fontWeight: "600",
                        fontSize: "16px",
                        color: "#2e2e2eff",
                      }}
                    >
                      Жени Мирчева
                    </h5>
                    <small style={{ fontSize: "12px", color: "#2e2e2eff" }}>
                      13/11/2024
                    </small>
                  </div>
                </div>
                <div className="ms-auto">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="text-warning"
                      style={{ fontSize: "40px" }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "20.8px",
                    color: "#2e2e2eff",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                  velit viverra amet faucibus. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sem velit viverra amet faucibus.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                  velit viverra amet faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5 py-2">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 p-5">
            <h1
              className="display-4 fw-bold pb-3"
              style={{
                fontFamily: "IBM Plex Sans",
                fontSize: "2.5rem",
                color: "#2e2e2e",
              }}
            >
              Бъдещето на Ветеринарната Медицина
            </h1>
            <p
              className="mb-4"
              style={{
                fontFamily: "IBM Plex Sans",
                fontWeight: 400,
                fontSize: "1rem",
                color: "#2e2e2e",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. Auctor semper fermentum
              volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
              Nibh est sit lobortis id semper.
            </p>
            <p
              className="mb-4"
              style={{
                fontFamily: "IBM Plex Sans",
                fontWeight: 400,
                fontSize: "1rem",
                color: "#2e2e2e",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. Auctor semper fermentum
              volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
              Nibh est sit lobortis id semper.
            </p>
            <p
              className="mb-4"
              style={{
                fontFamily: "IBM Plex Sans",
                fontWeight: 400,
                fontSize: "1rem",
                color: "#2e2e2e",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. sed. Nibh est sit lobortis
              id semper.
            </p>
            <a
              href="#"
              className="text-decoration-none fw-medium"
              style={{
                fontFamily: "IBM Plex Sans",
                fontSize: "1rem",
                color: "#0360d9",
              }}
            >
              Прочети повече →
            </a>
          </div>
          {/* Image Section */}
          <div className="col-lg-6 col-md-12 p-5">
            <img
              src={doge2}
              alt="Dog with a person"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
      <div
        className="container d-flex flex-column align-items-center justify-content-center text-center py-5"
        style={{
          backgroundColor: "#0360d9",
          borderRadius: "30px",
          color: "#fff",
        }}
      >
        {/* Heading */}
        <h1
          className="display-4 fw-bold pb-3"
          style={{
            fontFamily: "IBM Plex Sans",
          }}
        >
          Свържи се с нас още сега !!!
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            maxWidth: "956px",
            width: "80%",
            borderRadius: "50px",
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <input
            type="email"
            name="user_email"
            className="form-control border-0 px-4"
            placeholder="Your Email"
            style={{
              flex: 1,
              fontFamily: "IBM Plex Sans",
              fontWeight: 500,
              fontSize: "1.5rem",
              lineHeight: "1.3",
              color: "#0360d9",
              outline: "none",
              border: "none",
            }}
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn d-flex align-items-center justify-content-center fs-1"
            style={{
              backgroundColor: "#0360d9",
              borderRadius: "50%",
              width: "56px",
              height: "56px",
              color: "#fff",
              textAlign: "center",
              border: "none",
              marginLeft: "8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              paddingBottom: "15px",
              justifyContent: "center",
            }}
          >
            &#8594;
          </button>
        </form>
      </div>
      <footer
        className="container-fluid text-white mt-5 py-5"
        style={{ backgroundColor: "#0360d9" }}
      >
        <div className="container">
          <div className="row justify-content-around">
            {/* Section 1 */}
            <div className="col-md-4 mb-4">
              <h2
                className="fw-semibold mb-3"
                style={{ fontFamily: "IBM Plex Sans", fontSize: "1.5rem" }}
              >
                Био Маркетинг България
              </h2>
              <p
                className="mb-3"
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: "1.3",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                risus feugiat lectus risus sed ullamcorper. Auctor semper
                fermentum volutpat integer vel. In rhoncus elementum nunc,
                malesuada mi sed. Nibh est sit.
              </p>
            </div>

            {/* Section 2 */}
            <div className="col-md-4 mb-4">
              <h2
                className="fw-semibold mb-3"
                style={{ fontFamily: "IBM Plex Sans", fontSize: "1.5rem" }}
              >
                Useful Links
              </h2>
              <a
                href="#"
                className="text-white text-decoration-none d-block mb-2"
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                Home
              </a>
              <a
                href="#"
                className="text-white text-decoration-none d-block mb-2"
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                About Us
              </a>
              <a
                href="#"
                className="text-white text-decoration-none d-block mb-2"
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                Services
              </a>
              <a
                href="#"
                className="text-white text-decoration-none d-block"
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                Contact Us
              </a>
            </div>

            {/* Section 3 */}
            <div className="col-md-4 mb-4">
              <h2
                className="fw-semibold mb-3"
                style={{ fontFamily: "IBM Plex Sans", fontSize: "1.5rem" }}
              >
                Contact
              </h2>
              <p
                className="mb-2"
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: "1.3",
                }}
              >
                Email: info@biomarketing.bg
              </p>
              <p
                className="mb-2"
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: "1.3",
                }}
              >
                Phone: +359 888 123 456
              </p>
              <p
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: "1.3",
                }}
              >
                Address: Sofia, Bulgaria
              </p>
            </div>
          </div>

          <hr className="text-white my-4" />

          <div className="text-center">
            <p
              style={{
                fontFamily: "IBM Plex Sans",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: "1.3",
              }}
            >
              &copy; 2024 Био Маркетинг България. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default App;
