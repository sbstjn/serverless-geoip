const Reader = require('mmdb-reader')

const run = (event, ctx, callback) => {
  if (!event || !event.ip) {
    callback(
      new Error('Invalid event data, requires IP address')
    )
  } else {
    Reader.open(__dirname + '/../data/GeoLite2-City.mmdb',
      (error, reader) => callback(error, !error && reader.lookup(event.ip))
    )
  }
}

module.exports = { run }