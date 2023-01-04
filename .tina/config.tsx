import { defineStaticConfig } from "tinacms";

// Blocks
import { featureBlockSchema } from "../components/blocks/feature";
import { cardsBlockSchema } from "../components/blocks/cards";
import { embedBlockSchema } from "../components/blocks/embed";
import { tailwindFeatureBlockSchema } from "../components/blocks/tailwind-feature"
import { tailwindCardsBlockSchema } from "../components/blocks/tailwind-cards"
import { eventTimelineBlockSchema } from "../components/blocks/event-timeline"

// Collections
import { eventCollectionSchema } from "../schema/collections/events"
import { postCollectionSchema } from "../schema/collections/posts"
import { globalCollectionSchema } from "../schema/collections/global"

const config = defineStaticConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH! || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env
  token: process.env.TINA_TOKEN!,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [
      eventCollectionSchema,
      postCollectionSchema,
      globalCollectionSchema,
      {
        label: "Pages",
        name: "page",
        path: "content/pages",
        format: "md",
        fields: [
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            ui: {
              visualSelector: true,
            },
            templates: [
              cardsBlockSchema,
              embedBlockSchema,
              featureBlockSchema,
              tailwindFeatureBlockSchema,
              tailwindCardsBlockSchema,
              eventTimelineBlockSchema,
            ],
          },
          {
            type: "object",
            label: "Meta",
            description: "Page title, description, social sharing image",
            name: "meta",
            fields: [
              {
                type: "string",
                label: "Page Title",
                name: "title",
              },
              {
                type: "string",
                label: "Page Description",
                name: "description",
              },
              {
                type: "image",
                label: "Social Sharing Image",
                name: "ogImage",
                description: "1200x630 jpeg, varies across platforms and may end up slightly cropped.",
              },
            ]
          },
        ],
      },
    ],
  },
  cmsCallback: (cms) => {
    import("../plugins").then(({ alignmentControlFieldPlugin }) => {
      cms.plugins.add(alignmentControlFieldPlugin);
    });
    import("../plugins").then(({ borderControlFieldPlugin }) => {
      cms.plugins.add(borderControlFieldPlugin);
    });
    import("../plugins").then(({ buttonControlFieldPlugin }) => {
      cms.plugins.add(buttonControlFieldPlugin);
    });
    import("../plugins").then(({ buttonTypographyControlFieldPlugin }) => {
      cms.plugins.add(buttonTypographyControlFieldPlugin);
    });
    import("../plugins").then(({ cardAlignmentControlFieldPlugin }) => {
      cms.plugins.add(cardAlignmentControlFieldPlugin);
    });
    import("../plugins").then(({ colorControlFieldPlugin }) => {
      cms.plugins.add(colorControlFieldPlugin);
    });
    import("../plugins").then(({ emailFieldPlugin }) => {
      cms.plugins.add(emailFieldPlugin);
    });
    import("../plugins").then(({ featureContentControlPlugin }) => {
      cms.plugins.add(featureContentControlPlugin);
    });
    import("../plugins").then(({ featureImageControlPlugin }) => {
      cms.plugins.add(featureImageControlPlugin);
    });
    import("../plugins").then(({ fillControlFieldPlugin }) => {
      cms.plugins.add(fillControlFieldPlugin);
    });
    import("../plugins").then(({ gridControlFieldPlugin }) => {
      cms.plugins.add(gridControlFieldPlugin);
    });
    import("../plugins").then(({ imageControlFieldPlugin }) => {
      cms.plugins.add(imageControlFieldPlugin);
    });
    import("../plugins").then(({ itemListFieldPlugin }) => {
      cms.plugins.add(itemListFieldPlugin);
    });
    import("../plugins").then(({ paddingControlFieldPlugin }) => {
      cms.plugins.add(paddingControlFieldPlugin);
    });
    import("../plugins").then(({ ruledTitlePlugin }) => {
      cms.plugins.add(ruledTitlePlugin);
    });
    import("../plugins").then(({ SectionListItemsPlugin }) => {
      cms.plugins.add(SectionListItemsPlugin);
    });
    import("../plugins").then(({ selectFieldPlugin }) => {
      cms.plugins.add(selectFieldPlugin);
    });
    import("../plugins").then(({ typeControlFieldPlugin }) => {
      cms.plugins.add(typeControlFieldPlugin);
    });
    import("../plugins").then(({ typographyControlFieldPlugin }) => {
      cms.plugins.add(typographyControlFieldPlugin);
    });
    
    return cms
  }
});

export default config;
