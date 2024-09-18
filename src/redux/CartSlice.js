import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        addProduct(state, action) {
            console.log(
                'iuguiguiguigigi kuma........dcdcdccd.........',
                action.payload,
            );
            state.push({ ...action.payload, quantity: 1 });
        },
        removeProduct(state, action) {
            return (state = state.filter(item => item.name !== action.payload.name));
        },
        incrementQuantity(state, action) {
            const productsDetails = state.find(
                element => element.name == action.payload.name,
            );
            productsDetails.quantity += 1;
        },
        decrementQuantity(state, action) {
            const productsDetails = state.find(
                element => element.name == action.payload.name,
            );
            if (productsDetails.quantity == 1) {
                return (state = state.filter(
                    item => item.name !== action.payload.name,
                ));
            } else {
                productsDetails.quantity--;
            }
        },
    },
});

export const { addProduct, removeProduct, incrementQuantity, decrementQuantity } =
    CartSlice.actions;
export default CartSlice.reducer;
