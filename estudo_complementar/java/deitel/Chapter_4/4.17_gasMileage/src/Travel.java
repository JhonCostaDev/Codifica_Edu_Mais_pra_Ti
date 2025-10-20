
public class Travel {
	private String travelLocation;
	private int traveledDistance;
	private int fuelUsed;
	
	

	//Constructor
	public Travel(String travelLocation, int traveledDistance, int fuelUsed) {
		this.travelLocation = travelLocation;
		this.traveledDistance = traveledDistance;
		this.fuelUsed = fuelUsed;
	}


	public String toString() {
		return "Location: " + travelLocation + "\nDistance Travelled: " + 
		traveledDistance + "\nFuel used: " + fuelUsed + "\nConsume: "  + this.getConsume()  + " Km/l";
	}

	//getters to return the instances variables values.
	public String getTravelLocation() {
		return travelLocation;
	}

	public int getTraveledDistance() {
		return traveledDistance;
	}

	public int getFuelUsed() {
		return fuelUsed;
	}

	public double getConsume() {
		return traveledDistance / fuelUsed;
	}
}