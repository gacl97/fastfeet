import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { useHistory, useParams } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import api from '../../../../services/api';
import getValidationErrors from '../../../../utils/getValidationErrors';

import HeaderDeliverer from '../../../../components/HeaderDeliverer';
import HeaderDelivererMobile from '../../../../components/HeaderDeliverer/HeaderDelivererMobile';

import TextArea from '../../../../components/TextArea';

import { Container, Main, ContainerHeader, BackIcon, SendIcon } from './styles';

interface FormData {
  description: string;
}

const DeliveryProblemForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { delivery_id } = useParams();

  const handleClickBackButton = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          description: Yup.string().required('Informe o problema'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post(`/delivery/${delivery_id}/problems`, {
          description: data.description,
        });

        history.goBack();
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [delivery_id, history],
  );

  return (
    <>
      <HeaderDeliverer />
      <HeaderDelivererMobile />

      <Container>
        <Main>
          <ContainerHeader>
            <button type="button" onClick={handleClickBackButton}>
              <BackIcon />
              Voltar
            </button>
          </ContainerHeader>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <TextArea
              name="description"
              label="Informe a descrição do problema:"
            />
          </Form>

          <button type="button" onClick={() => formRef.current?.submitForm()}>
            Enviar
            <SendIcon />
          </button>
        </Main>
      </Container>
    </>
  );
};

export default DeliveryProblemForm;
