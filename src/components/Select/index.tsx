import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import ReactSelect, {
  OptionTypeBase,
  Props as ReactSelectProps,
} from 'react-select';

import { Container, Error } from './styles';

interface SelectProps extends ReactSelectProps<OptionTypeBase> {
  name: string;
}

const Select: React.FC<SelectProps> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, registerField, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value.value',
    });
  }, [fieldName, registerField]);

  const customStyles = {
    control: () => ({
      display: 'flex',
      border: '1px solid #ccc',
      borderRadius: 4,
      height: 45,
      width: '100%',
      padding: '0 7px',
      color: '#999999',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? '#fff' : '#999999',
      padding: 10,
    }),
    singleValue: (provided: any) => {
      const color = '#444444';
      return { ...provided, color };
    },
  };

  return (
    <>
      <Container isErrored={!!error}>
        <ReactSelect
          styles={customStyles}
          cacheOptions
          ref={selectRef}
          defaultValue={defaultValue}
          defaultInputValue={defaultValue}
          classNamePrefix="react-select"
          {...rest}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle size={20} color="#c53030" />
          </Error>
        )}
      </Container>
    </>
  );
};

export default Select;
