interface TextInputProps {
    id: string;
    label: string;
}

export default function TextInput({id, label}: TextInputProps) {
    return (
        <div className="text-input">
            <p className="title">{label}</p>
            <div className="input-container">
                <input type="text" name={id} id = {id} placeholder=" " required />
            </div>
        </div>
    )
}