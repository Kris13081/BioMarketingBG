import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductSection from "./ProductSection.js";
import logo from "./assets/logo.png";
import animals from "./assets/animals.jpg";
import bees from "./assets/bees.jpg";
import vet from "./assets/vet.jpg";
import tic from "./assets/tic.png";
import profileWoman from "./assets/users/woman.png";
import profileBoy from "./assets/users/boy.png";
import profileMan from "./assets/users/man.png";
import profileUser from "./assets/users/user.png";
import { features } from "./data/features";
import { benefits } from "./data/benefits";
import { products } from "./data/products";
import { info } from "./data/info.js";

function App() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_adc4iai",
        "template_act41cj",
        form.current,
        "2MOZLpvOm35gmc1x6"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setTimeout(() => setIsSubmitting(false), 60000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
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
          <img src={logo} alt="Bio Logo" className="w-25 img-fluid" />
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

      {/* Choose Us Section */}
      <div className="container py-5">
        <div className="row align-items-center justify-content-center">
          {/* Image Section */}
          <div className="col-12 col-md-6 col-lg-5 mb-4 mb-md-0 text-center p-3">
            <img
              src={bees}
              alt="Decorative"
              className="img-fluid rounded"
              style={{
                borderRadius: "15px",
                maxHeight: "400px", // Restricts height for consistency
                objectFit: "cover", // Keeps proportions visually appealing
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adds subtle shadow
              }}
            />
          </div>

          {/* Text Section */}
          <div className="col-12 col-md-6 col-lg-7 px-4 px-md-5">
            <h1 className="display-5 fw-bold mb-4 text-dark text-center text-md-start p-3">
              Защо да изберете нас?
            </h1>
            <ul className="list-unstyled">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="d-flex align-items-start mb-3"
                  style={{
                    fontSize: "1.25rem", // Slightly smaller for smaller devices
                    lineHeight: "1.5",
                  }}
                >
                  <img
                    src={tic}
                    alt="Check Icon"
                    className="me-3"
                    style={{ width: "24px", height: "24px" }}
                  />
                  <span className="text-muted">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
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
              Ценим мнението на нашите клиенти, ще се радваме да чуем и вашето!
            </p>
            <div className="d-flex align-items-center m-3">
              <img
                src={profileBoy}
                alt="avatar"
                className="rounded-circle"
                style={{ width: "52px", height: "52px", marginRight: "5px" }}
              />
              <img
                src={profileUser}
                alt="avatar"
                className="rounded-circle"
                style={{ width: "52px", height: "52px", marginRight: "5px" }}
              />
              <img
                src={profileMan}
                alt="avatar"
                className="rounded-circle"
                style={{ width: "52px", height: "52px", marginRight: "5px" }}
              />
              <span
                style={{
                  fontWeight: "600",
                  marginLeft: "10px",
                  fontSize: "16px",
                  color: "#2e2e2eff",
                }}
              >
                100+ Доволни клиенти
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={{ borderRadius: "10px" }}>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={profileWoman}
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
                  „Изключително съм доволна от сътрудничеството с фирмата! Като
                  дистрибутор, те предлагат продукти с високо качество и
                  ефективност. Персоналът е професионален и винаги готов да
                  предостави нужната консултация. Препоръчвам ги на всеки, който
                  търси надеждни и натурални решения за здравето на своите
                  животни!“
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5 p-5">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 d-flex flex-column justify-content-center">
            <h5 className="display-4 fw-bold mb-3" style={{ color: "#2e2e2e", fontSize: "32px" }}>
              Каква е ролята на биопродуктите във ветеринарната медицина и
              пчеларството?
            </h5>
            <p className="mb-4 text-muted">
              Биопродуктите играят важна роля във ветеринарната медицина и
              пчеларството ,като имат за цел да подобрят здравето,
              производителността и устойчивото отглеждане на животните и
              пчелите. Те включват пробиотици, фитопрепарати, етерични масла и
              други натурални продукти, които подпомагат превенцията и лечението
              като:
            </p>
            <ul className="list-unstyled mb-4">
              {info.map((info, index) => (
                <li key={index} className="d-flex align-items-start mb-3 fs-5">
                  <img
                    src={tic}
                    alt="Check Icon"
                    className="me-3"
                    style={{ width: "24px", height: "24px" }}
                  />
                  <span className="text-muted">{info}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 col-md-12 px-4 d-flex justify-content-center">
            <img
              src={vet}
              alt="Dog with a person"
              className="img-fluid rounded"
              style={{
                objectFit: "cover", // Ensure the image covers its container without stretching
                width: "100%", // Ensure it takes full width in smaller containers
              }}
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
            {/* Section 2 */}
            <div className="col-md-4 mb-4">
              <h2
                className="fw-semibold mb-3"
                style={{ fontFamily: "IBM Plex Sans", fontSize: "1.5rem" }}
              >
                Контакти:
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
                Търговски представител: Деница Стефанова
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
                тел: 0889 249 271
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
                e-mail: dstefanova.biomarketingbg@gmail.com
              </a>
            </div>

            {/* Section 3 */}
            <div className="col-md-4 mb-4">
              <h2
                className="fw-semibold mb-3"
                style={{ fontFamily: "IBM Plex Sans", fontSize: "1.5rem" }}
              ></h2>
              <p
                className="mb-2"
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: "1.3",
                }}
              >
                Управител: д-р Ивелин Маринов
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
                e-mail: biomarketingbg@gmail.com
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
                тел: 0899 181 855
              </p>
              <a
                href="https://maps.app.goo.gl/VQYQ7Bae13H3GBsf7"
                className="text-white text-decoration-none d-block mb-2"
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                Адрес: гр. София, р-н Красно село, ул.Топли дол, 4, вх. А, ет.
                2"
              </a>
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
