const http = require("http");
const host = "localhost";
const port = 8000;
const requestListener = function (req, res) {
  const url = new URL(req.url, `https://localohst:${port}/`);
  if (url.pathname === "/user") {
    const name = url.searchParams.get("name");
    const email = url.searchParams.get("email");
    res.writeHead(200);
    res.write(JSON.stringify({ nombre: name, email: email }));
  }
  res.end();
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`El servidor esta corriendo en http://${host}:${port}`);
});
