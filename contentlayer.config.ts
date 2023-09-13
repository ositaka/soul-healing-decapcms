import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files'

const MAIN_MENU = defineNestedType(() => ({
  name: 'MAIN_MENU',
  fields: {
    show: {
      type: 'boolean',
      required: false,
    },
    name: {
      type: 'string',
      required: false,
    },
  },
}))

const SECTION = defineNestedType(() => ({
  name: 'SECTION',
  fields: {
    section_type: {
      type: 'string',
    },
    main_menu: {
      type: 'nested',
      of: MAIN_MENU,
    },
    title: {
      type: 'string',
      required: false,
    },
    text: {
      type: 'markdown',
      required: false,
    },
    image: {
      type: 'string',
      required: false,
    },
  },
}))

const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `page/*.md`,
  contentType: 'markdown',
  fields: {
    slug: {
      type: 'string',
      required: false,
    },
    title: {
      type: 'string',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    // gallery: {
    //   type: 'list',
    //   of: { type: 'string' },
    // },
    section: {
      type: 'list',
      of: SECTION,
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
