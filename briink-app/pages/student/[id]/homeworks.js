import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'
import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

export default function StudentsHomeworksView () {
  const router = useRouter()
  const { data: homeworks, error: homeworkEndpointError } = useSwr(
    router.query.id
      ? `/api/homeworks?studentId=${router.query.id}`
      : `/api/homeworks`,
    fetcher
  )
  if (homeworkEndpointError) return <div>Failed to load homeworks</div>
  if (!homeworks) return <div>Loading homeworks...</div>

  function getHomeworksList() {
    if (homeworks.length == 0) {
      return (
          <p>Yay, no homework!</p>
      )
    }
    return homeworks.map(homework => (
      <li key={homework.id}>
        <h4>{homework.title}</h4>
        <p>{homework.question}</p>
      </li>
    ))
  }

  return (
    <Layout>
      <Head>
        <title>Student homeworks</title>
      </Head>
      <h2>My homeworks</h2>
      <ul>
        {getHomeworksList()}
      </ul>
      <nav>
        <ul>
          <li>
            <Link
              href={{
                pathname: '/student/[id]',
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
