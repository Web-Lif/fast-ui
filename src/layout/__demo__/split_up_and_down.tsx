/**
 * title: 上下切割
 * description: 简单的上下切割的例子
 */
import { Layout } from '@weblif/fast-ui'

const Simple = () => (
    <Layout.Fixed height={500}>
        <Layout.Fill
            style={{
                backgroundColor: '#108ee9',
            }}
        />
        <Layout.BottomResizable
            size="40%"
            maximumSize={200}
            style={{
                backgroundColor: '#7dbcea',
            }}
        />
    </Layout.Fixed>
)

export default Simple
