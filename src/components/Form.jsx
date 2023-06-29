function Form() {
  return (
    <div className="w-full flex items-center justify-center">
      <form>
        <div className=" py-12 lg:px-20 px-6 w-screen lg:w-full">
          <div className="sm:flex items-center mt-2">
            <div className="sm:w-1/2 flex flex-col">
              <label className="text-base font-medium leading-none text-gray-800">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                arial-label="Please input name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input  name"
              />
            </div>
            <div className="sm:w-1/2 flex flex-col sm:ml-6 sm:mt-0 mt-5">
              <label className="text-base font-medium leading-none text-gray-800">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                arial-label="Please input email address"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input email address"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col mt-5">
              <label className="text-base font-medium leading-none text-gray-800">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                defaultValue={""}
              />
            </div>
            <div className="w-full flex flex-col mt-5">
              <label className="text-base font-medium leading-none text-gray-800">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                defaultValue={""}
              />
            </div>
            <div className="w-full flex flex-col mt-5">
              <label className="text-base font-medium leading-none text-gray-800">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                role="textbox"
                type="name"
                className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <button className="mt-9 text-base font-medium leading-none text-white py-4 px-10 bg-primary rounded-lg hover:bg-secondary focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
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
}

export default Form;
