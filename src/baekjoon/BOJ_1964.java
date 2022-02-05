package baekjoon;

import java.util.Scanner;

public class BOJ_1964 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		long n = sc.nextLong();
		long result = 0;
		for(int i = 1;i<=n;i++) {
			result = (n+1)*(3*n + 2)/2;
		}
		System.out.println(result%45678);

	}

}
