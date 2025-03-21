
import { NextResponse } from 'next/server';

export async function GET() {
  const placeId = "ChIJ84RO0u-v5zsRWrCH01w_6lU"; // e.g., "ChIJN1t_tDeuEmsRUsoyG83frY4"
  const apiKey = "AIzaSyAsTfKlVBMQoT68gmHzLKrgSU7mo6k5hFA";
  const fields = "reviews";
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== "OK") {
      return NextResponse.json(
        { error: data.error_message || "Failed to fetch reviews" },
        { status: 500 }
      );
    }

    // Return the reviews
    return NextResponse.json(data.result);
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

  