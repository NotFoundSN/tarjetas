import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carrousel } from "@Components";
import axios from "@Services/axiosToPhp";
import clow from "@Assets/payaso.png";

export default function Card() {
	const [invitation, setInvitation] = useState({});
	const [styles, setStyles] = useState({
		bgBorderColor: "bg-black",
		bgBackgroundColor: "bg-white",
	});
	let { name } = useParams();
	useEffect(() => {
		axios.getGuest(name).then((res) => {
			setInvitation(res);
		});
	}, [name]);
	useEffect(() => {
		switch (invitation.connection) {
			case "revolucion":
				setStyles({
					bgBorderColor: "lgr-revolucion",
					bgBackgroundColor: "bg-revolucion-verdeAgua",
				});
				break;
			case "muni":
				setStyles({
					bgBorderColor: "lgr-muni",
					bgBackgroundColor: "bg-muni-celesteApagado",
				});
				break;
			case "amigo":
				setStyles({
					bgBorderColor: "lgr-friends",
					bgBackgroundColor: "bg-friends-verde",
				});
				break;
			default:
				break;
		}
	}, [invitation]);
	if (invitation?.name) {
		return (
			<>
				<div className={`w-full h-full p-4 ${styles.bgBorderColor}`}>
					<div
						className={`w-full h-full p-4 relative ${styles.bgBackgroundColor} rounded-md flex flex-col items-center`}
					>
						<div className="w-full">
							<p className=" text-left text-xl">
								{invitation.name} te invito a mi cumpleaños
							</p>
						</div>
						<div className="w-full">
							<p className=" text-right text-2xl pt-4">
								el {invitation.day} a las {invitation.hour}
							</p>
						</div>
						<div className="w-full">
							<p className=" text-left text-xl pt-8">
								en {invitation.place}
							</p>
						</div>
						<div className=" mt-4 bg-gray-200 rounded z-20 w-4/5">
							<Carrousel QAlist={invitation.faq} />
						</div>
						<img
							className="absolute right-0 bottom-0 z-10"
							src={clow}
							alt="clow"
						/>
					</div>
				</div>
			</>
		);
	} else {
		return <></>;
	}
}
