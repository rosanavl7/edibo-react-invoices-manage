import axios from 'axios';
import React, { Component } from 'react'

import 'semantic-ui-css/semantic.min.css'


class InvoiceForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          newInvoice:[],
          
        };
       
    }

    
    addingInvoice = (e) => {
        debugger
        console.log(e)
        console.log(this.state.newInvoice)
        const newInvoiceObject = {
            businessName: this.state.businessName,
            quantity: this.state.quantity,
            date: this.state.date,
            paid: false
        };
        axios
            .post("http://localhost:8000/invoice", newInvoiceObject)
            .then(
                res => this.setState({
                    newInvoice: [...this.newInvoice, res.data],
                })
            
            )
            .catch(console.error);
    };

    onChangeDate = (e) => {
        this.setState({
            date: e.target.value,
        });
    };

    onChangeName = (e) => {
        this.setState({
            businessName: e.target.value,
        });
    };

    onChangeQuantity = (e) => {
        this.setState({
            quantity: e.target.value,
        });
    };



  

    render() {
        return (
            <div>
                <form class="ui form">
                    <div class="field">
                        <label>Nombre de la empresa </label>
                        <input type="text" name="businessName"
                        value={this.state.businessName}
                        onChange={(e) => this.onChangeName(e)} />
                    </div>
                    <div class="field">
                        <label>Importe</label>
                        <input type="number" name="quantity" placeholder="Quantity" 
                        value={this.state.quantity}
                        onChange={(e) => this.onChangeQuantity(e)}
                        />
                    </div>
                    <div class="field">
                        <label>Fecha</label>
                        <input type="text" name="date" placeholder="date" 
                        onChange={(e) => this.onChangeDate(e)}
                        value={this.state.date} />
                    </div>
                     <button class="ui button" onClick={this.addingInvoice}>Submit</button>
                     <button class="ui button" onClick={this.return}>Cancelar</button>
                </form>
            </div>
        )
    }
}

export default InvoiceForm
