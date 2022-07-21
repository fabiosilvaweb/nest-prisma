-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "qr_code" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "books_qr_code_key" ON "books"("qr_code");
