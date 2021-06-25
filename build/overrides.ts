interface FileSpec {
  file?: string;
  mediaType?: string;
  xmlParserOptions?: {
    baseIRI: string;
  };
}

export interface Override extends FileSpec {
  skip?: boolean;
  files?: FileSpec[];
}

export const overrides: Record<string, Override> = {
  wba: {
    file: 'file:src/vocabularies/api.ttl'
  },
  'wb-events': {
    file: 'file:src/vocabularies/api-events.ttl'
  },
  wbo: {
    file: 'file:src/vocabularies/ontology.ttl'
  }
}
