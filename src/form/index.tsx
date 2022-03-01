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
        children.forEach((element, index) => {
            const { colSpan, rowSpan, br } = element.props;
            const { key } = element
            let realIndex = index
            cell.push(
                <td key={`td-${key}`} colSpan={colSpan} rowSpan={rowSpan}>
                    {element}
                </td>,
            );

            const remainder = (index + 1) % cols
            if (br) {
                realIndex += cols - remainder
                cell.push(
                    <td key={`td-${key}-br`} colSpan={cols - remainder}>
                    </td>
                )
            }

            if ((realIndex + 1) % cols === 0) {
                rows.push(<tr key={`tr-${key}`}>{cell}</tr>);
                cell = [];
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
