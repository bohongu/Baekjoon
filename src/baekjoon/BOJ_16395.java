package baekjoon;

import java.util.Scanner;

public class BOJ_16395 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int k = sc.nextInt();
		int[][] dp = new int[n+1][n+1];
		
		dp[1][1] = 1;
		
		for(int i=1;i<n+1;i++) {
			for(int j=1;j<n+1;j++) {
				if(i==1 && j==1) {
					dp[i][j] = 1;
				} else {
					dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
				}
			}
		}
		System.out.println(dp[n][k]);
	}
}