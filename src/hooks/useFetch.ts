import { useEffect, useState } from 'react'

type UseGetStoriesResponse = {
  loading: boolean
  data: Story[] | null
  error: Error | null
}

export const useGetStories = (url: string): UseGetStoriesResponse => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    window
      .fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res)
        setLoading(false)
        setError(null)
      })
  }, [])

  return { loading, data, error }
}
