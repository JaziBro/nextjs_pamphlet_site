import type { Schema, Struct } from '@strapi/strapi';

export interface SharedComponent1 extends Struct.ComponentSchema {
  collectionName: 'components_shared_component_1s';
  info: {
    description: '';
    displayName: 'component_1';
  };
  attributes: {
    button_1: Schema.Attribute.String;
    button_2: Schema.Attribute.String;
    feature_1: Schema.Attribute.String;
    feature_2: Schema.Attribute.String;
    feature_3: Schema.Attribute.String;
    feature_4: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedComponent2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_component_2s';
  info: {
    description: '';
    displayName: 'component_2';
  };
  attributes: {
    feature_1: Schema.Attribute.String;
    feature_2: Schema.Attribute.String;
    feature_3: Schema.Attribute.String;
    feature_4: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedComponent3 extends Struct.ComponentSchema {
  collectionName: 'components_shared_component_3s';
  info: {
    description: '';
    displayName: 'component_3';
  };
  attributes: {
    button_1: Schema.Attribute.String;
    feature_1: Schema.Attribute.String;
    feature_2: Schema.Attribute.String;
    feature_3: Schema.Attribute.String;
    feature_4: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedComponent4 extends Struct.ComponentSchema {
  collectionName: 'components_shared_component_4s';
  info: {
    description: '';
    displayName: 'component_4';
  };
  attributes: {
    feature_1: Schema.Attribute.String;
    feature_2: Schema.Attribute.String;
    feature_3: Schema.Attribute.String;
    feature_4: Schema.Attribute.String;
    feature_5: Schema.Attribute.String;
  };
}

export interface SharedComponent5 extends Struct.ComponentSchema {
  collectionName: 'components_shared_component_5s';
  info: {
    description: '';
    displayName: 'component_5';
  };
  attributes: {
    feature_1: Schema.Attribute.String;
    feature_2: Schema.Attribute.String;
    feature_3: Schema.Attribute.String;
    feature_4: Schema.Attribute.String;
    feature_5: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedComponent6 extends Struct.ComponentSchema {
  collectionName: 'components_shared_component_6s';
  info: {
    displayName: 'component_6';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedComponent7 extends Struct.ComponentSchema {
  collectionName: 'components_shared_component_7s';
  info: {
    displayName: 'component_7';
  };
  attributes: {
    button: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_item_s';
  info: {
    description: '';
    displayName: 'FeatureItem ';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedFeatures extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'features';
    icon: 'alien';
  };
  attributes: {};
}

export interface SharedFeatures9 extends Struct.ComponentSchema {
  collectionName: 'components_shared_features9s';
  info: {
    displayName: 'features9';
    icon: '';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SharedFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'footer-links';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    hero_button: Schema.Attribute.String;
    hero_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    hero_subtitle: Schema.Attribute.String;
    hero_title: Schema.Attribute.String;
  };
}

export interface SharedJobListings extends Struct.ComponentSchema {
  collectionName: 'components_shared_job_listings';
  info: {
    description: '';
    displayName: 'job_listings';
    icon: 'briefcase';
  };
  attributes: {
    apply_link: Schema.Attribute.String;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPageSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_page_sections';
  info: {
    description: '';
    displayName: 'PageSection';
    icon: 'alien';
  };
  attributes: {
    body: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    page_title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSections extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    displayName: 'sections';
  };
  attributes: {
    body: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTeam extends Struct.ComponentSchema {
  collectionName: 'components_shared_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    team_1_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    team_1_title: Schema.Attribute.String;
    team_2_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    team_2_title: Schema.Attribute.String;
    team_3_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    team_3_title: Schema.Attribute.String;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    description: '';
    displayName: 'Testimonial';
    icon: 'bulletList';
  };
  attributes: {
    author_name: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    quote: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.component-1': SharedComponent1;
      'shared.component-2': SharedComponent2;
      'shared.component-3': SharedComponent3;
      'shared.component-4': SharedComponent4;
      'shared.component-5': SharedComponent5;
      'shared.component-6': SharedComponent6;
      'shared.component-7': SharedComponent7;
      'shared.feature-item': SharedFeatureItem;
      'shared.features': SharedFeatures;
      'shared.features9': SharedFeatures9;
      'shared.footer-links': SharedFooterLinks;
      'shared.hero': SharedHero;
      'shared.job-listings': SharedJobListings;
      'shared.media': SharedMedia;
      'shared.page-section': SharedPageSection;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.sections': SharedSections;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.team': SharedTeam;
      'shared.testimonial': SharedTestimonial;
    }
  }
}
