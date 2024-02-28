import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<div className="flex flex-col items-center w-screen h-screen">
				<Outlet />
			</div>
		</>
	);
}