import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function ViewScores () {
  return (
    <>
      <Head>
        <title>View scores</title>
      </Head>
      <h1 className={styles.title}>View your student&apos;s scores</h1>
      <h2>
        <Link href='/'>
          <a>Back to teacher&apos;s home</a>
        </Link>
      </h2>
    </>
  )
}
