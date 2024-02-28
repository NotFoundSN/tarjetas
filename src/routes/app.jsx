import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Card } from "@Components";
//import { Arena, Clones, Trans, Unite } from "@Pages";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<><div>web funcionando</div></>} />
					<Route path="invitation/:name" element={<Card />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
