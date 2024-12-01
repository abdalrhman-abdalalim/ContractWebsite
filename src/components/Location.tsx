import { FormEvent, useRef, useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs

const Location = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  // Handle input changes
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handle form submission
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!form.current) {
      console.error("Form is not assigned");
      return;
    }
    emailjs
      .sendForm(
        "service_14yp4eq",
        "template_imbzebk",
        form.current,
        "NgFIVVkzIgnhEBitM"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setFormValues({ user_name: "", user_email: "", message: "" }); // Reset form
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="grid gap-5 grid-cols-2 w-full mt-10 max-md:grid-cols-1">
      <div className="mx-4">
        <div className="mb-7">
          <h1 className="text-3xl font-bold">تواصل معنا</h1>
          <p className="text-xs text-gray-500 mt-2">اترك لنا رسالة</p>
        </div>
        <form className="" ref={form} onSubmit={onSubmitHandler}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="user_name"
              id="user_name"
              value={formValues.user_name}
              onChange={onChangeHandler}
              className="block py-2.5  px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="user_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              أدخل اسمك
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="user_email"
              id="user_email"
              value={formValues.user_email}
              onChange={onChangeHandler}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="user_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              أدخل بريدك الإلكتروني
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="message"
              id="message"
              value={formValues.message}
              onChange={onChangeHandler}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              أدخل رسالتك
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-full">
        <iframe
          width="100%"
          height="300"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Riyadh,%20city,%20Saudi%20Arabia+(Contracting%20company)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </div>
    </section>
  );
};

export default Location;
