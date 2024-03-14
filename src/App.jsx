import HomePage from './pages/HomePage';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import TourPackage from './pages/TourPackage';
import DetailPackage from './pages/DetailPackage';
import Tempo from './pages/Tempo';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<About />} />
				<Route path='/tour-package' element={<TourPackage />} />
				<Route path='/tour-package/:tourPackageId' element={<DetailPackage />} />
				<Route path='/tempo' element={<Tempo />} />
			</Routes>
		</>
	);
}

export default App;
