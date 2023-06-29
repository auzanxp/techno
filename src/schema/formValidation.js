import * as yup from "yup";

export const sendSchema = yup.object().shape({
    firstName: yup.string().required("first name is required!").min(3, "first name must be more than 3 characters"),
    lastName: yup.string().required("last name is required!").min(3, "last name must be more than 3 characters"),
    company: yup.string().required("company is required!").min(3, "company must be more than 3 characters"),
    subject: yup.string().required("subject is required!").min(3, "subject must be more than 3 characters"),
    messageContact: yup.string().required("message is required!").min(3, "message must be more than 3 characters"),
    email: yup.string().required("email is required!").email().min(10, "email must be more than 10 characters"),
});