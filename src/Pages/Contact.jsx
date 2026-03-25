import { useRef, useState, useEffect } from "react";
import {
Box,
Typography,
Stack,
TextField,
Button,
Avatar,
} from "@mui/material";
import {
FaGithub,
FaLinkedin,
FaInstagram,
FaWhatsapp,
FaEnvelope,
} from "react-icons/fa";
import gsap from "gsap";
import Toast from "../Components/Toast";

export default function Contact() {
const leftRef = useRef(null);
const rightRef = useRef(null);
const socialRef = useRef(null);

const [toast, setToast] = useState({
show: false,
message: "",
type: "",
});

const [formData, setFormData] = useState({
name: "",
email: "",
subject: "",
message: "",
});

const [errors, setErrors] = useState({});
const [success, setSuccess] = useState("");
const [loading, setLoading] = useState(false);

useEffect(() => {
const tl = gsap.timeline();

tl.fromTo(leftRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
  .fromTo(rightRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.6")
  .fromTo(
    socialRef.current.children,
    { y: 50, opacity: 0, scale: 0.7 },
    { y: 0, opacity: 1, scale: 1, stagger: 0.1 },
    "-=0.6"
  );

gsap.to(".floating-avatar", {
  y: 15,
  duration: 2,
  repeat: -1,
  yoyo: true,
});

}, []);

const handleInput = (field) => (e) => {
const value = e.target.value;
setFormData((prev) => ({ ...prev, [field]: value }));
validateField(field, value);
};

const validateField = (field, value) => {
let error = "";

if (field === "name") {
  if (!value.trim()) error = "Name is required";
  else if (value.length < 3) error = "Minimum 3 characters required";
}

if (field === "email") {
  if (!value) error = "Email is required";
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
    error = "Invalid email";
}

if (field === "subject") {
  if (!value.trim()) error = "Subject is required";
  else if (value.length < 5) error = "Minimum 5 characters required";
}

if (field === "message") {
  if (!value.trim()) error = "Message is required";
  else if (value.length < 10) error = "Minimum 10 characters required";
}

setErrors((prev) => ({ ...prev, [field]: error }));

};

const validateForm = () => {
let tempErrors = {};
Object.keys(formData).forEach((field) => {
validateField(field, formData[field]);
if (!formData[field])
   tempErrors[field] = `${field} required`;
});
setErrors(tempErrors);
return Object.values(tempErrors).every((x) => x === "");
};

const handleSubmit = async (e) => {
e.preventDefault();

if (!validateForm()) {
  setSuccess("Fix errors first ⚠️");
  return;
}

try {
  setLoading(true);

  const postData = await fetch(
    "https://script.google.com/macros/s/AKfycbxkLIvgUJjExdKsNMrE-TNa353fCLKpLugfI6wDi290R0-V8AKhYuJusTllLI2DU-ls/exec",
    {
      method: "POST",
      body: JSON.stringify(formData),
    }
  );

  if (postData) {
    setToast({
      show: true,
      message: "Message sent successfully!, I will reach you soon!",
      type: "success",
    });
  }

  setFormData({ name: "", email: "", subject: "", message: "" });
  setErrors({});
} catch {
  setToast({
    show: true,
    message: "Something went wrong!",
    type: "error",
  });
} finally {
  setLoading(false);
}

};

const socials = [
{ icon: <FaGithub />, link: "#" },
{ icon: <FaLinkedin />, link: "#" },
{ icon: <FaInstagram />, link: "#" },
{ icon: <FaWhatsapp />, link: "#" },
{ icon: <FaEnvelope />, link: "#" },
];

return (
<>
{toast.show && (
<Toast
message={toast.message}
type={toast.type}
onClose={() => setToast({ ...toast, show: false })}
/>
)}

  <Box
    sx={{
      minHeight: "100vh",
      px: { xs: 2, md: 8 },
      py: 8,
      color: "#fff",
      position: "relative",
      overflow: "hidden",
      background:
        "radial-gradient(circle at 20% 20%, #1a1a2e, #0f172a, #020617)",
    }}
  >
    {/* GLOW BACKGROUND */}
    <Box
      sx={{
        position: "absolute",
        width: 300,
        height: 300,
        background: "#ff6a00",
        filter: "blur(120px)",
        top: "-50px",
        left: "-50px",
        opacity: 0.3,
      }}
    />
    <Box
      sx={{
        position: "absolute",
        width: 300,
        height: 300,
        background: "#00c6ff",
        filter: "blur(120px)",
        bottom: "-50px",
        right: "-50px",
        opacity: 0.3,
      }}
    />

    <Box
      sx={{
        maxWidth: "1200px",
        margin: "auto",
        borderRadius: "25px",
        p: { xs: 3, md: 6 },
        backdropFilter: "blur(20px)",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mb: 5,
          fontWeight: 800,
          background: "linear-gradient(90deg,#ff6a00,#00c6ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Contact Me
      </Typography>

      <Stack direction={{ xs: "column", md: "row" }} spacing={6}>
        {/* LEFT */}
        <Box ref={leftRef} sx={{ flex: 1 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Let's Connect 🚀
          </Typography>

          <Stack direction="row" spacing={2} ref={socialRef}>
            {socials.map((item, i) => (
              <Box
                key={i}
                component="a"
                href={item.link}
                sx={{
                  width: 55,
                  height: 55,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.2)",
                    boxShadow: "0 0 25px #ff6a00",
                  },
                }}
              >
                {item.icon}
              </Box>
            ))}
          </Stack>

          <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
            <Avatar
              className="floating-avatar"
              src="/conatact.svg"
              sx={{
                width: 220,
                height: 220,
                boxShadow: "0 0 40px rgba(255,106,0,0.6)",
              }}
            />
          </Box>
        </Box>

        {/* FORM */}
        <Box ref={rightRef} component="form" onSubmit={handleSubmit} sx={{ flex: 1 }}>
          <Stack spacing={3}>
            {["name", "email", "subject", "message"].map((field) => (
              <TextField
                key={field}
                label={field}
                value={formData[field]}
                onChange={handleInput(field)}
                error={!!errors[field]}
                helperText={errors[field]}
                fullWidth
                multiline={field === "message"}
                minRows={field === "message" ? 4 : 1}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    color: "#fff",
                    background: "rgba(255,255,255,0.05)",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ff6a00",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00c6ff",
                      boxShadow: "0 0 10px rgba(0,198,255,0.5)",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#aaa",
                  },
                }}
              />
            ))}

            <Button
              type="submit"
              disabled={loading}
              fullWidth
              sx={{
                py: 1.5,
                borderRadius: "40px",
                color: "#fff",
                fontWeight: 700,
                background:
                  "linear-gradient(90deg,#ff6a00,#00c6ff)",
                boxShadow: "0 10px 30px rgba(255,106,0,0.5)",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {success && (
              <Typography sx={{ textAlign: "center", color: "#fff" }}>
                {success}
              </Typography>
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  </Box>
</>

);
}