import { ReactNode } from 'react'
import AntDropdown, { DropDownProps } from 'antd/es/dropdown'

interface InternalDropdownProps extends DropDownProps {
    children?: ReactNode
}

const InternalDropdown = (props: InternalDropdownProps) => {
    return <AntDropdown {...props} />
}

type InternalDropdownType = typeof InternalDropdown

interface DropdownInterface extends InternalDropdownType {
    Button: typeof AntDropdown.Button
}

const Dropdown = InternalDropdown as DropdownInterface
Dropdown.Button = AntDropdown.Button

export default Dropdown
