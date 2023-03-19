import ContactUsInfo from "@/components/ContactUsInfo/ContactUsInfo";
import Link from "next/link";

export type ProductServicesType = {
  imgUrl: string;
  title: string;
  description: string;
};

export const ProductsServices: Array<ProductServicesType> = [
  {
    imgUrl: "/products-services-1.png",
    title: "Coal Procurement",
    description:
      "We provide high quality coal    according   to customer    demand. Our coal is certified    by a reliable company,    such as : PT. Sucofindo ;  so we convince customers to offer the best product.",
  },
  {
    imgUrl: "/products-services-2.png",
    title: "Local Delivery & Export",
    description:
      "For a smooth operation process PT. Hasta Dwiyustama Logistik provides land transportation from Stock Field to Port and also Freight Forwarding Service for export, import, and also domestic requests.",
  },
  {
    imgUrl: "/products-services-3.png",
    title: "Product Consulting",
    description:
      "We have 2 (two) locations of Stock Field to rent as per Buyer’s need and we also offer customers warehousing for their break bulk cargo in the future.",
  },
];

export default function home() {
  return (
    <div className="home">
      <div className="home__landing-container">
        <div className="home__landing-content content">
          <div className="content__company-name">
            PT Hasta Dwiyustama Logistik
          </div>
          <div className="content__title">Best Coal Company</div>
          <div className="content__description">
            PT. HASTA DWIYUSTAMA LOGISTIK is an Indonesian company which
            primarily develops and provides land to use as a coal stock field
            and warehouse especially in Lampung Province, Indonesia. Established
            in 2021, PT. Hasta Dwiyustama Logistik also known as HDL becomes a
            leading company in providing coal stock field in Lampung Province,
            Indonesia.
          </div>
        </div>
      </div>

      <div className="home__products-services products-services">
        <div className="products-services__wrapper">
          <div className="products-services__title">
            Our products and services
          </div>
          <div className="products-services__subtitle">
            We provide the world-known coal trading and local and international
            (export) shipments.
          </div>
          <div className="products-services__cards cards">
            {ProductsServices.map((data, index) => (
              <div key={index} className="cards__card card">
                <img className="card__img" src={data.imgUrl} alt="" />
                <div className="card__content">
                  <div className="card__title">{data.title}</div>
                  <div className="card__description">{data.description}</div>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/products-and-services"
            className="product-services__link"
          >
            <button className="products-services__read-more">Read More</button>
          </Link>
        </div>
      </div>

      <ContactUsInfo />
    </div>
  );
}
