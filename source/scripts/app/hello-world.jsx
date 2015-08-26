// hello-world.jsx
import React from 'react';
 
console.log("Loaded hello world");

class HelloWorld extends React.Component {
  render() {
    return <p>Hello, world!</p>;
  }
}
 
export default HelloWorld;