import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'
import { useRouter } from 'next/router'

export default function teacherHomeworksCreatePage () {
  const router = useRouter()
  const { id: teacherId } = router.query

  // Overrides the submit event on form submit
  const handleSubmit = async (event) => {
    event.preventDefault() // Stop the form from submitting and refreshing the page
    const data = {
      title: event.target.title.value,
      question: event.target.question.value,
      scoringSystemId: event.target.scoringSystem.value,
      teacherId: teacherId
    }
    const endpoint = '/api/homeworks'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const response = await fetch(endpoint, options)
    if (response.status === 201) {
      alert("New homework succesfully submitted!")
      router.push(`/teacher/${teacherId}`)
    }
  }

  return (
    <Layout>
      <Head>
        <title>Create homework</title>
      </Head>
      <h1>Create homework</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Homework title:</label>
          <input
            type='text'
            id='title'
            name='title'
            required
            minLength='5'
            maxLength='50'
          />
        </div>
        <div>
          <label htmlFor='question'>Homework question:</label>
          <input
            type='text'
            id='question'
            name='question'
            required
            minLength='5'
            maxLength='200'
          />
        </div>
        <div>
          <label htmlFor='scoringSystem'>Scoring system</label>
          <select name='scoringSystem' id='scoringSystem'>
            <option value='1'>Easy</option>
            <option value='2'>Hard</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
      <nav>
        <ul>
          <li>
            <Link
              href={{
                pathname: '/teacher/[id]',
                query: { id: teacherId }
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
