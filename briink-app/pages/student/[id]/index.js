import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'
import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

export default function studentIndexPage () {
  const router = useRouter()
  const { id: studentId } = router.query
  const { data: student, studentEndpointError } = useSwr(
    studentId ? `/api/students/${studentId}` : null,
    fetcher
  )
  if (studentEndpointError) return <div>Failed to load student</div>
  if (!student) return <div>Loading...</div>

  return (
    <Layout>
      <Head>
        <title>{student.name} student homepage</title>
      </Head>
      <h1>Welcome, {student.name}!</h1>
      <nav>
        <ul>
          <li>
            <Link
              href={{
                pathname: '/student/[id]/homeworks',
                query: { id: studentId }
              }}
            >
              <a>My homeworks</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Layout>
  )
}
