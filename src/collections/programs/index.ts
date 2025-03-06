import { fields } from './../../blocks/Form/fields';
import { CollectionConfig } from "payload";


export const Programs: CollectionConfig= {
    slug: "programs",
    admin: {
        useAsTitle: "title",
    },
    fields:[
        {
            name:"title",
            type:"text",
            required:true,
            
            
        }
    ]
 

}
