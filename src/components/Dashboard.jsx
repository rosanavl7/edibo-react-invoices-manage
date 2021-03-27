import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'
import {Link } from "react-router-dom";

class Dashboard extends Component {
    
    constructor(props){
        super(props)
        this.state={
            invoicesData:[]
        }
    }
    componentDidMount() {
        //Ir a por los datos y actualizarlos, devuelve promesa:
        //Podemos hacer then o catch
        axios.get("http://localhost:8000/invoice").then(
            res => {
                console.log(res.data)
                this.setState({
                    invoicesData: res.data
                })
            }
        ).catch(
            /*Cualquier respuesta no satisfactoria irá aqui*/
            err => console.error(err)
        )
    }

    deleteElement = (id) => {
        axios.delete(`http://localhost:8000/invoice/${id}`).then(
            this.setState({
                invoicesData: this.state.invoicesData.filter(i => i.id !== id)
            
            })
        )
    }

    

    render=()=> {
        return (
            <div>
                <table class="ui celled table">
                    <thead>
                        <tr><th>id</th>
                            <th>Cliente</th>
                            <th>Importe (€)</th>
                            <th>Fecha</th>
                            <th>Ver más</th>
                            <th>Eliminar</th>
                        </tr></thead>
                    <tbody>

                        {
                            this.state.invoicesData.map(
                                (factura) =>(<tr key={factura.id}>
                                    <td>{factura.id}</td>
                                    <td>{factura.businessName}</td>
                                    <td>{factura.quantity}</td>
                                    <td>{factura.date}</td>
                                    <td><Link to={`/${factura.id}`}> <i class="chevron circle right icon"></i></Link></td>
                                    <td> <i onClick={() => this.deleteElement(factura.id)} class="minus circle icon"></i></td>
                                </tr>
                            ))
                        } 
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Dashboard