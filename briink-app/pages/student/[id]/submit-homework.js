import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'

export default function SubmitHomework () {
  return (
    <>
      <Head>
        <title>Submit homework</title>
      </Head>
      <h1 className={styles.title}>Submit your homework here</h1>
      <form action='/api/form' method='post'>
        <label htmlFor='first'>First Name</label>
        <input type='text' id='first' name='first' required />

        <label htmlFor='first'>Browse your files...</label>
        <input type='file' id='homeworkFile' required></input>

        <button type='submit'>Submit your homework</button>
      </form>
      <h2>
        <Link href='/'>
          <a>Back to student&apos;s home</a>
        </Link>
      </h2>
    </>
  )
}
