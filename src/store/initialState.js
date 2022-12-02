export default {
  home: {
    data: [],
    isLoading: false,
    hasError: false,
  },
  product: {
    data: {
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
    isLoading: false,
    hasError: false,
  },
  cart: {
    data: [],
    isLoading: false,
    hasError: false,
  },
};
