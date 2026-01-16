import { useState } from "react";
import { validateField } from "../../../utils/validatefield";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  }

  function validateForm() {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    return newErrors;
  }

  function isFieldValid(fieldName) {
    if (!touched) return false;
    return validateField(fieldName, formData[fieldName]) === null;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTouched(true);

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form Data:", formData);

    setFormData({
      fullName: "",
      subject: "",
      email: "",
      body: "",
    });
    setErrors({});
    setTouched(false);
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label
                htmlFor="fullName"
                className="form-label d-block text-start"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className={`form-control ${
                  touched && errors.fullName
                    ? "is-invalid"
                    : isFieldValid("fullName")
                      ? "is-valid"
                      : ""
                }`}
              />
              {errors.fullName && (
                <div className="invalid-feedback">{errors.fullName}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label d-block text-start">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className={`form-control ${
                  touched && errors.email
                    ? "is-invalid"
                    : isFieldValid("email")
                      ? "is-valid"
                      : ""
                }`}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="subject"
                className="form-label d-block text-start"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className={`form-control ${
                  touched && errors.subject
                    ? "is-invalid"
                    : isFieldValid("subject")
                      ? "is-valid"
                      : ""
                }`}
              />
              {errors.subject && (
                <div className="invalid-feedback">{errors.subject}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="body" className="form-label d-block text-start">
                Body
              </label>
              <textarea
                id="body"
                name="body"
                value={formData.body}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows="5"
                className={`form-control ${
                  touched && errors.body
                    ? "is-invalid"
                    : isFieldValid("body")
                      ? "is-valid"
                      : ""
                }`}
              />
              {errors.body && (
                <div className="invalid-feedback">{errors.body}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
