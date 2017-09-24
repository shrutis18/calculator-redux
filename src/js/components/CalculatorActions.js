export const  mapStateToProps = (state) =>{
     return {
        value: state.value,
        btns: state.btns
      }

}

export const mapDispatchToProps = (dispatch) => {
 return {
   addElem : (text) => {
    dispatch({
        type: "ADD_ELEM",
        text
        })
  },

   clear : () => {
    dispatch({
        type: "CLEAR"
       })
   },

   equal : (value) => {
    dispatch({
       type: "EQUAL",
       value
      })
   }
  }
}