package BOJ;

import java.util.Scanner;

public class BOJ_6749 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		sc.close();
		
		int oldest = b - a;
		System.out.println(b+oldest);

	}

}
