import useSwr from 'swr'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function TeachersList() {
  const { data, error } = useSwr('/api/teachers', fetcher)

  if (error) return <div>Failed to load the list of teachers</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
    <h2>Which teacher are you?</h2>
    <ul>
      {data.map((teacher) => (
        <li key={teacher.id}>
          I'm  <Link href="/teacher/[id]" as={`/teacher/${teacher.id}`}>
            <a>{teacher.name}</a>
          </Link>.
        </li>
      ))}
    </ul>
    </>
  )
}
