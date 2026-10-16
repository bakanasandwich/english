/* 중2 영어(동아·윤정미) Lesson 5 · The City as a Canvas
   단원명과 문법(목적격 관계대명사, used to)은 교과서 목차·문제집 목차 기준.
   의사소통 기능은 추정(estimate: true). 대화문·읽기 글은 교과서 원문이 아니라 새로 쓴 글입니다.
   읽기 글의 장소(감천문화마을, 윈우드 월스, 이화 벽화마을)는 널리 알려진 사실을 바탕으로 했습니다. */
window.LESSON = {
  book: 'm2-donga', no: 5, estimate: true,
  title: 'The City as a Canvas', ko: '도시라는 캔버스',
  bigQ: {en: 'Who is art in the city for?', ko: '도시의 예술은 누구를 위한 것일까?'},
  goals: {
    vocab: ['도시·예술과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 우리 동네의 장소를 한 문장으로 설명할 수 있다.'],
    talk: ['작품이나 장소에 대한 감상을 묻고 답할 수 있다.', '길을 묻고 안내할 수 있다.'],
    grammar: ['목적격 관계대명사로 사람·사물을 자세히 설명할 수 있다.', 'used to로 과거의 습관이나 상태를 말할 수 있다.'],
    read1: ['글의 주제를 예측하고, 감천문화마을이 바뀐 과정을 이해할 수 있다.'],
    read2: ['세 장소의 과거와 현재를 비교하고, 공공 예술에 대한 나의 생각을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'Is there a wall painting near your home or school?', ko: '집이나 학교 근처에 벽화가 있나요?', note: '사진을 찍어 둔 학생이 있으면 보여 주게 한다. 없으면 “회색 벽과 그림 있는 벽 중 어디를 걷고 싶나?”로 바꿔 묻는다.'},
    words: [
      {w: 'canvas', pos: 'n.', ko: '캔버스, 화폭', ic: '🖼️', ex: 'The wall became a huge canvas.', exKo: '그 벽은 거대한 캔버스가 되었다.'},
      {w: 'mural', pos: 'n.', ko: '벽화', ic: '🎨', ex: 'Students painted a mural at school.', exKo: '학생들이 학교에 벽화를 그렸다.'},
      {w: 'artist', pos: 'n.', ko: '예술가, 화가', ic: '👩‍🎨', ex: 'The artist used bright colors.', exKo: '그 화가는 밝은 색을 썼다.'},
      {w: 'neighborhood', pos: 'n.', ko: '동네, 이웃', ic: '🏘️', ex: 'Our neighborhood is quiet.', exKo: '우리 동네는 조용하다.'},
      {w: 'village', pos: 'n.', ko: '마을', ic: '🏡', ex: 'The village is on a hill.', exKo: '그 마을은 언덕 위에 있다.'},
      {w: 'resident', pos: 'n.', ko: '주민', ic: '🧑‍🤝‍🧑', ex: 'The residents painted their houses.', exKo: '주민들이 집을 칠했다.'},
      {w: 'visitor', pos: 'n.', ko: '방문객', ic: '🧳', ex: 'Many visitors take photos here.', exKo: '많은 방문객이 여기서 사진을 찍는다.'},
      {w: 'colorful', pos: 'adj.', ko: '다채로운, 알록달록한', ic: '🌈', ex: 'The houses are colorful.', exKo: '집들이 알록달록하다.'},
      {w: 'empty', pos: 'adj.', ko: '텅 빈', ic: '🫙', ex: 'The street used to be empty.', exKo: '그 거리는 예전에 텅 비어 있었다.'},
      {w: 'gray', pos: 'adj.', ko: '회색의', ic: '🩶', ex: 'The old walls were gray.', exKo: '오래된 벽은 회색이었다.'},
      {w: 'public', pos: 'adj.', ko: '공공의', ic: '🏛️', ex: 'Public art is for everyone.', exKo: '공공 예술은 모두를 위한 것이다.'},
      {w: 'turn', pos: 'v.', ko: '바뀌다, 변하다', ic: '🔄', ex: 'The area turned into an art street.', exKo: '그 지역은 예술 거리로 바뀌었다.'},
      {w: 'noise', pos: 'n.', ko: '소음', ic: '🔊', ex: 'The noise kept me awake.', exKo: '소음 때문에 잠을 못 잤다.'},
      {w: 'respect', pos: 'v./n.', ko: '존중하다; 존중', ic: '🤝', ex: 'Respect the people who live here.', exKo: '여기 사는 사람들을 존중하라.'},
      {w: 'local', pos: 'adj.', ko: '지역의', ic: '📍', ex: 'Local artists joined the project.', exKo: '지역 예술가들이 그 사업에 참여했다.'},
      {w: 'warehouse', pos: 'n.', ko: '창고', ic: '🏭', ex: 'The old warehouse is now a gallery.', exKo: '그 오래된 창고는 이제 미술관이다.'},
      {w: 'gallery', pos: 'n.', ko: '미술관, 화랑', ic: '🖌️', ex: 'We visited a small gallery.', exKo: '우리는 작은 미술관을 방문했다.'},
      {w: 'stair', pos: 'n.', ko: '계단 (한 칸)', ic: '🪜', ex: 'Flowers were painted on the stairs.', exKo: '계단에 꽃이 그려져 있었다.'},
      {w: 'remove', pos: 'v.', ko: '없애다, 제거하다', ic: '🧽', ex: 'They removed the old posters.', exKo: '그들은 오래된 포스터를 떼어 냈다.'},
      {w: 'popular', pos: 'adj.', ko: '인기 있는', ic: '⭐', ex: 'This place is popular with tourists.', exKo: '이곳은 관광객에게 인기 있다.'}
    ],
    phrases: [
      {w: 'used to', ko: '(예전에) ~하곤 했다, ~이었다', ex: 'This street used to be dark.', exKo: '이 거리는 예전에 어두웠다.'},
      {w: 'turn A into B', ko: 'A를 B로 바꾸다', ex: 'They turned the wall into art.', exKo: '그들은 벽을 예술로 바꾸었다.'},
      {w: 'take a picture', ko: '사진을 찍다', ex: 'Let’s take a picture here.', exKo: '여기서 사진 찍자.'},
      {w: 'get lost', ko: '길을 잃다', ex: 'It’s easy to get lost in the alleys.', exKo: '골목에서 길을 잃기 쉽다.'},
      {w: 'paint over', ko: '(그림 위를) 덧칠해 지우다', ex: 'They painted over the mural.', exKo: '그들은 벽화를 덧칠해 지웠다.'},
      {w: 'be proud of', ko: '~을 자랑스러워하다', ex: 'The residents are proud of their village.', exKo: '주민들은 마을을 자랑스러워한다.'}
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
    hook: {en: 'What place in your town do you want to show a visitor?', ko: '우리 동네에서 방문객에게 보여 주고 싶은 곳은?', note: '장소를 고르고 까닭을 말하게 한다. 그곳까지 가는 길을 영어로 설명해야 한다면? 으로 Listen & Talk 2를 예고한다.'},
    speakers: {Haeun: {voice: 0, pitch: 1.1}, Noah: {voice: 1, pitch: .95}, Tourist: {voice: 2, pitch: 1}, Junho: {voice: 1, pitch: .9}, Mia: {voice: 0, pitch: 1.15}, Guide: {voice: 2, pitch: .95}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '감상 묻고 답하기',
        key: {q: ['How do you like ~?', 'What do you think of ~?', 'What do you like about ~?'], a: ['I love it. / It’s great.', 'I like the ~ the most.', 'It’s not my style.']},
        note: 'How do you like ~?는 ‘마음에 드니?’라는 감상 질문. 좋거나 싫은 까닭을 덧붙이게 한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '벽화 거리, 큰 고래 그림 앞', lines: [
            {s: 'Haeun', en: 'Noah, {{how do you like}} this mural?', ko: '노아, 이 벽화 어때?'},
            {s: 'Noah', en: 'I love it! The whale looks like it’s swimming in the sky.', ko: '정말 좋아! 고래가 하늘에서 헤엄치는 것 같아.'},
            {s: 'Haeun', en: '{{What do you like about}} it the most?', ko: '어떤 점이 가장 좋아?'},
            {s: 'Noah', en: '{{I like}} the colors {{the most}}. They’re so bright.', ko: '색이 가장 좋아. 정말 밝잖아.'},
            {s: 'Haeun', en: 'This wall used to be gray and dirty.', ko: '이 벽은 예전에 회색이고 더러웠어.'},
            {s: 'Noah', en: 'Really? It’s hard to believe.', ko: '정말? 믿기 어렵다.'}
          ]},
          { title: 'Dialogue B', setting: '미술관 야외 조각 앞', lines: [
            {s: 'A', en: '{{What do you think of}} this sculpture?', ko: '이 조각 어떻게 생각해?'},
            {s: 'B', en: 'Honestly, {{it’s not my style}}. It looks too strange.', ko: '솔직히 내 취향은 아니야. 너무 이상해 보여.'},
            {s: 'A', en: 'I think it’s interesting. It changes with the light.', ko: '난 흥미로운데. 빛에 따라 바뀌잖아.'},
            {s: 'B', en: 'Oh, I didn’t notice that.', ko: '아, 그건 몰랐어.'}
          ]}
        ],
        check: [
          {q: 'What does the whale look like?', a: 'It looks like it’s swimming in the sky.'},
          {q: 'What does Noah like the most?', a: 'The colors.'},
          {q: 'What did the wall use to look like?', a: 'It used to be gray and dirty.'}
        ],
        drill: {frame: ['A: How do you like ____?', 'B: I love it. I like the colors.'], opts: ['this mural', 'the new park', 'my drawing', 'the street art', 'this photo', 'the city map']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '길 묻고 안내하기',
        key: {q: ['How can I get to ~?', 'Where is ~?', 'Is there ~ near here?'], a: ['Go straight (two blocks).', 'Turn left/right at ~.', 'It’s next to / across from ~.']},
        note: '길을 안내할 때 Go straight → Turn left/right at ~ → It’s next to ~ 순서로 말하게 한다. 지도를 함께 띄워 손가락으로 따라가면 좋다.',
        dialogs: [
          { title: 'Dialogue A', setting: '감천문화마을 입구', lines: [
            {s: 'Tourist', en: 'Excuse me. {{How can I get to}} the Little Prince statue?', ko: '실례합니다. 어린 왕자 조형물에 어떻게 가나요?'},
            {s: 'Junho', en: '{{Go straight}} for two blocks.', ko: '두 블록 곧장 가세요.'},
            {s: 'Tourist', en: 'Two blocks. And then?', ko: '두 블록이요. 그다음은요?'},
            {s: 'Junho', en: '{{Turn right at}} the blue house. It’s {{next to}} a small café.', ko: '파란 집에서 오른쪽으로 도세요. 작은 카페 옆에 있어요.'},
            {s: 'Tourist', en: 'Thank you so much!', ko: '정말 고맙습니다!'},
            {s: 'Junho', en: 'You’re welcome. Please be quiet in the alleys. People live there.', ko: '천만에요. 골목에서는 조용히 해 주세요. 사람들이 살거든요.'}
          ]},
          { title: 'Dialogue B', setting: '시내, 지하철역 앞', lines: [
            {s: 'A', en: '{{Is there}} an art gallery {{near here}}?', ko: '이 근처에 미술관이 있나요?'},
            {s: 'B', en: 'Yes. Turn left at the bank. It’s {{across from}} the library.', ko: '네. 은행에서 왼쪽으로 도세요. 도서관 맞은편에 있어요.'},
            {s: 'A', en: 'Is it far?', ko: '먼가요?'},
            {s: 'B', en: 'No, it’s only a five-minute walk.', ko: '아니요, 걸어서 5분이면 돼요.'}
          ]}
        ],
        check: [
          {q: 'Where does the tourist want to go?', a: 'To the Little Prince statue.'},
          {q: 'Where is the statue?', a: 'It’s next to a small café (after turning right at the blue house).'},
          {q: 'Where is the art gallery?', a: 'It’s across from the library.'}
        ],
        drill: {frame: ['A: How can I get to ____?', 'B: Go straight and turn left.'], opts: ['the museum', 'the bus stop', 'the park', 'the library', 'the mural street', 'the subway station']}
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
    ['감상을 묻는 표현은?', ['Where is it?', 'How can I get there?', 'How do you like it?', 'Is there a bank near here?'], 2, 'How do you like ~?'],
    ['길을 안내하는 표현이 아닌 것은?', ['Go straight.', 'Turn left at the bank.', 'It’s next to the café.', 'It’s not my style.'], 3, 'It’s not my style.은 감상을 말하는 표현.'],
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
