export class DateHelper {
  public static readonly MS_IN_MIN = 60000;
  public static readonly MIN_IN_HOUR = 60;

  private static beautifyTwoDigits(value: number): string {
    if (value < 10) {
      return '0' + value;
    }

    return value.toString();
  }

  public static beautifyHoursAndMinutesFromMinutes(minutes: number): string {
    const hours = Math.trunc(minutes / this.MIN_IN_HOUR);
    const mins = minutes % this.MIN_IN_HOUR;

    if (mins === 0) {
      return `${hours}ч`;
    }

    return `${hours}ч ${mins}м`;
  }

  public static getHoursAndMinutesTime(date: Date): string {
    const hours = DateHelper.beautifyTwoDigits(date.getHours());
    const minutes = DateHelper.beautifyTwoDigits(date.getMinutes());

    return `${hours}:${minutes}`;
  }

  public static getFlightTimeFromDateAndDuration(
    date: Date,
    duration: number,
  ): string {
    const takeOffTime = DateHelper.getHoursAndMinutesTime(date);
    const landingTime = DateHelper.getHoursAndMinutesTime(
      new Date(Number(date) + duration * DateHelper.MS_IN_MIN),
    );

    return `${takeOffTime} - ${landingTime}`;
  }
}
