import ContactUsInfo from "@/components/ContactUsInfo/ContactUsInfo";
import { Grid, Typography } from "@mui/material";

export type BoardOfDirectorsType = {
  imgUrl: string;
  title: string;
  description: string;
};

export const BoardOfDirectors: Array<BoardOfDirectorsType> = [
  {
    imgUrl: "/person1.svg",
    title: "Coal Procurement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgUrl: "/person2.svg",
    title: "Local Delivery & Export",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgUrl: "/person3.svg",
    title: "Product Consulting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgUrl: "/person4.svg",
    title: "Product Consulting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const Overview = [
  {
    text: "Lorem Ipsum",
    subText: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
    ],
  },
  {
    text: "Lorem Ipsum",
    subText: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
    ],
  },
  {
    text: "Lorem Ipsum",
    subText: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
    ],
  },
];

export const History = [
  {
    text: "2000",
    subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
  },
  {
    text: "2001",
    subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
  },
  {
    text: "2002",
    subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
  },
  {
    text: "2003",
    subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
  },
];

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us__landing-container">
        <div className="about-us__landing-content content">
          <div className="content__company-name">About Us</div>
          <div className="content__title">PT Hasta Dwiyustama Logistik</div>
          <div className="content__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </div>
        </div>
      </div>

      <div className="about-us__company-info company-info">
        <div className="company-info__title">Overview</div>
        {Overview.map((data) => (
          <>
            <div className="company-info__highlight-text highlight-text">
              {data.text}
              {data.subText.map((sub) => (
                <>
                  <ul>
                    <li className="highlight-text__sub-text">{sub}</li>
                  </ul>
                </>
              ))}
            </div>
          </>
        ))}
        <div className="company-info__title">History</div>
        {History.map((data) => (
          <>
            <div className="company-info__highlight-text highlight-text">
              {data.text}
              <div className="highlight-text__sub-text2">{data.subText}</div>
            </div>
          </>
        ))}
      </div>

      <div className="about-us__products-services products-services">
        <div className="products-services__wrapper">
          <div className="products-services__title">Board of Directors</div>
          <br />
          <br />
          <div className="products-services__cards cards">
            {BoardOfDirectors.map((data, index) => (
              <div key={index} className="cards__card card">
                <img src={data.imgUrl} alt="" />
                <div className="card__content">
                  <div className="card__title">{data.title}</div>
                  <div className="card__description">{data.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactUsInfo />
    </div>
  );
}
