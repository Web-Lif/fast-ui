import { css, injectGlobal } from '@emotion/css'
import { Col, Row } from 'antd'

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
    return (
        <>
            <Header />
            <main
                className={css`
                    margin-top: 2rem;
                `}
            >
                <Row>
                    <Col xs={0} sm={0} md={6} lg={6} xl={5} xxl={4}>
                        <Sidebar />
                    </Col>
                    <Col xs={24} sm={24} md={18} xl={19} xxl={20}>
                        <Content />
                    </Col>
                </Row>
            </main>
            <GlobalStyles />
        </>
    )
}

export default DocLayout
