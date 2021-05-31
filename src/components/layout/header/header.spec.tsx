

import {render} from "@testing-library/react";
import Header from "./header";
describe('Header',()=>{

    it('should render without fail',()=>{
        const {getByAltText,getByTitle} = render(<Header/>)
        expect(getByAltText('youtube-logo')).toBeInTheDocument();
        expect(getByTitle('create-video')).toBeInTheDocument();
        expect(getByTitle('apps-view')).toBeInTheDocument();
        expect(getByTitle('my-details')).toBeInTheDocument();
    })
});