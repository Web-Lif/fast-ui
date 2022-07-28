import React from 'react'
import { Timeline, Typography } from '@weblif/fast-ui'
import ReactMarkdown from 'react-markdown'

const analyzeChangeLogMD = (text: string) => {
    const rows = text.split('\n')
    const result: string[] = []

    let content: string | null = null
    for (let i = 0; i < rows.length; i += 1) {
        if (/\s*##.*/.test(rows[i])) {
            if (content !== null) {
                result.push(content)
            }
            content = `${rows[i]}`
        }

        if (content !== null) {
            content += `\n${rows[i]}`
        }
    }

    if (content !== null) {
        result.push(content)
    }
    return result
}

const ChangeLog = () => {
    const txt: string = _WEBPACK$DEFINE$CHANGELOG

    const changelog = analyzeChangeLogMD(txt)

    const renderChangeLog = () => {
        return changelog.map((log, index) => (
            <Timeline.Item key={index}>
                <ReactMarkdown className="markdown">{log}</ReactMarkdown>
            </Timeline.Item>
        ))
    }

    return (
        <>
            <Timeline
                style={{
                    marginTop: '3rem',
                    marginLeft: 13,
                }}
            >
                {renderChangeLog()}
            </Timeline>
        </>
    )
}

export default ChangeLog
