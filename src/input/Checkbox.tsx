import React, { FC, useMemo } from 'react';
import { Checkbox as AntCheckbox, CheckboxProps as AntCheckboxProps } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface CheckboxProps extends Omit<AntCheckboxProps, 'value' | 'checked' | 'onChange'> {
    value?: boolean;
    onChange?: (value: boolean, event: CheckboxChangeEvent) => void;
}

const InternalCheckbox: FC<CheckboxProps> = ({ value, onChange, ...restProps }) => {
    const props = useMemo(() => {
        if (value) {
            return {
                checked: value,
                ...restProps,
            }
        }
        return restProps
    }, [value])

    return (
        <AntCheckbox
            onChange={(e) => {
                onChange?.(e.target.checked, e);
            }}

            {...props}
        />
    );
};

type InternalCheckboxType = typeof InternalCheckbox;

interface CheckboxInterface extends InternalCheckboxType {
    Group: typeof AntCheckbox.Group;
}

const Checkbox = InternalCheckbox as CheckboxInterface;

Checkbox.Group = AntCheckbox.Group;

export default Checkbox;
