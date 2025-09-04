
# 🧾 Receipt Data Extraction Workflow (n8n + OpenAI + Google Sheets)

This project demonstrates an automated workflow for extracting structured data from a receipt photo and saving it into a Google Sheet for further analysis and manipulation.

The workflow leverages n8n, OpenAI, and Google Sheets to provide a simple, efficient, and reproducible process.

---

## 🚀 How It Works

1. Trigger (Image Upload)
- A receipt photo is uploaded through a simple frontend form (or can be tested via Postman).
- This upload triggers the n8n workflow.
2. Data Extraction with OpenAI
- The image is passed to the OpenAI API via the HTTP Request node.
- OpenAI processes the receipt and returns data in a structured, object-like string format.
3. Data Transformation
- The response string is parsed into a proper JSON object.
- Receipt metadata (e.g., uploaded file name) is merged with extracted data.
4. Data Storage
- Final structured data is saved directly into a Google Sheet, enabling easy access, filtering, and manipulation.

---

## 🔄 Workflow Overview

- **Input**: Receipt photo (via form or Postman)
![Alt Text](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExamtuczk3bHp2cTg0cGIzN3U1bHBrMGdyNXBlMHU0b3cyYmh4d3psMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5ZESByWV9MMz7nvpUC/giphy.gif)
- **Processing**: OpenAI API extracts receipt details
![Alt Text](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW43Z3h1MHI0djN5bXdxbGo2MTRmcXB6cnppbGwzZzRueGE4MXBnMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iVg4h9gkt2Xu9AsygT/giphy.gif)
- **Output**: Structured data + photo name stored in Google Sheets
![Alt Text](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDdrOTY3NnUxeW9kaHY4ZWI3eHI3ZWp4OXpnc2J4N3RnMjF0M21zaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ZAGD0kxybd1zvj3tD/giphy.gif)



---

## 🛠️ Tech Stack

- **n8n** - Workflow automation platform
- **OpenAI API** - AI-powered text extraction
- **Google Sheet** - Data storage and management
- **Frontend Form / Postman** - Trigger for workflow execution

---

## 📸 Example Use Case

- Upload a receipt photo (e.g., restaurant, store purchase).
- Workflow extracts:

```
{
  "fileName": "DCIM101",
  "amount": "104.6",
  "date": "24-05-25"
}
```

- Data is saved in Google Sheets for expense tracking or accounting.

---

## 📖 Notes

- The workflow is fully customizable—modify the prompt to extract additional receipt details.

- Use filters and formulas inside Google Sheets to further analyze extracted data.

--- 

## 🌟 Why This Matters

This workflow turns unstructured receipt images into structured, usable data—helping automate expense tracking, financial reporting, and digital record-keeping.