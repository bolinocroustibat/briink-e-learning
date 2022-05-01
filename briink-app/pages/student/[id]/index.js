import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'
import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

export default function StudentIndexPage () {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `/api/students/${router.query.id}` : null,
    fetcher
  )
  if (error) return <div>Failed to load student</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout>
      <Head>
        <title>Student homepage</title>
      </Head>
      <h1>Welcome, {data.name}!</h1>
      <nav>
        <ul>
          <li>
            <Link
              href={{
                pathname: '/student/[id]/homeworks',
                query: { id: data.id }
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
