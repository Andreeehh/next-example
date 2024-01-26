import * as Styled from './styles';

export type HeadingProps = {
  title?: string;
};

export const Heading = ({ title }: HeadingProps) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
