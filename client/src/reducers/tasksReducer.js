const tasksInitialValue = []
const tasksReducer = (state=tasksInitialValue, action)=>{
    switch(action.type) {

        case 'SET_TASKS' : {
          console.log('action.payload value', action.payload)
            return  [...action.payload]
        }

        default : {
            return [].concat(state)
        }
    }
}
export default tasksReducer
