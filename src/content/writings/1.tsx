import React from 'react'
import { Writing } from './types'

export const Writing1: React.FC = () => {
  return (
    <div className="writing-content">
      <div className="hero-section">
        <div className="hero-background">
          <div className="floating-elements">
            <div className="floating-circle circle-1"></div>
            <div className="floating-circle circle-2"></div>
            <div className="floating-circle circle-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="category-badge">
            <span className="badge-icon">🌐</span>
            <span>Web3</span>
          </div>
          <h1 className="main-title">왜 Web3인가?</h1>
          <p className="main-description">개인적으로 웹3에 매력을 느낀 이유에 대해서 정리해봅니다</p>
          <div className="meta-info">
            <div className="meta-item">
              <span className="meta-icon">👤</span>
              <span>김찬민</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">📅</span>
              <span>2025-07-01</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">⏱️</span>
              <span>8분 읽기</span>
            </div>
          </div>
        </div>
      </div>

      <div className="content-sections">
        <section className="content-section">
          <div className="section-header">
            <h2 className="section-title">Lesson Learned</h2>
            <div className="section-decoration"></div>
          </div>
          <div className="section-content">
            <p>지난 3년 간 정말로 다양한 경험을 했습니다. 해외를 많이 다니고 취미가 많았다는 의미가 아닙니다.</p>
            <p>정말로 다양한 시도들을 하였습니다.</p>
            <div className="highlight-box">
              <p>시스템화된 조직에서 PM으로 일도 해보았고, 혼자서도 개인프로젝트를 0부터 1까지 만들어 보았습니다.</p>
            </div>
            <p>크리에이터 이코노미를 경험하고 싶어 작곡가에게 직접 음향을 만지는 법을 공부해봤고</p>
            <p>새벽에 일어나 블렌드3D, 애프터이펙트를 만지고 다루는 법도 한번 시험해봤습니다.</p>
            <p>너무나 많은 학습을 하면서 더욱더 웹3에 대한 생각이 공고해졌습니다. 그리고 이 분야에 내가 왜 가야하는지에 대해서 생각하게 되었습니다.</p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-header">
            <h2 className="section-title">Thinkers & Doers</h2>
            <div className="section-decoration"></div>
          </div>
          <div className="section-content">
            <p>지금까지 수많은 기술들을 익히려 노력을 해왔습니다. 제 노력도 있지만 AI의 도움으로 많은 장벽들이 사라졌습니다.</p>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <p>블렌드로 헬리콥터를 모델링하는데 일주일이 걸렸습니다. 그러나 이 역시 장벽이 허물어졌습니다.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <p>처음 파이썬과 리액트를 배울 때 로그인 기능을 구현하는데 3주가 걸렸습니다. SSO 로그인은 구현하다가 포기했습니다.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <p>그러나 이제는 1시간만에 모든 SSO 로그인을 구현할 수 있게 되었습니다.</p>
                </div>
              </div>
            </div>
            <p>물리적인 장벽은 허물어지고, 창의적인 자신감이 생기게 되니 보다 철학적으로 생각을 하게 되었습니다.</p>
            <p>손과 발에서 멀어져 방향성과 철학에 대한 생각이 많아졌고, 그것이 곧바로 실현되는 웹3에 대한 생각이 커져갔습니다.</p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-header">
            <h2 className="section-title">아이디어의 자본화</h2>
            <div className="section-decoration"></div>
          </div>
          <div className="section-content">
            <p>웹2 영역에서는 그것으로 결국 돈을 벌기까지 시간이 너무 오래 걸렸습니다.</p>
            <p>여기서 돈을 번다라는 것은 직접적인 매출이 될 수 있고, IPO가 될 수도 있으며, M&A가 될 수도 있습니다.</p>
            <div className="comparison-box">
              <div className="comparison-item web2">
                <h3>Web2</h3>
                <p>아이디어 → 개발 → 테스트 → 출시 → 성장 → 수익화</p>
                <div className="time-indicator">수개월~수년</div>
              </div>
              <div className="comparison-item web3">
                <h3>Web3</h3>
                <p>백서 → 토큰화 → 커뮤니티 → 프로덕트</p>
                <div className="time-indicator">수일~수주</div>
              </div>
            </div>
            <p>그러나 웹3는 달랐습니다.</p>
            <p>모든 철학과 아이디어는 백서(White Paper)의 형태로 구현됩니다. 백서는 각 항목별로 목차과 객체, 그리고 파라미터를 관리하기 위한 인터페이스로 구현됩니다.</p>
            <p>이렇게 Code of Conduct를 구현하게 되면 이것이 실제 프로덕트와 커뮤니티로, 눈에 보이고 클릭할 수 있는 UI로 구현되기 전에 이미 토큰화가 시작이 됩니다.</p>
            <p>철학을 구현하고 자본화하는 속도 자체가 웹2와 다른 부분이 이것이라 생각합니다.</p>
            <p>말 그대로 Warp Speed로 모든 것을 구현하는 패러다임이 웹3이고 이런 부분에서 저는 매력을 느끼고 있습니다.</p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-header">
            <h2 className="section-title">상태관리머신</h2>
            <div className="section-decoration"></div>
          </div>
          <div className="section-content">
            <p>철학의 자본화를 빠르게 가능하게 하는 것은 근본적인 웹3 기술에 기반합니다.</p>
            <p>초당 처리할 수 있는 Transaction의 성능... 이런 것들도 물론 중요하지만 조금 철학적인 이야기를 해보겠습니다.</p>
            <div className="concept-diagram">
              <div className="diagram-item">
                <div className="diagram-icon">🌍</div>
                <h4>만물의 진동</h4>
                <p>니콜라 테슬라: "모든 만물은 진동한다"</p>
              </div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-item">
                <div className="diagram-icon">⚛️</div>
                <h4>양자스핀</h4>
                <p>-1, 0, 1 상태값의 주기적 변화</p>
              </div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-item">
                <div className="diagram-icon">💻</div>
                <h4>트랜지스터</h4>
                <p>0, 1 이진법 구현</p>
              </div>
            </div>
            <p>니콜라 테슬라에 따르면 모든 만물은 진동한다라고 합니다. 그리고 양자역학에서는 이것을 양자스핀이라고 정의합니다.</p>
            <p>여기서 스핀은 실제로 돈다가 아니라 값이 주기적으로 움직인다는 것을 뜻합니다. -1, 0, 1과 같은 상태값을 주기적으로 지닙니다.</p>
            <p>이러한 만물의 특성이 컴퓨터의 기본회로인 트랜지스터와 연결됩니다. 진공관, 트랜지스터는 기본적으로 0, 1의 값을 주기적으로 가집니다.</p>
            <p>결국 만물은 양자스핀의 값을 가지며, 트랜지스터 역시 이진법으로 구현되기 때문에 "프로그램"이란 만물을 모사할 수 있는 하나의 모듈이 될 수 있습니다.</p>
            <p>여기에 상태관리머신은 또 하나의 역동성을 추가해줍니다. 비트코인, 이더리움, 솔라나, 스마트컨트랙트 이런 용어보다는 이것을 가능하게 만드는 상태관리머신에 대한 개념이 중요하다고 생각합니다.</p>
            <p>우리는 0과 1이라는 트랜지스터를 통해 현실을 본뜬 규칙(알고리즘)을 만들 수 있었습니다. 이러한 알고리즘경제가 웹2.0이라고 생각합니다.</p>
            <p>그런데 알고리즘 경제는 한가지 문제가 존재합니다. 그것을 누군가 인위적으로 수정할 수 있다는 것입니다.</p>
            <div className="example-box">
              <h4>예시: 유튜브 알고리즘</h4>
              <p>"버츄얼 아이돌"이라는 키워드가 달린 영상은 홈화면에 노출될 가중치를 둔다... 라는 규칙을 부여할 수 있습니다.</p>
              <p>그런데 이 규칙은 개발자가 언제든지 수정할 수 있습니다. 여름인 경우 "태국"이라는 키워드에 가중치를 넣어 특정 국가에 대한 마케팅을 해볼 수 있습니다.</p>
            </div>
            <p>그러나 상태기능머신은 이것이 불가능합니다. 어떠한 규칙을 만들고 나면 그것의 규약을 모든 참여자가 지켜야 하기 때문입니다.</p>
            <p>0과 1을 통해 규칙(code of conduct)을 작성하고나면 해당 규칙은 그러한 네트워크가 완전히 멸망할 때까지 지켜야 합니다.</p>
            <p>말그대로 일정한 상태(통화량이 될수도 있고, 거버넌스가 될 수 있음)를 지키도록 모든 노드가 강요받기 때문입니다.</p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-header">
            <h2 className="section-title">비국소성과 상호연결성</h2>
            <div className="section-decoration"></div>
          </div>
          <div className="section-content">
            <p>이러한 상태관리머신의 특성을 양자역학에서는 비국소성이라고 말합니다.</p>
            <p>비록 우리가 멀리 떨어져 있어도, 우리는 모두 동일한 규칙을 지키고 있다는 것입니다.</p>
            <div className="connection-visual">
              <div className="node node-1">미국</div>
              <div className="connection-line"></div>
              <div className="node node-2">한국</div>
              <div className="connection-text">동일한 규칙 공유</div>
            </div>
            <p>누군가 미국에서 내 이야기를 하면, 한국에 있는 내가 기침을 하는 것과 동일한 이치입니다.</p>
            <p>만물은 애초에 주기적인 스핀값을 가지고 있었고, 상호연결이 되어 있었습니다. 그리고 그러한 형태를 계속해서 본 떠가는 것이 웹2.0에서 웹3.0으로의 전환이라고 생각합니다.</p>
            <div className="reference-box">
              <p><em>참고자료 : <a href="https://panimpact.kr/smart-sib-source/" target="_blank" rel="noopener noreferrer">https://panimpact.kr/smart-sib-source/</a></em></p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-header">
            <h2 className="section-title">마켓핏이 고객성공은 아니다</h2>
            <div className="section-decoration"></div>
          </div>
          <div className="section-content">
            <p>지금까지는 설계자의 관점에서 철학과 그것을 가능하게 하는 기술에 대해서 이야기해보았습니다.</p>
            <p>마지막은 참여자들에 대한 이야기입니다.</p>
            <p>자의반, 타의반 공적인 프로젝트를 운영해오면서 각자가 각자의 이기심을 발휘할 때 얼마나 활성화되는지를 관찰해왔습니다.</p>
            <p>특히 제가 생각하는 고객성공을 위해 일대일로 대화도 해보고, 각종 온보딩 과정을 직접 돕기도 하였습니다.</p>
            <p>그럴 때마다 느끼는 건 마켓핏이 꼭 고객성공은 아니다라는 겁니다.</p>
            <div className="scenario-box">
              <h4>시나리오: 영어 학습 프로그램</h4>
              <div className="scenario-content">
                <div className="scenario-item good">
                  <h5>✅ 고객성공 관점</h5>
                  <p>하기만 하면 무조건 영어가 들리게 되는 프로그램</p>
                  <p>정말 가치를 실현하는 일</p>
                </div>
                <div className="scenario-item bad">
                  <h5>❌ 비즈니스 관점</h5>
                  <p>개인의 이기심에 부합하지 않음</p>
                  <p>비즈니스적으로 성공하기 어려움</p>
                </div>
              </div>
            </div>
            <p>예를 들어, 하기만 하면 무조건 영어가 들리게 되는 프로그램을 설계하였다고 해봅시다.</p>
            <p>이것은 분명 고객의 성공을 위해서 노력한 길이 됩니다. 정말 가치를 실현하는 일이라 할 수 있습니다.</p>
            <p>그러나 이 프로젝트는 비즈니스적으로 성공할 수가 없습니다. 개인의 이기심에 부합하지 않기 때문입니다.</p>
            <p>사람들은 자신이 무언가를 깨닫는 것보다 자식에 대한 Drive가 강합니다.</p>
            <p>내가 더 잘살고, 잘먹고, 잘되는 것에 관심이 많습니다. 그런 관점에서 영어를 잘하게 만드는 것과 그것을 구매한다는 것은 다른 방향입니다.</p>
            <p>오히려 이것만 하면 자녀가 무조건 하버드갑니다... 라는 키메시지가 더 적합할 수 있습니다.</p>
            <p>이것이 가장 잘 발휘되는 것이 앱테크라고 생각합니다. 이거 해서 무언가 똑똑해지고 잘되는 것은 없습니다.</p>
            <p>오히려 10원을 받기 위한 이기심으로 2분 이상의 시간을 광고를 보는데 쏟곤 합니다. 설계자 입장에서는 광고주로부터 받는 금액 대비 10원을 뿌리는 것은 남는 장사라고 할 수 있습니다.</p>
            <p>사용자는 10원을, 광고주는 2분 이상의 노출을, 설계자는 광고비용 대비 10원 뿌리기로. 각자의 이기심을 통해 종합적인 형태가 완성됩니다.</p>
            <p>저는 이것이 도덕적으로 옳다, 그르다를 이야기하는 것이 아닙니다. 시스템이 만드는 조화로움 자체가 그런 것이니까요.</p>
            <div className="reference-box">
              <p><em>참고자료: <a href="https://knightfoundation.org/human-nature-in-vices-and-virtues-an-adam-smith-approach-to-building-internet-ecosystems-and-communities/" target="_blank" rel="noopener noreferrer">https://knightfoundation.org/human-nature-in-vices-and-virtues-an-adam-smith-approach-to-building-internet-ecosystems-and-communities/</a></em></p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-header">
            <h2 className="section-title">Wrap-up</h2>
            <div className="section-decoration"></div>
          </div>
          <div className="section-content">
            <p>지금까지 철학, 기술, 참여자의 관점에서 웹3에 대한 생각을 정리해보았습니다.</p>
            <p>생태계와 기술적인 이야기도 좋지만 보다 메타적인 관점에서 한번 생각을 정리해보고 싶었습니다.</p>
            <div className="conclusion-box">
              <p>감사합니다.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

// 메타데이터를 위한 export
export const writing1Meta: Writing = {
  id: 'why_web3_250701',
  title: '왜 Web3인가?',
  description: '개인적으로 웹3에 매력을 느낀 이유에 대해서 정리해봅니다',
  date: '2025-07-01',
  category: 'Web3',
  readTime: '8분',
  author: '김찬민'
}
