import UtilsService from '@/modules/utils/utils-service.ts';

describe('UtilsService.ts', () => {
  it('renders March passed', () => {
    const currentDate = new Date(2021, 2, 1);
    expect(UtilsService.getMonthName(currentDate)).toMatch('March');
  });
  it('renders February passed', () => {
    const currentDate = new Date(2021, 1, 1);
    expect(UtilsService.getMonthName(currentDate)).toMatch('February');
  });
  it('renders February passed', () => {
    const currentDate = new Date(2020, 1, 1);
    expect(UtilsService.getMonthName(currentDate)).toMatch('February');
  });
});
