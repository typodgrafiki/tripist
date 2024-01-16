import { render, screen } from "@testing-library/react"

import Footer from "@/components/homepage/footer"

describe("Footer", () => {
    it("should render footer", () => {
        render(<Footer />) // render the component
        const myElement = screen.getByText("QUICK LINKS") // get the element
        expect(myElement).toBeInTheDocument() // make assertions
    })
})
