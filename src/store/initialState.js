export default {
  home: {
    data: {
      productCards: [],
    },
  },
  product: {
    data: {
      details: {
        id: null,
        title: '',
        imgSrc: null,
        price: '',
        screen: {
          diagonal: '',
          refreshRate: '',
        },
        cpu: {
          processor: '',
          operatingSystem: '',
        },
        ram: {
          amountOfRam: '',
        },
        storage: {
          ssd: '',
        },
        gpu: {
          videoCard: '',
        },
        networkAdapters: {
          wifi: '',
          bluetooth: '',
        },
      },
    },
  },
  cart: {
    data: {
      products: [],
    },
  },
};
