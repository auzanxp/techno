import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendSchema } from "../schema/formValidation";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(sendSchema),
  });

  const formSubmitHandler = (data) => {
    console.log(data);
    reset()
  };

  return (
    <div className="w-full flex items-center justify-center">
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <div className=" py-12 lg:px-20 px-6 w-screen lg:w-full">
          <div className="sm:flex items-start sm:gap-2 mt-2">
            <div className="sm:w-1/2 flex flex-col">
              <label className="text-base font-medium leading-none text-gray-800">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("firstName")}
                name="firstName"
                className="text-base leading-none text-gray-900 p-3 focus:outline-secondary mt-4 bg-gray-100 border rounded border-gray-200 "
              />
              {errors.firstName ? (
                <span className="text-red-500 pt-2">
                  {errors.firstName.message}
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="sm:w-1/2 flex flex-col sm:mt-0 mt-5">
              <label className="text-base font-medium leading-none text-gray-800">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("lastName")}
                name="lastName"
                className="text-base leading-none text-gray-900 p-3 focus:outline-secondary focus:outline-prim mt-4 bg-gray-100 border rounded border-gray-200 "
              />
              {errors.lastName ? (
                <span className="text-red-500 pt-2">
                  {errors.lastName.message}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col mt-5">
            <label className="text-base font-medium leading-none text-gray-800">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              {...register("company")}
              name="company"
              className="text-base leading-none text-gray-900 p-3 focus:outline-secondary mt-4 bg-gray-100 border rounded border-gray-200 "
            />
            {errors.company ? (
              <span className="text-red-500 pt-2">
                {errors.company.message}
              </span>
            ) : (
              <></>
            )}
          </div>
          <div>
            <div className="w-full flex flex-col mt-5">
              <label className="text-base font-medium leading-none text-gray-800">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                {...register("email")}
                name="email"
                className="text-base leading-none text-gray-900 p-3 focus:outline-secondary mt-4 bg-gray-100 border rounded border-gray-200 "
              />
              {errors.email ? (
                <span className="text-red-500 pt-2">
                  {errors.email.message}
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="w-full flex flex-col mt-5">
              <label className="text-base font-medium leading-none text-gray-800">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                {...register("subject")}
                name="subject"
                className="text-base leading-none text-gray-900 p-3 focus:outline-secondary mt-4 bg-gray-100 border rounded border-gray-200 "
              />
              {errors.subject ? (
                <span className="text-red-500 pt-2">
                  {errors.subject.message}
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="w-full flex flex-col mt-5">
              <label className="text-base font-medium leading-none text-gray-800">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("messageContact")}
                role="textbox"
                name="messageContact"
                className="h-36 text-base leading-none text-gray-900 p-3 focus:outline-secondary mt-4 bg-gray-100 border rounded border-gray-200  resize-none"
              />
              {errors.messageContact ? (
                <span className="text-red-500 pt-2">
                  {errors.messageContact.message}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <button className="mt-9 text-base font-medium leading-none text-white py-4 px-8 bg-primary rounded-lg hover:bg-secondary transition duration-300 ease-in-out ">
              Send
            </button>
            <p className="text-xs leading-3 text-gray-600 mt-4">
              <span className="text-red-500">*</span> Required
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
