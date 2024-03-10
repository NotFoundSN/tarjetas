import axios from "axios";
//http://coiote.ar/api/cumple.php?nickname=nolo
//https://revoluciondigital.alwaysdata.net/api/cumple.php?nickname=nolo

const config = axios.create({
	baseURL: "https://revoluciondigital.alwaysdata.net/api/",
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers":
			"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
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
				return error;
			});
		return guest;
	},
	getConfirm: async (name) => {
		let link = `confirm.php?nickname=${name}`;
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
