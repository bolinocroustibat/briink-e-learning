import { teachers } from '../../../../data/teachers.js'

export default function teacherHandler(req, res) {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
      var teacher = teachers.find(el => el.id === parseInt(id))
      res.status(200).json(teacher)
      break
    case 'PUT':
      var teacher = teachers.find(el => el.id === parseInt(id))
      res.status(200).json(teacher)
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
