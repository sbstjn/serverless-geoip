const Reader = require('mmdb-reader')
const file = __dirname + '/../data/GeoLite2-City.mmdb'

const run = (event, ctx, callback) => {
  console.log(ctx)

  if (!event || !event.ip) {
    callback(
      new Error('Invalid event data, requires IP address')
    )
  } else {
    Reader.open(file,
      (error, reader) => callback(error, !error && reader.lookup(event.ip))
    )
  }
}

module.exports = { run }