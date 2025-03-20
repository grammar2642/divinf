"use server";

export async function WeatherApp() {
  const city = "Tokyo";
  try {
    console.log("データ取得中です...");
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ja&appid=${process.env.OPENWEATHER_API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("データ取得エラー");
  }
}