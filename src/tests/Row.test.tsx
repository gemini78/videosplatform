import { render } from "@testing-library/react"
import Row from "../components/row/Row";

describe('Row', () => {
    test("html elements into the Dom", ()=>{
        render(<Row title="Un titre" fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=2414f7dedf5841fa60be914fc60d9021"/>);
       /*  const imgElements = screen.getAllByRole("img");
        expect(imgElements.length).toBeGreaterThan(0); */
    })
})