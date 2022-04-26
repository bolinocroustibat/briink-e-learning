import { students } from '../../../data/students.js'

export default function studentHandler(req, res) {
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case 'GET':
      // Fake get data from the database
      var student = students.find(el => el.id === parseInt(id))
      res.status(200).json(student)
      break
    case 'PUT':
      student = students.find(el => el.id === parseInt(id))
      // Update or create data in the database
      res.status(200).json(student)
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
