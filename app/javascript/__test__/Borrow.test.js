import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Borrow from '../components/Pages/Borrow'


Enzyme.configure({ adapter: new Adapter() })
jest.mock('react-router-dom', () => { return { Link: props => <x-Link {...props} /> } })

it('Borrow renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Borrow />, div)
})

it('Borrow renders content', () => {
    const borrow = shallow(<Borrow />)
    expect(borrow.find("h3").text()).toEqual("All Books")
})