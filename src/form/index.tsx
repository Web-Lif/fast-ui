import React, { FC, ReactElement } from 'react';
import {
    FormProps as AntFormProps,
    Form as AntForm,
    FormItemProps as AntFormItemProps,
    Row
} from 'antd';
import { classNames } from '../utils/css';
import './styles/index.less';

interface FormProps extends AntFormProps {
    cols?: number;
}

const InternalForm: FC<FormProps> = ({ cols, ...restProps }) => {
    const { children } = restProps;
    /** 采用 Form 的方式进行布局 */
    if (cols && cols > 0 && children instanceof Array) {
        const rows: ReactElement[] = [];
        let cell: ReactElement[] = [];

        let before: number = 0
        children.forEach((element, index) => {
            debugger
            const { colSpan, rowSpan, br } = element.props;
            const { key } = element

            before +=  (colSpan || 0) + 1

            cell.push(
                <td key={`td-${key}-${index}`} colSpan={colSpan} rowSpan={rowSpan}>
                    {element}
                </td>,
            );

            const remainder = before % cols
            if (br) {
                before += cols - remainder
                cell.push(
                    <td key={`td-${key}-${index}-br`} colSpan={cols - remainder}>
                    </td>
                )
            }

            if (
                before >= cols
            ) {
                rows.push(<tr key={`tr-${key}-${index}`}>{cell}</tr>);
                cell = [];
                before = 0;
            }
        });

        const lastKey = children[children.length - 1].key;
        rows.push(<tr key={`tr-${lastKey}`}>{cell}</tr>);
        return (
            <AntForm {...restProps}>
                <table
                    className={classNames({
                        'fu-form': true,
                    })}
                >
                    <tbody>{rows}</tbody>
                </table>
            </AntForm>
        );
    }

    /** 采用默认的 antd 方式 */
    return <AntForm {...restProps} />;
};

interface FormItemProps extends AntFormItemProps {
    colSpan?: number;
    rowSpan?: number;
    br?: boolean;
}

const FormItem: FC<FormItemProps> = (props) => {
    return <AntForm.Item {...props} />;
};

type InternalFormType = typeof InternalForm;

interface FormInterface extends InternalFormType {
    useForm: typeof AntForm.useForm;
    Item: typeof FormItem;
    List: typeof AntForm.List;
    ErrorList: typeof AntForm.ErrorList;
    Provider: typeof AntForm.Provider;
}

const Form = InternalForm as FormInterface;

Form.useForm = AntForm.useForm;
Form.Item = FormItem;
Form.List = AntForm.List;
Form.ErrorList = AntForm.ErrorList;
Form.Provider = AntForm.Provider;

export default Form;
