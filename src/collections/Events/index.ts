import { slugField } from '@/fields/slug';
import { CollectionConfig } from 'payload';
import { revalidateEvents, revalidateDelete } from './hooks/revalidateEvents'
import {
  AlignFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical';

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'


export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
  },
  hooks: {
    afterChange: [revalidateEvents],
    afterDelete: [revalidateDelete],

  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Event Info",
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            ...slugField(),
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'date',
              type: 'date',
              required: true,
              admin: {
                date: {
                  pickerAppearance: 'dayOnly',
                  displayFormat: 'MMM dd, yyyy',
                }
              }
            },
            {
              name: 'startTime',
              type: 'date',
              required: true,
              admin: {
                date: {
                  pickerAppearance: 'timeOnly',
                  displayFormat: 'h:mm a',
                }
              }
            },
            {
              name: 'endTime',
              type: 'date',
              admin: {
                date: {
                  pickerAppearance: 'timeOnly',
                  displayFormat: 'h:mm a',
                }
              }
            },
            {
              name: "learningOutcomes",
              type: "richText",
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                    UnorderedListFeature(),
                    AlignFeature(),
                  ]
                },
              }),
            },
            {
              name: "instructor",
              type: "relationship",
              relationTo: "instructors",
            },
            {
              name: "department",
              type: "relationship",
              relationTo: "departments",
              admin: {
                position: "sidebar",
                allowCreate: false,
              }
            },
            {
              name: "whatsappLink",
              type: "text",
            },
            {
              name: "whatsappQrCode",
              type: "upload",
              relationTo: "media",
            },
          ]
        },
        {
          label: "SEO",
          fields: [
            {
              name: 'meta',
              label: 'SEO',
              type: "group",
              fields: [
                OverviewField({
                  titlePath: 'meta.title',
                  descriptionPath: 'meta.description',
                  imagePath: 'meta.image',
                }),
                MetaTitleField({
                  hasGenerateFn: true,
                }),
                MetaImageField({
                  relationTo: 'media',
                }),

                MetaDescriptionField({}),
                PreviewField({
                  // if the `generateUrl` function is configured
                  hasGenerateFn: true,

                  // field paths to match the target field for data
                  titlePath: 'meta.title',
                  descriptionPath: 'meta.description',
                }),
              ],
            },
          ]
        }
      ]
    }
  ],
};