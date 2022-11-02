class DeviceSelector {
  constructor() {
    this.screenWidth = window.innerWidth;
    this.breakpoints = {
      'SM': 576,
      'MD': 768,
      'LG': 992,
      'XL': 1200,
      'XXL': 1400
    };
  }

  getDevice() {
    if (this.screenWidth < this.breakpoints['SM']) {
      return 'xs';
    }

    if (this.screenWidth >= this.breakpoints['SM'] && this.screenWidth < this.breakpoints['MD']) {
      return 'sm';
    }

    if (this.screenWidth >= this.breakpoints['MD'] && this.screenWidth < this.breakpoints['LG']) {
      return 'md';
    }

    if (this.screenWidth >= this.breakpoints['LG'] && this.screenWidth < this.breakpoints['XL']) {
      return 'lg';
    }

    if (this.screenWidth >= this.breakpoints['XL'] && this.screenWidth < this.breakpoints['XXL']) {
      return 'xl';
    }

    if (this.screenWidth >= this.breakpoints['XXL']) {
      return 'xxl';
    }
  }
}

export default new DeviceSelector();