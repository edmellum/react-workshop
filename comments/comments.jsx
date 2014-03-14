/** @jsx React.DOM */

(function() {
  var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

  var CommentForm = React.createClass({
    getInitialState: function() {
      return {
        text: ''
      };
    },

    render: function() {
      return (
          <form>
            <input className="comment-input" type="text" />
            <input className="search-input" type="text" />
          </form>
      );
    }
  });

  window.Comments = React.createClass({
    getInitialState: function() {
      return {
        comments: []
      };
    },

    render: function() {
      return (
        <div>
          <CommentForm />
          <ul>
            <li className="comment">Comment here</li>
          </ul>
          <a href="#" className="expander">Read more...</a>
        </div>
      );
    }
  });
})();
