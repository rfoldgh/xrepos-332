import React from 'react';
import ReactDOM from 'react-dom';

import Card from './components/card';
import List from './components/list';
import Board from './components/board';
var listsArr = ["list1","list2","list3"];
document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board title="Board Title" lists={listsArr}/>, document.getElementById('app'))
);
