import React, { Component } from 'react'

export class OptionSvg extends Component {
  render() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        fill="none"
      >
        <path
          fill="#171923"
          fillRule="evenodd"
          d="M6.72 9.22a.75.75 0 0 1 1.06 0l3.97 3.97 3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    )
  }
}

export default OptionSvg