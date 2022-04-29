import middleware from '../../../../middleware/middleware'
import nextConnect from 'next-connect'

const handler = nextConnect()
handler.use(middleware)

handler.post(async (req, res) => {
  console.log(req.body)
  console.log(req.files)

  if (!req.files) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'Homework file not found' })
  }

  //...
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default handler
