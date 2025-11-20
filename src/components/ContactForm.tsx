import { useState, type CSSProperties, type FC, type FormEvent } from "react";

export const ContactForm: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true);

    try {
      const response = await fetch(
        "https://questions.greatfrontend.com/api/questions/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (response.ok) {
        alert("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await response.json();
        alert(`Error: ${data.message || "Submission failed"}`);
      }
    } catch (error) {
      alert("Network error. Please try again later.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Name Field */}
        <label htmlFor="name" style={styles.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />

        {/* Email Field */}
        <label htmlFor="email" style={styles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        {/* Message Field */}
        <label htmlFor="message" style={styles.label}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={styles.textarea}
        ></textarea>

        {/* Submit Button */}
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

// Inline styles for simplicity
const styles: Record<string, CSSProperties> = {
  container: {
    width:"100%",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "sans-serif",
    backgroundColor: "white",
    boxSizing:"border-box"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
