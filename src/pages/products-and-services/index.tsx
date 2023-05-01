import HeroHeader from "@/components/HeroHeader/HeroHeader";
import ContactUsInfo from "@/components/ContactUsInfo/ContactUsInfo";

export const ProductsAndServicesList = [
  "Stock Fields Rent",
  "Land Transportation",
  "Freight Forwarding Service",
  "Warehousing",
];

export const ProductsList = [
  {
    imgUrl: "/product-1.jpg",
    title: "Ketapang Stock Field",
    landArea: "2 hectares",
    capacity: "200.000 MT",
    address:
      "Jalan Soekarno Hatta Km. 7 Gang Multi, Kelurahan Ketapang, Kecamatan Panjang, Kota Bandar Lampung, Lampung, Indonesia",
    reverse: false,
  },
  {
    imgUrl: "/product-2.jpg",
    title: "Lematang Stock Field",
    landArea: "5 hectares",
    capacity: "500.000 MT",
    address:
      "Jl. Ir. Sutami Dusun 02, Desa Lematang, Kecamatan Tanjung Bintang, Kabupaten Lampung Selatan, Lampung, Indonesia",
    reverse: true,
  },
];

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
            <img className="products__img" src={data.imgUrl} alt="" />
            <div className="products__content">
              <div className="products__title">{data.title}</div>
              <ul>
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
