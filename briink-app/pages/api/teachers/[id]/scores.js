import { teachers } from '../../../../../data/teachers.js'

export default function teacherScoreHandler(req, res) {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
      var teacher = teachers.find(el => el.id === parseInt(id))
      res.status(200).json(teacher)
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} not allowed.`)
  }
}
