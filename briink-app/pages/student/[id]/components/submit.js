import { useRouter } from 'next/router'
import { useState } from 'react'
import Layout from '../../../../components/layout'

export default function SubmitHomeworkComponent (props) {
  const router = useRouter()
  const { id: studentId } = router.query

  const [file, setFile] = useState(null)
  const [createObjectURL, setCreateObjectURL] = useState(null)

  const changeClientFile = event => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0]
      setFile(i)
      setCreateObjectURL(URL.createObjectURL(i))
    }
  }

  const uploadFile = async event => {
    const formData = new FormData()
    formData.append('file', file)
    formData.set('studentId', studentId)
    formData.set('homeworkId', props.homeworkId)
    const endpoint = `/api/submitted-homeworks`
    const options = {
      method: 'POST',
      body: formData
    }
    const response = await fetch(endpoint, options)
    if (response.status === 201) {
      router.push(`/student/${studentId}`)
    }
  }

  return (
    <Layout>
      <div>
        Browse your answered homework PDF file...&nbsp;
        <input type='file' name='uploadFile' onChange={changeClientFile} />
      </div>
      <br />
      <button type='submit' onClick={uploadFile}>
        Upload
      </button>
    </Layout>
  )
}
