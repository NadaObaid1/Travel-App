import { calculateTripDays } from "../client/js/app.js";

test('calculateTripDays should return the correct number of days', () => {
    const duration = calculateTripDays('2024-08-22' , '2024-08-24');
    expect(duration).toBe(2);
})