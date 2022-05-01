import { homeworks } from '../../../data/homeworks.js'

export default function homeworksListHandler (req, res) {
  if (req.method === 'GET') {
    // TODO get data from the database and filter it with SQL based on teacherId foreign key
    let filteredHomeworks = homeworks
    if (req.query.teacherId) {
      const teacherId = req.query.teacherId
      filteredHomeworks = homeworks.filter(
        homework => homework.teacherId == teacherId
      )
    }
    res.status(200).json(filteredHomeworks)
  } else if (req.method === 'POST') {
    const body = req.body
    if (!body.title || !body.question || !body.teacherId) {
      return res
        .status(400)
        .json({ data: 'Homework title or question not found' })
    }
    const homework = {
      title: body.title,
      question: body.question,
      teacherId: body.teacherId
    }
    // TODO create the homework in the database
    res.status(201).json(homework)
  } else {
    res.status(405).end(`Method ${method} not allowed`)
  }
}
