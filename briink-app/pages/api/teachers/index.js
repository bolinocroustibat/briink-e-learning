import { teachers } from '../../../data/teachers.js'

export default function teachersHandler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(teachers)
  } else {
    res.status(405).end(`Method ${method} not allowed.`)
  }
}
