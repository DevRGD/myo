import config from '@/configs/Env';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new PrismaClient();

if (config.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
