import useSwr from 'swr'
import Link from 'next/link'

const fetcher = url => fetch(url).then(res => res.json())

export default function StudentsList () {
  const { data, error } = useSwr('/api/students', fetcher)

  if (error) return <div>Failed to load the list of students</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <h2>Which student are you?</h2>
      <ul>
        {data.map(student => (
          <li key={student.id}>
            I'm{' '}
            <Link href='/student/[id]' as={`/student/${student.id}`}>
              <a>{student.name}</a>
            </Link>
            .
          </li>
        ))}
      </ul>
    </>
  )
}
