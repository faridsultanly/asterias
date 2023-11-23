import React, { Component } from 'react'

export class InstagramSvg extends Component {
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
            d="M20.527 15.667a4.867 4.867 0 0 0-4.86 4.862v6.945c0 2.68 2.182 4.86 4.862 4.86h6.945c2.68 0 4.86-2.182 4.86-4.863v-6.944c0-2.68-2.182-4.86-4.863-4.86h-6.944Zm8.334 2.778a.695.695 0 1 1 0 1.39.695.695 0 0 1 0-1.39Zm-4.86 1.389A4.17 4.17 0 0 1 28.166 24 4.17 4.17 0 0 1 24 28.167 4.17 4.17 0 0 1 19.834 24 4.17 4.17 0 0 1 24 19.834Zm0 1.389a2.778 2.778 0 1 0 0 5.556 2.778 2.778 0 0 0 0-5.556Z"
            />
            <rect width={47} height={47} x={0.5} y={0.5} stroke="#87DEE6" rx={23.5} />
        </svg>
    )
  }
}

export default InstagramSvg