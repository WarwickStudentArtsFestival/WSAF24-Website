import 'server-only';

import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV !== 'production'
        ? ['query', 'info', 'warn', 'error']
        : ['info', 'warn', 'error'],
    omit: {
      schedule_event: {
        org_notes: true,
        tech_notes: true,
        data_collected: true,
      },
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
