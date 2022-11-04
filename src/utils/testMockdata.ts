import { CancellationType, Hotel, RatingType } from "../models/hotel";

export const mockData: Hotel[] = [
  {
    id: "cxd650nuyo",
    property: {
      propertyId: "P107801",
      title: "Courtyard by Marriott Sydney-North Ryde",
      address: ["7-11 Talavera Rd", "North Ryde"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of Courtyard by Marriott Sydney-North Ryde",
        imageType: "PRIMARY",
      },
      rating: {
        ratingValue: 4.5,
        ratingType: RatingType.SELF,
      },
    },
    offer: {
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      name: "Deluxe Balcony Room",
      displayPrice: {
        amount: 329.0,
        currency: "AUD",
      },
      savings: {
        amount: 30.0,
        currency: "AUD",
      },
      cancellationOption: {
        cancellationType: CancellationType.NOT_REFUNDABLE,
      },
    },
  },
  {
    id: "mesq6mggyn",
    property: {
      propertyId: "P107802",
      title: "Primus Hotel Sydney",
      address: ["339 Pitt St", "Sydney"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of Primus Hotel Sydney",
        imageType: "PRIMARY",
      },
      rating: {
        ratingValue: 5,
        ratingType: RatingType.SELF,
      },
    },
    offer: {
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      name: "Deluxe King",
      displayPrice: {
        amount: 375.0,
        currency: "AUD",
      },
      savings: {
        amount: 28.0,
        currency: "AUD",
      },
      cancellationOption: {
        cancellationType: CancellationType.FREE_CANCELLATION,
      },
    },
  },
  {
    id: "xbtlihs45t",
    property: {
      propertyId: "P107803",
      title: "Rydges World Square Sydney",
      address: ["389 Pitt St", "Sydney"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of property",
        imageType: "PRIMARY",
      },
      rating: {
        ratingValue: 4,
        ratingType: RatingType.STAR,
      },
    },
    offer: {
      promotion: {
        title: "Red Hot",
        type: "CAMPAIGN",
      },
      name: "Deluxe King Room",
      displayPrice: {
        amount: 227.0,
        currency: "AUD",
      },
      savings: null,
      cancellationOption: {
        cancellationType: CancellationType.NOT_REFUNDABLE,
      },
    },
  },
  {
    id: "5lm8loqk1s",
    property: {
      propertyId: "P107804",
      title: "PARKROYAL Darling Harbour Sydney",
      address: ["150 Day Street", "Sydney"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of PARKROYAL Darling Harbour Sydney",
        imageType: "PRIMARY",
      },
      rating: {
        ratingValue: 4.5,
        ratingType: RatingType.STAR,
      },
    },
    offer: {
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      name: "Deluxe King",
      displayPrice: {
        amount: 535.0,
        currency: "AUD",
      },
      savings: null,
      cancellationOption: {
        cancellationType: CancellationType.FREE_CANCELLATION,
      },
    },
  },
  {
    id: "kwjf8jlxg9",
    property: {
      propertyId: "P107805",
      title: "Metro Hotel Marlow Sydney Central",
      address: ["431-439 Pitt Street", "Sydney"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of Metro Hotel Marlow Sydney Central",
        imageType: "PRIMARY",
      },
      rating: {
        ratingValue: 3.5,
        ratingType: RatingType.STAR,
      },
    },
    offer: {
      promotion: {
        title: "Bonus Points",
        type: "MEMBER",
      },
      name: "Deluxe King",
      displayPrice: {
        amount: 295.0,
        currency: "AUD",
      },
      savings: null,
      cancellationOption: {
        cancellationType: CancellationType.FREE_CANCELLATION,
      },
    },
  },
];
//-----------------------------------------------------------------------
export const sortedAsc = [
  {
    id: "xbtlihs45t",
    property: {
      propertyId: "P107803",
      title: "Rydges World Square Sydney",
      address: ["389 Pitt St", "Sydney"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of property",
        imageType: "PRIMARY",
      },
      rating: {
        ratingValue: 4,
        ratingType: RatingType.STAR,
      },
    },
    offer: {
      promotion: {
        title: "Red Hot",
        type: "CAMPAIGN",
      },
      name: "Deluxe King Room",
      displayPrice: {
        amount: 227.0,
        currency: "AUD",
      },
      savings: null,
      cancellationOption: {
        cancellationType: CancellationType.NOT_REFUNDABLE,
      },
    },
  },

  {
    id: "kwjf8jlxg9",
    property: {
      propertyId: "P107805",
      title: "Metro Hotel Marlow Sydney Central",
      address: ["431-439 Pitt Street", "Sydney"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of Metro Hotel Marlow Sydney Central",
        imageType: "PRIMARY",
      },
      rating: {
        ratingValue: 3.5,
        ratingType: RatingType.STAR,
      },
    },
    offer: {
      promotion: {
        title: "Bonus Points",
        type: "MEMBER",
      },
      name: "Deluxe King",
      displayPrice: {
        amount: 295.0,
        currency: "AUD",
      },
      savings: null,
      cancellationOption: {
        cancellationType: CancellationType.FREE_CANCELLATION,
      },
    },
  },
  {
    id: "cxd650nuyo",
    property: {
      propertyId: "P107801",
      title: "Courtyard by Marriott Sydney-North Ryde",
      address: ["7-11 Talavera Rd", "North Ryde"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of Courtyard by Marriott Sydney-North Ryde",
        imageType: "PRIMARY",
      },
      rating: {
        ratingValue: 4.5,
        ratingType: RatingType.SELF,
      },
    },
    offer: {
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      name: "Deluxe Balcony Room",
      displayPrice: {
        amount: 329.0,
        currency: "AUD",
      },
      savings: {
        amount: 30.0,
        currency: "AUD",
      },
      cancellationOption: {
        cancellationType: CancellationType.NOT_REFUNDABLE,
      },
    },
  },
  {
    id: "mesq6mggyn",
    property: {
      propertyId: "P107802",
      title: "Primus Hotel Sydney",
      address: ["339 Pitt St", "Sydney"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of Primus Hotel Sydney",
        imageType: "PRIMARY",
      },
      rating: {
        ratingValue: 5,
        ratingType: RatingType.SELF,
      },
    },
    offer: {
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      name: "Deluxe King",
      displayPrice: {
        amount: 375.0,
        currency: "AUD",
      },
      savings: {
        amount: 28.0,
        currency: "AUD",
      },
      cancellationOption: {
        cancellationType: CancellationType.FREE_CANCELLATION,
      },
    },
  },

  {
    id: "5lm8loqk1s",
    property: {
      propertyId: "P107804",
      title: "PARKROYAL Darling Harbour Sydney",
      address: ["150 Day Street", "Sydney"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of PARKROYAL Darling Harbour Sydney",
        imageType: "PRIMARY",
      },
      rating: {
        ratingValue: 4.5,
        ratingType: RatingType.STAR,
      },
    },
    offer: {
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      name: "Deluxe King",
      displayPrice: {
        amount: 535.0,
        currency: "AUD",
      },
      savings: null,
      cancellationOption: {
        cancellationType: CancellationType.FREE_CANCELLATION,
      },
    },
  },
];
//-----------------------------------------------------------------
export const sortedDesc = sortedAsc.slice().reverse();
