/* =======================================================================
   yomikata-words.js — for the 📚 Words slideshow (Genki lessons 9–19, the
   words your book highlights): why each word is written with its kanji (a
   short and a long version), and an example sentence. Optional: if this
   file is missing, the slideshow still shows each word, its reading and its
   meaning; it just skips these extras.
   Keyed by the word exactly as written in yomikata-content.js.
     why:  SHORT — what each kanji in the word means and how they add up to
           the word (read aloud).
     long: LONG — the same, plus radicals that hint at the meaning, related
           words that share a kanji or sound, and stories and facts.
           In both, Japanese goes inside 「」, written 「漢字|かな」 (shown as
           the kanji, spoken as the kana) or just 「かな」.
     ja:   example sentence. [漢字|かな] shows furigana; [漢字|かな|*] is the
           word itself (it gets highlighted).
     en:   its English translation
   Run yomikataCheck() in the browser console after editing to catch typos.
   ======================================================================= */
window.YOMIKATA_WORDS = window.YOMIKATA_WORDS || {};
Object.assign(window.YOMIKATA_WORDS, {
  "午前": {
    why: "「午|ご」 is noon, and 「前|ぜん」 is before. Before noon: A.M.",
    long: "「午|ご」 began as a picture of a pestle, but its fame comes from the old clock. The day was split into twelve two-hour blocks named after zodiac animals, and this kanji named the horse block, around midday. So it means noon. 「前|ぜん」 means front or before; its top came from a foot standing on a boat, moving forward. Noon plus before is the morning half of the day. Its twin is 「午後|ごご」, after noon. And 「正午|しょうご」, correct noon, is exactly twelve o'clock.",
    ja: "[午前|ごぜん|*][九時|くじ]に[来|き]てください。", en: "Please come at nine A.M." },
  "午後": {
    why: "「午|ご」 is noon, and 「後|ご」 is after. After noon: P.M.",
    long: "「午|ご」 is the horse hour, noon, from the old zodiac clock. 「後|ご」 has the step radical, 「彳|ぎょうにんべん」, on the left. That radical is a clue the kanji is about going or walking; you'll also find it in 「待|ま」, wait, and 「彼|かれ」, him, someone walking over there. 「後|ご」 pictures someone walking along and lagging behind, so it means behind, and after. After the horse hour: afternoon. The same 「後|あと」 gives 「後で|あとで」, later.",
    ja: "[午後|ごご|*]はひまです。", en: "I'm free in the afternoon." },
  "午前中": {
    why: "「午前|ごぜん」 is before noon, and 「中|ちゅう」 means middle, or throughout. Throughout the morning: all morning.",
    long: "This one stacks two ideas. 「午前|ごぜん」 is before noon. 「中|ちゅう」 is a box with a line straight through the middle, so it means middle, inside, or throughout. Throughout the before-noon time: all morning. That same 「中|ちゅう」 shows up in 「中国|ちゅうごく」, the middle kingdom, China, and in 「一日中|いちにちじゅう」, all day long, where it sounds like 「じゅう」. Whenever 「中」 follows a span of time, think throughout.",
    ja: "[午前中|ごぜんちゅう|*]は[家|いえ]にいます。", en: "I'll be home all morning." },
  "正午": {
    why: "「正|しょう」 means correct, exact, and 「午|ご」 is noon. Exact noon: noon on the dot.",
    long: "「正|しょう」 is a foot, 「止|し」, heading straight for a line on top. Hitting the line dead on means correct, exact. You know it from 「正しい|ただしい」, correct, and 「お正月|おしょうがつ」, the proper first month, New Year. 「午|ご」 is the horse hour, noon. Exact noon: twelve o'clock on the dot. Japanese people even tally scores with 「正」, because it has five strokes.",
    ja: "[正午|しょうご|*]に[会|あ]いましょう。", en: "Let's meet at noon." },
  "後で": {
    why: "「後|あと」 means after, or behind. Add 「で」 and it means afterward: later.",
    long: "「後|あと」 has the step radical, 「彳|ぎょうにんべん」, which marks kanji about walking and going. The rest shows a foot dragging behind. Someone falling behind on the road: behind, and after. The little 「で」 turns it into afterward, later. The same kanji makes 「後ろ|うしろ」, behind you, and 「午後|ごご」, afternoon. Its opposite is 「前|まえ」, before, in front.",
    ja: "[後で|あとで|*][電話|でんわ]します。", en: "I'll call you later." },
  "後ろ": {
    why: "The same kanji, 「後|うし」, after or behind, here with a native reading. The space behind you: back.",
    long: "「後|うし」 is the walking-behind kanji: the step radical, 「彳|ぎょうにんべん」, and a foot lagging at the back. Behind, after. Here it takes a native reading and means the space behind you. A neat pair: 「前|まえ」, in front, and 「後ろ|うしろ」, behind. In time, the same kanji gives 「後で|あとで」, later.",
    ja: "[後ろ|うしろ|*]を[見|み]てください。", en: "Please look behind you." },
  "最後に": {
    why: "「最|さい」 means most, and 「後|ご」 is after. The most after, the very last. With 「に」: lastly.",
    long: "「最|さい」 is the sun, 「日|ひ」, over 「取|と」, to take. The traditional idea is grabbing the very most, so it means most, extreme. You'll see it in 「最近|さいきん」, most near in time, recently, and 「最高|さいこう」, the best. 「後|ご」 is after, someone walking behind. The most after: the very last. 「最初|さいしょ」, the very first, is its opposite.",
    ja: "[最後に|さいごに|*]デザートを[食|た]べました。", en: "Lastly, I ate dessert." },
  "前": {
    why: "「前|まえ」 means front, and also before. In space it's in front; in time it's before, as in 「三年前|さんねんまえ」, three years ago.",
    long: "「前|まえ」 grew from a drawing of a foot on a boat, gliding forward. Today the top looks like two little horns and the right side is the knife radical, 「刂|りっとう」, but the idea to keep is moving forward. So it means front in space, and before in time. 「駅の前|えきのまえ」 is in front of the station; 「三年前|さんねんまえ」 is three years ago; and 「午前|ごぜん」 is before noon.",
    ja: "[駅|えき]の[前|まえ|*]で[待|ま]っています。", en: "I'm waiting in front of the station." },
  "名前": {
    why: "「名|な」 is name, and 「前|まえ」 is front. Your name is what you put out in front of you.",
    long: "「名|な」 is 「夕|ゆう」, evening, the crescent moon, over 「口|くち」, mouth. The traditional explanation: in the dark you can't see faces, so you call out your name. 「前|まえ」 is front. Your name is the thing you put out front. 「名|めい」 also gives 「有名|ゆうめい」, famous, having a name, and 「名字|みょうじ」, your family name.",
    ja: "お[名前|なまえ|*]は[何|なん]ですか。", en: "What is your name?" },
  "有名な": {
    why: "「有|ゆう」 means to have, and 「名|めい」 is name. Having a name everyone knows: famous.",
    long: "「有|ゆう」 is a hand reaching over 「月|つき」, which here means meat. A hand holding meat: to have. In old times, having meat meant you were well off. 「名|めい」 is a name, called out in the evening dark. Having a name that everyone knows: famous. The same 「有|ゆう」 gives 「有料|ゆうりょう」, having a fee, there's a charge.",
    ja: "あの[人|ひと]は[有名|ゆうめい|*]な[歌手|かしゅ]です。", en: "That person is a famous singer." },
  "白い": {
    why: "「白|しろ」 is white. It looks like 「日|ひ」, the sun, with a ray of light on top. Add 「い」 for the adjective: white.",
    long: "「白|しろ」 is often explained as 「日|ひ」, the sun, with one ray of light shooting up. The brightest light is white. Watch for 「白」 hiding in other kanji: it's the left side of 「的|てき」, target, a bright white bullseye, and the top of 「百|ひゃく」, a hundred. In Japan, red and white together mean celebration, like the red and white New Year's Eve singing contest.",
    ja: "[白|しろ|*]いシャツを[買|か]いました。", en: "I bought a white shirt." },
  "白": {
    why: "「白|しろ」 on its own is the color white, the noun.",
    long: "「白|しろ」 alone is the color white. A way to see the kanji: the sun, 「日|ひ」, with a ray of light on top. Add 「い」 and it becomes the adjective 「白い|しろい」. As a part, it sits on the left of 「的|てき」, the bright white target, in 「目的|もくてき」, purpose.",
    ja: "[白|しろ|*]が[好|す]きです。", en: "I like white." },
  "白鳥": {
    why: "「白|はく」 is white, and 「鳥|ちょう」 is bird. A white bird: swan.",
    long: "「白|はく」 is white, the sun with a ray of light. 「鳥|ちょう」 is a real picture of a bird: head and eye on top, the body, and four dots for the tail and feet. That bird shape also appears in 「鳴|な」, a bird's cry, a mouth beside a bird. White bird: swan. The four-dot tail also shows up in 「魚|さかな」, fish.",
    ja: "[湖|みずうみ]に[白鳥|はくちょう|*]がいます。", en: "There are swans on the lake." },
  "雨": {
    why: "「雨|あめ」 is a picture: the sky on top, a cloud, and four drops of rain falling. Rain.",
    long: "「雨|あめ」 is a picture: the line on top is the sky, the frame is a cloud, and the four dots are raindrops. Flattened, it becomes the rain radical, 「雨|あめかんむり」, a lid on weather kanji. 「雪|ゆき」 is snow, 「雲|くも」 is cloud, and 「電|でん」, electricity, started out as lightning in a storm. When you see that flat lid, think sky and weather.",
    ja: "[今日|きょう]は[雨|あめ|*]です。", en: "It's raining today." },
  "書く": {
    why: "「書|か」 shows a hand holding a writing brush at the top. Holding a brush: to write.",
    long: "The top of 「書|か」 is a hand gripping a writing brush, the brush radical, 「聿|ふでづくり」. Underneath is a shape like a mouth speaking. A brush putting words down: to write. That brush also appears in 「建|た」, to build, as in drawing up plans. The on'yomi 「しょ」 means a written thing, a book: 「辞書|じしょ」, 「教科書|きょうかしょ」, and 「図書館|としょかん」.",
    ja: "[手紙|てがみ]を[書|か|*]きます。", en: "I'll write a letter." },
  "辞書": {
    why: "「辞|じ」 means words, and 「書|しょ」 is writing, a book. A book of words: dictionary.",
    long: "「辞|じ」 has 「舌|した」, tongue, on the left, so it's about words, what the tongue says. 「書|しょ」 is a hand with a brush, a written book. A book of words: dictionary. You'll see 「書|しょ」 at the end of lots of paper words: 「教科書|きょうかしょ」, textbook, and 「履歴書|りれきしょ」, a résumé. A tip: to look something up, Japanese says to pull the dictionary, 「辞書を引く|じしょをひく」.",
    ja: "[辞書|じしょ|*]で[調|しら]べます。", en: "I'll look it up in the dictionary." },
  "教科書": {
    why: "「教|きょう」 is teach, 「科|か」 is subject, and 「書|しょ」 is book. A book for teaching a subject: textbook.",
    long: "Three kanji. 「教|きょう」, teach, has a hand holding a stick on the right, the radical 「攵|ぼくづくり」, which shows up in action kanji like 「数|かず」, number. Picture a teacher's pointer. 「科|か」 is 「禾|のぎへん」, grain, beside a measuring dipper: sorting grain by measure, so it means category, a subject. 「書|しょ」 is a written book. A book for teaching a subject: textbook. 「科学|かがく」 is science, the study of categories.",
    ja: "[教科書|きょうかしょ|*]を[忘|わす]れました。", en: "I forgot my textbook." },
  "図書館": {
    why: "「図|と」 is drawing, 「書|しょ」 is writing, and 「館|かん」 is a large building. A building of drawings and writings: library.",
    long: "「図|と」 is a frame, 「囗|くにがまえ」, with a drawing inside. That box radical surrounds things, like in 「国|くに」, country, and 「園|えん」, garden. So 「図」 is a drawing or a map, as in 「地図|ちず」. 「書|しょ」 is writing. 「館|かん」 has the food radical, 「飠|しょくへん」, on the left; it first meant a guesthouse where travelers were fed, then any big building. Drawings, writings, building: library. 「館|かん」 also ends 「映画館|えいがかん」 and 「旅館|りょかん」.",
    ja: "[図書館|としょかん|*]で[勉強|べんきょう]します。", en: "I study at the library." },
  "友だち": {
    why: "「友|とも」 began as two hands joined together: friends. The 「だち」 was once a plural ending.",
    long: "「友|とも」 is two hands, both right hands, reaching toward each other. Hands joined: friends. The 「だち」 was once a plural ending, so the word first meant friends, a group. You'll meet 「友|ゆう」 in formal words: 「友人|ゆうじん」, friend, and 「親友|しんゆう」, best friend, where 「親|しん」 means close.",
    ja: "[友|とも|*]だちと[映画|えいが]を[見|み]ました。", en: "I saw a movie with a friend." },
  "親友": {
    why: "「親|しん」 means close, intimate, and 「友|ゆう」 is friend. Your closest friend: best friend.",
    long: "「親|しん」 is 「立|た」, stand, over 「木|き」, tree, beside 「見|み」, see. The popular picture: a parent standing on a tree, watching over a child. From parent comes close, intimate. 「友|ゆう」 is two hands clasped: friend. The closest friend: best friend. 「親|しん」 also makes 「親切|しんせつ」, kind, close and heartfelt, and 「両親|りょうしん」, parents.",
    ja: "[彼女|かのじょ]は[私|わたし]の[親友|しんゆう|*]です。", en: "She is my best friend." },
  "友人": {
    why: "「友|ゆう」 is friend, and 「人|じん」 is person. A friend person: the formal way to say friend.",
    long: "「友|ゆう」 is two clasped hands, friend. 「人|じん」 is a picture of a person walking, seen from the side. It's the same 「人|じん」 that makes nationalities: 「日本人|にほんじん」, a Japanese person. Friend plus person is the formal, written word for friend. In conversation, use 「友だち|ともだち」.",
    ja: "[友人|ゆうじん|*]に[会|あ]いました。", en: "I met a friend." },
  "時間": {
    why: "「時|じ」 is time, or hour, and 「間|かん」 is an interval, a gap. A stretch of time: time, or hours.",
    long: "「時|じ」 has the sun radical, 「日|ひへん」, on the left. Time words love it: 「明|あか」, bright, 「晩|ばん」, evening, 「曜|よう」 in the days of the week. The right side, 「寺|じ」, temple, gives the sound じ. 「間|かん」 is a gate, 「門|もん」, with the sun shining through the gap, so it means an interval. Time plus interval: a span of time. The gate radical also frames 「開|あ」, open, and 「聞|き」, listen, an ear at the gate.",
    ja: "[時間|じかん|*]がありません。", en: "I don't have time." },
  "二時間": {
    why: "「二|に」 is two, plus 「時間|じかん」, a stretch of hours. Two hours long. Without 「間|かん」, 「二時|にじ」 means two o'clock.",
    long: "「二|に」 is two strokes, two. 「時|じ」 is time, with the sun radical on the left, and 「間|かん」 is a gap, a stretch. Put a number before 「時間|じかん」 and you're counting hours: two hours long. Without 「間|かん」, 「二時|にじ」 is two o'clock, a point on the clock. The same pattern counts weeks: 「一週間|いっしゅうかん」, one week long.",
    ja: "[二時間|にじかん|*][勉強|べんきょう]しました。", en: "I studied for two hours." },
  "間": {
    why: "「間|あいだ」 is a gate, 「門|もん」, with the sun shining through the gap. The gap between: between.",
    long: "「間|あいだ」 is 「門|もん」, a gate with two doors, and 「日|ひ」, the sun, inside. Sunlight slipping through the gap between the doors. In the oldest form it was the moon, but the gap is the point: between. The gate radical, 「門|もんがまえ」, frames many kanji: 「開|あ」, open, hands lifting the bar, 「閉|し」, closed, and 「聞|き」, an ear at the gate, listening.",
    ja: "[駅|えき]と[銀行|ぎんこう]の[間|あいだ|*]にあります。", en: "It's between the station and the bank." },
  "人間": {
    why: "「人|にん」 is person, and 「間|げん」 is between. A person among people, living in the spaces between others: a human being.",
    long: "「人|にん」 is a person walking. 「間|げん」 is the gap between, sunlight through a gate. A person among people, living in the spaces between others: a human being. The idea is that being human means being in relationships. In anime, monsters and gods sneer at 「人間|にんげん」, humans.",
    ja: "[人間|にんげん|*]はみんな[同|おな]じです。", en: "Humans are all the same." },
  "一週間": {
    why: "「一|いっ」 is one, 「週|しゅう」 is week, and 「間|かん」 is a stretch of time. A stretch of one week.",
    long: "「一|いっ」 is one. 「週|しゅう」 has the road radical, 「辶|しんにょう」, wrapping the bottom left; that radical marks movement, as in 「近|ちか」, near, and 「道|みち」, road. Inside is 「周|しゅう」, going all the way around, which also gives the sound. A lap around the days: a week. 「間|かん」 is a stretch of time. One week long.",
    ja: "[一週間|いっしゅうかん|*][日本|にほん]にいました。", en: "I was in Japan for one week." },
  "家": {
    why: "「家|いえ」 is a roof with a pig under it. In old farm life, the animals lived under the same roof as the family. House.",
    long: "「家|いえ」 has the roof radical, 「宀|うかんむり」, on top. That roof is a clue the kanji is about houses and shelter: 「安|やす」, a woman safe under a roof, 「室|しつ」, a room, 「宿|やど」, an inn, and 「字|じ」, a child under a roof. Under this roof is an old drawing of a pig. In farm life, the family and the animals shared one roof. House, and family.",
    ja: "[家|いえ|*]に[帰|かえ]ります。", en: "I'm going home." },
  "家族": {
    why: "「家|か」 is house, and 「族|ぞく」 is a clan, people gathered under one flag. The clan of one house: family.",
    long: "「家|か」 is a pig under a roof, a household. 「族|ぞく」 shows a flag on the left with an arrow under it: warriors gathered under one banner, a clan. The same flag shape leads 「旅|りょ」, travel, people marching under a flag. The clan of one house: family. 「家|か」 also makes 「家具|かぐ」, furniture.",
    ja: "[家族|かぞく|*]は[四人|よにん]です。", en: "There are four people in my family." },
  "作家": {
    why: "「作|さっ」 is to make, and 「家|か」 here means a professional, someone devoted to a craft. A professional maker of books: author.",
    long: "「作|さっ」 has the person radical, 「亻|にんべん」, on the left. That standing-person radical marks kanji about people and what they do: 「休|やす」, a person resting on a tree, and 「住|す」, to live. A person making something: to make. 「家|か」, a house, at the end of a word means a professional, someone whose house is built on that craft: 「画家|がか」, painter, 「漫画家|まんがか」, cartoonist. A professional maker: author.",
    ja: "[有名|ゆうめい]な[作家|さっか|*]に[会|あ]いました。", en: "I met a famous author." },
  "家事": {
    why: "「家|か」 is house, and 「事|じ」 is matters, things to do. The things to do around the house: housework.",
    long: "「家|か」 is a pig under a roof, the household. 「事|じ」 is a hand holding something, doing a task; it means a matter, a thing to do. You'll see it in 「仕事|しごと」, work, 「用事|ようじ」, an errand, and 「食事|しょくじ」, a meal. Household matters: housework. Careful, 「火事|かじ」, with fire, is a fire.",
    ja: "[週末|しゅうまつ]に[家事|かじ|*]をします。", en: "I do housework on weekends." },
  "話す": {
    why: "「話|はな」 has the speech radical, words, on the left, beside a tongue. Words plus a tongue: to speak.",
    long: "「話|はな」 has the speech radical, 「言|ごんべん」, on the left. It's one of the most useful radicals: it tips you off that the kanji is about words. 「語|ご」, language, 「読|よ」, read, 「説|せつ」, explain, and 「試|し」, test with questions. On the right is a shape like 「舌|した」, tongue. Words plus a tongue: to speak.",
    ja: "[日本語|にほんご]を[話|はな|*]します。", en: "I speak Japanese." },
  "話": {
    why: "The same kanji as 「話す|はなす」, used as a noun: 「話|はなし」, a talk, or a story.",
    long: "The noun version of 「話す|はなす」. 「話|はなし」 is the speech radical, 「言|ごんべん」, words, beside a tongue: a talk, or a story. Add 「昔|むかし」, long ago, and you get 「昔話|むかしばなし」, a folk tale. With its on'yomi 「わ」 it makes 「電話|でんわ」 and 「会話|かいわ」.",
    ja: "おもしろい[話|はなし|*]を[聞|き]きました。", en: "I heard an interesting story." },
  "電話": {
    why: "「電|でん」 is electricity, and 「話|わ」 is talk. Electric talk: telephone.",
    long: "「電|でん」 has the rain lid on top, and under it a flash of lightning. It first meant lightning, the electricity of a storm, and came to mean electricity: 「電気|でんき」, 「電車|でんしゃ」, a train, and 「電池|でんち」, a battery. 「話|わ」 is the speech radical plus tongue: talk. Electric talk: telephone.",
    ja: "[母|はは]に[電話|でんわ|*]をかけます。", en: "I'll call my mother." },
  "会話": {
    why: "「会|かい」 is to meet, and 「話|わ」 is to talk. Meeting and talking: conversation.",
    long: "「会|かい」 is people gathering under a roof shape: to meet. It's the 「会」 in 「会う|あう」 and 「会社|かいしゃ」, a company, people gathered. 「話|わ」 has the speech radical, 「言|ごんべん」, so it's about words: talk. Meeting and talking: conversation. Your textbook's dialogues are called 「会話|かいわ」.",
    ja: "[日本語|にほんご]で[会話|かいわ|*]をしました。", en: "I had a conversation in Japanese." },
  "少し": {
    why: "「少|すこ」 is the kanji for small, 「小|ちい」, with one extra stroke. A small amount: a little.",
    long: "「少|すこ」 is 「小|ちい」, small, three little strokes, with one long sweep added at the bottom. Small, and a little taken away: a little, a few. Learn the two together: 「小さい|ちいさい」 is small in size, and 「少し|すこし」 is a small amount. 「少ない|すくない」 means few. The polite 「少々|しょうしょう」 means just a moment.",
    ja: "[少|すこ|*]し[待|ま]ってください。", en: "Please wait a little." },
  "少ない": {
    why: "The same kanji, 「少|すく」, a small amount. As an adjective: few, not many.",
    long: "「少|すく」 is 「小|ちい」, small, plus a sweeping stroke: a small amount. As an adjective, few, not many. Its opposite is 「多い|おおい」, many, which is two 「夕|ゆう」 shapes piled up. Remember to use both at the end of a sentence: 「人が少ない|ひとがすくない」, there are few people.",
    ja: "この[町|まち]は[人|ひと]が[少|すく|*]ないです。", en: "There are few people in this town." },
  "少々": {
    why: "「少|しょう」 is a little, written twice with the repeat mark. A little, a little: just a moment. Very polite.",
    long: "「少|しょう」 is a small amount, and 「々」 is the repeat mark, meaning say the last kanji again. A little, a little: just a bit. You'll hear it constantly in shops: 「少々お待ちください|しょうしょうおまちください」, please wait a moment. The same repeat mark makes 「時々|ときどき」, sometimes, and 「色々|いろいろ」, various.",
    ja: "[少々|しょうしょう|*]お[待|ま]ちください。", en: "Please wait a moment." },
  "少女": {
    why: "「少|しょう」 is few, as in few years, and 「女|じょ」 is woman. A female of few years: a girl.",
    long: "「少|しょう」 here means few, as in few years. 「女|じょ」 is a picture of a woman kneeling with arms crossed. That woman shape becomes the radical 「女|おんなへん」 on the left of family and relationship kanji: 「好|す」, like, 「姉|あね」, older sister, 「妹|いもうと」, younger sister, 「婚|こん」, marriage. A female of few years: a girl. Shoujo manga is for girls.",
    ja: "[少女|しょうじょ|*]が[歌|うた]っています。", en: "A girl is singing." },
  "少年": {
    why: "「少|しょう」 is few, and 「年|ねん」 is years. Someone with few years: a boy.",
    long: "「少|しょう」 is few. 「年|ねん」 began as a person carrying ripe grain, the yearly harvest: year. Few years: a boy, a youth. Shounen manga, the action comics, are named after him. Swap 「年」 for 「女|じょ」 and you get 「少女|しょうじょ」, a girl.",
    ja: "その[少年|しょうねん|*]は[元気|げんき]です。", en: "That boy is full of energy." },
  "古い": {
    why: "「古|ふる」 is 「十|じゅう」, ten, over 「口|くち」, mouth. A story passed through ten mouths is old. Old, for things.",
    long: "「古|ふる」 is 「十|じゅう」, ten, over 「口|くち」, mouth. A popular explanation: something passed down through ten mouths, ten generations, is old. Use it for things, not people. Watch for 「古」 inside other kanji: 「苦|く」, bitter, has grass on top. And 「中古|ちゅうこ」 is used, secondhand.",
    ja: "この[車|くるま]は[古|ふる|*]いです。", en: "This car is old." },
  "中古": {
    why: "「中|ちゅう」 is middle, and 「古|こ」 is old. In the middle, between new and old: used, secondhand.",
    long: "「中|ちゅう」 is a line through the middle of a box: middle. 「古|こ」 is ten over mouth, a story told through generations: old. Middle old: not new, not antique, but in between: used, secondhand. Japan has huge 「中古|ちゅうこ」 shops for games, cameras, and clothes.",
    ja: "[中古|ちゅうこ|*]のパソコンを[買|か]いました。", en: "I bought a used computer." },
  "古代": {
    why: "「古|こ」 is old, and 「代|だい」 is an age, an era. The old era: ancient times.",
    long: "「古|こ」 is ten over mouth: old. 「代|だい」 has the person radical, 「亻|にんべん」, beside a stake: a person taking someone's place, so it means replace, and a generation, an era. You'll also see it in 「時代|じだい」, an era, and 「電気代|でんきだい」, the electricity bill, a fee in place of something. The old era: ancient times.",
    ja: "[古代|こだい|*]のお[寺|てら]を[見|み]ました。", en: "I saw an ancient temple." },
  "知る": {
    why: "「知|し」 is 「矢|や」, an arrow, plus 「口|くち」, a mouth. Picture knowledge coming out as quick as an arrow. To know.",
    long: "「知|し」 is 「矢|や」, an arrow, beside 「口|くち」, a mouth. Picture knowledge coming out as fast and straight as an arrow. The arrow radical also sits in 「短|みじか」, short, and inside 「医|い」, medicine, an arrow in a box. Remember the grammar: I know is 「知っています|しっています」, but I don't know is 「知りません|しりません」.",
    ja: "その[人|ひと]を[知|し|*]っていますか。", en: "Do you know that person?" },
  "知人": {
    why: "「知|ち」 is know, and 「人|じん」 is person. A person you know: acquaintance.",
    long: "「知|ち」 is an arrow and a mouth: to know. 「人|じん」 is a person walking. A person you know: an acquaintance. A more everyday word is 「知り合い|しりあい」, knowing each other. The same 「知」 makes 「知識|ちしき」, knowledge.",
    ja: "[知人|ちじん|*]に[会|あ]いました。", en: "I ran into an acquaintance." },
  "知り合い": {
    why: "「知り|しり」, knowing, plus 「合い|あい」, each other. Knowing each other: an acquaintance.",
    long: "「知り|しり」 is the arrow-and-mouth kanji, knowing. 「合い|あい」 comes from 「合う|あう」, to fit together, to match. It also adds the meaning each other: 「話し合う|はなしあう」 is to talk it over together. Knowing each other: an acquaintance. You'll also see 「合」 in 「似合う|にあう」, to suit you.",
    ja: "[知り合い|しりあい|*]の[家|いえ]に[行|い]きました。", en: "I went to an acquaintance's house." },
  "来る": {
    why: "「来|く」 started as a picture of a wheat plant, borrowed for the word come. To come.",
    long: "「来|く」 started as a picture of a wheat plant, with ears of grain drooping from the stalk. Its sound was borrowed for the word come, and the meaning stuck. Its on'yomi 「らい」 means the coming one: 「来週|らいしゅう」, next week, 「来年|らいねん」, next year, and 「来日|らいにち」, coming to Japan. The verb is irregular: 「来ます|きます」, 「来ない|こない」.",
    ja: "[友|とも]だちが[来|く|*]る。", en: "A friend is coming." },
  "来ます": {
    why: "The polite form of 「来る|くる」, to come. The kanji stays the same; its reading changes to 「き」.",
    long: "「来|き」 is the wheat-plant kanji borrowed for come. 「来ます|きます」 is the polite form of 「来る|くる」. The kanji stays the same and only the reading shifts: く, き, こ. Seeing the kanji tells you the meaning even when the sound changes.",
    ja: "[明日|あした][来|き|*]ますか。", en: "Will you come tomorrow?" },
  "来ない": {
    why: "The negative of 「来る|くる」. The kanji stays the same; its reading changes to 「こ」. Not coming.",
    long: "「来|こ」 is the come kanji, here in its negative form, 「来ない|こない」, doesn't come. Same kanji, third reading: く in 「来る|くる」, き in 「来ます|きます」, こ here. If you know the kanji means come, the sound change won't throw you.",
    ja: "[彼|かれ]は[来|こ|*]ないです。", en: "He isn't coming." },
  "来週": {
    why: "「来|らい」 is coming, and 「週|しゅう」 is week. The coming week: next week.",
    long: "「来|らい」 is coming, the wheat-plant kanji. 「週|しゅう」 has the road radical, 「辶|しんにょう」, moving along, with 「周|しゅう」, a full lap around, inside. A lap of seven days: week. The coming week: next week. Swap the first kanji: 「今週|こんしゅう」, this week, 「先週|せんしゅう」, last week, 「毎週|まいしゅう」, every week.",
    ja: "[来週|らいしゅう|*]テストがあります。", en: "There's a test next week." },
  "来日": {
    why: "「来|らい」 is coming, and 「日|にち」 stands for 「日本|にほん」, Japan. Coming to Japan.",
    long: "「来|らい」 is coming. 「日|にち」 is the sun, and here it stands for 「日本|にほん」, the origin of the sun, Japan. Coming to Japan. Japanese news uses it for visiting celebrities and leaders. The opposite, leaving Japan, uses 「離|り」, separate.",
    ja: "[有名|ゆうめい]な[歌手|かしゅ]が[来日|らいにち|*]しました。", en: "A famous singer came to Japan." },
  "住む": {
    why: "「住|す」 is a person, 「人|ひと」, beside 「主|しゅ」, the master of a house. A person settled in a home: to live.",
    long: "「住|す」 has the person radical, 「亻|にんべん」, on the left. On the right is 「主|しゅ」, master, often explained as a lamp with a flame. A person settled by the lamp, the master of the home: to live. Here's a pronunciation family: 「主」 gives its sound to 「住|じゅう」, 「注|ちゅう」, pour, with water, and 「柱|ちゅう」, a pillar, with wood. Same lamp, similar sounds.",
    ja: "[東京|とうきょう]に[住|す|*]んでいます。", en: "I live in Tokyo." },
  "住所": {
    why: "「住|じゅう」 is to live, and 「所|しょ」 is place. The place where you live: address.",
    long: "「住|じゅう」 is a person settled by the lamp: to live. 「所|しょ」 is 「戸|と」, a door, beside 「斤|きん」, an axe. A spot marked by a door: a place. 「所」 also makes 「台所|だいどころ」, the kitchen, and 「近所|きんじょ」, the neighborhood. The place where you live: address.",
    ja: "[住所|じゅうしょ|*]を[教|おし]えてください。", en: "Please tell me your address." },
  "お正月": {
    why: "「正|しょう」 means correct, proper, and 「月|がつ」 is month. The proper first month of the year: New Year.",
    long: "「正|しょう」 is a foot heading straight for the line: correct, proper. 「月|がつ」 is a crescent moon: moon, and month. The proper first month of the year: New Year, Japan's biggest holiday, with shrine visits and boxed New Year food. The polite 「お」 makes it feel festive.",
    ja: "[お正月|おしょうがつ|*]に[神社|じんじゃ]へ[行|い]きます。", en: "I go to a shrine at New Year's." },
  "正しい": {
    why: "「正|ただ」 shows a foot heading straight to a line, a goal. Straight and right: correct.",
    long: "「正|ただ」 is 「止|し」, a foot, with a line on top, the goal. A foot heading straight to the goal: right, correct. 「止」, the foot, also shows up in 「歩|ある」, walk, two footprints, and in the top of 「歳|さい」, age, time marching on. The on'yomi 「せい」 gives 「正解|せいかい」, the correct answer.",
    ja: "[正|ただ|*]しい[答|こた]えを[書|か]いてください。", en: "Please write the correct answer." },
  "三年生": {
    why: "「三|さん」 is three, 「年|ねん」 is year, and 「生|せい」 is student. A third-year student.",
    long: "「三|さん」 is three strokes. 「年|ねん」 is a person carrying grain, the yearly harvest. 「生|せい」 is a sprout growing out of the ground: life, birth, and a student, someone growing. Third-year student. 「生」 is everywhere: 「学生|がくせい」, 「先生|せんせい」, born before you, and 「生活|せいかつ」, daily life.",
    ja: "[兄|あに]は[三年生|さんねんせい|*]です。", en: "My older brother is a third-year student." },
  "来年": {
    why: "「来|らい」 is coming, and 「年|ねん」 is year. The coming year: next year.",
    long: "「来|らい」 is coming, the wheat kanji. 「年|ねん」 is the year, a person carrying the harvest. The coming year: next year. Line it up: 「去年|きょねん」, the year that left, last year, 「今年|ことし」, this year, and 「来年|らいねん」, next year.",
    ja: "[来年|らいねん|*][日本|にほん]に[行|い]きます。", en: "I'll go to Japan next year." },
  "今年": {
    why: "「今|こ」 is now, and 「年|とし」 is year. The year right now: this year. A special reading to memorize.",
    long: "「今|こ」 is now: a roof shape over a stroke, often explained as gathering into this moment. 「年|とし」 is year. The year now: this year. This is a special reading of the whole word; you just memorize 「ことし」. 「今」 also leads 「今日|きょう」, today, 「今晩|こんばん」, tonight, and 「今週|こんしゅう」, this week.",
    ja: "[今年|ことし|*]は[忙|いそが]しいです。", en: "This year is busy." },
  "年": {
    why: "「年|とし」 began as a person carrying ripe grain, the harvest that comes once a year. Year, and age.",
    long: "「年|とし」 began as a person carrying a bundle of ripe grain on their back. The harvest came once a year, so it became year, and also age, how many harvests you've lived. With 「上|うえ」 it makes 「年上|としうえ」, someone older. The on'yomi 「ねん」 counts years: 「三年|さんねん」.",
    ja: "[年|とし|*]をとりました。", en: "I've gotten older." },
  "売る": {
    why: "「売|う」 was once 「出|しゅつ」, out, on top of 「買|ばい」, buy. Putting goods out to be bought: to sell.",
    long: "The modern 「売|う」 is simplified. Its old form was 「出|しゅつ」, put out, on top of 「買|ばい」, buy. Putting goods out to be bought: to sell. The two kanji even share the sound 「ばい」, so 「売買|ばいばい」 is buying and selling. 「売店|ばいてん」 is a kiosk, and 「売り切れ|うりきれ」, cut off from selling, means sold out.",
    ja: "[古|ふる]い[本|ほん]を[売|う|*]りました。", en: "I sold my old books." },
  "売店": {
    why: "「売|ばい」 is sell, and 「店|てん」 is shop. A small selling shop: stand, kiosk.",
    long: "「売|ばい」 is sell, goods put out to be bought. 「店|てん」 has the building radical, 「广|まだれ」, a roof with one wall, the kind of shape that marks buildings: 「広|ひろ」, wide, 「度|ど」, and 「庭|にわ」, garden. Inside is 「占|せん」, occupy. A building that occupies a spot on the street: shop. A selling shop: kiosk.",
    ja: "[駅|えき]の[売店|ばいてん|*]でお[茶|ちゃ]を[買|か]いました。", en: "I bought tea at the station kiosk." },
  "買う": {
    why: "「買|か」 is a net on top of 「貝|かい」, a shell. Shells were once money. Gathering money for goods: to buy.",
    long: "「買|か」 is a net on top of 「貝|かい」, a shell. Cowrie shells were money in ancient China, so the shell radical, 「貝|かいへん」, marks money kanji: 「貸|か」, lend, 「質|しつ」, quality, value, and 「財|さい」 in 「財布|さいふ」, wallet. A net scooping up money for goods: to buy. 「買い物|かいもの」 is shopping.",
    ja: "パンを[買|か|*]います。", en: "I'll buy bread." },
  "買い物": {
    why: "「買い|かい」, buying, plus 「物|もの」, things. Buying things: shopping.",
    long: "「買い|かい」 is a net over a shell, money: buying. 「物|もの」 has the cow radical, 「牛|うしへん」, on the left; cattle were a farmer's most valuable thing, so it means thing. The cow also marks 「特|とく」, special, a prized bull. Buying things: shopping. Swap the verb: 「食べ物|たべもの」, food, 「飲み物|のみもの」, drinks.",
    ja: "[母|はは]と[買い物|かいもの|*]に[行|い]きました。", en: "I went shopping with my mother." },
  "売買": {
    why: "「売|ばい」 is sell, and 「買|ばい」 is buy. Selling and buying: trade.",
    long: "「売|ばい」 is sell and 「買|ばい」 is buy, and they share the sound ばい. Both have money inside: 「買」 has the shell, 「貝|かい」, and the old form of 「売」 contained 「買」 itself. Selling and buying: trade. It's a formal word you'll see on real estate and car dealer signs.",
    ja: "[車|くるま]の[売買|ばいばい|*]をしています。", en: "They buy and sell cars." },
  "町": {
    why: "「町|まち」 is 「田|た」, a rice field, with a path beside it. Fields and paths where houses gather: town.",
    long: "「町|まち」 has 「田|た」, a rice field, on the left: a square divided into four plots. The field radical shows up in 「男|おとこ」, a field plus strength, a man, and 「界|かい」, the border between fields. The right side gives the sound. Picture paths between fields with houses gathering along them: town. In addresses, 「町|ちょう」 marks a neighborhood.",
    ja: "この[町|まち|*]が[好|す]きです。", en: "I like this town." },
  "長い": {
    why: "「長|なが」 began as a picture of an old person with long flowing hair. Long.",
    long: "「長|なが」 began as a picture of an old person with long flowing hair, sometimes with a cane. Long hair gives long; old age gives senior, the head. So 「長」 also means chief: 「社長|しゃちょう」, company president, 「市長|しちょう」, mayor. That long-haired elder also sits in the top left of 「髪|かみ」, hair.",
    ja: "[髪|かみ]が[長|なが|*]いです。", en: "She has long hair." },
  "道": {
    why: "「道|みち」 has the road radical along the bottom, with 「首|くび」, head, riding on it. Heading down a path: road, way.",
    long: "「道|みち」 rides on the road radical, 「辶|しんにょう」, the swoosh along the bottom left. It marks movement and travel: 「近|ちか」, near, 「週|しゅう」, week, 「遅|おそ」, late, 「通|とお」, pass through. On top is 「首|くび」, head, neck. Heading down a path: road, way. With the reading 「どう」 it means a way of life: 「柔道|じゅうどう」, judo, 「書道|しょどう」, calligraphy.",
    ja: "[道|みち|*]がわかりません。", en: "I don't know the way." },
  "雪": {
    why: "「雪|ゆき」 has the rain radical on top, and in its old form a hand with a broom below. Weather you sweep up: snow.",
    long: "「雪|ゆき」 has the rain lid, 「雨|あめかんむり」, on top: weather from the sky. In the old form, the bottom was a hand holding a broom. Weather you sweep up afterward: snow. Its weather cousins share the lid: 「雨|あめ」, rain, 「雲|くも」, cloud, and 「電|でん」, which started as lightning. 「雪だるま|ゆきだるま」 is a snowman.",
    ja: "[雪|ゆき|*]が[降|ふ]っています。", en: "It's snowing." },
  "新雪": {
    why: "「新|しん」 is new, and 「雪|せつ」 is snow. New snow: fresh powder.",
    long: "「新|しん」 is 「立|た」 and 「木|き」, a tree, beside 「斤|きん」, an axe: freshly cut wood. New. The axe radical, 「斤|おのづくり」, also sits in 「近|ちか」, near, and 「所|ところ」, place. 「雪|せつ」 is rain lid plus broom: snow. New snow: fresh powder. 「新」 also makes 「新聞|しんぶん」, new things heard, a newspaper.",
    ja: "[新雪|しんせつ|*]の[上|うえ]を[歩|ある]きました。", en: "I walked on fresh snow." },
  "雪だるま": {
    why: "「雪|ゆき」 is snow, and 「だるま」 is the round Daruma doll. A snow Daruma: snowman.",
    long: "「雪|ゆき」 is the rain lid over a broom: snow you sweep. 「だるま」 is the round red Daruma doll, based on a Buddhist monk who meditated so long his arms and legs wasted away, so the doll is just a round body. People fill in one eye when they make a wish and the other when it comes true. A snow Daruma: snowman, usually two balls, round like the doll.",
    ja: "[子供|こども]たちが[雪だるま|ゆきだるま|*]を[作|つく]りました。", en: "The children made a snowman." },
  "立つ": {
    why: "「立|た」 is a picture of a person standing on the ground with arms out. To stand.",
    long: "「立|た」 is a picture of a person standing on a line of ground, arms spread. To stand. As a part, it sits on top of 「音|おと」, sound, 「意|い」, mind, and 「親|しん」, parent, standing on a tree. The on'yomi 「りつ」 means set up: 「国立|こくりつ」, set up by the nation, a national school.",
    ja: "[立|た|*]ってください。", en: "Please stand up." },
  "自分": {
    why: "「自|じ」 began as a picture of a nose; Japanese people point at their nose to mean me. 「分|ぶん」 is part. My own part: oneself.",
    long: "「自|じ」 began as a picture of a nose. In Japan, people point at their nose to mean me, so the nose became self. That same nose sits on top of the full kanji for nose, 「鼻|はな」. 「分|ぶん」 is 「八|はち」, split apart, over 「刀|かたな」, a knife: cutting into parts. My own part: oneself. 「分」 also gives minutes, parts of an hour, and 「分かる|わかる」, to understand, sorted out.",
    ja: "[自分|じぶん|*]で[作|つく]りました。", en: "I made it myself." },
  "自動車": {
    why: "「自|じ」 is self, 「動|どう」 is move, and 「車|しゃ」 is vehicle. A vehicle that moves by itself: automobile.",
    long: "「自|じ」 is the nose, self. 「動|どう」 is 「重|おも」, heavy, beside 「力|ちから」, power. Using power to move something heavy: to move. The power radical, 「力|ちから」, marks effort kanji: 「働|はたら」, work, and 「勉|べん」, effort. 「車|しゃ」 is a cart from above, with an axle and wheels. Self plus move plus vehicle: automobile.",
    ja: "[自動車|じどうしゃ|*]の[会社|かいしゃ]で[働|はたら]いています。", en: "I work at a car company." },
  "自転車": {
    why: "「自|じ」 is self, 「転|てん」 is turn, and 「車|しゃ」 is vehicle. A vehicle whose wheels you turn yourself: bicycle.",
    long: "「自|じ」 is self, the nose. 「転|てん」 has 「車|くるま」, a cart, on the left, so it's about wheels: to turn, to roll. The cart radical also anchors 「軽|かる」, light, and sits inside 「連|れん」, carts in a line. 「車|しゃ」 is vehicle. A vehicle whose wheels you turn yourself: bicycle.",
    ja: "[自転車|じてんしゃ|*]で[学校|がっこう]に[行|い]きます。", en: "I go to school by bike." },
  "自由": {
    why: "「自|じ」 is self, and 「由|ゆう」 is reason, cause. Acting for your own reasons: freedom.",
    long: "「自|じ」 is the nose, self. 「由|ゆう」 is often pictured as a sprout coming up from a field: where something comes from, a cause, a reason. You'll see it in 「理由|りゆう」, a reason. Acting from your own reasons: freedom. 「自由席|じゆうせき」 on trains are the unreserved seats, the free seats.",
    ja: "[週末|しゅうまつ]は[自由|じゆう|*]な[時間|じかん]があります。", en: "I have free time on weekends." },
  "夜": {
    why: "「夜|よる」 has a crescent moon, 「夕|ゆう」, tucked inside beside a person. Out under the moon: night.",
    long: "「夜|よる」 has a crescent moon, 「夕|ゆう」, tucked inside next to a person, under a lid. A person out under the moon: night. The moon shape, 「夕」, also makes 「名|な」, calling your name in the dark, and 「多|おお」, two moons piled up, many. 「今夜|こんや」 is tonight, and 「夜中|よなか」 is the middle of the night.",
    ja: "[夜|よる|*]、[本|ほん]を[読|よ]みます。", en: "I read books at night." },
  "夜中": {
    why: "「夜|よ」 is night, and 「中|なか」 is middle. The middle of the night.",
    long: "「夜|よ」 is a person under the crescent moon: night. 「中|なか」 is a line through the middle of a box: middle, inside. The middle of the night. Add 「真|ま」, exact, and you get 「真夜中|まよなか」, the dead of night, midnight.",
    ja: "[夜中|よなか|*]に[起|お]きました。", en: "I woke up in the middle of the night." },
  "今夜": {
    why: "「今|こん」 is now, this, and 「夜|や」 is night. This night: tonight.",
    long: "「今|こん」 is now. 「夜|や」 is a person under the moon: night. This night: tonight. 「今晩|こんばん」 also means tonight, but 「晩|ばん」, with the sun radical, feels more like evening, while 「夜|や」 is the dark night itself.",
    ja: "[今夜|こんや|*][電話|でんわ]します。", en: "I'll call you tonight." },
  "夜明け": {
    why: "「夜|よ」 is night, and 「明け|あけ」 comes from 「明ける|あける」, to open up, to dawn. Night opening up: dawn.",
    long: "「夜|よ」 is night, a person under the moon. 「明け|あけ」 is 「明|めい」, the sun and the moon side by side, bright, as a verb: to become light, to open. The night opening up: dawn. The same verb gives the New Year greeting 「明けましておめでとう|あけましておめでとう」, congratulations on the year opening.",
    ja: "[夜明け|よあけ|*]に[山|やま]に[登|のぼ]りました。", en: "I climbed the mountain at dawn." },
  "朝": {
    why: "「朝|あさ」 has the sun rising through grass on the left, and the moon on the right. The sun is up and the moon is still out: morning.",
    long: "「朝|あさ」 has the sun, 「日|ひ」, between sprouts of grass on the left: the sun rising through the plants. On the right is 「月|つき」, the moon, still in the sky. Sun up, moon still out: morning. The on'yomi 「ちょう」 gives 「朝食|ちょうしょく」, breakfast. 「今朝|けさ」, this morning, has a special reading.",
    ja: "[朝|あさ|*]、コーヒーを[飲|の]みます。", en: "I drink coffee in the morning." },
  "朝食": {
    why: "「朝|ちょう」 is morning, and 「食|しょく」 is eat, a meal. The morning meal: breakfast.",
    long: "「朝|ちょう」 is the sun rising while the moon is still up: morning. 「食|しょく」 is a lid over a bowl of food: eat, meal. Squeezed onto the left, 「食」 becomes the food radical, 「飠|しょくへん」, in 「飲|の」, drink, 「飯|はん」, rice, and 「館|かん」, a guesthouse where travelers ate. Morning meal: breakfast, the formal word on hotel signs. 「昼食|ちゅうしょく」 is lunch.",
    ja: "ホテルの[朝食|ちょうしょく|*]はおいしいです。", en: "The hotel breakfast is delicious." },
  "毎朝": {
    why: "「毎|まい」 is every, and 「朝|あさ」 is morning. Every morning.",
    long: "「毎|まい」 is a woman wearing an ornament in her hair, said to show a mother, someone who's there every day. It means every: 「毎日|まいにち」, 「毎晩|まいばん」, 「毎週|まいしゅう」. It also sits inside 「海|うみ」, sea, beside water. 「朝|あさ」 is morning, sun rising, moon still out. Every morning.",
    ja: "[毎朝|まいあさ|*][走|はし]ります。", en: "I run every morning." },
  "持つ": {
    why: "「持|も」 has the hand radical on the left. A hand gripping something: to hold, to carry.",
    long: "「持|も」 has the hand radical, 「扌|てへん」, on the left: a squeezed 「手|て」. It marks things you do with your hands: 「押|お」, push, 「払|はら」, pay, 「探|さが」, search, 「授|じゅ」, give. On the right is 「寺|じ」, temple, giving the sound じ, the same as in 「時|じ」, time. A hand gripping something: to hold.",
    ja: "[荷物|にもつ]を[持|も|*]ちましょうか。", en: "Shall I carry your bags?" },
  "持ってくる": {
    why: "「持って|もって」, holding, plus 「くる」, come. Hold it and come: to bring.",
    long: "「持って|もって」 is the hand radical, 「扌|てへん」, plus 「寺|じ」: holding. Then 「くる」, to come. Hold it and come: to bring. Flip it to 「持っていく|もっていく」, hold it and go, to take it along. For people, Japanese uses 「連れてくる|つれてくる」 instead, 「連」 with carts in a line.",
    ja: "[傘|かさ]を[持ってくる|もってくる|*]のを[忘|わす]れました。", en: "I forgot to bring my umbrella." },
  "気持ち": {
    why: "「気|き」 is spirit, mood, and 「持ち|もち」 is holding. How you hold your spirit: feeling.",
    long: "「気|き」 is steam rising over rice, the radical 「气|きがまえ」: spirit, air, energy. It's in 「天気|てんき」, the sky's mood, weather, 「元気|げんき」, energy, and 「病気|びょうき」, sick energy. 「持ち|もち」 is the hand radical plus 「寺|じ」: holding. How you hold your spirit: feeling. 「気持ちいい|きもちいい」 means it feels good.",
    ja: "[気持ち|きもち|*]がいいです。", en: "It feels good." },
  "手紙": {
    why: "「手|て」 is hand, and 「紙|がみ」 is paper. Paper written by hand: letter.",
    long: "「手|て」 is a picture of a hand, fingers spread. 「紙|がみ」 has the thread radical, 「糸|いとへん」, on the left; paper is fibers pressed together. The thread radical marks anything stringy or woven: 「結|けっ」, tie, 「終|お」, the end of the thread, 「線|せん」, a line. Paper written by hand: letter. Careful, in Chinese the same kanji mean toilet paper.",
    ja: "[友|とも]だちに[手紙|てがみ|*]を[書|か]きました。", en: "I wrote a letter to a friend." },
  "歌手": {
    why: "「歌|か」 is song, and 「手|しゅ」 is hand, here meaning a skilled person. A skilled song person: singer.",
    long: "「歌|か」 has two stacked mouth shapes, a sound repeated, and on the right the open-mouth radical, 「欠|あくび」, a person with mouth wide open, yawning or singing. That radical shows up in 「飲|の」, drink, too. 「手|しゅ」, hand, at the end of a word means a skilled person: 「選手|せんしゅ」, athlete. A skilled song person: singer.",
    ja: "[歌手|かしゅ|*]になりたいです。", en: "I want to become a singer." },
  "手": {
    why: "「手|て」 is a picture of a hand, with the fingers spread at the top. Hand.",
    long: "「手|て」 is a picture of a hand, fingers spread at the top and the wrist running down. Squeezed onto the left, it becomes the hand radical, 「扌|てへん」, on action kanji like 「持|も」, hold, and 「打|う」, hit. At the end of a word, 「手|しゅ」 means a skilled person, as in 「歌手|かしゅ」, singer, and it hides in 「上手|じょうず」, skillful, an upper hand.",
    ja: "[手|て|*]を[洗|あら]ってください。", en: "Please wash your hands." },
  "手話": {
    why: "「手|しゅ」 is hand, and 「話|わ」 is talk. Talking with your hands: sign language.",
    long: "「手|しゅ」 is a hand. 「話|わ」 is the speech radical, 「言|ごんべん」, plus a tongue: talk. Talking with your hands: sign language. Japanese Sign Language is its own language, different from American Sign Language.",
    ja: "[手話|しゅわ|*]を[習|なら]っています。", en: "I'm learning sign language." },
  "紙": {
    why: "「紙|かみ」 has the thread radical on the left, because paper is fibers pressed together. Paper.",
    long: "「紙|かみ」 has the thread radical, 「糸|いとへん」, on the left; paper is plant fibers pressed into a sheet. The right side gives the sound. In compounds it softens to 「がみ」: 「手紙|てがみ」, letter, and 「折り紙|おりがみ」. Careful with the sound: 「髪|かみ」, hair, and 「神|かみ」, god, sound the same.",
    ja: "[紙|かみ|*]に[名前|なまえ]を[書|か]いてください。", en: "Please write your name on the paper." },
  "和紙": {
    why: "「和|わ」 means Japanese, and 「紙|し」 is paper. Japanese paper, the traditional handmade kind.",
    long: "「和|わ」 is 「禾|のぎ」, grain, beside 「口|くち」, a mouth: grain for every mouth, peace, harmony. It came to stand for Japan itself: 「和食|わしょく」, Japanese food, 「和服|わふく」, Japanese clothes. 「紙|し」 has the thread radical: paper. Japanese paper: tough, handmade from tree bark fibers, used for screens and lanterns.",
    ja: "[和紙|わし|*]はきれいです。", en: "Japanese paper is beautiful." },
  "表紙": {
    why: "「表|ひょう」 is surface, the front, and 「紙|し」 is paper. The front paper of a book: cover.",
    long: "「表|ひょう」 began as a fur coat: fur, 「毛|け」, inside clothing, 「衣|ころも」. The fur side is the outside, so it means surface, front, and to show. 「紙|し」, with the thread radical, is paper. The front paper: cover. 「表」 also gives 「発表|はっぴょう」, a presentation, sending out and showing.",
    ja: "この[本|ほん]の[表紙|ひょうし|*]が[好|す]きです。", en: "I like this book's cover." },
  "折り紙": {
    why: "「折り|おり」 is folding, and 「紙|がみ」 is paper. Folding paper: origami.",
    long: "「折り|おり」 has the hand radical, 「扌|てへん」, beside 「斤|きん」, an axe: breaking, bending, folding by hand. 「紙|がみ」 is paper, fibers pressed together. Folding paper: origami. The classic model is the crane, and folding a thousand cranes is said to grant a wish.",
    ja: "[折り紙|おりがみ|*]で[鳥|とり]を[作|つく]りました。", en: "I made a bird out of origami." },
  "好きな": {
    why: "「好|す」 is 「女|おんな」, woman, beside 「子|こ」, child. A mother holding her child: to like.",
    long: "「好|す」 has the woman radical, 「女|おんなへん」, on the left and 「子|こ」, child, on the right: a mother holding her child, the picture of affection. The woman radical appears in family and relationship kanji: 「姉|あね」, 「妹|いもうと」, 「婚|こん」, marriage. Remember: the thing you like takes 「が」, and 「好き|すき」 is a na-adjective.",
    ja: "[好|す|*]きな[食|た]べ[物|もの]は[何|なん]ですか。", en: "What's your favorite food?" },
  "大好きな": {
    why: "「大|だい」 is big, plus 「好き|すき」, like. A big like: to love.",
    long: "「大|だい」 is a person stretching arms and legs out wide: big. 「好|す」 is a woman with her child: liking. A big liking: to love. 「大」 does the same boosting job in 「大切|たいせつ」, precious, and 「大変|たいへん」, terrible, a big change.",
    ja: "[大好|だいす|*]きな[歌|うた]を[歌|うた]いました。", en: "I sang my favorite song." },
  "好意": {
    why: "「好|こう」 is liking, and 「意|い」 is mind, feeling. A liking feeling: goodwill.",
    long: "「好|こう」 is a woman with her child: liking. 「意|い」 is 「音|おと」, sound, over 「心|こころ」, heart: the sound of your heart, your mind, your feeling. The heart radical at the bottom of 「意」 tips you off: feelings live here, as in 「思|おも」, think, and 「悪|わる」, bad. A liking feeling: goodwill.",
    ja: "[彼|かれ]に[好意|こうい|*]を[持|も]っています。", en: "I have feelings for him." },
  "好み": {
    why: "「好み|このみ」 is the noun from liking. What you like: your taste.",
    long: "「好み|このみ」 is the woman-and-child kanji, liking, as a noun: what you like, your taste. Its reading 「この」 is unusual; most words use 「す」 or 「こう」. You'll hear 「好みのタイプ|このみのタイプ」, your type.",
    ja: "これは[私|わたし]の[好|この|*]みです。", en: "This is my taste." },
  "好物": {
    why: "「好|こう」 is like, and 「物|ぶつ」 is thing. The thing you like, especially food: favorite food.",
    long: "「好|こう」 is liking, the woman with her child. 「物|ぶつ」 has the cow radical, 「牛|うしへん」: thing. The liked thing, usually food: favorite food. Swap the first kanji: 「動物|どうぶつ」, a moving thing, an animal, and 「着物|きもの」, a worn thing, kimono.",
    ja: "[私|わたし]の[好物|こうぶつ|*]はすしです。", en: "My favorite food is sushi." },
  "近く": {
    why: "「近|ちか」 has the road radical. Just a short way down the road: near, nearby.",
    long: "「近|ちか」 rides on the road radical, 「辶|しんにょう」, which marks movement and distance. Its opposite, 「遠|とお」, far, rides the same road. On top is 「斤|きん」, an axe, giving the sound きん. A short way down the road: near. The on'yomi gives 「近所|きんじょ」, the neighborhood, and 「最近|さいきん」, recently.",
    ja: "[駅|えき]の[近|ちか|*]くに[住|す]んでいます。", en: "I live near the station." },
  "近所": {
    why: "「近|きん」 is near, and 「所|じょ」 is place. The places near you: neighborhood.",
    long: "「近|きん」 is the road radical with an axe: near. 「所|じょ」 is a door with an axe: place. Both have the axe, 「斤|おのづくり」! Near places: neighborhood. In Japan it's polite to greet the neighbors with a small gift when you move in.",
    ja: "[近所|きんじょ|*]に[公園|こうえん]があります。", en: "There's a park in my neighborhood." },
  "最近": {
    why: "「最|さい」 is most, and 「近|きん」 is near. The nearest in time: recently.",
    long: "「最|さい」 is the sun over 「取|と」, take, a hand taking an ear: grabbing the most, extreme. It leads 「最高|さいこう」, the best, and 「最後|さいご」, the last. 「近|きん」 is near, the road radical with an axe. The most near in time: recently, lately.",
    ja: "[最近|さいきん|*]、[忙|いそが]しいです。", en: "I've been busy lately." },
  "明るい": {
    why: "「明|あか」 is the sun, 「日|ひ」, beside the moon, 「月|つき」. Two lights together: bright, cheerful.",
    long: "「明|あか」 puts the two brightest things in the sky side by side: 「日|ひ」, the sun, and 「月|つき」, the moon. Bright. Like in English, a bright person is cheerful. The on'yomi 「めい」 means clear: 「説明|せつめい」, explanation, 「発明|はつめい」, invention. And 「明日|あした」, tomorrow, the bright day ahead.",
    ja: "この[部屋|へや]は[明|あか|*]るいです。", en: "This room is bright." },
  "説明": {
    why: "「説|せつ」 has the speech radical: explaining in words. 「明|めい」 is bright, clear. Making it clear with words: explanation.",
    long: "「説|せつ」 has the speech radical, 「言|ごんべん」, on the left: explaining in words. On the right is a person with open hands, as if laying out an idea. 「明|めい」 is sun plus moon: bright, clear. Using words to make something clear: explanation. 「説明書|せつめいしょ」 is the instruction manual.",
    ja: "[先生|せんせい]の[説明|せつめい|*]はわかりやすいです。", en: "The teacher's explanation is easy to understand." },
  "発明": {
    why: "「発|はつ」 is to set off, send out, and 「明|めい」 is bright. Bringing something new to light: invention.",
    long: "「発|はつ」 has 「癶|はつがしら」 on top, a pair of feet setting off. It means to start out, to send out: 「出発|しゅっぱつ」, departure. 「明|めい」 is sun and moon: bright. Bringing something to light for the first time: invention.",
    ja: "すばらしい[発明|はつめい|*]です。", en: "It's a wonderful invention." },
  "文明": {
    why: "「文|ぶん」 is writing, culture, and 「明|めい」 is bright. A culture brought to light: civilization.",
    long: "「文|ぶん」 is a person with a pattern drawn on their chest: patterns, writing, culture. You know it from 「文法|ぶんぽう」, grammar, and 「文化|ぶんか」, culture. 「明|めい」 is sun and moon: bright. Culture that has come into the light: civilization.",
    ja: "[古代|こだい]の[文明|ぶんめい|*]について[勉強|べんきょう]します。", en: "I study ancient civilizations." },
  "病院": {
    why: "「病|びょう」 is sickness, and 「院|いん」 is an institution. The institution for the sick: hospital.",
    long: "「病|びょう」 has the sickness radical, 「疒|やまいだれ」, a bed tipped on its side with a person lying in it. It's a great clue: 「痛|いた」, pain, 「疲|つか」, tired, 「症|しょう」, symptom. 「院|いん」 has the hill radical, 「阝|こざとへん」, on the left: a walled building on a hill, an institution. The institution for the sick: hospital.",
    ja: "[病院|びょういん|*]に[行|い]きます。", en: "I'm going to the hospital." },
  "病気": {
    why: "「病|びょう」 is sickness, and 「気|き」 is spirit, energy. Sick energy: illness.",
    long: "「病|びょう」 is the sickbed radical, 「疒|やまいだれ」, with a sound part inside: sickness. 「気|き」 is steam rising: spirit, energy. Sick energy: illness. Compare 「元気|げんき」, source energy, healthy, and 「気分|きぶん」, your mood.",
    ja: "[弟|おとうと]は[病気|びょうき|*]です。", en: "My younger brother is sick." },
  "大学院": {
    why: "「大学|だいがく」, college, plus 「院|いん」, institution. The institution above college: graduate school.",
    long: "「大|だい」 is a person stretched out: big. 「学|がく」 is a child, 「子|こ」, under a roof, learning, with hands above. That 「子」 at the bottom also appears in 「字|じ」, letter. 「院|いん」 is the hill radical with a walled building: institution. The institution above the big school: graduate school.",
    ja: "[大学院|だいがくいん|*]に[行|い]きたいです。", en: "I want to go to graduate school." },
  "美容院": {
    why: "「美|び」 is beauty, 「容|よう」 is appearance, and 「院|いん」 is institution. A place for beautiful looks: beauty parlor.",
    long: "「美|び」 is 「羊|ひつじ」, a sheep, over 「大|だい」, big. A big, fine sheep was prized: beautiful. The sheep also sits in 「洋|よう」, ocean, and on top of 「着|き」, wear. 「容|よう」 is a roof over 「谷|たに」, a valley: a container, and appearance. 「院|いん」 is an institution. A place for beautiful looks: hair salon. Don't mix it up with 「病院|びょういん」, hospital.",
    ja: "[美容院|びよういん|*]で[髪|かみ]を[切|き]りました。", en: "I got my hair cut at the salon." },
  "映画": {
    why: "「映|えい」 is to project, reflect, and 「画|が」 is picture. A projected picture: movie.",
    long: "「映|えい」 has the sun radical, 「日|ひへん」, on the left: light. On the right is 「央|おう」, center. Light reflected in the center: to reflect, to project. 「画|が」 is a field with its borders drawn in: a picture, lines. A projected picture: movie. 「漫画|まんが」, loose pictures, is manga.",
    ja: "[映画|えいが|*]を[見|み]ませんか。", en: "Want to see a movie?" },
  "映画館": {
    why: "「映画|えいが」, movie, plus 「館|かん」, building. A movie building: movie theater.",
    long: "「映画|えいが」 is a projected picture, a movie. 「館|かん」 has the food radical, 「飠|しょくへん」: a guesthouse where travelers ate, now any large building. 「図書館|としょかん」, library, and 「旅館|りょかん」, inn, use it too. A movie building: movie theater.",
    ja: "[映画館|えいがかん|*]はどこですか。", en: "Where is the movie theater?" },
  "映る": {
    why: "「映|うつ」 has the sun on the left: light making an image. To be reflected, or to show up on a screen.",
    long: "「映|うつ」 has the sun radical, 「日|ひへん」, beside 「央|おう」, center: light making an image. To be reflected, like in a mirror, or to show up on a screen. Its cousin 「写|うつ」 also reads うつ and means to copy, like taking a photo, 「写真|しゃしん」.",
    ja: "[鏡|かがみ]に[顔|かお]が[映|うつ|*]っています。", en: "My face is reflected in the mirror." },
  "画家": {
    why: "「画|が」 is picture, and 「家|か」 is a professional. A picture professional: painter.",
    long: "「画|が」 is a field with its outline drawn: picture. 「家|か」, a house, at the end of a word means a professional whose life is that craft: 「作家|さっか」, writer, 「漫画家|まんがか」, cartoonist. A picture professional: painter.",
    ja: "[有名|ゆうめい]な[画家|がか|*]の[絵|え]です。", en: "It's a painting by a famous painter." },
  "計画": {
    why: "「計|けい」 is to measure, and 「画|かく」 is lines, a plan. Measured out lines: plan.",
    long: "「計|けい」 has the speech radical, 「言|ごんべん」, beside 「十|じゅう」, ten: counting out loud, measuring. You'll see it in 「時計|とけい」, a time measurer, a clock. 「画|かく」 is drawn lines. Measuring and drawing lines: a plan.",
    ja: "[旅行|りょこう]の[計画|けいかく|*]を[立|た]てました。", en: "I made plans for a trip." },
  "漫画": {
    why: "「漫|まん」 means loose, free, and 「画|が」 is picture. Free, playful pictures: comics.",
    long: "「漫|まん」 has the water radical, 「氵|さんずい」, three drops on the left. Water spreading freely gives the idea of loose, rambling, aimless. 「画|が」 is picture. Loose, playful pictures: manga, comics. The great woodblock artist Hokusai used this word for his sketchbooks two hundred years ago.",
    ja: "[漫画|まんが|*]を[読|よ]むのが[好|す]きです。", en: "I like reading manga." },
  "歌う": {
    why: "「歌|うた」 has a person with an open mouth on the right. Opening your mouth to let out a melody: to sing.",
    long: "「歌|うた」 has two stacked mouth shapes on the left, a sound repeated, and the open-mouth radical, 「欠|あくび」, on the right: a person with mouth wide open. That radical also sits in 「飲|の」, drink, mouth open for a drink. Opening wide to let out a melody: to sing.",
    ja: "カラオケで[歌|うた|*]いました。", en: "I sang at karaoke." },
  "歌": {
    why: "「歌|うた」 as a noun: a song.",
    long: "「歌|うた」 as a noun: a song. Repeated sounds on the left, a wide-open mouth on the right. The on'yomi 「か」 gives 「歌手|かしゅ」, singer, and starts 「歌舞伎|かぶき」, kabuki: song, dance, and skill.",
    ja: "この[歌|うた|*]が[好|す]きです。", en: "I like this song." },
  "国歌": {
    why: "「国|こっ」 is country, and 「歌|か」 is song. The country's song: national anthem.",
    long: "「国|こっ」 has the enclosure radical, 「囗|くにがまえ」, a border around the land, with a jewel, 「玉|たま」, inside: a precious land within borders, a country. 「歌|か」 is song. The country's song: national anthem. The enclosure also wraps 「図|ず」, drawing, and 「園|えん」, garden.",
    ja: "[国歌|こっか|*]を[歌|うた]いました。", en: "We sang the national anthem." },
  "歌詞": {
    why: "「歌|か」 is song, and 「詞|し」 is words. The words of a song: lyrics.",
    long: "「歌|か」 is song, an open mouth singing. 「詞|し」 has the speech radical, 「言|ごんべん」: words. The words of a song: lyrics. The speech radical always tips you off that a kanji deals with language.",
    ja: "この[歌|うた]の[歌詞|かし|*]が[好|す]きです。", en: "I like the lyrics of this song." },
  "川口市": {
    why: "「川|かわ」 is river, 「口|ぐち」 is mouth, and 「市|し」 is city. River Mouth City: Kawaguchi.",
    long: "「川|かわ」 is a picture of water flowing between banks: three lines. 「口|ぐち」 is a mouth. A river's mouth, where it meets the sea or a bigger river. 「市|し」 is a market stall, and the city that grows around it. River Mouth City: Kawaguchi, a real city just north of Tokyo.",
    ja: "[川口市|かわぐちし|*]に[住|す]んでいます。", en: "I live in Kawaguchi City." },
  "市役所": {
    why: "「市|し」 is city, 「役|やく」 is role, service, and 「所|しょ」 is place. The city's service place: city hall.",
    long: "「市|し」 is city, a market that grew. 「役|やく」 has the step radical, 「彳|ぎょうにんべん」, someone going on duty: a role, a service. 「所|しょ」 is a door and an axe: place. The city's service place: city hall, where you register your address.",
    ja: "[市役所|しやくしょ|*]に[行|い]きました。", en: "I went to city hall." },
  "市長": {
    why: "「市|し」 is city, and 「長|ちょう」 is head. The head of the city: mayor.",
    long: "「市|し」 is city. 「長|ちょう」 is the elder with long hair: long, and chief. The chief of the city: mayor. 「長」 makes other bosses too: 「社長|しゃちょう」, company president, and 「部長|ぶちょう」, department head.",
    ja: "[市長|しちょう|*]に[会|あ]いました。", en: "I met the mayor." },
  "市場": {
    why: "「市|いち」 is market, and 「場|ば」 is place. Market place: market.",
    long: "「市|いち」 is a market stall. 「場|ば」 has the earth radical, 「土|つちへん」, on the left: ground. On the right is the sun rising over the ground. Open sunny ground: a place. The earth radical marks ground and land: 「地|ち」, 「坂|さか」, slope. Market place: market.",
    ja: "[市場|いちば|*]で[魚|さかな]を[買|か]いました。", en: "I bought fish at the market." },
  "所": {
    why: "「所|ところ」 is a door, 「戸|と」, beside an axe. A spot marked by a door: place.",
    long: "「所|ところ」 is 「戸|と」, a door, beside 「斤|きん」, an axe. One old explanation is the place where you hear wood being chopped. Simpler: a door marks a spot. Place. It ends 「台所|だいどころ」, kitchen, and 「住所|じゅうしょ」, address.",
    ja: "きれいな[所|ところ|*]ですね。", en: "It's a beautiful place, isn't it?" },
  "台所": {
    why: "「台|だい」 is a stand, a platform, and 「所|どころ」 is place. The place with the stand where you cook: kitchen.",
    long: "「台|だい」 is a platform, a stand. It's also the counter for machines, like cars. 「所|どころ」 is a door and an axe: place. The place with the stand where you cook: kitchen.",
    ja: "[母|はは]は[台所|だいどころ|*]にいます。", en: "My mother is in the kitchen." },
  "勉強する": {
    why: "「勉|べん」 is effort, and 「強|きょう」 is strong. Pushing yourself hard: to study.",
    long: "「勉|べん」 has 「力|ちから」, strength, on the right, and a shape for straining on the left: effort. 「強|きょう」 has 「弓|ゆみ」, a bow, on the left: strong, a bow that takes strength to pull. Effort plus strength: pushing yourself hard. To study. An old shopkeeper saying 「勉強します|べんきょうします」 means I'll give you a discount, I'll push myself for you.",
    ja: "[毎日|まいにち][勉強|べんきょう|*]します。", en: "I study every day." },
  "勉める": {
    why: "「勉|つと」 is effort, with 「力|ちから」, strength, on the right. To make an effort, to try hard.",
    long: "「勉|つと」 has 「力|ちから」, power, on the right, the radical for effort. It also appears in 「動|どう」, move, 「働|はたら」, work, and 「助|たす」, help. Straining with all your strength: to strive, to try hard.",
    ja: "[毎日|まいにち][勉|つと|*]めています。", en: "I'm making an effort every day." },
  "勤勉な": {
    why: "「勤|きん」 is to work hard, and 「勉|べん」 is effort. Working with effort: diligent.",
    long: "「勤|きん」 has 「力|ちから」, power, on the right: working hard, as in 「通勤|つうきん」, commuting to work. 「勉|べん」 also has 「力」: effort. Two power kanji together: diligent, hard-working.",
    ja: "[彼|かれ]は[勤勉|きんべん|*]な[学生|がくせい]です。", en: "He is a diligent student." },
  "強い": {
    why: "「強|つよ」 has 「弓|ゆみ」, a bow, on the left. A bow that takes strength to pull: strong.",
    long: "「強|つよ」 has 「弓|ゆみ」, a bow, on the left. The bow radical also anchors 「引|ひ」, pull, a bow and its string, and 「弟|おとうと」, younger brother. A bow that takes strength to draw: strong. It's the 「強|きょう」 in 「勉強|べんきょう」, study.",
    ja: "[今日|きょう]は[風|かぜ]が[強|つよ|*]いです。", en: "The wind is strong today." },
  "強情な": {
    why: "「強|ごう」 is strong, and 「情|じょう」 is feeling. Feelings too strong to bend: obstinate.",
    long: "「強|ごう」 is the strong bow. 「情|じょう」 has the heart radical, 「忄|りっしんべん」, on the left: the standing form of 「心|こころ」. It marks feelings: 「慣|な」, get used to, 「性|せい」, nature. On the right is 「青|せい」, giving the sound. Strong feelings that won't bend: obstinate.",
    ja: "[弟|おとうと]は[強情|ごうじょう|*]です。", en: "My little brother is stubborn." },
  "強力な": {
    why: "「強|きょう」 is strong, and 「力|りょく」 is power. Strong power: powerful.",
    long: "「強|きょう」 is strong, the bow. 「力|りょく」 is power, a picture of an arm or a plow. Strong power: powerful. Careful: 「協力|きょうりょく」, cooperation, sounds the same but uses 「協|きょう」, many people's power together.",
    ja: "[強力|きょうりょく|*]なエンジンです。", en: "It's a powerful engine." },
  "有料": {
    why: "「有|ゆう」 is have, and 「料|りょう」 is fee. Has a fee: there's a charge.",
    long: "「有|ゆう」 is a hand holding meat: to have. 「料|りょう」 is 「米|こめ」, rice, beside a measuring dipper, 「斗|と」: a measured amount, a fee, materials. Has a fee: there's a charge. Its opposite is 「無料|むりょう」, free. 「料理|りょうり」, cooking, handling ingredients, uses the same 「料」.",
    ja: "この[駐車場|ちゅうしゃじょう]は[有料|ゆうりょう|*]です。", en: "This parking lot charges a fee." },
  "有る": {
    why: "「有|あ」 is a hand holding meat. To have, to exist. Usually written in kana.",
    long: "「有|あ」 is a hand reaching over 「月|つき」, which here means flesh, meat. A hand holding meat: to have, to exist. The meat radical looks just like the moon and shows up in body parts like 「腕|うで」, arm. In everyday writing this verb is usually in kana, 「ある」.",
    ja: "[時間|じかん]が[有|あ|*]ります。", en: "I have time." },
  "有能な": {
    why: "「有|ゆう」 is have, and 「能|のう」 is ability. Having ability: talented.",
    long: "「有|ゆう」 is a hand holding meat: to have. 「能|のう」 began as a picture of a bear, a strong, capable animal: ability. You may know Noh theater, 「能|のう」, the art of skill. Having ability: capable, talented.",
    ja: "[彼女|かのじょ]は[有能|ゆうのう|*]な[医者|いしゃ]です。", en: "She is a very capable doctor." },
  "旅行": {
    why: "「旅|りょ」 is a flag with people marching under it, a journey, and 「行|こう」 is go. Going on a journey: travel.",
    long: "「旅|りょ」 shows a flag on a pole on the left and people marching under it on the right: a group on a journey. The same flag starts 「族|ぞく」, a clan. 「行|こう」 began as a picture of a crossroads: to go. It's also the step radical, 「彳|ぎょうにんべん」, and its mirror. Going on a journey: travel.",
    ja: "[夏|なつ]に[旅行|りょこう|*]します。", en: "I'll travel in the summer." },
  "旅館": {
    why: "「旅|りょ」 is journey, and 「館|かん」 is building. A building for travelers: Japanese inn.",
    long: "「旅|りょ」 is people marching under a flag: journey. 「館|かん」 has the food radical, 「飠|しょくへん」: a guesthouse where travelers were fed. A building for travelers: a traditional Japanese inn, with tatami, futons, hot baths, and a big dinner served in your room.",
    ja: "[旅館|りょかん|*]に[泊|と]まりました。", en: "I stayed at a Japanese inn." },
  "一人旅": {
    why: "「一人|ひとり」, one person, plus 「旅|たび」, journey. A one-person journey: traveling alone.",
    long: "「一|ひと」 is one, a single line. 「人|り」 is a person walking. 「一人|ひとり」 is one person, a special reading. 「旅|たび」 is people under a flag on a journey. A one-person journey: traveling alone. Solo travel has become a trend in Japan, along with solo karaoke and solo dining.",
    ja: "[一人旅|ひとりたび|*]が[好|す]きです。", en: "I like traveling alone." },
  "旅券": {
    why: "「旅|りょ」 is journey, and 「券|けん」 is ticket. A travel ticket: passport.",
    long: "「旅|りょ」 is journey. 「券|けん」 has 「刀|かたな」, a knife, at the bottom: a tally cut in two to prove a deal, so a ticket. You'll see it in 「食券|しょっけん」, a meal ticket from a machine, and 「定期券|ていきけん」, a commuter pass. A travel ticket: passport, the formal word.",
    ja: "[旅券|りょけん|*]を[見|み]せてください。", en: "Please show your passport." },
  "昔": {
    why: "Picture 「昔|むかし」 as many days piled up over 「日|ひ」, the sun. Long ago.",
    long: "「昔|むかし」 has 「日|ひ」, the sun, at the bottom, with layered strokes on top. One old explanation is strips of meat drying in the sun, food stored from days gone by; another is floods of long ago. Either way: many days piled up, long ago. 「昔」 also gives its sound to 「借|しゃく」, borrow, a person beside 「昔」. Fairy tales start with 「昔々|むかしむかし」, once upon a time.",
    ja: "[昔|むかし|*]、ここに[川|かわ]がありました。", en: "Long ago, there was a river here." },
  "昔話": {
    why: "「昔|むかし」, long ago, plus 「話|はなし」, story. A story from long ago: folk tale.",
    long: "「昔|むかし」 is many days piled over the sun: long ago. 「話|はなし」 has the speech radical, 「言|ごんべん」, with a tongue: a story. A story from long ago: folk tale. Famous ones include Momotaro, the peach boy, and Urashima Taro, who visits a palace under the sea.",
    ja: "[祖母|そぼ]が[昔話|むかしばなし|*]をしてくれました。", en: "My grandmother told me a folk tale." },
  "大昔": {
    why: "「大|おお」, big, plus 「昔|むかし」, long ago. Very long ago: ancient times.",
    long: "「大|おお」 is a person stretched out wide: big. 「昔|むかし」 is days piled over the sun: long ago. Big long ago: ancient times, the age of dinosaurs or the first people. 「大」 boosts other words the same way: 「大好き|だいすき」, a big like, love.",
    ja: "[大昔|おおむかし|*]、ここは[海|うみ]でした。", en: "In ancient times, this was the sea." },
  "昔々": {
    why: "「昔|むかし」, long ago, written twice with the repeat mark. Long, long ago: once upon a time.",
    long: "「昔|むかし」 is long ago, and 「々」 is the repeat mark, which means say the last kanji again. Long ago, long ago: once upon a time, the opening of every Japanese folk tale. The repeat mark also makes 「時々|ときどき」, sometimes, and 「人々|ひとびと」, people.",
    ja: "[昔々|むかしむかし|*]、おじいさんがいました。", en: "Once upon a time, there was an old man." },
  "神さま": {
    why: "「神|かみ」 has the altar radical on the left and lightning on the right. The power at the altar: god. 「さま」 makes it very polite.",
    long: "「神|かみ」 has the altar radical, 「礻|しめすへん」, on the left: an offering table, a clue the kanji is about gods and worship. You'll find it in 「社|しゃ」, shrine, 「祈|いの」, pray, and 「礼|れい」, a bow. On the right is 「申|しん」, which began as a picture of lightning. The power of lightning at the altar: god. 「さま」 is the most polite title.",
    ja: "[神|かみ|*]さまにお[願|ねが]いしました。", en: "I prayed to God." },
  "神社": {
    why: "「神|じん」 is god, and 「社|じゃ」 is shrine. A shrine for the gods: Shinto shrine.",
    long: "「神|じん」 is the altar radical beside lightning: god. 「社|じゃ」 has the same altar radical, 「礻|しめすへん」, beside 「土|つち」, earth: an earth altar, a shrine. Later 「社|しゃ」 came to mean a group of people too, as in 「会社|かいしゃ」, company. A shrine for the gods: Shinto shrine, with its big red gate, the torii.",
    ja: "[神社|じんじゃ|*]に[行|い]きました。", en: "I went to a shrine." },
  "早い": {
    why: "「早|はや」 has the sun, 「日|ひ」, on top, just up. Early.",
    long: "「早|はや」 is often pictured as the sun, 「日|ひ」, rising over a post on the horizon. Just risen: early. Its sound twin 「速い|はやい」, fast, rides the road radical, because speed is about moving. Sun means time, road means motion. The on'yomi 「そう」 gives 「早朝|そうちょう」, early morning.",
    ja: "[父|ちち]は[朝|あさ]が[早|はや|*]いです。", en: "My father gets up early." },
  "早起きする": {
    why: "「早|はや」, early, plus 「起き|おき」, getting up. Getting up early.",
    long: "「早|はや」 is the sun just over the horizon: early. 「起|お」 has 「走|はし」, run, wrapping around the bottom, with 「己|おのれ」, self: getting yourself up and moving. Early plus get up: rising early. There's a saying that getting up early earns you three coins, like the early bird gets the worm.",
    ja: "[明日|あした]は[早起|はやお|*]きします。", en: "I'll get up early tomorrow." },
  "起きる": {
    why: "「起|お」 has 「走|はし」, run, wrapping around the bottom. Getting yourself up and moving: to get up.",
    long: "「起|お」 rides on the running radical, 「走|そうにょう」, which wraps around the bottom left. It marks kanji about moving your legs: 「走|はし」, run, and 「越|こ」, cross over, as in 「引っ越す|ひっこす」, move house. On the right is 「己|おのれ」, self. Getting yourself up and running: to get up.",
    ja: "[毎朝|まいあさ][七時|しちじ]に[起|お|*]きます。", en: "I get up at seven every morning." },
  "起こす": {
    why: "The same kanji, 「起|お」, getting up, as a doing verb: to make someone get up, to wake them.",
    long: "「起|お」 is the running radical with 「己|おのれ」, self: getting up. 「起きる|おきる」 is getting up yourself; 「起こす|おこす」 is making someone else get up, waking them. Japanese has lots of pairs like this, one where it happens and one where you do it to someone: 「開く|あく」, it opens, and 「開ける|あける」, you open it.",
    ja: "[六時|ろくじ]に[起|お|*]こしてください。", en: "Please wake me up at six." },
  "牛": {
    why: "「牛|うし」 is a picture of a cow's head, with a horn poking up through the top. Cow.",
    long: "「牛|うし」 is a picture of a cow's head from the front, with a horn poking up through the top line. Compare 「午|ご」, noon: no horn sticking up. Squeezed onto the left, the cow becomes a radical in 「物|もの」, thing, and 「特|とく」, special, a prized bull. The on'yomi 「ぎゅう」 gives 「牛乳|ぎゅうにゅう」, milk, and 「牛丼|ぎゅうどん」, a beef bowl.",
    ja: "[牛|うし|*]がいます。", en: "There's a cow." },
  "牛乳": {
    why: "「牛|ぎゅう」 is cow, and 「乳|にゅう」 is milk. Cow milk: milk.",
    long: "「牛|ぎゅう」 is the cow's head with a horn. 「乳|にゅう」 shows a hand over a child, 「子|こ」, a mother feeding a baby: milk. Cow milk: milk. Japanese school lunches always come with a little carton of 「牛乳|ぎゅうにゅう」.",
    ja: "[毎朝|まいあさ][牛乳|ぎゅうにゅう|*]を[飲|の]みます。", en: "I drink milk every morning." },
  "牛肉": {
    why: "「牛|ぎゅう」 is cow, and 「肉|にく」 is meat. Cow meat: beef.",
    long: "「牛|ぎゅう」 is the cow. 「肉|にく」 is a picture of a slab of meat with streaks of fat. Cow meat: beef. Swap the animal: 「豚肉|ぶたにく」, pork, and 「鳥肉|とりにく」, chicken. Japan is famous for wagyu, Japanese beef, like Kobe beef.",
    ja: "[牛肉|ぎゅうにく|*]を[買|か]いました。", en: "I bought beef." },
  "使う": {
    why: "「使|つか」 is a person beside an official. A person sent on business, put to use: to use.",
    long: "「使|つか」 has the person radical, 「亻|にんべん」, on the left. On the right is 「吏|り」, a government official. A person sent off on official business, a messenger. From someone you send, the meaning grew to put to use. 「大使|たいし」 is an ambassador, a big messenger, and 「大使館|たいしかん」 is an embassy.",
    ja: "このペンを[使|つか|*]ってもいいですか。", en: "May I use this pen?" },
  "働く": {
    why: "「働|はたら」 is a person, 「人|ひと」, beside 「動|どう」, move. A person moving: to work. This kanji was invented in Japan.",
    long: "「働|はたら」 is the person radical, 「亻|にんべん」, beside 「動|どう」, move. Here's a fun fact: this kanji was invented in Japan, not China. A person in motion: to work. 「動」 itself is 「重|おも」, heavy, plus 「力|ちから」, power: moving something heavy. The on'yomi 「どう」 gives 「労働|ろうどう」, labor.",
    ja: "[母|はは]は[銀行|ぎんこう]で[働|はたら|*]いています。", en: "My mother works at a bank." },
  "連れて帰る": {
    why: "「連|つ」 shows carts traveling together, so 「連れる|つれる」 is to take someone along. Plus 「帰る|かえる」, go home: to take someone home with you.",
    long: "「連|つ」 rides the road radical, 「辶|しんにょう」, with 「車|くるま」, a cart, on top: carts traveling in a line. Linked together: to take along. 「帰|かえ」 is a broom-holding wife coming home in old explanations: to return home. Take along plus go home: bring someone home with you. 「連休|れんきゅう」 is linked holidays, a long weekend.",
    ja: "[子供|こども]を[連れて帰|つれてかえ|*]りました。", en: "I brought my child home." },
  "別れる": {
    why: "「別|わか」 is bones beside a knife: separating meat from the bone. To separate, to part.",
    long: "「別|わか」 is bones on the left and the knife radical, 「刂|りっとう」, on the right: cutting meat from the bone. Separate. The knife radical shows up in 「前|まえ」, too, and in 「刷|す」, to print. Separating: to part, to break up. The on'yomi 「べつ」 gives 「特別|とくべつ」, special, set apart.",
    ja: "[駅|えき]で[友|とも]だちと[別|わか|*]れました。", en: "I parted from my friend at the station." },
  "別に": {
    why: "「別|べつ」 means separate, different. With 「に」: not particularly.",
    long: "「別|べつ」 is bones and a knife: separate, different. 「別に|べつに」 means separately, and with a negative, not particularly, nothing special. Careful: said alone as an answer, it can sound cold, like whatever. 「別々に|べつべつに」, separately, is what you say to split the bill.",
    ja: "[別に|べつに|*]、[何|なに]もありません。", en: "Nothing in particular." },
  "一度": {
    why: "「一|いち」 is one, and 「度|ど」 is times. One time: once.",
    long: "「一|いち」 is one. 「度|ど」 has the building radical, 「广|まだれ」, and inside, a hand: measuring with your hand span, the old way. A measure, a degree, and a time. One time: once. 「度」 also measures temperature: 「三十度|さんじゅうど」, thirty degrees. 「もう一度|もういちど」 is one more time.",
    ja: "[一度|いちど|*][日本|にほん]に[行|い]きたいです。", en: "I'd like to go to Japan once." },
  "今度": {
    why: "「今|こん」 is now, this, and 「度|ど」 is time. This time, or next time.",
    long: "「今|こん」 is now. 「度|ど」 is a measure, a time, a hand measuring under a roof. This time, or the next time, depending on context. 「今度の日曜日|こんどのにちようび」 is this coming Sunday. A soft invitation is 「今度いっしょに|こんどいっしょに」, let's do it together sometime.",
    ja: "[今度|こんど|*]いっしょに[行|い]きましょう。", en: "Let's go together next time." },
  "赤": {
    why: "「赤|あか」 came from 「大|だい」, big, over fire. A big fire: red.",
    long: "「赤|あか」 came from 「大|だい」, big, on top of 「火|ひ」, fire. A big fire blazing: red. Babies are 「赤ちゃん|あかちゃん」, the little red ones, for their rosy newborn skin. And 「赤字|あかじ」, red letters, means a deficit, because losses were written in red ink.",
    ja: "[赤|あか|*]が[好|す]きです。", en: "I like red." },
  "赤い": {
    why: "「赤|あか」, red, plus 「い」: the adjective, red.",
    long: "「赤|あか」 is a big fire: red. Add 「い」 for the adjective. In Japan, red and white together mean celebration, and the sun on the flag is red, which is why Japanese kids color the sun red, not yellow.",
    ja: "[赤|あか|*]いかばんを[買|か]いました。", en: "I bought a red bag." },
  "青": {
    why: "「青|あお」 has a young sprout on top. Fresh growing plants: blue, and sometimes green.",
    long: "「青|あお」 has a young sprout, from 「生|せい」, growing, on top, and below it a shape for a mineral pigment. Fresh growing plants: blue-green. In old Japanese 「青|あお」 covered both blue and green, so green traffic lights are called blue. 「青」 gives its sound せい to related kanji: 「晴|は」, sunny, sun plus blue, 「静|しず」, quiet, and 「清|きよ」, pure, with water.",
    ja: "[青|あお|*]の[服|ふく]を[着|き]ています。", en: "I'm wearing blue clothes." },
  "青い": {
    why: "「青|あお」 plus 「い」: the adjective, blue.",
    long: "「青|あお」 is a fresh sprout: blue-green. As an adjective, blue. Watch it inside 「晴|はれ」, sunny: the sun radical beside 「青」, a blue sky with the sun out. 「青空|あおぞら」 is a blue sky, and 「青春|せいしゅん」, green spring, means youth.",
    ja: "[空|そら]が[青|あお|*]いです。", en: "The sky is blue." },
  "色": {
    why: "「色|いろ」 is color. One way to picture it: a face changing color.",
    long: "「色|いろ」 is often pictured as two people, one above the other, with a face changing color. Color. The on'yomi 「しょく」 gives 「特色|とくしょく」, a distinctive feature, and 「しき」 gives 「景色|けしき」, scenery, the colors of a view. 「色々|いろいろ」 means various, all kinds of colors.",
    ja: "[好|す]きな[色|いろ|*]は[何|なん]ですか。", en: "What's your favorite color?" },
  "色々な": {
    why: "「色|いろ」, color, twice. Colors and colors: all kinds, various.",
    long: "「色|いろ」 is color, and 「々」 repeats it. Colors and colors: all kinds, various. Japanese uses doubling like this a lot: 「時々|ときどき」, times and times, sometimes, and 「人々|ひとびと」, people and people, people in general.",
    ja: "[色々|いろいろ|*]な[国|くに]に[行|い]きました。", en: "I've been to various countries." },
  "食べ物": {
    why: "「食|た」 is eat, and 「物|もの」 is thing. Things to eat: food.",
    long: "「食|た」 is a lid over a bowl of food: to eat. It becomes the food radical, 「飠|しょくへん」, on the left of 「飲|の」, drink, and 「飯|はん」, rice. 「物|もの」 has the cow radical, the farmer's most valuable thing: thing. Things to eat: food. The same pattern gives 「飲み物|のみもの」, things to drink.",
    ja: "[好|す]きな[食べ物|たべもの|*]は[何|なん]ですか。", en: "What's your favorite food?" },
  "飲み物": {
    why: "「飲|の」 is drink, with the food radical on the left, and 「物|もの」 is thing. Things to drink: drinks.",
    long: "「飲|の」 has the food radical, 「飠|しょくへん」, on the left and the open-mouth radical, 「欠|あくび」, on the right: a mouth opened wide for something to eat or drink. To drink. 「物|もの」 is thing. Things to drink: drinks. In Japanese you also drink medicine: 「薬を飲む|くすりをのむ」.",
    ja: "[飲み物|のみもの|*]は[何|なに]がいいですか。", en: "What would you like to drink?" },
  "物": {
    why: "「物|もの」 has a cow on the left, once the most valuable thing a farmer owned. Thing.",
    long: "「物|もの」 has the cow radical, 「牛|うしへん」, on the left. Cattle were a farmer's most valuable possession, so a cow stands for a thing you own. The right side gives the sound. Thing. It ends lots of words: 「食べ物|たべもの」, 「買い物|かいもの」, shopping, 「着物|きもの」, kimono, and 「荷物|にもつ」, luggage.",
    ja: "かわいい[物|もの|*]が[好|す]きです。", en: "I like cute things." },
  "鳥": {
    why: "「鳥|とり」 is a picture of a bird: the head on top, the body, and tail feathers as the four dots. Bird.",
    long: "「鳥|とり」 is a picture of a bird: the head with an eye on top, the body and wings in the middle, and four dots for the tail and feet. Put a mouth beside it and you get 「鳴|な」, a bird's cry. A different bird shape, 「隹|ふるとり」, a short-tailed bird, sits in 「集|あつ」, birds gathering on a tree. On menus, 「鳥|とり」 often means chicken: 「焼き鳥|やきとり」.",
    ja: "[木|き]の[上|うえ]に[鳥|とり|*]がいます。", en: "There's a bird in the tree." },
  "料理": {
    why: "「料|りょう」 is ingredients, rice measured with a dipper, and 「理|り」 is reason, order. Handling ingredients properly: cooking.",
    long: "「料|りょう」 is 「米|こめ」, rice, beside a measuring dipper, 「斗|と」: measuring out grain, so ingredients, and fees. 「理|り」 has the jade radical, 「王|おうへん」, on the left: polishing jade along its grain, following its natural pattern, so reason, order. Handling ingredients the right way: cooking. 「理」 also makes 「理由|りゆう」, reason.",
    ja: "[母|はは]の[料理|りょうり|*]はおいしいです。", en: "My mother's cooking is delicious." },
  "特に": {
    why: "「特|とく」 means special, once a bull picked from the herd. With 「に」: especially.",
    long: "「特|とく」 has the cow radical, 「牛|うしへん」, on the left, and 「寺|じ」, temple, on the right. The old meaning was a special bull, picked from the herd. Special. With 「に」: especially. 「特別|とくべつ」 is special, and 「特急|とっきゅう」 is a limited express train, specially fast.",
    ja: "[特|とく|*]にすしが[好|す]きです。", en: "I especially like sushi." },
  "安い": {
    why: "「安|やす」 is a woman under a roof, safe and at ease. Easy on the wallet: cheap.",
    long: "「安|やす」 is the roof radical, 「宀|うかんむり」, over 「女|おんな」, woman. The traditional explanation: a woman safe at home under her roof, at peace. Calm, safe, and easy on the wallet: cheap. The on'yomi 「あん」 gives 「安全|あんぜん」, safe, and 「安心|あんしん」, relieved, a heart at ease.",
    ja: "この[店|みせ]は[安|やす|*]いです。", en: "This shop is cheap." },
  "不安な": {
    why: "「不|ふ」 means not, and 「安|あん」 is at ease. Not at ease: anxious, worried.",
    long: "「不|ふ」 is a negative prefix, like un- or not; it's often explained as a bird flying up but not reaching the sky. 「安|あん」 is a woman safe under a roof: at ease. Not at ease: anxious, worried. 「不」 flips other words too: 「不便|ふべん」, inconvenient, and 「不景気|ふけいき」, a recession.",
    ja: "[試験|しけん]が[不安|ふあん|*]です。", en: "I'm worried about the exam." },
  "ご飯": {
    why: "「飯|はん」 has the food radical on the left. Cooked rice, and since rice was the center of every meal, a meal.",
    long: "「飯|はん」 has the food radical, 「飠|しょくへん」, on the left, and 「反|はん」 on the right giving the sound. Cooked rice. Rice was the center of every Japanese meal, so the word for rice became the word for a meal: 「朝ご飯|あさごはん」, 「昼ご飯|ひるごはん」, 「晩ご飯|ばんごはん」. The 「ご」 is polite.",
    ja: "[ご飯|ごはん|*]を[食|た]べましょう。", en: "Let's eat." },
  "朝ご飯": {
    why: "「朝|あさ」, morning, plus 「ご飯|ごはん」, meal. The morning meal: breakfast.",
    long: "「朝|あさ」 is the sun rising through grass while the moon is still out: morning. 「ご飯|ごはん」 is cooked rice, and a meal, with the food radical. Morning meal: breakfast. A traditional Japanese breakfast really is rice, miso soup, grilled fish, and pickles.",
    ja: "[朝ご飯|あさごはん|*]を[食|た]べましたか。", en: "Did you eat breakfast?" },
  "昼ご飯": {
    why: "「昼|ひる」, noon, plus 「ご飯|ごはん」, meal. The noon meal: lunch.",
    long: "「昼|ひる」 has the sun, 「日|ひ」, at the bottom, high above a line: daytime, noon. 「ご飯|ごはん」 is a meal. Noon meal: lunch. Many people eat a bento, a boxed lunch, and 「昼休み|ひるやすみ」 is the lunch break.",
    ja: "[昼ご飯|ひるごはん|*]を[食|た]べに[行|い]きましょう。", en: "Let's go get lunch." },
  "肉": {
    why: "「肉|にく」 is a picture of a slab of meat, with streaks of fat. Meat.",
    long: "「肉|にく」 is a picture of a slab of meat, with lines like streaks of fat inside. Squeezed onto the left of other kanji, meat turns into a shape that looks just like 「月|つき」, the moon, and marks body parts. That's why 「有|ゆう」, to have, is a hand holding meat. 「牛肉|ぎゅうにく」 is beef, and 「肉屋|にくや」 is a butcher.",
    ja: "[肉|にく|*]が[好|す]きです。", en: "I like meat." },
  "悪い": {
    why: "「悪|わる」 has 「心|こころ」, heart, at the bottom, weighed down. Bad.",
    long: "「悪|わる」 has 「心|こころ」, heart, at the bottom. The heart radical marks feelings and states of mind: 「思|おも」, think, 「意|い」, mind, 「急|いそ」, a racing heart, hurry. On top of 「悪」 is a cramped, crooked shape. A heart pressed down: bad. The on'yomi 「あく」 gives 「最悪|さいあく」, the worst.",
    ja: "[天気|てんき]が[悪|わる|*]いです。", en: "The weather is bad." },
  "気分が悪い": {
    why: "「気分|きぶん」 is your mood, how your spirit feels, and 「悪い|わるい」 is bad. Feeling bad: to feel sick.",
    long: "「気|き」 is steam rising: spirit, air. 「分|ぶん」 is a knife cutting something into parts: a portion. Your portion of spirit: your mood. 「悪|わる」 is a heart weighed down: bad. A bad mood, or more often, feeling sick. The opposite is 「気分がいい|きぶんがいい」, feeling good.",
    ja: "[気分が悪|きぶんがわる|*]いです。", en: "I feel sick." },
  "体": {
    why: "「体|からだ」 is a person beside 「本|ほん」, root, base. A person's base: body.",
    long: "「体|からだ」 has the person radical, 「亻|にんべん」, beside 「本|ほん」, root, base; 「本」 is a tree, 「木|き」, with a mark at its root. A person's base: body. It's simplified from an older kanji with bones in it. The on'yomi 「たい」 gives 「体重|たいじゅう」, body weight, and 「体育|たいいく」, P.E.",
    ja: "[体|からだ|*]に[気|き]をつけてください。", en: "Please take care of yourself." },
  "同じ": {
    why: "「同|おな」 shows one mouth under one cover: everyone saying the same thing. Same.",
    long: "「同|おな」 is often explained as one mouth, 「口|くち」, under one cover, with a line for unity: everyone saying the same thing. Same. The on'yomi 「どう」 gives 「同僚|どうりょう」, coworker, and 「同級生|どうきゅうせい」, classmate, same grade. 「同じ」 goes right before a noun: 「同じクラス|おなじクラス」.",
    ja: "[同|おな|*]じクラスです。", en: "We're in the same class." },
  "着く": {
    why: "「着|つ」 means to reach, to attach. To arrive.",
    long: "「着|つ」 is often taught as 「羊|ひつじ」, a sheep, on top of 「目|め」, eye. Its core meaning is to reach and attach. Arriving is reaching a place: to arrive. On train boards, 「着|ちゃく」 marks arrival times. The same kanji means to wear, because clothes attach to your body.",
    ja: "[駅|えき]に[着|つ|*]きました。", en: "I arrived at the station." },
  "着る": {
    why: "The same kanji, 「着|き」: clothes attaching to your body. To wear.",
    long: "「着|き」 is often taught as 「羊|ひつじ」, sheep, over 「目|め」, eye, though those shapes came together by accident. Its core meaning is attach: clothes attaching to you. To wear, for the upper body. Pants and shoes use 「はく」 instead. 「着物|きもの」 is a thing to wear, kimono, and 「水着|みずぎ」 is a swimsuit.",
    ja: "セーターを[着|き|*]ます。", en: "I'll put on a sweater." },
  "着物": {
    why: "「着|き」 is wear, and 「物|もの」 is thing. A thing to wear: kimono.",
    long: "「着|き」 is wear, clothes attaching to you. 「物|もの」 is thing, the cow radical. A thing to wear: kimono. Long ago it meant any clothes; once Western clothes, 「洋服|ようふく」, arrived, it came to mean traditional Japanese dress.",
    ja: "[着物|きもの|*]を[着|き]ました。", en: "I wore a kimono." },
  "水着": {
    why: "「水|みず」 is water, and 「着|ぎ」 is wear. Water wear: swimsuit.",
    long: "「水|みず」 is a picture of flowing water, a stream with splashes. Squeezed onto the left, it becomes three drops, the water radical, 「氵|さんずい」, in 「海|うみ」, 「泳|およ」, swim, and 「洗|あら」, wash. 「着|ぎ」 is wear. Water wear: swimsuit.",
    ja: "[新|あたら]しい[水着|みずぎ|*]を[買|か]いました。", en: "I bought a new swimsuit." },
  "空港": {
    why: "「空|くう」 is sky, and 「港|こう」 is harbor. A harbor for the sky: airport.",
    long: "「空|くう」 has 「穴|あな」, a hole, a hollow, on top. That hole radical, 「穴|あなかんむり」, marks hollow things: 「窓|まど」, a window, and 「究|きゅう」, digging to the bottom. A hollow: empty, and the empty sky. 「港|こう」 has the water radical, 「氵|さんずい」, beside a lane: water lanes for boats, a harbor. A harbor for the sky: airport.",
    ja: "[空港|くうこう|*]まで[電車|でんしゃ]で[行|い]きます。", en: "I'll go to the airport by train." },
  "昼": {
    why: "「昼|ひる」 has the sun, 「日|ひ」, at the bottom. The sun up high: noon, daytime.",
    long: "「昼|ひる」 is often pictured as the sun, 「日|ひ」, sitting high over a line, the horizon: broad daylight. Noon, daytime. Don't confuse it with 「午|ご」, noon on the clock. 「昼」 is the bright part of the day: 「昼ご飯|ひるごはん」, lunch, 「昼休み|ひるやすみ」, lunch break, 「昼寝|ひるね」, a nap.",
    ja: "[昼|ひる|*]はあついです。", en: "It's hot during the day." },
  "海": {
    why: "「海|うみ」 has the water radical, three drops, beside 「毎|まい」, every. Where every drop of water ends up: sea.",
    long: "「海|うみ」 has the water radical, 「氵|さんずい」, three drops on the left. Whenever you see those drops, think water: 「池|いけ」, pond, 「泳|およ」, swim, 「湖|みずうみ」, lake. On the right is 「毎|まい」, every. Every drop of water ends up here: the sea. 「海外|かいがい」, outside the sea, means overseas.",
    ja: "[夏|なつ]に[海|うみ|*]へ[行|い]きました。", en: "I went to the sea in summer." },
  "彼": {
    why: "「彼|かれ」 has the step radical, someone walking over there. That one: he, or boyfriend.",
    long: "「彼|かれ」 has the step radical, 「彳|ぎょうにんべん」, someone walking, and 「皮|ひ」, skin, giving the sound. That one walking over there: he. It also means boyfriend. 「彼女|かのじょ」 is she, or girlfriend, and 「彼氏|かれし」 clearly means boyfriend.",
    ja: "[彼|かれ|*]は[学生|がくせい]です。", en: "He is a student." },
  "彼女": {
    why: "「彼|かの」 is that, and 「女|じょ」 is woman. That woman: she, or girlfriend.",
    long: "「彼|かの」 is that one over there, with the step radical. 「女|じょ」 is a picture of a woman. That woman: she, or girlfriend. The word was put to use for she in the late eighteen hundreds when translating European books, because Japanese didn't have a common word for she.",
    ja: "[彼女|かのじょ|*]はやさしいです。", en: "She is kind." },
  "時代": {
    why: "「時|じ」 is time, and 「代|だい」 is generation, era. A span of time: era.",
    long: "「時|じ」 is time, with the sun radical. 「代|だい」 is a person beside a stake, someone stepping in to replace another: replace, a generation. A span of time when one generation lives: an era. Samurai period dramas are called 「時代劇|じだいげき」, era plays.",
    ja: "[学生|がくせい][時代|じだい|*]は[楽|たの]しかったです。", en: "My student days were fun." },
  "留学生": {
    why: "「留|りゅう」 is stay, 「学|がく」 is study, and 「生|せい」 is student. A student staying abroad to study: international student.",
    long: "「留|りゅう」 has 「田|た」, a field, at the bottom: staying put on your land, to stay. 「学|がく」 is a child under a roof, learning. 「生|せい」 is a sprout, a person growing, a student. A student staying abroad to learn: international student. 「留」 also makes 「留守|るす」, being away from home.",
    ja: "[私|わたし]は[留学生|りゅうがくせい|*]です。", en: "I'm an international student." },
  "留学する": {
    why: "「留|りゅう」 is stay, and 「学|がく」 is study. Staying somewhere to study: to study abroad.",
    long: "「留|りゅう」 is to stay, with 「田|た」, a field, at the bottom. 「学|がく」 has 「子|こ」, child, under a roof, with hands above: learning. Staying somewhere to learn: to study abroad. 「子」 at the bottom of 「学」 also anchors 「字|じ」, letter, a child under a roof.",
    ja: "[日本|にほん]に[留学|りゅうがく|*]したいです。", en: "I want to study abroad in Japan." },
  "父親": {
    why: "「父|ちち」 is father, and 「親|おや」 is parent. The father parent: father.",
    long: "「父|ちち」 is a picture of a hand holding a tool or a stick, the one in charge: father. 「親|おや」 is standing on a tree, watching: parent. Father parent: father. Swap in 「母|はは」, a woman, for 「母親|ははおや」, mother.",
    ja: "[父親|ちちおや|*]は[医者|いしゃ]です。", en: "My father is a doctor." },
  "親切な": {
    why: "「親|しん」 means close, intimate, and 「切|せつ」 means keen, heartfelt. Close, heartfelt care: kind.",
    long: "「親|しん」 is 「立|た」, stand, on 「木|き」, tree, beside 「見|み」, see: a parent watching over a child, so close, intimate. 「切|せつ」 is 「七|しち」 and a knife, 「刀|かたな」: cutting. In this word it means keen, felt deeply, cutting to the heart. Close and heartfelt care: kind.",
    ja: "[彼|かれ]はとても[親切|しんせつ|*]です。", en: "He is very kind." },
  "切る": {
    why: "「切|き」 has 「刀|かたな」, a blade, on the right. To cut.",
    long: "「切|き」 has 「刀|かたな」, a blade, on the right. The knife radical appears in two shapes: 「刀」, as here, and 「刂|りっとう」, the two strokes on the right of 「別|べつ」, separate, and 「前|まえ」. The left side, 「七|しち」, began as a cut mark. To cut. 「切符|きっぷ」, a ticket, and 「切手|きって」, a stamp, used to be cut from paper.",
    ja: "[野菜|やさい]を[切|き|*]ります。", en: "I cut vegetables." },
  "英語": {
    why: "「英|えい」 stands for England, and 「語|ご」 is language. England's language: English.",
    long: "「英|えい」 has the grass radical, 「艹|くさかんむり」, on top, the plant marker in 「花|はな」, flower, 「茶|ちゃ」, tea, and 「薬|くすり」, medicine. Underneath is 「央|おう」, center: the flower at the center, the finest part, excellent. It was later used to spell England. 「語|ご」 has the speech radical: language. England's language: English.",
    ja: "[英語|えいご|*]を[教|おし]えています。", en: "I teach English." },
  "店": {
    why: "「店|みせ」 is a building radical over 「占|せん」, to occupy. A building occupying a spot on the street: shop.",
    long: "「店|みせ」 has the building radical, 「广|まだれ」, a roof with one wall. It marks buildings and rooms: 「広|ひろ」, wide, 「度|ど」, 「座|すわ」, sit. Inside is 「占|せん」, to occupy. A building that occupies a spot on the street: shop. The on'yomi 「てん」 gives 「店員|てんいん」, clerk, and 「書店|しょてん」, bookstore.",
    ja: "あの[店|みせ|*]は[安|やす]いです。", en: "That shop is cheap." },
  "去年": {
    why: "「去|きょ」 is to leave, go away, and 「年|ねん」 is year. The year that has gone: last year.",
    long: "「去|きょ」 is often pictured as a person walking away from a spot on the ground: to leave, to go away. 「年|ねん」 is a person carrying the yearly harvest: year. The year that has gone: last year. 「過去|かこ」 is the past.",
    ja: "[去年|きょねん|*][日本|にほん]に[行|い]きました。", en: "I went to Japan last year." },
  "急に": {
    why: "「急|きゅう」 has 「心|こころ」, heart, at the bottom: a racing heart, hurry, sudden. With 「に」: suddenly.",
    long: "「急|きゅう」 has 「心|こころ」, heart, at the bottom, under a shape for something rushing. A racing heart: hurry, and sudden. With 「に」: suddenly. 「急行|きゅうこう」 is an express train, and 「特急|とっきゅう」 a limited express.",
    ja: "[急|きゅう|*]に[雨|あめ]が[降|ふ]りました。", en: "It suddenly started raining." },
  "急ぐ": {
    why: "「急|いそ」, the racing heart: to hurry.",
    long: "「急|いそ」 is a heart racing at the bottom of the kanji: to hurry. You'll hear 「急いで|いそいで」, hurry up, and its kind opposite, 「ゆっくり」, slowly. The heart at the bottom also shows up in 「思|おも」, think, and 「意|い」, mind.",
    ja: "[急|いそ|*]いでください。", en: "Please hurry." },
  "乗る": {
    why: "Picture 「乗|の」 as a person up on top of a tree. Riding up high: to ride.",
    long: "「乗|の」 is often pictured as a person climbing up on top of a tree. Riding up high: to ride, to get on. The vehicle takes 「に」: 「電車に乗る|でんしゃにのる」. Its opposite, getting off, is 「降りる|おりる」, with the hill radical, coming down a slope.",
    ja: "[電車|でんしゃ]に[乗|の|*]ります。", en: "I'll get on the train." },
  "本当に": {
    why: "「本|ほん」 is the root, the real thing, and 「当|とう」 is to hit the mark. The real thing, right on target: truly, really.",
    long: "「本|ほん」 is 「木|き」, a tree, with a mark at its root: the root, origin, the real thing. That's why 「日本|にほん」 is the sun's origin. 「当|とう」 means to hit the mark, to be right; it's simplified from an older kanji. The real thing, right on target: truly, really. Casually, people say 「ほんと」.",
    ja: "[本当|ほんとう|*]にありがとうございます。", en: "Thank you so much, really." },
  "音楽": {
    why: "「音|おん」 is sound, and 「楽|がく」 is music, pleasure. Pleasant sound: music.",
    long: "「音|おん」 grew out of 「言|げん」, to say, with an extra mark in the mouth: a sound coming out. 「楽|がく」 began as a drum on a wooden stand, 「木|き」, with strings or bells: music, and the pleasure it brings. Pleasant sound: music. Put a heart under 「音」 and you get 「意|い」, mind, the sound of your heart.",
    ja: "[音楽|おんがく|*]を[聞|き]きます。", en: "I listen to music." },
  "楽しい": {
    why: "「楽|たの」 began as a drum on a wooden stand. Music and pleasure: fun.",
    long: "「楽|たの」 began as a musical instrument, a drum on a wooden stand, 「木|き」. Music brings pleasure, so it means fun. With another reading, 「楽|らく」, it means easy, comfortable. And 「音楽|おんがく」 is music. One kanji: music, fun, and ease.",
    ja: "パーティーは[楽|たの|*]しかったです。", en: "The party was fun." },
  "医者": {
    why: "「医|い」 is an arrow in a box, healing arrow wounds: medicine. 「者|しゃ」 is person. Medicine person: doctor.",
    long: "「医|い」 is 「矢|や」, an arrow, inside a box: a quiver. The old meaning was healing arrow wounds. Medicine. 「者|しゃ」 is a person. The medicine person: doctor. 「歯医者|はいしゃ」 is a tooth doctor, a dentist. You call your doctor 「先生|せんせい」, just like a teacher.",
    ja: "[医者|いしゃ|*]になりたいです。", en: "I want to become a doctor." },
  "死ぬ": {
    why: "「死|し」 is bones beside a kneeling person. To die.",
    long: "「死|し」 has a radical for bones, 「歹|がつへん」, on the left, and a kneeling person on the right. Bones beside a person: death. The bones radical also sits in 「残|ざん」, remain, as in 「残念|ざんねん」, too bad. 「死ぬ|しぬ」 is the only common verb ending in 「ぬ」. Because 「四|し」 sounds like 「死」, many buildings skip room four.",
    ja: "[金魚|きんぎょ]が[死|し|*]にました。", en: "The goldfish died." },
  "意味": {
    why: "「意|い」 is mind, 「音|おと」, sound, over 「心|こころ」, heart. 「味|み」 is flavor. The flavor of what's in mind: meaning.",
    long: "「意|い」 is 「音|おと」, sound, over 「心|こころ」, heart: the sound of your heart, what's on your mind. 「味|み」 has the mouth radical, 「口|くちへん」, beside 「未|み」, not yet: tasting something new. Flavor. The flavor of what's in your mind: meaning. 「趣味|しゅみ」, a hobby, is what you have a taste for.",
    ja: "この[言葉|ことば]の[意味|いみ|*]は[何|なん]ですか。", en: "What does this word mean?" },
  "注意する": {
    why: "「注|ちゅう」 is to pour, and 「意|い」 is mind. Pouring your mind into something: to pay attention, watch out.",
    long: "「注|ちゅう」 has the water radical, 「氵|さんずい」, beside 「主|しゅ」, a lamp with a steady flame. Pouring water onto one spot: to pour, to focus. 「主」 gives a family of sounds: 「注|ちゅう」, 「住|じゅう」, live, and 「柱|ちゅう」, pillar. 「意|い」 is mind. Pouring your mind onto something: to pay attention, watch out.",
    ja: "[車|くるま]に[注意|ちゅうい|*]してください。", en: "Please watch out for cars." },
  "夏": {
    why: "「夏|なつ」 is summer. One way to picture it: someone dancing at a summer festival.",
    long: "「夏|なつ」 is debated in origin. A way to picture it: a person with a big head on top and dancing feet at the bottom, dancing at a summer festival. Summer. The on'yomi 「か」 shows up in 「春夏秋冬|しゅんかしゅうとう」, the four seasons. 「夏休み|なつやすみ」 is summer vacation.",
    ja: "[夏|なつ|*]は[暑|あつ]いです。", en: "Summer is hot." },
  "夏休み": {
    why: "「夏|なつ」, summer, plus 「休み|やすみ」, rest. Summer rest: summer vacation.",
    long: "「夏|なつ」 is summer, the dancer at the festival. 「休|やす」 is the person radical, 「亻|にんべん」, leaning against 「木|き」, a tree: resting. Summer rest: summer vacation. Japanese kids still get homework over summer break, including a diary and a free research project.",
    ja: "[夏休み|なつやすみ|*]に[旅行|りょこう]します。", en: "I'll travel during summer vacation." },
  "魚": {
    why: "「魚|さかな」 is a picture of a fish standing on its nose; the four dots are its tail. Fish.",
    long: "「魚|さかな」 is a picture of a fish standing on its nose: the head on top, a scaly body, and four dots at the bottom that were once tail fins. Those dots look like the fire dots, but here they're a tail. As a radical on the left, it marks kinds of fish, and sushi teacups are often covered in them. 「金魚|きんぎょ」 is a goldfish.",
    ja: "[魚|さかな|*]が[好|す]きです。", en: "I like fish." },
  "お寺": {
    why: "「寺|てら」 is a Buddhist temple. It began as a government office, where the first monks in China were housed. 「お」 makes it polite.",
    long: "「寺|てら」 is 「土|つち」, earth, over 「寸|すん」, a hand. It first meant a government office; the first Buddhist monks in China were housed in one, and it came to mean temple. 「寺」 lends its sound to many kanji: 「時|じ」, time, 「持|じ」, hold, 「待|たい」, wait, and 「特|とく」, special. 「お」 makes it polite.",
    ja: "[京都|きょうと]でお[寺|てら|*]を[見|み]ました。", en: "I saw temples in Kyoto." },
  "広い": {
    why: "「広|ひろ」 is a building radical with plenty of room inside. Wide, spacious.",
    long: "「広|ひろ」 has the building radical, 「广|まだれ」, a roof with one wall, and a small shape inside, plenty of room. Wide, spacious, for rooms and roads. The on'yomi 「こう」 gives 「広告|こうこく」, an advertisement, spread wide. And 「広島|ひろしま」 is wide island, Hiroshima.",
    ja: "この[部屋|へや]は[広|ひろ|*]いです。", en: "This room is spacious." },
  "足": {
    why: "「足|あし」 is a picture: the knee on top, the foot below. Foot, leg.",
    long: "「足|あし」 is a picture: a box for the knee on top, and a foot below. Leg and foot. Squeezed onto the left, it becomes the foot radical, 「足|あしへん」, in 「踊|おど」, dance, feet moving to music. It also means enough, 「足りる|たりる」, and adding, 「足す|たす」.",
    ja: "[足|あし|*]が[痛|いた]いです。", en: "My foot hurts." },
  "足りる": {
    why: "The same kanji, 「足|た」, which also means to add up. Adding up to enough: to be sufficient.",
    long: "「足|た」 is the knee-and-foot kanji, but it also means to add up, to be enough. A way to hold onto it: your own two feet are enough to get you there. 「足りない|たりない」, not enough, is the form you'll hear most. 「足す|たす」 is to add, as in math.",
    ja: "お[金|かね]が[足|た|*]りません。", en: "I don't have enough money." },
  "運転する": {
    why: "「運|うん」 is to carry, transport, and 「転|てん」 is to turn, roll. Moving by turning the wheels: to drive.",
    long: "「運|うん」 rides the road radical, 「辶|しんにょう」, with 「軍|ぐん」, an army, on top: an army moving its supplies, to transport. It also means luck, fortune that carries you. 「転|てん」 has 「車|くるま」, cart, on the left: wheels turning. Moving by turning the wheels: to drive.",
    ja: "[車|くるま]を[運転|うんてん|*]します。", en: "I drive a car." },
  "借りる": {
    why: "「借|か」 is a person beside 「昔|むかし」, long ago, which gives the sound. To borrow.",
    long: "「借|か」 has the person radical, 「亻|にんべん」, beside 「昔|むかし」, long ago, which gives the sound しゃく. A hook: something you got from a person a while ago and still haven't returned. To borrow. Its opposite, 「貸す|かす」, to lend, has the money shell, 「貝|かい」, at the bottom.",
    ja: "[本|ほん]を[借|か|*]りました。", en: "I borrowed a book." },
  "走る": {
    why: "「走|はし」 is a person swinging their arms over a foot. To run.",
    long: "「走|はし」 is a picture: on top, a person swinging their arms, from 「大|だい」, and below, 「止|し」, a foot. Running at full speed. Wrapped around other kanji, it becomes the running radical, 「走|そうにょう」, in 「起|お」, get up, and 「越|こ」, cross over.",
    ja: "[公園|こうえん]を[走|はし|*]ります。", en: "I run in the park." },
  "場所": {
    why: "「場|ば」 is place, ground, and 「所|しょ」 is place. Location.",
    long: "「場|ば」 has the earth radical, 「土|つちへん」, on the left: ground. On the right is the sun rising over the ground. Open, sunny ground: a place. The earth radical also sits in 「地|ち」, land, and 「坂|さか」, slope. 「所|しょ」 is a door and an axe: place. Two place kanji: location.",
    ja: "[会|あ]う[場所|ばしょ|*]はどこですか。", en: "Where's the place we're meeting?" },
  "建物": {
    why: "「建|たて」 is build, and 「物|もの」 is thing. A built thing: building.",
    long: "「建|たて」 has a hand holding a brush on the right, the same brush as in 「書|か」, write, and on the left a long stride, 「廴|えんにょう」. Drawing up plans and striding out the site: to build. 「物|もの」 is thing. A built thing: building.",
    ja: "あの[建物|たてもの|*]は[古|ふる]いです。", en: "That building is old." },
  "地下": {
    why: "「地|ち」 is ground, and 「下|か」 is below. Below the ground: underground.",
    long: "「地|ち」 has the earth radical, 「土|つちへん」: ground, land. 「下|か」 is a line with a mark below it: below. Its opposite, 「上|うえ」, has the mark above. Below the ground: underground. 「地下鉄|ちかてつ」, underground iron, is the subway.",
    ja: "[地下|ちか|*]にレストランがあります。", en: "There's a restaurant underground." },
  "地図": {
    why: "「地|ち」 is land, and 「図|ず」 is drawing. A drawing of the land: map.",
    long: "「地|ち」 is earth radical: land, ground. 「図|ず」 is a frame, 「囗|くにがまえ」, with a drawing inside: a diagram, a plan. A drawing of the land: map. The same 「地」 makes 「地震|じしん」, an earthquake, the ground shaking.",
    ja: "[地図|ちず|*]を[見|み]せてください。", en: "Please show me the map." },
  "通る": {
    why: "「通|とお」 has the road radical. Passing along the road: to go through.",
    long: "「通|とお」 rides the road radical, 「辶|しんにょう」. On top is 「甬|よう」, a passage, a tube that things travel through. Moving along a passage: to pass through. With 「かよ」, 「通う|かよう」 means to commute. 「通学|つうがく」 is commuting to school.",
    ja: "この[道|みち]を[通|とお|*]ります。", en: "I'll go along this road." },
  "子供": {
    why: "「子|こ」 is a picture of a baby, and 「供|ども」 was once a plural ending. Children, and now any child.",
    long: "「子|こ」 is a picture of a baby with a big head and arms out, legs wrapped in a blanket. It shows up at the bottom of 「学|がく」, a child learning under a roof, and 「字|じ」, letter. 「供|ども」 has the person radical, 「亻|にんべん」, beside 「共|きょう」, together, which gives the sound. It was once a plural ending, so the word meant children; now it means any child. 「子供の日|こどものひ」, Children's Day, is May fifth.",
    ja: "[子供|こども|*]が[公園|こうえん]で[遊|あそ]んでいます。", en: "Children are playing in the park." },
  "世界": {
    why: "「世|せ」 is the world, a generation, and 「界|かい」 is a boundary, a field with a border. Everything within the borders: the world.",
    long: "「世|せ」 began as three tens joined together, thirty years, the span of one generation. It means generation, and the world of people. 「界|かい」 has 「田|た」, a field, on top and 「介|かい」, between, below: the border between fields, a boundary. Everything within the boundaries: the world. 「界」 also ends 「業界|ぎょうかい」, an industry, the world of a business.",
    ja: "[世界|せかい|*]を[旅行|りょこう]したいです。", en: "I want to travel the world." },
  "世話": {
    why: "「世|せ」 is world, and 「話|わ」 is talk. Looking after someone's world: care.",
    long: "「世|せ」 is the world, a generation of people. 「話|わ」 is the speech radical with a tongue: talk. The world's talk, in the sense of everyday dealings with people: looking after someone. You'll hear 「お世話になりました|おせわになりました」, thank you for taking care of me, when you leave a job or a host family.",
    ja: "[犬|いぬ]の[世話|せわ|*]をします。", en: "I take care of the dog." },
  "全部": {
    why: "「全|ぜん」 is all, whole, and 「部|ぶ」 is part. Every part: all of it.",
    long: "「全|ぜん」 is often pictured as a roof over 「王|おう」, a king, or a piece of jade kept safe and whole: complete, all. 「部|ぶ」 has the village radical, 「阝|おおざと」, on the right; it marks places and districts, as in 「都|と」, capital. A division of land: a part, a section. All the parts: all of it. 「部」 also gives 「部屋|へや」, room, and 「部長|ぶちょう」, department head.",
    ja: "[全部|ぜんぶ|*][食|た]べました。", en: "I ate all of it." },
  "安全": {
    why: "「安|あん」 is at ease, and 「全|ぜん」 is whole. Safe and whole: safety.",
    long: "「安|あん」 is the roof radical, 「宀|うかんむり」, over 「女|おんな」, a woman safe at home: at ease. 「全|ぜん」 is something kept whole and complete. Safe and whole: safety. You'll see 「安全第一|あんぜんだいいち」, safety first, at every Japanese construction site.",
    ja: "[日本|にほん]は[安全|あんぜん|*]です。", en: "Japan is safe." },
  "全国": {
    why: "「全|ぜん」 is whole, and 「国|こく」 is country. The whole country: nationwide.",
    long: "「全|ぜん」 is whole, complete. 「国|こく」 has the enclosure radical, 「囗|くにがまえ」, a border, with 「玉|たま」, a jewel, inside: a precious land within borders, a country. The whole country: nationwide. TV shows love 「全国で有名|ぜんこくでゆうめい」, famous nationwide.",
    ja: "[全国|ぜんこく|*]で[有名|ゆうめい]です。", en: "It's famous all over the country." },
  "部屋": {
    why: "「部|へ」 is part, section, and 「屋|や」 is house, building. A section of the building: room. A special reading.",
    long: "「部|へ」 is a section, with the village radical, 「阝|おおざと」, on the right. 「屋|や」 has 「尸|しかばね」, a shape for a roof or a body lying down, over 「至|し」, to arrive: a place you come to rest, a house, a shop. A section of the house: room. The reading 「へや」 is special. 「屋|や」 alone ends shop words: 「本屋|ほんや」, 「花屋|はなや」, florist.",
    ja: "[部屋|へや|*]をそうじしました。", en: "I cleaned my room." },
  "始まる": {
    why: "「始|はじ」 is to begin, with 「女|おんな」, woman, on the left. Something begins, by itself.",
    long: "「始|はじ」 has the woman radical, 「女|おんなへん」, on the left and 「台|たい」 on the right. One explanation is a woman carrying a baby, the very start of a life. Beginning. 「始まる|はじまる」 is when something begins on its own: class starts. 「始める|はじめる」 is starting something yourself. The polite greeting 「はじめまして」 means for the first time.",
    ja: "[授業|じゅぎょう]が[始|はじ|*]まります。", en: "Class is starting." },
  "始める": {
    why: "The same kanji, 「始|はじ」: to begin something yourself.",
    long: "The same woman-and-baby kanji, 「始|はじ」: beginning. This version is the doing verb: you begin something, so it takes 「を」: 「勉強を始める|べんきょうをはじめる」, start studying. The pair works like 「開く|あく」 and 「開ける|あける」: it opens, you open it.",
    ja: "[日本語|にほんご]の[勉強|べんきょう]を[始|はじ|*]めました。", en: "I started studying Japanese." },
  "毎週": {
    why: "「毎|まい」 is every, and 「週|しゅう」 is week. Every week.",
    long: "「毎|まい」 is a woman with an ornament in her hair, said to be a mother, someone who's there every day. Every. 「週|しゅう」 rides the road radical with 「周|しゅう」, a full lap around: week. Every week. 「毎」 also sits beside water in 「海|うみ」, the sea.",
    ja: "[毎週|まいしゅう|*]テニスをします。", en: "I play tennis every week." },
  "先週": {
    why: "「先|せん」 is before, ahead, and 「週|しゅう」 is week. The week before: last week.",
    long: "「先|せん」 is a foot on top of 「儿|ひとあし」, a pair of legs: a person stepping out ahead. Ahead, before. 「先生|せんせい」 is someone born before you, and 「先週|せんしゅう」 is the week before: last week. The same legs hold up 「見|み」, see, and 「兄|あに」, older brother.",
    ja: "[先週|せんしゅう|*][映画|えいが]を[見|み]ました。", en: "I saw a movie last week." },
  "考える": {
    why: "「考|かんが」 came from a picture of an old person with a cane. A wise elder deep in thought: to think.",
    long: "「考|かんが」 came from 「老|ろう」, old: an old person with long hair, leaning on a cane. Wise elders think things through, so the bent shape at the bottom became to think, to consider. 「参考|さんこう」 is a reference, something to think with. Compare 「思う|おもう」, with the heart radical, more like to feel or believe.",
    ja: "[将来|しょうらい]について[考|かんが|*]えています。", en: "I'm thinking about my future." },
  "開ける": {
    why: "「開|あ」 is 「門|もん」, a gate, with hands lifting away the bar. Opening the gate: to open.",
    long: "「開|あ」 is the gate, 「門|もんがまえ」, with hands below lifting away the bar. Opening the gate: to open. Its opposite, 「閉|し」, closed, has a bar stuck in the gate. The gate radical frames 「間|あいだ」, between, sunlight through the gap, and 「聞|き」, an ear at the gate, listening. 「開く|あく」 is when something opens by itself.",
    ja: "[窓|まど]を[開|あ|*]けてください。", en: "Please open the window." },
  "本屋": {
    why: "「本|ほん」 is book, and 「屋|や」 is shop. Book shop: bookstore.",
    long: "「本|ほん」 is a tree, 「木|き」, with a mark at its root: the root, the origin, and a book. 「屋|や」 is a building, a shop. Book shop: bookstore. Japanese bookstores often wrap your book in a paper cover for free. 「屋|や」 makes lots of shop words: 「花屋|はなや」, florist, and 「パン屋|パンや」, bakery.",
    ja: "[本屋|ほんや|*]で[雑誌|ざっし]を[買|か]いました。", en: "I bought a magazine at the bookstore." },
  "味方": {
    why: "「味|み」 is taste, flavor, and 「方|かた」 is side. The side you share a taste with: ally.",
    long: "「味|み」 has the mouth radical, 「口|くちへん」, on the left: taste, flavor. 「方|かた」 began as a picture of a plow, or two boats tied together side by side. It means a direction, a side. The side that shares your taste: an ally, someone on your side. Its opposite is 「敵|てき」, an enemy.",
    ja: "[私|わたし]はあなたの[味方|みかた|*]です。", en: "I'm on your side." },
  "運動": {
    why: "「運|うん」 is carry, move, and 「動|どう」 is move. Moving your body: exercise.",
    long: "「運|うん」 rides the road radical, 「辶|しんにょう」, with an army, 「軍|ぐん」, on top: moving supplies, transport, and luck that carries you. 「動|どう」 is 「重|おも」, heavy, beside 「力|ちから」, power: moving something heavy. Moving your body: exercise. 「運動会|うんどうかい」 is a school sports day.",
    ja: "[毎日|まいにち][運動|うんどう|*]しています。", en: "I exercise every day." },
  "運転": {
    why: "「運|うん」 is move, and 「転|てん」 is turn. Moving by turning the wheels: driving.",
    long: "「運|うん」 is the road radical with an army on top: moving, transporting. 「転|てん」 has the cart radical, 「車|くるまへん」, on the left: wheels turning. Moving by turning the wheels: driving. 「運転手|うんてんしゅ」 is a driver, a driving hand.",
    ja: "[運転|うんてん|*]が[上手|じょうず]です。", en: "He's a good driver." },
  "教える": {
    why: "「教|おし」 shows a hand with a stick, teaching a child. To teach.",
    long: "「教|おし」 has a child, 「子|こ」, at the bottom left, under a shape for learning, and on the right, a hand holding a stick, 「攵|ぼくづくり」. A teacher with a pointer standing over a child: to teach. It also means to tell, like telling someone your phone number. 「教室|きょうしつ」 is a classroom, and 「教科書|きょうかしょ」 is a textbook.",
    ja: "[英語|えいご]を[教|おし|*]えています。", en: "I teach English." },
  "教室": {
    why: "「教|きょう」 is teach, and 「室|しつ」 is room. A teaching room: classroom.",
    long: "「教|きょう」 is a hand with a stick over a child: teach. 「室|しつ」 has the roof radical, 「宀|うかんむり」, over 「至|し」, to arrive: the place you come to under a roof, a room. A teaching room: classroom. 「室」 also makes 「和室|わしつ」, a Japanese-style tatami room.",
    ja: "[教室|きょうしつ|*]に[学生|がくせい]がいます。", en: "There are students in the classroom." },
  "以外": {
    why: "「以|い」 marks a point of reference, and 「外|がい」 is outside. Outside of that: other than.",
    long: "「以|い」 began as a picture of a plow or a tool, used as a marker meaning from this point, by means of. It's in 「以上|いじょう」, more than, and 「以下|いか」, less than. 「外|がい」 is 「夕|ゆう」, evening, beside 「卜|ぼく」, a crack used for fortune-telling: fortunes read outside the normal daytime. Outside. Outside of that: other than.",
    ja: "[肉|にく][以外|いがい|*]は[何|なん]でも[食|た]べます。", en: "I eat anything other than meat." },
  "分野": {
    why: "「分|ぶん」 is divide, part, and 「野|や」 is field. A divided-off field: area of study.",
    long: "「分|ぶん」 is 「八|はち」, split apart, over 「刀|かたな」, a knife: dividing into parts. 「野|や」 has 「里|さと」, a village with its fields, on the left. The open land past the village: a field. A divided-off field: an area of study, a realm. 「野球|やきゅう」, field ball, is baseball, and 「野菜|やさい」, field greens, are vegetables.",
    ja: "[好|す]きな[分野|ぶんや|*]は[何|なん]ですか。", en: "What field do you like?" },
  "小野さん": {
    why: "「小|お」 is small, and 「野|の」 is field. Small field: Ono, a family name.",
    long: "「小|お」 is three small strokes: small. 「野|の」 is the open field past the village. Small field: Ono, a common family name, like the artist Yoko Ono, the subject of your textbook reading. Many family names are about land: 「田中|たなか」, in the rice fields, and 「山田|やまだ」, the mountain rice field.",
    ja: "[小野|おの|*]さんは[有名|ゆうめい]です。", en: "Ms. Ono is famous." },
  "習う": {
    why: "「習|なら」 has 「羽|はね」, wings, on top: a young bird practicing until it can fly. To learn.",
    long: "「習|なら」 has 「羽|はね」, wings, two feathers side by side, on top. The traditional explanation is a young bird flapping its wings over and over, practicing until it can fly. Repeated practice. It's in 「練習|れんしゅう」, practice, and 「習慣|しゅうかん」, a habit. 「習う|ならう」 is learning from a teacher; studying on your own is 「勉強する|べんきょうする」.",
    ja: "ピアノを[習|なら|*]っています。", en: "I'm taking piano lessons." },
  "主に": {
    why: "「主|おも」 means main, the master. With 「に」: mainly.",
    long: "「主|おも」 is a lamp with a flame on top, the light at the center of the room: main, the master. With 「に」: mainly, for the most part. The lamp gives its sound to a family: 「住|じゅう」, live, 「注|ちゅう」, pour. 「主人公|しゅじんこう」 is the main character of a story.",
    ja: "[主|おも|*]に[家|いえ]で[勉強|べんきょう]します。", en: "I mainly study at home." },
  "ご主人": {
    why: "「主|しゅ」 is master, and 「人|じん」 is person. The master of the house: someone's husband, said politely.",
    long: "「主|しゅ」 is the lamp at the center of the room: master. 「人|じん」 is a person. The master of the house: someone's husband, said politely with 「ご」. Many younger people now avoid it for their own husband because of its master meaning, and say 「夫|おっと」 instead.",
    ja: "ご[主人|しゅじん|*]はお[元気|げんき]ですか。", en: "How is your husband?" },
  "二十五歳": {
    why: "「二十五|にじゅうご」 is twenty-five, and 「歳|さい」 is years of age. Twenty-five years old.",
    long: "「二十五|にじゅうご」 is twenty-five. 「歳|さい」 has 「止|し」, a foot, on top and a blade-like shape wrapping it: often explained as the yearly harvest cut, or time marching on one step a year. Years of age. You'll often see the simpler 「才|さい」 written for ages. Twenty is special: 「二十歳|はたち」, the age of adulthood.",
    ja: "[姉|あね]は[二十五歳|にじゅうごさい|*]です。", en: "My older sister is twenty-five." },
  "集める": {
    why: "「集|あつ」 is birds gathering on a tree, 「木|き」. To collect.",
    long: "「集|あつ」 has a short-tailed bird, 「隹|ふるとり」, on top of 「木|き」, a tree. In the oldest form there were three birds. Birds flocking onto a tree: to gather, to collect. The same bird appears in 「雑|ざつ」, mixed, as in 「雑誌|ざっし」, magazine. 「集まる|あつまる」 is gathering on its own; 「集める|あつめる」 is you collecting.",
    ja: "[切手|きって]を[集|あつ|*]めています。", en: "I collect stamps." },
  "発表する": {
    why: "「発|はっ」 is to send out, and 「表|ぴょう」 is to show, express. Sending out and showing: to give a presentation.",
    long: "「発|はっ」 has 「癶|はつがしら」 on top, two feet setting off: to start out, to send out. 「表|ぴょう」 began as a fur coat with the fur on the outside: the surface, and to show. Sending something out and showing it: to give a presentation, to announce. 「表」 also gives 「表紙|ひょうし」, a book cover.",
    ja: "[明日|あした][発表|はっぴょう|*]します。", en: "I'll give a presentation tomorrow." },
  "作品": {
    why: "「作|さく」 is make, and 「品|ひん」 is goods, an article. A made article: a work of art.",
    long: "「作|さく」 has the person radical, 「亻|にんべん」: a person making something. 「品|ひん」 is three boxes, 「口|くち」, stacked up: many items, goods. A made article: a work, like a painting, a novel, or a film. With 「しな」 it means goods, as in 「品物|しなもの」, and 「上品|じょうひん」 means elegant, high quality.",
    ja: "これは[私|わたし]の[作品|さくひん|*]です。", en: "This is my work." },
  "写真": {
    why: "「写|しゃ」 is copy, and 「真|しん」 is truth. A true copy: photograph.",
    long: "「写|しゃ」 has a cover on top, 「冖|わかんむり」, like tracing a picture under a sheet: to copy. 「真|しん」 is often pictured as an eye, 「目|め」, looking straight at something: true, real. A true copy: photograph. 「真」 also means exactly: 「真ん中|まんなか」, the exact middle.",
    ja: "[写真|しゃしん|*]を[撮|と]りましょう。", en: "Let's take a picture." },
  "写す": {
    why: "「写|うつ」 is to copy, like copying notes or a picture.",
    long: "「写|うつ」 has a lid on top, 「冖|わかんむり」: tracing something under a cover, copying it exactly. To copy, like copying notes off the board. It sounds like 「映す|うつす」, to reflect, with the sun radical, but 「写す」 is copying.",
    ja: "ノートを[写|うつ|*]しました。", en: "I copied the notes." },
  "文字": {
    why: "「文|も」 is writing, and 「字|じ」 is letter. Written letters: characters.",
    long: "「文|も」 is a person with a pattern drawn on their chest: patterns, writing. 「字|じ」 has the roof radical, 「宀|うかんむり」, over 「子|こ」, a child. New characters grew from old ones, like children born in a house. Letter, character. Written letters: characters. Fun fact: emoji is 「絵文字|えもじ」, picture characters, and has nothing to do with the English word emotion.",
    ja: "この[文字|もじ|*]は[小|ちい]さいです。", en: "These letters are small." },
  "漢字": {
    why: "「漢|かん」 is the Han, China, and 「字|じ」 is letter. Han letters: Chinese characters.",
    long: "「漢|かん」 has the water radical, 「氵|さんずい」: it first named the Han River in China. The Han dynasty rose there, and its name came to stand for China. 「字|じ」 is a child under a roof: letter. Han letters: Chinese characters, the ones you're learning. The Han people are also why Chinese is sometimes called the Han language.",
    ja: "[漢字|かんじ|*]を[勉強|べんきょう]しています。", en: "I'm studying kanji." },
  "活動": {
    why: "「活|かつ」 is lively, and 「動|どう」 is move. Lively movement: activity.",
    long: "「活|かつ」 has the water radical, 「氵|さんずい」: flowing, splashing water, alive. Lively. 「動|どう」 is heavy plus power: to move. Lively movement: activity. 「部活|ぶかつ」, short for club activities, is a huge part of Japanese school life.",
    ja: "ボランティア[活動|かつどう|*]をしています。", en: "I do volunteer activities." },
  "生活": {
    why: "「生|せい」 is life, and 「活|かつ」 is lively. Living actively: daily life.",
    long: "「生|せい」 is a sprout pushing up out of the ground: life, birth, growing. 「活|かつ」 is flowing water: lively, alive. Living actively: daily life, the way you live. The textbook chapter title 「大学生活|だいがくせいかつ」 means college life.",
    ja: "[日本|にほん]の[生活|せいかつ|*]は[楽|たの]しいです。", en: "Life in Japan is fun." },
  "結婚する": {
    why: "「結|けっ」 is tie, and 「婚|こん」 is marriage. Tying the marriage knot: to get married.",
    long: "「結|けっ」 has the thread radical, 「糸|いとへん」, beside 「吉|きち」, good luck. Tying threads for luck: to tie. At shrines, people tie paper fortunes to strings. 「婚|こん」 has the woman radical, 「女|おんなへん」, beside 「昏|こん」, dusk: in ancient China, weddings were held in the evening. Tying the marriage knot: to get married.",
    ja: "[姉|あね]は[結婚|けっこん|*]しました。", en: "My older sister got married." },
  "歩く": {
    why: "「歩|ある」 is two footprints, one ahead of the other. To walk.",
    long: "「歩|ある」 is two footprints, one on top of the other, one foot in front of the other. The top is 「止|し」, a foot. That foot also stands in 「正|ただ」, correct, a foot reaching the line, and on top of 「歳|さい」, age. To walk. 「散歩|さんぽ」 is a stroll, and 「歩道|ほどう」 is a sidewalk, a walking road.",
    ja: "[駅|えき]まで[歩|ある|*]きます。", en: "I'll walk to the station." },
  "目的": {
    why: "「目|もく」 is eye, and 「的|てき」 is target. The target your eye is on: purpose.",
    long: "「目|もく」 is a picture of an eye, turned on its end. As a part, the eye appears in 「見|み」, see, an eye on legs, and 「眠|ねむ」, sleepy. 「的|てき」 has 「白|しろ」, white, on the left: the bright white bullseye, a target. The target your eye is fixed on: purpose. Added to the end of a noun, 「的」 works like -ic or -ish: 「社会的|しゃかいてき」, social.",
    ja: "[旅行|りょこう]の[目的|もくてき|*]は[何|なん]ですか。", en: "What is the purpose of your trip?" },
  "目": {
    why: "「目|め」 is a picture of an eye, stood on end to save space. Eye.",
    long: "「目|め」 is a picture of an eye: it was drawn sideways long ago, then stood on end to save space, so it's a tall box with lines inside. The eye radical tips you off that a kanji is about seeing: 「見|み」, see, 「眠|ねむ」, sleepy, eyes closing. After a number it counts order: 「二番目|にばんめ」, the second one.",
    ja: "[目|め|*]が[痛|いた]いです。", en: "My eyes hurt." },
  "洋服": {
    why: "「洋|よう」 is ocean, overseas, the West, and 「服|ふく」 is clothes. Clothes from overseas: Western clothes.",
    long: "「洋|よう」 has the water radical, 「氵|さんずい」, beside 「羊|ひつじ」, sheep, which gives the sound. The wide ocean, and the lands across it, the West. 「服|ふく」 has a shape on the left that looks like 「月|つき」 but was a boat; the right side shows a hand on a person, to serve, then to wear. Clothes from across the ocean: Western clothes. Its partner is 「和服|わふく」, Japanese clothes.",
    ja: "[洋服|ようふく|*]を[買|か]いに[行|い]きます。", en: "I'm going to buy clothes." },
  "服": {
    why: "「服|ふく」 is clothes.",
    long: "「服|ふく」 has a shape on the left that looks like the moon, 「月|つき」, but was once a boat, and on the right a hand pressing on a kneeling person, obeying. From serving came the clothes you put on. Clothes. 「制服|せいふく」 is a school uniform, and 「洋服|ようふく」 is Western clothes.",
    ja: "[新|あたら]しい[服|ふく|*]を[着|き]ています。", en: "I'm wearing new clothes." },
  "食堂": {
    why: "「食|しょく」 is eat, and 「堂|どう」 is hall. Eating hall: cafeteria.",
    long: "「食|しょく」 is a lid over a bowl of food: eat. 「堂|どう」 has 「土|つち」, earth, the raised ground, at the bottom and a tall building on top: a big hall. Eating hall: cafeteria. 「堂」 looks a lot like 「学|がく」 on top, so picture the college cafeteria. 「食」 becomes the food radical, 「飠|しょくへん」, in 「飲|の」, drink, and 「館|かん」.",
    ja: "[食堂|しょくどう|*]で[昼|ひる]ご[飯|はん]を[食|た]べます。", en: "I eat lunch in the cafeteria." },
  "力仕事": {
    why: "「力|ちから」, power, plus 「仕事|しごと」, work. Work that takes power: physical labor.",
    long: "「力|ちから」 is a picture of a strong arm, or a plow: power. The power radical marks effort: 「動|どう」, move, 「働|はたら」, work, 「勉|べん」, effort, and 「男|おとこ」, a field plus strength. 「仕事|しごと」 is work: 「仕|し」, a person serving, plus 「事|ごと」, a matter. Work that needs muscle: physical labor.",
    ja: "[力仕事|ちからしごと|*]は[大変|たいへん]です。", en: "Physical labor is hard." },
  "授業": {
    why: "「授|じゅ」 is give, teach, and 「業|ぎょう」 is work, study. Giving out lessons: class.",
    long: "「授|じゅ」 has the hand radical, 「扌|てへん」, beside 「受|じゅ」, to receive, which shows hands passing something down. They share the sound じゅ: one hand gives, another receives. To give, to teach. 「業|ぎょう」 began as a rack for hanging instruments: work, study. Giving out lessons: class. 「受業」 isn't a word; the teacher gives, with 「授」.",
    ja: "[授業|じゅぎょう|*]は[九時|くじ]からです。", en: "Class starts at nine." },
  "試験": {
    why: "「試|し」 is test, try, and 「験|けん」 is examine. Testing and examining: exam.",
    long: "「試|し」 has the speech radical, 「言|ごんべん」, beside 「式|しき」, a ceremony, a method: testing with questions by a set method. 「験|けん」 has the horse radical, 「馬|うまへん」, on the left, with its mane and four legs: checking a horse's quality. The horse radical also anchors 「駅|えき」, station, where post horses once waited. Testing and examining: exam.",
    ja: "[明日|あした][試験|しけん|*]があります。", en: "I have an exam tomorrow." },
  "貸す": {
    why: "「貸|か」 is 「代|だい」, replace, over 「貝|かい」, a shell, money. Money going out in place of yours: to lend.",
    long: "「貸|か」 is 「代|だい」, replace, on top of 「貝|かい」, a shell, which stood for money. Money going out in place of yours: to lend. 「代|だい」 also gives the sound: 「貸|たい」 is read たい in 「賃貸|ちんたい」, renting out. The shell radical marks money kanji: 「買|か」, buy, 「質|しつ」, value. Its opposite is 「借りる|かりる」, borrow.",
    ja: "[友|とも]だちにお[金|かね]を[貸|か|*]しました。", en: "I lent money to a friend." },
  "終わる": {
    why: "「終|お」 is thread plus 「冬|ふゆ」, winter, the end of the year. To end.",
    long: "「終|お」 has the thread radical, 「糸|いとへん」, beside 「冬|ふゆ」, winter. Winter is the end of the year, and here it's the end of the thread. To end. The thread radical marks things woven or tied: 「結|むす」, tie, 「紙|かみ」, paper, 「練|れん」, practice. 「終点|しゅうてん」 is the last stop.",
    ja: "[授業|じゅぎょう]が[終|お|*]わりました。", en: "Class is over." },
  "宿題": {
    why: "「宿|しゅく」 is lodging, staying overnight, and 「題|だい」 is topic. A topic you take home overnight: homework.",
    long: "「宿|しゅく」 is the roof radical, 「宀|うかんむり」, over a person lying on a mat: lodging, staying overnight. 「題|だい」 has 「是|ぜ」, correct, beside the head radical, 「頁|おおがい」, which marks heads and faces: 「顔|かお」, face, 「頭|あたま」, head. The heading: a title, a topic. A topic you take home overnight: homework. 「問題|もんだい」 is a problem.",
    ja: "[宿題|しゅくだい|*]をしました。", en: "I did my homework." },
  "春": {
    why: "「春|はる」 has 「日|ひ」, the sun, at the bottom, with plants sprouting above. Spring.",
    long: "「春|はる」 has 「日|ひ」, the sun, at the bottom, and the top grew out of plants sprouting in the warmth. Spring. In Japan spring is when everything starts: the school year, new jobs, and cherry blossoms. 「青春|せいしゅん」, green spring, means youth, the springtime of life.",
    ja: "[春|はる|*]が[好|す]きです。", en: "I like spring." },
  "秋": {
    why: "「秋|あき」 is grain plus 「火|ひ」, fire. Harvest fields glowing like fire: autumn.",
    long: "「秋|あき」 has 「禾|のぎへん」, a grain plant with a drooping head, on the left. The grain radical marks crops and harvest: 「科|か」, category, sorted grain, and 「和|わ」, harmony, grain for every mouth. On the right is 「火|ひ」, fire. Ripe fields glowing like fire at harvest: autumn. Autumn in Japan is called the season of appetite.",
    ja: "[秋|あき|*]はすずしいです。", en: "Autumn is cool." },
  "冬": {
    why: "「冬|ふゆ」 has two dots at the bottom: ice. Winter.",
    long: "「冬|ふゆ」 has two dots at the bottom, the ice radical, 「冫|にすい」, frozen drops. It marks cold things: 「冷|つめ」, cold to the touch. The top began as the knotted end of a thread: the end of the year. The end of the year, with ice: winter. Put the thread radical beside it and you get 「終|お」, the end.",
    ja: "[冬|ふゆ|*]は[寒|さむ]いです。", en: "Winter is cold." },
  "冬休み": {
    why: "「冬|ふゆ」, winter, plus 「休み|やすみ」, rest. Winter vacation.",
    long: "「冬|ふゆ」 is the end of the year, with ice dots at the bottom: winter. 「休|やす」 is the person radical, 「亻|にんべん」, leaning on 「木|き」, a tree: resting. Winter rest: winter vacation, which in Japan covers the New Year holidays.",
    ja: "[冬休み|ふゆやすみ|*]にスキーをします。", en: "I'll ski over winter vacation." },
  "花": {
    why: "「花|はな」 is the grass radical over 「化|か」, change. A plant that transforms into bloom: flower.",
    long: "「花|はな」 has the grass radical, 「艹|くさかんむり」, on top, the plant marker in 「茶|ちゃ」, tea, 「英|えい」, and 「薬|くすり」, medicine. Underneath is 「化|か」, to change, which gives the sound か: a plant that transforms from bud to bloom. Flower. In compounds it can mean beautiful things: 「花火|はなび」, fire flowers, fireworks, and 「花見|はなみ」, blossom viewing.",
    ja: "きれいな[花|はな|*]ですね。", en: "What a beautiful flower." },
  "姉": {
    why: "「姉|あね」 has 「女|おんな」, woman, on the left. Older sister.",
    long: "「姉|あね」 has the woman radical, 「女|おんなへん」, on the left and 「市|し」, market, on the right, giving the sound し. Older sister. The family set: 「姉|あね」 and 「妹|いもうと」, both with the woman radical, and 「兄|あに」 and 「弟|おとうと」. 「姉妹|しまい」 is sisters.",
    ja: "[姉|あね|*]は[東京|とうきょう]に[住|す]んでいます。", en: "My older sister lives in Tokyo." },
  "お姉さん": {
    why: "「姉|ねえ」, older sister, wrapped in the polite 「お」 and 「さん」. Someone's older sister.",
    long: "「姉|ねえ」 is the woman radical beside 「市|し」: older sister. Wrapped in the polite 「お」 and 「さん」, it's someone else's older sister, or what you call your own. Young women in shops are also called 「お姉さん|おねえさん」, the way you might say miss.",
    ja: "お[姉|ねえ|*]さんはお[元気|げんき]ですか。", en: "How is your older sister?" },
  "兄": {
    why: "「兄|あに」 is 「口|くち」, a mouth, on two legs. Older brother.",
    long: "「兄|あに」 is 「口|くち」, a mouth, on top of a pair of legs, 「儿|ひとあし」. A mouth on legs: the older brother who speaks for the younger ones. The same legs hold up 「見|み」, an eye on legs, see, and 「先|せん」, a foot ahead. 「兄弟|きょうだい」, older and younger brother, means siblings.",
    ja: "[兄|あに|*]は[大学生|だいがくせい]です。", en: "My older brother is a college student." },
  "お兄さん": {
    why: "「兄|にい」, older brother, wrapped in the polite 「お」 and 「さん」. Someone's older brother.",
    long: "「兄|にい」 is a mouth on legs: older brother. With the polite 「お」 and 「さん」, it's someone else's older brother, or what you call your own. Young men in shops and on the street get called 「お兄さん|おにいさん」 too.",
    ja: "お[兄|にい|*]さんは[何|なに]をしていますか。", en: "What does your older brother do?" },
  "卒業する": {
    why: "「卒|そつ」 is finish, and 「業|ぎょう」 is study, work. Finishing your studies: to graduate.",
    long: "「卒|そつ」 began as a picture of a soldier's garment with a mark on it. Soldiers finish their service, so it came to mean finish. 「業|ぎょう」 is a craftsman's rack: work, study. Finishing your studies: to graduate. 「卒業式|そつぎょうしき」 is the graduation ceremony, held in March, just as the cherry blossoms start.",
    ja: "[来年|らいねん][卒業|そつぎょう|*]します。", en: "I'll graduate next year." },
  "工学": {
    why: "「工|こう」 is craft, construction, and 「学|がく」 is study. The study of building things: engineering.",
    long: "「工|こう」 is a picture of a carpenter's tool, a square ruler or a mallet: craft, building. It hides inside 「空|そら」, sky, and 「左|ひだり」, left, a hand holding a tool. 「学|がく」 is a child under a roof, learning. The study of building things: engineering. 「工場|こうじょう」 is a factory.",
    ja: "[兄|あに]は[工学|こうがく|*]を[勉強|べんきょう]しています。", en: "My older brother studies engineering." },
  "研究": {
    why: "「研|けん」 is polishing, with 「石|いし」, stone, and 「究|きゅう」 is investigating to the bottom. Polishing and digging deep: research.",
    long: "「研|けん」 has the stone radical, 「石|いしへん」, on the left: grinding on a whetstone, polishing. The stone radical marks rocks and grinding: 「砂|すな」, sand. 「究|きゅう」 has the hole radical, 「穴|あなかんむり」, on top of 「九|きゅう」, nine, which gives the sound: digging nine levels down. Polishing and digging to the bottom: research.",
    ja: "[日本|にほん]の[文化|ぶんか]を[研究|けんきゅう|*]しています。", en: "I research Japanese culture." },
  "質問": {
    why: "「質|しつ」 is substance, quality, and 「問|もん」 is ask, a mouth at a gate. Asking about the substance: question.",
    long: "「質|しつ」 has two axes, 「斤|きん」, on top and the money shell, 「貝|かい」, at the bottom: valuables held as a pledge, substance, quality. 「問|もん」 is a mouth, 「口|くち」, inside a gate, 「門|もん」, which gives the sound もん. Calling out a question at the gate: to ask. Asking about the substance: question. Compare 「聞|き」, an ear at the gate.",
    ja: "[質問|しつもん|*]があります。", en: "I have a question." },
  "多い": {
    why: "「多|おお」 is two 「夕|ゆう」 shapes piled up. More and more: many.",
    long: "「多|おお」 is two copies of 「夕|ゆう」, the crescent moon shape, piled up. One explanation is two slabs of meat stacked, more than enough. Many. Its opposite is 「少ない|すくない」, few. 「多分|たぶん」, a large portion, means probably. Remember: 「多い」 goes at the end, 「人が多い|ひとがおおい」, and before a noun, use 「多くの|おおくの」.",
    ja: "[東京|とうきょう]は[人|ひと]が[多|おお|*]いです。", en: "There are a lot of people in Tokyo." }
});
