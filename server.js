const express = require('express')
const next = require('next')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(compression({filter: shouldCompress}))

  function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
      // don't compress responses with this request header
      return false
    }
    // fallback to standard filter function
    return compression.filter(req, res)
  }

  server.get('/artist/:id', (req, res) => {
    console.log('req.params.id : ' + req.params.id);
    var newQuery = req.query;
    newQuery.id = req.params.id;
    newQuery.role = 'artist';
    return app.render(req, res, '/', newQuery)
  })

  server.get('/album/:id', (req, res) => {
    console.log('req.params.id : ' + req.params.id);
    var newQuery = req.query;
    newQuery.id = req.params.id;
    newQuery.role = 'album';
    return app.render(req, res, '/', newQuery)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err)
      throw err
    console.log('> Ready on http://localhost:3000')
  })
})
