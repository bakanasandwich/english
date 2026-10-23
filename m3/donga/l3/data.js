/* 중3 영어(동아·윤정미) Lesson 3 · Heroes Among Us — 가안
   2022 개정 중3 교과서 목차 공개 전, 중3 문법 순서에 맞춰 만든 가안 단원입니다.
   읽기 글의 세 인물은 실제 뉴스에서 흔히 볼 수 있는 일을 바탕으로 새로 지은 이야기 속 인물입니다. */
window.LESSON = {
  book: 'm3-donga', no: 3, estimate: true,
  title: 'Heroes Among Us', ko: '우리 곁의 영웅',
  bigQ: {en: 'What makes an ordinary person a hero?', ko: '평범한 사람을 영웅으로 만드는 것은 무엇일까?'},
  goals: {
    vocab: ['도움·용기와 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 내가 아는 영웅을 한 문장으로 소개할 수 있다.'],
    talk: ['들은 소식을 전하고 그에 반응할 수 있다.', '바람과 희망을 표현할 수 있다.'],
    grammar: ['현재분사와 과거분사로 명사를 꾸밀 수 있다.', 'too ~ to와 enough to로 정도를 표현할 수 있다.'],
    read1: ['뉴스 기사 형식의 글을 읽고 첫 번째 영웅의 행동을 이해할 수 있다.'],
    read2: ['세 영웅의 공통점을 찾아 요약하고, 내가 할 수 있는 작은 용기를 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'Who is a hero to you?', ko: '여러분에게 영웅은 누구인가요?', note: '슈퍼히어로, 운동선수, 가족 등 다양한 답이 나온다. “초능력이 없는 영웅”을 떠올려 보게 하며 단원을 연다.'},
    words: [
      {w: 'hero', pos: 'n.', ko: '영웅', ic: '🦸', audio: 'assets/audio/hero.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She is a real-life hero.', exKo: '그녀는 현실 속 영웅이다.'},
      {w: 'brave', pos: 'adj.', ko: '용감한', ic: '🦁', audio: 'assets/audio/brave.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'It was a brave thing to do.', exKo: '그것은 용감한 행동이었다.'},
      {w: 'rescue', pos: 'v./n.', ko: '구조하다; 구조', ic: '🛟', audio: 'assets/audio/rescue.mp3', audioCredit: 'Wikimedia Commons contributor · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Firefighters rescued the family.', exKo: '소방관들이 그 가족을 구조했다.'},
      {w: 'emergency', pos: 'n.', ko: '비상 상황', ic: '🚨', audio: 'assets/audio/emergency.mp3', audioCredit: 'Sylvanmoon · CC BY-SA 4.0 (Wikimedia Commons, US)', ex: 'Call 119 in an emergency.', exKo: '비상시에는 119에 전화해라.'},
      {w: 'faint', pos: 'v.', ko: '기절하다', ic: '😵', audio: 'assets/audio/faint.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'A man fainted on the platform.', exKo: '한 남자가 승강장에서 쓰러졌다.'},
      {w: 'CPR', pos: 'n.', ko: '심폐소생술', ic: '❤️‍🩹', ex: 'We learned CPR at school.', exKo: '우리는 학교에서 심폐소생술을 배웠다.'},
      {w: 'smoke', pos: 'n.', ko: '연기', ic: '💨', audio: 'assets/audio/smoke.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'He saw smoke coming from the window.', exKo: '그는 창문에서 연기가 나오는 것을 보았다.'},
      {w: 'alarm', pos: 'n.', ko: '경보(기)', ic: '⏰', audio: 'assets/audio/alarm.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The fire alarm rang.', exKo: '화재 경보가 울렸다.'},
      {w: 'resident', pos: 'n.', ko: '주민', ic: '🏘️', ex: 'All the residents were safe.', exKo: '모든 주민이 무사했다.'},
      {w: 'slippery', pos: 'adj.', ko: '미끄러운', ic: '🧊', ex: 'The road was slippery with ice.', exKo: '길이 얼음 때문에 미끄러웠다.'},
      {w: 'elderly', pos: 'adj.', ko: '연세가 드신', ic: '👴', audio: 'assets/audio/elderly.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'He helped an elderly woman.', exKo: '그는 한 어르신을 도왔다.'},
      {w: 'passenger', pos: 'n.', ko: '승객', ic: '🧍', audio: 'assets/audio/passenger.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The passengers waited patiently.', exKo: '승객들은 참을성 있게 기다렸다.'},
      {w: 'hesitate', pos: 'v.', ko: '망설이다', ic: '⏸️', ex: 'She didn’t hesitate to help.', exKo: '그녀는 돕는 것을 망설이지 않았다.'},
      {w: 'ordinary', pos: 'adj.', ko: '평범한', ic: '🙂', ex: 'Heroes are often ordinary people.', exKo: '영웅은 흔히 평범한 사람들이다.'},
      {w: 'thankful', pos: 'adj.', ko: '감사하는', ic: '🙏', ex: 'The family was thankful.', exKo: '그 가족은 감사했다.'},
      {w: 'award', pos: 'n.', ko: '상', ic: '🏅', audio: 'assets/audio/award.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'He received an award for bravery.', exKo: '그는 용기상을 받았다.'},
      {w: 'courage', pos: 'n.', ko: '용기', ic: '💪', audio: 'assets/audio/courage.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Helping others takes courage.', exKo: '남을 돕는 데는 용기가 필요하다.'},
      {w: 'calm', pos: 'adj.', ko: '침착한', ic: '🧘', audio: 'assets/audio/calm.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Stay calm in an emergency.', exKo: '비상시에는 침착함을 유지해라.'},
      {w: 'injured', pos: 'adj.', ko: '다친', ic: '🤕', audio: 'assets/audio/injured.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Nobody was injured.', exKo: '아무도 다치지 않았다.'},
      {w: 'quick', pos: 'adj.', ko: '빠른', ic: '⚡', audio: 'assets/audio/quick.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Her quick action saved a life.', exKo: '그녀의 빠른 행동이 생명을 구했다.'}
    ],
    phrases: [
      {w: 'save a life', ko: '생명을 구하다', ex: 'CPR can save a life.', exKo: '심폐소생술은 생명을 구할 수 있다.'},
      {w: 'pass out', ko: '의식을 잃다', ex: 'He passed out from the heat.', exKo: '그는 더위로 의식을 잃었다.'},
      {w: 'run into', ko: '~ 안으로 뛰어들다; 우연히 만나다', ex: 'She ran into the building.', exKo: '그녀는 건물 안으로 뛰어들었다.'},
      {w: 'wake up', ko: '깨우다, 깨다', ex: 'He woke up the residents.', exKo: '그는 주민들을 깨웠다.'},
      {w: 'step in', ko: '나서다, 개입하다', ex: 'Someone has to step in.', exKo: '누군가는 나서야 한다.'},
      {w: 'thanks to', ko: '~ 덕분에', ex: 'Thanks to him, everyone was safe.', exKo: '그 덕분에 모두가 무사했다.'}
    ],
    pairs: [
      {a: 'brave', b: 'scared', rel: '반대말'},
      {a: 'calm', b: 'nervous', rel: '반대말'},
      {a: 'brave', b: 'bravery', rel: '형용사 / 명사'},
      {a: 'rescue', b: 'save', rel: '비슷한 말'}
    ],
    wrap: {en: 'My hero is ______ because ______.', ko: '오늘 배운 낱말로 나의 영웅 소개하기'}
  },

  talk: {
    hook: {en: 'Have you ever helped someone in trouble?', ko: '어려움에 처한 사람을 도운 적이 있나요?', note: '작은 도움(길 안내, 짐 들어 주기)도 괜찮다. 그때 망설였는지 물어 ‘용기’로 연결한다.'},
    speakers: {Minseo: {voice: 0, pitch: 1.1}, Ethan: {voice: 1, pitch: .95}, Reporter: {voice: 2, pitch: 1}, Dohun: {voice: 1, pitch: 1}, 'Ms. Lee': {voice: 2, pitch: 1.05}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '소식 전하고 반응하기',
        key: {q: ['Did you hear about ~?', 'Guess what I heard!'], a: ['No, what happened?', 'I heard that ~.', 'Really? That’s amazing!']},
        note: '소식을 전할 때 Did you hear about ~? → I heard that ~. 반응은 Really? / No way! / That’s amazing! 등.',
        dialogs: [
          { title: 'Dialogue A', setting: '아침, 교실', lines: [
            {s: 'Minseo', en: 'Ethan, {{did you hear about}} the student from our school?', ko: '이선, 우리 학교 학생 소식 들었어?'},
            {s: 'Ethan', en: '{{No, what happened}}?', ko: '아니, 무슨 일인데?'},
            {s: 'Minseo', en: '{{I heard that}} she saved a man at the subway station.', ko: '지하철역에서 한 남자를 살렸대.'},
            {s: 'Ethan', en: '{{Really? That’s amazing}}! How?', ko: '정말? 대단하다! 어떻게?'},
            {s: 'Minseo', en: 'The man fainted, and she did CPR until the ambulance came.', ko: '그 남자가 쓰러졌는데, 구급차가 올 때까지 심폐소생술을 했대.'}
          ]},
          { title: 'Dialogue B', setting: '점심시간', lines: [
            {s: 'A', en: '{{Guess what I heard}}!', ko: '내가 무슨 얘기 들었는지 맞혀 봐!'},
            {s: 'B', en: 'What?', ko: '뭔데?'},
            {s: 'A', en: 'A bus driver stopped the bus to help an elderly woman on the icy road.', ko: '한 버스 기사님이 빙판길에서 어르신을 도우려고 버스를 세웠대.'},
            {s: 'B', en: 'Wow, he’s a real hero.', ko: '와, 진짜 영웅이다.'}
          ]}
        ],
        check: [
          {q: 'Where did the student save a man?', a: 'At the subway station.'},
          {q: 'What did she do?', a: 'She did CPR until the ambulance came.'},
          {q: 'Why did the bus driver stop the bus?', a: 'To help an elderly woman on the icy road.'}
        ],
        drill: {frame: ['A: Did you hear about ____?', 'B: No, what happened?'], opts: ['the brave student', 'the fire last night', 'the lost dog', 'the new hero award', 'the bus driver', 'the rescue at the river']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '바람·희망 표현하기',
        key: {q: ['What would you like to do?', 'What do you hope to ~?'], a: ['I hope (that) ~.', 'I’d like to ~.', 'I want to be someone who ~.']},
        note: 'I’d like to = I would like to (원하다, 공손). I hope 뒤에는 that절, I’d like 뒤에는 to부정사.',
        dialogs: [
          { title: 'Dialogue A', setting: '보건 시간, 심폐소생술 실습 후', lines: [
            {s: 'Ms. Lee', en: 'Dohun, how was the CPR practice?', ko: '도훈아, 심폐소생술 실습은 어땠니?'},
            {s: 'Dohun', en: 'It was harder than I thought. My arms are tired.', ko: '생각보다 어려웠어요. 팔이 아파요.'},
            {s: 'Ms. Lee', en: 'You did well. {{What would you like to do}} next?', ko: '잘했어. 다음엔 뭘 하고 싶니?'},
            {s: 'Dohun', en: '{{I’d like to}} learn first aid, too.', ko: '응급 처치도 배우고 싶어요.'},
            {s: 'Ms. Lee', en: 'Great. {{I hope}} you never need it, but it’s good to know.', ko: '좋아. 쓸 일이 없기를 바라지만, 알아 두면 좋지.'}
          ]},
          { title: 'Dialogue B', setting: '방과 후, 버스 정류장', lines: [
            {s: 'A', en: '{{What do you hope to}} be in the future?', ko: '미래에 무엇이 되고 싶어?'},
            {s: 'B', en: '{{I want to be someone who}} helps people in trouble.', ko: '어려움에 처한 사람을 돕는 사람이 되고 싶어.'},
            {s: 'A', en: 'Like a firefighter?', ko: '소방관처럼?'},
            {s: 'B', en: 'Maybe. Or a doctor working in an emergency room.', ko: '아마도. 아니면 응급실에서 일하는 의사.'}
          ]}
        ],
        check: [
          {q: 'How was the CPR practice for Dohun?', a: 'It was harder than he thought.'},
          {q: 'What would Dohun like to learn next?', a: 'First aid.'},
          {q: 'What kind of person does B want to be?', a: 'Someone who helps people in trouble.'}
        ],
        drill: {frame: ['A: What would you like to do?', 'B: I’d like to ____.'], opts: ['learn first aid', 'volunteer at a hospital', 'join a rescue club', 'help my neighbors', 'become a firefighter', 'teach CPR']}
      }
    ],
    interviewEx: 'Jaeyun heard about the brave bus driver. She would like to learn first aid.',
    watch: {
      label: 'Let’s Watch', title: 'The Hero Interview', setting: '학교 방송부 스튜디오. 학생 기자가 지하철역에서 사람을 구한 민서를 인터뷰한다.',
      lines: [
        {s: 'Reporter', en: 'Minseo, you saved a man at the station. Weren’t you scared?', ko: '민서 학생, 역에서 한 남자를 구했죠. 무섭지 않았나요?'},
        {s: 'Minseo', en: 'I was scared, but I was too busy to think about it.', ko: '무서웠지만, 너무 정신이 없어서 그런 생각을 할 겨를이 없었어요.'},
        {s: 'Reporter', en: 'How did you know what to do?', ko: '무엇을 해야 할지 어떻게 알았어요?'},
        {s: 'Minseo', en: 'We learned CPR in health class. I remembered the training video.', ko: '보건 시간에 심폐소생술을 배웠어요. 훈련 영상을 기억해 냈죠.'},
        {s: 'Reporter', en: 'What would you like to say to other students?', ko: '다른 학생들에게 하고 싶은 말이 있나요?'},
        {s: 'Minseo', en: 'You don’t have to be strong enough to lift a car. You just need to step in.', ko: '자동차를 들어 올릴 만큼 강할 필요는 없어요. 그냥 나서기만 하면 돼요.'}
      ],
      check: [
        {q: 'Why didn’t Minseo think about her fear?', a: 'She was too busy to think about it.'},
        {q: 'Where did Minseo learn CPR?', a: 'In health class.'},
        {q: 'What is Minseo’s message?', a: 'You don’t have to be super strong; you just need to step in.'}
      ]
    },
    wrap: {en: 'Share news about a hero and say what you would like to do to help others.', ko: '영웅 소식을 전하고, 남을 돕기 위해 하고 싶은 일을 말하기'}
  },

  grammar: {
    cover: '-ing / -ed · too ~ to',
    hook: {en: 'He saw a {{crying}} child and a {{broken}} window.  /  She was {{too}} scared {{to}} move.', ko: '빈칸에 들어갈 말은 각각 어떤 뜻을 더해 줄까?', answer: 'crying(우는)과 broken(깨진)은 명사를 꾸미는 분사, too ~ to는 ‘너무 ~해서 …할 수 없다’', note: 'crying은 아이가 ‘스스로’ 우는 것, broken은 창문이 ‘깨진’ 것 — 능동과 수동의 차이를 묻는다.'},
    points: [
      { id: 'g1', name: '분사 (명사 수식)', short: '분사', form: '현재분사(-ing): ~하는(능동·진행) / 과거분사(p.p.): ~된(수동·완료)', meaning: '명사를 꾸미는 말',
        notice: [
          {en: 'He helped a {{crying}} child.', ko: '그는 울고 있는 아이를 도왔다.'},
          {en: 'There was a {{broken}} window.', ko: '깨진 창문이 있었다.'},
          {en: 'The man {{lying}} on the floor didn’t move.', ko: '바닥에 누워 있는 남자는 움직이지 않았다.'}
        ],
        rule: [
          {k: '현재분사', v: '명사가 스스로 ~하는 중 (능동)', ex: 'a running boy, the burning house'},
          {k: '과거분사', v: '명사가 ~된, ~당한 (수동)', ex: 'a stolen bike, the injured man'},
          {k: '위치', v: '한 단어는 명사 앞 / 다른 말과 함께면 명사 뒤', ex: 'the man standing at the door'}
        ],
        compare: {
          title: '-ing일까, p.p.일까?', note: '감정 형용사도 같은 원리: The news was surprising(놀라게 하는). I was surprised(놀란).',
          head: ['현재분사 (~하는)', '과거분사 (~된)', '감정 표현'],
          cols: [['a falling leaf', 'a barking dog', 'boiling water'], ['a fallen leaf', 'a lost dog', 'boiled eggs'], ['exciting news / excited people', 'boring class / bored students', 'surprising story / surprised me']]
        },
        check: [
          {q: 'Look at the ____ baby. (smile)', a: 'smiling'},
          {q: 'He found a ____ wallet. (lose)', a: 'lost'},
          {q: 'The girl ____ next to me is my sister. (sit)', a: 'sitting'},
          {q: 'The ____ man was taken to the hospital. (injure)', a: 'injured'},
          {q: 'The story was very ____. (excite)', a: 'exciting'}
        ],
        trap: {bad: 'I was very exciting about the trip.', good: 'I was very excited about the trip.', why: '사람이 감정을 ‘느낀’ 것이면 과거분사(excited)를 쓴다.'},
        scramble: [
          {ko: '그는 불타는 집 안으로 뛰어들었다.', en: 'He ran into the burning house.'},
          {ko: '다친 사람들이 구조되었다.', en: 'The injured people were rescued.'},
          {ko: '버스를 기다리는 사람들이 박수를 쳤다.', en: 'The people waiting for the bus clapped.'}
        ]
      },
      { id: 'g2', name: 'too ~ to / enough to', short: 'too ~ to · enough to', form: 'too + 형용사 + to V / 형용사 + enough + to V', meaning: '너무 ~해서 …할 수 없다 / …할 만큼 충분히 ~하다',
        notice: [
          {en: 'She was {{too}} scared {{to}} move.', ko: '그녀는 너무 겁이 나서 움직일 수 없었다.'},
          {en: 'He was strong {{enough to}} carry the man.', ko: '그는 그 남자를 옮길 만큼 충분히 힘이 셌다.'},
          {en: 'The road was {{too}} slippery {{for}} the woman {{to}} walk on.', ko: '그 길은 너무 미끄러워서 그 여성이 걸을 수 없었다.'}
        ],
        rule: [
          {k: 'too ~ to', v: '= so ~ that 주어 can’t', ex: 'I was too tired to run. = I was so tired that I couldn’t run.'},
          {k: 'enough to', v: '형용사 뒤에 enough! = so ~ that 주어 can', ex: 'She is tall enough to reach it.'},
          {k: '의미상 주어', v: 'for + 사람 + to V', ex: 'The box is too heavy for me to lift.'}
        ],
        check: [
          {q: 'He was ____ tired to walk. (too / enough)', a: 'too'},
          {q: 'She is old ____ to drive. (too / enough)', a: 'enough'},
          {q: 'The water was too cold ____ swim in.', a: 'to'},
          {q: 'The box is too heavy ____ me to lift.', a: 'for'},
          {q: 'He was so brave that he ____ help. (could) = brave enough to help', a: 'could'}
        ],
        trap: {bad: 'He is enough strong to lift it.', good: 'He is strong enough to lift it.', why: 'enough는 형용사 뒤에 온다.'},
        scramble: [
          {ko: '그는 너무 놀라서 말을 할 수 없었다.', en: 'He was too surprised to speak.'},
          {ko: '그녀는 사람들을 도울 만큼 충분히 용감했다.', en: 'She was brave enough to help people.'},
          {ko: '그 길은 걷기에 너무 미끄러웠다.', en: 'The road was too slippery to walk on.'}
        ]
      }
    ],
    wrap: {en: 'A hero is someone ______ing ______. I am brave enough to ______.', ko: '분사 한 문장, enough to 한 문장으로 내가 생각하는 영웅 쓰기'},
    wrapEx: 'A hero is someone helping others without hesitating. I am brave enough to call for help.'
  },

  reading: {
    title: 'Heroes Without Capes', kind: '지역 신문 특집 기사', cover: 'Hero', coverKo: '망토 없는 영웅들', cover2: 'Courage', coverKo2: '평범한 사람의 용기',
    before: [
      {q: 'Look at the title. What is a “hero without a cape”?', a: '초능력이나 특별한 옷이 없는 평범한 영웅'},
      {q: 'What can ordinary people do in an emergency?', a: '신고하기, 심폐소생술, 대피 돕기 등'}
    ],
    gloss: {'capes': '망토', 'platform': '승강장', 'chest': '가슴', 'compressions': '(가슴) 압박', 'paramedics': '구급대원', 'hazard lights': '비상등', 'delivery': '배달', 'scooter': '스쿠터', 'apartment': '아파트', 'floor by floor': '한 층씩', 'pajamas': '잠옷'},
    paras: [
      {who: '', en: 'Heroes in movies have superpowers and wear capes. But the heroes living in our town look just like us. This month, our newspaper met three ordinary people who did something extraordinary.',
       ko: '영화 속 영웅은 초능력이 있고 망토를 입습니다. 하지만 우리 동네에 사는 영웅들은 우리와 똑같이 생겼죠. 이번 달 우리 신문은 비범한 일을 해낸 평범한 사람 세 명을 만났습니다.',
       check: {q: 'How are the heroes in this article different from movie heroes?', a: 'They don’t have superpowers or capes; they look just like us.'}, think: '‘비범한 일’을 한 평범한 사람을 아나요?'},
      {who: 'The Student · Subway Station', en: 'Last October, a man waiting for the subway suddenly fainted on the platform. People were too shocked to move. But Park Minseo, a 15-year-old student, ran to him. He wasn’t breathing.',
       ko: '지난 10월, 지하철을 기다리던 한 남자가 갑자기 승강장에서 쓰러졌습니다. 사람들은 너무 놀라서 움직이지 못했죠. 하지만 열다섯 살 학생 박민서가 그에게 달려갔습니다. 그는 숨을 쉬지 않았습니다.',
       check: {q: 'Why didn’t people move at first?', a: 'They were too shocked to move.'}, think: '여러분이라면 그 순간 무엇을 했을까?'},
      {who: 'The Student · Subway Station', en: 'Minseo asked someone to call 119 and started chest compressions. She had learned CPR in health class only a month before. When the paramedics arrived, the man was breathing again. “I was scared, but I couldn’t just watch,” she said.',
       ko: '민서는 누군가에게 119에 전화해 달라고 부탁하고 가슴 압박을 시작했습니다. 겨우 한 달 전에 보건 시간에 심폐소생술을 배웠죠. 구급대원이 도착했을 때 남자는 다시 숨을 쉬고 있었습니다. “무서웠지만 그냥 보고만 있을 수 없었어요.” 그녀가 말했습니다.',
       check: {q: 'When did Minseo learn CPR?', a: 'In health class, only a month before.'}, think: '학교에서 배운 것이 실제로 쓰인 경험은?'},
      {who: 'The Bus Driver · Icy Road', en: 'On a snowy morning, bus driver Kim Hosik saw an elderly woman standing in the middle of an icy road. The road was too slippery for her to walk on. He turned on the hazard lights, stopped the bus, and walked her across the street.',
       ko: '눈 오는 어느 아침, 버스 기사 김호식 씨는 빙판길 한가운데 서 있는 어르신을 보았습니다. 길이 너무 미끄러워 어르신이 걸을 수 없었죠. 그는 비상등을 켜고 버스를 세운 뒤 어르신이 길을 건너도록 함께 걸었습니다.',
       check: {q: 'Why couldn’t the woman walk?', a: 'The road was too slippery for her to walk on.'}, think: '버스가 멈춘 동안 승객들은 어떤 마음이었을까?'},
      {who: 'The Bus Driver · Icy Road', en: 'The bus was five minutes late, but nobody complained. In fact, the waiting passengers clapped when he came back. “It was nothing special,” Mr. Kim said with a shy smile.',
       ko: '버스는 5분 늦었지만 아무도 불평하지 않았습니다. 오히려 기다리던 승객들이 그가 돌아오자 박수를 쳤죠. “특별한 일도 아니었어요.” 김 씨가 수줍게 웃으며 말했습니다.',
       check: {q: 'What did the passengers do when he came back?', a: 'They clapped.'}, think: '김 씨는 왜 “특별한 일이 아니다”라고 말했을까?'},
      {who: 'The Delivery Worker · Late Night', en: 'At 2 a.m., delivery worker Lee Junho noticed smoke coming from an apartment building. The fire alarm wasn’t working. He ran up the stairs, knocking on every door floor by floor. Thanks to him, all 30 residents escaped safely in their pajamas.',
       ko: '새벽 2시, 배달원 이준호 씨는 한 아파트 건물에서 연기가 나오는 것을 알아차렸습니다. 화재경보기는 작동하지 않았죠. 그는 계단을 뛰어 올라가며 한 층씩 모든 문을 두드렸습니다. 그 덕분에 주민 30명 모두가 잠옷 차림으로 안전하게 대피했습니다.',
       check: {q: 'How did Lee Junho warn the residents?', a: 'He ran up the stairs, knocking on every door floor by floor.'}, think: '경보기가 고장 났을 때 그의 행동이 왜 중요했을까?'},
      {who: 'What Makes a Hero', en: 'Minseo, Mr. Kim, and Mr. Lee were not strong enough to lift cars. What they had was the courage to step in. Maybe the next hero is someone sitting in your classroom. Maybe it is you.',
       ko: '민서, 김 씨, 이 씨는 자동차를 들어 올릴 만큼 힘이 세지 않았습니다. 그들에게 있었던 것은 나서는 용기였죠. 어쩌면 다음 영웅은 여러분 교실에 앉아 있는 누군가일지도 모릅니다. 어쩌면 바로 여러분일지도요.',
       check: {q: 'What did the three heroes have?', a: 'The courage to step in.'}, think: '내가 할 수 있는 ‘작은 용기’ 하나는?'}
    ],
    split: 3,
    next: '버스 기사와 배달원은\n어떤 용기를 냈을까?',
    recap: {q: '지하철역에서 무슨 일이 있었을까?', items: [{k: 'PROBLEM', v: 'a man fainted and wasn’t breathing'}, {k: 'ACTION', v: 'Minseo did CPR; someone called 119'}, {k: 'RESULT', v: 'the man was breathing again'}]},
    tf: [
      {p: 1, s: 'People ran to the man right away.', a: false, why: '너무 놀라 움직이지 못했다.'},
      {p: 2, s: 'Minseo learned CPR a year before.', a: false, why: '겨우 한 달 전.'},
      {p: 3, s: 'Mr. Kim stopped the bus on a snowy morning.', a: true},
      {p: 4, s: 'The passengers complained about the delay.', a: false, why: '불평하지 않고 박수를 쳤다.'},
      {p: 5, s: 'The fire alarm wasn’t working.', a: true},
      {p: 6, s: 'The writer says the next hero could be you.', a: true}
    ],
    key: [
      {en: 'The heroes {{living}} in our town look just like us.', note: '현재분사구가 뒤에서 명사 수식', g: 'g1'},
      {en: 'A man {{waiting}} for the subway suddenly fainted.', note: '현재분사구 (기다리던 남자)', g: 'g1'},
      {en: 'People were {{too shocked to move}}.', note: 'too ~ to: 너무 ~해서 …할 수 없었다', g: 'g2'},
      {en: 'The road was {{too slippery for her to walk}} on.', note: 'too ~ for 사람 to V', g: 'g2'},
      {en: 'He noticed smoke {{coming}} from an apartment building.', note: 'notice + 목적어 + -ing', g: 'g1'},
      {en: 'They were not {{strong enough to lift}} cars.', note: '형용사 + enough to V', g: 'g2'}
    ],
    summary: {text: 'A student named Minseo did {{CPR}} when a man fainted at the station. A bus {{driver}} stopped his bus to help an elderly woman on an icy road. A delivery worker woke up 30 {{residents}} when he saw {{smoke}}. They were not {{strong}} enough to lift cars, but they had the {{courage}} to step in.'},
    order: ['A man fainted on the platform.', 'Minseo ran to him.', 'She started chest compressions.', 'The paramedics arrived.'],
    chart: {title: 'THREE HEROES', ko: '세 영웅 비교하기', cols: ['Situation', 'Action', 'Result'], note: '세 사람 모두 ‘누군가 하겠지’ 하고 지나치지 않았다는 공통점을 찾게 한다.', rows: [
      {name: 'Minseo', cells: ['a man fainted', 'CPR, asked someone to call 119', 'he breathed again']},
      {name: 'Mr. Kim', cells: ['a woman on an icy road', 'stopped the bus, walked her across', 'passengers clapped']},
      {name: 'Mr. Lee', cells: ['smoke, no alarm', 'knocked on every door', '30 residents escaped']}
    ]},
    wrap: {en: 'A hero is someone ______. I am not ______ enough to ______, but I can ______.', ko: '관통 질문으로 돌아가기: 영웅의 조건과 내가 낼 수 있는 용기 쓰기'}
  },

  quiz: [
    ['“용감한”을 뜻하는 낱말은?', ['calm', 'brave', 'quick', 'elderly'], 1, 'brave: 용감한'],
    ['“calm”의 반대말은?', ['nervous', 'thankful', 'ordinary', 'injured'], 0, 'calm ↔ nervous'],
    ['“CPR can ___ a life.” (생명을 구하다)', ['take', 'make', 'save', 'keep'], 2, 'save a life'],
    ['“Thanks ___ him, everyone was safe.”', ['for', 'of', 'with', 'to'], 3, 'thanks to'],
    ['소식을 전하는 표현은?', ['I hope so.', 'I’d like to go there.', 'Did you hear about it?', 'What would you like to do?'], 2, 'Did you hear about ~?'],
    ['바람을 나타내는 표현이 아닌 것은?', ['I hope you’re okay.', 'I’d like to help.', 'I heard that he left.', 'I want to be a doctor.'], 2, 'I heard that ~은 소식을 전하는 표현.'],
    ['Let’s Watch에서 민서가 심폐소생술을 배운 곳은?', ['보건 시간', '소방서', '병원', '체육 시간'], 0, 'We learned CPR in health class.'],
    ['빈칸에 알맞은 것은? “He found a ___ wallet.”', ['lose', 'losing', 'lost', 'loses'], 2, '잃어버린 지갑: 과거분사'],
    ['빈칸에 알맞은 것은? “Look at the ___ baby.”', ['smile', 'smiled', 'to smile', 'smiling'], 3, '웃고 있는 아기: 현재분사'],
    ['빈칸에 알맞은 것은? “He was ___ tired to walk.”', ['so', 'too', 'very', 'enough'], 1, 'too ~ to'],
    ['어법상 틀린 문장은?', ['She is tall enough to swim.', 'He is enough strong.', 'I was bored in the long class.', 'The story was really exciting.'], 1, 'He is strong enough.로 고쳐야 한다.'],
    ['처음에 사람들이 움직이지 못한 까닭은?', ['너무 놀라서', '전화를 하느라', '지하철이 와서', '민서가 막아서'], 0, 'too shocked to move'],
    ['김 기사님이 버스를 세운 까닭은?', ['고장이 나서', '승객이 내려서', '눈이 너무 많이 와서', '어르신을 도우려고'], 3, 'to help an elderly woman'],
    ['이준호 씨가 주민들을 깨운 방법은?', ['직접 경보기를 울렸다', '모든 문을 두드렸다', '안내 방송을 했다', '창문을 깨서 알렸다'], 1, 'knocking on every door'],
    ['세 영웅의 공통점은?', ['모두 힘이 아주 셌다', '상을 받고 싶어 했다', '응급 구조사로 일했다', '나서는 용기가 있었다'], 3, 'the courage to step in']
  ]
};
