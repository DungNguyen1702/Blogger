import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the desired theme
import "./index.scss";
import CustomButton from "../../../../components/button/custom-button";
import CustomInput from "../../../../components/input/custom-input";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { Select } from "antd";
import ColorSystem from "../../../../constants/colors";
const DocumentDrafting = () => {
  const [title, setTitle] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [backgroundImageName, setBackgroundImageName] = useState("No file chosen");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(null);

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

  const handleRemoveBackgroundImage = () => {
    setBackgroundImage("");
    setBackgroundImageName("No file chosen");
  };
  const handleContentChange = (value: any) => {
    setContent(value);
  };

  const handleCategoryChange = (value : any) => {
    setCategory(value);
  };

  const handleSubmit = () => {
    console.log("Submitted Content:", { title, backgroundImage, content, category });
    };
    const handleClickButtonImage = () => {
        document.getElementById('backgroundImage')?.click()
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
            <CustomInput
                id="title"
                value={title}
                handleOnChange={handleTitleChange}
                placeholderText="Title"/>
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
              <CustomButton
                  handleButton={handleClickButtonImage}
                  content={
                      <div className="green-button-content">
                          <FormOutlined />
                          Upload background Image
                      </div>
                  }
            />
            <span className="background-image-name">{backgroundImageName}</span>
            <CustomButton
              handleButton={handleRemoveBackgroundImage}
              borderColor = {ColorSystem.danger}
              content={
                <div className="red-button-content">
                  <DeleteOutlined />
                  Remove Image
                </div>
              }
              backgroundColor={ColorSystem.white}
              cssClassCustom="remove-button"
              contentColor={ColorSystem.danger}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <Select
            id="category" 
            value={category}
            onChange={handleCategoryChange}
            style={{ width: "100%", color: ColorSystem.listPostFreshGreen }}
          >
            <Select.Option value="">Select Category</Select.Option>
            <Select.Option value="technology">Technology</Select.Option>
            <Select.Option value="health">Health</Select.Option>
            <Select.Option value="finance">Finance</Select.Option>
            <Select.Option value="education">Education</Select.Option>
          </Select>

        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            modules={modules}
            formats={formats}
            theme="snow"
            style={{ minHeight: "300px" }}
          />
              </div>
              <CustomButton
                  onClick={handleSubmit}
                  content="Save post"
              />
      </div>
      <div
        className="preview-container"
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat'
          }}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <p><strong></strong> {category}</p>
      </div>
    </div>
  );
};

export default DocumentDrafting;