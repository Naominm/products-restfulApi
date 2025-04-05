-- CreateTable
CREATE TABLE "products_table" (
    "id" TEXT NOT NULL,
    "productTitle" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "unitsLeft" INTEGER NOT NULL,
    "pricePerUnit" TEXT NOT NULL,
    "isOnOffer" BOOLEAN NOT NULL,

    CONSTRAINT "products_table_pkey" PRIMARY KEY ("id")
);
