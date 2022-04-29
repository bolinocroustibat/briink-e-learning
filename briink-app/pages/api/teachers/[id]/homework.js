export default function teacherHomeworkHandler (req, res) {
  const { method } = req

  switch (method) {
    case 'POST':
      res.status(200).json({})
      break
    case 'PUT':
      res.status(200).json({})
      break
    default:
      res.setHeader('Allow', ['POST', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
