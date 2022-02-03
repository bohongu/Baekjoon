package baekjoon;

import java.util.Scanner;

public class BOJ_5554 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		int c = sc.nextInt();
		int d = sc.nextInt();
		
		int second = a+b+c+d;
		
		System.out.println(second/60);
		System.out.println(second%60);

	}

}
