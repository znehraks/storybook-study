import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

import RegistrationForm from './RegistrationForm';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aqua;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span<{ size: number }>`
  font-size: ${(props) => (props.size ? `${props.size}px` : `14px`)};
  color: purple;
`;

const ContentsDiv = styled.div`
  img {
    width: 100%;
  }
`;

export interface IProps {
  title: string;
  size: number;
  contents: string[];
  url: string | StaticImageData;
}

const TestComponent = ({ title, size, contents, url }: IProps) => {
  return (
    <Wrapper>
      <Title size={size}>{title}</Title>
      <ContentsDiv>
        {contents.map((content) => (
          <div>{content}</div>
        ))}
        <Image src={url} alt='image' width={200} height={100} />
        <RegistrationForm />
      </ContentsDiv>
    </Wrapper>
  );
};

export default TestComponent;
