import { useCallback, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css"; // Import styles
import ReactQuill from "react-quill";
import UploadImageAPI from "../../../../../../api/uploadImageAPI";

const ReactQuillTest = () => {
  const [value, setValue] = useState<string>("");
  const quillRef = useRef<ReactQuill>(null);

  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      if (input !== null && input.files !== null) {
        const file = input.files[0];
        const formData = new FormData();
        formData.append("image", file);
        const url = await UploadImageAPI.UploadSingleImage(formData);
        const quill = quillRef.current;
        if (quill) {
          const range = quill.getEditorSelection();
          console.log("Current range:", range);
          range && quill.getEditor().insertEmbed(range.index, "image", url.data);
        }
      }
    };
  }, []);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
      handlers: {
        image: imageHandler, // Thay thế hành động mặc định của nút image
      },
    },
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <div>
      <ReactQuill
        theme="snow" // Chọn theme (snow hoặc bubble)
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        ref={quillRef}
      />
      <p>{value}</p>
    </div>
  );
};

export default ReactQuillTest;
