import formidable from 'formidable'
import fs from 'fs'
import mkpath from 'mkpath'

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
    const localFilePath = await saveFile(files.file, studentId)
    const submissionDate = Date.now().toString()
    // Create homeworkSubmitted object in the database and associate it with:
    // - the student
    // - the homework
    // - the local file path of the submitted file
    // - the submission date
    return res.status(201).send('Homework sucessfully uploaded.')
  })
}

const saveFile = async (file, studentId) => {
  const data = fs.readFileSync(file.filepath)
  const localDirPath = `./data/uploads/${studentId}`
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
