var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h2>About Component</h2>
//     );
//   }
// });

var About = (props) => {
  return (
    <h2>About</h2>
    <p>Welcome to about page!</p>
  )
};

module.exports = About;
