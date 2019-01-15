const axios = require("axios");

module.exports = async () => {
  const results = await axios.get(
    "https://api.ipdata.co?api-key=8094f8447cb733ce59b6370da2fb4e1263340df79d3630934feb7475"
  );

  const { city, region } = results.data;
  return `${city}, ${region}`;
};
