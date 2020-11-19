
const profileInitialValue = []
const profileReducer = (state=profileInitialValue, action)=>{
    switch(action.type) {

        case 'SET_PROFILE' : {
          console.log('action.payload value', action.payload)
            return  [...action.payload]
        }

        default : {
            return [].concat(state)
        }
    }
}
 export default profileReducer
