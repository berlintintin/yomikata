/* =======================================================================
   yomikata-words.js — for the 📚 Words slideshow (Genki lessons 9–19, the
   words your book highlights): why each word is written with its kanji, and
   an example sentence. Optional: if this file is missing, the slideshow still
   shows each word, its reading and its meaning; it just skips these extras.
   Keyed by the word exactly as written in yomikata-content.js.
     why: what each kanji in the word means and how they add up to the word
          (read aloud). Japanese goes inside 「」, written 「漢字|かな」
          (shown as the kanji, spoken as the kana) or just 「かな」.
     ja:  example sentence. [漢字|かな] shows furigana; [漢字|かな|*] is the
          word itself (it gets highlighted).
     en:  its English translation
   Run yomikataCheck() in the browser console after editing to catch typos.
   ======================================================================= */
window.YOMIKATA_WORDS = window.YOMIKATA_WORDS || {};
Object.assign(window.YOMIKATA_WORDS, {
  "午前": {
    why: "「午|ご」 is noon, and 「前|ぜん」 is before. Before noon: A.M.",
    ja: "[午前|ごぜん|*][九時|くじ]に[来|き]てください。", en: "Please come at nine A.M." },
  "午後": {
    why: "「午|ご」 is noon, and 「後|ご」 is after. After noon: P.M.",
    ja: "[午後|ごご|*]はひまです。", en: "I'm free in the afternoon." },
  "午前中": {
    why: "「午前|ごぜん」 is before noon, and 「中|ちゅう」 means middle, or throughout. Throughout the morning: all morning.",
    ja: "[午前中|ごぜんちゅう|*]は[家|いえ]にいます。", en: "I'll be home all morning." },
  "正午": {
    why: "「正|しょう」 means correct, exact, and 「午|ご」 is noon. Exact noon: noon on the dot.",
    ja: "[正午|しょうご|*]に[会|あ]いましょう。", en: "Let's meet at noon." },
  "後で": {
    why: "「後|あと」 means after, or behind. Add 「で」 and it means afterward: later.",
    ja: "[後で|あとで|*][電話|でんわ]します。", en: "I'll call you later." },
  "後ろ": {
    why: "The same kanji, 「後|うし」, after or behind, here with a native reading. The space behind you: back.",
    ja: "[後ろ|うしろ|*]を[見|み]てください。", en: "Please look behind you." },
  "最後に": {
    why: "「最|さい」 means most, and 「後|ご」 is after. The most after, the very last. With 「に」: lastly.",
    ja: "[最後に|さいごに|*]デザートを[食|た]べました。", en: "Lastly, I ate dessert." },
  "前": {
    why: "「前|まえ」 means front, and also before. In space it's in front; in time it's before, as in 「三年前|さんねんまえ」, three years ago.",
    ja: "[駅|えき]の[前|まえ|*]で[待|ま]っています。", en: "I'm waiting in front of the station." },
  "名前": {
    why: "「名|な」 is name, and 「前|まえ」 is front. Your name is what you put out in front of you.",
    ja: "お[名前|なまえ|*]は[何|なん]ですか。", en: "What is your name?" },
  "有名な": {
    why: "「有|ゆう」 means to have, and 「名|めい」 is name. Having a name everyone knows: famous.",
    ja: "あの[人|ひと]は[有名|ゆうめい|*]な[歌手|かしゅ]です。", en: "That person is a famous singer." },
  "白い": {
    why: "「白|しろ」 is white. It looks like 「日|ひ」, the sun, with a ray of light on top. Add 「い」 for the adjective: white.",
    ja: "[白|しろ|*]いシャツを[買|か]いました。", en: "I bought a white shirt." },
  "白": {
    why: "「白|しろ」 on its own is the color white, the noun.",
    ja: "[白|しろ|*]が[好|す]きです。", en: "I like white." },
  "白鳥": {
    why: "「白|はく」 is white, and 「鳥|ちょう」 is bird. A white bird: swan.",
    ja: "[湖|みずうみ]に[白鳥|はくちょう|*]がいます。", en: "There are swans on the lake." },
  "雨": {
    why: "「雨|あめ」 is a picture: the sky on top, a cloud, and four drops of rain falling. Rain.",
    ja: "[今日|きょう]は[雨|あめ|*]です。", en: "It's raining today." },
  "書く": {
    why: "「書|か」 shows a hand holding a writing brush at the top. Holding a brush: to write.",
    ja: "[手紙|てがみ]を[書|か|*]きます。", en: "I'll write a letter." },
  "辞書": {
    why: "「辞|じ」 means words, and 「書|しょ」 is writing, a book. A book of words: dictionary.",
    ja: "[辞書|じしょ|*]で[調|しら]べます。", en: "I'll look it up in the dictionary." },
  "教科書": {
    why: "「教|きょう」 is teach, 「科|か」 is subject, and 「書|しょ」 is book. A book for teaching a subject: textbook.",
    ja: "[教科書|きょうかしょ|*]を[忘|わす]れました。", en: "I forgot my textbook." },
  "図書館": {
    why: "「図|と」 is drawing, 「書|しょ」 is writing, and 「館|かん」 is a large building. A building of drawings and writings: library.",
    ja: "[図書館|としょかん|*]で[勉強|べんきょう]します。", en: "I study at the library." },
  "友だち": {
    why: "「友|とも」 began as two hands joined together: friends. The 「だち」 was once a plural ending.",
    ja: "[友|とも|*]だちと[映画|えいが]を[見|み]ました。", en: "I saw a movie with a friend." },
  "親友": {
    why: "「親|しん」 means close, intimate, and 「友|ゆう」 is friend. Your closest friend: best friend.",
    ja: "[彼女|かのじょ]は[私|わたし]の[親友|しんゆう|*]です。", en: "She is my best friend." },
  "友人": {
    why: "「友|ゆう」 is friend, and 「人|じん」 is person. A friend person: the formal way to say friend.",
    ja: "[友人|ゆうじん|*]に[会|あ]いました。", en: "I met a friend." },
  "時間": {
    why: "「時|じ」 is time, or hour, and 「間|かん」 is an interval, a gap. A stretch of time: time, or hours.",
    ja: "[時間|じかん|*]がありません。", en: "I don't have time." },
  "二時間": {
    why: "「二|に」 is two, plus 「時間|じかん」, a stretch of hours. Two hours long. Without 「間|かん」, 「二時|にじ」 means two o'clock.",
    ja: "[二時間|にじかん|*][勉強|べんきょう]しました。", en: "I studied for two hours." },
  "間": {
    why: "「間|あいだ」 is a gate, 「門|もん」, with the sun shining through the gap. The gap between: between.",
    ja: "[駅|えき]と[銀行|ぎんこう]の[間|あいだ|*]にあります。", en: "It's between the station and the bank." },
  "人間": {
    why: "「人|にん」 is person, and 「間|げん」 is between. A person among people, living in the spaces between others: a human being.",
    ja: "[人間|にんげん|*]はみんな[同|おな]じです。", en: "Humans are all the same." },
  "一週間": {
    why: "「一|いっ」 is one, 「週|しゅう」 is week, and 「間|かん」 is a stretch of time. A stretch of one week.",
    ja: "[一週間|いっしゅうかん|*][日本|にほん]にいました。", en: "I was in Japan for one week." },
  "家": {
    why: "「家|いえ」 is a roof with a pig under it. In old farm life, the animals lived under the same roof as the family. House.",
    ja: "[家|いえ|*]に[帰|かえ]ります。", en: "I'm going home." },
  "家族": {
    why: "「家|か」 is house, and 「族|ぞく」 is a clan, people gathered under one flag. The clan of one house: family.",
    ja: "[家族|かぞく|*]は[四人|よにん]です。", en: "There are four people in my family." },
  "作家": {
    why: "「作|さっ」 is to make, and 「家|か」 here means a professional, someone devoted to a craft. A professional maker of books: author.",
    ja: "[有名|ゆうめい]な[作家|さっか|*]に[会|あ]いました。", en: "I met a famous author." },
  "家事": {
    why: "「家|か」 is house, and 「事|じ」 is matters, things to do. The things to do around the house: housework.",
    ja: "[週末|しゅうまつ]に[家事|かじ|*]をします。", en: "I do housework on weekends." },
  "話す": {
    why: "「話|はな」 has the speech radical, words, on the left, beside a tongue. Words plus a tongue: to speak.",
    ja: "[日本語|にほんご]を[話|はな|*]します。", en: "I speak Japanese." },
  "話": {
    why: "The same kanji as 「話す|はなす」, used as a noun: 「話|はなし」, a talk, or a story.",
    ja: "おもしろい[話|はなし|*]を[聞|き]きました。", en: "I heard an interesting story." },
  "電話": {
    why: "「電|でん」 is electricity, and 「話|わ」 is talk. Electric talk: telephone.",
    ja: "[母|はは]に[電話|でんわ|*]をかけます。", en: "I'll call my mother." },
  "会話": {
    why: "「会|かい」 is to meet, and 「話|わ」 is to talk. Meeting and talking: conversation.",
    ja: "[日本語|にほんご]で[会話|かいわ|*]をしました。", en: "I had a conversation in Japanese." },
  "少し": {
    why: "「少|すこ」 is the kanji for small, 「小|ちい」, with one extra stroke. A small amount: a little.",
    ja: "[少|すこ|*]し[待|ま]ってください。", en: "Please wait a little." },
  "少ない": {
    why: "The same kanji, 「少|すく」, a small amount. As an adjective: few, not many.",
    ja: "この[町|まち]は[人|ひと]が[少|すく|*]ないです。", en: "There are few people in this town." },
  "少々": {
    why: "「少|しょう」 is a little, written twice with the repeat mark. A little, a little: just a moment. Very polite.",
    ja: "[少々|しょうしょう|*]お[待|ま]ちください。", en: "Please wait a moment." },
  "少女": {
    why: "「少|しょう」 is few, as in few years, and 「女|じょ」 is woman. A female of few years: a girl.",
    ja: "[少女|しょうじょ|*]が[歌|うた]っています。", en: "A girl is singing." },
  "少年": {
    why: "「少|しょう」 is few, and 「年|ねん」 is years. Someone with few years: a boy.",
    ja: "その[少年|しょうねん|*]は[元気|げんき]です。", en: "That boy is full of energy." },
  "古い": {
    why: "「古|ふる」 is 「十|じゅう」, ten, over 「口|くち」, mouth. A story passed through ten mouths is old. Old, for things.",
    ja: "この[車|くるま]は[古|ふる|*]いです。", en: "This car is old." },
  "中古": {
    why: "「中|ちゅう」 is middle, and 「古|こ」 is old. In the middle, between new and old: used, secondhand.",
    ja: "[中古|ちゅうこ|*]のパソコンを[買|か]いました。", en: "I bought a used computer." },
  "古代": {
    why: "「古|こ」 is old, and 「代|だい」 is an age, an era. The old era: ancient times.",
    ja: "[古代|こだい|*]のお[寺|てら]を[見|み]ました。", en: "I saw an ancient temple." },
  "知る": {
    why: "「知|し」 is 「矢|や」, an arrow, plus 「口|くち」, a mouth. Picture knowledge coming out as quick as an arrow. To know.",
    ja: "その[人|ひと]を[知|し|*]っていますか。", en: "Do you know that person?" },
  "知人": {
    why: "「知|ち」 is know, and 「人|じん」 is person. A person you know: acquaintance.",
    ja: "[知人|ちじん|*]に[会|あ]いました。", en: "I ran into an acquaintance." },
  "知り合い": {
    why: "「知り|しり」, knowing, plus 「合い|あい」, each other. Knowing each other: an acquaintance.",
    ja: "[知り合い|しりあい|*]の[家|いえ]に[行|い]きました。", en: "I went to an acquaintance's house." },
  "来る": {
    why: "「来|く」 started as a picture of a wheat plant, borrowed for the word come. To come.",
    ja: "[友|とも]だちが[来|く|*]る。", en: "A friend is coming." },
  "来ます": {
    why: "The polite form of 「来る|くる」, to come. The kanji stays the same; its reading changes to 「き」.",
    ja: "[明日|あした][来|き|*]ますか。", en: "Will you come tomorrow?" },
  "来ない": {
    why: "The negative of 「来る|くる」. The kanji stays the same; its reading changes to 「こ」. Not coming.",
    ja: "[彼|かれ]は[来|こ|*]ないです。", en: "He isn't coming." },
  "来週": {
    why: "「来|らい」 is coming, and 「週|しゅう」 is week. The coming week: next week.",
    ja: "[来週|らいしゅう|*]テストがあります。", en: "There's a test next week." },
  "来日": {
    why: "「来|らい」 is coming, and 「日|にち」 stands for 「日本|にほん」, Japan. Coming to Japan.",
    ja: "[有名|ゆうめい]な[歌手|かしゅ]が[来日|らいにち|*]しました。", en: "A famous singer came to Japan." },
  "住む": {
    why: "「住|す」 is a person, 「人|ひと」, beside 「主|しゅ」, the master of a house. A person settled in a home: to live.",
    ja: "[東京|とうきょう]に[住|す|*]んでいます。", en: "I live in Tokyo." },
  "住所": {
    why: "「住|じゅう」 is to live, and 「所|しょ」 is place. The place where you live: address.",
    ja: "[住所|じゅうしょ|*]を[教|おし]えてください。", en: "Please tell me your address." },
  "お正月": {
    why: "「正|しょう」 means correct, proper, and 「月|がつ」 is month. The proper first month of the year: New Year.",
    ja: "[お正月|おしょうがつ|*]に[神社|じんじゃ]へ[行|い]きます。", en: "I go to a shrine at New Year's." },
  "正しい": {
    why: "「正|ただ」 shows a foot heading straight to a line, a goal. Straight and right: correct.",
    ja: "[正|ただ|*]しい[答|こた]えを[書|か]いてください。", en: "Please write the correct answer." },
  "三年生": {
    why: "「三|さん」 is three, 「年|ねん」 is year, and 「生|せい」 is student. A third-year student.",
    ja: "[兄|あに]は[三年生|さんねんせい|*]です。", en: "My older brother is a third-year student." },
  "来年": {
    why: "「来|らい」 is coming, and 「年|ねん」 is year. The coming year: next year.",
    ja: "[来年|らいねん|*][日本|にほん]に[行|い]きます。", en: "I'll go to Japan next year." },
  "今年": {
    why: "「今|こ」 is now, and 「年|とし」 is year. The year right now: this year. A special reading to memorize.",
    ja: "[今年|ことし|*]は[忙|いそが]しいです。", en: "This year is busy." },
  "年": {
    why: "「年|とし」 began as a person carrying ripe grain, the harvest that comes once a year. Year, and age.",
    ja: "[年|とし|*]をとりました。", en: "I've gotten older." },
  "売る": {
    why: "「売|う」 was once 「出|しゅつ」, out, on top of 「買|ばい」, buy. Putting goods out to be bought: to sell.",
    ja: "[古|ふる]い[本|ほん]を[売|う|*]りました。", en: "I sold my old books." },
  "売店": {
    why: "「売|ばい」 is sell, and 「店|てん」 is shop. A small selling shop: stand, kiosk.",
    ja: "[駅|えき]の[売店|ばいてん|*]でお[茶|ちゃ]を[買|か]いました。", en: "I bought tea at the station kiosk." },
  "買う": {
    why: "「買|か」 is a net on top of 「貝|かい」, a shell. Shells were once money. Gathering money for goods: to buy.",
    ja: "パンを[買|か|*]います。", en: "I'll buy bread." },
  "買い物": {
    why: "「買い|かい」, buying, plus 「物|もの」, things. Buying things: shopping.",
    ja: "[母|はは]と[買い物|かいもの|*]に[行|い]きました。", en: "I went shopping with my mother." },
  "売買": {
    why: "「売|ばい」 is sell, and 「買|ばい」 is buy. Selling and buying: trade.",
    ja: "[車|くるま]の[売買|ばいばい|*]をしています。", en: "They buy and sell cars." },
  "町": {
    why: "「町|まち」 is 「田|た」, a rice field, with a path beside it. Fields and paths where houses gather: town.",
    ja: "この[町|まち|*]が[好|す]きです。", en: "I like this town." },
  "長い": {
    why: "「長|なが」 began as a picture of an old person with long flowing hair. Long.",
    ja: "[髪|かみ]が[長|なが|*]いです。", en: "She has long hair." },
  "道": {
    why: "「道|みち」 has the road radical along the bottom, with 「首|くび」, head, riding on it. Heading down a path: road, way.",
    ja: "[道|みち|*]がわかりません。", en: "I don't know the way." },
  "雪": {
    why: "「雪|ゆき」 has the rain radical on top, and in its old form a hand with a broom below. Weather you sweep up: snow.",
    ja: "[雪|ゆき|*]が[降|ふ]っています。", en: "It's snowing." },
  "新雪": {
    why: "「新|しん」 is new, and 「雪|せつ」 is snow. New snow: fresh powder.",
    ja: "[新雪|しんせつ|*]の[上|うえ]を[歩|ある]きました。", en: "I walked on fresh snow." },
  "雪だるま": {
    why: "「雪|ゆき」 is snow, and 「だるま」 is the round Daruma doll. A snow Daruma: snowman.",
    ja: "[子供|こども]たちが[雪だるま|ゆきだるま|*]を[作|つく]りました。", en: "The children made a snowman." },
  "立つ": {
    why: "「立|た」 is a picture of a person standing on the ground with arms out. To stand.",
    ja: "[立|た|*]ってください。", en: "Please stand up." },
  "自分": {
    why: "「自|じ」 began as a picture of a nose; Japanese people point at their nose to mean me. 「分|ぶん」 is part. My own part: oneself.",
    ja: "[自分|じぶん|*]で[作|つく]りました。", en: "I made it myself." },
  "自動車": {
    why: "「自|じ」 is self, 「動|どう」 is move, and 「車|しゃ」 is vehicle. A vehicle that moves by itself: automobile.",
    ja: "[自動車|じどうしゃ|*]の[会社|かいしゃ]で[働|はたら]いています。", en: "I work at a car company." },
  "自転車": {
    why: "「自|じ」 is self, 「転|てん」 is turn, and 「車|しゃ」 is vehicle. A vehicle whose wheels you turn yourself: bicycle.",
    ja: "[自転車|じてんしゃ|*]で[学校|がっこう]に[行|い]きます。", en: "I go to school by bike." },
  "自由": {
    why: "「自|じ」 is self, and 「由|ゆう」 is reason, cause. Acting for your own reasons: freedom.",
    ja: "[週末|しゅうまつ]は[自由|じゆう|*]な[時間|じかん]があります。", en: "I have free time on weekends." },
  "夜": {
    why: "「夜|よる」 has a crescent moon, 「夕|ゆう」, tucked inside beside a person. Out under the moon: night.",
    ja: "[夜|よる|*]、[本|ほん]を[読|よ]みます。", en: "I read books at night." },
  "夜中": {
    why: "「夜|よ」 is night, and 「中|なか」 is middle. The middle of the night.",
    ja: "[夜中|よなか|*]に[起|お]きました。", en: "I woke up in the middle of the night." },
  "今夜": {
    why: "「今|こん」 is now, this, and 「夜|や」 is night. This night: tonight.",
    ja: "[今夜|こんや|*][電話|でんわ]します。", en: "I'll call you tonight." },
  "夜明け": {
    why: "「夜|よ」 is night, and 「明け|あけ」 comes from 「明ける|あける」, to open up, to dawn. Night opening up: dawn.",
    ja: "[夜明け|よあけ|*]に[山|やま]に[登|のぼ]りました。", en: "I climbed the mountain at dawn." },
  "朝": {
    why: "「朝|あさ」 has the sun rising through grass on the left, and the moon on the right. The sun is up and the moon is still out: morning.",
    ja: "[朝|あさ|*]、コーヒーを[飲|の]みます。", en: "I drink coffee in the morning." },
  "朝食": {
    why: "「朝|ちょう」 is morning, and 「食|しょく」 is eat, a meal. The morning meal: breakfast.",
    ja: "ホテルの[朝食|ちょうしょく|*]はおいしいです。", en: "The hotel breakfast is delicious." },
  "毎朝": {
    why: "「毎|まい」 is every, and 「朝|あさ」 is morning. Every morning.",
    ja: "[毎朝|まいあさ|*][走|はし]ります。", en: "I run every morning." },
  "持つ": {
    why: "「持|も」 has the hand radical on the left. A hand gripping something: to hold, to carry.",
    ja: "[荷物|にもつ]を[持|も|*]ちましょうか。", en: "Shall I carry your bags?" },
  "持ってくる": {
    why: "「持って|もって」, holding, plus 「くる」, come. Hold it and come: to bring.",
    ja: "[傘|かさ]を[持ってくる|もってくる|*]のを[忘|わす]れました。", en: "I forgot to bring my umbrella." },
  "気持ち": {
    why: "「気|き」 is spirit, mood, and 「持ち|もち」 is holding. How you hold your spirit: feeling.",
    ja: "[気持ち|きもち|*]がいいです。", en: "It feels good." },
  "手紙": {
    why: "「手|て」 is hand, and 「紙|がみ」 is paper. Paper written by hand: letter.",
    ja: "[友|とも]だちに[手紙|てがみ|*]を[書|か]きました。", en: "I wrote a letter to a friend." },
  "歌手": {
    why: "「歌|か」 is song, and 「手|しゅ」 is hand, here meaning a skilled person. A skilled song person: singer.",
    ja: "[歌手|かしゅ|*]になりたいです。", en: "I want to become a singer." },
  "手": {
    why: "「手|て」 is a picture of a hand, with the fingers spread at the top. Hand.",
    ja: "[手|て|*]を[洗|あら]ってください。", en: "Please wash your hands." },
  "手話": {
    why: "「手|しゅ」 is hand, and 「話|わ」 is talk. Talking with your hands: sign language.",
    ja: "[手話|しゅわ|*]を[習|なら]っています。", en: "I'm learning sign language." },
  "紙": {
    why: "「紙|かみ」 has the thread radical on the left, because paper is fibers pressed together. Paper.",
    ja: "[紙|かみ|*]に[名前|なまえ]を[書|か]いてください。", en: "Please write your name on the paper." },
  "和紙": {
    why: "「和|わ」 means Japanese, and 「紙|し」 is paper. Japanese paper, the traditional handmade kind.",
    ja: "[和紙|わし|*]はきれいです。", en: "Japanese paper is beautiful." },
  "表紙": {
    why: "「表|ひょう」 is surface, the front, and 「紙|し」 is paper. The front paper of a book: cover.",
    ja: "この[本|ほん]の[表紙|ひょうし|*]が[好|す]きです。", en: "I like this book's cover." },
  "折り紙": {
    why: "「折り|おり」 is folding, and 「紙|がみ」 is paper. Folding paper: origami.",
    ja: "[折り紙|おりがみ|*]で[鳥|とり]を[作|つく]りました。", en: "I made a bird out of origami." },
  "好きな": {
    why: "「好|す」 is 「女|おんな」, woman, beside 「子|こ」, child. A mother holding her child: to like.",
    ja: "[好|す|*]きな[食|た]べ[物|もの]は[何|なん]ですか。", en: "What's your favorite food?" },
  "大好きな": {
    why: "「大|だい」 is big, plus 「好き|すき」, like. A big like: to love.",
    ja: "[大好|だいす|*]きな[歌|うた]を[歌|うた]いました。", en: "I sang my favorite song." },
  "好意": {
    why: "「好|こう」 is liking, and 「意|い」 is mind, feeling. A liking feeling: goodwill.",
    ja: "[彼|かれ]に[好意|こうい|*]を[持|も]っています。", en: "I have feelings for him." },
  "好み": {
    why: "「好み|このみ」 is the noun from liking. What you like: your taste.",
    ja: "これは[私|わたし]の[好|この|*]みです。", en: "This is my taste." },
  "好物": {
    why: "「好|こう」 is like, and 「物|ぶつ」 is thing. The thing you like, especially food: favorite food.",
    ja: "[私|わたし]の[好物|こうぶつ|*]はすしです。", en: "My favorite food is sushi." },
  "近く": {
    why: "「近|ちか」 has the road radical. Just a short way down the road: near, nearby.",
    ja: "[駅|えき]の[近|ちか|*]くに[住|す]んでいます。", en: "I live near the station." },
  "近所": {
    why: "「近|きん」 is near, and 「所|じょ」 is place. The places near you: neighborhood.",
    ja: "[近所|きんじょ|*]に[公園|こうえん]があります。", en: "There's a park in my neighborhood." },
  "最近": {
    why: "「最|さい」 is most, and 「近|きん」 is near. The nearest in time: recently.",
    ja: "[最近|さいきん|*]、[忙|いそが]しいです。", en: "I've been busy lately." },
  "明るい": {
    why: "「明|あか」 is the sun, 「日|ひ」, beside the moon, 「月|つき」. Two lights together: bright, cheerful.",
    ja: "この[部屋|へや]は[明|あか|*]るいです。", en: "This room is bright." },
  "説明": {
    why: "「説|せつ」 has the speech radical: explaining in words. 「明|めい」 is bright, clear. Making it clear with words: explanation.",
    ja: "[先生|せんせい]の[説明|せつめい|*]はわかりやすいです。", en: "The teacher's explanation is easy to understand." },
  "発明": {
    why: "「発|はつ」 is to set off, send out, and 「明|めい」 is bright. Bringing something new to light: invention.",
    ja: "すばらしい[発明|はつめい|*]です。", en: "It's a wonderful invention." },
  "文明": {
    why: "「文|ぶん」 is writing, culture, and 「明|めい」 is bright. A culture brought to light: civilization.",
    ja: "[古代|こだい]の[文明|ぶんめい|*]について[勉強|べんきょう]します。", en: "I study ancient civilizations." },
  "病院": {
    why: "「病|びょう」 is sickness, and 「院|いん」 is an institution. The institution for the sick: hospital.",
    ja: "[病院|びょういん|*]に[行|い]きます。", en: "I'm going to the hospital." },
  "病気": {
    why: "「病|びょう」 is sickness, and 「気|き」 is spirit, energy. Sick energy: illness.",
    ja: "[弟|おとうと]は[病気|びょうき|*]です。", en: "My younger brother is sick." },
  "大学院": {
    why: "「大学|だいがく」, college, plus 「院|いん」, institution. The institution above college: graduate school.",
    ja: "[大学院|だいがくいん|*]に[行|い]きたいです。", en: "I want to go to graduate school." },
  "美容院": {
    why: "「美|び」 is beauty, 「容|よう」 is appearance, and 「院|いん」 is institution. A place for beautiful looks: beauty parlor.",
    ja: "[美容院|びよういん|*]で[髪|かみ]を[切|き]りました。", en: "I got my hair cut at the salon." },
  "映画": {
    why: "「映|えい」 is to project, reflect, and 「画|が」 is picture. A projected picture: movie.",
    ja: "[映画|えいが|*]を[見|み]ませんか。", en: "Want to see a movie?" },
  "映画館": {
    why: "「映画|えいが」, movie, plus 「館|かん」, building. A movie building: movie theater.",
    ja: "[映画館|えいがかん|*]はどこですか。", en: "Where is the movie theater?" },
  "映る": {
    why: "「映|うつ」 has the sun on the left: light making an image. To be reflected, or to show up on a screen.",
    ja: "[鏡|かがみ]に[顔|かお]が[映|うつ|*]っています。", en: "My face is reflected in the mirror." },
  "画家": {
    why: "「画|が」 is picture, and 「家|か」 is a professional. A picture professional: painter.",
    ja: "[有名|ゆうめい]な[画家|がか|*]の[絵|え]です。", en: "It's a painting by a famous painter." },
  "計画": {
    why: "「計|けい」 is to measure, and 「画|かく」 is lines, a plan. Measured out lines: plan.",
    ja: "[旅行|りょこう]の[計画|けいかく|*]を[立|た]てました。", en: "I made plans for a trip." },
  "漫画": {
    why: "「漫|まん」 means loose, free, and 「画|が」 is picture. Free, playful pictures: comics.",
    ja: "[漫画|まんが|*]を[読|よ]むのが[好|す]きです。", en: "I like reading manga." },
  "歌う": {
    why: "「歌|うた」 has a person with an open mouth on the right. Opening your mouth to let out a melody: to sing.",
    ja: "カラオケで[歌|うた|*]いました。", en: "I sang at karaoke." },
  "歌": {
    why: "「歌|うた」 as a noun: a song.",
    ja: "この[歌|うた|*]が[好|す]きです。", en: "I like this song." },
  "国歌": {
    why: "「国|こっ」 is country, and 「歌|か」 is song. The country's song: national anthem.",
    ja: "[国歌|こっか|*]を[歌|うた]いました。", en: "We sang the national anthem." },
  "歌詞": {
    why: "「歌|か」 is song, and 「詞|し」 is words. The words of a song: lyrics.",
    ja: "この[歌|うた]の[歌詞|かし|*]が[好|す]きです。", en: "I like the lyrics of this song." },
  "川口市": {
    why: "「川|かわ」 is river, 「口|ぐち」 is mouth, and 「市|し」 is city. River Mouth City: Kawaguchi.",
    ja: "[川口市|かわぐちし|*]に[住|す]んでいます。", en: "I live in Kawaguchi City." },
  "市役所": {
    why: "「市|し」 is city, 「役|やく」 is role, service, and 「所|しょ」 is place. The city's service place: city hall.",
    ja: "[市役所|しやくしょ|*]に[行|い]きました。", en: "I went to city hall." },
  "市長": {
    why: "「市|し」 is city, and 「長|ちょう」 is head. The head of the city: mayor.",
    ja: "[市長|しちょう|*]に[会|あ]いました。", en: "I met the mayor." },
  "市場": {
    why: "「市|いち」 is market, and 「場|ば」 is place. Market place: market.",
    ja: "[市場|いちば|*]で[魚|さかな]を[買|か]いました。", en: "I bought fish at the market." },
  "所": {
    why: "「所|ところ」 is a door, 「戸|と」, beside an axe. A spot marked by a door: place.",
    ja: "きれいな[所|ところ|*]ですね。", en: "It's a beautiful place, isn't it?" },
  "台所": {
    why: "「台|だい」 is a stand, a platform, and 「所|どころ」 is place. The place with the stand where you cook: kitchen.",
    ja: "[母|はは]は[台所|だいどころ|*]にいます。", en: "My mother is in the kitchen." },
  "勉強する": {
    why: "「勉|べん」 is effort, and 「強|きょう」 is strong. Pushing yourself hard: to study.",
    ja: "[毎日|まいにち][勉強|べんきょう|*]します。", en: "I study every day." },
  "勉める": {
    why: "「勉|つと」 is effort, with 「力|ちから」, strength, on the right. To make an effort, to try hard.",
    ja: "[毎日|まいにち][勉|つと|*]めています。", en: "I'm making an effort every day." },
  "勤勉な": {
    why: "「勤|きん」 is to work hard, and 「勉|べん」 is effort. Working with effort: diligent.",
    ja: "[彼|かれ]は[勤勉|きんべん|*]な[学生|がくせい]です。", en: "He is a diligent student." },
  "強い": {
    why: "「強|つよ」 has 「弓|ゆみ」, a bow, on the left. A bow that takes strength to pull: strong.",
    ja: "[今日|きょう]は[風|かぜ]が[強|つよ|*]いです。", en: "The wind is strong today." },
  "強情な": {
    why: "「強|ごう」 is strong, and 「情|じょう」 is feeling. Feelings too strong to bend: obstinate.",
    ja: "[弟|おとうと]は[強情|ごうじょう|*]です。", en: "My little brother is stubborn." },
  "強力な": {
    why: "「強|きょう」 is strong, and 「力|りょく」 is power. Strong power: powerful.",
    ja: "[強力|きょうりょく|*]なエンジンです。", en: "It's a powerful engine." },
  "有料": {
    why: "「有|ゆう」 is have, and 「料|りょう」 is fee. Has a fee: there's a charge.",
    ja: "この[駐車場|ちゅうしゃじょう]は[有料|ゆうりょう|*]です。", en: "This parking lot charges a fee." },
  "有る": {
    why: "「有|あ」 is a hand holding meat. To have, to exist. Usually written in kana.",
    ja: "[時間|じかん]が[有|あ|*]ります。", en: "I have time." },
  "有能な": {
    why: "「有|ゆう」 is have, and 「能|のう」 is ability. Having ability: talented.",
    ja: "[彼女|かのじょ]は[有能|ゆうのう|*]な[医者|いしゃ]です。", en: "She is a very capable doctor." },
  "旅行": {
    why: "「旅|りょ」 is a flag with people marching under it, a journey, and 「行|こう」 is go. Going on a journey: travel.",
    ja: "[夏|なつ]に[旅行|りょこう|*]します。", en: "I'll travel in the summer." },
  "旅館": {
    why: "「旅|りょ」 is journey, and 「館|かん」 is building. A building for travelers: Japanese inn.",
    ja: "[旅館|りょかん|*]に[泊|と]まりました。", en: "I stayed at a Japanese inn." },
  "一人旅": {
    why: "「一人|ひとり」, one person, plus 「旅|たび」, journey. A one-person journey: traveling alone.",
    ja: "[一人旅|ひとりたび|*]が[好|す]きです。", en: "I like traveling alone." },
  "旅券": {
    why: "「旅|りょ」 is journey, and 「券|けん」 is ticket. A travel ticket: passport.",
    ja: "[旅券|りょけん|*]を[見|み]せてください。", en: "Please show your passport." },
  "昔": {
    why: "Picture 「昔|むかし」 as many days piled up over 「日|ひ」, the sun. Long ago.",
    ja: "[昔|むかし|*]、ここに[川|かわ]がありました。", en: "Long ago, there was a river here." },
  "昔話": {
    why: "「昔|むかし」, long ago, plus 「話|はなし」, story. A story from long ago: folk tale.",
    ja: "[祖母|そぼ]が[昔話|むかしばなし|*]をしてくれました。", en: "My grandmother told me a folk tale." },
  "大昔": {
    why: "「大|おお」, big, plus 「昔|むかし」, long ago. Very long ago: ancient times.",
    ja: "[大昔|おおむかし|*]、ここは[海|うみ]でした。", en: "In ancient times, this was the sea." },
  "昔々": {
    why: "「昔|むかし」, long ago, written twice with the repeat mark. Long, long ago: once upon a time.",
    ja: "[昔々|むかしむかし|*]、おじいさんがいました。", en: "Once upon a time, there was an old man." },
  "神さま": {
    why: "「神|かみ」 has the altar radical on the left and lightning on the right. The power at the altar: god. 「さま」 makes it very polite.",
    ja: "[神|かみ|*]さまにお[願|ねが]いしました。", en: "I prayed to God." },
  "神社": {
    why: "「神|じん」 is god, and 「社|じゃ」 is shrine. A shrine for the gods: Shinto shrine.",
    ja: "[神社|じんじゃ|*]に[行|い]きました。", en: "I went to a shrine." },
  "早い": {
    why: "「早|はや」 has the sun, 「日|ひ」, on top, just up. Early.",
    ja: "[父|ちち]は[朝|あさ]が[早|はや|*]いです。", en: "My father gets up early." },
  "早起きする": {
    why: "「早|はや」, early, plus 「起き|おき」, getting up. Getting up early.",
    ja: "[明日|あした]は[早起|はやお|*]きします。", en: "I'll get up early tomorrow." },
  "起きる": {
    why: "「起|お」 has 「走|はし」, run, wrapping around the bottom. Getting yourself up and moving: to get up.",
    ja: "[毎朝|まいあさ][七時|しちじ]に[起|お|*]きます。", en: "I get up at seven every morning." },
  "起こす": {
    why: "The same kanji, 「起|お」, getting up, as a doing verb: to make someone get up, to wake them.",
    ja: "[六時|ろくじ]に[起|お|*]こしてください。", en: "Please wake me up at six." },
  "牛": {
    why: "「牛|うし」 is a picture of a cow's head, with a horn poking up through the top. Cow.",
    ja: "[牛|うし|*]がいます。", en: "There's a cow." },
  "牛乳": {
    why: "「牛|ぎゅう」 is cow, and 「乳|にゅう」 is milk. Cow milk: milk.",
    ja: "[毎朝|まいあさ][牛乳|ぎゅうにゅう|*]を[飲|の]みます。", en: "I drink milk every morning." },
  "牛肉": {
    why: "「牛|ぎゅう」 is cow, and 「肉|にく」 is meat. Cow meat: beef.",
    ja: "[牛肉|ぎゅうにく|*]を[買|か]いました。", en: "I bought beef." },
  "使う": {
    why: "「使|つか」 is a person beside an official. A person sent on business, put to use: to use.",
    ja: "このペンを[使|つか|*]ってもいいですか。", en: "May I use this pen?" },
  "働く": {
    why: "「働|はたら」 is a person, 「人|ひと」, beside 「動|どう」, move. A person moving: to work. This kanji was invented in Japan.",
    ja: "[母|はは]は[銀行|ぎんこう]で[働|はたら|*]いています。", en: "My mother works at a bank." },
  "連れて帰る": {
    why: "「連|つ」 shows carts traveling together, so 「連れる|つれる」 is to take someone along. Plus 「帰る|かえる」, go home: to take someone home with you.",
    ja: "[子供|こども]を[連れて帰|つれてかえ|*]りました。", en: "I brought my child home." },
  "別れる": {
    why: "「別|わか」 is bones beside a knife: separating meat from the bone. To separate, to part.",
    ja: "[駅|えき]で[友|とも]だちと[別|わか|*]れました。", en: "I parted from my friend at the station." },
  "別に": {
    why: "「別|べつ」 means separate, different. With 「に」: not particularly.",
    ja: "[別に|べつに|*]、[何|なに]もありません。", en: "Nothing in particular." },
  "一度": {
    why: "「一|いち」 is one, and 「度|ど」 is times. One time: once.",
    ja: "[一度|いちど|*][日本|にほん]に[行|い]きたいです。", en: "I'd like to go to Japan once." },
  "今度": {
    why: "「今|こん」 is now, this, and 「度|ど」 is time. This time, or next time.",
    ja: "[今度|こんど|*]いっしょに[行|い]きましょう。", en: "Let's go together next time." },
  "赤": {
    why: "「赤|あか」 came from 「大|だい」, big, over fire. A big fire: red.",
    ja: "[赤|あか|*]が[好|す]きです。", en: "I like red." },
  "赤い": {
    why: "「赤|あか」, red, plus 「い」: the adjective, red.",
    ja: "[赤|あか|*]いかばんを[買|か]いました。", en: "I bought a red bag." },
  "青": {
    why: "「青|あお」 has a young sprout on top. Fresh growing plants: blue, and sometimes green.",
    ja: "[青|あお|*]の[服|ふく]を[着|き]ています。", en: "I'm wearing blue clothes." },
  "青い": {
    why: "「青|あお」 plus 「い」: the adjective, blue.",
    ja: "[空|そら]が[青|あお|*]いです。", en: "The sky is blue." },
  "色": {
    why: "「色|いろ」 is color. One way to picture it: a face changing color.",
    ja: "[好|す]きな[色|いろ|*]は[何|なん]ですか。", en: "What's your favorite color?" },
  "色々な": {
    why: "「色|いろ」, color, twice. Colors and colors: all kinds, various.",
    ja: "[色々|いろいろ|*]な[国|くに]に[行|い]きました。", en: "I've been to various countries." },
  "食べ物": {
    why: "「食|た」 is eat, and 「物|もの」 is thing. Things to eat: food.",
    ja: "[好|す]きな[食べ物|たべもの|*]は[何|なん]ですか。", en: "What's your favorite food?" },
  "飲み物": {
    why: "「飲|の」 is drink, with the food radical on the left, and 「物|もの」 is thing. Things to drink: drinks.",
    ja: "[飲み物|のみもの|*]は[何|なに]がいいですか。", en: "What would you like to drink?" },
  "物": {
    why: "「物|もの」 has a cow on the left, once the most valuable thing a farmer owned. Thing.",
    ja: "かわいい[物|もの|*]が[好|す]きです。", en: "I like cute things." },
  "鳥": {
    why: "「鳥|とり」 is a picture of a bird: the head on top, the body, and tail feathers as the four dots. Bird.",
    ja: "[木|き]の[上|うえ]に[鳥|とり|*]がいます。", en: "There's a bird in the tree." },
  "料理": {
    why: "「料|りょう」 is ingredients, rice measured with a dipper, and 「理|り」 is reason, order. Handling ingredients properly: cooking.",
    ja: "[母|はは]の[料理|りょうり|*]はおいしいです。", en: "My mother's cooking is delicious." },
  "特に": {
    why: "「特|とく」 means special, once a bull picked from the herd. With 「に」: especially.",
    ja: "[特|とく|*]にすしが[好|す]きです。", en: "I especially like sushi." },
  "安い": {
    why: "「安|やす」 is a woman under a roof, safe and at ease. Easy on the wallet: cheap.",
    ja: "この[店|みせ]は[安|やす|*]いです。", en: "This shop is cheap." },
  "不安な": {
    why: "「不|ふ」 means not, and 「安|あん」 is at ease. Not at ease: anxious, worried.",
    ja: "[試験|しけん]が[不安|ふあん|*]です。", en: "I'm worried about the exam." },
  "ご飯": {
    why: "「飯|はん」 has the food radical on the left. Cooked rice, and since rice was the center of every meal, a meal.",
    ja: "[ご飯|ごはん|*]を[食|た]べましょう。", en: "Let's eat." },
  "朝ご飯": {
    why: "「朝|あさ」, morning, plus 「ご飯|ごはん」, meal. The morning meal: breakfast.",
    ja: "[朝ご飯|あさごはん|*]を[食|た]べましたか。", en: "Did you eat breakfast?" },
  "昼ご飯": {
    why: "「昼|ひる」, noon, plus 「ご飯|ごはん」, meal. The noon meal: lunch.",
    ja: "[昼ご飯|ひるごはん|*]を[食|た]べに[行|い]きましょう。", en: "Let's go get lunch." },
  "肉": {
    why: "「肉|にく」 is a picture of a slab of meat, with streaks of fat. Meat.",
    ja: "[肉|にく|*]が[好|す]きです。", en: "I like meat." },
  "悪い": {
    why: "「悪|わる」 has 「心|こころ」, heart, at the bottom, weighed down. Bad.",
    ja: "[天気|てんき]が[悪|わる|*]いです。", en: "The weather is bad." },
  "気分が悪い": {
    why: "「気分|きぶん」 is your mood, how your spirit feels, and 「悪い|わるい」 is bad. Feeling bad: to feel sick.",
    ja: "[気分が悪|きぶんがわる|*]いです。", en: "I feel sick." },
  "体": {
    why: "「体|からだ」 is a person beside 「本|ほん」, root, base. A person's base: body.",
    ja: "[体|からだ|*]に[気|き]をつけてください。", en: "Please take care of yourself." },
  "同じ": {
    why: "「同|おな」 shows one mouth under one cover: everyone saying the same thing. Same.",
    ja: "[同|おな|*]じクラスです。", en: "We're in the same class." },
  "着く": {
    why: "「着|つ」 means to reach, to attach. To arrive.",
    ja: "[駅|えき]に[着|つ|*]きました。", en: "I arrived at the station." },
  "着る": {
    why: "The same kanji, 「着|き」: clothes attaching to your body. To wear.",
    ja: "セーターを[着|き|*]ます。", en: "I'll put on a sweater." },
  "着物": {
    why: "「着|き」 is wear, and 「物|もの」 is thing. A thing to wear: kimono.",
    ja: "[着物|きもの|*]を[着|き]ました。", en: "I wore a kimono." },
  "水着": {
    why: "「水|みず」 is water, and 「着|ぎ」 is wear. Water wear: swimsuit.",
    ja: "[新|あたら]しい[水着|みずぎ|*]を[買|か]いました。", en: "I bought a new swimsuit." },
  "空港": {
    why: "「空|くう」 is sky, and 「港|こう」 is harbor. A harbor for the sky: airport.",
    ja: "[空港|くうこう|*]まで[電車|でんしゃ]で[行|い]きます。", en: "I'll go to the airport by train." },
  "昼": {
    why: "「昼|ひる」 has the sun, 「日|ひ」, at the bottom. The sun up high: noon, daytime.",
    ja: "[昼|ひる|*]はあついです。", en: "It's hot during the day." },
  "海": {
    why: "「海|うみ」 has the water radical, three drops, beside 「毎|まい」, every. Where every drop of water ends up: sea.",
    ja: "[夏|なつ]に[海|うみ|*]へ[行|い]きました。", en: "I went to the sea in summer." },
  "彼": {
    why: "「彼|かれ」 has the step radical, someone walking over there. That one: he, or boyfriend.",
    ja: "[彼|かれ|*]は[学生|がくせい]です。", en: "He is a student." },
  "彼女": {
    why: "「彼|かの」 is that, and 「女|じょ」 is woman. That woman: she, or girlfriend.",
    ja: "[彼女|かのじょ|*]はやさしいです。", en: "She is kind." },
  "時代": {
    why: "「時|じ」 is time, and 「代|だい」 is generation, era. A span of time: era.",
    ja: "[学生|がくせい][時代|じだい|*]は[楽|たの]しかったです。", en: "My student days were fun." },
  "留学生": {
    why: "「留|りゅう」 is stay, 「学|がく」 is study, and 「生|せい」 is student. A student staying abroad to study: international student.",
    ja: "[私|わたし]は[留学生|りゅうがくせい|*]です。", en: "I'm an international student." },
  "留学する": {
    why: "「留|りゅう」 is stay, and 「学|がく」 is study. Staying somewhere to study: to study abroad.",
    ja: "[日本|にほん]に[留学|りゅうがく|*]したいです。", en: "I want to study abroad in Japan." },
  "父親": {
    why: "「父|ちち」 is father, and 「親|おや」 is parent. The father parent: father.",
    ja: "[父親|ちちおや|*]は[医者|いしゃ]です。", en: "My father is a doctor." },
  "親切な": {
    why: "「親|しん」 means close, intimate, and 「切|せつ」 means keen, heartfelt. Close, heartfelt care: kind.",
    ja: "[彼|かれ]はとても[親切|しんせつ|*]です。", en: "He is very kind." },
  "切る": {
    why: "「切|き」 has 「刀|かたな」, a blade, on the right. To cut.",
    ja: "[野菜|やさい]を[切|き|*]ります。", en: "I cut vegetables." },
  "英語": {
    why: "「英|えい」 stands for England, and 「語|ご」 is language. England's language: English.",
    ja: "[英語|えいご|*]を[教|おし]えています。", en: "I teach English." },
  "店": {
    why: "「店|みせ」 is a building radical over 「占|せん」, to occupy. A building occupying a spot on the street: shop.",
    ja: "あの[店|みせ|*]は[安|やす]いです。", en: "That shop is cheap." },
  "去年": {
    why: "「去|きょ」 is to leave, go away, and 「年|ねん」 is year. The year that has gone: last year.",
    ja: "[去年|きょねん|*][日本|にほん]に[行|い]きました。", en: "I went to Japan last year." },
  "急に": {
    why: "「急|きゅう」 has 「心|こころ」, heart, at the bottom: a racing heart, hurry, sudden. With 「に」: suddenly.",
    ja: "[急|きゅう|*]に[雨|あめ]が[降|ふ]りました。", en: "It suddenly started raining." },
  "急ぐ": {
    why: "「急|いそ」, the racing heart: to hurry.",
    ja: "[急|いそ|*]いでください。", en: "Please hurry." },
  "乗る": {
    why: "Picture 「乗|の」 as a person up on top of a tree. Riding up high: to ride.",
    ja: "[電車|でんしゃ]に[乗|の|*]ります。", en: "I'll get on the train." },
  "本当に": {
    why: "「本|ほん」 is the root, the real thing, and 「当|とう」 is to hit the mark. The real thing, right on target: truly, really.",
    ja: "[本当|ほんとう|*]にありがとうございます。", en: "Thank you so much, really." },
  "音楽": {
    why: "「音|おん」 is sound, and 「楽|がく」 is music, pleasure. Pleasant sound: music.",
    ja: "[音楽|おんがく|*]を[聞|き]きます。", en: "I listen to music." },
  "楽しい": {
    why: "「楽|たの」 began as a drum on a wooden stand. Music and pleasure: fun.",
    ja: "パーティーは[楽|たの|*]しかったです。", en: "The party was fun." },
  "医者": {
    why: "「医|い」 is an arrow in a box, healing arrow wounds: medicine. 「者|しゃ」 is person. Medicine person: doctor.",
    ja: "[医者|いしゃ|*]になりたいです。", en: "I want to become a doctor." },
  "死ぬ": {
    why: "「死|し」 is bones beside a kneeling person. To die.",
    ja: "[金魚|きんぎょ]が[死|し|*]にました。", en: "The goldfish died." },
  "意味": {
    why: "「意|い」 is mind, 「音|おと」, sound, over 「心|こころ」, heart. 「味|み」 is flavor. The flavor of what's in mind: meaning.",
    ja: "この[言葉|ことば]の[意味|いみ|*]は[何|なん]ですか。", en: "What does this word mean?" },
  "注意する": {
    why: "「注|ちゅう」 is to pour, and 「意|い」 is mind. Pouring your mind into something: to pay attention, watch out.",
    ja: "[車|くるま]に[注意|ちゅうい|*]してください。", en: "Please watch out for cars." },
  "夏": {
    why: "「夏|なつ」 is summer. One way to picture it: someone dancing at a summer festival.",
    ja: "[夏|なつ|*]は[暑|あつ]いです。", en: "Summer is hot." },
  "夏休み": {
    why: "「夏|なつ」, summer, plus 「休み|やすみ」, rest. Summer rest: summer vacation.",
    ja: "[夏休み|なつやすみ|*]に[旅行|りょこう]します。", en: "I'll travel during summer vacation." },
  "魚": {
    why: "「魚|さかな」 is a picture of a fish standing on its nose; the four dots are its tail. Fish.",
    ja: "[魚|さかな|*]が[好|す]きです。", en: "I like fish." },
  "お寺": {
    why: "「寺|てら」 is a Buddhist temple. It began as a government office, where the first monks in China were housed. 「お」 makes it polite.",
    ja: "[京都|きょうと]でお[寺|てら|*]を[見|み]ました。", en: "I saw temples in Kyoto." },
  "広い": {
    why: "「広|ひろ」 is a building radical with plenty of room inside. Wide, spacious.",
    ja: "この[部屋|へや]は[広|ひろ|*]いです。", en: "This room is spacious." },
  "足": {
    why: "「足|あし」 is a picture: the knee on top, the foot below. Foot, leg.",
    ja: "[足|あし|*]が[痛|いた]いです。", en: "My foot hurts." },
  "足りる": {
    why: "The same kanji, 「足|た」, which also means to add up. Adding up to enough: to be sufficient.",
    ja: "お[金|かね]が[足|た|*]りません。", en: "I don't have enough money." },
  "運転する": {
    why: "「運|うん」 is to carry, transport, and 「転|てん」 is to turn, roll. Moving by turning the wheels: to drive.",
    ja: "[車|くるま]を[運転|うんてん|*]します。", en: "I drive a car." },
  "借りる": {
    why: "「借|か」 is a person beside 「昔|むかし」, long ago, which gives the sound. To borrow.",
    ja: "[本|ほん]を[借|か|*]りました。", en: "I borrowed a book." },
  "走る": {
    why: "「走|はし」 is a person swinging their arms over a foot. To run.",
    ja: "[公園|こうえん]を[走|はし|*]ります。", en: "I run in the park." },
  "場所": {
    why: "「場|ば」 is place, ground, and 「所|しょ」 is place. Location.",
    ja: "[会|あ]う[場所|ばしょ|*]はどこですか。", en: "Where's the place we're meeting?" },
  "建物": {
    why: "「建|たて」 is build, and 「物|もの」 is thing. A built thing: building.",
    ja: "あの[建物|たてもの|*]は[古|ふる]いです。", en: "That building is old." },
  "地下": {
    why: "「地|ち」 is ground, and 「下|か」 is below. Below the ground: underground.",
    ja: "[地下|ちか|*]にレストランがあります。", en: "There's a restaurant underground." },
  "地図": {
    why: "「地|ち」 is land, and 「図|ず」 is drawing. A drawing of the land: map.",
    ja: "[地図|ちず|*]を[見|み]せてください。", en: "Please show me the map." },
  "通る": {
    why: "「通|とお」 has the road radical. Passing along the road: to go through.",
    ja: "この[道|みち]を[通|とお|*]ります。", en: "I'll go along this road." },
  "子供": {
    why: "「子|こ」 is a picture of a baby, and 「供|ども」 was once a plural ending. Children, and now any child.",
    ja: "[子供|こども|*]が[公園|こうえん]で[遊|あそ]んでいます。", en: "Children are playing in the park." },
  "世界": {
    why: "「世|せ」 is the world, a generation, and 「界|かい」 is a boundary, a field with a border. Everything within the borders: the world.",
    ja: "[世界|せかい|*]を[旅行|りょこう]したいです。", en: "I want to travel the world." },
  "世話": {
    why: "「世|せ」 is world, and 「話|わ」 is talk. Looking after someone's world: care.",
    ja: "[犬|いぬ]の[世話|せわ|*]をします。", en: "I take care of the dog." },
  "全部": {
    why: "「全|ぜん」 is all, whole, and 「部|ぶ」 is part. Every part: all of it.",
    ja: "[全部|ぜんぶ|*][食|た]べました。", en: "I ate all of it." },
  "安全": {
    why: "「安|あん」 is at ease, and 「全|ぜん」 is whole. Safe and whole: safety.",
    ja: "[日本|にほん]は[安全|あんぜん|*]です。", en: "Japan is safe." },
  "全国": {
    why: "「全|ぜん」 is whole, and 「国|こく」 is country. The whole country: nationwide.",
    ja: "[全国|ぜんこく|*]で[有名|ゆうめい]です。", en: "It's famous all over the country." },
  "部屋": {
    why: "「部|へ」 is part, section, and 「屋|や」 is house, building. A section of the building: room. A special reading.",
    ja: "[部屋|へや|*]をそうじしました。", en: "I cleaned my room." },
  "始まる": {
    why: "「始|はじ」 is to begin, with 「女|おんな」, woman, on the left. Something begins, by itself.",
    ja: "[授業|じゅぎょう]が[始|はじ|*]まります。", en: "Class is starting." },
  "始める": {
    why: "The same kanji, 「始|はじ」: to begin something yourself.",
    ja: "[日本語|にほんご]の[勉強|べんきょう]を[始|はじ|*]めました。", en: "I started studying Japanese." },
  "毎週": {
    why: "「毎|まい」 is every, and 「週|しゅう」 is week. Every week.",
    ja: "[毎週|まいしゅう|*]テニスをします。", en: "I play tennis every week." },
  "先週": {
    why: "「先|せん」 is before, ahead, and 「週|しゅう」 is week. The week before: last week.",
    ja: "[先週|せんしゅう|*][映画|えいが]を[見|み]ました。", en: "I saw a movie last week." },
  "考える": {
    why: "「考|かんが」 came from a picture of an old person with a cane. A wise elder deep in thought: to think.",
    ja: "[将来|しょうらい]について[考|かんが|*]えています。", en: "I'm thinking about my future." },
  "開ける": {
    why: "「開|あ」 is 「門|もん」, a gate, with hands lifting away the bar. Opening the gate: to open.",
    ja: "[窓|まど]を[開|あ|*]けてください。", en: "Please open the window." },
  "本屋": {
    why: "「本|ほん」 is book, and 「屋|や」 is shop. Book shop: bookstore.",
    ja: "[本屋|ほんや|*]で[雑誌|ざっし]を[買|か]いました。", en: "I bought a magazine at the bookstore." },
  "味方": {
    why: "「味|み」 is taste, flavor, and 「方|かた」 is side. The side you share a taste with: ally.",
    ja: "[私|わたし]はあなたの[味方|みかた|*]です。", en: "I'm on your side." },
  "運動": {
    why: "「運|うん」 is carry, move, and 「動|どう」 is move. Moving your body: exercise.",
    ja: "[毎日|まいにち][運動|うんどう|*]しています。", en: "I exercise every day." },
  "運転": {
    why: "「運|うん」 is move, and 「転|てん」 is turn. Moving by turning the wheels: driving.",
    ja: "[運転|うんてん|*]が[上手|じょうず]です。", en: "He's a good driver." },
  "教える": {
    why: "「教|おし」 shows a hand with a stick, teaching a child. To teach.",
    ja: "[英語|えいご]を[教|おし|*]えています。", en: "I teach English." },
  "教室": {
    why: "「教|きょう」 is teach, and 「室|しつ」 is room. A teaching room: classroom.",
    ja: "[教室|きょうしつ|*]に[学生|がくせい]がいます。", en: "There are students in the classroom." },
  "以外": {
    why: "「以|い」 marks a point of reference, and 「外|がい」 is outside. Outside of that: other than.",
    ja: "[肉|にく][以外|いがい|*]は[何|なん]でも[食|た]べます。", en: "I eat anything other than meat." },
  "分野": {
    why: "「分|ぶん」 is divide, part, and 「野|や」 is field. A divided-off field: area of study.",
    ja: "[好|す]きな[分野|ぶんや|*]は[何|なん]ですか。", en: "What field do you like?" },
  "小野さん": {
    why: "「小|お」 is small, and 「野|の」 is field. Small field: Ono, a family name.",
    ja: "[小野|おの|*]さんは[有名|ゆうめい]です。", en: "Ms. Ono is famous." },
  "習う": {
    why: "「習|なら」 has 「羽|はね」, wings, on top: a young bird practicing until it can fly. To learn.",
    ja: "ピアノを[習|なら|*]っています。", en: "I'm taking piano lessons." },
  "主に": {
    why: "「主|おも」 means main, the master. With 「に」: mainly.",
    ja: "[主|おも|*]に[家|いえ]で[勉強|べんきょう]します。", en: "I mainly study at home." },
  "ご主人": {
    why: "「主|しゅ」 is master, and 「人|じん」 is person. The master of the house: someone's husband, said politely.",
    ja: "ご[主人|しゅじん|*]はお[元気|げんき]ですか。", en: "How is your husband?" },
  "二十五歳": {
    why: "「二十五|にじゅうご」 is twenty-five, and 「歳|さい」 is years of age. Twenty-five years old.",
    ja: "[姉|あね]は[二十五歳|にじゅうごさい|*]です。", en: "My older sister is twenty-five." },
  "集める": {
    why: "「集|あつ」 is birds gathering on a tree, 「木|き」. To collect.",
    ja: "[切手|きって]を[集|あつ|*]めています。", en: "I collect stamps." },
  "発表する": {
    why: "「発|はっ」 is to send out, and 「表|ぴょう」 is to show, express. Sending out and showing: to give a presentation.",
    ja: "[明日|あした][発表|はっぴょう|*]します。", en: "I'll give a presentation tomorrow." },
  "作品": {
    why: "「作|さく」 is make, and 「品|ひん」 is goods, an article. A made article: a work of art.",
    ja: "これは[私|わたし]の[作品|さくひん|*]です。", en: "This is my work." },
  "写真": {
    why: "「写|しゃ」 is copy, and 「真|しん」 is truth. A true copy: photograph.",
    ja: "[写真|しゃしん|*]を[撮|と]りましょう。", en: "Let's take a picture." },
  "写す": {
    why: "「写|うつ」 is to copy, like copying notes or a picture.",
    ja: "ノートを[写|うつ|*]しました。", en: "I copied the notes." },
  "文字": {
    why: "「文|も」 is writing, and 「字|じ」 is letter. Written letters: characters.",
    ja: "この[文字|もじ|*]は[小|ちい]さいです。", en: "These letters are small." },
  "漢字": {
    why: "「漢|かん」 is the Han, China, and 「字|じ」 is letter. Han letters: Chinese characters.",
    ja: "[漢字|かんじ|*]を[勉強|べんきょう]しています。", en: "I'm studying kanji." },
  "活動": {
    why: "「活|かつ」 is lively, and 「動|どう」 is move. Lively movement: activity.",
    ja: "ボランティア[活動|かつどう|*]をしています。", en: "I do volunteer activities." },
  "生活": {
    why: "「生|せい」 is life, and 「活|かつ」 is lively. Living actively: daily life.",
    ja: "[日本|にほん]の[生活|せいかつ|*]は[楽|たの]しいです。", en: "Life in Japan is fun." },
  "結婚する": {
    why: "「結|けっ」 is tie, and 「婚|こん」 is marriage. Tying the marriage knot: to get married.",
    ja: "[姉|あね]は[結婚|けっこん|*]しました。", en: "My older sister got married." },
  "歩く": {
    why: "「歩|ある」 is two footprints, one ahead of the other. To walk.",
    ja: "[駅|えき]まで[歩|ある|*]きます。", en: "I'll walk to the station." },
  "目的": {
    why: "「目|もく」 is eye, and 「的|てき」 is target. The target your eye is on: purpose.",
    ja: "[旅行|りょこう]の[目的|もくてき|*]は[何|なん]ですか。", en: "What is the purpose of your trip?" },
  "目": {
    why: "「目|め」 is a picture of an eye, stood on end to save space. Eye.",
    ja: "[目|め|*]が[痛|いた]いです。", en: "My eyes hurt." },
  "洋服": {
    why: "「洋|よう」 is ocean, overseas, the West, and 「服|ふく」 is clothes. Clothes from overseas: Western clothes.",
    ja: "[洋服|ようふく|*]を[買|か]いに[行|い]きます。", en: "I'm going to buy clothes." },
  "服": {
    why: "「服|ふく」 is clothes.",
    ja: "[新|あたら]しい[服|ふく|*]を[着|き]ています。", en: "I'm wearing new clothes." },
  "食堂": {
    why: "「食|しょく」 is eat, and 「堂|どう」 is hall. Eating hall: cafeteria.",
    ja: "[食堂|しょくどう|*]で[昼|ひる]ご[飯|はん]を[食|た]べます。", en: "I eat lunch in the cafeteria." },
  "力仕事": {
    why: "「力|ちから」, power, plus 「仕事|しごと」, work. Work that takes power: physical labor.",
    ja: "[力仕事|ちからしごと|*]は[大変|たいへん]です。", en: "Physical labor is hard." },
  "授業": {
    why: "「授|じゅ」 is give, teach, and 「業|ぎょう」 is work, study. Giving out lessons: class.",
    ja: "[授業|じゅぎょう|*]は[九時|くじ]からです。", en: "Class starts at nine." },
  "試験": {
    why: "「試|し」 is test, try, and 「験|けん」 is examine. Testing and examining: exam.",
    ja: "[明日|あした][試験|しけん|*]があります。", en: "I have an exam tomorrow." },
  "貸す": {
    why: "「貸|か」 is 「代|だい」, replace, over 「貝|かい」, a shell, money. Money going out in place of yours: to lend.",
    ja: "[友|とも]だちにお[金|かね]を[貸|か|*]しました。", en: "I lent money to a friend." },
  "終わる": {
    why: "「終|お」 is thread plus 「冬|ふゆ」, winter, the end of the year. To end.",
    ja: "[授業|じゅぎょう]が[終|お|*]わりました。", en: "Class is over." },
  "宿題": {
    why: "「宿|しゅく」 is lodging, staying overnight, and 「題|だい」 is topic. A topic you take home overnight: homework.",
    ja: "[宿題|しゅくだい|*]をしました。", en: "I did my homework." },
  "春": {
    why: "「春|はる」 has 「日|ひ」, the sun, at the bottom, with plants sprouting above. Spring.",
    ja: "[春|はる|*]が[好|す]きです。", en: "I like spring." },
  "秋": {
    why: "「秋|あき」 is grain plus 「火|ひ」, fire. Harvest fields glowing like fire: autumn.",
    ja: "[秋|あき|*]はすずしいです。", en: "Autumn is cool." },
  "冬": {
    why: "「冬|ふゆ」 has two dots at the bottom: ice. Winter.",
    ja: "[冬|ふゆ|*]は[寒|さむ]いです。", en: "Winter is cold." },
  "冬休み": {
    why: "「冬|ふゆ」, winter, plus 「休み|やすみ」, rest. Winter vacation.",
    ja: "[冬休み|ふゆやすみ|*]にスキーをします。", en: "I'll ski over winter vacation." },
  "花": {
    why: "「花|はな」 is the grass radical over 「化|か」, change. A plant that transforms into bloom: flower.",
    ja: "きれいな[花|はな|*]ですね。", en: "What a beautiful flower." },
  "姉": {
    why: "「姉|あね」 has 「女|おんな」, woman, on the left. Older sister.",
    ja: "[姉|あね|*]は[東京|とうきょう]に[住|す]んでいます。", en: "My older sister lives in Tokyo." },
  "お姉さん": {
    why: "「姉|ねえ」, older sister, wrapped in the polite 「お」 and 「さん」. Someone's older sister.",
    ja: "お[姉|ねえ|*]さんはお[元気|げんき]ですか。", en: "How is your older sister?" },
  "兄": {
    why: "「兄|あに」 is 「口|くち」, a mouth, on two legs. Older brother.",
    ja: "[兄|あに|*]は[大学生|だいがくせい]です。", en: "My older brother is a college student." },
  "お兄さん": {
    why: "「兄|にい」, older brother, wrapped in the polite 「お」 and 「さん」. Someone's older brother.",
    ja: "お[兄|にい|*]さんは[何|なに]をしていますか。", en: "What does your older brother do?" },
  "卒業する": {
    why: "「卒|そつ」 is finish, and 「業|ぎょう」 is study, work. Finishing your studies: to graduate.",
    ja: "[来年|らいねん][卒業|そつぎょう|*]します。", en: "I'll graduate next year." },
  "工学": {
    why: "「工|こう」 is craft, construction, and 「学|がく」 is study. The study of building things: engineering.",
    ja: "[兄|あに]は[工学|こうがく|*]を[勉強|べんきょう]しています。", en: "My older brother studies engineering." },
  "研究": {
    why: "「研|けん」 is polishing, with 「石|いし」, stone, and 「究|きゅう」 is investigating to the bottom. Polishing and digging deep: research.",
    ja: "[日本|にほん]の[文化|ぶんか]を[研究|けんきゅう|*]しています。", en: "I research Japanese culture." },
  "質問": {
    why: "「質|しつ」 is substance, quality, and 「問|もん」 is ask, a mouth at a gate. Asking about the substance: question.",
    ja: "[質問|しつもん|*]があります。", en: "I have a question." },
  "多い": {
    why: "「多|おお」 is two 「夕|ゆう」 shapes piled up. More and more: many.",
    ja: "[東京|とうきょう]は[人|ひと]が[多|おお|*]いです。", en: "There are a lot of people in Tokyo." }
});
