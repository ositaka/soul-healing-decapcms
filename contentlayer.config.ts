import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'

const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `page/*.md`,
  contentType: 'markdown',
  fields: {
    slug: {
      type: 'string',
    },
    title: {
      type: 'string',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    gallery: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

const News = defineDocumentType(() => ({
  name: 'News',
  filePathPattern: `news/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: false,
    },
    slug: {
      type: 'string',
    },
    date: {
      type: 'date',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Page, News],
})
