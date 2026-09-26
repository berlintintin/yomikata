/* =============================================================================
   読み方 Yomikata — CONTENT
   Everything Genki-specific lives here. yomikata.html is the engine and never
   needs editing to add a lesson.

   ---------------------------------------------------------------------------
   ADDING A LESSON
   ---------------------------------------------------------------------------
   1. Add a block below:  lessons[17] = [ …kanji… ];
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

  /* Meanings for the "other" kanji inside lesson words, so hints work on every character. */
  const other = {時:'time; hour',電:'electricity',気:'spirit; mood',年:'year',学:'study',生:'life; student',家:'house',水:'water',館:'building; hall',王:'king',父:'father',母:'mother',友:'friend',両:'both',大:'big',符:'tag; sign',手:'hand',語:'language; word',国:'country',会:'meet',話:'talk',雄:'male; hero',員:'member',売:'sell',書:'write',長:'long; chief',過:'pass; exceed',消:'erase; extinguish',行:'go',特:'special',物:'thing',車:'car; vehicle',馬:'horse',本:'origin; book',弁:'speech; lunchbox',発:'emit; depart',器:'vessel; tool',歯:'tooth',院:'institution',読:'read',若:'young',忍:'stealth; endure',民:'people',守:'protect; keep',氏:'clan; Mr.',女:'woman',九:'nine',十:'ten',食:'eat',飲:'drink',買:'buy',動:'move',価:'value; price',焼:'grill; burn',白:'white',金:'money; gold',授:'grant; teach',業:'work; business',給:'supply; pay',由:'reason; origin',地:'ground; earth',無:'nothing; without',別:'separate',徴:'sign; trait',全:'whole; all',心:'heart; mind',不:'not; un-',朝:'morning',晩:'evening',牛:'cow',豚:'pig',屋:'shop; roof',筋:'muscle; sinew',最:'most',魔:'demon',重:'heavy; weight',操:'handle; exercise',僚:'colleague',級:'class; grade',阪:'Osaka (place)',神:'god',戸:'door; house',寝:'sleep',休:'rest',外:'outside',岸:'shore',北:'north',道:'road; way',分:'minute; part',少:'few; little',公:'public',園:'garden',近:'near',町:'town',青:'blue',教:'teach',住:'live; reside',夏:'summer',魚:'fish',多:'many',思:'think',調:'tune; check',秋:'autumn',刺:'card; stab',氏:'clan; Mr.',字:'character; letter',紙:'paper',期:'period',辞:'word; resign',科:'subject; course',図:'diagram; plan',情:'feeling',作:'make',賃:'fee; wages',移:'move; shift',解:'untie; solve',販:'sell',社:'company; shrine',柔:'soft; gentle',新:'new',私:'private; I',高:'high; tall',校:'school',由:'origin; reason',品:'goods; article',和:'harmony; Japanese',表:'surface; chart',折:'fold',容:'form; contain',美:'beautiful',館:'building; hall',計:'measure; plan',漫:'random; cartoon',詞:'words; poetry',役:'role; service',台:'stand; platform',勤:'work; serve',券:'ticket',乳:'milk',労:'labor',差:'difference',温:'warm',態:'condition; attitude',信:'trust; signal',号:'number; sign',景:'scenery',必:'certain; must',趣:'taste; interest',興:'interest; rise',噌:'miso',見:'see',用:'use',文:'sentence; writing',初:'first; beginning',金:'money; gold',禅:'Zen',島:'island',告:'announce',鉄:'iron',球:'ball; sphere',震:'quake',脱:'escape; remove',駐:'park (a car)',合:'fit; join',工:'craft; work',提:'present; offer',視:'look at',政:'government',限:'limit',発:'emit; depart',末:'end',参:'refer; visit',究:'investigate',待:'wait',研:'polish; study',命:'life; order',詞:'word',雄:'male; hero',説:'explain',重:'heavy',急:'hurry',容:'form',転:'roll'};

  /* Non-lesson kanji whose reading in a lesson word is kun'yomi; everything else reads as on'yomi. */
  const otherKun = ['父ちち','母はは','手て','物もの','歯は','若わか'];

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
  const highlighted = ['食べ物','飲み物','物','買い物','鳥','料理','特に','安い','ご飯','朝ご飯','昼ご飯','肉','悪い','気分が悪い','体','同じ','着く','着る','着物','水着','空港','昼','海',
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