const map_services = require("./map-services")
// @ponicode
describe("map_services.getMapServices", () => {
    test("0", () => {
        let callFunction = () => {
            map_services.getMapServices()
        }
    
        expect(callFunction).not.toThrow()
    })
})
