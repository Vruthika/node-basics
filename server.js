const server = require('http')
server.createServer((req, res) => {
    console.log(req.url);
    const foods = ['Biryani', 'Curd', 'Sambar']
    if (req.url === '/posts') {
        res.write('Post page');
    }
    else if (req.url === '/admin') {
        res.write('Admin page');
    } else {
        res.write(JSON.stringify(foods));
    }
    res.end();
}).listen(6969);