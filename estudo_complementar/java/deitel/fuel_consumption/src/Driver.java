import java.util.ArrayList;

public class Driver {
    private int id;
    private String name;
    private String email;
    private ArrayList<Travel> travelHistory; //will store travels of this user

    public Driver(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.travelHistory = new ArrayList<>();
    }

    public void addTravel(Travel travel) {
        travelHistory.add(travel);
    }

    public void showTravelHistory() {
        System.out.printf("History of travel by %s\n", name);
        for(Travel t : travelHistory) {
            System.out.println(t);
        }
    }

    //getters

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public ArrayList<Travel> getTravelHistory() {
        return travelHistory;
    }

}
