package BOJ;

import java.util.Scanner;

public class BOJ_4562 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		
		for(int i=1;i<=T;i++) {
			int x = sc.nextInt();
			int y = sc.nextInt();
			sc.close();
			if(x<y) {
				System.out.println("NO BRAINS");
			} else {
				System.out.println("MMM BRAINS");
			}
		}

	}

}
