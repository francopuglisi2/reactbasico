import { BrowserRouter, Routes, Route} from "react-router-dom";
	import Inicio from './pages/Inicio'
	import Usuarios from './pages/Usuarios'
	import Pedidos from './pages/Pedidos'
	import Productos from './pages/Productos'
	import Carrito from './pages/Carrito'
  import Header from "./components/Header";
  import Footer from "./components/Footer";
	import './App.css'
	function App() {

	return (
		<>
			<BrowserRouter>
			<Header/>
				<Routes>
					<Route path="/" element={<Inicio/>} />
					<Route path="/Usuarios" element={<Usuarios/>} />
					<Route path="/Pedidos" element={<Pedidos/>} />
					<Route path="/Carrito" element={<Carrito/>} />
					<Route path="/Productos" element={<Productos/>} />
				</Routes>
				<Footer/>
			</BrowserRouter>
		</>
		)
	}

	export default App