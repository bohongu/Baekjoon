package baekjoon;

import java.util.Scanner;

public class BOJ_3003 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int king = sc.nextInt();
		int queen = sc.nextInt();
		int rook = sc.nextInt();
		int bishop = sc.nextInt();
		int knight = sc.nextInt();
		int pwun = sc.nextInt();
		
		System.out.print(1-king + " ");
		System.out.print(1-queen + " ");
		System.out.print(2-rook + " ");
		System.out.print(2-bishop + " ");
		System.out.print(2-knight + " ");
		System.out.print(8-pwun);

	}

}