import { shallowMount } from '@vue/test-utils';
import CalendarPanel from '@/modules/components/CalendarPanel.vue';
import DayBox from '@/modules/components/DayBox.vue';
describe('CalendarPanel.vue', () => {
    it('renders correct 31 days of March passed', () => {
        const currentDate = new Date(2021, 2, 1);
        const wrapper = shallowMount(CalendarPanel, {
            propsData: { currentDate },
        });
        const dayBoxCount = wrapper.findAllComponents(DayBox).length;
        expect(dayBoxCount).toBe(31);
    });
    it('renders correct 28 days of February passed', () => {
        const currentDate = new Date(2021, 1, 1);
        const wrapper = shallowMount(CalendarPanel, {
            propsData: { currentDate },
        });
        const dayBoxCount = wrapper.findAllComponents(DayBox).length;
        expect(dayBoxCount).toBe(28);
    });
    it('renders correct 29 days of February passed', () => {
        const currentDate = new Date(2020, 1, 1);
        const wrapper = shallowMount(CalendarPanel, {
            propsData: { currentDate },
        });
        const dayBoxCount = wrapper.findAllComponents(DayBox).length;
        expect(dayBoxCount).toBe(29);
    });
    it('renders correct 30 days of April passed', () => {
        const currentDate = new Date(2021, 3, 1);
        const wrapper = shallowMount(CalendarPanel, {
            propsData: { currentDate },
        });
        const dayBoxCount = wrapper.findAllComponents(DayBox).length;
        expect(dayBoxCount).toBe(30);
    });
});
//# sourceMappingURL=calendarPanel.spec.js.map