
public enum SalaryRange {
    RANGE_1(25.0),
    RANGE_2(40.0),
    RANGE_3(80.0);

    private final double hourlyRate;

    SalaryRange(double hourlyRate) {
        this.hourlyRate = hourlyRate;
    }

    public double getHourlyRate() {
        return hourlyRate;
    }
}
