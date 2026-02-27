import type { Schema, Struct } from '@strapi/strapi';

export interface MasterclassFaq extends Struct.ComponentSchema {
  collectionName: 'components_masterclass_faqs';
  info: {
    description: 'Frequently asked question with answer';
    displayName: 'FAQ';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MasterclassTextItem extends Struct.ComponentSchema {
  collectionName: 'components_masterclass_text_items';
  info: {
    description: 'A single text entry (pain point, outcome, etc.)';
    displayName: 'Text Item';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'masterclass.faq': MasterclassFaq;
      'masterclass.text-item': MasterclassTextItem;
    }
  }
}
