import React from 'react';
import { render } from "@testing-library/react";
import AddDrug from "../modals/AddDrug";

describe("Add Drug Test", () => {
    it("rendered input", () => {
        const { getByTestId} = render(<AddDrug show={true}/>);
        const input = getByTestId("addDrugName")
        expect(input).toBeTruthy();
    });
});