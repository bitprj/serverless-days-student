export default async function handler(req, res) {
  let email = req.body.email;

  const response = await fetch(
    `https://api.mailerlite.com/api/v1/subscribers/108061810?` +
      new URLSearchParams({
        apiKey: process.env.MAILERLITE_KEY,
        id: "108061810",
        email: email,
      }),
    {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    }
  );

  let result = await response.json();
  res.status(200).json(result);
}
