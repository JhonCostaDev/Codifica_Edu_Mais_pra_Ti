import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
    
        System.out.println("=========== Draw a square ===========");
        
        int size = validateInt();
        int square = size * size;
        int start = size * size;
        int end = size - (size - 1);
        
        while(square > 0) {
            if(square % size == 0) {
                System.out.println();
            }
            //if()
            System.out.print("*");   
          //System.out.println(size);
          square--;
        }
        //System.out.println(size);
        
        //between 1 and 20
    }
    
    public static int validateInt() {
        int number;
		Scanner input = new Scanner(System.in);
		System.out.println("Enter the size of the square between 1 and 20");
		while(true) {
		    if(!input.hasNextInt()){
    			System.out.println("Invalid entry. Please type a integer number between 1 and 20!");
    			input.next();
    			System.out.println("Try again!");
                continue;
						}
    		number = input.nextInt();
    		
    		if(number >= 1 && number <= 20) {
    		    break;
    		} else {
                System.out.print("Please type a integer number between 1 and 20!");
            }
		}
   
		return number;
	}
}