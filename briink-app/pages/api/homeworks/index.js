import { homeworks } from '../../../data/homeworks.js'
import { students } from '../../../data/students.js'

export default function homeworksListHandler (req, res) {
  if (req.method === 'GET') {
    if (req.query.teacherId) {
      // TODO: Get data from the database and filter it with SQL based on teacherId foreign key
      const teacherId = req.query.teacherId
      const teacherHomeworks = homeworks.filter(
        homework => homework.teacherId == teacherId
      )
      res.status(200).json(teacherHomeworks)
    }

    if (req.query.studentId) {
      // TODO get data from the database and filter it with SQL based on studentId foreign key
      const studentId = req.query.studentId
      const student = students.find(student => student.id == studentId)
      const teacherIds = student.teachersId
      let studentHomeworks = []
      teacherIds.forEach(teacherId => {
        const thisTeacherHomeworks = homeworks.filter(
          homework => homework.teacherId == teacherId
        )
        studentHomeworks = [...studentHomeworks, ...thisTeacherHomeworks]
      })
      res.status(200).json(studentHomeworks)
    }
    res
      .status(403)
      .end('You must be a teacher or a student to view homeworks.')
  } else if (req.method === 'POST') {
    const body = req.body
    if (!body.title || !body.question || !body.teacherId || !body.scoringSystemId) {
      return res
        .status(400)
        .end('Homework title, question or related teacher not found.')
    }
    const homework = {
      title: body.title,
      question: body.question,
      teacherId: body.teacherId,
      scoringSystemId: body.scoringSystemId
    }
    // TODO: Create the homework in the database
    res.status(201).json(homework)
  } else {
    res.status(405).end(`Method ${method} not allowed.`)
  }
}
