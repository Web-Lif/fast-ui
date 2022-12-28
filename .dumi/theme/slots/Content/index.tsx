import { css } from '@emotion/css'
import { useOutlet } from 'dumi'

const Content = () => {
    const outlet = useOutlet()

    return (
        <div
            className={css`
                margin-left: 2rem;
                margin-right: 2rem;
            `}
        >
            {outlet}
        </div>
    )
}

export default Content
