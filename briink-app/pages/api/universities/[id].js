export default function universityHandler(req, res) {
    const {
      query: { id, name },
      method,
    } = req
  
    switch (method) {
      case 'GET':
        res.status(200).json({ id, name: `University ${id}` })
        break
      case 'PUT':
        res.status(200).json({ id, name: name || `University ${id}` })
        break
      default:
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Method ${method} not allowed.`)
    }
  }
  