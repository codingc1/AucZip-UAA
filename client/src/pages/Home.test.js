const Home = require("./Home")

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Jean-Philippe", "Edmond"], ["Jean-Philippe", "Pierre Edouard", "Edmond"], ["Jean-Philippe", "Pierre Edouard", "Pierre Edouard"]]
        inst = new Home.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleBuildingTitleClick", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Pierre Edouard", "George"], ["Jean-Philippe", "Edmond", "George"], ["Pierre Edouard", "Michael", "Jean-Philippe"]]
        inst = new Home.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleBuildingTitleClick("Corrine Square")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleBuildingTitleClick("Clement Cliffs")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleBuildingTitleClick("Kailey Bypass")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleBuildingTitleClick("Beryl Coves")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleBuildingTitleClick("Renner Circle")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleBuildingTitleClick(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
