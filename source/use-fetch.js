
import p__react from 'react'

const use_fetch = (url, options) => {
	const [response, set_response] = p__react.useState(null)
	const [error, set_error] = p__react.useState(null)
	const [loading, set_loading] = p__react.useState(false)
	p__react.useEffect(() => {
		const abort_controller = new AbortController()
		const signal = abort_controller.signal
		(async () => {
			set_loading(true)
			try {
				const response = await fetch(url, options)
				const json = await response.json()
				if (!signal.aborted) {
					set_response(json)
				}
			} catch (error) {
				if (!signal.aborted) {
					set_error(error)
				}
			} finally {
				if (!signal.aborted) {
					set_loading(false)
				}
			}
		})()
		return () => {
			abort_controller.abort()
		}
	}, [])
	return {
		response,
		error,
		loading,
	}
}

export default use_fetch
