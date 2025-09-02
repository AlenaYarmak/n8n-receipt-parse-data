import { useState } from 'react'

const ReceiptForm = () => {

    const [file, setFile] = useState(null);
    const [notification, setNotification] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setNotification("⚠️ Please upload a receipt first.");
        } else {
            setNotification("✅ Receipt submitted successfully!");
        }
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        await fetch("https://n8n.us2h.com/webhook-test/check-upload", {
            method: "POST",
            body: formData,
        });
    };
    return (
        <div className="upload-page">

            {notification && <div className="notification">{notification}</div>}

            <form onSubmit={handleSubmit} className="upload-form">
                <label className="dropzone">
                    <div className="dropzone-content">
                        <span className="dropzone-icon">📷</span>
                        <p>{file ? file.name : "Upload receipt photo"}</p>
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </label>
                <button type="submit" className="submit-btn">
                    Send
                </button>
            </form>
        </div>
    )
}

export default ReceiptForm