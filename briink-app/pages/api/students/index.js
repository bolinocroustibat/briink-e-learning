import { students } from '../../../data/students.js'

export default function studentsListHandler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(students)
  } else {
    res.status(405).end(`Method ${req.method} not allowed.`)
  }
}



