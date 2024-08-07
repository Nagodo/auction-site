-- CreateEnum
CREATE TYPE "ListingType" AS ENUM ('Sale', 'Auction');

-- AlterTable
ALTER TABLE "Listing" ADD COLUMN     "keywords" TEXT[],
ADD COLUMN     "type" "ListingType" NOT NULL DEFAULT 'Sale';
