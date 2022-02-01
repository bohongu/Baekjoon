package test;

import java.util.Scanner;

public class boj9713 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		
		for(int i = 1;i<=t;i++) {
			int n = sc.nextInt();
			
			int sum = 0;
			for(int j = 1;j<=n;j++) {
				if(j%2==1) {
					sum +=j;	
				}
			}System.out.println(sum);
		}
	}
}
