import useSwr from 'swr'
import Layout from '../../../../components/layout'

const fetcherWithId = (url, id) =>
  fetch(`${url}?homeworkId=${id}`).then(res => res.json())

export default function ScoresComponent (props) {
  const endpoint = '/api/submitted-homeworks'
  const { data: submittedHomeworks, error } = useSwr(
    [endpoint, props.homeworkId],
    fetcherWithId
  )

  if (error) return <div>Failed to load the list of submitted homeworks</div>
  if (!submittedHomeworks) return <div>Loading...</div>

  function rewriteStatus (status) {
    switch (status) {
      case 'pendingScoring':
        return 'submitted, pending scoring'
      case 'scored':
        return 'score calculated!'
      default:
        return 'unknown'
    }
  }

  function getScoreList (submittedHomework) {
    if (submittedHomework.status == 'scored') {
      return submittedHomework.scores.map(score => {
        return (
          <ul>
            <li key={score.id}>
              {Object.keys(score)[0]}: {Object.values(score)[0]}
            </li>
          </ul>
        )
      })
    }
    return null
  }

  return (
    <Layout>
      <ul>
        {submittedHomeworks.map(submittedHomework => (
          <li key={submittedHomework.id}>
            <p>Student: {submittedHomework.student.name}</p>
            <p>Status: {rewriteStatus(submittedHomework.status)}</p>
            {getScoreList(submittedHomework)}
          </li>
        ))}
      </ul>
    </Layout>
  )
}
