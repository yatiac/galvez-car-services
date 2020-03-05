const initState = {};
const workOrderReducer = (state = initState,action) => {
    switch (action.type) {
        case 'CREATE_WORKORDER':
            console.log('Created Work Order!', action.project)            
            return state;
        case 'CREATE_WORKORDER_ERROR':
            console.log('Create Work Order error', action.err);
            return state;
        default:
            return state;
    }    
}

export default workOrderReducer;