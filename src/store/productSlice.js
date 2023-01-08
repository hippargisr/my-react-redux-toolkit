const {createSlice} =  require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
	IDLE: 'idle',
	ERROR: 'error',
	LOADING: 'loading'
});

const productSlice = createSlice({
	name: 'product',
	initialState: {
		data: [],
		status: STATUSES.IDLE
	},
	reducers: {
		setProducts(state, action){
			// DO NOT DO THIS NEVER 
			// THIS IS NOT ALLOWED, we can't call / request apis in STORE
			// because our reducers are syncronus, it should not be side effects of this function
			// const res = await fetch('https://fakestoreapi.com/products');
			// so if we want to request apis then what we can use that is THUNK middleware.
			state.data = action.payload;
		},
		setStatuses( state, action ){
			state.status = action.payload;
		}
	}
});

export const { setProducts, setStatuses } = productSlice.actions;
export default productSlice.reducer;

// Thunks
// the thunk should return async function

export function fetchProducts(){
	return async function fetchProductsThunk(dispatch, getState){
		dispatch(setStatuses(STATUSES.LOADING));
		try {
			const res = await fetch('https://fakestoreapi.com/products');
			const data = await res.json();
			dispatch(setProducts(data));
			dispatch(setStatuses(STATUSES.IDLE));
		} catch (error) {
			console.log(error)
			dispatch(setStatuses(STATUSES.ERROR));
		}
	}
}