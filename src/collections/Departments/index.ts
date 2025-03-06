import { slugField } from "@/fields/slug";
import { CollectionConfig } from "payload";
import { revalidateDepartments, revalidateDelete } from "./hooks/revalidateDepartments";

export const Departments: CollectionConfig = {
  slug: "departments",
  admin: {
    useAsTitle: "title",
  },
  hooks: {
    afterChange: [
      revalidateDepartments
    ],
    afterDelete: [
      revalidateDelete
    ]
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Department",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
            },
            ...slugField(),
            {
              name: "orderInDepartments",
              type: "number",
              // required: true,
              defaultValue: 1,
              min: 1,
            },
            {
              name: "description",
              type: "text",
            },
            {
              name: "image",
              type: "upload",
              relationTo: "media",
            }
          ]
        },
        {
          label: "Related Courses",
          fields: [
            {
              name: "relatedCourses",
              type: "join",
              collection: "courses",
              on: "department",
              maxDepth: 2,
            }
          ]
        }
      ]
    }
  ]
  ,
};