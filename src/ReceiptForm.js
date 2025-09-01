import { useState } from 'react'

const ReceiptForm = () => {

    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        await fetch("https://n8n.us2h.com/webhook-test/check-upload", {
            method: "POST",
            body: formData,
        });
    };
    return (
        <form onSubmit={handleSubmit} className="upload-form">
            <label>
                Upload receipt
                <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
                />
            </label>
            <button type="submit">Send</button>
        </form>
    )
}

export default ReceiptForm