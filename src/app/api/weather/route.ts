export async function GET() {
    console.log("API was called");

    const place = "Tokyo";

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&lang=ja&appid=${process.env.OPENWEATHER_API_KEY}`);

    const data = await res.json();
    return Response.json(data);
}