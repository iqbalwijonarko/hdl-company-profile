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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgUrl: "/products-services-2.png",
    title: "Local Delivery & Export",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgUrl: "/products-services-3.png",
    title: "Product Consulting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
