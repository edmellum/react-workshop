/** @jsx React.DOM */

(function() {
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
    render: function() {
      return (
        <form>
          <input name="file" type="file" />
          <input type="submit" />
        </form>
      );
    }
  });

  window.ImageList = React.createClass({
    render: function() {
      return (
        <div>
          <UploadForm />
          <h2>A list of images goes here</h2>
        </div>
      );
    }
  });
})();
