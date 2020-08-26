import React, { TextareaHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, label, ...rest }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { fieldName, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container isErrored={!!error}>
      <label htmlFor="name">{label}</label>
      <textarea id={name} ref={textAreaRef} {...rest} />
    </Container>
  );
};

export default TextArea;
