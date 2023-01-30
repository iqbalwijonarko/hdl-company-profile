import HeroHeader from "@/components/HeroHeader/HeroHeader";
import ContactUsInfo from "@/components/ContactUsInfo/ContactUsInfo";

export const ProductsAndServicesList = [
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

export const ProductsList = [
	{
		imgUrl: '/product-1.png',
		title: 'Product A',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		reverse: false
	},
	{
		imgUrl: '/product-1.png',
		title: 'Product A',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		reverse: false
	},
	{
		imgUrl: '/product-1.png',
		title: 'Product A',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		reverse: false
	},
	{
		imgUrl: '/product-1.png',
		title: 'Product B',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		reverse: true
	},
	{
		imgUrl: '/product-1.png',
		title: 'Product B',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		reverse: true
	},
	{
		imgUrl: '/product-1.png',
		title: 'Product B',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		reverse: true
	}
]

export default function ProductsAndServices() {
  return (
    <div className="products-and-services">
			<HeroHeader title="Products and Services" />
			<div className="products-and-services__company-info company-info">
        <div className="company-info__title">Products and Services</div>
					{ProductsAndServicesList.map((data) => (
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
			<div className="products-and-services__products products">
				{ProductsList.map((data, index) => (
					<div key={index} className={`products__wrapper ${data.reverse && 'reverse'}`}>
						<img className="products__img" src={"/product-1.png"} alt="" />
						<div className="products__content">
							<div className="products__accent">XX</div>
							<div className="products__title">{data.title}</div>
							<div className="products__description">{data.description}</div>
						</div>
					</div>
				))}
			</div>

			<ContactUsInfo />
		</div>
  );
}
