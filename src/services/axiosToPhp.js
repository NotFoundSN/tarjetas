import axios from "axios";

//http://coiote.ar/api/cumple.php?nickname=nolo
//https://revoluciondigital.alwaysdata.net/api/cumple.php?nickname=nolo

const config = axios.create({
	baseURL: "https://revoluciondigital.alwaysdata.net/api/",
	headers: {
		"Content-Security-Policy": "upgrade-insecure-requests",
	},
});

const APIquery = {
	getGuest: async (name) => {
		let link = `cumple.php?nickname=${name}`;
		let guest = await config
			.get(link)
			.then((res) => {
				return res.data;
			})
			.catch((error) => {
				console.log(error);
			});
		return guest;
	},
};
export default APIquery;
