export const createWorkOrder = (workOrder) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fireStore = getFirestore();
        // const profile = getState().firebase.profile;     
        // const authorId = getState().firebase.auth.uid;
        fireStore.collection('workOrders').add({
            ...workOrder,
            // authorFirstName: profile.firstName,
            // authorLastName: profile.lastName,
            // authorId,
            createdAt: new Date() 
        }).then(() => {
            dispatch({
                type: 'CREATE_WORKORDER',
                workOrder
            });            
        }).catch((err) => {
            dispatch({
                type: 'CREATE_WORKORDER_ERROR',
                err
            });
        })
    }
};