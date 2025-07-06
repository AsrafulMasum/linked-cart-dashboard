import { Form, Typography, Button } from "antd";
import { useState, useCallback } from "react";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import {
  useOtpVerifyMutation,
  useResendOTPMutation,
} from "../../redux/features/authApi";
import toast from "react-hot-toast";
const { Text } = Typography;

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const email = new URLSearchParams(location.search).get("email");
  const [otpVerify] = useOtpVerifyMutation();
  const [resendOTP] = useResendOTPMutation();

  const onFinish = async () => {
    const data = {
      oneTimeCode: parseInt(otp),
      email: email,
    };

    try {
      const res = await otpVerify(data).unwrap();
      if (res?.success) {
        navigate(`/auth/reset-password?token=${res?.data}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleResendEmail = async () => {
    try {
      const res = await resendOTP({ email }).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-[28px] font-semibold mb-3 leading-[110%] text-[#333333]">
          Verify OTP
        </h1>
        <p className="text-[#757575] leading-[110%]">
          Please check your email. We have sent a code to{" "}
          {email || "your email"}
        </p>
      </div>

      <Form layout="vertical" onFinish={onFinish}>
        <div className="flex items-center justify-center mb-6">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputStyle={{
              backgroundColor: "transparent",
              height: 72,
              width: 76,
              borderRadius: "16px",
              margin: "28px",
              fontSize: "40px",
              border: "1px solid #757575",
              color: "#757575",
              outline: "none",
              marginBottom: 12,
            }}
            renderInput={(props) => <input {...props} />}
          />
        </div>

        <div className="flex items-center justify-between mb-[60px]">
          <Text
            style={{
              color: "#757575",
              lineHeight: "150%",
              fontSize: "16px",
            }}
          >
            Didn't receive code?
          </Text>

          <p
            onClick={handleResendEmail}
            style={{
              color: "#757575",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "150%",
              textDecoration: "underline",
            }}
          >
            Resend
          </p>
        </div>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            htmlType="submit"
            type="primary"
            block
            style={{
              width: "100%",
              height: 72,
              color: "#FEFEFE",
              fontWeight: "600",
              fontSize: "28px",
              marginTop: 36,
              background: "#0F665A",
              border: "none",
              borderRadius: "16px",
            }}
            className="flex items-center justify-center bg-primary rounded-2xl"
            disabled={otp.length !== 4}
          >
            Verify
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default VerifyOtp;
