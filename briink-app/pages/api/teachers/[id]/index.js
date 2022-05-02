import { teachers } from '../../../../../data/teachers.js'

export default function teacherHandler (req, res) {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    case 'GET':
      // TODO: Get data from the database
      var teacher = teachers.find(el => el.id === parseInt(id))
      res.status(200).json(teacher)
      break
    case 'POST':
      var teacher = teachers.find(el => el.id === parseInt(id))
      // TODO
      res.status(200).json(teacher)
      break
    case 'PUT':
      var teacher = teachers.find(el => el.id === parseInt(id))
      // TODO
      res.status(200).json(teacher)
      break
    case 'DELETE':
      var teacher = teachers.find(el => el.id === parseInt(id))
      // TODO
      res.status(200).end('Teacher deleted')
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} not allowed.`)
  }
}
