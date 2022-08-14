import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Formik, Form } from "formik";
import Input from "../../components/form/Input.js"
import { LoginSchema } from "../../validations";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { setUser } = useAuth();

  const loginHandle = () => {
    setUser({
      id: 1,
      username: "bilalkucuk",
    });

    navigate(location?.state?.return_url || "/", {
      replace: true,
      state: {
        name: "bilal",
      },
    });
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
     <br />
      
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        onSubmit={(values,actions) => {
          setUser(values)
          navigate(location?.state?.return_url  || "/",{replace:true})
          // setTimeout(()=> {
          //   actions.setSubmitting(false)
          //   actions.resetForm()
          // },3000)
        }}

        validationSchema={LoginSchema}
      >
        {({ values,isSubmitting }) => (
          <Form className="grid gap-y-3 p-4">
            <h1 className="text-2xl font-bold mb-4">Giriş yap</h1>
            <Input label="Kullanıcı Adı" name="username" />
            <Input  label="Parola" name="password" type="password" />
            <button type="reset">Formu Resetle</button>
            <button disabled={isSubmitting} type="submit" className="bg-black h-10 rounded text-sm text-white disabled:opacity-40">Giriş yap</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
