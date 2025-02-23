const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// app.get('/health', (req, res) => {
//   res.send('ok')
// })

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw('error...  ')
  res.send('ok')
})

const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})

// Gracefully handle process termination
process.on('SIGTERM', () => {
  console.log('Shutting down server...')
  server.close(() => {
    console.log('Server shut down')
    process.exit(0)
  })
})