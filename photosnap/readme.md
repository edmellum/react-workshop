# Photosnap - Group Snapchat

A snapchat-ish thing where a group of people can upload images to a room that lists them all for 60 seconds. Snapchat for conferences?

## Building it

To compile the JSX files you'll need to install react-tools with npm,
the node.js package manager.

```bash
$ npm install -g react-tools
```

To continually compile when the files change run the following
command.

```bash
$ jsx --watch -x jsx . build
```

## Running it

There's a Node.js server that serves the static files, handles image uploading and broadcasting push messages. Run it with this command. You are not required to change it in any way, just run it.

```bash
$ node server.js
```

You might need to run this command in this directory first if you get issues.

```bash
$ npm install express socket.io busboy
```

## The TODO list

This is all front-end, no changing of the server is needed, but you might need to take a look at it.

- Add image uploading
- List the images
- Add a coutner to every image that counts down from 60 seconds after they are uploaded
- Stop showing them after 60 seconds
- Show images uploaded by others by subscribing to socket.io events from the server
