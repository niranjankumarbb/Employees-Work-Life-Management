const postsInitialValue = []
const postsReducer = (state=postsInitialValue, action)=>{
    switch(action.type) {

        case 'SET_POSTS' : {
          console.log('SET_POSTS action.payload value', action.payload)
            return  [...action.payload]
        }

        default : {
            return [].concat(state)
        }
    }
}
export default postsReducer
