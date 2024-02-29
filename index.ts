import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { readReplicas } from '@prisma/extension-read-replicas'

const prisma = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL
})
.$extends(withAccelerate())
.$extends(readReplicas(
   {
    url: [process.env.SECOND_ACCELERATE_URL!]
   }
))

console.log(await prisma.$primary().user.count())

console.log(await prisma.$replica().user.count())

