import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
// contact sharing: copies email and phone to clipboard on send

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const contactText = `Email: abdulmueez917@gmail.com\nPhone: +61 410097864`;

    const copyToClipboard = async (text) => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text);
      }
      // fallback
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
        document.body.removeChild(el);
        return Promise.resolve();
      } catch (err) {
        document.body.removeChild(el);
        return Promise.reject(err);
      }
    };

    copyToClipboard(contactText)
      .then(() => {
        setLoading(false);
        alert(
          `Contact details copied to clipboard:\n\nEmail: abdulmueez917@gmail.com\nPhone: +61 410097864`
        );
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        alert("Unable to copy to clipboard. Here are the details:\n" + contactText);
      });
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <div className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <div className="bg-tertiary py-4 px-6 text-secondary rounded-lg">abdulmueez917@gmail.com</div>
          </div>

          <div className="flex flex-col">
            <span className="text-white font-medium mb-4">Contact Number</span>
            <div className="bg-tertiary py-4 px-6 text-secondary rounded-lg">+61 410097864</div>
          </div>

          {/* Send button removed per request */}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
