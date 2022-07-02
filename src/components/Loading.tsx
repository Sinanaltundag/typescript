import React, { FunctionComponent } from 'react'

interface ILoadingProps {
    loading: boolean
    children: React.ReactNode
}

const Loading: FunctionComponent<ILoadingProps> = (props) => {
  return (
    <div>
        {props.loading ? <>Loading...</> : props.children}
    </div>
  )
}

export default Loading