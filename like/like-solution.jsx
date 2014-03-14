/** @jsx React.DOM */

var Like = React.createClass({
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
    return <a className={className} onClick={this.clicked} href="#">{this.props.text}</a>;
  }
});

var container = document.querySelector('#react-goes-here');
React.renderComponent(Like({text: 'Like this'}), container);