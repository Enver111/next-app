import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const ProductState = await prisma.productState.findMany();

  return NextResponse.json(ProductState);
}
