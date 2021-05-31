import {fireEvent, getAllByTitle, getByTitle, render, screen} from "@testing-library/react";
import Category from "./index";
describe("category",()=>{

    it('should render without error',()=>{
        const {getByText,getByRole} =  render(<Category/>);
        const el = screen.queryAllByRole("scroll-left");
        expect(getByText('All')).toBeInTheDocument();
        expect(getByText('Angular')).toBeInTheDocument();
        expect(el).toHaveLength(0);
        expect(getByRole("scroll-right")).toBeInTheDocument();
    });

    it("should able to scroll on right",()=>{
        const {getByRole} =  render(<Category/>);
        fireEvent.click(getByRole("scroll-right"));
        expect(getByRole("scroll-left")).toBeInTheDocument();
    })
});