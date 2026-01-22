import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const { id, hash } = useParams();

  useEffect(() => {
    const verify = async () => {
      try {
        // Replace with your **current ngrok URL**
        const res = await fetch(`https://noninfusible-socialistic-tuyet.ngrok-free.dev/verify-email/${id}/${hash}`);
        const data = await res.json();

        if (data.status === "success") {
          alert(data.message);
          navigate("/dashboard");
        } else {
          alert(data.message);
          navigate("/login");
        }
      } catch (err) {
        alert("Verification failed. Try again later.");
        navigate("/login");
      }
    };

    verify();
  }, [id, hash, navigate]);

  return <p>Verifying your email...</p>;
}
