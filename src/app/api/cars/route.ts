import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../utils/prisma"; // make sure you have prisma client set up

export async function GET(req: NextRequest, ) {
  try {
  
    const cars = await prisma.car.findMany();

   
    return NextResponse.json(cars, { status: 200 });
  } catch (error) {
    console.error("Error fetching cars:", error);
    return NextResponse.json(
      { error: "Failed to fetch cars from database" },
      { status: 500 }
    );
  }
}
