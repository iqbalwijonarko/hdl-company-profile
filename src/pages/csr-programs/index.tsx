import ContactUsInfo from "@/components/ContactUsInfo/ContactUsInfo";
import HeroHeader from "@/components/HeroHeader/HeroHeader";
import { Grid, Typography } from "@mui/material";

export type DocumentationType = {
  imgUrl: string;
};

export const Documentation: Array<DocumentationType> = [
  {
    imgUrl: "/documTmp.png",
  },
  {
    imgUrl: "/documTmp.png",
  },
  {
    imgUrl: "/documTmp.png",
  },
  {
    imgUrl: "/documTmp.png",
  },
  {
    imgUrl: "/documTmp.png",
  },
  {
    imgUrl: "/documTmp.png",
  },
  {
    imgUrl: "/documTmp.png",
  },
  {
    imgUrl: "/documTmp.png",
  },
  {
    imgUrl: "/documTmp.png",
  },
  {
    imgUrl: "/documTmp.png",
  },
  {
    imgUrl: "/documTmp.png",
  },
  {
    imgUrl: "/documTmp.png",
  },
];

export const ProductsAndServices = [
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

export default function CsrPrograms() {
  return (
    <div className="csr-programs">
      <HeroHeader title="CSR Programs" />
      <div className="csr-programs__company-info company-info">
        <div className="company-info__title">Corporate Social Responsibility</div>
        {ProductsAndServices.map((data) => (
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
      </div>

      <div className="about-us__products-services products-services">
        <div className="products-services__wrapper">
          <div className="products-services__title">Documentation</div>
          <br />
          <br />
          <div className="products-services__cards cards">
            {Documentation.map((data, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={data.imgUrl}
                alt="doc-img"
                className="cards__card card"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <ContactUsInfo />
    </div>
  );
}
