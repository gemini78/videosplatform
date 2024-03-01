import { render, screen } from "@testing-library/react"
import Navbar from "../components/navbar/Navbar";

describe('Header', () => {
    test("html elements into the Dom", ()=>{
        render(<Navbar />);
        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();

        const imgElements = screen.getAllByRole("img");
        expect(imgElements.length).toBeGreaterThan(0);
    })
})