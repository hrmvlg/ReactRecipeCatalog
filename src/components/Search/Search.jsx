import { useState } from "react"

export default function Search({ cb = Function.prototype }) {

    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        cb(value);
    }

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="search"
                    id="search-field"
                    placeholder="search"
                    onKeyDown={handleKey}
                    onChange={(e) => { setValue(e.target.value) }}
                    value={value}
                />
                <button
                    className="waves-effect waves-light btn orange darken-4 search__button"
                    onClick={handleSubmit}
                >Search</button>
            </div>
        </div>
    )
}