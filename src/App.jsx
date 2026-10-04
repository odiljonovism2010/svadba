import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState("home");

  // =========================
  // MUSIQA
  // =========================

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.35;
    audio.loop = true;

    const startMusic = () => {
      audio.play().catch(() => {
        console.log(
          "Autoplay bloklandi. Birinchi bosishda musiqa boshlanadi."
        );
      });
    };

    startMusic();

    const handleInteraction = () => {
      startMusic();
    };

    document.addEventListener("click", handleInteraction, {
      once: true,
    });

    document.addEventListener("touchstart", handleInteraction, {
      once: true,
    });

    document.addEventListener("keydown", handleInteraction, {
      once: true,
    });

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };
  }, []);

  // =========================
  // MA'LUMOTLAR
  // =========================

  const [data, setData] = useState({
    topText: "SIZNI TAKLIF QILAMIZ",

    title: "To‘yimizga",

    subtitle: "taklif qilamiz",

    description:
      "Hayotimizdagi eng baxtli kunimizni siz bilan birga nishonlashdan mamnun bo‘lamiz.",

    firstName: "Aziz",

    secondName: "Malika",

    day: "15",

    month: "OKTABR",

    year: "2026",

    time: "18:00",

    weekday: "Shanba",

    restaurant: "Navbahor To‘yxonasi",

    address: "Toshkent shahri",

    bottomText: "Sizni kutib qolamiz!",
  });

  // =========================
  // RASMLAR
  // =========================

  const [backgroundImage, setBackgroundImage] = useState("");

  const [centerImage, setCenterImage] = useState("");

  // =========================
  // INPUT
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  // =========================
  // RASM YUKLASH
  // =========================

  const handleImageChange = (e, type) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    if (type === "background") {
      setBackgroundImage(imageUrl);
    }

    if (type === "center") {
      setCenterImage(imageUrl);
    }
  };

  // =========================
  // HOME
  // =========================

  if (step === "home") {
    return (
      <div
        className="home-page"
        style={{
          backgroundImage:
            "url('https://aniq.uz/photos/news/zLvhjXoa0mshkyx.jpeg')",
        }}
      >
        <audio
          ref={audioRef}
          src="/music/11.mp3"
          preload="auto"
          loop
        />

        <div className="home-overlay"></div>

        <div className="home-content">
          <p className="home-label">
            TAKLIFNOMA
          </p>

          <h1>
            Sizning maxsus
            <br />
            kuningiz
          </h1>

          <div className="home-line"></div>

          <p className="home-description">
            Yaqinlaringiz uchun chiroyli va
            <br />
            unutilmas taklifnoma yarating.
          </p>

          <button
            className="main-button"
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.volume = 0.35;

                audioRef.current
                  .play()
                  .catch((error) => {
                    console.log(
                      "Musiqa ishga tushmadi:",
                      error
                    );
                  });
              }

              setStep("editor");
            }}
          >
            Taklifnoma yaratish

            <span>→</span>
          </button>
        </div>
      </div>
    );
  }

  // =========================
  // EDITOR
  // =========================

  if (step === "editor") {
    return (
      <div className="editor-page">

        <audio
          ref={audioRef}
          src="/music/11.mp3"
          preload="auto"
          loop
        />

        <div className="editor-container">

          <button
            className="back-button"
            onClick={() => setStep("home")}
          >
            ← Orqaga
          </button>

          <div className="editor-header">

            <p>
              TAKLIFNOMA YARATISH
            </p>

            <h1>
              Ma’lumotlaringizni kiriting
            </h1>

            <span>
              Quyidagi maydonlarni o‘zingizga
              mos qilib to‘ldiring.
            </span>

          </div>

          <div className="form-card">

            <div className="form-section">

              <h2>
                Asosiy yozuvlar
              </h2>

              <div className="form-grid">

                <label>
                  Yuqoridagi yozuv

                  <input
                    name="topText"
                    value={data.topText}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Asosiy sarlavha

                  <input
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Sarlavha ostidagi yozuv

                  <input
                    name="subtitle"
                    value={data.subtitle}
                    onChange={handleChange}
                  />
                </label>

                <label className="full-width">

                  Taklif matni

                  <textarea
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                  />

                </label>

              </div>

            </div>

            <div className="form-section">

              <h2>
                Ismlar
              </h2>

              <div className="form-grid">

                <label>
                  Birinchi ism

                  <input
                    name="firstName"
                    value={data.firstName}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Ikkinchi ism

                  <input
                    name="secondName"
                    value={data.secondName}
                    onChange={handleChange}
                  />
                </label>

              </div>

            </div>

            <div className="form-section">

              <h2>
                Sana va vaqt
              </h2>

              <div className="form-grid">

                <label>
                  Kun

                  <input
                    name="day"
                    value={data.day}
                    onChange={handleChange}
                    placeholder="15"
                  />
                </label>

                <label>
                  Oy

                  <input
                    name="month"
                    value={data.month}
                    onChange={handleChange}
                    placeholder="OKTABR"
                  />
                </label>

                <label>
                  Yil

                  <input
                    name="year"
                    value={data.year}
                    onChange={handleChange}
                    placeholder="2026"
                  />
                </label>

                <label>
                  Vaqt

                  <input
                    type="time"
                    name="time"
                    value={data.time}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Hafta kuni

                  <input
                    name="weekday"
                    value={data.weekday}
                    onChange={handleChange}
                    placeholder="Shanba"
                  />
                </label>

              </div>

            </div>

            <div className="form-section">

              <h2>
                To‘y joyi
              </h2>

              <div className="form-grid">

                <label>
                  Restoran / To‘yxona

                  <input
                    name="restaurant"
                    value={data.restaurant}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Manzil

                  <input
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                  />
                </label>

              </div>

            </div>

            <div className="form-section">

              <h2>
                Rasmlar
              </h2>

              <div className="image-upload-grid">

                <label className="upload-box">

                  <span className="upload-icon">
                    ✦
                  </span>

                  <strong>
                    Orqa fon rasmi
                  </strong>

                  <small>
                    Fon uchun rasm tanlang
                  </small>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleImageChange(
                        e,
                        "background"
                      )
                    }
                  />

                  {backgroundImage && (
                    <img
                      className="upload-preview"
                      src={backgroundImage}
                      alt="Fon preview"
                    />
                  )}

                </label>

                <label className="upload-box">

                  <span className="upload-icon">
                    ♡
                  </span>

                  <strong>
                    Markaziy rasm
                  </strong>

                  <small>
                    Taklifnoma o‘rtasiga rasm
                  </small>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleImageChange(
                        e,
                        "center"
                      )
                    }
                  />

                  {centerImage && (
                    <img
                      className="upload-preview"
                      src={centerImage}
                      alt="Markaziy rasm preview"
                    />
                  )}

                </label>

              </div>

            </div>

            <div className="form-section">

              <h2>
                Yakuniy yozuv
              </h2>

              <div className="form-grid">

                <label className="full-width">

                  Pastdagi yozuv

                  <input
                    name="bottomText"
                    value={data.bottomText}
                    onChange={handleChange}
                  />

                </label>

              </div>

            </div>

            <button
              className="prepare-button"
              onClick={() => {

                if (audioRef.current) {
                  audioRef.current.volume = 0.35;

                  audioRef.current
                    .play()
                    .catch(() => {});
                }

                setStep("invitation");
              }}
            >
              Taklifnomani tayyorlash

              <span>
                →
              </span>

            </button>

          </div>

        </div>

      </div>
    );
  }

  // =========================
  // INVITATION
  // =========================

  return (
    <div
      className="invitation-page"
      style={
        backgroundImage
          ? {
              backgroundImage:
                `url(${backgroundImage})`,
            }
          : {}
      }
    >

      <audio
        ref={audioRef}
        src="/music/11.mp3"
        preload="auto"
        loop
      />

      <div className="invitation-overlay"></div>

      <div className="invitation-card">

        <p className="invitation-top">
          {data.topText}
        </p>

        <h1>
          {data.title}
        </h1>

        <div className="star">
          ✦
        </div>

        <h2>
          {data.subtitle}
        </h2>

        <p className="invitation-description">
          {data.description}
        </p>

        {centerImage && (
          <div className="center-photo-wrapper">

            <img
              className="center-photo"
              src={centerImage}
              alt="Taklifnoma"
            />

          </div>
        )}

        <div className="couple-names">

          <span>
            {data.firstName}
          </span>

          <b>
            &
          </b>

          <span>
            {data.secondName}
          </span>

        </div>

        <div className="date-info">

          <div className="date-item">

            <strong>
              {data.day}
            </strong>

            <span>
              {data.month}
            </span>

            <small>
              {data.year}
            </small>

          </div>

          <div className="date-divider"></div>

          <div className="date-item">

            <strong>
              {data.time}
            </strong>

            <span>
              BOSHLANISHI
            </span>

            <small>
              {data.weekday}
            </small>

          </div>

        </div>

        <div className="venue">

          <div className="venue-icon">
            ⌖
          </div>

          <div>

            <strong>
              {data.restaurant}
            </strong>

            <p>
              {data.address}
            </p>

          </div>

        </div>

        <p className="invitation-bottom">
          {data.bottomText}
        </p>

      </div>

      <button
        className="edit-floating"
        onClick={() => setStep("editor")}
      >
        ✎ Tahrirlash
      </button>

    </div>
  );
}

export default App;