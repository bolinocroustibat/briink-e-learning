import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'

import styles from '../../styles/Home.module.css'

export default function ViewScores () {
  return (
    <Layout>
      <Head>
        <title>View scores</title>
      </Head>
      <h1 className={styles.title}>View your student&apos;s scores</h1>
      <nav>
        <Link href='/'>
          <a>Back to teacher&apos;s home</a>
        </Link>
      </nav>
    </Layout>
  )
}
