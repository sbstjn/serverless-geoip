# Serverless GeoIP

Use AWS Lambda and [MaxMind GeoLite](http://dev.maxmind.com/geoip/geoip2/geolite2/) to query for locations of IP addresses. You can invoke the function or use API Gateway to send an HTTP request with the IP address to lookup.

## Install

```bash
$ > git clone git@github.com:sbstjn/serverless-geoip.git
$ > cd serverless-geoip
$ > yarn install
```

## Configure

Download the [GeoLite2 City](http://dev.maxmind.com/geoip/geoip2/geolite2/) database and store the file inside the `data` folder.

## Deploy 

```bash
$ > yarn deploy

…

endpoints:
  GET - https://randomid.execute-api.us-east-1.amazonaws.com/dev/ip/{ip}
```

## Usage

### Invoke

```bash
$ > sls invoke -f lookup --data '{ "ip": "8.8.8.8" }'

{
    "continent": {
        "code": "NA",
        "geoname_id": 6255149,
        "names": {
            "de": "Nordamerika",
            "en": "North America",
            "es": "Norteamérica",

…
…
```

### HTTP Request

```bash
$ > curl https://randomid.execute-api.us-east-1.amazonaws.com/dev/ip/8.8.8.8

{"continent":{"code":"NA","geoname_id":6255149,"names":{"de":"Nordamerika","en":"North America", …
```