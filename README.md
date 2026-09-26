# 読み方 Yomikata

A kanji **readings** trainer for Genki, lessons 9–16. Most kanji apps teach one
meaning per character; this one drills the thing that actually stops you mid-sentence —
which reading fires in which compound, and why.

**Play it:** https://berlintintin.github.io/yomikata/

Part of [Fun by Heinze](https://github.com/berlintintin) · ハインゼの楽しさ

---

## What's in it

Pick any range of lessons, then choose a mode:

| Mode | What you do |
|---|---|
| **Read words** | A word appears; pick its full reading. Wrong options are real readings swapped in for one kanji. |
| **Read sentences** | Read through a sentence; one compound is the target. |
| **Sound cloze** | Hear a word, find the missing kanji. |
| **Build a word** | Drag kanji into slots to spell a word from its reading. |
| **Type the reading** | Type it in hiragana; tap any kanji for furigana. |
| **Story time** | A short story with numbered kanji; fill in every reading, then check. |
| **Write the readings** | Type a kanji's on'yomi and kun'yomi from memory, with a three-step hint ladder. |
| **On or kun?** | Drag a kanji's real readings into the right box; leave the impostors. |
| **Pronunciations** | A passive, spoken slideshow — each kanji's readings with an example word. |

Plus a per-kanji lookup with every reading, every word, and a focused drill.

Progress is stored in the browser (`localStorage`), so it stays on whichever device
you play on. Audio uses the browser's Japanese voice.

## Files

    index.html            the whole app — engine, styles, sound, artwork
    yomikata-content.js   every lesson: kanji, words, sentences, stories

No build step, no dependencies, no server. Open `index.html` and it runs.
Only Google Fonts is fetched from the network; it falls back to system fonts offline.

## Adding a lesson

Everything Genki-specific lives in `yomikata-content.js` — `index.html` never needs
editing. Add a block:

```js
lessons[17] = [
  {ch:'漢', mn:'meaning', on:['オン'], kun:['くん'], words:[
    ['漢字', 'かん.じ', 'kanji'],
    ['漢の国', 'かん.の.くに', 'the land of Han', true]
  ]},
];
```

The reading is **segmented per character** with `.` — one segment per character of
the written form, okurigana included:

    音楽    → おん.がく      (2 characters, 2 segments)
    楽しい  → たの.し.い     (3 characters, 3 segments)
    お弁当  → お.べん.とう   (3 characters, 3 segments)

That segmentation is what drives furigana, per-kanji hints, and the decoys.

**The one hard rule:** the segment sitting on the kanji itself must appear in that
kanji's `on` or `kun` list, or a quiz question could have no correct answer. Skip
entries Genki prints with a reading it doesn't teach (梅雨 つゆ, 今朝 けさ,
上手な じょうずな) and anything in katakana (香港, テニス部).

A 4th field of `true` marks an exception worth extra praise — rendaku, a rare
reading, kun'yomi inside a compound.

The file header documents the optional extras too: `other` (meanings for non-lesson
kanji), `why` (one line on why those kanji make that word), `highlighted`,
`sentences`, `stories`, `storyBase`.

### Check your work

Open the page and run this in the browser console:

```js
yomikataCheck()
```

It validates the whole content file and names anything wrong — segment count not
matching character count, a reading missing from the kanji's on/kun list, a kanji
absent from its own word, duplicates, a sentence with no target. Clean output looks
like:

    yomikataCheck: clean — 8 lessons, 122 kanji, 494 words

## Credits

Vocabulary and readings follow *Genki: An Integrated Course in Elementary Japanese*
(The Japan Times). This is a personal study tool, not affiliated with the publisher.
