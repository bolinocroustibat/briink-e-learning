import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'
import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

export default function StudentIndex () {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `/api/students/${router.query.id}` : null,
    fetcher
  )
  if (error) return <div>Failed to load student</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>Student homepage</title>
      </Head>
      <h1 className={styles.title}>Welcome, {data.name}!</h1>
      <p>What do you want to do?</p>
      <ul>
        <li>
          <Link
            href={{
              pathname: '/student/[id]/submit-homework',
              query: { id: data.id }
            }}
          >
            <a>Submit a homework</a>
          </Link>
        </li>
      </ul>
    </>
  )
}
