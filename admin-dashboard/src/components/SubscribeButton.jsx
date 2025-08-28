import { useState } from 'react'

export default function SubscribeButton() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <button
      onClick={() => setSubscribed(!subscribed)}
      className={`btn ${
        subscribed
          ? 'bg-green-600 text-white border-transparent hover:bg-green-700'
          : 'bg-brand-600 text-white border-transparent hover:bg-brand-700'
      }`}
    >
      {subscribed ? 'Subscribed' : 'Subscribe'}
    </button>
  )
}
