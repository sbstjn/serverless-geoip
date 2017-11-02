const Reader = require('mmdb-reader')
const lookup = require('./lookup')

const res = data => ({
  statusCode: 200,
  body: JSON.stringify(data)
})

const run = (event, ctx, callback) => {
  console.log(ctx)

  if (!event || !event.queryStringParameters || !event.queryStringParameters.ip) {
    callback(
      new Error('Invalid event.queryStringParameters.ip')
    )
  } else {
    const req = { ip: event.queryStringParameters.ip }

    lookup.run(
      req,
      ctx,
      (error, data) => callback(null, res(data))
    )
  }
}

module.exports = { run }