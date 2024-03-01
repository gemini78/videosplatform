import { render } from "@testing-library/react"
import Banner from "../components/banner/Banner";

describe('Banner', () => {
    test("html elements into the Dom", ()=>{
        render(<Banner />);
        /* const linkElements = screen.getAllByRole("link");
        expect(linkElements.length).toBeGreaterThan(0); */
    })
})