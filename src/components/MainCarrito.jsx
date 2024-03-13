import  { useEffect } from "react"
import { useState } from "react";
const MainCarrito = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const getProductos = async () =>{
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setListaProductos(data);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(()=>{
        getProductos();
    },[]);
    return (
        <main>
            <div className="container">
                <h3 className="text-center py-5 text-white">Carrito de Compra</h3>
                <div className="row">
                  {listaProductos && listaProductos.map((product) => (
                      <div className="col-md-4 col-lg-3 mb-3" key={product.id}>
                          <div className="card h-100">  
                              <div className="card-header p-0">
                                <img src={product.image} alt={product.title} className="img-fluid card-img-top" />
                              </div>
                              <div className="card-body text-center d-flex flex-column justify-content-center align-items-center">
                                <p>{product.title}<br/>
                                <b>Categoria: </b>{product.category} </p>
                                <h5 className="text-danger"><b>Precio: </b>{product.price}$</h5>
                              </div>
                              <div className="card-footer d-flex justify-content-evenly">
                                <a className="btn btn-sm btn-success" href="#">Detalle</a>
                                <a className="btn btn-sm btn-danger" href="">Comprar</a>
                              </div>
                          </div>
                      </div>
                    ))}
                </div>      
            </div>
        </main>
    )
}
export default MainCarrito
