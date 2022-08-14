import { Helmet } from "react-helmet";
import { Formik, Form, Field, useFormik, useFormikContext } from "formik";
import Input from "../components/form/Input";
import File from "../components/form/File";
import Checkbox from "../components/form/Checkbox";
import Radio from "../components/form/Radio";
import Textarea from "../components/form/Textarea";
import Select from "../components/form/Select";
import SelectMultiple from "../components/form/SelectMultiple";
import { useEffect } from "react";
import { SampleSchema , ContactSchema} from "../validations";
import classNames from "classnames";

const AutoSubmitCode = ()=>{
  const {values,submitForm} = useFormikContext();

  useEffect(()=>{
    if (values.code.length ===6) {
      submitForm()
    }
  },[values])  
  return null;
}


export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>İletişim</title>
      </Helmet>

      <Formik initialValues={{
        code:""
      }} onSubmit={values =>{
        console.log(values);
      }} 
      
      validationSchema={SampleSchema}
      >
        {({ values })=> (
          <Form className="hidden">
            <Input label="Kodu Girin" name="code" />
            <br />
            <button type="submit">Send</button>
            <AutoSubmitCode/>
          </Form>
        )}  
      </Formik>

       <Formik
        initialValues={{  
          name: "",
          about: "",
          accept: false,
          gender: "",
          skills: [],
          avatar: "",
          level:""
        }}
        onSubmit={(values) => {
          console.log(values);
        }}

        validationSchema={ContactSchema}
      >
        {({ values }) => (
          <Form className="p-2 m-5 shadow-lg grid gap-y-4 border rounded">
            <Input label="Ad-Soyad" name="name" />
            <Textarea label="Hakkında" rows={5} name="about" />
            <Checkbox label="Kuralları kabul ediyorum!" name="accept" />
            <Select
              label="Gender"
              name="gender"
              options={[
                { key: 1, value: "Male" },
                { key: 2, value: "Female" }
              ]}
            />
            <SelectMultiple multiple={true} label="Skills" name="skills" options={[
               { key: 0, value: "Typescript" },
               { key: 1, value: "Javascript" },
               { key: 2, value: "C#" },
               { key: 3, value: "Tailwind" },
               { key: 4, value: "Redux" } 
            ]} />
           
            <File label="Avatar" name="avatar" />
            <Radio label="Seviyenizi seçin" name="level" options={[
              {key:"jr", value:"Jr. Developer"},
              {key:"sr", value:"Sr. Developer"},
              {key:"ninja", value:"Ninja"},
            ]} />
            <button className={classNames({
              "h-10 rounded text-sm  px-5":true,
              "bg-green-600 text-white":values.accept,
              "bg-gray-600 text-gray-200":!values.accept
            })}  disabled={!values.accept}  type="submit">
              Gönder
            </button>
          </Form>
        )}
      </Formik> 
    </div>
  );
}
