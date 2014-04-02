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

  var UploadForm = React.createClass({displayName: 'UploadForm',
    render: function() {
      return (
        React.DOM.form(null, 
          React.DOM.input( {name:"file", type:"file"} ),
          React.DOM.input( {type:"submit"} )
        )
      );
    }
  });

  window.ImageList = React.createClass({displayName: 'ImageList',
    render: function() {
      return (
        React.DOM.div(null, 
          UploadForm(null ),
          React.DOM.h2(null, "A list of images goes here")
        )
      );
    }
  });
})();
