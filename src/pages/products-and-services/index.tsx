import HeroHeader from "@/components/HeroHeader/HeroHeader";
import ContactUsInfo from "@/components/ContactUsInfo/ContactUsInfo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const ProductsAndServicesList = [
  "Stock Fields Rent",
  "Land Transportation",
  "Freight Forwarding Service",
  "Warehousing",
];

export const ProductsList = [
  {
    imgUrls: [
      "product-1-1.jpg",
      "product-1-2.jpg",
      "product-1-3.jpg"
    ],
    title: "Ketapang Stock Field",
    landArea: "2 hectares",
    capacity: "200.000 MT",
    address:
      "Jalan Soekarno Hatta Km. 7 Gang Multi, Kelurahan Ketapang, Kecamatan Panjang, Kota Bandar Lampung, Lampung, Indonesia",
    reverse: false,
  },
  {
    imgUrls: [
      "product-2-1.jpg",
      "product-2-2.jpg",
      "product-2-3.jpg",
      "product-2-4.jpg"
    ],
    title: "Lematang Stock Field",
    landArea: "5 hectares",
    capacity: "500.000 MT",
    address:
      "Jl. Ir. Sutami Dusun 02, Desa Lematang, Kecamatan Tanjung Bintang, Kabupaten Lampung Selatan, Lampung, Indonesia",
    reverse: true,
  },
];

const settings = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function ProductsAndServices() {
  return (
    <div className="products-and-services">
      <HeroHeader title="Products and Services" />
      <div className="products-and-services__company-info company-info">
        <div className="company-info__title">Products and Services</div>
        <ul>
          {ProductsAndServicesList.map((data) => (
            <>
              <li className="company-info__highlight-text highlight-text">
                {data}
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="products-and-services__products products">
        {ProductsList.map((data, index) => (
          <div
            key={index}
            className={`products__wrapper ${data.reverse && "reverse"}`}
          >
            <Carousel
              emulateTouch={true}
              showIndicators={false}
              showThumbs={false}
              showStatus={false}
              className="products__carousel"
            >
              {data.imgUrls.map((imgUrl, index) => (
                <div key={index}>
                  <img className="products__img" src={imgUrl} alt="" />
                </div>
              ))}
            </Carousel>
            <div className="products__content">
              <div className="products__title">{data.title}</div>
              <ul className="products__description">
                <li>Land area: {data.landArea}</li>
                <li>Capacity up to: {data.capacity}</li>
                <li>Address: {data.address}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <ContactUsInfo />
    </div>
  );
}
