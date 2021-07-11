import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer H0lXOt8J1j8IJ_Q7NDWDeVpbzgDNMyXmcBGbiUcHnLvjl_1gLsEJnIeeil7wec9fnPqqR6Xr_d2zPky7tr6f6zTIDD5mJ2qE3OOu3lv37ctUvVeRhsO_5O-kN6_pYHYx',
  },
});
