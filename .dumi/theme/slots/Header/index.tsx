import { css } from '@emotion/css'

import { GithubOutlined } from '@ant-design/icons'
import { Button, Col, Row, Tooltip } from 'antd'
import Logo from 'dumi/theme/slots/Logo'
import SearchBar from 'dumi/theme/slots/SearchBar'

const Header = () => {
    return (
        <header
            className={css`
                position: sticky;
                z-index: 10;
                max-width: 100%;
                background: #fff;
                top: 0px;

                box-shadow: 0 1px 2px 0 rgb(0 0 0 / 3%),
                    0 1px 6px -1px rgb(0 0 0 / 2%), 0 2px 4px 0 rgb(0 0 0 / 2%);
            `}
        >
            <Row
                className={css`
                    height: 64px;
                `}
            >
                <Col
                    className={css`
                        display: flex;
                        align-items: center;
                        padding-left: 2.5rem;
                    `}
                    xs={24}
                    sm={24}
                    md={6}
                    lg={6}
                    xl={5}
                    xxl={4}
                >
                    <Logo />
                </Col>
                <Col
                    className={css`
                        display: flex;
                        align-items: center;
                        padding-right: 2.5rem;
                        > div {
                            display: inline-block;
                        }
                    `}
                    xs={0}
                    sm={0}
                    md={18}
                    xl={19}
                    xxl={20}
                >
                    <div
                        className={css`
                            .dumi-default-search-bar {
                                border-inline-start: 1px solid
                                    rgba(0, 0, 0, 0.06);
                            }
                            .dumi-default-search-bar-input {
                                border: none;
                                height: 22px;
                                &:focus {
                                    border-color: unset;
                                    box-shadow: unset;
                                }
                            }
                        `}
                    >
                        <SearchBar />
                    </div>
                    <div
                        className={css`
                            flex: 1;
                        `}
                    />
                    <a
                        href="https://github.com/Web-Lif/fast-ui"
                        target="_blank"
                    >
                        <Tooltip title="Github">
                            <Button type="text" icon={<GithubOutlined />} />
                        </Tooltip>
                    </a>
                </Col>
            </Row>
        </header>
    )
}

export default Header
