import { students } from '../../../../../data/students.js'

export default function studentHandler (req, res) {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    case 'GET':
      // TODO: Get data from the database
      var student = students.find(el => el.id === parseInt(id))
      res.status(200).json(student)
      break
    case 'POST':
      student = students.find(el => el.id === parseInt(id))
      // TODO
      res.status(200).json(teacher)
      break
    case 'PUT':
      student = students.find(el => el.id === parseInt(id))
      // TODO: Update data in the database
      res.status(200).json(teacher)
      break
    case 'DELETE':
      student = students.find(el => el.id === parseInt(id))
      // TODO
      res.status(200).end('Student deleted')
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} not allowed.`)
  }
}
