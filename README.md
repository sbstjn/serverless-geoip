# Serverless GeoIP

Use AWS Lambda and [MaxMind GeoLite](http://dev.maxmind.com/geoip/geoip2/geolite2/) to query for locations of IP addresses. You can invoke the function or use API Gateway to send an HTTP request with the IP address to lookup.

## Why
Since FreeGeoIP has deprecated their [free api](https://github.com/apilayer/freegeoip#readme), we decided to implement this in lambda.

```bash
curl \
-H "Content-Type: application/json" \
https://geoip.scw.video/ip/172.217.8.206
```

Feel free to utilize our api endpoint hosted by [security-camera-warehouse.com](https://www.security-camera-warehouse.com/)
## Install

```bash
$ > git clone git@github.com:sbstjn/serverless-geoip.git
$ > cd serverless-geoip
$ > yarn install
```

## Configure

Download the [GeoLite2 City](http://dev.maxmind.com/geoip/geoip2/geolite2/) database and store the file inside the `data` folder.

```bash
.
└── data
    └── GeoLite2-City.mmdb
```

## Deploy 

### Dependencies
[serverless-domain-manager](https://securitycw.atlassian.net/wiki/spaces/DEV/pages/32571396/Serverless#Serverless-Serverless-domain-manager)
[serverless-aws-documentation](https://securitycw.atlassian.net/wiki/spaces/DEV/pages/32571396/Serverless#Serverless-Serverless-aws-documentation)

Run 
```bash
serverless create-domain
```
Wait 40 minutes for domain to create if it's new

### yarn deploy

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

### Remove Domain with
```bash
serverless delete_domain
```