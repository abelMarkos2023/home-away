import { calculateDaysBetween } from "./calendar"

type TCalculateTotal = {
    checkIn: Date,
    checkOut: Date,
    price: number
}

export const calculateTotal = ({checkIn,checkOut,price}:TCalculateTotal) => {

    const totalNights = calculateDaysBetween({checkIn,checkOut});
    const subTotal = totalNights * price;
    const cleaning = subTotal * 0.1;
    const service = subTotal * 0.05;
    const tax = subTotal * 0.08;
    const orderTotal = subTotal + cleaning + service + tax;

    return {
        totalNights,
        subTotal,
        cleaning,
        service,
        tax,
        orderTotal
    }
}