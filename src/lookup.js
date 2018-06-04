const Reader = require('mmdb-reader')
const log = require('./log')

const run = (event, ctx, callback) => {
  if (!event || !event.path.ip) {
    callback(
      new Error('Invalid event data, requires IP address')
    )
  } else {
    Reader.open(__dirname + '/../data/GeoLite2-City.mmdb',
      (error, reader) => callback(error, !error && reader.lookup(event.path.ip))
    )
  }
}

module.exports = { run }