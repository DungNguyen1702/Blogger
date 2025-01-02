import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the desired theme
import "./index.scss";

const DocumentDrafting = () => {
  const [title, setTitle] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [backgroundImageName, setBackgroundImageName] = useState("No file chosen");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBackgroundImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBackgroundImageName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContentChange = (value: any) => {
    setContent(value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted Content:", { title, backgroundImage, content, category });
  };

  const modules = {
    toolbar: [
      [{ font: ['arial', 'comic-sans', 'courier-new', 'georgia', 'helvetica', 'lucida'] }],
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["clean"]
    ]
  };

  const formats = [
    "font",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color"
  ];

  return (
    <div className="page-container">
      <div className="editor-container">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="backgroundImage">Background Image</label>
          <div className="file-input-container">
            <input
              type="file"
              id="backgroundImage"
              accept="image/*"
              onChange={handleBackgroundImageChange}
              style={{ display: 'none' }}
            />
            <button
              type="button"
              onClick={() => document.getElementById('backgroundImage')?.click()}
            >
              Upload Background Image
            </button>
            <span>{backgroundImageName}</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Select Category</option>
            <option value="technology">Technology</option>
            <option value="health">Health</option>
            <option value="finance">Finance</option>
            <option value="education">Education</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            modules={modules}
            formats={formats}
            theme="snow"
          />
        </div>
        <button onClick={handleSubmit}>Submit Draft</button>
      </div>
      <div className="preview-container">
        <h1>{title}</h1>
        {backgroundImage && <img src={backgroundImage} alt="Background" />}
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <p><strong>Category:</strong> {category}</p>
      </div>
    </div>
  );
};

export default DocumentDrafting;