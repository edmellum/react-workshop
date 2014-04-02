# Like button AKA hello world

A button that turns red if you click it once and turns back if you
click it again. Maybe it even turns green if you click it three times!

## Building it

To compile the JSX files you'll need to install react-tools with npm,
the node.js package manager.

`npm install -g react-tools`

To continually compile when the files change run the following
command.

`jsx --watch -x jsx . build`

## Running it

There's no server or persisting going on here, just UI. Just open the
[HTML file](like.html).

## The TODO

- Make the button/link become red when clicked. *Hint* look at the css file.
- Make the button toggle red when clicked.
- Add the ability to send a default like value in case a user already has liked something. *Hint* look at the html file and `this.props` for this and the next task.
- Make the text configurable.
