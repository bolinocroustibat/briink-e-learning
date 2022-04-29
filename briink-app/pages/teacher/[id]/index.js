import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())


export default function TeacherIndex () {

  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `/api/teachers/${router.query.id}` : null,
    fetcher
  )
  if (error) return <div>Failed to load teacher</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>Teacher homepage</title>
      </Head>
      <h1 className={styles.title}>Welcome, {data.name}!</h1>
      <h2>
        {' '}
        Read{' '}
        <Link href='/teacher/create-homework'>
          <a>Create a homework</a>
        </Link>
      </h2>
      <h2>
        {' '}
        Read{' '}
        <Link href='/teacher/view-score'>
          <a>Consult scores</a>
        </Link>
      </h2>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
