const express = require('express');
const geoip = require('geoip-lite');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static('public'));

// API endpoint to get IP information
app.get('/api/ip/:ip', (req, res) => {
  const ip = req.params.ip;
  
  // Basic IP validation
  const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  
  if (!ipRegex.test(ip)) {
    return res.status(400).json({ 
      error: 'Invalid IP address format' 
    });
  }
  
  const geo = geoip.lookup(ip);
  
  if (!geo) {
    return res.status(404).json({ 
      error: 'IP address information not found' 
    });
  }
  
  // Format the response with readable information
  const response = {
    ip: ip,
    country: geo.country,
    region: geo.region,
    city: geo.city,
    timezone: geo.timezone,
    coordinates: {
      latitude: geo.ll[0],
      longitude: geo.ll[1]
    },
    metro: geo.metro || 'N/A',
    area: geo.area || 'N/A',
    raw: geo
  };
  
  res.json(response);
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

