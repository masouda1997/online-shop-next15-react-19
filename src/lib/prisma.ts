import { PrismaClient } from "@prisma/client";
import * as prismaType from "@prisma/client"

export const prisma = new PrismaClient
export type {prismaType}