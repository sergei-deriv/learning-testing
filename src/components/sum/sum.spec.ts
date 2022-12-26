import React from "react";
import { sum } from "./sum";

test('check sum function: 1 and 3 will return 4', () => {
    const res = sum(1,3);
    expect(res).toBe(4);
})