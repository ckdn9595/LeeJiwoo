import styled from "styled-components";
import { media } from "../../styles/theme";
import { useState } from "react";
import Modal from "components/Modal";

const CareerBox = ({ career, isEnd }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Container data-aos="flip-down" data-aos-delay={500} {...{ isEnd }}>
      <div className="title">
        {career.title}
        <span className="date">{career.date}</span>
      </div>
      <div className="about">
        {career.about}
        {career.details && (
          <DetailsButton onClick={openModal}>자세히 보기</DetailsButton>
        )}
      </div>
      {career.details && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <DetailsContainer>
            {career.details.map((detail: any, idx: number) => (
              <div key={idx} className="detail-item">
                <h4 className="detail-title">{detail.title}</h4>
                <p className="detail-date">{detail.date}</p>
                <p className="detail-description">{detail.description}</p>
                <h5>수행 역할</h5>
                <ul>
                  {detail.tasks.map((task: string, taskIdx: number) => (
                    <li key={taskIdx}>{task}</li>
                  ))}
                </ul>
                {detail.achievements && detail.achievements.length > 0 && (
                  <>
                    <h5>주요 성과</h5>
                    <ul>
                      {detail.achievements.map(
                        (achievement: string, achievementIdx: number) => (
                          <li key={achievementIdx}>{achievement}</li>
                        )
                      )}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </DetailsContainer>
        </Modal>
      )}
    </Container>
  );
};

const Container = styled.div<{ isEnd: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isEnd }) => (isEnd ? "flex-start" : "flex-end")};
  .title {
    margin-top: 1rem;
    font-size: 1.8rem;
    font-weight: 800;
    color: ${({ theme }) => theme.color.green};
  }
  .about {
    padding: 1rem 0;
    display: flex;
    align-items: center;
  }
  .date {
    color: ${({ theme }) => theme.color.gray};
    font-size: 1rem;
    margin-left: 1rem;
    ${media.mobile} {
      font-weight: 600;
    }
  }
`;

const DetailsButton = styled.button`
  margin-left: 1rem;
  padding: 0.3rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.color.green};
  border-radius: 15px;
  background-color: white;
  color: ${({ theme }) => theme.color.green};
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.green};
    color: white;
  }
`;

const DetailsContainer = styled.div`
  width: 100%;
  padding: 1rem;
  margin-top: 0.5rem;
  
  .detail-item {
    & + .detail-item {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid #eee;
    }
  }

  .detail-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .detail-date {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
  }

  .detail-description {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: #555;
  }

  h5 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.color.green};
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
    padding-left: 1.2em;
    position: relative;
    
    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.color.green};
    }
  }
`;

export default CareerBox;
