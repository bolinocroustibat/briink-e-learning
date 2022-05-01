import formidable from 'formidable'
import fs from 'fs'
import mkpath from 'mkpath'

import { homeworks } from '../../../data/homeworks.js'

export const config = {
  api: {
    bodyParser: false
  }
}

const post = async (req, res) => {
  const form = new formidable.IncomingForm()
  form.parse(req, async function (err, fields, files) {
    const studentId = fields.studentId
    const homeworkId = fields.homeworkId
    const localFilePath = await saveFile(files.file, homeworkId, studentId)
    const submissionDate = Date.now().toString()
    const submittedHomework = {
      homeworkId: homeworkId,
      studentId: studentId,
      submissionDate: submissionDate,
      file: localFilePath
    }
    const scoringSystem = homeworks[homeworkId].scoringSystemId
    // TODO: Create the `homeworkSubmitted` object in the database, with a status of `pendingScoring`
    // TODO: Send the file to a queue/service to be processed for score analyzing, along with the chosen scoringSystemId
    return res.status(201).json(submittedHomework)
  })
}

const saveFile = async (file, homeworkId, studentId) => {
  const data = fs.readFileSync(file.filepath)
  const localDirPath = `./data/uploads/homework_${homeworkId}/student_${studentId}`
  const localFilePath = `${localDirPath}/${file.originalFilename}`
  mkpath(localDirPath, function (err) {
    if (err) throw err
    fs.writeFileSync(localFilePath, data)
    fs.unlinkSync(file.filepath)
    return localFilePath
  })
}

export default function submitHomeworkHandler (req, res) {
  if (req.method === 'POST') {
    post(req, res)
  } else {
    res.status(405).end(`Method ${method} not allowed.`)
  }
}
