import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files'

const SEO = defineNestedType(() => ({
  name: 'SEO',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      required: false,
    },
  },
}))

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
    image_position: {
      type: 'string',
      required: true,
    },
    link: {
      type: 'string',
      required: false,
    },
    items: {
      type: 'list',
      of: { type: 'string' },
    },
    testimonials: {
      type: 'list',
      of: { type: 'string' },
    },
  },
}))

const ACCORDION = defineNestedType(() => ({
  name: 'ACCORDION',
  fields: {
    type: {
      type: 'string',
    },
    title: {
      type: 'string',
      required: false,
    },
    content: {
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
    image: {
      type: 'string',
      required: false,
    },
    // gallery: {
    //   type: 'list',
    //   of: { type: 'string' },
    // },
    accordions: {
      type: 'list',
      of: ACCORDION,
    },
    section: {
      type: 'list',
      of: SECTION,
    },
    menu: {
      type: 'nested',
      of: MAIN_MENU,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

const SubPage = defineDocumentType(() => ({
  name: 'SubPage',
  filePathPattern: `page/subpage/*.md`,
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
    image: {
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

const Settings = defineDocumentType(() => ({
  name: 'Settings',
  filePathPattern: `settings.md`,
  contentType: 'markdown',
  fields: {
    seo: {
      type: 'nested',
      of: SEO,
    },
  },
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Page, SubPage, News, Settings],
})
