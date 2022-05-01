import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'
import { useRouter } from 'next/router'
import useSwr from 'swr'
import SubmitHomeworkComponent from './components/submit'

const fetcher = url => fetch(url).then(res => res.json())

export default function StudentsHomeworksPage () {
  const router = useRouter()
  const { id: studentId } = router.query

  const { data: homeworks, error: homeworkEndpointError } = useSwr(
    studentId ? `/api/homeworks?studentId=${studentId}` : `/api/homeworks`,
    fetcher
  )
  if (homeworkEndpointError) return <div>Failed to load homeworks</div>
  if (!homeworks) return <div>Loading homeworks...</div>

  function getHomeworksList () {
    if (homeworks.length == 0) {
      return <p>Yay, no homework!</p>
    }
    return homeworks.map(homework => (
      <li key={homework.id}>
        <h4>{homework.title}</h4>
        <p>{homework.question}</p>
        <SubmitHomeworkComponent
          homeworkId={homework.id}
        ></SubmitHomeworkComponent>
      </li>
    ))
  }

  return (
    <Layout>
      <Head>
        <title>Student homeworks</title>
      </Head>
      <h2>My homeworks</h2>
      <ul>{getHomeworksList()}</ul>
      <nav>
        <ul>
          <li>
            <Link
              href={{
                pathname: '/student/[id]',
                query: { id: studentId }
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
