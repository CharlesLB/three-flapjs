import React, { useState } from 'react';
import { Formik } from 'formik';
import { Container, Field, Row } from './styles';
import { Validator } from '@/utils/validations/validator';
import SwitchInput from '@/components/Atoms/Inputs/FormInputs/SwitchInput';

const FormMaker: React.FC<IFormMaker> = (props) => {
  const { data, onSubmit, title, SubmitComponent } = props;

  const [submitTry, setSubmitTry] = useState<boolean>(false);

  const getValidationSchema = (): IFormMakerValidation => {
    const schema: IFormMakerValidation = {};
    data.map((line) => {
      line.map((item) => {
        schema[item.id] = item?.validation;
      });
    });
    return schema;
  };

  const getInitialValues = (): IFormMakerData => {
    const initialValues: IFormMakerData = {};
    data.map((line) => {
      line.map((item: IFormMakerInput) => {
        initialValues[item.id] = item?.initialValue || '';
      });
    });

    return initialValues;
  };

  const checkAllRequiredFieldsAreFilled = (values: IFormMakerData): boolean => {
    return data.every((line) => {
      return line.every((item: IFormMakerInput) => {
        return !(item.required && !values[item.id]);
      });
    });
  };

  const initialValues: IFormMakerData = getInitialValues();
  const validationSchema: IFormMakerValidation = getValidationSchema();

  return (
    <Formik
      initialValues={{ ...initialValues }}
      validationSchema={Validator.object().shape(validationSchema)}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          setSubmitting(true);
          onSubmit(values, setErrors);
        } catch (error) {
          console.error(error);
        }
      }}
    >
      {({ errors, handleChange, handleSubmit, setTouched, isSubmitting, touched, values }) => (
        <Container
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitTry(true);

            handleSubmit();
          }}
        >
          {title && (
            <header>
              <h2>{title}</h2>
            </header>
          )}

          {data.map((row, index) => (
            <Row key={index}>
              {row.map((field, index) => {
                const error = touched[field.id] || submitTry ? errors[field.id] : '';

                const onBlur = () => {
                  setTouched({ ...touched, [field.id]: true });
                };

                return (
                  <Field key={index}>
                    {
                      {
                        boolean: (
                          <SwitchInput data={field} onChange={handleChange} handleBlur={onBlur} value={values[field.id]} error={error} />
                        )
                      }[field.type]
                    }
                  </Field>
                );
              })}
            </Row>
          ))}

          <SubmitComponent
            submit={handleSubmit}
            disabled={Object.keys(errors).length > 0 || isSubmitting || !checkAllRequiredFieldsAreFilled(values)}
          />
        </Container>
      )}
    </Formik>
  );
};

export default FormMaker;
