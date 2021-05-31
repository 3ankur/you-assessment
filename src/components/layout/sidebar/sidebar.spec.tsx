
import {render} from "@testing-library/react";
import Sidebar from "./sidebar";
describe('sidebar',()=>{

    it('should render without fail',()=>{
        const {getAllByText} = render(<Sidebar/>)
        expect(getAllByText('Explore')).toBeDefined();

    })
});