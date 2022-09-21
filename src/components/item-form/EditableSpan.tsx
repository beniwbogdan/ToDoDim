import React, { useState, ChangeEvent } from 'react'
type EditableSpanType = {
    title: string,
    editMode: boolean,
    onChange: (newValue: string) => void
}
function EditableSpan(props: EditableSpanType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState("");

    let activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title);
    }
    let activateViewMode = () => {
        setEditMode(false)
        props.onChange(title)
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    return (
        <div>
            {
                editMode
                    ? <input
                        onBlur={activateViewMode}
                        onChange={onChangeTitleHandler}
                        autoFocus type="text"
                        value={title} />
                    : <span
                        onDoubleClick={activateEditMode}
                    >{props.title}</span>
            }
        </div>



    );

}

export default EditableSpan