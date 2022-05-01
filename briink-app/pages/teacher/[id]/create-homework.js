import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'
import { useRouter } from 'next/router'

export default function TeacherHomeworksCreatePage () {
  const router = useRouter()

  // Overrides the submit event on form submit
  const handleSubmit = async event => {
    event.preventDefault() // Stop the form from submitting and refreshing the page
    const data = {
      title: event.target.title.value,
      question: event.target.question.value,
      teacherId: router.query.id
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
      router.push(`/teacher/${router.query.id}`)
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
          <label for='title'>Homework title:</label>
          <input
            type='text'
            id='title'
            name='title'
            required
            minlength='5'
            maxlength='50'
          />
        </div>
        <div>
          <label for='question'>Homework question:</label>
          <input
            type='text'
            id='question'
            name='question'
            required
            minlength='5'
            maxlength='200'
          />
        </div>
        <div>
          <label for='scoringSystem'>Scoring system</label>
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
                query: { id: router.query.id }
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
