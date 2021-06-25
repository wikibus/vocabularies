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
  wba: 'file:src/vocabulary/api.ttl',
  wbo: 'file:src/vocabulary/ontology.ttl'
}
