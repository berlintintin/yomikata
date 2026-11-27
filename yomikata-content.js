/* =============================================================================
   読み方 Yomikata — CONTENT
   Everything Genki-specific lives here. yomikata.html is the engine and never
   needs editing to add a lesson.

   ---------------------------------------------------------------------------
   ADDING A LESSON
   ---------------------------------------------------------------------------
   1. Add a block below:  lessons[20] = [ …kanji… ];
      The lesson picker builds itself from whatever keys exist here.
   2. Each kanji:
        {ch:'漢', mn:'meaning', on:['オン…'], kun:['くん…'], words:[ …words… ]}
      on / kun are the readings Genki prints with ▶ and ▷. Either may be [].
   3. Each word:
        ['書かれた形', 'せ.ぐ.めん.と', 'english meaning', true?]
      - The reading is SEGMENTED PER CHARACTER with '.' — one segment per
        character of the written form, okurigana and kana included:
            音楽    → おん.がく          (2 chars, 2 segments)
            楽しい  → たの.し.い         (3 chars, 3 segments)
            お弁当  → お.べん.とう       (3 chars, 3 segments)
        This is what powers furigana, per-kanji hints, and the decoys.
      - The 4th field is optional: true marks an exception worth extra praise
        (rendaku, an irregular or rare reading, kun inside a compound…).
   4. RULE: the segment sitting on the kanji itself MUST appear in that kanji's
      on or kun list, or the quiz modes would have no correct answer. Skip
      entries Genki lists with a reading it doesn't teach (梅雨 つゆ, 今朝 けさ,
      上手な じょうずな) and anything written in katakana (香港, テニス部).
   5. Run  yomikataCheck()  in the browser console — it validates everything
      here and prints any problems.

   Optional extras, all keyed so they can be filled in later:
   - other        : meanings for non-lesson kanji, so hints work on every char
   - otherKun     : 'kanji+reading' pairs where a non-lesson kanji's reading is
                    kun'yomi; anything not listed is treated as on'yomi
   - why          : one line per word explaining why those kanji make that word
   - highlighted  : words highlighted in the textbook (the Pronunciations
                    slideshow can stick to just these; stars are editable in-app)
   - sentences    : ['…markup…', 'english', hubKanji, hubReading, lesson]
                    [chunk|reading] = tappable furigana, [chunk|reading|*] = the
                    word being quizzed.
   - stories      : {t, en, lesson, s:'…same markup…', tr:'full translation'}
                    [chunk|reading|*] marks each numbered blank.
   - storyBase    : conjugated form in a story → its dictionary entry, so
                    progress and the breakdown land on the right word
   ============================================================================= */

window.YOMIKATA_CONTENT = (function () {
  const lessons = {};

  /* ---------- Lesson 3 (読み書き編 pp.304–305) ---------- */
  lessons[3] = [
  {ch:'一',mn:'one',on:['いち','いっ'],kun:['ひと'],words:[['一','いち','one'],['一時','いち.じ',"one o'clock"],['一年生','いち.ねん.せい','first-year student'],['一分','いっ.ぷん','one minute'],['一つ','ひと.つ','one (thing)']]},
  {ch:'二',mn:'two',on:['に'],kun:['ふた'],words:[['二','に','two'],['二時','に.じ',"two o'clock"],['二年生','に.ねん.せい','second-year student'],['二つ','ふた.つ','two (things)'],['二日間','ふつ.か.かん','two days',true]]},
  {ch:'三',mn:'three',on:['さん'],kun:['みっ'],words:[['三','さん','three'],['三時','さん.じ',"three o'clock"],['三年生','さん.ねん.せい','third-year student'],['三月','さん.がつ','March'],['三つ','みっ.つ','three (things)']]},
  {ch:'四',mn:'four',on:['し'],kun:['よん','よ','よっ'],words:[['四','よん','four'],['四時','よ.じ',"four o'clock"],['四年生','よ.ねん.せい','fourth-year student'],['四月','し.がつ','April'],['四つ','よっ.つ','four (things)']]},
  {ch:'五',mn:'five',on:['ご'],kun:['いつ'],words:[['五','ご','five'],['五時','ご.じ',"five o'clock"],['五月','ご.がつ','May'],['五歳','ご.さい','five years old'],['五つ','いつ.つ','five (things)']]},
  {ch:'六',mn:'six',on:['ろく','ろっ'],kun:['むっ'],words:[['六','ろく','six'],['六時','ろく.じ',"six o'clock"],['六百','ろっ.ぴゃく','six hundred'],['六分','ろっ.ぷん','six minutes'],['六つ','むっ.つ','six (things)']]},
  {ch:'七',mn:'seven',on:['しち'],kun:['なな'],words:[['七','しち','seven'],['七時','しち.じ',"seven o'clock"],['七月','しち.がつ','July'],['七つ','なな.つ','seven (things)'],['七人','なな.にん','seven people']]},
  {ch:'八',mn:'eight',on:['はち','はっ'],kun:['やっ'],words:[['八','はち','eight'],['八時','はち.じ',"eight o'clock"],['八百','はっ.ぴゃく','eight hundred'],['八歳','はっ.さい','eight years old'],['八つ','やっ.つ','eight (things)']]},
  {ch:'九',mn:'nine',on:['きゅう','く'],kun:['ここの'],words:[['九','きゅう','nine'],['九時','く.じ',"nine o'clock"],['九月','く.がつ','September'],['九歳','きゅう.さい','nine years old'],['九つ','ここの.つ','nine (things)']]},
  {ch:'十',mn:'ten',on:['じゅう','じゅっ','じっ'],kun:['とお'],words:[['十','じゅう','ten'],['十時','じゅう.じ',"ten o'clock"],['十月','じゅう.がつ','October'],['十歳','じゅっ.さい','ten years old']]},
  {ch:'百',mn:'hundred',on:['ひゃく','びゃく','ぴゃく'],kun:[],words:[['百','ひゃく','hundred'],['三百','さん.びゃく','three hundred'],['六百','ろっ.ぴゃく','six hundred'],['八百','はっ.ぴゃく','eight hundred']]},
  {ch:'千',mn:'thousand',on:['せん','ぜん'],kun:[],words:[['千','せん','thousand'],['三千','さん.ぜん','three thousand'],['八千','はっ.せん','eight thousand'],['千円','せん.えん','one thousand yen']]},
  {ch:'万',mn:'ten thousand',on:['まん'],kun:[],words:[['一万','いち.まん','ten thousand'],['十万','じゅう.まん','one hundred thousand'],['百万','ひゃく.まん','one million']]},
  {ch:'円',mn:'yen; circle',on:['えん'],kun:['まる'],words:[['百円','ひゃく.えん','one hundred yen'],['円','えん','yen; circle'],['円高','えん.だか','strong yen'],['円い','まる.い','round']]},
  {ch:'時',mn:'time',on:['じ'],kun:['とき'],words:[['一時','いち.じ',"one o'clock"],['時間','じ.かん','time; hours'],['子どもの時','こ.ど.も.の.とき',"in one's childhood"],['時々','とき.どき','sometimes'],['時計','と.けい','watch; clock',true]]}
  ];

  /* ---------- Lesson 4 (読み書き編 pp.308–309) ---------- */
  lessons[4] = [
  {ch:'日',mn:'day; sun',on:['に','にち','にっ'],kun:['び','ひ','か'],words:[['日本','に.ほん','Japan'],['日曜日','にち.よう.び','Sunday'],['毎日','まい.にち','every day'],['母の日','はは.の.ひ',"Mother's Day"],['日記','にっ.き','diary'],['三日','みっ.か','three days']]},
  {ch:'本',mn:'book; basis',on:['ほん'],kun:['もと'],words:[['本','ほん','book'],['日本','に.ほん','Japan'],['日本語','に.ほん.ご','Japanese language'],['山本さん','やま.もと.さ.ん','Mr./Ms. Yamamoto']]},
  {ch:'人',mn:'person',on:['じん','にん'],kun:['ひと'],words:[['日本人','に.ほん.じん','Japanese people'],['一人で','ひと.り.で','alone',true],['この人','こ.の.ひと','this person'],['三人','さん.にん','three people']]},
  {ch:'月',mn:'moon; month',on:['げつ','がつ'],kun:['つき'],words:[['月曜日','げつ.よう.び','Monday'],['一月','いち.がつ','January'],['月','つき','moon'],['今月','こん.げつ','this month'],['一か月','いっ.か.げつ','one month']]},
  {ch:'火',mn:'fire',on:['か'],kun:['ひ','び'],words:[['火曜日','か.よう.び','Tuesday'],['火','ひ','fire'],['火山','か.ざん','volcano'],['花火','はな.び','fireworks'],['火星','か.せい','Mars']]},
  {ch:'水',mn:'water',on:['すい'],kun:['みず'],words:[['水曜日','すい.よう.び','Wednesday'],['水','みず','water'],['水泳','すい.えい','swimming'],['水道','すい.どう','water supply'],['水着','みず.ぎ','swimwear']]},
  {ch:'木',mn:'tree',on:['もく'],kun:['き'],words:[['木曜日','もく.よう.び','Thursday'],['木','き','tree'],['木村さん','き.むら.さ.ん','Mr./Ms. Kimura']]},
  {ch:'金',mn:'gold; money',on:['きん'],kun:['かね'],words:[['金曜日','きん.よう.び','Friday'],['お金','お.かね','money'],['料金','りょう.きん','charge; fee'],['お金持ち','お.かね.も.ち','rich person']]},
  {ch:'土',mn:'soil',on:['ど','と'],kun:['つち'],words:[['土曜日','ど.よう.び','Saturday'],['土','つち','soil'],['土地','と.ち','land'],['粘土','ねん.ど','clay']]},
  {ch:'曜',mn:'weekday',on:['よう'],kun:[],words:[['日曜日','にち.よう.び','Sunday'],['曜日','よう.び','day of the week']]},
  {ch:'上',mn:'up',on:['じょう'],kun:['うえ','のぼ'],words:[['上','うえ','top; above'],['上手な','じょう.ず.な','good at'],['屋上','おく.じょう','rooftop'],['上る','のぼ.る','to go up']]},
  {ch:'下',mn:'down',on:['か'],kun:['した','くだ'],words:[['下','した','under'],['地下鉄','ち.か.てつ','subway'],['下手な','へ.た.な','poor at',true],['下さい','くだ.さ.い','please give/do …']]},
  {ch:'中',mn:'middle',on:['ちゅう','じゅう'],kun:['なか'],words:[['中','なか','inside'],['中国','ちゅう.ごく','China'],['中学','ちゅう.がく','junior high school'],['一年中','いち.ねん.じゅう','all year around']]},
  {ch:'半',mn:'half',on:['はん'],kun:[],words:[['三時半','さん.じ.はん','half past three'],['半分','はん.ぶん','half'],['半年','はん.とし','half a year'],['半額','はん.がく','half price']]}
  ];

  /* ---------- Lesson 5 (読み書き編 pp.312–313) ---------- */
  lessons[5] = [
  {ch:'山',mn:'mountain',on:['さん'],kun:['やま'],words:[['山','やま','mountain'],['山川さん','やま.かわ.さ.ん','Mr./Ms. Yamakawa'],['富士山','ふ.じ.さん','Mt. Fuji']]},
  {ch:'川',mn:'river',on:[],kun:['かわ','がわ'],words:[['川','かわ','river'],['山川さん','やま.かわ.さ.ん','Mr./Ms. Yamakawa'],['小川さん','お.がわ.さ.ん','Mr./Ms. Ogawa']]},
  {ch:'元',mn:'origin',on:['げん','がん'],kun:['もと'],words:[['元気な','げん.き.な','fine; energetic'],['元日','がん.じつ','the first day of the year'],['地元','じ.もと','local']]},
  {ch:'気',mn:'spirit',on:['き'],kun:[],words:[['元気な','げん.き.な','fine; energetic'],['天気','てん.き','weather'],['電気','でん.き','electricity; light'],['気持ち','き.も.ち','feeling'],['人気','にん.き','popularity']]},
  {ch:'天',mn:'heaven',on:['てん'],kun:[],words:[['天気','てん.き','weather'],['天国','てん.ごく','heaven'],['天皇','てん.のう','Japanese emperor'],['天才','てん.さい','genius']]},
  {ch:'私',mn:'I; private',on:['し'],kun:['わたし'],words:[['私','わたし','I'],['私立大学','し.りつ.だい.がく','private university']]},
  {ch:'今',mn:'now',on:['こん'],kun:['いま'],words:[['今','いま','now'],['今日','きょ.う','today',true],['今晩','こん.ばん','tonight'],['今月','こん.げつ','this month']]},
  {ch:'田',mn:'rice field',on:[],kun:['た','だ'],words:[['田中さん','た.なか.さ.ん','Mr./Ms. Tanaka'],['山田さん','やま.だ.さ.ん','Mr./Ms. Yamada'],['田んぼ','た.ん.ぼ','rice field']]},
  {ch:'女',mn:'woman',on:['じょ'],kun:['おんな'],words:[['女の人','おんな.の.ひと','woman'],['女性','じょ.せい','woman'],['女の子','おんな.の.こ','girl'],['長女','ちょう.じょ','the eldest daughter']]},
  {ch:'男',mn:'man',on:['だん'],kun:['おとこ'],words:[['男の人','おとこ.の.ひと','man'],['男性','だん.せい','man'],['男の子','おとこ.の.こ','boy'],['男子学生','だん.し.がく.せい','male student']]},
  {ch:'見',mn:'to see',on:['けん'],kun:['み'],words:[['見る','み.る','to see'],['見物','けん.ぶつ','sightseeing'],['花見','はな.み','flower viewing'],['意見','い.けん','opinion']]},
  {ch:'行',mn:'to go',on:['こう','ぎょう'],kun:['い'],words:[['行く','い.く','to go'],['銀行','ぎん.こう','bank'],['一行目','いち.ぎょう.め','first line'],['旅行','りょ.こう','travel']]},
  {ch:'食',mn:'to eat',on:['しょく'],kun:['た'],words:[['食べる','た.べ.る','to eat'],['食べ物','た.べ.もの','food'],['食堂','しょく.どう','cafeteria'],['食事','しょく.じ','meal'],['朝食','ちょう.しょく','breakfast']]},
  {ch:'飲',mn:'to drink',on:['いん'],kun:['の'],words:[['飲む','の.む','to drink'],['飲み物','の.み.もの','drink'],['飲酒運転','いん.しゅ.うん.てん','drunken driving']]}
  ];

  /* ---------- Lesson 6 (読み書き編 pp.318–319) ---------- */
  lessons[6] = [
  {ch:'東',mn:'east',on:['とう'],kun:['ひがし'],words:[['東','ひがし','east'],['東口','ひがし.ぐち','east exit'],['東京','とう.きょう','Tokyo'],['関東','かん.とう','Kanto area'],['東洋','とう.よう','the East']]},
  {ch:'西',mn:'west',on:['せい','さい'],kun:['にし'],words:[['西','にし','west'],['西口','にし.ぐち','west exit'],['北西','ほく.せい','northwest'],['関西','かん.さい','Kansai area'],['西洋','せい.よう','the West']]},
  {ch:'南',mn:'south',on:['なん'],kun:['みなみ'],words:[['南','みなみ','south'],['南口','みなみ.ぐち','south exit'],['南東','なん.とう','southeast'],['南極','なん.きょく','Antarctica']]},
  {ch:'北',mn:'north',on:['ほく','ほっ'],kun:['きた'],words:[['北','きた','north'],['北口','きた.ぐち','north exit'],['東北','とう.ほく','Tohoku area'],['北極','ほっ.きょく','North Pole'],['北海道','ほっ.かい.どう','Hokkaido']]},
  {ch:'口',mn:'mouth',on:['こう'],kun:['ぐち','くち'],words:[['北口','きた.ぐち','north exit'],['口','くち','mouth'],['人口','じん.こう','population'],['入り口','い.り.ぐち','entrance']]},
  {ch:'出',mn:'to exit',on:['しゅっ','しゅつ'],kun:['で','だ'],words:[['出る','で.る','to exit'],['出口','で.ぐち','exit'],['出かける','で.か.け.る','to go out'],['出す','だ.す','to take something out'],['出席','しゅっ.せき','attendance'],['輸出','ゆ.しゅつ','export']]},
  {ch:'右',mn:'right',on:['う','ゆう'],kun:['みぎ'],words:[['右','みぎ','right'],['右折','う.せつ','right turn'],['左右','さ.ゆう','right and left'],['右手','みぎ.て','right hand'],['右側','みぎ.がわ','right side']]},
  {ch:'左',mn:'left',on:['さ'],kun:['ひだり'],words:[['左','ひだり','left'],['左折','さ.せつ','left turn'],['左手','ひだり.て','left hand'],['左利き','ひだり.き.き','left-handed']]},
  {ch:'分',mn:'minute; to divide',on:['ふん','ぷん','ぶん'],kun:['わ'],words:[['五分','ご.ふん','five minutes'],['十分','じゅっ.ぷん','ten minutes'],['自分','じ.ぶん','oneself'],['分ける','わ.け.る','to divide']]},
  {ch:'先',mn:'ahead',on:['せん'],kun:['さき'],words:[['先生','せん.せい','teacher'],['先週','せん.しゅう','last week'],['先に','さき.に','ahead'],['先月','せん.げつ','last month'],['先輩','せん.ぱい','senior member']]},
  {ch:'生',mn:'birth',on:['せい','しょう'],kun:['う'],words:[['学生','がく.せい','student'],['先生','せん.せい','teacher'],['生まれる','う.ま.れ.る','to be born']]},
  {ch:'大',mn:'big',on:['だい','たい'],kun:['おお'],words:[['大学生','だい.がく.せい','college student'],['大きい','おお.き.い','big'],['大変な','たい.へん.な','tough'],['大人','おと.な','adult',true],['大使館','たい.し.かん','embassy']]},
  {ch:'学',mn:'learning',on:['がく','がっ'],kun:['まな'],words:[['大学','だい.がく','university'],['学生','がく.せい','student'],['学校','がっ.こう','school'],['学ぶ','まな.ぶ','to study'],['学部','がく.ぶ','department; faculty']]},
  {ch:'外',mn:'outside',on:['がい'],kun:['そと'],words:[['外国','がい.こく','foreign country'],['外国人','がい.こく.じん','foreigner'],['外','そと','outside'],['海外','かい.がい','overseas']]},
  {ch:'国',mn:'country',on:['こく','ごく','こっ'],kun:['くに'],words:[['外国','がい.こく','foreign country'],['中国','ちゅう.ごく','China'],['国','くに','country'],['韓国','かん.こく','South Korea'],['国会','こっ.かい','the Diet']]}
  ];

  /* ---------- Lesson 7 (読み書き編 pp.324–325) ---------- */
  lessons[7] = [
  {ch:'京',mn:'capital',on:['きょう'],kun:[],words:[['東京','とう.きょう','Tokyo'],['京子','きょう.こ','Kyoko'],['京都','きょう.と','Kyoto'],['上京する','じょう.きょう.す.る','to go to the capital']]},
  {ch:'子',mn:'child',on:['し'],kun:['こ'],words:[['子ども','こ.ど.も','child'],['京子','きょう.こ','Kyoko'],['女の子','おんな.の.こ','girl'],['男の子','おとこ.の.こ','boy'],['女子学生','じょ.し.がく.せい','female student']]},
  {ch:'小',mn:'small',on:['しょう'],kun:['ちい'],words:[['小さい','ちい.さ.い','small'],['小学校','しょう.がっ.こう','elementary school'],['小学生','しょう.がく.せい','elementary school student']]},
  {ch:'会',mn:'to meet',on:['かい'],kun:['あ'],words:[['会う','あ.う','to meet'],['会社','かい.しゃ','company'],['会社員','かい.しゃ.いん','office worker'],['会議','かい.ぎ','meeting'],['教会','きょう.かい','church']]},
  {ch:'社',mn:'company',on:['しゃ','じゃ'],kun:[],words:[['会社','かい.しゃ','company'],['神社','じん.じゃ','shrine'],['社会','しゃ.かい','society'],['入社','にゅう.しゃ','entry to a company']]},
  {ch:'父',mn:'father',on:['ふ'],kun:['ちち','とう'],words:[['父','ちち','father'],['お父さん','お.とう.さ.ん','father'],['父母','ふ.ぼ','father and mother'],['祖父','そ.ふ','grandfather']]},
  {ch:'母',mn:'mother',on:['ぼ'],kun:['はは','かあ'],words:[['母','はは','mother'],['お母さん','お.かあ.さ.ん','mother'],['母語','ぼ.ご','mother tongue'],['祖母','そ.ぼ','grandmother']]},
  {ch:'高',mn:'high',on:['こう'],kun:['たか'],words:[['高い','たか.い','expensive; high'],['高校','こう.こう','high school'],['高校生','こう.こう.せい','high school student'],['最高','さい.こう','the best']]},
  {ch:'校',mn:'school',on:['こう'],kun:[],words:[['学校','がっ.こう','school'],['高校','こう.こう','high school'],['高校生','こう.こう.せい','high school student'],['中学校','ちゅう.がっ.こう','junior high school']]},
  {ch:'毎',mn:'every',on:['まい'],kun:[],words:[['毎日','まい.にち','every day'],['毎週','まい.しゅう','every week'],['毎晩','まい.ばん','every night'],['毎年','まい.ねん','every year']]},
  {ch:'語',mn:'word',on:['ご'],kun:[],words:[['日本語','に.ほん.ご','Japanese language'],['英語','えい.ご','English language'],['敬語','けい.ご','honorific expressions']]},
  {ch:'文',mn:'sentence',on:['ぶん'],kun:[],words:[['文学','ぶん.がく','literature'],['作文','さく.ぶん','composition'],['文化','ぶん.か','culture'],['文法','ぶん.ぽう','grammar']]},
  {ch:'帰',mn:'to return',on:['き'],kun:['かえ'],words:[['帰る','かえ.る','to return'],['帰国','き.こく','going home (to one\'s country)'],['帰宅','き.たく','returning home'],['帰り','かえ.り','return']]},
  {ch:'入',mn:'to enter',on:['にゅう'],kun:['はい','い','いり'],words:[['入る','はい.る','to enter'],['入り口','い.り.ぐち','entrance'],['入れる','い.れ.る','to put something in'],['輸入','ゆ.にゅう','import']]}
  ];

  /* ---------- Lesson 8 (読み書き編 pp.329–330) ---------- */
  lessons[8] = [
  {ch:'員',mn:'member',on:['いん'],kun:[],words:[['会社員','かい.しゃ.いん','office worker'],['店員','てん.いん','store clerk'],['駅員','えき.いん','station attendant'],['会員','かい.いん','member']]},
  {ch:'新',mn:'new',on:['しん'],kun:['あたら'],words:[['新しい','あたら.し.い','new'],['新聞','しん.ぶん','newspaper'],['新幹線','しん.かん.せん','bullet train'],['新鮮な','しん.せん.な','fresh']]},
  {ch:'聞',mn:'to listen',on:['ぶん'],kun:['き'],words:[['聞く','き.く','to listen'],['新聞','しん.ぶん','newspaper'],['聞こえる','き.こ.え.る','can be heard']]},
  {ch:'作',mn:'to make',on:['さく'],kun:['つく'],words:[['作る','つく.る','to make'],['作文','さく.ぶん','composition'],['作品','さく.ひん','work (of art, etc.)'],['作者','さく.しゃ','author']]},
  {ch:'仕',mn:'to serve',on:['し'],kun:['つか'],words:[['仕事','し.ごと','job'],['仕返し','し.かえ.し','revenge'],['仕える','つか.え.る','to serve; to work under']]},
  {ch:'事',mn:'thing',on:['じ'],kun:['ごと','こと'],words:[['仕事','し.ごと','job'],['事','こと','thing'],['火事','か.じ','fire'],['食事','しょく.じ','meal'],['返事','へん.じ','reply']]},
  {ch:'電',mn:'electricity',on:['でん'],kun:[],words:[['電車','でん.しゃ','train'],['電気','でん.き','electricity; light'],['電話','でん.わ','telephone'],['電池','でん.ち','battery']]},
  {ch:'車',mn:'car',on:['しゃ'],kun:['くるま'],words:[['車','くるま','car'],['電車','でん.しゃ','train'],['自転車','じ.てん.しゃ','bicycle'],['車いす','くるま.い.す','wheelchair'],['駐車場','ちゅう.しゃ.じょう','parking lot']]},
  {ch:'休',mn:'to rest',on:['きゅう'],kun:['やす'],words:[['休む','やす.む','to be absent; to rest'],['休み','やす.み','holiday; absence'],['休日','きゅう.じつ','holiday']]},
  {ch:'言',mn:'to say',on:['げん'],kun:['い','こと'],words:[['言う','い.う','to say'],['言語学','げん.ご.がく','linguistics'],['方言','ほう.げん','dialect'],['言葉','こと.ば','word; language']]},
  {ch:'読',mn:'to read',on:['どく'],kun:['よ'],words:[['読む','よ.む','to read'],['読書','どく.しょ','reading books'],['読み物','よ.み.もの','reading matter']]},
  {ch:'思',mn:'to think',on:['し'],kun:['おも'],words:[['思う','おも.う','to think'],['不思議な','ふ.し.ぎ.な','mysterious'],['思い出す','おも.い.だ.す','to recall; to remember']]},
  {ch:'次',mn:'next',on:['じ'],kun:['つぎ'],words:[['次','つぎ','next'],['次女','じ.じょ','second daughter'],['目次','もく.じ','table of contents'],['次回','じ.かい','next time']]},
  {ch:'何',mn:'what',on:[],kun:['なに','なん'],words:[['何','なに','what'],['何時','なん.じ','what time'],['何人','なん.にん','how many people'],['何か','なに.か','something']]}
  ];

  lessons[9] = [
 {ch:'午',mn:'noon',on:['ご'],kun:[],words:[['午前','ご.ぜん','A.M.'],['午後','ご.ご','P.M.; in the afternoon'],['午前中','ご.ぜん.ちゅう','in the morning'],['正午','しょう.ご','noon']]},
 {ch:'後',mn:'after',on:['ご'],kun:['あと','うし'],words:[['午後','ご.ご','P.M.; in the afternoon'],['後で','あと.で','later'],['後ろ','うし.ろ','back; behind'],['最後に','さい.ご.に','lastly']]},
 {ch:'前',mn:'before',on:['ぜん'],kun:['まえ'],words:[['前','まえ','before; front'],['午前','ご.ぜん','A.M.'],['名前','な.まえ','name'],['前売り','まえ.う.り','advance sale']]},
 {ch:'名',mn:'name',on:['めい','みょう'],kun:['な'],words:[['名前','な.まえ','name'],['有名な','ゆう.めい.な','famous'],['名刺','めい.し','name card'],['氏名','し.めい','full name'],['名字','みょう.じ','family name']]},
 {ch:'白',mn:'white',on:['はく'],kun:['しろ'],words:[['白い','しろ.い','white'],['白紙','はく.し','blank sheet'],['白','しろ','white color'],['白鳥','はく.ちょう','swan']]},
 {ch:'雨',mn:'rain',on:['う'],kun:['あめ'],words:[['雨','あめ','rain'],['雨期','う.き','rainy season'],['大雨','おお.あめ','heavy rain']]},
 {ch:'書',mn:'to write',on:['しょ'],kun:['か'],words:[['書く','か.く','to write'],['辞書','じ.しょ','dictionary'],['教科書','きょう.か.しょ','textbook'],['図書館','と.しょ.かん','library']]},
 {ch:'友',mn:'friend',on:['ゆう'],kun:['とも'],words:[['友だち','とも.だ.ち','friend'],['親友','しん.ゆう','best friend'],['友人','ゆう.じん','friend'],['友情','ゆう.じょう','friendship']]},
 {ch:'間',mn:'between',on:['かん','げん'],kun:['あいだ'],words:[['時間','じ.かん','time; hours'],['二時間','に.じ.かん','two hours'],['間','あいだ','between'],['人間','にん.げん','human being',true],['一週間','いっ.しゅう.かん','one week']]},
 {ch:'家',mn:'house',on:['か'],kun:['いえ','や'],words:[['家','いえ','house'],['家族','か.ぞく','family'],['作家','さっ.か','author'],['家事','か.じ','housework'],['家賃','や.ちん','rent',true]]},
 {ch:'話',mn:'to speak',on:['わ'],kun:['はな','はなし'],words:[['話す','はな.す','to speak'],['話','はなし','talk; story'],['電話','でん.わ','telephone'],['会話','かい.わ','conversation']]},
 {ch:'少',mn:'little',on:['しょう'],kun:['すこ','すく'],words:[['少し','すこ.し','a little'],['少ない','すく.な.い','few'],['少々','しょう.しょう','a little'],['少女','しょう.じょ','girl'],['少年','しょう.ねん','boy']]},
 {ch:'古',mn:'old',on:['こ'],kun:['ふる'],words:[['古い','ふる.い','old (for things)'],['中古','ちゅう.こ','secondhand'],['古代','こ.だい','ancient times']]},
 {ch:'知',mn:'to know',on:['ち'],kun:['し'],words:[['知る','し.る','to know'],['知人','ち.じん','acquaintance'],['知り合い','し.り.あ.い','acquaintance']]},
 {ch:'来',mn:'to come',on:['らい'],kun:['く','き','こ'],words:[['来る','く.る','to come'],['来ます','き.ま.す','to come'],['来ない','こ.な.い','not to come'],['来週','らい.しゅう','next week'],['来日','らい.にち','visit to Japan']]}
];
  lessons[10] = [
 {ch:'住',mn:'to live',on:['じゅう'],kun:['す'],words:[['住む','す.む','to live'],['住所','じゅう.しょ','address'],['移住する','い.じゅう.す.る','to immigrate']]},
 {ch:'正',mn:'right',on:['しょう','せい'],kun:['ただ'],words:[['お正月','お.しょう.がつ','New Year'],['正しい','ただ.し.い','right'],['正午','しょう.ご','noon'],['正解','せい.かい','correct answer']]},
 {ch:'年',mn:'year',on:['ねん'],kun:['とし'],words:[['三年生','さん.ねん.せい','third-year student'],['来年','らい.ねん','next year'],['今年','こ.とし','this year',true],['年','とし','year']]},
 {ch:'売',mn:'to sell',on:['ばい'],kun:['う'],words:[['売る','う.る','to sell'],['売店','ばい.てん','stand; stall'],['自動販売機','じ.どう.はん.ばい.き','vending machine']]},
 {ch:'買',mn:'to buy',on:['ばい'],kun:['か'],words:[['買う','か.う','to buy'],['買い物','か.い.もの','shopping'],['売買','ばい.ばい','selling and buying']]},
 {ch:'町',mn:'town',on:['ちょう'],kun:['まち'],words:[['町','まち','town'],['北山町','きた.やま.ちょう','Kitayama Town'],['町長','ちょう.ちょう','mayor of a town']]},
 {ch:'長',mn:'long',on:['ちょう'],kun:['なが'],words:[['長い','なが.い','long'],['長男','ちょう.なん','the eldest son'],['社長','しゃ.ちょう','company president']]},
 {ch:'道',mn:'way',on:['どう'],kun:['みち'],words:[['道','みち','way; road'],['書道','しょ.どう','calligraphy'],['柔道','じゅう.どう','judo'],['北海道','ほっ.かい.どう','Hokkaido']]},
 {ch:'雪',mn:'snow',on:['せつ'],kun:['ゆき'],words:[['雪','ゆき','snow'],['新雪','しん.せつ','new snow'],['雪だるま','ゆき.だ.る.ま','snowman']]},
 {ch:'立',mn:'to stand',on:['りつ'],kun:['た'],words:[['立つ','た.つ','to stand'],['国立大学','こく.りつ.だい.がく','national university'],['私立高校','し.りつ.こう.こう','private high school']]},
 {ch:'自',mn:'self',on:['じ'],kun:[],words:[['自分','じ.ぶん','oneself'],['自動車','じ.どう.しゃ','automobile'],['自転車','じ.てん.しゃ','bicycle'],['自由','じ.ゆう','freedom']]},
 {ch:'夜',mn:'night',on:['や'],kun:['よる','よ'],words:[['夜','よる','night'],['夜中','よ.なか','middle of the night'],['今夜','こん.や','tonight'],['夜明け','よ.あ.け','dawn']]},
 {ch:'朝',mn:'morning',on:['ちょう'],kun:['あさ'],words:[['朝','あさ','morning'],['朝食','ちょう.しょく','breakfast'],['毎朝','まい.あさ','every morning']]},
 {ch:'持',mn:'to hold',on:['じ'],kun:['も'],words:[['持つ','も.つ','to carry; to hold'],['持ってくる','も.っ.て.く.る','to bring'],['所持品','しょ.じ.ひん','belongings'],['気持ち','き.も.ち','feeling']]}
];
  lessons[11] = [
 {ch:'手',mn:'hand',on:['しゅ'],kun:['て'],words:[['手紙','て.がみ','letter'],['歌手','か.しゅ','singer'],['手','て','hand'],['手話','しゅ.わ','sign language']]},
 {ch:'紙',mn:'paper',on:['し'],kun:['がみ','かみ'],words:[['手紙','て.がみ','letter'],['紙','かみ','paper'],['和紙','わ.し','Japanese paper'],['表紙','ひょう.し','cover page'],['折り紙','お.り.がみ','origami']]},
 {ch:'好',mn:'favorite; to like',on:['こう'],kun:['す','この'],words:[['好きな','す.き.な','to like'],['大好きな','だい.す.き.な','to love'],['好意','こう.い','goodwill'],['好み','この.み','liking; taste'],['好物','こう.ぶつ','favorite food']]},
 {ch:'近',mn:'near',on:['きん'],kun:['ちか'],words:[['近く','ちか.く','near; nearby'],['近所','きん.じょ','neighborhood'],['最近','さい.きん','recently'],['中近東','ちゅう.きん.とう','the Middle and Near East']]},
 {ch:'明',mn:'bright',on:['めい'],kun:['あか'],words:[['明るい','あか.る.い','cheerful; bright'],['説明','せつ.めい','explanation'],['発明','はつ.めい','invention'],['文明','ぶん.めい','civilization']]},
 {ch:'病',mn:'ill; sick',on:['びょう'],kun:[],words:[['病院','びょう.いん','hospital'],['病気','びょう.き','illness'],['重病','じゅう.びょう','serious illness'],['急病','きゅう.びょう','sudden illness']]},
 {ch:'院',mn:'institution',on:['いん'],kun:[],words:[['病院','びょう.いん','hospital'],['大学院','だい.がく.いん','graduate school'],['美容院','び.よう.いん','beauty parlor']]},
 {ch:'映',mn:'to reflect',on:['えい'],kun:['うつ'],words:[['映画','えい.が','movie'],['映画館','えい.が.かん','movie theater'],['映る','うつ.る','to be reflected']]},
 {ch:'画',mn:'picture',on:['が','かく'],kun:[],words:[['映画','えい.が','movie'],['画家','が.か','painter'],['計画','けい.かく','plan'],['漫画','まん.が','comic']]},
 {ch:'歌',mn:'to sing',on:['か'],kun:['うた'],words:[['歌う','うた.う','to sing'],['歌','うた','song'],['歌手','か.しゅ','singer'],['国歌','こっ.か','national anthem'],['歌詞','か.し','lyrics']]},
 {ch:'市',mn:'city',on:['し'],kun:['いち'],words:[['川口市','かわ.ぐち.し','Kawaguchi City'],['市役所','し.やく.しょ','city hall'],['市長','し.ちょう','mayor'],['市場','いち.ば','market',true]]},
 {ch:'所',mn:'place',on:['じょ','しょ'],kun:['ところ','どころ'],words:[['所','ところ','place'],['近所','きん.じょ','neighborhood'],['台所','だい.どころ','kitchen',true],['住所','じゅう.しょ','address']]},
 {ch:'勉',mn:'to make efforts',on:['べん'],kun:['つと'],words:[['勉強する','べん.きょう.す.る','to study'],['勉める','つと.め.る','to try hard'],['勤勉な','きん.べん.な','diligent']]},
 {ch:'強',mn:'strong',on:['きょう','ごう'],kun:['つよ'],words:[['勉強する','べん.きょう.す.る','to study'],['強い','つよ.い','strong'],['強情な','ごう.じょう.な','obstinate',true],['強力な','きょう.りょく.な','powerful']]},
 {ch:'有',mn:'to exist',on:['ゆう'],kun:['あ'],words:[['有名な','ゆう.めい.な','famous'],['有料','ゆう.りょう','toll; fee'],['有る','あ.る','to exist'],['有能な','ゆう.のう.な','talented']]},
 {ch:'旅',mn:'travel',on:['りょ'],kun:['たび'],words:[['旅行','りょ.こう','travel'],['旅館','りょ.かん','Japanese inn'],['一人旅','ひと.り.たび','traveling alone'],['旅券','りょ.けん','passport']]}
];
  lessons[12] = [
 {ch:'昔',mn:'ancient times',on:[],kun:['むかし'],words:[['昔','むかし','old times'],['昔話','むかし.ばなし','old tale'],['大昔','おお.むかし','ancient times'],['昔々','むかし.むかし','once upon a time']]},
 {ch:'神',mn:'God',on:['じん','しん','こう'],kun:['かみ'],words:[['神さま','かみ.さ.ま','God'],['神社','じん.じゃ','shrine'],['神道','しん.とう','Shinto'],['神戸市','こう.べ.し','Kobe City',true]]},
 {ch:'早',mn:'early',on:['そう'],kun:['はや'],words:[['早い','はや.い','early'],['早起きする','はや.お.き.す.る','to get up early'],['早朝','そう.ちょう','early morning']]},
 {ch:'起',mn:'to get up',on:['き'],kun:['お'],words:[['起きる','お.き.る','to get up'],['起こす','お.こ.す','to wake someone up'],['再起動','さい.き.どう','reboot']]},
 {ch:'牛',mn:'cow',on:['ぎゅう'],kun:['うし'],words:[['牛','うし','cow'],['牛乳','ぎゅう.にゅう','milk'],['牛肉','ぎゅう.にく','beef'],['子牛','こ.うし','calf; veal']]},
 {ch:'使',mn:'to use',on:['し'],kun:['つか'],words:[['使う','つか.う','to use'],['大使','たい.し','ambassador'],['使用中','し.よう.ちゅう','"Occupied"'],['お使い','お.つか.い','errand']]},
 {ch:'働',mn:'to work',on:['どう'],kun:['はたら','ばたら'],words:[['働く','はたら.く','to work'],['共働き','とも.ばたら.き','both husband and wife working',true],['労働','ろう.どう','labor']]},
 {ch:'連',mn:'to link',on:['れん'],kun:['つ'],words:[['連れて帰る','つ.れ.て.かえ.る','to bring (a person) back'],['国連','こく.れん','United Nations'],['連休','れん.きゅう','consecutive holidays']]},
 {ch:'別',mn:'to separate',on:['べつ'],kun:['わか'],words:[['別れる','わか.れ.る','to separate'],['別に','べつ.に','not in particular'],['特別な','とく.べつ.な','special'],['差別','さ.べつ','discrimination'],['別々に','べつ.べつ.に','separately']]},
 {ch:'度',mn:'time; degrees',on:['ど'],kun:[],words:[['一度','いち.ど','once'],['今度','こん.ど','near future'],['温度','おん.ど','temperature'],['三十度','さん.じゅう.ど','30 degrees'],['態度','たい.ど','attitude']]},
 {ch:'赤',mn:'red',on:['せき'],kun:['あか'],words:[['赤','あか','red color'],['赤い','あか.い','red'],['赤ちゃん','あか.ち.ゃ.ん','baby'],['赤道','せき.どう','the equator'],['赤十字','せき.じゅう.じ','the Red Cross']]},
 {ch:'青',mn:'blue',on:['せい'],kun:['あお'],words:[['青','あお','blue color'],['青い','あお.い','blue'],['青年','せい.ねん','youth'],['青空','あお.ぞら','blue sky'],['青信号','あお.しん.ごう','green light']]},
 {ch:'色',mn:'color',on:['しき','しょく'],kun:['いろ'],words:[['色','いろ','color'],['色々な','いろ.いろ.な','various'],['景色','け.しき','scenery',true],['特色','とく.しょく','characteristic']]}
];
  lessons[15] = [
 {ch:'死',mn:'death; to die',on:['し'],kun:['し'],words:[['死ぬ','し.ぬ','to die'],['死','し','death'],['必死','ひっ.し','desperate'],['死者','し.しゃ','the dead']]},
 {ch:'意',mn:'mind; meaning',on:['い'],kun:[],words:[['意味','い.み','meaning'],['注意する','ちゅう.い.す.る','to watch out'],['意見','い.けん','opinion'],['用意する','よう.い.す.る','to prepare']]},
 {ch:'味',mn:'flavor; taste',on:['み'],kun:['あじ'],words:[['意味','い.み','meaning'],['趣味','しゅ.み','hobby'],['興味','きょう.み','interest'],['味','あじ','taste']]},
 {ch:'注',mn:'to pour; to shed',on:['ちゅう'],kun:['そそ'],words:[['注意する','ちゅう.い.す.る','to watch out'],['注文する','ちゅう.もん.す.る','to order'],['注ぐ','そそ.ぐ','to pour']]},
 {ch:'夏',mn:'summer',on:['か'],kun:['なつ'],words:[['夏','なつ','summer'],['夏休み','なつ.やす.み','summer vacation'],['初夏','しょ.か','early summer']]},
 {ch:'魚',mn:'fish',on:['ぎょ'],kun:['さかな','うお'],words:[['魚','さかな','fish'],['魚屋','さかな.や','fish shop'],['金魚','きん.ぎょ','goldfish'],['人魚','にん.ぎょ','mermaid'],['魚市場','うお.いち.ば','fish market',true]]},
 {ch:'寺',mn:'temple',on:['じ'],kun:['てら','でら'],words:[['お寺','お.てら','temple'],['東寺','とう.じ','Toji (a temple)'],['寺院','じ.いん','sacred building'],['禅寺','ぜん.でら','Zen temple',true]]},
 {ch:'広',mn:'spacious; wide',on:['こう'],kun:['ひろ'],words:[['広い','ひろ.い','wide; spacious'],['広場','ひろ.ば','square; open space'],['広島','ひろ.しま','Hiroshima'],['広告','こう.こく','advertisement']]},
 {ch:'足',mn:'foot; leg',on:['そく'],kun:['あし','た'],words:[['足','あし','foot; leg'],['足りる','た.り.る','to be sufficient'],['一足','いっ.そく','one pair of shoes'],['水不足','みず.ぶ.そく','lack of water']]},
 {ch:'転',mn:'to roll over',on:['てん'],kun:['ころ'],words:[['自転車','じ.てん.しゃ','bicycle'],['運転する','うん.てん.す.る','to drive'],['転ぶ','ころ.ぶ','to tumble; to fall down']]},
 {ch:'借',mn:'to borrow',on:['しゃく','しゃっ'],kun:['か'],words:[['借りる','か.り.る','to borrow'],['借地','しゃく.ち','rented land'],['借金','しゃっ.きん','debt',true],['借家','しゃく.や','rented house']]},
 {ch:'走',mn:'to run',on:['そう'],kun:['はし'],words:[['走る','はし.る','to run'],['走り書き','はし.り.が.き','hasty writing'],['脱走','だっ.そう','escape from a prison']]},
 {ch:'場',mn:'place',on:['じょう'],kun:['ば'],words:[['場所','ば.しょ','place'],['工場','こう.じょう','factory'],['市場','いち.ば','market'],['場合','ば.あい','case'],['駐車場','ちゅう.しゃ.じょう','parking lot']]},
 {ch:'建',mn:'to build',on:['けん'],kun:['たて','た'],words:[['建物','たて.もの','building'],['建てる','た.て.る','to build'],['建つ','た.つ','to be built'],['建国','けん.こく','founding a nation']]},
 {ch:'地',mn:'ground',on:['ち','じ'],kun:[],words:[['地下','ち.か','underground'],['地下鉄','ち.か.てつ','subway'],['地図','ち.ず','map'],['地球','ち.きゅう','the earth'],['地震','じ.しん','earthquake',true]]},
 {ch:'通',mn:'to pass; to commute',on:['つう'],kun:['とお','かよ'],words:[['通る','とお.る','to go through; to pass'],['通う','かよ.う','to commute'],['通学','つう.がく','going to school'],['通勤','つう.きん','going to work']]}
];
  lessons[16] = [
 {ch:'供',mn:'companion; offer',on:['きょう'],kun:['ども','そな'],words:[['子供','こ.ども','child'],['供える','そな.え.る','to offer something to a spirit'],['提供','てい.きょう','offer']]},
 {ch:'世',mn:'world; generation',on:['せ','せい'],kun:['よ'],words:[['世界','せ.かい','the world'],['世話','せ.わ','care'],['世代','せ.だい','generation'],['三世','さん.せい','the third generation'],['世の中','よ.の.なか','society']]},
 {ch:'界',mn:'world',on:['かい'],kun:[],words:[['世界','せ.かい','the world'],['視界','し.かい','visibility'],['政界','せい.かい','political world'],['限界','げん.かい','limit']]},
 {ch:'全',mn:'all',on:['ぜん'],kun:['まった','すべ'],words:[['全部','ぜん.ぶ','all'],['安全','あん.ぜん','safety'],['全国','ぜん.こく','whole country'],['全く','まった.く','entirely'],['全て','すべ.て','all']]},
 {ch:'部',mn:'part; section',on:['ぶ','へ'],kun:[],words:[['全部','ぜん.ぶ','all'],['部屋','へ.や','room',true],['部長','ぶ.ちょう','department manager']]},
 {ch:'始',mn:'to begin',on:['し'],kun:['はじ'],words:[['始まる','はじ.ま.る','(something) begins'],['始める','はじ.め.る','to begin (something)'],['始発','し.はつ','first train of the day'],['開始','かい.し','start']]},
 {ch:'週',mn:'week',on:['しゅう'],kun:[],words:[['毎週','まい.しゅう','every week'],['先週','せん.しゅう','last week'],['一週間','いっ.しゅう.かん','one week'],['二週目','に.しゅう.め','second week'],['週末','しゅう.まつ','weekend']]},
 {ch:'考',mn:'to think; idea',on:['こう'],kun:['かんが'],words:[['考える','かんが.え.る','to think'],['考え','かんが.え','idea'],['考古学','こう.こ.がく','archaeology'],['参考','さん.こう','reference']]},
 {ch:'開',mn:'to open',on:['かい'],kun:['あ','ひら'],words:[['開ける','あ.け.る','to open (something)'],['開く','あ.く','(something) opens'],['開店','かい.てん','opening of a store']]},
 {ch:'屋',mn:'shop; house',on:['おく'],kun:['や'],words:[['部屋','へ.や','room'],['本屋','ほん.や','bookstore'],['魚屋','さかな.や','fish shop'],['屋上','おく.じょう','rooftop'],['屋内','おく.ない','indoor']]},
 {ch:'方',mn:'direction; person',on:['ほう'],kun:['かた','がた'],words:[['味方','み.かた','ally; person on one\'s side'],['読み方','よ.み.かた','way of reading'],['夕方','ゆう.がた','evening'],['両方','りょう.ほう','both'],['方法','ほう.ほう','method']]},
 {ch:'運',mn:'transport; luck',on:['うん'],kun:['はこ'],words:[['運動','うん.どう','exercise'],['運転','うん.てん','driving'],['運命','うん.めい','fate'],['運ぶ','はこ.ぶ','to carry']]},
 {ch:'動',mn:'to move',on:['どう'],kun:['うご'],words:[['運動','うん.どう','exercise'],['動く','うご.く','to move'],['自動車','じ.どう.しゃ','automobile'],['動物','どう.ぶつ','animal'],['動詞','どう.し','verb']]},
 {ch:'教',mn:'to teach',on:['きょう'],kun:['おし'],words:[['教える','おし.え.る','to teach'],['教室','きょう.しつ','classroom'],['教会','きょう.かい','church'],['教科書','きょう.か.しょ','textbook']]},
 {ch:'室',mn:'room',on:['しつ'],kun:[],words:[['教室','きょう.しつ','classroom'],['研究室','けん.きゅう.しつ','professor\'s office'],['地下室','ち.か.しつ','basement'],['待合室','まち.あい.しつ','waiting room']]},
 {ch:'以',mn:'by means of; compared with',on:['い'],kun:[],words:[['以外','い.がい','other than'],['以上','い.じょう','... or more'],['以下','い.か','... or less'],['以内','い.ない','within'],['以前','い.ぜん','before; formerly']]}
];
  lessons[13] = [
 {ch:'物',mn:'thing',on:['ぶつ','ぶっ'],kun:['もの'],words:[['食べ物','た.べ.もの','food'],['飲み物','の.み.もの','drink'],['物','もの','things'],['買い物','か.い.もの','shopping'],['動物','どう.ぶつ','animal'],['物価','ぶっ.か','commodity prices',true]]},
 {ch:'鳥',mn:'bird',on:['ちょう'],kun:['とり'],words:[['鳥','とり','bird; poultry'],['焼き鳥','や.き.とり','grilled chicken'],['白鳥','はく.ちょう','swan']]},
 {ch:'料',mn:'ingredients; fare',on:['りょう'],kun:[],words:[['料理','りょう.り','cooking'],['料金','りょう.きん','charge'],['授業料','じゅ.ぎょう.りょう','tuition'],['給料','きゅう.りょう','salary']]},
 {ch:'理',mn:'reason',on:['り'],kun:[],words:[['料理','りょう.り','cooking'],['理由','り.ゆう','reason'],['地理','ち.り','geography'],['無理な','む.り.な','impossible']]},
 {ch:'特',mn:'special',on:['とく','とっ'],kun:[],words:[['特に','とく.に','especially'],['特別な','とく.べつ.な','special'],['特徴','とく.ちょう','characteristic'],['特急','とっ.きゅう','super express',true]]},
 {ch:'安',mn:'cheap; ease',on:['あん'],kun:['やす'],words:[['安い','やす.い','cheap'],['安全な','あん.ぜん.な','safe'],['安心','あん.しん','relief'],['不安な','ふ.あん.な','anxious; worried']]},
 {ch:'飯',mn:'food; cooked rice',on:['はん'],kun:[],words:[['ご飯','ご.はん','rice; meal'],['朝ご飯','あさ.ご.はん','breakfast'],['昼ご飯','ひる.ご.はん','lunch'],['晩ご飯','ばん.ご.はん','dinner']]},
 {ch:'肉',mn:'meat',on:['にく'],kun:[],words:[['肉','にく','meat'],['牛肉','ぎゅう.にく','beef'],['豚肉','ぶた.にく','pork'],['肉屋','にく.や','meat shop'],['筋肉','きん.にく','muscle']]},
 {ch:'悪',mn:'bad; wrong',on:['あく'],kun:['わる'],words:[['悪い','わる.い','bad'],['気分が悪い','き.ぶん.が.わる.い','to feel sick'],['最悪','さい.あく','the worst'],['悪魔','あく.ま','devil']]},
 {ch:'体',mn:'body',on:['たい'],kun:['からだ'],words:[['体','からだ','body'],['体重','たい.じゅう','body weight'],['体操','たい.そう','gymnastics']]},
 {ch:'同',mn:'same',on:['どう'],kun:['おな'],words:[['同じ','おな.じ','same'],['同僚','どう.りょう','coworker'],['同級生','どう.きゅう.せい','classmate'],['同時','どう.じ','same time']]},
 {ch:'着',mn:'to reach; to wear',on:['ちゃく'],kun:['つ','き','ぎ'],words:[['着く','つ.く','to arrive'],['着る','き.る','to wear'],['着物','き.もの','kimono',true],['水着','みず.ぎ','swimwear',true],['大阪着','おお.さか.ちゃく','arriving at Osaka']]},
 {ch:'空',mn:'sky; empty',on:['くう'],kun:['そら','あ','から'],words:[['空港','くう.こう','airport'],['空気','くう.き','air'],['空','そら','sky'],['空く','あ.く','to be vacant',true],['空手','から.て','karate',true]]},
 {ch:'港',mn:'port; harbor',on:['こう'],kun:['みなと'],words:[['空港','くう.こう','airport'],['神戸港','こう.べ.こう','Kobe Port'],['港','みなと','port']]},
 {ch:'昼',mn:'noon; daytime',on:['ちゅう'],kun:['ひる'],words:[['昼','ひる','noon; daytime'],['昼ご飯','ひる.ご.はん','lunch'],['昼寝','ひる.ね','nap'],['昼休み','ひる.やす.み','lunch break'],['昼食','ちゅう.しょく','lunch']]},
 {ch:'海',mn:'sea',on:['かい'],kun:['うみ'],words:[['海','うみ','sea'],['日本海','に.ほん.かい','the Japan Sea'],['海外','かい.がい','overseas'],['海岸','かい.がん','coast'],['北海道','ほっ.かい.どう','Hokkaido',true]]}
];
  lessons[14] = [
 {ch:'彼',mn:'he',on:[],kun:['かれ','かの'],words:[['彼','かれ','he; boyfriend'],['彼女','かの.じょ','she; girlfriend'],['彼ら','かれ.ら','they'],['彼氏','かれ.し','boyfriend']]},
 {ch:'代',mn:'age; replace',on:['だい'],kun:['か'],words:[['時代','じ.だい','age; era'],['電気代','でん.き.だい','electricity fee'],['九十年代','きゅう.じゅう.ねん.だい',"the 90's"],['十代','じゅう.だい',"in one's teens"],['代わりに','か.わ.り.に','instead']]},
 {ch:'留',mn:'to stay; to keep',on:['りゅう','る'],kun:[],words:[['留学生','りゅう.がく.せい','international student'],['留学する','りゅう.がく.す.る','to study abroad'],['留守','る.す','absence; not at home',true]]},
 {ch:'族',mn:'family; tribe',on:['ぞく'],kun:[],words:[['家族','か.ぞく','family'],['民族','みん.ぞく','ethnic group'],['水族館','すい.ぞく.かん','aquarium'],['王族','おう.ぞく','member of royalty']]},
 {ch:'親',mn:'parent; intimacy',on:['しん'],kun:['おや','した'],words:[['父親','ちち.おや','father',true],['親切な','しん.せつ.な','kind'],['親友','しん.ゆう','best friend'],['両親','りょう.しん','parents'],['親しい','した.し.い','intimate'],['母親','はは.おや','mother',true]]},
 {ch:'切',mn:'to cut',on:['せつ'],kun:['き','きっ'],words:[['親切な','しん.せつ.な','kind'],['切る','き.る','to cut'],['切符','きっ.ぷ','ticket',true],['切手','きっ.て','postage stamp',true],['大切な','たい.せつ.な','precious']]},
 {ch:'英',mn:'English; excellent',on:['えい'],kun:[],words:[['英語','えい.ご','English language'],['英国','えい.こく','United Kingdom'],['英会話','えい.かい.わ','English conversation'],['英雄','えい.ゆう','hero']]},
 {ch:'店',mn:'shop',on:['てん'],kun:['みせ'],words:[['店','みせ','shop'],['店員','てん.いん','store clerk'],['売店','ばい.てん','stall; kiosk'],['書店','しょ.てん','bookstore'],['店長','てん.ちょう','store manager']]},
 {ch:'去',mn:'past; to leave',on:['きょ','こ'],kun:['さ'],words:[['去年','きょ.ねん','last year'],['過去','か.こ','the past',true],['去る','さ.る','to leave'],['消去する','しょう.きょ.す.る','to erase']]},
 {ch:'急',mn:'to hurry; emergency',on:['きゅう'],kun:['いそ'],words:[['急に','きゅう.に','suddenly'],['急ぐ','いそ.ぐ','to hurry'],['急行','きゅう.こう','express train'],['特急','とっ.きゅう','super express']]},
 {ch:'乗',mn:'to ride',on:['じょう'],kun:['の'],words:[['乗る','の.る','to ride'],['乗り物','の.り.もの','vehicle'],['乗車','じょう.しゃ','riding a car'],['乗馬','じょう.ば','horseback riding']]},
 {ch:'当',mn:'to hit',on:['とう'],kun:['あ'],words:[['本当に','ほん.とう.に','really'],['お弁当','お.べん.とう','boxed lunch'],['当時','とう.じ','at that time'],['当たる','あ.た.る','to hit']]},
 {ch:'音',mn:'sound',on:['おん'],kun:['おと','ね'],words:[['音楽','おん.がく','music'],['発音','はつ.おん','pronunciation'],['音','おと','sound'],['本音','ほん.ね','real intention',true]]},
 {ch:'楽',mn:'pleasure',on:['がく','がっ','らく'],kun:['たの'],words:[['音楽','おん.がく','music'],['楽しい','たの.し.い','fun'],['楽器','がっ.き','musical instrument',true],['楽な','らく.な','easy; comfortable',true]]},
 {ch:'医',mn:'doctor; medicine',on:['い'],kun:[],words:[['医者','い.しゃ','doctor'],['歯医者','は.い.しゃ','dentist'],['医学','い.がく','medical science'],['医院','い.いん','clinic']]},
 {ch:'者',mn:'person',on:['しゃ','じゃ'],kun:['もの'],words:[['医者','い.しゃ','doctor'],['学者','がく.しゃ','scholar'],['読者','どく.しゃ','reader'],['若者','わか.もの','young people',true],['忍者','にん.じゃ','ninja',true]]}
];

  /* ---------- Lesson 17 (読み書き編 pp.299–300) ---------- */
  lessons[17] = [
  {ch:'野',mn:'field',on:['や'],kun:['の'],words:[['分野','ぶん.や','realm; field'],['小野さん','お.の.さ.ん','Mr./Ms. Ono',true],['長野','なが.の','Nagano'],['野球','や.きゅう','baseball'],['野菜','や.さい','vegetable']]},
  {ch:'習',mn:'to learn',on:['しゅう'],kun:['なら'],words:[['習う','なら.う','to learn'],['習字','しゅう.じ','calligraphy'],['練習','れん.しゅう','practice'],['習慣','しゅう.かん','habit; custom']]},
  {ch:'主',mn:'main; lord',on:['しゅ'],kun:['おも','ぬし'],words:[['主に','おも.に','mainly'],['ご主人','ご.しゅ.じん','husband'],['主婦','しゅ.ふ','housewife'],['主語','しゅ.ご','subject of a sentence'],['持ち主','も.ち.ぬし','owner',true]]},
  {ch:'歳',mn:'year; age',on:['さい','せい'],kun:[],words:[['二十五歳','に.じゅう.ご.さい','twenty-five years old'],['お歳暮','お.せい.ぼ','year-end gift',true]]},
  {ch:'集',mn:'to gather',on:['しゅう'],kun:['あつ'],words:[['集める','あつ.め.る','to collect'],['特集','とく.しゅう','(magazine) feature'],['集中する','しゅう.ちゅう.す.る','to concentrate']]},
  {ch:'発',mn:'to start; to reveal',on:['はっ','はつ','ぱつ'],kun:[],words:[['発表する','はっ.ぴょう.す.る','to make public; to give a presentation'],['発音','はつ.おん','pronunciation'],['出発','しゅっ.ぱつ','departure',true],['発明','はつ.めい','invention']]},
  {ch:'表',mn:'to express; surface',on:['ぴょう','ひょう'],kun:['あらわ','おもて'],words:[['発表する','はっ.ぴょう.す.る','to make public; to give a presentation',true],['表紙','ひょう.し','cover page'],['表現','ひょう.げん','expression'],['表す','あらわ.す','to express'],['表','おもて','the front']]},
  {ch:'品',mn:'goods; refinement',on:['ひん'],kun:['じな','しな'],words:[['作品','さく.ひん','work (of art, etc.)'],['上品な','じょう.ひん.な','elegant'],['手品','て.じな','magic',true],['品物','しな.もの','article of merchandise']]},
  {ch:'写',mn:'to copy',on:['しゃ'],kun:['うつ'],words:[['写真','しゃ.しん','photograph'],['写す','うつ.す','to copy'],['写生','しゃ.せい','sketch'],['描写する','びょう.しゃ.す.る','to describe']]},
  {ch:'真',mn:'true; reality',on:['しん'],kun:['ま'],words:[['写真','しゃ.しん','photograph'],['真ん中','ま.ん.なか','center'],['真上','ま.うえ','right above'],['真夜中','ま.よ.なか','midnight']]},
  {ch:'字',mn:'letter; character',on:['じ'],kun:[],words:[['文字','も.じ','letter; character',true],['赤字','あか.じ','deficit'],['名字','みょう.じ','family name'],['大文字','おお.も.じ','uppercase letters'],['漢字','かん.じ','Chinese character']]},
  {ch:'活',mn:'lively',on:['かつ','かっ'],kun:[],words:[['活動','かつ.どう','activity'],['生活','せい.かつ','life; living'],['活発な','かっ.ぱつ.な','active'],['活用','かつ.よう','conjugation'],['活気','かっ.き','liveliness']]},
  {ch:'結',mn:'to tie; to join',on:['けっ','けつ'],kun:['むす'],words:[['結婚する','けっ.こん.す.る','to get married'],['結果','けっ.か','result'],['結論','けつ.ろん','conclusion'],['結ぶ','むす.ぶ','to tie a knot']]},
  {ch:'婚',mn:'marriage',on:['こん'],kun:[],words:[['結婚する','けっ.こん.す.る','to get married'],['離婚','り.こん','divorce'],['婚約者','こん.やく.しゃ','fiancé(e)'],['新婚','しん.こん','newlywed'],['未婚','み.こん','unmarried']]},
  {ch:'歩',mn:'to walk',on:['ほ','ぽ'],kun:['ある'],words:[['歩く','ある.く','to walk'],['歩道','ほ.どう','sidewalk'],['散歩する','さん.ぽ.す.る','to stroll'],['一歩','いっ.ぽ','one step'],['進歩','しん.ぽ','progress']]}
  ];

  /* ---------- Lesson 18 (読み書き編 pp.306–307) ---------- */
  lessons[18] = [
  {ch:'目',mn:'eye',on:['もく'],kun:['め'],words:[['目的','もく.てき','purpose'],['目','め','eyes'],['目薬','め.ぐすり','eye drops'],['二番目','に.ばん.め','the second',true],['目上の人','め.うえ.の.ひと',"one's superiors"]]},
  {ch:'的',mn:'target; -ish',on:['てき'],kun:['まと'],words:[['目的','もく.てき','purpose'],['現代的','げん.だい.てき','modern'],['社会的','しゃ.かい.てき','social'],['的','まと','target']]},
  {ch:'洋',mn:'ocean; overseas',on:['よう'],kun:[],words:[['洋服','よう.ふく','(Western) clothes'],['東洋','とう.よう','the East'],['洋食','よう.しょく','Western food'],['大西洋','たい.せい.よう','the Atlantic']]},
  {ch:'服',mn:'clothes',on:['ふく'],kun:[],words:[['服','ふく','clothes'],['洋服','よう.ふく','(Western) clothes'],['制服','せい.ふく','uniform'],['和服','わ.ふく','Japanese clothes']]},
  {ch:'堂',mn:'hall',on:['どう'],kun:[],words:[['食堂','しょく.どう','cafeteria'],['公会堂','こう.かい.どう','public hall'],['堂々とした','どう.どう.と.し.た','dignified; imposing']]},
  {ch:'力',mn:'power',on:['りょく','りき'],kun:['ちから'],words:[['力仕事','ちから.し.ごと','physical labor'],['協力','きょう.りょく','cooperation'],['努力','ど.りょく','endeavor'],['力士','りき.し','sumo wrestler',true]]},
  {ch:'授',mn:'to instruct',on:['じゅ'],kun:['さず'],words:[['授業','じゅ.ぎょう','class'],['教授','きょう.じゅ','professor'],['授かる','さず.か.る','to be given']]},
  {ch:'業',mn:'business; vocation',on:['ぎょう'],kun:[],words:[['授業','じゅ.ぎょう','class'],['職業','しょく.ぎょう','occupation'],['産業','さん.ぎょう','industry']]},
  {ch:'試',mn:'test; to try',on:['し'],kun:['こころ'],words:[['試験','し.けん','exam'],['試合','し.あい','game; match'],['入試','にゅう.し','entrance exam'],['試みる','こころ.み.る','to try']]},
  {ch:'験',mn:'to examine',on:['けん'],kun:[],words:[['試験','し.けん','exam'],['実験','じっ.けん','experiment'],['経験','けい.けん','experience'],['受験','じゅ.けん','taking an examination']]},
  {ch:'貸',mn:'to lend; loan',on:['たい'],kun:['か'],words:[['貸す','か.す','to lend'],['貸し出し','か.し.だ.し','lending'],['賃貸','ちん.たい','renting out']]},
  {ch:'図',mn:'drawing; to devise',on:['と','ず'],kun:['はか'],words:[['図書館','と.しょ.かん','library'],['地図','ち.ず','map'],['図','ず','figure'],['合図','あい.ず','signal'],['図る','はか.る','to attempt']]},
  {ch:'館',mn:'building; hall',on:['かん'],kun:[],words:[['図書館','と.しょ.かん','library'],['旅館','りょ.かん','Japanese inn'],['映画館','えい.が.かん','movie theater'],['大使館','たい.し.かん','embassy']]},
  {ch:'終',mn:'end',on:['しゅう'],kun:['お'],words:[['終わる','お.わ.る','to come to an end'],['終わり','お.わ.り','end'],['終点','しゅう.てん','last stop'],['最終','さい.しゅう','the last']]},
  {ch:'宿',mn:'inn; to lodge in',on:['しゅく'],kun:['やど'],words:[['宿題','しゅく.だい','homework'],['下宿','げ.しゅく','boardinghouse'],['宿泊','しゅく.はく','lodging'],['宿','やど','inn']]},
  {ch:'題',mn:'title; topic',on:['だい'],kun:[],words:[['宿題','しゅく.だい','homework'],['問題','もん.だい','problem; question'],['題','だい','title'],['話題','わ.だい','topic of conversation']]}
  ];

  /* ---------- Lesson 19 (読み書き編 pp.313–314) ---------- */
  lessons[19] = [
  {ch:'春',mn:'spring',on:['しゅん'],kun:['はる'],words:[['春','はる','spring'],['春巻','はる.まき','spring roll'],['春分','しゅん.ぶん','vernal equinox'],['青春','せい.しゅん','youth']]},
  {ch:'秋',mn:'autumn',on:['しゅう'],kun:['あき'],words:[['秋','あき','autumn'],['秋学期','あき.がっ.き','fall semester'],['秋分','しゅう.ぶん','autumnal equinox']]},
  {ch:'冬',mn:'winter',on:['とう'],kun:['ふゆ'],words:[['冬','ふゆ','winter'],['冬休み','ふゆ.やす.み','winter vacation'],['暖冬','だん.とう','warm winter'],['春夏秋冬','しゅん.か.しゅう.とう','four seasons']]},
  {ch:'花',mn:'flower',on:['か'],kun:['はな','ばな'],words:[['花','はな','flower'],['花見','はな.み','flower viewing'],['花火','はな.び','fireworks'],['花粉症','か.ふん.しょう','hay fever'],['生け花','い.け.ばな','flower arrangement',true]]},
  {ch:'様',mn:'Mr.; Ms.; condition',on:['よう'],kun:['さま'],words:[['お客様','お.きゃく.さま','customer (respectful)'],['皆様','みな.さま','everyone'],['様子','よう.す','manner']]},
  {ch:'不',mn:'negative; non-',on:['ふ','ぶ'],kun:[],words:[['不安な','ふ.あん.な','anxious; worried'],['不景気','ふ.けい.き','recession'],['不便','ふ.べん','inconvenience'],['水不足','みず.ぶ.そく','lack of water',true]]},
  {ch:'姉',mn:'older sister',on:['し'],kun:['あね','ねえ'],words:[['姉','あね','older sister'],['お姉さん','お.ねえ.さ.ん','older sister'],['姉妹','し.まい','sisters'],['姉妹都市','し.まい.と.し','sister city']]},
  {ch:'兄',mn:'older brother',on:['きょう'],kun:['あに','にい'],words:[['兄','あに','older brother'],['お兄さん','お.にい.さ.ん','older brother'],['兄弟','きょう.だい','brothers']]},
  {ch:'漢',mn:'China',on:['かん'],kun:[],words:[['漢字','かん.じ','Chinese character'],['漢方薬','かん.ぽう.やく','Chinese herbal medicine'],['漢和辞典','かん.わ.じ.てん','kanji dictionary']]},
  {ch:'卒',mn:'to graduate',on:['そつ'],kun:[],words:[['卒業する','そつ.ぎょう.す.る','to graduate'],['卒業式','そつ.ぎょう.しき','graduation ceremony'],['大卒','だい.そつ','university graduate']]},
  {ch:'工',mn:'craft; construction',on:['こう','く'],kun:[],words:[['工学','こう.がく','engineering'],['工事','こう.じ','construction'],['工場','こう.じょう','factory'],['大工','だい.く','carpenter',true]]},
  {ch:'研',mn:'to polish; study',on:['けん'],kun:['と'],words:[['研究','けん.きゅう','research'],['研究者','けん.きゅう.しゃ','researcher'],['研修','けん.しゅう','training'],['研ぐ','と.ぐ','to sharpen']]},
  {ch:'究',mn:'research',on:['きゅう'],kun:['きわ'],words:[['研究','けん.きゅう','research'],['探究','たん.きゅう','inquiry'],['究める','きわ.め.る','to investigate thoroughly']]},
  {ch:'質',mn:'quality; matter',on:['しつ','しち'],kun:[],words:[['質問','しつ.もん','question'],['質がいい','しつ.が.い.い','good quality'],['素質','そ.しつ','aptitude'],['質屋','しち.や','pawn shop',true]]},
  {ch:'問',mn:'question',on:['もん'],kun:['と'],words:[['質問','しつ.もん','question'],['問題','もん.だい','problem; question'],['訪問','ほう.もん','visit'],['問う','と.う','to question']]},
  {ch:'多',mn:'many; much',on:['た'],kun:['おお'],words:[['多い','おお.い','many'],['多分','た.ぶん','probably'],['多くの','おお.く.の','many'],['多数決','た.すう.けつ','decision by majority']]}
  ];

  /* Meanings for the "other" kanji inside lesson words, so hints work on every character. */
  const other = {小:'small',菜:'greens; vegetable',練:'practice; train',慣:'get used to',人:'person',婦:'woman; wife',二:'two',五:'five',暮:'year-end; live',中:'middle; inside',出:'go out; take out',現:'present; appear',上:'up; above',描:'draw; depict',果:'fruit; result',論:'argument; theory',離:'separate',約:'promise; about',未:'not yet',散:'scatter; stroll',一:'one',進:'advance',薬:'medicine',番:'number; turn',東:'east',西:'west',制:'system; control',仕:'serve; do',事:'thing; matter',協:'cooperate',努:'strive',士:'gentleman; specialist',職:'job; employment',産:'produce; birth',入:'enter',実:'real; fruit',経:'pass through; manage',受:'receive',点:'point',下:'down; below',泊:'stay overnight',巻:'roll; volume',暖:'warm',火:'fire',粉:'powder',症:'illness; symptom',客:'guest; customer',皆:'all; everyone',子:'child; (small thing)',便:'convenience; mail',妹:'younger sister',都:'capital; city',弟:'younger brother',典:'rule; text',式:'ceremony; style',修:'study; master',探:'search',素:'element; plain',訪:'visit',数:'number',決:'decide',時:'time; hour',電:'electricity',気:'spirit; mood',年:'year',学:'study',生:'life; student',家:'house',水:'water',館:'building; hall',王:'king',父:'father',母:'mother',友:'friend',両:'both',大:'big',符:'tag; sign',手:'hand',語:'language; word',国:'country',会:'meet',話:'talk',雄:'male; hero',員:'member',売:'sell',書:'write',長:'long; chief',過:'pass; exceed',消:'erase; extinguish',行:'go',特:'special',物:'thing',車:'car; vehicle',馬:'horse',本:'origin; book',弁:'speech; lunchbox',発:'emit; depart',器:'vessel; tool',歯:'tooth',院:'institution',読:'read',若:'young',忍:'stealth; endure',民:'people',守:'protect; keep',氏:'clan; Mr.',女:'woman',九:'nine',十:'ten',食:'eat',飲:'drink',買:'buy',動:'move',価:'value; price',焼:'grill; burn',白:'white',金:'money; gold',授:'grant; teach',業:'work; business',給:'supply; pay',由:'reason; origin',地:'ground; earth',無:'nothing; without',別:'separate',徴:'sign; trait',全:'whole; all',心:'heart; mind',不:'not; un-',朝:'morning',晩:'evening',牛:'cow',豚:'pig',屋:'shop; roof',筋:'muscle; sinew',最:'most',魔:'demon',重:'heavy; weight',操:'handle; exercise',僚:'colleague',級:'class; grade',阪:'Osaka (place)',神:'god',戸:'door; house',寝:'sleep',休:'rest',外:'outside',岸:'shore',北:'north',道:'road; way',分:'minute; part',少:'few; little',公:'public',園:'garden',近:'near',町:'town',青:'blue',教:'teach',住:'live; reside',夏:'summer',魚:'fish',多:'many',思:'think',調:'tune; check',秋:'autumn',刺:'card; stab',氏:'clan; Mr.',字:'character; letter',紙:'paper',期:'period',辞:'word; resign',科:'subject; course',図:'diagram; plan',情:'feeling',作:'make',賃:'fee; wages',移:'move; shift',解:'untie; solve',販:'sell',社:'company; shrine',柔:'soft; gentle',新:'new',私:'private; I',高:'high; tall',校:'school',由:'origin; reason',品:'goods; article',和:'harmony; Japanese',表:'surface; chart',折:'fold',容:'form; contain',美:'beautiful',館:'building; hall',計:'measure; plan',漫:'random; cartoon',詞:'words; poetry',役:'role; service',台:'stand; platform',勤:'work; serve',券:'ticket',乳:'milk',労:'labor',差:'difference',温:'warm',態:'condition; attitude',信:'trust; signal',号:'number; sign',景:'scenery',必:'certain; must',趣:'taste; interest',興:'interest; rise',噌:'miso',見:'see',用:'use',文:'sentence; writing',初:'first; beginning',金:'money; gold',禅:'Zen',島:'island',告:'announce',鉄:'iron',球:'ball; sphere',震:'quake',脱:'escape; remove',駐:'park (a car)',合:'fit; join',工:'craft; work',提:'present; offer',視:'look at',政:'government',限:'limit',発:'emit; depart',末:'end',参:'refer; visit',究:'investigate',待:'wait',研:'polish; study',命:'life; order',詞:'word',雄:'male; hero',説:'explain',重:'heavy',急:'hurry',容:'form',転:'roll'};

  /* Non-lesson kanji whose reading in a lesson word is kun'yomi; everything else reads as on'yomi. */
  const otherKun = ['父ちち','母はは','手て','物もの','歯は','若わか','小お','中なか','上うえ','人ひと','出だ','薬ぐすり','事ごと','合あい','見み','火び','生い','皆みな','巻まき','休やす','水みず','文も','子す'];

  /* Why these kanji make this word — one short line each. */
  const why = {
 '食べ物':'eat + thing → food.', '飲み物':'drink + thing → a drink.', '物':'物 = thing.', '買い物':'buy + thing → shopping.', '動物':'move + thing → a thing that moves: animal.', '物価':'thing + value → what things cost: prices.',
 '鳥':'鳥 = bird.', '焼き鳥':'grilled + bird → yakitori.', '白鳥':'white + bird → swan.',
 '料理':'ingredients + reason/logic → handling ingredients by rule: cooking.', '料金':'fare + money → a charge.', '授業料':'teaching + work + fare → tuition.', '給料':'supply + fare → salary.',
 '理由':'reason + origin → the reason why.', '地理':'earth + logic → geography.', '無理な':'without + reason → unreasonable: impossible.',
 '特に':'特 = special → especially.', '特別な':'special + separate → special.', '特徴':'special + trait → a characteristic.', '特急':'special + express → super express.',
 '安い':'安 = cheap.', '安全な':'ease + whole → wholly at ease: safe.', '安心':'ease + heart → relief.', '不安な':'not + ease → uneasy, anxious.',
 'ご飯':'ご (polite) + cooked rice → a meal.', '朝ご飯':'morning + meal → breakfast.', '昼ご飯':'noon + meal → lunch.', '晩ご飯':'evening + meal → dinner.',
 '肉':'肉 = meat.', '牛肉':'cow + meat → beef.', '豚肉':'pig + meat → pork.', '肉屋':'meat + shop → butcher.', '筋肉':'sinew + meat → muscle.',
 '悪い':'悪 = bad.', '気分が悪い':'mood + が + bad → feeling unwell.', '最悪':'most + bad → the worst.', '悪魔':'bad + demon → devil.',
 '体':'体 = body.', '体重':'body + heavy → body weight.', '体操':'body + handling → gymnastics.',
 '同じ':'同 = same.', '同僚':'same + colleague → coworker.', '同級生':'same + grade + student → classmate.', '同時':'same + time → at the same time.',
 '着く':'着 = reach → to arrive.', '着る':'着 = wear.', '着物':'wear + thing → the thing you wear: kimono.', '水着':'water + wear → swimwear.', '大阪着':'Osaka + arriving → arriving at Osaka (on a timetable).',
 '空港':'sky + harbor → a harbor for the sky: airport.', '空気':'empty + spirit → what fills empty space: air.', '空':'空 = sky.', '空く':'空 = empty → to become vacant.', '空手':'empty + hand → karate, fighting empty-handed.',
 '神戸港':'Kobe + harbor → Kobe Port.', '港':'港 = harbor.',
 '昼':'昼 = noon.', '昼寝':'noon + sleep → a nap.', '昼休み':'noon + rest → lunch break.', '昼食':'noon + eat → lunch (the formal word).',
 '海':'海 = sea.', '日本海':'Japan + sea → the Japan Sea.', '海外':'sea + outside → beyond the sea: overseas.', '海岸':'sea + shore → the coast.', '北海道':'north + sea + road → Hokkaido.',
 '彼':'彼 = that person over there → he.', '彼女':'he + woman → she.', '彼ら':'he + ら (plural) → they.', '彼氏':'he + 氏 (Mr.) → boyfriend, said with a bit of formality.',
 '時代':'time + generation → an era.', '電気代':'electricity + 代 (charge, what you pay in place of) → the bill.', '九十年代':'ninety + years + generation → the 90s.', '十代':'ten + generation → the "tens" of your life: your teens.', '代わりに':'代 = substitute → in place of, instead.',
 '留学生':'stay + study + student → a student who stays abroad to study.', '留学する':'stay + study → study abroad.', '留守':'stay + guard: someone stays to guard the house while you\'re out → absence.',
 '家族':'house + tribe → the tribe of the house: family.', '民族':'people + tribe → ethnic group.', '水族館':'water + tribe + hall → the hall of the water tribe: aquarium.', '王族':'king + tribe → royalty.',
 '父親':'father + parent → father, as a role.', '親切な':'親 close + 切 earnest (not "cut" here) → close and earnest: kind.', '親友':'close + friend → best friend.', '両親':'both + parents.', '親しい':'親 = close → intimate.', '母親':'mother + parent → mother, as a role.',
 '切る':'切 = cut.', '切符':'cut + tag → a slip cut off for you: ticket.', '切手':'cut + hand → a cut slip you hand over: stamp.', '大切な':'big + earnest → treated with great care: precious.',
 '英語':'England + language.', '英国':'England + country → UK.', '英会話':'English + meet + talk → English conversation.', '英雄':'excellent + male → hero.',
 '店':'店 = shop.', '店員':'shop + member → clerk.', '売店':'sell + shop → stall, kiosk.', '書店':'書 (writing, books) + shop → bookstore.', '店長':'shop + chief → manager.',
 '去年':'gone + year → the year that left: last year.', '過去':'passed + gone → the past.', '去る':'去 = leave.', '消去する':'erase + remove → delete.',
 '急に':'急 = urgent → suddenly.', '急ぐ':'急 = hurry.', '急行':'hurry + go → express train.', '特急':'special + express → super express.',
 '乗る':'乗 = ride.', '乗り物':'ride + thing → vehicle.', '乗車':'ride + car → boarding.', '乗馬':'ride + horse.',
 '本当に':'true + hit → hits the truth: really.', 'お弁当':'弁当 is an old phonetic spelling (便当, "convenient") — no picture to draw, just memorize.', '当時':'that + time → at that time.', '当たる':'当 = hit.',
 '音楽':'sound + pleasure → music.', '発音':'emit + sound → pronunciation.', '音':'音 = sound.', '本音':'true + sound → the sound you really make: real intention.',
 '楽しい':'楽 = pleasure → fun.', '楽器':'music + vessel/tool → instrument.', '楽な':'楽 = ease → easy, comfortable.',
 '医者':'medicine + person → doctor.', '歯医者':'tooth + doctor → dentist.', '医学':'medicine + study.', '医院':'medicine + institution → clinic.',
 '学者':'study + person → scholar.', '読者':'read + person → reader.', '若者':'young + person → young people.', '忍者':'stealth + person → ninja.'
};

  /* Words highlighted in the textbook. Editable in-app: tap ☆ in a kanji's word list. */
  const highlighted = ['一','一時','二','二時','三','三時','四','四時','五','五時','六','六時','六百','七','七時','八','八時','八百','九','九時','十','十時','百','三百','千','三千','八千','千円','一万','十万','百万','百円','日本','日曜日','本','日本人','一人で','この人','月曜日','一月','火曜日','水曜日','水','木曜日','金曜日','土曜日','上','下','中','三時半','山','山川さん','川','元気な','天気','私','今','今日','田中さん','山田さん','女の人','男の人','見る','行く','食べる','飲む','東','東口','西','西口','南','南口','北','北口','出る','出口','出かける','右','左','五分','十分','先生','学生','大学生','大きい','大学','外国','外国人','中国','東京','京子','子ども','小さい','会う','会社','父','お父さん','母','お母さん','高い','高校','高校生','学校','毎日','日本語','文学','帰る','入る','会社員','新しい','新聞','聞く','作る','仕事','電車','電気','車','休む','休み','言う','読む','思う','次','何','何時','何人','分野','小野さん','習う','主に','ご主人','二十五歳','集める','発表する','作品','写真','写す','文字','活動','生活','結婚する','歩く','目的','目','洋服','服','食堂','力仕事','授業','試験','貸す','図書館','地図','旅館','映画館','終わる','宿題','春','秋','冬','冬休み','花','不安な','姉','お姉さん','兄','お兄さん','漢字','卒業する','工学','研究','質問','多い','食べ物','飲み物','物','買い物','鳥','料理','特に','安い','ご飯','朝ご飯','昼ご飯','肉','悪い','気分が悪い','体','同じ','着く','着る','着物','水着','空港','昼','海',
 '彼','彼女','時代','留学生','留学する','家族','父親','親切な','切る','英語','店','去年','急に','急ぐ','乗る','本当に','音楽','楽しい','医者',
 /* L9 */ '午前','午後','午前中','正午','後で','後ろ','最後に','前','名前','有名な','白い','白','白鳥','雨','書く','辞書','教科書','図書館','友だち','親友','友人','時間','二時間','間','人間','一週間','家','家族','作家','家事','話す','話','電話','会話','少し','少ない','少々','少女','少年','古い','中古','古代','知る','知人','知り合い','来る','来ます','来ない','来週','来日',
 /* L10 */ '住む','住所','お正月','正しい','三年生','来年','今年','年','売る','売店','買う','買い物','売買','町','長い','道','雪','新雪','雪だるま','立つ','自分','自動車','自転車','自由','夜','夜中','今夜','夜明け','朝','朝食','毎朝','持つ','持ってくる','気持ち',
 /* L11 */ '手紙','歌手','手','手話','紙','和紙','表紙','折り紙','好きな','大好きな','好意','好み','好物','近く','近所','最近','明るい','説明','発明','文明','病院','病気','大学院','美容院','映画','映画館','映る','画家','計画','漫画','歌う','歌','国歌','歌詞','川口市','市役所','市長','市場','所','台所','勉強する','勉める','勤勉な','強い','強情な','強力な','有名な','有料','有る','有能な','旅行','旅館','一人旅','旅券',
 /* L12 */ '昔','昔話','大昔','昔々','神さま','神社','早い','早起きする','起きる','起こす','牛','牛乳','牛肉','使う','働く','連れて帰る','別れる','別に','一度','今度','赤','赤い','青','青い','色','色々な',
 /* L15 */ '死ぬ','意味','注意する','夏','夏休み','魚','お寺','広い','足','足りる','自転車','運転する','借りる','走る','場所','建物','地下','通る',
 /* L16 */ '子供','世界','世話','全部','安全','全国','部屋','始まる','始める','毎週','先週','一週間','考える','開ける','本屋','味方','運動','運転','教える','教室','以外'];

  /* Sentences: [markup, english, hub kanji, hub reading, lesson] */
  const sentences = [
 ['[毎朝|まいあさ]、[朝ご飯|あさごはん|*]を[食べます|たべます]。','Every morning I eat breakfast.','飯','はん',13],
 ['[私|わたし]は[魚|さかな]より[肉|にく|*]が[好き|すき]です。','I like meat more than fish.','肉','にく',13],
 ['この[料理|りょうり|*]はとてもおいしいです。','This dish is very tasty.','料','りょう',13],
 ['[空港|くうこう|*]で[友だち|ともだち]に[会いました|あいました]。','I met a friend at the airport.','空','くう',13],
 ['[毎日|まいにち][体|からだ|*]をうごかしています。','I move my body every day.','体','からだ',13],
 ['[同じ|おなじ|*]クラスの[学生|がくせい]です。','We are students in the same class.','同','おな',13],
 ['この[店|みせ]の[物|もの|*]は[安い|やすい]です。','The things at this shop are cheap.','物','もの',13],
 ['[土曜日|どようび]に[買い物|かいもの|*]に[行きましょう|いきましょう]。','Let us go shopping on Saturday.','物','もの',13],
 ['[夏|なつ]は[海|うみ|*]に[行きます|いきます]。','In summer I go to the sea.','海','うみ',13],
 ['[昼ご飯|ひるごはん|*]はもう[食べました|たべました]か。','Have you eaten lunch yet?','昼','ひる',13],
 ['[今日|きょう]は[気分|きぶん]が[悪い|わるい|*]です。','I feel sick today.','悪','わる',13],
 ['[特に|とくに|*][日本|にほん]の[音楽|おんがく]が[好き|すき]です。','I especially like Japanese music.','特','とく',13],
 ['[公園|こうえん]に[白鳥|はくちょう|*]がいます。','There are swans in the park.','鳥','ちょう',13],
 ['[動物|どうぶつ|*]が[大好き|だいすき]です。','I love animals.','物','ぶつ',13],
 ['[神戸港|こうべこう|*]に[行った|いった]ことがありますか。','Have you ever been to Kobe Port?','港','こう',13],
 ['[電車|でんしゃ]は[十時|じゅうじ]に[着きます|つきます|*]。','The train arrives at ten.','着','つ',13],
 ['[着物|きもの|*]を[着ました|きました]。','I wore a kimono.','着','き',13],
 ['ここはとても[安全な|あんぜんな|*][町|まち]です。','This is a very safe town.','安','あん',13],
 ['[理由|りゆう|*]を[教えて|おしえて]ください。','Please tell me the reason.','理','り',13],
 ['[先月|せんげつ]、[給料|きゅうりょう|*]がすこし[上がりました|あがりました]。','Last month my salary went up a little.','料','りょう',13],
 ['[無理な|むりな|*]ことはしないでください。','Please do not do anything impossible.','理','り',13],
 ['[牛肉|ぎゅうにく|*]と[豚肉|ぶたにく]を[買いました|かいました]。','I bought beef and pork.','肉','にく',13],
 ['[晩ご飯|ばんごはん|*]は[何|なん]ですか。','What is for dinner?','飯','はん',13],
 ['[空|そら|*]が[青くて|あおくて]、きれいです。','The sky is blue and beautiful.','空','そら',13],
 ['いつか[海外|かいがい|*]に[住みたい|すみたい]です。','Someday I want to live overseas.','海','かい',13],
 ['[去年|きょねん|*]、[日本|にほん]に[行きました|いきました]。','Last year I went to Japan.','去','きょ'],
 ['[私|わたし]の[家族|かぞく|*]は[五人|ごにん]です。','My family has five people.','族','ぞく'],
 ['[山下先生|やましたせんせい]はとても[親切な|しんせつな|*][人|ひと]です。','Prof. Yamashita is a very kind person.','親','しん'],
 ['[急に|きゅうに|*][雨|あめ]がふりました。','Suddenly it started to rain.','急','きゅう'],
 ['[駅|えき]で[切符|きっぷ|*]を[買いました|かいました]。','I bought a ticket at the station.','切','きっ'],
 ['[医者|いしゃ|*]になりたいです。','I want to become a doctor.','医','い'],
 ['[音楽|おんがく|*]を[聞きながら|ききながら][勉強します|べんきょうします]。','I study while listening to music.','音','おん'],
 ['[本当に|ほんとうに|*]すみません。','I am really sorry.','当','とう'],
 ['[十代|じゅうだい]のとき、[留学生|りゅうがくせい|*]でした。','In my teens, I was an international student.','留','りゅう'],
 ['[彼女|かのじょ|*]は[英語|えいご]が[上手|じょうず]です。','She is good at English.','彼','かの'],
 ['[電気代|でんきだい|*]が[高い|たかい]です。','The electricity bill is high.','代','だい'],
 ['この[店|みせ]の[店員|てんいん|*]は[親切|しんせつ]です。','The clerks at this shop are kind.','店','てん'],
 ['[両親|りょうしん|*]に[相談|そうだん]しました。','I consulted my parents.','親','しん'],
 ['[毎朝|まいあさ]、[電車|でんしゃ]に[乗ります|のります|*]。','Every morning I ride the train.','乗','の'],
 ['[発音|はつおん|*]がむずかしいです。','The pronunciation is hard.','音','おん'],
 ['[お弁当|おべんとう|*]を[持って|もって][行きます|いきます]。','I will bring a boxed lunch.','当','とう'],
 ['[彼|かれ]は[忍者|にんじゃ|*]の[本|ほん]を[読んで|よんで]います。','He is reading a book about ninja.','者','じゃ'],
 ['[歯医者|はいしゃ|*]に[行く|いく]のをあきらめました。','I gave up on going to the dentist.','医','い'],
 ['[楽器|がっき|*]をひくのは[楽しい|たのしい]です。','Playing an instrument is fun.','楽','がっ'],
 ['[若者|わかもの]はよく[特急|とっきゅう|*]に[乗ります|のります]。','Young people often ride the super express.','急','きゅう'],
 ['[過去|かこ|*]のことはわすれましょう。',"Let's forget the past.",'去','こ'],
 ['[母親|ははおや|*]は[水族館|すいぞくかん]でしごとをしています。','My mother works at the aquarium.','親','おや'],
 ['[留守|るす|*]のとき、[友だち|ともだち]が[来ました|きました]。','A friend came while I was out.','留','る'],
 ['[大切な|たいせつな|*]ゆびわをなくしました。','I lost a precious ring.','切','せつ'],
 ['[英会話|えいかいわ|*]のクラスを[取って|とって]います。','I am taking an English conversation class.','英','えい'],
 ['[当時|とうじ|*]、[私|わたし]は[学生|がくせい]でした。','At that time, I was a student.','当','とう'],
 ['[本音|ほんね|*]を[言って|いって]ください。','Tell me what you really think.','音','ね'],
 ['[王族|おうぞく|*]に[会った|あった]ことがありますか。','Have you ever met royalty?','族','ぞく'],
 ['[彼氏|かれし|*]は[音楽|おんがく]が[好き|すき]です。','My boyfriend likes music.','彼','かれ'],
 ['[時代|じだい|*]がかわりました。','Times have changed.','代','だい'],
 ['[書店|しょてん|*]で[本|ほん]を[買います|かいます]。','I buy books at the bookstore.','店','てん'],
 ['[急いで|いそいで|*]ください。','Please hurry.','急','いそ'],
 ['[乗り物|のりもの|*]に[乗る|のる]のが[楽しい|たのしい]です。','Riding vehicles is fun.','乗','の'],
 ['[学者|がくしゃ|*]になるのはむずかしいです。','Becoming a scholar is hard.','者','しゃ'],
 ['このしごとは[楽な|らくな|*]ものではありません。','This job is not an easy one.','楽','らく'],
 ['[読者|どくしゃ|*]からてがみが[来ました|きました]。','A letter came from a reader.','者','しゃ'],
 ['[父親|ちちおや|*]は[医学|いがく]を[勉強しました|べんきょうしました]。','My father studied medicine.','親','おや'],
 ['[民族|みんぞく|*]の[音楽|おんがく]をききました。','I listened to folk music.','族','ぞく'],
 ['[代わりに|かわりに|*][私|わたし]が[行きます|いきます]。','I will go instead.','代','か'],
 ['[切手|きって|*]を[三|さん]まい[買いました|かいました]。','I bought three stamps.','切','きっ']
];

  /* Stories: {t, en, lesson, s, tr} */
  const stories = [
 {t:'好きな食べ物', en:'Food I like', lesson:13,
  s:'[毎日|まいにち]、[朝ご飯|あさごはん|*]と[昼ご飯|ひるごはん|*]は[家|いえ]で[食べます|たべます]。[晩ご飯|ばんごはん|*]は[外|そと]で[食べる|たべる]ことが[多い|おおい]です。[特に|とくに|*][日本|にほん]の[料理|りょうり|*]が[好き|すき]です。[安い|やすい|*][店|みせ]で[牛肉|ぎゅうにく|*]や[焼き鳥|やきとり|*]を[買って|かって]、[家|いえ]で[作ります|つくります]。',
  tr:'Every day I eat breakfast and lunch at home. Dinner I often eat out. I especially like Japanese cooking. I buy beef and yakitori at a cheap shop and make them at home.'},
 {t:'空港で', en:'At the airport', lesson:13,
  s:'[先週|せんしゅう]、[海|うみ|*]の[近く|ちかく]の[空港|くうこう|*]に[行きました|いきました]。[飛行機|ひこうき]は[昼|ひる|*]に[着きました|つきました|*]。その[日|ひ]は[空|そら|*]があおくて、[気分|きぶん]がよかったです。[同じ|おなじ|*][飛行機|ひこうき]に[同級生|どうきゅうせい|*]がいて、びっくりしました。',
  tr:'Last week I went to the airport near the sea. The plane arrived at noon. That day the sky was blue and I felt good. A classmate was on the same plane, which surprised me.'},
 {t:'悪い一日', en:'A bad day', lesson:13,
  s:'[今日|きょう]は[気分|きぶん]が[悪い|わるい|*][日|ひ]でした。[体|からだ|*]がおもくて、[昼休み|ひるやすみ|*]に[昼寝|ひるね|*]をしました。[晩ご飯|ばんごはん|*]も[食べません|たべません]でした。でも[明日|あした]は[同じ|おなじ|*]ことがないと[思います|おもいます]。[無理な|むりな|*]ことはしません。',
  tr:'Today was a day when I felt unwell. My body felt heavy, so I took a nap during the lunch break. I did not eat dinner either. But I think tomorrow will not be the same. I will not overdo it.'},
 {t:'留学生の一日', en:"An exchange student's day",
  s:'[去年|きょねん|*]、アメリカから[日本|にほん]に[来ました|きました]。[今|いま]、[大学|だいがく]の[留学生|りゅうがくせい|*]です。[毎日|まいにち][電車|でんしゃ]に[乗って|のって|*]、[学校|がっこう]に[行きます|いきます]。[朝|あさ]、[時間|じかん]がなくて[急いで|いそいで|*]いるときは、[特急|とっきゅう|*]に[乗ります|のります]。[日本語|にほんご]の[先生|せんせい]はとても[親切な|しんせつな|*][人|ひと]です。でも[発音|はつおん|*]がまだむずかしいです。',
  tr:'Last year I came to Japan from America. Now I am an exchange student at a university. Every day I ride the train and go to school. In the morning, when I have no time and am in a hurry, I take the super express. My Japanese teacher is a very kind person. But the pronunciation is still hard.'},
 {t:'私の家族', en:'My family',
  s:'[私|わたし]の[家族|かぞく|*]は[四人|よにん]です。[父親|ちちおや|*]は[医者|いしゃ|*]で、[母親|ははおや|*]は[書店|しょてん|*]ではたらいています。[両親|りょうしん|*]はとても[楽しい|たのしい|*][人|ひと]たちです。[週末|しゅうまつ]、よくいっしょに[水族館|すいぞくかん|*]に[行きます|いきます]。[私|わたし]は[魚|さかな]がすきですから、[本当に|ほんとうに|*][楽|たの]しいです。',
  tr:'There are four people in my family. My father is a doctor, and my mother works at a bookstore. My parents are very fun people. On weekends we often go to the aquarium together. I like fish, so it is really fun.'},
 {t:'音楽が好きな人', en:'Someone who loves music',
  s:'[彼女|かのじょ|*]は[音楽|おんがく|*]が[好き|すき]です。[十代|じゅうだい|*]のときから[楽器|がっき|*]をひいています。[英語|えいご|*]の[歌|うた]もよくうたいますが、[発音|はつおん|*]がむずかしいと[言って|いって]います。[先月|せんげつ]、[急に|きゅうに|*][上手|じょうず]になりました。[彼氏|かれし|*]も[楽器|がっき]をひきますが、[音|おと|*]が[大きい|おおきい]です。',
  tr:'She loves music. She has been playing an instrument since her teens. She often sings English songs too, but she says the pronunciation is hard. Last month she suddenly got good at it. Her boyfriend plays an instrument as well, but his sound is loud.'},
 {t:'駅で', en:'At the station',
  s:'[先週|せんしゅう]、[駅|えき]の[売店|ばいてん|*]で[お弁当|おべんとう|*]を[買いました|かいました]。それから[切符|きっぷ|*]を[買って|かって]、[電車|でんしゃ]に[乗りました|のりました|*]。[店員|てんいん|*]さんはとても[親切|しんせつ|*]でした。[時代|じだい|*]がかわっても、[旅行|りょこう]は[楽しい|たのしい|*]です。',
  tr:'Last week I bought a boxed lunch at the kiosk in the station. Then I bought a ticket and got on the train. The clerk was very kind. Even though the times have changed, travel is fun.'},
 {t:'歯医者に行った日', en:'The day I went to the dentist',
  s:'[歯|は]がいたかったので、[歯医者|はいしゃ|*]に[行きました|いきました]。そのお[医者|いしゃ|*]さんは[若者|わかもの|*]でしたが、とても[親切|しんせつ|*]でした。[過去|かこ|*]にも[二回|にかい][行った|いった]ことがあります。[家|いえ]に[帰った|かえった]とき、[家族|かぞく]はみんな[留守|るす|*]でした。[代わりに|かわりに|*][友だち|ともだち]が[来て|きて]くれました。',
  tr:'My tooth hurt, so I went to the dentist. The doctor there was a young person, but he was very kind. I have been there twice before as well. When I got home, my whole family was out. A friend came over instead.'}
];

  const storyBase = {'乗って':'乗る','乗りました':'乗る','急いで':'急ぐ','親切':'親切な','大切':'大切な','楽':'楽しい','着きました':'着く','着ました':'着る','昼':'昼','空':'空'};

  return {lessons, other, otherKun, why, highlighted, sentences, stories, storyBase};
})();