-- CreateTable
CREATE TABLE "faq" (
    "id" SERIAL NOT NULL,
    "question" VARCHAR(100) NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "faq_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "faq_question_key" ON "faq"("question");
