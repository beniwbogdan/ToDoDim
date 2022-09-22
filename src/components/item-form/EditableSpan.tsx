import React, { useState, ChangeEvent } from 'react'
import Input from '@mui/material/Input';
import { Grid } from '@mui/material';

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
            <Grid>
                {
                    editMode
                        ? <Grid> <Input
                            onBlur={activateViewMode}
                            onChange={onChangeTitleHandler}
                            autoFocus type="text"
                            value={title} /></Grid>
                        : <Grid style={{ marginTop: "8px" }}><span
                            onDoubleClick={activateEditMode}
                        >{props.title}</span></Grid>
                }
            </Grid>
        </div>



    );

}

export default EditableSpan