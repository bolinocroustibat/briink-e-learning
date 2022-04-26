export default function studentHomeworkHandler (req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    const body = req.body

    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.first || !body.last) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'First or last name not found' })
    }

    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.first} ${body.last}` })
  } else {
    // Handle any other HTTP method
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
  }
}
