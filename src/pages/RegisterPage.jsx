import { Send } from "lucide-react";
import { Mail } from "lucide-react";
import { useState } from "react";
import InputForm from "../components/form/InputForm";
import { Phone } from "lucide-react";
import { KeyRound } from "lucide-react";
import { schemaRegister } from "../validator/schemaRegister";
import * as Yup from 'yup';
import authApi from "../api/authApi";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const initialInput = {
  email: "",
  password: "",
};

function RegisterPage() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInput);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prev) => ({ ...prev, [id]: value }));
    setInputError((prev) => ({ ...prev, [id]: "" }));
  };

 const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // console.log(input);
      setIsLoading(true);

      //validate
      schemaRegister.validateSync(input, { abortEarly: false });

      //api
      const res = await authApi.register(input);
      console.log("res", res.data);

      setInput(initialInput)
      navigate('/login')

      //alert
      toast.success("Register success!!")
    } catch (error) {
      console.log(error);
      toast.error("Register invalid!!")

      if (error instanceof Yup.ValidationError) {
        const err = error.inner.reduce((acc, cur) => {
          acc[cur.path] = cur.message;
          return acc;
        }, {});
        setInputError(err);
      }
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="p-8">
      <div className="w-2/5 bg-form-1 border p-8 rounded-xl mx-auto">
        <h1 className="text-white text-4xl text-bold  mb-4">Join us</h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* <Phone/> */}

          <InputForm
            id="email"
            placeholder="Email"
            handleChange={handleChange}
            error={inputError.email}
            value={input.email}
            icon={Mail}
          />

          <InputForm
            id="password"
            placeholder="Password"
            handleChange={handleChange}
            error={inputError.password}
            value={input.password}
            icon={KeyRound}
            type="password"
          />

          {/* <KeyRound /> */}

          <button 
          disabled={isLoading}
          className="w-full mt-8 py-2 cursor-pointer bg-ph-1 hover:bg-hover-2 hover:shadow-xl text-sec-1 duration-200 rounded-2xl flex items-center justify-center gap-2">
            {isLoading ? (
              <>
                <span>Loading..</span>
              </>
            ) : (
              <>
                <span className="text-white text-bold ">REGISTER</span>
              </>
            )}

          </button>
        </form>
      </div >
    </div >
  );
}

export default RegisterPage;