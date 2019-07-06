import React from 'react';
import List from './list';

export default class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: '',
            cards: []
        };

        this.onAddInputChanged = this.onAddInputChanged.bind(this);
        this.onAddSubmit = this.onAddSubmit.bind(this);


    }

    onAddInputChanged(event){
      this.setState({textInput: event.target.value});
    }

    onAddSubmit(event){
        event.preventDefault();
        this.state.cards.push(<List textInput= event.target.value />);
    }


    render() {
        const style = {
            border: '1px solid black',
            height: '100px',
            lineHeight: '100px',
            width: '300px',
            textAlign: 'center',
            fontSize: '2em'
        };
        return (
            <div style={style}>
              <form>
                <input value={this.state.textInput} onChange={this.onAddInputChanged} type="text" />
                <input onClick={this.onAddSubmit} type="submit" value="Submit" />
                {this.state.cards}
              </form>
            </div>
        );
    }
}
