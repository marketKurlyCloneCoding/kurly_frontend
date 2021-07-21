import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const SET_OFFER_PRODUCT = "SET_OFFER_PRODUCT";
const SET_SPECIAL_PRODUCT = "SET_SPECIAL_PRODUCT";
const SET_HOT_PRODUCT = "SET_HOT_PRODUCT";
const SET_PRODUCT_CARD = "SET_PRODUCT_CARD";

const setOfferDealProduct = createAction(SET_OFFER_PRODUCT, (product_list) => ({
  product_list,
}));
const setSpecialDealProduct = createAction(SET_SPECIAL_PRODUCT, (product_list) => ({
    product_list,
  })
);
const setHotDealProduct = createAction(SET_HOT_PRODUCT, (product_list) => ({
  product_list,
}));

const setProductCard = createAction(SET_PRODUCT_CARD, (product_list) => ({
  product_list,
}));

const initialState = {
  Offerlist: [],
  Speciallist: [],
  Hotlist: [],
  Cardlist: [],
};

const getOfferDealProductAPI = () => {
  const product_API = "http://localhost/api/v1/offer_deal";
  return function (dispatch, getState, { history }) {
    axios
      .get(product_API)
      .then((res) => {
        console.log(res);
        let product_list = [];
        let response_data = res.data;
        response_data.forEach((rd) => {
          let product = {
            id: rd.id,
            title: rd.title,
            price: rd.price,
            original_price: rd.original_price,
            img: rd.img,
            dc: rd.dc,
          };
          product_list.push(product);
        });
        dispatch(setOfferDealProduct(product_list));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const getSpecialDealProductAPI = () => {
  const product_API = "http://localhost/api/v1/special_deal";
  return function (dispatch, getState, { history }) {
    axios
      .get(product_API)
      .then((res) => {
        console.log(res);
        let product_list = [];
        let response_data = res.data;
        response_data.forEach((rd) => {
          let product = {
            id: rd.id,
            title: rd.title,
            subTitle: rd.subTitle,
            price: rd.price,
            original_price: rd.original_price,
            img: rd.img,
            dc: rd.dc,
          };
          product_list.push(product);
        });
        dispatch(setSpecialDealProduct(product_list));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const getHotDealProductAPI = () => {
  const product_API = "http://localhost/api/v1/hot_deal";
  return function (dispatch, getState, { history }) {
    axios
      .get(product_API)
      .then((res) => {
        console.log(res);
        let product_list = [];
        let response_data = res.data;
        response_data.forEach((rd) => {
          let product = {
            id: rd.id,
            img: rd.img,
            title: rd.title,
            subTitle: rd.subTitle,
            price: rd.price,
            dc: rd.dc,
            original_price: rd.original_price,
          };
          product_list.push(product);
        });
        dispatch(setHotDealProduct(product_list));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const getProductCardAPI = () => {
  const product_API = "http://localhost/api/v1/category?outer=vege";
  return function (dispatch, getState, { history }) {
    axios.get(product_API).then((res) => {
      let product_list = [];
      let response_data = res.data;
      response_data.forEach((rd) => {

        let product = {
            id: rd.id,
            img: rd.img,
            title: rd.title,
            subTitle: rd.subTitle,
            price: rd.price,
            dc: rd.dc,
            original_price: rd.original_price,
        }
        product_list.push(product);
      });
      dispatch(setProductCard(product_list));
    })
    .catch((error) => {
      console.log(error);
    });
};
};

export default handleActions(
  {
    [SET_OFFER_PRODUCT]: (state, action) =>
      produce(state, (draft) => {
        draft.Offerlist = action.payload.product_list;
      }),
    [SET_SPECIAL_PRODUCT]: (state, action) =>
      produce(state, (draft) => {
        draft.Speciallist = action.payload.product_list;
      }),
    [SET_HOT_PRODUCT]: (state, action) =>
      produce(state, (draft) => {
        draft.Hotlist = action.payload.product_list;
      }),
      [SET_PRODUCT_CARD]: (state, action) =>
      produce(state, (draft) => {
        draft.Cardlist = action.payload.product_list;
      }),
  },
  initialState
);

const actionCreators = {
  getOfferDealProductAPI,
  getSpecialDealProductAPI,
  getHotDealProductAPI,
  getProductCardAPI,
};

export { actionCreators };
