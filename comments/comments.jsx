/** @jsx React.DOM */

(function() {

  // Let's a user enter a comment and notifies the Comments component
  // when a comment is submitted. Doesn't actually store the state of
  // the comments, we leave that up to the Comment component.
  var CommentForm = React.createClass({
    getInitialState: function() {
      return {
        text: ''
      };
    },

    submitted: function() {
      // React has no data binding so the component isn't updated, we
      // have to go to the source(the DOM) to get the new value.
      var value = this.refs.commentInput.getDOMNode().value;
      console.log('The comment is:', value);

      // Inform the parent component of the submission.
      this.props.onComment('hello!');
    },

    render: function() {
      return (
          <form onSubmit={this.submitted}>
            {/* Don't change the classes of these inputs as the tests depend on it. */}
            <input ref="commentInput" className="comment-input" type="text" />
            <input className="search-input" type="text" />
            <input type="submit" />
          </form>
      );
    }
  });

  // Shows all the submitted comments and renders the CommentForm
  // component making sure to pass along a function to be called when
  // a comment is submitted.
  window.Comments = React.createClass({
    getInitialState: function() {
      return {
        // Don't change name of this, as the tests rely on it.
        comments: ['some comment']
      };
    },

    addComment: function(thing) {
      // We need the form component to call this so we can add new
      // comments to the list. Communicating with other components can
      // be done by just passing this function to the component.
      console.log(thing);
    },

    render: function() {
      // Mapping and array of some state into an array of components
      // is a great and functional way of handling list rendering. A
      // typical react component uses this pattern a lot.
      var lis = this.state.comments.map(function(comment) {
        // Don't change the class of this as the tests depend on it.
        return <li className="comment">{comment}</li>;
      });

      return (
        <div>
          {/* The `onComment` becomes `this.props.onComment` in CommentForm */}
          <CommentForm onComment={this.addComment} />
          <ul>
            {lis}
          </ul>
          {/* The `display: none` part is a hint for the expand task */}
          <a href="#" className="expander" style={{display: 'none'}}>Read more...</a>
        </div>
      );
    }
  });
})();
