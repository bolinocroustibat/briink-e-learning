import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Layout from '../../../components/layout'


export default function CreateHomework () {
  return (
    <Layout>
      <Head>
        <title>Create homework</title>
      </Head>
      <h1 className={styles.title}>Create homework</h1>
      <h2>
        <Link href='/'>
          <a>Back to teacher&apos;s home</a>
        </Link>
      </h2>
    </Layout>
  )
}
