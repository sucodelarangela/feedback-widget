import { PrismaClient } from "@prisma/client";

// Showing on log every change made to the database
export const prisma = new PrismaClient({
  log: ['query']
})