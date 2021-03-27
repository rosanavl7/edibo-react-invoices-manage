import axios from 'axios'
import React, { Component } from 'react'



class InvoiceDetails extends Component {
    
    
    constructor(props){
        super(props)
        this.state={
            invoiceData: [],                
        }
    }

   componentDidMount(){
    var url = window.location+'';
    var split = url.split("/");
    var id = split[split.length-1];
    console.log(id);
    axios.get(`http://localhost:8000/invoice/${id}`)
        .then(
            res => {
                console.log(res.data)
                console.table(res.data);
                this.setState({
                    invoiceData: res.data
            })})
           
        .catch(err => console.error(err))
  
    }

    deleteElement = (id) => {
        axios.delete(`http://localhost:8000/invoice/${id}`).then(
            this.setState({
                invoiceData: this.state.invoiceData.filter(i => i.id !== id)
            })  
        )
    }

    render() {
        return (
            <div className="invoice-details">
         
                <h1>FACTURA</h1>
                <ul>
                    <li>id: {this.state.invoiceData.id } </li> 
                    <li>Importe :{this.state.invoiceData.quantity }  </li>
                    <li>Cliente : {this.state.invoiceData.businessName }  </li>
                    <li>Fecha : {this.state.invoiceData.date }  </li>
                </ul>

            </div>
         
        )
    }
}


export default InvoiceDetails