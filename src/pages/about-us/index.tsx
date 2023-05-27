import Image from "next/image";
import ContactUsInfo from "@/components/ContactUsInfo/ContactUsInfo";
import { Theme, useMediaQuery, useTheme } from "@material-ui/core";

export type BoardOfDirectorsType = {
  imgUrl: string;
  title: string;
  description: string;
};

export const BoardOfDirectors: Array<BoardOfDirectorsType> = [
  {
    imgUrl: "/person1.webp",
    title: "Director",
    description: "Muhammad Rizky Rivaldi",
  },
  // {
  //   imgUrl: "/person2.webp",
  //   title: "Operation Director",
  //   description: "Redy Surya Ivandi",
  // },
  // {
  //   imgUrl: "/person3.webp",
  //   title: "HRD and Public Relation Director",
  //   description: "Dian Annisa Safitri",
  // },
];

export const Overview = [
  {
    text: "Existing Customers:",
    subText: [
      "CV. LAKSITA BUANA",
      "PT. TUGANG RIZKY ENERGI",
      "PT. RIZKY ANUGRAH PRATAMA",
      "PT. LANGIT PURNAMA ABADI",
    ],
  },
  {
    text: "Certificates and Permits",
    subText: [
      "Surat Persetujuan Teknis Hasil Analisis Dampak Lalu Lintas dari Direktur Jenderal \nPerhubungan Darat Nomor : KP.618/LT.408/DJPD-ANDALALIN/2022",
      "Surat Izin Lingkungan (UKL-UPL) from Dinas Lingkungan Hidup Kota Bandar Lampung",
      "Surat Keputusan dari Kemenkumham No : AHU-0074216.AH.01.01.TAHUN 2022",
      "Akta Pendirian Perusahaan No. 15 Tahun 2022",
      "Nomor Induk Berusaha : 2510220126389",
    ],
  },
];

export default function AboutUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery((baseTheme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <div className="about-us">
      <div className="about-us__landing-container">
        <div className="about-us__landing-content content">
          <div className="content__company-name">About Us</div>
          <div className="content__title">PT Hasta Dwiyustama Logistik</div>
          <div className="content__description">
            PT. HASTA DWIYUSTAMA LOGISTIK is a leading Indonesian company that
            specializes in providing land for coal stock fields and warehouses
            in Lampung Province, Indonesia. Established in 2021, HDL offers a
            fully integrated process of coal stockpiling, land transportation
            handling, freight forwarding services (both export and import), and
            warehousing to ensure coal efficiency and effectiveness. HDL has two
            stock field sites available for rent, with road access near Panjang
            Port and Lematang Tol Gate, which can accommodate piles of coal up
            to 200,000 MT and 500,000 MT respectively.
            <br />
            <br />
            HDL strives to guarantee customer satisfaction by providing
            excellent services that prioritize efficiency, effectiveness, and
            safety during the operational process. The company has a strong
            commitment to face future challenges by strengthening its existing
            businesses and developing new and promising ones. With the resources
            and collaboration with all related parties, HDL is well-positioned
            to continue leading the industry in providing coal stock field
            services in Lampung Province, Indonesia.
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
      </div>

      <div className="about-us__products-services products-services">
        <div className="products-services__wrapper">
          <div className="products-services__title">Board of Directors</div>
          <br />
          <br />
          <div className="products-services__cards cards">
            {BoardOfDirectors.map((data, index) => (
              <div key={index} className="cards__card card">
                <img className="card__img" src={data.imgUrl} alt="" />
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
