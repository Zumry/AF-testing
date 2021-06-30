import React from "react";
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreateConferenceComponent from "../components/admin/CreateConferenceComponent";


Enzyme.configure({ adapter :new Adapter()});

    describe('CreateConferenceComponent' ,() => {
        it('should show text ', () =>{
            const wrapper =shallow(<CreateConferenceComponent/>);
            const text =wrapper.find('div div ');
            expect(text.text()).toBe('Text goes here');

        });

        it('should hide text when bytton is clicked ', () =>{
            const wrapper =shallow(<CreateConferenceComponent/>);
            const button =wrapper.find('button');
            button.simulate('click');
            const text =wrapper.find('div div ');
            expect(text.length).toBe(0);

        });

    });

