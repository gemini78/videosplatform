import { render, screen } from "@testing-library/react"
import Footer from "../components/footer/Footer";

describe('Footer', () => {
    test("html elements into the Dom", ()=>{
        render(<Footer />);
        const linkElements = screen.getAllByRole("link");
        expect(linkElements.length).toBeGreaterThan(0);
    })
})