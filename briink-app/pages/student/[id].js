import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())


export default function StudentIndex () {

  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `/api/student/${router.query.id}` : null,
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
      <h2>
        {' '}
        Read{' '}
        <Link href='/api/student/submit-homework'>
          <a>Submit a homework</a>
        </Link>
      </h2>
    </>
  )
}
