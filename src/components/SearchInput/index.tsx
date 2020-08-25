import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
} from 'react';

import { Container, SearchIcon } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: React.FC<InputProps> = ({ ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleIsBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleIsFocused = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <>
      <Container isFilled={isFilled} isFocused={isFocused}>
        <SearchIcon />
        <input
          onFocus={handleIsFocused}
          onBlur={handleIsBlur}
          ref={inputRef}
          {...rest}
        />
      </Container>
    </>
  );
};

export default SearchInput;
