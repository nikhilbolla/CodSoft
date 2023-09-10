import React from 'react'

export default function Button(props) {
  return (
    <div>
        {!! props.primary ?
        <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            {props.children}
        </button>
        :
        <button type="button" class="text-slate-900 bg-white border border-slate-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            {props.children}
        </button>
        }
    </div>
  )
}
