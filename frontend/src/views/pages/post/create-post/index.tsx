import { useState, useRef, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the desired theme
import "./index.scss";
import CustomButton from "../../../../components/button/custom-button";
import CustomInput from "../../../../components/input/custom-input";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { Select } from "antd";
import ColorSystem from "../../../../constants/colors";
import PostCreateModel from "../../../../model/request/PostCreate";
import PostAPI from "../../../../api/postAPI";
import UploadImageToCloudinary from "../../../../utils/UploadImageToCloudinary";

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

 const quillRef = useRef<ReactQuill | null>(null);

  
  const imageHandler = useCallback( async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        try {
          const imageResponse = await UploadImageToCloudinary(file); // URL của hình ảnh
          console.log("Image response url:", imageResponse.data);
          const quill = quillRef.current?.getEditor();
          if (quill) {
            const range = quill.getSelection(true);
            quill.insertEmbed(range?.index || 0, "image", imageResponse.data, 'user');
          }
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }
    };
  }, []);
  //   const imageHandler = useCallback(() => {
  //   const input = document.createElement("input");
  //   input.setAttribute("type", "file");
  //   input.setAttribute("accept", "image/*");
  //   input.click();
  //   input.onchange = async () => {
  //     if (input !== null && input.files !== null) {
  //       const file = input.files[0];
  //       const image = await UploadImageToCloudinary(file);
  //       const url = image.data;
  //       const quill = quillRef.current;
  //       if (quill) {
  //         const range = quill.getEditorSelection();
  //         console.log("Current range:", range);
  //         range && quill.getEditor().insertEmbed(range.index, "image", url);
  //       }
  //     }
  //   };
  // }, []);
  const handleSubmit = () => {
    console.log("Submitted Content:", { title, backgroundImage, content, category });
    const post = new PostCreateModel("", title, content, "", category);
    PostAPI.createPost(post);
  };
  const handleClickButtonImage = () => {
    document.getElementById('backgroundImage')?.click()
  };

  const modules = {
    toolbar: {
      container: [
        [{ font: ['arial', 'comic-sans', 'courier-new', 'georgia', 'helvetica', 'lucida'] }],
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        [{ align: [] }],
        [{ color: [] }],
                ["block-code"],
        ["clean"]
      ],
      handlers: {
        image: imageHandler
      },
      clipboard: {
          matchVisual: false,
      },
  }
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
            <Select.Option value="1">Technology</Select.Option>
            <Select.Option value="2">Health</Select.Option>
            <Select.Option value="3">Finance</Select.Option>
            <Select.Option value="4">Education</Select.Option>
          </Select>

        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <ReactQuill
            ref={quillRef}
            value={content}
            onChange={handleContentChange}
            modules={modules}
            formats={formats}
            theme="snow"
            style={{ minHeight: "300px" }}
          />
              </div>
              <CustomButton
                  handleButton={handleSubmit}
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
        {/* <p><strong></strong> {category}</p> */}
      </div>
    </div>
  );
};

export default DocumentDrafting;