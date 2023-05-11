import db from "@/lib/db";
import { FAQ } from "@prisma/client";

export async function getFAQ(): Promise<FAQ[]> {
  return await db.fAQ.findMany({
    orderBy: { question: "asc" },
  });
}
