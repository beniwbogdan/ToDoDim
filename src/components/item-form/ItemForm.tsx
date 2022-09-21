import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
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
            <input
                type="text"
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHundler}
                placeholder="Enter..."
                className={error ? "error" : ""}
            />

            <button onClick={addTask}>+</button>

            <div>
                {
                    error && <div className="error-message">{error}</div>
                }
            </div>
        </div>
    )
}

export default ItemForm