import React from 'react';
import * as Yup from "yup";
import {Formik, FormikHelpers} from "formik";
import {
    ButtonRightArrow,
    ButtonWrapper,
    CustomErrorMessage,
    CustomField,
    CustomForm, FormTitle, FormTitleLeftArrow,
    InputEmailContainer, RestoreMessage
} from './FormStyles';
import {Link} from "react-router-dom";
import Button from "../../components/button/Button";

type Values = {
    email: string
}

const RestorePasswordForm = () => {
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
    })
    return (
        <Formik
            initialValues={{
                email: '',
            }}
            onSubmit={(
                values: Values,
                {setSubmitting}: FormikHelpers<Values>
            ) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}
            validateOnBlur
            validationSchema={validationSchema}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  isValid,
                  handleSubmit,
                  dirty,
              }
            ) => (
                <CustomForm>
                    <FormTitle as={Link} to={"/sign-in"}>
                        <FormTitleLeftArrow/>
                        Restore Password
                    </FormTitle>
                    <RestoreMessage>
                        Please use your email address, and we’ll send
                        you the link to reset your password
                    </RestoreMessage>
                    <InputEmailContainer>
                        <CustomField
                            isError={touched.email && errors.email}
                            name="email"
                            placeholder="Email"
                            type="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {touched.email && errors.email &&
                        <CustomErrorMessage component={'span'} name={"email"}/>}
                    </InputEmailContainer>
                    <ButtonWrapper>
                        <Button type="submit"
                                disabled={!(isValid && dirty)}
                                onClick={handleSubmit}
                                icon={"right"}
                                size={"large"}
                                variant={"primary"}
                        >Send Reset Link</Button>
                        <ButtonRightArrow/>
                    </ButtonWrapper>
                </CustomForm>
            )}
        </Formik>
    );
};

export default RestorePasswordForm;