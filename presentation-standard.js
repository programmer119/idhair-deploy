(() => {
  const description = document.getElementById('descriptionMeta');
  if (!description || window.IDHAIR_PRESENTATION_MODE !== 'standard') return;

  document.title = 'idHAIR 고객 설문·운영 관리 시스템 | SuaveForge 프로젝트';
  description.setAttribute('content', 'SuaveForge가 구현한 idHAIR 다지점 고객 설문·운영 관리 시스템. 태블릿·모바일·PC 설문, 지점·디자이너별 데이터 관리, XLSX 내보내기, 3단계 권한, 양식 버전, QR 배포, 백업과 감사 로그를 연결한 웹·API 프로젝트입니다.');

  const canonical = document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = 'https://idhair.suaveforge.com/';
  document.head.appendChild(canonical);

  const meta = (property, content) => {
    const element = document.createElement('meta');
    if (property.startsWith('og:')) element.setAttribute('property', property);
    else element.setAttribute('name', property);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  };

  meta('author', 'SuaveForge');
  meta('og:type', 'website');
  meta('og:site_name', 'SuaveForge');
  meta('og:title', 'idHAIR 고객 설문·운영 관리 시스템 | SuaveForge');
  meta('og:description', description.getAttribute('content'));
  meta('og:url', 'https://idhair.suaveforge.com/');
  meta('twitter:card', 'summary');
  meta('twitter:title', 'idHAIR 고객 설문·운영 관리 시스템 | SuaveForge');
  meta('twitter:description', description.getAttribute('content'));

  const schema = document.createElement('script');
  schema.type = 'application/ld+json';
  schema.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://idhair.suaveforge.com/#application',
        name: 'idHAIR 고객 설문·운영 관리 시스템',
        url: 'https://idhair.suaveforge.com/',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: description.getAttribute('content'),
        featureList: [
          '태블릿·모바일·PC 반응형 고객 설문',
          '지점·디자이너·기간별 고객 데이터 검색',
          'XLSX 데이터 내보내기',
          '3단계 사용자 권한 관리',
          '설문 양식 버전 및 QR 배포',
          '백업·복구 및 감사 로그'
        ],
        creator: {
          '@type': ['Organization', 'ProfessionalService'],
          '@id': 'https://suaveforge.com/#organization',
          name: 'SuaveForge',
          url: 'https://suaveforge.com/'
        },
        isBasedOn: {
          '@type': 'CreativeWork',
          name: '미용실 100개 지점 고객 설문 디지털화 및 데이터 관리 시스템',
          url: 'https://suaveforge.com/work/idhair/'
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://suaveforge.com/#organization',
        name: 'SuaveForge',
        url: 'https://suaveforge.com/',
        sameAs: ['https://kmong.com/@SUAVEFORGE']
      }
    ]
  });
  document.head.appendChild(schema);

  const attributionStyle = document.createElement('style');
  attributionStyle.textContent = `
    #sf-attribution {
      position: fixed;
      right: 18px;
      bottom: 18px;
      z-index: 4;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: #111318;
      text-decoration: none;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      text-rendering: geometricPrecision;
      transition: opacity .18s ease, transform .18s ease;
    }
    #sf-attribution:hover {
      opacity: .78;
      transform: translateY(-1px);
    }
    #sf-attribution:focus-visible {
      outline: 2px solid #111318;
      outline-offset: 5px;
      border-radius: 8px;
    }
    #sf-attribution .sf-logo-shell {
      width: 38px;
      height: 38px;
      flex: 0 0 auto;
      display: grid;
      place-items: center;
      padding: 4px;
      overflow: hidden;
      border-radius: 7px;
      background: #0b0c0f;
      box-shadow: 0 8px 20px rgba(17, 19, 24, .18);
      box-sizing: border-box;
    }
    #sf-attribution .sf-logo-shell img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    #sf-attribution .sf-wordmark {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 18px;
      font-weight: 800;
      letter-spacing: -.045em;
      white-space: nowrap;
    }
    @media (max-width: 640px) {
      #sf-attribution {
        right: 12px;
        bottom: 12px;
        gap: 8px;
      }
      #sf-attribution .sf-logo-shell {
        width: 34px;
        height: 34px;
      }
      #sf-attribution .sf-wordmark {
        font-size: 16px;
      }
    }
  `;
  document.head.appendChild(attributionStyle);

  const renderAttribution = () => {
    if (document.getElementById('sf-attribution')) return;

    const attribution = document.createElement('a');
    attribution.id = 'sf-attribution';
    attribution.href = 'https://suaveforge.com/work/idhair/';
    attribution.target = '_blank';
    attribution.rel = 'author noopener';
    attribution.setAttribute('aria-label', 'SuaveForge idHAIR 프로젝트 상세 보기');

    const shell = document.createElement('span');
    shell.className = 'sf-logo-shell';

    const mark = document.createElement('img');
    mark.src = 'https://suaveforge.com/assets/logo-motion/suaveforge-logo-final.svg';
    mark.alt = '';
    mark.width = 30;
    mark.height = 30;
    mark.decoding = 'async';

    const wordmark = document.createElement('span');
    wordmark.className = 'sf-wordmark';
    wordmark.textContent = 'SuaveForge';

    shell.appendChild(mark);
    attribution.append(shell, wordmark);
    document.body.appendChild(attribution);
  };

  if (document.body) renderAttribution();
  else document.addEventListener('DOMContentLoaded', renderAttribution, { once: true });
})();
