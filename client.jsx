const React = require('react');
const ReactDom = require('react-dom');

const Rps = require('./rpsClass');

ReactDom.render(<Rps/>, document.querySelector('#root'));