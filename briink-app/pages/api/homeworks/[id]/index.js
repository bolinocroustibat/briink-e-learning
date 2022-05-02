import { homeworks } from '../../../../data/homeworks.js'

export default function homeworkHandler (req, res) {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    case 'GET':
      // Fake get data from the database
      var homework = homeworks.find(el => el.id === parseInt(id))
      res.status(200).json(student)
      break
    case 'PUT':
      homework = homeworks.find(el => el.id === parseInt(id))
      // TODO: handle method to modify existing homework
      // Update data in the database
      res.status(200).json(homework)
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} not allowed.`)
  }
}
