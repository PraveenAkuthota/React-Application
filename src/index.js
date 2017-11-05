import React,  { Component } from 'react';    //React knows how to render the components/elemts, i.e. manage components
import ReactDOM from 'react-dom';// Render's react component to DOM, Basically used to render DOM
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDuFtZHAHs9frZTimVBFoP4Pti6ZkKSE7I';

// Create a component which produces some html
const App = () => {  //const App = function(){
     // App is constant because we dont want this variable to change again in future.
     return <div>Hi!!!</div>;
}

 // Take this component's generated html and put it on page (DOM)

 ReactDOM.render(<App />, document.querySelector('.container')); //We changed from App to <App /> because we need to pass component's instance not the component. So to make it istances we need to place them inside the JSX Tags.

// instead of <App></App> we can just write <App /> if there's nothing in between.
// First argument says what to render and second argument says where to render this component.
// Second argument is a reference to the existing DOM element on the page. So what we are saying is that Render the component and produce some HTML and insert that html into second argument.

