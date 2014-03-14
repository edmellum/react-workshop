/** @jsx React.DOM */

(function() {
  window.Like = React.createClass({
    getInitialState: function() {
      return {
        liked: this.props.defaultLiked
      };
    },

    render: function() {
      return <a href="#">Like this!</a>;
    }
  });
})();
