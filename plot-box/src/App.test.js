import React from 'react';
import App from './App';
import Header from './components/Header';
import Map from './components/map/Map';
import Footer from './components/Footer';

import { shallow } from 'enzyme';

describe("rendering components", () => {
    it("renders all components individually", () => {
        shallow(<App />);
        shallow(<Header />);
        shallow(<Map />, { disableLifecycleMethods: true });
        shallow(<Footer />);
    });
    it("renders all App components", () => {
        const wrapper = shallow(<App />);
        const header = (<Header />)
        const map = (<Map />);
        const footer = (<Footer />);

        expect(wrapper.contains(header)).toEqual(true);
        expect(wrapper.contains(map)).toEqual(true);
        expect(wrapper.contains(footer)).toEqual(true);
    });
    it("renders Map container", () => {
        const wrapper = shallow(<Map />, { disableLifecycleMethods: true });
        const mapContainer = (<div className="map-container" />);

        expect(wrapper.contains(mapContainer)).toEqual(true);
    });
    it("renders Map button", () => {
        const wrapper = shallow(<Map />, { disableLifecycleMethods: true })
        const button = wrapper.find('#plot');

        expect(button.text()).toEqual('Plot Coordinates');
    });
})

