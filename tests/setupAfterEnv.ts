import { toHaveNoViolations } from 'jest-axe'
import format, { plugins } from 'pretty-format'

function formatHTML(nodes: any) {
    const htmlContent = format(nodes, {
        plugins: [plugins.DOMCollection, plugins.DOMElement],
    })

    const filtered = htmlContent
        .split(/[\n\r]+/)
        .filter((line) => line.trim())
        .map((line) => line.replace(/\s+$/, ''))
        .join('\n')

    return filtered
}

expect.addSnapshotSerializer({
    test: (element) =>
        typeof HTMLElement !== 'undefined' &&
        (element instanceof HTMLElement ||
            element instanceof DocumentFragment ||
            element instanceof HTMLCollection ||
            (Array.isArray(element) && element[0] instanceof HTMLElement)),
    print: (element) => formatHTML(element),
})

expect.extend(toHaveNoViolations)
