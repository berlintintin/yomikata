/* =======================================================================
   yomikata-notes.js — "why it's this kanji" mini-lessons and example
   sentences for Yomikata's Pronunciations slideshow and kanji lookup page
   (Genki lessons 9–19, one entry per kanji). Optional: if this file is
   missing, the game simply runs without the extras.
   Keyed by the kanji itself.
     explain: English, with Japanese inside 「」 — 「かな」 or 「漢字|かな」
              (shown as the kanji, spoken as the kana)
     ja:      example sentence in the same markup as Yomikata's sentences:
              [漢字|かな] shows furigana, [漢字|かな|*] is the word that uses
              this kanji (it gets highlighted)
     en:      its English translation
   To add lesson 20: paste more entries in the same shape, then run
   yomikataCheck() in the browser console to catch typos.
   ======================================================================= */
window.YOMIKATA_NOTES = window.YOMIKATA_NOTES || {};
Object.assign(window.YOMIKATA_NOTES, {
  /* ---------------- Lesson 9 ---------------- */
  "午": {
    explain: "This one comes with a real story. The ancient Chinese clock split the day into twelve two-hour blocks, each named after a zodiac animal. This kanji was the name of the horse block, the two hours around midday. So 「午|ご」 came to mean noon. It has just one reading, the on'yomi 「ご」. Watch it work. 「午前|ごぜん」 is before noon, A.M. 「午後|ごご」 is after noon, P.M. 「正午|しょうご」 puts 「正|しょう」, correct, in front, so it's noon on the dot. And 「午前中|ごぜんちゅう」 means all morning, the whole stretch before noon. A shape tip: don't mix it up with 「牛|うし」, cow. The cow has a horn that pokes up through the top line. The horse hour doesn't. To recap: the horse's hour, the hinge between morning and afternoon.",
    ja: "[午後|ごご|*]、[図書館|としょかん]で[勉強|べんきょう]します。",
    en: "I'll study at the library in the afternoon." },
  "後": {
    explain: "On the left are two slanting strokes, the step radical, which shows up in kanji about walking and going. On the right is a little thread shape over a dragging foot. Picture someone walking along a road, lagging behind the others. Behind, and after. That gives three readings. The on'yomi 「ご」 is in 「午後|ごご」, afternoon, and 「最後|さいご」, the very last. The kun'yomi 「あと」 means after or later, as in 「後で|あとで」, later on. And 「うし」 starts 「後ろ|うしろ」, behind, the space at your back. A neat pair to learn together: 「前|まえ」, in front, and 「後ろ|うしろ」, behind. And a handy goodbye: 「また後で|またあとで」, see you later. To recap: the one lagging behind on the road, meaning after, later, and behind.",
    ja: "[授業|じゅぎょう]の[後|あと|*]で、[友|とも]だちに[会|あ]います。",
    en: "I'll meet a friend after class." },
  "前": {
    explain: "The top of this kanji comes from an old drawing of a foot standing on a boat, moving forward. The right side is the knife radical. You don't need all the history, just the idea of pushing forward. That's why it means in front, and also before in time. The kun'yomi 「まえ」 is the plain word for front: 「駅の前|えきのまえ」, in front of the station. In time, 「三年前|さんねんまえ」 is three years ago. The on'yomi 「ぜん」 shows up in 「午前|ごぜん」, before noon. Then there's the one everybody knows: 「名前|なまえ」, a name, the thing you put out in front of you. And 「前売り|まえうり」 is selling in advance, like concert tickets sold before the day. Its partner is 「後|ご」, after. To recap: a foot on a boat moving forward, meaning in front, and before.",
    ja: "[駅|えき]の[前|まえ|*]で[待|ま]っています。",
    en: "I'm waiting in front of the station." },
  "名": {
    explain: "Two easy pieces. On top is 「夕|ゆう」, evening, a little crescent moon. Underneath is 「口|くち」, mouth. The traditional explanation is a lovely one. In the dark of the evening nobody can see your face, so you call out your name with your mouth. That's a name. The kun'yomi 「な」 is in 「名前|なまえ」, name. The on'yomi 「めい」 is in 「有名|ゆうめい」, famous, which is literally having a name. And 「名刺|めいし」 is a business card. In Japan you hand it over with both hands and a small bow, and you look at the other person's card carefully before you put it away. There's a second on'yomi, 「みょう」, in 「名字|みょうじ」, your family name. On forms you'll also see 「氏名|しめい」, full name. To recap: calling out your name in the dark.",
    ja: "これは[私|わたし]の[名刺|めいし|*]です。",
    en: "This is my business card." },
  "白": {
    explain: "Scholars argue about where this shape came from, so here's a hook instead. Take 「日|ひ」, the sun, and add one little stroke on top, like a ray of light. Sunlight at its brightest is white. The kun'yomi is 「しろ」. 「白|しろ」 is the color, and 「白い|しろい」 is the adjective, white. The on'yomi 「はく」 shows up in 「白紙|はくし」, blank paper, which also means starting over with a clean slate. And 「白鳥|はくちょう」 is a swan, the white bird. A cultural note: in Japan, red and white together mean celebration. You'll see red and white stripes at festivals and on gift envelopes, and on New Year's Eve there's a famous TV singing contest between a red team and a white team. To recap: the sun with a ray of light, bright and white.",
    ja: "[白|しろ|*]いシャツを[着|き]ています。",
    en: "I'm wearing a white shirt." },
  "雨": {
    explain: "This is one of the real picture kanji. The top line is the sky, the frame below it is a cloud, and the four dots are raindrops falling. The kun'yomi 「あめ」 is the everyday word for rain. Put 「大|おお」, big, in front and you get 「大雨|おおあめ」, heavy rain. The on'yomi 「う」 is rare, but you'll see it in 「雨期|うき」, the rainy season. Now the best part. This kanji gets flattened into a lid on top of other weather kanji. Look at 「雪|ゆき」, snow, and at 「電|でん」 in 「電気|でんき」, which started out as lightning. Whenever you see that flat rain shape on top, think sky. In early summer Japan has a rainy season that lasts a month or more, and everyone carries an umbrella. To recap: a cloud with drops falling, and the weather lid on other kanji.",
    ja: "[今日|きょう]は[雨|あめ|*]が[降|ふ]っています。",
    en: "It's raining today." },
  "書": {
    explain: "The top of this kanji is a hand gripping a writing brush, a real piece you'll spot in other kanji about writing. Underneath is a shape like 「日|ひ」, here more like a mouth saying something. A hand with a brush, putting words down: to write. The kun'yomi 「か」 gives the verb 「書く|かく」, to write. The on'yomi 「しょ」 means a written thing, a book or document, and it builds a whole family. 「辞書|じしょ」 is a dictionary, a book of words. 「教科書|きょうかしょ」 is a textbook. 「図書館|としょかん」 is the library, a building full of pictures and writings. A tip for English speakers: drawing a picture uses a different 「かく」 with another kanji. Writing words uses this one. To recap: a hand holding a brush, meaning to write, and written things.",
    ja: "[辞書|じしょ|*]で[漢字|かんじ]を[調|しら]べます。",
    en: "I look up kanji in the dictionary." },
  "友": {
    explain: "This is a real picture, and a warm one. The two shapes are both hands, two right hands reaching toward each other. Hands joined together: friends. The kun'yomi 「とも」 is in 「友だち|ともだち」, the word you learned in your first week. The 「だち」 part was once a plural ending, though now 「友だち|ともだち」 can mean just one friend. The on'yomi 「ゆう」 shows up in more formal words. 「友人|ゆうじん」 means friend in a polite, written way. 「友情|ゆうじょう」 is friendship. And 「親友|しんゆう」, with 「親|しん」, close, is your best friend, the closest of friends. You'll meet 「親|しん」 again in lesson fourteen. To recap: two hands clasped together, the kanji for friend.",
    ja: "[彼|かれ]は[私|わたし]の[親友|しんゆう|*]です。",
    en: "He is my best friend." },
  "間": {
    explain: "Look closely. The outside is 「門|もん」, a gate with two doors. Inside is 「日|ひ」, the sun. In the oldest form it was the moon, but the idea is the same: light shining through the gap between two gate doors. That gap is the meaning, the space between things. The on'yomi 「かん」 turns it into a span of time. 「時間|じかん」 is time, and 「二時間|にじかん」 is two hours. 「一週間|いっしゅうかん」 is one week. The kun'yomi 「あいだ」 means between, the space between two things or a stretch of time. And a second on'yomi, 「げん」, shows up in 「人間|にんげん」, a human being. Literally a person among people, someone living in the space between others. To recap: light through a gate, the space between, and a stretch of time.",
    ja: "[毎日|まいにち][二時間|にじかん|*][勉強|べんきょう]します。",
    en: "I study for two hours every day." },
  "家": {
    explain: "This is a picture you can actually see. On top is the roof radical, a lid. Underneath is an old drawing of a pig. A pig under a roof is a home. In ancient farm life, the family and its valuable animals lived together. The kun'yomi 「いえ」 is house or home. Another kun'yomi, 「や」, shows up in 「家賃|やちん」, rent, the money for your home. The on'yomi 「か」 means family or household, as in 「家族|かぞく」, family, and 「家事|かじ」, housework. And here's a fun one. Stuck on the end of a word, 「家|か」 means a professional, someone who does that thing as their life's work. 「作家|さっか」 is a writer. 「漫画家|まんがか」 is a manga artist. To recap: a pig under a roof, meaning a home, a family, and a pro.",
    ja: "[家族|かぞく|*]は[四人|よにん]です。",
    en: "There are four people in my family." },
  "話": {
    explain: "On the left is the speech radical, from 「言|げん」, to say. You'll see it on lots of kanji about words and language. On the right is a shape that looks like 「舌|した」, tongue. Words plus a tongue: talking. The kun'yomi 「はな」 gives 「話す|はなす」, to speak, and the noun 「話|はなし」, a talk or a story. The on'yomi 「わ」 shows up in two words you use all the time. 「電話|でんわ」, telephone, is literally electric talk. 「会話|かいわ」 is conversation, meeting and talking. The dialogues in your textbook are called 「会話|かいわ」. A tip: 「話す|はなす」 is for speaking and for languages, while 「言う|いう」 is for saying particular words. Both have the speech radical on the left. To recap: words and a tongue, the kanji for talking.",
    ja: "[友|とも]だちと[電話|でんわ|*]で[話|はな]しました。",
    en: "I talked with a friend on the phone." },
  "少": {
    explain: "Start with 「小|ちい」, small, three strokes like little bits. Add one long sweeping stroke at the bottom left, and you have this kanji. Small, with a little more taken away: a little, few. Learn the pair together because they're easy to mix up. 「小さい|ちいさい」 is small in size. This kanji is small in amount. It has two kun'yomi. 「少し|すこし」 means a little, a bit. 「少ない|すくない」 means few, there aren't many. The on'yomi 「しょう」 shows up in 「少年|しょうねん」, a boy, literally few years, and 「少女|しょうじょ」, a girl. Comics aimed at boys and at girls are named with these words. And 「少々|しょうしょう」 is the polite way to say a little, as in please wait a moment at a shop counter. To recap: small plus one stroke, meaning a little, and few.",
    ja: "[少|すこ|*]し[待|ま]ってください。",
    en: "Please wait a little." },
  "古": {
    explain: "This one is easy to build: 「十|じゅう」, ten, sitting on top of 「口|くち」, mouth. A popular way to remember it: a story passed down through ten mouths, generation after generation, must be very old. That's a hook rather than proven history, but it sticks. The kun'yomi 「ふる」 gives 「古い|ふるい」, old. Use it for things and ideas, not for people's age. The on'yomi 「こ」 shows up in 「中古|ちゅうこ」, used or secondhand, literally middle old. Japan has huge stores full of 「中古|ちゅうこ」 games, cameras, and clothes. 「古代|こだい」 means ancient times. And in lesson sixteen you'll meet 「考古学|こうこがく」, archaeology, the study of old things. To recap: ten mouths retelling a story, meaning old.",
    ja: "この[古|ふる|*]いお[寺|てら]はきれいです。",
    en: "This old temple is beautiful." },
  "知": {
    explain: "On the left is 「矢|や」, an arrow. On the right is 「口|くち」, mouth. A popular hook: knowledge comes out of your mouth as fast and straight as an arrow. The kun'yomi 「し」 gives the verb 「知る|しる」, to come to know. Here's the famous grammar trap. To say I know, you say 「知っています|しっています」. But to say I don't know, it's just 「知りません|しりません」. Never 「知っていません|しっていません」. The on'yomi 「ち」 shows up in 「知人|ちじん」, an acquaintance, a person you know. And 「知り合い|しりあい」, built from to know plus each other, also means someone you know. The same arrow sits on the left of 「短い|みじかい」, short. To recap: an arrow from the mouth, the kanji for knowing.",
    ja: "[先生|せんせい]の[住所|じゅうしょ]を[知|し|*]っていますか。",
    en: "Do you know the teacher's address?" },
  "来": {
    explain: "This kanji started as a drawing of a wheat plant, with ears of grain hanging from the stalk. Long ago its sound was borrowed to write the word come, and the meaning stuck. Fun to know, even if you can't see the wheat anymore. The verb 「来る|くる」 is irregular, so watch the readings shift. The dictionary form is 「くる」, the polite form is 「来ます|きます」, and the negative is 「来ない|こない」. Three kun'yomi from one verb. The on'yomi 「らい」 means the coming one, the next. 「来週|らいしゅう」 is next week, and 「来年|らいねん」 is next year. 「来日|らいにち」 means coming to Japan, a word you'll see in the news when famous people visit. To recap: a wheat plant borrowed for come, plus 「らい」 for the next one.",
    ja: "[来週|らいしゅう|*]、[日本|にほん]に[行|い]きます。",
    en: "I'm going to Japan next week." },
  /* ---------------- Lesson 10 ---------------- */
  "住": {
    explain: "On the left is the person radical, a narrow standing person. On the right is 「主|しゅ」, master, a shape often explained as a lamp with a flame on top. A hook: a person settled in by the lamp, the master of the house. A person staying in one place: to live. The kun'yomi 「す」 gives the verb 「住む|すむ」, to live somewhere. Grammar tip: the place takes 「に」, and you usually use the 「ている」 form, as in 「東京に住んでいます|とうきょうにすんでいます」, I live in Tokyo. The on'yomi 「じゅう」 shows up in 「住所|じゅうしょ」, your address, literally the place where you live. And 「移住|いじゅう」 means moving to live somewhere new, migrating. To recap: a person settled by the lamp, meaning to live.",
    ja: "ここに[住所|じゅうしょ|*]を[書|か]いてください。",
    en: "Please write your address here." },
  "正": {
    explain: "On the bottom is 「止|し」, which began as a drawing of a foot. Add one line across the top, like a goal or a finish line. A foot heading straight for the line. That gives straight, correct, and right. The kun'yomi 「ただ」 is in 「正しい|ただしい」, correct. It has two on'yomi. 「せい」 is in 「正解|せいかい」, the correct answer. On Japanese quiz shows, the host shouts it when someone gets it right. 「しょう」 is in 「お正月|おしょうがつ」, the New Year holidays, the proper first month, and in 「正午|しょうご」, exactly noon. A cultural note: Japanese people keep count with this kanji instead of tally marks. It takes five strokes, so each finished kanji means five. To recap: a foot heading straight for the line, meaning right and correct.",
    ja: "[正|ただ|*]しい[答|こた]えはどれですか。",
    en: "Which is the correct answer?" },
  "年": {
    explain: "This kanji started as a picture of a person carrying ripe grain on their back. The harvest came once a year, so the harvest became the word for a year. The on'yomi 「ねん」 is the one you'll use most. 「来年|らいねん」 is next year, and 「三年生|さんねんせい」 is a third-year student. The kun'yomi 「とし」 means year, and also age, how many years old you are. You know it from 「年上|としうえ」, someone older. And there's a special reading you simply have to learn: 「今年|ことし」, this year. It doesn't follow the usual sounds. A cultural note: Japan also counts years by the emperor's era name, so on forms you'll often see two ways of writing the same year. To recap: a person carrying the harvest, meaning a year.",
    ja: "[来年|らいねん|*]、[日本|にほん]に[行|い]きたいです。",
    en: "I want to go to Japan next year." },
  "売": {
    explain: "Today's kanji is simplified, but its old form was clever: 「出|しゅつ」, to put out, sitting on top of 「買|ばい」, to buy. Putting goods out for other people to buy: selling. The kun'yomi 「う」 gives 「売る|うる」, to sell. The on'yomi 「ばい」 is the same sound as its partner 「買|ばい」, buy, a handy coincidence. Put them together and 「売買|ばいばい」 means buying and selling, trade. 「売店|ばいてん」 is a kiosk, the little shop on a train platform. And 「自動販売機|じどうはんばいき」 is a vending machine. Japan has millions of them, selling hot and cold drinks on nearly every corner. Also watch for the sign 「売り切れ|うりきれ」, sold out. To recap: putting goods out to be bought, meaning to sell.",
    ja: "[駅|えき]の[売店|ばいてん|*]で[水|みず]を[買|か]いました。",
    en: "I bought water at the station kiosk." },
  "買": {
    explain: "This is a real picture. On top is a net. At the bottom is 「貝|かい」, a shell. In ancient China, cowrie shells were used as money, so the shell turns up in lots of money kanji. A net scooping up shells, gathering money in exchange for goods: to buy. The kun'yomi 「か」 gives 「買う|かう」, to buy, and 「買い物|かいもの」, shopping, literally buying things. The on'yomi 「ばい」 is the same sound as 「売|ばい」, sell. So 「売買|ばいばい」 means buying and selling. Watch out for 「飼う|かう」, to keep a pet. It sounds identical but uses a different kanji. A quick check: if there's a shell at the bottom, money is involved. To recap: a net scooping up shells, meaning to buy.",
    ja: "[母|はは]と[買い物|かいもの|*]に[行|い]きました。",
    en: "I went shopping with my mother." },
  "町": {
    explain: "On the left is 「田|た」, a rice field, a square split into four plots. On the right is a simple shape that mostly gives the sound. A way to picture it: paths running between rice fields, with houses gathering along them. That's a town. The kun'yomi 「まち」 is the everyday word for town. The on'yomi 「ちょう」 shows up in place names and addresses. Lots of Japanese neighborhoods end in 「町|ちょう」, like 「北山町|きたやまちょう」 in your textbook. And 「町長|ちょうちょう」 is a town mayor, with 「長|ちょう」, head. A tip: big cities use 「市|し」, city, which you'll meet in lesson eleven. To recap: houses along the paths between fields, meaning a town.",
    ja: "この[町|まち|*]は[静|しず]かです。",
    en: "This town is quiet." },
  "長": {
    explain: "This kanji began as a picture of an old person with long flowing hair. Long hair gives you long, and old age gives you elder, the head of a group. The kun'yomi 「なが」 gives 「長い|ながい」, long, for both length and time. The on'yomi 「ちょう」 means chief or head. 「社長|しゃちょう」 is a company president, the head of the company. In lesson nineteen you'll meet 「部長|ぶちょう」, a department head. And 「長男|ちょうなん」 is the eldest son. This long-haired elder hides inside another kanji too. The top left of 「髪|かみ」, hair, is this very shape. To recap: an elder with long hair, meaning long, and the head of a group.",
    ja: "[父|ちち]は[会社|かいしゃ]の[社長|しゃちょう|*]です。",
    en: "My father is the president of a company." },
  "道": {
    explain: "Along the bottom left is the road radical, a moving shape that runs under kanji about going and traveling. Riding on it is 「首|くび」, head or neck. Picture a person going head first down a path. The kun'yomi 「みち」 means road or way, and you use it to ask for directions. The on'yomi 「どう」 is the exciting one. It means a way of life, a path of training. 「柔道|じゅうどう」 is judo, the gentle way. 「書道|しょどう」 is calligraphy, the way of writing. The tea ceremony is called the way of tea, too. And the northern island, 「北海道|ほっかいどう」, uses it as well, the north sea road. To recap: heading down the road, meaning a path, and a way of life.",
    ja: "[学校|がっこう]で[書道|しょどう|*]を[習|なら]いました。",
    en: "I learned calligraphy at school." },
  "雪": {
    explain: "On top is the rain lid, 「雨|あめ」, flattened down. Underneath is a shape like a sideways letter E. In the old form of this kanji, that bottom part was a hand holding a broom. So snow is weather from the sky that you have to sweep up afterward. The kun'yomi 「ゆき」 is snow. 「雪だるま|ゆきだるま」 is a snowman. Japanese snowmen usually have just two balls, like the round Daruma dolls they're named after. The on'yomi 「せつ」 shows up in 「新雪|しんせつ」, fresh snow. A cultural note: Sapporo, in 「北海道|ほっかいどう」, holds a famous snow festival every winter, full of huge snow and ice sculptures. To recap: rain on top and a broom below, meaning snow.",
    ja: "[冬|ふゆ]は[雪|ゆき|*]がたくさん[降|ふ]ります。",
    en: "It snows a lot in winter." },
  "立": {
    explain: "This is a real picture: a person standing with arms spread, feet planted on a line of ground at the bottom. The kun'yomi 「た」 gives 「立つ|たつ」, to stand. The on'yomi 「りつ」 means established, set up. Japanese schools are labeled by who set them up. 「国立大学|こくりつだいがく」 is a national university, set up by the country. 「私立高校|しりつこうこう」 is a private high school, set up privately, with 「私|し」, private. You'll hear these all the time when people talk about entrance exams. This standing person also shows up as a piece of other kanji, like the top left of 「親|しん」, parent, in lesson fourteen. To recap: a person standing on the ground, meaning to stand, and to be set up.",
    ja: "[兄|あに]は[国立大学|こくりつだいがく|*]の[学生|がくせい]です。",
    en: "My older brother is a student at a national university." },
  "自": {
    explain: "This kanji began as a picture of a nose. Here's why it means self: in Japan, when people point to themselves, they point at their own nose, not their chest. So the nose became me, myself. Try it next time you say this kanji. It has the on'yomi 「じ」. 「自分|じぶん」 means oneself. 「自転車|じてんしゃ」, a bicycle, is a vehicle whose wheels you turn yourself. 「自動車|じどうしゃ」, a car, is a vehicle that moves by itself. And 「自由|じゆう」 is freedom, going your own way. Later you'll meet the actual kanji for nose, and this same shape sits right on top of it. To recap: a picture of the nose you point at, meaning self.",
    ja: "[自転車|じてんしゃ|*]で[学校|がっこう]に[行|い]きます。",
    en: "I go to school by bicycle." },
  "夜": {
    explain: "Look inside this kanji and you'll find a crescent moon, 「夕|ゆう」, tucked in on the right, next to a person. A hook: a person out under the moon at night. The kun'yomi 「よる」 is night. Another kun'yomi, 「よ」, shows up in 「夜中|よなか」, the middle of the night, and in 「夜明け|よあけ」, dawn, the moment the night opens up. The on'yomi 「や」 is in 「今夜|こんや」, tonight. Compare 「今晩|こんばん」, which also means tonight but feels a little earlier, more like this evening. A cultural note: summer nights in Japan mean festivals, fireworks over the river, and food stalls lit up with lanterns. To recap: a person under the crescent moon, meaning night.",
    ja: "[今夜|こんや|*]、[花火|はなび]を[見|み]ます。",
    en: "I'll watch fireworks tonight." },
  "朝": {
    explain: "On the left you'll find the sun, 「日|ひ」, with little sprouts of grass above and below it. On the right is 「月|つき」, the moon. A nice picture: the sun rising up through the grass while the moon is still in the sky. That's early morning. The kun'yomi 「あさ」 is morning, as in 「朝ご飯|あさごはん」, breakfast. 「毎朝|まいあさ」 is every morning. The on'yomi 「ちょう」 shows up in formal words like 「朝食|ちょうしょく」, breakfast, the word you'll see on hotel signs. Watch out for 「今朝|けさ」, this morning. It has a special reading that you just have to learn. To recap: the sun rising while the moon is still out, meaning morning.",
    ja: "[毎朝|まいあさ|*]、[七時|しちじ]に[起|お]きます。",
    en: "I get up at seven every morning." },
  "持": {
    explain: "On the left is the hand radical, a squashed version of 「手|て」, hand. Lots of action kanji carry it. On the right is 「寺|てら」, temple, which here mostly gives the sound. A hand gripping something: to hold. The kun'yomi 「も」 gives 「持つ|もつ」, to hold, to carry, or to own. 「持ってくる|もってくる」 is to bring, literally hold it and come. And 「気持ち|きもち」, feelings, is a lovely word: how you hold your spirit. The on'yomi 「じ」 shows up in formal words like 「所持品|しょじひん」, personal belongings, the things you carry. You'll see it on signs at security checks. To recap: a hand holding on, meaning to hold.",
    ja: "[傘|かさ]を[持|も|*]っていますか。",
    en: "Do you have an umbrella with you?" },
  /* ---------------- Lesson 11 ---------------- */
  "手": {
    explain: "A real picture of a hand, with the fingers spread at the top and the wrist running down the middle. The kun'yomi 「て」 is hand. You'll see it in 「手紙|てがみ」, a letter, paper written by hand. The on'yomi 「しゅ」 is a surprise. On the end of a word, it means a person who is skilled with their hands, a pro. 「歌手|かしゅ」 is a singer, a song person. And 「手話|しゅわ」 is sign language, talking with your hands. This kanji also gets squashed into a radical on the left of action kanji, like 「持|も」, to hold. It even hides in 「上手|じょうず」, skillful, and 「下手|へた」, unskillful. An upper hand and a lower hand. To recap: a picture of a hand, meaning hand, and a skilled person.",
    ja: "[手|て|*]を[洗|あら]ってください。",
    en: "Please wash your hands." },
  "紙": {
    explain: "On the left is the thread radical, from 「糸|いと」, a twist of silk thread. Paper is made of plant fibers pressed together, so the thread makes sense. The right side mostly gives the sound. The kun'yomi 「かみ」 is paper. In compounds it often softens to 「がみ」, as in 「手紙|てがみ」, a letter, and 「折り紙|おりがみ」, origami, folded paper. The on'yomi 「し」 shows up in 「和紙|わし」, traditional Japanese paper, strong and handmade from tree fiber. And 「表紙|ひょうし」 is a book cover. Be careful with the sound 「かみ」. 「髪|かみ」, hair, and 「神|かみ」, god, sound exactly the same. To recap: fiber threads pressed together, meaning paper.",
    ja: "[紙|かみ|*]で[鶴|つる]を[折|お]りました。",
    en: "I folded a paper crane." },
  "好": {
    explain: "Two pieces you already know: 「女|おんな」, woman, and 「子|こ」, child. A mother holding her child, the picture of affection. That's liking. The kun'yomi 「す」 gives 「好き|すき」, to like. Remember the grammar: the thing you like takes 「が」, and 「好き|すき」 is a na-adjective, even though it ends in an i sound. 「大好き|だいすき」 means to love. Another kun'yomi, 「この」, is in 「好み|このみ」, your taste or preference. The on'yomi 「こう」 shows up in 「好物|こうぶつ」, your favorite food, and 「好意|こうい」, goodwill, warm feelings toward someone. To recap: a woman with her child, meaning liking.",
    ja: "[私|わたし]の[好物|こうぶつ|*]はすしです。",
    en: "My favorite food is sushi." },
  "近": {
    explain: "Along the bottom left is the road radical, the shape for moving along a path. On the right is 「斤|きん」, an axe, which mostly gives the sound. Picture it as just a short walk down the road. The kun'yomi 「ちか」 gives 「近い|ちかい」, near. 「近く|ちかく」 means nearby, the area close by. The on'yomi 「きん」 shows up in 「近所|きんじょ」, the neighborhood, the near place. 「最近|さいきん」 means recently, the nearest in time. And 「中近東|ちゅうきんとう」 is the Middle East. Its opposite, the kanji for far, sits on the very same road radical. To recap: a short way down the road, meaning near.",
    ja: "[近所|きんじょ|*]に[公園|こうえん]があります。",
    en: "There's a park in my neighborhood." },
  "明": {
    explain: "The two brightest things in the sky sit side by side: 「日|ひ」, the sun, and 「月|つき」, the moon. Together they make bright. The kun'yomi 「あか」 gives 「明るい|あかるい」, bright, which also describes a cheerful, sunny person. The on'yomi 「めい」 means clear. 「説明|せつめい」 is an explanation, making things clear with words. 「発明|はつめい」 is an invention, something brought to light. 「文明|ぶんめい」 is civilization. It's also in the name of the Meiji era, when Japan modernized. And there's a special reading worth knowing: 「明日|あした」, tomorrow, the bright day ahead. To recap: the sun and the moon together, meaning bright and clear.",
    ja: "[先生|せんせい]が[文法|ぶんぽう]を[説明|せつめい|*]しました。",
    en: "The teacher explained the grammar." },
  "病": {
    explain: "The frame across the top and down the left is the sickness radical. It's usually explained as a bed seen from the side, with a person lying in it. Whenever you see this frame, think illness or pain. The part inside gives the sound. The on'yomi 「びょう」 means sickness. 「病気|びょうき」 is illness. 「病院|びょういん」 is a hospital, the institution for the sick. 「急病|きゅうびょう」 is a sudden illness, and 「重病|じゅうびょう」 a serious one. A famous trap: 「美容院|びよういん」, a beauty salon, sounds almost the same as 「病院|びょういん」. The hospital has a short squeezed 「びょう」. Say it wrong and you might ask a taxi for a haircut. To recap: a person in a sickbed, meaning sick.",
    ja: "[病院|びょういん|*]に[行|い]きました。",
    en: "I went to the hospital." },
  "院": {
    explain: "On the left is the hill radical, a mound of earth. On the right is 「完|かん」, complete, with a roof on top. A hook: a complete walled building standing on a hill. A large institution. It has the on'yomi 「いん」, and it almost always comes at the end of a word to name a kind of institution. 「病院|びょういん」 is a hospital. 「大学院|だいがくいん」 is graduate school. 「美容院|びよういん」 is a beauty salon. You'll also see it in the names of old temples around Kyoto. A tip: the same squiggle on the right side of a kanji means a village. On the left, like here, it's a hill. To recap: a walled building on a hill, meaning an institution.",
    ja: "[兄|あに]は[大学院|だいがくいん|*]で[勉強|べんきょう]しています。",
    en: "My older brother is studying in graduate school." },
  "映": {
    explain: "On the left is 「日|ひ」, the sun. On the right is 「央|おう」, the center. A hook: the sun's light reflected right in the middle of a still pond. Light and images. The kun'yomi 「うつ」 gives 「映る|うつる」, to be reflected or shown, like your face in a mirror or a picture on a screen. The on'yomi 「えい」 is in 「映画|えいが」, a movie, literally a projected picture. 「映画館|えいがかん」 is a movie theater. A tip: movie tickets in Japan are pricey, so many theaters have a discount day each month. To recap: the sun reflected in the center, meaning to reflect, and to project.",
    ja: "[映画館|えいがかん|*]で[映画|えいが]を[見|み]ました。",
    en: "I watched a movie at the movie theater." },
  "画": {
    explain: "This kanji shows a field with its borders drawn in, the outlines of a picture or a plan. Picture a brush tracing the edges of a rice field. Drawing, and planning. It has two on'yomi. 「が」 means picture. 「映画|えいが」 is a movie. 「漫画|まんが」 is manga, from an old word for loose, playful drawings. 「画家|がか」 is a painter. The other on'yomi, 「かく」, means a stroke or a plan. 「計画|けいかく」 is a plan, measuring out the lines. And when people count the strokes of a kanji, they use this same 「かく」. To recap: lines drawn around a field, meaning a picture, and a plan.",
    ja: "[夏休|なつやす]みの[計画|けいかく|*]を[立|た]てました。",
    en: "I made plans for summer vacation." },
  "歌": {
    explain: "Look at the left side: it's two mouth-like shapes stacked up, a sound repeated. On the right is a person with a wide open mouth, the radical you also find in kanji about yawning and breathing out. A person opening wide to let out a melody: to sing. The kun'yomi 「うた」 is a song, and 「歌う|うたう」 is to sing. The on'yomi 「か」 shows up in 「歌手|かしゅ」, a singer, and 「歌詞|かし」, song lyrics. 「国歌|こっか」 is the national anthem. And 「歌舞伎|かぶき」, kabuki theater, starts with this kanji: song, dance, and skill. Japan also gave the world karaoke, so you'll use this kanji a lot. To recap: an open mouth and a repeated sound, meaning to sing.",
    ja: "[歌手|かしゅ|*]になりたいです。",
    en: "I want to become a singer." },
  "市": {
    explain: "This kanji's history is tangled, so here's a hook. Picture a little stall with a cloth hung over the top, a spot where people gather to trade. A market, and the city that grows up around it. The on'yomi 「し」 means city. You put it after a city's name, like 「川口市|かわぐちし」. 「市役所|しやくしょ」 is city hall, and 「市長|しちょう」 is the mayor. The kun'yomi 「いち」 means market. 「市場|いちば」 is a market. Japan's fish markets are famous for their tuna auctions, held before the sun comes up. To recap: a stall where people trade, meaning a market, and a city.",
    ja: "[市場|いちば|*]で[魚|さかな]を[買|か]いました。",
    en: "I bought fish at the market." },
  "所": {
    explain: "On the left is 「戸|と」, a door. On the right is 「斤|きん」, an axe. One old explanation is the sound of chopping wood, and the spot where you heard it. A simpler hook: a door marks a place. The kun'yomi 「ところ」 means place. In compounds it softens to 「どころ」, as in 「台所|だいどころ」, the kitchen, the place with the stand where you cook. The on'yomi 「しょ」 shows up in 「住所|じゅうしょ」, an address, the place you live. Another on'yomi, 「じょ」, is in 「近所|きんじょ」, the neighborhood. Lots of offices and stations end in this kanji too. To recap: a door and an axe, meaning a place.",
    ja: "[台所|だいどころ|*]で[料理|りょうり]をします。",
    en: "I cook in the kitchen." },
  "勉": {
    explain: "On the right is 「力|ちから」, strength or power. The left part shows a hard birth, pushing with all your might. Together: to strain, to make an effort. The on'yomi 「べん」 is in 「勉強|べんきょう」, study. Literally, effort plus strength: pushing yourself. That's why an old-style shopkeeper might say 「勉強します|べんきょうします」 to a customer. It means I'll make an effort for you, I'll give you a discount. The kun'yomi 「つと」 is in 「勉める|つとめる」, to strive. And 「勤勉|きんべん」 means diligent, hard-working. To recap: pushing with all your strength, meaning to make an effort.",
    ja: "[毎日|まいにち][日本語|にほんご]を[勉強|べんきょう|*]します。",
    en: "I study Japanese every day." },
  "強": {
    explain: "On the left is 「弓|ゆみ」, a bow. On the right is a shape with 「虫|むし」, bug, at the bottom. A hook rather than history: a bow so stiff it takes real strength to pull. The kun'yomi 「つよ」 gives 「強い|つよい」, strong. People use it for strong wind, strong teams, and someone who can hold their drink. The on'yomi 「きょう」 shows up in 「勉強|べんきょう」, study, effort plus strength. And 「強力|きょうりょく」 means powerful. A second on'yomi, 「ごう」, is in 「強情|ごうじょう」, stubborn, a strong will that won't bend. To recap: a powerful bow, meaning strong.",
    ja: "[今日|きょう]は[風|かぜ]が[強|つよ|*]いです。",
    en: "The wind is strong today." },
  "有": {
    explain: "The top is a hand reaching out. The bottom looks like 「月|つき」, moon, but here it's really flesh, a piece of meat. A hand holding meat: to have. Long ago, having meat meant you were doing well. The kun'yomi 「あ」 gives 「有る|ある」, to exist, though people usually write that verb in kana. The on'yomi 「ゆう」 is in 「有名|ゆうめい」, famous, having a name. 「有料|ゆうりょう」 means there's a fee, having a charge, a word you'll see on parking lots and expressways. And 「有能|ゆうのう」 means capable, having ability. To recap: a hand holding meat, meaning to have, and to exist.",
    ja: "この[駐車場|ちゅうしゃじょう]は[有料|ゆうりょう|*]です。",
    en: "This parking lot charges a fee." },
  "旅": {
    explain: "On the left is a flag on a pole. On the right are people marching underneath it. A group traveling together under a banner: a journey. The kun'yomi 「たび」 is a journey, a slightly poetic word. 「一人旅|ひとりたび」 is traveling alone. The on'yomi 「りょ」 shows up in 「旅行|りょこう」, a trip, journey plus go. 「旅館|りょかん」 is a traditional Japanese inn, with tatami floors, futons, and often a hot spring bath. And 「旅券|りょけん」 is the formal word for a passport, a travel ticket. A cultural note: Japanese tour guides really do still lead groups holding up a little flag. To recap: people marching under a flag, meaning travel.",
    ja: "[京都|きょうと]の[旅館|りょかん|*]に[泊|と]まりました。",
    en: "I stayed at a Japanese inn in Kyoto." },
  /* ---------------- Lesson 12 ---------------- */
  "昔": {
    explain: "This kanji's origin is debated. One explanation is strips of meat drying under the sun, food stored from days gone by. A simpler hook: the top looks like layers piled up over 「日|ひ」, the sun. Many days stacked on top of each other: long ago. It only has a kun'yomi, 「むかし」, the old days. Japanese fairy tales begin with 「昔々|むかしむかし」, once upon a time. 「昔話|むかしばなし」 is a folk tale, an old story. 「大昔|おおむかし」 is the ancient past, very long ago. This kanji also sits on the right side of 「借|か」, to borrow, in lesson fifteen, where it gives the sound. To recap: many days piled up, meaning long ago.",
    ja: "[昔々|むかしむかし|*]、[山|やま]におじいさんがいました。",
    en: "Once upon a time, there was an old man in the mountains." },
  "神": {
    explain: "On the left is the altar radical, a squeezed form of an offering table. Kanji about gods and worship carry it. On the right is 「申|しん」, which began as a drawing of lightning. Lightning next to an altar: the power of the gods. The kun'yomi 「かみ」 is god, and 「神さま|かみさま」 is the polite way to say it. The on'yomi 「じん」 is in 「神社|じんじゃ」, a Shinto shrine. Another on'yomi, 「しん」, is in 「神道|しんとう」, Shinto, the way of the gods. And there's a rare reading, 「こう」, in the city name 「神戸|こうべ」. A cultural note: Shinto teaches that gods live in nature, in mountains, waterfalls, old trees, and even rocks. To recap: lightning by an altar, meaning god.",
    ja: "お[正月|しょうがつ]に[神社|じんじゃ|*]に[行|い]きます。",
    en: "I go to a shrine at New Year's." },
  "早": {
    explain: "A hook for this one: the sun, 「日|ひ」, sitting on top of a post or a cross. The sun just peeking up over the horizon. Early. The kun'yomi 「はや」 gives 「早い|はやい」, early. Remember its sound twin, 「速い|はやい」, fast, which has a different kanji. Sun on top means early in time. 「早起き|はやおき」 is getting up early. There's a famous Japanese saying that getting up early earns you three coins, a lot like the early bird gets the worm. The on'yomi 「そう」 shows up in 「早朝|そうちょう」, early morning. To recap: the sun peeking up over a post, meaning early.",
    ja: "[明日|あした]は[早起|はやお|*]きします。",
    en: "I'll get up early tomorrow." },
  "起": {
    explain: "On the left, wrapping underneath, is 「走|はし」, to run. On the right is 「己|おのれ」, self. A hook: getting yourself up and running. The kun'yomi 「お」 gives two verbs. 「起きる|おきる」 means to get up or wake up, something you do. 「起こす|おこす」 means to wake somebody else up, or to cause something to happen. That pair, one where it happens to you and one where you do it to someone, is a pattern you'll see again and again. The on'yomi 「き」 shows up in 「再起動|さいきどう」, restarting a computer, starting it up again. To recap: getting yourself running, meaning to get up.",
    ja: "[毎朝|まいあさ][六時|ろくじ]に[起|お|*]きます。",
    en: "I get up at six every morning." },
  "牛": {
    explain: "A real picture of a cow's head seen from the front, with a horn poking up through the top. Compare 「午|ご」, noon. It looks almost the same, but the cow's horn sticks up through the top line, and the horse hour doesn't. The kun'yomi 「うし」 is cow. The on'yomi 「ぎゅう」 is used for beef and dairy. 「牛乳|ぎゅうにゅう」 is milk, literally cow milk. 「牛肉|ぎゅうにく」 is beef, cow meat. A cultural note: Japan is famous for wagyu beef, like Kobe beef, and for 「牛丼|ぎゅうどん」, a cheap and filling beef rice bowl sold everywhere. To recap: a cow's head with a horn, meaning cow.",
    ja: "[毎朝|まいあさ][牛乳|ぎゅうにゅう|*]を[飲|の]みます。",
    en: "I drink milk every morning." },
  "使": {
    explain: "On the left is the person radical. On the right is 「吏|り」, a government official. A person sent off on official business, a messenger. From someone you send out, the meaning grew into to use. The kun'yomi 「つか」 gives 「使う|つかう」, to use. 「お使い|おつかい」 is an errand, like a child sent to the store for milk. There's even a much-loved Japanese TV show about little kids doing their very first errand alone. The on'yomi 「し」 shows up in 「大使|たいし」, an ambassador, a big messenger. And 「使用中|しようちゅう」 means in use, the sign on a bathroom door. To recap: a person sent on business, meaning to use.",
    ja: "このペンを[使|つか|*]ってもいいですか。",
    en: "May I use this pen?" },
  "働": {
    explain: "Here's a fun fact: this kanji was invented in Japan, not in China. Japanese took 「動|どう」, to move, and added the person radical on the left. A person in motion: working. The kun'yomi 「はたら」 gives 「働く|はたらく」, to work. In compounds it can soften to 「ばたら」, as in 「共働き|ともばたらき」, a couple who both work. The on'yomi 「どう」 comes straight from 「動|どう」, and you'll see it in 「労働|ろうどう」, labor. A grammar tip: the workplace takes 「で」, as in working at a bank. To recap: a person who keeps moving, meaning to work.",
    ja: "[母|はは]は[銀行|ぎんこう]で[働|はたら|*]いています。",
    en: "My mother works at a bank." },
  "連": {
    explain: "Along the bottom left is the road radical. Riding on it is 「車|くるま」, a cart. Carts traveling in a line, one after another: linking up, taking along. The kun'yomi 「つ」 gives 「連れる|つれる」, to take someone along. 「連れて帰る|つれてかえる」 is to take someone home with you. The on'yomi 「れん」 shows up in 「連休|れんきゅう」, a run of holidays linked together. Japan's Golden Week in early May is the most famous 「連休|れんきゅう」, when the whole country seems to travel at once. And 「国連|こくれん」 is the United Nations, countries linked together. To recap: carts rolling in a line, meaning to link, and to take along.",
    ja: "[来週|らいしゅう]は[連休|れんきゅう|*]です。",
    en: "Next week there's a string of holidays." },
  "別": {
    explain: "The left side comes from an old drawing of bones. On the right is the knife radical. Cutting meat away from the bone: separating. The kun'yomi 「わか」 gives 「別れる|わかれる」, to part ways, or to break up. The on'yomi 「べつ」 is everywhere. 「別に|べつに」 means not particularly. 「特別|とくべつ」 means special, set apart from the rest. 「別々に|べつべつに」 means separately, as in asking to pay separately at a restaurant. And 「差別|さべつ」 is discrimination. To recap: a knife separating meat from bone, meaning to separate.",
    ja: "[今日|きょう]は[特別|とくべつ|*]な[日|ひ]です。",
    en: "Today is a special day." },
  "度": {
    explain: "The outside is a building radical, a roof with one wall. Inside, at the bottom, is a hand. A hook: measuring with your hand, the old way to measure length. A measure, a degree, and a time. It has the on'yomi 「ど」. 「三十度|さんじゅうど」 is thirty degrees. 「温度|おんど」 is temperature. 「一度|いちど」 is one time, once. 「今度|こんど」 means this time, or next time. And 「態度|たいど」 is attitude, the degree to which you behave well. Remember that Japan uses Celsius, so thirty degrees is a hot summer day. To recap: measuring with your hand, meaning degrees, and times.",
    ja: "[今度|こんど|*]、いっしょに[行|い]きましょう。",
    en: "Let's go together next time." },
  "赤": {
    explain: "The top came from 「大|だい」, big. The bottom came from fire. A big fire blazing: red. The kun'yomi 「あか」 is red, and 「赤い|あかい」 is the adjective. 「赤ちゃん|あかちゃん」 is a baby. Newborns look reddish, so they're the little red ones. The on'yomi 「せき」 shows up in 「赤道|せきどう」, the equator, the red line around the world. And 「赤十字|せきじゅうじ」 is the Red Cross. A cultural note: in Japan, the sun on the flag is red, and kids usually draw the sun red instead of yellow. To recap: a big fire, meaning red.",
    ja: "[赤|あか|*]ちゃんが[泣|な]いています。",
    en: "The baby is crying." },
  "青": {
    explain: "The top is a young sprout pushing out of the ground. The bottom is a shape for a mineral pigment, a color from the earth. Fresh growing plants: blue-green. In old Japanese, 「青|あお」 covered both blue and green. That's why Japanese traffic lights have a 「青信号|あおしんごう」, a blue light, even though it's green. Fresh green leaves and unripe apples can be 「青|あお」 too. The kun'yomi 「あお」 gives 「青い|あおい」, blue. 「青空|あおぞら」 is a blue sky. The on'yomi 「せい」 is in 「青年|せいねん」, a young person, fresh like a sprout. To recap: a fresh sprout, meaning blue, and sometimes green.",
    ja: "[今日|きょう]は[青空|あおぞら|*]がきれいです。",
    en: "The blue sky is beautiful today." },
  "色": {
    explain: "This kanji's history is debated, so here's a hook. Picture two people, one above the other, and a face changing color, blushing or flushing red. The kun'yomi 「いろ」 is color. 「色々|いろいろ」 means various, all kinds, literally color, color. The on'yomi 「しき」 shows up in 「景色|けしき」, scenery, the colors of a view. Another on'yomi, 「しょく」, is in 「特色|とくしょく」, a distinctive feature. A cultural note: Japan has a rich set of traditional color names, often borrowed from plants and nature, like the pale pink of cherry blossoms. To recap: a face changing color, meaning color.",
    ja: "[山|やま]の[景色|けしき|*]がきれいでした。",
    en: "The mountain scenery was beautiful." },
  /* ---------------- Lesson 13 ---------------- */
  "物": {
    explain: "On the left is 「牛|うし」, cow, squeezed into a radical. Long ago, cattle were the most valuable things a farmer owned, so a cow makes a good model of a thing you own. The right side mostly gives the sound. The kun'yomi 「もの」 is a physical thing. Add a verb stem and you get a whole family. 「食べ物|たべもの」 is food, a thing to eat. 「飲み物|のみもの」 is a drink. 「買い物|かいもの」 is shopping. The on'yomi 「ぶつ」 is in 「動物|どうぶつ」, an animal, a moving thing. And 「ぶっ」 is in 「物価|ぶっか」, prices, the value of things. To recap: a cow, the valuable thing, meaning a thing.",
    ja: "[好|す]きな[食べ物|たべもの|*]は[何|なん]ですか。",
    en: "What's your favorite food?" },
  "鳥": {
    explain: "A real picture of a bird. At the top is the head, with a little stroke for the eye. The middle is the body and folded wings. The four dots at the bottom are the tail feathers and feet. The kun'yomi 「とり」 is bird, and on menus it often means chicken. 「焼き鳥|やきとり」 is grilled chicken on skewers, a classic bar and festival food. The on'yomi 「ちょう」 shows up in 「白鳥|はくちょう」, a swan, the white bird. Notice that the four dots also appear at the bottom of 「魚|さかな」, fish, in lesson fifteen. There they're a tail, too. To recap: a picture of a bird, meaning bird, and chicken.",
    ja: "[公園|こうえん]に[鳥|とり|*]がいます。",
    en: "There's a bird in the park." },
  "料": {
    explain: "On the left is 「米|こめ」, rice. On the right is a measuring dipper. Measuring out grain gives you a measured amount, and from that, materials, ingredients, and fees. It has the on'yomi 「りょう」. 「料理|りょうり」 is cooking, handling your ingredients. 「料金|りょうきん」 is a fee or fare. 「授業料|じゅぎょうりょう」 is tuition, the class fee. And 「給料|きゅうりょう」 is a salary, a fee paid out to you. To recap: a dipper measuring rice, meaning ingredients, and fees.",
    ja: "[父|ちち]は[料理|りょうり|*]が[上手|じょうず]です。",
    en: "My father is good at cooking." },
  "理": {
    explain: "On the left is a shape that looks like 「王|おう」, king, but here it's really 「玉|たま」, jade. On the right is 「里|さと」, a village, giving the sound. The original meaning was polishing jade along its natural grain. Following the grain gives you the idea of logic and reason. It has the on'yomi 「り」. 「料理|りょうり」 is cooking, handling ingredients the right way. 「理由|りゆう」 is a reason. 「地理|ちり」 is geography, the logic of the land. And 「無理|むり」 means impossible, without reason. To recap: jade polished along its grain, meaning reason and logic.",
    ja: "[遅|おく]れた[理由|りゆう|*]は[何|なん]ですか。",
    en: "What's the reason you were late?" },
  "特": {
    explain: "On the left is the cow radical. On the right is 「寺|てら」, temple, giving the sound. The old meaning was a special bull, one picked out from the rest of the herd. Special. It has the on'yomi 「とく」. 「特に|とくに」 means especially. 「特別|とくべつ」 means special. 「特徴|とくちょう」 is a distinctive feature. Before a k sound it shrinks to 「とっ」, as in 「特急|とっきゅう」, a limited express train. Watch for that sign at Japanese stations. Limited express trains skip a lot of stops and often cost a little extra. To recap: a bull picked out from the herd, meaning special.",
    ja: "[特急|とっきゅう|*]で[大阪|おおさか]に[行|い]きます。",
    en: "I'll go to Osaka by limited express." },
  "安": {
    explain: "A roof on top, and 「女|おんな」, woman, underneath. The traditional explanation: a woman safe at home under her roof, at peace. Calm and safe. The kun'yomi 「やす」 gives 「安い|やすい」, cheap, things that put your mind at ease about money. The on'yomi 「あん」 means peace and safety. 「安全|あんぜん」 means safe. 「安心|あんしん」 means relieved, a calm heart. And 「不安|ふあん」 means anxious, not at ease. To recap: someone safe under a roof, meaning calm, safe, and cheap.",
    ja: "[日本|にほん]は[安全|あんぜん|*]な[国|くに]です。",
    en: "Japan is a safe country." },
  "飯": {
    explain: "On the left is the food radical, a squeezed form of 「食|しょく」, to eat. The right side gives the sound. Food: cooked rice, and a whole meal. It has the on'yomi 「はん」. With the polite 「ご」 in front, 「ご飯|ごはん」 means cooked rice, and also a meal. Rice was the center of every meal, so the word for rice became the word for a meal. 「朝ご飯|あさごはん」 is breakfast. 「昼ご飯|ひるごはん」 is lunch. 「晩ご飯|ばんごはん」 is dinner. Even if you have toast for breakfast, it's still morning rice. To recap: the food radical, meaning rice, and a meal.",
    ja: "[晩ご飯|ばんごはん|*]を[食|た]べましたか。",
    en: "Did you eat dinner?" },
  "肉": {
    explain: "A real picture of a slab of meat, with lines inside like streaks of fat. It has the on'yomi 「にく」, which works like an everyday word. 「肉|にく」 is meat. 「牛肉|ぎゅうにく」 is beef, and 「豚肉|ぶたにく」 is pork. 「肉屋|にくや」 is a butcher shop. And 「筋肉|きんにく」 is muscle, the meat of your own body. This kanji also hides in body-part kanji, squeezed into a shape that looks like the moon. A history note: for over a thousand years, eating meat was uncommon in Japan, until the country opened up to the West in the eighteen hundreds. To recap: a slab of meat, meaning meat.",
    ja: "[肉屋|にくや|*]で[牛肉|ぎゅうにく]を[買|か]いました。",
    en: "I bought beef at the butcher shop." },
  "悪": {
    explain: "At the bottom is 「心|こころ」, heart. On top is a shape like a crooked frame. A hook: a heart pressed down under something heavy, a bad feeling. Bad. The kun'yomi 「わる」 gives 「悪い|わるい」, bad. 「気分が悪い|きぶんがわるい」 means feeling sick, my mood is bad. The on'yomi 「あく」 means evil or bad. 「最悪|さいあく」 means the worst, and people shout it when everything goes wrong. 「悪魔|あくま」 is a devil. To recap: a heart weighed down, meaning bad.",
    ja: "[気分|きぶん]が[悪|わる|*]いです。",
    en: "I feel sick." },
  "体": {
    explain: "On the left is the person radical. On the right is 「本|ほん」, which originally means a root or base. A hook: a person's base, the body. It's a simplified form of an older, much more complicated kanji. The kun'yomi 「からだ」 is body. 「体にいい|からだにいい」 means good for your health. The on'yomi 「たい」 shows up in 「体重|たいじゅう」, body weight, and 「体操|たいそう」, exercises. A cultural note: Japanese radio has broadcast a set of morning exercises since 1928, and lots of people still do them, from schoolkids in summer to factory workers. To recap: a person and a root, meaning the body.",
    ja: "[体|からだ|*]に[気|き]をつけてください。",
    en: "Please take care of yourself." },
  "同": {
    explain: "A hook for this one: a frame with one line and one mouth inside. Everyone under one roof, speaking with one mouth, saying the same thing. The same. The kun'yomi 「おな」 gives 「同じ|おなじ」, the same. Remember the grammar: 「同じ|おなじ」 goes right before a noun with nothing in between. The on'yomi 「どう」 means together, the same group. 「同僚|どうりょう」 is a coworker. 「同級生|どうきゅうせい」 is a classmate, someone in the same grade. And 「同時|どうじ」 means at the same time. To recap: one mouth under one roof, meaning the same.",
    ja: "[彼|かれ]は[私|わたし]の[同級生|どうきゅうせい|*]です。",
    en: "He is my classmate." },
  "着": {
    explain: "A hook from the shape: on top is a sheep, 「羊|ひつじ」, and at the bottom is 「目|め」, eye. Picture pulling a wool sweater down over your head and eyes. The kun'yomi 「き」 gives 「着る|きる」, to wear on your upper body. 「着物|きもの」 is a kimono, a thing to wear. 「水着|みずぎ」 is a swimsuit, softened to 「ぎ」. Another kun'yomi, 「つ」, gives 「着く|つく」, to arrive, to reach a place. The on'yomi 「ちゃく」 shows up on train boards, as in 「大阪着|おおさかちゃく」, arriving at Osaka. To recap: wool over your eyes, meaning to wear, and to arrive.",
    ja: "[駅|えき]に[着|つ|*]きました。",
    en: "I arrived at the station." },
  "空": {
    explain: "On top is 「穴|あな」, a hole or hollow. Underneath is 「工|こう」, a tool. A hollow space: empty, and the big empty sky above. The kun'yomi 「そら」 is the sky. 「あ」 gives 「空く|あく」, to become empty, like a seat opening up. 「から」 means empty, as in 「空手|からて」, karate, empty hand. And karaoke uses this 「から」 too, an empty orchestra. The on'yomi 「くう」 means air or sky. 「空気|くうき」 is the air. 「空港|くうこう」 is an airport, a sky harbor. To recap: a hollow, meaning empty, and the sky.",
    ja: "[空港|くうこう|*]まで[電車|でんしゃ]で[行|い]きます。",
    en: "I'll go to the airport by train." },
  "港": {
    explain: "On the left are three drops, the water radical. On the right is a shape meaning a lane or alley. Water lanes where boats come in: a harbor. The kun'yomi 「みなと」 is a harbor or port. The on'yomi 「こう」 shows up in 「空港|くうこう」, an airport, a harbor for the sky. And 「神戸港|こうべこう」, the port of Kobe, one of Japan's big trading ports. A history note: when Japan opened to the West in the eighteen hundreds, port cities like Yokohama and Kobe were where foreign traders first lived, and you can still see their old Western-style houses. To recap: water lanes for boats, meaning a harbor.",
    ja: "[港|みなと|*]で[船|ふね]を[見|み]ました。",
    en: "I saw ships at the harbor." },
  "昼": {
    explain: "A hook: at the bottom is 「日|ひ」, the sun, with a line under it like the horizon. The sun high above the line: daytime. The kun'yomi 「ひる」 is noon, or daytime. 「昼ご飯|ひるごはん」 is lunch. 「昼休み|ひるやすみ」 is the lunch break. 「昼寝|ひるね」 is a nap. The on'yomi 「ちゅう」 shows up in 「昼食|ちゅうしょく」, lunch, the formal word you'll see on restaurant signs and school schedules. A tip: don't confuse it with 「午|ご」, noon on the clock. This one is the bright part of the day. To recap: the sun high above the horizon, meaning daytime.",
    ja: "[昼休み|ひるやすみ|*]に[昼寝|ひるね]をしました。",
    en: "I took a nap during my lunch break." },
  "海": {
    explain: "On the left is the water radical. On the right is 「毎|まい」, every, from 「毎日|まいにち」. A hook: every drop of water ends up in the sea. The kun'yomi 「うみ」 is the sea. The on'yomi 「かい」 shows up in 「日本海|にほんかい」, the Sea of Japan. 「海外|かいがい」 means overseas, outside the sea. 「海岸|かいがん」 is the seashore. And the northern island 「北海道|ほっかいどう」 uses it too. A cultural note: Japan is an island country, and July has a national holiday, Marine Day, to give thanks for the ocean. To recap: water from everywhere, meaning the sea.",
    ja: "[海外|かいがい|*]に[行|い]ったことがありますか。",
    en: "Have you ever been overseas?" },
  /* ---------------- Lesson 14 ---------------- */
  "彼": {
    explain: "On the left is the step radical, about walking. On the right is 「皮|ひ」, skin, which gives the sound. A hook: that one, walking along over there. The kun'yomi 「かれ」 means he, and also boyfriend. 「彼ら|かれら」 is they. Another kun'yomi, 「かの」, shows up in 「彼女|かのじょ」, she, or girlfriend. And 「彼氏|かれし」 clearly means boyfriend. A tip for English speakers: Japanese uses he and she much less than English does. People usually just use the person's name. Saying 「彼|かれ」 about your teacher would sound odd. To recap: that one over there, meaning he, and she.",
    ja: "[彼女|かのじょ|*]は[私|わたし]の[友|とも]だちです。",
    en: "She is my friend." },
  "代": {
    explain: "On the left is the person radical. On the right is a stake, a post stuck in the ground. A hook: a person stepping up to take someone else's place at the post. Replacing. And from people replacing people, it also means a generation or an age. The on'yomi 「だい」 is everywhere. 「時代|じだい」 is an era. 「十代|じゅうだい」 means your teens, that decade of life. 「九十年代|きゅうじゅうねんだい」 is the nineties. And on bills, 「電気代|でんきだい」 is the electricity charge. The kun'yomi 「か」 gives 「代わりに|かわりに」, instead of. To recap: someone taking the place at the post, meaning replace, a fee, and a generation.",
    ja: "[電気代|でんきだい|*]が[高|たか]いです。",
    en: "The electricity bill is expensive." },
  "留": {
    explain: "A hook: at the bottom is 「田|た」, a rice field. Picture a farmer staying put in the field and not leaving. To stay, to keep. The on'yomi 「りゅう」 is in 「留学|りゅうがく」, studying abroad, staying somewhere to learn. 「留学生|りゅうがくせい」 is an international student. Another on'yomi, 「る」, shows up in 「留守|るす」, being away from home, as in nobody's home. A phone's answering machine is called a 「留守電|るすでん」, the away-from-home phone. To recap: staying put in the field, meaning to stay.",
    ja: "[日本|にほん]に[留学|りゅうがく|*]したいです。",
    en: "I want to study abroad in Japan." },
  "族": {
    explain: "On the left is a flag flying on a pole. Underneath on the right is 「矢|や」, an arrow. People gathering under one flag with their arrows: a clan. It has the on'yomi 「ぞく」. 「家族|かぞく」 is family, the clan of a house. 「民族|みんぞく」 is an ethnic group, a people. 「王族|おうぞく」 is a royal family. And a fun one: 「水族館|すいぞくかん」 is an aquarium, a building for the water tribes. Japan has some amazing aquariums, with whale sharks and huge tanks. To recap: warriors gathered under a flag, meaning a clan, and a family.",
    ja: "[水族館|すいぞくかん|*]に[行|い]きました。",
    en: "I went to the aquarium." },
  "親": {
    explain: "Three parts you already know: 「立|た」, stand, 「木|き」, tree, and 「見|み」, see. A popular hook: a parent standing up on a tree, watching over their child from above. The kun'yomi 「おや」 is parent. 「父親|ちちおや」 is a father, and 「母親|ははおや」 is a mother. Another kun'yomi, 「した」, gives 「親しい|したしい」, close or intimate. The on'yomi 「しん」 means close. 「親切|しんせつ」 is kind. 「両親|りょうしん」 is your parents, both of them. 「親友|しんゆう」 is a best friend. To recap: a parent watching from a tree, meaning parent, and close.",
    ja: "[両親|りょうしん|*]は[東京|とうきょう]に[住|す]んでいます。",
    en: "My parents live in Tokyo." },
  "切": {
    explain: "On the left is 「七|しち」, seven. On the right is 「刀|かたな」, a knife. That seven shape actually began as a cut mark, so the whole kanji is about cutting. The kun'yomi 「き」 gives 「切る|きる」, to cut. It shrinks to 「きっ」 in 「切符|きっぷ」, a ticket, and 「切手|きって」, a postage stamp. Both used to be cut from sheets of paper. The on'yomi 「せつ」 adds the sense of keen, heartfelt, deep. 「親切|しんせつ」 means kind. 「大切|たいせつ」 means precious, important. To recap: seven and a blade, meaning to cut, and something deeply felt.",
    ja: "これは[大切|たいせつ|*]な[写真|しゃしん]です。",
    en: "This is a precious photo." },
  "英": {
    explain: "On top is the grass radical. Underneath is 「央|おう」, the center. A flower at the center of the plant, its finest part: excellent. Later, this kanji was picked to spell the name England, so now it also means English. It has the on'yomi 「えい」. 「英語|えいご」 is English. 「英国|えいこく」 is Britain. 「英会話|えいかいわ」 is English conversation, and English conversation schools are a common job for foreigners in Japan. And 「英雄|えいゆう」 is a hero, an excellent person. To recap: the flower at the center, meaning excellent, and English.",
    ja: "[英会話|えいかいわ|*]の[学校|がっこう]で[働|はたら]いています。",
    en: "I work at an English conversation school." },
  "店": {
    explain: "The outside is a building radical, a roof with one wall. Inside is 「占|せん」, to occupy. A hook: a building that occupies a spot on the street to sell things. The kun'yomi 「みせ」 is a shop. The on'yomi 「てん」 shows up in lots of shop words. 「店員|てんいん」 is a shop clerk. 「売店|ばいてん」 is a kiosk. 「書店|しょてん」 is a bookstore. And 「店長|てんちょう」 is the store manager. When you walk into a Japanese shop, the 「店員|てんいん」 will call out 「いらっしゃいませ」, welcome. To recap: a building taking up a spot on the street, meaning a shop.",
    ja: "あの[店員|てんいん|*]はとても[親切|しんせつ]です。",
    en: "That clerk is very kind." },
  "去": {
    explain: "A hook: 「土|つち」, the ground, on top, and a little shape below like a person walking away from it. Leaving, and the past that's been left behind. The kun'yomi 「さ」 gives 「去る|さる」, to leave. The on'yomi 「きょ」 is in 「去年|きょねん」, last year, the year that left. Another on'yomi, 「こ」, is in 「過去|かこ」, the past. And 「消去|しょうきょ」 is erasing or deleting data. To recap: walking away, meaning to leave, and the past.",
    ja: "[去年|きょねん|*]、[日本|にほん]に[行|い]きました。",
    en: "I went to Japan last year." },
  "急": {
    explain: "At the bottom is 「心|こころ」, heart. A hook: your heart racing when you're in a rush. The kun'yomi 「いそ」 gives 「急ぐ|いそぐ」, to hurry. The on'yomi 「きゅう」 is in 「急に|きゅうに」, suddenly. 「急行|きゅうこう」 is an express train. 「特急|とっきゅう」 is a limited express. A tip for Japanese train stations: a local train stops everywhere, an express skips some stations, and a limited express skips even more. Read the board before you hop on, or you might fly past your stop. To recap: a racing heart, meaning hurry, and sudden.",
    ja: "[急行|きゅうこう|*]に[乗|の]りました。",
    en: "I took the express train." },
  "乗": {
    explain: "A hook: a person climbing up on top of a tree, riding up high. The kun'yomi 「の」 gives 「乗る|のる」, to ride. Remember the vehicle takes 「に」, as in getting on a train. 「乗り物|のりもの」 is a vehicle, a riding thing, and it's also the word for rides at an amusement park. The on'yomi 「じょう」 shows up in 「乗車|じょうしゃ」, boarding a train or car, a word you'll hear in station announcements. And 「乗馬|じょうば」 is horseback riding. To recap: a person up on a tree, meaning to ride.",
    ja: "[電車|でんしゃ]に[乗|の|*]ります。",
    en: "I'll get on the train." },
  "当": {
    explain: "This kanji is a simplified form of a more complicated one. A hook: picture an arrow hitting the center of a target. Hitting the mark. The kun'yomi 「あ」 gives 「当たる|あたる」, to hit, like winning the lottery or a guess turning out right. The on'yomi 「とう」 means hitting the mark, being right. 「本当|ほんとう」 means true, real. 「お弁当|おべんとう」 is a boxed lunch. 「当時|とうじ」 means at that time, back then. To recap: hitting the target, meaning right, true, and to hit.",
    ja: "[本当|ほんとう|*]にありがとうございます。",
    en: "Thank you so much, truly." },
  "音": {
    explain: "This kanji grew out of 「言|げん」, to say, with an extra mark inside the mouth, a sound coming out. Today you can see 「立|た」 on top and 「日|ひ」 below. The kun'yomi 「おと」 is sound or noise. Another kun'yomi, 「ね」, is in 「本音|ほんね」, your true feelings, your real sound. Japanese often contrasts 「本音|ほんね」 with the polite face you show in public. The on'yomi 「おん」 is in 「音楽|おんがく」, music. And 「発音|はつおん」 is pronunciation. Put a heart under this kanji and you get 「意|い」, meaning, in lesson fifteen. To recap: a sound coming out of the mouth, meaning sound.",
    ja: "[日本語|にほんご]の[発音|はつおん|*]はむずかしいです。",
    en: "Japanese pronunciation is difficult." },
  "楽": {
    explain: "This kanji shows a musical instrument, a drum on a wooden stand, 「木|き」, at the bottom. Music, and the pleasure it brings. The kun'yomi 「たの」 gives 「楽しい|たのしい」, fun. The on'yomi 「がく」 is in 「音楽|おんがく」, music. It shrinks to 「がっ」 in 「楽器|がっき」, a musical instrument. And another on'yomi, 「らく」, is in 「楽|らく」, easy and comfortable. So one kanji covers music, fun, and taking it easy. To recap: a drum on a stand, meaning music, fun, and comfort.",
    ja: "[毎日|まいにち]が[楽|たの|*]しいです。",
    en: "Every day is fun." },
  "医": {
    explain: "A real picture: an arrow, 「矢|や」, inside a box. It was a quiver, and the old meaning was healing arrow wounds. Medicine. It has the on'yomi 「い」. 「医者|いしゃ」 is a doctor. 「歯医者|はいしゃ」 is a dentist, a tooth doctor. 「医学|いがく」 is medicine as a subject of study. And 「医院|いいん」 is a small clinic. A tip: when you talk to a doctor in Japan, you call them 「先生|せんせい」, just like a teacher. To recap: an arrow in a box, meaning medicine.",
    ja: "[歯医者|はいしゃ|*]に[行|い]きます。",
    en: "I'm going to the dentist." },
  "者": {
    explain: "A hook: an old person leaning over, with something underneath. A person. The kun'yomi 「もの」 is a person, as in 「若者|わかもの」, a young person. The on'yomi 「しゃ」 goes on the end of words to mean a person who does that thing. 「医者|いしゃ」 is a doctor, a medicine person. 「学者|がくしゃ」 is a scholar. 「読者|どくしゃ」 is a reader. And it softens to 「じゃ」 in a famous one: 「忍者|にんじゃ」, a ninja, a person who stays hidden. To recap: a person, especially one who does something.",
    ja: "あの[医者|いしゃ|*]はやさしいです。",
    en: "That doctor is kind." },
  /* ---------------- Lesson 15 ---------------- */
  "死": {
    explain: "On the left is a radical that stands for bones. On the right is a person kneeling. Bones beside a person: death. The kun'yomi 「し」 gives 「死ぬ|しぬ」, to die, the only common verb that ends in 「ぬ」. The on'yomi is also 「し」. 「必死|ひっし」 means desperate, going all out as if your life depends on it. 「死者|ししゃ」 is a person who has died. A cultural note: because 「四|し」, four, sounds like death, many Japanese hospitals and hotels skip room number four, the same way some Western buildings skip the thirteenth floor. To recap: bones beside a person, meaning death.",
    ja: "[必死|ひっし|*]に[勉強|べんきょう]しました。",
    en: "I studied like my life depended on it." },
  "意": {
    explain: "On top is 「音|おと」, sound. Underneath is 「心|こころ」, heart. The sound of your heart: what you really mean, your intention. It has the on'yomi 「い」. 「意味|いみ」 is meaning. 「注意|ちゅうい」 is paying attention, pouring your mind into something. 「意見|いけん」 is an opinion, the view in your mind. And 「用意|ようい」 is getting ready, preparation. Notice how many feeling kanji have a heart at the bottom. Once you spot it, you'll see it everywhere. To recap: the sound of the heart, meaning mind, and meaning.",
    ja: "この[言葉|ことば]の[意味|いみ|*]は[何|なん]ですか。",
    en: "What does this word mean?" },
  "味": {
    explain: "On the left is 「口|くち」, mouth. On the right is 「未|み」, not yet, which gives the sound. A hook: tasting something in your mouth that you've never tried before. The kun'yomi 「あじ」 is flavor or taste. The on'yomi 「み」 is in 「意味|いみ」, meaning, the flavor of a word. 「趣味|しゅみ」 is a hobby, the things you have a taste for. 「興味|きょうみ」 is interest. A fun note: one of the five basic tastes, umami, comes from Japanese. A Japanese scientist named it in 1908, after finding it in kelp broth. To recap: a mouth tasting something new, meaning flavor.",
    ja: "[私|わたし]の[趣味|しゅみ|*]は[料理|りょうり]です。",
    en: "My hobby is cooking." },
  "注": {
    explain: "On the left is the water radical. On the right is 「主|しゅ」, a lamp with a steady flame. A hook: pouring water carefully into one spot, like a single steady flame. To pour, and to focus on one point. The kun'yomi 「そそ」 gives 「注ぐ|そそぐ」, to pour. The on'yomi 「ちゅう」 is in 「注意|ちゅうい」, attention, pouring your mind onto something. And 「注文|ちゅうもん」 is an order, as in ordering food. You'll hear 「ご注文は|ごちゅうもんは」 from waiters all the time. To recap: pouring water into one spot, meaning to pour, and to focus.",
    ja: "コーヒーを[注文|ちゅうもん|*]しました。",
    en: "I ordered a coffee." },
  "夏": {
    explain: "Scholars disagree about this shape, so here's a hook. Picture a person dancing with arms raised on top, and their feet stepping below. Dancing at a summer festival. The kun'yomi 「なつ」 is summer. 「夏休み|なつやすみ」 is summer vacation. The on'yomi 「か」 shows up in 「初夏|しょか」, early summer. A cultural note: Japanese summers are hot and humid, with the buzzing of cicadas everywhere, fireworks over rivers, and festivals where people dance in light cotton kimono. To recap: someone dancing at a summer festival, meaning summer.",
    ja: "[夏休み|なつやすみ|*]に[海|うみ]へ[行|い]きます。",
    en: "I'll go to the beach during summer vacation." },
  "魚": {
    explain: "A real picture of a fish standing on its nose. At the top is the head, in the middle is a scaly body, and the four dots at the bottom were once the tail fins. They look like the fire dots in other kanji, but here they're a tail. The kun'yomi 「さかな」 is fish. Another kun'yomi, 「うお」, is in 「魚市場|うおいちば」, a fish market. The on'yomi 「ぎょ」 is in 「金魚|きんぎょ」, a goldfish. And 「人魚|にんぎょ」 is a mermaid, a fish person. A fun fact: sushi restaurants often have teacups printed with dozens of fish kanji, all with this kanji on the left. To recap: a fish standing on its nose, meaning fish.",
    ja: "[金魚|きんぎょ|*]を[飼|か]っています。",
    en: "I keep goldfish." },
  "寺": {
    explain: "On top is 「土|つち」, earth. At the bottom is 「寸|すん」, a hand. Long ago it meant a government office. Then the first Buddhist monks in China were housed in one, and the kanji came to mean a Buddhist temple. The kun'yomi 「てら」 is temple, and 「お寺|おてら」 is the polite way to say it. It softens to 「でら」 in 「禅寺|ぜんでら」, a Zen temple. The on'yomi 「じ」 appears at the end of temple names, like 「東寺|とうじ」 in Kyoto. 「寺院|じいん」 is the formal word. This kanji also sits inside 「時|とき」, 「持|も」, and 「待|ま」, giving their sound. To recap: earth and a hand, meaning a temple.",
    ja: "[京都|きょうと]でお[寺|てら|*]を[見|み]ました。",
    en: "I saw temples in Kyoto." },
  "広": {
    explain: "The outside is a building radical, a roof with one wall. Inside is a small shape. A hook: a big building with plenty of room to spread out. Wide, spacious. The kun'yomi 「ひろ」 gives 「広い|ひろい」, spacious. Use it for rooms and roads, not for objects. 「広場|ひろば」 is a plaza, an open square. 「広島|ひろしま」 is Hiroshima, the wide island. The on'yomi 「こう」 shows up in 「広告|こうこく」, an advertisement, a message spread widely. Japanese trains are packed with paper ads hanging from the ceiling. To recap: a building with lots of room, meaning wide.",
    ja: "この[部屋|へや]は[広|ひろ|*]いです。",
    en: "This room is spacious." },
  "足": {
    explain: "A real picture: the box on top is the knee, and the bottom is a foot. Japanese uses one word for the whole thing, leg and foot together. The kun'yomi 「あし」 is leg or foot. Another kun'yomi, 「た」, gives 「足りる|たりる」, to be enough. A hook: your own two feet are enough to get you there. The on'yomi 「そく」 counts pairs of shoes and socks, as in 「一足|いっそく」, one pair. And 「不足|ふそく」 means a shortage, as in 「水不足|みずぶそく」, a water shortage. To recap: a knee and a foot, meaning leg, and enough.",
    ja: "お[金|かね]が[足|た|*]りません。",
    en: "I don't have enough money." },
  "転": {
    explain: "On the left is 「車|くるま」, a cart or wheel. On the right is a shape for spinning around. A wheel rolling: to turn, to roll over. The kun'yomi 「ころ」 gives 「転ぶ|ころぶ」, to trip and fall. It sounds like the Japanese sound for rolling, 「ころころ」. The on'yomi 「てん」 is in 「自転車|じてんしゃ」, a bicycle, a vehicle you turn yourself. And 「運転|うんてん」 is driving, moving and turning the wheels. To recap: a rolling wheel, meaning to turn, and to fall over.",
    ja: "[雪|ゆき]の[日|ひ]に[転|ころ|*]びました。",
    en: "I fell over on a snowy day." },
  "借": {
    explain: "On the left is the person radical. On the right is 「昔|むかし」, long ago, which gives the sound. A hook: something you got from a person a while ago and still haven't given back. To borrow. The kun'yomi 「か」 gives 「借りる|かりる」, to borrow. Don't mix it up with 「貸す|かす」, to lend. The on'yomi 「しゃく」 is in 「借家|しゃくや」, a rented house, and 「借地|しゃくち」, rented land. It shrinks to 「しゃっ」 in 「借金|しゃっきん」, debt, borrowed money. To recap: something from a person long ago, meaning to borrow.",
    ja: "[図書館|としょかん]で[本|ほん]を[借|か|*]りました。",
    en: "I borrowed a book from the library." },
  "走": {
    explain: "A real picture: on top is a person swinging their arms wide, and below is a foot, 「止|し」. A person running at full speed. The kun'yomi 「はし」 gives 「走る|はしる」, to run. Even though it ends in 「る」, it's a u-verb, so the te-form is 「走って|はしって」. 「走り書き|はしりがき」 is a scribble, notes written on the run. The on'yomi 「そう」 shows up in 「脱走|だっそう」, an escape. This running kanji also wraps around the bottom of 「起|お」, to get up. To recap: arms swinging over a foot, meaning to run.",
    ja: "[毎朝|まいあさ][公園|こうえん]を[走|はし|*]ります。",
    en: "I run in the park every morning." },
  "場": {
    explain: "On the left is 「土|つち」, earth. On the right is a shape showing the sun rising over the ground. An open stretch of ground in the sunshine: a place. The kun'yomi 「ば」 is place. 「場所|ばしょ」 is a location. 「市場|いちば」 is a market. 「場合|ばあい」 is a case or situation. The on'yomi 「じょう」 shows up in 「工場|こうじょう」, a factory. And 「駐車場|ちゅうしゃじょう」 is a parking lot. To recap: sunny open ground, meaning a place.",
    ja: "[駐車場|ちゅうしゃじょう|*]はどこですか。",
    en: "Where is the parking lot?" },
  "建": {
    explain: "On the right is a hand holding a brush, the same top piece you saw in 「書|か」, to write. Wrapping underneath on the left is a long stride. A hook: an architect striding around, drawing up the plans. To build. The kun'yomi 「た」 gives 「建てる|たてる」, to build something. 「建つ|たつ」 means a building goes up. 「建物|たてもの」 is a building, a built thing. The on'yomi 「けん」 shows up in 「建国|けんこく」, founding a nation. To recap: a brush and a long stride, meaning to build.",
    ja: "あの[建物|たてもの|*]は[古|ふる]いです。",
    en: "That building is old." },
  "地": {
    explain: "On the left is 「土|つち」, earth. The right side gives the sound. Earth: the ground, and land. The on'yomi 「ち」 is in 「地下|ちか」, underground. 「地下鉄|ちかてつ」 is the subway, the underground iron road. 「地図|ちず」 is a map, a drawing of the land. 「地球|ちきゅう」 is the Earth, the ground ball. Another on'yomi, 「じ」, is in 「地震|じしん」, an earthquake, the ground shaking. Japan has lots of small earthquakes, and every school holds earthquake drills. To recap: earth on the left, meaning the ground.",
    ja: "[地下鉄|ちかてつ|*]で[行|い]きます。",
    en: "I'll go by subway." },
  "通": {
    explain: "Along the bottom left is the road radical. On the right is a shape for a passage, a tube that things move through. Passing through. The kun'yomi 「とお」 gives 「通る|とおる」, to pass through. Another kun'yomi, 「かよ」, gives 「通う|かよう」, to commute, to go somewhere regularly. The on'yomi 「つう」 is in 「通学|つうがく」, commuting to school, and 「通勤|つうきん」, commuting to work. Tokyo rush-hour trains are famous for being packed with commuters. To recap: a passage along the road, meaning to pass through, and to commute.",
    ja: "[毎日|まいにち][電車|でんしゃ]で[通学|つうがく|*]しています。",
    en: "I commute to school by train every day." },
  /* ---------------- Lesson 16 ---------------- */
  "供": {
    explain: "On the left is the person radical. On the right is 「共|きょう」, which shows two hands holding something up together. A person holding something up as an offering. The kun'yomi 「ども」 is in 「子供|こども」, child. That 「ども」 was once a plural ending, so the word first meant children. Another kun'yomi, 「そな」, gives 「供える|そなえる」, to offer something, like flowers or food placed at a family altar for ancestors. The on'yomi 「きょう」 shows up in 「提供|ていきょう」, sponsorship, the word you see at the end of TV shows naming the sponsors. To recap: hands holding something up, meaning to offer.",
    ja: "[子供|こども|*]が[公園|こうえん]で[遊|あそ]んでいます。",
    en: "Children are playing in the park." },
  "世": {
    explain: "This kanji is three tens joined together. Three tens is thirty, and thirty years was counted as one generation. So it means a generation, and from that, the world people live in. The on'yomi 「せ」 is in 「世界|せかい」, the world, and 「世話|せわ」, taking care of someone. Another on'yomi, 「せい」, is in 「世代|せだい」, a generation, and in 「三世|さんせい」, third generation. The kun'yomi 「よ」 shows up in 「世の中|よのなか」, the world we live in, society. A lovely phrase: thanks for looking after me is 「お世話になりました|おせわになりました」. To recap: three tens make thirty years, meaning a generation, and the world.",
    ja: "[世界|せかい|*]を[旅行|りょこう]したいです。",
    en: "I want to travel around the world." },
  "界": {
    explain: "On top is 「田|た」, a rice field. Underneath is 「介|かい」, which means between. The line between two fields: a boundary. And from boundaries, a whole realm or world. It has the on'yomi 「かい」. 「世界|せかい」 is the world. 「視界|しかい」 is your field of vision, the boundary of what you can see. 「政界|せいかい」 is the world of politics. And 「限界|げんかい」 is a limit, the boundary you can't go past. Japanese students say 「もう限界|もうげんかい」 during exam week, meaning I can't take any more. To recap: the line between fields, meaning a boundary, and a world.",
    ja: "もう[限界|げんかい|*]です。",
    en: "I'm at my limit." },
  "全": {
    explain: "On top is a roof shape, like something covering and protecting. Underneath is a shape like 「王|おう」, which here stands for 「玉|たま」, jade. Perfect jade, kept safe and complete: whole. The kun'yomi 「まった」 gives 「全く|まったく」, completely, or not at all with a negative. Another kun'yomi, 「すべ」, gives 「全て|すべて」, all of it. The on'yomi 「ぜん」 is in 「全部|ぜんぶ」, all, every part. 「安全|あんぜん」 means safe, peaceful and whole. And 「全国|ぜんこく」 means the whole country, nationwide. To recap: perfect jade kept safe, meaning all, and whole.",
    ja: "[宿題|しゅくだい]を[全部|ぜんぶ|*]しました。",
    en: "I did all my homework." },
  "部": {
    explain: "On the right is the village radical, a squiggle that marks places and communities. A section of a village: a part. It has the on'yomi 「ぶ」. 「全部|ぜんぶ」 is all, every part. 「部長|ぶちょう」 is a department head, the head of a section. And there's a rare special reading you'll use every day: 「部屋|へや」, a room, a section of the house. A cultural note: Japanese school clubs are called 「部活|ぶかつ」, club activities. Students often practice every day after school and even on weekends. To recap: a section of a village, meaning a part.",
    ja: "[私|わたし]の[部屋|へや|*]は[小|ちい]さいです。",
    en: "My room is small." },
  "始": {
    explain: "On the left is 「女|おんな」, woman. On the right is 「台|だい」, a platform or stand, which gives the sound. A hook: the beginning of every life starts with a mother. To begin. The kun'yomi 「はじ」 gives a verb pair. 「始める|はじめる」 is to begin something, with 「を」. 「始まる|はじまる」 is when something begins by itself, with 「が」, as in class starts. The on'yomi 「し」 shows up in 「始発|しはつ」, the first train of the morning, and 「開始|かいし」, a start or launch. A tip: the greeting 「はじめまして」 shares this idea of a first beginning, though it's usually written in kana. To recap: life beginning with a mother, meaning to begin.",
    ja: "[授業|じゅぎょう]は[九時|くじ]に[始|はじ|*]まります。",
    en: "Class begins at nine." },
  "週": {
    explain: "Along the bottom left is the road radical. On the right is 「周|しゅう」, which means going all the way around, a full lap. Going around a full circuit of days: a week. It has the on'yomi 「しゅう」. 「毎週|まいしゅう」 is every week. 「先週|せんしゅう」 is last week, and 「来週|らいしゅう」 is next week. 「一週間|いっしゅうかん」 is one whole week. 「週末|しゅうまつ」 is the weekend, the end of the week. To recap: going all the way around, meaning a week.",
    ja: "[週末|しゅうまつ|*]に[映画|えいが]を[見|み]ます。",
    en: "I'll watch a movie on the weekend." },
  "考": {
    explain: "This kanji is close to the kanji for old, and it comes from a picture of an old person leaning on a cane. A wise elder, deep in thought. To think. The kun'yomi 「かんが」 gives 「考える|かんがえる」, to think something over. 「考え|かんがえ」 is an idea or a thought. A tip: 「考える|かんがえる」 is for working something out, while 「思う|おもう」 is for opinions and feelings. The on'yomi 「こう」 shows up in 「参考|さんこう」, a reference, something to think with. And 「考古学|こうこがく」 is archaeology, thinking about old things. To recap: an old person leaning on a cane in thought, meaning to think.",
    ja: "[将来|しょうらい]について[考|かんが|*]えています。",
    en: "I'm thinking about my future." },
  "開": {
    explain: "The outside is 「門|もん」, a gate. Inside are two hands lifting away the wooden bar that holds the doors shut. Opening the gate: to open. The kun'yomi 「あ」 gives a pair. 「開ける|あける」 is to open something. 「開く|あく」 is when something opens by itself. Another kun'yomi, 「ひら」, gives 「開く|ひらく」, to open up, like a book or a flower. The on'yomi 「かい」 shows up in 「開店|かいてん」, a store opening. Compare 「閉|し」, to close, the same gate with the bar locked in. To recap: hands lifting the bar off a gate, meaning to open.",
    ja: "[窓|まど]を[開|あ|*]けてください。",
    en: "Please open the window." },
  "屋": {
    explain: "On top is a roof shape. Underneath is 「至|し」, to arrive. A building you arrive at and stay in: a house, a roof, and a shop. The kun'yomi 「や」 goes on the end of words for shops and the people who run them. 「本屋|ほんや」 is a bookstore. 「魚屋|さかなや」 is a fish shop. And 「部屋|へや」 is a room. The on'yomi 「おく」 shows up in 「屋上|おくじょう」, a rooftop, a classic hangout spot in Japanese school dramas. And 「屋内|おくない」 means indoors. To recap: a building you arrive at, meaning a house, and a shop.",
    ja: "[本屋|ほんや|*]で[雑誌|ざっし]を[買|か]いました。",
    en: "I bought a magazine at the bookstore." },
  "方": {
    explain: "Scholars disagree about where this shape came from, so here's a hook. Picture a person with arms stretched out, pointing off in one direction. A direction, a side, and a way of doing things. The kun'yomi 「かた」 means the way to do something. Add it to a verb stem: 「読み方|よみかた」 is how to read, and 「書き方|かきかた」 is how to write. It softens to 「がた」 in 「夕方|ゆうがた」, evening. And 「方|かた」 on its own is a polite word for a person. The on'yomi 「ほう」 shows up in 「方法|ほうほう」, a method, and 「両方|りょうほう」, both sides. To recap: pointing in a direction, meaning a way, a side, and a polite person.",
    ja: "この[漢字|かんじ]の[読み方|よみかた|*]を[教|おし]えてください。",
    en: "Please tell me how to read this kanji." },
  "運": {
    explain: "Along the bottom left is the road radical. On the right is 「軍|ぐん」, an army. An army on the move, hauling its supplies: to transport. And the way fortune carries you along: luck. The kun'yomi 「はこ」 gives 「運ぶ|はこぶ」, to carry. The on'yomi 「うん」 is in 「運動|うんどう」, exercise, moving your body. 「運転|うんてん」 is driving. And 「運命|うんめい」 is destiny, fate. To recap: an army on the move, meaning to transport, and luck.",
    ja: "[毎日|まいにち][運動|うんどう|*]しています。",
    en: "I exercise every day." },
  "動": {
    explain: "On the left is 「重|おも」, heavy. On the right is 「力|ちから」, strength. Using your strength to move something heavy: to move. The kun'yomi 「うご」 gives 「動く|うごく」, to move. The on'yomi 「どう」 is in 「運動|うんどう」, exercise. 「動物|どうぶつ」 is an animal, a moving thing. 「自動車|じどうしゃ」 is a car, a vehicle that moves by itself. And in grammar, 「動詞|どうし」 is a verb, a moving word. Add a person on the left and you get 「働|はたら」, to work, a kanji invented in Japan. To recap: strength moving something heavy, meaning to move.",
    ja: "[動物|どうぶつ|*]が[好|す]きです。",
    en: "I like animals." },
  "教": {
    explain: "On the left is a child with some marks above it, things to be learned. On the right is a hand holding a stick, a teacher's pointer. Teaching a child. The kun'yomi 「おし」 gives 「教える|おしえる」, to teach, and also to tell someone something, like your phone number. The on'yomi 「きょう」 is in 「教室|きょうしつ」, a classroom. 「教科書|きょうかしょ」 is a textbook. And 「教会|きょうかい」 is a church, a place for teaching faith. To recap: a hand with a pointer teaching a child, meaning to teach.",
    ja: "[先生|せんせい]は[日本語|にほんご]を[教|おし|*]えています。",
    en: "The teacher teaches Japanese." },
  "室": {
    explain: "On top is the roof radical. Underneath is 「至|し」, to arrive. A room under the roof, where you arrive and stop. It has the on'yomi 「しつ」, and it goes on the end of words to name rooms. 「教室|きょうしつ」 is a classroom. 「研究室|けんきゅうしつ」 is a research lab, a professor's office. 「地下室|ちかしつ」 is a basement. And 「待合室|まちあいしつ」 is a waiting room, at a station or a clinic. Compare 「部屋|へや」, the everyday word for a room in your home. To recap: a roof over the place you arrive, meaning a room.",
    ja: "[教室|きょうしつ|*]に[学生|がくせい]がいます。",
    en: "There are students in the classroom." },
  "以": {
    explain: "This kanji's origin isn't clear, so here's a hook. Picture a person pointing to a spot and saying, from here. A starting point you measure from. It has the on'yomi 「い」, and it makes a whole family of measuring words. 「以上|いじょう」 is that much and more. 「以下|いか」 is that much and less. 「以内|いない」 is within. 「以前|いぜん」 is before, earlier. And 「以外|いがい」 is other than. On signs you'll see things like twenty years old 「以上|いじょう」 for alcohol. A tip: in Japanese, 「以上|いじょう」 includes the number itself, so ten and over includes ten. To recap: a point you measure from, meaning compared with.",
    ja: "[十人|じゅうにん][以上|いじょう|*]います。",
    en: "There are ten or more people." },
  /* ---------------- Lesson 17 ---------------- */
  "野": {
    explain: "On the left is 「里|さと」, a village with its rice fields. On the right is a shape that mostly gives the sound. Land around the village, out in the open: a field, the wild. The on'yomi 「や」 is in 「野球|やきゅう」, baseball, literally field ball, and 「野菜|やさい」, vegetables, field greens. 「分野|ぶんや」 is a field of study, a realm. The kun'yomi 「の」 shows up in lots of place and family names, like 「長野|ながの」, Nagano, the long field, and 「小野|おの」, as in Yoko Ono, the woman your textbook reading is about. A fun fact: the Japanese word for baseball was coined in the 1890s by a high school player, and it stuck. To recap: open land past the village, meaning a field.",
    ja: "[兄|あに]は[野球|やきゅう|*]が[好|す]きです。",
    en: "My older brother likes baseball." },
  "習": {
    explain: "The top is 「羽|はね」, wings, two feathers side by side. The traditional explanation is a young bird flapping its wings over and over, practicing until it can fly. That idea of repetition is the heart of this kanji. The kun'yomi 「なら」 gives 「習う|ならう」, to learn from a teacher, like taking piano lessons. The on'yomi 「しゅう」 is in 「練習|れんしゅう」, practice, and 「習慣|しゅうかん」, a habit, something done so often it sticks. And 「習字|しゅうじ」 is calligraphy class, practicing characters with a brush. Japanese kids often take it after school. A tip: 「習う|ならう」 is learning from someone, while studying on your own is 「勉強する|べんきょうする」. To recap: little wings flapping again and again, meaning to learn by practice.",
    ja: "[母|はは]に[料理|りょうり]を[習|なら|*]いました。",
    en: "I learned cooking from my mother." },
  "主": {
    explain: "This kanji is often explained as an oil lamp: a stand, with a flame dot on top. The lamp sits at the center of the room, so it means main, and the master of the house. The on'yomi 「しゅ」 is in 「ご主人|ごしゅじん」, someone's husband, the master of the house in old thinking. 「主婦|しゅふ」 is a housewife, and 「主語|しゅご」 is the subject of a sentence, its main word. The kun'yomi 「おも」 gives 「主に|おもに」, mainly. Another kun'yomi, 「ぬし」, is in 「持ち主|もちぬし」, an owner, the one who holds it. You've already met this lamp inside other kanji: 「住|す」, to live, and 「注|ちゅう」, to pour. To recap: the lamp at the center, meaning main, and master.",
    ja: "[週末|しゅうまつ]は[主|おも|*]に[家|いえ]にいます。",
    en: "On weekends I'm mainly at home." },
  "歳": {
    explain: "This is a complicated one, so here's a hook. Look for 「止|と」, a foot, on top, and a blade-like shape wrapping the bottom. Picture time marching on, one step a year, like a harvest cut once a year. A year, and a person's age. It has the on'yomi 「さい」, the counter you use for age: 「二十五歳|にじゅうごさい」, twenty-five years old. You'll often see the simpler 「才|さい」 used for ages too, especially on kids' things. Another on'yomi, 「せい」, shows up in 「お歳暮|おせいぼ」, the year-end gift. A cultural note: in December, Japanese people send 「お歳暮|おせいぼ」 to people who helped them during the year, like boxes of fruit, beer, or ham. And there's a special reading for twenty years old, the age of adulthood. To recap: steps marching through time, meaning a year of age.",
    ja: "[姉|あね]は[二十五歳|にじゅうごさい|*]です。",
    en: "My older sister is twenty-five." },
  "集": {
    explain: "This is a real picture, and a lovely one. The top is a bird, the shape used for short-tailed birds. The bottom is 「木|き」, a tree. In the oldest forms there were even three birds on the tree. Birds flocking together on a branch: to gather. The kun'yomi 「あつ」 gives 「集める|あつめる」, to collect, and 「集まる|あつまる」, to gather together. The on'yomi 「しゅう」 is in 「特集|とくしゅう」, a special feature in a magazine, a gathering of articles on one topic. And 「集中する|しゅうちゅうする」 means to concentrate, gathering your mind into the middle. To recap: birds flocking on a tree, meaning to gather.",
    ja: "[古|ふる]い[切手|きって]を[集|あつ|*]めています。",
    en: "I collect old stamps." },
  "発": {
    explain: "This kanji is simplified, but a good hook is to look at the top: two feet stepping out, the same top as in 「登|のぼ」, to climb. Feet setting off: starting out, and sending something out. It's all about launching. The on'yomi is 「はつ」, and it changes sound a lot. 「発音|はつおん」 is pronunciation, sending out sounds. 「発明|はつめい」 is an invention, bringing something to light. Before a p sound it shrinks to 「はっ」, as in 「発表|はっぴょう」, a presentation. And after another sound it can become 「ぱつ」, as in 「出発|しゅっぱつ」, departure, the word on airport and train boards. To recap: feet setting off, meaning to start, and to send out.",
    ja: "[明日|あした]、[授業|じゅぎょう]で[発表|はっぴょう|*]します。",
    en: "I'll give a presentation in class tomorrow." },
  "表": {
    explain: "This kanji began as a fur coat: fur, and clothing. The fur side is the outside, so it means the surface, the front, and from there, to show outwardly. The kun'yomi 「おもて」 is 「表|おもて」, the front or surface. Another kun'yomi, 「あらわ」, gives 「表す|あらわす」, to express, to show on the outside. The on'yomi 「ひょう」 is in 「表紙|ひょうし」, a book cover, and 「表現|ひょうげん」, an expression. After 「はっ」 it becomes 「ぴょう」, in 「発表|はっぴょう」, a presentation: sending out and showing. A tip: a schedule or chart is also called by this kanji, a table you show at a glance. To recap: the fur side of a coat, meaning the surface, and to express.",
    ja: "この[本|ほん]の[表紙|ひょうし|*]はきれいです。",
    en: "This book's cover is beautiful." },
  "品": {
    explain: "Three boxes stacked up. Each box is 「口|くち」, a mouth, and a stack of them is often explained as many items, or many people's opinions. A good hook: three packages piled on a shelf. Goods, and from the idea of quality, refinement. The on'yomi 「ひん」 is in 「作品|さくひん」, a work of art, a made thing. And 「上品|じょうひん」 means elegant, high quality. The kun'yomi 「しな」 is in 「品物|しなもの」, merchandise. It softens to 「じな」 in 「手品|てじな」, a magic trick, literally hand goods, things done with the hands. To recap: boxes stacked up, meaning goods, and refinement.",
    ja: "これはピカソの[作品|さくひん|*]です。",
    en: "This is a work by Picasso." },
  "写": {
    explain: "On top is a cover, like a lid placed over something. A hook: tracing a picture under a sheet of paper, copying it exactly. To copy. The kun'yomi 「うつ」 gives 「写す|うつす」, to copy, like copying notes from the board. The on'yomi 「しゃ」 is in 「写真|しゃしん」, a photograph, literally a copy of the truth. 「写生|しゃせい」 is sketching from life, copying what you see. And 「描写|びょうしゃ」 is a description, copying a scene into words or pictures. To recap: something traced under a cover, meaning to copy.",
    ja: "[友|とも]だちのノートを[写|うつ|*]しました。",
    en: "I copied my friend's notes." },
  "真": {
    explain: "This kanji's history is debated, so here's a hook. Look at 「目|め」, an eye, in the middle, standing on a little base. An eye looking straight at something: what you see is what's real. True, real, and exactly. The on'yomi 「しん」 is in 「写真|しゃしん」, a photograph, a true copy. The kun'yomi 「ま」 means exactly, right in the very. 「真ん中|まんなか」 is the very center. 「真上|まうえ」 is right above. And 「真夜中|まよなか」 is the dead of night, exact midnight. To recap: an eye looking straight on, meaning true, and exactly.",
    ja: "[部屋|へや]の[真ん中|まんなか|*]にテーブルがあります。",
    en: "There's a table in the middle of the room." },
  "字": {
    explain: "On top is the roof radical. Underneath is 「子|こ」, a child. A child growing up under the roof, the way new characters grew out of old ones. A hook: children at home practicing their letters. Letter, character. The on'yomi 「じ」 is in 「漢字|かんじ」, Chinese characters, the very things you're learning. 「名字|みょうじ」 is a family name. 「赤字|あかじ」 is a deficit, red letters, because losses were written in red ink. And 「文字|もじ」 means letters or characters, with a special short reading 「も」. 「大文字|おおもじ」 is a capital letter, a big letter. To recap: a child under the roof, meaning a letter.",
    ja: "[毎日|まいにち][漢字|かんじ|*]を[練習|れんしゅう]します。",
    en: "I practice kanji every day." },
  "活": {
    explain: "On the left are three drops, the water radical. On the right is 「舌|した」, tongue. A hook: water flowing, splashing, alive, like a lively tongue chattering away. Lively, active, and alive. The on'yomi 「かつ」 is in 「生活|せいかつ」, daily life, and 「活動|かつどう」, activity, lively movement. Before some sounds it shrinks to 「かっ」, as in 「活発|かっぱつ」, active and energetic, and 「活気|かっき」, liveliness. And in grammar, 「活用|かつよう」 is conjugation, verbs coming to life in different forms. To recap: flowing water and a lively tongue, meaning lively.",
    ja: "[大学|だいがく]の[生活|せいかつ|*]は[楽|たの]しいです。",
    en: "College life is fun." },
  "結": {
    explain: "On the left is the thread radical, a twist of silk. On the right is 「吉|きち」, good luck. Tying threads together for luck: to tie, to join. At Japanese shrines, people tie their paper fortunes onto strings or branches. The kun'yomi 「むす」 gives 「結ぶ|むすぶ」, to tie a knot. The on'yomi 「けつ」 shrinks to 「けっ」 before many sounds. 「結婚|けっこん」 is marriage, tying the knot. 「結果|けっか」 is a result, how things tied up. And 「結論|けつろん」 is a conclusion, the end where the argument gets tied. To recap: threads tied for good luck, meaning to tie.",
    ja: "テストの[結果|けっか|*]はよかったです。",
    en: "The test results were good." },
  "婚": {
    explain: "On the left is 「女|おんな」, woman. On the right is 「昏|こん」, dusk, which gives the sound. In ancient China, weddings were held in the evening, at dusk. So a woman at dusk is a wedding: marriage. It has the on'yomi 「こん」. 「結婚|けっこん」 is marriage, tying the knot. 「離婚|りこん」 is divorce, separating. 「新婚|しんこん」 means newlywed. 「婚約者|こんやくしゃ」 is a fiancé, a person with a marriage promise. And 「未婚|みこん」 means not yet married. To recap: a woman at dusk, meaning marriage.",
    ja: "[姉|あね]は[去年|きょねん][結婚|けっこん|*]しました。",
    en: "My older sister got married last year." },
  "歩": {
    explain: "This is a real picture of two footprints. The top is 「止|と」, a foot, and the bottom is another foot turned the other way. One foot in front of the other: to walk. The kun'yomi 「ある」 gives 「歩く|あるく」, to walk. The on'yomi 「ほ」 is in 「歩道|ほどう」, a sidewalk, a walking road. It changes to 「ぽ」 after other sounds: 「散歩|さんぽ」 is a stroll, 「一歩|いっぽ」 is one step, and 「進歩|しんぽ」 is progress, stepping forward. A cultural note: walking the dog, 「犬の散歩|いぬのさんぽ」, is an everyday sight in Japanese neighborhoods. To recap: two footprints, meaning to walk.",
    ja: "[毎朝|まいあさ][犬|いぬ]と[散歩|さんぽ|*]します。",
    en: "I take a walk with my dog every morning." },
  /* ---------------- Lesson 18 ---------------- */
  "目": {
    explain: "A real picture of an eye, drawn sideways long ago and then stood up on end to save space. That's why it's a tall box with lines inside. The kun'yomi 「め」 is eye. 「目薬|めぐすり」 is eye drops, eye medicine. 「目上の人|めうえのひと」 is someone above you in rank, above your eye level. And after a number, 「目|め」 makes order words: 「二番目|にばんめ」, the second one. The on'yomi 「もく」 is in 「目的|もくてき」, a purpose, the target your eye is fixed on. This eye also sits on top of 「見|み」, to see, an eye walking on legs. To recap: a picture of an eye, meaning eye.",
    ja: "[留学|りゅうがく]の[目的|もくてき|*]は[何|なん]ですか。",
    en: "What is the purpose of your study abroad?" },
  "的": {
    explain: "On the left is 「白|しろ」, white. On the right is a ladle shape that gives the sound. The original meaning is a bright, clear target, the white bullseye you aim at. The kun'yomi 「まと」 is a target. The on'yomi 「てき」 is in 「目的|もくてき」, a purpose, the target your eye is fixed on. And here's the useful part: 「的|てき」 on the end of a word works like English -ic or -ish, turning a noun into an adjective. 「社会的|しゃかいてき」 is social. 「現代的|げんだいてき」 is modern. You'll see it everywhere in newspapers. To recap: a bright white target, meaning a target, and the -ish ending.",
    ja: "この[町|まち]は[現代的|げんだいてき|*]です。",
    en: "This town is modern." },
  "洋": {
    explain: "On the left is the water radical. On the right is 「羊|ひつじ」, a sheep, which gives the sound. A hook: waves rolling like a flock of white sheep, out on the open ocean. The ocean, and the lands across it, the West. It has the on'yomi 「よう」. 「大西洋|たいせいよう」 is the Atlantic Ocean. 「東洋|とうよう」 is the East, Asia. Then Western things: 「洋服|ようふく」, Western clothes, and 「洋食|ようしょく」, Western food. A cultural note: 「洋食|ようしょく」 also means Japanese-style Western dishes, like omelet rice and hamburg steak, served in cozy old restaurants. To recap: sheep-like waves on the ocean, meaning overseas, and Western.",
    ja: "[洋服|ようふく|*]を[買|か]いに[行|い]きます。",
    en: "I'm going to buy clothes." },
  "服": {
    explain: "On the left is a shape that looks like 「月|つき」, the moon, but here it's really a boat. The right side shows a hand pressing down on someone. The old meaning was to obey or to serve, then it came to mean the clothes you wear. A hook: clothes wrapped around your body. It has the on'yomi 「ふく」. 「服|ふく」 on its own means clothes. 「洋服|ようふく」 is Western clothes, and 「和服|わふく」 is Japanese clothes, like a kimono. 「制服|せいふく」 is a uniform. Most Japanese junior high and high schools have them. To recap: something you put on, meaning clothes.",
    ja: "[学校|がっこう]の[制服|せいふく|*]は[青|あお]いです。",
    en: "My school uniform is blue." },
  "堂": {
    explain: "On top is 「尚|しょう」, a shape for a high building. At the bottom is 「土|つち」, earth, the raised ground it stands on. A big building on a raised base: a hall. It has the on'yomi 「どう」. 「食堂|しょくどう」 is a cafeteria, a hall for eating. 「公会堂|こうかいどう」 is a public hall for meetings and concerts. And 「堂々とした|どうどうとした」 means dignified, imposing, standing tall like a great hall. Compare 「学|がく」, learning. Its top looks very similar. To recap: a building on raised ground, meaning a hall.",
    ja: "[大学|だいがく]の[食堂|しょくどう|*]で[昼|ひる]ご[飯|はん]を[食|た]べます。",
    en: "I eat lunch in the college cafeteria." },
  "力": {
    explain: "This kanji began as a picture of a plow, or of a strong arm flexing. Either way it means power, strength. You've seen it as a piece in other kanji: 「男|おとこ」, man, is a field plus strength, and 「動|うご」, to move, is heavy plus strength. The kun'yomi 「ちから」 is power. 「力仕事|ちからしごと」 is physical labor. The on'yomi 「りょく」 is in 「協力|きょうりょく」, cooperation, joining your strength, and 「努力|どりょく」, effort. Another on'yomi, 「りき」, is in 「力士|りきし」, a sumo wrestler, a strong man. To recap: a strong arm, meaning power.",
    ja: "みんなで[協力|きょうりょく|*]しましょう。",
    en: "Let's all work together." },
  "授": {
    explain: "On the left is the hand radical. On the right is 「受|じゅ」, to receive, which shows hands passing something between them. A hand giving, and a hand receiving: to give, to teach. The on'yomi 「じゅ」 is in 「授業|じゅぎょう」, a class, the teacher giving lessons. 「教授|きょうじゅ」 is a professor, someone who teaches and gives. The kun'yomi 「さず」 gives 「授かる|さずかる」, to be given, to receive as a gift. People say it about blessings, like being blessed with a child. To recap: hands passing something along, meaning to give, and to teach.",
    ja: "[今日|きょう]は[授業|じゅぎょう|*]がありません。",
    en: "I don't have class today." },
  "業": {
    explain: "This kanji began as a picture of a wooden rack for hanging musical instruments, with fancy notches on top. From the craftsman's work board, it came to mean work, business, and a trade. It has the on'yomi 「ぎょう」. 「授業|じゅぎょう」 is a class. 「職業|しょくぎょう」 is an occupation. 「産業|さんぎょう」 is an industry. And 「卒業|そつぎょう」, in lesson nineteen, is graduating, finishing your studies. You'll also see it in words for service industries and company work. To recap: a craftsman's rack, meaning work, and business.",
    ja: "お[父|とう]さんの[職業|しょくぎょう|*]は[何|なん]ですか。",
    en: "What is your father's occupation?" },
  "試": {
    explain: "On the left is the speech radical, 「言|げん」. On the right is 「式|しき」, a ceremony or set method. Testing someone with words, by a set method: to test, to try. The on'yomi 「し」 is in 「試験|しけん」, an exam. 「試合|しあい」 is a game or match, where two sides test each other. 「入試|にゅうし」 is an entrance exam, short for the test to get in. The kun'yomi 「こころ」 gives 「試みる|こころみる」, to try, to attempt. A cultural note: Japanese entrance exams are so tough they've been called exam hell, and students buy good-luck charms at shrines. To recap: words and a method, meaning to test.",
    ja: "[明日|あした][試験|しけん|*]があります。",
    en: "I have an exam tomorrow." },
  "験": {
    explain: "On the left is 「馬|うま」, a horse. You can see its mane and four legs at the bottom. In old China, people checked a horse's quality to see if it was any good. So the meaning is to examine, to test, to put to the proof. It has the on'yomi 「けん」. 「試験|しけん」 is an exam. 「経験|けいけん」 is experience, things you've gone through and tested. 「実験|じっけん」 is an experiment, a real test. And 「受験|じゅけん」 is taking an entrance exam. To recap: checking a horse, meaning to examine.",
    ja: "[日本|にほん]で[働|はたら]いた[経験|けいけん|*]があります。",
    en: "I have experience working in Japan." },
  "貸": {
    explain: "On top is 「代|だい」, to replace. At the bottom is 「貝|かい」, a shell, which stood for money in ancient times. Money or things that go to someone else for a while, in place of yours: to lend. The kun'yomi 「か」 gives 「貸す|かす」, to lend. Don't mix it up with 「借りる|かりる」, to borrow. With lending, the thing goes away from you. 「貸し出し|かしだし」 is lending out, like at a library. The on'yomi 「たい」 is in 「賃貸|ちんたい」, renting out. You'll see it on apartment ads. To recap: money going out in your place, meaning to lend.",
    ja: "[友|とも]だちにかさを[貸|か|*]しました。",
    en: "I lent my umbrella to a friend." },
  "図": {
    explain: "The outside is a box, a boundary. Inside is a shape for a careful plan, simplified from an older form that showed a drawn map of a region. A drawing inside a frame: a diagram, a map, and a plan. The on'yomi 「ず」 is in 「地図|ちず」, a map, and 「図|ず」, a figure in a book. 「合図|あいず」 is a signal. Another on'yomi, 「と」, is in 「図書館|としょかん」, the library. The kun'yomi 「はか」 gives 「図る|はかる」, to attempt, to plan. To recap: a drawing in a frame, meaning a diagram, and to plan.",
    ja: "[地図|ちず|*]を[見|み]せてください。",
    en: "Please show me the map." },
  "館": {
    explain: "On the left is the food radical, a squeezed form of 「食|しょく」. On the right is a building on a hill. Long ago, this kanji meant a guesthouse where travelers were fed. Now it means any large building or hall. It has the on'yomi 「かん」, and it ends lots of building words. 「図書館|としょかん」 is a library. 「映画館|えいがかん」 is a movie theater. 「旅館|りょかん」 is a Japanese inn, where you still get fed. 「大使館|たいしかん」 is an embassy. And 「美術館|びじゅつかん」 is an art museum. To recap: food and a building, meaning a hall.",
    ja: "[映画館|えいがかん|*]で[映画|えいが]を[見|み]ました。",
    en: "I saw a movie at the movie theater." },
  "終": {
    explain: "On the left is the thread radical. On the right is 「冬|ふゆ」, winter, the end of the year. A hook: the end of the thread, like the end of the year. The end. The kun'yomi 「お」 gives 「終わる|おわる」, to come to an end, and 「終わり|おわり」, the end. The on'yomi 「しゅう」 is in 「終点|しゅうてん」, the last stop of a train or bus line. And 「最終|さいしゅう」 is the very last, like the last train of the night. A tip: Japanese movies and anime often finish with this kanji alone, meaning the end. To recap: thread and winter, meaning the end.",
    ja: "[授業|じゅぎょう]は[三時|さんじ]に[終|お|*]わります。",
    en: "Class ends at three." },
  "宿": {
    explain: "On top is the roof radical. Underneath is a person lying on a mat. A person sleeping under a roof for the night: an inn, a lodging. The kun'yomi 「やど」 is an inn. The on'yomi 「しゅく」 is in 「宿泊|しゅくはく」, lodging, staying overnight. 「下宿|げしゅく」 is a boardinghouse. And 「宿題|しゅくだい」 is homework, a topic you take home overnight. The Tokyo district Shinjuku is written new lodging, because it was a new post town on an old highway. To recap: a person sleeping under a roof, meaning an inn.",
    ja: "[宿題|しゅくだい|*]をしました。",
    en: "I did my homework." },
  "題": {
    explain: "On the left is 「是|ぜ」, correct, which gives the sound. On the right is a radical for a head. The forehead, the top of something: a title, a heading, a topic. It has the on'yomi 「だい」. 「題|だい」 alone is a title. 「宿題|しゅくだい」 is homework. 「問題|もんだい」 is a problem or a question. And 「話題|わだい」 is a topic of conversation. A tip: 「問題ない|もんだいない」, no problem, is a handy everyday phrase. To recap: the head of something, meaning a title, and a topic.",
    ja: "それは[問題|もんだい|*]ないです。",
    en: "That's no problem." },
  /* ---------------- Lesson 19 ---------------- */
  "春": {
    explain: "At the bottom is 「日|ひ」, the sun. The top came from an old drawing of plants sprouting under the warming sun. New growth in the sunshine: spring. The kun'yomi 「はる」 is spring. 「春巻|はるまき」 is a spring roll. The on'yomi 「しゅん」 is in 「春分|しゅんぶん」, the spring equinox, which is a national holiday in Japan. And 「青春|せいしゅん」 means youth, literally the green spring of your life. A cultural note: spring is when the school year and work year start in Japan, right as cherry blossoms bloom. To recap: plants sprouting in the sun, meaning spring.",
    ja: "[春|はる|*]になると、さくらがさきます。",
    en: "When spring comes, the cherry blossoms bloom." },
  "秋": {
    explain: "On the left is 「禾|のぎ」, a stalk of grain with a drooping head. On the right is 「火|ひ」, fire. Harvest time, when the grain is ripe and fields glow like fire. Autumn. The kun'yomi 「あき」 is autumn. 「秋学期|あきがっき」 is the fall semester. The on'yomi 「しゅう」 is in 「秋分|しゅうぶん」, the autumn equinox, another national holiday. A cultural note: autumn in Japan is famous for red maple leaves, and people even talk about autumn as the season of appetite, because the harvest food is so good. To recap: grain and fire, the harvest season, meaning autumn.",
    ja: "[秋|あき|*]はすずしいです。",
    en: "Autumn is cool." },
  "冬": {
    explain: "Look at the two little dots at the bottom. That's the ice radical, two drops frozen solid. The top came from a drawing of the end of a thread, the end of the year. The end of the year, with ice: winter. The kun'yomi 「ふゆ」 is winter. 「冬休み|ふゆやすみ」 is winter vacation. The on'yomi 「とう」 is in 「暖冬|だんとう」, a warm winter. And 「春夏秋冬|しゅんかしゅうとう」 is the four seasons, all four kanji in a row. You'll find winter again inside 「終|お」, the end, with a thread on the left. To recap: ice at the bottom, the end of the year, meaning winter.",
    ja: "[冬休み|ふゆやすみ|*]にスキーに[行|い]きます。",
    en: "I'm going skiing over winter vacation." },
  "花": {
    explain: "On top is the grass radical, the plant marker. Underneath is 「化|か」, to change. A plant that transforms, opening from a bud into bloom: a flower. The kun'yomi 「はな」 is flower. 「花見|はなみ」 is flower viewing, picnics under the cherry blossoms. 「花火|はなび」 is fireworks, flowers of fire. It softens to 「ばな」 in 「生け花|いけばな」, the art of flower arranging. The on'yomi 「か」 is in 「花粉症|かふんしょう」, hay fever. A cultural note: millions of people in Japan get hay fever from cedar pollen every spring, so masks are everywhere in March. To recap: a plant that changes, meaning flower.",
    ja: "[週末|しゅうまつ]に[花見|はなみ|*]をしましょう。",
    en: "Let's go flower viewing this weekend." },
  "様": {
    explain: "On the left is 「木|き」, a tree. The right side gives the sound. The old meaning was the shape or pattern of something, and from looking at someone's appearance, it became a very polite title. The kun'yomi 「さま」 is the extra-polite version of 「さん」. 「お客様|おきゃくさま」 is the respectful word for a customer. 「皆様|みなさま」 is everyone, said politely, like ladies and gentlemen in an announcement. And letters are addressed with someone's name plus 「様|さま」. The on'yomi 「よう」 is in 「様子|ようす」, how things look, the state of things. To recap: the pattern of a tree, meaning appearance, and an honorific title.",
    ja: "[お客様|おきゃくさま|*]、こちらへどうぞ。",
    en: "Sir, this way please." },
  "不": {
    explain: "This kanji is often explained as a bird flying up toward the sky but not reaching it, or as a flower's base. Its job is simple: it means not, or un-, like a negative prefix. The on'yomi 「ふ」 goes in front of other words to flip them. 「不安|ふあん」 is anxious, not at ease. 「不便|ふべん」 is inconvenient. 「不景気|ふけいき」 is a recession, bad economic times. Another on'yomi, 「ぶ」, is in 「水不足|みずぶそく」, a water shortage, not enough water. To recap: the negative prefix, meaning not, or un-.",
    ja: "[明日|あした]の[試験|しけん]が[不安|ふあん|*]です。",
    en: "I'm worried about tomorrow's exam." },
  "姉": {
    explain: "On the left is 「女|おんな」, woman. On the right is 「市|し」, market, which gives the sound. A woman, the one at the head of the line of girls: older sister. The kun'yomi 「あね」 is how you talk about your own older sister. 「お姉さん|おねえさん」, with the reading 「ねえ」, is someone else's older sister, or what you call your own. The on'yomi 「し」 is in 「姉妹|しまい」, sisters. And 「姉妹都市|しまいとし」 is a sister city. Many American and Japanese cities are sister cities. To recap: a woman, the older sister.",
    ja: "[姉|あね|*]は[東京|とうきょう]に[住|す]んでいます。",
    en: "My older sister lives in Tokyo." },
  "兄": {
    explain: "At the top is 「口|くち」, a mouth. Underneath are two legs, the same legs you see under the eye in 「見|み」, to see. A mouth on legs: the older brother who does all the talking. The kun'yomi 「あに」 is how you talk about your own older brother. 「お兄さん|おにいさん」, with the reading 「にい」, is someone else's older brother, or what you call your own. The on'yomi 「きょう」 is in 「兄弟|きょうだい」, brothers, or siblings in general, literally older brother plus younger brother. To recap: a mouth on legs, the talkative older brother.",
    ja: "[兄|あに|*]は[大学生|だいがくせい]です。",
    en: "My older brother is a college student." },
  "漢": {
    explain: "On the left is the water radical. The kanji first named the Han River in China. A dynasty rose there, the Han dynasty, and its name came to stand for China itself. It has the on'yomi 「かん」. 「漢字|かんじ」 is Chinese characters, Han letters, the very kanji you're studying. 「漢方薬|かんぽうやく」 is traditional Chinese herbal medicine, sold in many Japanese pharmacies. And 「漢和辞典|かんわじてん」 is a kanji dictionary, Chinese to Japanese. To recap: the Han River, meaning China.",
    ja: "[漢字|かんじ|*]はおもしろいです。",
    en: "Kanji are interesting." },
  "卒": {
    explain: "This kanji began as a picture of a soldier's uniform, a garment with a mark on it. Soldiers finish their service, so it came to mean to finish, and to graduate. It has the on'yomi 「そつ」. 「卒業|そつぎょう」 is graduation, finishing your studies. 「卒業式|そつぎょうしき」 is the graduation ceremony. And 「大卒|だいそつ」 is a university graduate, short for finished college. Job ads in Japan often say they want a 「大卒|だいそつ」. To recap: a soldier's uniform, meaning to finish, and to graduate.",
    ja: "[来年|らいねん]、[大学|だいがく]を[卒業|そつぎょう|*]します。",
    en: "I'll graduate from college next year." },
  "工": {
    explain: "This kanji began as a picture of a carpenter's tool, a square ruler or a mallet. A tool for building: craft, construction, and engineering. The on'yomi 「こう」 is in 「工学|こうがく」, engineering. 「工事|こうじ」 is construction work, and you'll see the sign on every building site. 「工場|こうじょう」 is a factory. Another on'yomi, 「く」, is in 「大工|だいく」, a carpenter, a big craftsman. You've seen this tool inside 「空|そら」, sky, and 「左|ひだり」, left. To recap: a carpenter's tool, meaning craft, and construction.",
    ja: "[兄|あに]は[大学|だいがく]で[工学|こうがく|*]を[勉強|べんきょう]しています。",
    en: "My older brother studies engineering at college." },
  "研": {
    explain: "On the left is 「石|いし」, a stone. The right side gives the sound. A whetstone, grinding and polishing a blade until it's sharp: to polish. From polishing things, it came to mean polishing your knowledge, to study. The kun'yomi 「と」 gives 「研ぐ|とぐ」, to sharpen, like a knife. In Japanese kitchens, you'll also hear it for washing rice. The on'yomi 「けん」 is in 「研究|けんきゅう」, research. 「研究者|けんきゅうしゃ」 is a researcher. And 「研修|けんしゅう」 is job training. To recap: a whetstone, meaning to polish, and to study.",
    ja: "[母|はは]は[包丁|ほうちょう]を[研|と|*]いでいます。",
    en: "My mother is sharpening a kitchen knife." },
  "究": {
    explain: "On top is 「穴|あな」, a hole or a cave. Underneath is 「九|きゅう」, nine, which gives the sound. A hook: going nine levels deep into a cave, to the very bottom. To investigate thoroughly. The kun'yomi 「きわ」 gives 「究める|きわめる」, to master something completely. The on'yomi 「きゅう」 is in 「研究|けんきゅう」, research, polishing and digging deep. And 「探究|たんきゅう」 is an inquiry, searching to the bottom of something. To recap: digging to the bottom of a cave, meaning research.",
    ja: "[大学|だいがく]で[日本|にほん]の[文化|ぶんか]を[研究|けんきゅう|*]しています。",
    en: "I research Japanese culture at college." },
  "質": {
    explain: "On top are two axes, 「斤|きん」. At the bottom is 「貝|かい」, a shell, which stood for money. Something of value held as a pledge: from that, it came to mean substance, quality. The on'yomi 「しつ」 is in 「質問|しつもん」, a question, asking about the substance of something. 「質がいい|しつがいい」 means good quality. 「素質|そしつ」 is natural talent. Another on'yomi, 「しち」, is in 「質屋|しちや」, a pawn shop, where valuables are held as a pledge. To recap: axes and money, meaning quality, and substance.",
    ja: "[先生|せんせい]に[質問|しつもん|*]があります。",
    en: "I have a question for the teacher." },
  "問": {
    explain: "The outside is 「門|もん」, a gate, which gives the sound. Inside is 「口|くち」, a mouth. A mouth at the gate, calling out a question to someone inside. To ask. The kun'yomi 「と」 gives 「問う|とう」, to question, a formal word. The on'yomi 「もん」 is in 「質問|しつもん」, a question. 「問題|もんだい」 is a problem, or a question on a test. And 「訪問|ほうもん」 is a visit, going to someone's gate. Compare 「聞|き」, to listen, which is a gate with an ear inside. To recap: a mouth at the gate, meaning to ask.",
    ja: "この[問題|もんだい|*]はむずかしいです。",
    en: "This problem is difficult." },
  "多": {
    explain: "Two copies of 「夕|ゆう」, evening, stacked up. One explanation is two slabs of meat piled on each other, more than enough. A simpler hook: evening after evening piling up. Many. The kun'yomi 「おお」 gives 「多い|おおい」, many, a lot. Remember to use it at the end of a sentence, like there are many people. Before a noun, say 「多くの|おおくの」. The on'yomi 「た」 is in 「多分|たぶん」, probably, a large share of the chance. And 「多数決|たすうけつ」 is majority vote, deciding by the larger number. To recap: things piled up, meaning many.",
    ja: "[東京|とうきょう]は[人|ひと]が[多|おお|*]いです。",
    en: "There are a lot of people in Tokyo." }
});
