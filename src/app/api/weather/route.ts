import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");

    if (!city) {
        return NextResponse.json({ error: "Enter your City" }, { status: 400 });
    }

    const API_KEY = process.env.OPENWEATHER_API_KEY;
    if (!API_KEY) {
        return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        console.log(`Fetching weather data for: ${city}`);
        console.log(`API URL: ${url}`);

        const response = await fetch(url);
        const data = await response.json();

        console.log("API Response Status:", response.status);
        console.log("API Response Data:", data);

        if (!response.ok) {
            return NextResponse.json({ error: "API Error", details: data }, { status: response.status });
        }

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("API Fetch Error:", error);
        return NextResponse.json({ error: "Failure to Request API", details: String(error) }, { status: 500 });
    }
}
