import { useEffect, useState } from "react";
import Slider from "react-slick";
import parse from "html-react-parser";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carrousel({ QAlist = [], ...otherProps }) {
	let [list, setList] = useState([]);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	useEffect(() => {
		if (QAlist.length > 0) {
			setList(QAlist);
		}
	}, [QAlist]);
	console.log(list);
	if (list.length > 0) {
		return (
			<Slider {...settings} className="z-20">
				{list.map((item, index) => {
					return (
						<div key={`list-${index}`} className="flex flex-col h-full z-50">
							<div className="text-center bg-gray-400">
								<span className=" font-semibold">{item.answer}</span>
							</div>
							<div className="flex flex-row text-center justify-center items-center pt-4 p-2">
								<span className=" font-bold">{parse(item.question)}</span>
							</div>
						</div>
					);
				})}
			</Slider>
		);
	} else {
		return (
			<Slider {...settings}>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</Slider>
		);
	}
}
