/* 중2 영어(동아·윤정미) Lesson 5 · The City as a Canvas
   교과서 대조(2026-10): 의사소통 기능(교통수단 묻고 답하기 · 소요 시간 묻고 답하기), 언어 형식(목적격 관계대명사 · used to),
   읽기 주제(Street Art in London — 도시의 거리 예술을 둘러보는 투어), 단원 어휘를 교과서 본문 어휘와 맞췄다.
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제·같은 언어 형식으로 새로 쓴 글이다.
   읽기 글의 장소(감천문화마을, 윈우드 월스, 이화 벽화마을)는 널리 알려진 사실을 바탕으로 했습니다. */
window.LESSON = {
  book: 'm2-donga', no: 5,
  title: 'The City as a Canvas', ko: '도시라는 캔버스',
  bigQ: {en: 'Who is art in the city for?', ko: '도시의 예술은 누구를 위한 것일까?'},
  align: {
    tb: {reading: 'Street Art in London', funcs: ['교통수단 묻고 답하기', '소요 시간 묻고 답하기'], forms: ['목적격 관계대명사 (The place that we are going to visit)', 'used to (Poor workers used to live in this area.)'],
      note: '교과서 읽기는 안내원과 함께 런던의 거리 예술(쇼디치, 핀즈버리 파크, 머즈웰 힐)을 둘러보는 투어 글. 여기 본문은 세 도시의 벽화 거리(부산 감천, 마이애미 윈우드, 서울 이화)를 다룬 특집 기사로, 같은 주제와 같은 언어 형식으로 새로 쓴 글이다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-02', '9영02-03'], grammar: ['9영02-04'], read1: ['9영01-03', '9영01-04'], read2: ['9영01-09', '9영02-06']},
    forms: ['Relative Clauses', 'Modals']
  },
  goals: {
    vocab: ['거리 예술·도시와 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 우리 동네의 장소를 한 문장으로 설명할 수 있다.'],
    talk: ['교통수단을 묻고 답할 수 있다. (How can I get to ~? — You can get there by ~.)', '걸리는 시간을 묻고 답할 수 있다. (How long will it take? — It’ll take about ~.)'],
    grammar: ['목적격 관계대명사로 사람·사물을 자세히 설명할 수 있다.', 'used to로 과거의 습관이나 상태를 말할 수 있다.'],
    read1: ['글의 주제를 예측하고, 감천문화마을이 바뀐 과정을 이해할 수 있다.'],
    read2: ['세 장소의 과거와 현재를 비교하고, 공공 예술에 대한 나의 생각을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'Is there a wall painting near your home or school?', ko: '집이나 학교 근처에 벽화가 있나요?', note: '사진을 찍어 둔 학생이 있으면 보여 주게 한다. 없으면 “회색 벽과 그림 있는 벽 중 어디를 걷고 싶나?”로 바꿔 묻는다.'},
    words: [
      {w: 'canvas', pos: 'n.', ko: '캔버스, 화폭', ic: '🖼️', audio: 'assets/audio/canvas.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The wall became a huge canvas.', exKo: '그 벽은 거대한 캔버스가 되었다.'},
      {w: 'mural', pos: 'n.', ko: '벽화', ic: '🎨', audio: 'assets/audio/mural.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Students painted a mural at school.', exKo: '학생들이 학교에 벽화를 그렸다.'},
      {w: 'artist', pos: 'n.', ko: '예술가, 화가', ic: '👩‍🎨', audio: 'assets/audio/artist.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The artist used bright colors.', exKo: '그 화가는 밝은 색을 썼다.'},
      {w: 'neighborhood', pos: 'n.', ko: '동네, 이웃', ic: '🏘️', audio: 'assets/audio/neighborhood.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Our neighborhood is quiet.', exKo: '우리 동네는 조용하다.'},
      {w: 'resident', pos: 'n.', ko: '주민', ic: '🧑‍🤝‍🧑', ex: 'The residents painted their houses.', exKo: '주민들이 집을 칠했다.'},
      {w: 'visitor', pos: 'n.', ko: '방문객', ic: '🧳', audio: 'assets/audio/visitor.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Many visitors take photos here.', exKo: '많은 방문객이 여기서 사진을 찍는다.'},
      {w: 'warehouse', pos: 'n.', ko: '창고', ic: '🏭', ex: 'The old warehouse is now a gallery.', exKo: '그 오래된 창고는 이제 미술관이다.'},
      {w: 'popular', pos: 'adj.', ko: '인기 있는', ic: '⭐', audio: 'assets/audio/popular.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'This place is popular with tourists.', exKo: '이곳은 관광객에게 인기 있다.'},
      {w: 'colorful', pos: 'adj.', ko: '다채로운, 알록달록한', ic: '🌈', ex: 'The houses are colorful.', exKo: '집들이 알록달록하다.'},
      {w: 'empty', pos: 'adj.', ko: '텅 빈', ic: '🫙', audio: 'assets/audio/empty.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The street used to be empty.', exKo: '그 거리는 예전에 텅 비어 있었다.'},
      {w: 'artwork', pos: 'n.', ko: '예술 작품', ic: '🖼️', ex: 'This artwork is by a famous street artist.', exKo: '이 작품은 유명한 거리 예술가의 것이다.'},
      {w: 'lively', pos: 'adj.', ko: '활기찬', ic: '🎉', audio: 'assets/audio/lively.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Street art makes the city lively.', exKo: '거리 예술은 도시를 활기차게 만든다.'},
      {w: 'well-known', pos: 'adj.', ko: '잘 알려진, 유명한', ic: '⭐', ex: 'It is a well-known mural.', exKo: '그것은 잘 알려진 벽화다.'},
      {w: 'form', pos: 'n.', ko: '형태, 종류', ic: '🔷', audio: 'assets/audio/form.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Street art comes in many forms.', exKo: '거리 예술에는 여러 형태가 있다.'},
      {w: 'represent', pos: 'v.', ko: '나타내다, 상징하다', ic: '🔣', audio: 'assets/audio/represent.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The three figures represent the past, present, and future.', exKo: '세 인물은 과거, 현재, 미래를 나타낸다.'},
      {w: 'figure', pos: 'n.', ko: '인물, 모양', ic: '🧍', audio: 'assets/audio/figure.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Look at the eyes of the figure.', exKo: '그 인물의 눈을 보아라.'},
      {w: 'spray', pos: 'v.', ko: '(물감 등을) 뿌리다', ic: '🎨', ex: 'He sprayed green paint on the wall.', exKo: '그는 벽에 초록 물감을 뿌렸다.'},
      {w: 'message', pos: 'n.', ko: '메시지, 전하는 뜻', ic: '💬', audio: 'assets/audio/message.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'His art carries a social message.', exKo: '그의 작품은 사회적 메시지를 담고 있다.'},
      {w: 'tiny', pos: 'adj.', ko: '아주 작은', ic: '🔍', audio: 'assets/audio/tiny.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The paintings are tiny.', exKo: '그 그림들은 아주 작다.'},
      {w: 'pleasure', pos: 'n.', ko: '기쁨, 즐거움', ic: '😊', audio: 'assets/audio/pleasure.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Art gives pleasure to many people.', exKo: '예술은 많은 사람에게 기쁨을 준다.'}
    ],
    phrases: [
      {w: 'used to', ko: '(예전에) ~하곤 했다, ~였다', ex: 'Poor workers used to live here.', exKo: '예전에는 가난한 노동자들이 여기 살았다.'},
      {w: 'How can I get to ~?', ko: '~에 어떻게 가나요?', ex: 'How can I get to the museum?', exKo: '박물관에 어떻게 가나요?'},
      {w: 'How long will it take?', ko: '얼마나 걸릴까요?', ex: 'How long will it take by bus?', exKo: '버스로 얼마나 걸릴까요?'},
      {w: 'be famous for', ko: '~으로 유명하다', ex: 'The area is famous for street art.', exKo: '그 지역은 거리 예술로 유명하다.'},
      {w: 'paint over', ko: '덧칠해 지우다', ex: 'They painted over the mural.', exKo: '그들은 벽화를 덧칠해 지웠다.'},
      {w: 'be proud of', ko: '~을 자랑스러워하다', ex: 'The residents are proud of their village.', exKo: '주민들은 자기 마을을 자랑스러워한다.'}
    ],
    pairs: [
      {a: 'empty', b: 'full', rel: '반대말'},
      {a: 'resident', b: 'visitor', rel: '사는 사람 / 찾아온 사람'},
      {a: 'color', b: 'colorful', rel: '명사 / 형용사'},
      {a: 'remove', b: 'take away', rel: '비슷한 말'}
    ],
    wrap: {en: 'My neighborhood used to be ______. Now there is ______.', ko: '오늘 배운 낱말을 넣어 우리 동네의 예전과 지금 쓰기'}
  },

  talk: {
    hook: {en: 'How do you get to school every day? How long does it take?', ko: '날마다 학교에 어떻게 가나요? 얼마나 걸리나요?', note: '버스, 지하철, 걸어서, 자전거 등 답을 모으고 걸리는 시간도 함께 말하게 한다. 교통수단과 소요 시간을 묻는 표현으로 이어진다.'},
    speakers: {Haeun: {voice: 0, pitch: 1.1}, Noah: {voice: 1, pitch: .95}, Tourist: {voice: 2, pitch: 1}, Junho: {voice: 1, pitch: .9}, Mia: {voice: 0, pitch: 1.15}, Guide: {voice: 2, pitch: .95}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '교통수단 묻고 답하기',
        key: {q: ['How can I get to ~?', 'Can I walk there?'], a: ['You can get there by bus / subway / taxi.', 'Take bus No. ~.', 'You can walk, but it’s a little far.']},
        note: 'How can I get to + 장소?로 가는 방법을 묻는다. 교통수단은 by + 교통수단(관사 없음): by bus, by subway. 걸어가면 on foot.',
        dialogs: [
          { title: 'Dialogue A', setting: '지하철역 앞, 관광 안내소', lines: [
            {s: 'Tourist', en: 'Excuse me. {{How can I get to}} the mural street?', ko: '실례합니다. 벽화 거리에 어떻게 가나요?'},
            {s: 'Haeun', en: '{{You can get there by}} subway. Take Line 2 and get off at Art Station.', ko: '지하철로 갈 수 있어요. 2호선을 타고 아트역에서 내리세요.'},
            {s: 'Tourist', en: '{{Can I walk there}}?', ko: '걸어갈 수 있나요?'},
            {s: 'Haeun', en: 'You can, but it’s a little far. The subway is faster.', ko: '갈 수는 있지만 조금 멀어요. 지하철이 더 빨라요.'}
          ]},
          { title: 'Dialogue B', setting: '토요일 오전, 버스 정류장', lines: [
            {s: 'A', en: 'How can I get to the city art museum from here?', ko: '여기서 시립 미술관에 어떻게 가?'},
            {s: 'B', en: '{{Take bus No. 7}}. It stops right in front of the museum.', ko: '7번 버스를 타. 미술관 바로 앞에 서.'},
            {s: 'A', en: 'Great. Where can I take it?', ko: '좋아. 어디서 타면 돼?'},
            {s: 'B', en: 'Right here. Oh, look! Here it comes.', ko: '바로 여기서. 아, 봐! 저기 온다.'}
          ]}
        ],
        check: [
          {q: 'How can the tourist get to the mural street?', a: 'By subway (Line 2, get off at Art Station).'},
          {q: 'Why is the subway better than walking?', a: 'It’s a little far to walk, and the subway is faster.'},
          {q: 'Which bus goes to the art museum?', a: 'Bus No. 7.'}
        ],
        drill: {frame: ['A: How can I get to ____?', 'B: You can get there by ____.'], opts: ['the library / bus', 'the station / subway', 'the beach / bike', 'the mall / taxi', 'the park / on foot', 'the airport / train']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '소요 시간 묻고 답하기',
        key: {q: ['How long will it take?', 'How long does it take to get there?'], a: ['It’ll take about 20 minutes.', 'It takes less than 10 minutes.', 'About half an hour by bus.']},
        note: '시간이 걸리다는 take. 앞으로 걸릴 시간은 It’ll take ~, 늘 걸리는 시간은 It takes ~.',
        dialogs: [
          { title: 'Dialogue A', setting: '벽화 거리 입구', lines: [
            {s: 'Noah', en: 'Haeun, I want to see the famous whale mural. Is it far from here?', ko: '하은아, 유명한 고래 벽화를 보고 싶어. 여기서 멀어?'},
            {s: 'Haeun', en: 'Not really. We can walk there.', ko: '별로. 걸어갈 수 있어.'},
            {s: 'Noah', en: 'OK. {{How long will it take}}?', ko: '좋아. 얼마나 걸릴까?'},
            {s: 'Haeun', en: '{{It’ll take less than}} 10 minutes on foot.', ko: '걸어서 10분도 안 걸릴 거야.'}
          ]},
          { title: 'Dialogue B', setting: '호텔 로비', lines: [
            {s: 'Junho', en: 'How can I get to the old factory gallery?', ko: '옛 공장 미술관에 어떻게 가나요?'},
            {s: 'Guide', en: 'It’s not far, but it’s a little hard to find. Why don’t you take a taxi?', ko: '멀지 않지만 찾기가 좀 어려워요. 택시를 타는 게 어때요?'},
            {s: 'Junho', en: 'OK. {{How long will it take}} by taxi?', ko: '좋아요. 택시로 얼마나 걸릴까요?'},
            {s: 'Guide', en: '{{About}} 15 {{minutes}}.', ko: '15분쯤이요.'}
          ]}
        ],
        check: [
          {q: 'How will Noah and Haeun get to the whale mural?', a: 'On foot (They will walk).'},
          {q: 'How long will it take to the whale mural?', a: 'Less than 10 minutes.'},
          {q: 'How long will it take to the gallery by taxi?', a: 'About 15 minutes.'}
        ],
        drill: {frame: ['A: How long will it take?', 'B: It’ll take about ____.'], opts: ['5 minutes', '10 minutes on foot', '20 minutes by bus', 'half an hour', 'an hour by train', 'two hours']}
      }
    ],
    interviewEx: 'Sumin likes the mural near our school. To get there, go straight and turn left at the bakery.',
    watch: {
      label: 'Let’s Watch', title: 'Painting Our School Wall', setting: '방과 후, 학교 뒤편 회색 담장 앞. 미아와 준호가 벽화 동아리를 안내하는 선생님(Guide)과 이야기한다.',
      lines: [
        {s: 'Guide', en: 'This wall used to be covered with graffiti. Now we’re going to paint a mural here.', ko: '이 벽은 예전에 낙서로 덮여 있었어. 이제 여기에 벽화를 그릴 거야.'},
        {s: 'Mia', en: 'What will we paint?', ko: '무엇을 그릴 거예요?'},
        {s: 'Guide', en: 'Something which our neighbors can enjoy. What do you think of a garden?', ko: '이웃들이 즐길 수 있는 무언가. 정원은 어떻게 생각하니?'},
        {s: 'Junho', en: 'I love that idea! The old people who walk here every day will like it.', ko: '그 생각 정말 좋아요! 매일 여기를 걷는 어르신들이 좋아하실 거예요.'},
        {s: 'Mia', en: 'Let’s ask them first. It’s their street, too.', ko: '먼저 여쭤보자. 그분들의 거리이기도 하니까.'},
        {s: 'Guide', en: 'Great point. Good public art starts with listening.', ko: '좋은 지적이야. 좋은 공공 예술은 듣는 데서 시작하지.'}
      ],
      check: [
        {q: 'What did the wall use to be covered with?', a: 'Graffiti.'},
        {q: 'What will they paint?', a: 'A garden (something which the neighbors can enjoy).'},
        {q: 'What does Mia want to do first?', a: 'Ask the neighbors (the old people).'}
      ]
    },
    wrap: {en: 'Recommend a place in your town to your partner and give directions.', ko: '우리 동네 장소 하나를 추천하고 감상을 말한 뒤, 가는 길을 안내해 보기'}
  },

  grammar: {
    cover: 'which · used to',
    hook: {en: 'This is the mural {{which}} I painted.  /  This street {{used to}} be dark.', ko: '빈칸에 들어갈 말은 각각 무슨 일을 할까?', answer: 'which(목적격)는 the mural을 설명하며 painted의 목적어 역할, used to는 ‘예전에는 ~이었다(지금은 아니다)’', note: '첫 문장에서 “I painted ___”의 빈 목적어가 the mural이라는 점을 찾게 한다.'},
    points: [
      { id: 'g1', name: '목적격 관계대명사', short: '목적격 관계대명사', form: '명사 + who(m) / which / that + 주어 + 동사', meaning: '(주어)가 ~하는 (명사)',
        notice: [
          {en: 'This is the mural {{which}} the students painted.', ko: '이것이 학생들이 그린 벽화이다.'},
          {en: 'She is the artist {{who(m)}} I met yesterday.', ko: '그녀는 내가 어제 만난 화가이다.'},
          {en: 'The village {{that}} we visited was colorful.', ko: '우리가 방문한 마을은 알록달록했다.'}
        ],
        rule: [
          {k: '쓰임', v: '관계대명사 뒤 문장에서 목적어가 빠져 있다', ex: 'the photo which I took (took의 목적어 = the photo)'},
          {k: '사람 / 사물', v: '사람: who(m) · that / 사물: which · that', ex: 'the people that I know'},
          {k: '생략', v: '목적격 관계대명사는 생략할 수 있다', ex: 'the mural (which) I like'}
        ],
        compare: {
          title: '주격일까, 목적격일까?', note: '관계대명사 바로 뒤에 동사가 오면 주격(생략 불가), 주어+동사가 오면 목적격(생략 가능).',
          head: ['주격 (뒤에 동사)', '목적격 (뒤에 주어 + 동사)', '목적격 생략'],
          cols: [['the artist who paints murals', 'a wall which looks old', 'a village that has stairs'], ['the artist who(m) I met', 'a wall which we painted', 'a village that we visited'], ['the artist I met', 'a wall we painted', 'a village we visited']]
        },
        check: [
          {q: 'This is the photo ____ I took in Busan. (which / who)', a: 'which'},
          {q: 'He is the boy ____ I helped. (who / which)', a: 'who'},
          {q: 'The mural that we painted ____ beautiful. (be, 현재)', a: 'is'},
          {q: 'The book (which) I ____ last week was fun. (read)', a: 'read'},
          {q: 'The village ____ we visited was on a hill. (that / what)', a: 'that'}
        ],
        trap: {bad: 'This is the mural which I painted it.', good: 'This is the mural which I painted.', why: '관계대명사가 목적어 역할을 하므로 뒤에 목적어(it)를 또 쓰지 않는다.'},
        scramble: [
          {ko: '이것이 내가 가장 좋아하는 벽화이다.', en: 'This is the mural which I like the most.'},
          {ko: '우리가 만난 화가는 친절했다.', en: 'The artist who we met was kind.'},
          {ko: '그녀가 찍은 사진들은 놀라웠다.', en: 'The photos that she took were amazing.'}
        ]
      },
      { id: 'g2', name: 'used to', short: 'used to', form: 'used to + 동사원형', meaning: '(예전에) ~하곤 했다 / ~이었다',
        notice: [
          {en: 'This wall {{used to be}} gray.', ko: '이 벽은 예전에 회색이었다.'},
          {en: 'People {{used to live}} in small houses on the hill.', ko: '사람들은 예전에 언덕 위 작은 집에 살았다.'},
          {en: 'I {{used to walk}} past this street every day.', ko: '나는 예전에 매일 이 거리를 지나다녔다.'}
        ],
        rule: [
          {k: '뜻', v: '지금은 그렇지 않은 과거의 습관·상태', ex: 'He used to play soccer. (지금은 안 한다)'},
          {k: '부정', v: 'didn’t use to + 동사원형', ex: 'It didn’t use to be popular.'},
          {k: '의문', v: 'Did + 주어 + use to ~?', ex: 'Did this area use to be empty?'}
        ],
        check: [
          {q: 'The street ____ be dark. (예전에 ~이었다)', a: 'used to'},
          {q: 'I used to ____ comics. (draw)', a: 'draw'},
          {q: 'She ____ use to like art. (부정, 과거)', a: 'didn’t'},
          {q: 'Did this place ____ to be a warehouse?', a: 'use'},
          {q: 'We used to ____ in this village. (live)', a: 'live'}
        ],
        trap: {bad: 'This area used to being empty.', good: 'This area used to be empty.', why: 'used to 뒤에는 동사원형이 온다.'},
        scramble: [
          {ko: '이 거리는 예전에 텅 비어 있었다.', en: 'This street used to be empty.'},
          {ko: '나는 예전에 공원에서 그림을 그리곤 했다.', en: 'I used to draw in the park.'},
          {ko: '그 창고는 예전에 회색이었다.', en: 'The warehouse used to be gray.'}
        ]
      }
    ],
    wrap: {en: 'This place used to ______. Now it is a place which ______.', ko: 'used to 한 문장, 목적격 관계대명사 한 문장으로 우리 동네 장소 소개하기'},
    wrapEx: 'This park used to be a parking lot. Now it is a place which everyone loves.'
  },

  reading: {
    title: 'Walls That Talk', kind: '여행 잡지 특집 기사', cover: 'Canvas', coverKo: '벽이 말을 걸 때', cover2: 'Respect', coverKo2: '예술은 누구를 위한 것일까',
    before: [
      {q: 'Look at the title. How can walls “talk”?', a: '벽에 그린 그림이 이야기와 메시지를 전한다'},
      {q: 'What do you see on the walls in your town?', a: '자유롭게 말한 뒤 글과 비교'}
    ],
    gloss: {
      refugees: '피난민', 'Korean War': '한국 전쟁', hillside: '언덕 비탈', alleys: '골목', statue: '조각상, 조형물',
      Miami: '마이애미 (미국 도시)', 'district': '지역, 구역', 'Ihwa': '이화동 (서울)', 'tourists': '관광객', 'quietly': '조용히', 'belongs': '속하다'
    },
    paras: [
      {who: '', en: 'Walls used to be just walls. They were gray, and nobody looked at them twice. But today, many cities use their walls as canvases. Let’s visit three places that art has changed.',
       ko: '벽은 예전에 그저 벽이었습니다. 회색이었고, 아무도 두 번 쳐다보지 않았죠. 하지만 오늘날 많은 도시가 벽을 캔버스로 씁니다. 예술이 바꾼 세 곳을 찾아가 봅시다.',
       check: {q: 'What did walls use to be like?', a: 'They were gray, and nobody looked at them twice.'}, think: '우리 학교 벽에 그림을 그린다면 무엇을 그릴까?'},
      {who: 'Gamcheon, Busan', en: 'Gamcheon Culture Village sits on a hillside in Busan. During the Korean War, refugees built small houses there. For a long time, it used to be a poor and quiet village which young people left.',
       ko: '감천문화마을은 부산의 언덕 비탈에 있습니다. 한국 전쟁 때 피난민들이 그곳에 작은 집을 지었어요. 오랫동안 그곳은 젊은이들이 떠나는 가난하고 조용한 마을이었습니다.',
       check: {q: 'Who built the small houses in Gamcheon?', a: 'Refugees (during the Korean War).'}, think: '젊은이들이 마을을 떠난 까닭은 무엇이었을까?'},
      {who: 'Gamcheon, Busan', en: 'In 2009, artists and residents started painting the village together. They painted the houses in bright colors and put art in the alleys. Now it is a place which millions of visitors love, and many residents are proud of it.',
       ko: '2009년, 예술가와 주민들이 함께 마을을 칠하기 시작했습니다. 그들은 집을 밝은 색으로 칠하고 골목에 예술 작품을 두었어요. 지금 그곳은 수많은 방문객이 사랑하는 곳이고, 많은 주민이 마을을 자랑스러워합니다.',
       check: {q: 'Who painted the village in 2009?', a: 'Artists and residents (together).'}, think: '주민이 함께했다는 점이 왜 중요할까?'},
      {who: 'Wynwood, Miami', en: 'In Miami, the Wynwood area used to be full of empty warehouses. In 2009, a man invited artists from around the world to paint the warehouse walls. The walls which they painted turned the area into an outdoor museum.',
       ko: '마이애미의 윈우드 지역은 예전에 빈 창고로 가득했습니다. 2009년, 한 사람이 세계 곳곳의 예술가들을 초대해 창고 벽을 칠하게 했어요. 그들이 칠한 벽은 그 지역을 야외 미술관으로 바꾸었습니다.',
       check: {q: 'What did the Wynwood area use to be full of?', a: 'Empty warehouses.'}, think: '빈 창고 지역이 미술관이 되면 무엇이 달라질까?'},
      {who: 'Ihwa, Seoul', en: 'But street art is not always a happy story. In Ihwa-dong, Seoul, painted stairs became very popular. Every day, crowds of tourists took pictures in front of people’s homes. The noise was too much for some residents.',
       ko: '하지만 거리 예술이 늘 행복한 이야기는 아닙니다. 서울 이화동에서는 그림이 그려진 계단이 큰 인기를 끌었어요. 날마다 관광객 무리가 사람들의 집 앞에서 사진을 찍었죠. 몇몇 주민에게는 소음이 너무 심했습니다.',
       check: {q: 'What was the problem in Ihwa-dong?', a: 'Too many tourists made too much noise in front of people’s homes.'}, think: '관광객과 주민 중 누구의 입장이 더 이해되나요?'},
      {who: 'Ihwa, Seoul', en: 'In the end, some residents painted over the famous stairs. The art which visitors loved was gone. The story reminds us that a neighborhood is not just a photo spot. It is someone’s home.',
       ko: '결국 몇몇 주민이 유명한 계단 그림을 덧칠해 지웠습니다. 방문객들이 사랑한 그림은 사라졌죠. 이 이야기는 동네가 그저 사진 찍는 장소가 아니라는 것을 일깨워 줍니다. 그곳은 누군가의 집입니다.',
       check: {q: 'What did some residents do in the end?', a: 'They painted over the famous stairs.'}, think: '그림을 지운 결정에 대해 어떻게 생각하나요?'},
      {who: 'Your Turn', en: 'So who is art in the city for? It is for everyone, but most of all, it is for the people who live there. Next time you visit a mural village, enjoy the art quietly and respect the residents.',
       ko: '그렇다면 도시의 예술은 누구를 위한 것일까요? 모두를 위한 것이지만, 무엇보다 그곳에 사는 사람들을 위한 것입니다. 다음에 벽화 마을을 찾을 때는 조용히 예술을 즐기고 주민을 존중하세요.',
       check: {q: 'Who is art in the city most of all for?', a: 'The people who live there.'}, think: '벽화 마을 방문 예절 세 가지를 만들어 보자.'}
    ],
    split: 3,
    next: '예술은 언제나\n동네를 행복하게 할까?',
    recap: {q: '감천문화마을은 어떻게 바뀌었을까?', items: [{k: 'BEFORE', v: 'a poor, quiet village which young people left'}, {k: 'CHANGE', v: 'artists and residents painted it together (2009)'}, {k: 'NOW', v: 'a place which millions of visitors love'}]},
    tf: [
      {p: 1, s: 'Refugees built small houses in Gamcheon.', a: true},
      {p: 2, s: 'Only artists from Seoul painted Gamcheon Village.', a: false, why: '예술가와 주민이 함께 칠했다.'},
      {p: 3, s: 'Wynwood used to be full of empty warehouses.', a: true},
      {p: 4, s: 'The residents of Ihwa-dong enjoyed the noise.', a: false, why: '몇몇 주민에게 소음이 너무 심했다.'},
      {p: 5, s: 'Some residents painted over the famous stairs.', a: true},
      {p: 6, s: 'The writer says art is only for visitors.', a: false, why: '무엇보다 사는 사람들을 위한 것.'}
    ],
    key: [
      {en: 'Walls {{used to be}} just walls.', note: 'used to + 동사원형: 예전에는 ~이었다', g: 'g2'},
      {en: 'Let’s visit three places {{that art has changed}}.', note: '목적격 관계대명사 that (has changed의 목적어 = places)', g: 'g1'},
      {en: 'It {{used to be}} a poor and quiet village {{which young people left}}.', note: 'used to + 목적격 관계대명사 which', g: 'g2'},
      {en: 'It is a place {{which millions of visitors love}}.', note: 'which + 주어 + 동사 (love의 목적어 = a place)', g: 'g1'},
      {en: 'The walls {{which they painted}} turned the area into an outdoor museum.', note: '주어(The walls)를 꾸미는 목적격 관계대명사절', g: 'g1'},
      {en: 'The art {{which visitors loved}} was gone.', note: '목적격 관계대명사절 + 동사 was', g: 'g1'}
    ],
    summary: {text: 'Gamcheon {{used to}} be a poor village, but artists and {{residents}} painted it together. Wynwood’s empty {{warehouses}} became an outdoor museum. In Ihwa-dong, tourists made too much {{noise}}, so some residents painted over the stairs. Art in the city is most of all for the people who {{live}} there, so we should {{respect}} them.'},
    order: ['Refugees built houses in Gamcheon.', 'Young people left the village.', 'Artists and residents painted it together.', 'Millions of visitors came to see it.'],
    chart: {title: 'THREE PLACES', ko: '세 장소 비교하기', cols: ['Before', 'Change', 'Now'], note: '세 번째 장소만 결과가 다르다는 점에 주목하게 하고, 그 까닭을 관통 질문과 연결한다.', rows: [
      {name: 'Gamcheon', cells: ['a poor, quiet village', 'artists and residents painted together', 'loved by visitors and residents']},
      {name: 'Wynwood', cells: ['empty warehouses', 'artists painted the walls', 'an outdoor museum']},
      {name: 'Ihwa', cells: ['painted stairs became popular', 'too many tourists and noise', 'some murals were painted over']}
    ]},
    wrap: {en: 'Art in the city is for ______. A place in my town used to ______. If I visit a mural village, I will ______.', ko: '관통 질문으로 돌아가기: 도시 예술에 대한 나의 생각을 세 문장으로 쓰기'}
  },

  quiz: [
    ['“벽화”를 뜻하는 낱말은?', ['mural', 'canvas', 'gallery', 'warehouse'], 0, 'mural: 벽화'],
    ['“resident”의 뜻은?', ['예술가', '주민', '방문객', '관광 안내원'], 1, 'resident: 주민'],
    ['“empty”의 반대말은?', ['full', 'gray', 'public', 'colorful'], 0, 'empty(빈) ↔ full(가득 찬)'],
    ['“They ___ over the mural.” (덧칠해 지웠다)', ['took', 'turned', 'painted', 'removed'], 2, 'paint over: 덧칠해 지우다'],
    ['“The residents are proud ___ their village.”', ['in', 'at', 'for', 'of'], 3, 'be proud of'],
    ['교통수단을 묻는 표현은?', ['How long will it take?', 'How can I get to the museum?', 'How do you like it?', 'How much is it?'], 1, 'How can I get to ~?'],
    ['“How long will it take?”에 알맞은 대답은?', ['By bus.', 'It’s next to the café.', 'It’ll take about 20 minutes.', 'Take bus No. 7.'], 2, 'It’ll take about ~.'],
    ['Let’s Watch에서 미아가 먼저 하자고 한 일은?', ['물감 사기', '벽 청소하기', '정원 그리기', '이웃에게 묻기'], 3, 'Let’s ask them first.'],
    ['빈칸에 알맞은 것은? “This is the photo ___ I took.”', ['who', 'which', 'what', 'where'], 1, '사물 + 목적격 관계대명사 which'],
    ['다음 문장에서 생략할 수 있는 낱말은? “The artist who I met was kind.”', ['I', 'who', 'met', 'was'], 1, '목적격 관계대명사는 생략 가능'],
    ['빈칸에 알맞은 것은? “This street used to ___ dark.”', ['be', 'is', 'being', 'been'], 0, 'used to + 동사원형'],
    ['어법상 틀린 문장은?', ['I used to draw.', 'It used to be empty.', 'This is the wall which I painted it.', 'The village we visited was colorful.'], 2, '관계대명사 뒤에 목적어 it을 또 쓰지 않는다.'],
    ['감천 마을에 처음 집을 지은 사람들은?', ['피난민들', '화가들', '관광객들', '외국인들'], 0, 'refugees built small houses'],
    ['윈우드가 바뀐 모습은?', ['큰 공장', '야외 미술관', '주차장', '조용한 마을'], 1, 'an outdoor museum'],
    ['이화동 이야기가 주는 교훈은?', ['벽화는 비싸다', '관광객이 많을수록 좋다', '사진은 집 앞에서 찍어야 한다', '동네는 누군가의 집이라는 것'], 3, 'It is someone’s home.']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {canvas: '/ˈkænvəs/', mural: '/ˈmjʊrəl/', artist: '/ˈɑːrtɪst/', neighborhood: '/ˈneɪbərhʊd/', resident: '/ˈrezɪdənt/', visitor: '/ˈvɪzɪtər/', warehouse: '/ˈwerhaʊs/', popular: '/ˈpɑːpjələr/', colorful: '/ˈkʌlərfl/', empty: '/ˈempti/', artwork: '/ˈɑːrtwɜːrk/', lively: '/ˈlaɪvli/', 'well-known': '/ˌwel ˈnoʊn/', form: '/fɔːrm/', represent: '/ˌreprɪˈzent/', figure: '/ˈfɪɡjər/', spray: '/spreɪ/', message: '/ˈmesɪdʒ/', tiny: '/ˈtaɪni/', pleasure: '/ˈpleʒər/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'neighborhood', ko: '동네, 이웃', parts: [{t: 'neighbor', k: 'root', m: '이웃 사람'}, {t: 'hood', k: 'suf', m: '~의 상태·집단'}], family: ['childhood', 'brotherhood'], note: '-hood = 상태·무리(child → childhood 어린 시절).'},
    {w: 'represent', ko: '나타내다', parts: [{t: 're', k: 'pre', m: '다시'}, {t: 'present', k: 'root', m: '보여 주다, 내놓다'}], family: ['present', 'presentation', 'representative'], note: '다시(re) 눈앞에 내놓다(present) → 나타내다, 상징하다.'},
    {w: 'warehouse', ko: '창고', parts: [{t: 'ware', k: 'root', m: '물건, 상품'}, {t: 'house', k: 'root', m: '집'}], family: ['software', 'hardware'], note: '물건(ware)을 두는 집(house) → 창고.'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: '목적격 관계대명사는 왜 생략할 수 있을까?',
    pic: [{en: 'the art', ko: '꾸밈을 받는 명사'}, {en: '(which)', ko: '목적어 노릇 — 생략 가능', hot: true}, {en: 'visitors loved', ko: '주어 + 동사'}],
    core: '목적격 관계대명사는 뒤 문장의 목적어를 대신하면서 앞 명사를 꾸미는 문장을 붙여 준다. 뒤에 “주어 + 동사”가 바로 와서 관계가 분명하므로 자주 생략한다.',
    why: ['사람이면 who(m), 사물이면 which, 둘 다 that.', '뒤 문장에는 목적어가 빠져 있다 (visitors loved ___).', '주격 관계대명사(뒤에 바로 동사)는 생략할 수 없다.']
  };
  g1.anim = [{title: '두 문장을 which로 묶고, 생략하기', states: [
    {t: 'The art/S#art | was | removed/V | . | / | Visitors/S#v | loved/V#l | it/O#it | .', note: '같은 것(the art = it)이 두 번', ko: '그 예술은 지워졌다. 방문객들은 그것을 사랑했다.'},
    {t: 'The art/S#art | which/X#it | visitors/S#v | loved/V#l | was | removed/V | .', note: 'it → which (목적어 노릇), 명사 바로 뒤로', ko: '방문객들이 사랑한 예술은 지워졌다.'},
    {t: 'The art/S#art | visitors/S#v | loved/V#l | was | removed/V | .', note: '목적격은 생략 가능 (명사 + 주어 + 동사)', ko: '같은 뜻'}]}];
  g1.contrast = {title: '주격 vs 목적격 — 뒤에 무엇이 오나', pairs: [
    {a: 'the artist {{who}} painted the wall', ka: '벽을 칠한 화가 (뒤에 바로 동사 → 주격, 생략 ✗)', b: 'the wall {{(which)}} the artist painted', kb: '화가가 칠한 벽 (뒤에 주어 + 동사 → 목적격, 생략 가능)'}],
    point: '관계대명사 뒤가 “주어 + 동사”면 목적격이고 생략할 수 있다.'};
  g2.principle = {
    q: 'used to는 왜 “예전에는 ~했다(지금은 아니다)”일까?',
    pic: [{en: 'past', ko: '예전에 늘 그랬다', hot: true}, {en: '→ now', ko: '지금은 아니다'}],
    core: 'used to + 동사원형은 과거에 반복되던 습관이나 상태가 지금은 계속되지 않음을 나타낸다. 과거와 현재의 대비가 핵심이다.',
    why: ['used to 뒤에는 동사원형 (used to be, used to live).', '부정·의문: didn’t use to ~ / Did you use to ~?', 'be used to -ing(~에 익숙하다)와 모양이 비슷하니 주의.']
  };
  g2.anim = [{title: '예전과 지금을 한 문장에', states: [
    {t: 'The walls/S | were/V#v | gray/C#c | before | . | / | They | are not | gray | now | .', note: '예전 상태 + 지금은 아님', ko: '벽은 예전에 회색이었다. 지금은 회색이 아니다.'},
    {t: 'The walls/S | used to/X | be/V#v | gray/C#c | .', note: 'used to + 동사원형 = 예전엔 ~였다 (지금은 아님)', ko: '그 벽들은 예전에는 회색이었다.'}]}];
  g2.contrast = {title: 'used to vs be used to', pairs: [
    {a: 'I {{used to}} live in Busan.', ka: '나는 예전에 부산에 살았다. (지금은 아님, + 동사원형)', b: 'I {{am used to}} living in Seoul.', kb: '나는 서울에 사는 데 익숙하다. (+ -ing)'}],
    point: 'used to + 원형 = 예전엔 ~했다 / be used to + -ing = ~에 익숙하다.'};
})(window.LESSON);
