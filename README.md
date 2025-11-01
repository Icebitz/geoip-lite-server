# GeoIP Lookup Server

A simple web application to lookup geographic information from IP addresses using the `geoip-lite` module for Node.js.

## Features

- Look up geographic information by IP address
- Display country, region, city, timezone, and coordinates
- Simple and clean web interface
- Fast and efficient local lookups using geoip-lite

## Installation

1. Clone or navigate to the project directory:
```bash
cd geoip-server
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
npm start
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

3. Enter an IP address in the input field (e.g., `8.8.8.8`) and click "Lookup"

## API Endpoint

The server provides a REST API endpoint:

**GET** `/api/ip/:ip`

Returns JSON data containing geographic information for the specified IP address.

Example request:
```
GET http://localhost:3000/api/ip/8.8.8.8
```

Example response:
```json
{
  "ip": "8.8.8.8",
  "country": "US",
  "region": "CA",
  "city": "Mountain View",
  "timezone": "America/Los_Angeles",
  "coordinates": {
    "latitude": 37.4056,
    "longitude": -122.0775
  },
  "metro": 807,
  "area": 650,
  "raw": { ... }
}
```

## Technologies Used

- **Node.js** - Runtime environment
- **Express** - Web framework
- **geoip-lite** - IP geolocation library

## Project Structure

```
geoip-server/
├── server.js           # Express server and API routes
├── public/
│   └── index.html      # Frontend web interface
├── package.json        # Dependencies and scripts
├── README.md          # This file
└── .gitignore         # Git ignore rules
```

## License

ISC

