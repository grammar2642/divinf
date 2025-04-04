export default async function handler(req, res) {
     const  city = req.query.city;

     if(!city) {
          return res.status(400).json({ error: "都市を指定して下さい"});
     }

     const API_KEY = process.env.OPENWEATHER_API_KEY;
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

     try {
          const response = await fetch(url);
          const data = await response.json();
          res.status(200).json(data);
     } catch (error) {
          res.status(500).json({ error: "APIリクエストに失敗しました"});
     }
}