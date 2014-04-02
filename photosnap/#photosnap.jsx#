/** @jsx React.DOM */

(function() {
  var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

  // Takes a form DOM element and submits it as multipart AJAX.
  var upload = function(formEl, callback) {
    var formData = new FormData(formEl);

    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://localhost:8080/upload', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        callback(null);
      } else {
        callback(xhr);
      }
    };
    xhr.send(formData);
  };

  var UploadForm = React.createClass({
    submitted: function(event) {
      event.preventDefault();
      upload(this.refs.form.getDOMNode());
    },

    render: function() {
      return (
        <form ref="form" onSubmit={this.submitted}>
          <input ref="input" name="file" type="file" />
          <input type="submit" />
        </form>
      );
    }
  });

  window.ImageList = React.createClass({
    componentDidMount: function() {
      window.setInterval(this.tick, 1000);
    },

    getInitialState: function() {
      return {
        now: Date.now(),
        images: []
      };
    },

    tick: function() {
      var state = {now: Date.now()};

      var images = this.state.images.filter(function(image) {
        return image.expiry > Date.now();
      });

      if(images.length < this.state.images.length) state.images = images;

      this.setState(state);
    },

    addImage: function(imagename) {
      this.state.images.push({
        name: imagename,
        expiry: Date.now() + 60000
      });
      this.setState(this.state);
    },

    render: function() {
      var images = this.state.images.slice(0).reverse().map(function(image) {
        var timeLeft = image.expiry - Date.now();

        return (
          <li>
            <h6>{Math.round(timeLeft/1000)}</h6>
            <img src={'/uploads/' + image.name} />
          </li>
        );
      });

      return (
        <div>
          <UploadForm />
          <ReactCSSTransitionGroup transitionName="example" component={React.DOM.ul}>
            {images}
          </ReactCSSTransitionGroup>
        </div>
      );
    }
  });
})();
