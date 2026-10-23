/* 중1 영어(동아·윤정미) Lesson 4 · The Joy of Traveling
   단원명과 문법(동명사, be going to)은 교과서·문제집 목차 기준. 의사소통 기능은 추정(estimate: true).
   대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글입니다. 제주 관련 정보는 널리 알려진 사실입니다. */
window.LESSON = {
  book: 'm1-donga', no: 4, estimate: true,
  title: 'The Joy of Traveling', ko: '여행의 즐거움',
  bigQ: {en: 'What makes traveling special?', ko: '여행은 무엇이 특별할까?'},
  goals: {
    vocab: ['여행과 관련된 낱말 16개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 가고 싶은 곳을 한 문장으로 말할 수 있다.'],
    talk: ['계획을 묻고 답할 수 있다.', '장소를 추천하고 그 까닭을 말할 수 있다.'],
    grammar: ['동명사(-ing)를 주어·목적어·보어로 쓸 수 있다.', 'be going to로 미래의 계획을 말할 수 있다.'],
    read1: ['여행 블로그의 앞부분을 읽고 여행 계획과 첫날 일을 이해할 수 있다.'],
    read2: ['여행에서 배운 점을 이해하고, 나의 여행 계획을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'Where do you want to go on your next vacation?', ko: '다음 방학에 어디에 가고 싶나요?', note: '국내·해외 모두 좋다. 가고 싶은 곳과 그곳에서 하고 싶은 일을 묻는다. 하고 싶은 일이 동명사와 연결된다.'},
    words: [
      {w: 'travel', pos: 'v./n.', ko: '여행하다; 여행', ic: '✈️', audio: 'assets/audio/travel.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I love to travel with my family.', exKo: '나는 가족과 여행하는 것을 좋아한다.'},
      {w: 'trip', pos: 'n.', ko: '여행', ic: '🧳', audio: 'assets/audio/trip.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We went on a trip to Jeju.', exKo: '우리는 제주로 여행을 갔다.'},
      {w: 'plan', pos: 'n./v.', ko: '계획; 계획하다', ic: '🗓️', audio: 'assets/audio/plan.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'What are your plans for the summer?', exKo: '여름 계획이 뭐야?'},
      {w: 'pack', pos: 'v.', ko: '(짐을) 싸다', ic: '🎒', ex: 'Pack your bag tonight.', exKo: '오늘 밤에 가방을 싸라.'},
      {w: 'beach', pos: 'n.', ko: '해변', ic: '🏖️', audio: 'assets/audio/beach.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Let’s swim at the beach.', exKo: '해변에서 수영하자.'},
      {w: 'mountain', pos: 'n.', ko: '산', ic: '⛰️', audio: 'assets/audio/mountain.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Hallasan is a high mountain.', exKo: '한라산은 높은 산이다.'},
      {w: 'famous', pos: 'adj.', ko: '유명한', ic: '⭐', audio: 'assets/audio/famous.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'This place is famous for its view.', exKo: '이곳은 경치로 유명하다.'},
      {w: 'local', pos: 'adj.', ko: '그 지역의', ic: '📍', audio: 'assets/audio/local.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Try the local food.', exKo: '그 지역 음식을 먹어 봐라.'},
      {w: 'view', pos: 'n.', ko: '경치, 전망', ic: '🌄', audio: 'assets/audio/view.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The view from the top was amazing.', exKo: '꼭대기에서 본 경치는 놀라웠다.'},
      {w: 'ticket', pos: 'n.', ko: '표, 티켓', ic: '🎫', audio: 'assets/audio/ticket.mp3', audioCredit: 'Association Shtooka, Judith Franck · CC BY 3.0 (Wikimedia Commons, UK)', ex: 'I bought a plane ticket.', exKo: '나는 비행기 표를 샀다.'},
      {w: 'airport', pos: 'n.', ko: '공항', ic: '🛫', audio: 'assets/audio/airport.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We arrived at the airport early.', exKo: '우리는 공항에 일찍 도착했다.'},
      {w: 'map', pos: 'n.', ko: '지도', ic: '🗺️', audio: 'assets/audio/map.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Let’s check the map.', exKo: '지도를 확인하자.'},
      {w: 'souvenir', pos: 'n.', ko: '기념품', ic: '🎁', ex: 'I bought a souvenir for my friend.', exKo: '나는 친구에게 줄 기념품을 샀다.'},
      {w: 'experience', pos: 'n.', ko: '경험', ic: '🌟', audio: 'assets/audio/experience.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'It was a new experience.', exKo: '그것은 새로운 경험이었다.'},
      {w: 'culture', pos: 'n.', ko: '문화', ic: '🏯', audio: 'assets/audio/culture.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I want to learn about Japanese culture.', exKo: '나는 일본 문화에 대해 배우고 싶다.'},
      {w: 'arrive', pos: 'v.', ko: '도착하다', ic: '📍', audio: 'assets/audio/arrive.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We arrived in Jeju at noon.', exKo: '우리는 정오에 제주에 도착했다.'}
    ],
    phrases: [
      {w: 'go on a trip', ko: '여행을 가다', ex: 'We will go on a trip this summer.', exKo: '우리는 이번 여름에 여행을 갈 것이다.'},
      {w: 'take pictures', ko: '사진을 찍다', ex: 'I love taking pictures.', exKo: '나는 사진 찍는 것을 아주 좋아한다.'},
      {w: 'be famous for', ko: '~으로 유명하다', ex: 'Jeju is famous for its oranges.', exKo: '제주는 귤로 유명하다.'},
      {w: 'look around', ko: '둘러보다', ex: 'Let’s look around the market.', exKo: '시장을 둘러보자.'},
      {w: 'try new food', ko: '새로운 음식을 먹어 보다', ex: 'Trying new food is exciting.', exKo: '새로운 음식을 먹어 보는 것은 신난다.'},
      {w: 'can’t wait', ko: '몹시 기다려지다', ex: 'I can’t wait for the trip!', exKo: '여행이 너무 기다려져!'}
    ],
    pairs: [
      {a: 'arrive', b: 'leave', rel: '반대말'},
      {a: 'trip', b: 'travel', rel: '비슷한 말'},
      {a: 'famous', b: 'well-known', rel: '비슷한 말'},
      {a: 'travel', b: 'traveler', rel: '동사 / 사람'}
    ],
    wrap: {en: 'I want to go to ______. It is famous for ______.', ko: '오늘 배운 낱말로 가고 싶은 곳 소개하기'}
  },

  talk: {
    hook: {en: 'What do you pack for a trip?', ko: '여행 갈 때 무엇을 챙기나요?', note: '칠판에 학생들이 말하는 물건을 영어로 적어 준다(charger, sunscreen, camera…). 여행 계획 묻기로 이어진다.'},
    speakers: {Dana: {voice: 0, pitch: 1.15}, Minho: {voice: 1, pitch: .95}, Kai: {voice: 1, pitch: 1}, Seoa: {voice: 0, pitch: 1.1}, Mom: {voice: 2, pitch: 1.05}, Dad: {voice: 2, pitch: .85}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '계획 묻고 답하기',
        key: {q: ['What are you going to do ~?', 'Where are you going to go?'], a: ['I’m going to ~.', 'We’re going to visit ~.', 'I’m not sure yet.']},
        note: 'be going to + 동사원형으로 계획을 말한다. 3차시 be going to와 그대로 이어진다.',
        dialogs: [
          { title: 'Dialogue A', setting: '방학식 날, 교실', lines: [
            {s: 'Dana', en: 'Minho, {{what are you going to do}} this vacation?', ko: '민호야, 이번 방학에 뭐 할 거야?'},
            {s: 'Minho', en: '{{I’m going to}} visit Jeju with my family.', ko: '가족이랑 제주에 갈 거야.'},
            {s: 'Dana', en: 'Wow! {{What are you going to do}} there?', ko: '와! 거기서 뭐 할 거야?'},
            {s: 'Minho', en: '{{We’re going to}} climb Hallasan and eat local food.', ko: '한라산에 오르고 그 지역 음식을 먹을 거야.'},
            {s: 'Dana', en: 'Sounds great. Take a lot of pictures!', ko: '좋겠다. 사진 많이 찍어!'}
          ]},
          { title: 'Dialogue B', setting: '쉬는 시간', lines: [
            {s: 'A', en: '{{Where are you going to go}} this weekend?', ko: '이번 주말에 어디 갈 거야?'},
            {s: 'B', en: '{{I’m not sure yet}}. Maybe the aquarium.', ko: '아직 잘 모르겠어. 아마 수족관.'},
            {s: 'A', en: 'I’m going to the aquarium, too!', ko: '나도 수족관 가는데!'},
            {s: 'B', en: 'Really? Let’s go together.', ko: '정말? 같이 가자.'}
          ]}
        ],
        check: [
          {q: 'Where is Minho going to go?', a: 'He is going to visit Jeju.'},
          {q: 'What is Minho going to do there?', a: 'Climb Hallasan and eat local food.'},
          {q: 'Where are A and B going to go?', a: 'To the aquarium.'}
        ],
        drill: {frame: ['A: What are you going to do this vacation?', 'B: I’m going to ____.'], opts: ['visit Busan', 'go camping', 'learn to swim', 'read ten books', 'travel to Japan', 'see my cousins']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '추천하고 까닭 말하기',
        key: {q: ['Can you recommend a place?', 'Where should I go?'], a: ['How about ~?', 'You should visit ~.', 'It’s famous for ~.']},
        note: 'You should + 동사원형 / How about + 명사·-ing로 추천하고, It’s famous for ~ / because ~로 까닭을 붙인다.',
        dialogs: [
          { title: 'Dialogue A', setting: '점심시간, 휴대폰으로 지도를 보며', lines: [
            {s: 'Kai', en: 'Seoa, I’m going to Gyeongju next week. {{Can you recommend a place}}?', ko: '서아야, 다음 주에 경주 가. 장소 좀 추천해 줄래?'},
            {s: 'Seoa', en: '{{How about}} Bulguksa?', ko: '불국사 어때?'},
            {s: 'Kai', en: 'Bulguksa? Why?', ko: '불국사? 왜?'},
            {s: 'Seoa', en: '{{It’s famous for}} its old stone towers. The view is beautiful, too.', ko: '오래된 석탑으로 유명해. 경치도 아름다워.'},
            {s: 'Kai', en: 'Great. I’ll go there.', ko: '좋아. 거기 갈게.'}
          ]},
          { title: 'Dialogue B', setting: '저녁, 거실', lines: [
            {s: 'A', en: 'Dad, {{where should I go}} for a school trip report?', ko: '아빠, 수학여행 보고서 쓰려면 어디 가는 게 좋을까요?'},
            {s: 'B', en: '{{You should visit}} the National Museum.', ko: '국립 박물관에 가 보렴.'},
            {s: 'A', en: 'Why is it good?', ko: '왜 좋아요?'},
            {s: 'B', en: 'You can learn about Korean history there.', ko: '거기서 한국 역사를 배울 수 있거든.'}
          ]}
        ],
        check: [
          {q: 'Where is Kai going next week?', a: 'To Gyeongju.'},
          {q: 'What is Bulguksa famous for?', a: 'Its old stone towers.'},
          {q: 'Why should A visit the National Museum?', a: 'A can learn about Korean history there.'}
        ],
        drill: {frame: ['A: Where should I go?', 'B: How about ____?'], opts: ['Jeju Island', 'Busan', 'the zoo', 'the science museum', 'Namsan Tower', 'the beach']}
      }
    ],
    interviewEx: 'Hyun is going to go camping. She recommends Gangneung because it is famous for its beach.',
    watch: {
      label: 'Let’s Watch', title: 'Packing for Jeju', setting: '여행 전날 밤, 민호네 집. 엄마와 민호가 짐을 싼다.',
      lines: [
        {s: 'Mom', en: 'Minho, are you packing your bag?', ko: '민호야, 가방 싸고 있니?'},
        {s: 'Minho', en: 'Yes. I’m going to bring my camera. Taking pictures is my hobby.', ko: '네. 카메라 가져갈 거예요. 사진 찍기가 제 취미잖아요.'},
        {s: 'Mom', en: 'Good. Don’t forget your hiking shoes. We’re going to climb Hallasan.', ko: '좋아. 등산화 잊지 마. 한라산에 오를 거잖니.'},
        {s: 'Minho', en: 'Okay. What about my game console?', ko: '알겠어요. 게임기는요?'},
        {s: 'Mom', en: 'Leave it at home. Enjoy looking around!', ko: '그건 집에 두렴. 둘러보는 걸 즐기렴!'},
        {s: 'Minho', en: 'All right. I can’t wait!', ko: '알겠어요. 너무 기다려져요!'}
      ],
      check: [
        {q: 'What is Minho’s hobby?', a: 'Taking pictures.'},
        {q: 'Why does he need hiking shoes?', a: 'They are going to climb Hallasan.'},
        {q: 'What does Mom tell him to leave at home?', a: 'His game console.'}
      ]
    },
    wrap: {en: 'Tell your partner your vacation plan, and recommend a place to them.', ko: '방학 계획을 말하고, 짝에게 가 볼 곳을 까닭과 함께 추천하기'}
  },

  grammar: {
    cover: '-ing · going to',
    hook: {en: '{{Traveling}} is fun.  /  We {{are going to}} visit Jeju next week.', ko: '빈칸에 들어갈 말은 각각 어떤 뜻을 더해 줄까?', answer: 'Traveling은 ‘여행하는 것’(동명사 주어), are going to는 ‘~할 예정이다’(미래 계획)', note: '첫 문장의 주어가 무엇인지, 두 번째 문장은 언제 일인지(next week) 찾게 한다.'},
    points: [
      { id: 'g1', name: '동명사', short: '동명사', form: '동사원형 + -ing', meaning: '~하는 것, ~하기',
        notice: [
          {en: '{{Traveling}} is fun.', ko: '여행하는 것은 재미있다. (주어)'},
          {en: 'I enjoy {{trying}} new food.', ko: '나는 새로운 음식을 먹어 보는 것을 즐긴다. (목적어)'},
          {en: 'My hobby is {{taking}} pictures.', ko: '내 취미는 사진 찍기이다. (보어)'}
        ],
        rule: [
          {k: '주어', v: 'V-ing ~ + 단수 동사 (is)', ex: 'Swimming is good exercise.'},
          {k: '목적어', v: 'enjoy · finish · stop · like · love + V-ing', ex: 'We finished packing.'},
          {k: '보어', v: '주어 + be동사 + V-ing', ex: 'My dream is traveling around the world.'}
        ],
        check: [
          {q: '____ pictures is my hobby. (take)', a: 'Taking'},
          {q: 'I enjoy ____ in the sea. (swim)', a: 'swimming'},
          {q: 'We finished ____ our bags. (pack)', a: 'packing'},
          {q: 'Visiting museums ____ interesting. (be)', a: 'is'},
          {q: 'Her dream is ____ to Paris. (go)', a: 'going'}
        ],
        trap: {bad: 'Travel is fun with my family.', good: 'Traveling with my family is fun.', why: '‘~하는 것’이 주어일 때는 동명사(V-ing)를 쓴다.'},
        scramble: [
          {ko: '새로운 음식을 먹어 보는 것은 신난다.', en: 'Trying new food is exciting.'},
          {ko: '나는 해변에서 걷는 것을 즐긴다.', en: 'I enjoy walking on the beach.'},
          {ko: '내 취미는 기념품을 모으는 것이다.', en: 'My hobby is collecting souvenirs.'}
        ]
      },
      { id: 'g2', name: 'be going to', short: 'be going to', form: 'am / are / is + going to + 동사원형', meaning: '~할 예정이다, ~할 것이다',
        notice: [
          {en: 'I {{am going to}} climb Hallasan.', ko: '나는 한라산에 오를 예정이다.'},
          {en: 'We {{are going to}} visit Jeju next week.', ko: '우리는 다음 주에 제주에 갈 예정이다.'},
          {en: 'It {{is going to}} rain tomorrow.', ko: '내일 비가 올 것이다.'}
        ],
        rule: [
          {k: '쓰임', v: '미리 정한 계획, 곧 일어날 일', ex: 'She is going to buy a ticket.'},
          {k: '부정문', v: 'be동사 + not + going to', ex: 'I’m not going to stay home.'},
          {k: '의문문', v: 'Be동사 + 주어 + going to ~?', ex: 'Are you going to go camping? — Yes, I am.'}
        ],
        check: [
          {q: 'I ____ going to visit my aunt. (be)', a: 'am'},
          {q: 'They are going to ____ a train. (take)', a: 'take'},
          {q: 'He ____ going to swim today. (부정)', a: 'isn’t'},
          {q: '____ you going to pack tonight?', a: 'Are'},
          {q: 'We are going ____ leave at 7. (to)', a: 'to'}
        ],
        trap: {bad: 'We are going to visiting Busan.', good: 'We are going to visit Busan.', why: 'be going to 뒤에는 동사원형.'},
        scramble: [
          {ko: '나는 내일 짐을 쌀 예정이다.', en: 'I am going to pack tomorrow.'},
          {ko: '우리는 그 지역 음식을 먹을 것이다.', en: 'We are going to eat local food.'},
          {ko: '너는 사진을 찍을 거니?', en: 'Are you going to take pictures?'}
        ]
      }
    ],
    wrap: {en: '______ing is my favorite thing to do on a trip. I’m going to ______.', ko: '동명사 한 문장, be going to 한 문장으로 나의 여행 쓰기'},
    wrapEx: 'Taking pictures is my favorite thing on a trip. I’m going to visit Gangneung this summer.'
  },

  reading: {
    title: 'Minho’s Jeju Travel Blog', kind: '여행 블로그', cover: 'Jeju', coverKo: '떠나기 전 설렘', cover2: 'Journey', coverKo2: '여행이 가르쳐 준 것',
    before: [
      {q: 'Look at the title. What will Minho write about?', a: '제주 여행 (계획, 한 일, 느낀 점)'},
      {q: 'What do people write on a travel blog?', a: '장소, 음식, 사진, 느낀 점'}
    ],
    gloss: {'tangerines': '귤', 'Hallasan': '한라산', 'Olle trail': '올레길', 'oreum': '오름 (작은 화산)', 'peak': '정상', 'sweat': '땀', 'grilled': '구운', 'fishermen': '어부', 'haenyeo': '해녀 (잠수하는 여성)', 'diver': '잠수부'},
    paras: [
      {who: 'Before the Trip', en: 'Hi, everyone! Tomorrow my family is going to fly to Jeju for four days. Jeju is famous for its beaches, mountains, and tangerines. I’m so excited. I’m going to write about my trip here every day!',
       ko: '안녕, 여러분! 내일 우리 가족은 비행기를 타고 제주에 가서 4일 동안 머물 거예요. 제주는 해변과 산, 귤로 유명해요. 정말 신나요. 여기에 매일 여행 이야기를 쓸 거예요!',
       check: {q: 'How long is Minho’s family going to stay in Jeju?', a: 'For four days.'}, think: '여행 전날 밤 여러분의 기분은?'},
      {who: 'Day 1', en: 'We arrived at noon and walked along an Olle trail by the sea. The view was amazing. Walking by the sea is my new favorite thing! For dinner, we tried grilled fish.',
       ko: '우리는 정오에 도착해서 바닷가 올레길을 걸었어요. 경치가 놀라웠어요. 바닷가를 걷는 것이 제가 새로 가장 좋아하게 된 일이에요! 저녁으로는 생선구이를 먹어 봤어요.',
       check: {q: 'What did they do on Day 1?', a: 'They walked along an Olle trail by the sea.'}, think: '여행지에서 꼭 해 보고 싶은 일은?'},
      {who: 'Day 2', en: 'Today we climbed Hallasan. It is the highest mountain in South Korea. Climbing it was really hard, and I was covered in sweat. But at the top, I forgot everything. The view was the best!',
       ko: '오늘은 한라산에 올랐어요. 한라산은 대한민국에서 가장 높은 산이에요. 오르는 건 정말 힘들었고 땀범벅이 됐어요. 하지만 정상에서 모든 걸 잊었어요. 경치가 최고였거든요!',
       check: {q: 'What is Hallasan?', a: 'The highest mountain in South Korea.'}, think: '힘들지만 해냈던 경험이 있나요?'},
      {who: 'Day 3', en: 'We visited a small village and met a haenyeo. Haenyeo are women divers. They dive into the sea without air tanks. I asked her, “Is diving scary?” She smiled and said, “The sea is my friend.”',
       ko: '작은 마을에 가서 해녀 한 분을 만났어요. 해녀는 여성 잠수부예요. 산소통 없이 바다에 잠수해요. “잠수하는 거 무섭지 않으세요?” 하고 여쭤봤어요. 해녀분은 웃으며 “바다는 내 친구야.”라고 하셨어요.',
       check: {q: 'What do haenyeo do?', a: 'They dive into the sea without air tanks.'}, think: '해녀의 말은 무슨 뜻일까?'},
      {who: 'Day 4', en: 'Today is our last day. I bought tangerine chocolate as a souvenir for my friends. I took more than 300 pictures, but looking at them is not the same as being here.',
       ko: '오늘이 마지막 날이에요. 친구들에게 줄 기념품으로 귤 초콜릿을 샀어요. 사진을 300장 넘게 찍었지만, 사진을 보는 건 여기 있는 것과 같지 않아요.',
       check: {q: 'What souvenir did Minho buy?', a: 'Tangerine chocolate.'}, think: '사진과 직접 보는 것은 어떻게 다를까?'},
      {who: 'After the Trip', en: 'Traveling taught me something. New places, new food, and new people make me open my eyes. Next summer, I’m going to visit Gangwon-do. Where are you going to go?',
       ko: '여행은 저에게 무언가를 가르쳐 줬어요. 새로운 장소, 새로운 음식, 새로운 사람들이 제 눈을 뜨게 해 줘요. 다음 여름에는 강원도에 갈 거예요. 여러분은 어디에 갈 건가요?',
       check: {q: 'Where is Minho going to go next summer?', a: 'Gangwon-do.'}, think: '여러분의 다음 여행지는?'}
    ],
    split: 3,
    next: '민호는 해녀에게\n무엇을 배웠을까?',
    recap: {q: '민호의 첫 이틀은?', items: [{k: 'DAY 1', v: 'walked along an Olle trail, tried grilled fish'}, {k: 'DAY 2', v: 'climbed Hallasan, the best view'}]},
    tf: [
      {p: 0, s: 'Minho’s family is going to stay in Jeju for a week.', a: false, why: '4일 동안 머문다.'},
      {p: 1, s: 'Minho tried grilled fish for dinner.', a: true},
      {p: 2, s: 'Climbing Hallasan was easy.', a: false, why: '정말 힘들었다.'},
      {p: 3, s: 'Haenyeo dive without air tanks.', a: true},
      {p: 4, s: 'Minho bought tangerine chocolate.', a: true},
      {p: 5, s: 'Minho is going to visit Busan next summer.', a: false, why: '강원도에 갈 것이다.'}
    ],
    key: [
      {en: 'My family {{is going to fly}} to Jeju.', note: 'be going to + 동사원형', g: 'g2'},
      {en: '{{Walking}} by the sea {{is}} my new favorite thing!', note: '동명사 주어 + 단수 동사 is', g: 'g1'},
      {en: '{{Climbing}} it was really hard.', note: '동명사 주어', g: 'g1'},
      {en: '“Is {{diving}} scary?”', note: '동명사 주어 (의문문)', g: 'g1'},
      {en: '{{Looking}} at them is not the same as {{being}} here.', note: '동명사 주어 / 전치사 as 뒤 동명사', g: 'g1'},
      {en: 'Next summer, I {{am going to visit}} Gangwon-do.', note: 'be going to: 미래 계획', g: 'g2'}
    ],
    summary: {text: 'Minho’s family went to {{Jeju}} for four days. They walked along an Olle {{trail}} and climbed {{Hallasan}}. Minho met a {{haenyeo}} and bought tangerine chocolate as a {{souvenir}}. Next summer, he is going to {{visit}} Gangwon-do.'},
    order: ['They arrived in Jeju.', 'They walked along an Olle trail.', 'They climbed Hallasan.', 'They met a haenyeo.'],
    chart: {title: 'FOUR DAYS IN JEJU', ko: '날짜별로 정리하기', cols: ['Where', 'What'], note: '날짜별 장소와 한 일을 정리한 뒤, 과거시제로 친구에게 말하게 한다.', rows: [
      {name: 'Day 1', cells: ['an Olle trail', 'walked by the sea']},
      {name: 'Day 2', cells: ['Hallasan', 'climbed to the top']},
      {name: 'Day 3', cells: ['a small village', 'met a haenyeo']},
      {name: 'Day 4', cells: ['a shop', 'bought a souvenir']}
    ]},
    wrap: {en: 'I’m going to go to ______. ______ing is ______. Traveling is special because ______.', ko: '관통 질문으로 돌아가기: 나의 여행 계획과 여행이 특별한 까닭 쓰기'}
  },

  quiz: [
    ['“기념품”을 뜻하는 낱말은?', ['view', 'ticket', 'culture', 'souvenir'], 3, 'souvenir: 기념품'],
    ['“arrive”의 반대말은?', ['leave', 'pack', 'travel', 'visit'], 0, 'arrive ↔ leave'],
    ['“Jeju is famous ___ its tangerines.”', ['at', 'in', 'for', 'with'], 2, 'be famous for'],
    ['“가방을 싸다”를 영어로 하면?', ['plan a bag', 'pack a bag', 'take a bag', 'look a bag'], 1, 'pack: (짐을) 싸다'],
    ['계획을 묻는 표현은?', ['How was your trip?', 'Where should I go?', 'Can you recommend a place?', 'What are you going to do?'], 3, 'What are you going to do ~?'],
    ['추천하는 표현이 아닌 것은?', ['How about Busan?', 'You should visit Jeju.', 'I’m not sure yet.', 'It’s famous for its beach.'], 2, 'I’m not sure yet.은 계획이 아직 없을 때.'],
    ['Let’s Watch에서 민호가 가져가는 것은?', ['카메라', '게임기', '수영복', '노트북'], 0, 'I’m going to bring my camera.'],
    ['빈칸에 알맞은 것은? “___ pictures is my hobby.”', ['Take', 'Taking', 'Takes', 'To taking'], 1, '동명사 주어'],
    ['빈칸에 알맞은 것은? “I enjoy ___ in the sea.”', ['swim', 'swims', 'to swims', 'swimming'], 3, 'enjoy + 동명사'],
    ['어법상 틀린 문장은?', ['I am going to pack.', 'Are you going to go?', 'He is going to swims.', 'We are not going to stay.'], 2, 'He is going to swim.'],
    ['빈칸에 알맞은 것은? “They ___ going to visit Jeju.”', ['is', 'are', 'am', 'be'], 1, 'They + are'],
    ['민호네 가족이 제주에 머문 기간은?', ['나흘', '이틀', '사흘', '일주일'], 0, 'for four days'],
    ['해녀가 한 말은?', ['“바다는 내 친구야.”', '“잠수는 무서워.”', '“산이 더 좋아.”', '“사진을 찍어 줄래?”'], 0, '“The sea is my friend.”'],
    ['한라산에 대해 글에 나온 것은?', ['오르기 아주 쉽다', '바닷가 바로 옆에 있다', '귤이 아주 많이 난다', '대한민국에서 가장 높다'], 3, 'the highest mountain in South Korea'],
    ['민호가 다음 여름에 갈 곳은?', ['부산', '경주', '강원도', '제주도'], 2, 'I’m going to visit Gangwon-do.']
  ]
};
