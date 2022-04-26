import useSwr from 'swr'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSwr('/api/teacher', fetcher)

  if (error) return <div>Failed to load teachers</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link href="/student/[id]" as={`/teacher/${teacher.id}`}>
            <a>{`User ${teacher.id}`}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
