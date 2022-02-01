package test;

import java.util.Scanner;

public class boj13752 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		for(int i=0; i<n;i++) {
			int a = sc.nextInt();
			for(int k=0;k<a;k++) {
				System.out.print("=");
			}
			System.out.println();
			}	
	} 
}
