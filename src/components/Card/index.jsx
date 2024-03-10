import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Carrousel } from "@Components";
import axios from "@Services/axiosToPhp";
import clow from "@Assets/payaso.png";

export default function Card() {
	const navigate = useNavigate();
	const [invitation, setInvitation] = useState({});
	const [styles, setStyles] = useState({
		bgBorderColor: "bg-black",
		bgBackgroundColor: "bg-white",
	});
	let { name } = useParams();
	useEffect(() => {
		axios.getGuest(name).then((res) => {
			if (res.code == "ERR_NETWORK")
			{
				navigate("/error");
			}
			else
			{
				setInvitation(res);
			}
			
		});
	}, [name]);
	useEffect(() => {
		switch (invitation?.connection) {
			case "revolucion":
				setStyles({
					bgBorderColor: "lgr-revolucion",
					bgBackgroundColor: "bg-revolucion-verdeAgua",
					buttonColor: "bg-revolucion-verde",
				});
				break;
			case "muni":
				setStyles({
					bgBorderColor: "lgr-muni",
					bgBackgroundColor: "bg-muni-celesteApagado",
					buttonColor: "bg-muni-celeste",
				});
				break;
			case "amigo":
				setStyles({
					bgBorderColor: "lgr-friends",
					bgBackgroundColor: "bg-friends-verde",
					buttonColor: "bg-friends-verdeOscuro",
				});
				break;
			default:
				setStyles({
					bgBorderColor: "bg-black",
					bgBackgroundColor: "bg-white",
				});
				break;
		}
	}, [invitation]);
	if (invitation?.name) {
		return (
			<>
				<div
					className={`w-full h-full p-4 ${styles.bgBorderColor} sm:max-w-[60rem] sm:max-h-[35rem]`}
				>
					<div
						className={`w-full h-full p-4 relative ${styles.bgBackgroundColor} rounded-md flex flex-col items-center`}
					>
						<div className="w-full sm:w-1/2 z-40">
							<div className="w-full">
								<p className=" text-left text-xl">
									Hola{" "}
									<span className=" font-bold">
										{invitation.name}
									</span>{" "}
									te invito a mi cumpleaños
								</p>
							</div>
							<div className="w-full">
								<p className=" text-right text-2xl pt-4">
									el{" "}
									<span className=" font-bold">
										{invitation.day}
									</span>{" "}
									a las{" "}
									<span className=" font-bold">
										{invitation.hour}
									</span>
								</p>
							</div>
							<div className="w-full flex justify-center mt-4 sm:mt-0 sm:flex-none sm:w-auto sm:absolute sm:top-1/2 sm:left-1/2 ">
								<button className=" bg-red-500 p-2 rounded-xl border border-black font-bold">Confirmar</button>
							</div>
							<div className="w-full">
								<p className=" text-left text-xl pt-8">
									en{" "}
									<span className=" font-bold">
										{invitation.place}
									</span>
								</p>
							</div>
						</div>
						<div className=" mt-4 bg-gray-200 rounded z-20 w-4/5 sm:absolute sm:bottom-[10%] drop-shadow-md">
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
