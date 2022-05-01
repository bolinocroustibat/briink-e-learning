import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'
import { useRouter } from 'next/router'
import useSwr from 'swr'

export default function TeacherHomeworksCreate () {
  const router = useRouter()
  return (
    <Layout>
      <Head>
        <title>Create homework</title>
      </Head>
      <h1>Create homework</h1>
      <form action='/api/homeworks' method='POST'>
        <label for='title'>Homework title:</label>
        <input
          type='text'
          id='title'
          name='title'
          required
          minlength='5'
          maxlength='50'
        />
        <label for='question'>Homework question:</label>
        <input
          type='text'
          id='question'
          name='question'
          required
          minlength='5'
          maxlength='200'
        />
        <input type='hidden' name='teacherId' value={router.query.id} />
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
