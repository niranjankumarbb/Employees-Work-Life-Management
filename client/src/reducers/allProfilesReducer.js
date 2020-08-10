const allProfilesInitialValue = []
const allProfilesReducer = (state=allProfilesInitialValue, action)=>{
    switch(action.type) {
        
        case 'SET_ALLPROFILES' : {
             return  [...action.payload]
        }

        default : {
            return [].concat(state)
        }
    }
}
export default allProfilesReducer
