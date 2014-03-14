/** @jsx React.DOM */

(function() {
  var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

  var CommentForm = React.createClass({
    getInitialState: function() {
      return {
        text: ''
      };
    },

    submitted: function(event) {
      event.preventDefault();
      this.props.onComment(this.state.text);
      this.setState({text: ''});
    },

    textUpdate: function(event) {
      var value = this.refs.commentInput.getDOMNode().value;
      if(value.length > 10) return;
      this.setState({text: value});
    },

    searched: function (event) {
      this.props.onSearch(event.target.value.toLowerCase());
    },

    render: function() {
      return (
          <form onSubmit={this.submitted}>
            <div>Max 10: {this.state.text.length}</div>
            <input ref="commentInput" className="comment-input" onChange={this.textUpdate} value={this.state.text} type="text" />
            <input ref="searchInput" className="search-input" onChange={this.searched} type="text" />
          </form>
      );
    }
  });

  window.Comments = React.createClass({
    getInitialState: function() {
      return {
        expanded: false,
        search: '',
        comments: []
      };
    },

    addComment: function(comment) {
      var comments = this.state.comments;
      comments.push(comment);
      this.setState({comments: comments});
    },

    expandToggle: function(event) {
      event.preventDefault();
      this.setState({expanded: !this.state.expanded});
    },

    updateSearch: function(search) {
      this.setState({search: search});
    },

    render: function() {
      var comments, expandText, expandDisplay;

      var filteredComments = this.state.comments.filter(function(comment) {
        return comment.toLowerCase().indexOf(this.state.search) != -1;
      }, this);

      if(filteredComments.length > 3) {
        expandDisplay = 'block';
      } else {
        expandDisplay = 'none';
      }
      if(!this.state.expanded) {
        expandText = 'Read more...';
        comments = filteredComments.slice(-3);
      } else {
        expandText = 'Read less...';
        comments = filteredComments;
      }

      var els = comments.map(function(comment) {
        return <li className="comment">{comment}</li>;
      });

      return (
        <div>
          <CommentForm onComment={this.addComment} onSearch={this.updateSearch} />
          <ul>
            {els}
          </ul>
          <a href="#" className="expander" onClick={this.expandToggle} style={{display: expandDisplay}}>{expandText}</a>
        </div>
      );
    }
  });
})();
