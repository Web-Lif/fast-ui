import React, { FC, ReactElement } from 'react'
import { FormProps as AntFormProps, Form as AntForm, FormItemProps as AntFormItemProps} from 'antd'
import './styles/index.less'

interface FormProps extends AntFormProps {
    cols?: number
}

const InternalForm: FC<FormProps> = ({
    cols,
    ...restProps
}) => {

    const { children } = restProps
    /** 采用 Form 的方式进行布局 */
    if (cols && cols > 0 && children instanceof Array) {
        const rows: ReactElement[] = []
        let cell: ReactElement[] = []
        children.forEach((element, index) => {
            const { colSpan, rowSpan } = element.props
            cell.push(
                <td
                    colSpan={colSpan}
                    rowSpan={rowSpan}
                >
                    {element}
                </td>
            )
            if ((index + 1) % cols === 0) {
                rows.push(
                    <tr>
                        {cell}
                    </tr>
                )
                cell = []
            }
        })
        rows.push(
            <tr>
                {cell}
            </tr>
        )
        return (
            <AntForm {...restProps}>
                <table
                    className="fu-form"
                >
                    {rows}
                </table>
            </AntForm>

        )
    }

    /** 采用默认的 antd 方式 */
    return <AntForm {...restProps} />
}

interface FormItemProps extends AntFormItemProps {
    colSpan?: number
    rowSpan?: number
}

const FormItem: FC<FormItemProps> = (props) => {
    return <AntForm.Item {...props} />
}

type InternalFormType = typeof InternalForm;

interface FormInterface extends InternalFormType {
    useForm: typeof AntForm.useForm;
    Item: typeof FormItem;
    List: typeof AntForm.List;
    ErrorList: typeof AntForm.ErrorList;
    Provider: typeof AntForm.Provider;
}

const Form = InternalForm as FormInterface;

Form.useForm = AntForm.useForm
Form.Item = FormItem
Form.List = AntForm.List
Form.ErrorList = AntForm.ErrorList
Form.Provider = AntForm.Provider

export default Form