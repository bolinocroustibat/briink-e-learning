import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Briink e-learning app</title>
        <meta name='description' content='Briink e-learning application' />
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <meta name='color-scheme' content='dark' />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Briink e-learning application
        </h1>

        <div className={styles.grid}>
          <a href='students' className={styles.card}>
            <h2>Student &rarr;</h2>
            <p>I&apos;m a student</p>
          </a>

          <a href='teachers' className={styles.card}>
            <h2>Teacher &rarr;</h2>
            <p>I&apos;m a teacher</p>
          </a>
        </div>
      </main>
    </div>
  )
}
