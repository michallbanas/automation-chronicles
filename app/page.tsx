"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"

const words = ["návštevník", "testerka", "recruiter", "developerka", "ktokoľvek"]

export default function Home() {
  const index = useRef(0)
  const [word, setWord] = useState(words[0])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index.current < words.length - 1) {
        index.current = index.current + 1
        setWord(words[index.current])
      } else {
        clearInterval(intervalId)
      }
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section>
      <h2 className="text-center text-4xl font-bold pt-20">
        <div className="grid grid-cols-5 items-center">
          <div className="col-span-2 justify-self-end pr-2">
            <span role="img" aria-label="Waving hand">
              👋
            </span>{" "}
            Ahoj
          </div>
          <div className="col-span-3 justify-self-start bg-indigo-500 px-1.5">
            <ul className="block text-left leading-tight [&_li]:block">
              <li>{word}</li>
            </ul>
          </div>
        </div>
      </h2>
      <article data-test="article-description">
        <p className="pt-10">
          Volám sa <strong>Michal</strong>, pracujem ako QA Platform Enginner, ale rád vyvíjam aj vlastné projekty.
          Keďže som sa narodil v roku v ktorom Nirvana zmenila svet albumom Nevermind, tak moje srdce stále patrí do
          90-tiek. Ale kvôli tomu tu asi nie si, však? Ak si chceš prečítať niečo, čo som napísal, tak klikni na {""}
          <u>
            <Link href="/blog">Blog</Link>
          </u>
          . A ak si chceš prečítať viac o mne, klikni na{" "}
          <u>
            <Link href="/o-mne">O mne</Link>
          </u>
          .
        </p>
      </article>
    </section>
  )
}
