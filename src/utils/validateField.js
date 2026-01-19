export function validateField(name, value) {
  const trimmed = value.trim();

  switch (name) {
    case "fullName":
      if (!trimmed) return "Full name is required";
      if (trimmed.length < 3) return "Full name must be at least 3 characters";
      return null;

    case "subject":
      if (!trimmed) return "Subject is required";
      if (trimmed.length < 3) return "Subject must be at least 3 characters";
      return null;

    case "email":
      if (!trimmed) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed))
        return "Must be a valid email address";
      return null;

    case "body":
      if (!trimmed) return "Body is required";
      if (trimmed.length < 3) return "Body must be at least 3 characters";
      return null;

    default:
      return null;
  }
}
