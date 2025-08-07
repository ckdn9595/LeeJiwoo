import styled from "styled-components";
import { media } from "styles/theme";

const strongList = [
  "java",
  "javascript",
  "python",
  "rust",
  "sql",
  "spring",
  "mysql",
  "postgresql",
  "Docker",
];

const Page3 = () => {
  return (
    <div className="flex">
      <Container className="flex">
        <Title text={"주요 Skills."}>주요 Skills.</Title>
        <div className="strong flex">
          {strongList.map((skill, idx) => (
            <div key={idx.toString()} className="strong__skill">
              {skill}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
  max-width: 1373px;
  height: auto;
  padding: 5rem 0;
  box-sizing: border-box;
  flex-direction: column;
  ${media.mobile} {
    margin: 5rem 0;
  }
  .strong {
    width: 90%;
    margin-top: 2rem;
    justify-content: flex-start;
    gap: 1rem;
    flex-wrap: wrap;
    ${media.mobile} {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    &__skill {
      border: 1px solid white;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      color: ${({ theme }) => theme.color.white};
      background-color: rgba(255, 255, 255, 0.1);
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: ${({ theme }) => theme.color.blue};
        border-color: ${({ theme }) => theme.color.blue};
      }

      ${media.mobile} {
        margin: 0.5rem;
        padding: 0.5rem;
        text-align: center;
      }
    }
  }
`;

const Title = styled.div<{ text: string }>`
  width: 90%;
  color: ${({ theme }) => theme.color.blue};
  position: relative;
  font-size: 3rem;
  font-weight: 800;
  ${media.mobile} {
    margin-left: 2.5rem;
  }
  ::after {
    content: "${({ text }) => `${text}`}";
    position: absolute;
    color: ${({ theme }) => theme.color.white};
    top: -0.3rem;
    left: -0.3rem;
  }
`;

export default Page3;