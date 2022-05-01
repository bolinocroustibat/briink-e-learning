import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'
import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

export default function TeacherHomeworksView () {
  const router = useRouter()
  const { data: homeworks, error: homeworkEndpointError } = useSwr(
    router.query.id
      ? `/api/homeworks?teacherId=${router.query.id}`
      : `/api/homeworks`,
    fetcher
  )
  if (homeworkEndpointError) return <div>Failed to load homeworks</div>
  if (!homeworks) return <div>Loading homeworks...</div>

  return (
    <Layout>
      <Head>
        <title>Teacher homeworks</title>
      </Head>
      <h2>My homeworks</h2>
      <ul>
        {homeworks.map(homework => (
          <li key={homework.id}>
            <h4>{homework.title}</h4>
            <p>{homework.question}</p>
          </li>
        ))}
      </ul>
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
