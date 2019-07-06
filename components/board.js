import React from 'react';
import List from './list';

export default class Board extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
      var cardContent = "This is a card";
        return (
          <div className="board-div">
          {this.props.title}
            <List title={this.props.lists[0]} cards={cardContent} />
            <List title={this.props.lists[1]} cards={cardContent} />
            <List title={this.props.lists[2]} cards={cardContent} />
          </div>
        );
    }
}
