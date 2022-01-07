interface ClassNamesParam {
    [name: string]: boolean;
}

export const classNames = (param: ClassNamesParam) => {
    let names = '';
    Object.keys(param).forEach((className) => {
        if (param[className] === true) {
            names += ` ${className}`;
        }
    });
    return names;
};
