export const skills = [
  {
    title: "Spring",
    contents: [
      "스프링의 핵심 원리인 IoC와 DI에 대한 이해를 바탕으로, 다양한 비즈니스 요구사항에 맞춰 설계하고 구현할 수 있습니다.",
      "next.js를 활용한 SSR 개발 경험이 있습니다.",
    ],
  },
  {
    title: "Vue",
    contents: [
      "vuex 사용 경험이 있습니다.",
      "Vue2 option api와 Vue3 composition api를 사용할 수 있습니다.",
    ],
  },
  {
    title: "HTML/CSS",
    contents: [
      "웹표준을 지키려 노력합니다.",
      "SCSS 문법에 익숙합니다.",
      "styled-component, emotion을 활용할 수 있습니다.",
      "BEM 방법론을 적용할 수 있습니다.",
      "크로스 브라우징에 대응할 수 있습니다.",
      "Antd, Chakra, Tailwind 등의 css 라이브러리를 사용할 수 있습니다.",
      "keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.",
    ],
  },
  {
    title: "Javascript",
    contents: [
      "ES6+ 문법에 익숙합니다.",
      "webpack, parcel 등의 번들러 사용 경험이 있습니다.",
      "typescript를 사용할 수 있습니다.",
      "디자인 시스템과 atomic 디자인에 대한 이해도가 높습니다.",
      "Jest를 활용한 테스트코드 작성 경험이 있습니다.",
      "Storybook 작성, 빌드 및 배포 경험이 있습니다.",
    ],
  },
];

export const careers = [
  {
    title: "Opsnow",
    date: "2024.07 ~ ",
    about: "ServicePlatform Team 정규직",
    details: [
      {
        title: "이메일 트래킹 시스템 (Email Tracking System) - 핵심 프로젝트",
        description: "사내 이메일 마케팅 성과 측정 및 분석 시스템 부재 문제를 해결하고자, 프로젝트를 직접 제안하고 기획부터 실행까지 주도했습니다.",
        tasks: [
          "MVP: 1px 픽셀, 리다이렉션 링크를 활용한 열람/클릭 추적 핵심 로직 및 관리 페이지 개발",
          "V1.5: 영업팀의 반복 작업을 줄이기 위한 대량 등록 기능 및 서비스 내 이메일 에디터 개발",
          "V2: Spring 라이브러리 개발 및 Kafka 기반 아키텍처 설계를 통한 전사적 통합, S3를 활용한 템플릿 중앙화",
          "V3: 일 20만 건 이상의 대규모 발송에 대비하여 MySQL에서 DynamoDB로 데이터베이스 전환 및 Auto-Scaling, Kafka 컨슈머 수평 확장 구조 설계",
        ],
        achievements: [
          "고객의 이메일 열람, 클릭 데이터를 기반으로 한 마케팅 전략 수립의 기회 제공",
          "월 2만 건 이상의 이메일 발송 및 추적을 통해 데이터 기반 의사결정 지원",
          "분산된 이메일 발송 시스템을 중앙화하여 관리 효율성 증대 및 전사적 데이터 활용 기반 마련",
        ],
      },
      {
        title: "인사이트 (Insight) 서비스 구독 및 빌링 시스템",
        description: "B2B 고객을 위한 'Insight' 서비스의 구독 및 빌링 시스템의 핵심 로직을 개발했습니다.",
        tasks: [
          "복잡한 프로모션 및 요금제 로직을 구현하여 다양한 비즈니스 요구사항 충족",
        ],
        achievements: [],
      },
      {
        title: "개발자 경험(DX) 및 문서 자동화",
        description: "DX 개선 및 자동화 시스템을 구축하여 개발 생산성을 향상시켰습니다.",
        tasks: [
          "API 문서 자동화 파이프라인 구축으로 수동 작업 제거 및 최신성 유지",
          "다국어 및 다중 리전 문서 지원 인프라 구축",
        ],
        achievements: [],
      },
      {
        title: "서비스 플랫폼 API 개발 및 유지보수",
        description: "풀스택 개발자로서 다수의 API를 개발하고 유지보수했습니다.",
        tasks: [
          "GCP 클라우드 서비스 헬스 체크 시스템 개발",
          "OpenFGA를 활용한 관리자 서비스의 권한 관리 화면(UI) 및 권한 제어 API 개발",
          "신규 서비스와 키클락(Keycloak) 서버 연동",
        ],
        achievements: [],
      },
      {
        title: "팀 리더십 및 온보딩",
        description: "인도네시아, 미국 출신의 다국적 팀원들의 온보딩 프로세스를 성공적으로 주도했습니다.",
        tasks: [
          "기술 교육, 업무 문화 전파, 초기 과제 설정 및 관리까지 책임지며 팀원들의 빠른 적응과 팀 생산성 향상에 기여",
        ],
        achievements: [],
      },
    ]
  },
  {
    title: "InBody",
    date: "2022.09 ~ 2024.06",
    about: "Web개발파트 정규직",
    details: [
      {
        title: "InBody 기업용 글로벌 복지 솔루션 ‘LB_Corporate’ 개발",
        date: "2023.01 ~ 2024.05 (2인 프로젝트, 기여도 55%)",
        description:
          "임직원 건강 관리 복지 솔루션으로, 2024 CES와 KIMES에 전시되었습니다.",
        tasks: [
          "EMS(employee management system) 시스템 개발",
          "계정 관련 개발 및 인증/인가 구현",
          "소켓 통신을 활용한 웹 서비스와 인바디 장비 연동",
          "조직 및 구성원 정보 관리 기능 개발 (대량 데이터 저장 방식 변경으로 속도 600% 개선)",
          "트랜잭션 처리를 통한 안정적인 예약 시스템 개발",
          "검사 결과 통계 리포트 페이지 개발 (그래프 컴포넌트 자체 개발, PDF 생성, 대량 데이터 연산)",
          "메일 서버 구축 및 대량 메일 발송 처리",
          "Azure Scheduler를 활용한 배치 처리",
          "글로벌 서비스(미국, 중국, 일본) 리소스 및 환경설정 적용",
        ],
        achievements: [
          "회사의 새로운 수익 모델 구현 완료",
          "정식 출시 전 3개 회사(총 7300명 규모)와 사전 계약 완료",
          "ORM 라이브러리 유료 기능 자체 구현으로 비용 절감",
        ],
      },
      {
        title: "InBody 통합 방침 문서 시스템 기획 및 개발",
        date: "2022.10 ~ 2022.12 (1인 프로젝트)",
        description:
          "개인정보처리방침 등 8종의 문서를 국가/언어/시행 시기별로 관리하고, InBody의 여러 서비스에 웹뷰로 제공하는 시스템입니다.",
        tasks: [
          "백오피스 시스템 개발 (문서 등록, 자체 에디터를 이용한 수정, 이력 로그 관리)",
          "반응형 웹뷰 개발 (이전 방침 조회, 클라이언트 정보 기반 맞춤 문서 제공)",
        ],
        achievements: [
          "문서 관리 프로세스의 Digital Transformation을 통해 체계적인 버전 관리 시스템 구축",
          "문서 업데이트 시 발생하던 수동 작업을 제거하여 업무 효율성 증대",
        ],
      },
    ],
  },
];

export const activities = [
  {
    title: "삼성청년SW아카데미",
    date: "2021.07 ~ 2022.07",
    about: "삼성에서 지원하는 SW 교육 프로그램",
  },
];

export const etc = [
  {
    title: "AI 서비스 제작 1등 특공대상 수상",
    date: "2024.06",
    about: "스파르타 코딩클럽에서 주최한 해커톤, 연애 갈등 해결앱 제작",
  },
  {
    title: "싸피 자율프로젝트 우수상 수상",
    date: "2022.05",
    about: "삼성청년SW아카데미에서 주최한 자유 도메인 프로젝트 경진대회, 플로깅 행위 맞춤형 앱 제작",
  },
];

export const projects = [
  {
    title: "자동매매프로그램",
    date: "2024.02 ~ 2024.03 (1명)",
    skills: [
      "Python",
      "InfluxDB"
    ],
    github: "https://github.com/ckdn9595/upbitAutoTrade",
    website:
      "https://noiseless-floor-975.notion.site/Crypto-878c3d608605453d888575be022f57a2?pvs=4",
    about: "가상화페 자동매매 프로그램",
    contents: [
      "가상화폐는 24시간동안 거래가 가능합니다.",
      "반면에, 사람은 계속 차트를 확인할 수 없습니다. 따라서, 신경을 쓰지않아도 하락에 인한 큰 손실을 방지하는 것을 주 목적으로 만들었습니다.",
    ],
  },
  {
    title: "Plomeet",
    date: "2022.04 ~ 2022.05 (6명)",
    skills: [
      "ReactNative",
      "Redux",
      "SpringBoot",
      "JPA",
      "MySql",
    ],
    github: "https://github.com/plomeet/plomeet",
    website:
      "https://noiseless-floor-975.notion.site/PloMeet-6709f760dbed484cace0ff3d702c93cd?pvs=4",
    about: "플로깅 행위 맞춤형 앱",
    contents: [
      "플로밋은 플로깅(Plogging)과 만남(Meeting)의 합성어로 환경보호 운동 Plogging을 함께 할 수 있도록 기획한 앱서비스입니다.",
    ],
  },
  {
    title: "Black Belt",
    date: "2022.03 ~ 2022.04 (6명)",
    skills: ["SpringBoot", "JPA", "MyBatis", "Mysql"],
    github: "https://github.com/black-belt/black-belt",
    website: "https://noiseless-floor-975.notion.site/BLACK-BELT-be543f2a29894e79afbc1a41321c22a8",
    about:
      "온라인으로 쉽게 태권도를 학습하게 해주는 서비스",
    contents: [
      "태권도 자세 모델을 활용해 기본 자세, 품새를 배울 수 있습니다.",
      "심사를 통해 학습한 품새를 평가받아 승단할 수 있습니다.",
      "매칭된 상대방과 겨루기를 통해 우열을 가릴 수 있습니다.",
    ],
  },
  {
    title: "차키줘바",
    date: "2022.01 ~ 2022.02 (4명)",
    skills: ["React", "Next.js", "Express.js", "Raspberry Pi"],
    github: "https://github.com/ckdn9595/IOT_carSharing",
    website: "https://noiseless-floor-975.notion.site/1c74ed9457664765b61056a5edc0260c",
    about: "라즈베리파이를 IOT 디바이스로 활용한 개인간 차량 공유 서비스 플랫폼",
    contents: [
      "본인의 차량을 플랫폼에 등록하여 임대할 수 있습니다.",
      "임차인은 운전면허와 결제수단을 등록한 후 지도에서 가까운 차량을 찾아 기간을 선택하여 렌트를 할 수 있습니다.",
      "등록된 차량은 이용기간동안 서비스에서 제공하는 차량 제어 요청에 응답합니다."
    ],
  },
];
