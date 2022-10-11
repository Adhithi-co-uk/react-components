import React, { useState } from 'react';
import IconPicker from './components/IconPicker/IconPicker';

const IconPickerExample = () => {
    const [icon, seticon] = useState("fa fa-home");
    const onIconChange = (icon: string) => {
        seticon(icon);
    }
    return (
        <div style={{ margin: "16px", background: "#fafafa", padding: "16px", display: "inline-block", textAlign: "left" }}>
            <h2>Icon Picker</h2>
            <p>
                Icon picker is a component that allows you to select an icon from a list of icons.
                Please check the file IconPickerExample.tsx for the implementation.
            </p>
            <label>Choose Icon</label>
            <div>
                <IconPicker value={icon} onChange={onIconChange} />
            </div>

        </div>
    );
};

export default IconPickerExample;