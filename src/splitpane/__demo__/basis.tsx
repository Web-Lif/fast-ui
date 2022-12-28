/**
 * title: 分割面板
 * description: 可简单的对页面进行分割布局
 */
import { Button, SplitPane, Tree } from '@weblif/fast-ui'
import { useEffect, useState } from 'react'

const mockTreeData = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true,
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                    },
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [
                    {
                        title: <span style={{ color: '#1890ff' }}>sss</span>,
                        key: '0-0-1-0',
                    },
                ],
            },
        ],
    },
]

export default () => {
    const [treeData, setTreeData] = useState<any[]>([])
    useEffect(() => {
        setTreeData(mockTreeData)
    }, [])

    return (
        <SplitPane
            style={{
                height: 600,
            }}
            title="Tree"
            contentTitle="简介信息"
            extra={
                <>
                    <Button type="link"> 点击查询</Button>
                </>
            }
            leftReactNode={
                <Tree
                    checkable
                    defaultExpandedKeys={['0-0']}
                    treeData={treeData}
                />
            }
        >
            《CLANNAD》（日语：クラナド）是日本游戏品牌Key制作的恋爱冒险游戏，于2004年4月28日在Windows平台发行。《CLANNAD》是继《Kanon》、《AIR》后，Key的第三部作品。本作后来被移植到PlayStation
            2、PlayStation Portable、Xbox 360、PlayStation 3、PlayStation
            Vita、PlayStation
            4和任天堂Switch平台。2019年10月，简体中文版本在Steam上发行。
            故事描写了少年少女的恋爱、友情、家庭之爱等主题，并因剧情被获得“催泪游戏”的称呼。因其剧情大部分发生于春季，《CLANNAD》亦被视为Key社季节组曲中的“春”。
            《CLANNAD》已被多次改编为其它媒体。ASCII Media Works、Flex
            Comix、富士见书房和JIVE已经出版了四部漫画改编作品。东映动画改编的动画电影于2007年9月上映。京都动画制作的电视动画分为两季，第一季《CLANNAD》，共23话，于2007年10月至2008年3月播出；第二季《CLANNAD
            ～AFTER
            STORY～》，共24话，在2008年10月至2009年3月播出；此外每季各有一部原创视频动画（OVA）。
            游戏开始时间是某年的4月14日。在某个小镇，主角冈崎朋也因为家庭的因素而丧失了生活在这个地方的希望；与春原阳平为朋友，在光坂高等学校过着潦倒的生活，盼望终有一天能够离开所在的小镇。在高三的一个早晨，通往学校的坡道前发现了一个止步不前的女孩，在朋也认识了这个名为“古河渚”的女孩后，他的生活开始有了重大的变化。
            校园篇为主角和女主角们之间所发生的事件，After
            story为主角在学校毕业之后，以及家庭生活，其中还关联著“幻想世界”，CLANNAD就是由这三个要素所组成的故事。
        </SplitPane>
    )
}
