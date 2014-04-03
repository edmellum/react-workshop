/** @jsx React.DOM */

(function() {
  // Shows a button the user can click which will toggle a "liked"
  // state.
  window.Like = React.createClass({
    // When a component is instantiated this is the state that is set
    // on it. Could remind you of a constructor, kind of.
    getInitialState: function() {
      return {
        // Allow the user to send in a default liked value. The object
        // used as an argument to our component becomes `this.props`.
        // For example: Like({defaultLiked: true})
        // In JSX: <Like defaultLiked={true} />

        // As props are to be treated as immutable we use it as a
        // default value to initialize our mutable state with.
        liked: this.props.defaultLiked
      };
    },

    // This will run when our link is clicked since it's hooked up in
    // the `onClick` part of the render method.
    clicked: function() {
      console.log('the link component just got clicked!');
      // This is the link component, not element!
      console.log(this.refs.link);
      // This is the DOM element.
      console.log(this.refs.link.getDOMNode());

      // hint! this.setState({somevalue: true})
    },

    // This method must be able to represent the complete state of
    // this component at any time. In other words, it needs to handle
    // being called at any time, no special state must affect it.
    render: function() {
      var theClass = 'someclass';

      // This is JSX! It's a simple macro that expands to JS.
      // http://facebook.github.io/react/jsx-compiler.html
      // Be sure to use `className` and not `class` as it's reserved
      return <a href="#" ref="link" className={theClass} onClick={this.clicked}>Like this!</a>;
    }
  });
})();
