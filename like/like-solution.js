/** @jsx React.DOM */

(function() {
  window.Like = React.createClass({displayName: 'Like',
    getInitialState: function() {
      return {
        liked: this.props.defaultLiked
      };
    },

    clicked: function(event) {
      event.preventDefault();
      this.setState({liked: !this.state.liked});
      // $.post('/like', {liked: this.state.liked})
    },

    render: function() {
      var className = this.state.liked ? 'liked' : '';
      return React.DOM.a( {className:className, onClick:this.clicked, href:"#"}, this.props.text);
    }
  });
})();
