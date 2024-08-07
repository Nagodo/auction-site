-- AlterTable
ALTER TABLE "User" ADD COLUMN     "forgotPasswordToken" TEXT,
ADD COLUMN     "forgotPasswordTokenExpires" TIMESTAMP(3);
