import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSwr from 'swr'
import Layout from '../../../components/layout'
import ScoresComponent from './components/scores'

const fetcher = url => fetch(url).then(res => res.json())

export default function teacherHomeworksPage () {
  const router = useRouter()
  const { id: teacherId } = router.query
  const { data: homeworks, error: homeworkEndpointError } = useSwr(
    teacherId ? `/api/homeworks?teacherId=${teacherId}` : `/api/homeworks`,
    fetcher
  )
  if (homeworkEndpointError) return <div>Failed to load homeworks</div>
  if (!homeworks) return <div>Loading homeworks...</div>

  function getTeacherHomeworksList () {
    if (homeworks.length == 0) {
      return <p>Yay, no homework!</p>
    }
    return homeworks.map(homework => (
      <li key={homework.id}>
        <h4>{homework.title}</h4>
        <ScoresComponent homeworkId={homework.id}></ScoresComponent>
      </li>
    ))
  }

  return (
    <Layout>
      <Head>
        <title>Teacher homeworks</title>
      </Head>
      <h2>My homeworks</h2>
      <ul>{getTeacherHomeworksList()}</ul>
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
