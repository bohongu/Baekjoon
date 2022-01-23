package BOJ;

import java.util.Scanner;

public class BOJ_20492 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int first, second;
		
		first = n * 78/100;
		second = n-(n*11/250);
		
		System.out.println(first+" "+second);
		

	}

}
