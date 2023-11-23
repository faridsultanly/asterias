import React, { Component } from 'react'

export class FacebookSvg extends Component {
  render() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={48}
            height={48}
            fill="none"
        >
            <path
            fill="#2D3748"
            d="M25.938 16.5a3.854 3.854 0 0 0-3.854 3.854V22.5H20.02a.187.187 0 0 0-.188.188v2.833c0 .103.084.187.188.187h2.063v5.813c0 .103.083.187.187.187h2.833a.187.187 0 0 0 .188-.187v-5.813h2.08a.188.188 0 0 0 .183-.142l.708-2.833a.187.187 0 0 0-.182-.233h-2.79v-2.146a.646.646 0 0 1 .647-.646h2.166a.187.187 0 0 0 .188-.187v-2.834a.187.187 0 0 0-.188-.187h-2.166Z"
            />
            <rect width={47} height={47} x={0.5} y={0.5} stroke="#87DEE6" rx={23.5} />
        </svg>
    )
  }
}

export default FacebookSvg