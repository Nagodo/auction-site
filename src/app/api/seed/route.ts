import prisma from "@/lib/prisma";


await prisma.listing.deleteMany();

console.log("done");

 