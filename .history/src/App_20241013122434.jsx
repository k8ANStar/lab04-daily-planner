import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DailyPlanner from "./DailyPlanner";

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<DailyPlanner />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
