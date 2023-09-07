import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import axios from "axios";
import * as Yup from "yup";

const members = [
  {
    id: 1,
    name: "Ahmet",
    email: "ahmetcan.yalcinkaya55@gmail.com",
    password: "123456",
    terms: true,
  },
];

const formDataInitial = {
  name: "",
  email: "",
  password: "",
  terms: false,
};

function App() {
  const [member, setMember] = useState(members);
  const [isValid, setValid] = useState(false);
  const [formData, setFormData] = useState(formDataInitial);
  const [formErr, setFormErr] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  //TODO YUP SCHEMA

  const formSchema = Yup.object().shape({
    name: Yup.string().required("İsim giriniz."),
    email: Yup.string()
      .email("Geçerli bir e-mail adresi giriniz.")
      .required("Bu alanın doldurulması zorunludur."),
    password: Yup.string()
      .required("Şifre giriniz.")
      .min(8, "Şifreniz minimum 8 karakter uzunluğunda olmalıdır."),
    terms: Yup.boolean().oneOf(
      [true],
      "Lütfen kullanım şartlarını kabul ediniz."
    ),
  });

  //TODO SUBMITHANDLER

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("https://reqres.in/api/users", formData).then((res) => {
      formData.id = member[member.length - 1].id + 1;
      setMember([...member, formData]);
      setFormData(formDataInitial);
    });
  };

  //TODO CHANGEHANDLER

  const changeHandler = (e) => {
    let { value, name, type, checked } = e.target;
    value = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });

    //! HATA KONTROLÜ

    Yup.reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErr({ ...formErr, [name]: "" });
      })
      .catch((err) => {
        setFormErr({ ...formErr, [name]: err.errors[0] });
      });
  };

  //TODO USEEFFECT

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => {
      //console.log(valid);
      //console.log(formData);
      setValid(valid);
    });
  }, [formData]);

  return (
    <div className="App">
      <Form
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        formData={formData}
        isValid={isValid}
        formErr={formErr}
      />
    </div>
  );
}
export default App;
