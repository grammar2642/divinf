import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const place = searchParams.get("city");
    const API = process.env.WEATHER_API;

    console.log("API was called");

    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&lang=en&appid=${API}`
    );
    if (!res.ok) {
        return NextResponse.json({ error: "Cannot approach the city"}, { status: 404});
    }
    const data = await res.json();
    console.log("取得データ:", data);
    return NextResponse.json(data);
}