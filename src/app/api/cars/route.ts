import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../utils/prisma"; // make sure you have prisma client set up

export async function GET(req: NextRequest, ) {
  try {
    const {searchParams} = new URL(req.url);

    const manufacturer = searchParams.get("manufacturer") || "";
       const year = Number(searchParams.get("year")) || 2022;
    const fuel = searchParams.get("fuel") || "";
    const limit = Number(searchParams.get("limit")) || 10;
    const model = searchParams.get("model") || "";

    const cars = await prisma.car.findMany({
      where: {
        make: manufacturer ? { contains: manufacturer, mode: "insensitive" } : undefined,
        model: model ? { contains: model, mode: "insensitive" } : undefined,
        fuel_type: fuel ? { equals: fuel } : undefined,
        year: year ? { equals: year } : undefined,
      },
      take: limit,
    });
    console.log(cars)
   
    return NextResponse.json(cars, { status: 200 });
  } catch (error) {
    console.error("Error fetching cars:", error);
    return NextResponse.json(
      { error: "Failed to fetch cars from database" },
      { status: 500 }
    );
  }
}
