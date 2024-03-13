import  { useEffect } from "react"
	import { useState } from "react";
	import Usuarios from "../pages/Usuarios";

	const MainUsuarios = () => {
		const [listaUsuarios, setListaUsuarios] = useState([]);
		const getUsuarios = async () =>{
			try {
				const response = await fetch("https://fakestoreapi.com/users");
				const data = await response.json();
				setListaUsuarios(data);
			} catch (error) {
				console.error(error)
			}
		};
		useEffect(()=>{
			getUsuarios();
		},[]);
		return (
			<main>
				<div className="container">
					<h3 className="text-center py-5">Lista de usuarios</h3>
					<table className="table table-hover">
						<thead>
							<tr className="text-center">
								<th>ID</th>
								<th>Nombre</th>
								<th>Apellido</th>
								<th>Correo</th>
								<th>Telefono</th>
								<th>Dirección</th>
								<th>Usuario</th>
								<th>Clave</th>
							</tr>
						</thead>
						<tbody>

						{listaUsuarios && listaUsuarios.map((usuario) => (
							<tr key={usuario.id} className="text-center">
								<td>{usuario.id}</td>
								<td>{usuario.name.firstname}</td>
								<td>{usuario.name.lastname}</td>
								<td>{usuario.email}</td>
								<td>{usuario.phone}</td>
								<td>{usuario.address.city} / {usuario.address.street}</td>
								<td>{usuario.username}</td>
								<td>{usuario.password}</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
			</main>
		)
	}
	export default MainUsuarios