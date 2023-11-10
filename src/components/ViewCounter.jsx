import { useState, useEffect } from 'react'

function ViewCounter() {
	const [viewCount, setViewCount] = useState(0)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				'https://1j48y3737l.execute-api.us-east-2.amazonaws.com/default'
			)
			const data = await response.json()
			setViewCount(data.count)
		}

		fetchData()
	}, [])

	return (
		<div className="mx-auto flex max-w-xs flex-col gap-y-4">
			<dt className="text-base leading-7 text-gray-600">Views</dt>
			<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
				{viewCount}
			</dd>
		</div>
	)
}

export default ViewCounter
