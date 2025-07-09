import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import { Button } from "antd";
import toast from "react-hot-toast";
import {
  useGetRefundPolicyQuery,
  useUpdateRefundPolicyMutation,
} from "../../../redux/features/rulesApi";

const RefundAndReturnPolicy = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const { data: privacyPolicy, refetch } = useGetRefundPolicyQuery();
  const [updatePricyPolicy, { isLoading }] = useUpdateRefundPolicyMutation();

  const aboutDataSave = async () => {
    const data = { content: content };
    try {
      await updatePricyPolicy(data)
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
    setContent(privacyPolicy?.data?.content);
  }, [privacyPolicy]);

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

export default RefundAndReturnPolicy;
