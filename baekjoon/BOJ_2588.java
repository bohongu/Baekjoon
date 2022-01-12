package BOJ;

import java.util.Scanner;

public class BOJ_2588 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		int a3 = a*(b%10);
		int a4 = a*((b%100)/10);
		int a5 = a*(b/100);
		System.out.println(a3);
		System.out.println(a4);
		System.out.println(a5);
		System.out.println(a*b);
		sc.close();
	}

}
