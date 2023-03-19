export type SocialMediaType = {
  imgUrl: string;
  url: string;
};

export const SocialMediaList: Array<SocialMediaType> = [
  {
    imgUrl: "/instagram.svg",
    url: "",
  },
  {
    imgUrl: "/twitter.svg",
    url: "",
  },
  {
    imgUrl: "/linkedin.svg",
    url: "",
  },
  {
    imgUrl: "/line.svg",
    url: "",
  },
  {
    imgUrl: "/spotify.svg",
    url: "",
  },
  {
    imgUrl: "/medium.svg",
    url: "",
  },
];

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__left-content left-content">
          <img
            className="left-content__logo"
            src={"/hdl-logo-footer.jpg"}
            alt="hdl-logo-footer"
          />

          <div className="left-content__contact-us contact-us">
            <div className="contact-us__title">Contact Us</div>
            <div className="contact-us__items">
              <img src={"/email-outline.svg"} alt="email-outline" />
              <div>hastadwiyustama.logistik@gmail.com</div>
            </div>
            <div className="contact-us__items">
              <img src={"/phone-outline.svg"} alt="phone-outline" />
              <div>+62 812 9466 0697</div>
            </div>
          </div>
        </div>

        <div className="footer__center-content center-content">
          <div className="center-content__title">Head Office</div>
          <div className="center-content__detail">
            Sudirman Central Business Disctrict (SCBD)
            <br />
            Jl. Yos Sudarso No. 12 Panjang Selatan, Panjang
            <br />
            Bandar Lampung 35243
            <br />
            Telp : +62 812 9466 0697
          </div>

          <div className="center-content__title">Plant Site</div>
          <div className="center-content__detail">
            Jalan Soekarno Hatta Km. 7 Gang Multi
            <br />
            Kelurahan Ketapang, Kecamatan Panjang 
            <br />
            Kota Bandar Lampung, Lampung, Indonesia
          </div>
          <br />
          <div className="center-content__detail">
            Jl. Ir. Sutami Dusun 02, Desa Lematang
            <br />
            Kecamatan Tanjung Bintang
            <br />
            Kabupaten Lampung Selatan, Lampung, Indonesia
          </div>
        </div>

        <div className="footer__right-content right-content">
          <div className="right-content__navigations">
            <div className="right-content__navigation-title">Navigation</div>
            <a className="right-content__navigation-item">Home</a>
            <a className="right-content__navigation-item">About Us</a>
            <a className="right-content__navigation-item">
              Products and Services
            </a>
            <a className="right-content__navigation-item">CSR Programs</a>
          </div>
          <div className="right-content__social-icons">
            {SocialMediaList.map((data, index) => (
              <img
                key={index}
                className="right-content__icon"
                src={data.imgUrl}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        Copyright © 2023 PT Hasta Dwiyustama Logistik
      </div>
    </div>
  );
}
