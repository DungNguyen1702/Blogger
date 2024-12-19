import { lazy, Suspense } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
// import './loadable-component.scss'

export const Loading = (
    <div className="animation-container">
        <LoadingOutlined />
    </div>
)

export const LoadableComponent = (func : any) => {
    const Component = lazy(func)

    return (props : any) => (
        <Suspense fallback={Loading}>
            <Component {...props} />
        </Suspense>
    )
}