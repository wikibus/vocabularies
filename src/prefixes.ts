const prefixes = {
  wba: 'https://wikibus.org/api#',
  wbo: 'https://wikibus.org/ontology#'
}

type LocalPrefixes = typeof prefixes

declare module '@zazuko/rdf-vocabularies/prefixes' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Prefixes extends LocalPrefixes {
  }
}

export default prefixes
