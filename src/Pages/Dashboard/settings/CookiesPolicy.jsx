import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import { Button } from "antd";
import toast from "react-hot-toast";
import {
  useGetCookiesPolicyQuery,
  useUpdateCookiesPolicyMutation,
} from "../../../redux/features/rulesApi";

const CookiesPolicy = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const { data: cookiesPolicy, refetch } = useGetCookiesPolicyQuery();
  const [updateCookiesPolicy, { isLoading }] = useUpdateCookiesPolicyMutation();

  const aboutDataSave = async () => {
    const data = {
      content: content,
    };

    try {
      await updateCookiesPolicy(data)
        .unwrap()
        .then(({ success, message }) => {
          if (success) {
            toast.success(message);
            refetch();
          }
        });
    } catch ({ message }) {
      toast.error(message || "Something Wrong");
    }
  };

  useEffect(() => {
    setContent(cookiesPolicy?.data?.content);
  }, [cookiesPolicy]);

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
        {isLoading ? "Updating..." : "Save"}
      </Button>
    </div>
  );
};

export default CookiesPolicy;
