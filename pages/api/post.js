import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handle(req, res) {
  const { method } = req

  switch (method) {
    case 'POST':
      const { name, review } = req.body
      // use prisma to create a new post using that data
      const post = await prisma.post.create({
        data: {
            name,
            review,
        }
      })
      // send the post object back to the client
      res.status(201).json(post)
      break
    default:
    res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}