import { css, injectGlobal } from '@emotion/css'
import { Col, Row, Typography } from 'antd'
import { useLocation } from 'dumi'

import GlobalStyles from '../../common/GlobalStyles'
import Content from '../../slots/Content'
import Header from '../../slots/Header'
import Sidebar from '../../slots/Sidebar'

injectGlobal`
    body {
        margin: 0px;
    }
`

const DocLayout = () => {
    const location = useLocation()

    let content = null

    if (location.pathname === '/') {
        content = (
            <>
                <div
                    className={css`
                        padding: 5rem 0px 7rem 0px;
                        background-color: #f5f6f8;
                    `}
                >
                    <Typography.Title
                        className={css`
                            text-align: center;
                        `}
                    >
                        Fast UI
                    </Typography.Title>
                    <div
                        className={css`
                            text-align: center;
                            font-size: medium;
                        `}
                    >
                        企业级的UI组件库,提供高级便捷的组件库,
                        让使用起来更加舒适和轻松
                    </div>
                </div>
                <main
                    className={css`
                        margin: 0px 20rem;
                    `}
                >
                    <Content />
                </main>
            </>
        )
    } else {
        content = (
            <main
                className={css`
                    margin-top: 2rem;
                `}
            >
                <Row>
                    <Col
                        xs={0}
                        sm={0}
                        md={6}
                        lg={6}
                        xl={5}
                        xxl={4}
                        className={css`
                            position: sticky;
                            top: 0px;
                            height: 100vh;
                            overflow: hidden;
                            &:hover {
                                overflow: auto;
                            }
                        `}
                    >
                        <Sidebar />
                    </Col>
                    <Col xs={24} sm={24} md={18} xl={19} xxl={20}>
                        <Content />
                    </Col>
                </Row>
            </main>
        )
    }

    return (
        <>
            <Header />
            {content}
            <GlobalStyles />
        </>
    )
}

export default DocLayout
