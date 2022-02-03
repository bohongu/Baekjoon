package baekjoon;

import java.util.Scanner;

public class BOJ_2845 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int l = sc.nextInt();
		int p = sc.nextInt();
		int sum = l*p;
		
		
		for(int i=0;i<5;i++) {
			short j = sc.nextShort();
			System.out.print(j-sum + " ");
		}

	}

}
