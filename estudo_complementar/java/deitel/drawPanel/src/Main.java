import javax.swing.JFrame;

public class Main {
	public static void main(String[] args) {
		DrawPanel panel = new DrawPanel();

		JFrame app = new JFrame();

		app.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		app.add(panel);
		app.setSize(250, 250);
		app.setVisible(true);
	}
}