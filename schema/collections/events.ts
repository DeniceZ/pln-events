export const eventCollectionSchema: any = {
  label: "Events",
  name: "event",
  path: "content/events",
  format: "md",
  // ui: {
  //   router: ({ document }) => {
  //     return `/event/${document._sys.filename}`;
  //   },
  // },
  fields: [
    {
      label: "Event Name",
      name: "eventName",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      label: "Description",
      name: "eventDescription",
      type: "string",
    },
    {
      label: "Event Website",
      name: "website",
      type: "string",
    },
    {
      label: "Organization",
      name: "eventOrg",
      type: "string",
    },
    {
      label: "Event Logo",
      name: "eventLogo",
      type: "image",
    },
    {
      label: "Location",
      name: "location",
      type: "string",
    },
    {
      label: "Venue",
      name: "venueName",
      type: "string",
    },
    {
      label: "Map link",
      name: "venueMapsLink",
      type: "string",
    },
    {
      label: "Venue Address",
      name: "venueAddress",
      type: "string",
    },
    {
      label: "Start Date",
      name: "startDate",
      type: "datetime",
      ui: {
        dateFormat: "MMMM DD YYYY",
        timeFormat: "hh:mm A",
      },
    },
    {
      label: "End Date",
      name: "endDate",
      type: "datetime",
      ui: {
        dateFormat: "MMMM DD YYYY",
        timeFormat: "hh:mm A",
      },
    },
    {
      label: "Date TBD",
      name: "dateTBD",
      description:
        "Enter approximate dates and tick this box to put event in correct month but render label as TBD",
      type: "boolean",
    },
    {
      label: "Directly Responsibile Individual",
      name: "dri",
      type: "string",
    },
    {
      label: "Event Topic",
      name: "eventTopic",
      type: "string",
      list: true,
    },
    {
      label: "Event Type",
      name: "eventType",
      type: "string",
      options: [
        {
          label: "Conference",
          value: "Conference",
        },
        {
          label: "Virtual",
          value: "Virtual",
        },
        {
          label: "Social",
          value: "Social",
        },
      ],
    },
    {
      label: "Tag",
      name: "tag",
      type: "string",
      options: [
        {
          label: "None",
          value: "",
        },
        {
          label: "PLN Event",
          value: "PLN Event",
        },
        {
          label: "Industry Event",
          value: "Industry Event",
        },
      ],
    },
    {
      label: "Juan Speaking",
      name: "juanSpeaking",
      type: "string",
      options: [
        {
          label: "Unknown",
          value: "unknown",
        },
        {
          label: "Yes",
          value: "yes",
        },
        {
          label: "No",
          value: "no",
        },
      ],
    },
  ],
};