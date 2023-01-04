import { endpoints } from '~/constants/endpoints';

export const state = () => ({
  Mobilenumber:'',
});
export const getters = {
 
}


export const actions = {
  
  getPLanDetails({ commit }) {
    return this.$axios.get(`${endpoints.GET_DETAILS}`).then((res) => {
     
      return res.data;
    });
  },
  sentOtp({ commit, state },mobileNo) {
    
    commit('setmobileNo', mobileNo);
    return this.$axios.get(`${endpoints.SENT_OTP_API}?msisdn=${mobileNo}`).then((res) => {
        debugger
        return res.data;
    });
},
submitOtpDetails({ commit, state },otp) {
  
  return this.$axios.get(`${endpoints.SUBMIT_OTP_API}?msisdn=${state.Mobilenumber}&otp=${otp}`).then((res) => {
     
      return res.data;
  });
},
  
};

export const mutations = {
  setmobileNo(state, mobileNo) {
    state.Mobilenumber = mobileNo;
  },
};
