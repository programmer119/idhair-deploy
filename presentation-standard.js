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
})();
