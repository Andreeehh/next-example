import * as Styled from './styles';
import ReactMarkdown from 'react-markdown';

export type TextComponentProps = {
  children: string;
};

export const TextComponent = ({ children }: TextComponentProps) => {
  return (
    <Styled.Container>
      <ReactMarkdown>{children}</ReactMarkdown>
    </Styled.Container>
  );
};
