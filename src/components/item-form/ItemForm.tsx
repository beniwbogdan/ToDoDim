import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { IconButton, TextField } from '@mui/material';
export type AddItemFormPropsType = {
    addItem: (title: string) => void,
}

function ItemForm(props: AddItemFormPropsType) {

    const [title, setTitle] = useState("");
    const [error, setError] = useState<string | null>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const onKeyPressHundler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if ((e.ctrlKey && e.charCode) || (e.charCode) === 13) { addTask(); } else { return true }
    }

    const addTask = () => {
        if (title.trim() !== "") {
            props.addItem(title.trim());
            setTitle("");
            setError(null);
        } else {
            setError("Title is required");
        }
    }


    return (


        <div>
            <TextField
                type="text"
                variant="standard"
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHundler}
                label="Enter..."
                error={!!error}
                helperText={error}
            />
            <IconButton onClick={addTask} color="success">
                <PlaylistAddIcon />
            </IconButton>
        </div>
    )
}

export default ItemForm