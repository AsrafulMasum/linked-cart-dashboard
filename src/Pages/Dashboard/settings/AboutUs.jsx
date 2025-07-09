import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import { Button } from "antd";
import toast from "react-hot-toast";
import {
  useGetAboutUsQuery,
  useUpdateAboutUsMutation,
} from "../../../redux/features/rulesApi";

const AboutUs = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const { data: aboutUs, refetch } = useGetAboutUsQuery({});
  const [updateAboutUs, { isLoading }] = useUpdateAboutUsMutation();

  const aboutDataSave = async () => {
    const data = {
      content: content,
    };
    try {
      await updateAboutUs(data)
        .unwrap()
        .then(({ success, message }) => {
          if (success) {
            toast.success(message);
            refetch();
          }
        });
    } catch (error) {
      toast.error(error?.data?.message || "Something Wrong");
    }
  };

  useEffect(() => {
    setContent(aboutUs?.data?.content);
  }, [aboutUs]);

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
      <Button
        onClick={aboutDataSave}
        block
        style={{
          marginTop: "60px",
          backgroundColor: "#0F665A",
          border: "none",
          color: "#fff",
          height: "60px",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        {" "}
        {isLoading ? "Updating..." : "Save"}
      </Button>
    </div>
  );
};

export default AboutUs;
