import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Card, Card404 } from "@Components";
//import { Arena, Clones, Trans, Unite } from "@Pages";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<><div>web funcionando</div></>} />
					<Route path="invitation/:name" element={<Card />} />
					<Route path="error" element={<Card404 />} />
					<Route path="*" element={<Card404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
