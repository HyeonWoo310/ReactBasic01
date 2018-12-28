import React, {Component} from 'react';
import ContactInfo from './ContactInfo';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            contactData : 
            [
                {
                    name : 'Albert',
                    phone : '010-0000-0001'
                },
                {
                    name: 'Betty',
                    phone: '010-0000-0002'
                }, 
                {
                    name: 'Charlie',
                    phone: '010-0000-0003'
                },
                {
                    name: 'David',
                    phone: '010-0000-0004'
                }
            ]
        };
    }

    render(){
        const mapToComponent = (data) => {
            return data.map((contact,i) => {
                return (<ContactInfo contact={contact} key={i} />)
            })
        }
        return(
            <div>
                <h1>Contatct</h1>
                <div>{mapToComponent(this.state.contactData)}</div>
            </div>
        );
    }
}

export default Contact;