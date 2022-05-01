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

  function buildScoreListForSubmittedHomework (submittedHomework) {
    if (submittedHomework.status == 'scored') {
      return (
        <ul>
          {submittedHomework.scores.map(score => {
            return (
              <li key={Object.keys(score)[0]}>
                {Object.keys(score)[0]}: {Object.values(score)[0]}
              </li>
            )
          })}
        </ul>
      )
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
            {buildScoreListForSubmittedHomework(submittedHomework)}
          </li>
        ))}
      </ul>
    </Layout>
  )
}
