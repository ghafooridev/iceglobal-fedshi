import * as utils from "../utils"

describe("utils", () => {
	it("should getProperQueryString return proper string", () => {
		expect(utils.getProperQueryString({ name: "ali", family: "ghafoori" })).toBe("name=ali&family=ghafoori")
	})

	it("should formatDate formats the date time to mm/dd/yyyy", () => {
		expect(utils.formatDate("2022-10-23T09:53:56.068Z")).toBe("10/23/2022")
	})
})
