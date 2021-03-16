export default class UtilsService {
  static getMonthName(date) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return monthNames[date.getMonth()];
  }
}
// # sourceMappingURL=utils-service.js.map
