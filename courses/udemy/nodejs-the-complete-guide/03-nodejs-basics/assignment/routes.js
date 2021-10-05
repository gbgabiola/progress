const requestHandler = (req, res) => {
  const { url, method } = req;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>My Assignment Page</title>
        </head>
        <body>
          <h1>Welcome to my Page</h1>
          <form action="/create-user" method="POST">
            <input type="text" name="username" placeholder="Username" />
            <button type="submit">Add User</button>
          </form>
        </body>
      </html>
    `);
    return res.end();
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>List of Users</title>
        </head>
        <body>
          <ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
          </ul>
        </body>
      </html>
    `);
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      console.log(username);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
};

module.exports = requestHandler;
