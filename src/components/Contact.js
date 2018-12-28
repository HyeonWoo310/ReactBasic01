import React, {Component} from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            keyword : "",
            selectedKey : -1,
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
        this.hanldeClick = this.handleClick.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            keyword : e.target.value
        })
    }

    handleClick = (key) => {
        this.setState({
            selectedKey: key
        })
        console.log(key, 'is Selected');
    }

    render(){
        const mapToComponent = (data) => {
            data.sort();
            data = data.filter((contact) => {
                return contact.name.toLowerCase().indexOf(this.state.keyword.toLocaleLowerCase()) > -1
            });
            return data.map((contact,i) => {
                return (<ContactInfo contact={contact} key={i} onClick={() => {this.handleClick(i)} } />)
            })
        }
        return(
            <div>
                <h1>Contatct</h1>
                <input name="keyword" value={this.state.keyword} placeholder="Search" onChange={this.handleChange} />
                <div>{mapToComponent(this.state.contactData)}</div>
                <ContactDetails 
                    contact={this.state.contactData[this.state.selectedKey]}
                    isSelected={this.state.selectedKey != -1}
                />
            </div>
        );
    }
}

export default Contact;