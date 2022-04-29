import { students } from '../../../data/students.js'

export default function studentsListHandler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(students)
  } else {
    res.status(405).end(`Method ${method} Not Allowed`)
  }
}
