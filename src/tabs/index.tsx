import { css, cx } from '@emotion/css'
import AntTabs, { TabsProps } from 'antd/es/tabs'

const InternalTabs = ({ className, ...restProps }: TabsProps) => {
    return (
        <AntTabs
            className={cx({
                [className || '']: typeof className === 'string',
                [css`
                    height: 100%;
                `]: true,
            })}
            {...restProps}
        />
    )
}

type InternalTabsType = typeof InternalTabs

interface TabsInterface extends InternalTabsType {
    TabPane: typeof AntTabs.TabPane
}

const Tabs = InternalTabs as TabsInterface
Tabs.TabPane = AntTabs.TabPane

export default Tabs
