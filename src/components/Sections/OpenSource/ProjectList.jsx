import ProjectItem from './ProjectItem'

export default function ProjectList() {
  return (
    <ul className="list-none">
      <ProjectItem
        name="sphinxql"
        linkTo="https://github.com/SiroDiaz/sphinxql"
        mainLanguage="TypeScript"
        description="SphinxQL query builder for Node.js."
      />

      <ProjectItem
        name="Base62"
        linkTo="https://github.com/SiroDiaz/Base62"
        mainLanguage="PHP"
        description="PHP Base62 encoder and decorder for big numbers."
      />

      <ProjectItem
        name="laravel-redirection"
        linkTo="https://github.com/SiroDiaz/laravel-redirection"
        mainLanguage="PHP"
        description="Laravel 8.x and 9.x package to manage URL redirections."
      />

      <ProjectItem
        name="php-klaviyo-api"
        linkTo="https://github.com/SiroDiaz/php-klaviyo-api"
        mainLanguage="PHP"
        description="Low level but elegant Klaviyo full API wrapper."
      />

      <ProjectItem
        name="trysharpen/versionna"
        linkTo="https://github.com/trysharpen/versionna"
        mainLanguage="PHP"
        description="Sharpen Versionna is a PHP migration system to manage versioning of Manticoresearch. It includes a CLI tool to keep your Manticore index schemas and your data on sync."
      />
    </ul>
  )
}
