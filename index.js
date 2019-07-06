import React from 'react';
import ReactDOM from 'react-dom';

import Card from './components/card';
import List from './components/list';
import Board from './components/board';
import ListContainer from './components/list-container';
var listsArr = ["list1","list2","list3"];
document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<ListContainer />, document.getElementById('app'))
);
