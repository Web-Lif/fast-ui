/**
 * title: 基础
 * description: 典型的页面布局。
 */
import { Layout } from '@weblif/fast-ui'

const Simple = () => (
    <Layout.Fixed height={500}>
        <Layout.Fill>
            <Layout.Left
                style={{
                    backgroundColor: '#3ba0e9',
                }}
                size="20%"
            />
            <Layout.Fill
                style={{
                    backgroundColor: '#108ee9',
                }}
            />
            <Layout.Right
                style={{
                    backgroundColor: '#3ba0e9',
                }}
                size="20%"
            />
        </Layout.Fill>
        <Layout.Top
            size={64}
            style={{
                backgroundColor: '#7dbcea',
            }}
        />
        <Layout.Bottom
            size={64}
            style={{
                backgroundColor: '#7dbcea',
            }}
        />
    </Layout.Fixed>
)

export default Simple
