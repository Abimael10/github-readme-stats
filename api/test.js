export default async (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Access-Control-Allow-Origin", "*");
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100">
    <rect width="200" height="100" fill="blue"/>
    <text x="100" y="50" text-anchor="middle" fill="white">TEST WORKING</text>
  </svg>`;
  
  return res.send(svg);
};
