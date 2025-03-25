export async function GET(req: Request) {
     
     const { searchParams } = new URL(req.url);
     const country = searchParams.get("country") || "en";

     const API = process.env.NEWS_API;
     console.log(API);
     const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API}`
     );

     const data = await res.json();
     console.log(data);
     return new Response(JSON.stringify(data)); //Response型で返す必要がある
}