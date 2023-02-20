import { useState } from 'react'
import languageColors from './github-lang-colors.json'

export default function ProjectItem({
  name,
  linkTo,
  description,
  mainLanguage,
}) {
  const [programmingColor, setColor] = useState(
    languageColors[mainLanguage] || 'gainsboro',
  )

  return (
    <li className="mb-3 max-w-xl full">
      <a
        href={linkTo}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col justify-start space-x-3 p-3 bg-white dark:bg-neutral-900 dark:hover:bg-neutral-800 shadow-md hover:shadow-lg rounded-md space-y-3 transition-all duration-200"
      >
        <div className="font-mono text-xl font-extrabold dark:text-white">
          {name}
        </div>
        <div
          className="font-mono space-y-3"
          style={{ color: programmingColor }}
        >
          {description}
        </div>
      </a>
    </li>
  )
}
