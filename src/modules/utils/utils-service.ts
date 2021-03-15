export default class UtilsService {
  public static getMonthName(date: Date) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return monthNames[date.getMonth()];
  }
}
