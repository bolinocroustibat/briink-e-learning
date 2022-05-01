import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'
import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

export default function TeacherIndexPage () {
  const router = useRouter()
  const { id: teacherId } = router.query
  const { data: teacher, error: teacherEndpointerror } = useSwr(
    teacherId ? `/api/teachers/${teacherId}` : null,
    fetcher
  )
  if (teacherEndpointerror) return <div>Failed to load teacher</div>
  if (!teacher) return <div>Loading teacher information...</div>

  return (
    <Layout>
      <Head>
        <title>{teacher.name} teacher homepage</title>
      </Head>
      <h1>Welcome, {teacher.name}!</h1>
      <nav>
        <ul>
          <li>
            <Link
              href={{
                pathname: '/teacher/[id]/homeworks',
                query: { id: teacherId }
              }}
            >
              <a>My created homeworks</a>
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: '/teacher/[id]/create-homework',
                query: { id: teacherId }
              }}
            >
              <a>Create a new homework</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Back to home</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Layout>
  )
}
