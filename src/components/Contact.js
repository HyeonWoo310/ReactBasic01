import React, {Component} from 'react';
import ContactInfo from './ContactInfo';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            keyword : "",
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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            keyword : e.target.value
        })
    }

    render(){
        const mapToComponent = (data) => {
            data.sort();
            data = data.filter((contact) => {
                return contact.name.toLowerCase().indexOf(this.state.keyword.toLocaleLowerCase()) > -1
            });
            return data.map((contact,i) => {
                return (<ContactInfo contact={contact} key={i} />)
            })
        }
        return(
            <div>
                <h1>Contatct</h1>
                <input name="keyword" value={this.state.keyword} placeholder="Search" onChange={this.handleChange} />
                <div>{mapToComponent(this.state.contactData)}</div>
            </div>
        );
    }
}

export default Contact;