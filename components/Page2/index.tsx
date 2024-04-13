import styled from "styled-components";
import { media } from "styles/theme";
import TextSlider from "./TextSlider";
import ProgressBar from "./ProgressBar";
import Information from "./Information";

const Page2 = () => (
  <Wrapper className="flex">
    <Container className="flex">
      {/* <TextSlider /> */}
      <Title>안녕하세요. 개발자 이지우입니다.</Title>
      <ProgressBar />
      <Information />
      <TextBox className="flex pc-only">
        <div>
          <Bold>
            " 탁월한 Problem Solver가 되고자하는 개발자입니다. "
          </Bold>{"\n"}
          제게 주어진 <Bold>문제의 최적을 솔루션</Bold>을 찾아내기 위하여 깊게 몰입합니다.{"\n"}
          문제를 풀어내기 위하여 분야를 가리지 않고 무엇이든 수행하려고 노력합니다.{"\n"}
          점점 더 빠르게 변하는 시대에 적응하기 위하여 <Bold>빠르고 깊게 이해하여 적용하는 능력</Bold>을 키우고 있습니다.{"\n"}
          이러한 능력은 튼튼한 기초와 넓은 지식에서 온다고 생각합니다.{"\n"}
          매일 새로운 지식을 쌓고 전공 지식의 이해를 넓히며 학습한 내용이 정말 나의 지식이 되었는가를 확인하기 위한 글을 쓰고 있습니다.{"\n"}
          매일 발전하는 제 모습에서 하루의 보람을 느낍니다.
        </div>
      </TextBox>

      <TextBox className="flex mobile-only">
        <div>
          <Bold>
            " 탁월한 Problem Solver가 되고자하는 개발자입니다. "
          </Bold>{"\n"}
          제게 주어진 <Bold>문제의 최적을 솔루션</Bold>을 찾아내기 위하여 깊게 몰입합니다.{"\n"}
          문제를 풀어내기 위하여 분야를 가리지 않고 무엇이든 수행하려고 노력합니다.{"\n"}
          점점 더 빠르게 변하는 시대에 적응하기 위하여 <Bold>빠르고 깊게 이해하여 적용하는 능력</Bold>을 키우고 있습니다.{"\n"}
          이러한 능력은 튼튼한 기초와 넓은 지식에서 온다고 생각합니다.{"\n"}
          매일 새로운 지식을 쌓고 전공 지식의 이해를 넓히며 학습한 내용이 정말 나의 지식이 되었는가를 확인하기 위한 글을 쓰고 있습니다.{"\n"}
          매일 발전하는 제 모습에서 하루의 보람을 느낍니다.
        </div>
      </TextBox>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-top: 100vh;
  height: 100vh;
  padding: 2rem 0;
  box-sizing: border-box;
`;

const Container = styled.div`
  border-radius: 2rem;
  max-width: 1373px;
  height: 100%;
  padding-top: 3rem;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.white};
  overflow: hidden;
  position: relative;
  flex-direction: column;
`;

const TextBox = styled.div`
  white-space: pre-line;
  line-height: 230%;
  margin-top: 1rem;
  font-size: 1.1rem;
  ${media.mobile} {
    font-size: 1.3rem;
    line-height: 200%;
    font-weight: 700;
    padding-left: 7rem;
  }
`;

const Bold = styled.span`
  font-weight: 700;
  font-size: 1.3rem;
  margin-left: 0.3rem;
  background: ${({ theme }) => theme.color.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${media.mobile} {
    font-size: 1.5rem;
    font-weight: 800;
  }
`;
const Title = styled.span`
  font-weight: 700;
  font-size: 2.3rem;
  margin-left: 0.3rem;
  margin-bottom: 0.9rem;
  background: ${({ theme }) => theme.color.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${media.mobile} {
    font-size: 2.5rem;
    font-weight: 800;
  }
`;

export default Page2;
