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

```bash
.
└── data
    └── GeoLite2-City.mmdb
```

## Deploy 

### Install serverless-domain-manager
[Find it here](https://securitycw.atlassian.net/wiki/spaces/DEV/pages/32571396/Serverless#Serverless-Serverless-domain-manager)
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