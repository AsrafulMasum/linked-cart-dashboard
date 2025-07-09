import { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import { Button } from "antd";
import toast from "react-hot-toast";
import {
  useGetTermsConditionQuery,
  useUpdateTermsConditionMutation,
} from "../../../redux/features/rulesApi";

const TermsAndCondition = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const { data: termsAndCondition, refetch } = useGetTermsConditionQuery();
  const [updateTermsCondition] = useUpdateTermsConditionMutation();

  const aboutDataSave = async () => {
    const data = { content: content };
    try {
      await updateTermsCondition(data)
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
    setContent(termsAndCondition?.data?.content);
  }, [termsAndCondition]);

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
        Save
      </Button>
    </div>
  );
};

export default TermsAndCondition;
