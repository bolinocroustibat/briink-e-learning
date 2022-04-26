import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function SubmitHomework() {
    return (
      <>
      <Head>
        <title>Submit homework</title>
      </Head>
        <h1 className={styles.title}>Submit your homework here</h1>
        <form method="post" action="/api/student//homework" enctype="multipart/form-data">...</form>
        <h2>
          <Link href='/'>
            <a>Back to student's home</a>
          </Link>
        </h2>
      </>
    )
}
