describe('comments', function() {
  var assert = chai.assert;
  var testUtils = React.addons.TestUtils;
  var comments, form, searchInput, commentInput;

  // Instantiaties a Comments component and finds its form, search
  // input and comment input. There should only be one form.
  beforeEach(function() {
    comments = testUtils.renderIntoDocument(Comments({text: 'Like this'}));
    form = testUtils.findRenderedDOMComponentWithTag(comments, 'form');
    searchInput = testUtils.findRenderedDOMComponentWithClass(comments, 'search-input');
    commentInput = testUtils.findRenderedDOMComponentWithClass(comments, 'comment-input');
  });

  // Insert a test value into the input then submit the form before
  // checking that `state.comments` has a length of 1.
  it('should be possible to add a comment', function() {
    commentInput.getDOMNode().value = 'test';
    testUtils.Simulate.change(commentInput);
    testUtils.Simulate.submit(form);

    assert.lengthOf(comments.state.comments, 1);
  });
 
  // Twiter is awesome right? Well then less is more. Try inserting
  // more than 10 characters and check that `state.comments` only has
  // a truncated string.
  it('should not be possible to enter more than 10 characters', function() {
    commentInput.getDOMNode().value = 'under 10';
    testUtils.Simulate.change(commentInput);
    testUtils.Simulate.submit(form);
    commentInput.getDOMNode().value = 'more than ten characters';
    testUtils.Simulate.change(commentInput);
    testUtils.Simulate.submit(form);

    assert.equal(comments.state.comments[0], 'under 10');
  });

  // Finds all elements with `comment` class and asserts there are
  // only three of them.
  it('should show a maximum of three comments by default', function() {
    commentInput.getDOMNode().value = 'one';
    testUtils.Simulate.change(commentInput);
    testUtils.Simulate.submit(form);
    commentInput.getDOMNode().value = 'two';
    testUtils.Simulate.change(commentInput);
    testUtils.Simulate.submit(form);
    commentInput.getDOMNode().value = 'three';
    testUtils.Simulate.change(commentInput);
    testUtils.Simulate.submit(form);
    commentInput.getDOMNode().value = 'four';
    testUtils.Simulate.change(commentInput);
    testUtils.Simulate.submit(form);

    assert.lengthOf(comments.state.comments, 4);

    var lis = testUtils.scryRenderedDOMComponentsWithClass(comments, 'comment');
    assert.lengthOf(lis, 3);
  });

  // Clicks the element with the `expander` class and checks if more
  // than three comments are shown.
  it('should show all comments when prompted', function() {
    commentInput.getDOMNode().value = 'one';
    testUtils.Simulate.change(commentInput);
    testUtils.Simulate.submit(form);
    commentInput.getDOMNode().value = 'two';
    testUtils.Simulate.change(commentInput);
    testUtils.Simulate.submit(form);
    commentInput.getDOMNode().value = 'three';
    testUtils.Simulate.change(commentInput);
    testUtils.Simulate.submit(form);
    commentInput.getDOMNode().value = 'four';
    testUtils.Simulate.change(commentInput);
    testUtils.Simulate.submit(form);

    var expander = testUtils.findRenderedDOMComponentWithClass(comments, 'expander');
    testUtils.Simulate.click(expander);

    var lis = testUtils.scryRenderedDOMComponentsWithClass(comments, 'comment');
    assert.lengthOf(lis, 4);
  });

  // Change the search input value to only match one comment and see
  // if any more are shown.
  it('should only show comments containing searchword when search is changed', function() {
    commentInput.getDOMNode().value = 'one';
    testUtils.Simulate.change(commentInput);
    testUtils.Simulate.submit(form);
    commentInput.getDOMNode().value = 'two';
    testUtils.Simulate.change(commentInput);
    testUtils.Simulate.submit(form);
    commentInput.getDOMNode().value = 'three';
    testUtils.Simulate.change(commentInput);
    testUtils.Simulate.submit(form);

    var searcher = testUtils.findRenderedDOMComponentWithClass(comments, 'search-input');
    searcher.getDOMNode().value = 'two';
    testUtils.Simulate.change(searcher);

    var lis = testUtils.scryRenderedDOMComponentsWithClass(comments, 'comment');
    assert.lengthOf(lis, 1);
    assert.equal(lis[0].getDOMNode().innerHTML, 'two');
  });
});
