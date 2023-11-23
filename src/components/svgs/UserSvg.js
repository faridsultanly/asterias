import React, { Component } from 'react'

export class UserSvg extends Component {
  render() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.5 16.667c1.946-2.065 4.59-3.334 7.5-3.334s5.553 1.27 7.5 3.334M13.75 6.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    )
  }
}

export default UserSvg