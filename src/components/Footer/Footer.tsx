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
            <div>info@hastalogistik.com</div>
          </div>
          <div className="contact-us__items">
            <img src={"/phone-outline.svg"} alt="phone-outline" />
            <div>021-403-2000</div>
          </div>
        </div>

        <div className="left-content__copyright">
          Copyright © 2023 PT Hasta Dwiyustama Logistik
        </div>
      </div>

      <div className="footer__center-content center-content">
        <div className="center-content__title">Head Office</div>
        <div className="center-content__detail">
          Equity Tower 41th Floor Suite E
          <br />
          Sudirman Central Business Disctrict (SCBD)
          <br />
          Jl. Jend. Sudirman Kav. 52-53 Lot 9
          <br />
          Jakarta 12190
          <br />
          Telp : (+62-21) 2903 5022 (Hunting),
          <br />
          Fax : (+62-21) 2903 5021
        </div>

        <div className="center-content__title">Plant Site</div>
        <div className="center-content__detail">
          Jalan Cisauk Lapan Kav Erpak No. 33a
          <br />
          Suradita Village, Cisauk District, Tangerang
          <br />
          Regency, Banten Province 15341
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
          <a className="right-content__navigation-item">News</a>
          <a className="right-content__navigation-item">Contact Us</a>
        </div>
        <div className="right-content__social-icons">
          {SocialMediaList.map((data) => (
            <img className="right-content__icon" src={data.imgUrl} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
