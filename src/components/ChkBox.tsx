import React from "react";
import CheckBox from "rc-checkbox";


interface Props {
    name?: String,
    className?: String,
    checked?: boolean,
    defaultChecked?: boolean,
    value: String,
    //React.FormEvent<HTMLOptionElement>) => void) | undefined
    onChange?: (event: MouseEvent) => void,
    onBlur?: (event: MouseEvent) => void,
    onFocus?: (event: MouseEvent) => void,
     //style: {},
};

const ChkBox : React.FC<Props> = (props : any) => {
    return (
        <div>

            <CheckBox
                name={props.name}
                className={props.className}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                style={props.style}
                defaultChecked={props.defaultChecked}
            />
            {props.value}
        </div>
    );
}

ChkBox.defaultProps = {
    name: "Empty Prop Name",
    className: "ChkBox",
    checked: false,
    defaultChecked: false,
    value: "Empty Prop value",
    onChange: (event: MouseEvent) => { },
    onBlur: (event: MouseEvent) => { },
    onFocus: (event: MouseEvent) => { },
    //style: {},
};

export default ChkBox;
