import { css } from '@emotion/css'
import { Menu } from 'antd'
import { Link, useNavData } from 'dumi'
import useSiteToken from '../../../hooks/useSiteToken'

// ============================= Style =============================
const useStyle = () => {
    const { token } = useSiteToken()

    const {
        antCls,
        iconCls,
        fontFamily,
        headerHeight,
        menuItemBorder,
        colorPrimary,
    } = token

    return {
        nav: css`
            height: 100%;
            font-size: 14px;
            font-family: Avenir, ${fontFamily}, sans-serif;
            border: 0;

            &${antCls}-menu-horizontal {
                border-bottom: none;

                & > ${antCls}-menu-item, & > ${antCls}-menu-submenu {
                    min-width: (40px + 12px * 2);
                    height: ${headerHeight}px;
                    padding-right: 12px;
                    padding-left: 12px;
                    line-height: ${headerHeight}px;

                    &::after {
                        top: 0;
                        right: 12px;
                        bottom: auto;
                        left: 12px;
                        border-width: ${menuItemBorder}px;
                    }
                }

                & ${antCls}-menu-submenu-title ${iconCls} {
                    margin: 0;
                }

                & > ${antCls}-menu-item-selected {
                    a {
                        color: ${colorPrimary};
                    }
                }
            }

            & > ${antCls}-menu-item, & > ${antCls}-menu-submenu {
                text-align: center;
            }
        `,
    }
}

const Navbar = () => {
    const navs = useNavData()
    const style = useStyle()
    return (
        <Menu
            className={style.nav}
            mode="horizontal"
            items={navs.map((nav) => ({
                label: <Link to={nav.link}>{nav.title}</Link>,
                key: nav.order,
            }))}
        />
    )
}

export default Navbar
