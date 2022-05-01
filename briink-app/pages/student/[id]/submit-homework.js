import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function SubmitHomework (props) {
  const router = useRouter()
  const { id } = router.query

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
    formData.set('studentId', id)
    // formData.set('homeworkId', props.homeworkId)
    const endpoint = `/api/students/${id}/submit-homework`
    const options = {
      method: 'POST',
      body: formData
    }
    const response = await fetch(endpoint, options)
    if (response.status === 201) {
      router.push(`/student/${id}`)
    }
  }

  return (
    <Layout>
      <Head>
        <title>Submit homework</title>
      </Head>
      <h1>Submit your homework here</h1>

      <h4>Select the homework in PDF</h4>
      <input type='file' name='uploadFile' onChange={changeClientFile} />
      <button type='submit' onClick={uploadFile}>
        Upload
      </button>

      <nav>
        <ul>
          <li>
            <Link
              href={{
                pathname: '/student/[id]',
                query: { id: id }
              }}
            >
              <a>Go back to my home</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Layout>
  )
}
