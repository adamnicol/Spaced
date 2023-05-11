import db from "../lib//db";
import faq from "./data/faq.json";

function seed() {
  db.$transaction([
    db.fAQ.deleteMany(),
    db.fAQ.createMany({
      data: faq,
    }),
  ]);
}

seed();
