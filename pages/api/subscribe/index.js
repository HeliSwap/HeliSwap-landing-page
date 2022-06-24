import axios from 'axios';

const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { body: bodyParams } = req;
    const { profiles } = bodyParams;

    if (profiles.length <= 0) {
      res.status(200).json({ statusText: 'Wrong params' });
      return;
    }

    if (!validateEmail(profiles[0].email)) {
      res.status(200).json({ statusText: 'Invalid email' });
      return;
    }

    const url = `https://a.klaviyo.com/api/v2/list/${process.env.LIST_ID}/subscribe?api_key=${process.env.KLAVIYO_PK}`;

    const response = await axios.post(url, bodyParams);
    const { status, statusText } = response;
    res.status(status).json({ statusText });
  }
}
