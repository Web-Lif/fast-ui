/**
 * title: 经典卡片
 * description: 包含标题、内容、操作区域。
 */
import { Card } from '@weblif/fast-ui'

export default () => {
    return (
        <>
            <div
                style={{
                    height: 400,
                    width: 500,
                }}
            >
                <Card title="Default size card" extra={<a href="#">More</a>}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        </>
    )
}
