import { NextResponse } from "next/server";
import { getFAQ } from "@/services/data.service";

export async function GET() {
  const faq = await getFAQ();
  return NextResponse.json(faq);
}
