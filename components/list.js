import React from 'react';
import Card from './card';

export default class List extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
     let card = (<Card text={this.props.textInput} />);
        return (
          <div className="list-div">
            {card}
          </div>
        );
    }
}
