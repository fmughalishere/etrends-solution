import { useState } from "react";

export const useContact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitForm = async (formData: any) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (res.ok) setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { submitForm, loading, success };
};