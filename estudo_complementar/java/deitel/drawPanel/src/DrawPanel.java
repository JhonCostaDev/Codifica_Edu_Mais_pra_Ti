import java.awt.Graphics;
import javax.swing.JPanel;

public class DrawPanel extends JPanel{
	
	//Draw a X 
	public void paintComponent(Graphics g){
		super.paintComponent(g);

		int width = getWidth();
		int height = getHeight();

		//Draw line
		g.drawLine(0, 0, width, height);

		g.drawLine(0, height, width, 0);
	}
}