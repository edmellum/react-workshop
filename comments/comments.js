/** @jsx React.DOM */

(function() {
  var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

  var CommentForm = React.createClass({displayName: 'CommentForm',
    getInitialState: function() {
      return {
        text: ''
      };
    },

    updateThing: function() {
      var value = this.refs.input.getDOMNode().value;
      this.setState({text: value});
    },

    render: function() {
      return (
          React.DOM.form(null, 
            React.DOM.input( {value:this.state.text, ref:"input", onChange:this.updateThing, className:"comment-input", type:"text"} ),
            React.DOM.input( {className:"search-input", type:"text"} )
          )
      );
    }
  });

  window.Comments = React.createClass({displayName: 'Comments',
    getInitialState: function() {
      return {
        comments: []
      };
    },

    render: function() {
      return (
        React.DOM.div(null, 
          CommentForm(null ),
          React.DOM.ul(null, 
            React.DOM.li( {className:"comment"}, "Comment here")
          ),
          React.DOM.a( {href:"#", className:"expander"}, "Read more...")
        )
      );
    }
  });
})();
