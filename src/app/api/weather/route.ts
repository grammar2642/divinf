export async function GET() {
    console.log("API was called");

    const place = "Osaka";
    const API = process.env.WEATHER_API;

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&lang=en&appid=${API}`);

    const data = await res.json();
    console.log("取得データ:", data);
    return Response.json(data);
}