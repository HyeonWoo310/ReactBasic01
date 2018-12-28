import React, {Component} from 'react';

class ConatactInfo extends Component{
    render(){
        return(
            <div>{this.props.contact.name} {this.props.contact.phone}</div>
        );
    }
}

export default ConatactInfo;