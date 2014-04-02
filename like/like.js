/** @jsx React.DOM */

(function() {
  window.Like = React.createClass({displayName: 'Like',
    getInitialState: function() {
      return {
        // Allow the user to send in a default liked value. The object
        // used as an argument to our component becomes `this.props`.
        liked: this.props.defaultLiked
      };
    },

    clicked: function() {
      console.log('the link component just got clicked!');
      // This is the link component, not element!
      console.log(this.refs.link);
      // This is the DOM element.
      console.log(this.refs.link.getDOMNode());

      // hint! this.setState({somevalue: true})
    },

    render: function() {
      var theClass = 'someclass';

      // This is JSX! It's a simple macro that expands to JS.
      // http://facebook.github.io/react/jsx-compiler.html
      // Be sure to use `className` and not `class` as it's reserved
      return React.DOM.a( {href:"#", ref:"link", className:theClass, onClick:this.clicked}, "Like this!");
    }
  });
})();
