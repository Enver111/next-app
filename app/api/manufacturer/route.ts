import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const manufacturer = await prisma.manufacturer.findMany();

  return NextResponse.json(manufacturer);
}
